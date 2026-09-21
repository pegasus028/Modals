/* ===========================================================================
   FINE TUNING — content.js  (core)
   The English Modal System · B1 → C1 · self-study
   ---------------------------------------------------------------------------
   This file holds everything that is NOT question content: the rank ladder,
   the awards, and the error-tag dictionary that drives the teacher report.

   The questions themselves live in the stage files, which are loaded after
   this one and push onto TOPICS:

     topic-s1.js   Stage 01  The Modal Frame
     topic-s2.js   Stage 02  The Ladder of Certainty
     topic-s3.js   Stage 03  Obligation, Permission, Prohibition
     topic-s4.js   Stage 04  Ability and Willingness
     topic-s5.js   Stage 05  Distance
     topic-s6.js   Stage 06  Modality in Past Time
     topic-s7.js   Stage 07  Hedging and Stance
     topic-s8.js   Stage 08  The Whole System
     test-1/2/3.js The triage test and the two final checks

   The reasoning behind the ladder is set out in ANALYSIS.md. Nothing in the
   eight stages is arbitrary; if a module looks odd, its justification is on
   that page.

   ---------------------------------------------------------------------------
   SHAPE OF A STAGE

   {
     id:'t1', n:1, code:'Stage 01', art:'chip', cefr:'B1–B1+',
     name:'…',
     blurb:'One sentence a student reads before opening it.',
     levels:[
       { id:'t1l1', n:1, name:'…', cefr:'B1', blurb:'…',
         subs:[                                   // three per level
           { id:'t1l1s1', name:'…', cefr:'B1',
             theory:{ key:'One sentence that is the whole idea.',
                      body:['<p-worth of html>', …],
                      simple:[…],                 // same idea, plainer English
                      examples:[{s:'…', g:'…'}] },
             items:[ …5… ] },
           …
         ],
         check:{ id:'t1l1ck', name:'Stage Check · …', items:[ …6… ] }
       }, …
     ]
   }

   ITEM TYPES  (the renderer in engine.js knows these)
     choose  {stem, options[], answer}                    multiple choice
     equiv   {given, stem, options[], answer}             closest meaning
     gap     {lines:[{who,text}], stem, options[], answer} dialogue gap-fill
     cloze   {passage, blank, stem, options[], answer}     gap in a text
     read    {passage, source, stem, options[], answer}    reading question
     spot    {stem, words[], answer, fix}                  find the mistake
     order   {stem, items[] IN CORRECT ORDER}              reorder (shuffled)
     sort    {stem, bins[], items[{text,bin}]}             drop into boxes
     build   {stem, tiles[], solution, alt[]}              assemble a sentence
     judge   {given, stem, answer}                         True / False / Can't tell

   Every item carries: id · type · tag (must exist in REMEDIATION) · level
   (a CEFR band) · why (the diagnosis a student reads after answering).
   =========================================================================== */

var CEFR = ['B1', 'B1+', 'B2', 'B2+', 'C1', 'C1+'];

/* --------------------------------------------------------------------------
   RANKS — one rung per band of stage checks cleared (24 in total).
   The ladder is the certainty scale itself, so every promotion teaches the
   thing the app is about: a student climbs from "might" to "beyond doubt".
   -------------------------------------------------------------------------- */
var RANKS = [
  { min: 0,  name: 'No Reading',   note: 'The dial is at zero. Nothing checked yet.' },
  { min: 1,  name: 'Might',        note: 'A first signal. Something is there.' },
  { min: 3,  name: 'Could',        note: 'You can name the parts and say what they do.' },
  { min: 6,  name: 'May',          note: 'The everyday forms hold without thinking.' },
  { min: 9,  name: 'May Well',     note: 'You can explain why a wrong answer is wrong.' },
  { min: 12, name: 'Should',       note: 'Halfway. The hard stages — distance, past modality — are opening.' },
  { min: 16, name: 'Will',         note: 'You read a modal and see the frame behind it.' },
  { min: 20, name: 'Must',         note: 'Exam-ready on nearly everything.' },
  { min: 24, name: 'Beyond Doubt', note: 'Every stage green. The whole system is yours.' }
];

/* --------------------------------------------------------------------------
   AWARDS
   The fifteen ids are fixed by the engine; only the wording is ours.
   -------------------------------------------------------------------------- */
var BADGES = [
  { id: 'poweron',   name: 'First Reading',    perk: 'The dial is live.',                    how: 'Finish your first module.' },
  { id: 'streak3',   name: 'Three Days Tuned', perk: 'Momentum is a skill.',                 how: 'Study 3 days in a row.' },
  { id: 'streak7',   name: 'A Week on the Dial',perk: 'Seven days, no drift.',               how: 'Study 7 days in a row.' },
  { id: 'streak14',  name: 'Fourteen Straight',perk: 'Two weeks without a gap.',             how: 'Study 14 days in a row.' },
  { id: 'allgreen',  name: 'Perfect Pitch',    perk: 'A flawless stage check.',              how: 'Score 100% on any stage check.' },
  { id: 'triple',    name: 'Triple Lock',      perk: 'Three flawless checks.',               how: 'Score 100% on three stage checks.' },
  { id: 'nohelp',    name: 'Unaided',          perk: 'No hints, no help.',                   how: 'Clear a stage check without using a hint.' },
  { id: 'recovered', name: 'Faults Cleared',   perk: 'You fixed what you broke.',            how: 'Fix 5 questions on your Fault List.' },
  { id: 'run10',     name: 'Ten Clean',        perk: 'Ten in a row.',                        how: 'Answer 10 questions correctly in a row.' },
  { id: 'reflight',  name: 'Second Reading',   perk: 'A second attempt, taken.',             how: 'Pass a stage check you previously failed.' },
  { id: 'quick',     name: 'Quick Ear',        perk: 'Reading speed counts in the exam.',    how: 'Earn 25 time bonuses by answering inside 7 seconds.' },
  { id: 'sim1',      name: 'First Paper',      perk: 'You have seen a whole paper.',         how: 'Finish any of the three tests.' },
  { id: 'sim70',     name: 'Seventy Up',       perk: '70% on a full paper.',                 how: 'Score 70% or more on any test.' },
  { id: 'simall',    name: 'All Three Papers', perk: 'Triage and both final checks, done.',  how: 'Finish all three tests.' },
  { id: 'director',  name: 'Beyond Doubt',     perk: 'Every stage green.',                   how: 'Clear all 24 stage checks.' }
];

/* --------------------------------------------------------------------------
   ERROR TAGS
   Every item names one. `principle` is what a student sees if they press
   Hint. `reteach` and `activities` appear only in the teacher console.
   One block per stage, in stage order.
   -------------------------------------------------------------------------- */
var REMEDIATION = {

  /* ---------------------------------------- STAGE 01 · The Modal Frame */
  'frame-twolayer': {
    name: 'A modal frames the event; it does not describe it',
    principle: 'Every modal sentence has two layers. Underneath is the <em>proposition</em> — the state of affairs, <em>the team win</em>. Above it is the <em>frame</em> — what you are doing with that proposition: doubting it, deducing it, requiring it, permitting it. Change the modal and the event never changes; only your relationship to it does.',
    reteach: 'The student is treating modals as extra vocabulary items with Thai translations, so each new modal feels like a new word to memorise rather than a new position on one scale. Show the layers physically: write a proposition on a strip of card and hold different modal cards above it, so the proposition visibly stays put while the frame changes. Then use the disagreement test — you can contradict a proposition with evidence, but you cannot contradict a frame that way, because a frame reports somebody\'s position rather than a fact about the world. It is still broken when the student says that a sentence with \'may\' tells us something about the weather, or cannot say what the difference between \'might rain\' and \'rained\' actually is. It is fixed when they can take one proposition and produce four different frames for it without changing a word of the proposition itself.',
    activities: [
      'Give pairs one proposition on a card (the bus arrives on time) and six modal cards face down; each student draws one, says the sentence aloud, and the partner has to say what changed about the speaker rather than what changed about the bus.',
      'Run a two-column board race: students sort twelve sentences into "tells me about the world" and "tells me about the speaker", and the class scores a point only when a team can name which word did the framing.'
    ]
  },
  'frame-form': {
    name: 'No -s, no to, no second modal',
    principle: 'A modal is not the verb of the clause, so it never takes a third-person <em>-s</em> (<em>he must</em>, not <s>he musts</s>), never takes <em>to</em> (<em>I must go</em>, not <s>I must to go</s>), and never sits under another modal (<s>he will can come</s>). The very next word after a modal is a bare verb, for every subject alike.',
    reteach: 'Thai builds modality with serial verbs and particles, so verb-plus-verb order is the default pattern the student brings, and it produces \'must to go\' directly. The missing -s and the ban on stacking come from the same source: nothing in the first language predicts a defective auxiliary class, so the student generalises ordinary verb behaviour to modals. Teach it as one check rather than three rules: find the verb phrase, confirm one modal with no ending, confirm the next word is bare. Drill it as a proofreading move on the student\'s own writing, not as gap-fill, because the error appears in production long after it disappears from exercises. It is still broken when to reappears in longer sentences, in subordinate clauses, or after won\'t and shouldn\'t, where students stop watching. It is fixed when the student can spot the error in a classmate\'s paragraph without being told which sentence to look at.',
    activities: [
      'Hand out a paragraph containing five modal errors of three different kinds and require students to label each one N (needs no -s), T (no to) or S (stacking) before correcting it, so the diagnosis is scored, not just the fix.',
      'Play a fast substitution chain: the teacher says a sentence with a modal, then calls out new subjects (he, they, my sister, everyone) and students repeat the sentence at speed, which makes the unchanging bare verb audible.'
    ]
  },
  'frame-nice': {
    name: 'A modal negates, inverts and stands alone by itself',
    principle: 'Ordinary verbs borrow <em>do</em> to form questions and negatives because they have no operator of their own. A modal is already an operator, so it takes <em>not</em> directly (<em>cannot</em>), inverts by itself (<em>Can she…?</em>), survives alone in short answers (<em>Yes, she can</em>) and carries stress (<em>I <strong>can</strong> do it</em>). Never put <em>do</em> with a modal.',
    reteach: 'The student has learned do-support as a universal rule for English questions and negatives, so \'does she can drive\' is an over-application of something correctly learned rather than carelessness. Make the logic visible: do exists only to fill an empty operator slot, and a modal has already filled it, so there is nothing for do to do. Short answers are the most efficient diagnostic in class, because a student who answers can you come with \'yes I do\' has not yet located the operator. It is still broken when the student forms the question correctly but answers it with the wrong auxiliary, or when do reappears in negatives while questions stay clean. It is fixed when the student can echo the operator from any question they hear, including will, should and might.',
    activities: [
      'Run a rapid question-and-short-answer chain round the class in which each student must answer with the correct operator echoed from the question, and a wrong echo passes the turn on rather than ending it.',
      'Give students statements and ask them to produce the question, the negative and the short answer for each, with one modal sentence and one ordinary verb sentence side by side so the presence and absence of do is directly contrasted.'
    ]
  },
  'frame-chain': {
    name: 'MODAL, have, be, be, verb — one fixed order',
    principle: 'The verb phrase after a modal is a chain in a fixed order: <strong>MODAL · have · be(-ing) · be(passive) · main verb</strong>. Each link decides the form of the next — the modal takes a bare form, <em>have</em> takes a past participle, progressive <em>be</em> takes <em>-ing</em>, passive <em>be</em> takes a past participle. Build the phrase link by link instead of memorising whole structures.',
    reteach: 'Students who have been taught modal perfect and modal passive as separate named structures have no way to handle a form that combines them, so may have been contaminated looks like a fourth structure to learn rather than three links assembled in order. Teach it as a physical sequence: five labelled cards laid left to right, with students adding only the links the meaning requires and reading off the ending each card imposes on its neighbour. The most productive single question in class is which word is this ending attached to, and why. It is still broken when the student produces \'must be switch off\', \'may been contaminated\', or an -ing form directly after a modal, all of which are links assembled without the word above them. It is fixed when the student can build a form they have never seen, such as will have had to be replaced, from the chain alone.',
    activities: [
      'Give each group five cards labelled MODAL, have, be, be, VERB plus a meaning to express, and have them lay out only the cards they need and write the resulting phrase, then justify every ending to the next group.',
      'Project long verb phrases from real reports and news stories and have students split each one at the modal, saying in plain words what the frame is and what each link below it adds to the event.'
    ]
  },
  'frame-defect': {
    name: 'A modal cannot go where an infinitive or participle is required',
    principle: 'Modals are <strong>defective</strong>: they have one form and no infinitive, participle or <em>-ing</em> form. So after <em>will</em>, after <em>to</em>, after <em>have</em> and after a preposition there is no modal available at all, and <em>will have to</em>, <em>to be able to</em> and <em>has been able to</em> are not stylistic alternatives — they are the only grammatical option.',
    reteach: 'Students usually meet have to and be able to as synonyms of must and can and therefore treat the choice between them as a matter of taste, which leaves them producing will must and have could whenever the slot changes. Reframe the whole thing as a paradigm with holes in it: draw the full form table for an ordinary verb, then draw the modal table and leave the empty cells visibly blank. Once the holes are on the board, the semi-modals stop being vocabulary and become a repair kit. Always ask what is the word in front of the gap before asking which word means the right thing. It is still broken when the student can correct \'will must\' in an exercise but writes it in their own essay, or when they repair the phrase but leave the tense on the wrong word. It is fixed when the student reaches for have to automatically in a non-finite slot without first thinking about meaning at all.',
    activities: [
      'Put the modal paradigm on the board with the empty cells shaded, then feed students slots (after will, after to, after has, after without) and have them fill each shaded cell with the correct periphrastic form.',
      'Give a short text written entirely with must and can, then require students to rewrite it in the future, in the perfect and after I hope, so that every impossible slot forces a repair and the pattern is discovered rather than told.'
    ]
  },
  'frame-semi': {
    name: 'Conjugate the repair like the ordinary verb it is',
    principle: '<em>Have to</em> changes like <em>have</em>: <em>has to, had to, having to, will have to</em>. <em>Be able to</em> changes like <em>be</em>: <em>is able to, was able to, been able to, to be able to</em>. The tense lands on <em>have</em> or <em>be</em>, and everything after <em>to</em> stays bare — <em>has been able to walk</em>, never <s>has been able to walked</s>.',
    reteach: 'Because the phrase is three or four words long, students treat the to as the start of a new clause and try to inflect the verb after it, or they inflect nothing at all and produce has able to. The underlying issue is that they have memorised the phrase as a unit rather than seeing that only its first word is alive. Take the phrase apart on the board and mark the one element that ever changes, then run it through six different slots so the same frozen tail appears every time. It is still broken when the student writes \'was able to finished\', or gets have to right but be able to wrong, since be is the harder of the two. It is fixed when they can produce will have had to and to have been able to on demand and say which word is carrying the tense.',
    activities: [
      'Give a conjugation ladder with one row per slot (present, past, perfect, future, after to, after without) and have students fill both have to and be able to down the same ladder, then underline the single word that changed in each row.',
      'Dictate ten sentences containing errors of the \'has able to\' and \'was able to finished\' kind, and require students to say aloud which word should have carried the tense before they write the correction.'
    ]
  },
  'frame-boundary': {
    name: 'Test the behaviour, not the meaning: need, dare, have to',
    principle: 'Some words sit on the edge of the modal class. Test them: whatever takes <em>not</em> directly, inverts by itself and is followed by a bare verb is behaving as a modal (<em>you needn\'t wait</em>); whatever takes <em>do</em>, <em>-s</em> or a <em>to</em>-infinitive is an ordinary verb (<em>you don\'t need to wait</em>). <em>Have to</em> fails every test, which is exactly why it can go where <em>must</em> cannot.',
    reteach: 'Students who classify words by meaning assume that anything expressing obligation must behave like must, which produces \'don\'t must\' and \'have we to\'. The correction is to move the criterion from meaning to behaviour, and the NICE tests give them a procedure they can actually run on a sentence. The two need patterns are worth isolating explicitly, because the classic error is a blend of them: \'don\'t need bring\' and \'needn\'t to bring\' each take one half of one pattern and one half of the other. Stress that both full patterns are correct, so this is not a matter of one being better. It is still broken when the student mixes the two need patterns under time pressure, or hesitates over forming a question with have to. It is fixed when they can take any unfamiliar verb and decide its class by running the tests, without consulting its meaning.',
    activities: [
      'Give students a mixed set of sentences and a four-column NICE grid, and have them tick which tests each word passes, then assign it to a class on the evidence of the ticks alone.',
      'Set up a sentence-transformation relay in which each team must produce the question, the negative and the short answer for need, dare and have to, and score the two need patterns separately so that blending them loses both marks.'
    ]
  },
  /* ---------------------------------------- STAGE 02 · The Ladder of Certainty */
  'epi-scale': {
    name: 'Choose the rung, not the word: certainty runs on one scale',
    principle: 'An epistemic modal does not describe the event; it reports how much of your evidence points at it. The rungs run <em>must</em> · <em>will</em> · <em>should</em> / <em>ought to</em> · <em>may</em> / <em>might</em> / <em>could</em>, with <em>can\'t</em> right at the bottom. Decide how sure you are first, then read the word off the scale — and remember that a bare sentence with no modal at all (<em>the office is closed</em>) is stronger than <em>the office must be closed</em>, because the modal admits you are inferring.',
    reteach: 'The underlying misunderstanding is that students meet modals as a vocabulary list with translations, so each one is learned as an independent word rather than as a position on a single scale. Put one proposition on the board and keep it fixed - "the building is closed" - and change only the modal in front of it, asking each time what has changed about the building (nothing) and what has changed about the speaker (everything). Then build the ladder vertically on the board and leave it there for the rest of the stage, adding the negative column beside it in Level 2. It is still broken when a student can define each modal correctly but cannot say which of two sentences commits its speaker further, or when they treat "can\'t" as a weak word because it contains a negative rather than as the confident claim it is.',
    activities: [
      'Give six sentences about one situation, each with a different modal, and have pairs physically order the cards from most to least committed, then defend any disagreement by naming the evidence each speaker would need.',
      'Hand out a short news paragraph with every modal deleted and a confidence figure written in the margin for each gap (95%, 75%, 40%), and have students supply a modal that matches the figure, then compare with the original.'
    ]
  },

  'epi-weak': {
    name: 'The weak middle is one rung: may, might and could are near-synonyms',
    principle: 'In a deduction, <em>may</em>, <em>might</em> and <em>could</em> all say the same thing: this is one of the possibilities my evidence leaves open. The differences you may have been taught are far smaller than the difference between all three of them and <em>must</em>, <em>should</em> or <em>can\'t</em>. <em>May</em> is the form that carries formal writing; <em>might</em> and <em>could</em> are commoner in speech. Never stack a second hedge on top: <em>might possibly</em> says nothing that <em>might</em> did not.',
    reteach: 'Students spend a great deal of effort on a distinction that carries almost no information, and none on the distinction that carries all of it. Show three versions of one sentence and ask the class to say what has changed - they will search for a difference and fail to find one, which is the lesson. Then swap in "must" and watch how quickly they spot the change. The register point is worth a minute: "may" for the report, "might" and "could" for the conversation, and "might" as a deliberate choice where "may" could be misread as permission. It is still broken when a student produces hedge pile-ups in writing, or when they believe they have softened a claim by moving from "may" to "might" while leaving a genuine overclaim untouched elsewhere in the paragraph.',
    activities: [
      'Read a paragraph aloud three times, substituting may, might and could at each occurrence, and ask the class to raise a hand the moment the meaning changes; when no hand goes up, replace one with "must" and repeat.',
      'Give students a paragraph disfigured by double hedges (could maybe, might possibly perhaps) and have them delete every word that adds no information, then count how many words a single modal was doing the work of.'
    ]
  },

  'epi-must': {
    name: 'Two jobs for must: look at the subject before you decide',
    principle: '<em>Must</em> deduces (<em>the lift must be broken again</em>) and <em>must</em> requires (<em>visitors must sign in</em>). Four clues point at deduction: a subject that cannot obey anything, a state after the modal (<em>be</em>, <em>know</em>, <em>belong</em>), an evidence phrase such as <em>judging by the queue</em>, and the progressive (<em>must be waiting</em>). <em>Will</em> works the same way and is not a future tense: <em>that will be the courier</em> is a deduction about right now.',
    reteach: 'Learners usually meet obligation "must" first and for a year or two it is the only reading they have, so a deductive "must" is read as a strange order. The fastest repair is a subject test rather than a meaning test: ask whether the subject is capable of obeying an instruction, because a printer, a queue and a set of figures are not. Follow it with the evidence test - is the sentence telling you how the speaker knows? The "will" case needs separate attention, since the future-tense label blocks the deduction reading entirely; use a doorbell and a familiar delivery time. It is still broken when a student writes "somebody must work late" for evidence about this evening, or reads "that will be the post" as a promise or a timetable.',
    activities: [
      'Project ten sentences with "must" and have students sort them by subject alone - human who can comply, or thing that cannot - before anyone is allowed to say what the sentence means, then check how well the sort predicted the reading.',
      'Stage a two-minute deduction game: one student describes only evidence (a smell, a noise, an empty chair) and the rest must respond with a modal sentence whose rung matches how good the evidence was, with the class challenging any overclaim.'
    ]
  },

  'epi-cant': {
    name: 'The negative of deductive must is can\'t, never mustn\'t',
    principle: '<em>He must be at home</em> becomes <em>He <strong>can\'t</strong> be at home</em>. The two halves of one meaning are built from different words, because <em>mustn\'t</em> was already taken by prohibition: <em>he mustn\'t be at home</em> can only mean he is forbidden to be there. Store the pair whole — <em>must be</em> ↔ <em>can\'t be</em>, <em>must be working</em> ↔ <em>can\'t be working</em> — and use the full form <em>cannot</em> in formal writing.',
    reteach: 'The misunderstanding is procedural rather than semantic: students form negatives by adding not to whatever modal is there, and here there is no rule to apply, because the paradigm is suppletive in the way go/went is. Teach it as a fixed pair drilled together rather than as a transformation, and make the reason explicit - the mustn\'t slot is occupied by prohibition, so the deduction had to borrow a word from elsewhere. Contrast a pair of sentences about the same person, one deduction and one rule, so the class hears that "he mustn\'t be at home" is perfectly good English saying something entirely different. It is still broken when a student produces "mustn\'t" for a negative conclusion in free writing, or when they can recite the rule but hesitate over "cannot" in a formal sentence because it looks like ability.',
    activities: [
      'Run a rapid-fire pairing drill: the teacher says a deduction with "must", the class answers instantly with the "can\'t" version and then with a rewritten evidence clause that would justify it.',
      'Give six short scenarios and ask students to write both a deduction and a rule about each using the same subject, label which is which, and read the mustn\'t sentences aloud so the class hears them as prohibitions.'
    ]
  },

  'epi-negscope': {
    name: 'Where the not sits: may not leaves the door open, can\'t shuts it',
    principle: '<em>She may not be coming</em> puts the negative <strong>inside</strong> the claim: it is possible that she is not coming, and equally possible that she is. <em>She can\'t be coming</em> puts it <strong>outside</strong> the modal: there is no possibility that she is. Test it by adding <em>… but then again, she might</em>. If the continuation makes sense you needed <em>may not</em>; if it contradicts what you just said, you needed <em>can\'t</em>.',
    reteach: 'Students read the two as strong and weak versions of one idea, when they are two different claims, so swapping them does not soften a sentence - it inverts it. Draw the scope on the board with brackets: possible(NOT p) against NOT possible(p). Then give a context in which both are false in different ways, so the class can see that neither is a safe default. The continuation test is the one thing most likely to survive into an exam, so drill it until it is automatic. It is still broken when a student writes "the samples can\'t be contaminated" in a paragraph that goes on to keep the question open, or when they read a source\'s "may not" as the author\'s denial and then quote it as such.',
    activities: [
      'Give ten sentences, half with "may not" and half with "can\'t", and have students append "but then again, it might" to each, keeping only the ones that survive and rewriting the rest.',
      'Provide a short report paragraph and two rewrites that differ in one modal only, and ask groups to decide which rewrite the original author could sign, and what evidence would be needed before the other one could be written.'
    ]
  },

  'epi-prog': {
    name: 'Modal + be + -ing for a deduction about this moment',
    principle: 'The chain is <strong>modal → be → -ing</strong>: <em>she must be working in the lab</em>, <em>they could be waiting at the wrong gate</em>, <em>he can\'t be sleeping</em>. The modal supplies the certainty and the progressive supplies the "now" — and it also blocks the obligation reading, because nobody can be ordered to be halfway through something. State verbs stay simple: <em>she must know by now</em>, never <em>must be knowing</em>.',
    reteach: 'Two separate faults hide under this tag. The first is omission: students write "somebody must work late" about evidence they are looking at now, and the sentence lands in the obligation half of the system without their noticing. The second is over-extension: once the progressive is available they apply it to states, producing "must be knowing" and "must be understanding", which is reinforced by the fact that many languages, including Thai, mark ongoing states in ways English does not. Teach the two faults in that order, and use evidence prompts in the present - a light on, a noise, a smell - so the progressive has something to be true of. It is still broken when a student can build the form on demand but reverts to the bare infinitive in free writing, or when "be knowing" survives in speech.',
    activities: [
      'Play a sounds-behind-the-door round: students hear or are described a noise and must produce a full modal-plus-progressive deduction, with the class voting on whether the rung matches the evidence.',
      'Give a mixed list of activity and state verbs and have students try to build "must be ___ing" with each, keeping the ones that work and writing the correct simple deduction for the ones that do not.'
    ]
  },

  'epi-expect': {
    name: 'Should as expectation: what the pattern predicts, not what you advise',
    principle: '<em>They should be there by now</em> is not advice — it is a prediction from a schedule, a trend or a specification, pitched at a rung that is firm enough to act on and modest enough to be wrong. The clues are a subject that cannot take advice (a parcel, the traffic, a battery), a time phrase such as <em>by now</em> or <em>by Friday</em>, and a complement with <em>be</em>. <em>Ought to</em> is the same rung. Climbing to <em>must</em> claims evidence a pattern alone does not give you.',
    reteach: 'Students meet advice "should" first and keep it, so a timetable "should" is read as the speaker telling a train what to do. The subject test fixes it quickly: ask whether the subject could decide to comply. Then make the strength explicit - "should" builds in the admission that the expectation may not be met, which is exactly why it is the modal of forecasts, delivery promises and battery specifications, and why replacing it with "must" is the overclaim examiners penalise in Task 2. Pair it with the Level 2 grid so that "shouldn\'t" is read as an expectation that something is not so, rather than as a weak prohibition. It is still broken when a student reads "the results should be online by Friday" as an instruction to the portal, or writes "must" for any projection they feel confident about.',
    activities: [
      'Sort twelve "should" and "ought to" sentences into advice and expectation by subject alone, then rewrite each advice sentence as an expectation about the same situation and vice versa.',
      'Give three pieces of evidence of different quality - a published timetable, a three-year trend, a colleague\'s guess - and have students write the same prediction three times, choosing the rung each piece of evidence actually earns.'
    ]
  },

  'epi-read': {
    name: 'Read the modals to see how far the writer will go',
    principle: 'In a report the finding is in the nouns and verbs; the writer\'s confidence in it is in the modals. A deduction is not knowledge — <em>she must have missed the train</em> tells you the speaker inferred it and did not see it, and <em>the results must be unreliable</em> tells you the writer reasoned to that conclusion rather than demonstrating it. A bare assertion with no modal at all is the strongest move available, so watch for a paragraph that opens with <em>may</em> and closes with <em>must</em>.',
    reteach: 'The misunderstanding is that modals are decoration, so students skim past them and extract only the content words - which is why they routinely report a hedged finding as though the author had asserted it, and then quote it that way in an essay. Teach reading in two passes: once for what the paragraph says, once with every modal circled and placed on the ladder. Ask each time what evidence the text has offered for that rung, and whether the rung moves between the first sentence and the last. The entailment point deserves an explicit minute of its own, because "must" feels to learners like the strongest word in the sentence when it is in fact an admission. It is still broken when a student paraphrases "walking may improve concentration" as "the study proved that walking improves concentration", which is the exact move the press makes and examiners mark down.',
    activities: [
      'Give a research abstract and a newspaper write-up of the same finding, and have students underline every modal in each and mark where the newspaper has moved a claim up the ladder.',
      'Run a true/false/can\'t-tell set built only on entailment - given a sentence with "must", ask whether the speaker saw it, whether they are certain, and whether it is true - and make the class justify each answer from the modal alone.'
    ]
  },
  /* ---------------------------------------- STAGE 03 · obligation, permission, prohibition */
  'deo-source': {
    name: 'Whose rule is it — yours, or somebody else\'s?',
    principle: 'Both <em>must</em> and <em>have to</em> say that something is necessary; they differ in where the requirement came from. <em>Must</em> puts it in the speaker\'s own mouth — a decision about myself, or a notice written by the body that made the rule. <em>Have to</em> reports a requirement issued elsewhere: a law, a timetable, an employer, another person. Ask who would be annoyed if it were not done.',
    reteach: 'Students meet must and have to as synonyms with a coin-toss between them, and so they choose by sound. The fix is to stop treating it as a choice of strength and make it a question about the source of authority, which is a question they can actually answer about any sentence. Drill it on real texts: notices, tenancy agreements, parental messages, school emails, and ask each time who wrote this and whether they invented the rule. It is still broken when a student writes a self-directed obligation with have to (I have to stop eating sugar, said by someone nobody has instructed) or reports an external rule with must while passing it on to a peer. Warn them too that in many slots there is no choice at all, because must has no past, no infinitive and no participle, so the source question only applies where both forms are grammatically available. Thai learners additionally produce must to, which is the two constructions blended; treat that as evidence that the two have not been separated rather than as a spelling slip.',
    activities: [
      'Source hunt: hand out a real page of school or university regulations and a parent group-chat transcript, and have students highlight every obligation and write beside it the name of whoever made that rule — the mismatches with the modal chosen are the lesson.',
      'Rewrite relay: give ten obligations in must and require each to be reissued as a report by someone passing it on, so that must becomes have to and a source has to be invented and named aloud.'
    ]
  },

  'deo-periph': {
    name: 'Must has no past — that job belongs to had to',
    principle: 'Modals are defective: no past, no infinitive, no participle. So <em>must</em> cannot follow <em>will</em>, <em>to</em> or <em>have</em>, and it cannot be made past. <em>Have to</em> conjugates normally and fills every one of those slots: <em>had to</em>, <em>will have to</em>, <em>has had to</em>, <em>to have to</em>. <em>Had to</em> is the only past of obligation; <em>must have done</em> is a deduction, not a past duty.',
    reteach: 'The underlying misunderstanding is that must is a verb like any other and can therefore be tensed. Teach the defectiveness as the cause and the periphrasis as the repair, so that the forms are derived rather than memorised: ask where must cannot go, and let the class discover that have to appears exactly there. In class, build a four-column grid — past, present, future, perfect — and have students fill it for must and for have to, leaving the impossible cells visibly empty. It is still broken when a student writes will must, must to, or a past narrative in which must sits next to a past adverbial, which is a documented Thai L1 pattern: past marked by an adverbial rather than by a form. A second, subtler failure is reaching for must have done as the past of must have to, which silently swaps obligation for deduction and will resurface in Stage 6.',
    activities: [
      'Empty-cell grid: students complete a tense grid for must and have to and must physically cross out the impossible cells, then narrate a past school week using only forms that survive.',
      'Backshift chain: one student issues an order in direct speech, the next reports it after a past verb, and the class checks that must has become had to every time.'
    ]
  },

  'deo-advice': {
    name: 'Should, had better and be supposed to are not three ways of saying the same thing',
    principle: '<em>Should</em> and <em>ought to</em> recommend: this is the best of several acceptable options, and you may still decline. <em>Had better</em> is <strong>stronger</strong>, not weaker — it is advice with a bad consequence implied, it points at the immediate future, and it is not a past tense. <em>Be supposed to</em> reports a rule made elsewhere and usually hints that it is not being kept.',
    reteach: 'Students file had better with should because it contains a past form and looks mild, and they file be supposed to as a neutral synonym of have to. Both mislocations flatten a useful three-way distinction. Teach had better by insisting on the unspoken second half: every had better sentence must be followed aloud by or-what, and if the class cannot supply a consequence the form is wrong. Teach be supposed to by asking, after every example, whether the rule is actually being followed, and let students hear how regularly the answer is no. It is still broken when had better appears in an essay addressed to governments or planners, when it is used for a standing rule rather than one occasion, when a student produces had better for past advice instead of should have, or when be supposed to is used to state a rule the speaker is loyally observing.',
    activities: [
      'Or-what drill: read had better sentences and require the class to complete each with the threatened consequence; sentences that admit no consequence get rewritten with should.',
      'Rule-versus-practice sort: give pairs a list of school rules and ask them to tag each as one we follow or one we are supposed to follow, then write the be supposed to sentence only for the second group.'
    ]
  },

  'deo-negcliff': {
    name: 'Mustn\'t and don\'t have to are opposites, not a pair',
    principle: 'The negative can attach in two places. In <em>mustn\'t</em> it attaches to the action: there is an obligation <strong>not</strong> to, so the act is forbidden. In <em>don\'t have to</em> it attaches to the obligation: there is <strong>no</strong> obligation either way, so the act is optional. Test it by adding <em>but you can if you like</em> — that survives after <em>don\'t have to</em> and contradicts <em>mustn\'t</em>.',
    reteach: 'In the affirmative, must and have to are near-synonyms, so learners build a false paradigm in which mustn\'t is simply the negative of both. Thai offers no cue that anything is wrong, so the error is invisible to the student and survives for years. Teach scope explicitly and visually: write the sentence twice, once with the not bracketed around the action and once around the obligation, and make students point at which bracket they mean before choosing a word. Then give them the but-you-can-if-you-like test as a portable check they can apply under exam conditions. It is still broken when a student writes mustn\'t in a sentence that goes on to permit the act — unless, if you prefer, optional — or reads a notice saying you do not have to attend as a ban. Because the error inverts rather than blurs the meaning, treat any instance as urgent, and in the student\'s own writing insist on a redundant paraphrase where the stakes are real: attendance is optional; you are not required to come.',
    activities: [
      'Two-bracket board work: the same sentence is written twice with the not bracketed in different positions, and students must say what each version instructs before either modal is allowed on the board.',
      'Consequences game: each student receives a rule card written with mustn\'t or don\'t have to and must act out what they would do; the class judges from the behaviour whether the card was a ban or a release.'
    ]
  },

  'deo-noneed': {
    name: 'Needn\'t removes the rule; it never creates one',
    principle: '<em>Needn\'t</em> and <em>don\'t need to</em> both mean there is no obligation, and neither ever forbids. The difference is only grammatical: modal <em>need</em> takes <em>not</em> directly with a bare infinitive (<em>you needn\'t sign</em>), while lexical <em>need</em> takes <em>do</em> and <em>to</em> (<em>you don\'t need to sign</em>). Never mix the two patterns in one clause.',
    reteach: 'Two problems live here. The first is scope: students who have mislearned mustn\'t often mislearn needn\'t the same way and read it as a prohibition, when in fact it is the cleanest possible paraphrase of don\'t have to. Use that as a diagnostic — if substituting needn\'t preserves a student\'s intended meaning, their mustn\'t was wrong. The second is form: need sits on the boundary between the modal and lexical classes, and blends such as don\'t needn\'t to appear when students have not noticed that it can be either. Show the NICE signature on needn\'t and the ordinary do-support on don\'t need to side by side and make the class label which verb class each belongs to. It is still broken when a student produces the blend, when they use affirmative modal need outside a fixed phrase, or when they reach for needn\'t have as the ordinary past, which means something quite different and belongs to Stage 6.',
    activities: [
      'Class-membership labelling: students mark each of twelve need sentences M for modal or L for lexical and justify the call by naming the evidence — the missing to, the do, the third-person s.',
      'Substitution diagnostic: students rewrite every mustn\'t sentence in their own recent work with needn\'t and keep the ones where the meaning survives, which are precisely the sentences that were wrong.'
    ]
  },

  'deo-prohibit': {
    name: 'All of these forbid — the question is who is speaking',
    principle: '<em>Can\'t</em>, <em>mustn\'t</em>, <em>may not</em>, <em>is not to</em> and <em>shall not</em> all put the negative on the action, so all of them forbid. They differ in register: <em>can\'t</em> is spoken and immediate, <em>mustn\'t</em> is a rule the speaker owns, <em>may not</em> is a formal refusal of permission, <em>is not to</em> is an instruction from an authority, and <em>shall not</em> is legal.',
    reteach: 'Thai learners are documented as using can for permission, ability, possibility and request with no register grading at all, and the prohibition side inherits the same flatness: can\'t does every job. The result is not ungrammatical, which is why it goes uncorrected, but it reads as a writer with no control of voice, and it costs in any task that asks for rules or a process description. Teach it as a ladder with a named speaker on each rung, and have students identify the speaker before choosing. Note also that spoken can\'t is ambiguous between not allowed and not able, and that formal registers prefer may not partly to close that gap. It is still broken when a student writes shall not in a message to a friend, can\'t in a contract or a rubric, or mixes two rungs inside one notice.',
    activities: [
      'Ladder card sort: five prohibition sentences on cards are ranked from most spoken to most legal, then matched to five settings — a corridor, a classroom notice, an exam paper, a works order, a lease.',
      'Register transposition: students take one prohibition and write it five times, once for each rung, then read all five aloud so the class can hear which speaker each version conjures.'
    ]
  },

  'deo-permit': {
    name: 'Permission is not obligation, and it needs a repair to take a tense',
    principle: '<em>Can</em> and <em>may</em> both grant permission and make the same claim — the rules leave the door open — differing only in register. Because both are modals, permission in other tenses runs on <em>be allowed to</em> and <em>be permitted to</em>: <em>were allowed to</em>, <em>will be allowed to</em>, <em>has been permitted to</em>. And permission never requires: <em>you may leave at four</em> does not mean you have to.',
    reteach: 'Two misreadings recur. The first treats may as stronger permission than can, when the difference is social rather than logical; correct it by showing that the rule permits exactly the same thing in both versions and only the imagined speaker changes. The second, and the more expensive at work and in reading comprehension, reads a granted permission as an instruction — a student who is told they may submit early believes they must. Build the habit of asking, after every permission sentence, what happens if I do not, and let the class hear that the answer is nothing. On form, the familiar stacking error will can appear as soon as permission has to reach into future time, so teach will be allowed to alongside will be able to and make students distinguish a rule from a capacity. It is still broken when could is used as a plain past permission for a single occasion, which is a distance form and belongs to Stage 5.',
    activities: [
      'What-if-I-do-not audit: students annotate a page of permissions from a real handbook with the consequence of declining, and discover that permissions carry none while requirements do.',
      'Tense-stretch drill: a single permission sentence is pushed into past, future and perfect time, forcing the class to abandon can and may and choose between be allowed to and be able to each time.'
    ]
  },

  'deo-shall': {
    name: 'In a contract, shall means must',
    principle: 'Conversational <em>shall</em> survives only in first-person offers and suggestions — <em>Shall I …?</em>, <em>Shall we …?</em> In statutes, contracts, regulations and rubrics it does something else entirely: it imposes a duty on a named party. <em>The tenant shall give one month\'s notice</em> is an obligation, not a prediction. <em>Be to</em> (<em>you are to report</em>) delivers an instruction from an authority.',
    reteach: 'Most students have been taught shall as a future auxiliary or as an old-fashioned will, so a contract clause reads to them as a forecast of what someone is likely to do rather than a statement of what they are bound to do. That misreading matters for comprehension long before it matters for production. Teach the fingerprint: third-person institutional subject plus shall plus bare infinitive equals duty; first person plus shall in a question equals offer. Then teach be to as the instruction form, including its impersonal passive, because that is the register of rule and process description that IELTS Task 1 rewards. It is still broken when a student reads a contractual shall as future time, when shall to appears through blending with be obliged to, or when contractual shall leaks into an essay or a message to a friend and makes it sound like a lease.',
    activities: [
      'Duty-or-offer triage: twenty shall sentences drawn from a lease, an exam rubric and a transcript of casual speech are sorted by subject and sentence type before anyone is allowed to translate them.',
      'Diagram-to-rules rewrite: students convert a labelled process diagram into six regulations using be to and must throughout, then check that no sentence has slipped into the future tense.'
    ]
  },

  'deo-register': {
    name: 'Pick the right cell, then hold one register',
    principle: 'Writing a rule is two decisions. First the cell: requirement, prohibition, permission or recommendation — get this wrong and the rule is inverted. Then the altitude: spoken (<em>can\'t</em>), owned (<em>must not</em>), formal (<em>may not</em>), institutional (<em>is not to</em>), legal (<em>shall not</em>). Choose one altitude for a document and stay there.',
    reteach: 'Students treat these as a vocabulary list rather than a two-dimensional grid, so they choose by familiarity and produce documents whose voice changes every sentence. Separate the two decisions explicitly and make them in order, because only the first can invert the meaning: ask which cell, then ask who is speaking. The failures worth naming aloud are should used for something compulsory, which makes readers treat a rule as advice; mustn\'t used for something optional, which is the negation cliff; contractual shall in ordinary prose; and the quiet one, mixing registers inside a single notice. It is still broken when a student produces a set of rules in which the reader is addressed as you in one line and as candidates in the next, or when a safety requirement appears with should. In IELTS Task 1 rule and process answers, a single steady register across the whole response is worth more than any individual clever sentence in it.',
    activities: [
      'Grid placement before drafting: students plot each rule they intend to write on a four-by-five grid of cell against altitude, and only then write the sentence, so the two decisions are visibly separate.',
      'Voice-drift editing: pairs receive a deliberately mixed notice and must rewrite it twice, once entirely at the spoken altitude and once entirely at the institutional one, then argue which suits the setting.'
    ]
  },
  /* ---------------------------------------- STAGE 04 · Ability and Willingness */
  'dyn-ability': {
    name: 'Ability is about the subject, not about the speaker or the rules',
    principle: '<em>Can</em> states a capacity that holds now; <em>could</em> states one that held across a stretch of past time. Both name a <strong>power</strong>, not an event — <em>I could sight-read at twelve</em> says what you were equipped to do, not that you ever played. <em>Be able to</em> is the same meaning in a slot where a modal is impossible, and it is heavier, so use <em>can</em> wherever <em>can</em> fits.',
    reteach: 'The misunderstanding is that can has one meaning that covers ability, permission and possibility indiscriminately, which is roughly what a bilingual dictionary offers and what Thai serial modality encourages. Teach the three paraphrases as a routine: knows how to / is built to for ability, is allowed to for permission, sometimes does for general possibility. Make students apply all three to every can they meet for a week, out loud, until the substitution is automatic. The second half of the problem is the reverse error, where be able to is treated as the smart adult form and sprayed everywhere; insist that can is the default and that the periphrasis is a repair, not an upgrade. It is still broken when a student writes I am able to help you now for a simple offer, or when they read You can leave your bag here as a statement about the bag-carrying abilities of the listener.',
    activities: [
      'Give each pair a set of twelve cards, each one sentence containing can, and three bin cards labelled knows how to, is allowed to and sometimes does; a card is only scored once the pair has said the full paraphrase aloud, so the substitution is the move, not the sorting.',
      'Run a two-minute Biography Minute: one student describes an older relative using only could plus a skill, and the class scores a point every time a sentence smuggles in a single occasion instead of a standing capacity — which also pre-loads Level 2.'
    ]
  },

  'dyn-repair': {
    name: 'Four slots where no modal can stand, so be able to is forced',
    principle: 'A modal has no infinitive, no participle and no <em>-ing</em> form, and cannot follow another modal. So four slots force <em>be able to</em>: after a modal (<em>will be able to</em>), after <em>have</em> (<em>has been able to</em>), after <em>to</em> (<em>hopes to be able to</em>), and as an <em>-ing</em> form (<em>being able to drive</em>). Only <em>be</em> changes; <em>able to</em> never does, and the <em>to</em> is never optional.',
    reteach: 'This is Stage 1 defectiveness applied to can, and students who never grasped the operator idea will experience it as four arbitrary phrases to memorise. Re-derive it rather than restating it: write will, have, to and -ing on the board, ask for the corresponding form of can, and let the class discover that there is none. Then build the paradigm of be able to out of the paradigm of be, which they already own, so that the eight forms cost them nothing new. The diagnostic errors to watch for are will can and has could, which show the operator idea has not landed, and are able help, which shows the phrase has been memorised as a chunk with the to sanded off. It is still broken when a student produces to be able to correctly in a drill but writes she hopes to can attend in free writing a fortnight later.',
    activities: [
      'Slot Roulette: four cards reading WILL, HAVE, TO and -ING are drawn at random and the student must produce the same ability sentence in whichever frame comes up, against a clock, so the form is retrieved by slot rather than by translation.',
      'Give students a paragraph in which every ability is expressed with be able to and ask them to replace with can wherever the grammar permits it; the ones that cannot be replaced are exactly the four forced slots, and the exercise teaches both rules at once.'
    ]
  },

  'dyn-general': {
    name: 'Accidents can happen is about frequency, not about skill',
    principle: '<em>Can</em> has a third reading beside ability and permission: <strong>general possibility</strong>. <em>Accidents can happen</em>, <em>Winters in the north can be severe</em>, <em>Delays can last for hours</em> — these say that instances of this kind occur from time to time. Test it by substituting <em>sometimes</em> plus the present simple. If the meaning survives, it is general possibility; if it does not, it is a capacity.',
    reteach: 'Students meet can glossed as ability or permission and have nowhere to put this third use, so they force it into one of the other two and misread the sentence — usually as permission, which produces the comic reading that somebody has authorised the accidents. Teach the sometimes substitution as a mechanical test and make them write the paraphrase out, because the reading is invisible until the paraphrase is on paper. Distinguish it firmly from epistemic could and may: winters here can be severe is a fact about winters in general, this winter could be severe is a guess about one winter, and the difference is generic subject against specific subject. Watch also for the non-human capacity use, which is not the same thing and is extremely common in the technical register they will be reading. It is still broken when a student paraphrases power cuts can last for hours as power cuts are allowed to last for hours, or when they write this winter can be severe.',
    activities: [
      'Hand out ten authentic-style sentences with can from safety notices, travel advice and materials data sheets, and require a written sometimes paraphrase for each; the ones where the paraphrase fails are the capacity uses, and the class then says what the capacity is.',
      'Generic-versus-specific drill: the teacher reads a generic subject (winters here, small leaks, interviews) or a specific one (this winter, that leak, tomorrow\'s interview) and students must produce the sentence with can or with could, so that the choice is tied to the subject rather than guessed.'
    ]
  },

  'dyn-occasion': {
    name: 'Could names a power, so one successful occasion needs was able to',
    principle: '<em>Could</em> is imperfective: it describes a capacity spread across time and cannot assert that anything came off. A single completed achievement is perfective, so it needs <em>was able to</em>, <em>managed to</em> or <em>succeeded in -ing</em>. <s>She could win the final last Saturday</s> → <em>She was able to win the final last Saturday</em>. <em>Managed to</em> adds the idea of difficulty overcome; <em>was able to</em> is neutral.',
    reteach: 'The root of the problem is the gloss could equals past of can, which is true for the imperfective half and false for the perfective half, and nothing in the classroom usually marks where the line falls. Teach it as aspect, not as an exception list: ask only one question, does this sentence claim that on one occasion something was brought off, and let the answer decide. Drill the question, not the forms. The second failure mode is over-correction, where a student who has just learned the rule writes I was able to swim when I was five and makes a childhood skill sound like a rescue, so always test in both directions. It is still broken when a student can recite the rule but writes could in a narrative paragraph the following week, which is the normal outcome if the rule was taught as a list of four sentences rather than as a test they perform.',
    activities: [
      'The Outcome Question: students work through a past narrative with every ability verb blanked, and before writing anything they must answer aloud did it actually come off, yes or no; the form follows from the answer, so the routine is trained rather than the vocabulary.',
      'Rewrite duel: give two teams the same three-sentence story, one team instructed to report a lifelong skill and the other to report a single rescue, and compare the boards — the same verb comes out as could on one side and managed to on the other, which makes the aspectual contrast visible in one glance.'
    ]
  },

  'dyn-occexcept': {
    name: 'Perception, cognition and the negative escape the single-occasion rule',
    principle: 'The rule blocks <em>could</em> only where the sentence must assert that something was brought off on one occasion. Perception and cognition verbs — <em>see, hear, smell, feel, understand, remember</em> — are stative and assert no achievement, so <em>From the balcony I could see the whole harbour</em> is fine. The negative is free too, because a failure is not an achievement: <em>She couldn\'t win the final</em> is correct. The restriction bites in the affirmative only.',
    reteach: 'The risk here is that students memorise two exceptions and then cannot extend them, so insist on the derivation: both escapes follow from the same reason, that nothing is being claimed to have come off. Make them state the reason aloud for each example rather than naming the category. The one-sidedness of the rule is genuinely surprising and needs explicit attention, because students who have learned could is blocked will over-apply it and start writing she wasn-t able to win where couldn-t was perfectly good. Then teach the border case, where finally or at last or on the third attempt forces an achievement reading even onto a perception verb, so that spot becomes managed to spot. It is still broken when a student can sort the exceptions correctly but cannot say why, which means the list has been memorised and will not survive an unfamiliar verb.',
    activities: [
      'Give six sentences with could, three exempt and three blocked, and require a one-clause justification beside each — stative verb, negative, or one occasion that came off; marks are for the justification only, never for the verdict.',
      'Adverb ambush: students are given a correct could sentence with a perception verb and must then insert finally or after an hour and repair the verb, so they feel the achievement reading switch on and the form change with it.'
    ]
  },

  'dyn-will': {
    name: 'Won\'t is a refusal, and doors refuse too',
    principle: '<em>Will</em> is a modal, not a future tense, and with a present subject it often reports <strong>willingness</strong>: <em>I\'ll carry that for you</em>. <em>Won\'t</em> is correspondingly an <strong>active refusal</strong>, not a bare prediction — <em>He won\'t answer my emails</em> accuses, where <em>He isn\'t answering</em> merely reports. The same reading covers objects: <em>The door won\'t open</em>, <em>The engine won\'t start</em>.',
    reteach: 'Students who have been told that will equals the future read won-t as a neutral prediction and lose the accusation entirely, which in a narrative or a complaint letter is a loss of meaning rather than of style. Teach the minimal pair first: he isn-t answering against he won-t answer, and ask which one you would say to his manager. Then extend to inanimate subjects, where the commonest error is the calque the engine does not want to start, which every teacher of Thai-speaking learners will meet; name it as a translation and replace it once, firmly, with will not start. Note that the affirmative of this reading is rare with objects, so the teaching weight belongs on the negative. It is still broken when a student writes the printer does not want to print, or reads she won-t tell me as a prediction about the future rather than a report of a refusal happening now.',
    activities: [
      'Complaint clinic: pairs are given five neutral present-continuous statements about an unhelpful colleague or a failing appliance and must rewrite each as a complaint using won-t, then say aloud what the rewritten version adds — the accusation has to be named, not just produced.',
      'Broken-object round: a bag of pictures of jammed, stuck and dead objects is passed round and each student must describe theirs in one sentence with won-t; anyone who reaches for does not want to loses the card to the next player.'
    ]
  },

  'dyn-would': {
    name: 'Wouldn\'t is declined; couldn\'t is unable',
    principle: '<em>Would</em> is the genuine past of willingness <em>will</em>, and <em>wouldn\'t</em> reports a past <strong>refusal</strong>: <em>She wouldn\'t tell me where she had been</em> means she declined. Keep it apart from <em>couldn\'t</em>, which says she was unable to. Objects refuse in past time too — <em>The car wouldn\'t start that morning</em> — and this <em>would</em> is not the conditional <em>would</em>, because there is no <em>if</em> and the events really happened.',
    reteach: 'Two confusions collide here. The first is wouldn-t against couldn-t, which students flatten into a single not able, losing the fact that one sentence is about intention and the other about capacity. Drill it with pairs where the context disambiguates — he had the key in his hand — so the choice is forced by evidence rather than by feel. The second is wouldn-t against the conditional would of Stage 5, and the cure is a structural clue rather than a semantic one: a refusal would sits in a plain past narrative with no if-clause and no hypothetical anywhere. Give them the habit of scanning for a condition before they decide. It is still broken when a student reads the witness wouldn-t give her address as she was unable to remember it, or hedges a plain past narrative into an unreal reading because would triggered the conditional reflex.',
    activities: [
      'Two-column dictation: the teacher reads fifteen short past sentences and students write each under DECLINED or WAS UNABLE, then supply the missing modal; the contexts are built so that one clause always rules out the other reading.',
      'Condition hunt: students mark every would in a page of narrative prose and circle the nearest if-clause, if there is one; the ones with nothing to circle are the willingness and habitual uses, which separates Stage 4 from Stage 5 mechanically.'
    ]
  },

  'dyn-habit': {
    name: 'Will and would for what someone is like, and the stressed complaint',
    principle: '<em>Will</em> with a habitual or generic sentence reports <strong>characteristic behaviour</strong>: <em>Oil will float on water</em>, <em>She\'ll sit in the same seat every week</em>. <em>Would</em> does the same in past time: <em>On Sundays he would walk the whole beach</em> — interchangeable with <em>used to</em> for repeated actions, but <strong>not</strong> for past states (<s>he would own a bookshop</s>). Stress the modal and the report becomes a complaint: <em>He WILL leave his boots in the hallway</em>.',
    reteach: 'Students treat will as tense and so cannot see a present-time or timeless reading at all, which makes generic will invisible in exactly the scientific and descriptive prose they will be reading at C1. Establish first that these sentences have no future reference by asking when it happens and letting the class discover that the question has no answer. For past habitual would, the productive teaching point is the boundary with used to: repeated actions take either, states take only used to, and the quickest classroom test is whether you can picture it happening again. The irritation reading depends on prosody, so it must be heard, not described; read the same sentence twice, stressed and unstressed, and ask what changed. It is still broken when a student writes he would own a bookshop, or reads on Sundays he would walk as a hypothetical.',
    activities: [
      'Memoir paragraph: students write six sentences about a relative using would, then swap and strike out every one whose verb is a state; the struck sentences are rewritten with used to, which teaches the boundary by correction rather than by rule.',
      'Stress pairs read aloud: the teacher reads he will leave his boots in the hallway flat and then with heavy stress on will, and students hold up a card marked REPORT or COMPLAINT, so the irritation reading is attached to a sound before it is attached to a grammar label.'
    ]
  },
  /* ---------------------------------------- STAGE 05 · Distance */
  'dist-core': {
    name: 'Could, might, would and should are not past tenses',
    principle: 'The old past ending on these four marks <strong>remoteness</strong>, not past time — a step back from the speaker\'s present, actual, face-to-face reality. Remoteness is then read along whichever axis the context makes available: distance in <em>time</em> (<em>we could walk there when we lived closer</em>), distance in <em>likelihood</em> (<em>that could be the answer</em>), or distance in <em>social space</em> (<em>could you send it again?</em>). One mechanism, three territories. The word never tells you which; the sentence around it does.',
    reteach: 'The misunderstanding is installed by the textbook itself, which glosses could as the past of can and then presents politeness and tentativeness as separate unrelated uses to be memorised. Students end up with three unconnected entries for one word and no way to choose between them under pressure. Re-teach it as one idea with three destinations: write the three axes on the board as three arrows leaving a single point marked HERE AND NOW, and put every example the class meets onto one of the arrows. The pay-off is that the unreal past, the wish construction and the whole politeness dial stop being new material later, which is the argument to make to students who think they already know could. It is still broken when a student produces the right form in a drill but cannot say which distance it is marking, and above all when they write something like could you send it yesterday, which fuses two axes that cannot combine.',
    activities: [
      'Three-arrow board: one remote modal is written in the centre and pairs race to supply a sentence on each of the three arrows using the same modal, so the single-form-three-readings fact is discovered rather than announced.',
      'Frame-stripping drill: give ten sentences with their context clauses intact, have students classify them, then delete the context clauses and re-read — the class sees the same sentences flip to the likelihood default, which proves the reading was never in the modal.'
    ]
  },

  'dist-tentative': {
    name: 'The remote form lowers the strength of a claim, not its content',
    principle: 'Put a remote modal in front of a proposition and the proposition is unchanged; what changes is how far the speaker stands from it. <em>That is the answer</em> &rarr; <em>that may be the answer</em> &rarr; <em>that might be the answer</em>. The remote member of each pair — <em>could, might, would, should</em> — sits one notch lower in commitment than <em>can, may, will, shall</em>. Note separately that <em>I would say</em>, <em>I would think</em> and <em>I\'d have thought</em> soften the <strong>act of asserting</strong>, not the thing asserted.',
    reteach: 'Two opposite failures live under this tag and they need different treatment. The first is flat assertion, which is the normal outcome for students whose first language achieves caution lexically or with sentence-final particles rather than grammatically, so nothing in the L1 tells them that English marks calibration in the verb phrase. The second is the hedge pile-up, which usually appears a fortnight after hedging has been taught and shows that the student has learned the vocabulary but not the principle that one hedge is a complete move. Teach the scale as a physical line on the wall with the modals pegged along it, and make students place their own sentences on it before they write. Insist on the rule that the strength of the claim must match the strength of the evidence, and test it by asking what evidence the sentence would need to be true. It is still broken when a student writes that a single study proves something, or writes might possibly perhaps and believes they have been careful.',
    activities: [
      'Evidence auction: give the class a finding and a line of modals, and have groups bid on the strongest claim they are willing to defend; the group that overbids has to produce the evidence that would justify it, which they cannot, and the scale becomes concrete.',
      'One-hedge budget: students rewrite a paragraph of their own writing under the rule that each sentence may contain exactly one hedging device, forcing a choice of strength rather than an accumulation of caution.'
    ]
  },

  'dist-read': {
    name: 'Four cues decide which distance a remote modal is marking',
    principle: 'The reading is never in the word, so read the frame. <strong>1.</strong> Is the surrounding clause in past tense? <strong>2.</strong> Is there a past time adverbial (<em>in those days</em>, <em>when we lived closer</em>)? Either means distance in time. <strong>3.</strong> Is it a question to the hearer asking something of them? That means distance in social space — the test is that nobody answers <em>Could you check this?</em> with <em>Yes, I could</em>. <strong>4.</strong> Is an <em>if</em> in view, stated or unstated? That means unreality. With no cue at all, the default is a guess about now.',
    reteach: 'Students who have been given three separate uses to memorise have no procedure for choosing between them, so under exam pressure they guess from the topic of the sentence rather than from its grammar. The fix is to convert the knowledge into an ordered checklist that they run every time, out loud at first, in the order given above — past frame, speech act, if-clause, default — because the cues are not equally strong and checking them in the wrong order produces wrong answers on the hard cases. Make them annotate the cue, not just the reading, so that a right answer for the wrong reason is visible to you. The commonest residual error is reading a request as a question about ability, and the second commonest is missing an unstated condition behind a bare would. It is still broken when a student can classify isolated sentences correctly but misreads a remote modal inside a paragraph, where the cue is a clause away.',
    activities: [
      'Cue-highlighting relay: students receive a paragraph and must underline the cue before writing the label, and only the underline is scored, so the procedure is what gets rewarded rather than the guess.',
      'Same-sentence, four-frames: write one modal sentence on the board and have four groups each add a different frame around it — a past clause, a question to a partner, an if-clause, nothing at all — and read the four results aloud in sequence.'
    ]
  },

  'dist-request': {
    name: 'The politeness dial, and the fact that over-remote is also wrong',
    principle: 'A request costs the hearer something, and grammatical distance is how English pays for it: <em>Open the window</em> &rarr; <em>Can you…?</em> &rarr; <em>Could you…?</em> &rarr; <em>Would you mind …ing?</em> &rarr; <em>I was wondering whether you might…</em>. The rung is chosen by the <strong>size of the imposition</strong> and the <strong>social distance</strong> already between you, nothing else. <em>Would you mind</em> asks whether an objection exists, so the co-operative answer is <em>No, not at all</em>; and <em>mind</em> is a lexical verb, so it takes an <em>-ing</em> form, never <em>to</em>.',
    reteach: 'Thai-speaking learners typically leave the dial at can for every request, because Thai does this work with sentence-final particles and pronoun choice rather than with verb morphology, and nothing in the first language suggests that the verb should change at all. The result is not ungrammatical, which is exactly why it is rarely corrected and why it persists to C1. Teach the dial as a physical scale and always give the two variables together, because a rung is only right relative to a person and a favour. Drill in both directions: the class must produce the over-remote version as well and say aloud why it fails, since students who are told only that more distance is more polite will slide into the anxious register that reads as sarcasm with an intimate. Keep saying that every rung is perfect English and that the error is social, or students will start hunting for a grammar rule that is not there. It is still broken when a student writes can you to a head of department, and equally when they write I was wondering whether you might possibly to a classmate about a pencil.',
    activities: [
      'Two-dice register game: one die gives the favour (borrow a pen, borrow a car, read a draft) and the other the person (best friend, new colleague, principal); students must produce the rung and defend it, so the two variables are never separated.',
      'Mind-answer trap drill: the teacher fires would-you-mind questions at the class and students must respond with a full spoken answer while performing the action, until the No, not at all reflex overrides the yes-means-agreement instinct.'
    ]
  },

  'dist-offer': {
    name: 'Offers, suggestions and the authority you do not have',
    principle: 'Three acts, three costs. A <strong>request</strong> takes from the hearer; an <strong>offer</strong> puts the speaker\'s own labour on the table (<em>Shall I…?</em> neutral, <em>Would you like me to…?</em> more remote, <em>I could…</em> softest); a <strong>suggestion</strong> encroaches on the hearer\'s judgement and so is softened (<em>You could try…</em>, <em>You might want to…</em>, <em>It might be worth …ing</em>, <em>You could always…</em> for a fallback). Keep <em>You should</em> and <em>You must</em> for real authority and <em>You had better</em> for a real warning.',
    reteach: 'The underlying misunderstanding is that politeness is one dial rather than three acts that each carry a different cost, so students reach for a request frame when offering help and an authority frame when advising a peer. The second of those is the damaging one: should and must arrive early in the syllabus, feel safe, and are then sprayed over peer feedback and discursive essays, where they read as a student issuing instructions to people who have not asked. Teach the three acts by asking one question of every sentence — who ends up doing the work, and who is paying for it. Give Shall I explicit attention, because students avoid shall as archaic after meeting it in legal English and then have no neutral offer at all. It is still broken when a student answers an offer of help with a request frame, or writes the government must reduce emissions in a Task 2 essay where the argument has not earned that force.',
    activities: [
      'Who-does-the-work sort: a stack of mixed sentences is dealt out and each must be placed under OFFER or SUGGESTION within three seconds, with the justification spoken as who acts, so the test becomes automatic.',
      'Peer-feedback rewrite: students exchange essay drafts, write three comments using only authority forms, then rewrite the same three with remote suggestion frames and compare how the two versions feel to receive.'
    ]
  },

  'dist-soften': {
    name: 'In writing, the grammar has to carry what the voice would have carried',
    principle: 'Email has no intonation, no face and no chance to repair, and it may be forwarded to people you never wrote to — so the distance must be built into the sentence. The standard frames are <em>I was wondering whether you might…</em>, <em>It would be helpful if…</em>, <em>Would it be possible to…?</em>, <em>I would be grateful if you could…</em>, <em>Perhaps we could…</em>. The rule that governs all of them: be <strong>remote about the asking</strong> and <strong>exact about the thing asked</strong> — name the item and name the date.',
    reteach: 'Students transfer the directness of a chat message into professional email, or they over-correct and produce a message so thoroughly hedged that no request can be extracted from it, and the second failure is harder to see because it looks like good manners. Teach the split explicitly, since it is the one rule that resolves both: distance belongs on the frame, precision belongs on the content. The most useful single item to install is I was wondering whether, because it is the most remote frame in ordinary use and its mechanism is transparent once you point out that the past progressive pushes the act of asking into the background. Mark student emails for actionability first and politeness second, so that a beautiful unanswerable message scores badly. It is still broken when a student writes a four-line softening preamble and then never states the deadline, or when the asking is exact and the frame is a bare imperative sent to somebody outside the school.',
    activities: [
      'Actionability audit: students swap the emails they have written and must extract on a slip of paper the item requested, the person who must act and the deadline; any email that cannot be reduced to those three is returned to its author unopened.',
      'Frame-and-content split: give the class a bald one-line demand and require them to wrap it in three different remote frames while changing nothing at all about the item or the date, which makes the split visible in one exercise.'
    ]
  },

  'dist-unreal': {
    name: 'Both halves of an unreal sentence must step back together',
    principle: 'An unreal conditional marks the step out of reality <strong>twice</strong>: a past form in the <em>if</em>-clause and <em>would</em> in the consequent. <em>If the council released the land, prices would fall.</em> Remove the <em>would</em> and the second half claims what the first half has only imagined. The condition is often unstated — <em>that would take three days</em> hides an <em>if we did it</em>. Wishes run on the same fuel: <em>I wish I knew</em> (a state now), <em>I wish they would decide</em> (somebody else\'s behaviour, with impatience), <em>I wish I had asked</em> (past regret).',
    reteach: 'Students meet conditionals as four numbered types to be memorised and so treat the pairing of forms as an arbitrary pattern, which means they cannot repair a sentence they have half-built or recognise an unreal consequent with no if-clause in sight. Re-derive it from remoteness instead: both clauses describe the same imagined world, so both must be marked as leaving the real one, and a mismatch is two halves in two different worlds. That single argument covers the will-in-the-consequent error, the missing-would error and the wrong-tense-in-the-wish error at once. Give particular attention to bare would, because a great deal of real English lives there and students misread it as a future or a politeness marker; train the question what is the unstated condition. It is still broken when a student writes if they invested, prices will fall, or writes I wish I would rather than I wish I could.',
    activities: [
      'Two-worlds annotation: students draw a line down the page, label the columns REAL and IMAGINED, and place each clause of a conditional in a column — a sentence with clauses in both columns is by definition broken.',
      'Hidden-condition hunt: give a page of authentic prose with bare would highlighted throughout, and require students to write out the unstated if for each one, which turns an invisible construction into a visible one.'
    ]
  },

  'dist-unrealposs': {
    name: 'Would asserts the imagined result; might and could only open it',
    principle: 'The consequent of an unreal conditional need not be <em>would</em>. <em>If the council invested, ridership <strong>would</strong> recover</em> claims that recovery follows in the imagined world; <em>…ridership <strong>might</strong> recover</em> says only that it could. Two layers of distance: the scenario is unreal, and within it the outcome is uncertain. <em>Could</em> leans on the <strong>capacity</strong> the change would create, <em>might</em> on the <strong>likelihood</strong> of the outcome. When you argue from an untested scenario, <em>might</em> and <em>could</em> are usually the honest choices.',
    reteach: 'Students taught the four conditional types learn would as the only legal consequent and therefore overclaim every time they argue from a hypothetical, which in IELTS Task 2 is constantly — the essay that says if governments banned cars, air quality would improve dramatically is making a confident assertion about a world nobody has observed. Teach it as a second, independent dial sitting inside the first: choose the world with the if-form, choose the confidence with the consequent modal. Then demand a justification for every would, asking what makes the writer so sure about a scenario that has never happened. The could-versus-might distinction is fine-grained and should be taught as a preference rather than a rule, but it rewards attention at C1 and is a visible marker of control. It is still broken when a student can produce might in a gap-fill but writes nothing but would in free writing, which is the usual outcome if the point was taught as a grammar item rather than as calibration.',
    activities: [
      'Consequent swap: take three hypothetical claims from student essays, rewrite each with would, might and could, and have the class rank them by how much evidence the writer would need to defend each version.',
      'Untested-scenario debate: groups argue a policy from a hypothetical, and a scorer deducts a point for every unjustified would in the consequent, which makes overclaiming audible in real time.'
    ]
  },

  'dist-ifwill': {
    name: 'If already supplies the modality, so a second operator is redundant',
    principle: '<em>Will</em> is a modal, not a tense: its job is to mark a proposition as predicted rather than asserted. But <em>if</em> has already lifted the clause out of the asserted and into the possible, so there is nothing left for <em>will</em> to do. Hence <em>If it <strong>rains</strong> tomorrow, the match will be moved</em>, and the same for <em>when</em>, <em>as soon as</em>, <em>until</em> and <em>before</em>. <s>If it would rain</s> fails for the same reason. <em>Will</em> survives only where it means something else: willingness (<em>If you\'ll just wait here…</em>), a deduction about the present (<em>If that will be all…</em>), or a stressed complaint (<em>If you <u>will</u> keep leaving the door open…</em>).',
    reteach: 'This is normally taught as a prohibition with no reason attached, so it is learned as a superstition, applied inconsistently, and abandoned the moment a student meets one of the genuine exceptions in a reading text. The reason has to come first, and it depends on the Stage 1 idea that will is an operator rather than a tense — without that, the explanation is unavailable and the rule stays arbitrary. Teach the redundancy argument, then teach the three substitution tests as the procedure for the exceptions: try are willing to, try turns out to be the case now, try insist on doing. If one of the three fits, will stays; if none fits, it goes. Do not present the exceptions as a separate list to memorise, because that recreates the original problem one level up. It is still broken when a student writes if the results will arrive on Friday, and equally when an over-corrected student strikes will out of if you will just sign here, which is perfectly good English.',
    activities: [
      'Substitution triage: a worksheet of twenty if-clauses containing will, each to be marked KEEP or CUT, with the successful substitution written out in full beside every KEEP so that the reason is on the page.',
      'Operator audit: students hunt through a news article for if, when, as soon as and until clauses, highlight the verb form in each, and report back on how the future is actually expressed — which shows the rule holding across authentic text rather than in invented sentences.'
    ]
  },
  /* ---------------------------------------- STAGE 06 · Modality in Past Time */
  'past-deduce': {
    name: 'Must have left is a deduction made now, not the past of must',
    principle: 'A modal has no past tense, so English puts the past into the <strong>proposition</strong>: <em>modal + have + past participle</em>. <em>He must have left</em> = I am deducing <strong>now</strong> that the leaving happened <strong>then</strong>. It is not the past of <em>must</em> — that is <em>had to leave</em>, which reports an obligation and says the leaving actually happened. The negative of this deduction is the suppletive <em>can\'t have</em> or <em>couldn\'t have</em>, never <em>mustn\'t have</em>.',
    reteach: 'The misunderstanding is structural rather than lexical: students file must have under past tense, alongside went and had, and then cannot explain why must have left and had to leave are unrelated in meaning. Re-derive it from Stage 1 rather than asserting it — ask for the past of must, let the class fail to produce one, and only then show where the past went. The two-layer diagram is worth drawing every time: box the frame, box the proposition, and put the clock on the proposition box only. Drill the minimal pair must have left against had to leave until students can state, without hesitation, which one asserts that the leaving happened. Watch for the first-language shortcut, which is to leave the modal untouched and mark time with an adverb, producing he must leave yesterday. It is still broken when a student can form must have left on demand but writes he must go to hospital last week in a narrative, or reaches for mustn-t have when they want to rule something out.',
    activities: [
      'Two-box dictation: students rule their page into FRAME and PROPOSITION columns, the teacher reads fifteen modal sentences, and each sentence is split across the two columns before any form is written — the clock then goes on the right-hand box only, which makes the tense placement visible rather than stated.',
      'Evidence walk: pin up eight photographs of aftermath — an unfinished meal, a propped ladder, a half-packed bag — and require one must have or can-t have deduction per picture, spoken aloud with the evidence named first, so the present act of deducing is attached to something the student can see.'
    ]
  },

  'past-weak': {
    name: 'May not have done and can\'t have done are opposite ends of the scale',
    principle: 'The whole Stage 2 ladder slides into past time on the same perfect: <em>may have / might have / could have done</em> says a past event is one of the possibilities left open. The trap is the negative. In <em>may not have done</em> the negative sits <strong>inside the proposition</strong> — possibly it did not happen, and possibly it did. In <em>can\'t have done</em> it sits <strong>on the modal</strong> — the possibility itself is destroyed. They look like a pair and mean opposite things.',
    reteach: 'Students who survived Stage 2 by memorising that can-t is the negative of must will now read may not have and can-t have as interchangeable, which inverts the meaning of any report they are given. The cure is the paraphrase, not the rule: make them expand every negative into it is possible that not or it is not possible that, in writing, before they choose. Use investigative contexts, because that is where the difference has consequences a student can feel — a report saying the pilot may not have received the clearance is doing something very different from one saying he can-t have received it. The second half of the work is calibration: weak forms are the correct register for a finding that the evidence supports but does not prove, and reaching for must have on thin evidence is the overclaim Stage 7 will penalise. It is still broken when a student paraphrases she may not have seen it as she definitely did not see it, or writes must have caused where the data show only that two things moved together.',
    activities: [
      'Scope cards: every student gets two cards reading NOT POSSIBLE THAT and POSSIBLE THAT NOT; the teacher reads negative past-modal sentences and students raise the matching card before anyone speaks, so the scope judgement is made silently and simultaneously rather than by the quickest voice.',
      'Report downgrade: give pairs a paragraph of accident findings written entirely with must have and can-t have, plus the actual evidence in a separate box, and have them rewrite each claim at the strength the evidence supports; the rewrite is marked on whether the downgrade is justified, not on the form.'
    ]
  },

  'past-prog': {
    name: 'Must have been doing judges an event from inside, while it was still running',
    principle: 'The order of the verb phrase never changes: <strong>modal + have + been + -ing</strong>. <em>She must have been working late.</em> The progressive adds a point of view — the activity is seen as still under way at the moment that matters, not as a finished whole. That is why it is the form for explaining a residue (the kettle is warm, the lights were on, the tyre marks run ninety metres) and for anything expressed as a rate: <em>the vehicle must have been travelling too fast</em>.',
    reteach: 'Most errors here are chain errors, not meaning errors, and they come from students memorising must have been working as a four-word chunk rather than reading it off the slot order they already own from Stage 1. Re-derive it on the board, one slot at a time, and make the class build the form from the chain rather than recall it. The meaning contrast then needs its own pass: must have worked packages the evening as a whole, must have been working looks inside it, and the test question is what the evidence is evidence of — a completed act, or a state of affairs that was continuing. Rates and speeds are worth teaching explicitly, because accident and incident reports are full of them and the progressive there is all but obligatory. It is still broken when a student produces must been working or must have working, or when they write the vehicle must have travelled above the limit and cannot say why it reads oddly.',
    activities: [
      'Slot build against the clock: four cards reading MODAL, HAVE, BE and MAIN VERB are laid out face down and turned over one at a time while a student builds a single sentence aloud, adding one slot per card, so the chain is assembled in order instead of retrieved as a chunk.',
      'Residue file: each group receives one photograph of aftermath and must produce two deductions, one with a simple perfect and one with a progressive perfect, then argue which fits the evidence better; the argument is the exercise, and it forces the completed-against-continuing distinction into words.'
    ]
  },

  'past-should': {
    name: 'Should have done means it did not happen, and that was a fault',
    principle: '<em>Should have done</em> and <em>ought to have done</em> do not weigh evidence. They <strong>entail</strong> that the event did not happen and then judge that failure: criticism with <em>you</em> or a third party, regret with <em>I</em> or <em>we</em>. The negative reverses the entailment — <em>shouldn\'t have released</em> says the release <strong>did</strong> happen and was a mistake. <em>Ought</em> keeps its <em>to</em>: <em>ought to have circulated</em>. And watch for the second reading, expectation rather than fault: <em>They should have landed by now.</em>',
    reteach: 'The root difficulty is that students carry Level 1 forward and keep reading these forms as weak deductions, so they take you should have phoned as a guess about whether you phoned. Teach the entailment first and the social force second: establish that the event did not happen, in every example, before discussing who is being blamed. The criticism-against-regret split needs no new grammar at all — it is read off the subject — so make students rewrite blame sentences into regret sentences by changing nothing but the pronoun, which shows them that the machinery is identical. The negative flip deserves a separate slot, because students reliably carry the did-not-happen entailment across to shouldn-t have and get the facts exactly backwards. It is still broken when a student reads we shouldn-t have released the figures as meaning the figures were withheld, when they write ought have, or when they cannot spot that their flight left at six so they should have landed by now is assigning fault to nobody.',
    activities: [
      'Pronoun swap: give ten criticisms with should have and require each to be rewritten as a regret, then as a complaint about a third party, changing only the subject; students then say aloud what the sentence has become socially, which attaches the three acts to one piece of grammar.',
      'Post-mortem round table: each group gets a one-page incident summary and must produce exactly three sentences — one accepting fault, one assigning it, one merely stating an expectation — using should have in all three; the class then identifies which is which from the sentence alone.'
    ]
  },

  'past-could': {
    name: 'Could have done can mean the chance was there and was not taken',
    principle: 'Beside the weak guess of Level 1, <em>could have done</em> has a second job: it names a possibility that genuinely existed in past time and <strong>entails that nothing came of it</strong>. <em>We could have sold the building in 2019</em> — we still own it. <em>Might have done</em> reaches the same place and, stressed, becomes a reproach: <em>You might have told me!</em> The same entailment produces relief when the unrealised outcome was a bad one: <em>That could have ended very badly.</em> Unlike <em>should have</em>, it assigns no fault — it only notes that a road existed.',
    reteach: 'Students meet could have as a weak guess in Level 1 and have nowhere to put this reading, so they either force every could have into the guess slot or flatten it into should have and start assigning blame the writer never intended. Teach the entailment test first: ask whether the sentence commits the speaker to the event having happened, and let the answer separate this from the Level 1 use. The could-have-against-should-have contrast then needs its own pass, because the difference is evaluative rather than factual and both sentences agree about what did not happen. The reproach use of might have depends on stress and must be heard before it is described; read it flat and then stressed and ask what changed. It is still broken when a student reads the council could have widened the footpath as an accusation, when they produce you may have told me as a complaint, or when they cannot explain why that could have ended badly is good news.',
    activities: [
      'Road-not-taken timeline: students draw a horizontal line for a real past decision of their own, mark the branch they did not take, and write one could have sentence per branch; the drawing guarantees that every sentence describes something that did not happen, which is the entailment made physical.',
      'Reproach or guess: the teacher reads twelve sentences with might have, half flat and half with heavy stress on might, and students mark each GUESS or COMPLAINT before seeing the transcript — the sound carries the meaning, so the discrimination has to be trained by ear.'
    ]
  },

  'past-would': {
    name: 'Would have is the unreal consequent, and both halves are false',
    principle: '<em>Would have done</em> is the consequent of an unreal past conditional, and the structure asserts that <strong>neither half happened</strong>: <em>If the alarm had sounded, the staff would have evacuated</em> tells you the alarm did not sound and nobody evacuated. Each clause carries the time of its own proposition, so mixed forms are normal — <em>If the sensor had been replaced last year, the plant would still be running.</em> The condition often arrives as a phrase (<em>without the second pump</em>, <em>a week earlier</em>). <em>Would</em> belongs in the consequent only, and the word is <em>have</em>, never <em>of</em>.',
    reteach: 'The dominant error is would in the if-clause, and it persists because students treat would as a marker of the whole hypothetical sentence rather than of one clause. Attack it structurally: have them label the two clauses CONDITION and RESULT before writing anything, and establish the rule that the condition never contains a modal. The second problem is the assumption that both halves must be past; teach instead that each clause is tensed for its own proposition, which is the same principle the whole stage rests on, and use mixed conditionals early rather than as an advanced extra. Make the double entailment explicit every time by asking what actually happened, since students can build the form correctly and still not know what the sentence claims. Would of should be named as a spelling of the contraction and corrected once, firmly, rather than treated as a grammar error. It is still broken when a student writes if the inspection would have taken place, or reads the basement would have flooded as a report that it flooded.',
    activities: [
      'Fact strip: give ten third-conditional sentences and require two plain past statements beneath each saying what actually happened; marks are only for the two statements, so the entailment is the assessed object rather than the form.',
      'Condition rebuild: hand out sentences whose condition is carried by a phrase — without the second pump, a week earlier, had it not been for the duty officer — and have students expand each into a full if-clause with the past perfect, then compress it back; the round trip makes the hidden condition visible and drills the inverted form at the same time.'
    ]
  },

  'past-needpair': {
    name: 'Needn\'t have done says you did it; didn\'t need to do says you probably didn\'t',
    principle: 'Both remove the obligation; they differ in what they say about the <strong>action</strong>. <em>Needn\'t have waited</em> is a modal over a <strong>perfect infinitive</strong>, and that perfect infinitive asserts a completed event: you waited, and it was unnecessary. <em>Didn\'t need to wait</em> is the lexical verb <em>need</em> negated with <em>do</em>, so it asserts nothing about waiting and normally implies you did not. Test it by trying to cancel: <em>I didn\'t need to pay, but I paid anyway</em> is fine; <s>You needn\'t have waited, so you went straight in</s> is a contradiction.',
    reteach: 'Students are usually given this as a pair of translations to memorise and so cannot extend it, which means they guess whenever the context is unfamiliar. Teach it as a difference in what is asserted: one form puts a real event into the sentence, the other only mentions a requirement. The cancellation test is the part worth drilling, because it is mechanical and portable — if a following clause denying the action produces nonsense, the event was asserted. Give the shorter exam heuristic as well: a comment on effort already spent is needn-t have, an explanation of why something was skipped is didn-t need to. Note that didn-t have to patterns with didn-t need to, and that mustn-t have does not exist in this family at all. It is still broken when a student writes we needn-t have booked, so we walked straight in, or when they read the crew didn-t need to evacuate as a report that an evacuation took place.',
    activities: [
      'Cancellation test drill: students receive twenty sentences and must append but I did anyway or so I did not bother to each, then mark which appendix produced nonsense; the nonsense is the diagnosis, and no rule needs to be recalled to perform it.',
      'Wasted-effort gallery: pairs invent six short scenarios that end in wasted effort (a second form filled in, a journey for a closed office) and six that end in effort avoided, then swap sheets and supply the modal; the scenario decides the form, so the choice is forced by facts rather than by feel.'
    ]
  },

  'past-wasto': {
    name: 'Was to have done builds the failure of the plan into the form',
    principle: 'Three forms describe an arrangement in past time that did not come off. <em>Was to have done</em> takes Stage 3\'s <em>be to</em> of schedules and adds a perfect infinitive, which builds the failure in: <em>The bridge was to have opened in May</em> needs no <em>but</em>. Plain <em>was to do</em> is neutral and leaves the outcome open. <em>Was supposed to do</em> names an expectation imposed from <strong>outside</strong> and implies strongly that it went unmet. <em>Was going to do</em> reports the subject\'s <strong>own</strong> intention, overtaken by events, with no obligation at all.',
    reteach: 'The three forms are usually taught as loose synonyms for a broken plan, which leaves students unable to choose between them and unable to hear what a report is signalling. Separate them on two questions only: whose plan was it, and does the form itself say it failed. Was going to is the subject-s own intention; was supposed to comes from a rota, a contract or an instruction; was to have done is contractual and carries the failure in its grammar. The perfect infinitive needs explaining rather than listing, because it looks like the machinery of Level 1 and is doing something else — the frame is already past, so the perfect marks a proposition whose time is over with the event still missing from it. Contrast was to visit against was to have visited side by side, since that minimal pair carries the whole point. It is still broken when a student writes the bridge was to have opened in May and it opened on time, or uses was going to for a contractual deadline in a post-mortem.',
    activities: [
      'Whose plan was it: students receive twenty short scenarios and sort them by the source of the expectation — the subject, an external authority, or a contract — before any form is written; the sorting decides the modal, so the three forms are never in competition.',
      'Delay report rebuild: give groups a bare timeline of a project that overran and require a four-sentence summary using a different member of the family in each sentence; the constraint forces them to distinguish the three rather than defaulting to was supposed to throughout.'
    ]
  },

  'past-ambig': {
    name: 'Could have done has three readings, and only the neighbouring clause decides',
    principle: '<em>Could have done</em> is three sentences in one form. <strong>A chance not taken:</strong> <em>I could have applied, but I decided to work</em> — it did not happen. <strong>A weak guess:</strong> <em>She could have missed the connection</em> — still open. <strong>An unreal result:</strong> <em>With one more pump, the cellar could have been saved</em> — it did not happen. Read the clause beside it: a contrast with <em>but</em> gives the first, evidence language gives the second, a condition (<em>if</em>, <em>with</em>, <em>without</em>, <em>had the warning gone out</em>) gives the third.',
    reteach: 'Students who have met all three readings separately still cannot resolve them under pressure, because they have been taught the meanings and not the cues. Teach the cues as a checklist that is run before any interpretation is offered: look left and right of the modal for a contrast, a condition or a piece of evidence language, and only then decide. Insist that the justification is spoken aloud, because a correct verdict reached by feel will not survive an unfamiliar sentence. The productive second half is the writing side — students should learn that the ambiguity is theirs to remove, using may have for a guess, had the opportunity to but did not for a missed chance, and would have with the condition spelled out for an unreal result. This is also the natural place to retire could of, which is simply the contraction spelled as it sounds. It is still broken when a student can sort prepared examples but cannot name the cue that decided each one, or when they leave a bare could have in a report where the reader cannot tell a possibility from an omission.',
    activities: [
      'Cue hunt: students highlight, in three colours, every contrast word, condition marker and evidence phrase in a page of report prose before touching the modals; the modals are then read off the highlighting, which trains the checklist rather than the verdict.',
      'Disambiguation clinic: each pair is given five bare could have sentences and a reading assigned in secret, and must rewrite so that the other pair can identify the intended reading with no context at all; the rewrite is scored only on whether the guess was right.'
    ]
  },
  /* ---------------------------------------- STAGE 07 · Hedging and Stance */
  'hedge-why': {
    name: 'A hedge is a report on the evidence, not a sign of weakness',
    principle: 'A modal tells the reader <strong>how much</strong> you are asserting. Without one, a claim is universal — true in every case — and a single counterexample destroys it. With one, it is existential, true in at least some cases, and it survives. <em>This suggests that smaller classes may raise attainment</em> is not a timid version of <em>this proves…</em>; it is a different and much more defensible claim, and the descriptors reward the difference.',
    reteach: 'The underlying misunderstanding is that hedging is politeness, so students treat it as optional decoration that can be added at the end if there is time. Re-frame it as arithmetic: an unhedged claim covers every case, and the reader is entitled to hunt for the one that breaks it. Run the hunt in class — put a flat claim on the board and offer a prize for the first counterexample, then hedge the claim and try again, so the class sees the sentence become unbreakable in front of them. The Thai-language habit behind this is that academic register there is achieved lexically rather than through auxiliaries, so nothing in the L1 tells a student that a missing modal changes the size of the promise. It is still broken when a student can define hedging correctly but writes a body paragraph in which every topic sentence begins with a universal.',
    activities: [
      'Counterexample Hunt: one student reads an unhedged claim aloud and the rest have thirty seconds to produce a case that falsifies it; the writer must then re-pitch the claim so the same counterexample no longer touches it, and the round is only won when nobody can break the new version.',
      'Evidence Cards: give each pair a finding on a card stating exactly the sample and the design (one city, 400 people, one year) and four candidate sentences reporting it, and require them to rank all four from strongest to weakest before choosing, so the ladder is used rather than guessed.'
    ]
  },

  'hedge-over': {
    name: 'The overclaim: three shapes to hunt for in your own draft',
    principle: 'An overclaim arrives in one of three shapes. <strong>The verb</strong>: <em>proves, demonstrates, shows conclusively</em> — findings <em>suggest</em> or <em>indicate</em>. <strong>The quantifier</strong>: <em>everyone, all, always, never</em> — one exception is enough. <strong>The modal</strong>: <em>will</em> and epistemic <em>must</em> at full strength. The repair is not deletion but one rung down: <em>proves → suggests</em>, <em>will → is likely to</em>, <em>everyone → the majority</em>. Definitions and your own thesis need no hedge at all.',
    reteach: 'Students overclaim because maximum force feels like confidence and because a bold sentence is easier to write than a calibrated one; they read hedging as an admission that their idea is weak. The most efficient correction is a hunt rather than a rule, since the three shapes are all visible on the page: have students mark every reporting verb, every quantifier and every will in their own draft before they look at anything else. Insist on downgrading rather than deleting, because students who are told a claim is too strong tend to remove it altogether and lose the argument. Distinguish the correlation-to-cause slide explicitly, since that is the one most examiners notice: a study that measures two things together has not shown which produced which. It is still broken when a student hedges the body paragraphs correctly but writes a thesis and a conclusion full of everyone and always, or when they hedge a definition.',
    activities: [
      'Draft Audit in three passes: pass one circles every reporting verb, pass two every quantifier, pass three every will and must, and only then does the student decide which of the circled items the paragraph actually pays for — the separation of passes is what stops them skimming.',
      'Correlation Court: present a finding that two things moved together, then put the causal claim on trial with one student prosecuting the cause, one proposing a reverse cause and one proposing a third factor; the class then writes the verdict as a single correctly-hedged sentence.'
    ]
  },

  'hedge-under': {
    name: 'Hedges do not stack, and hedging a settled fact is its own error',
    principle: 'Every hedge sets the same variable — how far you commit — and a variable cannot be set twice. <em>May</em> already means <em>possibly</em>, so <s>it may possibly perhaps be arguable that</s> turns one dial four times and moves nothing. The one legal combination is a modal plus an adverb that <strong>moves</strong> it: <em>may well</em>, <em>would almost certainly</em>, <em>might conceivably</em>. Test each extra word: if it repeats, cut it; if it shifts, keep it. And do not hedge a figure, a definition or a fact nobody disputes.',
    reteach: 'The pile-up is almost always an over-correction: it appears in the week after hedging is taught, because the student has learned that hedges earn marks and concludes that more hedges earn more marks. Teach the dial image explicitly and make them count devices per proposition, with a hard ceiling of two and only when the second moves the first. The underclaim half of this is harder to see and needs a separate prompt, because a student will not spontaneously ask whether a sentence is too weak; make them mark every claim the paragraph has already proved and check that none of those carries a modal. Watch for the cosmetic variant where a student varies the wording of the hedges to disguise the repetition, which produces may, it could be argued and to some extent in a single sentence. It is still broken when a student can find a pile-up in someone else\'s paragraph but produces one in their own timed writing, which is normal until the counting routine becomes automatic.',
    activities: [
      'Hedge Budget: rewrite a padded paragraph under a strict allowance of one hedging device per sentence, spending the budget wherever it buys the most, and then compare two students\' spending choices — the discussion about where to spend is the lesson.',
      'Repeat or Move: flash modal-plus-adverb pairs and have the class hold up one of two cards, MOVE for may well and might conceivably, REPEAT for may possibly and might perhaps, so the test becomes a reflex rather than a rule they recall.'
    ]
  },

  'hedge-adverb': {
    name: 'The adverb after the modal is what makes the scale fine enough to use',
    principle: 'Modals are coarse: <em>may</em>, <em>might</em> and <em>could</em> all land in the same weak middle. An adverb <strong>after</strong> the modal refines it. Up: <em>may well</em>, <em>could well</em>, <em>would almost certainly</em>. Down: <em>might conceivably</em>, <em>could just possibly</em>. Contestable: <em>could arguably</em>. For low probability use <em>is unlikely to</em>, never <em>may not</em> — <em>may not happen</em> means it is possible it will not, while <em>is unlikely to happen</em> means it probably will not, and only the second is gradable (<em>highly unlikely</em>).',
    reteach: 'Two separate problems live under this tag. The first is that students own only three or four modals and so cannot express any degree between may and will; give them the upgraders as fixed pairs rather than as adverbs to be selected, because may well is retrieved as one unit by competent writers. The second is the may not confusion, which is the Stage 2 scope asymmetry surfacing again in a writing task: may not negates the proposition while is unlikely to lowers the probability, and students who have not separated those will write may not where they mean probably not and accidentally leave the door wide open. Drill the word order early, since almost would certainly is a common and very visible transfer error. It is still broken when a student produces may well in a gap-fill but writes a whole essay in which every possibility is just may, or when unlikely appears without its are and its to.',
    activities: [
      'Probability Line: chalk a line from 0 to 100 on the floor, read out modal-plus-adverb phrases and have students stand where each one belongs, arguing about the gaps — the arguments about whether may well outranks would probably are where the fine distinctions get made.',
      'Evidence-to-Phrase matching: hand out eight evidence cards graded from one unreplicated pilot up to three converging national studies, and require the matching phrase for each, so the adverb is chosen by the weight of the evidence rather than by taste.'
    ]
  },

  'hedge-imperson': {
    name: 'A frame shifts the source of a claim, and does not lower confidence',
    principle: '<em>It may be argued that</em>, <em>it is widely held that</em>, <em>it would appear that</em>, <em>this would suggest that</em>. The frame demotes the claim to a complement clause, so the main clause carries the modality: <em>it may be argued that fees improve quality</em> asserts that the argument exists and says nothing about fees. That makes it the natural way to state a view you intend to answer. The <em>would</em> in <em>it would appear</em> is distance, not future time — remove it and the sentence asserts.',
    reteach: 'Students meet these frames on a phrase list and deploy them as ornament, which is why the commonest failure is not grammatical but empty: it is widely held that something must be done frames a proposition nobody could dispute. Teach the frame as a move in an argument rather than as a phrase, and insist that every framed claim be followed within two sentences either by who holds it or by the writer\'s answer to it. The second failure is grammatical and predictable from the L1: would appears, may argues, be argued that dropped in favour of an active. Re-derive the bare infinitive from Stage 1 rather than correcting it as a spelling slip. It is still broken when a student writes three frames in one paragraph, or when the frame is used for the writer\'s own position, which reads as a writer hiding from an argument they are actually making.',
    activities: [
      'Attribution Challenge: every framed claim on the board must be completed with a named holder — a government, a body of research, the opposing side of the prompt — and any frame that nobody can attribute is deleted, which removes the empty ones fast.',
      'Turn Drill: give students an opposing view as a flat assertion and require the two-sentence turn, frame then counter, against a clock; collect the pairs and read out the ones where the counter forgot to arrive.'
    ]
  },

  'hedge-approx': {
    name: 'Approximators limit how wide a claim is, not how sure you are',
    principle: 'A modal hedge grades <strong>confidence</strong>; an approximator grades <strong>scope</strong>. <em>Graduates tend to earn more</em> asserts the pattern and admits only that some graduates do not, which is a stronger position than <em>graduates may earn more</em>. The family: verbs (<em>tend to, appear to, seem to</em>), quantity phrases (<em>in most cases, the majority of, on the whole</em>), degree words (<em>largely, broadly, to some extent</em>). One modal plus one approximator is legal; two from the same branch is not, and never blur a figure you have already given.',
    reteach: 'The misunderstanding is that all hedges are the same kind of thing, so students reach for may when what they need is tend to and end up conceding that the pattern itself might not exist. Separate the two variables on the board as two columns, HOW SURE and HOW WIDE, and make every hedge a student uses go into one column before it goes into a sentence. This tag is the direct antidote to the descriptor phrase a tendency to over-generalise, so it is worth telling students that explicitly — a generalisation with an approximator is not an over-generalisation. Watch for the blurring error, where a student who has just given an exact figure follows it with a certain amount or to some degree and throws away the precision they had. It is still broken when a student sorts tend to into the confidence column, or when in most cases and on the whole appear in the same sentence.',
    activities: [
      'Two-Column Sort against a timer: phrases are called out and students write each into HOW SURE or HOW WIDE; tend to and appear to are deliberately included as the hard cases and are discussed at the end rather than scored.',
      'Exception Test: students write a general claim, exchange papers, and the partner must supply a real counterexample; the original writer then repairs the sentence using an approximator only, which forbids the easy retreat into may.'
    ]
  },

  'hedge-concede': {
    name: 'The concessive modal: grant the point on loan, then counter harder',
    principle: 'Four parts: subordinator (<em>while, although, granted that</em>), the conceded claim <strong>calibrated</strong> (<em>may well displace routine roles</em>), the pivot, and your counter with its own calibration (<em>is unlikely to eliminate the need for human judgement</em>). An unhedged concession gives the point away; a hedged one lends it. The governing rule is the balance: <strong>the counter must be at least as strong as the concession</strong>. If the best counter you have is <em>might possibly</em>, concede less — narrow the scope, or drop <em>may well</em> to <em>may</em>.',
    reteach: 'Students avoid conceding at all, because they have been taught that an essay must argue one side and they read any concession as self-contradiction; the result is a response that never engages the other view and is capped on Task Response. Show the alternative failure first so they see why the modal matters: read them a concession written flat and ask the class which side the writer is on. Then build the sentence in its four parts on the board, and keep building it for a week until the shape is automatic, because this is the single highest-value sentence pattern in the whole course. The balance rule needs its own drill: students who learn the construction will initially concede at may well and counter at might, which loses the paragraph. It is still broken when the concession and counter are both hedged to silence, or when while is followed by a fragment rather than a finite clause.',
    activities: [
      'Four-Slot Build: give the concession and the counter as separate cards and have pairs assemble the sentence physically, then swap the modal cards to see the balance tip — the visible tipping is what teaches the rule.',
      'Weigh the Halves: read concessive sentences aloud and have students hold up LEFT or RIGHT to show which half the sentence leaves standing; any sentence where the class points left is rewritten by its author until they point right.'
    ]
  },

  'hedge-boost': {
    name: 'A booster has to be paid for by something the reader can see',
    principle: '<em>Clearly</em>, <em>undoubtedly</em>, <em>certainly</em> and epistemic <em>must</em> mark a claim as sitting <strong>above</strong> the ordinary assertion, and in doing so they point at your evidence. Three things earn one: <strong>arithmetic</strong> from figures already given, <strong>definition</strong>, and <strong>entailment</strong> from something the essay has established. All three concern the step rather than the world, which is why <em>the effect must therefore be small</em> is safer than <em>the effect is undoubtedly small</em>. One booster per paragraph; <s>clearly and undoubtedly</s> is a pile-up in the other direction.',
    reteach: 'Two opposite students need this tag. The first boosts everything, having never hedged at all, and for them clearly and obviously are simply emphasis words with no evidential meaning. The second has learned to hedge and now hedges uniformly, which flattens the essay and costs marks on Task Response because no position emerges. Teach the pointing test for both: every booster must point backwards at something on the page, and if the reader turns round and finds nothing, the word is bluff. Distinguish epistemic must from deontic must carefully here, since governments must act is an obligation and not a boost, and students conflate them constantly. It is still broken when a student writes obviously in front of a contested policy claim, or when a paragraph ends on may where the evidence it has just laid out would support must.',
    activities: [
      'Point Backwards: students underline each booster in a model paragraph and draw an arrow to the sentence that pays for it; boosters with no arrow are struck out, and the class counts how many survive.',
      'Earn It: give a paragraph of evidence with the final inference removed and ask for the closing sentence at the strongest force the evidence will carry, then compare submissions — the disagreement about whether must is available is the teaching point.'
    ]
  },

  'hedge-revise': {
    name: 'Audit a paragraph claim by claim, and let the force vary across it',
    principle: 'Underline every claim, then ask of each one: <strong>what in this paragraph makes that true?</strong> Too little support, downgrade (<em>proves → suggests</em>, <em>will → is likely to</em>, <em>everyone → most</em>). More support than you admitted, upgrade or cut the hedge — never hedge a figure you have just given. Force belongs to the paragraph, not the sentence: the topic sentence usually carries the boldest claim, the development is where the qualifications live, and the closing inference is where a booster is most often earned.',
    reteach: 'The root problem is that calibration is treated as something done while writing, when under timed conditions it can only be done in revision; students therefore never do it. Install it as a two-minute routine with a fixed procedure, because a vague instruction to check your hedging produces nothing. Uniform hedging is the failure to watch for once the routine takes hold: a paragraph in which every claim sits at may is as unreadable as one in which every claim sits at will, and students who have just learned to hedge produce the first of those reliably. Make them read a flat-hedged paragraph aloud and ask which sentence the writer cares about; the fact that nobody can tell is the argument for variation. It is still broken when a student edits for grammar and vocabulary in the last five minutes and never looks at force at all, which is the default unless the routine has been rehearsed against a clock.',
    activities: [
      'Two-Minute Audit against a timer, on a paragraph the student wrote a week earlier so that they no longer remember what they meant: underline claims, mark each U for up, D for down or K for keep, and only then rewrite.',
      'Force Profile: students mark each sentence of a model paragraph on a five-point scale from hedged to boosted and plot the shape, then plot one of their own; a flat line on either profile is the diagnosis, and the repair is to identify which sentence deserved to be highest.'
    ]
  },
  /* ---------------------------------------- STAGE 08 · The Whole System */
  'sys-ambig': {
    name: 'The same modal does two different jobs, and the word never says which',
    principle: 'A necessity modal says every remaining possibility is one in which the proposition holds; a possibility modal says at least one is. What changes between <strong>epistemic</strong> and <strong>deontic</strong> is only <em>which</em> possibilities — those my evidence leaves open, or those the rules leave open. So <em>He must be in the library</em> is a deduction or an order, and nothing inside the sentence decides. A free check: the negatives are already separated. A deduction is denied with <em>can\'t</em>, an obligation with <em>mustn\'t</em>.',
    reteach: 'Students who have worked through Stage 2 and Stage 3 usually file must twice, once under certainty and once under obligation, and then treat every new sentence as belonging to whichever list they revised most recently. The cure is not more examples but the single logical point: the modal quantifies over a set of possibilities and does not name the set. Put one sentence on the board and have the class produce two full paraphrases for it, I am sure that and it is required that, before any discussion of which is right; the habit of producing both is what you are installing. Then hand them the negative test, because it is mechanical and it costs nothing. It is still broken when a student tells you a sentence is deontic without being able to say what the epistemic reading would have meant, or when they deny a deduction with mustn-t, which shows the two systems are still one undifferentiated list.',
    activities: [
      'Double Paraphrase: every sentence handed out must be rewritten twice, once beginning I am fairly sure that and once beginning The rule is that, and only then may a pair argue for one; marks are awarded for the two paraphrases, never for the verdict.',
      'Negative Flip relay: the teacher reads an ambiguous modal sentence and a student must immediately produce its negative, then say which domain that negative revealed — can-t for deduction, mustn-t for prohibition — which turns an abstract distinction into a two-second reflex.'
    ]
  },

  'sys-clues': {
    name: 'Rules need someone who can obey them; deductions need nobody',
    principle: 'A deontic modal imposes something on the subject; an epistemic one imposes nothing on anyone. Every clue follows. A <strong>stative verb, a perfect or a progressive</strong> points epistemic (<em>must know</em>, <em>must have left</em>, <em>must be waiting</em>) because none of those is an open choice. An <strong>inanimate or non-agentive subject</strong> blocks deontic (<em>The shipment must be delayed</em>). A <strong>future deadline plus a controllable action</strong> points deontic (<em>must be there by four</em>). An <strong>agentive subject with a controllable action and nothing else</strong> leaves both open.',
    reteach: 'The failure mode is guessing, and a guesser gets perhaps seven in ten right forever, which is exactly the band ceiling these students are trying to break through. Teach it as a four-question procedure performed in order, written down, until it is automatic: is the event closed, can the subject act, is there a deadline, and if none of those, is the context a rule book or a conversation. The most productive single demonstration is a minimal pair that changes one clue only — the committee must meet before Friday against the committee must have met in secret — because it shows that the verb and the subject are untouched and only the aspect moved. Watch for the over-generalisation that the passive is always epistemic; it is agency that matters, which is why the form must be signed by the applicant is plainly a rule. It is still broken when a student can label six prepared sentences correctly but cannot say which word in any of them did the work.',
    activities: [
      'Clue Highlighter: students receive a paragraph of regulations mixed with a paragraph of inference and must underline, in different colours, every stative verb, every perfect or progressive, every non-agentive subject and every deadline, then read the domain straight off the colours.',
      'One-Word Switch: give a sentence that is open between the two readings and require each pair to force it epistemic by changing exactly one word, then force it deontic by changing exactly one word; the constraint makes them locate the clue rather than rewrite the sentence.'
    ]
  },

  'sys-disambig': {
    name: 'Fix the ambiguity where the reader has to act, and nowhere else',
    principle: 'Ask what the reader will <em>do</em> with the sentence. In a blog post or a news report, context resolves an ambiguous modal and the bare form is better English. In instructions, regulations, contracts, protocols and criteria, one unresolved <em>must</em> is a real cost. To fix it towards the rule, use a form that lives only in that domain: <em>is required to</em>, <em>is to</em>, <em>must not</em>, or <em>shall</em> in legal drafting. To fix it towards the deduction: <em>is presumably</em>, <em>appears to</em>, <em>is almost certainly</em>.',
    reteach: 'Two opposite errors appear, and a class will usually contain both. The first is under-correction, where a student writes rules and protocols in bare modals because the ambiguity is invisible to them; the second is over-correction, where a student who has just met is required to sprays it through a narrative and produces prose like a tax form. Teach the genre question first and the repair list second, in that order, or you will get the second error. A useful demonstration is to take one ambiguous sentence and place it in four contexts — a text message, a news paragraph, a ward protocol and a lease — and ask in which of the four the ambiguity would cost anybody anything. Be firm that presumably and is required to belong to different domains and cannot be combined; presumably required is not a stronger requirement but a weaker claim about one. It is still broken when a student rewrites every modal in a passage, or when their safety notice still opens with a bare should.',
    activities: [
      'Genre Sort before repair: a single ambiguous sentence is issued on four cards labelled text message, news report, ward protocol and tenancy agreement, and groups must decide which cards need a repair at all before anyone is allowed to write one.',
      'Repair Kit drill: students are given ten sentences and a two-column kit — deontic forms on the left, epistemic forms on the right — and must rewrite each sentence twice, once from each column, which makes the single-domain nature of every form in the kit impossible to miss.'
    ]
  },

  'sys-chain': {
    name: 'Each auxiliary fixes the form of the next, so the chain has one order',
    principle: 'The order is <strong>MODAL, <em>have</em>, <em>be</em> (progressive), <em>be</em> (passive), main verb</strong>: <em>might have been being examined</em>. It cannot be rearranged, because each element selects the form of the one after it — a modal selects a bare infinitive, <em>have</em> a past participle, progressive <em>be</em> an <em>-ing</em> form, passive <em>be</em> a past participle. Read a long chain from the right: the event, who undergoes it, whether it is mid-course, whether it is anterior, and finally the frame.',
    reteach: 'Students meet must be signed, should have been reported and may be waiting as three unrelated structures to memorise, and then have nothing to do when a fourth arrives. Re-derive the chain rather than listing it: write the five slots on the board and build one string aloud, asking at each step what form the previous word demands, so that been and being are produced rather than recalled. The reading direction is the other half of the lesson and is usually skipped — insist that they start at the last word and work back, because that is what makes a five-slot phrase parseable rather than frightening. The diagnostic errors are must being counted, which omits the bare be the modal selects, and should have be archived, which puts an infinitive where a participle belongs; both show that selection has not been understood as a chain of demands. It is still broken when a student can complete a gapped chain but cannot say what any one of the auxiliaries contributes to the meaning.',
    activities: [
      'Slot Cards: five physical cards reading MODAL, HAVE, BE-ing, BE-passive and VERB are laid out, and a pair must build a phrase by dealing only the cards the sentence needs, saying aloud what form each card forces on the next before writing anything.',
      'Read It Backwards: students are handed six long modal phrases from technical and legal prose and must gloss each from the right-hand end in four steps — what happened, to whom, finished or not, how sure — which converts a memorised shape into a procedure.'
    ]
  },

  'sys-report': {
    name: 'Only forms that are not already remote can take the step back',
    principle: 'After a past reporting verb, four modals move: <em>must</em> → <em>had to</em>, <em>will</em> → <em>would</em>, <em>can</em> → <em>could</em>, <em>may</em> → <em>might</em>. Six do not: <em>would, could, might, should, ought to, had better</em> — they already carry the remote morphology, and English has only one step of it. Epistemic <em>must</em> also stays, because <em>had to</em> would report a duty: <em>She said he must be lying</em>. Backshift is optional when the content is still true.',
    reteach: 'Two things go wrong. The first is mechanical: students hunt for a past of could or ought and invent one, because they have been taught backshift as a table to apply rather than as one step of distance that some forms have already taken. Teach it from Stage 5 — the past morphology is remoteness, and you cannot be remote twice — and the six non-shifters stop being a list. The second is semantic and is the more expensive: deontic must becomes had to and epistemic must does not, so a student who backshifts blindly converts every deduction in a news report into an obligation. Make them paraphrase the original before they report it, I am sure or has to, and let the paraphrase choose the form. Add that the past reference in a deduction is already inside the proposition, which is why must have had needs no further change. It is still broken when a student writes the officer said the intruder had to have had a key, or hunts for a backshifted form of had better.',
    activities: [
      'Two Musts dictation: the teacher reads twelve quotations containing must, half deductions and half obligations, and students must write the report and then justify the form in three words — sure, so it stays; required, so had to.',
      'Nowhere To Go: students are given the ten core modals on cards and must physically move each one to a second card showing its backshifted form; the six that have no card to move to are left standing, which makes the one-step limit visible rather than memorised.'
    ]
  },

  'sys-invert': {
    name: 'Three verbs can replace if by inverting, and the negative cannot contract',
    principle: 'Only <em>were</em>, <em>had</em> and <em>should</em> can drop <em>if</em> and move in front of the subject: <em>Should you require further assistance…</em>, <em>Were the scheme to fail…</em>, <em>Had the council acted sooner…</em> Nothing else inverts, and <em>Did the council act sooner</em> can only be a question. The register is formal, because the construction is archaic and because it is compressed. The negative <strong>never contracts</strong>: <em>Had the council not acted</em>, never <s>Hadn\'t the council acted</s>.',
    reteach: 'This is usually taught as three sentences to memorise for a formal letter, which means students produce them correctly in a drill and then invert something else a week later. Ground it in Stage 1 instead: these are the verbs that invert without do-support, and the construction is simply that inversion doing a conditional job, which is why did cannot join in. The contraction rule needs to be stated as a rule and then heard, because hadn-t the council acted sounds fine to a learner and is instantly a question to a native reader. Watch too for pattern-mixing — were the ministry decide, should the ministry to decide — which shows the three patterns have been blurred into one shape with a variable slot at the front. Finally, teach the register consequence in both directions, since a student who has just learned it will put should you require into a message to a classmate. It is still broken when a student writes if were the scheme to fail, keeping both markers at once.',
    activities: [
      'De-if drill against the clock: students receive twenty if-clauses, only twelve of which can be inverted, and must invert those and mark the rest impossible; the eight impossible ones are where the learning is, so they are marked first.',
      'Register Swap: a formal letter and a text message to a friend are issued containing the same four conditions, and pairs must move each condition into the other document and report what now sounds wrong, which attaches the construction to a genre rather than to a rule.'
    ]
  },

  'sys-will': {
    name: 'Will predicts; the future is only its commonest reading',
    principle: '<em>Will</em> is a modal, not a tense: it takes the modal slot, takes a bare infinitive, takes no <em>-s</em> and will not stack (<s>will can</s> → <em>will be able to</em>). It expresses <strong>prediction</strong>, and futurity is one reading of four. <em>That\'ll be the courier</em> is a present deduction; <em>Oil will float on water</em> is generic; <em>She will keep interrupting</em> is characteristic behaviour, and stressed, a complaint. This is also why <s>if it will rain</s> fails: <em>if</em> already supplies the modality.',
    reteach: 'Almost every student arrives with will glossed as the future tense, usually from a coursebook chapter called The Future, and the gloss makes three of its four readings invisible. Attack the grammar first, because it is decisive and not a matter of interpretation: ask for the third-person form, the infinitive, and a combination with can, and let the class discover that will behaves exactly like must. Then run the four readings with the when test — if the question when has no answer, the sentence is not about the future — which handles generic and deduction uses in one move. The if-clause prohibition should be presented last and as a consequence, never as a separate rule, and the two genuine survivals need naming or students will over-correct: if you will sign here is willingness, and if it will help is a prediction about a result. It is still broken when a student reads under load the cables will sag as a forecast, or corrects if you will wait here to if you wait here in a polite request.',
    activities: [
      'The When Test: students mark every will in a page of technical or scientific prose and write beside each one either a time or a dash; the dashes are the non-future readings, and the class then names which of the three each one is.',
      'Stress pairs read aloud: the teacher reads he will leave his boots in the hallway flat and then with heavy stress on will, and students hold up REPORT or COMPLAINT, so the characteristic-behaviour reading is attached to a sound before it is attached to a label.'
    ]
  },

  'sys-periphery': {
    name: 'The edge of the class: shall, need, dare and ought are half in',
    principle: '<em>Shall</em> survives in contracts (<em>The contractor shall maintain insurance</em>) and in first-person offers (<em>Shall I open a window?</em>). <em>Need</em> and <em>dare</em> are modal only in <strong>non-assertive</strong> clauses — negatives, questions, and with <em>hardly</em> or <em>if</em>: <em>Need I say more?</em>, <em>He daren\'t ask</em>, <em>I need hardly remind you</em>. Elsewhere they are lexical and take <em>do</em>, <em>-s</em> and <em>to</em>. Never mix the patterns. <em>Ought to</em> keeps its <em>to</em>, and its negative and question forms are correct but stiff.',
    reteach: 'These four are where a tidy class turns messy, and students who have been taught modals as a closed list of nine with uniform behaviour find them destabilising. Frame the messiness as the point: the class is shrinking, and these are the members on the way out, which is why their behaviour is split and register-bound. For need and dare the productive teaching is the non-assertive environment rather than a list of sentences — show that need not, Need I and need hardly all sit in negatives or questions, and that there is no ordinary affirmative modal need at all. Insist that the two patterns are never blended, because needs not and doesn-t need wait are the two errors that will actually appear. For shall, separate the contractual use from the offer use firmly, since they share nothing but a spelling, and note that first-person future shall has effectively gone. It is still broken when a student writes ought the tribunal consider without the to, or produces I need not to worry.',
    activities: [
      'Two Verbs, One Spelling: students receive twelve sentences with need or dare and must tag each MODAL or LEXICAL using three tests — is there an s, is there a do, is there a to — and then state which non-assertive word licensed the modal ones.',
      'Register Casebook: a contract clause, a committee minute and a text message are issued and pairs must place shall, must and have to into each, then justify the placement; the exercise shows that the contractual shall and the Shall we of the meeting are unrelated uses.'
    ]
  },

  'sys-track': {
    name: 'Follow the commitment, and notice whose commitment it is',
    principle: 'A writer resets their commitment sentence by sentence. Track four things: <strong>the modal and its rung</strong> on the scale, <strong>whose modality it is</strong> (<em>ministers say the scheme will…</em> attributes confidence, it does not share it), <strong>hedges and boosters</strong>, and <strong>the bare assertion with no modal</strong>, which is the strongest move available. Reporting verbs matter as much as modals: <em>claim</em>, <em>insist</em> and <em>maintain</em> distance, while <em>show</em>, <em>find</em> and <em>establish</em> endorse.',
    reteach: 'The dominant error is attributing reported confidence to the writer, and it is invisible to the student because they are reading for content rather than for stance. Break it with a two-column routine performed on a real paragraph: every claim goes in a column headed WRITER or SOURCE before anything else is discussed, and the reporting verb is what decides. The second error is reading a concession as a retreat, so teach the shape explicitly — may well, but — and have them locate the writer position in the second half every time. The third is missing the unmodalised sentence, which students skim precisely because it has no interesting grammar in it; make them mark those sentences first, since in an argued text the bare assertion is usually the thesis. It is still broken when a student summarises a hedged literature review as though the reviewer agreed with everyone quoted, or when they cannot say which sentence in a paragraph the writer would actually defend.',
    activities: [
      'Two Columns, WRITER and SOURCE: students take an argued news or research paragraph and assign every claim to one column, with the reporting verb written beside each SOURCE entry, before any comprehension question is asked.',
      'Commitment Graph: a four-paragraph passage is plotted as a line from bare possibility to flat assertion, one point per sentence; groups compare graphs and must defend any point they placed differently, which forces the modal and the reporting verb to be named out loud.'
    ]
  },
};

/* Stage files push onto this. Order of the <script> tags sets the order. */
var TOPICS = [];

/* The three tests push onto this. test-1.js is the triage: it MUST load
   first, because the engine treats MOCKS[0] as the diagnostic paper. */
var MOCKS = [];
