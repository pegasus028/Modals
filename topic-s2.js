/* ===========================================================================
   STAGE 02 — The Ladder of Certainty
   Installs the epistemic scale as one ordered ladder, and the suppletive
   negative at the foot of it: the opposite of deductive "must" is "can't".
   =========================================================================== */

var T2 = {
  id: 't2', n: 2, code: 'Stage 02', art: 'stack',
  name: 'The Ladder of Certainty',
  cefr: 'B1+–B2',
  blurb: 'One scale runs from must down to can\'t. Knowing the rungs is worth more than knowing the words, because the negative half is not where you expect it.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T2.levels.push({
  id: 't2l1', n: 1, name: 'How sure am I?', cefr: 'B1+',
  blurb: 'Every deduction sits on one rung of a single scale, and the modal you choose is a report on your evidence rather than on the world.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't2l1s1', name: 'The scale: must · will · should · may · might · could · can\'t', cefr: 'B1+',
      theory: {
        key: 'An epistemic modal does not change the event; it says how much of your evidence points at it, and the modals form one ordered ladder from certain to impossible.',
        body: [
          'Take one proposition and leave it alone: <em>the building is closed</em>. Now put a modal in front of it. <em>The building <strong>must</strong> be closed.</em> <em>The building <strong>may</strong> be closed.</em> <em>The building <strong>can\'t</strong> be closed.</em> Nothing about the building has moved. What has moved is the speaker — closer to the claim, or further away from it. That is all an epistemic modal ever does.',
          'Because the modals do only this one job, they line up in a single order. At the top, <strong>must</strong>: the evidence leaves no other explanation. Just below, <strong>will</strong>: so predictable that the speaker does not need to check. Then <strong>should</strong> and <strong>ought to</strong>: what a reliable pattern leads you to expect. In the middle, <strong>may</strong>, <strong>might</strong> and <strong>could</strong>, all saying the same thing — one possibility among several. At the bottom, <strong>can\'t</strong>: no possibility at all.',
          'The mechanism underneath is simple. The top and the bottom are <strong>necessity</strong>: every explanation your evidence allows points the same way, either at the claim or away from it. The middle is <strong>possibility</strong>: at least one explanation points at the claim, and others do not. That is why <em>must</em> and <em>can\'t</em> feel like a pair even though they share no letters, and why <em>may</em>, <em>might</em> and <em>could</em> feel interchangeable even though they look different.',
          'One thing surprises students. A sentence with <em>must</em> is a <strong>weaker</strong> claim about the world than the same sentence without it. <em>It is raining</em> asserts the rain. <em>It must be raining</em> admits that you are working it out from wet umbrellas. Putting a modal in is an admission that you have not looked — which is exactly why a careful writer chooses the rung deliberately, and why the bottom of the ladder is <em>can\'t</em>, never <em>mustn\'t</em>.'
        ],
        simple: [
          'The modal does not describe the event. It shows how sure the speaker is: <em>The lab must be closed</em> (sure) · <em>The lab may be closed</em> (not sure) · <em>The lab can\'t be closed</em> (sure it is not).',
          'The order, strongest first: <em>must · will · should · may · might · could</em>, and then <em>can\'t</em> right at the bottom. <em>May</em>, <em>might</em> and <em>could</em> all sit on the same rung.',
          'If you can see it, do not use a modal at all. <em>It is raining</em> is stronger than <em>It must be raining</em>, because the second one says you are guessing from the evidence.'
        ],
        examples: [
          { s: 'The lights are off, so the office <b>must</b> be closed.', g: 'top rung: no other explanation is left.' },
          { s: 'The delay <b>could</b> be a signalling fault.', g: 'middle rung: one possibility among several.' },
          { s: 'That <b>can\'t</b> be the final figure — the survey closes on Friday.', g: 'bottom rung: no possibility at all.' },
          { s: '<s>The family might definitely be away.</s>', g: 'two rungs at once; "definitely" belongs with must, not with might.' }
        ]
      },
      items: [
        { id: 't2l1s1-1', type: 'choose', tag: 'epi-scale', level: 'B1+',
          stem: 'The door of the physics building is locked, the lights are off and every name on the sign-out sheet is crossed through. Which sentence reports the <strong>strongest</strong> conclusion the evidence allows?',
          options: [
            'The building must be closed for the evening.',
            'The building might be closed for the evening.',
            'The building could be closed for the evening.',
            'The building may be closed for the evening.'
          ],
          answer: 0,
          why: '<em>Must</em> is the top rung: the speaker can see no explanation other than a closed building, which is what three pieces of matching evidence give you. <em>May</em>, <em>might</em> and <em>could</em> all sit together on the weak middle rung and claim only that a closed building is one possibility among several, so each of them understates the evidence in exactly the same way — and because they are near-synonyms here, none of them could be a single best answer even if the evidence were weaker.' },

        { id: 't2l1s1-2', type: 'sort', tag: 'epi-scale', level: 'B1+',
          stem: 'Put each deduction on the right rung of the ladder.',
          bins: [
            { key: 'high', label: 'Near-certain', hint: 'the speaker sees no other explanation' },
            { key: 'mid', label: 'One possibility', hint: 'the speaker sees several explanations' },
            { key: 'out', label: 'Ruled out', hint: 'the speaker sees no way it is true' }
          ],
          items: [
            { text: 'Her office light is on, so she <em>must</em> be back from Chiang Mai.', bin: 'high' },
            { text: 'The delay <em>may</em> be a problem with the new signalling.', bin: 'mid' },
            { text: 'These <em>can\'t</em> be last month\'s figures — they include the holiday weekend.', bin: 'out' },
            { text: 'The fall in bookings <em>could</em> be seasonal.', bin: 'mid' },
            { text: 'He <em>will</em> be on the six o\'clock ferry, as he always is.', bin: 'high' },
            { text: 'The east gate <em>can\'t</em> be open — the contractors bricked it up in June.', bin: 'out' }
          ],
          why: 'The ladder has three zones, not seven separate words. <em>Must</em> and <em>will</em> both close off every alternative and so belong together at the top, even though <em>will</em> reasons from a habit and <em>must</em> from something the speaker has just seen. <em>May</em> and <em>could</em> are interchangeable on the middle rung. <em>Can\'t</em> is the bottom rung, and it is a confident claim too — a speaker who says <em>can\'t</em> is committing themselves just as far as one who says <em>must</em>.' },

        { id: 't2l1s1-3', type: 'choose', tag: 'epi-scale', level: 'B1+',
          stem: 'A research team has found that teenagers who spend longer on screens also tend to sleep worse, but it has not yet tested whether one causes the other. Which sentence claims only what the findings support?',
          options: [
            'Longer daily screen use must reduce adolescent sleep quality.',
            'Longer daily screen use could reduce adolescent sleep quality.',
            'Longer daily screen use will reduce adolescent sleep quality.',
            'Longer daily screen use cannot reduce adolescent sleep quality.'
          ],
          answer: 1,
          why: 'Two things rising together leave several explanations open, and <em>could</em>, on the middle rung, says exactly that: screen use is one possible cause among several. <em>Must</em> claims the evidence has ruled out every other explanation, which is precisely the work the team has not done; <em>will</em> predicts confidently from a cause-and-effect link that has not been established; and <em>cannot</em> denies the link the team actually found. This is the commonest overclaim in exam writing, and it costs marks for reasoning, not for grammar.' },

        { id: 't2l1s1-4', type: 'spot', tag: 'epi-scale', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Nobody has answered the door,', 'the curtains have not moved all day', 'and the post is piling up,', 'so the family might definitely be away.'],
          answer: 3,
          fix: 'so the family must be away.',
          why: '<em>Might</em> and <em>definitely</em> sit at opposite ends of the ladder, so the phrase says "one possibility among several" and "no other possibility" in the same breath. Evidence this consistent calls for the top rung, <em>must</em>, with no adverb needed. The other three parts are sound: they are three plain observations that supply the evidence, and none of them makes any claim about how sure the speaker is.' },

        { id: 't2l1s1-5', type: 'equiv', tag: 'epi-scale', level: 'B2',
          given: 'It is impossible that the ticket office is open at this hour.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The ticket office mustn\'t be open at this hour.',
            'The ticket office may not be open at this hour.',
            'The ticket office can\'t be open at this hour.',
            'The ticket office shouldn\'t be open at this hour.'
          ],
          answer: 2,
          why: 'The bottom rung of the certainty ladder is <em>can\'t</em>: no possibility is left open, which is what <em>impossible</em> means. <em>Mustn\'t</em> is a prohibition and would say the office is forbidden to open; <em>may not</em> keeps the weak middle rung with the <em>not</em> inside it, so it leaves open that the office is in fact serving customers; and <em>shouldn\'t</em> reports only an expectation, which allows the office to be open against expectation.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't2l1s2', name: 'may, might, could: the weak middle', cefr: 'B1+',
      theory: {
        key: 'In this use <em>may</em>, <em>might</em> and <em>could</em> are near-synonyms: all three say "one possibility among several", and the differences students are taught are far smaller than the difference between the three of them and the rungs above and below.',
        body: [
          'All three are <strong>existential</strong>: they claim that at least one of the situations your evidence allows is the one described. <em>She may be in the archive.</em> <em>She might be in the archive.</em> <em>She could be in the archive.</em> These are the same claim. A speaker who switches between them mid-conversation has not changed their mind about the archive.',
          'Textbooks often say <em>might</em> is weaker than <em>may</em>. The gap is real but tiny, and no reader will reconstruct a percentage from it. What genuinely differs is <strong>register and ambiguity</strong>. <em>May</em> is the form that carries formal written English, so it dominates in reports and academic prose. <em>Might</em> and <em>could</em> are commoner in speech. And <em>may</em> has a permission reading — <em>students may use the side entrance</em> — so a writer who fears being misread sometimes picks <em>might</em> on purpose.',
          'The one member of the three with a genuinely different life is <em>could</em>, which also does ability (<em>she could swim at four</em>) and suggestion (<em>you could try the second edition</em>). In a deduction it is nonetheless the same rung as the other two. Where all three really do come apart is in the negative, and that is the whole of Level 2.',
          'The practical consequence is worth more than the fine distinctions. Choosing <strong>between</strong> <em>may</em>, <em>might</em> and <em>could</em> is a style decision with almost no meaning attached. Choosing between that rung and <em>must</em>, <em>should</em> or <em>can\'t</em> changes what you have claimed. Spend your attention on the rung. And never stack a hedge on a hedge — <em>might possibly perhaps</em> says nothing that <em>might</em> did not already say.'
        ],
        simple: [
          '<em>May</em>, <em>might</em> and <em>could</em> mean the same thing in a guess: <em>The fault may / might / could be in the router.</em> All three say the router is one possible answer.',
          '<em>May</em> is the formal written one; <em>might</em> and <em>could</em> are commoner in speech. That is almost the whole difference.',
          'Do not add extra hedges: <em>might possibly</em> and <em>could maybe</em> say no more than <em>might</em> and <em>could</em>, and they make the writer sound unable to decide.'
        ],
        examples: [
          { s: 'The key <b>may</b> be in the drawer. / The key <b>might</b> be in the drawer.', g: 'the same claim, written twice.' },
          { s: 'The discrepancy <b>may</b> reflect a change in how the data was collected.', g: 'may is the one that carries formal writing.' },
          { s: 'The queue <b>could</b> be shorter after four.', g: 'could is the same rung, commoner in speech.' },
          { s: 'The discrepancy <b>might possibly</b> reflect a change in method.', g: 'not wrong, but a needless second hedge; might already says it.' }
        ]
      },
      items: [
        { id: 't2l1s2-1', type: 'choose', tag: 'epi-weak', level: 'B1+',
          stem: 'In which pair do the two sentences make the <strong>same</strong> claim?',
          options: [
            '<em>The fault may be in the router.</em> / <em>The fault might be in the router.</em>',
            '<em>The fault may be in the router.</em> / <em>The fault cannot be in the router.</em>',
            '<em>The fault may be in the router.</em> / <em>The fault must be in the router.</em>',
            '<em>The fault may be in the router.</em> / <em>The fault will be in the router.</em>'
          ],
          answer: 0,
          why: '<em>May</em> and <em>might</em> are near-synonyms in a deduction: both say the router is one of the places the fault could be. <em>Must</em> and <em>will</em> climb to the top of the ladder and claim the router is the only candidate left, which is a different and much riskier sentence; <em>cannot</em> drops to the bottom and rules the router out entirely. What changes a deduction is the rung, not the choice of word within a rung.' },

        { id: 't2l1s2-2', type: 'equiv', tag: 'epi-weak', level: 'B1+',
          given: 'Perhaps the drop in visitor numbers is seasonal.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The drop in visitor numbers must be seasonal.',
            'The drop in visitor numbers could be seasonal.',
            'The drop in visitor numbers should be seasonal.',
            'The drop in visitor numbers can\'t be seasonal.'
          ],
          answer: 1,
          why: '<em>Perhaps</em> is the adverb of the weak middle rung, and <em>could</em>, <em>may</em> and <em>might</em> are its modal equivalents. <em>Must</em> reports a conclusion that the word <em>perhaps</em> explicitly refuses to draw; <em>can\'t</em> reverses the sentence into a denial; and <em>should</em> claims an expectation grounded in a known pattern, which commits the speaker further than <em>perhaps</em> ever does.' },

        { id: 't2l1s2-3', type: 'choose', tag: 'epi-weak', level: 'B2',
          stem: 'You are writing up a science experiment for your teacher and want to suggest, carefully, one possible reason for some odd results. Which sentence is best?',
          options: ['These results could maybe point to a measurement error.', 'These results will point to a measurement error.', 'These results must point to a measurement error.', 'These results may point to a measurement error.'],
          answer: 3,
          why: '<em>May</em> (like <em>might</em> or <em>could</em>) offers one possible reason, and it needs no reinforcement. <em>Could maybe</em> stacks a second, informal hedge on a modal that is already hedging, which reads as a writer who cannot commit rather than one who is being careful. <em>Will</em> and <em>must</em> abandon the middle rung altogether: <em>will</em> states the measurement error as a settled prediction, and <em>must</em> claims it is the only explanation, which a few odd results cannot show.' },

        { id: 't2l1s2-4', type: 'cloze', tag: 'epi-weak', level: 'B2',
          passage: 'The city has recorded a sharp fall in bus use since March. Officials have pointed to the new fare structure, but the fall began several weeks before the fares changed, so the fares ___(1)___ be the whole story.\n\nTwo other explanations are open. Heavy rain closed three underpasses for most of April, and the extension of the metro line reached the northern districts in the same month. Either of these ___(2)___ account for part of the fall, and the transport office has commissioned a survey to find out which.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['could', 'must', 'will', 'cannot'],
          answer: 0,
          why: 'The paragraph names two candidate explanations and then says a survey is still needed, which is the weak middle rung exactly: each explanation is one possibility among several. <em>Must</em> would claim the evidence has already settled the question and make the commissioned survey pointless; <em>cannot</em> would rule out the very explanations the paragraph has just raised; and <em>will</em> predicts the outcome of research that has not been carried out.' },

        { id: 't2l1s2-5', type: 'choose', tag: 'epi-weak', level: 'B2',
          stem: 'Nobody can find Dr Suphan, and four colleagues guess what she is doing. Three of the guesses make the same claim. Which one does <strong>not</strong>?',
          options: [
            'Dr Suphan may be reviewing the proposal now.',
            'Dr Suphan might be reviewing the proposal now.',
            'Dr Suphan could be reviewing the proposal now.',
            'Dr Suphan should be reviewing the proposal now.'
          ],
          answer: 3,
          why: '<em>May</em>, <em>might</em> and <em>could</em> are interchangeable here: each says that reviewing the proposal is one of the things Dr Suphan may be doing at this moment. <em>Should</em> is a rung higher — it reports what a schedule or a known habit leads the speaker to expect — so it commits the speaker considerably further than the other three. Because all four are offered as guesses about what she is doing, none of them can be read as an instruction.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't2l1s3', name: 'must and will as deduction, not obligation', cefr: 'B2',
      theory: {
        key: 'At the top of the certainty ladder <em>must</em> and <em>will</em> are not orders or timetables: they report an inference the speaker has just drawn from evidence.',
        body: [
          'The same four letters do two unrelated jobs. <em>He <strong>must</strong> be tired</em> — I have worked it out. <em>He <strong>must</strong> be at the office by nine</em> — somebody requires it. There is no ambiguity in practice, because the two readings leave different fingerprints, and once you can see them you will never mistake one for the other.',
          'Four clues point at deduction. A <strong>subject that cannot obey</strong> anything: <em>the printer must be out of toner</em>. A <strong>state</strong> rather than an action after the modal: <em>must be</em>, <em>must know</em>, <em>must belong</em>. An <strong>evidence adverbial</strong>: <em>judging by the queue</em>, <em>from the look of it</em>. And the <strong>progressive</strong>: <em>must be waiting</em>, which is the subject of Level 3. Obligation, by contrast, comes with a human subject who can act, and usually with a deadline or an authority behind it.',
          '<em>Will</em> belongs at the top of the ladder too, which surprises students who have been told it is the future tense. English has no future tense; <em>will</em> is a modal, and what it expresses is confident prediction, which is a stance rather than a time. That is why it can comment on the present: <em>That\'ll be the courier</em>, said as the bell rings, is a deduction about something already happening. <em>Must</em> reasons from evidence in front of you; <em>will</em> reasons from what you already know about how things go.',
          'The strangest consequence is that <em>must</em> sounds wrong where the evidence is too good. <em>Look — it must be raining</em> is odd if you are staring at the rain, and perfectly natural if you are looking at wet umbrellas coming through the door. The modal announces an inference, so it needs something to infer from. A writer who uses <em>must</em> for something they have simply observed is telling the reader, by accident, that they did not observe it.'
        ],
        simple: [
          '<em>Must</em> has two jobs. Deduction: <em>The lift must be broken again</em> (I worked it out). Obligation: <em>Visitors must sign in</em> (a rule).',
          'Look at the subject. A lift, a printer or a set of figures cannot obey a rule, so <em>must</em> there is always a deduction. A person who can act may be under an obligation.',
          '<em>Will</em> is not a future tense. <em>That will be the courier</em>, as the bell rings, is a deduction about now, based on what always happens.'
        ],
        examples: [
          { s: 'The photocopier <b>must</b> be jammed again.', g: 'deduction: a photocopier cannot be under an obligation.' },
          { s: 'All staff <b>must</b> complete the fire training by June.', g: 'obligation: a human subject and an authority behind it.' },
          { s: 'That <b>will</b> be Nok — she always calls at seven.', g: 'will as present deduction from a familiar pattern.' },
          { s: '<s>The office lights are on, so somebody must work late.</s>', g: 'without the progressive this reads as a requirement, not a deduction.' }
        ]
      },
      items: [
        { id: 't2l1s3-1', type: 'choose', tag: 'epi-must', level: 'B2',
          stem: 'In which sentence is <em>must</em> a deduction rather than a requirement?',
          options: [
            'All candidates must register by Friday.',
            'The lift must be stuck between floors again.',
            'Visitors must wear a lanyard in the lab.',
            'You must speak to the supervisor today.'
          ],
          answer: 1,
          why: 'A deduction reports what the speaker has worked out, and only the lift sentence does that: its subject cannot obey anybody, and the complement <em>be stuck</em> is a state rather than an action. The other three all have a human subject who is being required to act, and each names the authority behind the requirement — a deadline, a building rule, an instruction from the speaker.' },

        { id: 't2l1s3-2', type: 'spot', tag: 'epi-must', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Somebody must work late', 'on the quarterly accounts again —', 'the office lights have been on', 'since midnight.'],
          answer: 0,
          fix: 'Somebody must be working late',
          why: 'Lights burning at midnight are evidence about this moment, and a deduction about this moment takes <em>must be</em> plus the <em>-ing</em> form. <em>Must work</em> with the bare infinitive pushes the sentence into the other half of the modal system: it reads as an obligation placed on somebody, which is not what the lights tell you. The remaining parts are sound — the object phrase does not touch the strength of the claim, and the present perfect after the dash supplies the evidence.' },

        { id: 't2l1s3-3', type: 'sort', tag: 'epi-must', level: 'B2',
          stem: 'Is each <em>must</em> or <em>will</em> a deduction about what is true, or a statement about what is required or arranged?',
          bins: [
            { key: 'ded', label: 'Deduction', hint: 'the speaker has worked it out from evidence' },
            { key: 'req', label: 'Requirement or arrangement', hint: 'somebody has decided it' }
          ],
          items: [
            { text: 'The server <em>must</em> be down again.', bin: 'ded' },
            { text: 'All entries <em>must</em> reach the panel by 30 April.', bin: 'req' },
            { text: 'That <em>will</em> be the courier at the door with the samples.', bin: 'ded' },
            { text: 'The results <em>will</em> be published on the department website on 12 June, as the handbook states.', bin: 'req' },
            { text: 'The queue has not moved for an hour, so the system <em>must</em> be offline.', bin: 'ded' },
            { text: 'Staff <em>must</em> report any fault to the technician on duty.', bin: 'req' }
          ],
          why: 'Two questions sort them. Has somebody decided this? A closing date, a published schedule and a reporting rule are all decisions, and they take the second bin. Or is the speaker working something out? A server that has failed before, a queue that has not moved for an hour and an arrival at the door are all evidence, and the modal in front of them is reporting a conclusion. Notice that <em>will</em> splits the same way as <em>must</em> — it is a deduction in one sentence and a published arrangement in the other, and neither of them is a tense.' },

        { id: 't2l1s3-4', type: 'choose', tag: 'epi-must', level: 'B2',
          stem: 'At eleven o\'clock, exactly as on every other Tuesday, the householder hears a van pull up outside. Without looking, she says, <em>That will be the post.</em> What is she doing?',
          options: [
            'Promising, on her own behalf, to deal with the post later.',
            'Predicting an event that has not yet begun to happen.',
            'Concluding, from a familiar pattern, what is happening now.',
            'Stating the rule that governs when the post is delivered.'
          ],
          answer: 2,
          why: '<em>Will</em> is a modal rather than a future tense, so it is free to comment on the present, and here it reports a confident conclusion drawn from a pattern the speaker already knows. It is not a prediction, because the van has already pulled up; it is not a promise, because the subject is not the speaker and nothing is being undertaken; and it is not a rule, because nobody is being required to do anything — the sentence reports the speaker\'s confidence, not the postal service\'s duties.' },

        { id: 't2l1s3-5', type: 'build', tag: 'epi-must', level: 'B2',
          stem: 'The doorbell rings at the usual hour. Put the words in order to make the householder\'s deduction.',
          tiles: ['be', 'that', 'will', 'night', 'guard', 'the'],
          solution: 'that will be the night guard',
          why: 'The modal comes second, straight after the subject, and takes a bare infinitive: <em>that will be</em>. Starting with <em>will</em> would produce a question rather than a deduction, and <em>that will the night guard be</em> strands the verb at the end, which English word order does not allow. The sentence is a present deduction from a familiar routine, which is why <em>will</em> can sit in front of an event that is already under way.' }
      ]
    }
  ],
  check: {
    id: 't2l1ck', name: 'Stage Check · How sure am I?',
    items: [
      { id: 't2l1ck-1', type: 'choose', tag: 'epi-scale', level: 'B1+',
        stem: 'Which sentence would be <strong>hardest</strong> to prove wrong?',
        options: [
          'The reservoir cannot be below forty per cent.',
          'The reservoir might be below forty per cent.',
          'The reservoir must be below forty per cent.',
          'The reservoir will be below forty per cent.'
        ],
        answer: 1,
        why: '<em>Might</em> is the weak middle rung: it claims only that one possibility is open, so almost no reading could refute it. <em>Must</em> and <em>will</em> sit near the top and would both be refuted by a single measurement above forty per cent, and <em>cannot</em> sits at the bottom and would be refuted by a single measurement below it. The ladder measures the speaker\'s exposure, not how dramatic the sentence sounds.' },

      { id: 't2l1ck-2', type: 'gap', tag: 'epi-weak', level: 'B2', blank: '(2)',
        lines: [{ who: 'Ploy', text: 'The 6.40 is still not showing on the board. Is it cancelled?' }, { who: 'Fah', text: 'It ___(1)___ be. Nothing has been announced, and they always announce a cancellation over the speakers.' }, { who: 'Ploy', text: 'Then the board ___(2)___ be broken again. That is the third time this month.' }],
        stem: 'Choose the best option for gap (2).',
        options: ['mustn\'t', 'may not', 'must', 'could not'],
        answer: 2,
        why: 'Fah has ruled cancellation out, so a broken board is the only explanation Ploy has left, and the top rung is what a speaker uses when nothing else remains. <em>May not</em> puts the negative inside the claim and would say the board is possibly working; <em>mustn\'t</em> is a prohibition and cannot be aimed at a departure board; and <em>could not</em> is the bottom rung and would rule out the one explanation still standing.' },

      { id: 't2l1ck-3', type: 'choose', tag: 'epi-must', level: 'B2',
        stem: 'In which sentence is <em>must</em> an obligation?',
        options: [
          'Every visitor must sign in at the reception desk.',
          'The printer must be out of toner again.',
          'Judging by the smell, something must be burning.',
          'The keys must be in your other coat.'
        ],
        answer: 0,
        why: 'Only the reception sentence has a human subject who is able to comply, and an institution standing behind the requirement. The other three describe situations nobody chooses: a printer cannot be ordered to have toner, something burning is a conclusion drawn from a smell, and a set of keys cannot obey an instruction about which coat to be in. Here none of the three subjects could be made to comply, so <em>must</em> can only be a deduction.' },

      { id: 't2l1ck-4', type: 'spot', tag: 'epi-scale', level: 'B1+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['This must to be a data-entry error:', 'the figures in column four', 'are three times', 'the regional average.'],
        answer: 0,
        fix: 'This must be a data-entry error:',
        why: 'A modal takes a bare infinitive, so it is <em>must be</em>, never <em>must to be</em>. The extra <em>to</em> comes from treating <em>must</em> like <em>want to</em> or <em>need to</em>, ordinary verbs that really do take a <em>to</em>-infinitive. The deduction itself is pitched correctly — figures three times the average leave little else to conclude — and the other three parts, which give that evidence, are well formed.' },

      { id: 't2l1ck-5', type: 'equiv', tag: 'epi-weak', level: 'B2',
        given: 'There is a chance that the pilot scheme is too small to show any effect.',
        stem: 'Which sentence says the same thing?',
        options: [
          'The pilot scheme must be too small to show any effect.',
          'The pilot scheme will be too small to show any effect.',
          'The pilot scheme can\'t be too small to show any effect.',
          'The pilot scheme may be too small to show any effect.'
        ],
        answer: 3,
        why: '<em>There is a chance that</em> is the weak middle rung in plain words, and <em>may</em>, <em>might</em> and <em>could</em> are its modal forms. <em>Must</em> and <em>will</em> both convert a chance into a settled conclusion, which is more than the original claims; <em>can\'t</em> denies the chance altogether and therefore says the opposite of the given sentence.' },

      { id: 't2l1ck-6', type: 'choose', tag: 'epi-scale', level: 'B2',
        stem: 'Four colleagues comment on the same missing file. Whose comment commits its speaker <strong>least</strong>?',
        options: [
          'Piyada: It can\'t be on the shared drive.',
          'Somsak: It must be on the shared drive.',
          'Tanet: It could be on the shared drive.',
          'Naree: It should be on the shared drive by now.'
        ],
        answer: 2,
        why: 'Commitment is not the same as saying yes: <em>can\'t</em> is a fully committed claim, just a negative one, so Piyada is as exposed as Somsak. <em>Must</em> and <em>can\'t</em> sit at the two ends of the ladder and close off every alternative, while <em>should</em> reports a firm expectation — <em>by now</em> shows Naree is predicting where the file is, not saying where it ought to have been filed — that she would defend. <em>Could</em> is the only comment that treats the shared drive as one possibility among several.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T2.levels.push({
  id: 't2l2', n: 2, name: 'The negative half', cefr: 'B2',
  blurb: 'The negative of a deduction is not where the pattern says it should be, and two of the negatives mean opposite things.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't2l2s1', name: 'must → can\'t: the suppletive negative', cefr: 'B2',
      theory: {
        key: 'The negative of a deduction with <em>must</em> is <em>can\'t</em>, not <em>mustn\'t</em> — the affirmative and the negative of one meaning are built out of two different words.',
        body: [
          'Start from the logic. <em>It must be raining</em> says that every situation your evidence leaves open is one in which it is raining. To deny that with the same confidence you need the opposite: <strong>no</strong> situation your evidence leaves open is one in which it is raining. That is <em>impossible</em> — and English spells it <em>can\'t</em>. So <em>He must be at home</em> becomes <em>He <strong>can\'t</strong> be at home</em>, and nothing else will do.',
          'Why not <em>mustn\'t</em>? Because the form was already taken. On the obligation side, <em>must not</em> attaches the <em>not</em> to the action — <em>you mustn\'t tell her</em> means it is required that you do not tell. Once that reading is established, <em>mustn\'t</em> can no longer be pressed into service as a deduction. <em>He mustn\'t be at home</em> is grammatical English, but it can only mean that being at home is forbidden him.',
          'Linguists call this <strong>suppletion</strong>: two unrelated words filling the two halves of one paradigm, as <em>go</em> and <em>went</em> do, or <em>good</em> and <em>better</em>. Suppletion is invisible to any learner who builds negatives by rule, because there is no rule to apply. The pair has to be stored whole, as one item: <em>must be</em> ↔ <em>can\'t be</em>. Students who add <em>-n\'t</em> mechanically will produce a prohibition every time, and will not hear the difference.',
          'The pair scales up without changing shape. <em>She must be working</em> ↔ <em>She can\'t be working</em>. <em>That must be the right file</em> ↔ <em>That can\'t be the right file</em>. In formal writing the full form <em>cannot</em> is preferred, and <em>couldn\'t</em> is available as a slightly softer variant of the same rung. Both ends of the pair are strong claims: a speaker who says <em>can\'t</em> is committing themselves exactly as far as one who says <em>must</em>.'
        ],
        simple: [
          'The opposite of <em>He must be at home</em> is <em>He can\'t be at home</em> — a different word, not <em>must</em> plus <em>not</em>.',
          '<em>He mustn\'t be at home</em> is real English, but it is a rule: somebody has forbidden him to be there. It is never a deduction.',
          'Learn the two together as one pair: <em>must be</em> ↔ <em>can\'t be</em>. In formal writing use the full form <em>cannot</em>.'
        ],
        examples: [
          { s: 'His car is gone, so he <b>must</b> be at the hospital.', g: 'top rung: the evidence leaves nothing else.' },
          { s: 'His car is still here, so he <b>can\'t</b> be at the hospital.', g: 'the negative of that deduction, built from a different word.' },
          { s: 'The readings <b>cannot</b> be reliable: the sensor was calibrated afterwards.', g: 'the full form is the formal written one.' },
          { s: '<s>He mustn\'t be at the hospital.</s>', g: 'only a prohibition; it forbids him to be there.' }
        ]
      },
      items: [
        { id: 't2l2s1-1', type: 'choose', tag: 'epi-cant', level: 'B2',
          stem: 'You are certain that the woman at the lectern is not the new dean. Which sentence says so?',
          options: [
            'She mustn\'t be the new dean.',
            'She may not be the new dean.',
            'She can\'t be the new dean.',
            'She shouldn\'t be the new dean.'
          ],
          answer: 2,
          why: 'The negative of a deduction with <em>must</em> is built from a different word altogether, and that word is <em>can\'t</em>. <em>Mustn\'t</em> can only be read as a prohibition — somebody has forbidden her to hold the post; <em>may not</em> stays on the weak middle rung and leaves open that she is the dean after all; and <em>shouldn\'t</em> reports an expectation or a piece of advice, neither of which is certainty.' },

        { id: 't2l2s1-2', type: 'spot', tag: 'epi-cant', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The archivist wants a letter posted in 1962,', 'and the stamp on this envelope is dated 2019,', 'so it mustn\'t be', 'the one she is looking for.'],
          answer: 2,
          fix: 'so it can\'t be',
          why: 'A confident deduction that something is <strong>not</strong> so is expressed by <em>can\'t</em>, never by <em>mustn\'t</em>. <em>Mustn\'t</em> belongs to the rule half of the modal system, and it would have the writer forbidding an envelope to be the right one, which is not something an envelope can be told. The other three parts are sound: the first two give two dates that cannot both belong to one letter, and the last names the claim being ruled out.' },

        { id: 't2l2s1-3', type: 'choose', tag: 'epi-cant', level: 'B2',
          stem: 'Which sentence gives the speaker\'s <strong>conclusion</strong> rather than a rule?',
          options: [
            'The bridge cannot be safe with that much traffic on it.',
            'Runners must not start before the horn.',
            'Passengers cannot board without a printed ticket.',
            'The water must not be drunk without boiling.'
          ],
          answer: 0,
          why: 'Only the first sentence draws a conclusion: nobody is being told anything, and a bridge cannot be instructed to be safe or unsafe. The other three are rules addressed to people who are able to obey them, and the passenger sentence is there to show that the modal alone will not decide it — <em>cannot</em> does prohibition just as readily as <em>must not</em> does. What marks a deduction is that the speaker is reasoning about how things are, not laying down how they must be.' },

        { id: 't2l2s1-4', type: 'equiv', tag: 'epi-cant', level: 'B2',
          given: 'There is no way that this figure is the final total.',
          stem: 'Which sentence says the same thing?',
          options: [
            'This figure may not be the final total.',
            'This figure cannot be the final total.',
            'This figure may well be the final total.',
            'This figure mustn\'t be the final total.'
          ],
          answer: 1,
          why: '<em>There is no way</em> closes off every possibility, which is precisely the work <em>cannot</em> does at the bottom of the ladder. <em>May not</em> sits on the weak middle rung and leaves open that the figure is final; <em>may well</em> drops the negative and calls it likely, pointing the sentence the other way; and <em>mustn\'t</em> turns a deduction into an instruction, forbidding the figure from being the total.' },

        { id: 't2l2s1-5', type: 'choose', tag: 'epi-cant', level: 'B2',
          stem: 'An audit has found that the sensor was calibrated <strong>after</strong> the readings were taken, so there is no reason at all to trust them. Which sentence belongs in the formal written report?',
          options: ['The readings mustn\'t be reliable.', 'The readings shouldn\'t be reliable.', 'The readings may not be reliable.', 'The readings cannot be reliable.'],
          answer: 3,
          why: 'Calibrating afterwards removes every ground for trusting the figures, so the writer is entitled to the bottom rung, and <em>cannot</em> states that in the full form a formal report uses. <em>Shouldn\'t</em> only reports an expectation, which understates a case the audit has already closed. <em>May not</em> understates it too, leaving open a question the audit has settled; and <em>mustn\'t</em> reads as a regulation forbidding reliability.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't2l2s2', name: 'may not / might not against can\'t', cefr: 'B2',
      theory: {
        key: '<em>May not</em> and <em>might not</em> mean "it is possible that NOT"; <em>can\'t</em> means "it is not possible that" — the <em>not</em> sits in a different place, and swapping them reverses the sentence.',
        body: [
          'Everything here turns on where the <em>not</em> lands. In <em>She <strong>may not</strong> be coming</em>, the negative is <strong>inside</strong> the claim: it is possible that she is not coming. In <em>She <strong>can\'t</strong> be coming</em>, the negative is <strong>outside</strong> the modal: it is not possible that she is coming. One sentence leaves the door open; the other shuts it. These are not two strengths of the same idea — they are different claims.',
          'The consequence is that <em>may not</em> is compatible with the thing being true. <em>The samples may not be contaminated</em> does not say the samples are clean; it says the question is open, and a speaker who believes the samples are clean would not choose that sentence. <em>The samples can\'t be contaminated</em> is the confident claim. A student who treats the two as interchangeable has not softened a sentence — they have inverted it.',
          'Why does English distribute the readings this way? Because <em>may</em>, <em>might</em> and <em>could</em> are already existential — they assert that one possibility is open. Negating that from the outside would say "no possibility is open", and English already has a word for that: <em>can\'t</em>. So the <em>not</em> after <em>may</em> is always pushed inside the proposition, and <em>can</em> becomes the one modal whose <em>not</em> goes outside. The class split the two jobs between two words instead of overloading one.',
          'There is a quick test, and it works every time. Try continuing the sentence with <em>… but then again, it might</em>. <em>She may not have the file — but then again, she might.</em> That is coherent, because <em>may not</em> left both answers alive. <em>She can\'t have the file — but then again, she might</em> is a contradiction, because <em>can\'t</em> had already ruled the possibility out. If the continuation works, you needed <em>may not</em>; if it does not, you needed <em>can\'t</em>.'
        ],
        simple: [
          '<em>She may not be coming</em> = perhaps she is not coming. The question is still open.',
          '<em>She can\'t be coming</em> = it is impossible that she is coming. The question is closed.',
          'Test it: can you add <em>but then again, she might</em>? If yes, you wanted <em>may not</em>. If that sounds like a contradiction, you wanted <em>can\'t</em>.'
        ],
        examples: [
          { s: 'The porter <b>may not</b> be on duty at this hour.', g: 'possible that not: he might be on duty after all.' },
          { s: 'The porter <b>cannot</b> be on duty: the lodge has been shut since Friday.', g: 'not possible that: the question is closed.' },
          { s: 'The delay <b>might not</b> be the weather — the timetable changed on Monday.', g: 'the open reading, with the alternative named.' },
          { s: '<s>The samples can\'t be contaminated, but then again they might be.</s>', g: 'the continuation contradicts the modal; may not was needed.' }
        ]
      },
      items: [
        { id: 't2l2s2-1', type: 'choose', tag: 'epi-negscope', level: 'B2',
          stem: 'Dr Arun has not answered three emails, but he often ignores his inbox for days while he is writing. Which sentence claims no more than the speaker knows?',
          options: [
            'He can\'t be reading his email this week.',
            'He may not be reading his email this week.',
            'He is certainly not reading his email this week.',
            'He mustn\'t be reading his email this week.'
          ],
          answer: 1,
          why: 'The speaker has a known habit to go on, not proof, so the sentence must keep the weak middle rung and put the <em>not</em> inside the claim: it is possible he is not reading. <em>Can\'t</em> asserts that it is impossible he is reading, which three unanswered emails do not establish. <em>Mustn\'t</em> is a prohibition and would forbid him to open his inbox, and the sentence with <em>certainly</em> drops the modal altogether and asserts the negative as a fact, which goes further than an unanswered inbox allows.' },

        { id: 't2l2s2-2', type: 'judge', tag: 'epi-negscope', level: 'B2',
          given: 'The samples may not be contaminated.',
          stem: 'The speaker is leaving open the possibility that the samples are contaminated.',
          answer: 0,
          why: '<em>May not</em> places the negative inside the claim: it is possible that the samples are not contaminated — and, equally, possible that they are. That is an open question, so the statement is true. A speaker who wanted to close the question and say the samples are clean would need <em>The samples can\'t be contaminated</em>, which rules out the contamination that <em>may not</em> leaves possible.' },

        { id: 't2l2s2-3', type: 'equiv', tag: 'epi-negscope', level: 'B2',
          given: 'It is possible that the minister is not aware of the second report.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The minister can\'t be aware of the second report.',
            'The minister must not be aware of the second report.',
            'The minister may not be aware of the second report.',
            'The minister might be aware of the second report.'
          ],
          answer: 2,
          why: 'The given sentence says <em>possible</em> and puts the <em>not</em> inside it, which is exactly the shape of <em>may not</em>. <em>Can\'t</em> moves the negative outside the modal and claims awareness is impossible, a far stronger sentence. <em>Might be aware</em> keeps the right rung but drops the negative, so it reports the other half of the same possibility. <em>Must not</em> reads as a prohibition, forbidding the minister to be informed.' },

        { id: 't2l2s2-4', type: 'choose', tag: 'epi-negscope', level: 'B2',
          stem: 'Complaints about late buses have gone up since the new timetable began, but the manager is still waiting for the first month\'s figures. Which sentence goes no further than what she knows?',
          options: [
            'The new timetable can\'t be working.',
            'The new timetable must be working.',
            'The new timetable must not be working.',
            'The new timetable may not be working.'
          ],
          answer: 3,
          why: 'The complaints point one way but the figures are not in, so the question is still open, and <em>may not</em> keeps it open: it is possible the timetable is not working. <em>Can\'t</em> points the same way but shuts the door, claiming a certainty the manager will only have when the figures arrive; <em>must</em> is just as certain in the other direction and ignores the complaints; and <em>must not</em> is not a deduction at all but an instruction addressed to a timetable, which cannot receive one.' },

        { id: 't2l2s2-5', type: 'cloze', tag: 'epi-negscope', level: 'B2',
          passage: 'The city council has published its first report on the low-emission zone. Traffic entering the centre has fallen by eleven per cent, and roadside nitrogen dioxide is down by nine. The council presents the two figures side by side, but the monitoring stations were moved in February, so the second figure ___(1)___ be comparable with last year\'s at all.\n\nThe fall in traffic is better evidence. Even so, three of the four counting points sit on roads that were resurfaced during the same period. Drivers ___(2)___ be avoiding the zone; some of them may simply be avoiding the roadworks.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['may not', 'must not', 'will not', 'cannot'],
          answer: 0,
          why: 'The clause that follows — <em>some of them may simply be avoiding the roadworks</em> — keeps the question open, so the writer needs the negative inside the claim: it is possible they are not avoiding the zone. <em>Cannot</em> and <em>will not</em> would both shut the possibility down and contradict the very next words. <em>Must not</em> is read as a prohibition and would have the council forbidding drivers to avoid a zone it built to be avoided.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't2l2s3', name: 'The whole scale in one grid', cefr: 'B2',
      theory: {
        key: 'Written out as a grid, the certainty system has a necessity half and a possibility half, and the negative of each half lands in the other half\'s territory.',
        body: [
          'Here is the whole thing on one page. Positive, from the top: <em>must</em> · <em>will</em> · <em>should</em> / <em>ought to</em> · <em>may</em> / <em>might</em> / <em>could</em>. Negative, from the bottom: <em>can\'t</em> / <em>cannot</em> · <em>won\'t</em> · <em>shouldn\'t</em> · <em>may not</em> / <em>might not</em>. Read across and the crossing is obvious: the negative of the <strong>top</strong> rung is the <strong>bottom</strong> rung, and the negative of the middle rung stays where it is, with the <em>not</em> tucked inside.',
          'Percentages are a teaching crutch, but a useful one. <em>Must</em> and <em>can\'t</em> are about ninety-five per cent confident, in opposite directions. <em>Will</em> and <em>won\'t</em> are a little below. <em>Should</em> and <em>shouldn\'t</em> sit around seventy-five. <em>May</em>, <em>might</em> and <em>could</em> hover near the middle, and so do <em>may not</em> and <em>might not</em>, because "possibly yes" and "possibly no" are the same degree of not knowing. The figures measure the speaker, never the event.',
          'Two entries repay attention. <em>Shouldn\'t</em> is the expectation-negative: <em>There shouldn\'t be much traffic before six</em> means the speaker expects there not to be, and will not be astonished if there is. And <em>won\'t</em> keeps the double life of <em>will</em> — <em>That won\'t be the courier, he came at nine</em> is a present deduction, not a refusal and not a future.',
          'The grid is for writing as much as for reading. Decide the strength before you choose the word: ask what your evidence actually rules out, pick the rung, then read the word off the grid. Then re-read the sentence once, checking that the modal cannot be taken as a rule instead of a deduction — that second pass is what stops <em>mustn\'t</em> from slipping into a negative conclusion and turning it into a prohibition.'
        ],
        simple: [
          'Positive ladder: <em>must · will · should · may / might / could</em>. Negative ladder: <em>can\'t · won\'t · shouldn\'t · may not / might not</em>.',
          'The top and the bottom are a pair: <em>must</em> ↔ <em>can\'t</em>. The middle stays in the middle: <em>may</em> ↔ <em>may not</em>. The expectation rung negates straightforwardly: <em>should</em> ↔ <em>shouldn\'t</em>.',
          'Choose the strength first, then the word. Then check that nobody could read your modal as a rule.'
        ],
        examples: [
          { s: 'The archive <b>must</b> be on the third floor.', g: 'top rung, positive.' },
          { s: 'The archive <b>can\'t</b> be on the third floor.', g: 'top rung, negative: a different word.' },
          { s: 'The archive <b>may not</b> be on the third floor.', g: 'middle rung with the not inside: possibly it is not.' },
          { s: '<s>The archive mustn\'t be on the third floor.</s>', g: 'read off the wrong column: mustn\'t is a prohibition, never a negative deduction.' }
        ]
      },
      items: [
        { id: 't2l2s3-1', type: 'sort', tag: 'epi-scale', level: 'B2',
          stem: 'Where does each sentence leave the claim <em>the shipment is in the warehouse</em>?',
          bins: [
            { key: 'yes', label: 'It is true', hint: 'the speaker commits to the positive' },
            { key: 'open', label: 'Possibly not', hint: 'the speaker leaves both answers open' },
            { key: 'no', label: 'It is not true', hint: 'the speaker commits to the negative' }
          ],
          items: [
            { text: 'The shipment <em>must</em> be in the warehouse.', bin: 'yes' },
            { text: 'The shipment <em>might not</em> be in the warehouse.', bin: 'open' },
            { text: 'The shipment <em>can\'t</em> be in the warehouse.', bin: 'no' },
            { text: 'The shipment <em>will</em> be in the warehouse by now.', bin: 'yes' },
            { text: 'The shipment <em>may not</em> be in the warehouse.', bin: 'open' },
            { text: 'The shipment <em>couldn\'t</em> be in the warehouse — the container is still at the port.', bin: 'no' }
          ],
          why: '<em>Must</em> and <em>will</em> both commit the speaker to the positive, one from evidence in front of the speaker and one from what the speaker knows about how the route runs, and both would be embarrassed by an empty warehouse. <em>Can\'t</em> and <em>couldn\'t</em> commit just as firmly to the negative — <em>couldn\'t</em> is the same rung with a little more distance in it. <em>May not</em> and <em>might not</em> are the pair that commits to nothing: they put the negative inside a possibility, so the shipment may still be there.' },

        { id: 't2l2s3-2', type: 'choose', tag: 'epi-cant', level: 'B2',
          stem: 'Fah picks up a phone from the table and says, <em>This must be Nok\'s.</em> Mai is just as sure that Fah is wrong: Nok\'s phone is in a blue case, and this one has none. What does Mai say?',
          options: ['It mustn\'t be hers.', 'It shouldn\'t be hers.', 'It doesn\'t have to be hers.', 'It can\'t be hers.'],
          answer: 3,
          why: 'Mai is as certain as Fah, only in the other direction, and the negative of a deduction with <em>must</em> is built from a different word: <em>can\'t</em>. <em>Mustn\'t</em> is the negative of the <strong>obligation</strong> <em>must</em> and would mean the phone is forbidden to be Nok\'s; <em>doesn\'t have to</em> is the other obligation negative and means "there is no requirement"; and <em>shouldn\'t</em> points the right way but only reports an expectation, which is weaker than the certainty Mai has from the missing case.' },

        { id: 't2l2s3-3', type: 'spot', tag: 'epi-scale', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The museum has been closed', 'for refurbishment since January,', 'so the photograph of crowded galleries on the leaflet', 'mustn\'t be this year\'s, whatever the caption claims.'],
          answer: 3,
          fix: 'can\'t be this year\'s, whatever the caption claims.',
          why: 'A confident negative deduction takes <em>can\'t</em>; <em>mustn\'t</em> is a prohibition and cannot be aimed at a photograph. The other three parts are correct: the first two supply the evidence, the noun phrase identifies what is being ruled out, and the closing <em>whatever the caption claims</em> concedes the caption without weakening the conclusion. Notice that the sentence would also be wrong with <em>may not</em>, which would leave open the very thing the closure rules out.' },

        { id: 't2l2s3-4', type: 'cloze', tag: 'epi-cant', level: 'B2',
          passage: 'A national survey reports that nine in ten secondary students own a smartphone, and the figure is regularly quoted as evidence that access is no longer a barrier to online homework. The survey, however, was distributed through a messaging app, so households with no phone at all ___(1)___ be represented in it.\n\nOwnership is not access, either. Here the arithmetic is not in dispute: at current prices a two-gigabyte package covers about ninety minutes of video a week, and a single homework assignment can use more than that. The ownership figure ___(2)___ be telling us who is able to do the homework. Until a survey asks about data rather than devices, the ninety per cent should be read with care.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['will', 'cannot', 'should', 'must not'],
          answer: 1,
          why: '<em>The arithmetic is not in dispute</em> announces that the writer is at the bottom rung, and <em>cannot</em> is the form English uses for a deduction that something is impossible. <em>Will</em> would turn the ownership figure into a reliable guide to who can do the homework, the opposite of the writer\'s point; <em>should</em> would expect the figure to be a fair guide, which the arithmetic has just shown it is not; and <em>must not</em> reads as a prohibition laid on a figure, which cannot be instructed.' },

        { id: 't2l2s3-5', type: 'choose', tag: 'epi-scale', level: 'B2',
          stem: 'A colleague writes: <em>The pilot data can\'t be complete, so the analysis may not be sound.</em> What is she claiming?',
          options: [
            'That the data is certainly incomplete, and the analysis is possibly unsound.',
            'That the data is certainly incomplete, and the analysis is certainly unsound.',
            'That the data is possibly incomplete, and the analysis is possibly unsound.',
            'That the data is possibly incomplete, and the analysis is certainly unsound.'
          ],
          answer: 0,
          why: 'The sentence uses two rungs deliberately. <em>Can\'t</em> is the bottom rung and states the incompleteness as something the writer will defend; <em>may not</em> is the middle rung with the negative inside it, so unsoundness is only one of the consequences that might follow. Reading both as certain overstates the second clause, reading both as possible understates the first, and reading them the wrong way round reverses the argument she is making.' }
      ]
    }
  ],
  check: {
    id: 't2l2ck', name: 'Stage Check · The negative half',
    items: [
      { id: 't2l2ck-1', type: 'choose', tag: 'epi-cant', level: 'B2',
        stem: 'Which sentence means <em>I am sure he is not in the building</em>?',
        options: [
          'He mustn\'t be in the building.',
          'He may not be in the building.',
          'He shouldn\'t be in the building.',
          'He can\'t be in the building.'
        ],
        answer: 3,
        why: 'Being sure that something is <strong>not</strong> the case is the bottom rung of the ladder, and English spells it <em>can\'t</em>. <em>Mustn\'t</em> forbids him to be there; <em>may not</em> says only that his absence is one possibility, which is compatible with his being upstairs; and <em>shouldn\'t</em> makes his presence contrary to expectation or to advice, and both of those readings allow him to be inside.' },

      { id: 't2l2ck-2', type: 'equiv', tag: 'epi-negscope', level: 'B2',
        given: 'The committee can\'t be meeting today.',
        stem: 'Which sentence says the same thing?',
        options: [
          'Perhaps the committee is not meeting today.',
          'It is impossible that the committee is meeting today.',
          'The committee is not allowed to meet today.',
          'The committee is not expected to meet today.'
        ],
        answer: 1,
        why: '<em>Can\'t</em> puts the negative outside the possibility: there is no possibility that the meeting is happening. Option 1 puts the negative inside instead and gives the much weaker <em>may not</em> reading; option 3 reads <em>can\'t</em> as permission, which is the rule half of the system; and option 4 drops the claim to the expectation rung, where the committee may perfectly well be sitting.' },

      { id: 't2l2ck-3', type: 'spot', tag: 'epi-negscope', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The reviewers have sent no comments on section three,', 'so they can\'t be reading it closely,', 'though the deadline is a week away', 'and notes may yet arrive.'],
        answer: 1,
        fix: 'so they may not be reading it closely,',
        why: 'The rest of the sentence keeps the possibility open — the deadline has not passed and notes may still come — so the writer needs the negative inside the claim. <em>Can\'t</em> rules a close reading out altogether and contradicts the two clauses that follow it. The first, third and fourth parts are all sound, and it is precisely their openness that makes the second part impossible.' },

      { id: 't2l2ck-4', type: 'judge', tag: 'epi-cant', level: 'B2',
        given: 'The laptop can\'t be in the lost property office.',
        stem: 'The speaker has looked in the lost property office.',
        answer: 2,
        why: '<em>Can\'t</em> tells you the speaker is reasoning, but not what the reasoning rests on: the speaker may have searched the office, or may know it has been shut all week. So this statement can be neither confirmed nor denied from the sentence alone.' },

      { id: 't2l2ck-5', type: 'choose', tag: 'epi-scale', level: 'B2',
        stem: 'When these are used to say how sure you are, which pair are <strong>not</strong> opposites?',
        options: [
          '<em>must be</em> / <em>can\'t be</em>',
          '<em>should be</em> / <em>shouldn\'t be</em>',
          '<em>must be</em> / <em>mustn\'t be</em>',
          '<em>will be</em> / <em>won\'t be</em>'
        ],
        answer: 2,
        why: 'In the certainty system <em>must</em> and <em>mustn\'t</em> are not a pair at all: the negative of the deduction <em>must be</em> is <em>can\'t be</em>, while <em>mustn\'t be</em> belongs to the rule system and means "is forbidden to be". The other three pairs do work — <em>must</em> against <em>can\'t</em> at the two ends of the ladder, and <em>should</em> and <em>will</em> against their own straightforward negatives.' },

      { id: 't2l2ck-6', type: 'build', tag: 'epi-cant', level: 'B2',
        stem: 'The witness described a red van, but every van in the company fleet is white. Put the words in order to make the deduction.',
        tiles: ['can\'t', 'van', 'belong', 'to', 'us', 'that'],
        solution: 'that van can\'t belong to us',
        why: 'The modal follows the subject and takes a bare infinitive, so the order is <em>that van · can\'t · belong · to us</em>. Beginning with <em>can\'t</em> would turn the deduction into a question, and putting the modal between <em>that</em> and <em>van</em> would split the noun phrase in two. <em>Can\'t</em> is the right word because the negative of a deduction with <em>must</em> is never <em>mustn\'t</em>.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T2.levels.push({
  id: 't2l3', n: 3, name: 'Certainty in progress', cefr: 'B2',
  blurb: 'Deduction about what is happening at this moment, expectation as against advice, and reading a writer\'s confidence off the page.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't2l3s1', name: 'must be doing, could be working: deduction about right now', cefr: 'B2',
      theory: {
        key: 'Putting <em>be</em> + <em>-ing</em> after a modal moves the deduction onto what is happening at this moment — and, as a side effect, closes off the obligation reading almost entirely.',
        body: [
          'The slot chain from Stage 1 does all the work: <strong>modal → be → -ing form</strong>. The modal carries the certainty; the progressive carries the "now". Because the modal itself has no tense, the progressive is the only thing in the sentence that can locate the event in time, which is why <em>must be waiting</em> is a deduction about this minute while <em>must wait</em> is not about any minute in particular.',
          'The side effect is the useful part. <em>He must work late</em> is ambiguous and leans towards a requirement: somebody has imposed it, or it is his regular pattern. <em>He must be working late</em> can only be the deduction. The reason is that obligations are imposed on actions to be performed, not on states of being mid-action — you cannot be ordered to be halfway through something. Once the progressive is in place, the rule reading has nowhere to go.',
          'Every rung takes the progressive without changing its meaning. <em>She must be testing the samples.</em> <em>The flight should be landing about now.</em> <em>They could be waiting at the wrong gate.</em> <em>He can\'t be sleeping — the light is on.</em> The modal is still only reporting confidence; the progressive is still only reporting that the event is under way. Nothing new has been added to the system.',
          'One restriction, and it catches almost everyone. <strong>State verbs do not go into the progressive</strong>, because a state is already continuous by nature. It is <em>she must know by now</em>, not <em>she must be knowing</em>; <em>that must belong to Nok</em>, not <em>must be belonging</em>; <em>they must understand</em>, not <em>must be understanding</em>. The progressive marks an activity that someone is in the middle of, and knowing, belonging and understanding are not activities.'
        ],
        simple: [
          'Modal + <em>be</em> + <em>-ing</em> = a guess about what is happening right now: <em>She must be working in the lab.</em>',
          'Without the <em>-ing</em>, the sentence often sounds like a rule instead: <em>Somebody must work late</em> reads as an order, <em>Somebody must be working late</em> as a deduction.',
          'State verbs stay simple: <em>She must know by now</em>, not <em>she must be knowing</em>. Knowing is not something you are in the middle of.'
        ],
        examples: [
          { s: 'The kitchen fan is running, so somebody <b>must be cooking</b>.', g: 'modal plus be plus -ing: a deduction about now.' },
          { s: 'They <b>could be waiting</b> at the wrong gate.', g: 'the middle rung takes the progressive too.' },
          { s: 'He <b>can\'t be sleeping</b> — the television is still on.', g: 'and so does the bottom rung.' },
          { s: '<s>She must be knowing the answer by now.</s>', g: 'know is a state; the deduction is "she must know".' }
        ]
      },
      items: [
        { id: 't2l3s1-1', type: 'choose', tag: 'epi-prog', level: 'B2',
          stem: 'The corridor smells of solder and the door of the electronics room is propped open. Which sentence is a deduction about <strong>this moment</strong>?',
          options: [
            'Somebody must repair the amplifier.',
            'Somebody must be repairing the amplifier.',
            'Somebody should repair the amplifier.',
            'Somebody can\'t be repairing the amplifier.'
          ],
          answer: 1,
          why: 'A modal followed by <em>be</em> + <em>-ing</em> reads the evidence as something under way, and a smell and an open door are evidence of exactly that. <em>Must repair</em> keeps the bare infinitive and so slides into the rule half of the system, where it sounds like an instruction; <em>can\'t be repairing</em> denies what the evidence supports; and <em>should repair</em> is advice about what somebody ought to do, not a conclusion about what is being done.' },

        { id: 't2l3s1-2', type: 'cloze', tag: 'epi-prog', level: 'B2',
          passage: 'The observatory has sent no hourly readings since two o\'clock. The data link is up, the duty log shows the technician signed in at midnight, and the building is on the mains, so the equipment ___(1)___ be switched off.\n\nThe explanation is much duller. A software update was scheduled for this afternoon, and the upload service always stops while one is running. Somebody ___(2)___ be sitting at the console at this very moment, watching a progress bar, exactly as they do at the end of every month.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['must', 'can\'t', 'need not', 'may not'],
          answer: 0,
          why: 'The paragraph has already named the explanation, endorsed it, and supplied a monthly pattern to support it, so the writer is on the top rung: <em>must be sitting</em>, a deduction about what is happening now. <em>Can\'t</em> and <em>may not</em> both pull against the explanation the paragraph has just endorsed, and <em>need not</em> would say only that someone is not necessarily there, which undercuts that explanation in the same way.' },

        { id: 't2l3s1-3', type: 'choose', tag: 'epi-prog', level: 'B2',
          stem: 'Which sentence is <strong>not</strong> possible?',
          options: [
            'The panel must be waiting for the last submission.',
            'The panel can\'t be sitting at this hour.',
            'The panel could be reading the shortlist at this moment.',
            'The panel must be knowing the result by now.'
          ],
          answer: 3,
          why: '<em>Know</em> names a state, and a state is already continuous, so it does not take the progressive: the deduction has to be <em>the panel must know the result by now</em>. The other three put genuine activities into the progressive, which is what the form is for — waiting, reading and sitting are all things that can be under way at the moment of speaking, and each of the three sits on a different rung of the ladder without any difficulty.' },

        { id: 't2l3s1-4', type: 'spot', tag: 'epi-prog', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Half the class has gone quiet,', 'so they must be understanding', 'the explanation at last,', 'which is a relief.'],
          answer: 1,
          fix: 'so they must have understood',
          why: '<em>Understand</em> is a state verb and does not normally take the progressive; for a change that has just happened, the deduction is <em>must have understood</em>. The deduction itself is well pitched — a class going quiet is reasonable evidence — and the other three parts are correct, including the relative clause that comments on the whole sentence rather than on a single noun.' },

        { id: 't2l3s1-5', type: 'build', tag: 'epi-prog', level: 'B2',
          stem: 'A colleague\'s coat is over her chair, her desk is empty, and the seminar room is booked in her name. Put the words in order to make the deduction.',
          tiles: ['be', 'she', 'must', 'a', 'seminar', 'running'],
          solution: 'she must be running a seminar',
          why: 'The chain is fixed: subject, then modal, then <em>be</em>, then the <em>-ing</em> form, and only then the object. <em>She must running a seminar</em> drops the <em>be</em> that the progressive requires, and <em>she must be run a seminar</em> keeps a bare infinitive and so loses the "right now" reading the booking is evidence for. A modal never takes <em>to</em>, so <em>must to be running</em> is not available either.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't2l3s2', name: 'should / ought to as expectation, not advice', cefr: 'B2',
      theory: {
        key: 'On the certainty ladder <em>should</em> and <em>ought to</em> report what a reliable pattern leads you to expect, and they build in the admission that the expectation may not have been met.',
        body: [
          '<em>You should rest</em> is advice. <em>They should be there by now</em> is a prediction. Same word, different half of the modal system, and no learner confuses them once the two are set side by side — the trouble only starts when <em>should</em> appears alone in a text and the reader reaches for the reading they were taught first.',
          'The mechanism is the position on the ladder. <em>Should</em> is strong enough to act on and weak enough to be wrong, which is exactly the strength of an inference from a regularity rather than from an observation. <em>The parcel should arrive on Tuesday</em> means the normal pattern says Tuesday and the speaker is not guaranteeing it. That is why <em>should</em> is the modal of timetables, forecasts, estimates and specifications: in all of them the evidence is how things usually go.',
          'Three clues separate the expectation reading from the advice reading. The subject is typically something that cannot act on advice — a parcel, the traffic, a battery, a set of results. A time adverbial is often present: <em>by now</em>, <em>by Friday</em>, <em>within the hour</em>. And the complement is frequently <em>be</em> or a progressive: <em>should be open</em>, <em>should be landing</em>. Advice, by contrast, needs an agent who can choose.',
          '<em>Ought to</em> occupies the same rung, with a faintly more formal flavour and a sense of following from the nature of things. <em>Shouldn\'t</em> is the expectation that something is <strong>not</strong> the case — <em>there shouldn\'t be much traffic before six</em> — and it keeps the same modest strength. What <em>should</em> is not is a polite <em>must</em>: climbing to <em>must</em> claims evidence that a pattern alone does not give you, which is precisely the overclaim examiners mark down.'
        ],
        simple: [
          '<em>Should</em> has two jobs. Advice: <em>You should book early.</em> Expectation: <em>The results should be online by Friday.</em>',
          'Look at the subject. A parcel, a battery or the weather cannot take advice, so <em>should</em> there is a prediction from a normal pattern.',
          'Expectation <em>should</em> admits it might be wrong. That is why it fits timetables and forecasts, and why <em>must</em> would be too strong for them.'
        ],
        examples: [
          { s: 'They left at nine, so they <b>should</b> be arriving about now.', g: 'expectation from a timetable, not advice.' },
          { s: 'You <b>should</b> apply for the scholarship before the deadline.', g: 'advice: the subject can act on it.' },
          { s: 'A good tyre <b>ought to</b> last forty thousand kilometres.', g: 'the same rung, slightly more formal.' },
          { s: '<s>They left at nine, so they must be arriving about now.</s>', g: 'a timetable supports an expectation, not a conclusion.' }
        ]
      },
      items: [
        { id: 't2l3s2-1', type: 'choose', tag: 'epi-expect', level: 'B2',
          stem: 'The 9.15 takes two hours and left on time. It is now quarter past eleven, and there has been no news since it set off. Which sentence says the speaker expects the travellers about now but allows for a delay?',
          options: [
            'They must be arriving about now.',
            'They may not be arriving about now.',
            'They can\'t be arriving about now.',
            'They should be arriving about now.'
          ],
          answer: 3,
          why: '<em>Should</em> is the expectation rung: firm enough to plan around, modest enough to survive being wrong, which is the position of someone reading a timetable rather than watching a platform. <em>Must</em> claims the evidence leaves no alternative, and a timetable is not that kind of evidence; <em>can\'t</em> denies the arrival outright; and <em>may not</em> retreats to the weak middle rung and makes the timetable count for nothing at all.' },

        { id: 't2l3s2-2', type: 'equiv', tag: 'epi-expect', level: 'B2',
          given: 'If the repairs went as planned, the pool is open again by now.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The pool should be open again by now.',
            'The pool must be open again by now.',
            'The pool may not be open again by now.',
            'The pool can\'t be open again by now.'
          ],
          answer: 0,
          why: 'The <em>if</em>-clause is the giveaway: the speaker is reasoning from a plan rather than from anything observed, and that is exactly what <em>should</em> reports. <em>Must</em> would treat the plan as already confirmed and drop the condition the original sentence insists on; <em>can\'t</em> reverses the sentence into a denial; and <em>may not</em> throws the plan away and leaves the question completely open.' },

        { id: 't2l3s2-3', type: 'choose', tag: 'epi-expect', level: 'B2',
          stem: 'In which sentence is <em>should</em> advice rather than expectation?',
          options: [
            'The parcel should reach Khon Kaen on Thursday.',
            'You should take the coastal road on a Sunday.',
            'There shouldn\'t be much traffic before six.',
            'The new filters should last about a year.'
          ],
          answer: 1,
          why: 'Advice needs somebody who can act on it, and only the second sentence has one — <em>you</em>, who can choose which road to drive. The other three have subjects that cannot obey anything: a parcel, the traffic and a set of filters. In all three, <em>should</em> can only be reporting what the speaker expects on the basis of a normal pattern.' },

        { id: 't2l3s2-4', type: 'sort', tag: 'epi-expect', level: 'B2',
          stem: 'Is each <em>should</em> or <em>ought to</em> advice, or an expectation?',
          bins: [
            { key: 'adv', label: 'Advice', hint: 'the subject can choose to act on it' },
            { key: 'exp', label: 'Expectation', hint: 'the speaker predicts from a known pattern' }
          ],
          items: [
            { text: 'You <em>should</em> book the visa appointment early.', bin: 'adv' },
            { text: 'The results <em>should</em> be on the portal by Friday.', bin: 'exp' },
            { text: 'The coach <em>ought to</em> rest the squad before the final.', bin: 'adv' },
            { text: 'That battery <em>ought to</em> run for six hours on a full charge.', bin: 'exp' },
            { text: 'Applicants <em>should</em> attach a scanned transcript.', bin: 'adv' },
            { text: 'The rain <em>should</em> clear before the ceremony.', bin: 'exp' }
          ],
          why: 'Ask one question: could the subject decide to comply? An applicant and a coach can; a portal deadline, a battery and the weather cannot. Notice that <em>ought to</em> divides in exactly the same way as <em>should</em>, which confirms that the two are one rung and not two, and that the split is between two halves of the modal system rather than between two words.' },

        { id: 't2l3s2-5', type: 'choose', tag: 'epi-expect', level: 'B2+',
          stem: 'A report states: <em>If the rains continue, the reservoir ______ be back above the safe level by August.</em> The authors want a firm projection without claiming certainty. Which fits?',
          options: ['must', 'might not', 'should', 'can\'t'],
          answer: 2,
          why: '<em>Should</em> is the rung for a projection from an established pattern: confident enough to name a month, honest enough to leave room for the weather to change. <em>Must</em> would present a forecast as a conclusion already reached, which is the overclaim examiners penalise; <em>can\'t</em> denies the recovery the sentence is predicting; and <em>might not</em> is both negative and far weaker than a steady trend warrants.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't2l3s3', name: 'Reading a writer\'s confidence', cefr: 'B2+',
      theory: {
        key: 'In report and essay prose the modal is the writer\'s commitment meter: it tells you exactly how far they will stand behind a claim, and therefore how far you may quote it back.',
        body: [
          'A piece of research contains two different things: the finding, and the writer\'s confidence in the finding. The finding is in the nouns and verbs; the confidence is in the modals. A careful reader tracks both, because a sentence can report a strong result timidly or a weak result boldly, and the difference is invisible to anyone who reads only the content words.',
          'The single most useful consequence is that <strong>a deduction is not knowledge</strong>. <em>She must have missed the train</em> tells you the speaker inferred it, which means they did not see it. <em>The results must be unreliable</em> tells you the writer reasoned to that conclusion rather than demonstrating it. This is why a modal is an admission as well as a claim, and why a writer who reaches for <em>must</em> on thin evidence is read as overreaching rather than as confident.',
          'To read a passage for stance, do three things. Find every modal and place it on the ladder. Ask what the text has actually offered in support of that rung. Then watch for a <strong>shift</strong>: a paragraph that opens with <em>may</em> and closes with <em>must</em> has either argued its way up the ladder, which is the honest version, or quietly promoted a possibility into a fact, which is not.',
          'Two further distinctions repay attention. Hedging the <strong>claim</strong> (<em>the scheme may reduce delays</em>) is not the same as hedging the <strong>data</strong> (<em>the figures may be incomplete</em>) — the first limits what is argued, the second limits what is known. And a bare assertion with no modal at all is the strongest move available: an experienced writer saves it for the things the evidence has actually established. Stage 7 takes this apart in detail; here it is enough to be able to read it.'
        ],
        simple: [
          'The modal tells you how far the writer will go. <em>Walking may improve concentration</em> is a much smaller claim than <em>Walking improves concentration</em>.',
          'A deduction is not knowledge. <em>She must have missed the train</em> means the speaker worked it out and did not see it happen.',
          'Read a paragraph twice: once for what it says, once for the modals. Watch for a writer who starts with <em>may</em> and finishes with <em>must</em>.'
        ],
        examples: [
          { s: 'The effect survives adjustment for income.', g: 'no modal at all: the strongest commitment a writer can make.' },
          { s: 'Walking <b>may</b> improve concentration directly.', g: 'the weak middle rung: one explanation among several.' },
          { s: 'A properly designed trial <b>should</b> settle the question.', g: 'an expectation about what the method will deliver.' },
          { s: '<s>Two papers reported that walking must raise attainment.</s>', g: 'the top rung on evidence that cannot support it.' }
        ]
      },
      items: [
        { id: 't2l3s3-1', type: 'read', tag: 'epi-read', level: 'B2+',
          passage: 'A three-year study of four secondary schools reports that pupils who walk to school arrive with measurably better concentration in the first lesson of the day. The effect is small but consistent, and it survives adjustment for family income and for distance from home.\n\nThe authors are careful about what follows. Walking may improve concentration directly, through exercise and daylight. It could equally be that families living close enough to walk differ from the rest in ways the study did not measure. The report is firm on one point only: the association is not an artefact of the sampling. It adds that a trial in which walking is assigned rather than chosen should settle the question.\n\nThe press coverage has been less careful. Two national newspapers reported that walking to school must raise attainment, a claim the study does not make and its design cannot support.',
          source: 'Adapted for classroom use.',
          stem: 'Which claim are the study\'s authors <strong>least</strong> willing to commit to?',
          options: [
            'That the link is not an artefact of the sampling.',
            'That the effect survives adjustment for income and distance.',
            'That walking to school improves concentration directly.',
            'That a trial with assigned walking would settle the question.'
          ],
          answer: 2,
          why: 'The direct-cause claim is the only one placed on the weak middle rung, with <em>may</em>, and the authors immediately set a rival explanation beside it with <em>could</em> — that is the language of two possibilities between which they are not choosing. The sampling claim is the one point the report states flatly, the trial is only predicted, with <em>should</em>, and the survival of the effect after adjustment is likewise asserted with no modal at all, which is the firmest commitment a writer can make.' },

        { id: 't2l3s3-2', type: 'choose', tag: 'epi-read', level: 'B2+',
          stem: 'A news report says: <em>Ministers say the scheme will cut waiting times; independent analysts say it may cut them.</em> What is the difference between the two positions?',
          options: [
            'The ministers are talking about a longer period than the analysts.',
            'The ministers are making a promise and the analysts are granting permission.',
            'The analysts believe the scheme will not work.',
            'The ministers commit themselves to an outcome the analysts treat as one possibility.'
          ],
          answer: 3,
          why: 'Both halves describe the same scheme and the same outcome; only the rung changes. <em>Will</em> sits near the top of the ladder and commits its speaker to the result, while <em>may</em> is the weak middle rung and claims only that the result is among the possibilities. Nothing in either clause concerns a time period, the analysts have denied nothing, and neither modal is doing permission work — both are reporting confidence.' },

        { id: 't2l3s3-3', type: 'judge', tag: 'epi-read', level: 'B2+',
          given: 'She must have missed the train.',
          stem: 'The speaker is presenting a conclusion, not reporting something they saw happen.',
          answer: 0,
          why: 'True. <em>Must have</em> marks a conclusion drawn from evidence: the speaker is reasoning, not reporting what they saw. A speaker who had watched it happen would say so plainly: <em>She missed the train.</em> The modal tells you the evidence leaves no other explanation, and in the same breath tells you that an explanation is what you are being given.' },

        { id: 't2l3s3-4', type: 'choose', tag: 'epi-read', level: 'B2+',
          stem: 'Which sentence tells you the writer worked the fact out rather than finding it recorded?',
          options: [
            'The vault must be older than the rest of the abbey.',
            'The vault is older than the rest of the abbey.',
            'The vault was built before the rest of the abbey.',
            'The vault predates the rest of the abbey.'
          ],
          answer: 0,
          why: 'A modal is a report on the writer\'s evidence, and <em>must</em> says the conclusion was worked out rather than looked up. A vault cannot be ordered to be older than anything, so there is no second reading here: the sentence can only be a deduction, and it quietly admits that the writer has no document. The other three make the same point about the vault as plain statements with no modal, which is what a writer produces when the date is on record.' },

        { id: 't2l3s3-5', type: 'order', tag: 'epi-read', level: 'B2+',
          stem: 'Put the four sentences in the order that makes a coherent paragraph.',
          items: [
            'The department has recorded a twelve per cent fall in first-year withdrawals since the mentoring scheme began.',
            'Two changes were introduced in the same term, however, so the scheme may not be responsible for all of it.',
            'The second of them was a redesigned timetable, which put small-group teaching in the opening week.',
            'Until the two are separated, the fall cannot be attributed to mentoring alone.'
          ],
          why: 'The paragraph moves from fact to caution: a flat assertion of the finding, a hedge with <em>may not</em> that opens a rival explanation, the naming of that explanation, and a closing <em>cannot be attributed</em> that states firmly what the evidence does <strong>not</strong> allow. The finding has to come first because the other three refer back to it; the sentence beginning <em>The second of them</em> can only follow the one that announces two changes; and the <em>until</em> sentence draws the conclusion, so nothing can follow it.' }
      ]
    }
  ],
  check: {
    id: 't2l3ck', name: 'Stage Check · Certainty in progress',
    items: [
      { id: 't2l3ck-1', type: 'read', tag: 'epi-read', level: 'B2+',
        passage: 'The national grid operator has published its winter outlook. Demand at the January peak is expected to be slightly lower than last year, and the margin between supply and demand should be comfortable in all but the coldest scenarios.\n\nThe document is less relaxed about a second risk. If a cold still week coincides with an outage at one of the two largest plants, the margin could fall close to zero for several hours. The operator stresses that this combination is unlikely, but notes that it cannot be ruled out, and that the emergency measures available in that case have never been tested at scale.\n\nNothing in the outlook says that supply will fail. It says that the system is expected to hold, and that the one scenario in which it might not is the one nobody has rehearsed.',
        source: 'Adapted from a system operator\'s winter outlook.',
        stem: 'What is the operator\'s position on the cold-week-plus-outage scenario?',
        options: [
          'It will not happen this winter.',
          'It is expected to happen this winter.',
          'It is unlikely, but it cannot be ruled out.',
          'It has already happened once this winter.'
        ],
        answer: 2,
        why: 'The passage calls the combination <em>unlikely</em> and then says it <em>cannot be ruled out</em> — a weak middle-rung possibility that the operator explicitly declines to push down to the bottom rung. Option 1 does precisely what the operator refuses to do; option 2 promotes a possibility to an expectation, which the word <em>unlikely</em> forbids; and option 4 invents a past event, where the text says only that the emergency measures have never been tested.' },

      { id: 't2l3ck-2', type: 'choose', tag: 'epi-prog', level: 'B2',
        stem: 'The back office has been locked all morning and the auditors are not at their desks. Which sentence is a deduction about what is happening right now?',
        options: [
          'The auditors must check every invoice in the back office.',
          'The auditors must be checking the invoices in the back office.',
          'The auditors should check the invoices before Friday.',
          'The auditors will check the invoices in the back office.'
        ],
        answer: 1,
        why: 'Only the second sentence puts <em>be</em> + <em>-ing</em> after the modal, which is the form that reads the locked door and the empty desks as evidence of something under way. The fourth is just as confident but, with a bare infinitive, <em>will check</em> is about a later time, not about this morning. The first and third are a requirement and a piece of advice aimed at people who can act on them.' },

      { id: 't2l3ck-3', type: 'gap', tag: 'epi-expect', level: 'B2', blank: '(2)',
        lines: [
          { who: 'Malee', text: 'It was dispatched on Monday and it is a two-day service, so it ___(1)___ be here by now.' },
          { who: 'Sarawut', text: 'It ___(2)___ be stuck at the depot again. The tracking page has not moved since Tuesday morning.' }
        ],
        stem: 'Choose the best option for gap (2).',
        options: ['mustn\'t', 'should', 'must', 'need not'],
        answer: 2,
        why: 'A tracking page frozen for days is hard evidence, and it leaves the depot as the only explanation, so Sarawut takes the top rung. <em>Should</em> is the expectation rung, which is all the two-day service on its own would support, and choosing it would step back from the evidence Sarawut is actually looking at; <em>mustn\'t</em> is a prohibition, which cannot be aimed at a parcel; and <em>need not</em> denies a requirement and has no place on the certainty ladder.' },

      { id: 't2l3ck-4', type: 'choose', tag: 'epi-expect', level: 'B2+',
        stem: 'A club\'s membership has risen for three years in a row. Which sentence in the draft report should a careful writer change?',
        options: [
          'Given the three-year rise, membership must pass ten thousand next year.',
          'On current projections, membership should pass ten thousand next year.',
          'If the trend holds, membership may pass ten thousand next year.',
          'Membership looks likely to pass ten thousand next year.'
        ],
        answer: 0,
        why: 'A three-year trend supports an expectation, not a conclusion: <em>must</em> claims that no other outcome is possible, and a trend can always break. The other three are all pitched at what the same evidence allows — <em>should</em> for a firm projection, <em>may</em> for a conditional one, and <em>looks likely</em> for a leaning the writer will not put a modal behind — and none of them pretends the trend cannot break.' },

      { id: 't2l3ck-5', type: 'spot', tag: 'epi-prog', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The network has been at full capacity since nine', 'and the shared drive is crawling,', 'so the backup job must still run', 'in the background.'],
        answer: 2,
        fix: 'so the backup job must still be running',
        why: 'A deduction about something under way needs <em>be</em> plus the <em>-ing</em> form after the modal. <em>Must still run</em> keeps the bare infinitive, and a bare infinitive after <em>must</em> reads as a requirement laid on the backup job rather than as a conclusion drawn from the traffic — it also loses the "right now" that a saturated network is evidence for. <em>Still</em> is already in its proper place, between the modal and the verb phrase. The first, second and fourth parts are all correct.' },

      { id: 't2l3ck-6', type: 'order', tag: 'epi-read', level: 'B2+',
        stem: 'Put the four sentences in the order that makes a coherent paragraph.',
        items: [
          'The clinic has reported a sharp rise in appointments missed without notice.',
          'Staff suspect the new online booking system, which sends only one reminder.',
          'The rise may simply reflect the much larger number of patients now registered, however, rather than any failure of the reminders.',
          'Until the figures are expressed as a percentage, no cause can be identified.'
        ],
        why: 'The paragraph states the observation, offers a suspected cause, raises a rival explanation on the weak middle rung with <em>may</em>, and closes with a firm statement of what the evidence will not support: <em>no cause can be identified</em>. The observation must come first because everything else refers back to it; <em>however</em> and <em>the reminders</em> in the third sentence mark it as a reply to the suspicion in the second; and the <em>until</em> sentence weighs both explanations, so it can only close.' }
    ]
  }
});

TOPICS.push(T2);
