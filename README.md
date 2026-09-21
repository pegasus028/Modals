# Fine Tuning — The English Modal System

A self-study app for English modal verbs, B1 → C1. Eight stages, twenty-four levels,
seventy-two modules, 564 questions, and three tests: a **triage** that decides where a
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
| `engine.js` | item rendering and marking, progress, unlocks, the fault list, XP, badges, test scoring. **Copied from Mission Control unchanged.** |
| `api.js` | one client for both consoles; cloud when a server URL is set, localStorage when not. **Unchanged.** |
| `content-export.js` | attaches the media to each stage and hands the curriculum to the engine. **Unchanged.** |
| `content.js` | the rank ladder, the awards, and the 68-tag remediation dictionary that drives the hints and the teacher report |
| `topic-s1.js` … `topic-s8.js` | the eight stages — the whole syllabus |
| `test-1.js` | the triage. **Loads first, and must: the engine treats the first test as the diagnostic.** |
| `test-2.js` / `test-3.js` | the B2 and C1 final checks |
| `media.js` | the podcast, video and slide links |
| `roster.js` | the class list behind the Fast Access tab, and an optional deadline |
| `Code.gs` | the Google Apps Script server — paste into a Sheet, not served from here |
| `verify.js` / `render-test.js` | offline checks; see below |
| `ANALYSIS.md` | the first-principles treatment of the modal system the course is built on |
| `REVIEW-LOG.md` | the record of the content review — one line for every item that changed |
| `rebalance.js` | evens out which option position the keys sit on; see below |

---

## Checking the content after you edit it

Two scripts, both offline, both run from this folder:

```
node verify.js        # structure: ids, tags, answer indices, escaped fields, ranks, media
node render-test.js   # mounts all 564 items in a headless DOM and answers each one
```

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

Both were clean at the time of writing: 564 items, 68 tags, no errors, no warnings.
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
  Well → Should → Will → Must → Beyond Doubt**, one rung per band of the 24 stage checks.
