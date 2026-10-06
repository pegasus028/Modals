/* ===========================================================================
   FINE TUNING — render-test.js
   Mounts every single item in the app through the real renderer in engine.js,
   inside a headless DOM, and then answers each one the way a student would.
   It proves three things that verify.js cannot:
     · every item actually draws without throwing
     · the correct answer is accepted as correct
     · a wrong answer is rejected

   Needs jsdom:   npm install jsdom
   Run:           node render-test.js
   =========================================================================== */
var fs = require('fs');
var path = require('path');
var vm = require('vm');
var JSDOM;
try { JSDOM = require('jsdom').JSDOM; }
catch (e) { console.error('This test needs jsdom:  npm install jsdom'); process.exit(1); }

/* Run it from anywhere: the content files sit beside this script, unless you
   are running the copy that lives one level up from the app folder. */
var DIR = fs.existsSync(path.join(__dirname, 'content.js'))
  ? __dirname : path.join(__dirname, 'app');
var dom = new JSDOM('<!doctype html><html><body><div id="host"></div></body></html>');
var win = dom.window;

/* engine.js expects a browser; give it one. */
var ctx = {
  window: win, document: win.document, console: console,
  navigator: win.navigator, setTimeout: win.setTimeout, clearTimeout: win.clearTimeout,
  CustomEvent: win.CustomEvent, Event: win.Event, MouseEvent: win.MouseEvent,
  Math: Math, Date: Date, JSON: JSON
};
vm.createContext(ctx);

[ 'content.js',
  'topic-s1.js', 'topic-s2.js', 'topic-s3.js', 'topic-s4.js',
  'topic-s5.js', 'topic-s6.js', 'topic-s7.js', 'topic-s8.js', 'topic-s9.js', 'topic-s10.js',
  'media.js', 'test-1.js', 'test-2.js', 'test-3.js',
  'content-export.js', 'engine.js'
].forEach(function (f) {
  vm.runInContext(fs.readFileSync(path.join(DIR, f), 'utf8'), ctx, { filename: f });
});

var E = ctx.window.Engine;
var C = ctx.window.CONTENT;
var doc = win.document;
var host = doc.getElementById('host');

var all = [];
C.TOPICS.forEach(function (t) {
  t.levels.forEach(function (lv) {
    lv.subs.forEach(function (s) { s.items.forEach(function (i) { all.push(i); }); });
    lv.check.items.forEach(function (i) { all.push(i); });
  });
});
(C.MOCKS || []).forEach(function (m) {
  m.sections.forEach(function (sec) { sec.items.forEach(function (i) { all.push(i); }); });
});

var fails = [], drawn = 0, marked = 0, byType = {};

function click(node) {
  var ev = new win.MouseEvent('click', { bubbles: true, cancelable: true });
  node.dispatchEvent(ev);
}

all.forEach(function (item) {
  host.innerHTML = '';
  var view;
  try { view = E.mount(item, host); }
  catch (e) { fails.push(item.id + ' THREW while rendering: ' + e.message); return; }
  drawn++;
  byType[item.type] = (byType[item.type] || 0) + 1;

  /* Answer it correctly, then ask the renderer whether it agrees. */
  try {
    if (item.type === 'sort') {
      /* pick up each card in the pool, drop it in its declared bin */
      var boxes = host.querySelectorAll('.sort-bin');
      for (var i = 0; i < item.items.length; i++) {
        var card = item.items[i];
        var bi = -1;
        item.bins.forEach(function (b, j) { if (b.key === card.bin) bi = j; });
        if (bi < 0 || !boxes[bi]) { fails.push(item.id + ': no box for bin "' + card.bin + '"'); return; }
        var chip = null;
        var pool = host.querySelectorAll('.sort-pool .chip-i');
        for (var c2 = 0; c2 < pool.length; c2++) {
          if (!pool[c2].disabled && pool[c2].innerHTML === card.text) { chip = pool[c2]; break; }
        }
        if (!chip) { fails.push(item.id + ': card "' + E.stripTags(card.text) + '" is not in the pool'); return; }
        click(chip);
        click(boxes[bi]);
      }
    } else if (item.type === 'build') {
      /* Click the tiles in whatever order spells out the solution. */
      var remaining = item.tiles.slice();
      var order = [];
      var sol = String(item.solution).toLowerCase();
      var at = 0;
      while (remaining.length) {
        var found = -1;
        for (var k = 0; k < remaining.length; k++) {
          if (sol.indexOf(remaining[k].toLowerCase(), at) === at) { found = k; break; }
        }
        if (found < 0) break;
        at += remaining[found].length + 1;
        order.push(remaining.splice(found, 1)[0]);
      }
      if (remaining.length) { fails.push(item.id + ': the tiles cannot be assembled into the solution in any order'); return; }
      order.forEach(function (txt) {
        var tiles = host.querySelectorAll('.tiles .tile');
        for (var j = 0; j < tiles.length; j++) {
          if (!tiles[j].disabled && tiles[j].textContent === txt) { click(tiles[j]); return; }
        }
      });
    } else if (item.type === 'order') {
      item.items.forEach(function (txt) {
        var pool = host.querySelectorAll('.rank-pool .rank');
        for (var j = 0; j < pool.length; j++) {
          if (!pool[j].disabled && pool[j].textContent === txt) { click(pool[j]); return; }
        }
      });
    } else if (item.type === 'spot') {
      var segs = host.querySelectorAll('.seg');
      if (!segs[item.answer]) { fails.push(item.id + ': no segment at index ' + item.answer); return; }
      click(segs[item.answer]);
    } else {
      var opts = host.querySelectorAll('.opt');
      if (!opts[item.answer]) { fails.push(item.id + ': no option at index ' + item.answer + ' (there are ' + opts.length + ')'); return; }
      click(opts[item.answer]);
    }

    if (!view.hasResponse()) { fails.push(item.id + ': the renderer did not register the answer'); return; }
    var r = view.check();
    if (!r.correct) { fails.push(item.id + ': the DECLARED CORRECT answer is marked wrong'); return; }
    marked++;

    /* And now a wrong one, where a wrong one is possible. */
    if (item.options && item.options.length > 1) {
      host.innerHTML = '';
      var v2 = E.mount(item, host);
      var o2 = host.querySelectorAll('.opt');
      var other = item.answer === 0 ? 1 : 0;
      click(o2[other]);
      if (v2.check().correct) fails.push(item.id + ': option ' + (other + 1) + ' is ALSO marked correct');
    }
    /* Spot items: click every part in turn. Only `answer` and the parts in
       `also` may count as right (audit, October 2026). */
    if (item.type === 'spot') {
      var oks = [item.answer].concat(item.also || []);
      item.words.forEach(function (w, wi) {
        host.innerHTML = '';
        var v3 = E.mount(item, host);
        click(host.querySelectorAll('.seg')[wi]);
        var ok3 = v3.check().correct;
        if (ok3 !== (oks.indexOf(wi) >= 0)) fails.push(item.id + ': clicking part ' + (wi + 1) + ' is marked ' + (ok3 ? 'right' : 'wrong'));
      });
    }
  } catch (e) {
    fails.push(item.id + ' THREW while being answered: ' + e.message);
  }
});

console.log('rendered ' + drawn + ' of ' + all.length + ' items');
console.log('marked correct ' + marked);
console.log(Object.keys(byType).sort().map(function (k) { return k + ' ' + byType[k]; }).join(' · '));
console.log('');
fails.forEach(function (f) { console.log('FAIL  ' + f); });
console.log(fails.length ? fails.length + ' failure(s)' : 'ALL ITEMS RENDER AND MARK CORRECTLY');
process.exit(fails.length ? 1 : 0);
