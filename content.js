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
    principle: 'Ordinary verbs borrow <em>do</em> to form questions and negatives because they have no operator of their own. A modal already is one, so it does all of this by itself: it takes <em>not</em> directly (<em>mustn\'t</em>), moves in front of the subject for a question (<em>Would you…?</em>), stands alone in a short answer (<em>Yes, I would</em>) and carries stress. Never put <em>do</em> with a modal.',
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
    principle: 'Modals are <strong>defective</strong>: each has one form only, with no infinitive, no participle and no <em>-ing</em> form. So in a slot that needs one of those — after another modal, after <em>to</em>, after <em>have</em>, after a preposition such as <em>without</em> — no modal can stand at all. English fills the gap with an ordinary verb phrase that means the same thing, because an ordinary verb has every form. Look at the word in front of the gap first, and ask what shape it needs.',
    reteach: 'Students usually meet have to and be able to as synonyms of must and can and therefore treat the choice between them as a matter of taste, which leaves them producing will must and have could whenever the slot changes. Reframe the whole thing as a paradigm with holes in it: draw the full form table for an ordinary verb, then draw the modal table and leave the empty cells visibly blank. Once the holes are on the board, the semi-modals stop being vocabulary and become a repair kit. Always ask what is the word in front of the gap before asking which word means the right thing. It is still broken when the student can correct \'will must\' in an exercise but writes it in their own essay, or when they repair the phrase but leave the tense on the wrong word. It is fixed when the student reaches for have to automatically in a non-finite slot without first thinking about meaning at all.',
    activities: [
      'Put the modal paradigm on the board with the empty cells shaded, then feed students slots (after will, after to, after has, after without) and have them fill each shaded cell with the correct periphrastic form.',
      'Give a short text written entirely with must and can, then require students to rewrite it in the future, in the perfect and after I hope, so that every impossible slot forces a repair and the pattern is discovered rather than told.'
    ]
  },
  'frame-semi': {
    name: 'Conjugate the repair like the ordinary verb it is',
    principle: '<em>Have to</em> and <em>be able to</em> are ordinary verb phrases, so they change exactly as <em>have</em> and <em>be</em> change on their own. Only that first word — <em>have</em> or <em>be</em> — takes the tense, the agreement and whatever shape the word in front of the gap demands. <em>Able</em> never changes, and the verb after the last <em>to</em> is always bare.',
    reteach: 'Because the phrase is three or four words long, students treat the to as the start of a new clause and try to inflect the verb after it, or they inflect nothing at all and produce has able to. The underlying issue is that they have memorised the phrase as a unit rather than seeing that only its first word is alive. Take the phrase apart on the board and mark the one element that ever changes, then run it through six different slots so the same frozen tail appears every time. It is still broken when the student writes \'was able to finished\', or gets have to right but be able to wrong, since be is the harder of the two. It is fixed when they can produce will have had to and to have been able to on demand and say which word is carrying the tense.',
    activities: [
      'Give a conjugation ladder with one row per slot (present, past, perfect, future, after to, after without) and have students fill both have to and be able to down the same ladder, then underline the single word that changed in each row.',
      'Dictate ten sentences containing errors of the \'has able to\' and \'was able to finished\' kind, and require students to say aloud which word should have carried the tense before they write the correction.'
    ]
  },
  'frame-boundary': {
    name: 'Test the behaviour, not the meaning: need, dare, have to',
    principle: 'Some words sit on the edge of the modal class, and you decide by testing their behaviour, not their meaning. If the word takes <em>not</em> directly, moves in front of the subject by itself and is followed by a bare verb, it is behaving as a modal in that sentence. If it takes <em>do</em>, an <em>-s</em> or a <em>to</em>-infinitive, it is an ordinary verb — and each pattern must be complete, never half of one and half of the other. <em>Have to</em> fails every test, which is exactly why it can go where <em>must</em> cannot.',
    reteach: 'Students who classify words by meaning assume that anything expressing obligation must behave like must, which produces \'don\'t must\' and \'have we to\'. The correction is to move the criterion from meaning to behaviour, and the NICE tests give them a procedure they can actually run on a sentence. The two need patterns are worth isolating explicitly, because the classic error is a blend of them: \'don\'t need bring\' and \'needn\'t to bring\' each take one half of one pattern and one half of the other. Stress that both full patterns are correct, so this is not a matter of one being better. It is still broken when the student mixes the two need patterns under time pressure, or hesitates over forming a question with have to. It is fixed when they can take any unfamiliar verb and decide its class by running the tests, without consulting its meaning.',
    activities: [
      'Give students a mixed set of sentences and a four-column NICE grid, and have them tick which tests each word passes, then assign it to a class on the evidence of the ticks alone.',
      'Set up a sentence-transformation relay in which each team must produce the question, the negative and the short answer for need, dare and have to, and score the two need patterns separately so that blending them loses both marks.'
    ]
  },
  /* ---------------------------------------- STAGE 02 · The Ladder of Certainty */
  'epi-scale': {
    name: 'Choose the rung, not the word: certainty runs on one scale',
    principle: 'A modal such as <em>must</em> or <em>might</em> does not change the event; it shows how much of your evidence points at it. The rungs run <em>must</em> · <em>will</em> · <em>should</em> / <em>ought to</em> · <em>may</em> / <em>might</em> / <em>could</em>, with <em>can\'t</em> right at the bottom. Decide how sure your evidence lets you be, then read the word off the scale — and remember that a sentence with no modal at all (<em>the heating is off</em>) is stronger than <em>the heating must be off</em>, because the modal admits you are working it out.',
    reteach: 'The underlying misunderstanding is that students meet modals as a vocabulary list with translations, so each one is learned as an independent word rather than as a position on a single scale. Put one proposition on the board and keep it fixed - "the building is closed" - and change only the modal in front of it, asking each time what has changed about the building (nothing) and what has changed about the speaker (everything). Then build the ladder vertically on the board and leave it there for the rest of the stage, adding the negative column beside it in Level 2. It is still broken when a student can define each modal correctly but cannot say which of two sentences commits its speaker further, or when they treat "can\'t" as a weak word because it contains a negative rather than as the confident claim it is.',
    activities: [
      'Give six sentences about one situation, each with a different modal, and have pairs physically order the cards from most to least committed, then defend any disagreement by naming the evidence each speaker would need.',
      'Hand out a short news paragraph with every modal deleted and a confidence figure written in the margin for each gap (95%, 75%, 40%), and have students supply a modal that matches the figure, then compare with the original.'
    ]
  },

  'epi-weak': {
    name: 'The weak middle is one rung: may, might and could are near-synonyms',
    principle: 'When you are guessing, <em>may</em>, <em>might</em> and <em>could</em> all say the same thing: this is one of the possibilities your evidence leaves open. The small differences you may have been taught matter far less than the gap between these three and <em>must</em>, <em>should</em> or <em>can\'t</em>. <em>May</em> is the usual choice in formal writing; <em>might</em> and <em>could</em> are commoner in speech. The modal already does the hedging, so do not add a second hedging word to it.',
    reteach: 'Students spend a great deal of effort on a distinction that carries almost no information, and none on the distinction that carries all of it. Show three versions of one sentence and ask the class to say what has changed - they will search for a difference and fail to find one, which is the lesson. Then swap in "must" and watch how quickly they spot the change. The register point is worth a minute: "may" for the report, "might" and "could" for the conversation, and "might" as a deliberate choice where "may" could be misread as permission. It is still broken when a student produces hedge pile-ups in writing, or when they believe they have softened a claim by moving from "may" to "might" while leaving a genuine overclaim untouched elsewhere in the paragraph.',
    activities: [
      'Read a paragraph aloud three times, substituting may, might and could at each occurrence, and ask the class to raise a hand the moment the meaning changes; when no hand goes up, replace one with "must" and repeat.',
      'Give students a paragraph disfigured by double hedges (could maybe, might possibly perhaps) and have them delete every word that adds no information, then count how many words a single modal was doing the work of.'
    ]
  },

  'epi-must': {
    name: 'Two jobs for must: look at the subject before you decide',
    principle: '<em>Must</em> can report a conclusion (<em>the café must be closed today</em>) or a rule (<em>drivers must show a permit</em>). Four clues point to a conclusion: a subject that cannot obey anything, a state after the modal (<em>be</em>, <em>know</em>, <em>belong</em>), a phrase that names the evidence, and <em>be</em> + <em>-ing</em>. <em>Will</em> can do the same job and is not only about the future: <em>she\'ll be at the pool — it\'s Monday</em> is a confident guess about the present.',
    reteach: 'Learners usually meet obligation "must" first and for a year or two it is the only reading they have, so a deductive "must" is read as a strange order. The fastest repair is a subject test rather than a meaning test: ask whether the subject is capable of obeying an instruction, because a printer, a queue and a set of figures are not. Follow it with the evidence test - is the sentence telling you how the speaker knows? The "will" case needs separate attention, since the future-tense label blocks the deduction reading entirely; use a doorbell and a familiar delivery time. It is still broken when a student writes "somebody must work late" for evidence about this evening, or reads "that will be the post" as a promise or a timetable.',
    activities: [
      'Project ten sentences with "must" and have students sort them by subject alone - human who can comply, or thing that cannot - before anyone is allowed to say what the sentence means, then check how well the sort predicted the reading.',
      'Stage a two-minute deduction game: one student describes only evidence (a smell, a noise, an empty chair) and the rest must respond with a modal sentence whose rung matches how good the evidence was, with the class challenging any overclaim.'
    ]
  },

  'epi-cant': {
    name: 'The negative of deductive must is can\'t, never mustn\'t',
    principle: '<em>Somchai must be at the gym</em> becomes <em>Somchai <strong>can\'t</strong> be at the gym</em>. The two halves of one meaning are built from different words, because <em>mustn\'t</em> is already taken by rules: <em>Somchai mustn\'t be at the gym</em> can only mean he is not allowed to be there. Learn the pair together — <em>must be</em> ↔ <em>can\'t be</em> — and use the full form <em>cannot</em> in formal writing.',
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
    principle: 'The chain is <strong>modal → be → -ing</strong>: <em>she must be working in the lab</em>, <em>they could be waiting at the wrong gate</em>, <em>he can\'t be sleeping</em>. The modal gives the certainty and the <em>-ing</em> form gives the "now" — and it also stops the sentence sounding like a rule, because nobody can be ordered to be halfway through something. Verbs for states stay simple: <em>that bag must belong to Nok</em>, never <em>must be belonging</em>.',
    reteach: 'Two separate faults hide under this tag. The first is omission: students write "somebody must work late" about evidence they are looking at now, and the sentence lands in the obligation half of the system without their noticing. The second is over-extension: once the progressive is available they apply it to states, producing "must be knowing" and "must be understanding", which is reinforced by the fact that many languages, including Thai, mark ongoing states in ways English does not. Teach the two faults in that order, and use evidence prompts in the present - a light on, a noise, a smell - so the progressive has something to be true of. It is still broken when a student can build the form on demand but reverts to the bare infinitive in free writing, or when "be knowing" survives in speech.',
    activities: [
      'Play a sounds-behind-the-door round: students hear or are described a noise and must produce a full modal-plus-progressive deduction, with the class voting on whether the rung matches the evidence.',
      'Give a mixed list of activity and state verbs and have students try to build "must be ___ing" with each, keeping the ones that work and writing the correct simple deduction for the ones that do not.'
    ]
  },

  'epi-expect': {
    name: 'Should as expectation: what the pattern predicts, not what you advise',
    principle: '<em>The flight should land at six</em> is not advice — it is a prediction from a schedule, a trend or a specification, firm enough to act on and modest enough to be wrong. The clues are a subject that cannot take advice (a flight, a machine, a price), a time phrase such as <em>by Monday</em>, and <em>be</em> after the modal. <em>Ought to</em> is the same rung. Climbing to <em>must</em> claims more than a pattern alone can give you.',
    reteach: 'Students meet advice "should" first and keep it, so a timetable "should" is read as the speaker telling a train what to do. The subject test fixes it quickly: ask whether the subject could decide to comply. Then make the strength explicit - "should" builds in the admission that the expectation may not be met, which is exactly why it is the modal of forecasts, delivery promises and battery specifications, and why replacing it with "must" is the overclaim examiners penalise in Task 2. Pair it with the Level 2 grid so that "shouldn\'t" is read as an expectation that something is not so, rather than as a weak prohibition. It is still broken when a student reads "the results should be online by Friday" as an instruction to the portal, or writes "must" for any projection they feel confident about.',
    activities: [
      'Sort twelve "should" and "ought to" sentences into advice and expectation by subject alone, then rewrite each advice sentence as an expectation about the same situation and vice versa.',
      'Give three pieces of evidence of different quality - a published timetable, a three-year trend, a colleague\'s guess - and have students write the same prediction three times, choosing the rung each piece of evidence actually earns.'
    ]
  },

  'epi-read': {
    name: 'Read the modals to see how far the writer will go',
    principle: 'In a report the finding is in the nouns and verbs; the writer\'s confidence in it is in the modals. A conclusion is not knowledge — <em>the bridge must have flooded</em> tells you the speaker worked it out and did not see it happen. A sentence with no modal at all is the strongest claim a writer can make, so watch for a paragraph that starts with <em>may</em> and ends with <em>must</em>.',
    reteach: 'The misunderstanding is that modals are decoration, so students skim past them and extract only the content words - which is why they routinely report a hedged finding as though the author had asserted it, and then quote it that way in an essay. Teach reading in two passes: once for what the paragraph says, once with every modal circled and placed on the ladder. Ask each time what evidence the text has offered for that rung, and whether the rung moves between the first sentence and the last. The entailment point deserves an explicit minute of its own, because "must" feels to learners like the strongest word in the sentence when it is in fact an admission. It is still broken when a student paraphrases "walking may improve concentration" as "the study proved that walking improves concentration", which is the exact move the press makes and examiners mark down.',
    activities: [
      'Give a research abstract and a newspaper write-up of the same finding, and have students underline every modal in each and mark where the newspaper has moved a claim up the ladder.',
      'Run a true/false/can\'t-tell set built only on entailment - given a sentence with "must", ask whether the speaker saw it, whether they are certain, and whether it is true - and make the class justify each answer from the modal alone.'
    ]
  },
  /* ---------------------------------------- STAGE 03 · obligation, permission, prohibition */
  'deo-source': {
    name: 'Whose rule is it — yours, or somebody else\'s?',
    principle: '<em>Must</em> and <em>have to</em> are equally strong; what differs is whose rule it is. The true modal — no <em>to</em>, no past tense — speaks with the authority of whoever is speaking or writing. The form that works like an ordinary verb passes on a requirement that somebody else set. Ask who would be annoyed if it were not done.',
    reteach: 'Students meet must and have to as synonyms with a coin-toss between them, and so they choose by sound. The fix is to stop treating it as a choice of strength and make it a question about the source of authority, which is a question they can actually answer about any sentence. Drill it on real texts: notices, tenancy agreements, parental messages, school emails, and ask each time who wrote this and whether they invented the rule. It is still broken when a student writes a self-directed obligation with have to (I have to stop eating sugar, said by someone nobody has instructed) or reports an external rule with must while passing it on to a peer. Warn them too that in many slots there is no choice at all, because must has no past, no infinitive and no participle, so the source question only applies where both forms are grammatically available. Thai learners additionally produce must to, which is the two constructions blended; treat that as evidence that the two have not been separated rather than as a spelling slip.',
    activities: [
      'Source hunt: hand out a real page of school or university regulations and a parent group-chat transcript, and have students highlight every obligation and write beside it the name of whoever made that rule — the mismatches with the modal chosen are the lesson.',
      'Rewrite relay: give ten obligations in must and require each to be reissued as a report by someone passing it on, so that must becomes have to and a source has to be invented and named aloud.'
    ]
  },

  'deo-periph': {
    name: 'Must has no past — that job belongs to had to',
    principle: '<em>Must</em> has only one form. It cannot be made past, and it cannot follow <em>will</em>, <em>to</em> or <em>have</em>. In every one of those places English uses <em>have to</em> instead, because it changes its form like an ordinary verb. Be careful: <em>must have</em> + past participle is a guess about the past, not a past duty.',
    reteach: 'The underlying misunderstanding is that must is a verb like any other and can therefore be tensed. Teach the defectiveness as the cause and the periphrasis as the repair, so that the forms are derived rather than memorised: ask where must cannot go, and let the class discover that have to appears exactly there. In class, build a four-column grid — past, present, future, perfect — and have students fill it for must and for have to, leaving the impossible cells visibly empty. It is still broken when a student writes will must, must to, or a past narrative in which must sits next to a past adverbial, which is a documented Thai L1 pattern: past marked by an adverbial rather than by a form. A second, subtler failure is reaching for must have done as the past of must have to, which silently swaps obligation for deduction and will resurface in Stage 6.',
    activities: [
      'Empty-cell grid: students complete a tense grid for must and have to and must physically cross out the impossible cells, then narrate a past school week using only forms that survive.',
      'Backshift chain: one student issues an order in direct speech, the next reports it after a past verb, and the class checks that must has become had to every time.'
    ]
  },

  'deo-advice': {
    name: 'Should, had better and be supposed to are not three ways of saying the same thing',
    principle: '<em>Should</em> and <em>ought to</em> give advice that the listener is free to ignore. Advice can be stronger than that, with an unspoken <em>or else</em> attached — and the form that does this is about now or very soon, not the past, whatever it looks like. With <em>be supposed to</em>, ask two questions: who set this expectation, and is it really being met?',
    reteach: 'Students file had better with should because it contains a past form and looks mild, and they file be supposed to as a neutral synonym of have to. Both mislocations flatten a useful three-way distinction. Teach had better by insisting on the unspoken second half: every had better sentence must be followed aloud by or-what, and if the class cannot supply a consequence the form is wrong. Teach be supposed to by asking, after every example, whether the rule is actually being followed, and let students hear how regularly the answer is no. It is still broken when had better appears in an essay addressed to governments or planners, when it is used for a standing rule rather than one occasion, when a student produces had better for past advice instead of should have, or when be supposed to is used to state a rule the speaker is loyally observing.',
    activities: [
      'Or-what drill: read had better sentences and require the class to complete each with the threatened consequence; sentences that admit no consequence get rewritten with should.',
      'Rule-versus-practice sort: give pairs a list of school rules and ask them to tag each as one we follow or one we are supposed to follow, then write the be supposed to sentence only for the second group.'
    ]
  },

  'deo-negcliff': {
    name: 'Mustn\'t and don\'t have to are opposites, not a pair',
    principle: 'A <em>not</em> can land in two places. If it lands on the action, the sentence forbids: there is a rule <strong>not</strong> to do it. If it lands on the obligation, the sentence releases you: there is <strong>no</strong> rule, so the choice is yours. Test your answer by adding <em>but you can if you like</em> — it only makes sense after a release.',
    reteach: 'In the affirmative, must and have to are near-synonyms, so learners build a false paradigm in which mustn\'t is simply the negative of both. Thai offers no cue that anything is wrong, so the error is invisible to the student and survives for years. Teach scope explicitly and visually: write the sentence twice, once with the not bracketed around the action and once around the obligation, and make students point at which bracket they mean before choosing a word. Then give them the but-you-can-if-you-like test as a portable check they can apply under exam conditions. It is still broken when a student writes mustn\'t in a sentence that goes on to permit the act — unless, if you prefer, optional — or reads a notice saying you do not have to attend as a ban. Because the error inverts rather than blurs the meaning, treat any instance as urgent, and in the student\'s own writing insist on a redundant paraphrase where the stakes are real: attendance is optional; you are not required to come.',
    activities: [
      'Two-bracket board work: the same sentence is written twice with the not bracketed in different positions, and students must say what each version instructs before either modal is allowed on the board.',
      'Consequences game: each student receives a rule card written with mustn\'t or don\'t have to and must act out what they would do; the class judges from the behaviour whether the card was a ban or a release.'
    ]
  },

  'deo-noneed': {
    name: 'Needn\'t removes the rule; it never creates one',
    principle: '<em>Need</em> can be a modal or an ordinary verb. As a modal it takes <em>not</em> directly, with no <em>do</em>, no <em>to</em> and no <em>-s</em>; as an ordinary verb it uses <em>do</em>, <em>to</em> and a past <em>-ed</em>, like any other verb. In both patterns a negative <em>need</em> removes an obligation — it never forbids anything. Never mix the two patterns in one clause.',
    reteach: 'Two problems live here. The first is scope: students who have mislearned mustn\'t often mislearn needn\'t the same way and read it as a prohibition, when in fact it is the cleanest possible paraphrase of don\'t have to. Use that as a diagnostic — if substituting needn\'t preserves a student\'s intended meaning, their mustn\'t was wrong. The second is form: need sits on the boundary between the modal and lexical classes, and blends such as don\'t needn\'t to appear when students have not noticed that it can be either. Show the NICE signature on needn\'t and the ordinary do-support on don\'t need to side by side and make the class label which verb class each belongs to. It is still broken when a student produces the blend, when they use affirmative modal need outside a fixed phrase, or when they reach for needn\'t have as the ordinary past, which means something quite different and belongs to Stage 6.',
    activities: [
      'Class-membership labelling: students mark each of twelve need sentences M for modal or L for lexical and justify the call by naming the evidence — the missing to, the do, the third-person s.',
      'Substitution diagnostic: students rewrite every mustn\'t sentence in their own recent work with needn\'t and keep the ones where the meaning survives, which are precisely the sentences that were wrong.'
    ]
  },

  'deo-prohibit': {
    name: 'All of these forbid — the question is who is speaking',
    principle: 'Every form in this family puts the negative on the action, so all of them forbid; what changes is the voice. Match the wording to who is speaking: a person on the spot, a teacher or parent laying down their own rule, a printed notice or exam paper, an official instruction, or a legal document. A form that is right for one of these voices sounds wrong in another.',
    reteach: 'Thai learners are documented as using can for permission, ability, possibility and request with no register grading at all, and the prohibition side inherits the same flatness: can\'t does every job. The result is not ungrammatical, which is why it goes uncorrected, but it reads as a writer with no control of voice, and it costs in any task that asks for rules or a process description. Teach it as a ladder with a named speaker on each rung, and have students identify the speaker before choosing. Note also that spoken can\'t is ambiguous between not allowed and not able, and that formal registers prefer may not partly to close that gap. It is still broken when a student writes shall not in a message to a friend, can\'t in a contract or a rubric, or mixes two rungs inside one notice.',
    activities: [
      'Ladder card sort: five prohibition sentences on cards are ranked from most spoken to most legal, then matched to five settings — a corridor, a classroom notice, an exam paper, a works order, a lease.',
      'Register transposition: students take one prohibition and write it five times, once for each rung, then read all five aloud so the class can hear which speaker each version conjures.'
    ]
  },

  'deo-permit': {
    name: 'Permission is not obligation, and it needs a repair to take a tense',
    principle: '<em>Can</em> and <em>may</em> both give permission and say the same thing; <em>may</em> is simply more formal. Neither has a past or a future form, so when permission needs a tense, English switches to <em>be allowed to</em> or <em>be permitted to</em> and changes the <em>be</em>. Giving permission is not giving an order: being allowed to do something never means you have to.',
    reteach: 'Two misreadings recur. The first treats may as stronger permission than can, when the difference is social rather than logical; correct it by showing that the rule permits exactly the same thing in both versions and only the imagined speaker changes. The second, and the more expensive at work and in reading comprehension, reads a granted permission as an instruction — a student who is told they may submit early believes they must. Build the habit of asking, after every permission sentence, what happens if I do not, and let the class hear that the answer is nothing. On form, the familiar stacking error will can appear as soon as permission has to reach into future time, so teach will be allowed to alongside will be able to and make students distinguish a rule from a capacity. It is still broken when could is used as a plain past permission for a single occasion, which is a distance form and belongs to Stage 5.',
    activities: [
      'What-if-I-do-not audit: students annotate a page of permissions from a real handbook with the consequence of declining, and discover that permissions carry none while requirements do.',
      'Tense-stretch drill: a single permission sentence is pushed into past, future and perfect time, forcing the class to abandon can and may and choose between be allowed to and be able to each time.'
    ]
  },

  'deo-shall': {
    name: 'In a contract, shall means must',
    principle: 'In everyday speech <em>shall</em> survives only in first-person offers and suggestions: <em>Shall I …?</em>, <em>Shall we …?</em> In contracts and regulations, with a third-person subject, it does a different job — ask what would happen if that party did not do it. <em>Be to</em> passes on an instruction from someone in authority.',
    reteach: 'Most students have been taught shall as a future auxiliary or as an old-fashioned will, so a contract clause reads to them as a forecast of what someone is likely to do rather than a statement of what they are bound to do. That misreading matters for comprehension long before it matters for production. Teach the fingerprint: third-person institutional subject plus shall plus bare infinitive equals duty; first person plus shall in a question equals offer. Then teach be to as the instruction form, including its impersonal passive, because that is the register of rule and process description that IELTS Task 1 rewards. It is still broken when a student reads a contractual shall as future time, when shall to appears through blending with be obliged to, or when contractual shall leaks into an essay or a message to a friend and makes it sound like a lease.',
    activities: [
      'Duty-or-offer triage: twenty shall sentences drawn from a lease, an exam rubric and a transcript of casual speech are sorted by subject and sentence type before anyone is allowed to translate them.',
      'Diagram-to-rules rewrite: students convert a labelled process diagram into six regulations using be to and must throughout, then check that no sentence has slipped into the future tense.'
    ]
  },

  'deo-register': {
    name: 'Pick the right cell, then hold one register',
    principle: 'Writing a rule means two decisions. First, what kind of rule is it — required, forbidden, allowed or only recommended? Get that wrong and readers will do the opposite, or treat a rule as advice. Then choose one voice — conversation, notice, official instruction or contract — and keep it for the whole document.',
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
    principle: 'A modal has no infinitive, no participle and no <em>-ing</em> form, and cannot follow another modal. So four slots force <em>be able to</em>: after a modal (<em>might be able to</em>), after <em>have</em> (<em>had been able to</em>), after <em>to</em> (<em>wants to be able to</em>), and as an <em>-ing</em> form (<em>without being able to</em>). Only <em>be</em> changes; <em>able to</em> never does, and the <em>to</em> is never optional.',
    reteach: 'This is Stage 1 defectiveness applied to can, and students who never grasped the operator idea will experience it as four arbitrary phrases to memorise. Re-derive it rather than restating it: write will, have, to and -ing on the board, ask for the corresponding form of can, and let the class discover that there is none. Then build the paradigm of be able to out of the paradigm of be, which they already own, so that the eight forms cost them nothing new. The diagnostic errors to watch for are will can and has could, which show the operator idea has not landed, and are able help, which shows the phrase has been memorised as a chunk with the to sanded off. It is still broken when a student produces to be able to correctly in a drill but writes she hopes to can attend in free writing a fortnight later.',
    activities: [
      'Slot Roulette: four cards reading WILL, HAVE, TO and -ING are drawn at random and the student must produce the same ability sentence in whichever frame comes up, against a clock, so the form is retrieved by slot rather than by translation.',
      'Give students a paragraph in which every ability is expressed with be able to and ask them to replace with can wherever the grammar permits it; the ones that cannot be replaced are exactly the four forced slots, and the exercise teaches both rules at once.'
    ]
  },

  'dyn-general': {
    name: 'Accidents can happen is about frequency, not about skill',
    principle: '<em>Can</em> has a third reading beside ability and permission: <strong>general possibility</strong>. <em>Accidents can happen</em> and <em>Winters in the north can be severe</em> say that things of this kind happen from time to time. Test it by putting <em>sometimes</em> and the present simple in place of <em>can</em>. If the meaning survives, it is general possibility; if it does not, it is a capacity.',
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
    principle: 'The rule blocks <em>could</em> only where the sentence must assert that something was brought off on one occasion. Perception and cognition verbs — <em>see, hear, smell, feel, understand, remember</em> — describe a state and assert no achievement, so <em>I could understand most of the lecture</em> is fine. The negative is free too, because a failure is not an achievement. The restriction bites in the affirmative only.',
    reteach: 'The risk here is that students memorise two exceptions and then cannot extend them, so insist on the derivation: both escapes follow from the same reason, that nothing is being claimed to have come off. Make them state the reason aloud for each example rather than naming the category. The one-sidedness of the rule is genuinely surprising and needs explicit attention, because students who have learned could is blocked will over-apply it and start writing she wasn-t able to win where couldn-t was perfectly good. Then teach the border case, where finally or at last or on the third attempt forces an achievement reading even onto a perception verb, so that spot becomes managed to spot. It is still broken when a student can sort the exceptions correctly but cannot say why, which means the list has been memorised and will not survive an unfamiliar verb.',
    activities: [
      'Give six sentences with could, three exempt and three blocked, and require a one-clause justification beside each — stative verb, negative, or one occasion that came off; marks are for the justification only, never for the verdict.',
      'Adverb ambush: students are given a correct could sentence with a perception verb and must then insert finally or after an hour and repair the verb, so they feel the achievement reading switch on and the form change with it.'
    ]
  },

  'dyn-will': {
    name: 'Won\'t is a refusal, and doors refuse too',
    principle: '<em>Will</em> is a modal, not a future tense, and with a present subject it often reports <strong>willingness</strong>: <em>I\'ll carry that for you</em>. Its negative is therefore an <strong>active refusal</strong>, not a bare prediction: it accuses, where the present continuous (<em>He isn\'t answering</em>) merely reports. Objects can refuse in the same way, when a lock, a lid or an engine fails to cooperate.',
    reteach: 'Students who have been told that will equals the future read won-t as a neutral prediction and lose the accusation entirely, which in a narrative or a complaint letter is a loss of meaning rather than of style. Teach the minimal pair first: he isn-t answering against he won-t answer, and ask which one you would say to his manager. Then extend to inanimate subjects, where the commonest error is the calque the engine does not want to start, which every teacher of Thai-speaking learners will meet; name it as a translation and replace it once, firmly, with will not start. Note that the affirmative of this reading is rare with objects, so the teaching weight belongs on the negative. It is still broken when a student writes the printer does not want to print, or reads she won-t tell me as a prediction about the future rather than a report of a refusal happening now.',
    activities: [
      'Complaint clinic: pairs are given five neutral present-continuous statements about an unhelpful colleague or a failing appliance and must rewrite each as a complaint using won-t, then say aloud what the rewritten version adds — the accusation has to be named, not just produced.',
      'Broken-object round: a bag of pictures of jammed, stuck and dead objects is passed round and each student must describe theirs in one sentence with won-t; anyone who reaches for does not want to loses the card to the next player.'
    ]
  },

  'dyn-would': {
    name: 'Wouldn\'t is declined; couldn\'t is unable',
    principle: '<em>Would</em> is the genuine past of willingness <em>will</em>, so its negative reports a past <strong>refusal</strong>: the subject declined. Keep it apart from the negative of <em>could</em>, which says the subject was unable. Objects can refuse in past time too, and this <em>would</em> is not the conditional one: there is no <em>if</em>, and the events really happened.',
    reteach: 'Two confusions collide here. The first is wouldn-t against couldn-t, which students flatten into a single not able, losing the fact that one sentence is about intention and the other about capacity. Drill it with pairs where the context disambiguates — he had the key in his hand — so the choice is forced by evidence rather than by feel. The second is wouldn-t against the conditional would of Stage 5, and the cure is a structural clue rather than a semantic one: a refusal would sits in a plain past narrative with no if-clause and no hypothetical anywhere. Give them the habit of scanning for a condition before they decide. It is still broken when a student reads the witness wouldn-t give her address as she was unable to remember it, or hedges a plain past narrative into an unreal reading because would triggered the conditional reflex.',
    activities: [
      'Two-column dictation: the teacher reads fifteen short past sentences and students write each under DECLINED or WAS UNABLE, then supply the missing modal; the contexts are built so that one clause always rules out the other reading.',
      'Condition hunt: students mark every would in a page of narrative prose and circle the nearest if-clause, if there is one; the ones with nothing to circle are the willingness and habitual uses, which separates Stage 4 from Stage 5 mechanically.'
    ]
  },

  'dyn-habit': {
    name: 'Will and would for what someone is like, and the stressed complaint',
    principle: '<em>Will</em> with a habitual or generic sentence reports <strong>characteristic behaviour</strong>: <em>Oil will float on water</em>, <em>She\'ll sit in the same seat every week</em>. <em>Would</em> does the same in past time — interchangeable with <em>used to</em> for repeated actions, but <strong>not</strong> for past states (<s>he would know everyone in the street</s>). Stress the modal and a neutral report of a habit becomes a complaint about it.',
    reteach: 'Students treat will as tense and so cannot see a present-time or timeless reading at all, which makes generic will invisible in exactly the scientific and descriptive prose they will be reading at C1. Establish first that these sentences have no future reference by asking when it happens and letting the class discover that the question has no answer. For past habitual would, the productive teaching point is the boundary with used to: repeated actions take either, states take only used to, and the quickest classroom test is whether you can picture it happening again. The irritation reading depends on prosody, so it must be heard, not described; read the same sentence twice, stressed and unstressed, and ask what changed. It is still broken when a student writes he would own a bookshop, or reads on Sundays he would walk as a hypothetical.',
    activities: [
      'Memoir paragraph: students write six sentences about a relative using would, then swap and strike out every one whose verb is a state; the struck sentences are rewritten with used to, which teaches the boundary by correction rather than by rule.',
      'Stress pairs read aloud: the teacher reads he will leave his boots in the hallway flat and then with heavy stress on will, and students hold up a card marked REPORT or COMPLAINT, so the irritation reading is attached to a sound before it is attached to a grammar label.'
    ]
  },
  /* ---------------------------------------- STAGE 05 · Distance */
  'dist-core': {
    name: 'Could, might, would and should are not past tenses',
    principle: 'The old past ending on <em>could, might, would</em> and <em>should</em> usually marks <strong>remoteness</strong> — one step back from here and now — not past time. The step can be in <em>time</em> (a past-time phrase or clause sits nearby), in <em>likelihood</em> (a guess, or something imagined), or in <em>social space</em> (a question that asks the listener for something). The word never tells you which; the sentence around it does.',
    reteach: 'The misunderstanding is installed by the textbook itself, which glosses could as the past of can and then presents politeness and tentativeness as separate unrelated uses to be memorised. Students end up with three unconnected entries for one word and no way to choose between them under pressure. Re-teach it as one idea with three destinations: write the three axes on the board as three arrows leaving a single point marked HERE AND NOW, and put every example the class meets onto one of the arrows. The pay-off is that the unreal past, the wish construction and the whole politeness dial stop being new material later, which is the argument to make to students who think they already know could. It is still broken when a student produces the right form in a drill but cannot say which distance it is marking, and above all when they write something like could you send it yesterday, which fuses two axes that cannot combine.',
    activities: [
      'Three-arrow board: one remote modal is written in the centre and pairs race to supply a sentence on each of the three arrows using the same modal, so the single-form-three-readings fact is discovered rather than announced.',
      'Frame-stripping drill: give ten sentences with their context clauses intact, have students classify them, then delete the context clauses and re-read — the class sees the same sentences flip to the likelihood default, which proves the reading was never in the modal.'
    ]
  },

  'dist-tentative': {
    name: 'The remote form lowers the strength of a claim, not its content',
    principle: 'A remote modal in front of a claim leaves the claim itself unchanged; what drops is how firmly the speaker stands behind it. Each remote form sits a notch below its partner — <em>could</em> below <em>can</em>, <em>might</em> below <em>may</em>, <em>would</em> below <em>will</em> — so match the strength to the evidence and use one hedge, not three. <em>I would say</em>, <em>I would think</em> and <em>I\'d have thought</em> soften the <strong>act of saying</strong>, not the thing said.',
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
    principle: 'A request costs the listener something, and grammatical distance is how English pays for it. The dial runs from a bare order, through <em>Can you…?</em> and <em>Could you…?</em>, up to longer frames that only ask whether the listener objects, or whether it might be possible at all; choose the rung by the <strong>size of the favour</strong> and <strong>how well you know the person</strong>, because too far up the dial with a friend sounds sarcastic. <em>Mind</em> is an ordinary verb, so it takes an <em>-ing</em> form, never <em>to</em> — and since it asks about an objection, you agree by saying you have none.',
    reteach: 'Thai-speaking learners typically leave the dial at can for every request, because Thai does this work with sentence-final particles and pronoun choice rather than with verb morphology, and nothing in the first language suggests that the verb should change at all. The result is not ungrammatical, which is exactly why it is rarely corrected and why it persists to C1. Teach the dial as a physical scale and always give the two variables together, because a rung is only right relative to a person and a favour. Drill in both directions: the class must produce the over-remote version as well and say aloud why it fails, since students who are told only that more distance is more polite will slide into the anxious register that reads as sarcasm with an intimate. Keep saying that every rung is perfect English and that the error is social, or students will start hunting for a grammar rule that is not there. It is still broken when a student writes can you to a head of department, and equally when they write I was wondering whether you might possibly to a classmate about a pencil.',
    activities: [
      'Two-dice register game: one die gives the favour (borrow a pen, borrow a car, read a draft) and the other the person (best friend, new colleague, principal); students must produce the rung and defend it, so the two variables are never separated.',
      'Mind-answer trap drill: the teacher fires would-you-mind questions at the class and students must respond with a full spoken answer while performing the action, until the No, not at all reflex overrides the yes-means-agreement instinct.'
    ]
  },

  'dist-offer': {
    name: 'Offers, suggestions and the authority you do not have',
    principle: 'First ask <strong>who ends up doing the work</strong>. In an <strong>offer</strong> the speaker does it, so the frame is a question about yourself that puts your own time on the table — not a question about what you are obliged or allowed to do. In a <strong>suggestion</strong> the listener does it, so a remote modal softens it and leaves the choice with them; keep <em>should</em>, <em>must</em> and <em>had better</em> for when you really hold authority or are giving a real warning.',
    reteach: 'The underlying misunderstanding is that politeness is one dial rather than three acts that each carry a different cost, so students reach for a request frame when offering help and an authority frame when advising a peer. The second of those is the damaging one: should and must arrive early in the syllabus, feel safe, and are then sprayed over peer feedback and discursive essays, where they read as a student issuing instructions to people who have not asked. Teach the three acts by asking one question of every sentence — who ends up doing the work, and who is paying for it. Give Shall I explicit attention, because students avoid shall as archaic after meeting it in legal English and then have no neutral offer at all. It is still broken when a student answers an offer of help with a request frame, or writes the government must reduce emissions in a Task 2 essay where the argument has not earned that force.',
    activities: [
      'Who-does-the-work sort: a stack of mixed sentences is dealt out and each must be placed under OFFER or SUGGESTION within three seconds, with the justification spoken as who acts, so the test becomes automatic.',
      'Peer-feedback rewrite: students exchange essay drafts, write three comments using only authority forms, then rewrite the same three with remote suggestion frames and compare how the two versions feel to receive.'
    ]
  },

  'dist-soften': {
    name: 'In writing, the grammar has to carry what the voice would have carried',
    principle: 'Email has no tone of voice and no chance to repair a bad moment, so the politeness has to be built into the grammar — an extra clause, a remote modal, or both, placed around the request. When an <em>if</em>-clause has stepped back into a past form, the main clause must step back with it. Be <strong>remote about the asking</strong> but <strong>exact about the thing asked</strong> — name the item and the date — and remember that distance reduces an imposition: it is the wrong tool for a rule you have the authority to set.',
    reteach: 'Students transfer the directness of a chat message into professional email, or they over-correct and produce a message so thoroughly hedged that no request can be extracted from it, and the second failure is harder to see because it looks like good manners. Teach the split explicitly, since it is the one rule that resolves both: distance belongs on the frame, precision belongs on the content. The most useful single item to install is I was wondering whether, because it is the most remote frame in ordinary use and its mechanism is transparent once you point out that the past progressive pushes the act of asking into the background. Mark student emails for actionability first and politeness second, so that a beautiful unanswerable message scores badly. It is still broken when a student writes a four-line softening preamble and then never states the deadline, or when the asking is exact and the frame is a bare imperative sent to somebody outside the school.',
    activities: [
      'Actionability audit: students swap the emails they have written and must extract on a slip of paper the item requested, the person who must act and the deadline; any email that cannot be reduced to those three is returned to its author unopened.',
      'Frame-and-content split: give the class a bald one-line demand and require them to wrap it in three different remote frames while changing nothing at all about the item or the date, which makes the split visible in one exercise.'
    ]
  },

  'dist-unreal': {
    name: 'Both halves of an unreal sentence must step back together',
    principle: 'An unreal conditional marks the step out of reality <strong>twice</strong>: a past form in the <em>if</em>-clause and a remote modal — usually <em>would</em> — in the other half, so that both halves describe the same imagined world. Put <em>will</em> or a plain present in that other half and it claims as fact what the <em>if</em> only imagines. The condition is often left unsaid: a bare <em>would</em> can hide an <em>if we did it</em>. Wishes use the same remote forms — a past form for a state now, <em>would</em> for somebody else\'s behaviour you want changed, the past perfect for a regret.',
    reteach: 'Students meet conditionals as four numbered types to be memorised and so treat the pairing of forms as an arbitrary pattern, which means they cannot repair a sentence they have half-built or recognise an unreal consequent with no if-clause in sight. Re-derive it from remoteness instead: both clauses describe the same imagined world, so both must be marked as leaving the real one, and a mismatch is two halves in two different worlds. That single argument covers the will-in-the-consequent error, the missing-would error and the wrong-tense-in-the-wish error at once. Give particular attention to bare would, because a great deal of real English lives there and students misread it as a future or a politeness marker; train the question what is the unstated condition. It is still broken when a student writes if they invested, prices will fall, or writes I wish I would rather than I wish I could.',
    activities: [
      'Two-worlds annotation: students draw a line down the page, label the columns REAL and IMAGINED, and place each clause of a conditional in a column — a sentence with clauses in both columns is by definition broken.',
      'Hidden-condition hunt: give a page of authentic prose with bare would highlighted throughout, and require students to write out the unstated if for each one, which turns an invisible construction into a visible one.'
    ]
  },

  'dist-unrealposs': {
    name: 'Would asserts the imagined result; might and could only open it',
    principle: 'The result half of an unreal conditional must be remote, but it need not be <em>would</em>. <em>Would</em> asserts the imagined result; <em>might</em> and <em>could</em> only open it, so there are two layers of distance — the situation is not real, and even inside it the outcome is uncertain. Real-world forms such as <em>will</em>, <em>can</em> or a plain present clash with a remote <em>if</em>-clause, and when you argue from a plan nobody has tried, claim no more than you can defend.',
    reteach: 'Students taught the four conditional types learn would as the only legal consequent and therefore overclaim every time they argue from a hypothetical, which in IELTS Task 2 is constantly — the essay that says if governments banned cars, air quality would improve dramatically is making a confident assertion about a world nobody has observed. Teach it as a second, independent dial sitting inside the first: choose the world with the if-form, choose the confidence with the consequent modal. Then demand a justification for every would, asking what makes the writer so sure about a scenario that has never happened. The could-versus-might distinction is fine-grained and should be taught as a preference rather than a rule, but it rewards attention at C1 and is a visible marker of control. It is still broken when a student can produce might in a gap-fill but writes nothing but would in free writing, which is the usual outcome if the point was taught as a grammar item rather than as calibration.',
    activities: [
      'Consequent swap: take three hypothetical claims from student essays, rewrite each with would, might and could, and have the class rank them by how much evidence the writer would need to defend each version.',
      'Untested-scenario debate: groups argue a policy from a hypothetical, and a scorer deducts a point for every unjustified would in the consequent, which makes overclaiming audible in real time.'
    ]
  },

  'dist-ifwill': {
    name: 'If already supplies the modality, so a second operator is redundant',
    principle: '<em>Will</em> is a modal, not a tense: its job is to mark something as predicted rather than stated as fact. An <em>if</em>-clause has already done that, so it normally takes a plain present even for the future — and the same goes for <em>when</em>, <em>as soon as</em>, <em>until</em> and <em>before</em>; a remote <em>would</em> is no better there. <em>Will</em> stays only when it adds a meaning of its own: willingness, a conclusion about how things stand now, or a stressed complaint about a habit.',
    reteach: 'This is normally taught as a prohibition with no reason attached, so it is learned as a superstition, applied inconsistently, and abandoned the moment a student meets one of the genuine exceptions in a reading text. The reason has to come first, and it depends on the Stage 1 idea that will is an operator rather than a tense — without that, the explanation is unavailable and the rule stays arbitrary. Teach the redundancy argument, then teach the three substitution tests as the procedure for the exceptions: try are willing to, try turns out to be the case now, try insist on doing. If one of the three fits, will stays; if none fits, it goes. Do not present the exceptions as a separate list to memorise, because that recreates the original problem one level up. It is still broken when a student writes if the results will arrive on Friday, and equally when an over-corrected student strikes will out of if you will just sign here, which is perfectly good English.',
    activities: [
      'Substitution triage: a worksheet of twenty if-clauses containing will, each to be marked KEEP or CUT, with the successful substitution written out in full beside every KEEP so that the reason is on the page.',
      'Operator audit: students hunt through a news article for if, when, as soon as and until clauses, highlight the verb form in each, and report back on how the future is actually expressed — which shows the rule holding across authentic text rather than in invented sentences.'
    ]
  },
  /* ---------------------------------------- STAGE 06 · Modality in Past Time */
  'past-deduce': {
    name: 'Must have left is a deduction made now, not the past of must',
    principle: 'A modal has no past tense, so English puts the past after it: <em>modal + have + past participle</em>. <em>She must have forgotten</em> means I am concluding <strong>now</strong> that the forgetting happened <strong>earlier</strong>. This is not the past of <em>must</em>: <em>had to</em> is about rules, not conclusions. To say you are sure something did <strong>not</strong> happen, use <em>can\'t have</em> or <em>couldn\'t have</em>, never <em>mustn\'t have</em>.',
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
    principle: 'The order never changes: <strong>modal + have + been + -ing</strong>, as in <em>He must have been sleeping.</em> The <em>-ing</em> form shows an activity that was still going on at the moment that matters, not one that was already finished. Use it when the evidence you can see now was left by something in progress, or when you are talking about a speed or a rate. Do not use it with verbs like <em>know</em> or <em>own</em>.',
    reteach: 'Most errors here are chain errors, not meaning errors, and they come from students memorising must have been working as a four-word chunk rather than reading it off the slot order they already own from Stage 1. Re-derive it on the board, one slot at a time, and make the class build the form from the chain rather than recall it. The meaning contrast then needs its own pass: must have worked packages the evening as a whole, must have been working looks inside it, and the test question is what the evidence is evidence of — a completed act, or a state of affairs that was continuing. Rates and speeds are worth teaching explicitly, because accident and incident reports are full of them and the progressive there is all but obligatory. It is still broken when a student produces must been working or must have working, or when they write the vehicle must have travelled above the limit and cannot say why it reads oddly.',
    activities: [
      'Slot build against the clock: four cards reading MODAL, HAVE, BE and MAIN VERB are laid out face down and turned over one at a time while a student builds a single sentence aloud, adding one slot per card, so the chain is assembled in order instead of retrieved as a chunk.',
      'Residue file: each group receives one photograph of aftermath and must produce two deductions, one with a simple perfect and one with a progressive perfect, then argue which fits the evidence better; the argument is the exercise, and it forces the completed-against-continuing distinction into words.'
    ]
  },

  'past-should': {
    name: 'Should have done means it did not happen, and that was a fault',
    principle: '<em>Should have done</em> and <em>ought to have done</em> (<em>ought</em> keeps its <em>to</em>) say that something did <strong>not</strong> happen and that this was wrong: criticism with <em>you</em> or <em>they</em>, regret with <em>I</em> or <em>we</em>. The negative works the other way round: <em>shouldn\'t have done</em> means it <strong>did</strong> happen, and that was wrong. Careful: <em>should have</em> can also be a simple expectation with no blame, as in <em>It is nine o\'clock, so the film should have started.</em>',
    reteach: 'The root difficulty is that students carry Level 1 forward and keep reading these forms as weak deductions, so they take you should have phoned as a guess about whether you phoned. Teach the entailment first and the social force second: establish that the event did not happen, in every example, before discussing who is being blamed. The criticism-against-regret split needs no new grammar at all — it is read off the subject — so make students rewrite blame sentences into regret sentences by changing nothing but the pronoun, which shows them that the machinery is identical. The negative flip deserves a separate slot, because students reliably carry the did-not-happen entailment across to shouldn-t have and get the facts exactly backwards. It is still broken when a student reads we shouldn-t have released the figures as meaning the figures were withheld, when they write ought have, or when they cannot spot that their flight left at six so they should have landed by now is assigning fault to nobody.',
    activities: [
      'Pronoun swap: give ten criticisms with should have and require each to be rewritten as a regret, then as a complaint about a third party, changing only the subject; students then say aloud what the sentence has become socially, which attaches the three acts to one piece of grammar.',
      'Post-mortem round table: each group gets a one-page incident summary and must produce exactly three sentences — one accepting fault, one assigning it, one merely stating an expectation — using should have in all three; the class then identifies which is which from the sentence alone.'
    ]
  },

  'past-could': {
    name: 'Could have done can mean the chance was there and was not taken',
    principle: 'Beside the weak guess of Level 1, <em>could have done</em> has a second meaning: something was possible at the time, but it did <strong>not</strong> happen. On its own it blames nobody; <em>should have</em> is the form that adds blame. Said with stress, <em>might have done</em> becomes a complaint about something easy that someone failed to do, and when the thing that did not happen would have been bad, <em>could have</em> expresses relief.',
    reteach: 'Students meet could have as a weak guess in Level 1 and have nowhere to put this reading, so they either force every could have into the guess slot or flatten it into should have and start assigning blame the writer never intended. Teach the entailment test first: ask whether the sentence commits the speaker to the event having happened, and let the answer separate this from the Level 1 use. The could-have-against-should-have contrast then needs its own pass, because the difference is evaluative rather than factual and both sentences agree about what did not happen. The reproach use of might have depends on stress and must be heard before it is described; read it flat and then stressed and ask what changed. It is still broken when a student reads the council could have widened the footpath as an accusation, when they produce you may have told me as a complaint, or when they cannot explain why that could have ended badly is good news.',
    activities: [
      'Road-not-taken timeline: students draw a horizontal line for a real past decision of their own, mark the branch they did not take, and write one could have sentence per branch; the drawing guarantees that every sentence describes something that did not happen, which is the entailment made physical.',
      'Reproach or guess: the teacher reads twelve sentences with might have, half flat and half with heavy stress on might, and students mark each GUESS or COMPLAINT before seeing the transcript — the sound carries the meaning, so the discrimination has to be trained by ear.'
    ]
  },

  'past-would': {
    name: 'Would have is the unreal consequent, and both halves are false',
    principle: '<em>Would have done</em> gives the result of an unreal past condition, and it tells you that <strong>neither half happened</strong>: <em>If the bus had been on time, we would have caught the train</em> means the bus was late and we missed the train. Each half takes the time of its own event, so a past condition can have a present result, and the condition can be a short phrase instead of an <em>if</em>-clause. Keep <em>would</em> out of the <em>if</em>-clause, and write <em>have</em>, never <em>of</em>.',
    reteach: 'The dominant error is would in the if-clause, and it persists because students treat would as a marker of the whole hypothetical sentence rather than of one clause. Attack it structurally: have them label the two clauses CONDITION and RESULT before writing anything, and establish the rule that the condition never contains a modal. The second problem is the assumption that both halves must be past; teach instead that each clause is tensed for its own proposition, which is the same principle the whole stage rests on, and use mixed conditionals early rather than as an advanced extra. Make the double entailment explicit every time by asking what actually happened, since students can build the form correctly and still not know what the sentence claims. Would of should be named as a spelling of the contraction and corrected once, firmly, rather than treated as a grammar error. It is still broken when a student writes if the inspection would have taken place, or reads the basement would have flooded as a report that it flooded.',
    activities: [
      'Fact strip: give ten third-conditional sentences and require two plain past statements beneath each saying what actually happened; marks are only for the two statements, so the entailment is the assessed object rather than the form.',
      'Condition rebuild: hand out sentences whose condition is carried by a phrase — without the second pump, a week earlier, had it not been for the duty officer — and have students expand each into a full if-clause with the past perfect, then compress it back; the round trip makes the hidden condition visible and drills the inverted form at the same time.'
    ]
  },

  'past-needpair': {
    name: 'Needn\'t have done says you did it; didn\'t need to do says you probably didn\'t',
    principle: 'Both forms say there was no need; the difference is whether the action happened. <em>Needn\'t have done</em> tells you the action <strong>was</strong> done, even though there was no need: <em>You needn\'t have cooked — we ate earlier.</em> <em>Didn\'t need to do</em> only says there was no need, and it usually means the action was <strong>not</strong> done. Quick test: if the sentence is about effort already wasted, it is <em>needn\'t have</em>.',
    reteach: 'Students are usually given this as a pair of translations to memorise and so cannot extend it, which means they guess whenever the context is unfamiliar. Teach it as a difference in what is asserted: one form puts a real event into the sentence, the other only mentions a requirement. The cancellation test is the part worth drilling, because it is mechanical and portable — if a following clause denying the action produces nonsense, the event was asserted. Give the shorter exam heuristic as well: a comment on effort already spent is needn-t have, an explanation of why something was skipped is didn-t need to. Note that didn-t have to patterns with didn-t need to, and that mustn-t have does not exist in this family at all. It is still broken when a student writes we needn-t have booked, so we walked straight in, or when they read the crew didn-t need to evacuate as a report that an evacuation took place.',
    activities: [
      'Cancellation test drill: students receive twenty sentences and must append but I did anyway or so I did not bother to each, then mark which appendix produced nonsense; the nonsense is the diagnosis, and no rule needs to be recalled to perform it.',
      'Wasted-effort gallery: pairs invent six short scenarios that end in wasted effort (a second form filled in, a journey for a closed office) and six that end in effort avoided, then swap sheets and supply the modal; the scenario decides the form, so the choice is forced by facts rather than by feel.'
    ]
  },

  'past-wasto': {
    name: 'Was to have done builds the failure of the plan into the form',
    principle: 'Three forms describe plans in the past. <em>Was to have done</em> says there was an arrangement and it did <strong>not</strong> happen: the failure is built into the form, while plain <em>was to do</em> says nothing about the result. <em>Was supposed to do</em> points to what somebody else expected or arranged, and suggests it did not happen; <em>was going to do</em> is the subject\'s own plan, changed by events.',
    reteach: 'The three forms are usually taught as loose synonyms for a broken plan, which leaves students unable to choose between them and unable to hear what a report is signalling. Separate them on two questions only: whose plan was it, and does the form itself say it failed. Was going to is the subject-s own intention; was supposed to comes from a rota, a contract or an instruction; was to have done is contractual and carries the failure in its grammar. The perfect infinitive needs explaining rather than listing, because it looks like the machinery of Level 1 and is doing something else — the frame is already past, so the perfect marks a proposition whose time is over with the event still missing from it. Contrast was to visit against was to have visited side by side, since that minimal pair carries the whole point. It is still broken when a student writes the bridge was to have opened in May and it opened on time, or uses was going to for a contractual deadline in a post-mortem.',
    activities: [
      'Whose plan was it: students receive twenty short scenarios and sort them by the source of the expectation — the subject, an external authority, or a contract — before any form is written; the sorting decides the modal, so the three forms are never in competition.',
      'Delay report rebuild: give groups a bare timeline of a project that overran and require a four-sentence summary using a different member of the family in each sentence; the constraint forces them to distinguish the three rather than defaulting to was supposed to throughout.'
    ]
  },

  'past-ambig': {
    name: 'Could have done has three readings, and only the neighbouring clause decides',
    principle: '<em>Could have done</em> has three meanings, and only the words around it tell you which. <strong>A chance not taken</strong> (it did not happen) usually comes with a contrast such as <em>but</em>. <strong>A weak guess</strong> (nobody knows yet) comes with evidence words such as <em>perhaps</em> or <em>no one knows</em>. <strong>An unreal result</strong> (it did not happen) comes with a condition: <em>if</em>, <em>with</em>, <em>without</em>, or <em>had</em> at the front of the clause.',
    reteach: 'Students who have met all three readings separately still cannot resolve them under pressure, because they have been taught the meanings and not the cues. Teach the cues as a checklist that is run before any interpretation is offered: look left and right of the modal for a contrast, a condition or a piece of evidence language, and only then decide. Insist that the justification is spoken aloud, because a correct verdict reached by feel will not survive an unfamiliar sentence. The productive second half is the writing side — students should learn that the ambiguity is theirs to remove, using may have for a guess, had the opportunity to but did not for a missed chance, and would have with the condition spelled out for an unreal result. This is also the natural place to retire could of, which is simply the contraction spelled as it sounds. It is still broken when a student can sort prepared examples but cannot name the cue that decided each one, or when they leave a bare could have in a report where the reader cannot tell a possibility from an omission.',
    activities: [
      'Cue hunt: students highlight, in three colours, every contrast word, condition marker and evidence phrase in a page of report prose before touching the modals; the modals are then read off the highlighting, which trains the checklist rather than the verdict.',
      'Disambiguation clinic: each pair is given five bare could have sentences and a reading assigned in secret, and must rewrite so that the other pair can identify the intended reading with no context at all; the rewrite is scored only on whether the guess was right.'
    ]
  },
  /* ---------------------------------------- STAGE 07 · Hedging and Stance */
  'hedge-why': {
    name: 'A hedge is a report on the evidence, not a sign of weakness',
    principle: 'A hedge tells the reader <strong>how much</strong> you are asserting. Without one, a claim is universal — true everywhere, always — and a single counterexample destroys it; a hedge shrinks what you are answerable for, so the claim survives. The aim is a match with the evidence: too strong and the examiner sees over-generalising, too weak (<s>it may possibly perhaps be</s>) and there is no claim left at all.',
    reteach: 'The underlying misunderstanding is that hedging is politeness, so students treat it as optional decoration that can be added at the end if there is time. Re-frame it as arithmetic: an unhedged claim covers every case, and the reader is entitled to hunt for the one that breaks it. Run the hunt in class — put a flat claim on the board and offer a prize for the first counterexample, then hedge the claim and try again, so the class sees the sentence become unbreakable in front of them. The Thai-language habit behind this is that academic register there is achieved lexically rather than through auxiliaries, so nothing in the L1 tells a student that a missing modal changes the size of the promise. It is still broken when a student can define hedging correctly but writes a body paragraph in which every topic sentence begins with a universal.',
    activities: [
      'Counterexample Hunt: one student reads an unhedged claim aloud and the rest have thirty seconds to produce a case that falsifies it; the writer must then re-pitch the claim so the same counterexample no longer touches it, and the round is only won when nobody can break the new version.',
      'Evidence Cards: give each pair a finding on a card stating exactly the sample and the design (one city, 400 people, one year) and four candidate sentences reporting it, and require them to rank all four from strongest to weakest before choosing, so the ladder is used rather than guessed.'
    ]
  },

  'hedge-over': {
    name: 'The overclaim: three shapes to hunt for in your own draft',
    principle: 'An overclaim arrives in one of three shapes. <strong>The verb</strong>: <em>proves, demonstrates, shows conclusively</em> — no single study closes a question. <strong>The quantifier</strong>: <em>everyone, all, always, never</em> — one exception is enough to break it. <strong>The modal</strong>: <em>will</em> and <em>must</em> at full strength. The repair is not deletion but one rung down the scale, so the claim survives at a strength the evidence can pay for; but before you soften a sentence, ask what kind of statement it is, because not everything is a claim about evidence.',
    reteach: 'Students overclaim because maximum force feels like confidence and because a bold sentence is easier to write than a calibrated one; they read hedging as an admission that their idea is weak. The most efficient correction is a hunt rather than a rule, since the three shapes are all visible on the page: have students mark every reporting verb, every quantifier and every will in their own draft before they look at anything else. Insist on downgrading rather than deleting, because students who are told a claim is too strong tend to remove it altogether and lose the argument. Distinguish the correlation-to-cause slide explicitly, since that is the one most examiners notice: a study that measures two things together has not shown which produced which. It is still broken when a student hedges the body paragraphs correctly but writes a thesis and a conclusion full of everyone and always, or when they hedge a definition.',
    activities: [
      'Draft Audit in three passes: pass one circles every reporting verb, pass two every quantifier, pass three every will and must, and only then does the student decide which of the circled items the paragraph actually pays for — the separation of passes is what stops them skimming.',
      'Correlation Court: present a finding that two things moved together, then put the causal claim on trial with one student prosecuting the cause, one proposing a reverse cause and one proposing a third factor; the class then writes the verdict as a single correctly-hedged sentence.'
    ]
  },

  'hedge-under': {
    name: 'Hedges do not stack, and hedging a settled fact is its own error',
    principle: 'Every hedge sets the same thing — how far you commit — and it cannot be set twice. A modal already names a degree of possibility, so an adverb that names the same degree (<s>might perhaps</s>) moves nothing, and a string of them (<s>it could conceivably perhaps be argued that</s>) leaves no claim at all. The one legal pair is a modal plus an adverb that <strong>shifts</strong> it (<em>would almost certainly</em>, <em>might conceivably</em>): if the extra word repeats, cut it; if it shifts, keep it. And do not hedge a figure, a definition or a fact nobody disputes.',
    reteach: 'The pile-up is almost always an over-correction: it appears in the week after hedging is taught, because the student has learned that hedges earn marks and concludes that more hedges earn more marks. Teach the dial image explicitly and make them count devices per proposition, with a hard ceiling of two and only when the second moves the first. The underclaim half of this is harder to see and needs a separate prompt, because a student will not spontaneously ask whether a sentence is too weak; make them mark every claim the paragraph has already proved and check that none of those carries a modal. Watch for the cosmetic variant where a student varies the wording of the hedges to disguise the repetition, which produces may, it could be argued and to some extent in a single sentence. It is still broken when a student can find a pile-up in someone else\'s paragraph but produces one in their own timed writing, which is normal until the counting routine becomes automatic.',
    activities: [
      'Hedge Budget: rewrite a padded paragraph under a strict allowance of one hedging device per sentence, spending the budget wherever it buys the most, and then compare two students\' spending choices — the discussion about where to spend is the lesson.',
      'Repeat or Move: flash modal-plus-adverb pairs and have the class hold up one of two cards, MOVE for may well and might conceivably, REPEAT for may possibly and might perhaps, so the test becomes a reflex rather than a rule they recall.'
    ]
  },

  'hedge-adverb': {
    name: 'The adverb after the modal is what makes the scale fine enough to use',
    principle: 'Modals are coarse — <em>may</em>, <em>might</em> and <em>could</em> all land in the same weak middle — so an adverb placed <strong>after</strong> the modal refines it: up (<em>could well</em>), down (<em>might conceivably</em>), or neither, only marking the point as open to dispute. An adverb that merely repeats the modal (<s>might possibly</s>) moves nothing. For low probability, <em>not</em> is the wrong tool — <em>may not happen</em> only says a negative is possible — so use a form built on a probability adjective, which, unlike a modal, can itself be graded.',
    reteach: 'Two separate problems live under this tag. The first is that students own only three or four modals and so cannot express any degree between may and will; give them the upgraders as fixed pairs rather than as adverbs to be selected, because may well is retrieved as one unit by competent writers. The second is the may not confusion, which is the Stage 2 scope asymmetry surfacing again in a writing task: may not negates the proposition while is unlikely to lowers the probability, and students who have not separated those will write may not where they mean probably not and accidentally leave the door wide open. Drill the word order early, since almost would certainly is a common and very visible transfer error. It is still broken when a student produces may well in a gap-fill but writes a whole essay in which every possibility is just may, or when unlikely appears without its are and its to.',
    activities: [
      'Probability Line: chalk a line from 0 to 100 on the floor, read out modal-plus-adverb phrases and have students stand where each one belongs, arguing about the gaps — the arguments about whether may well outranks would probably are where the fine distinctions get made.',
      'Evidence-to-Phrase matching: hand out eight evidence cards graded from one unreplicated pilot up to three converging national studies, and require the matching phrase for each, so the adverb is chosen by the weight of the evidence rather than by taste.'
    ]
  },

  'hedge-imperson': {
    name: 'A frame shifts the source of a claim, and does not lower confidence',
    principle: 'Some hedges change <strong>who</strong> is making the claim rather than how sure it is. An impersonal frame (<em>it</em> + a reporting verb + <em>that</em>) puts the claim in a <em>that</em>-clause, so the sentence says only that the view exists and the writer has not endorsed it — the natural way to state a view you intend to answer. Choose the verb with care: one that treats the claim as a fact, or as proven, puts you back behind it. A <em>would</em> in such a frame is distance, not future time; remove it and the sentence asserts.',
    reteach: 'Students meet these frames on a phrase list and deploy them as ornament, which is why the commonest failure is not grammatical but empty: it is widely held that something must be done frames a proposition nobody could dispute. Teach the frame as a move in an argument rather than as a phrase, and insist that every framed claim be followed within two sentences either by who holds it or by the writer\'s answer to it. The second failure is grammatical and predictable from the L1: would appears, may argues, be argued that dropped in favour of an active. Re-derive the bare infinitive from Stage 1 rather than correcting it as a spelling slip. It is still broken when a student writes three frames in one paragraph, or when the frame is used for the writer\'s own position, which reads as a writer hiding from an argument they are actually making.',
    activities: [
      'Attribution Challenge: every framed claim on the board must be completed with a named holder — a government, a body of research, the opposing side of the prompt — and any frame that nobody can attribute is deleted, which removes the empty ones fast.',
      'Turn Drill: give students an opposing view as a flat assertion and require the two-sentence turn, frame then counter, against a clock; collect the pairs and read out the ones where the counter forgot to arrive.'
    ]
  },

  'hedge-approx': {
    name: 'Approximators limit how wide a claim is, not how sure you are',
    principle: 'A modal hedge grades <strong>confidence</strong>; an approximator grades <strong>scope</strong>. <em>In general, older drivers have fewer accidents</em> asserts the pattern and admits only that some older drivers do not, which is a stronger position than a modal hedge would leave you. Approximators come as verbs of frequency, quantity phrases (<em>the majority of</em>, <em>in general</em>) and degree words (<em>largely</em>, <em>to some extent</em>). One modal plus one approximator is legal; two that both limit scope is not, and never blur a figure you have already given.',
    reteach: 'The misunderstanding is that all hedges are the same kind of thing, so students reach for may when what they need is tend to and end up conceding that the pattern itself might not exist. Separate the two variables on the board as two columns, HOW SURE and HOW WIDE, and make every hedge a student uses go into one column before it goes into a sentence. This tag is the direct antidote to the descriptor phrase a tendency to over-generalise, so it is worth telling students that explicitly — a generalisation with an approximator is not an over-generalisation. Watch for the blurring error, where a student who has just given an exact figure follows it with a certain amount or to some degree and throws away the precision they had. It is still broken when a student sorts tend to into the confidence column, or when in most cases and on the whole appear in the same sentence.',
    activities: [
      'Two-Column Sort against a timer: phrases are called out and students write each into HOW SURE or HOW WIDE; tend to and appear to are deliberately included as the hard cases and are discussed at the end rather than scored.',
      'Exception Test: students write a general claim, exchange papers, and the partner must supply a real counterexample; the original writer then repairs the sentence using an approximator only, which forbids the easy retreat into may.'
    ]
  },

  'hedge-concede': {
    name: 'The concessive modal: grant the point on loan, then counter harder',
    principle: 'A concession has four parts: a linking word (<em>while, although, granted that</em>), the opposing claim with a hedge on it, a turn, and your own counter-claim with its own calibration. An unhedged concession gives the point away; a hedged one only lends it. The rule that governs the balance is that <strong>your counter must be at least as strong as the concession</strong>, so if your counter is weak, concede less: narrow what you grant, or lower the hedge on it.',
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
    principle: 'Underline every claim, then ask of each one: <strong>what in this paragraph makes that true?</strong> Too little support: move it down a rung (<em>proves → indicates</em>, <em>will → is likely to</em>, <em>everyone → most</em>). More support than you admitted: move it up or cut the hedge, and never hedge a figure you have just given. Force belongs to the paragraph, not the sentence: if every claim sits at the same strength, the reader cannot tell where you stand firm.',
    reteach: 'The root problem is that calibration is treated as something done while writing, when under timed conditions it can only be done in revision; students therefore never do it. Install it as a two-minute routine with a fixed procedure, because a vague instruction to check your hedging produces nothing. Uniform hedging is the failure to watch for once the routine takes hold: a paragraph in which every claim sits at may is as unreadable as one in which every claim sits at will, and students who have just learned to hedge produce the first of those reliably. Make them read a flat-hedged paragraph aloud and ask which sentence the writer cares about; the fact that nobody can tell is the argument for variation. It is still broken when a student edits for grammar and vocabulary in the last five minutes and never looks at force at all, which is the default unless the routine has been rehearsed against a clock.',
    activities: [
      'Two-Minute Audit against a timer, on a paragraph the student wrote a week earlier so that they no longer remember what they meant: underline claims, mark each U for up, D for down or K for keep, and only then rewrite.',
      'Force Profile: students mark each sentence of a model paragraph on a five-point scale from hedged to boosted and plot the shape, then plot one of their own; a flat line on either profile is the diagnosis, and the repair is to identify which sentence deserved to be highest.'
    ]
  },
  /* ---------------------------------------- STAGE 08 · The Whole System */
  'sys-ambig': {
    name: 'The same modal does two different jobs, and the word never says which',
    principle: 'Most modals work in two systems: what the evidence makes likely (a deduction) and what the rules require or allow. The word itself never says which system it is in; the rest of the clause and the situation decide. A free check: make the sentence negative. A deduction is denied with <em>can\'t</em>, a rule with <em>mustn\'t</em>, so whichever one sounds right tells you which meaning you had.',
    reteach: 'Students who have worked through Stage 2 and Stage 3 usually file must twice, once under certainty and once under obligation, and then treat every new sentence as belonging to whichever list they revised most recently. The cure is not more examples but the single logical point: the modal quantifies over a set of possibilities and does not name the set. Put one sentence on the board and have the class produce two full paraphrases for it, I am sure that and it is required that, before any discussion of which is right; the habit of producing both is what you are installing. Then hand them the negative test, because it is mechanical and it costs nothing. It is still broken when a student tells you a sentence is deontic without being able to say what the epistemic reading would have meant, or when they deny a deduction with mustn-t, which shows the two systems are still one undifferentiated list.',
    activities: [
      'Double Paraphrase: every sentence handed out must be rewritten twice, once beginning I am fairly sure that and once beginning The rule is that, and only then may a pair argue for one; marks are awarded for the two paraphrases, never for the verdict.',
      'Negative Flip relay: the teacher reads an ambiguous modal sentence and a student must immediately produce its negative, then say which domain that negative revealed — can-t for deduction, mustn-t for prohibition — which turns an abstract distinction into a two-second reflex.'
    ]
  },

  'sys-clues': {
    name: 'Rules need someone who can obey them; deductions need nobody',
    principle: 'A rule needs someone who can obey it and something they can choose to do; a deduction needs neither. So a <strong>state</strong>, a <strong>finished event</strong> (<em>have</em> + participle) or <strong>something already in progress</strong> (<em>be</em> + <em>-ing</em>) points to a deduction, and so does a subject that cannot act, such as a machine or the weather. A <strong>deadline plus an action someone controls</strong> points to a rule. A person plus an ordinary action and no other clue leaves both readings open.',
    reteach: 'The failure mode is guessing, and a guesser gets perhaps seven in ten right forever, which is exactly the band ceiling these students are trying to break through. Teach it as a four-question procedure performed in order, written down, until it is automatic: is the event closed, can the subject act, is there a deadline, and if none of those, is the context a rule book or a conversation. The most productive single demonstration is a minimal pair that changes one clue only — the committee must meet before Friday against the committee must have met in secret — because it shows that the verb and the subject are untouched and only the aspect moved. Watch for the over-generalisation that the passive is always epistemic; it is agency that matters, which is why the form must be signed by the applicant is plainly a rule. It is still broken when a student can label six prepared sentences correctly but cannot say which word in any of them did the work.',
    activities: [
      'Clue Highlighter: students receive a paragraph of regulations mixed with a paragraph of inference and must underline, in different colours, every stative verb, every perfect or progressive, every non-agentive subject and every deadline, then read the domain straight off the colours.',
      'One-Word Switch: give a sentence that is open between the two readings and require each pair to force it epistemic by changing exactly one word, then force it deontic by changing exactly one word; the constraint makes them locate the clue rather than rewrite the sentence.'
    ]
  },

  'sys-disambig': {
    name: 'Fix the ambiguity where the reader has to act, and nowhere else',
    principle: 'First ask what the reader has to <em>do</em> with the sentence. If they only need to understand it, the context settles an ambiguous modal and the short form is better English. If they have to act on it, replace the modal with a form that has only one possible reading: one that can only state a rule (such as <em>has a duty to</em>), or one that can only report a conclusion (such as <em>it seems that</em>). Never combine one of each in the same clause.',
    reteach: 'Two opposite errors appear, and a class will usually contain both. The first is under-correction, where a student writes rules and protocols in bare modals because the ambiguity is invisible to them; the second is over-correction, where a student who has just met is required to sprays it through a narrative and produces prose like a tax form. Teach the genre question first and the repair list second, in that order, or you will get the second error. A useful demonstration is to take one ambiguous sentence and place it in four contexts — a text message, a news paragraph, a ward protocol and a lease — and ask in which of the four the ambiguity would cost anybody anything. Be firm that presumably and is required to belong to different domains and cannot be combined; presumably required is not a stronger requirement but a weaker claim about one. It is still broken when a student rewrites every modal in a passage, or when their safety notice still opens with a bare should.',
    activities: [
      'Genre Sort before repair: a single ambiguous sentence is issued on four cards labelled text message, news report, ward protocol and tenancy agreement, and groups must decide which cards need a repair at all before anyone is allowed to write one.',
      'Repair Kit drill: students are given ten sentences and a two-column kit — deontic forms on the left, epistemic forms on the right — and must rewrite each sentence twice, once from each column, which makes the single-domain nature of every form in the kit impossible to miss.'
    ]
  },

  'sys-chain': {
    name: 'Each auxiliary fixes the form of the next, so the chain has one order',
    principle: 'The order is fixed: <strong>modal → <em>have</em> → <em>be</em> (progressive) → <em>be</em> (passive) → main verb</strong>. You may leave slots out, but you can never swap them, because each word decides the form of the next: after a modal, the bare form; after <em>have</em>, a past participle; after progressive <em>be</em>, an <em>-ing</em> form; after passive <em>be</em>, a past participle. To read a long chain, start from the last word and work backwards.',
    reteach: 'Students meet must be signed, should have been reported and may be waiting as three unrelated structures to memorise, and then have nothing to do when a fourth arrives. Re-derive the chain rather than listing it: write the five slots on the board and build one string aloud, asking at each step what form the previous word demands, so that been and being are produced rather than recalled. The reading direction is the other half of the lesson and is usually skipped — insist that they start at the last word and work back, because that is what makes a five-slot phrase parseable rather than frightening. The diagnostic errors are must being counted, which omits the bare be the modal selects, and should have be archived, which puts an infinitive where a participle belongs; both show that selection has not been understood as a chain of demands. It is still broken when a student can complete a gapped chain but cannot say what any one of the auxiliaries contributes to the meaning.',
    activities: [
      'Slot Cards: five physical cards reading MODAL, HAVE, BE-ing, BE-passive and VERB are laid out, and a pair must build a phrase by dealing only the cards the sentence needs, saying aloud what form each card forces on the next before writing anything.',
      'Read It Backwards: students are handed six long modal phrases from technical and legal prose and must gloss each from the right-hand end in four steps — what happened, to whom, finished or not, how sure — which converts a memorised shape into a procedure.'
    ]
  },

  'sys-report': {
    name: 'Only forms that are not already remote can take the step back',
    principle: 'After a past reporting verb such as <em>said</em>, a modal can step back one form, but only if a further-back form exists. Forms that are already remote (the past-looking forms from Stage 5) have nowhere further to go, so they stay as they are. <em>Must</em> has no past form of its own: a reported rule borrows the past of <em>have to</em>, while a <em>must</em> that means <em>I am sure</em> is left unchanged. If what was said is still true, nothing needs to move.',
    reteach: 'Two things go wrong. The first is mechanical: students hunt for a past of could or ought and invent one, because they have been taught backshift as a table to apply rather than as one step of distance that some forms have already taken. Teach it from Stage 5 — the past morphology is remoteness, and you cannot be remote twice — and the six non-shifters stop being a list. The second is semantic and is the more expensive: deontic must becomes had to and epistemic must does not, so a student who backshifts blindly converts every deduction in a news report into an obligation. Make them paraphrase the original before they report it, I am sure or has to, and let the paraphrase choose the form. Add that the past reference in a deduction is already inside the proposition, which is why must have had needs no further change. It is still broken when a student writes the officer said the intruder had to have had a key, or hunts for a backshifted form of had better.',
    activities: [
      'Two Musts dictation: the teacher reads twelve quotations containing must, half deductions and half obligations, and students must write the report and then justify the form in three words — sure, so it stays; required, so had to.',
      'Nowhere To Go: students are given the ten core modals on cards and must physically move each one to a second card showing its backshifted form; the six that have no card to move to are left standing, which makes the one-step limit visible rather than memorised.'
    ]
  },

  'sys-invert': {
    name: 'Three verbs can replace if by inverting, and the negative cannot contract',
    principle: 'Only three verbs can take the place of <em>if</em> by moving in front of the subject: <em>were</em>, <em>had</em> and <em>should</em>. Each is followed by the same verb form it would have after <em>if</em>, and the other half of the sentence has to match how open or unreal the condition is. No other verb can do this job; with any other, the clause reads as a question. It belongs to formal writing, and its negative never contracts: <em>not</em> goes after the subject.',
    reteach: 'This is usually taught as three sentences to memorise for a formal letter, which means students produce them correctly in a drill and then invert something else a week later. Ground it in Stage 1 instead: these are the verbs that invert without do-support, and the construction is simply that inversion doing a conditional job, which is why did cannot join in. The contraction rule needs to be stated as a rule and then heard, because hadn-t the council acted sounds fine to a learner and is instantly a question to a native reader. Watch too for pattern-mixing — were the ministry decide, should the ministry to decide — which shows the three patterns have been blurred into one shape with a variable slot at the front. Finally, teach the register consequence in both directions, since a student who has just learned it will put should you require into a message to a classmate. It is still broken when a student writes if were the scheme to fail, keeping both markers at once.',
    activities: [
      'De-if drill against the clock: students receive twenty if-clauses, only twelve of which can be inverted, and must invert those and mark the rest impossible; the eight impossible ones are where the learning is, so they are marked first.',
      'Register Swap: a formal letter and a text message to a friend are issued containing the same four conditions, and pairs must move each condition into the other document and report what now sounds wrong, which attaches the construction to a genre rather than to a rule.'
    ]
  },

  'sys-will': {
    name: 'Will predicts; the future is only its commonest reading',
    principle: '<em>Will</em> is a modal, not a tense: it behaves exactly like <em>can</em> and <em>must</em>. Its core meaning is <strong>prediction</strong>, and a prediction can be about any time: the future, but also what is true right now, what is always true, or what someone typically does. To check, ask when it happens: if there is no answer, or the answer is <em>always</em>, the <em>will</em> is not about the future. After <em>if</em>, plain future <em>will</em> is not used, because <em>if</em> already does that job.',
    reteach: 'Almost every student arrives with will glossed as the future tense, usually from a coursebook chapter called The Future, and the gloss makes three of its four readings invisible. Attack the grammar first, because it is decisive and not a matter of interpretation: ask for the third-person form, the infinitive, and a combination with can, and let the class discover that will behaves exactly like must. Then run the four readings with the when test — if the question when has no answer, the sentence is not about the future — which handles generic and deduction uses in one move. The if-clause prohibition should be presented last and as a consequence, never as a separate rule, and the two genuine survivals need naming or students will over-correct: if you will sign here is willingness, and if it will help is a prediction about a result. It is still broken when a student reads under load the cables will sag as a forecast, or corrects if you will wait here to if you wait here in a polite request.',
    activities: [
      'The When Test: students mark every will in a page of technical or scientific prose and write beside each one either a time or a dash; the dashes are the non-future readings, and the class then names which of the three each one is.',
      'Stress pairs read aloud: the teacher reads he will leave his boots in the hallway flat and then with heavy stress on will, and students hold up REPORT or COMPLAINT, so the characteristic-behaviour reading is attached to a sound before it is attached to a label.'
    ]
  },

  'sys-periphery': {
    name: 'The edge of the class: shall, need, dare and ought are half in',
    principle: '<em>Shall</em> now lives mainly in contracts and in offers or suggestions with <em>I</em> or <em>we</em>. <em>Need</em> and <em>dare</em> can be modals, but only in negatives, questions and clauses with words like <em>hardly</em> or <em>only</em>; then they take no <em>-s</em>, no <em>do</em> and no <em>to</em>. Everywhere else they are ordinary verbs with <em>do</em>, <em>-s</em> and <em>to</em>, and the two patterns are never mixed. <em>Ought</em> keeps its <em>to</em> in every form, which is why its questions and negatives sound stiff.',
    reteach: 'These four are where a tidy class turns messy, and students who have been taught modals as a closed list of nine with uniform behaviour find them destabilising. Frame the messiness as the point: the class is shrinking, and these are the members on the way out, which is why their behaviour is split and register-bound. For need and dare the productive teaching is the non-assertive environment rather than a list of sentences — show that need not, Need I and need hardly all sit in negatives or questions, and that there is no ordinary affirmative modal need at all. Insist that the two patterns are never blended, because needs not and doesn-t need wait are the two errors that will actually appear. For shall, separate the contractual use from the offer use firmly, since they share nothing but a spelling, and note that first-person future shall has effectively gone. It is still broken when a student writes ought the tribunal consider without the to, or produces I need not to worry.',
    activities: [
      'Two Verbs, One Spelling: students receive twelve sentences with need or dare and must tag each MODAL or LEXICAL using three tests — is there an s, is there a do, is there a to — and then state which non-assertive word licensed the modal ones.',
      'Register Casebook: a contract clause, a committee minute and a text message are issued and pairs must place shall, must and have to into each, then justify the placement; the exercise shows that the contractual shall and the Shall we of the meeting are unrelated uses.'
    ]
  },

  'sys-track': {
    name: 'Follow the commitment, and notice whose commitment it is',
    principle: 'A writer\'s commitment changes from sentence to sentence, so track four things: <strong>the modal and how strong it is</strong>; <strong>whose view it is</strong>, since a claim introduced by someone else\'s reporting verb belongs to them, not to the writer; <strong>hedges and boosters</strong>; and <strong>sentences with no modal at all</strong>, which are the writer at full strength. Reporting verbs matter as much as modals: <em>claim</em>, <em>insist</em> and <em>maintain</em> keep a distance, while <em>show</em>, <em>find</em> and <em>establish</em> agree.',
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
