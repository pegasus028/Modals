/* ===========================================================================
   FINE TUNING — prep.js
   The "Unit 5 test prep" tab: three two-paper mock tests (prep-data.js) with
   immediate feedback.

   MARKING OF WRITTEN ANSWERS
     1. The answer goes to the class server (action 'aiMark'), which asks
        Claude to mark it against the task, the model answer and the item's
        notes. The server keeps the API key; the page never sees it.
     2. If the server cannot mark (no key yet, offline, slow), the built-in
        rule checker marks it from the item's `all` / `none` patterns.
     3. A wrong written answer turns into tiles: the model answer cut into
        chunks to put in order. Rebuilt correctly = half a mark.

   Scores: 1 mark per item. Tag items (O/P/A/N, P/F/Pa) score the letter; the
   tapped clue gets feedback only. Results live in localStorage and, in
   summary, in the student's progress (p.prep) so the teacher sheet has them.
   =========================================================================== */
(function (global) {
  'use strict';

  /* ------------------------------------------------------------ marking */
  var V3 = '(?:\\w+ed|been|bought|spent|paid|gone|given|taken|left|forgotten|lost|sold|made|got|gotten|seen|read|eaten|had|done|put|kept|sent|cost|found|brought|chosen|written|lent|withdrawn|won|run|come|become|fallen|known|heard|told|said|thought|caught|stolen|broken|driven|worn|begun|drunk|cut|set|let|hit|shut|met|meant|felt|held|understood|ridden|shown|thrown|hidden|grown|flown|drawn|torn|sat|stood|slept|taught|fought|built)';
  var BASE = '(?:buy|spend|pay|go|give|take|leave|forget|lose|sell|make|get|see|eat|do|keep|send|find|bring|choose|write|lend|win|fall|know|tell|catch|steal|break|drive|wear|begin|drink|use|save|drop|order|receive|arrive|change|check|charge|add|include|miss|pick|play|watch|transfer|earn|start|finish|open|close|withdraw|borrow|forgot|went|gave|took|saw|ate|did|wrote|fell|knew|stole|broke|drove|wore|began|drank)';

  function norm(s) {
    s = String(s || '').toLowerCase()
      .replace(/[‘’ʼ`´]/g, "'").replace(/[“”]/g, '"');
    var fix = {
      dont: "don't", doesnt: "doesn't", didnt: "didn't", isnt: "isn't", arent: "aren't", wasnt: "wasn't",
      werent: "weren't", hasnt: "hasn't", havent: "haven't", hadnt: "hadn't", shouldnt: "shouldn't",
      wouldnt: "wouldn't", couldnt: "couldn't", mustnt: "mustn't", neednt: "needn't", wont: "won't",
      cant: "can't", youd: "you'd", ive: "i've", youve: "you've", weve: "we've", theres: "there's"
    };
    s = s.replace(/\b(dont|doesnt|didnt|isnt|arent|wasnt|werent|hasnt|havent|hadnt|shouldnt|wouldnt|couldnt|mustnt|neednt|wont|cant|youd|ive|youve|weve|theres)\b/g, function (m) { return fix[m]; });
    s = s.replace(/\bi d\b/g, "i'd");
    s = s.replace(/\bcannot\b|\bcan not\b/g, "can't");
    s = s.replace(/\bwill not\b/g, "won't");
    s = s.replace(/\bmightn't\b/g, 'might not').replace(/\bmayn't\b/g, 'may not');
    s = s.replace(/\boughtn't to\b/g, 'ought not to');
    s = s.replace(/\b(do|does|did|is|are|was|were|has|have|had|should|would|could|must|need)\s+not\b/g,
      function (m, w) { return w + "n't"; });
    s = s.replace(/'d\s+better\b/g, ' had better').replace(/'d\s+rather\b/g, ' would rather');
    s = s.replace(/'ve\s+got\s+to\b/g, ' have got to').replace(/'s\s+got\s+to\b/g, ' has got to');
    s = s.replace(/(\w)'ve\b/g, '$1 have').replace(/(\w)'ll\b/g, '$1 will').replace(/\bi'm\b/g, 'i am')
      .replace(/(\w)'re\b/g, '$1 are');
    s = s.replace(/[^a-z0-9'%\s.-]/g, ' ').replace(/\.(\s|$)/g, ' ').replace(/\s+/g, ' ').trim();
    return s;
  }
  function rx(src) {
    return new RegExp(src.replace(/\{V3\}/g, V3).replace(/\{BASE\}/g, BASE), 'i');
  }
  /* The rule checker: every `all` pattern must match, no `none` pattern may. */
  function localCheck(item, answer) {
    var a = norm(answer);
    if (!a) return { ok: false, why: 'empty' };
    var all = item.all || [], none = item.none || [];
    for (var i = 0; i < all.length; i++) if (!rx(all[i]).test(a)) return { ok: false, why: 'missing', pat: all[i] };
    for (var j = 0; j < none.length; j++) if (rx(none[j]).test(a)) return { ok: false, why: 'blocked', pat: none[j] };
    return { ok: true };
  }
  /* The word the task says to use must be there, whatever the AI thinks. */
  function gate(item, answer) {
    var a = norm(answer), w = '';
    if (item.keyword) w = norm(item.keyword);
    else if (item.modal) w = norm(item.modal);
    if (!w) return true;
    if (w === 'had') return /\bhad\b/.test(a);
    if (w === 'rather') return /\brather\b/.test(a);
    return a.indexOf(w) >= 0;
  }
  function tilesKey(arr) { return norm(arr.join(' ')); }
  /* How much of the evidence was copied: the longest run of shared words. */
  function copiedRun(answer, evidence) {
    var a = norm(answer).split(' '), e = ' ' + norm(evidence) + ' ', best = 0;
    for (var i = 0; i < a.length; i++) {
      for (var k = best + 1; i + k <= a.length; k++) {
        if (e.indexOf(' ' + a.slice(i, i + k).join(' ') + ' ') >= 0) best = k; else break;
      }
    }
    return best;
  }
  var Mark = { norm: norm, localCheck: localCheck, gate: gate, tilesKey: tilesKey, copiedRun: copiedRun, rx: rx };
  global.PrepMark = Mark;
  if (typeof document === 'undefined') return;   /* Node: marking only */

  /* --------------------------------------------------------------- setup */
  var D = global.PREP || { tests: [] };
  var LS = 'ft.prep.v1';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function bridge() { return global.FT || {}; }
  function who() { var p = bridge().profile && bridge().profile(); return (p && p.studentId) || 'guest'; }
  function loadAll() { try { return JSON.parse(localStorage.getItem(LS)) || {}; } catch (e) { return {}; } }
  function saveAll(all) { try { localStorage.setItem(LS, JSON.stringify(all)); } catch (e) {} }
  function rec(testId) {
    var all = loadAll(), k = who() + '|' + testId;
    if (!all[k]) all[k] = { started: Date.now(), ans: {} };
    return { data: all[k], save: function () { all[k] = this.data; saveAll(all); } };
  }
  function resetRec(testId) { var all = loadAll(); delete all[who() + '|' + testId]; saveAll(all); }

  function testById(id) { return D.tests.filter(function (t) { return t.id === id; })[0]; }
  function allItems(t) {
    var out = [];
    t.papers.forEach(function (p) {
      p.sections.forEach(function (s) {
        s.items.forEach(function (it) { out.push({ it: it, sec: s, paper: p }); });
      });
    });
    return out;
  }
  function score(t, r) {
    var got = 0, done = 0, total = 0, bySec = {};
    allItems(t).forEach(function (x) {
      var k = x.paper.code + '.' + x.sec.code;
      if (!bySec[k]) bySec[k] = { title: x.sec.title, paper: x.paper.code, got: 0, total: 0, done: 0 };
      bySec[k].total++; total++;
      var a = r.ans[x.it.id];
      if (a && a.final) { done++; bySec[k].done++; got += a.marks; bySec[k].got += a.marks; }
    });
    return { got: got, done: done, total: total, bySec: bySec };
  }

  /* Push a short summary into the student's progress (it reaches the sheet). */
  function pushSummary(t) {
    var b = bridge(), p = b.profile && b.profile();
    if (!p) return;
    var r = rec(t.id).data, sc = score(t, r);
    p.prep = p.prep || {};
    var misses = [];
    allItems(t).forEach(function (x) {
      var a = r.ans[x.it.id];
      if (a && a.final && a.marks < 1) misses.push(x.it.id);
    });
    p.prep[t.id] = { at: new Date().toISOString(), marks: sc.got, total: sc.total, done: sc.done, misses: misses };
    if (b.syncSoon) b.syncSoon();
  }

  /* ----------------------------------------------------------- AI marking */
  var aiState = { off: false, fails: 0 };
  function aiMark(item, sec, answer, extra) {
    var url = (global.API && typeof global.API.url === 'string') ? global.API.url : (global.MC_API_URL || '');
    if (!url || aiState.off) return Promise.resolve(null);
    var payload = {
      kind: sec.type, instructions: sec.instructions, id: item.id,
      sentence: item.sentence || '', source: item.source || '', keyword: item.keyword || '',
      modal: item.modal || '', evidence: item.evidence || item.situation || '',
      a: item.a || '', b: item.b || '', chosen: extra && extra.chosen || '',
      model: item.model || '', notes: item.why || '', student: String(answer).slice(0, 400)
    };
    var ctl = global.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 15000);
    return fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'aiMark', payload: payload }),
      signal: ctl ? ctl.signal : undefined
    }).then(function (r) { return r.json(); }).then(function (j) {
      clearTimeout(timer);
      if (!j || !j.ok || typeof j.correct !== 'boolean') {
        aiState.fails++;
        /* No key on the server, or an unknown action: stop asking this session. */
        if (j && /no-key|Unknown action/i.test(j.error || '')) aiState.off = true;
        if (aiState.fails >= 3) aiState.off = true;
        return null;
      }
      aiState.fails = 0;
      return j;
    }).catch(function () { clearTimeout(timer); aiState.fails++; if (aiState.fails >= 3) aiState.off = true; return null; });
  }

  /* Mark a written answer: AI first, the rule checker as fallback. */
  function markText(item, sec, answer, extra) {
    var loc = localCheck(item, answer), g = gate(item, answer);
    var copy = item.evidence ? copiedRun(answer, item.evidence) : 0;
    return aiMark(item, sec, answer, extra).then(function (ai) {
      if (ai) {
        return { ok: !!ai.correct && g, by: 'ai', feedback: ai.feedback || '', corrected: ai.corrected || '',
                 polish: ai.polish || '', gateFail: !g };
      }
      var ok = loc.ok && g;
      var fb = ok ? '' : (item.tip || 'Not quite.');
      if (!g) fb = 'Use the word given: ' + (item.keyword || item.modal) + '. ' + (item.tip || '');
      if (ok && copy >= 7) fb = 'Correct, but try not to copy so much of the evidence. Say it in your own words.';
      return { ok: ok, by: 'rules', feedback: fb, corrected: '', polish: '' };
    });
  }

  /* ---------------------------------------------------------------- view */
  var V = { host: null, test: null, paper: 0, sec: 0 };

  function paint(host) {
    V.host = host || V.host;
    if (V.test) return paintRunner();
    var h = '<div class="sect-h"><div><h2>Unit 5 test prep</h2>' +
      '<p class="pp-lead">Three mock tests built like your practice test: <b>Paper 1</b> (obligation, prohibition, advice, permission) and ' +
      '<b>Paper 2</b> (speculation and deduction). Each has 51 questions in five parts. You get feedback after every answer. ' +
      'If a written answer is wrong, you rebuild it from tiles for half a mark.</p></div></div>';
    h += '<div class="pp-cards">';
    D.tests.forEach(function (t, i) {
      var r = rec(t.id).data, sc = score(t, r);
      var pc = sc.total ? Math.round(sc.got / sc.total * 100) : 0;
      var state = sc.done === 0 ? 'Not started' : (sc.done < sc.total ? sc.done + ' of ' + sc.total + ' answered' : 'Finished');
      h += '<div class="pp-card">' +
        '<div class="pp-num">' + (i + 1) + '</div>' +
        '<div class="pp-body"><p class="pp-name">' + esc(t.name) + '</p><p class="pp-blurb">' + esc(t.blurb) + '</p>' +
        '<p class="pp-state">' + esc(state) + (sc.done ? ' · ' + fmt(sc.got) + ' / ' + sc.total + ' marks (' + pc + '%)' : '') + '</p>' +
        '<div class="bar-line thin"><span style="width:' + Math.round(sc.done / sc.total * 100) + '%"></span></div>' +
        '<div class="pp-acts">' +
          '<button class="btn primary sm" data-pp-open="' + t.id + '">' + (sc.done === 0 ? 'Start' : sc.done < sc.total ? 'Continue' : 'See results') + '</button>' +
          (sc.done ? '<button class="btn sm" data-pp-reset="' + t.id + '">Start again</button>' : '') +
        '</div></div></div>';
    });
    h += '</div>';
    h += '<div class="pp-note"><b>Tips from your practice test.</b> 1) The evidence decides the modal: proof → <em>must / can’t</em>; ' +
      'a usual pattern → <em>should</em>; no proof → <em>may / might / could</em>. 2) Future = modal + verb (<em>could buy</em>); ' +
      'past = modal + have + V3 (<em>could have bought</em>). 3) In written answers use capitals, full stops and <em>because</em>, not <em>coz</em>.</p></div>';
    V.host.innerHTML = h;
    V.host.querySelectorAll('[data-pp-open]').forEach(function (b) {
      b.addEventListener('click', function () { open(b.dataset.ppOpen); });
    });
    V.host.querySelectorAll('[data-pp-reset]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!confirm('Start this mock test again? Your answers will be cleared.')) return;
        resetRec(b.dataset.ppReset); paint();
      });
    });
  }
  function fmt(n) { return (Math.round(n * 2) / 2).toString().replace('.5', '½').replace(/^0½/, '½'); }

  function open(id) {
    V.test = testById(id);
    var r = rec(id).data, items = allItems(V.test);
    V.paper = 0; V.sec = 0;
    var sc = score(V.test, r);
    if (sc.done === sc.total) { V.paper = -1; }          /* results */
    else {
      for (var i = 0; i < items.length; i++) {
        var a = r.ans[items[i].it.id];
        if (!a || !a.final) {
          V.paper = V.test.papers.indexOf(items[i].paper);
          V.sec = items[i].paper.sections.indexOf(items[i].sec);
          break;
        }
      }
    }
    paintRunner();
  }
  function close() { V.test = null; paint(); }

  function paintRunner() {
    var t = V.test, r = rec(t.id).data, sc = score(t, r);
    var h = '<div class="pp-top"><button class="btn ghost sm" data-pp-back>← All mock tests</button>' +
      '<span class="pp-score">' + fmt(sc.got) + ' / ' + sc.total + ' marks · ' + sc.done + ' answered</span></div>';
    h += '<h2 class="pp-title">' + esc(t.name) + '</h2>';
    /* paper / section strip */
    h += '<div class="pp-strip">';
    t.papers.forEach(function (p, pi) {
      p.sections.forEach(function (s, si) {
        var k = p.code + '.' + s.code, b = sc.bySec[k];
        var cls = (pi === V.paper && si === V.sec) ? ' on' : '';
        if (b.done === b.total) cls += ' done';
        h += '<button class="pp-chip' + cls + '" data-pp-go="' + pi + ':' + si + '" title="' + esc(s.title) + '">P' + p.code + '·' + s.code + '</button>';
      });
    });
    h += '<button class="pp-chip' + (V.paper === -1 ? ' on' : '') + '" data-pp-go="-1:0">Results</button></div>';

    if (V.paper === -1) h += resultsHtml(t, r, sc);
    else {
      var p = t.papers[V.paper], s = p.sections[V.sec];
      h += '<div class="pp-paper">Paper ' + p.code + ' · ' + esc(p.title) + '</div>';
      h += '<h3 class="pp-sec">' + s.code + '. ' + esc(s.title) + '</h3>';
      h += '<p class="pp-ins">' + esc(s.instructions) + '</p>';
      if (s.type === 'tag') {
        h += '<p class="pp-key">' + s.choices.map(function (c) { return '<b>' + c[0] + '</b> = ' + c[1]; }).join(' · ') + '</p>';
      }
      s.items.forEach(function (it, i) { h += '<div class="pp-item" id="pp-' + it.id + '">' + itemHtml(it, s, i, r) + '</div>'; });
      var last = (V.paper === t.papers.length - 1 && V.sec === p.sections.length - 1);
      h += '<div class="pp-nav">' +
        ((V.paper > 0 || V.sec > 0) ? '<button class="btn sm" data-pp-step="-1">← Previous part</button>' : '<span></span>') +
        '<button class="btn primary sm" data-pp-step="1">' + (last ? 'See my results →' : 'Next part →') + '</button></div>';
    }
    V.host.innerHTML = h;
    wire();
  }

  function itemHtml(it, s, i, r) {
    var a = r.ans[it.id] || {}, n = (i + 1) + '.', h = '';
    var done = !!a.final;
    if (s.type === 'mc') {
      h += '<p class="pp-stem"><b>' + n + '</b> ' + esc(it.stem).replace(/_{3,}/, '<span class="pp-gap">______</span>') + '</p>';
      h += '<div class="pp-opts">' + it.options.map(function (o, oi) {
        var cls = '';
        if (done) { if (oi === it.answer) cls = ' right'; else if (oi === a.choice) cls = ' wrong'; }
        return '<button class="pp-opt' + cls + '"' + (done ? ' disabled' : '') + ' data-pp-mc="' + it.id + ':' + oi + '"><i>' + 'abcd'[oi] + '</i> ' + esc(o) + '</button>';
      }).join('') + '</div>';
      if (done) h += fbHtml(a.marks === 1, it.why);
    } else if (s.type === 'pick') {
      h += '<p class="pp-stem"><b>' + n + '</b> ' + (it.label ? '<span class="pp-label">' + esc(it.label) + '</span>' : '') +
        (it.context ? esc(it.context) : '') + '</p>';
      h += '<div class="pp-opts col">' + it.options.map(function (o, oi) {
        var cls = '';
        if (done) { if (oi === it.answer) cls = ' right'; else if (oi === a.choice) cls = ' wrong'; }
        return '<button class="pp-opt' + cls + '"' + (done ? ' disabled' : '') + ' data-pp-mc="' + it.id + ':' + oi + '"><i>' + 'ABC'[oi] + '</i> ' + esc(o) + '</button>';
      }).join('') + '</div>';
      if (done) h += fbHtml(a.marks === 1, it.why);
    } else if (s.type === 'tag') {
      var toks = tokens(it.sentence), picked = a.clue || [];
      h += '<p class="pp-stem pp-tagline"><b>' + n + '</b> ' + toks.map(function (tk, ti) {
        if (!/\w/.test(tk)) return esc(tk);
        var on = picked.indexOf(ti) >= 0, good = done && clueWord(it, tk);
        return '<span class="pp-tok' + (on ? ' on' : '') + (good ? ' clue' : '') + '" data-pp-tok="' + it.id + ':' + ti + '">' + esc(tk) + '</span>';
      }).join('') + '</p>';
      h += '<div class="pp-tags">' + s.choices.map(function (c) {
        var cls = a.choice === c[0] ? ' sel' : '';
        if (done) { if (c[0] === it.answer) cls = ' right'; else if (c[0] === a.choice) cls = ' wrong'; }
        return '<button class="pp-tag' + cls + '"' + (done ? ' disabled' : '') + ' data-pp-tag="' + it.id + ':' + c[0] + '">' + c[0] + '</button>';
      }).join('') + (done ? '' : '<button class="btn sm primary" data-pp-tagcheck="' + it.id + '">Check</button>') + '</div>';
      if (done) {
        var clueOk = picked.some(function (ti) { return clueWord(it, toks[ti]); });
        h += fbHtml(a.marks === 1, it.why + (picked.length ? (clueOk ? ' Good clue.' : ' The clue to underline: “' + it.clue[0] + '”.') : ' The clue to underline: “' + it.clue[0] + '”.'));
      }
    } else if (s.type === 'fix') {
      h += '<p class="pp-stem"><b>' + n + '</b> ' + esc(it.sentence) + '</p>';
      if (!done && !a.judged) {
        h += '<div class="pp-tags"><button class="pp-tag wide" data-pp-fix="' + it.id + ':ok">✓ Correct</button>' +
             '<button class="pp-tag wide" data-pp-fix="' + it.id + ':bad">✗ Incorrect</button></div>';
      } else if (!done && a.judged === 'bad' && !it.ok && !a.tiles) {
        h += '<p class="pp-small">Write the correct sentence, or just the words that change.</p>' + textBox(it, a);
      }
      h += tilesOrFeedback(it, a);
    } else if (s.type === 'rewrite') {
      h += '<p class="pp-stem"><b>' + n + '</b> ' + esc(it.source) + '</p><p class="pp-use">Use: <b>' + esc(it.keyword) + '</b></p>';
      if (!done && !a.tiles) h += textBox(it, a);
      h += tilesOrFeedback(it, a);
    } else if (s.type === 'deduce') {
      h += '<p class="pp-stem"><b>' + n + '</b> Use: <b class="pp-modal">' + esc(it.modal) + '</b></p>' +
        '<p class="pp-ev"><b>Evidence:</b> ' + esc(it.evidence) + '</p>';
      if (!done && !a.tiles) h += textBox(it, a, 'Your deduction');
      h += tilesOrFeedback(it, a);
    } else if (s.type === 'reason') {
      h += '<p class="pp-stem"><b>' + n + '</b> ' + esc(it.situation) + '</p>' +
        '<div class="pp-opts col">' + ['A', 'B'].map(function (L) {
          var cls = a.choice === L ? ' sel' : '';
          if (a.checked) { if (L === it.answer) cls = ' right'; else if (L === a.choice) cls = ' wrong'; }
          return '<button class="pp-opt' + cls + '"' + (a.checked ? ' disabled' : '') + ' data-pp-ab="' + it.id + ':' + L + '"><i>Student ' + L + '</i> “' + esc(L === 'A' ? it.a : it.b) + '”</button>';
        }).join('') + '</div>';
      if (!done && !a.tiles && !a.checked) h += textBox(it, a, 'Why? Explain why their modal is more appropriate.');
      h += tilesOrFeedback(it, a);
    }
    return h;
  }
  function textBox(it, a, ph) {
    return '<div class="pp-write"><textarea rows="2" data-pp-text="' + it.id + '" placeholder="' + esc(ph || 'Write your answer') + '">' + esc(a.text || '') + '</textarea>' +
      '<button class="btn primary sm" data-pp-check="' + it.id + '"' + (a.busy ? ' disabled' : '') + '>' + (a.busy ? 'Marking…' : 'Check') + '</button></div>';
  }
  function fbHtml(ok, msg, extra) {
    return '<div class="pp-fb ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ ' : '✗ ') + '</b>' + esc(msg) + (extra || '') + '</div>';
  }
  function tilesOrFeedback(it, a) {
    var h = '';
    if (a.fb) {
      h += '<div class="pp-fb ' + (a.fbOk ? 'ok' : 'no') + '">' + (a.fbOk ? '<b>✓ </b>' : '<b>✗ </b>') + esc(a.fb) +
        (a.polish ? '<span class="pp-polish">✎ ' + esc(a.polish) + '</span>' : '') +
        (a.by === 'ai' ? '<span class="pp-by">AI marking</span>' : '') + '</div>';
    }
    if (a.tiles && !a.final) {
      var placed = a.placed || [], pool = a.pool || [];
      h += '<div class="pp-tiles"><p class="pp-small">Put the tiles in order to build a correct answer.</p>' +
        '<div class="pp-line">' + (placed.length ? placed.map(function (ti, k) {
          return '<button class="pp-t in" data-pp-un="' + it.id + ':' + k + '">' + esc(it.tiles[ti]) + '</button>';
        }).join('') : '<span class="pp-ph">Tap the tiles below…</span>') + '</div>' +
        '<div class="pp-pool">' + pool.map(function (ti) {
          return placed.indexOf(ti) >= 0 ? '' : '<button class="pp-t" data-pp-put="' + it.id + ':' + ti + '">' + esc(it.tiles[ti]) + '</button>';
        }).join('') + '</div>' +
        (a.tileMsg ? '<p class="pp-tilemsg">' + esc(a.tileMsg) + '</p>' : '') +
        '<button class="btn primary sm" data-pp-order="' + it.id + '"' + (placed.length === it.tiles.length ? '' : ' disabled') + '>Check order</button></div>';
    }
    if (a.final) {
      var ok = a.marks === 1;
      var head = ok ? 'Correct' : a.marks === 0.5 ? 'Half a mark: rebuilt with tiles' : 'No mark this time';
      var model = it.model ? '<span class="pp-model">Model answer: <b>' + esc(it.model) + '</b></span>' : '';
      var yours = (a.corrected && !ok) ? '<span class="pp-model">Your answer, corrected: ' + esc(a.corrected) + '</span>' : '';
      h += '<div class="pp-fb ' + (ok ? 'ok' : a.marks ? 'half' : 'no') + ' final"><b>' + head + '.</b> ' + esc(it.why) + model + yours + '</div>';
    }
    return h;
  }

  function tokens(s) { return s.match(/[A-Za-z0-9’'%-]+|[^A-Za-z0-9’'%-]+/g) || []; }
  function clueWord(it, tk) {
    var t = norm(tk).replace(/\.$/, '');
    if (!t) return false;
    return it.clue.some(function (c) {
      return norm(c).split(' ').some(function (w) {
        if (!w) return false;
        if (w.charAt(0) === "'") return t.slice(-w.length) === w;
        return t === w;
      });
    });
  }

  function shuffledIdx(n) {
    var a = [], i;
    for (i = 0; i < n; i++) a.push(i);
    for (var tries = 0; tries < 20; tries++) {
      for (i = n - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x; }
      if (a.some(function (v, k) { return v !== k; })) break;
    }
    return a;
  }

  /* ------------------------------------------------------------- events */
  function wire() {
    var host = V.host;
    var r = rec(V.test.id);
    function A(id) { return r.data.ans[id] || (r.data.ans[id] = {}); }
    function itemOf(id) {
      var hit = null;
      allItems(V.test).forEach(function (x) { if (x.it.id === id) hit = x; });
      return hit;
    }
    function done(id, marks) {
      var a = A(id); a.final = true; a.marks = marks; a.at = Date.now();
      r.save(); pushSummary(V.test);
    }
    function repaintItem(id) {
      var x = itemOf(id), el = document.getElementById('pp-' + id);
      if (!x || !el) return paintRunner();
      el.innerHTML = itemHtml(x.it, x.sec, x.sec.items.indexOf(x.it), r.data);
      var top = host.querySelector('.pp-score'), sc = score(V.test, r.data);
      if (top) top.textContent = fmt(sc.got) + ' / ' + sc.total + ' marks · ' + sc.done + ' answered';
      wireIn(el);
    }
    function startTiles(id) {
      var x = itemOf(id), a = A(id);
      a.tiles = true; a.placed = []; a.pool = shuffledIdx(x.it.tiles.length); a.tries = 0; a.tileMsg = '';
      r.save();
    }
    function wireIn(root) {
      root.querySelectorAll('[data-pp-mc]').forEach(function (b) {
        b.addEventListener('click', function () {
          var p = b.dataset.ppMc.split(':'), id = p[0], oi = +p[1], x = itemOf(id);
          A(id).choice = oi; done(id, oi === x.it.answer ? 1 : 0); repaintItem(id);
        });
      });
      root.querySelectorAll('[data-pp-tok]').forEach(function (b) {
        b.addEventListener('click', function () {
          var p = b.dataset.ppTok.split(':'), a = A(p[0]);
          if (a.final) return;
          a.clue = a.clue || [];
          var ti = +p[1], k = a.clue.indexOf(ti);
          if (k >= 0) a.clue.splice(k, 1); else a.clue.push(ti);
          r.save(); b.classList.toggle('on');
        });
      });
      root.querySelectorAll('[data-pp-tag]').forEach(function (b) {
        b.addEventListener('click', function () {
          var p = b.dataset.ppTag.split(':');
          A(p[0]).choice = p[1]; r.save();
          b.parentNode.querySelectorAll('.pp-tag').forEach(function (x) { x.classList.toggle('sel', x === b); });
        });
      });
      root.querySelectorAll('[data-pp-tagcheck]').forEach(function (b) {
        b.addEventListener('click', function () {
          var id = b.dataset.ppTagcheck, a = A(id), x = itemOf(id);
          if (!a.choice) { b.textContent = 'Choose a letter first'; return; }
          done(id, a.choice === x.it.answer ? 1 : 0); repaintItem(id);
        });
      });
      root.querySelectorAll('[data-pp-fix]').forEach(function (b) {
        b.addEventListener('click', function () {
          var p = b.dataset.ppFix.split(':'), id = p[0], x = itemOf(id), a = A(id);
          a.judged = p[1];
          if (x.it.ok && p[1] === 'ok') { a.fb = ''; done(id, 1); }
          else if (x.it.ok && p[1] === 'bad') {
            a.fb = 'This sentence is correct. Look again: is there really a modal error?'; a.fbOk = false; done(id, 0);
          } else if (!x.it.ok && p[1] === 'ok') {
            a.fb = 'There is a modal error in this sentence. ' + (x.it.tip || ''); a.fbOk = false;
            a.noHalf = true; startTiles(id);
          }
          r.save(); repaintItem(id);
        });
      });
      root.querySelectorAll('[data-pp-ab]').forEach(function (b) {
        b.addEventListener('click', function () {
          var p = b.dataset.ppAb.split(':'); A(p[0]).choice = p[1]; r.save();
          b.parentNode.querySelectorAll('.pp-opt').forEach(function (x) { x.classList.toggle('sel', x === b); });
        });
      });
      root.querySelectorAll('[data-pp-text]').forEach(function (ta) {
        ta.addEventListener('input', function () { A(ta.dataset.ppText).text = ta.value; r.save(); });
      });
      root.querySelectorAll('[data-pp-check]').forEach(function (b) {
        b.addEventListener('click', function () {
          var id = b.dataset.ppCheck, x = itemOf(id), a = A(id), it = x.it, sec = x.sec;
          var ta = root.querySelector('[data-pp-text="' + id + '"]');
          a.text = ta ? ta.value : a.text;
          if (!a.text || !a.text.trim()) { ta && ta.focus(); return; }
          if (sec.type === 'reason' && !a.choice) { b.textContent = 'Choose Student A or B first'; return; }
          if (sec.type === 'reason' && a.choice !== it.answer) {
            a.checked = true;
            a.fb = 'Student ' + it.answer + ' has the better reasoning. ' + it.why; a.fbOk = false; a.by = '';
            a.noHalf = true; startTiles(id); r.save(); repaintItem(id); return;
          }
          a.busy = true; repaintItem(id);
          markText(it, sec, a.text, { chosen: a.choice }).then(function (m) {
            a.busy = false; a.by = m.by; a.polish = m.polish; a.corrected = m.corrected;
            if (sec.type === 'reason') a.checked = true;
            if (m.ok) { a.fb = m.feedback || ''; a.fbOk = true; done(id, 1); }
            else { a.fb = m.feedback || it.tip; a.fbOk = false; startTiles(id); }
            r.save(); repaintItem(id);
          });
        });
      });
      root.querySelectorAll('[data-pp-put]').forEach(function (b) {
        b.addEventListener('click', function () {
          var p = b.dataset.ppPut.split(':'), a = A(p[0]);
          a.placed.push(+p[1]); a.tileMsg = ''; r.save(); repaintItem(p[0]);
        });
      });
      root.querySelectorAll('[data-pp-un]').forEach(function (b) {
        b.addEventListener('click', function () {
          var p = b.dataset.ppUn.split(':'), a = A(p[0]);
          a.placed.splice(+p[1], 1); a.tileMsg = ''; r.save(); repaintItem(p[0]);
        });
      });
      root.querySelectorAll('[data-pp-order]').forEach(function (b) {
        b.addEventListener('click', function () {
          var id = b.dataset.ppOrder, x = itemOf(id), a = A(id), it = x.it;
          var built = a.placed.map(function (ti) { return it.tiles[ti]; });
          if (tilesKey(built) === tilesKey(it.tiles)) {
            a.tiles = false; done(id, a.noHalf ? 0 : 0.5); repaintItem(id); return;
          }
          a.tries = (a.tries || 0) + 1;
          if (a.tries >= 3) { a.tiles = false; done(id, 0); repaintItem(id); return; }
          var firstBad = 0;
          while (firstBad < a.placed.length && a.placed[firstBad] === firstBad) firstBad++;
          a.tileMsg = 'Not yet. The first ' + firstBad + ' tile' + (firstBad === 1 ? ' is' : 's are') + ' in the right place. ' + (3 - a.tries) + ' tr' + (3 - a.tries === 1 ? 'y' : 'ies') + ' left.';
          a.placed = a.placed.slice(0, firstBad);
          r.save(); repaintItem(id);
        });
      });
    }
    host.querySelector('[data-pp-back]').addEventListener('click', close);
    host.querySelectorAll('[data-pp-go]').forEach(function (b) {
      b.addEventListener('click', function () {
        var p = b.dataset.ppGo.split(':'); V.paper = +p[0]; V.sec = +p[1]; paintRunner(); window.scrollTo({ top: 0 });
      });
    });
    host.querySelectorAll('[data-pp-step]').forEach(function (b) {
      b.addEventListener('click', function () {
        var t = V.test, d = +b.dataset.ppStep;
        if (d > 0) {
          if (V.sec < t.papers[V.paper].sections.length - 1) V.sec++;
          else if (V.paper < t.papers.length - 1) { V.paper++; V.sec = 0; }
          else { V.paper = -1; V.sec = 0; }
        } else {
          if (V.sec > 0) V.sec--;
          else if (V.paper > 0) { V.paper--; V.sec = t.papers[V.paper].sections.length - 1; }
        }
        paintRunner(); window.scrollTo({ top: 0 });
      });
    });
    wireIn(host);
  }

  function resultsHtml(t, r, sc) {
    var h = '<div class="pp-res"><p class="pp-big">' + fmt(sc.got) + ' <small>/ ' + sc.total + '</small></p>' +
      '<p class="pp-small">' + (sc.done < sc.total ? (sc.total - sc.done) + ' questions not answered yet.' : 'All questions answered.') + '</p>';
    h += '<div class="dd-scroll"><table class="sectable"><tr><th>Part</th><th>Section</th><th>Marks</th></tr>';
    Object.keys(sc.bySec).forEach(function (k) {
      var b = sc.bySec[k], low = b.done && b.got / b.total < 0.7;
      h += '<tr' + (low ? ' class="low"' : '') + '><td>P' + k.replace('.', '·') + '</td><td>' + esc(b.title) + '</td><td class="n">' + fmt(b.got) + ' / ' + b.total + '</td></tr>';
    });
    h += '</table></div>';
    var miss = [];
    allItems(t).forEach(function (x) {
      var a = r.ans[x.it.id];
      if (a && a.final && a.marks < 1) miss.push(x);
    });
    if (miss.length) {
      h += '<h3 class="pp-sec">Look again at these</h3><ul class="pp-miss">';
      miss.forEach(function (x) {
        var it = x.it;
        var what = it.focus || it.label || (it.modal ? 'deduction with ' + it.modal : it.keyword ? 'rewrite with ' + it.keyword : x.sec.title);
        h += '<li><b>P' + x.paper.code + '·' + x.sec.code + '</b> ' + esc(what) + '<br><span>' + esc(it.why) + '</span></li>';
      });
      h += '</ul><p class="pp-small">Not sure which modal to use? Open the <b>Decision tree</b> tab and follow the questions.</p>';
    } else if (sc.done) {
      h += '<p class="allclear">Nothing missed. Well done!</p>';
    }
    h += '</div>';
    return h;
  }

  global.PrepTab = { paint: paint, home: function () { V.test = null; } };
})(typeof window !== 'undefined' ? window : globalThis);
