# Fine Tuning — The English Modal System

A self-study app for English modal verbs, B1 → C1. Ten stages, thirty levels,
ninety modules, 702 questions, and three tests: a **triage** that decides where a
student should start, and two **final checks**, one at B2 and one at C1.

It runs on the same engine as Mission Control, unchanged. Everything here that is not
`engine.js`, `api.js`, `theme.css` or `content-export.js` is new.

The reasoning behind the ladder is in **[ANALYSIS.md](ANALYSIS.md)** — read that first if
you want to know why a module is where it is.

---

## Putting it online

It is a static site. Drop the whole folder into a GitHub repository, turn on Pages
(Settings → Pages → Deploy from a branch → `main` / root), and it is live. No build step.

Two files open it:

| file | who it is for |
|---|---|
| `index.html` | the student |
| `teacher.html` | you — the class console, behind a PIN |
| `podcasts.html` | a listening-only page for the bus; no sign-in, no questions |

---

## Connecting the class server

Until you do this, the app works perfectly well but keeps everything in the student's own
browser: no class list, no teacher console, no record if they switch device.

1. Make a new Google Sheet.
2. Extensions → Apps Script. Replace everything in `Code.gs` with the `Code.gs` in this
   folder. The full instructions are in a comment at the top of that file.
3. Deploy → New deployment → Web app → Execute as **Me**, access **Anyone**. Copy the
   `/exec` URL.
4. Paste it into **both** `index.html` and `teacher.html`, on the line

   ```js
   window.MC_API_URL = '';
   ```

5. The teacher PIN is `1234` until you set a `TEACHER_PIN` script property.

The URL currently wired into both files is

```
https://script.google.com/macros/s/AKfycbzMjkf-r9gOMga61DUp0kRrxZ1zAOQmR7k2xhbr7VAMRTkaGO3Rds98rcsNNsvwBG1V/exec
```

### Clearing out a test account

`Code.gs` has a maintenance function for this. Put the ids in the `TO_PURGE`
list near the bottom of the file, save, then **Run → purgeListed** from the
Apps Script editor. It removes the student's row and every row they left on
Attempts, Tests and Sessions. Nothing about it is reachable over the network,
and running it from the editor does not need a redeploy.

**Remember:** editing the Apps Script and saving it does *not* update the live endpoint.
You must do Deploy → Manage deployments → pencil → New version → Deploy. Same URL,
new code.

---

## Adding a podcast or a video

Everything is already wired. `media.js` has one entry per stage:

```js
t5: { title: 'Distance', podcast: 'audio/stage-5.mp3', slides: '', video: '' },
```

- **Podcast** — record it, save the MP3 as `audio/stage-5.mp3`, push. The player appears on
  that stage's card and on the Podcasts page. Nothing to edit.
- **Video** — paste a normal YouTube link into `video`. Any shape works: `youtu.be/…`,
  `watch?v=…`, `/embed/…`, `/shorts/…`. It then plays inside the app and the stage appears
  on the Videos screen.
- **Slides** — `slides` takes a URL that serves a PDF *directly*. A Google Drive share link
  will not work; Drive returns a viewer page. Put the PDF in `slides/` and use a relative
  path, `slides/stage-5.pdf`.

**An empty field means no button.** That is deliberate: you can add one episode at a time,
in any order, and a stage with nothing yet simply shows no media strip. Nothing breaks
while a field is blank, and nothing else in the app needs touching.

Listening and watching are tracked. The teacher console reports plays, minutes heard,
whether the episode was finished, and how often the video and slides were opened, with the
stages nobody has opened marked in red.

### The revision-sheet slides

Separately from the above, the revision sheet can carry a strip of summary images. It is
switched off because there are none yet. To turn it on, save them as `slides/s-01.jpg`,
`s-02.jpg`, … and add one caption per image to the `RVSLIDES` array near the top of
`student.js`. Leave the array empty and the strip does not appear.

---

## The files

| file | what it is |
|---|---|
| `index.html` | the student app — page shell, the login card, the nav, the script list |
| `teacher.html` / `teacher.js` | the class console |
| `podcasts.html` | the listening-only page |
| `theme.css` | all the design tokens and components; light and dark follow the OS |
| `engine.js` | item rendering and marking, progress, unlocks, the fault list, XP, badges, test scoring. From Mission Control, plus four pieces ported from TCAS70 Launchpad (Oct 2026): the mind-map drawer, the italic *Situation* line in dialogues, order-item feedback that names sentences by their first words, and "rules covered" counting only rules answered correctly. Pass marks unchanged (60% / 75%). |
| `api.js` | one client for both consoles; cloud when a server URL is set, localStorage when not. **Unchanged.** |
| `content-export.js` | attaches the media to each stage and hands the curriculum to the engine. **Unchanged.** |
| `content.js` | the rank ladder, the awards, and the 86-tag remediation dictionary that drives the hints and the teacher report |
| `topic-s1.js` … `topic-s8.js` | the eight core stages — the whole syllabus |
| `topic-s9.js` | Stage 9, the Unit 5 review (Gateway to the World B2, Unit 5) — see below |
| `topic-s10.js` | Stage 10, modals in the TCAS70 paper — see below |
| `lenses.js` | the lesson lenses for all 90 modules: ภาษาไทย, mind map, story, chant, moves, analogy and trap — see below |
| `lab-data.js` | the Modal Lab: dial scenes, Detective cases, Cliff sentences, Time Machine items and the 73 flashcards |
| `test-1.js` | the triage. **Loads first, and must: the engine treats the first test as the diagnostic.** |
| `test-2.js` / `test-3.js` | the B2 and C1 final checks |
| `media.js` | the podcast, video and slide links |
| `roster.js` | the class list behind the Fast Access tab, and an optional deadline |
| `Code.gs` | the Google Apps Script server — paste into a Sheet, not served from here |
| `verify.js` / `render-test.js` | offline checks; see below |
| `ANALYSIS.md` | the first-principles treatment of the modal system the course is built on |
| `REVIEW-LOG.md` | the record of the content review — one line for every item that changed |
| `rebalance.js` | evens out which option position the keys sit on; see below |
| `audit.js` | answer-key balance per stage and per test: key position, key-is-longest rate, spot and True/False splits, hint leaks |

---

## Stage 9 — the Unit 5 review

Stage 9 consolidates the grammar of **Gateway to the World B2, Unit 5** (pp. 60–61,
64–65, 68–69) in the book's own terms, so students on the coursebook can revise the unit
inside the app. Three levels, nine modules, 63 items, nine tags (all beginning `u5-`):

| level | modules | book pages |
|---|---|---|
| Rules now | have to / must / need to and their negatives · should, ought to, had better · forms: to or no to, questions, negatives | 60, 68, 69 |
| Rules then | had to, needed to, didn't have to · wasn't allowed to, couldn't · needn't have, didn't need to, should(n't) have | 60–61, 68, 69 |
| Guesses | must / might / can't about now · must have / might have / can't have · past guesses: have + past participle | 64–65, 68, 69 |

The triage test now has a **Part E** (items m1-21 to m1-26, one per key Unit 5 point). A
miss there puts the matching Stage 9 module on the student's checklist; Parts A–D still
route to Stages 1–8 as before.

October 2026: two items were replaced so that every point on the Unit 5 grammar page (p. 68)
is practised, not just explained — `t9l1s1-5` now tests *can't* for refusing permission
("Can I go…?" — "No, you can't"), and `t9l3s1-5` tests *mightn't* in a guess about the
future. The theory of both modules gained a matching line and example. The podcast
(`audio/stage-9.mp3`) is now wired in.

### Coverage of the Unit 5 grammar page

| point on p. 68 | where it is practised |
|---|---|
| have to / don't have to / must / mustn't / need to / don't need to / needn't (no *to*) / can't (refusing permission) | t9l1s1, t9l1s3 |
| should / shouldn't / ought to / had better (rare in negatives and questions) | t9l1s2, t9l1s3 |
| had to / didn't have to / needed to | t9l2s1 |
| didn't need to vs needn't have + pp | t9l2s3 |
| wasn't / weren't allowed to, couldn't (prohibited or not possible) | t9l2s2 |
| should / ought to / shouldn't have + pp (criticism) | t9l2s3 |
| must / may / might / could / may not / mightn't / can't — present and future | t9l3s1 |
| must have / may (not) have / might (not) have / could have / can't have | t9l3s2, t9l3s3 |

The Modal Lab's **Rule Board** lays the same page out as one interactive grid.

---

## Stage 10 — modals in the TCAS70 paper

The TCAS70 Launchpad map shows where modals actually cost marks in the A-Level paper:
conversation gaps (advice, requests, permission, *should have* — 10 keys across the five
mocks), and Text Completion blanks that hinge on the subjunctive, conditionals and passive
infinitives. Stage 10 trains exactly those, in the paper's own item shapes (dialogue gaps
where the line after the blank decides, cloze passages, reading questions). 63 items,
nine tags (all beginning `tc-`):

| level | modules |
|---|---|
| Conversations: the line after the blank | requests, offers, permission · advice, warnings and *should have* · guessing in conversation and stance markers |
| Text Completion: modals inside the sentence | modal + passive and passive infinitives · the subjunctive after *recommend / suggest / insist that* · conditionals and inversion |
| Reading: what the writer is sure of | hedged claims in news · rules and fine print · the writer's stance through modals |

The triage now has a **Part F** (m1-27 to m1-32) that routes to Stage 10. The triage is
32 questions and 38 minutes, and the rank ladder tops out at 30 stage checks.
`media.js` has a `t10` entry with the podcast left empty — save `audio/stage-10.mp3` and
put that path in.

---

## Lesson lenses

Every module now opens with tabs, the same set as TCAS70 Launchpad: **Explain · Simple
English · ภาษาไทย · Mind map · Story · Chant · Moves**. Explain also shows an analogy and
the trap. The Story tab is a short comic strip with a recurring cast (Nong Bot, the robot
who takes every modal literally; Ploy, Fah, Mai, Nan, Pim, Mint; and T.Chris, who fixes
Bot's mistake). Chant has a play button for a kick-kick-clap beat.

The lenses live in `lenses.js`, keyed by module id, and are merged into the module's
theory when the lesson opens — so a module without an entry simply shows fewer tabs.
The Settings switch for simpler English now opens lessons on the Simple English tab.
The Thai was written for this app and has not yet been read by a native speaker; it is
worth a skim.

---

## The Modal Lab

A new tab in the student nav. None of it touches the route or the checklist.

- **The Certainty Dial** — slide from *can't* to *must* and watch the sentence change;
  switch to PAST and *have* + participle appears (and *should* / *will* are greyed out,
  with the reason). Challenge mode shows a piece of evidence and the student sets the dial.
- **The Rule Board** — the Unit 5 grammar page as one grid, present against past. "Cover
  the forms" hides every cell for self-testing; each row links to its Stage 9 module.
- **Games** — *Modal Detective* (40 cases: must / might / can't, now and past, 10 s each),
  *The Negation Cliff* (40 sentences: no obligation or not allowed?), *Time Machine*
  (30 items: send a sentence into the past). Three lives, a streak multiplier, a reason
  after every answer, keys 1–4, best scores kept, and XP for points.
- **Sprints** — six timed runs over the practice bank (never the tests): How Sure?, Rules,
  Unit 5 Blitz, Politeness, TCAS70 Pace (67 s a question) and Full Mix 20. Weak and unseen
  rules come first; misses go onto the fault list.
- **Flashcards** — 73 modal forms (form, function, meaning, Thai, example) in a five-box
  Leitner cycle.

Best scores, sprint records and flashcard boxes are saved inside the student's progress
(`lab`, `sprints`, `flash`), so they travel with the account.

---

## Checking the content after you edit it

Two scripts, both offline, both run from this folder:

```
node verify.js        # structure: ids, tags, answer indices, escaped fields, ranks, media
node render-test.js   # mounts all 702 items in a headless DOM and answers each one
node audit.js         # key balance per stage/test; `node audit.js t3` for one stage in detail
```

`audit.js` holds the balance the 25 September review set: in every stage and every test
paper each option position carries about a quarter of the keys, the key is the longest
option only about a quarter of the time, and the error in `spot` items moves between all
four parts. Run it after adding or rewording questions, and fix any drift by hand in that
stage rather than with `rebalance.js`, which only balances the app as a whole.

`verify.js` is the one to run every time. It catches the mistakes that are invisible until
a student hits them: a duplicate id, a tag with no entry in `REMEDIATION`, an answer index
past the end of the options, `<em>` written into a field that is printed as plain text, a
`___(6)___` marker that does not match its `blank`, a rank threshold that no longer matches
the number of stage checks. It exits non-zero, so it can gate a deploy.

`render-test.js` needs `npm install jsdom`. It draws every item through the real renderer,
clicks the declared correct answer, and fails if the engine disagrees — which is how you
find an item whose key is wrong rather than merely oddly worded.

`rebalance.js` is the third, and you only need it occasionally. If you add a batch of
questions and `verify.js` starts warning that one option position is holding too many of
the keys, run `node rebalance.js` to see what it would do and `node rebalance.js --write`
to do it. It swaps two options and updates `answer` — it never rewords anything, and it
skips any item whose `why` refers to an option by number or by position, so no explanation
can be made untrue.

`verify.js` also checks `lenses.js` and `lab-data.js` (module ids, escaped fields, answer
values, card themes).

All clean at the time of writing (5 October 2026): 702 items, 86 tags, no errors, no warnings.
(They also run from the folder above, if you keep the app in a subfolder.)

---

## Two things to know before editing the content

**The tag is the routing.** Every question carries a `tag`, every tag has an entry in
`REMEDIATION` in `content.js`, and that entry decides what the student sees when they press
Hint and what you see in the console. More importantly, when a student misses a question on
a test, the engine sends them to whichever *module* spends the most questions on that tag.
A tag used only in a test and never in a module routes nobody anywhere — `verify.js` treats
that as an error.

**Some fields are printed as plain text.** Stage, level and module names, blurbs, CEFR
bands, and a test section's instructions are escaped, so markup written into them shows up
literally on screen. Question stems, options, `why` explanations and theory paragraphs are
raw HTML and take `<em>`, `<strong>`, `<b>`, `<u>` and `<s>`. Passages, dialogue lines,
error-identification segments and sentence-building tiles are escaped — use `\n\n` for a
paragraph break in a passage, never `<p>`. `verify.js` checks all of this.

---

## What the numbers mean

- A **module** is cleared at 60% — 3 of its 5 questions.
- A **stage check** is cleared at 75% — 5 of its 6 questions, and it opens only once all
  three modules in that level are cleared.
- Nothing else is ever locked. Every stage and every level is open from the first day; the
  checklist the triage builds is the shortest route, not the only one.
- The rank ladder is the certainty scale itself: **No Reading → Might → Could → May → May
  Well → Should → Will → Must → Beyond Doubt**, one rung per band of the 30 stage checks.
