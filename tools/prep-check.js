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
console.log('MC key positions', pos.mc, 'longest-key', longest + '/' + mcN);
console.log('Pick key positions', pos.pick, 'Reason', pos.reason, 'Tags', tagCount);
console.log(err ? err + ' errors' : 'OK', warn + ' warnings');
process.exit(err ? 1 : 0);
