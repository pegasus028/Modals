/* Checks prep-data.js: structure, key balance, tiles = model, rule checker
   against the model answer and each item's sample answers. node tools/prep-check.js */
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const ctx = { window: {}, console };
ctx.globalThis = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'prep-data.js'), 'utf8'), ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'prep.js'), 'utf8').replace("typeof window !== 'undefined' ? window : globalThis", 'window'), ctx);
const D = ctx.window.PREP, M = ctx.window.PrepMark;
let err = 0, warn = 0; const E = m => { err++; console.log('ERROR', m); }, W = m => { warn++; console.log('warn ', m); };
const ids = new Set(); const pos = { mc: [0,0,0,0], pick: [0,0,0], reason: {A:0,B:0} }; let longest = 0, mcN = 0;
const tagCount = {};
D.tests.forEach(t => {
  let n = 0;
  t.papers.forEach(p => p.sections.forEach(s => s.items.forEach(it => {
    n++;
    if (ids.has(it.id)) E('dup id ' + it.id); ids.add(it.id);
    if (!it.why) E(it.id + ' no why');
    if (it.why && it.why.split(/\s+/).length > 35) W(it.id + ' why ' + it.why.split(/\s+/).length + ' words');
    if (s.type === 'mc') {
      if (it.options.length !== 4) E(it.id + ' needs 4 options');
      if (new Set(it.options).size !== 4) E(it.id + ' dup options');
      if (!/_{3,}/.test(it.stem)) E(it.id + ' no gap');
      pos.mc[it.answer]++; mcN++;
      const L = it.options.map(o => o.length), mx = Math.max(...L);
      if (L[it.answer] === mx && L.filter(x => x === mx).length === 1) longest++;
    }
    if (s.type === 'pick') { pos.pick[it.answer]++; if (it.answer >= it.options.length) E(it.id + ' answer range'); }
    if (s.type === 'tag') {
      const ch = s.choices.map(c => c[0]); if (!ch.includes(it.answer)) E(it.id + ' bad tag');
      tagCount[s.choices.length + it.answer] = (tagCount[s.choices.length + it.answer] || 0) + 1;
      const ns = M.norm(it.sentence);
      it.clue.forEach(c => { if (ns.indexOf(M.norm(c)) < 0) E(it.id + ' clue not in sentence: ' + c); });
    }
    if (s.type === 'reason') pos.reason[it.answer]++;
    const free = ['rewrite','deduce','reason'].includes(s.type) || (s.type === 'fix' && it.ok === false);
    if (free) {
      if (!it.model || !it.tiles) { E(it.id + ' needs model+tiles'); return; }
      if (M.tilesKey(it.tiles) !== M.norm(it.model)) E(it.id + ' tiles != model: ' + M.tilesKey(it.tiles) + ' | ' + M.norm(it.model));
      if (new Set(it.tiles).size !== it.tiles.length) E(it.id + ' duplicate tiles');
      if (it.tiles.length < 3) W(it.id + ' only ' + it.tiles.length + ' tiles');
      const lc = M.localCheck(it, it.model); if (!lc.ok) E(it.id + ' model fails rules: ' + JSON.stringify(lc));
      if (!M.gate(it, it.model)) E(it.id + ' model fails gate');
      (it.tests && it.tests.pass || []).forEach(a => { const r = M.localCheck(it, a); const g = M.gate(it,a) || s.type==='fix';
        if (!r.ok || !g) E(it.id + ' should PASS: "' + a + '" ' + JSON.stringify(r) + ' gate=' + g); });
      (it.tests && it.tests.fail || []).forEach(a => { const r = M.localCheck(it, a); const g = M.gate(it,a) || s.type==='fix';
        if (r.ok && g) E(it.id + ' should FAIL: "' + a + '"'); });
      if (it.evidence) { const c = M.copiedRun(it.model, it.evidence); if (c >= 6) W(it.id + ' model copies ' + c + ' words'); }
    }
  })));
  if (n !== 51) E(t.id + ' has ' + n + ' items');
});
/* Balance (audit of 18 Nov 2026): no key position may be learnable. */
const pick3 = [0,0,0], pick2 = [0,0];
D.tests.forEach(t => t.papers.forEach(p => p.sections.forEach(s => {
  if (s.type === 'pick') s.items.forEach(it => (it.options.length === 3 ? pick3 : pick2)[it.answer]++);
  if (s.type === 'mc' || s.type === 'pick') {
    const seq = s.items.map(it => it.answer).join('');
    if (/(\d)\1\1/.test(seq)) E(t.id + ' P' + p.code + '.' + s.code + ' same key position three times in a row');
  }
  if (s.type === 'fix') {
    const seq = s.items.map(it => it.ok ? 'C' : 'E').join('');
    if (/^E+C+$|^C+E+$/.test(seq)) E(t.id + ' P' + p.code + '.' + s.code + ' errors and correct sentences are in two blocks: ' + seq);
  }
})));
if (Math.max(...pos.mc) - Math.min(...pos.mc) > 2) E('MC key positions uneven: ' + pos.mc);
if (Math.max(...pick3) - Math.min(...pick3) > 1) E('3-option key positions uneven: ' + pick3);
if (Math.abs(pick2[0] - pick2[1]) > 2) E('2-option key positions uneven: ' + pick2);
if (Math.abs(pos.reason.A - pos.reason.B) > 2) E('Reasoning keys uneven: ' + JSON.stringify(pos.reason));
if (longest / mcN > 0.25) E('MC key is the longest option in ' + longest + '/' + mcN);
console.log('Pick keys: 3-option', pick3, '2-option', pick2);
console.log('MC key positions', pos.mc, 'longest-key', longest + '/' + mcN);
console.log('Pick key positions', pos.pick, 'Reason', pos.reason, 'Tags', tagCount);
console.log(err ? err + ' errors' : 'OK', warn + ' warnings');
process.exit(err ? 1 : 0);
