# Fine Tuning — content review, 22 September 2026

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

