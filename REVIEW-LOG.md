# Fine Tuning — second content review, 25 September 2026

A stricter second pass over every item (564 stage items, 60 test items) against six requirements:

1. The question sounds natural — no stilted contexts, no grammar jargon in stems.
2. Exactly one defensible answer.
3. The hint (the tag's `principle`, shown by the Hint button, plus sort-bin hints) does not give the answer away.
4. The key is the longest option only about 25% of the time.
5. Each option position is the key about 25% of the time — per stage and per level, not just app-wide.
6. Every item has at least one near-miss distractor: an option that would be right in a slightly different context and is wrong only because of what the stem says.

`audit.js` (new) measures 4 and 5 and flags crude hint leaks: `node audit.js` for the summary, `node audit.js t3` for one stage.

## Before → after

| | key position 1/2/3/4 | key longest | spot error part 1/2/3/4 |
|---|---|---|---|
| Stage 1 | 3/13/10/15 → 10/11/10/10 | 29% → 24% | 1/8/0/0 → 2/3/2/2 |
| Stage 2 | 1/3/12/27 → 11/11/11/10 | 14% → 26% | 0/4/4/0 → 2/2/2/2 |
| Stage 3 | 7/9/12/12 → 9/11/10/10 | 25% → 23% | 2/6/1/0 → 2/3/2/2 |
| Stage 4 | 10/5/18/9 → 11/11/11/9 | 14% → 24% | 1/6/1/0 → 2/2/2/2 |
| Stage 5 | 12/13/13/4 → 10/11/11/10 | 40% → 26% | 2/2/3/1 (unchanged) |
| Stage 6 | 12/2/13/14 → 11/9/11/10 | 34% → 24% | 5/4/0/0 → 3/2/2/2 |
| Stage 7 | 16/19/5/3 → 11/11/11/10 | 60% → 26% | 1/3/4/0 → 2/2/3/1 |
| Stage 8 | 23/20/1/0 → 10/11/12/11 | 48% → 25% | 1/3/4/0 → 2/2/2/2 |
| Triage | 4/4/4/4 | 19% → 25% | 1/1/1/1 |
| B2 check | 4/4/3/4 | 27% | 1/1/2/1 |
| C1 check | 4/4/4/4 | 13% → 25% | 1/1/1/1 |
| **All** | 96/96/95/96 → 95/98/98/92 | 32% → 25% | 16/39/21/4 → 20/21/22/17 |

The app-wide key split was already even after the first review, but only because the stages cancelled each other out: Stage 8 had 43 of 44 keys at options 1–2, Stage 2 had 39 of 43 at 3–4. Every level now uses all four positions.

59 of the 68 hint principles were rewritten so none quotes a key or an example that maps onto an item. The flags `audit.js` still raises are single modal words (*must*, *should*, *could*…) that any accurate statement of the rule has to name.

Also fixed along the way: every `spot` explanation in the three tests numbered the parts 0–3 (the screen shows 1–4); several `why` texts that described the wrong option after the earlier key rebalancing (t5l1s3-2, t4l1s3-1, t4l3s1-3, m2-11).

## Items worth a second look from the teacher

- **t2l2s1-5** now turns on register: *can't* has the right strength but the stem specifies a formal written report.
- **t2l2s2-2** was flipped to True: *may not be contaminated* leaves open that the samples are contaminated.
- **t3l1s1-3** keeps *ought to* as a distractor for a compulsory rule — real notices do use *should* for compulsory things, though the stage teaches it as wrong.
- **t6l3ck-4** (*was going to* vs *was supposed to*) works only because the stem states the criterion.
- **t7l2ck-2 / t7l2ck-3** rely on fine distinctions (factive *it is widely known*; *would seem to* vs *tend to*).
- **m1-4, m2-2**: some varieties use *mustn't be* for a deduction; **m1-6**, **m2-18** hold only because the stem states the criterion.

---


## Review (second pass): `topic-s1.js` (Stage 1, The Modal Frame)

Audit before: MCQ 41 · key pos 3/13/10/15 (t1l1 0/5/5/4, t1l2 2/2/0/9, t1l3 1/6/5/2) · key longest 12 (29%) · key shortest 11 (27%) · tied-longest 3 · spot 1/8/0/0 · judge T/F 2/1 · hint leaks 4
Audit after: MCQ 41 · key pos 10/11/10/10 (t1l1 4/4/3/3, t1l2 3/3/4/3, t1l3 3/4/3/4) · key longest 10 (24%) · key shortest 10 (24%) · tied-longest 2 · spot 2/3/2/2 · judge T/F 2/1 · hint leaks 4 in the audit, 0 once hints-topic-s1.json is applied to content.js

## Items changed

t1l1s1-1: no near miss (may / might / could all did the same job) → *might rain* replaced with *must have rained* (same past event, but framed as a deduction); key moved 2→1; `why` rewritten and renumbered.
t1l1s1-3: stem opened with a wordy framing sentence → trimmed to a single plain question; options and key unchanged.
t1l1s2-1: position balance → key moved 3→1 (`why` has no option numbers).
t1l1s2-2: spot error in part 2 (spot positions were 1/8/0/0) → sentence re-segmented (*According to the health centre, / before every appointment / staff must to wash their hands / for at least twenty seconds.*), error now in part 3; fix and `why` updated.
t1l1s2-3: key was the longest, and *can will* was a random reversal → replaced with the close form *will able to use* (drops *be*); key moved 4→1 and is still the longest (one of the 10 deliberate key-longest items); `why` rewritten.
t1l1s3-3: *Yes, they are* was defensible (an informal "they are [online]" answer); key was strictly longest → stem now ends *tomorrow*; *are* replaced with *Yes, they have* (right for "Have they been posted?", ruled out by *tomorrow*): a near miss that also ends the length tell; key moved 3→1; `why` rewritten.
t1l1ck-1: key *should* could be read as obligation, not sureness; no near miss → key now *might run*; *ran on Sundays last year* replaced with *might have run* (same frame, but the proposition has moved into the past), *runs on Sundays and Mondays* replaced with *ran on Sundays*; stem reworded ("keeps that idea exactly as it is and adds only how sure the speaker is"); `why` rewritten.
t1l1ck-3: spot error in part 2 → re-segmented so *will can book tickets free of charge* is part 4; fix and `why` updated.
t1l1ck-5: stem "shows that the speaker is sure" made it a reading test → stem is now "says the same thing using a modal"; `why` names option 1 (no modal) as the near miss.
t1l2s1-2: spot error in part 2 → re-segmented, error now in part 3; fix and `why` updated.
t1l2s1-3: position balance (t1l2 had no key at 3 and 9 keys at 4) → options reordered, key 4→2.
t1l2s1-4: stem stated the meaning twice; *musted finish* was a random form → stem simplified; option 3 replaced with the close form *must have finish*; key moved 4→3; `why` now names *must finish* as the near miss (fine English, but forward-looking, so ruled out by *yesterday*).
t1l2s1-5: all distractors ungrammatical, no near miss → *can not parking* replaced with *Staff don't have to park…* (well formed, but it removes an obligation where the regulations forbid); `why` rewritten.
t1l2s2-1: key strictly longest → *might taking* replaced with *might have taken* (fine for a finished test, ruled out by *at the moment* and "don't call her"); key moved 4→3; `why` rewritten.
t1l2s2-3: stem used app jargon ("uses the chain") → "Which sentence is correct?"; *may have being* replaced with the close form *may have be* (key is now the longest, a deliberate one); `why` updated.
t1l2s2-4: spot error in part 2 → re-segmented, error now in part 1; fix and `why` updated.
t1l2s2-5: position balance → options reordered, key 4→3.
t1l2s3-2: position balance → options reordered, key 4→1.
t1l2s3-4: *must have worked late* was defensible (the light could have been left on) → stem now adds a printer running, which ties the deduction to the present; key moved 4→3; `why` names the near miss.
t1l2ck-2: *mighted arrive* was a random form → replaced with the close form *might have arrive*; `why` updated.
t1l2ck-3: spot error in part 2 → re-segmented (…*all mobile phones must be / switch off and left in the tray.*), error now in part 4; fix and `why` updated.
t1l3s1-1: *must will move* was a random reversal, no close forms → replaced with *will had to move*, and *will musting move* replaced with *will need move* (ordinary *need* without its *to*); `why` rewritten.
t1l3s1-3: key was strictly longest; *wants can to* was random → replaced with the close form *wants being able to*; key moved 2→1; `why` rewritten.
t1l3s1-5: all distractors were *must*-variants with no near miss → *musting* replaced with *be able to* (well formed after *will not*, but it says the participant is incapable of giving a reason); key moved 2→4; `why` rewritten.
t1l3s2-1: key strictly longest; no near miss → stem anchored to the present ("…which is a huge relief to all of us"); options now *could* (right idea, but a past tense, which *since* rules out) / *has able to* / *has be able to* / *has been able to*; key moved 3→4; `why` rewritten.
t1l3s2-2: *must will* was a random reversal → replaced with the close form *will having to*; key moved 3→1; `why` rewritten.
t1l3s2-3: option 4 (*need be able demonstrate*) was far from any real learner form → replaced with *need be able to demonstrate* (drops only the *to* after *need*); `why` rewritten.
t1l3s2-5: no near miss → *haven't could* replaced with *We didn't have to reach the summit* (well formed, but it says there was no need, not that it was impossible); `why` rewritten.
t1l3ck-1: *without to must explain* was random → replaced with the close form *without have to explain*; `why` rewritten.
t1l3ck-5: tied-longest with *will musting work* → replaced with the close form *will has to work*; `why` rewritten.
t1l3ck-6: key strictly longest; *can to* was a random reversal → replaced with the close form *to being able to*; `why` rewritten.

## Principles (content.js, not edited): proposals in hints-topic-s1.json
frame-defect: the old text named *will have to*, *to be able to* and *has been able to*, which are the keys of t1l3s1-1, t1l3s1-5, t1l3s2-2, t1l3ck-5 and m2-1 → rule stated with no repair forms named.
frame-semi: the old text named *has been able to*, *to be able to* and *was able to* (keys of t1l3s2-1, t1l3ck-6, and nearly t1l3ck-2) → rule only.
frame-nice: its examples *Can she…?* and *Yes, she can* mapped onto t1l1ck-4, t1l1s3-1 and t1l1s3-5 → examples switched to *would* / *mustn't*.
frame-boundary: *you needn't wait* mapped one-to-one onto the t1l3s3-3 key → examples removed.


## Review — topic-s2.js (Stage 02, epi-)

Before: MCQ 43 · key pos 1/3/12/27 (t2l1 0/0/6/9, t2l2 0/1/4/9, t2l3 1/2/2/9) · key longest 6 (14%) · key shortest 15 (35%) · tied-longest 4 · spot 0/4/4/0 · judge T/F 0/3 · leak flags 8
After:  MCQ 43 · key pos 11/11/11/10 (t2l1 4/4/4/3, t2l2 3/4/3/4, t2l3 4/3/4/3) · key longest 11 (26%) · key shortest 11 (26%) · tied-longest 0 · spot 2/2/2/2 · judge T/F 1/2 · leak flags 7 (all single-modal keys such as "must"/"could"/"may not" that any statement of the scale has to name; no example maps onto an item). verify.js CLEAN.

t2l1s1-1 — key at pos 4 → moved to pos 1 (why has no positional references).
t2l1s1-3 — stilted stem ("pitches the claim at the rung the evidence will bear"); key shortest; pos 4 → plain-English stem ("claims only what the findings support"); key may → could (same rung, so no longer shortest); moved to pos 2; why rewritten.
t2l1s1-4 — spot error in part 3 → resegmented with a third observation so the error falls in part 4; fix and why updated.
t2l1s2-1 — pos 3 → pos 1; can't → cannot in a distractor to break the key/distractor length tie; why updated.
t2l1s2-2 — pos 4 → pos 2.
t2l1s2-3 — jargon stem ("the weak middle rung in its most formal wording") that also read as the hint → natural school-report context; why opening reworded.
t2l1s2-4 — pos 4 → pos 1.
t2l1s3-1 — key "The lift must be out of order again" matched the epi-must principle's "the lift must be broken again", and was key-shortest → new lift wording ("stuck between floors"), distractors tightened; now key-longest; pos 3 → pos 2; why updated.
t2l1s3-2 — spot error in part 2 → sentence reordered so the error is in part 1; fix and why updated.
t2l1ck-1 — abstract stem ("least exposed to being proved wrong") → "hardest to prove wrong"; pos 3 → pos 2; can't → cannot to break the length tie; why updated.
t2l1ck-3 — key matched epi-must principle ("visitors must sign in"; principle rewritten); pos 4 → pos 1; two distractors shortened so the key is modestly longest.
t2l1ck-4 — spot error in part 3 → resegmented ("This must to be a data-entry error: …") so the error is in part 1; fix and why updated.
t2l1ck-6 — pos 4 → pos 3.
t2l2s1-3 — "deduction rather than a prohibition" stem → plain "the speaker's conclusion rather than a rule"; pos 4 → pos 1; ferry distractor shortened (key now longest).
t2l2s1-4 — key shortest; pos 4 → pos 2; key can't → cannot and might not → may not (key tied-shortest instead); why updated.
t2l2s1-5 — key shortest; stem named "strength and register" loudly; shouldn't had no near-miss role → stem gives the formal written report; shouldn't replaced by can't (right strength, wrong register: the near miss); why rewritten.
t2l2s2-1 — stem "reports the speaker's actual position" unclear → "claims no more than the speaker knows"; pos 4 → pos 2; why's "the fourth" → "the sentence with certainly".
t2l2s2-2 — judge split 0/3 → statement changed so the answer is True ("leaving open the possibility that the samples are contaminated"); why rewritten.
t2l2s2-3 — mustn't → must not in a distractor to break the length tie; why updated.
t2l2s2-4 — stem was the epi-negscope principle's "but then again" test almost word for word (hint gave the answer) → new context (complaints up, figures not in); can't is now the near miss; mustn't → must not (tie); why rewritten.
t2l2s2-5 — pos 4 → pos 1.
t2l2s3-2 — grammar-recall stem ("Complete the grid: the negative partner of must be is …") answered verbatim by the epi-cant principle → dialogue (Anan/Mai, the phone in the blue case) with full-sentence options; shouldn't is the near miss (right direction, too weak); why rewritten.
t2l2s3-3 — spot error in part 3 → resegmented so the error is in part 4; fix and why updated.
t2l2s3-4 — blank (2) "cannot be telling us anything about…" overclaimed and made "may not" defensible → "cannot be telling us who is able to do the homework"; pos 4 → pos 2.
t2l2s3-5 — pos 4 → pos 1.
t2l2ck-1 — pos 3 → pos 4.
t2l2ck-2 — option 1 "It is possible that…" → "Perhaps…" (key now longest; why's option numbers unchanged).
t2l2ck-5 — "On the certainty ladder" → plain "When these are used to say how sure you are".
t2l3s1-1 — pos 4 → pos 2.
t2l3s2-1 — stem spelled out the answer's meaning and had inconsistent timing (9.15 + 2h vs "half past eleven") → quarter past eleven, criterion in plain words ("expects them about now but allows for a delay").
t2l3s2-2 — pos 4 → pos 1.
t2l3s2-5 — pos 4 → pos 3.
t2l3s3-1 — key shortest; pos 4 → pos 3; sampling distractor shortened ("the link is not an artefact of the sampling").
t2l3s3-4 — pos 4 → pos 1; 70-character distractor → "The vault predates the rest of the abbey." (key now modestly longest); why's "three different tenses" → "plain statements with no modal".
t2l3ck-1 — key longest by 13 characters (a clear tell) → options evened out ("… this winter"; key "It is unlikely, but it cannot be ruled out.").
t2l3ck-2 — key was the only option with an evidence clause (longest by 21) and had no near miss → evidence moved into the stem; "can check" replaced by "will check" (confident but wrong time); advice option shortened to break the tie; why rewritten.
t2l3ck-4 — key carried the only "because …" (longest by 25) → new stem gives the three-year rise; the four options are the same shape; pos 4 → pos 1; why reworded.
t2l3ck-5 — spot error in part 2 → resegmented so the error is in part 3; fix and why updated.

Principles (hints-topic-s2.json): all seven epi- principles other than epi-negscope rewritten. epi-must ("the lift must be broken again", "visitors must sign in", "that will be the courier") → t2l1s3-1, t2l1ck-3, t2l1s3-4/-5; epi-prog "she must know by now, never must be knowing" → t2l3s1-3; epi-read "she must have missed the train" → t2l3s3-3; epi-expect "They should be there by now" + parcel/traffic/battery → t2l3s2-1/-2, t2l3s2-3; epi-cant "He can't be at home" → t2l2ck-1; epi-scale "the office must be closed" → t2l1s1-1; epi-weak named the "might possibly" distractor of t2l1s2-3. The rules stay the same, with fresh examples and plainer B1–B2 wording (e.g. "epistemic" removed).


## topic-s3.js — second-pass review (Stage 03, deo-)

Before: MCQ 40 · key pos 7/9/12/12 · t3l1 2/1/7/4 (pos 3 = 50%) · key longest 10 (25%) · shortest 6 (15%) · tied-longest 2 · spot pos 2/6/1/0 · judge T/F 2/2 · hint leaks 6
After:  MCQ 40 · key pos 9/11/10/10 · t3l1 4/3/4/3 · t3l2 3/3/3/4 · t3l3 2/5/3/3 · key longest 9 (23%) · shortest 6 (15%) · tied-longest 2 · spot pos 2/3/2/2 · judge T/F 2/2 · hint leaks 0 once hints-topic-s3.json is applied (audit still shows 6 until content.js is updated)
verify.js: CLEAN

t3l1s1-1 — key sat at option 4 in an over-full level → reordered to option 2 (no positional refs in `why`).
t3l1s1-3 — *had better* (*We'd all better do it before term ends*) is natural when you pass on a rule, so the distractor could be defended; "We all must/should…" is also unidiomatic word order → stem now says the module is compulsory; subject changed to *Everyone*; options are must / ought to / has to / may; `why` rewritten, with *must* named as the near miss.
t3l1s1-4 — spot error in part 2 (six of nine spot items had it there) → sentence re-cut so the error falls in part 4 (*…must to send in monthly figures on antibiotic use*); `fix` and `why` updated.
t3l1s1-5 — present *be supposed to* is often used neutrally to report a rule, so it could be defended as an accurate report → given sentence now adds *and in practice they all do*, which rules out the "rule not kept" reading; `why` names it as the near miss.
t3l1s2-1 — key at option 3 in an over-full level → moved to option 1.
t3l1s2-3 — option 1 was *I've* and the other three were *We* (not parallel) → *We've got to leave…*.
t3l1s2-4 — spot error in part 2 → re-cut (*The organisers of the sports day / have warned us that if the rain / continues into next week, they / will must move it to the covered court.*) so the error is in part 4; `fix` and `why` updated.
t3l1s3-1 — stem defined *had better* ("clearest warning that something bad will follow"), which made it a reading test → replaced with a situation (a friend's laptop keeps crashing; you want to warn her, not just advise); options are now parallel *…back up your dissertation tonight*; key moved from option 3 to 2; `why` names *should/ought to* as near misses.
t3l1s3-5 — key at option 3 in an over-full level → moved to option 1; option numbers in `why` renumbered; *had better to* named as the near miss.
t3l1ck-4 — *I am supposed to redraft* also shows an outside source, so it could be defended for "shows the requirement comes from somebody else" → replaced with *I should redraft…* (which turns the supervisor's insistence into optional advice); `why` updated.
t3l1ck-5 — `why` said the room "has not been lost yet as far as rehearsals are concerned" (muddled) → it now says *had to* is the form for gap (2) but the search is still ahead of them.
t3l2s1-1 — option 3 (*Visitors are advised to bring flowers*) was not parallel and was not a near miss → *Bringing flowers is not recommended* (the *should not* reading: right side of the line between banning and releasing, wrong strength); `why` updated.
t3l2s1-3 — key at option 4, the most-used position in the level → moved to option 3 (no positional refs in `why`).
t3l2s2-5 — *We hadn't to pay* is regional (northern British) usage, so the `why`'s claim that it "is not current usage" could be challenged → replaced with *We weren't allowed to pay a deposit*; `why` rewritten (*needn't have paid* as the near miss, *mustn't have* as a guess the speakers don't need to make).
t3l2ck-1 — *won't have to* was correct (Saturday is in the future), even though the `why` said it wasn't; also, a parent can't excuse their own child → rewritten as the coach's email (*…he ______ come to Saturday's practice — though if he feels well enough, he is very welcome to*); options are mustn't / shouldn't / doesn't have to / may not; `why` rewritten.
t3l3s1-1 — *Members are able to bring a guest* is common permission wording on club websites, so it could be defended → replaced with *Members must bring a guest* (right register, but it turns permission into a requirement); `why` updated.
t3l3s1-5 — *We couldn't have filmed* could be read as hypothetical past permission, so it could be defended → *We shouldn't have filmed inside the temple*; `why` updated, and *didn't have to* is named as the near miss.
t3l3s2-4 — spot error in part 2 → re-cut (*…/ if the client requests replacement parts in writing, / the supplier shall to deliver them / within ten working days.*) so the error is in part 3; `fix` and `why` updated.

Principles (hints-topic-s3.json): I rewrote all nine deo- principles. Six were flagged as leaks (the principle contained the literal key: *had to*, *will have to*, *don't have to*, *needn't* plus the example *you needn't sign* = t3l2s2-1, *may not*, *were allowed to*). The other three were close enough to give answers away: deo-source's "notice written by the body that made the rule" matched t3l1ck-1 exactly; deo-advice's *be supposed to* gloss was almost word for word the key of t3l1s3-2; and deo-shall's "imposes a duty" was the key of t3l3s2-1. The new versions state each rule in terms of what it does (where the negative lands, whose authority it is, what the voice is, which form can take a tense) and leave the student to pick the form. They were checked against every deo- key in the stage and in test-1/2/3.


## topic-s4.js — second-pass review (stage t4, dyn-)

Before: `t4: MCQ 42  key pos 10/5/18/9  key longest 6 (14%)  key shortest 6 (14%)  tied-longest 5  | spot 8 pos 1/6/1/0  | judge T/F 1/2  | hint leaks 4` (levels l1 4/0/7/2 · l2 2/3/5/3 · l3 4/2/6/4)
After:  `t4: MCQ 42  key pos 11/11/11/9  key longest 10 (24%)  key shortest 4 (10%)  tied-longest 2  | spot 8 pos 2/2/2/2  | judge T/F 1/2  | hint leaks 4*` (levels l1 4/3/4/2 · l2 3/4/3/3 · l3 4/4/4/4)
*The 4 remaining leak flags come from content.js principles; they clear once hints-topic-s4.json is applied (checked with the audit's leak logic: 0 leaks).

- t4l1s1-1 — key sat at position 3 (level 1 had no position-2 keys) → swapped options 2/3 (key now 2); `why` ordinals updated.
- t4l1s1-3 — "could have carved" defensible (past unrealised ability: "until the accident he could have carved a set in a week"), "was carving" arguable as a temporary habit → replaced with "has been able to carve" (near miss: right repair, wrong time) and "was able carve"; key moved to 2; `why` rewritten.
- t4l1s1-4 — spot error in part 2 (6 of 8 spots) → re-segmented the sentence so the error falls in part 4; fix and `why` updated.
- t4l1s1-5 — "Hardly anyone … could operate" defensible as present hypothetical ability → replaced with "will operate" (near miss: about the subject, but about willingness, not skill); `why` updated.
- t4l1s3-1 — `why` said "Only the second" but the key was option 3 → swapped options 2/3 so key is option 2 and the `why` is now true.
- t4l1ck-1 — key tied longest with "being able to publish" → replaced that with "be able to publish" (near miss: right repair, missing the first *to*); key now strictly longest; `why` updated.
- t4l1ck-2 — "Nobody … could operate" defensible as present hypothetical → replaced with "could have operated"; `why` updated.
- t4l1ck-4 — spot error in part 2 → rewrote the sentence (new system/auditors) with the error in part 4; fix and `why` updated.
- t4l2s1-2 — spot error in part 2 → re-segmented so the error ("but the driver could deliver") is in part 3; removed ambiguous "before it closed".
- t4l2s1-3 — "could have carried" defensible (unused capacity); key-shortest; key at position 3 → replaced with "can carry"; reordered so key is option 2; `why` names "managed to carry" as the near miss.
- t4l2s1-4 — key tied longest with "were able to getting" → changed that distractor to "were able get" (same form error type); key now strictly longest; `why` updated.
- t4l2s1-5 — stem stilted ("The aunt kept the four languages… the parcel was in fact released") → "Two facts: my aunt spoke four languages all her life, and she once persuaded a customs officer to release a parcel."
- t4l2s2-1 — "managed to see" defensible (nothing ruled out effort); "could have seen" also defensible with no outcome stated; principle example mapped onto the stem → new stem (smoke clears, team photographs the area), "managed to see" replaced with "can see"; `why` rewritten with "could have seen" as the near miss.
- t4l2s3-1 — key at position 3 (level/stage overuse) → reordered, key now option 1 (`why` refers by form only).
- t4l2s3-4 — `why` ended with a confusing meta sentence about where "the key has to sit" → removed.
- t4l2ck-1 — "could be getting" padded the longest slot → replaced with "could got" (plausible learner form error); key now strictly longest; `why` updated.
- t4l3s1-1 — "The committee will not meet…" defensible as a refusal (a committee makes decisions) → replaced with "The results will not be ready until next week."; `why` updated.
- t4l3s1-2 — no near miss (does / will / would are all plainly out), and "I have tried three times this morning" would let a past refusal stand → Nan's line anchored in the present ("I am pressing Start right now"), "would" replaced with "wouldn't" as the near miss; `why` rewritten.
- t4l3s1-3 — `why` treated option 2 as the key while the key was option 3 → swapped options 2/3 (key now 2, `why` now true); stem reworded in plainer English.
- t4l3s1-4 — spot error in part 2 → re-segmented, error now in part 1; fix updated.
- t4l3s2-1 — "couldn't" defensible (having the key does not rule out a jammed lock) → stem now "…but however politely we asked, he ______ the gate"; `why` rewritten with couldn't as the near miss.
- t4l3s2-3 — key not longest in a meaning item; distractor wording uneven → options tightened ("He had no spare key to give us." / "He was forbidden to give us one." / "He decided not to let us have one." / "He had not been asked for one."); key now longest.
- t4l3s2-5 — key at position 3 → reordered, key now option 2 (`why` refers by form only).
- t4l3ck-1 — "would not" defensible after "I have pressed the release twice" ("…and it wouldn't open") → stem now in the present ("I am pressing the release as hard as I can, and the boot still ______ open"); `why` updated.
- t4l3ck-5 — "will have found" arguably defensible as a deduction; "used to be find" not a plausible form → replaced with "will find" (near miss: characteristic will, wrong time) and "used to finding"; `why` updated.
- t4l3ck-6 — "can't" defensible (the firm could be saying he is unable) → context now: driver is ten minutes away and insists the pallets were fine; "needn't" (arguable as his claim) replaced with "shouldn't"; `why` rewritten.

Principles (content.js, proposed in hints-topic-s4.json): dyn-repair (examples "hopes to be able to" / "being able to drive" mapped onto t4l1ck-1 / t4l1s2-3), dyn-general (example "Delays can last for hours" was the t4l1s3-3 stem), dyn-occexcept ("From the balcony I could see…" mapped onto t4l2s2-1), dyn-will (contained key "won't" and "The door won't open" ≈ t4l3ck-1/t4l3s1-2), dyn-would (contained key "wouldn't"), dyn-habit ("He WILL leave his boots in the hallway" is the t4l3s3-3 stem; "own a bookshop" ≈ a t4l3s3-2 card). dyn-ability and dyn-occasion unchanged.


## Review (second pass): `topic-s5.js` (Stage 5, Distance)

Before: MCQ 42 · key pos 12/13/13/4 (t5l1 2/4/4/3, t5l2 6/4/5/0, t5l3 4/5/4/1) · key longest 17 (40%) · key shortest 7 (17%) · tied-longest 3 · spot 2/2/3/1 · judge T/F 1/2 · hint leaks flagged 10
After:  MCQ 42 · key pos 10/11/11/10 (t5l1 3/3/3/4, t5l2 4/4/4/3, t5l3 3/4/4/3) · key longest 11 (26%) · key shortest 7 (17%) · tied-longest 4 (not systematic) · spot 2/2/3/1 · judge T/F 1/2 · hint leaks: 10 still flagged because content.js is unchanged. With the principles proposed in hints-topic-s5.json, 5 flags remain. Every one is a single-word modal key that the rule has to name next to other modals (could / might / would), so none is a real leak.

## Items changed

t5l1s1-3: the key was the longest option, and at position 2 → shortened it to "Softening the claim: the figure is offered, not asserted." and moved it to option 1. The `why` option numbers are updated.
t5l1s1-5: the key ("were allowed to") narrowed *could* to permission and was the longest option → changed it to "were able to", which covers both general possibility and permission and is no longer the longest. The `why` is adjusted.
t5l1s2-1: the stem used "pitched at the strength the evidence will bear" → reworded in plain English as "claims no more than the evidence can support".
t5l1s2-3: the stem was stilted ("Which verb phrase should be chosen:") → reworded as "the most cautious … Which should she choose?". Options and key are unchanged.
t5l1s2-4: the key needed to move for position balance → *might* is now option 4. The `why` refers to options by word, so it needed no change.
t5l1s3-2: the `why` gave the wrong positions. It called the key "the second continuation" and described option 2 as "the fourth", left over from an earlier option swap → rewrote the `why` to match the current order (key = option 4) and named option 2 as the near miss.
t5l1ck-3: the key was the longest by 12 characters → shortened it to "I expected the deposit to be refundable, so this is a surprise.".
t5l1ck-4: the distractor *would be able to* could be defended as a past-habitual "would" in a recollection → replaced it with *may*. Now *can* and *may* are right-meaning, wrong-time near misses. The `why` is rewritten.
t5l1ck-6: the stem used "What is the reading?", which is jargon → changed to "What does she mean?".
t5l2s1-2: needed for position balance → reordered so *Would* is option 4. The `why` refers to options by word, so it needed no change.
t5l2s1-5: the key was the longest option ("Is it all right with you if…") → replaced it with "Do you mind if I take the earlier train?". This is the same permission one rung nearer, and now option 3 ("Do you mind that I took…") is the near miss. The `why` explains both.
t5l2s2-4: *Will I…?* is a real offer frame in Irish and Scottish English, and *Might I…?* can be read as a formal offer, so both distractors were defensible → changed the options to Must / Need / Would / Shall. *Must I* is the near miss: a well-formed question, but reluctant. The key moved to option 4 and the `why` is rewritten.
t5l2s3-2: needed for position balance → *would* moved to option 4. The `why` refers to options by word, so it needed no change.
t5l2ck-3: the key (the "wrong" email line) also differed in "at some point", not just in its frame, so it was not parallel → made it "…whether you might enter all marks by 5 p.m. on Friday", parallel with the other three. It is still the longest option, which the frame being tested makes unavoidable.
t5l2ck-5: *should* could be defended (British "should" = "would" in a consequent: "It should save time if requests included…") → replaced it with *must*. The `why` is rewritten and names *will* as the near miss.
t5l2ck-6: option 4 ("Would you mind if I carried that for you?") is a perfectly courteous offer, but the `why` gave the wrong reason for rejecting it → the `why` now says it takes over the whole box, which is exactly the implication the stem rules out.
t5l3s1-3: the stem used the jargon "unreal consequent", and the key was the longest option → the stem is now plain English ("describe an imagined situation, with the if left unsaid"), and "second draft" in the key is now "draft".
t5l3s1-5: the key was the longest option by 12 characters → changed it to "They still haven't shared the new timetable, and I'm getting impatient."
t5l3s2-1: the stem used the jargon "consequent … pitched at the strength" → changed to "claims no more than the argument can support".
t5l3s2-3: the key was the longest option, option 4 ("a question and a statement") was a throwaway with no near miss, and the options were not parallel → all four are now in the form "The first …; the second …". The new option 4 is a near miss: it rightly says the second sentence is stronger, but puts that certainty on the if-clause. The key is shortened and the `why` is extended.
t5l3s3-3: the distractor "If the train will be late, we will take a taxi" is arguably acceptable (will for a situation already known now, with a consequence) → changed to "…we will miss the connection", which is clearly a plain prediction. The `why` still holds.
t5l3ck-1: option 4 ("If the archive is digitised, researchers would stop…") could be defended as tentative *would*, and "internally consistent" was jargon → the stem is now "Which sentence is correct?", option 4 is now "If the archive were digitised, researchers stop travelling…", and the `why` is rewritten.
t5l3ck-2: needed for position balance → *would* moved to option 4. The `why` refers to options by word, so it needed no change.
t5l3ck-5: needed for position balance → *could* moved to option 4. The `why` refers to options by word, so it needed no change.

## Principles (content.js, not edited): proposals in hints-topic-s5.json
- dist-request: contained the key "No, not at all" (t5l2s1-3), the formula "Would you mind" (t5l2s1-2 gap) and the whole wording of the t5l2s1-1 key frame → rewritten to describe the dial by what it does, not by quoting the frames.
- dist-offer: listed *Shall I…?*, *Would you like me to…?* and *You might want to…*, which are the keys of t5l2s2-1/-3/-4, t5l2ck-2/-6 and m2-20 → rewritten around "who does the work".
- dist-soften: quoted *It would be helpful if…* and *I would be grateful if you could…*, the keys of t5l2s3-2/-3 and t5l2ck-5 → rewritten to state the rules (step back in both clauses; remote about the asking, exact about the thing asked; don't soften a rule).
- dist-unreal: example "I wish they would decide" matched the t5l3s1-2 build item one to one, and "if the council released the land, prices would fall" matched t5l3s1-1 → the full example sentences are removed and the rule is kept.
- dist-unrealposs: was a near-paraphrase of the t5l3s2-3 key (capacity vs outcome) → that pairing is dropped.
- dist-ifwill: "If you'll just wait here…" matched the t5l3s3-3 key, and "are willing to" matched the t5l3ck-6 key → both are removed; the three exceptions are named without examples.
- dist-tentative: the chain "is → may → might" answered t5l1s2-3 ("most cautious of must/will/should/might") → replaced by the pairwise notch rule.
- dist-core: the example "we could walk there when we lived closer" had the same shape as the t5l1ck-4 cloze → replaced by descriptions of each cue.
- dist-read: left unchanged, no leak.


## Review — topic-s6.js (Stage 06, tag prefix past-)

Before: MCQ 41 · key pos 12/2/13/14 · key longest 14 (34%) · key shortest 2 (5%) · tied-longest 5 · spot 9 pos 5/4/0/0 · judge T/F 1/3 · hint leaks 2 · levels l1 3/0/6/5, l2 3/1/5/5, l3 6/1/2/4
After:  MCQ 41 · key pos 11/9/11/10 · key longest 10 (24%) · key shortest 2 (5%) · tied-longest 5 · spot 9 pos 3/2/2/2 · judge T/F 2/2 · levels l1 3/3/4/4, l2 4/3/4/3, l3 4/3/3/3
Hint leaks: the 2 audit flags remain until content.js takes the principles in hints-topic-s6.json. With those principles no key or example leaks. One crude flag stays: t6l2s2-3 key "might have" is the rule's own name, not an example. `node verify.js` CLEAN.

t6l1s1-1 — key never in position 2 across the level → reordered options (key 3→2); why has no positional references.
t6l1s1-2 — spot error always in part 1/2 across the stage → re-segmented so the error ("must failed") is in part 4; why updated to match the new parts.
t6l1s1-3 — "mustn't have seen" is a real deduction ("I conclude he didn't") in AmE/Irish/Australian use, so close to "impossible"; given sentence stilted → given "There is no way that…", distractor replaced with near miss "may not have seen" (right family, wrong strength), key moved 4→2; why rewritten.
t6l1s1-4 — "must have taken" can be a requirement ("applicants must have taken…"), so the why's "no obligation reading left" was an overclaim → given now opens "Judging by the timestamps," so it is plainly a deduction; why corrected.
t6l1s1-5 — "post-mortem report" reads as an autopsy to this audience → "incident report".
t6l1s2-1 — "must have occurred" was defensible (same site and morning, only one sample contaminated, so arguably conclusive) → context now says the records are unchecked and nothing is certain yet; key moved 3→2; why names the near miss.
t6l1s2-2 — bin hints used "proposition" jargon → plain wording, no HTML.
t6l1s2-4 — passage said the door was "shut" (not locked), so "must have had a key" was not forced and "may have" was defensible → door "locked", lock "cannot be opened without a key"; why updated.
t6l1s3-1 — key strictly longest; "must travel" no near miss → replaced with "can't have been travelling" (right shape, wrong direction); why updated.
t6l1s3-3 — stem described the answer ("was in the middle of") so it became a reading test → evidence context (cover off, half the settings changed); why rewritten with "must have calibrated" as the near miss.
t6l1s3-5 — "the pour must have been going on" was awkward; why mentioned "cracking" that is not in the text → "they ___ it" with "must have been pouring / must pour / can't have been pouring / had to pour"; key no longer longest; why fixed.
t6l1ck-1 — minutes are not written before a meeting, so the context was contrived → a speech dated three days before a ceremony, with the same form set; why names the near miss.
t6l1ck-2 — why did not cover the deduction reading of "mustn't have" → why says that even as a deduction it is far stronger than "perhaps".
t6l1ck-3 — spot position rebalance; the ending ("the late start") did not follow → re-segmented with the error in part 3, new ending "why they looked so tired this morning".
t6l1ck-5 — stem said "possible past cause" but the options are about timing → "offers a possible explanation without claiming that it is certain".
t6l2s1-1 — "had to send" was defensible as a statement of the rule ("the clerk had to send each form…") in a blame line → replaced with "needn't have sent"; key moved 3→2; why rewritten.
t6l2s1-2 — position rebalance → key 4→2 (reordered distractors); why has no positional references.
t6l2s1-3 — bin hint "the speaker is inside the subject" was unclear → "the speaker is one of the people in the subject".
t6l2s1-4 — spot position rebalance → re-segmented, error "ought have circulated" now in part 4; why updated.
t6l2s2-1 — "a second route" was unclear (no first route named) → "had another option and did not use it"; why wording aligned.
t6l2s2-2 — judge split 1 True / 3 not-True → stem changed to "The jumper did not clear the bar." (True); why rewritten.
t6l2s2-3 — position rebalance; hint leaked the key ("You might have told me!") → key moved 4→1; why names "may have" as the near miss; new principle proposed.
t6l2s3-1 — stem said "a flooded basement", but the key says the basement did not flood → "a report on last week's storm… pump had been installed in the basement"; why names the near miss.
t6l2s3-3 — option 1 "would have kept its visitors" can describe today, so it was defensible; stem used grammar terms → stem asks how the town would be different "today"; option 1 now anchored "in 2020" (right form, wrong time); why updated (option numbers unchanged).
t6l2ck-1 — "would have signed" has the assumption reading ("presumably the storeman signed it"), which does tell you it was signed → replaced with "can't have signed"; why rewritten.
t6l2ck-2 — spot position rebalance → result clause first, error in the if-clause, now part 3; fix and why updated.
t6l2ck-5 — "could be mentioning" was no near miss, and the key was strictly longest → replaced with "needn't have mentioned" (a reproach, but for something that was done); why rewritten.
t6l2ck-6 — "post-mortem" → "review" in the passage and why; why names the near miss.
t6l3s1-1 — "mustn't have taken" is defensible as a regional deduction → "couldn't take" (right outcome, wrong reason); why rewritten.
t6l3s1-4 — "mustn't have submitted" had the same regional problem; key only in position 4 → replaced with "wasn't allowed to submit" (near miss: no copy, but because of a ban); key moved 4→2; why rewritten.
t6l3s2-1 — position rebalance → key 1→2; why names "would have been completed" as the near miss.
t6l3s2-2 — position rebalance → key 1→3; why names "can't have been" as the near miss.
t6l3s2-4 — punctuation only (comma after "as planned").
t6l3s2-5 — "project post-mortem" → "project review".
t6l3s3-4 — key was 90 characters against about 60 for the others (a strong tell), and the options were wrapped in "Replace it with…" → options are now plain rewrites: "had time to … but did not" (key), "may have", "would have … if ordered to" (near miss), "were unable to"; stem and why rewritten.
t6l3s3-5 — "gone round the parked lorry instead of overtaking on the outside" contradicted itself → "through the gap on the inside instead of pulling out into the traffic"; why updated.
t6l3ck-2 — no near miss → "must have opened" replaced with "was to open" (the neutral member of the family, with no failure); why updated.


## Review — topic-s7.js (Stage 07, hedge-*)

Before: MCQ 43 · key pos 16/19/5/3 (l1 4/6/1/3, l2 6/7/2/0, l3 6/6/2/0) · key longest 26 (60%) · key shortest 3 (7%) · spot pos 1/3/4/0 · judge T/F/CT 1/1/2 · hint leaks 5
After:  MCQ 43 · key pos 11/11/11/10 (l1 4/4/3/3, l2 4/4/4/3, l3 3/3/4/4) · key longest 11 (26%) · key shortest 3 (7%) · tied-longest 0 · spot pos 2/2/3/1 · judge unchanged · hint leaks: 5 in content.js, 0 once hints-topic-s7.json is applied
verify.js: CLEAN

t7l1s1-1 — no near miss (third distractor a plain universal) → replaced with "suggests … is likely to shorten journeys in other cities too" (wrong only because the survey covers one city); why updated
t7l1s1-3 — key longest and wordy ("narrows the range of situations in which the writer is claiming…") → shortened to "It limits the claim to some cases instead of every case."; jargon ("quantifier over situations") removed from why
t7l1s1-4 — stilted stem ("strongest pitch such a forecast can honestly take"); key longest; distractors not parallel ("quite soon") → plain-English stem; all options now end "within a decade"; underclaim turned into a near miss ("could conceivably remove some…": honest but not the strongest); key shortened
t7l1s2-1 — key longest (120); no near miss; policy distractor off-topic → "study" made "survey" (so design is clearly observational); near miss added ("cut teenagers' sleep by twenty-seven minutes": right figure, causal claim); key shortened ("was linked to shorter sleep"); key moved 2→3; why renumbered
t7l1s2-3 — key 150 chars and far longest; "Cars are no longer necessary" a throwaway → key shortened ("may have helped to reduce…"); new near miss "The figures show that the tram line cut car journeys … by nine per cent"; key moved 2→3; why renumbered
t7l1s2-5 — option 1 ("causes 4,200 premature deaths a year") arguably defensible as a cited statistic → made a forecast ("will cause … next year"), which clearly needs a hedge; why updated
t7l1ck-2 — key 99 chars, distractors all weak (too short / informal / tense) → key shortened; "too short" replaced by near miss "It hedges its predictions so heavily that it takes no clear position" (right fault type, wrong direction); tense distractor reworded; why updated
t7l1ck-3 — spot position overused (part 2) → clause reordered so the pile-up is part 1 ("It may perhaps possibly be that … , although the sample was small."); fix and why updated
t7l1ck-6 — key 142 chars, far longest → key shortened ("has weighed how far the evidence goes"); option 4 given its full natural wording ("a clear position on the question")
t7l2s1-4 — spot position overused (part 3) → resegmented; error now in part 4 ("almost would certainly fail to generalise nationally."); fix and why updated
t7l2s1-5 — "could conceivably cover its costs" defensible as a near-synonym of "highly unlikely" → replaced with near miss "is unlikely to cover" (right form, drops "highly"); key moved 1→4; why renumbered (kept as a key-longest item: the extra degree word is the point)
t7l2s2-1 — key longest; "It is certain that" a weak distractor → replaced with impersonal-frame near miss "It has been clearly shown that…" (frame, but presents the view as settled); key moved 2→4; why renumbered
t7l2s2-2 — key ("footfall has fallen since the market moved") dropped the causal claim of the original, so it was not quite equivalent → all options rebuilt on "moving the market has reduced footfall"; "would" option now a clear near miss (conditional reading); why updated
t7l2s2-3 — jargon in stem ("enclose a proposition") → "is there nothing inside the frame that a reader could dispute or evidence could test?"
t7l2s2-5 — position balance → options reordered, key 2→3 (why refers to options by wording, still accurate)
t7l2s3-3 — no near miss; "This proves that the triage system works" not parallel → near miss "This suggests that there has been a certain amount of change" (right verb, blurs the figure); distractors made parallel; why updated
t7l2s3-5 — key longest; why wrongly said "appear to tend to" doubles one branch (theory puts them in different branches) → key shortened ("appear to have shortened waiting times"); key moved 1→3; why corrected (the doubling is "in most cases" + "tend to")
t7l2ck-2 — no near miss; hint leak → "it certainly follows" replaced with near miss "it is widely known" (factive: vouches for the claim); key moved 2→4; why updated; principle rewritten (hints file)
t7l2ck-3 — key longest, not parallel; "It is unlikely that rural applicants apply early" defensible as equivalent → all options now "… apply later in the cycle"; last distractor replaced by "would seem to" (evidential, not scope); why updated
t7l3s1-1 — key 144 chars, far longest → key shortened; option 1 rebuilt as a true near miss (full concessive shape with the balance reversed: "Although automation will certainly … it might possibly …"); key moved 2→4; why renumbered
t7l3s1-3 — key longest; "too long for an essay" a throwaway → key shortened; new distractor "The counter should come first…"; "subordinator" jargon removed from option 1; key moved 2→3; why renumbered
t7l3s2-2 — judge "must therefore be treated with caution" is arguably obligation, not a booster → given rewritten with an epistemic must ("so the findings must tell us little about state schools"); stem de-jargoned
t7l3s2-3 — "must be the worst in the region" gave no ground, so no near miss → "With so many cars on its roads, the capital must have the worst air…" (reason given, step does not follow); "deontic" removed from why
t7l3s2-5 — "must not" defensible ("the programme must not be judged on the fourth district alone" is normal academic English) → replaced with "might not"; key moved 1→4; why updated
t7l3s3-2 — key 139 chars, far longest → options recast in parallel "Instruction: <em>…example</em>" form; key "Keep just one hedge: …which suggests that the policy had some effect."
t7l3s3-3 — key added evidence not in the original ("on every published measure") and flipped the second claim ("will definitely solve" → "is unlikely to relieve"), so not a calibration → key "Traffic … appears to be getting worse, and the new ring road may help to ease it"; two near misses each repairing only one half; key moved 1→4; why rewritten
t7l3s3-5 — key longest, and why said "The key is the longest option here" → key "Each claim pitched to match its evidence, so that the force varies."; option 4 now clearly the near miss (varies, but by pattern); why updated
t7l3ck-2 — key longest; platitude distractor gave no near miss → near miss "As the new timetable was popular with staff, it must have raised exam results"; key shortened; key moved 2→4; why renumbered
t7l3ck-3 — "will not" defensible (counter at least as strong as concession is allowed); gap labelled (2) with no (1) → tutor line now asks for a counter "firmly, without promising what nobody can know yet"; blank relabelled (1); key moved 1→3; why updated


## Review — topic-s8.js (Stage 08, `sys-`), second pass

Before: MCQ 44 · key pos 23/20/1/0 (t8l1 8/6/0/0, t8l2 6/7/1/0, t8l3 9/7/0/0) · key longest 21 (48%) · key shortest 5 (11%) · tied-longest 2 · spot pos 1/3/4/0 · judge T/F 1/2 · hint leaks flagged 7
After:  MCQ 44 · key pos 10/11/12/11 (t8l1 3/3/4/4, t8l2 3/4/4/3, t8l3 4/4/4/4) · key longest 11 (25%) · key shortest 6 (14%) · tied-longest 1 (t8l2s1-1, a three-way tie on a pure form item) · spot pos 2/2/2/2 · judge T/F 1/2 · `node verify.js` CLEAN
Hint leaks: all 9 `sys-` principles rewritten in hints-topic-s8.json. With them in place the audit would flag only 4 single-word keys that any accurate statement of the rule has to contain (must/should/should/need). None of the new principles contains a key phrase or an example that maps onto an item.

## Level 1
t8l1s1-1 — key longest; position 1; option 3 (speaker's authority vs outside authority) was a defensible second ambiguity → shortened the key, replaced option 3 with the near miss "firm deduction or cautious guess", key moved to 3, why rewritten
t8l1s1-4 — position 1; epistemic half of the key ("probably closed already") did not fit "at the end of each cycle" → key now "…or that it can be expected to be closed by then", moved to 4; option 3 (instruction/permission) labelled as the near miss in why
t8l1s1-5 — spot error in part 3 → re-segmented so the error falls in part 4; "suppletive" removed from why
t8l1s2-1 — key 111 chars against 31–82 → key shortened (still longest, by 7 chars), moved to 3; stative-verb option labelled as the near miss
t8l1s2-3 — position 1 → key moved to 4; deadline option labelled as the near miss
t8l1s2-5 — key 108 chars against 19–43, and no near miss → options made parallel short noun phrases (key now shortest); "plural subject" became the near miss "households, which cannot take instructions"; key moved to 2
t8l1s3-1 — position 2, key longest → key moved to 4 (still longest, by 4 chars); "should" labelled as the near miss
t8l1s3-3 — position 1 → key moved to 3; travel-piece option labelled as the near miss
t8l1s3-5 — stem said "standard practice", which gave away "routinely" → stem rephrased ("what researchers in the field already do")
t8l1ck-1 — key longest, position 2 → option 3 made longer with a natural "o'clock", options reordered with the key at 3; the passive-plus-deadline option labelled as the near miss
t8l1ck-3 — spot error in part 2 → clause rebuilt so the error is in part 1; the stem now says it is a contract clause, because the "contract states" frame was removed from the words
t8l1ck-5 — position 2 → key moved to 1; the "obliged" option labelled as the near miss
t8l1ck-6 — stem had "epistemic reading" → plain-English stem (engineer working something out, not giving an instruction); key moved to 4; bare "must" labelled as the near miss; "operator" removed from why

## Level 2
t8l2s1-1 — stem was stilted and listed the slot order ("modal, perfect, progressive, passive, verb"), which gave the answer → natural gapped sentence; why notes that the chain is rare
t8l2s1-2 — build stem contained "should have been", which is the key → stem now "Nobody reported the incident at the time. Put the words in order to criticise that."
t8l2s1-3 — key longest; stem had "string of auxiliaries" → plain stem; key reworded shorter ("replacing the seals may turn out to be necessary…"), moved to 4; "already replaced" labelled as the near miss
t8l2s1-5 — key 91 chars against 73–80; stem jargon ("the perfect after the modal") → stem "What does have completed add here?"; key shortened (82 vs 80), moved to 2; the deduction option labelled as the near miss
t8l2s2-1 — position 2 → key moved to 1; "must have held" labelled as the near miss
t8l2s2-2 — position 2 → key moved to 3; "might move" labelled as the near miss
t8l2s2-3 — stem used the term "backshift" → plain description of stepping back; key moved to 4
t8l2s2-5 — position 2 → key moved to 1; "might have had" labelled as the near miss
t8l2s3-1 — distractors Would/Will/Might were all ruled out just by the hint's list of three verbs, and there was no near miss → options now Were/Should/Had/Would (Were and Had need a different verb form and a different main clause); key at 2; why rewritten
t8l2s3-3 — key 145 chars; the old principle stated the key's two reasons word for word → key shortened (79 vs 88), key moved to 3; "more certain" labelled as the near miss
t8l2s3-5 — position 1 → key moved to 4; "Should … to decide" labelled as the near miss
t8l2ck-1 — stem jargon ("slots"); key tied for longest → stem "Which sentence is grammatical?"; option 4 is now "must been being audited" (breaks the tie); key moved to 1
t8l2ck-3 — position 1 → options reordered with the key at 3
t8l2ck-5 — position 1 → key moved to 2; the "will"-clause option labelled as the near miss

## Level 3
t8l3s1-1 — position 1 → key moved to 4; the requests option labelled as the near miss
t8l3s1-3 — position 1 → key moved to 2 (still longest); the forecast reading labelled as the near miss
t8l3s1-5 — key 85 chars against 50–61 → key shortened and options 2 and 4 given natural completions; key moved to 3; "If it will speed things up" labelled as the near miss
t8l3s2-3 — key 127 chars, position 1 → key shortened (95, still longest), moved to 4; the "must is stronger" option labelled as the near miss
t8l3s2-5 — position 1 → key moved to 3; "Ought the tribunal consider" labelled as the near miss
t8l3s3-1 — key 109 chars and it spelled out the criterion ("without hedge or attribution") → key shortened to "…where the writer states that the figure is not in dispute" (no longer longest)
t8l3s3-2 — key 115 chars and it named the signals → key "doubts the claim but does not say so directly"; option 4 reworded as the near miss ("doubts whether there is any effect…"); key moved to 3
t8l3s3-4 — key 89 chars against 28–57 → key "Granted a possibility, then refused to rely on it."; key moved to 1; option 4 labelled as the near miss
t8l3ck-1 — key 118 chars → key shortened (92 vs 85), moved to 4; option 1 labelled as the near miss
t8l3ck-2 — key 71 chars against 47–56 → key shortened (61), moved to 3; the generic timber option labelled as the near miss
t8l3ck-3 — spot error in part 3 → error moved to part 4 by splitting the reporting frame from the clause
t8l3ck-5 — position 1 → key moved to 4; "would" labelled as the near miss
t8l3ck-6 — key 119 chars → key "Setting one source against another without committing to either." (no longer longest); "Predicting that the backlog will not clear" labelled as the near miss

## Principles (hints-topic-s8.json)
sys-ambig — its example "He must be in the library… nothing inside the sentence decides" matched t8l1s1-1 one to one → restated as a general rule with no example
sys-clues — "must know" matched t8l1ck-4; the "shipment" example sat very close to t8l1s2-2 → examples replaced by descriptions (state, finished event, in progress, a subject that cannot act)
sys-disambig — named "protocols" (the key of t8l1s3-3) and listed "is presumably" / "is required to" (the keys of t8l1ck-6 and t8l1s3-1) → uses forms that appear in no item (has a duty to / it seems that)
sys-chain — contained t8l2s1-1's key "might have been being examined" → shows the order with no example chain
sys-report — "must → had to" gave the key of t8l2ck-3 and m3-14, and the list of six non-movers eliminated every distractor in t8l2s2-3 → states the mechanism without the lists
sys-invert — "Should you require further assistance" matched m3-5, and "archaic… compressed" was the key of t8l2s3-3 → keeps the three verbs but no example, and no reason for the formality
sys-will — "That'll be the courier" matched t8l3ck-2, "She will keep interrupting" matched t8l3ck-5, and "will can" was the key of t8l3s1-1 → gives the four readings in general terms and the "when?" test
sys-periphery — "I need hardly remind you" matched t8l3ck-4 and "He daren't ask" matched t8l3s2-4 → states the rule without those examples
sys-track — "ministers say the scheme will…" matched t8l3ck-6 → "a claim introduced by someone else's reporting verb belongs to them"


## Review — test-1.js (m1), test-2.js (m2), test-3.js (m3)

Audit before → after (`node audit.js mN`):
- m1: MCQ 16 · key pos 4/4/4/4 → 4/4/4/4 · key longest 3 (19%) → 4 (25%) · shortest 4 (25%) → 4 (25%) · tied-longest 1 → 0 · spot 1/1/1/1
- m2: MCQ 15 · key pos 4/4/3/4 → 4/4/3/4 · key longest 4 (27%) → 4 (27%) · shortest 3 (20%) → 3 (20%) · tied-longest 1 → 1 · spot 1/1/2/1
- m3: MCQ 16 · key pos 4/4/4/4 → 4/4/4/4 · key longest 2 (13%) → 4 (25%) · shortest 2 (13%) → 3 (19%) · tied-longest 4 → 0 · spot 1/1/1/1

No keys moved position. Test order untouched (m1 still MOCKS[0]). No hints file (tests show no hints).
`node verify.js`: test files load clean; the only errors are in t6l1s2-2 (topic-s6.js, another reviewer's file).

App-wide fix: every `spot` `why` in the three tests numbered the segments 0–3, but engine.js labels them 1–4 (`i + 1`) on screen and in the answer line, and the stage files use 1–4 too. So students were told, for example, "part 0" or "Part 2 is the only part with a modal" when the error was in segment 3. Renumbered in all 12 affected items (listed below). m3-6 had no numbers.

## m1
m1-2 — `why` said "Part 2" (0-based) for the segment shown as 3 → renumbered.
m1-5 — "found nothing either way" made a bare *may not be* read oddly one-sided, and the `why` used "negates the proposition" → examiner now has "a few things that worry her, but nothing conclusive", which motivates *may not be* and rules out *can't be* explicitly; `why` in plain English.
m1-7 — `why` "part 1" → part 2.
m1-11 — stem used the term "remoteness in time" → "In which sentence does *could* refer to **past time**?"; options and key unchanged.
m1-12 — distractor *Would you like to move your car?* is a common polite directive in British English (defensible as the same request) → replaced with *Will you move your car?*, the right act at the wrong politeness (near miss); dropped *now* from option 2 so the key is no longer tied longest (now strictly longest; 63/60/55/64); `why` rewritten for option 3.
m1-13 — *should have been* was defensible as expectation ("by procedure it should have been there all night") → replaced with *must had been* (close form near miss); `why` rewritten; key no longer depends on length.
m1-14 — `why` "Part 3 … Parts 0, 1 and 2" → Part 4 … Parts 1, 2 and 3.
m1-15 — `why` claimed *mustn't have* "cannot look back", which is untrue (epistemic *must not have* exists, especially in AmE) → `why` now says it could only be a guess, British English guesses with *can't have*, and the passage states a fact.
m1-17 — stem was stilted ("in one phrase and without repeating herself") and the `why` said *possibly* only repeats the modal, which contradicts the hedge-adverb principle (downward adverbs refine) → stem now "thinks a rise is likely but not certain"; `why` explains *might possibly* as modal+adverb pushed the wrong way (near miss).
m1-20 — `why` "Part 3 … part 0 … Parts 1 and 2" → Part 4 … part 1 … Parts 2 and 3; "past-anchored deictic" put in plain English.

Not changed: m1-1, m1-3, m1-4, m1-6, m1-8, m1-9, m1-10, m1-16, m1-18, m1-19.

## m2
m2-3 — distractor *have to* is very natural for a resolution you set yourself ("I really have to stop…"), so it could be defended → replaced with *am supposed to* (an expectation set by someone else; the source near miss); `why` follows.
m2-6 — `why` "Parts 0, 1 and 3" → Parts 1, 2 and 4.
m2-7 — `why` "Part 2 shows … stacked" → Part 3.
m2-8 — `why` "part 3 … part 3 … Parts 1, 2 and 3" → part 4 … part 4 … Parts 2, 3 and 4.
m2-9 — `why` "Part 0 … part 1" → Part 1 … part 2.
m2-10 — `why` "Part 3 … part 2 … Parts 0, 1 and 3" → Part 4 … part 3 … Parts 1, 2 and 4.
m2-11 — `why` called the *might be not* option "Option 2" (it is option 3) → fixed; the *must not* explanation also covers the reading of *must not* as a conclusion (too certain).
m2-16 — *shouldn't* was defensible ("you shouldn't bring drinks …, although a few people prefer their own bottle" reads as advice plus concession) → passage now says "though anyone who prefers their own bottle is welcome to bring one", which rules out *shouldn't*, *mustn't* and *are not to*; `why` follows. The passage is updated in all three copies (m2-16/17/18).
m2-17 — *don't have to* was defensible ("they needn't work the crossings; we'll place you elsewhere") → passage adds "because our insurance does not cover them there", which makes it a prohibition; `why` follows.
m2-20 — *May I …?* is a normal polite offer form ("May I get you a drink?"), and *Will I …?* means *Shall I* in Scottish and Irish English, so both were defensible → options now *Must I / Do I / Shall I / Need I*, with *Must I* as the near miss (natural if he'd been told to bring it); key still option 3 and still strictly longest; `why` rewritten.

Not changed: m2-1, m2-2, m2-4, m2-5, m2-12, m2-13, m2-14, m2-15, m2-18, m2-19.

## m3
m3-3 — the stem began "From a live planning inquiry, at which…", which is stilted → "At a planning inquiry, where the developer can still revise the application, an objector says:".
m3-4 — key tied longest (67/67) → option 1 "went off" → "sounded"; key now strictly longest.
m3-7 — no single error: "If the tribunal will accept the late submission" is good English with *will* = willingness (a tribunal decides whether to accept), which is exactly the exception the `why` names → rewritten around a subject that can't be willing: "If the missing witness statement will arrive / before the end of the week, / …"; `fix` and `why` follow; error still in part 1.
m3-8 — `why` "part 2 … Parts 0, 1 and 3" → part 3 … Parts 1, 2 and 4.
m3-9 — `why` "Part 3 … Parts 0, 1 and 2" → Part 4 … Parts 1, 2 and 3.
m3-10 — three-way tie for longest (78/78/78) included the key, and "though I am not insisting" is unidiomatic → key tail now "though I may be wrong" (74).
m3-12 — key tied longest (87/87) → option 1 "fairly confident" → "fairly sure"; key now strictly longest.
m3-17 — key tied longest (82/82) → key "how widely" → "how far" (79); a distractor is now the longest.

Not changed: m3-1, m3-2, m3-5, m3-6, m3-11, m3-13, m3-14, m3-15, m3-16, m3-18, m3-19, m3-20.

## Unsure / flagged
- m1-6 (key *have to*, distractor *must*): *I'm sorry, but I must move our meeting — the clinic…* is natural British English. The item works only because the stem says the form must show that the necessity is not hers. This is the paper's only must/have-to contrast now, so I left it. The same softness applies to any deo-source item.
- m1-4 / m2-2 (*mustn't be* as the deduction distractor): the deduction reading of *mustn't* is heard in some regional varieties (Australian, Irish, northern British). I kept it because this contrast is the app's main teaching point, and the given sentence and context point to standard British English.
- m2-18 (*can* vs *should* for the sweep vehicle): *can* is a statement of capacity and is mildly defensible. I left it as is.


---

# First review, 22 September 2026


Every one of the 564 questions was re-read for correctness and clarity. What follows is
the per-item record: one line for each item that changed, grouped by file, exactly as the
eight stage reviewers and the test reviewer wrote them.

## What was being looked for

1. Is the key actually correct English?
2. Is exactly one option defensible? (The commonest real fault — a distractor that is
   perfectly good English in a context the stem does not rule out.)
3. Are the options parallel — differing from the key **only** on the feature being tested?
   This is the fault in the item you flagged: three options said *before the ceremony* and
   the key said *for the whole of the ceremony*, so it could be picked without
   understanding any modality.
4. Is the stem self-contained, with the criterion stated rather than left to be guessed?
5. Does the `why` tell the truth about the options as they now stand?
6. Is the English natural?
7. Type-specific traps: `spot` segments that conceal a second error, `sort` cards that
   could go in either bin, `build` and `order` items with more than one good arrangement,
   `cloze` gaps with a second possible filler, `judge` items that are not decidable.
8. Is the CEFR band honest?

## Two faults found across the whole app, fixed globally

- **23 items numbered the options from zero in their `why`.** The engine prints them 1–4,
  so after a wrong answer those explanations pointed the student at the wrong option.
  All shifted. `verify.js` now treats an out-of-range option reference as an error.
- **The keys were bunched.** Across the eight stage files, 177 of 336 four-option keys sat
  at option 2 and only 12 at option 4 — a student could have scored by habit. 97 keys were
  moved (options swapped, nothing reworded, and only in items whose `why` never refers to a
  position). The whole app is now 96 / 96 / 95 / 96. `rebalance.js` does this, and
  `verify.js` warns if it drifts back.

---


# topic-s1.js

# Review — `app/topic-s1.js` (Stage 1, The Modal Frame, 63 items)

`t1l1s1-1` was already repaired and is untouched; it was used as the model for
parallel option sets throughout.

## Items changed

t1l1s1-2 — *again this week* presupposed an earlier cancellation, so the statement "the train has been cancelled" was arguably True on the presupposition reading → retimed the given to a single Friday and rewrote the statement as "will not run on Friday", which is decidably False from the given alone; `why` follows.
t1l1s1-3 — stem asked the student to handle *proposition* and *frames* as technical terms, and the key was the only option carrying a deadline, so it could be picked on phrasing alone → stem rewritten in plain words; all four options now end *at Friday's meeting* and differ only in the modal (will / might / must / could); `why` renumbered to match.
t1l1s1-4 — stem and bin labels leaned on *framing*, which a B1 student has met once → relabelled "What happens" / "How the speaker sees it" with plain hints; cards and `why` unchanged.
t1l1s1-5 — stem used *frames … uncertainty* → plain rewording, options and key unchanged.
t1l1s3-1 — option 4 was a tag question, far longer than the rest and wrong for a second reason (it needed *can't you*) → replaced with *Will you can help…?*, so all four are same-length questions differing only in what is put in front of the modal; `why` rewritten and now states that the key is the shortest because that is the tested point.
t1l1s3-2 — distractor *We should* was defensible: with the question mark already in the line, "We should book it for the rehearsal?" is a normal declarative question → replaced with *Will we should*, which stacks an operator like the other two distractors; `why` rewritten.
t1l1s3-3 — option 4 (*Yes, they will be posted them.*) was doubly wrong and twice the length of the others → replaced with *Yes, they can.*, so all four are "Yes, they + operator" and differ only in which operator is echoed; `why` rewritten.
t1l1s3-5 — option 4 (*Somchai can drive too it*) was a word-order error unrelated to the code property and much the longest → options are now all *…and Somchai X too*, with *will* added as a well-formed but non-equivalent echo; `why` rewritten.
t1l1ck-1 — stem used *frame* and *proposition*; the four options varied in subject, length and structure, so the key stood out as the only modal sentence about the ferry itself → stem put in plain words, all four options now start *The ferry* and are of comparable length; `why` renumbered.
t1l1ck-4 — option 4 (*Am I allowed can*) was not parallel with the other three and was wrong in an unrelated way → replaced with *Will I can*; `why` rewritten.
t1l1ck-5 — stem used *frames … as a deduction* → rewritten as "shows that the speaker is sure, using a modal"; options and key unchanged.
t1l1ck-6 — the statement said the final *can* "stands in place of" the missing words, which is not what happens (the modal survives; the verb phrase is what is dropped), so a careful student could justify False → restated as "the words *come to the rehearsal* have been left out after the final *can*"; `why` adjusted.
t1l2s1-4 — the four options used three different modals, adding a dimension the item does not test, and the stem duplicated t1l2ck-2's → all four now use *must*, giving the three wrong ways of pasting a past onto a modal clause against the one right way; stem now states the intended meaning in plain words; `why` renumbered and notes why the key is longer.
t1l2s2-1 — *might take* was arguably defensible, since the stem only said "now" of the calling → stem now anchors the event with "at the moment"; `why` updated.
t1l2s2-2 — `alt` was empty, but *at the gate the parcels must be checked* assembles from the same tiles with the same meaning → added to `alt`.
t1l2s2-5 — the key was bad English: *warned … that the match will be abandoned if it got any darker* mixes an unbackshifted *will* with a backshifted *got* → options changed to the *would* series, so the key reads *would be abandoned*; passage unchanged; `why` now explains the backshift.
t1l2s3-1 — stem and hints used *chain* and *participle* → "What do the words after the modal tell you about the event?" with hints in plain words.
t1l2s3-2 — *her desk has been cleared* makes *She must be leaving* (i.e. leaving the job) a genuinely defensible second answer → evidence changed to a missing coat and a switched-off computer at half past four, which only supports *must have left*; `why` updated.
t1l2ck-1 — *should circulate* is acceptable English ("the minutes should circulate to all members"), so two options were defensible → verb changed to *send*, where the active reading is impossible; `why` updated.
t1l2ck-2 — stem duplicated t1l2s1-4's, and option 3 carried an extra *yesterday* that the others did not → stem now sets the situation in plain words, and option 3 is *might arrive before we opened*, which still shows the fault without the extra word; `why` updated.
t1l2ck-6 — bin labels used *participle* → "have plus a past form" / "be plus an -ing form" / "be plus a past form"; stem plainer.
t1l3s1-4 — stem and both bin labels used *periphrastic*, and one hint used *finite* → "Can a modal stand in this position, or is the longer form the only thing that fits?" with plain labels and hints; `why` (where the term belongs) unchanged.
t1l3s3-1 — option 4 was about signing a register while the other three were about a laptop, so the key was identifiable by topic → replaced with *Nobody need bring their own laptop*, keeping all four on one subject; `why` rewritten to name what each option does.
t1l3ck-2 — the stem asked which sentence "puts the tense on the right word", but option 1's fault is subject agreement, not tense placement → stem now gives the situation and asks which sentence is correct; options and key unchanged.
t1l3ck-3 — *Have we to bring our own equipment?* is a real British register variant and therefore a second defensible option → replaced with *Are we have to…*; stem now states the communicative goal instead of naming *have to* as an ordinary verb; `why` rewritten.
t1l3ck-5 — the given began *It is likely that…*, but the key (*will have to*) drops the likelihood entirely, so the key was not equivalent to the given → *It is likely that* removed from the given and the stem now asks for the same requirement; options and key unchanged.

**26 of 63 items changed.**


# topic-s2.js

# Review — `app/topic-s2.js` (Stage 2, The Ladder of Certainty, 63 items)

All 63 items read against `BLUEPRINT.md` STAGE 2 and `ANALYSIS.md` §0, §2, §3.
Three stage-specific sweeps were run on top of the brief's checklist:

1. **False precision on the middle rungs.** No item in the stage turned out to
   key on *may* against *might* against *could*. Where the three appear together
   (`t2l1s1-1`, `t2l1s2-1`, `t2l1s2-5`, `t2l1ck-5`) they are deliberately
   equivalent distractors and the `why` says so. Nothing to repair.
2. **Deontic contamination.** Every item using *must*, *may*, *can't* or
   *should* was re-read for a second, rule-reading of its key sentence. Four
   needed the reading closed off: `t2l1s2-5`, `t2l1ck-6`, `t2l2s3-1`,
   `t2l3s3-4`.
3. **Entailment / `judge` items.** All three (`t2l2s2-2`, `t2l2ck-4`,
   `t2l3s3-3`) are decidable from the `given` alone and were left unchanged.
   *The samples may not be contaminated* → "the speaker is confident they are
   clean" is False because *may not* positively signals an open question;
   *She must have missed the train* → "the speaker knows" is False for the same
   reason; and *The laptop can't be in the lost property office* → "the speaker
   has looked" is a genuine **Can't tell**, because a deduction never reports
   how the speaker came by it. No "Can't tell" is doing duty for
   unstated-but-obvious.

## Items changed

t2l1s1-1 — stem described *the laboratory door* but all four options were about *the building*, so the criterion and the sentences referred to different things → stem retimed to "the door of the physics building"; options, key and `why` unchanged.
t2l1s1-2 — the *can't* card duplicated the module's own theory example almost word for word, and the second one had its evidence backwards (contractors removing a lock makes a gate openable, not shut) → replaced with "These can't be last month's figures — they include the holiday weekend" and "the contractors bricked it up in June"; bins and `why` unchanged.
t2l1s1-4 — segment 2 joined two independent clauses with a bare comma (a comma splice), which is a second fault in a `spot` item that may carry only one → segment 2 now begins *and*; flagged segment, `fix` and `why` unchanged.
t2l1s2-5 — *Dr Suphan should be reviewing the proposal now* had a live advice reading that the stem did not exclude, and the `why` leaned on it → stem now sets the four sentences up as guesses about where she is, which forces the epistemic reading on all four; `why` rewritten to drop the instruction reading.
t2l1s3-3 — the card *The results will be published on the department website in June* could be read as a confident prediction as easily as a published arrangement, and the `why` cited "a ringing bell" that appears on no card → the card now names a fixed date and cites the handbook, the courier card is "at the door", and the `why` is rebuilt round the real test (has somebody decided this, or is the speaker working it out).
t2l1s3-4 — the stem had the parcel already visible, which makes *That will be the post* an odd thing to say, and the key was the longest and most detailed of the four options → stem now has her hear a van and speak *without looking*; all four options rewritten to comparable length and detail; `why` follows.
t2l1s3-5 — the tiles contained the three-word compound *night security guard*, so a student could assemble *that will be the security night guard* and be marked wrong for a reason unrelated to modals → *security* removed from the tiles; solution is now *that will be the night guard*; `why` follows.
t2l1ck-6 — *It should be on the shared drive* could be read as a filing rule rather than an expectation about where the file is → *by now* added, which forces the expectation reading; `why` says so.
t2l2s1-2 — the evidence did not establish the conclusion: a stamp dated 2019 rules nothing out unless the target date is stated → the first segment now names the letter the archivist wants (posted in 1962), the flagged segment moves to index 2 and the `fix` shortens to *so it can't be*; `why` rewritten.
t2l2s1-3 — all three distractors used *must not* and the key used *cannot*, so the item could be answered by spotting the odd form without understanding anything → one distractor is now a prohibition built with *cannot* (*Passengers cannot board the ferry without a printed ticket*); `why` rewritten to rest on the reasoning, not the form, and to say explicitly that the modal alone will not decide it.
t2l2s2-1 — the distractor *He can't not be reading his email this week* is not English a real writer produces, so it tested nothing → replaced with *He is certainly not reading his email this week*, a natural sentence that overshoots the evidence; `why` follows.
t2l2s2-4 — "without contradicting itself" was too weak a test for *The new timetable must be working*, where the continuation is a retreat rather than a flat contradiction → stem now asks for the continuation that can be added "without the speaker taking back what they have just said"; options and key unchanged.
t2l2s3-1 — *The shipment should be in the warehouse by now* carried a second, deontic reading (that is where it ought to have been sent) and sat awkwardly in an all-or-nothing bin labelled "It is true" → card changed to *will*, which commits to the positive with no rule reading available; `why` follows.
t2l2s3-4 — blank (2) tested *cannot* as **capacity** ("a package cannot carry three hours of video"), which is dynamic modality and belongs to Stage 4, not the epistemic ladder this module grids → second paragraph rewritten so the blank falls on a deduction about a figure (*The ownership figure cannot be telling us anything about who is able to do the homework*); options, key and blank unchanged; `why` follows.
t2l2ck-5 — stem asked which pair are "not opposites" without saying in which system, and *must* / *mustn't* are non-opposites in the obligation system too → stem now opens "On the certainty ladder"; options, key and `why` unchanged.
t2l2ck-6 — the tiles also assembled into *ours can't be that van*, which is acceptable English with the same meaning and was not listed in `alt` → tiles changed to give *that van can't belong to us*, which has no second good order; `why` follows.
t2l3s1-3 — only one option carried an evidence clause (*— the room is locked*), making it the odd one out for a reason the item does not test → trimmed to *The panel can't be sitting at this hour*; key and `why` unchanged.
t2l3s1-5 — the tiles also assembled into *she must be in the lab working*, good English with the same meaning and absent from `alt` → the stem now supplies a booked seminar room and the tiles give *she must be running a seminar*, which has no second good order; `why` follows.
t2l3s3-1 — the passage hedged the sampling claim (*the report claims only that the association is unlikely to be an artefact*), but the `why` described that claim as asserted as a finding, so the commitment ranking the item depends on did not hold → the passage now states the sampling point flatly and predicts the trial with *should*; `why` corrected.
t2l3s3-4 — the key *The east wing must be closed to the public* reads as easily as an instruction as a deduction, which is exactly the ambiguity this stage must not depend on → options moved to a subject that cannot be ordered (*The vault must be older than the rest of the abbey*), with three bare assertions in three tenses as distractors; stem reworded to "worked the fact out rather than finding it recorded"; `why` rewritten and now says why no second reading exists.
t2l3s3-5 — two orders read acceptably: with *also* in the third sentence, 1-3-2-4 is as coherent as 1-2-3-4 → the third sentence now begins *The second of them*, which can only follow the sentence announcing two changes; `why` follows.
t2l3ck-1 — one distractor was twice the length of the others and made two claims → trimmed to *It has already happened once this winter*; key and `why` unchanged.
t2l3ck-3 — the `why` said *should* was "the expectation rung Malee has just used", but gap (1) is blank, so the student never sees Malee use it → `why` rewritten to argue from the two-day service the dialogue does state.
t2l3ck-4 — the `why` claimed each of the three sound options "names the evidence it rests on", which was untrue of *Membership is unlikely to pass ten thousand next year* → that option is now *Membership looks likely to pass ten thousand next year*, which is calibrated to the same upward trend as the others; `why` rewritten.
t2l3ck-5 — a flat bandwidth graph is evidence that a backup is **not** running, and the flagged segment carried two separate faults (missing progressive plus adverb placement) where a `spot` item may carry one → evidence changed to *The network has been at full capacity since nine* and the flagged segment to *so the backup job must still run*, leaving the single missing-progressive fault; `fix` and `why` follow.
t2l3ck-6 — 1-3-2-4 was defensible, because *however* alone does not tie the third sentence to the second → third sentence now ends "rather than any failure of the reminders", which forces it after the sentence that introduces the reminders; `why` follows.

**26 items changed** of 63. The theory text was not altered.

## Checked and deliberately left alone

- `t2l1s3-2` repairs *must work* → *must be working* inside a Level 1 module, which previews Level 3. The module's own theory flags this ("the progressive, which is the subject of Level 3"), so it is by design.
- Several items echo a sentence from their own module's theory `examples`, usually the crossed-out one the item then drills. This is the file's house pattern in at least four modules and reads as intentional reinforcement rather than recycling, so it was left as found.
- Levels were checked against difficulty; none needed rebanding.

## Verifier output

- `node --check app/topic-s2.js` — clean.
- `node verify.js` — **CLEAN** (564 items, 68/68 tags, no warnings). No problems reported in any other file.
- `node render-test.js` — **ALL ITEMS RENDER AND MARK CORRECTLY** (564 of 564).


# topic-s3.js

# Review — `app/topic-s3.js` (Stage 3, Obligation, Permission, Prohibition, 63 items)

All 63 items read against `BLUEPRINT.md` STAGE 3 and `ANALYSIS.md` §0, §2, §3, §8.
Three stage-specific sweeps were run on top of the brief's checklist: epistemic
contamination of deontic keys, items whose key rests on the *must* / *have to*
tendency without the authority being stated, and Level 2 items that could be
answered by recognising a label instead of reading a situation.

## Items changed

t3l1s1-1 — key was the only option with a contrastive tail (*before the seminar, not after it*), so it stood out on length and phrasing, and the stem left "decided for herself" as a criterion the student had to reconstruct → stem now states outright that three obligations were imposed by somebody else; key replaced with *I must stop leaving my reading until the night before*, which is self-imposed on its face and matches the others in length; `why` follows.
t3l1s1-2 — the card *Candidates must bring photographic identification* was binned "the speaker's own authority", but a bare regulation gives the student no way to see who wrote it, so "an outside authority" was equally arguable → card now reads *A notice from the exam board: Candidates must bring…*, which names the author the bin depends on; `why` unchanged and still accurate.
t3l1s1-3 — key was the only option with the subject *we all*, so it could be picked as the odd one out, and the stem did not say that the head of department must not sound like the rule's author → all four options now begin *We all*, leaving the modal expression as the only difference; stem now states her position explicitly; `why` rewritten and now concedes that *must* is good English in the mouth of whoever made the rule, which is exactly why it fails here.
t3l1s2-1 — the distractor *must have* produced the ungrammatical string *must have cancel*, so it was not a competitor at all, and the stem did not exclude an epistemic reading → the verb moved into the options (*must cancel / must have cancelled / had to cancel / have to cancel*), and the stem now says the storms left the company no choice, which forces the obligation reading and leaves *must have cancelled* wrong for the right reason; `why` rewritten.
t3l1s2-2 — same fault in the cloze: *must have* gave *must have stop* → distractor replaced with *will have to*, which is well formed and fails only on time reference; `why` rewritten.
t3l1s2-3 — the key rested on the claim that *had got to* is impossible, which is too strong: past *had got to* is attested in British English, so the key was defensible only as a tendency → key replaced with *We will have got to leave*, which is genuinely impossible because *have got to* has no infinitive; option order and `answer` adjusted, `why` rewritten and now carries the *had to* point as background rather than as the tested claim.
t3l1s3-2 — the key was the only hedged option among three absolute ones, so it could be picked on tone alone → options rebuilt as a 2×2 (source inside/outside the group × rule kept/not kept), so the student has to get both halves of *be supposed to* right; `why` renumbered.
t3l1s3-3 — the key was the longest option and the only one with a second clause, and the `why` leaned on that extra clause rather than on the modal → all four options are now the same one-clause sentence differing only in the modal expression, with *have got to* replacing the catastrophic *must* clause as the overclaiming distractor; `why` rewritten.
t3l1ck-3 — the card *She was supposed to return the projector on Friday* repeats a sentence already used in the 1.3 theory body → replaced with *The caretaker was supposed to unlock the hall at seven*; `why` follows.
t3l1ck-4 — option 1 carried an extra clause (*and it was my own idea*) that no other option had, and without it *must* is defensible English for a supervisor's instruction → option 1 reduced to *I must redraft the literature review* and the stem now asks for the version that shows the requirement comes from somebody other than the speaker, which only *have to* does; `why` rewritten to say so.
t3l2s1-3 — stem said the session was "optional", which maps word-for-word onto *don't have to* and can be answered without reading the sentence → stem now describes the situation (a colleague with a long journey, nobody will mind if he watches the recording) and the completion sentence was shortened to match; `why` rewritten.
t3l2s2-2 — the statement asked whether handing the log in was "against the rules", which the given sentence does not strictly address, so a careful student could argue "Can't tell" → statement restated as what the speaker is doing (*telling the student not to hand it in*), which is decidable from the given alone; `why` follows.
t3l2s2-5 — the item asked for "the ordinary past of *don't have to*", a label question answerable by metalinguistic recall → recast as a situation (no deposit asked for, none paid) in which *didn't need to* is right and *needn't have paid* is factually wrong; options now full sentences; `why` rewritten.
t3l2s3-1 — two options addressed *you* and two *candidates*, so the key differed from half the field on subject as well as on register → all four now take *Candidates*, and the stem names the job (a printed rubric banning dictionaries); `why` rewritten and now gives the *can't* ambiguity as the reason rubrics avoid it.
t3l2s3-3 — options were split between obstructing and propping open, so the four were not comparable, and the `why` did not say that the distractors are register faults rather than errors → all four now concern blocking the door; `why` rewritten and states that the register shift is what forces the subject to change.
t3l2s3-4 — the flagged segment carried two faults at once, a deontic error and a subject-verb disagreement (*material … don't have to*), so it could be spotted without understanding the cliff → segment corrected to *does not have to be reproduced*, leaving only the meaning fault; `fix` unchanged; `why` rewritten.
t3l3s1-1 — options varied between *You* and *Members* and between *a guest* and *one guest*, so the key stood out on more than register → all four now read *Members … a guest*; `why` renumbered.
t3l3s2-3 — stem asked only for "the right register", which does not by itself rule out the more formal *shall not* → stem now asks for the voice of a school writing to families, neither legal document nor conversation; `why` rewritten and now separates the two register faults from the meaning fault in option 4.
t3l3s3-1 — option 2 repeated a sentence from this module's own theory examples, option 4 was not a rule at all, and *are expected to* is defensible as a statement of compulsory attendance in university regulations → topic moved to laboratory sessions, stem now says that missing one breaks a rule and asks which leaves no room for choice, and option 4 is now *are asked to*; `why` rewritten.
t3l3ck-3 — distractor *had better not to* was malformed, so it could be eliminated on sight → replaced with *aren't obliged to*, a well-formed release form; `why` rewritten and now uses Nok's reply as the evidence that the permit is compulsory.
t3l3ck-5 — option 4 *All applications do not have to be submitted…* is awkward on the all-not scope and read as clumsier than the rest → reworded as *All applications need not be submitted…*; `why` unchanged and still accurate.

**21 items changed of 63.**


# topic-s4.js

# Review — `app/topic-s4.js` (Stage 4, Ability and Willingness, 63 items)

All 63 items were read against BLUEPRINT "STAGE 4" and ANALYSIS §§0, 1, 2, 5, 6.
Special attention went to the three stage-specific risks: the exceptions to the
single-occasion rule, the difficulty implication of *managed to*, and habitual
*would* against conditional *would*.

## Items changed

t4l1s1-1 — two defensible keys: module 1.3 teaches that a thing can have an ability, so *The river can rise by two metres* is arguably the capacity reading the stem asks for; option 1 also near-duplicated a sort card in 1.3 (*Residents … at the depot*) → the general-possibility distractor is now *Storms can close the coast road for days on end in October*, whose subject is a kind of event and can hold no capacity, and the first permission option is now *Library members can borrow six books at a time*; `why` follows.
t4l1s2-2 — the unflagged fourth segment was not good English: *twice as many samples a day as it did in the whole of last year* compares a daily rate with an annual total, which would make two segments wrong → fourth segment is now *as it did at this time last year*; flagged segment, `fix` and `answer` unchanged.
t4l1s2-4 — `alt` was empty, but *before the festival we hope to be able to reopen the bridge* uses exactly the same tiles and is equally good English → added to `alt`; `why` now says the time phrase may stand at either end.
t4l1s2-5 — the distractor *can issue* also fitted the gap: *Since the sensor network was installed, the office can issue a warning …* is ordinary English, so the item had two answers → the sentence now counts completed events (*eleven flood warnings, each of them about ninety minutes before the water arrived*), which forces the present perfect and rules the present modal out; `why` rewritten.
t4l1ck-3 — the distractor *will* was defensible as the generic *will* that module 3.3 of this very stage teaches (*Untreated bamboo will split as it dries*), so a student who had read ahead was right to pick it → replaced with *must*, which can only be a deduction or a requirement here; `why` follows.
t4l2s1-5 — the stem said *Both halves of the sentence report what actually happened*, which is untrue of the first half: knowing four languages is a standing capacity, not an event → stem now states the two facts plainly (the languages were kept for life, the parcel was in fact released) and asks which version reports both in correct English; options and key unchanged.
t4l2s3-2 — *can get* was a second good answer, since *Since the footbridge opened, students can get to school without crossing the ford* is idiomatic → the frame is now *For the past two years*, which admits only a present perfect; `why` rewritten around it.
t4l2s3-4 — `why` did not acknowledge that the key is necessarily present-time while the three ability distractors are necessarily past → added a closing sentence naming that as a difference the tested feature forces.
t4l2s3-5 — `alt` was empty, but *the crew managed to free the anchor chain after three attempts* uses the same tiles and is equally good English → added to `alt`; `why` follows.
t4l2ck-2 — distractor 3 (*The auditor could find the missing entry within twenty minutes*) reads just as easily as a claim about the auditor's standing speed, in which case *could* is correct and the item has two answers → rewritten as *In the end the auditor could find the missing entry in the paper ledger*, where *in the end* forces the culmination reading; `why` updated to name the new flag.
t4l2ck-3 — the flagged segment marked *The archivist could identify …* wrong, but *identify* is a cognition verb of exactly the *recognise* type that module 2.2 lists as exempt, so the "error" was arguably correct English → verb changed to *track down*, which names a result reached after effort; `fix` follows, the final segment now says *bought the print* so that *it* is not ambiguous between the print and the owner, and `why` explains why the verb matters.
t4l2ck-5 — `alt` was empty, but *the library will be able to issue books automatically by next term* uses the same tiles → added to `alt`; `why` follows.
t4l2ck-6 — third card read *the clinic could treat only what it already had on its shelves*, which treats stock as the object of *treat* → now *could treat patients only with what it already had on its shelves*; order and `why` unchanged.
t4l3s1-3 — the stem asked which sentence "uses *will* correctly", but the predictive distractors have a defensible reading as settled future fact (*If the results will arrive on Friday …*) → stem now states the rule and asks which *will* is doing a different job, so the willingness reading is the only ground for choosing; `why` follows.
t4l3s2-3 — echoed t4l3s1-1 closely (*The witness will not give his name in open court* / *The witness wouldn't give her address in open court*), so the same scene was being used twice in one stage → rewritten around a landlord and a key to the side entrance; options made parallel (all begin *He*), key and tag unchanged.
t4l3s2-4 — the four segments concatenated without the comma a fronted adverbial clause needs → comma added to the first (unflagged) segment; flagged segment and `fix` unchanged.
t4l3s2-5 — *couldn't* fitted blank (3) as well as the key: *however often she explained* does not rule out the helpline simply not having the number → the clause is now *even though the operator admitted she had it in front of her*, which rules inability out; *she* in the relay clause replaced by *the deputy* so the pronoun has one referent; `why` rewritten.
t4l3s3-4 — the `given` was a bare habitual *would* with no assertion that anything happened, leaving a Stage 5 student free to read it as conditional → added a plain past second clause (*and the whole class stood about in the yard waiting for it*), which makes the habitual reading the only one; `why` names that evidence.
t4l3ck-1 — *does not open* is perfectly good English, so the item had two defensible answers → stem now names the criterion outright (which option presents the boot as refusing to cooperate); options unchanged, `why` no longer claims *does not* is wrong.
t4l3ck-5 — *could find* partly fitted blank (2) as a possibility reading → replaced with *must find*, which puts the obligation on the tenants and reverses who does what; `why` follows. Separately, *If a tap dripped* in the same passage supplied a conditional cue next to a habitual *would*, so it is now *Whenever a tap dripped*.

**20 items changed** of 63. `node --check` passes; `node verify.js` prints CLEAN; `node render-test.js` prints ALL ITEMS RENDER AND MARK CORRECTLY.


# topic-s5.js

# Review — `app/topic-s5.js` (Stage 5, Distance, 63 items)

All 63 items read against `BLUEPRINT.md` STAGE 5 and `ANALYSIS.md` §0, §2, §4, §6.
Four sweeps were run on top of the brief's checklist:

1. **Politeness items are register judgements.** Every Level 2 item was checked for
   (a) whether the stem actually states who is speaking to whom and with what
   standing, and (b) whether the key is the *only* appropriately-pitched option.
   Three items failed (b) — in one case the `why` said so itself. The reverse
   fault is covered by `t5l2ck-1` (over-remote to a close friend) and `t5l2ck-3`
   (over-remote from a head of department with real authority); both stems carry
   the relationship and both were left alone.
2. **The three readings must be separable from the sentence.** Every Level 1
   discrimination item was checked for a cue *in the sentence* — past adverbial or
   past clause, an `if`, or a speech-act frame. Two items were relying on a
   situation the student had to invent.
3. **No Stage 6 inside Stage 3.** Level 3 now contains no item whose key is a
   `would have` / `could have` form. The two that remain (`t5l3s1-1` opt 4,
   `t5l3s1-5` opt 4) are distractors that the `why` explains as belonging to past
   time, which is the teaching point.
4. **`if … will` exceptions.** Every clause in which *will* is marked wrong now has
   a non-volitional subject (*the drainage work*, *the budget*, *the rain*, *the
   grant*, *the inspection*, *the train*, *the results*, *it*), so the willingness
   and *if that will be all* readings are ruled out by the item itself, not by
   assertion in the `why`.

## Items changed

t5l1s1-5 — `why` numbered all three distractors one lower than their position, so it described option 2 as "Option 1" and never said why the key was right → renumbered and rewrote the key's sentence to name *were allowed to*.

t5l1s2-3 — "the weakest of these four" offered *may reflect* against *might reflect*, which in this use are not reliably rankable: two equally defensible answers → replaced *may reflect* with *should reflect* (epistemic expectation, clearly a stronger claim); `why` rewritten so the scale is must > will > should > might.

t5l1s3-1 — the card *If the grant came through, we might open a second branch* is lifted verbatim from this module's own theory body, which the student has just read; and *Would you mind moving your bag onto the rack?* near-duplicates two other items in the stage → replaced with *If the entrance fee were waived, more families might apply* and *Would you mind turning the fan down a little?*

t5l1s3-2 — option 4 (*Nobody else on the site has ever managed it*) reads naturally as a standing/past ability claim, so it was defensible as forcing the past reading too → replaced with *He is the only person on the site with a master key*, which is unambiguously present; `why` follows.

t5l1s3-4 — `why` said "a world in which the speaker has withdrawn"; it is the *second speaker* who withdraws, not the speaker of the sentence → corrected.

t5l1s3-5 — the sentence shifted subject mid-way (*students could book … but these days you might*) → made both halves *you*.

t5l1ck-1 — option 3 (*On wet mornings the buses would run twenty minutes late*) had no past cue at all and is readable as characteristic present *would*, and the `why` claimed the non-temporal *on wet mornings* fixed it in the past → added a past clause (*Before the depot moved, …*); `why` corrected.

t5l1ck-5 — the tiles also assemble into *the figure I would say is optimistic*, which is good English with the same meaning → added it to `alt`.

t5l2s1-1 — the key was the only option carrying a mitigating adjunct (*when you have a moment*), so it stood out on a second dimension; and the favour was too small for *Can you send me the reading list again?* to be genuinely wrong for a lecturer → rebuilt round a large favour (a reference) with the standing stated in the stem, and the four options are now imperative / near rung / key / wrong speech act, all naming the same request.

t5l2s2-1 — the stem did not establish that the two students have no standing over each other, and the key was the only option with a softener (*a little*) → stem now says they are swapping drafts with no standing over each other's work, and *a little* is gone so the options differ only in frame.

t5l2s2-3 — the `why` itself conceded that option 2 (*Shall I get you a chair?*) was "perfectly acceptable", and option 1 (*I will get you a chair*) is a natural, courteous offer as well: three defensible answers → rebuilt so exactly one option is an offer and the other three (a fallback suggestion, a request, a piece of advice) all leave the visitor fetching her own chair.

t5l2s2-4 — *Should I come in early and clear it?* is ordinary English in this dialogue and is answered perfectly well by *that would be a great help*: two defensible answers → distractor changed to *Might*, which asks permission Mali does not need; `why` follows.

t5l2s3-1 — *Please send us the raw counts by Friday* is normal professional English between partner organisations, so marking it wrong was unfair → replaced with *You must send us the raw counts by Friday*, which does impose an obligation the writer has no standing to impose; `why` follows.

t5l2s3-4 — recycled the room-numbers-by-Wednesday content of `t5l2s3-3` → changed to the updated floor plan before the end of the week; the fault (*might to be able*) and the `why` are unchanged.

t5l2ck-4 — the build sentence near-duplicated two other "move your bag" items in the stage → tiles now assemble *would you mind waiting a few minutes*; checked that no other order of those tiles is good English; `why` follows.

t5l2ck-5 — *It might be helpful if requests included …* fits the gap exactly as well as *would*, so the item had two answers; the frame also duplicated the cloze at `t5l2s3-2` → target sentence changed to *It ___ save a great deal of time if requests included …* and the options to would / will / should / can, all three distractors now clashing with the remote *included*; `why` rewritten round the agreement of the two halves.

t5l3s1-4 — the spot had two repairable segments: *If the university published … will appeal* is equally well fixed at segment 1 (*publishes*) as at segment 3 (*would appeal*), and nothing in the item forced the unreal reading → segment 1 is now *If the university were to publish*, which fixes the clause as unreal and leaves exactly one wrong segment; `why` follows.

t5l3s2-1 — the key was the only option with a hedged quantity (*by as much as a fifth*), so it could be picked on phrasing → all four options now say *by a fifth* and differ only in the consequent's modality; `why` says so.

t5l3s2-3 — the stem was the theory example from the module above it, word for word, so the item tested recall of a sentence rather than the distinction → moved to *If the tolls were lifted, the bridge could / would take twice the traffic*; key and `why` follow.

t5l3s2-4 — card 5 (*If the alarm had been tested, the fire could have been contained*) is a past counterfactual, i.e. Stage 6; card 1 also duplicated the reservoir-and-tankers scenario of `t5l3ck-2` → card 5 is now the present unreal *If the alarm were tested every month, a fire could be caught early*, card 1 is now the bypass and the lorries; `why` follows.

t5l3s2-5 — the whole item was past-time modality: a past counterfactual keyed on *could have handled* against *was able to handle*, which is Stage 6 material sitting in Stage 5 → recast in the present unreal (*If the second runway were open, the airport could handle …* / "As things stand, the airport can handle …"), which tests the same point — an unreal form denies both halves — without the perfect.

t5l3ck-2 — the answer was *would have been*, again past-time modality → the conditional is now present unreal (*If the district laid it now, the tankers would be unnecessary by next summer*), the key is *would*, and the three distractors still fail for the reasons the `why` gives.

t5l3s3-2 — *If the contractor will finish the drainage work…* has an animate subject, so the willingness reading (*if the contractor is willing to finish*) was available and the item marked a defensible sentence wrong; the `why` ruled it out by assertion only → subject changed to *the drainage work*, which cannot be willing; `why` now makes the non-volitional subject the reason.

t5l3ck-3 — *If the committee will approve the budget in June* likewise admits *is willing to approve*, so two options needed no correction → recast on *the budget*, which cannot be willing; `why` now names the willingness exception and says why it cannot apply.

**24 items changed.**

`node --check` passes; `node verify.js` prints CLEAN; `node render-test.js` prints
ALL ITEMS RENDER AND MARK CORRECTLY. No problem was found in any file other than
this one.


# topic-s6.js

# Review — `app/topic-s6.js` (Stage 6, Modality in Past Time, 63 items)

All 63 items read against `BLUEPRINT.md` STAGE 6 and `ANALYSIS.md` §0, §2, §3,
§4 (*So how does English express past modality?*) and §5. Three stage-specific
sweeps were run on top of the brief's checklist:

1. **Every `could have` in the stage** was tested for the three-way ambiguity
   (past chance not taken / weak past possibility / unreal consequent). Module
   3.3 owns the ambiguity; everywhere else the context had to close it. Three
   places were leaving it open or over-committing in the `why`
   (`t6l2ck-1`, `t6l2ck-4`, `t6l3ck-4`) and one distractor pair was resolved by
   rewriting the `why` to name both readings rather than one.
2. **The Level 1 / Level 2 entailment line.** Level 1's *must have / may have /
   can't have* commit the speaker without asserting; Level 2's *should have /
   could have / would have* entail non-occurrence. `t6l2ck-4` was sorting on
   "the form asserts the event", which is false of *must have*, and was the
   worst item in the stage. The four `judge` items were each re-checked for
   decidability from the `given` alone and are sound as written.
3. **`needn't have done` against `didn't need to do`.** Every item on the pair
   was re-read to check that the key turns on what is *asserted* and never on
   the cancellable implicature of *didn't need to*. One item (`t6l3s1-1`) was
   built on that implicature and had two defensible answers.

The *was to have done / was supposed to / was going to* family was also checked
for items that treat the three as interchangeable or mark one wrong where it is
merely less apt: `t6l3s2-3` was unfair in shape rather than in key, and the
module's `theory.key` lumped the three together.

## Items changed

t6l1s1-5 — the key was the only two-clause option and the only one naming both a frame and an outcome, so it could be picked on shape → all four options rebuilt to the pattern "It reports X, and the reset Y"; `why` follows and now names *must have / should have / could have* as the three rejected frames.
t6l1s2-1 — "Three of the four samples were clean" did not license *storage rather than the field* over anything else, so the item asked the student to accept a weak inference before judging its strength → stem now fixes one site, one morning and one contaminated sample; `why` follows.
t6l1s2-3 — one distractor (*had not to receive*) was not English and so not a real option, and two others (*can't have* / *couldn't have*) were wrong for exactly the same reason → options rebuilt as can't have / may not receive (right modality, wrong time) / key / mustn't have (prohibition, not deduction); subject changed to *the review board* to keep it clear of `t6l1ck-2`; `why` rewritten.
t6l1s2-5 — the key was the only option with a hedged verb (*contributed to*) against *caused* and *affected* elsewhere: a student could pick it on the verb without reading the modal → all four now say *caused the fall in attendance* and differ only in the frame, with the unframed *The timetable change caused…* replacing *had to reduce* as the extreme overclaim; `why` rewritten.
t6l1s3-1 — nothing in the stem blocked the perfective reading, so *must have travelled well above the limit* was arguable → *at the moment the driver braked* added, which names a point inside the journey; `why` follows.
t6l2s1-1 — two defensible answers: with only "the audit found the signature missing" in the stem, *can't have sent* is as good a sentence as *should have sent* → stem now says the report "apportions the blame" before the blank; `why` concedes that *can't have sent* is good English elsewhere and fails only here.
t6l2s1-5 — the `why` numbered the options 0-based against the 1-based house convention, so every distractor it named was the wrong one; the key was also the longest option → options rebuilt to one shape (event + minister's stance), including a "released, but forbidden in advance" distractor; `why` rewritten to quote the forms instead of numbering the options.
t6l2s2-1 — `why` said *could have appealed* "by saying nothing about an outcome, entails that it came to nothing", which is self-contradictory → rewritten to say the route was open and that on this reading nothing came of it, and to distinguish it from *can't have appealed*, which reaches the same outcome by weighing evidence.
t6l2s2-5 — *should have* and *ought to have* were the same distractor twice, differing only in register, which left three real options → *ought to have* replaced by *must have widened* (a deduction that it was widened); `why` rewritten so each distractor now fails for a different nameable reason.
t6l2ck-1 — `why` asserted one reading of the distractor *could have signed* → rewritten to name both readings and to say that on neither does the sentence tell you the note was signed.
t6l2ck-4 — the worst item in the stage: bins were labelled "It happened" with the hint "the form asserts the event", but *must have signed* is a deduction and asserts nothing, so the card was undecidable in an all-or-nothing sort; and *We could have signed a longer lease at the same rent* had no context to fix its reading → stem and bins recast as what the speaker takes to have happened; the card given a *but nobody thought of it* clause; `why` rewritten to separate deducing from asserting while keeping both on the same side of the line.
t6l3s1-1 — broken on the brief's third risk: with lunch provided and the sandwich visibly bought, *You didn't need to buy that* is ordinary English, so the distractor was as defensible as the key; the item tested a cancellable implicature as though it were watertight → rebuilt round a context where the action was *not* performed, so the key turns on what *needn't have* asserts; `why` rewritten on assert-against-imply.
t6l3s2-3 — the key was the only option carrying a *but*-clause and the only one naming a reason, so it was pickable on shape; the stem's criterion ("an intention that the speakers held themselves") did not say what it was being contrasted with → all four options now carry the same *but the survey found damp in the cellar* tail, and the stem states that all four report a signing that never happened and asks which presents the plan as the speakers' own; `why` rewritten.
t6l3s3-5 — *was going to go round the lorry … but the road was narrow* is a perfectly good report of an abandoned intention, so the gap had two answers → the officer's line now ends "but he cannot have seen the gap from where he was", which leaves the chance-not-taken reading intact and rules an intention out; `why` follows.
t6l3ck-4 — `why` asserted one reading of the distractor *could have visited* → rewritten to allow both and to point out that neither is an expectation laid on anybody.
t6l2s1 `theory.key` — claimed these forms "entail that the event did not happen" without qualification, which the module's own fourth paragraph contradicts (*They should have landed by now* entails nothing of the kind) → qualified to the judging use, which is what the module teaches.
t6l3s2 `theory.key` — said *was to have done*, *was supposed to* and *was going to* "all describe an arrangement that did not come off", treating the three as interchangeable and contradicting the body, which distinguishes them → rewritten to name what each one says about where the plan came from and how it failed.

**15 items changed, plus 2 module `theory.key` sentences — 17 edits in all.**


# topic-s7.js

# Review — `app/topic-s7.js` (Stage 7, Hedging and Stance, 63 items)

All 63 items read against `BLUEPRINT.md` STAGE 7 and `ANALYSIS.md` §0, §2, §7, §8,
and the Band 7/8 claims checked against the descriptor wording in the
`ielts-writing-expert` skill (`references/scoring-method.md`).

Four sweeps were run on top of the brief's checklist:

1. **Option numbering.** The engine prints options `1`–`4` (`engine.js` line 354,
   `(i + 1)`), and MCQ options are not shuffled. Every `why` in this file counted
   from **0**, so after a wrong answer the student was pointed at the wrong
   option — in 26 items. All references shifted by one; `Options 1 and 4` in
   `t7l1s3-1` too. This is listed once here rather than 26 times below, and the
   items whose numbering changed but whose content did not are not relisted.
2. **Level 1 calibration stems.** Every Level 1 item was checked for whether the
   stem states the evidence precisely enough that exactly one pitch is right.
   One stem (`t7l1s1-4`) left "the evidence" unnamed and was rewritten; the rest
   already name the sample, the figure or the design.
3. **Directionality.** The stage must not teach "always hedge". It already keyed
   the plain or boosted option in `t7l1s2-5`, `t7l3s2-2/3/5`, `t7l3s3-3`,
   `t7l3ck-1/2/5`; two further items were rebuilt so that the *over-hedged*
   option is the named fault (`t7l3s2-1`, `t7l1s3-1`).
4. **Degree words.** Items that turned on ranking one near-synonymous adverb
   against another were removed: the `may possibly` / `might conceivably` split
   in the 2.1 sort and in `t7l2ck-1`, and the aside in `t7l1s3-4`'s `why`.
   `may` vs `may well`, `may not` vs `is unlikely to`, and `arguably` as a
   contestability marker are kept, as those are real distinctions.

## Items changed

t7l1s1-4 — stem asked for the pitch "the evidence for it could actually support" without saying what evidence existed, so the judgement was unanchored → stem now states that a ten-year forecast cannot be tested until the decade has passed and asks for the strongest honest pitch; options and key unchanged.
t7l1s1-5 — bin labels *Supported by the finding* / *Beyond the finding* made the card "may be worth trialling more widely" arguable in both bins, since a recommendation to test elsewhere is not itself supported *by* the study → bins relabelled *Within the finding* / *Beyond the finding* with hints in terms of what one study of one hospital allows; stem reworded to match; `why` follows.
t7l1s2-1 — the key was the only option that restated the measured figure and the only one longer than a line, so it could be picked on shape → all four options now open *The study …* and the distractors carry comparable detail; `why` renumbered.
t7l1s2-3 — the key was the only option with a qualifying clause → distractors given clauses of their own (*whatever the local conditions*, *since the two happened in the same year*, *as this fall in journeys shows*), which also makes the post hoc reasoning in option 3 explicit; `why` clause on option 3 rewritten.
t7l1s2-5 — option 1 (*causes thousands of premature deaths each year*) was defensible as a settled fact, giving the item two answers → replaced with a precise modelled figure (*causes 4,200 premature deaths a year*), which is unambiguously an unhedged estimate; `why` names the modelling.
t7l1s3-1 — options 1 and 4 were both hedge pile-ups, so two distractors failed for the same reason and the stem's criterion ("still says something") was vague → option 4 replaced with *It may be that rural bus services receive some public funding*, which hedges once but hedges the undisputed; stem now asks for a claim "a reader could argue with"; `why` rewritten to name four distinct faults.
t7l1s3-4 — `why` argued from *might conceivably* being lower than *might*, a ranking of near-synonyms → example replaced with *would almost certainly*, where the upgrade is uncontroversial.
t7l1ck-5 — `why` did not mention that *no more effective than* also leaves open that the new treatment is worse, which is a second reason the statement is undecidable → sentence added.
t7l2s1-1 — distractor *might conceivably* required ranking *conceivably* against *possibly* → replaced with bare *might*; `why` clause rewritten so the two weak distractors fail for different nameable reasons (a wasted word vs. reporting only bare possibility).
t7l2s1-2 — the `down` bin (*might conceivably*, *could just possibly*) asked for a distinction competent writers do not make, in an all-or-nothing item → bin rebuilt as *Marks the claim as contested* with *could arguably* and *may reasonably be said to*, both taught verbatim in this module's theory; hints sharpened; `why` rewritten.
t7l2s1-3 — distractor 4 *might not possibly reduce* is not English a learner would produce → changed to *may possibly not reduce*, which is the plausible learner error and still wrong for the reason the `why` gives.
t7l2s2-2 — in an "says the same thing" item, the key was the only option describing what the writer was doing, and was much the longest → all four options are now sentences about footfall; key is *The evidence indicates that …*, which keeps the same evidential distance as *it would appear that*; `why` follows.
t7l2s2-3 — stem was "Which is the weakest use of the device?" with no criterion, and the key was the only short option → stem now names the criterion (a proposition no reader would dispute and no evidence could test); option 1 trimmed and option 2 extended so lengths are comparable; `why` follows.
t7l2s3-3 — stem "Which sentence should follow?" did not say what the sentence had to do → stem now asks for the next step, explaining the fall, at the strength one figure will bear.
t7l2ck-1 — the key was the only option with a second clause, and it turned on *might conceivably* sitting below *may possibly* → key is now bare *may* plus an honest limitation, every option carries an *as the pilot …* clause, and the distractors fail on force, on abandoning the hedge, and on double-setting the same value; stem names the criterion instead of "reports it best"; `why` rewritten.
t7l2ck-4 — *certainly remains open* was fully defensible in the gap (the paragraph argues the question **is** open), so the item had two answers and its `why` was untrue → the passage's final clause is now *the gains claimed for the city as a whole ___(2)___ be overstated* and the options are *may well / may possibly / will certainly / must undoubtedly*, keyed to the modelling described in paragraph 1; `why` rewritten.
t7l3s2-1 — the booster module's opening item offered four boosters, so it could not show that over-hedging is equally wrong → stem now asks which sentence states what follows at the force the two figures earn, and options 1 and 4 are the over-hedged and over-attributed versions of a settled subtraction; key unchanged in substance; `why` rewritten.
t7l3s3-5 — stem "Which paragraph shape is likely to read best to an examiner?" gave no criterion → stem now asks which shape lets a reader see which claims the writer stands behind most firmly; `why` gained a line stating why the key is necessarily the longest option.
t7l3ck-3 — the item asked whether the counter balanced a concession that sat in an unfilled `___(1)___` the student could not read → the tutor's line now dictates the concession in full (*may well prove expensive*), leaving one gap; `why` opens on that concession.
t7l3ck-6 — *they are unlikely in the long run to widen access* is good English with the same meaning and was not in `alt`, so it would have been marked wrong → added to `alt`.

## Theory

t7l1s1 — fourth paragraph of `theory.body` — the Band 7 cap *a tendency to over-generalise* (Task Response) was paired with *precise meanings*, which is the Band 8 **Lexical Resource** phrase, so two criteria were conflated → rewritten to name Task Response and to quote Band 8's *relevant, extended and supported* ideas. The other descriptor references in the stage (`t7l2s3` theory, `t7l3s1` theory, `t7l1ck-6`) were checked against the same source and are accurate.

## Checked and left alone

The concessive-modal items in Level 3 were re-read as a block. `t7l3s1-2` (`order`)
is forced into a single sequence by *exactly this* → *That cost* → *the two
problems*; `t7l3s1-4` (`build`) has no second grammatical arrangement with the
same meaning (*well may appeal* is excluded, and *appeal* reaches its object
through *to*); the concession/counter weights in `t7l3s1-1`, `t7l3s1-3`,
`t7l3s1-5`, `t7l3ck-3` and `t7l3ck-6` are balanced as the theory's rule requires.
All eight `spot` items concatenate into one grammatical sentence with exactly one
faulty segment and a minimal `fix`. No sentence introduced here appears elsewhere
in the app.

## Count

**20 items changed** (18 on content, 2 on `why` alone), plus the option-numbering
correction applied to the `why` of **26 items** (15 of which are not in the list
above and were otherwise untouched), plus 1 theory paragraph. 35 of the 63 items
have text that differs from the version I was handed.

`node --check topic-s7.js` passes; `node verify.js` prints CLEAN;
`node render-test.js` prints ALL ITEMS RENDER AND MARK CORRECTLY.


# topic-s8.js

# Review log — `app/topic-s8.js` (Stage 8 · The Whole System)

## Module items

t8l1s1-1 — key ran two dimensions longer than the distractors, and option 3 no longer said what the `why` claimed it said → trimmed the key to the same length as the others and restored option 3 to the *must*-vs-*have to* contrast the `why` names.

t8l1s1-4 — stem asked "why might an engineer ask the author what is meant?", which option 4 (no agent named) answered just as well as the key; option 3 (binding or only advisory) is a real question about a safety document, so two distractors were defensible → stem now names the criterion ("which of two things the sentence means"), all four options are pairs of readings, and the two defensible distractors were replaced by a time pair and a reference pair that the wording rules out. `why` rewritten.

t8l1s3-2 — the sort card *Contractors must sign out at the gatehouse* was exactly the agentive-subject / controllable-action / no-other-clue configuration that module 1.2 teaches as **ambiguous**, so an all-or-nothing card had no forced reading; the `why` also asserted that *may not* and *can't* are single-domain forms, which is false (both also prohibit) → card given a deadline (*before the end of each shift*), `why` rewritten to credit the *without*-clause and the evidence clause rather than the modals.

t8l1s3-3 — the key, *The line must be flushed before the second infusion*, carried a deadline, which module 1.2 teaches as the deontic signature; the item therefore claimed an ambiguity its own stage had just resolved → deadline removed (*must be flushed with saline*), `why` updated.

t8l2s1-1 — the five-slot monster was presented with no framing → stem now says it is the outer limit of the verb phrase and rare in real prose.

t8l2s1-2 — *the incident should have been immediately reported* and *should immediately have been reported* assemble from the same tiles, are good English and mean the same thing → both added to `alt`.

t8l2s1-3 — a second five-slot monster (*may have been being tested*) presented as something an engineer writes → rebuilt around *may have to be replaced*, a form that actually occurs; the item now also tests the *may have* / *may have to* misparse and ties the semi-modal to Stage 1's repair kit. Options and `why` rewritten.

t8l2s1-5 — *No consignment shall have been released from bond until duty has been paid* is not drafting anyone produces → replaced with the standard contractual *The contractor shall have completed the works by 31 March*, which makes the same point about a perfect after a modal. Options and `why` rewritten.

t8l2s2-1 — `why` implied the backshift was obligatory → added the note that *said that every operator must hold a licence* is equally good while the deadline stands, and that it is simply not among the four options.

t8l2s2-2 — same → `why` now states that keeping *may* would also report the surveyor accurately, and says why *might* is nonetheless the only option that preserves both strength and the past event.

t8l2s2-3 — stem asked which modal "changes", which is false of every modal on its own → stem now asks which has a further-back form to move into; `why` adds that even *can* may be left alone.

t8l2s2-4 — bin labels *Backshifts* / *Stays as it is* asserted obligation → relabelled *Can step back* / *Cannot step back*, stem and `why` rewritten to separate what the form allows from what a writer must do.

t8l2s2-5 — distractor 1, *had to have a key*, is a standard epistemic in ordinary English, so two options were defensible → replaced with *was required to have a key* (deontic-only) and distractor 3 replaced with *can't have had a key*, giving three distractors wrong for three different nameable reasons. `why` rewritten.

t8l2s3-2 — the order read acceptably as 1-4-2-3 as well as 1-2-3-4; the `why` argued for the intended order instead of forcing it → the unreal-past sentence now opens with *Finally*, which can only close the paragraph. `why` updated to name all three signals.

t8l3s1-2 — the sort card *She will answer her email at two in the morning* is as readable as a plain future as it is as a habit, which makes an all-or-nothing card unfair → *night after night* added and the subject changed to avoid an echo with t8l3ck-5. `why` updated.

t8l3s1-4 — the `judge` stem ("about what may happen in the future") was arguable either way, since a refusal is itself a future event → recast on the point the grammar actually settles: *will* here marks refusal, not future time. Answer changes True; `why` rewritten.

t8l3s1-5 — option 3, *If the scheme will save money…*, is arguably as unacceptable as the key, since the saving is not a result of the main clause → replaced with a genuine result conditional, *If it will speed things up, I will send the file by courier*; option 4 was also reusing the very if-clause the module theory gives as the model answer, so its content was changed. `why` rewritten.

t8l3s2-2 — *either* in the final segment had no negative to continue, and the `why` claimed it did → final segment changed to *in the meantime*; `why` corrected.

t8l3s3-1 (`read`) — paragraph 4 contained an unattributed flat assertion by the writer (*The modelling … assumed a traffic volume that the counters never recorded*), which made option 4 defensible against the key; and the key described the eleven per cent figure as carrying "no attribution" when the passage sources it to the monitoring stations → paragraph 4 now attributes that finding to the review, and the key is anchored to *the figure is not in dispute*, the one sentence in the passage with neither modal nor source. `why` rewritten and now says explicitly that the number itself is sourced.

## Check items

t8l1ck-2 — the key was the only necessity modal against three weak-epistemic distractors, so it could be picked as the odd one out → distractor set changed to *might · must · may well · can*, adding a deontic-possibility distractor. `why` rewritten.

t8l1ck-6 — the key was the only option with a progressive, so it stood out on an untested feature → all four options put on the same simple verb form (*presumably runs*). `why` updated.

t8l2ck-3 — context ("so the deadline is firm") made the *unbackshifted* *must* the better English while marking *had to* as the key; and the distractor *must have* produced the ungrammatical *must have be lodged* rather than the deduction the `why` described → dialogue moved to a deadline that has since passed, so the step back is genuinely called for; distractor corrected to *must have been*. `why` rewritten and now states that backshift is available, not compulsory.

## Also changed

`t8l2s1` theory — body paragraph 4 and example 1 sold the five-slot chain as something a C1 writer meets often; now framed as the outer limit of the system, with the realistic two- and three-slot forms (*must have been waiting*, *may have to be replaced*) named as the ones worth producing.

`t8l2s2` theory — `key`, body paragraph 1 and `simple` paragraph 1 stated backshift as automatic, contradicting body paragraph 4; all three now say the step is available rather than required.

**Items changed: 22 of 63** (19 module items, 3 check items), plus two theory blocks.


# test-1.js

# test-1.js — Triage Test (m1) · change log

The diagnostic paper. Two faults ran right through it: several items could be
missed for a reason other than their own tag (so a miss would route the student
to a module that was not broken), and the key sat at option 0 or 1 in every
single item, with the `spot` error always in part 1.

m1-1 — key sat at option 0, in a paper where the key was never at 2 or 3 → reordered the four forms so the key is option 3; wording untouched.
m1-2 — `spot` error was in part 1, as it was in all four `spot` items → resegmented ("Candidates who register / after the closing date / will must pay an additional fee / …") so the error is part 2; `fix` and `why` follow.
m1-4 — key at option 0 again; `why` named "option 1" → reordered so the key is option 3 and renumbered the three distractors in the `why`.
m1-5 — stem ended "the auditors have not ruled that out", where *that* had no recoverable referent, and the criterion was left for the student to reconstruct → rewrote the stem around a document examiner who "found nothing either way"; `why` rewritten to name the scope point.
m1-6 — two of the three distractors (*should*, *had better*) were advice errors, so a miss diagnosed deo-advice but routed to deo-source; and *must* was defensible with an external cause → distractors replaced with *want to* and *am supposed to*, both source errors, and the stem now names the criterion ("the necessity is not hers").
m1-8 — the distractor *should have* gave "you should have leave", which is ungrammatical, so it was eliminable on form and the `why` described a meaning error it did not have → replaced with *would rather*, grammatical in the slot and wrong for a nameable reason; `why` rewritten.
m1-10 — *can have* was near-junk and the key was the only long option → replaced with *will be able to*, which is plausible, grammatical and wrong on time reference; `why` rewritten.
m1-11 — the key was the longest option (76 chars against 54), option 0 was the only question and the only option with a proper noun (*Monday*) → all four rewritten as statements of 70–75 characters with no proper nouns; `why` follows.
m1-12 — the distractor *Do you mind to move* is ungrammatical, so it diagnosed verb complementation, not politeness; options ran 54–63 characters → replaced with "I need you to move your car now"; all four now 62–63 characters; key moved to option 3 and the `why` renumbered.
m1-13 — *had to be* is a perfectly good past deduction ("it had to be him"), so two options were defensible → replaced with *can't have been*, which is wrong on polarity; key moved to option 2; `why` rewritten.
m1-14 — no unique error: "accepts that the scaffolding should be inspected on the Friday" reads as accepting a standing rule, which the rest of the sentence does not contradict → added "before the collapse" so the clause names one past day, moved the flagged segment to part 3 and levelled the segments; `fix` and `why` follow.
m1-15 — *didn't need to rebuild* was as defensible as the key, since the passage stated the backup existed → passage rewritten so the rebuild never started ("came straight off the plan"), making *didn't need to* the only possible form and *needn't have* flatly false; key is now option 1 and the fourth option is *couldn't have rebuilt*; `why` rewritten.
m1-16 — option 3 was a hedge pile-up, which is a hedge-under fault, so a miss there mis-routed; options ran 56–83 characters in two visible pairs → option 3 replaced with a third kind of overclaim ("Every child who eats…"), all four levelled to 75–79 characters; `why` rewritten.
m1-17 — key sat at option 0 → reordered so the key is option 3; wording untouched.
m1-18 — stem said "the same concession and the same counter-argument in one move" without saying what made it one move, and option 3 ("could not suit") was awkward English → stem now names the two-step, option 3 rewritten as "do not really suit", and the `why` now owns the fact that the concession is deliberately re-pitched from *certainly* to *may well*.
m1-19 — option 3 carried the only proper noun in the set (*March*) and the key was the longest option → "by the end of the month"; option 0 lengthened; all four now 70–78 characters.
m1-20 — `spot` error was in part 1 for the fourth time in the paper → sentence recast with a postposed reporting clause so the error is part 0 and the segments are 10/7/5/7 words; `fix` and `why` follow.

Not changed: m1-3, m1-7, m1-9.

Unrepairable under the edit rules, reported rather than fixed: the tag order
breaks the blueprint's within-stage sequence twice — m1-7 `deo-negcliff` (t3l2)
precedes m1-8 `deo-advice` (t3l1), and m1-9 `dyn-occasion` (t4l2) precedes
m1-10 `dyn-repair` (t4l1). Correcting either would mean moving a tag between
ids, which the brief forbids. The stage order (1,1,2,2,2,3,3,3,4,4,5,5,6,6,6,
7,7,7,8,8) is correct, and the band ramp runs B1 → C1+ with one honest dip at
m1-18 (C1+, t7l3) → m1-19 (C1, t8l1).

**17 of 20 items changed.**


# test-2.js

# test-2.js — Final Check · B2 (m2) · change log

The worst fault in this paper was structural: every one of the twenty keys sat
at option 0 or option 1, and all five `spot` errors were in part 1. A candidate
who noticed that could discard half of every option set without reading it.

m2-1 — the `why` called *must have to* a meaningless pile-up, but it is a legal epistemic-over-deontic stack → `why` corrected to say it is a deduction about an obligation, not a statement of what a cancellation would require.
m2-2 — "the chain is still across the door" implies somebody is inside, which contradicts the deduction; and two weak clues left *may not be* arguable → evidence replaced with closed shutters and four days of uncollected post; `why` follows.
m2-3 — key sat at option 0 → reordered so the key is option 2; wording untouched.
m2-4 — key sat at option 1 → reordered so the key is option 3; wording untouched.
m2-5 — *had to* is itself a natural past deduction ("somebody had to let them in"), so two options were defensible → replaced with *can't have*, wrong on polarity; `why` rewritten.
m2-6 — `spot` error in part 1, as in all five error-identification items → resegmented so the error is part 2 ("that at the end of a session / every supervisor must to record / …"); `why` renumbers the clean parts.
m2-8 — `spot` error in part 1 → sentence recast so the past anchor ("until the funding rules changed") is part 3 and the error is part 0; `fix` and `why` follow.
m2-9 — `spot` error in part 1 → recast so the error is part 3, with part 1 now showing the same present perfect used correctly; segments levelled to 5/8/3/7 words.
m2-10 — no unique error: "should book a larger hall … because two hundred people were turned away" reads perfectly well as advice for next time → added "for last month's concert" to date the booking, and moved the flagged segment to part 2; `fix` and `why` follow.
m2-12 — key sat at option 1 → reordered so the key is option 3; wording untouched.
m2-13 — key sat at option 0 → swapped options 0 and 1 so the key is option 1.
m2-15 — one option was 43 characters against 61–71, and it dropped the "you did it" entailment that the item turns on → rewritten as "You were not allowed to carry the boxes up, and you did it anyway", which keeps the action and gets only the modality wrong; key moved to option 2 and the `why` renumbered.
m2-16 — the key was the only multi-word option in a set of single words, which gave it away on sight; *can't* also duplicated the prohibition reading of *mustn't* → *can't* replaced with *are not to*, so two options are phrases and two are single words; `why` follows.
m2-17 — *mustn't to* is ungrammatical junk, eliminable without knowing anything about prohibition, and it was 10 characters against 13–17 → replaced with *had better not*, grammatical and wrong because a warning is not a rule; key moved to option 3; `why` rewritten.
m2-18 — key sat at option 0 → reordered so the key is option 3; wording untouched.
m2-20 — *Should I have* gives "Should I have bring my adapter in tomorrow?", which is ungrammatical, and the `why` explained a *brought* that was not there → replaced with *May I*, grammatical and wrong for a nameable reason; key moved to option 2; `why` rewritten.

Not changed: m2-7, m2-11, m2-14, m2-19.

Confirmed for this paper: every tag is a Stage 1–6 tag, no item is banded above
B2+, the three cloze items share one byte-identical briefing note, the two gap
items share one byte-identical dialogue, and every `spot` sentence concatenates
into one grammatical sentence with exactly one wrong segment. Key positions are
now 5/5/5/5.

**16 of 20 items changed.**


# test-3.js

# test-3.js — Final Check · C1 (m3) · change log

Two systematic faults: in five of the `equiv` and `read` items the key was much
the longest option — m3-20's key ran 156 characters against 68, 110 and 103, so
it could be picked across the room — and the key sat at option 0 or 1 in
eighteen of twenty items.

m3-1 — the stem said "Nothing has been decided yet" and then asked the student to accept that the claim had been refused twice, which is a contradiction → opening replaced with "We hold no formal record of the earlier stages".
m3-2 — the key was 10 characters against 15, 16 and 22 → *have been able to hear* replaced with *am able to hear*, which is equally wrong (present time in a finished past scene) and levels the set to 10/15/15/16; `why` follows.
m3-3 — the past-unreal option was arguable, since opposition has already been voiced, and the key repeated *meet* twice in one sentence → the stem now says the developer "can still revise the application", and the result verb is *face*; `why` follows.
m3-4 — the key was 77 characters against 58–64 → all four continuations levelled to 64–67 characters; key moved to option 3 and the `why` renumbered.
m3-8 — `spot` error in part 1 and the `fix` silently dropped the comma before *but*, so the repaired sentence was mispunctuated → sentence recast around a relative clause so the error is part 2, with the segments at 6/6/5/4 words; `fix` and `why` follow.
m3-9 — `spot` error in part 1 again, the flagged segment was 13 words against 3/6/7, and the `why` described three hedges but the `fix` removed only one without saying so → sentence recast so the hedge pile-up is part 3, hedging a genuinely uncertain levelling-off; `why` now states that one device is warranted and the minimal repair is to drop the adverb that duplicates the modal.
m3-10 — the key was 91 characters against 64, 75 and 78 → all four levelled to 75–78; key moved to option 2 and the `why` renumbered.
m3-11 — the key was 76 characters against 49, 56 and 62 → all four levelled to 60–67 characters, with *in January* kept in every option so no shared phrase marks the key out.
m3-12 — the key was 113 characters against 65, 71 and 76, and was the only option with a subordinate comment clause → all four levelled to 79–85; key moved to option 3 and the `why` renumbered.
m3-13 — the key was 116 characters against 90–104 → distractors lengthened to 101–106; wording of the key tightened.
m3-14 — key sat at option 0 → reordered so the key is option 3; the `why` renumbered.
m3-15 — the longest option was a distractor at 88 characters against the key's 74 → all four levelled to 71–80 characters.
m3-16 — the key was 83 characters against 66, 70 and 76 → all four levelled to 70–76 characters; `why` unchanged in substance.
m3-17 — the key was 89 characters against 56, 67 and 70, and "the writer" was referred to inconsistently → all four levelled to 76–80; key moved to option 3 and the `why` renumbered.
m3-19 — the key was the longest option → all four levelled to 79–80 characters; option 0's justification clause tied to what the passage actually says.
m3-20 — the key ran 156 characters against 68, 110 and 103, which is the single most exploitable cue in the three papers → key rewritten to 108 characters and option 0 lengthened to 101, giving a set of 101–110; the `why` now quotes *What the evidence does support* and *will not hold* as the anchors.

Not changed: m3-5, m3-6, m3-7, m3-18.

Confirmed for this paper: no item is banded below B2+ (m3-2 sits at the floor);
the six `read` items share one byte-identical 2,060-character passage and the
same `source`; m3-19 (`epi-read`) and m3-20 (`sys-track`) ask about the writer's
commitment rather than the propositional content, and each is settled by named
wording — *may well be a necessary condition … the evidence that it is a
sufficient one is thin* for m3-19, and the *not in dispute / may well / could /
it would be a mistake / What the evidence does support* progression for m3-20.
Key positions are now 5/5/5/5.

**16 of 20 items changed.**



---

# 5 October 2026 — coverage pass (Unit 5 page and TCAS70)

| item | change |
|---|---|
| t9l1s1-5 | replaced: was a positive *have to* gap (still tested in t9l1ck-1, t9l2s1); now a dialogue in which Mum refuses permission — *No, you can't* — against *don't have to / needn't / couldn't*. Key position unchanged (3). |
| t9l3s1-5 | replaced: was a True/False on *might* (the 50% reading is still tested by t9l3s1-3 and t9l3ck-1); now a future guess with *mightn't* against *can't / mustn't / needn't*. |
| t9l1s1, t9l3s1 theory | one example added each (*can't* refusing permission; *mightn't* about the future); t9l3s1 body notes that the same verbs guess about the future. |
| t10l2ck-3 | distractor *Had not it been* (ungrammatical anywhere) replaced by the real learner error *Hadn't it been* (no contraction in an inverted condition). |
| Stage 10 | new: 63 items, 9 `tc-` tags; triage Part F (m1-27 … m1-32). |

Balance after the pass (`node audit.js`): t9 keys 12/10/12/10, key longest 27%;
t10 keys 12/13/13/12, key longest 26%; all MCQs 122/123/125/116, key longest 25%.
