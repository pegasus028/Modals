/* ===========================================================================
   FINE TUNING — rebalance.js
   The keys of the multiple-choice items were badly bunched: across the eight
   stage files, more than half sat at option 2 and almost none at option 4.
   A student who notices that can score without reading the grammar, which is
   the same fault the review found in the option sets themselves.

   This moves keys around until the four positions are evenly used. It only
   touches items whose `why` never refers to an option by number or by
   position, so no explanation can be made untrue by the move; it swaps two
   options and updates `answer`, so no wording changes at all.

   node rebalance.js          report only
   node rebalance.js --write  apply
   =========================================================================== */
var fs = require('fs');
var path = require('path');
var vm = require('vm');

var DIR = fs.existsSync(path.join(__dirname, 'content.js')) ? __dirname : path.join(__dirname, 'app');
var STAGE_FILES = ['topic-s1.js', 'topic-s2.js', 'topic-s3.js', 'topic-s4.js',
  'topic-s5.js', 'topic-s6.js', 'topic-s7.js', 'topic-s8.js'];
var ALL = ['content.js'].concat(STAGE_FILES, ['media.js', 'test-1.js', 'test-2.js', 'test-3.js', 'content-export.js']);
var WRITE = process.argv.indexOf('--write') >= 0;

var MCQ = ['choose', 'equiv', 'cloze', 'read', 'gap'];

/* A `why` is safe to leave alone only if it never points at a position. */
var NUMBERED = /\boptions?\s+\d/i;
var WORDED = new RegExp(
  '\\b(first|second|third|fourth|fifth|last|final)\\s+' +
  '(option|choice|answer|sentence|version|rewrite|one|two|three|four)\\b' +
  '|\\bthe (former|latter)\\b' +
  '|\\boption\\s+(one|two|three|four)\\b' +
  '|\\b(top|bottom)\\s+option\\b', 'i');

var ctx = { window: {}, console: console };
vm.createContext(ctx);
ALL.forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(DIR, f), 'utf8'), ctx, { filename: f }); });
var C = ctx.window.CONTENT;

/* -------------------------------------------------- gather the stage items */
var items = [];
C.TOPICS.forEach(function (t) {
  t.levels.forEach(function (lv) {
    lv.subs.forEach(function (s) { s.items.forEach(function (i) { items.push(i); }); });
    lv.check.items.forEach(function (i) { items.push(i); });
  });
});
items = items.filter(function (it) { return MCQ.indexOf(it.type) >= 0 && it.options && it.options.length === 4; });

function eligible(it) { return !NUMBERED.test(it.why) && !WORDED.test(it.why); }

var dist = [0, 0, 0, 0];
items.forEach(function (it) { dist[it.answer]++; });
console.log('before: ' + dist.join(' / ') + '   (' + items.length + ' items, ' +
  items.filter(eligible).length + ' of them movable)');

/* ---------------------------------------------------------------- the plan
   Walk the positions that are over target, moving movable items off them to
   whichever position is furthest under target. */
var target = Math.round(items.length / 4);
var byPos = [[], [], [], []];
items.forEach(function (it) { if (eligible(it)) byPos[it.answer].push(it); });
byPos.forEach(function (a) { a.sort(function (x, y) { return x.id < y.id ? -1 : 1; }); });

var moves = {};
var guard = 0;
while (guard++ < 5000) {
  var over = -1, under = -1;
  for (var i = 0; i < 4; i++) {
    if (dist[i] > target && byPos[i].length && (over < 0 || dist[i] > dist[over])) over = i;
    if (dist[i] < target && (under < 0 || dist[i] < dist[under])) under = i;
  }
  if (over < 0 || under < 0) break;
  var it = byPos[over].shift();
  moves[it.id] = { from: over, to: under };
  dist[over]--; dist[under]++;
  byPos[under].push(it);
}
console.log('after:  ' + dist.join(' / ') + '   (' + Object.keys(moves).length + ' keys moved)');

if (!WRITE) { console.log('\ndry run — pass --write to apply'); process.exit(0); }

/* ------------------------------------------------------------- apply them
   Swap two option literals in the source text and update `answer`. Only the
   order changes; every character of every option is preserved. */
function stringSpans(src, from, to) {
  var out = [], i = from;
  while (i < to) {
    var ch = src[i];
    if (ch === "'") {
      var start = i; i++;
      while (i < to) {
        if (src[i] === '\\') { i += 2; continue; }
        if (src[i] === "'") { i++; break; }
        i++;
      }
      out.push([start, i]);
      continue;
    }
    i++;
  }
  return out;
}

var changed = 0;
STAGE_FILES.forEach(function (f) {
  var p = path.join(DIR, f);
  var src = fs.readFileSync(p, 'utf8');
  var parts = src.split(/(?=\bid:\s*')/);
  var touched = false;

  parts = parts.map(function (blk) {
    var m = /^id:\s*'([^']+)'/.exec(blk);
    if (!m || !moves[m[1]]) return blk;
    var mv = moves[m[1]];

    var oi = blk.indexOf('options:');
    if (oi < 0) { console.log('  !! ' + m[1] + ': no options array'); return blk; }
    var ob = blk.indexOf('[', oi);
    var depth = 0, oe = ob;
    for (; oe < blk.length; oe++) {
      if (blk[oe] === '[') depth++;
      else if (blk[oe] === ']') { depth--; if (!depth) break; }
    }
    var spans = stringSpans(blk, ob, oe);
    if (spans.length !== 4) { console.log('  !! ' + m[1] + ': found ' + spans.length + ' option literals'); return blk; }

    var a = spans[mv.from], b = spans[mv.to];
    var lo = a[0] < b[0] ? a : b, hi = a[0] < b[0] ? b : a;
    var loText = blk.slice(lo[0], lo[1]), hiText = blk.slice(hi[0], hi[1]);
    blk = blk.slice(0, lo[0]) + hiText + blk.slice(lo[1], hi[0]) + loText + blk.slice(hi[1]);

    var before = blk;
    blk = blk.replace(/(\banswer:\s*)(\d+)/, function (mm, pre) { return pre + mv.to; });
    if (blk === before) { console.log('  !! ' + m[1] + ': answer not rewritten'); }
    touched = true; changed++;
    return blk;
  });

  if (touched) { fs.writeFileSync(p, parts.join(''), 'utf8'); console.log('  wrote ' + f); }
});
console.log('\n' + changed + ' item(s) rewritten');
