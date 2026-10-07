/* lab-test.js — plays the Modal Lab in a real (headless) browser, the way a
   student would, and fails on anything that breaks the games.

     npm install playwright          (once; or point CHROME_PATH at a Chromium)
     node lab-test.js

   Safety: the page is served from this folder by a tiny built-in server that
   blanks window.MC_API_URL on the way out, and every request to Apps Script
   is aborted and counted. The run fails if the URL could not be blanked or if
   a single request tried to reach the live Sheet.

   What it checks
     · The Certainty Dial: dragging the slider end to end reaches "must" (the
       slider used to be rebuilt mid-drag and stopped after one step); the
       sentence is on screen in the Challenge BEFORE "Lock it in"; past evidence
       refuses should/will with a note; a whole Challenge ends on a result card.
     · Modal Detective, The Negation Cliff, Time Machine: a full round played by
       keyboard, one case left to time out, the time bar frozen after an answer,
       the clock long enough for the case, and a result card listing misses.
     · The Rule Board's three cover modes, and flashcards by keyboard.
     · No console errors and no sideways scroll at 390 px. */
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = __dirname;
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.mp3': 'audio/mpeg', '.json': 'application/json' };

function serve() {
  return new Promise(res => {
    const srv = http.createServer((req, rsp) => {
      let f = decodeURIComponent(req.url.split('?')[0]); if (f === '/') f = '/index.html';
      const p = path.join(ROOT, path.normalize(f).replace(/^(\.\.[\/\\])+/, ''));
      if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { rsp.writeHead(404); return rsp.end(); }
      let body = fs.readFileSync(p);
      if (/\.html$/.test(p)) {
        const txt = body.toString('utf8').replace(/window\.MC_API_URL\s*=\s*'[^']*'/g, "window.MC_API_URL = ''");
        if (/MC_API_URL\s*=\s*'https/.test(txt)) { console.error('ABORT: could not blank the API URL in ' + f); process.exit(2); }
        body = Buffer.from(txt);
      }
      rsp.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); rsp.end(body);
    }).listen(0, () => res(srv));
  });
}

let fails = 0;
function check(ok, msg) { console.log((ok ? '  ok   ' : '  FAIL ') + msg); if (!ok) fails++; }

(async () => {
  let chromium;
  try { chromium = require('playwright').chromium; } catch (e) { console.error('Install playwright first: npm install playwright'); process.exit(2); }
  const srv = await serve(), base = 'http://localhost:' + srv.address().port;
  const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  let live = 0; const errs = [];
  await ctx.route(/script\.google\.com|script\.googleusercontent\.com/, r => { live++; r.abort(); });
  const p = await ctx.newPage();
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('pageerror', e => errs.push(e.message));
  await p.goto(base + '/index.html');
  await p.click('#tab-new');
  await p.fill('#f-id', 'lab-test-' + Date.now()); await p.fill('#f-name', 'Lab Test'); await p.fill('#f-pw', 'lab-test-pw');
  await p.click('#btn-go'); await p.waitForSelector('#screen-app:not(.hidden)');
  const lab = async () => { await p.click('button[data-view="lab"]'); await p.waitForSelector('[data-tool="dial"]'); };

  console.log('Certainty Dial');
  await lab(); await p.click('[data-tool="dial"]');
  await p.locator('#dial-range').fill('0');
  const bb = await p.locator('#dial-range').boundingBox(), y = bb.y + bb.height / 2;
  await p.mouse.move(bb.x + 4, y); await p.mouse.down();
  for (let x = bb.x + 4; x <= bb.x + bb.width; x += 8) { await p.mouse.move(x, y); await p.waitForTimeout(10); }
  await p.mouse.up();
  check(await p.locator('#dial-range').inputValue() === '4', 'dragging the slider end to end reaches must');
  check(/must/.test(await p.textContent('.dial-sent')), 'the sentence follows the drag');
  await p.click('#dial-quiz');
  const n = +(/of (\d+)/.exec(await p.textContent('.dial-card .kicker')) || [])[1];
  check(n > 0, 'the Challenge starts (' + n + ' pieces of evidence)');
  let sawPast = false;
  for (let i = 0; i < n; i++) {
    check(await p.isVisible('.dial-sent') && !(await p.$('#dial-verdict')), 'evidence ' + (i + 1) + ': sentence visible before locking');
    const time = /past/i.test(await p.textContent('.dial-ev .lens-k')) ? 'past' : 'now';
    if (time === 'past' && !sawPast) {
      sawPast = true;
      await p.keyboard.press('3');   /* should: no past guess form */
      check(/no past guess form/.test(await p.textContent('#dial-note')) && await p.locator('#dial-range').inputValue() !== '2', 'past evidence refuses should, with a note');
    }
    await p.keyboard.press(String(1 + (i % 5 === 2 || i % 5 === 3 ? 0 : i % 5)));
    const before = await p.textContent('.dial-sent');
    await p.keyboard.press('Enter');
    check(await p.isVisible('#dial-verdict') && (await p.textContent('.dial-sent')) === before, 'evidence ' + (i + 1) + ': lock keeps the student\'s sentence and adds a verdict');
    await p.click('#dial-next');
  }
  check(await p.isVisible('.dial-result') && (await p.$$('.dial-result .arc-miss')).length === n, 'a Challenge ends on a result card with every piece of evidence');
  await p.click('#dial-explore');
  check(await p.isVisible('#dial-quiz'), 'back to Explore');

  for (const g of ['detective', 'cliff', 'time']) {
    console.log('Game: ' + g);
    await lab(); await p.click('[data-game="' + g + '"]');
    await p.waitForSelector('.arc-btn');
    const secs = parseInt(await p.getAttribute('.arc-bar', 'title'), 10), words = await p.evaluate(() => document.querySelector('.arc-card').innerText.split(/\s+/).length);
    check(secs >= Math.min(30, words * 0.3), 'the clock (' + secs + ' s) allows for ' + words + ' words on screen');
    await p.waitForTimeout(800); await p.keyboard.press('1');
    const w = await p.evaluate(() => parseFloat(document.getElementById('arc-bar').style.width));
    check(w > 0 && w < 100, 'the time bar freezes where the answer was given (' + Math.round(w) + '%)');
    await p.keyboard.press('Enter');
    /* Let the second case run out. */
    await p.waitForSelector('#arc-next', { timeout: 35000 });
    check(/Time up/.test(await p.textContent('.verdict')), 'a case left alone times out');
    for (let k = 0; k < 30 && !(await p.$('#arc-again')); k++) {
      if (await p.$('#arc-next')) await p.keyboard.press('Enter'); else await p.keyboard.press('2');
      await p.waitForTimeout(60);
    }
    check(!!(await p.$('#arc-again')), 'the round ends on a result card');
    const misses = await p.$$eval('.arc-miss', els => els.map(e => e.innerText));
    check(misses.length > 0 && misses.every(t => /You chose|time ran out/.test(t) && /→/.test(t)), 'each miss shows the answer given and the right one');
    await p.click('#arc-home');
  }

  console.log('Rule Board');
  await lab(); await p.click('[data-tool="board"]');
  await p.click('[data-cover="past"]');
  check((await p.$$('.rb-cell.covered')).length === 7, 'Cover the past hides the 7 past cells only');
  await p.click('.rb-cell.covered >> nth=0');
  check((await p.$$('.rb-cell.covered')).length === 6, 'tapping a covered cell reveals it');
  await p.click('[data-cover="all"]');
  check((await p.$$('.rb-cell.covered')).length === 14, 'Cover all hides all 14 cells');
  await p.click('#lab-back');

  console.log('Flashcards');
  await p.click('[data-cards="all"]');
  await p.keyboard.press(' ');
  check(!!(await p.$('#fc-yes')), 'Space flips the card');
  await p.keyboard.press('2');
  check((await p.textContent('.qcount')).trim().startsWith('2 /'), '2 = knew it, next card');

  const over = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  check(over <= 0, 'no sideways scroll at 390 px');
  check(errs.length === 0, 'no console errors' + (errs.length ? ': ' + errs.join(' | ') : ''));
  check(live === 0, 'no request reached the live Sheet (' + live + ')');
  await browser.close(); srv.close();
  console.log(fails ? '\n' + fails + ' FAILED' : '\nLAB OK');
  process.exit(fails ? 1 : 0);
})();
