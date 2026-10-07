# QA report — Fine Tuning (Modals)

## Modal Lab play-through — 7 October 2026

Every Lab tool and game was played as a student in headless Chromium at 390 px (light) and 420 px (dark), with the API URL blanked and every Apps Script request aborted (**zero reached the live Sheet**). The Lab content had been read item by item in the morning audit below; this pass is about how the games behave in a student's hands.

### Headline

| | |
|---|---|
| Live site = repo before the pass | yes (`cmp`-identical to `21a52ed`) |
| Bugs found by playing | 9 (2 that block or mislead, 7 that weaken the game) |
| Files changed | `student.js`, `theme.css`, `lab-data.js` (one label), `README.md`, cache tags in `index.html` / `teacher.html` |
| New test | `lab-test.js` — plays the whole Lab in a real browser (dial drag, a full Challenge, all three games including a time-out, both Rule Board covers, flashcards by keyboard) and ends `LAB OK` |
| Content (items, keys, explanations) | unchanged; `verify.js` CLEAN, `render-test.js` all 702 mark correctly, `qa.js` 0 errors |
| IDs, storage keys, API URL, Sheet columns | **unchanged** — best scores, flashcard boxes and progress are safe |

### What a student ran into, and what changed

| Where | Before | After |
|---|---|---|
| **Certainty Dial · Challenge** | The sentence the dial builds was hidden until *Lock it in*, so the student set a gauge blind and only then saw what she had claimed | The sentence and its meaning ("About 90% sure it IS true…" + Thai) update live as she turns the dial; after locking, it stays as **Your sentence** with a green or red frame |
| **Certainty Dial · slider** | Every step of the slider rebuilt the whole card, including the slider. A drag stopped after one notch: dragging end to end from *can't* landed on *might*. On a phone the dial could only be moved by tapping | Turning the dial redraws only the gauge and the sentence; a full drag reaches *must* (tested) |
| Certainty Dial · past evidence | Moving the slider to *should* or *will* on past evidence silently did nothing, while the slider thumb moved — needle and slider disagreed | The thumb snaps back and a note says *should* / *will* have no past guess form |
| Certainty Dial · verdict | "Not quite. The evidence points to should" with no reason; a run ended in a toast | Wrong answers give the right sentence and what that setting means; a Challenge ends on a result card listing each piece of evidence, her setting and the right one, with **Next scene** / **Back to Explore** |
| Games · clock | One flat clock per game: Detective 10 s for clues of up to 34 words (median 27), Time Machine 18 s for up to 67 words (median 45), Cliff 8 s for up to 25. Slower readers timed out before finishing the clue, so the game paid for guessing | 0.4 s a word on screen + 3 s, never below the old figure, never above 30 s (e.g. a 46-word Detective screen 20 s, a long Time Machine set 25–30 s). Time bonus = share of the clock left, max +100 as before |
| Games · time bar | After answering, the bar jumped back to full | It freezes where the answer was given |
| Games · result card | Each miss showed only the correct sentence, in red uppercase monospace — it looked like the error | Each miss shows the clue, **You chose: …** (or "time ran out"), the right sentence and the reason, in readable type |
| Games · scrolling | A new case could start its clock with the clue scrolled off the top (after scrolling down to *Next*) | A new case scrolls the clue into view |
| Modal Lab tab | Tapping **Modal Lab** while inside the dial, board, a game or flashcards re-opened the same tool; the only way home was the small "← Modal Lab" link | The tab returns to the Lab home (flashcard boxes are saved first) |

Smaller improvements: Rule Board gets **Cover the past** (hides only the past column — "say how this meaning moves back in time") besides **Cover all**, with a "cells checked" count; flashcards take Space (flip), 1 (not yet) and 2 (knew it); the dial takes 1–5 and Enter; key hints are hidden on touch screens; the dial's tool card shows the best Challenge score; the phone-call scene button reads "The caller · Grandma" instead of "That · Grandma"; game blurbs no longer promise "ten seconds a case".

### Checked and fine

Sprints (all six start from the Lab, run their clock, finish on a result card and return to the Lab); flashcard Leitner boxes; Rule Board links to Stage 9 modules; no console errors; no sideways scroll at 390 px; explicit dark background. Cache tags bumped to `?v=2026-10-07lab` because `student.js` and `theme.css` changed together.

### Judgement calls for you

- **Scoring change.** Time Machine's maximum per answer drops from 280 to 200 points (the bonus is now a share of the clock), and The Negation Cliff's rises from 180 to 200. Old Time Machine best scores will be a little harder to beat.
- **Clock length.** 0.4 s a word suits B1 readers; if the games now feel too relaxed for your stronger groups, the one number to change is in `arcSecs()` in `student.js`.
- **XP from the Lab** is unchanged: replaying a dial scene or a game still earns XP. It only feeds the header count and the teacher report, not ranks or the checklist.
- **Storage keys shared with Mission Control** (P0 below) are still waiting for your go-ahead.

Run `node lab-test.js` after any change to the Lab (needs `npm install playwright`; set `CHROME_PATH` to use an installed Chromium).

## Earlier review — October 2026 (content audit, 7 October)

Audited against the **app-audit** checklist, with every item, lens, Lab card and hint read against the teacher's **modal-verbs** rules (§3 core rules, §5 item rules, §9 common mistakes). Stages 1–8 and the three tests had been reviewed twice before (see REVIEW-LOG.md). Stage 9 (Unit 5 gaps), Stage 10 (TCAS70), the 90 lesson lenses and the Modal Lab had never been reviewed.

### Headline

| | |
|---|---|
| Live site = repo before the audit | yes (every file `cmp`-identical to `cca2c9f`) |
| Scripts that fail to parse | 0 (acorn, every `.js` and inline `<script>`) |
| Items read | 702 (630 lesson + 72 test) |
| Items changed | **196** (key or options changed in 22; the rest are explanations, stems, spot parts, build ALTs, names) |
| Lesson lenses changed | **57 of 90** |
| Modal Lab entries changed | 15 game entries + 9 reference cards + 2 strings in student.js |
| Hints (REMEDIATION) changed | **44 of 86** |
| Engine / mechanics fixes | 4 (dates in Bangkok time, review spacing, time bonus, spot `also`) |
| New automated checks | `qa.js` (13 checks), spot every-part test in `render-test.js`, `also` range check in `verify.js` |
| IDs, storage keys, API URL, Sheet columns | **unchanged** — progress, review queues and teacher reports are safe |

### P0 — needs your decision (not changed)

**Storage keys shared with Mission Control.** This app stores everything in localStorage under the `mc.` prefix (`mc.outbox.v1`, `mc.token`, `mc.apiUrl`, `mc.local.v1`, `mc.session`). Mission Control, also on `pegasus028.github.io`, uses exactly the same keys. A student who uses both apps on one device shares one answer queue between them: answers queued in one app can be sent to the other app's Apps Script and land in the wrong Sheet, and one server's login token is sent to the other. (Passive-Voice uses `pv.`, TCAS70 `tc70.`, Comp-Superlatives `db.`, so only this pair collides.)

The fix is a new prefix (for example `ft.`) plus a one-time migration that moves only queued rows whose tag belongs to this course and copies the offline store. I prepared it but did **not** ship it: it renames storage keys and touches data Mission Control also reads, which the audit rules reserve for you. Say the word and it is a ten-line change in `api.js` (and `mc.pod.` → `ft.pod.` in `podcasts.html`).

### Mechanics fixed

| Area | Before | After |
|---|---|---|
| "Today" (streaks, daily goals) | UTC date — anything done before 7 a.m. in Bangkok counted towards yesterday | Bangkok date (`engine.js` `today()`) |
| Fault-list spacing | `addDays()` parsed a local midnight and printed it in UTC, so on a Bangkok device "a missed question returns tomorrow" returned **the same day**, and "three days later" was two | Pure UTC calendar arithmetic; checked under `TZ=Asia/Bangkok` (missed today → due tomorrow) |
| Time bonus | One 7-second limit for every question. The median timed question is 46 words; 94% cannot be read in 7 s at 200 wpm, so the bonus paid for clicking before reading | `Engine.speedMs(item)`: 250 ms per word on screen, min 7 s, max 25 s (median question 11.5 s). Ring, number and tooltip use it; Quick Ear badge text updated |
| Spot items | Only `answer` could be right | Engine accepts `also: [i, …]` (other parts that point at the same mistake), marks that click green; `verify.js` range-checks it; `render-test.js` now clicks **every** part of every spot item and fails if any part other than `answer`/`also` is accepted |
| Cache | `?v=2026-10-05ml` | `?v=2026-10-07qa` on every script tag in `index.html` and `teacher.html` (engine and content changed together) |

Checked and fine: API URL identical in both HTML files; `text/plain` POSTs; offline fallback and outbox retry; the teacher PIN is checked by Apps Script (the 1234 PIN only opens data stored in that browser); no API keys in the front end; no student data in the repo (`roster.js` is empty). Headless Chromium at 390 px (light) and 420 px (dark), API URL blanked: every view, a module's seven lesson tabs and five answered questions in Stages 3, 7 and 9 — no console errors, no failed requests, no horizontal overflow, explicit dark body background, **zero requests to the live Sheet**.

### Fairness

| | Before | After |
|---|---|---|
| MCQ key position (A/B/C/D, 486 items) | 122 / 123 / 125 / 116 | unchanged (no key moved position) |
| Key is the longest option | 25% | 25% |
| Key is the shortest option | 16% (5–7% in Stages 6, 7, 9) | 16% — see judgement calls |
| Sort chips, build tiles, order cards | shuffled at render | unchanged |
| Spot parts that were equally valid clicks | m2-8, t6l3s1-5 | sentences rebuilt so only one part is wrong |
| Held-out test items copying a lesson item | m1-32 (reskin of the SKYLINE notice t10l3s2-1), m1-23 (t9l2s1-2), m2-12 (t3l2ck-3) and six lighter echoes | the three copies rewritten with new scenarios; m1-11, m1-16, m1-6, m1-22, m1-24, m2-9 reworded |

### Rule violations fixed (modal-verbs §3)

| Rule | Where | Fix |
|---|---|---|
| *-s* form after a mandative trigger never a distractor or keyed error (informal BrE accepts it) | t10l2s2-1 (*brings*), t10l2s2-4 (keyed *brushes*), m1-30 (*wears*); hint tc-subjunctive; lens t10l2s2 | distractors → *bringing / wearing*; keyed error → *to brush*; hint and lens now say "the exam answer is the base form; *-s* is informal, not wrong" |
| Never rank *may* against *might* | lens t5l1s2 (*might* = "25%", one step below *may*); hint dist-tentative; t7l2s1-1, t6l2s2-3, t6l2ck-5 (*may/might* as near misses); t2l1s2-3 | ranking removed; distractors swapped for forms that differ on the point tested |
| No certainty numbers finer than the coursebook's ~50 / ~90 | lens t2l2s3 (95%, 75%), t5l1s2 (25%), t10l3s1 (40%, 70%), t7l2s1 story (95%) | numbers replaced by words (sure / expected / possible) |
| Never *mustn't* for "sure not" | t3l2s2-5 and t6l1ck-2 explanations treated *mustn't have* as a working guess; tm19 | rewritten: *mustn't* is for rules, the negative deduction is *can't have* |
| *must* / *have to*: ownership test, not "*must* = a rule you made yourself" | lens t3l1s1 (Thai, analogy, trap, map, story moral, chant, moves), lens t9l1s1, hints deo-source and u5-now-neg, Lab cards *must* and *have to*, Rule Board note, Stage 3 lesson text, t3l1s1-1/-2/-3/-4/-5, t3l1ck-4, t9l1ck-1, m2-3 | all now say: *must* = the speaker owns or stands behind the obligation ("I say so" — her own resolution, a parent or teacher, the school's own notice); *have to* = she passes it on or circumstances force it ("not my idea"); a British tendency, *have to* always safe. The old "who would be annoyed?" test is gone |
| *should have* = ควรจะ; never *could have* = ควรจะ | Lab card *should have* (น่าจะ), lens t6l2s1 | ควรจะ… (แต่ไม่ได้ทำ) |
| ไม่ต้อง / ต้องไม่ | lens t3l2s1 said ไม่ต้อง "can mean both 'don't!' and 'no need'"; card *mustn't* lacked ต้องไม่ | contrast stated the right way round |
| *could have* has two senses (missed chance **or** past possibility) | ten t4 explanations, t6l2ck-3/-4, lens t6l2s2, hint past-could said it always means "did not happen" / "no blame" | each tailored: "either a missed chance or a guess; here…" |
| Stative cue after *must* is a cue, not a law | lenses t2l1s3, t8l1s2; hints epi-must, epi-prog; t2l1ck-3, t8l1s2-1/-5, t8l1ck-4 | "usually", with the passive-rule exception (*Forms must be signed*) |

### Wrong keys, second answers and broken items (P1) — examples

| Item | Problem | Fix |
|---|---|---|
| t2l2s3-4 | *may not be telling us* (and then *need not*) also fitted blank (2) | rivals replaced (*will*, *should*); WHY rewritten |
| t2l3s3-3 | "the speaker knows" — inference can count as knowing, so Can't tell was defensible | stem asks whether she presents a conclusion; key True |
| t3l1s3-2, t3l3s3-2 | *are supposed to* / *Residents are advised* left the key open | re-anchored (past *were supposed to*; *We recommend that…*) |
| t4l3s1-4 | keyed "error" *the freezer does not want to close* is idiomatic English | keyed part is now *is not willing to close* |
| t5l3s3-5, t8l3s1-5, t4l3s1-3 | predictive *will* after *if* is grammatical when the main-clause action comes first (*If it will help…*) | chips/options rebuilt so the consequence follows the *if*-event; WHYs no longer say *will* "never" survives |
| t7l1s1-3 | key said *may* narrows the claim to "some cases" — the stage itself teaches that scope is *tend to*'s job | key: "It lowers the writer's commitment from fact to possibility" |
| t8l2ck-3 | option produced *must have been be lodged* while the WHY called it well formed | option → *may well* |
| t8l1s3-2 | a chip read naturally as a rota rule, not a deduction | chip rewritten |
| t10l2s1-1 | *must have been checked before the next rainy season* is correct (deadline perfect) | distractor → *had to be checked* |
| m3-3 | *If the developer would meet the quota* is natural (willingness) | subject is now *the scheme* |
| m3-12 | key claimed the writer "takes no side" — contradicting t7l2ck-6 | key: the sentence does not say whether the writer agrees |
| m1-3, m3-2, m3-19 | second defensible options (*should be*, *managed to hear*) / key overclaimed a hedge | distractors replaced; key brought down to the text's strength |
| t1l1s3-2 | gap line already contained *we*, so options read "Should we we book it" | line fixed |
| t3l1s2-5, t3l3ck-6, t5l1ck-5, t8l2s1-2, t9l1s3-3 | correct alternative word orders were rejected | added to `alt` |
| Lab dial | the *should* rung said "a timetable **or a reliable pattern**", so *should* was also right on every *will* line; dial2/4/5/8 lines had two right rungs | rung redefined (plan or timetable, if nothing has gone wrong); evidence lines rewritten so one rung wins |
| Lab tm18 | *Sam can't understand the joke* is ability, but the key turned it into *can't have understood* (deduction) | rebuilt as a deduction (*can't know about the party*) |

### False or overclaiming explanations (P2)

Roughly 110 explanations across all stages, the tests, the lenses and the hints said "always", "never", "only" or "the only way" where English allows more. Typical fixes: *had to* is "the usual past of *must*", not "the only past of obligation"; *could* covers general past permission, so "*can* and *may* have no past" is gone; *shall* is "fading", not "dead"; *will* has a command use (*You will report at nine*); *You should* is ordinary advice between friends (lens t5l2s2 said it needs authority); a modal + bare verb refers to now **or the future**; *didn't need to* says nothing about whether it was done. The full list is in the commit diff.

### Context

- **All-girls school.** Boys appeared as classmates or teenage peers in about 20 places (Tom, Ben, Sam, Jack, Dan, Josh, Anan, Anucha, Krit, Tim, Kittipong, Teerapat, Bank, a coached son, and a male Nong Bot). All are now girls (Nan, Bua, Sai, Dao, Jane, Fah, Pim, Ploy, Kwan…), or Bot is "it". Adult men in workplace dialogues (a technician, an engineer, a driver) were kept.
- **Avoided topics:** the River Kwai bridge (war) → Erawan Waterfall; "film inside the temple" and "to a monk" → museum / grandparents.
- **Things that go stale:** the SKYLINE offer "…31 December 2026" → no year. "Chao Phraya University" (a real university) → "a Bangkok university".
- **Safety:** a Lab clue had a teacher sending a LINE photo while driving → a hands-free call.

### Hints (REMEDIATION)

44 of 86 principles edited. Most of the changes fixed claims that were false or contradicted another hint. In u5-now-form, *ought* and *be allowed* had been put in the group that takes *do* (teaching *Do we ought to…?*). hedge-boost had placed *must* above the plain assertion.

Four hints gave away an item's answer, and their names were renamed:
- past-could quoted m3-11's key;
- tc-modal-passive named the keys of t10l2s1-1 and -2;
- hedge-approx gave away m3-17;
- dist-ifwill gave away t5l3ck-6.

32 broken apostrophes in the teacher notes were restored (`wasn-t` → `wasn't`).

### New checks (`node qa.js`, 0 errors at ship)

1. A spot stem must ask for a mistake.
2. A fix must not leave a doubled word.
3. A sort box hint must not share a word with its own chips (this check warns rather than fails).
4. A sort chip must not contain its own box label.
5. No identical options.
6. A distractor that is the key with only *may↔might* or *can't have↔couldn't have* swapped is an error.
7. *mustn't* must not be keyed in a deduction gap.
8. An *-s* form after a mandative trigger must not be used as the wrong answer.
9. A Hint must not quote an item's key of four or more words.
10. A test item must not copy a lesson item's stem, given sentence, spot sentence or build solution.
11. Thai glosses are checked for ไม่ต้อง/ต้องไม่ and *could have*/ควรจะ.
12. Certainty percentages finer than 50/90 raise a warning.
13. Male names in school contexts raise a warning.

The 12 warnings left at ship are all reviewed and fine. They include:
- battery percentages in lens analogies;
- a technician named Anan;
- sort hints that share an ordinary word.

Run all four checks before every push: `node verify.js && node render-test.js && node qa.js`, plus `node audit.js` for the distributions.

### Judgement calls for you

1. **Stage 3 still keys *must* vs *have to* in the present** (t3l1ck-4, t3l1s1-3, m1-6). Your modal-verbs rule is "never build an item on that difference". The module is built on it, though, and in each of these items the stem now says outright whose rule it is, so only one answer is defensible. All their explanations now use the ownership test. If you want to follow the rule strictly, those three items need new keys (past or future forms, or *mustn't* vs *don't have to*).
2. **MCQ options are not shuffled.** Key positions are already balanced by authoring, at 25% each. Every explanation refers to "option 2" and so on, so shuffling would mean rewriting about 490 explanations.
3. **The key is rarely the shortest option** in Stages 6, 7 and 9 (5–7%). Students could learn "never pick the shortest". Fixing it means rewriting options one by one, which I didn't do.
4. **Some test items still echo lesson items:**
   - m1-19 has the same option roles as t2l1s3-1;
   - m3-4 has the same task as t6l3s3-2;
   - m3-13 has the same stem as t7l3s1-5 and is a twin of m1-18;
   - m2-7 has the same frame as t8l2ck-2.

   These are lighter echoes than the three copies I rewrote, so I left them for you.
5. **Stage 9 uses the coursebook's rough 90% / 50% guide** in its explanations. I kept it because it is the coursebook's own frame, and no key depends on a number.
6. **The Hint button shows the full principle**, at an XP cost. That is a design choice, so I only checked that no hint copies an answer.
7. **Media and backend:**
   - Stage 10 has no podcast yet (`media.js` t10 is blank, so students see no dead button).
   - `Code.gs` is not in the repo, although the README mentions it.

### What you need to do

- **The storage-key collision with Mission Control (P0 above).** Reply "go ahead" and I will ship the prefix change with its migration.
- **Nothing else.** No Apps Script change was made, so there is nothing to redeploy. No test rows were written: every browser test ran with the API URL blanked.

---

## Earlier review — September 2026

See REVIEW-LOG.md (second content review 25 September 2026; first review 22 September 2026).
