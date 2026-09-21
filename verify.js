/* ===========================================================================
   FINE TUNING — verify.js
   Offline pre-flight check. Run with:  node verify.js
   Loads content.js, the eight stage files and the three tests exactly as the
   browser does, then runs the twenty checks from the engine contract.
   Exits non-zero if anything fails, so it can gate a deploy.
   =========================================================================== */
var fs = require('fs');
var vm = require('vm');
var path = require('path');

/* Run it from anywhere: the content files sit beside this script, unless you
   are running the copy that lives one level up from the app folder. */
var DIR = fs.existsSync(path.join(__dirname, 'content.js'))
  ? __dirname : path.join(__dirname, 'app');
var FILES = [
  'content.js',
  'topic-s1.js', 'topic-s2.js', 'topic-s3.js', 'topic-s4.js',
  'topic-s5.js', 'topic-s6.js', 'topic-s7.js', 'topic-s8.js',
  'media.js',
  'test-1.js', 'test-2.js', 'test-3.js',
  'content-export.js'
];

var ctx = { window: {}, console: console };
vm.createContext(ctx);
FILES.forEach(function (f) {
  var p = path.join(DIR, f);
  if (!fs.existsSync(p)) { console.error('MISSING FILE: ' + f); process.exit(1); }
  try { vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f }); }
  catch (e) { console.error('THROWS: ' + f + ' — ' + e.message); process.exit(1); }
});

var C = ctx.window.CONTENT;
var errs = [], warns = [];
function err(m) { errs.push(m); }
function warn(m) { warns.push(m); }

var ART_OK = ['chip', 'layers', 'stack', 'clock', 'signal', 'grid', 'lexicon', 'scope', 'sim'];
var TYPES = ['choose', 'equiv', 'gap', 'cloze', 'read', 'spot', 'order', 'sort', 'build', 'judge', 'table'];
var MOCK_TYPES = ['choose', 'equiv', 'cloze', 'read', 'gap', 'spot', 'table'];
var ESCAPED_FIELDS_NO_HTML = /<\/?[a-z][^>]*>/i;

var ids = {}, tagsUsed = {}, tagsOnModuleItems = {}, typeCount = {}, levelCount = 0;
var keyPos = [0, 0, 0, 0];
var moduleItems = 0, checkItems = 0, mockItems = 0;

function seeId(id, where) {
  if (!id) return err('item with no id in ' + where);
  if (ids[id]) err('DUPLICATE id "' + id + '" (' + ids[id] + ' and ' + where + ')');
  ids[id] = where;
}

function checkItem(it, where, opts) {
  opts = opts || {};
  seeId(it.id, where);
  if (!it.type) err(it.id + ': no type');
  else if (TYPES.indexOf(it.type) < 0) err(it.id + ': unknown type "' + it.type + '"');
  typeCount[it.type] = (typeCount[it.type] || 0) + 1;
  if (!it.tag) err(it.id + ': no tag');
  else {
    tagsUsed[it.tag] = (tagsUsed[it.tag] || 0) + 1;
    if (!C.REMEDIATION[it.tag]) err(it.id + ': tag "' + it.tag + '" is not in REMEDIATION');
    if (opts.module) tagsOnModuleItems[it.tag] = true;
  }
  if (!it.level) err(it.id + ': no level (CEFR band)');
  else if (C.CEFR.indexOf(it.level) < 0) warn(it.id + ': level "' + it.level + '" is not one of ' + C.CEFR.join('/'));
  if (!it.why) err(it.id + ': no why');

  /* answer encoding */
  if (it.type === 'judge') {
    if ([0, 1, 2].indexOf(it.answer) < 0) err(it.id + ': judge answer must be 0, 1 or 2');
    if (it.options) err(it.id + ': judge must not carry an options array');
  } else if (it.type === 'spot') {
    if (!Array.isArray(it.words) || !it.words.length) err(it.id + ': spot needs words[]');
    else if (!(it.answer >= 0 && it.answer < it.words.length)) err(it.id + ': spot answer out of range');
    if (!it.fix) err(it.id + ': spot has no fix');
    (it.words || []).forEach(function (w) {
      if (ESCAPED_FIELDS_NO_HTML.test(w)) err(it.id + ': HTML inside spot words[] (that field is escaped)');
    });
  } else if (it.type === 'order') {
    if (!Array.isArray(it.items) || it.items.length < 3) err(it.id + ': order needs at least 3 items');
    if ('answer' in it) err(it.id + ': order must NOT have an answer field — the array order is the key');
    (it.items || []).forEach(function (s) {
      if (ESCAPED_FIELDS_NO_HTML.test(s)) err(it.id + ': HTML inside order items[] (rendered as text)');
    });
  } else if (it.type === 'sort') {
    if (!Array.isArray(it.bins) || !it.bins.length) err(it.id + ': sort needs bins[]');
    var keys = (it.bins || []).map(function (b) { return b.key; });
    (it.items || []).forEach(function (c) {
      if (keys.indexOf(c.bin) < 0) err(it.id + ': sort card "' + c.text + '" has bin "' + c.bin + '" which is not declared');
    });
    (it.bins || []).forEach(function (b) {
      if (b.hint && ESCAPED_FIELDS_NO_HTML.test(b.hint)) err(it.id + ': HTML inside bins[].hint (escaped)');
    });
  } else if (it.type === 'build') {
    if (!Array.isArray(it.tiles) || !it.tiles.length) err(it.id + ': build needs tiles[]');
    if (!it.solution) err(it.id + ': build needs a solution');
    (it.tiles || []).forEach(function (t) {
      if (ESCAPED_FIELDS_NO_HTML.test(t)) err(it.id + ': HTML inside build tiles[] (textContent)');
    });
    /* Tiles may be multi-word chunks, so compare word multisets, not tile lists.
       The engine checks norm(assembled) === norm(solution), so every word of the
       solution must be somewhere in the tiles and nothing else may be. */
    var words = function (s) {
      return String(s).toLowerCase().replace(/[\u2019']/g, "'")
        .replace(/[.,!?;:]/g, '').split(/\s+/).filter(Boolean).sort().join('|');
    };
    var a = words((it.tiles || []).join(' '));
    if (words(it.solution) !== a) err(it.id + ': the tiles do not contain exactly the words of the solution');
    (it.alt || []).forEach(function (x) {
      if (words(x) !== a) err(it.id + ': alt "' + x + '" does not use exactly the tiles');
    });
  } else {
    if (!Array.isArray(it.options) || it.options.length < 2) err(it.id + ': ' + it.type + ' needs options[]');
    else if (!(it.answer >= 0 && it.answer < it.options.length)) err(it.id + ': answer index out of range');
    if (it.options && it.options.length === 4) keyPos[it.answer]++;
  }

  /* The engine numbers options 1..n on screen. A `why` that counts from zero
     sends the student to the wrong option after a wrong answer — invisible in
     the data, glaring on the page. */
  if (it.options && it.why) {
    var oref = /\boptions?\s+((?:\d+\s*(?:,|and|or|\/|\u2013|-|\s)\s*)*\d+)/gi, mm;
    while ((mm = oref.exec(it.why))) {
      (mm[1].match(/\d+/g) || []).forEach(function (d) {
        var n = +d;
        if (n < 1 || n > it.options.length) {
          err(it.id + ': the why points at "option ' + n + '", but the options are numbered 1\u2013' + it.options.length);
        }
      });
    }
  }

  /* gap and cloze markers */
  if (it.type === 'cloze' || it.type === 'gap') {
    if (!it.blank) err(it.id + ': no blank');
    else if (!/^\(\d+\)$/.test(it.blank)) err(it.id + ': blank "' + it.blank + '" must look like (6), parentheses included');
    var text = it.type === 'cloze' ? String(it.passage || '')
      : (it.lines || []).map(function (l) { return l.text; }).join(' ');
    var want = '___' + it.blank.replace('(', '(').replace(')', ')') + '___';
    if (text.indexOf('___' + it.blank + '___') < 0) err(it.id + ': the marker ___' + it.blank + '___ does not appear in the text');
    var stripped = text.replace(/___\(\d+\)___/g, '');
    if (stripped.indexOf('___') >= 0) warn(it.id + ': a bare ___ in the text renders as "?"');
  }

  /* escaped fields must be plain */
  ['passage', 'source'].forEach(function (f) {
    if (it[f] && ESCAPED_FIELDS_NO_HTML.test(it[f])) err(it.id + ': HTML inside ' + f + ' (that field is escaped — use \\n\\n for a paragraph)');
  });
  (it.lines || []).forEach(function (l) {
    if (ESCAPED_FIELDS_NO_HTML.test(l.text) || ESCAPED_FIELDS_NO_HTML.test(l.who)) err(it.id + ': HTML inside a dialogue line (escaped)');
  });
}

/* Names, codes, blurbs and bands are printed with esc(), so any markup in them
   shows as literal <em> on screen. This is the easiest mistake to make and the
   most visible, so it is an error, not a warning. */
function plain(o, fields, where) {
  fields.forEach(function (f) {
    if (o && o[f] && ESCAPED_FIELDS_NO_HTML.test(String(o[f]))) {
      err(where + '.' + f + ': HTML here is printed literally \u2014 this field is escaped');
    }
  });
}

/* ------------------------------------------------------------------ topics */
if (!C || !C.TOPICS) { console.error('window.CONTENT.TOPICS is missing'); process.exit(1); }
C.TOPICS.forEach(function (t) {
  var w = t.id;
  ['id', 'n', 'code', 'art', 'name', 'cefr', 'blurb'].forEach(function (f) {
    if (t[f] === undefined || t[f] === '') err(w + ': topic has no ' + f);
  });
  if (ART_OK.indexOf(t.art) < 0) err(w + ': art "' + t.art + '" is not one of ' + ART_OK.join('/'));
  plain(t, ['name', 'code', 'blurb', 'cefr'], w);
  if (!t.levels || !t.levels.length) return err(w + ': no levels');
  t.levels.forEach(function (lv) {
    levelCount++;
    ['id', 'n', 'name', 'cefr'].forEach(function (f) {
      if (lv[f] === undefined || lv[f] === '') err(lv.id + ': level has no ' + f);
    });
    plain(lv, ['name', 'cefr', 'blurb'], lv.id);
    if (!lv.subs || !lv.subs.length) return err(lv.id + ': no subs');
    if (lv.subs.length !== 3) warn(lv.id + ': ' + lv.subs.length + ' modules — the UI copy says "all three modules"');
    lv.subs.forEach(function (s) {
      ['id', 'name', 'cefr'].forEach(function (f) {
        if (!s[f]) err(s.id + ': module has no ' + f);
      });
      plain(s, ['name', 'cefr'], s.id);
      if (!s.theory) err(s.id + ': no theory — the app throws on this');
      else {
        if (!s.theory.key) err(s.id + ': theory has no key');
        if (!Array.isArray(s.theory.body) || !s.theory.body.length) err(s.id + ': theory has no body');
        if (!s.theory.simple) warn(s.id + ': no theory.simple — the "explain simply" button will do nothing');
        (s.theory.examples || []).forEach(function (x, i) {
          if (!x.s || !x.g) err(s.id + ': example ' + (i + 1) + ' needs both s and g');
          else if (ESCAPED_FIELDS_NO_HTML.test(x.g)) err(s.id + ': HTML inside examples[' + i + '].g (escaped)');
        });
      }
      if (!s.items || !s.items.length) return err(s.id + ': no items');
      if (s.items.length !== 5) warn(s.id + ': ' + s.items.length + ' items (5 is the house size; the 60% pass mark assumes it)');
      s.items.forEach(function (it) { moduleItems++; checkItem(it, s.id, { module: true }); });
    });
    if (!lv.check) return err(lv.id + ': NO CHECK — engine.js throws at load');
    if (!lv.check.id || !lv.check.name) err(lv.id + ': check needs an id and a name');
    plain(lv.check, ['name'], lv.check.id);
    if (!lv.check.items || !lv.check.items.length) err(lv.id + ': check has no items');
    else {
      if (lv.check.items.length !== 6) warn(lv.check.id + ': ' + lv.check.items.length + ' items (6 is the house size)');
      lv.check.items.forEach(function (it) { checkItems++; checkItem(it, lv.check.id, {}); });
    }
  });
});

/* ------------------------------------------------------------------- mocks */
(C.MOCKS || []).forEach(function (m) {
  ['id', 'name', 'minutes'].forEach(function (f) {
    if (!m[f]) err('mock ' + m.id + ': no ' + f);
  });
  plain(m, ['name', 'blurb'], m.id);
  if (!m.sections || !m.sections.length) return err('mock ' + m.id + ': no sections');
  var codes = {}, marks = 0, n = 0;
  m.sections.forEach(function (sec) {
    ['code', 'part', 'title', 'instructions'].forEach(function (f) {
      if (!sec[f]) err(m.id + '/' + sec.code + ': section has no ' + f);
    });
    plain(sec, ['part', 'title', 'instructions'], m.id + '/' + sec.code);
    if (sec.part && sec.part.indexOf('PART ') !== 0) warn(m.id + '/' + sec.code + ': part should begin with "PART "');
    if (typeof sec.points !== 'number') err(m.id + '/' + sec.code + ': section needs numeric points');
    if (codes[sec.code]) err(m.id + ': two sections share the code "' + sec.code + '" — their scores will merge');
    codes[sec.code] = 1;
    if (sec.instructions && ESCAPED_FIELDS_NO_HTML.test(sec.instructions)) err(m.id + '/' + sec.code + ': HTML in instructions (escaped)');
    (sec.items || []).forEach(function (it) {
      mockItems++; n++; marks += sec.points;
      if (MOCK_TYPES.indexOf(it.type) < 0) err(it.id + ': type "' + it.type + '" cannot record an answer in a test — use ' + MOCK_TYPES.join('/'));
      checkItem(it, m.id + '/' + sec.code, {});
      if (!/^[a-z0-9]+-\d+$/.test(String(it.id))) warn(it.id + ': test item ids should look like m1-7');
    });
  });
  console.log('  ' + m.id + ' "' + m.name + '": ' + n + ' items, ' + marks + ' marks, ' + m.minutes + ' min');
  if (m.total && m.total !== marks) warn(m.id + ': declared total ' + m.total + ' but the sections sum to ' + marks + ' (the app uses the computed figure)');
});

/* ------------------------------------------------------- cross-cutting */
Object.keys(C.REMEDIATION).forEach(function (tag) {
  if (!tagsUsed[tag]) err('REMEDIATION tag "' + tag + '" is never used — tag coverage can never reach 100%');
});
Object.keys(tagsUsed).forEach(function (tag) {
  if (!tagsOnModuleItems[tag]) err('tag "' + tag + '" is only used in checks/tests — a miss on it will route the student nowhere');
});
var topRank = C.RANKS[C.RANKS.length - 1];
if (C.RANKS[0].min !== 0) err('RANKS must start at min 0');
if (topRank.min !== levelCount) err('the top rank needs min ' + levelCount + ' (one per stage check), not ' + topRank.min);
var BADGE_IDS = ['poweron', 'streak3', 'streak7', 'streak14', 'allgreen', 'triple', 'nohelp',
  'recovered', 'run10', 'reflight', 'quick', 'sim1', 'sim70', 'simall', 'director'];
var got = C.BADGES.map(function (b) { return b.id; });
BADGE_IDS.forEach(function (b) { if (got.indexOf(b) < 0) err('badge "' + b + '" is missing — it can never be awarded'); });
got.forEach(function (b) { if (BADGE_IDS.indexOf(b) < 0) err('badge "' + b + '" has no test in engine.js — it will show as permanently locked'); });

/* media keys must be topic ids */
var topicIds = C.TOPICS.map(function (t) { return t.id; });
Object.keys(ctx.MEDIA || {}).forEach(function (k) {
  if (topicIds.indexOf(k) < 0) err('MEDIA key "' + k + '" is not a stage id');
});
topicIds.forEach(function (id) {
  if (!(ctx.MEDIA || {})[id]) warn('no MEDIA entry for stage ' + id);
});

/* Keys bunched on one position let a student score by habit rather than by
   grammar. rebalance.js fixes this; the check stops it drifting back. */
(function () {
  var n = keyPos[0] + keyPos[1] + keyPos[2] + keyPos[3];
  if (n < 40) return;
  keyPos.forEach(function (c, i) {
    var share = c / n;
    if (share > 0.33) warn('option ' + (i + 1) + ' holds ' + Math.round(share * 100) +
      '% of the four-option keys (' + c + ' of ' + n + ') \u2014 run rebalance.js');
    if (share < 0.17) warn('option ' + (i + 1) + ' holds only ' + Math.round(share * 100) +
      '% of the four-option keys (' + c + ' of ' + n + ') \u2014 run rebalance.js');
  });
})();

/* ------------------------------------------------------------------ report */
console.log('');
console.log('stages ' + C.TOPICS.length + ' · levels ' + levelCount + ' · modules ' + (levelCount * 3) +
  ' · checks ' + levelCount + ' · tests ' + (C.MOCKS || []).length);
console.log('items: ' + moduleItems + ' module + ' + checkItems + ' check + ' + mockItems + ' test = ' +
  (moduleItems + checkItems + mockItems));
console.log('tags: ' + Object.keys(C.REMEDIATION).length + ' declared, ' + Object.keys(tagsUsed).length + ' used');
console.log('keys at option 1/2/3/4: ' + keyPos.join(' / '));
console.log('types: ' + Object.keys(typeCount).sort().map(function (k) { return k + ' ' + typeCount[k]; }).join(' · '));
console.log('');
warns.forEach(function (w) { console.log('WARN  ' + w); });
errs.forEach(function (e) { console.log('ERROR ' + e); });
console.log('');
console.log(errs.length ? (errs.length + ' error(s), ' + warns.length + ' warning(s) — NOT READY')
  : ('CLEAN' + (warns.length ? ' — ' + warns.length + ' warning(s) to look at' : '')));
process.exit(errs.length ? 1 : 0);
