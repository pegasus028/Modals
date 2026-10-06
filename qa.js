/* ===========================================================================
   FINE TUNING — qa.js
   Content checks that the October 2026 audit turned into rules, so the same
   defects cannot come back quietly. Run with:  node qa.js
   verify.js checks structure; this checks meaning-level patterns that a
   machine can still catch. ERRORS fail the run; WARNINGS are for a human.

   Checks
    1. spot stem must ask for a mistake (the widget is "Identify the error")
    2. spot fix must not leave a doubled word ("to to", "slept slept")
    3. sort box hint shares a distinctive word with one of its own chips
    4. sort chip contains its own box's label word
    5. two options identical (or identical once tags/case are stripped)
    6. disputed pairs keyed against each other (teacher's modal-verbs rules):
       may ↔ might, can't have ↔ couldn't have — a distractor that is the key
       with only that word swapped
    7. mustn't used as a KEY in a deduction (certainty) item
    8. -s form after a mandative trigger used as a distractor or keyed error
       (informal British English accepts it, so it is never "the wrong one")
    9. principle (the student Hint) quotes an item's key in the same frame
   10. held-out test item copies a lesson item's stem / given / build solution
   11. Thai glosses: ไม่ต้อง must not gloss mustn't; ต้องไม่ must not gloss
       don't have to / needn't; could have must never be glossed ควรจะ
   12. certainty percentages finer than the coursebook's 50 / 90
   13. male student / peer names (Satriwithaya is an all-girls school) — warn
   =========================================================================== */
var fs = require('fs'), vm = require('vm'), path = require('path');
var DIR = __dirname;
var FILES = ['content.js', 'topic-s1.js', 'topic-s2.js', 'topic-s3.js', 'topic-s4.js', 'topic-s5.js',
  'topic-s6.js', 'topic-s7.js', 'topic-s8.js', 'topic-s9.js', 'topic-s10.js', 'media.js',
  'test-1.js', 'test-2.js', 'test-3.js', 'content-export.js', 'lenses.js', 'lab-data.js'];
var ctx = { window: {}, console: console };
ctx.window = ctx; vm.createContext(ctx);
FILES.forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(DIR, f), 'utf8'), ctx, { filename: f }); });
var C = ctx.CONTENT, L = ctx.LENSES || {}, LAB = ctx.LAB || {}, CARDS = ctx.MODAL_CARDS || [];

var errs = [], warns = [];
function err(m) { errs.push(m); }
function warn(m) { warns.push(m); }
function strip(s) { return String(s == null ? '' : s).replace(/<[^>]+>/g, '').replace(/[’‘]/g, "'"); }
function norm(s) { return strip(s).toLowerCase().replace(/[.,!?;:"“”]/g, '').replace(/\s+/g, ' ').trim(); }

/* collect items with where they live */
var lesson = [], tests = [];
(C.TOPICS || []).forEach(function (t) {
  t.levels.forEach(function (lv) {
    lv.subs.forEach(function (s) { (s.items || []).forEach(function (it) { lesson.push(it); }); });
    ((lv.check || {}).items || lv.checkItems || []).forEach(function (it) { lesson.push(it); });
  });
});
(function walk(n, seen) {
  if (!n || typeof n !== 'object' || seen.indexOf(n) >= 0) return; seen.push(n);
  if (Array.isArray(n)) return n.forEach(function (x) { walk(x, seen); });
  if (typeof n.id === 'string' && typeof n.type === 'string' && /^m\d/.test(n.id)) tests.push(n);
  for (var k in n) walk(n[k], seen);
})(C.MOCKS, []);
var all = lesson.concat(tests);
/* fall back: anything with id+type anywhere in TOPICS that the shape above missed */
(function walk(n, seen) {
  if (!n || typeof n !== 'object' || seen.has(n)) return; seen.add(n);
  if (Array.isArray(n)) return n.forEach(function (x) { walk(x, seen); });
  if (typeof n.id === 'string' && typeof n.type === 'string' && n.tag && all.indexOf(n) < 0) { lesson.push(n); all.push(n); }
  for (var k in n) walk(n[k], seen);
})(C.TOPICS, new Set());

var STOP = ('the a an and or but of to in on at for by with from is are was were be been it its this that these ' +
  'those you your he she they we i not no as if so than then there their them his her our my me us do does did ' +
  'have has had will would can could may might must shall should ought need one two who what which when where').split(' ');
function contentWords(s) {
  return norm(s).split(' ').filter(function (w) { return w.length > 3 && STOP.indexOf(w) < 0; });
}
function keyText(it) {
  if (Array.isArray(it.options) && typeof it.answer === 'number') return strip(it.options[it.answer]);
  if (it.type === 'spot') return strip(it.fix);
  if (it.type === 'build') return strip(it.solution);
  return '';
}
var EPI_TAGS = /^(epi-|past-deduce|past-weak|u5-guess|tc-deduce|sys-clues)/;
var MANDATIVE = /\b(recommend|recommended|suggest|suggested|insist|insisted|demand|demanded|request|requested|propose|proposed|require|required|ask|asked|essential|vital|important)\b[^.]{0,40}\bthat\s*$/i;

all.forEach(function (it) {
  var id = it.id;
  /* 1, 2 */
  if (it.type === 'spot') {
    if (it.stem && !/mistake|error|wrong|incorrect|problem|fault|fix|correct|overclaim|redundant|pile-up|hedges far|not been earned|find it/i.test(strip(it.stem)))
      err(id + ': spot stem does not ask for a mistake');
    var after = /^delete/i.test(strip(it.fix)) ? it.words.filter(function (w, k) { return k !== it.answer; })
      : it.words.map(function (w, k) { return k === it.answer ? it.fix : w; });
    var m = norm(after.join(' ')).match(/\b(\w+) \1\b/);
    if (m && ['that', 'had', 'is'].indexOf(m[1]) < 0) err(id + ': fix leaves a doubled word "' + m[0] + '"');
  }
  /* 3, 4 */
  if (it.type === 'sort') {
    it.bins.forEach(function (b) {
      var hint = contentWords(b.hint || ''), label = norm(b.label || '');
      it.items.filter(function (x) { return x.bin === b.key; }).forEach(function (x) {
        var cw = contentWords(x.text);
        var shared = hint.filter(function (w) { return cw.indexOf(w) >= 0; });
        if (shared.length) warn(id + ': box "' + strip(b.label) + '" hint shares "' + shared[0] + '" with its own chip');
        if (label.length > 3 && label.split(' ').length <= 3 && norm(x.text).indexOf(label) >= 0)
          err(id + ': chip "' + strip(x.text) + '" contains its own box label "' + label + '"');
      });
    });
  }
  if (Array.isArray(it.options) && typeof it.answer === 'number') {
    var opts = it.options.map(norm), key = opts[it.answer];
    /* 5 */
    opts.forEach(function (o, i) { opts.forEach(function (p, j) { if (i < j && o === p) err(id + ': options ' + (i + 1) + ' and ' + (j + 1) + ' are identical'); }); });
    /* 6 */
    [[/\bmay\b/g, 'might'], [/\bmight\b/g, 'may'], [/\bcan't have\b|\bcannot have\b/g, "couldn't have"], [/\bcouldn't have\b/g, "can't have"]].forEach(function (sw) {
      if (!sw[0].test(key)) return; sw[0].lastIndex = 0;
      var swapped = key.replace(sw[0], sw[1]);
      opts.forEach(function (o, i) { if (i !== it.answer && o === swapped) err(id + ': key and option ' + (i + 1) + ' differ only by a disputed pair (' + sw[1] + ')'); });
    });
    /* 7 */
    var hasGap = /_{3,}/.test(strip(it.stem) + ' ' + strip(it.passage) + (it.lines || []).map(function (l) { return l.text; }).join(' '));
    if (hasGap && EPI_TAGS.test(it.tag || '') && /\bmustn't\b|\bmust not\b/.test(key)) err(id + ': mustn\'t keyed for a deduction');
    /* 8 */
    var gapLine = (it.lines || []).filter(function (l) { return /_{3,}/.test(l.text); })[0];
    var before = strip(gapLine ? gapLine.text : (it.stem || '')).split(/_{3,}/)[0];
    if (MANDATIVE.test(before)) opts.forEach(function (o, i) {
      if (i !== it.answer && /^(?!is\b|was\b|has\b|does\b)[a-z]+[^s]s\b/.test(o) && !/^(must|should|will|would|to)\b/.test(o))
        err(id + ': -s form "' + o + '" used as a wrong option after a mandative trigger');
    });
  }
  if (it.type === 'spot' && /\bthat\b[^.]*$/.test(norm(it.words.slice(0, it.answer).join(' '))) &&
      /\b(recommend|suggest|insist|demand|request|propos|requir)\w*\b/i.test(it.words.slice(0, it.answer).join(' '))) {
    var w0 = norm(it.words[it.answer]).split(' ');
    if (w0.some(function (w) { return /^[a-z]+[^s]s$/.test(w) && ['his', 'this', 'its', 'was', 'has', 'does', 'is'].indexOf(w) < 0; }) && norm(it.fix).indexOf('to ') < 0)
      warn(id + ': keyed error after a mandative trigger may be an -s form (check it is not the only fault)');
  }
});

/* 9 hint giveaway: a key of 4+ words (shorter keys are just the form's name) that appears verbatim in its tag's principle */
var REM = C.REMEDIATION || {};
all.forEach(function (it) {
  var r = REM[it.tag]; if (!r) return;
  var k = norm(keyText(it));
  if (k.split(' ').length >= 4 && norm(r.principle).indexOf(k) >= 0) err(it.id + ': the Hint for ' + it.tag + ' quotes the key "' + k + '"');
  if (k.split(' ').length >= 4 && norm(r.name).indexOf(k) >= 0) err(it.id + ': the Hint title for ' + it.tag + ' quotes the key "' + k + '"');
});

/* 10 held-out tests vs lessons */
var seen = {};
lesson.forEach(function (it) {
  ['given', 'stem'].forEach(function (f) { var v = norm(it[f]); if (v.split(' ').length >= 6) seen[f + ':' + v] = it.id; });
  if (it.type === 'build') seen['sol:' + norm(it.solution)] = it.id;
  if (it.type === 'spot') seen['spot:' + norm(it.words.join(' '))] = it.id;
});
tests.forEach(function (it) {
  ['given', 'stem'].forEach(function (f) { var v = norm(it[f]); if (seen[f + ':' + v] && !/^(in which|which|choose|one of)/.test(v)) err(it.id + ': test ' + f + ' copies lesson item ' + seen[f + ':' + v]); });
  if (it.type === 'build' && seen['sol:' + norm(it.solution)]) err(it.id + ': test build solution copies ' + seen['sol:' + norm(it.solution)]);
  if (it.type === 'spot' && seen['spot:' + norm(it.words.join(' '))]) err(it.id + ': test spot sentence copies ' + seen['spot:' + norm(it.words.join(' '))]);
});

/* 11, 12 over every student-facing text: items, hints, lenses, lab, cards */
var texts = [];
all.forEach(function (it) { texts.push([it.id, JSON.stringify(it)]); });
Object.keys(REM).forEach(function (k) { texts.push(['hint ' + k, strip(REM[k].name) + ' ' + strip(REM[k].principle)]); });
Object.keys(L).forEach(function (k) { texts.push(['lens ' + k, JSON.stringify(L[k])]); });
Object.keys(LAB).forEach(function (k) { (Array.isArray(LAB[k]) ? LAB[k] : []).forEach(function (x) { texts.push(['lab ' + (x.id || k), JSON.stringify(x)]); }); });
CARDS.forEach(function (c) { texts.push(['card ' + c[0] + ' (' + c[1] + ')', JSON.stringify(c)]); });
texts.forEach(function (t) {
  var s = strip(t[1]);
  if (/could(n't)? have[^฀-๿]{0,60}ควรจะ|ควรจะ[^.]{0,30}could have/i.test(s) && !/should have/.test(s.match(/could have[^฀-๿]{0,60}ควรจะ/i) || ''))
    err(t[0] + ': could have glossed as ควรจะ');
  if (/mustn't[^฀-๿]{0,25}ไม่ต้อง/.test(s)) err(t[0] + ': mustn\'t glossed as ไม่ต้อง (that is don\'t have to)');
  if (/(don't have to|needn't|don't need to)[^฀-๿]{0,25}ต้องไม่/.test(s)) err(t[0] + ': don\'t have to glossed as ต้องไม่ (that is mustn\'t)');
  var pct = s.match(/\b(\d{1,3}) ?(%|per cent)/g) || [];
  pct.forEach(function (p) {
    var n = parseInt(p, 10);
    if ([10, 50, 90, 100].indexOf(n) < 0 && /\b(sure|certain|likely|possib|may|might|must|should|confiden)/i.test(s.slice(Math.max(0, s.indexOf(p) - 80), s.indexOf(p) + 40)))
      warn(t[0] + ': certainty number "' + p + '" (the coursebook guide is only ~50% / ~90%)');
  });
});

/* 13 male peers */
var MALE = /\b(Tom|Ben|Sam|Jack|Dan|Josh|Tim|Anan|Krit|Kittipong|Teerapat|Bank|Golf|Boy|Arthit|Tee|Nat|Peter|John)\b/;
all.forEach(function (it) {
  var s = strip(JSON.stringify(it));
  var m = s.match(MALE);
  if (m && /\b(classmate|friend|class|school|teen|fifteen|sixteen|seventeen|M\.?[1-6]\b|homework|exam)\b/i.test(s))
    warn(it.id + ': male name "' + m[1] + '" in a school/peer context (all-girls school)');
});

warns.forEach(function (w) { console.log('warn  ' + w); });
errs.forEach(function (e) { console.log('FAIL  ' + e); });
console.log('\nqa: ' + all.length + ' items (' + tests.length + ' in tests), ' + Object.keys(L).length + ' lenses, ' +
  CARDS.length + ' cards — ' + errs.length + ' error(s), ' + warns.length + ' warning(s)');
process.exit(errs.length ? 1 : 0);
