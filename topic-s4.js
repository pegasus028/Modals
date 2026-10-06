/* ===========================================================================
   STAGE 04 — Ability and Willingness
   Installs dynamic modality: capacity, willingness and characteristic
   behaviour — and the aspectual reason why "could" cannot report one
   successful occasion.
   =========================================================================== */

var T4 = {
  id: 't4', n: 4, code: 'Stage 04', art: 'signal',
  name: 'Ability and Willingness',
  cefr: 'B2–B2+',
  blurb: 'Could is not simply the past of can, and the gap between them is where a single successful action lives.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T4.levels.push({
  id: 't4l1', n: 1, name: 'Ability across time', cefr: 'B2',
  blurb: 'What the subject makes possible — now, then, and in the slots where no modal can stand.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't4l1s1', name: 'can / could / be able to', cefr: 'B2',
      theory: {
        key: '<em>Can</em> states a capacity that holds now, <em>could</em> one that held across a stretch of past time, and <em>be able to</em> exists to fill the slots where no modal is grammatically possible.',
        body: [
          'This stage deals with the third of the three domains in the system. Stage 2 asked what the speaker\'s <strong>evidence</strong> allows; Stage 3 asked what the <strong>rules</strong> allow. <strong>Dynamic</strong> modality asks what the <strong>subject or the circumstances</strong> allow. <em>Nong can read a circuit diagram</em> is not a claim about my evidence and not a claim about permission — it is a fact about Nong.',
          'Present capacity takes <em>can</em>; past capacity takes <em>could</em>. The pairing works because both forms name a <strong>power that holds over a period</strong>, not an event that happened: <em>I can sight-read</em> and <em>I could sight-read at twelve</em> both describe what someone is or was equipped to do, and neither tells you that any music was ever played. Hold on to that, because in Level 2 it is the whole argument.',
          '<em>Be able to</em> is not a smarter synonym for <em>can</em>. It is the repair kit from Stage 1. A modal has no infinitive, no participle and no <em>-ing</em> form, and cannot follow another modal, so in any slot of that kind English has no choice at all: <em>will be able to</em>, <em>has been able to</em>, <em>to be able to</em>, <em>being able to</em>. Module 1.2 is entirely about those slots.',
          'Where both are legal, they are not equal. <em>Can</em> is the ordinary, unmarked choice; <em>am able to</em> is heavier, more formal, and often hints that the capacity is limited or hard-won — which is why <em>Only two laboratories are able to run the test</em> reads well and <em>I am able to swim</em> reads oddly. Reach for the periphrasis when the grammar forces it, not to sound advanced.'
        ],
        simple: [
          '<em>Can</em> = able now. <em>Could</em> = was able, over a period in the past. Both describe a power someone has, not something that happened.',
          '<em>Be able to</em> is used where a modal is impossible: after <em>will</em>, after <em>have</em>, after <em>to</em>, and as an <em>-ing</em> word. <em>She will be able to help</em>, not <s>she will can help</s>.',
          'When <em>can</em> is possible, use <em>can</em>. <em>I am able to help</em> is correct but heavy; <em>I can help</em> is normal English.'
        ],
        examples: [
          { s: 'Nong <b>can</b> read a circuit diagram without help.', g: 'present capacity — a fact about her, not about permission.' },
          { s: 'She <b>could</b> read a circuit diagram before she left school.', g: 'past capacity, held across a stretch of time.' },
          { s: '<s>She will can read the report by Friday.</s>', g: 'a modal cannot follow another modal; use will be able to.' },
          { s: 'Only a handful of laboratories <b>are able to</b> run the test.', g: 'the periphrasis is heavier and suits a limited, hard-won capacity.' }
        ]
      },
      items: [
        { id: 't4l1s1-1', type: 'choose', tag: 'dyn-ability', level: 'B2',
          stem: 'In which sentence does <em>can</em> report an <strong>ability</strong> rather than permission or possibility?',
          options: [
            'Library members <em>can</em> borrow six books at a time.',
            'Our senior technician <em>can</em> rebuild the gearbox in an afternoon.',
            'Storms <em>can</em> close the coast road for days on end in October.',
            'You <em>can</em> take photographs anywhere except in the manuscript room.'
          ],
          answer: 1,
          why: 'Only the second sentence describes what the subject is <strong>equipped to do</strong>: the technician has the skill. The first and fourth are permission — someone in authority has allowed it, and you could replace <em>can</em> with <em>are allowed to</em>. The third is general possibility: storms have no capacity, and the sentence only says that closures of that length happen from time to time.' },

        { id: 't4l1s1-2', type: 'sort', tag: 'dyn-ability', level: 'B2',
          stem: 'Each sentence uses <em>can</em>. Put each one in the box for the job it is doing.',
          bins: [
            { key: 'abl', label: 'Ability', hint: 'what the subject is equipped to do' },
            { key: 'per', label: 'Permission', hint: 'what someone in authority allows' }
          ],
          items: [
            { text: 'A trained dog <b>can</b> find a survivor under two metres of rubble.', bin: 'abl' },
            { text: 'Students <b>can</b> use the language lab after four o\'clock.', bin: 'per' },
            { text: 'The new turbine <b>can</b> run on either diesel or biogas.', bin: 'abl' },
            { text: 'Visitors <b>can</b> photograph the murals as long as there is no flash.', bin: 'per' },
            { text: 'She <b>can</b> hold a conversation in three southern dialects.', bin: 'abl' },
            { text: 'You <b>can</b> park in the staff bays during the school holidays.', bin: 'per' }
          ],
          why: 'The test is to try the paraphrase. <em>Is allowed to</em> fits the permission cards and nothing else; <em>knows how to</em> or <em>is built to</em> fits the ability cards. Notice that a non-human subject can still have an ability — the turbine has a genuine capacity — so it is the meaning, not the subject, that decides.' },

        { id: 't4l1s1-3', type: 'choose', tag: 'dyn-ability', level: 'B2',
          stem: 'Until the accident, my grandfather ______ a complete set of shadow puppets in a week.',
          options: ['can carve', 'could carve', 'has been able to carve', 'was able carve'],
          answer: 1,
          why: '<em>Until the accident</em> sets up a capacity that held for years and then stopped, which is exactly what past <em>could</em> reports. <em>Can carve</em> is present and contradicts <em>until</em>. <em>Has been able to carve</em> is the right repair form in the wrong time: a present perfect runs up to now, but this skill ended with the accident. <em>Was able carve</em> drops the <em>to</em> that <em>be able to</em> always needs.' },

        { id: 't4l1s1-4', type: 'spot', tag: 'dyn-ability', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Only two of the district clinics', 'keep a doctor on duty overnight,', 'so after midnight', 'only they are able treat snakebite.'],
          answer: 3,
          fix: 'only they are able to treat snakebite.',
          why: '<em>Be able to</em> is an ordinary adjective phrase plus an infinitive, so the <em>to</em> belongs to it and cannot be dropped — unlike a true modal, which takes a bare infinitive. The other three parts are sound: the quantifier phrase agrees with its plural verb, and the time phrase correctly sets up the result clause.' },

        { id: 't4l1s1-5', type: 'equiv', tag: 'dyn-ability', level: 'B2',
          given: 'Hardly anyone in the department knows how to operate the old spectrometer.',
          stem: 'Which sentence says the same thing?',
          options: [
            'Hardly anyone in the department can operate the old spectrometer.',
            'Hardly anyone in the department may operate the old spectrometer.',
            'Hardly anyone in the department is allowed to operate the old spectrometer.',
            'Hardly anyone in the department will operate the old spectrometer.'
          ],
          answer: 0,
          why: '<em>Knows how to</em> is skill, and present skill is <em>can</em>. <em>May</em> and <em>is allowed to</em> both shift the sentence into permission, so they say the department has a rule about the machine rather than that nobody has the training. <em>Will</em> is the near miss: it is also about the subject, but about willingness, so it says people refuse to touch the machine, not that they lack the skill.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't4l1s2', name: 'Where a modal cannot go: will be able to, has been able to', cefr: 'B2',
      theory: {
        key: '<em>Can</em> has no infinitive, no participle and no <em>-ing</em> form, so every slot that demands one takes <em>be able to</em> instead — which is the only reason <em>will be able to</em>, <em>has been able to</em> and <em>being able to</em> exist.',
        body: [
          'Stage 1 established the mechanism: a modal is an <strong>operator</strong>, not an ordinary verb, and operators are finite-only. There is no <em>to can</em>, no <em>canned</em>, no <em>canning</em>, and no stacking. English needed some way of expressing ability in those positions, so it grew a phrase — <em>be able to</em> — built out of a verb that inflects perfectly freely.',
          'Four slots force the repair, and they are worth recognising on sight. <strong>After another modal</strong>: <em>will be able to</em>, <em>might be able to</em>, <em>should be able to</em>. <strong>After <em>have</em> in a perfect</strong>: <em>has been able to</em>, <em>had been able to</em>. <strong>After <em>to</em></strong>: <em>hopes to be able to</em>, <em>wants to be able to</em>. <strong>As an <em>-ing</em> form</strong>, whether as a subject or after a preposition: <em>Being able to drive is now essential</em>, <em>without being able to explain why</em>.',
          'Because <em>be able to</em> is a real verb phrase, all the tense and agreement work happens on <em>be</em>, and <em>able to</em> never changes: <em>am / is / are able to</em>, <em>was / were able to</em>, <em>will be able to</em>, <em>has / have been able to</em>, <em>had been able to</em>, <em>to be able to</em>, <em>being able to</em>. Learn the paradigm of <em>be</em> and you already have all of them.',
          'The one trap is over-repairing. The moment a student discovers <em>be able to</em>, it starts appearing where a plain modal was perfectly legal. <em>I will be able to send it tomorrow</em> is required, because <em>will can</em> is impossible. <em>I am able to send it now</em> is grammatical but stiff, and <em>I can send it now</em> is what an English speaker writes. Use the repair where the slot forces it, and not otherwise.'
        ],
        simple: [
          'You cannot put a modal after <em>will</em>, after <em>have</em>, after <em>to</em>, or in the <em>-ing</em> form. In all four places, use <em>be able to</em>.',
          '<em>She will be able to help</em> · <em>They have been able to reach us</em> · <em>I hope to be able to come</em> · <em>Being able to swim is a condition of the job</em>.',
          'Only <em>be</em> changes; <em>able to</em> always stays the same. And when <em>can</em> is allowed, use <em>can</em> — the longer form is not better English.'
        ],
        examples: [
          { s: 'By June the team <b>will be able to</b> test the prototype outdoors.', g: 'after will — a second modal is impossible.' },
          { s: 'Since the bypass opened, ambulances <b>have been able to</b> reach the hospital in nine minutes.', g: 'after have — a modal has no participle.' },
          { s: '<s>She hopes to can finish the thesis this term.</s>', g: 'there is no infinitive to can; use to be able to.' },
          { s: '<b>Being able to</b> read a balance sheet is now expected of every trainee.', g: 'a subject needs an -ing form, and a modal has none.' }
        ]
      },
      items: [
        { id: 't4l1s2-1', type: 'choose', tag: 'dyn-repair', level: 'B2',
          stem: 'By the end of the training year, every nurse on the ward ______ a cannula unsupervised.',
          options: ['will can insert', 'is able insert', 'will be able to insert', 'can inserting'],
          answer: 2,
          why: '<em>By the end of the training year</em> points forward, so the sentence needs <em>will</em> — and <em>will</em> cannot be followed by another modal, so the ability has to come through <em>be able to</em>. <em>Will can insert</em> is exactly the stacking English forbids. <em>Is able insert</em> drops the <em>to</em> that the phrase requires. <em>Can inserting</em> gives a modal an <em>-ing</em> complement, where a bare infinitive is the only possibility.' },

        { id: 't4l1s2-2', type: 'spot', tag: 'dyn-repair', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Since the new scanner arrived,', 'the laboratory has could process', 'twice as many samples a day', 'as it did at this time last year.'],
          answer: 1,
          fix: 'the laboratory has been able to process',
          why: '<em>Has</em> needs a past participle after it, and a modal has none — there is no form <em>could</em> can take in that slot. The repair is <em>has been able to</em>, where <em>been</em> is the participle the perfect requires. The other three parts are correct: the <em>since</em> clause justifies the perfect, and the comparison is properly built.' },

        { id: 't4l1s2-3', type: 'choose', tag: 'dyn-repair', level: 'B2',
          stem: '______ a second language is now a condition of promotion in the ministry.',
          options: ['Can speak', 'To can speak', 'Being able to speak', 'Could speaking'],
          answer: 2,
          why: 'The subject slot needs an <em>-ing</em> form, and a modal has none, so the repair supplies one: <em>being able to</em>. <em>Can speak</em> is a finite verb phrase and cannot be a subject. <em>To can speak</em> invents an infinitive that does not exist. <em>Could speaking</em> breaks the other rule as well, since a modal is followed by a bare infinitive, never by <em>-ing</em>.' },

        { id: 't4l1s2-4', type: 'build', tag: 'dyn-repair', level: 'B2',
          stem: 'Put the words in order. The sentence reports a hope about a future ability.',
          tiles: ['we', 'hope', 'to', 'be', 'able', 'to', 'reopen', 'the bridge', 'before the festival'],
          solution: 'we hope to be able to reopen the bridge before the festival',
          alt: ['before the festival we hope to be able to reopen the bridge'],
          why: '<em>Hope</em> takes a <em>to</em>-infinitive, and a modal cannot appear in an infinitive, so the ability has to be expressed as <em>to be able to</em>. Notice the two separate <em>to</em>s: the first belongs to <em>hope</em>, the second belongs to <em>able</em>. Dropping either one is the commonest version of this mistake. The time phrase reads equally well at the front, so either position is accepted.' },

        { id: 't4l1s2-5', type: 'cloze', tag: 'dyn-repair', level: 'B2',
          passage: 'Ten years ago the district flood office had a single rain gauge on the roof, and staff ___(1)___ do little more than telephone the villages they could reach.\n\nSince the sensor network was installed along the upper river, the office ___(2)___ eleven flood warnings, each of them about ninety minutes before the water arrived. Engineers say that by the next rainy season they ___(3)___ extend the same service to the side valleys.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['can issue', 'is able issue', 'could have issued', 'has been able to issue'],
          answer: 3,
          why: 'A <em>since</em> clause with a tally of warnings already given demands a present perfect, and the perfect needs a participle that a modal cannot supply — hence <em>has been able to</em>. <em>Can issue</em> is present and cannot count up occasions that are over, as <em>arrived</em> shows. <em>Could have issued</em> either says the warnings were possible and never given or only guesses that they were given, and the paragraph reports them as fact. <em>Is able issue</em> loses the <em>to</em>.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't4l1s3', name: 'Capacity of things and circumstances', cefr: 'B2+',
      theory: {
        key: '<em>Can</em> also reports what a thing is built to do and what the world sometimes throws up — and that second use, <em>Accidents can happen</em>, is a statement about how often, not about skill or permission.',
        body: [
          'Ability does not require a person. <em>This machine can lift two tonnes</em>, <em>the alloy can withstand nine hundred degrees</em>, <em>the data can be exported as a spreadsheet</em> — all three attribute a capacity to a non-human subject, and the last shows how naturally this use combines with the passive. It is the ordinary way technical and academic English describes what equipment and materials are good for.',
          'Alongside it sits a reading that is genuinely different: <strong>general possibility</strong>. <em>Accidents can happen.</em> <em>Winters in the north can be severe.</em> <em>Delays on the eastern line can last for hours.</em> Here the subject has no capacity at all. Accidents are not skilled at happening. The sentence says that <strong>instances of this kind occur from time to time</strong>, and it is a claim about frequency, not about power.',
          'The test is a substitution. Replace <em>can</em> with <em>sometimes</em> and the present simple. <em>Winters in the north are sometimes severe</em> works, so that <em>can</em> is general possibility. <em>This machine sometimes lifts two tonnes</em> does not mean what the original meant, so that <em>can</em> is capacity. Students who have been taught that <em>can</em> means "ability or permission" mistake this third use for one of the other two and lose the meaning of the sentence.',
          'Two boundaries are worth marking. General possibility belongs to a class as a whole, so it lives with generic and plural subjects and sounds wrong with one named occasion. And it is not the epistemic <em>could</em> or <em>may</em> of Stage 2: <em>Winters here can be severe</em> is a general truth about winters, while <em>This winter could be severe</em> is a guess about one particular winter. Swapping them turns a fact into a forecast.'
        ],
        simple: [
          'Things have abilities too: <em>The crane can lift forty tonnes</em>, <em>The app can work without a signal</em>.',
          'A different meaning: <em>Accidents can happen</em>, <em>Power cuts can last for hours</em>. This means "sometimes they do". It is not ability and it is not permission.',
          'Test it: put <em>sometimes</em> in place of <em>can</em>. If the meaning survives, it is general possibility. If it does not, it is capacity.'
        ],
        examples: [
          { s: 'The new press <b>can</b> print four hundred sheets a minute.', g: 'capacity of a thing — what it is built to do.' },
          { s: 'Accidents <b>can</b> happen even on a well-supervised site.', g: 'general possibility — sometimes they do.' },
          { s: 'Winters in the north <b>can be</b> severe.', g: 'substitute sometimes: winters are sometimes severe.' },
          { s: '<s>Winter can be severe this year.</s>', g: 'one named winter is a forecast, so it needs could or may.' }
        ]
      },
      items: [
        { id: 't4l1s3-1', type: 'choose', tag: 'dyn-general', level: 'B2+',
          stem: 'In which sentence does <em>can</em> mean "sometimes does", rather than naming a capacity?',
          options: [
            'The harbour crane <em>can</em> lift a loaded container in one movement.',
            'Queues at the border <em>can</em> stretch back four kilometres in the festival week.',
            'The translation software <em>can</em> handle handwritten forms.',
            'Her hearing aid <em>can</em> connect straight to the television.'
          ],
          answer: 1,
          why: 'Only the second survives the substitution test: <em>queues sometimes stretch back four kilometres</em> means what the original means. The other three describe what a machine or a device is built to do, and <em>the crane sometimes lifts a loaded container</em> would be a very odd thing to say about a crane. Queues have no capacity; they are simply a thing that happens, to a greater or lesser extent.' },

        { id: 't4l1s3-2', type: 'sort', tag: 'dyn-general', level: 'B2+',
          stem: 'Each sentence uses <em>can</em>. Put each one in the box for the reading it has.',
          bins: [
            { key: 'cap', label: 'Capacity of a thing', hint: 'what it is built or able to do' },
            { key: 'gen', label: 'General possibility', hint: 'it sometimes happens' },
            { key: 'per', label: 'Permission', hint: 'someone allows it' }
          ],
          items: [
            { text: 'The crane <b>can</b> lift a forty-foot container.', bin: 'cap' },
            { text: 'Power cuts <b>can</b> last for several hours in the wet season.', bin: 'gen' },
            { text: 'Residents <b>can</b> collect a free water butt from the depot.', bin: 'per' },
            { text: 'This alloy <b>can</b> withstand nine hundred degrees.', bin: 'cap' },
            { text: 'Mistakes of this kind <b>can</b> go unnoticed for years.', bin: 'gen' },
            { text: 'Staff <b>can</b> book the minibus up to a week in advance.', bin: 'per' }
          ],
          why: 'Three different questions sort these. Is it something the subject is built to do? Capacity. Does <em>sometimes</em> replace it? General possibility. Does <em>are allowed to</em> replace it? Permission. The permission cards are the only ones with a human authority behind them, and the general-possibility cards are the only ones whose subject is a kind of event rather than a thing.' },

        { id: 't4l1s3-3', type: 'choose', tag: 'dyn-general', level: 'B2+',
          stem: 'Which paraphrase of <em>Delays on the eastern line can last for hours</em> is accurate?',
          options: [
            'Delays on the eastern line are sometimes several hours long.',
            'Delays on the eastern line are permitted to last for hours.',
            'Delays on the eastern line are likely to last for hours today.',
            'Delays on the eastern line have the power to last for hours.'
          ],
          answer: 0,
          why: 'General possibility is a claim about frequency, so <em>sometimes</em> is the right paraphrase. The second reads <em>can</em> as permission, which would mean some authority has authorised the delays. The third turns a standing fact about the line into a prediction about one day, which is the epistemic reading and a different sentence. The fourth takes the capacity reading literally and attributes a power to a delay.' },

        { id: 't4l1s3-4', type: 'judge', tag: 'dyn-general', level: 'B2+',
          given: 'Rip currents can form very quickly along this stretch of coast.',
          stem: 'The speaker is saying that rip currents are forming at this moment.',
          answer: 1,
          why: 'False. This is general possibility: rip currents sometimes form quickly here, which is a warning about what the coast is like, not a report on the water today. A sentence about this moment would need <em>are forming</em>, or, if it were a guess, <em>may be forming</em>. The general-possibility <em>can</em> deliberately says nothing about any particular occasion.' },

        { id: 't4l1s3-5', type: 'choose', tag: 'dyn-general', level: 'B2+',
          stem: 'A research report finds that lithium cells occasionally vent when they are overcharged. Which sentence states that finding as a general property?',
          options: [
            'Lithium cells will vent when they are overcharged.',
            'Lithium cells must vent when they are overcharged.',
            'Lithium cells can vent when they are overcharged.',
            'Lithium cells could have vented when they were overcharged.'
          ],
          answer: 2,
          why: '<em>Occasionally</em> is exactly what general-possibility <em>can</em> encodes, so the third sentence reports the finding at the strength the evidence supports. <em>Will</em> claims an invariable property — every overcharged cell, every time — which overstates it. <em>Must</em> is a deduction or an obligation, neither of which a materials report is making. <em>Could have vented</em> is about particular cells on a past occasion, and only says venting was possible then — not a general property.' }
      ]
    }
  ],

  check: {
    id: 't4l1ck', name: 'Stage Check · Ability across time',
    items: [
      { id: 't4l1ck-1', type: 'choose', tag: 'dyn-repair', level: 'B2',
        stem: 'The ministry hopes ______ the full figures before the end of the quarter.',
        options: ['to can publish', 'can publish', 'be able to publish', 'to be able to publish'],
        answer: 3,
        why: '<em>Hope</em> takes a <em>to</em>-infinitive, and a modal has no infinitive, so the ability must be carried by <em>to be able to</em>. <em>Be able to publish</em> is the near miss: the right repair, but with the first <em>to</em> — the one <em>hope</em> needs — dropped. <em>To can publish</em> invents the missing form. <em>Can publish</em> is finite and cannot follow <em>hopes</em> at all.' },

      { id: 't4l1ck-2', type: 'equiv', tag: 'dyn-ability', level: 'B2',
        given: 'Nobody on the night shift knows how to operate the gantry crane.',
        stem: 'Which sentence says the same thing?',
        options: [
          'Nobody on the night shift may operate the gantry crane.',
          'Nobody on the night shift could have operated the gantry crane.',
          'Nobody on the night shift can operate the gantry crane.',
          'Nobody on the night shift is permitted to operate the gantry crane.'
        ],
        answer: 2,
        why: 'Present skill is <em>can</em>, and <em>knows how to</em> is skill. <em>May</em> and <em>is permitted to</em> both convert the sentence into a rule about who is authorised, which is a different claim — a trained operator could still be forbidden. <em>Could have operated</em> keeps the idea of skill but moves it to some earlier occasion; the original is about the shift as it is staffed now.' },

      { id: 't4l1ck-3', type: 'cloze', tag: 'dyn-general', level: 'B2+',
        passage: 'Concrete is a forgiving material, but it ___(1)___ crack when a slab is poured in the middle of the day and the surface dries faster than the core.\n\nModern additives ___(2)___ slow the drying enough to prevent this, and on large sites the mix is monitored continuously. Even so, engineers say that on a still afternoon in April the difference in temperature ___(3)___ be enough to undo an hour of careful work.',
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['can', 'must', 'may not', 'is able to'],
        answer: 0,
        why: 'The paragraph is describing what concrete sometimes does under particular conditions, which is general possibility — replace it with <em>sometimes cracks</em> and the meaning survives. <em>Must</em> would make it a deduction or a requirement, and a description of a material is neither a conclusion nor a rule. <em>May not</em> inverts the sentence into a denial. <em>Is able to</em> attributes a capacity to concrete, as though cracking were something it is good at.' },

      { id: 't4l1ck-4', type: 'spot', tag: 'dyn-repair', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['Once the new system goes live,', 'every invoice from the past year', 'will be stored in one place, and the auditors', 'will can find any of them in a single search.'],
        answer: 3,
        fix: 'will be able to find any of them in a single search.',
        why: 'Two modals cannot stand together, because a modal has no infinitive for the first one to take. <em>Will be able to find</em> is the standard repair. The rest of the sentence is sound: the time clause correctly uses a present tense for future reference, and <em>will be stored</em> is an ordinary future passive with no second modal in it.' },

      { id: 't4l1ck-5', type: 'gap', tag: 'dyn-ability', level: 'B2',
        blank: '(1)',
        lines: [
          { who: 'Ploy', text: 'Do you know anyone who ___(1)___ read a soil survey? The consultant has sent forty pages of it.' },
          { who: 'Arthit', text: 'Ask Khun Mai. She spent years at the water authority, so she ___(2)___ look at it this afternoon.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['can', 'may', 'is allowed to', 'could have'],
        answer: 0,
        why: 'Ploy is looking for someone with the skill, and present skill is <em>can</em>. <em>May</em> would ask who is authorised, or who might possibly do it, and neither is the question. <em>Is allowed to</em> is permission again. <em>Could have</em> moves the question into the past — a chance that was missed, or a guess about what happened — which makes no sense of a survey that has only just arrived.' },

      { id: 't4l1ck-6', type: 'sort', tag: 'dyn-general', level: 'B2+',
        stem: 'Each sentence uses <em>can</em>. Does it name a capacity, or say that something sometimes happens?',
        bins: [
          { key: 'cap', label: 'Capacity', hint: 'what the subject is able to do' },
          { key: 'gen', label: 'General possibility', hint: 'it sometimes turns out this way' }
        ],
        items: [
          { text: 'The pump <b>can</b> empty the tank in ninety seconds.', bin: 'cap' },
          { text: 'Interviews <b>can</b> be stressful even for confident candidates.', bin: 'gen' },
          { text: 'The dictionary app <b>can</b> work without a signal.', bin: 'cap' },
          { text: 'Visitors <b>can</b> underestimate how strong the current is here.', bin: 'gen' },
          { text: 'A hospital generator <b>can</b> carry the whole building for three days.', bin: 'cap' },
          { text: 'Small leaks <b>can</b> turn into serious floods overnight.', bin: 'gen' }
        ],
        why: 'Substitute <em>sometimes</em>. <em>Interviews are sometimes stressful</em> and <em>small leaks sometimes turn into floods</em> both work, so those are general possibility. <em>The pump sometimes empties the tank in ninety seconds</em> loses the point, because the sentence is a specification, not a frequency. The visitors card is the one that catches people out: underestimating is not a skill.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T4.levels.push({
  id: 't4l2', n: 2, name: 'The single-occasion rule', cefr: 'B2+',
  blurb: 'Why could names a power and not an event, and what English uses instead when the event came off.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't4l2s1', name: 'could against was able to against managed to', cefr: 'B2+',
      theory: {
        key: '<em>Could</em> names a standing power, never one event that came off, so a single successful occasion needs <em>was able to</em>, <em>managed to</em> or <em>succeeded in -ing</em>.',
        body: [
          'The difference is <strong>aspect</strong>, not tense. <em>Could</em> is imperfective: it describes a capacity spread across a stretch of time and says nothing about whether the capacity was ever used. <em>She could play the violin at six</em> tells you what she was equipped to do; it does not tell you that any note was played on any particular day. That is not a quirk of the word — it is what an imperfective form is for.',
          'A single completed achievement is <strong>perfective</strong>: it asserts that on one occasion the thing actually came off. <em>Could</em> has no way of asserting that, so English hands the job to forms that can. <em>Was able to</em>, <em>managed to</em> and <em>succeeded in -ing</em> all combine a capacity with the claim that the result was obtained. Hence the famous pair: <em>She could win the final last Saturday</em> is bad English, and <em>She was able to win the final last Saturday</em> is good.',
          'So the question to ask is never "is this past?" but "<strong>does this sentence name one occasion with an outcome?</strong>" If it does, <em>could</em> is blocked. If it names a habit, a period, or a general power, <em>could</em> is not only allowed but preferred, and the periphrasis starts to sound heavy — <em>I was able to swim at five</em> makes a childhood skill sound like a rescue.',
          'The three repairs are not identical. <em>Was able to</em> is neutral and is at home in formal and academic writing. <em>Managed to</em> and <em>succeeded in -ing</em> add the idea of <strong>difficulty overcome</strong>, which is why <em>I managed to get a seat</em> implies a struggle and <em>I was able to get a seat</em> need not. Choose on whether the difficulty is part of what you are reporting.'
        ],
        simple: [
          '<em>Could</em> describes a power that lasted — a skill, a habit, a period. It never reports one successful action.',
          'For one successful action, use <em>was able to</em>, <em>managed to</em> or <em>succeeded in</em>: <s>She could win the final</s> → <em>She was able to win the final</em>.',
          'Ask: does the sentence say that on one occasion it actually worked? If yes, <em>could</em> is wrong. <em>Managed to</em> adds the idea that it was difficult.'
        ],
        examples: [
          { s: 'At fourteen she <b>could</b> already sail the boat single-handed.', g: 'a standing power across a period, so could is right.' },
          { s: '<s>She could win the final last Saturday.</s>', g: 'one completed achievement; could cannot assert that it came off.' },
          { s: 'She <b>was able to</b> win the final last Saturday.', g: 'the neutral repair: it names the occasion and asserts the result.' },
          { s: 'After two hours we <b>managed to</b> restart the generator.', g: 'same job, plus the idea of difficulty overcome.' }
        ]
      },
      items: [
        { id: 't4l2s1-1', type: 'choose', tag: 'dyn-occasion', level: 'B2+',
          stem: 'The fire had blocked the stairwell, but the crew ______ everyone out through a rear window.',
          options: ['could get', 'could be getting', 'were able to get', 'can get'],
          answer: 2,
          why: 'This is one occasion with an outcome — the people actually came out — so the sentence has to assert that the attempt succeeded, which only the periphrasis can do. <em>Could get</em> names a standing power and leaves the rescue itself unreported. <em>Could be getting</em> makes it an activity in progress at some point, not a result. <em>Can get</em> is present, which contradicts the past perfect in the first clause.' },

        { id: 't4l2s1-2', type: 'spot', tag: 'dyn-occasion', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The road to the clinic', 'was under water all morning,', 'but the driver could deliver', 'all forty boxes of vaccine by noon.'],
          answer: 2,
          fix: 'but the driver was able to deliver',
          why: 'The sentence reports a single delivery that was completed, so it needs a perfective form. <em>Could deliver</em> would only say that the driver had the general power to deliver boxes, which leaves the story with no ending. <em>Managed to deliver</em> would also be correct here and would make the difficulty explicit. The other three parts are all sound.' },

        { id: 't4l2s1-3', type: 'choose', tag: 'dyn-occasion', level: 'B2+',
          stem: 'Throughout the 1990s the old ferry ______ lorries as well as passengers.',
          options: ['has been able to carry', 'could carry', 'was able carry', 'can carry'],
          answer: 1,
          why: '<em>Throughout the 1990s</em> describes a capacity that held for a decade, which is precisely the imperfective reading <em>could</em> exists for. <em>Has been able to carry</em> is the near miss: <em>be able to</em> is the right repair when a perfect is needed, but a present perfect runs up to now, and the 1990s are over. <em>Was able carry</em> drops the <em>to</em>. <em>Can carry</em> is present and cannot describe a finished decade.' },

        { id: 't4l2s1-4', type: 'equiv', tag: 'dyn-occasion', level: 'B2+',
          given: 'The negotiators worked through the night and finally got an agreement.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The negotiators could get an agreement after working through the night.',
            'The negotiators succeeded in getting an agreement after working through the night.',
            'The negotiators could have got an agreement after working through the night.',
            'The negotiators were able get an agreement after working through the night.'
          ],
          answer: 1,
          why: 'The original reports one negotiation that ended in a signed agreement after difficulty, and <em>succeeded in -ing</em> carries exactly that. <em>Could get</em> is blocked: a single completed achievement cannot take <em>could</em>. <em>Could have got</em> either names a chance that was missed or only guesses that an agreement was reached, and the original reports it as a fact. The last option is the right idea with the wrong form, since it drops the <em>to</em> that <em>able</em> always needs.' },

        { id: 't4l2s1-5', type: 'choose', tag: 'dyn-occasion', level: 'B2+',
          stem: 'Two facts: my aunt spoke four languages all her life, and she once persuaded a customs officer to release a parcel. Which sentence reports both of them correctly?',
          options: [
            'My aunt could speak four languages, and she could persuade the customs officer to release the parcel.',
            'My aunt could speak four languages, and she was able to persuade the customs officer to release the parcel.',
            'My aunt managed to speak four languages, and she was able to persuade the customs officer to release the parcel.',
            'My aunt could speak four languages, and she could have persuaded the customs officer to release the parcel.'
          ],
          answer: 1,
          why: 'The two halves need different forms because they are doing different things. Knowing four languages is a standing power, so <em>could</em>; persuading the officer on one occasion is an achievement that came off, so <em>was able to</em>. The first option uses <em>could</em> for both and loses the outcome. The third applies <em>managed to</em> to a lifelong skill, which reads as though learning each language were a single struggle. The fourth turns the persuasion into a chance she did not take, or at best a guess, when it actually happened.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't4l2s2', name: 'The exceptions: perception, cognition and the negative', cefr: 'B2+',
      theory: {
        key: 'Perception and cognition verbs describe a state rather than an achievement, and a negative reports a failure rather than an achievement, so neither of them triggers the single-occasion rule.',
        body: [
          'These are not two arbitrary exceptions to be memorised. They are two consequences of the same reason, and once you have the reason you can derive them. The rule blocks <em>could</em> only where the sentence would have to assert that <strong>something was brought off on one occasion</strong>. Anywhere that assertion is not being made, there is nothing for <em>could</em> to fail at.',
          '<strong>Perception and cognition verbs are stative.</strong> <em>See, hear, smell, taste, feel, understand, remember, recognise, make out, tell</em> — these describe a state that holds, not an event that culminates. <em>From the balcony I could see the whole harbour</em> asserts no achievement; nothing came off, and the seeing simply obtained. So <em>could</em> is not merely permitted here, it is the natural choice, and <em>I was able to see the whole harbour</em> would imply the view had to be fought for.',
          '<strong>The negative escapes for the complementary reason.</strong> <em>She couldn\'t win the final</em> asserts that the result did <strong>not</strong> come off — and a failure is not an achievement, so there is nothing <em>couldn\'t</em> is unable to say. The restriction is therefore <strong>one-sided</strong>: it bites in the affirmative only. Students find this surprising, and examiners know it.',
          'The border case proves the mechanism rather than spoiling it. Force an achievement reading onto a perception verb — <em>After an hour of searching I finally spotted the error</em> — and the effort comes back, so <em>managed to spot</em> becomes the better form. The adverbs give it away: <em>finally</em>, <em>at last</em>, <em>after an hour</em>, <em>on the third attempt</em> all announce a culmination. The test never changes: <strong>is this sentence asserting that on one occasion something was brought off?</strong>'
        ],
        simple: [
          'With <em>see, hear, smell, feel, understand, remember</em>, <em>could</em> is fine even about one moment: <em>From the balcony I could see the whole harbour</em>. These verbs describe a state, not an achievement.',
          'In the negative, <em>couldn\'t</em> is always fine: <em>She couldn\'t win the final</em>. Failing is not an achievement, so there is nothing to block.',
          'The rule only stops <em>could</em> in the affirmative, about one occasion, when something actually succeeded. Words like <em>finally</em> or <em>at last</em> are a warning that you are in that situation.'
        ],
        examples: [
          { s: 'From the top of the tower we <b>could see</b> as far as the estuary.', g: 'a perception verb is stative; no achievement is being claimed.' },
          { s: 'I <b>could understand</b> most of the lecture, even at that speed.', g: 'a cognition verb, exempt for the same reason.' },
          { s: 'She <b>couldn\'t win</b> the final, however hard she pushed.', g: 'a failure is not an achievement, so the negative is free.' },
          { s: '<s>She could win the final, and the whole crowd stood up.</s>', g: 'the affirmative single occasion is still blocked; use was able to.' }
        ]
      },
      items: [
        { id: 't4l2s2-1', type: 'choose', tag: 'dyn-occexcept', level: 'B2+',
          stem: 'Once the smoke had cleared, the survey team on the ridge ______ the whole of the burnt area, and they photographed every part of it before noon.',
          options: ['can see', 'could have seen', 'was able to seeing', 'could see'],
          answer: 3,
          why: '<em>See</em> is a perception verb and therefore stative, so no achievement is being asserted and <em>could</em> is free even about one morning — indeed it is the natural form. <em>Could have seen</em> is the near miss: it would fit if they had never gone up, but here it would mean either a view that was available and not taken or a mere guess that they saw it — and the photographs show they did. <em>Can see</em> is present, while the whole story is past. <em>Was able to seeing</em> puts an <em>-ing</em> where <em>able to</em> requires an infinitive.' },

        { id: 't4l2s2-2', type: 'judge', tag: 'dyn-occexcept', level: 'B2+',
          given: 'Even with the microphone on, the delegates at the back couldn\'t hear the closing speech.',
          stem: 'This sentence breaks the rule that <em>could</em> cannot report a single occasion.',
          answer: 1,
          why: 'False, on two separate counts. <em>Hear</em> is a perception verb and so is exempt anyway, and the sentence is negative, which is exempt in its own right because a failure is not an achievement. The restriction applies only to affirmative sentences that claim a result was obtained on one occasion, and this sentence claims the opposite.' },

        { id: 't4l2s2-3', type: 'choose', tag: 'dyn-occexcept', level: 'B2+',
          stem: 'Despite nearly an hour of trying, he ______ the padlock that night.',
          options: ['could open', 'was able to not open', 'couldn\'t open', 'could have opened'],
          answer: 2,
          why: 'The sentence reports a failure on one occasion, and the negative escapes the single-occasion rule entirely, so <em>couldn\'t open</em> is both correct and idiomatic. <em>Could open</em> is blocked twice over: it is an affirmative single occasion, and it contradicts <em>despite nearly an hour of trying</em>. <em>Was able to not open</em> puts the negation inside the proposition, which would mean he had the power to keep it shut. <em>Could have opened</em> is Stage 6 territory — a chance that was missed, or a guess that he did open it — and neither is the plain failure the sentence reports.' },

        { id: 't4l2s2-4', type: 'sort', tag: 'dyn-occexcept', level: 'B2+',
          stem: 'In which of these sentences is <em>could</em> acceptable as it stands?',
          bins: [
            { key: 'ok', label: '<em>could</em> is fine', hint: 'stative verb, or a negative' },
            { key: 'no', label: '<em>could</em> is blocked', hint: 'one occasion that came off' }
          ],
          items: [
            { text: 'I <b>could</b> smell the smoke from three streets away.', bin: 'ok' },
            { text: 'She <b>could</b> reach the summit before the storm closed in.', bin: 'no' },
            { text: 'They <b>couldn\'t</b> reopen the runway until the Tuesday.', bin: 'ok' },
            { text: 'He <b>could</b> remember every name on the list.', bin: 'ok' },
            { text: 'The divers <b>could</b> free the propeller at the second attempt.', bin: 'no' },
            { text: 'The rescue team <b>could</b> lift the beam clear just before dawn.', bin: 'no' }
          ],
          why: 'Two of the acceptable cards use perception or cognition verbs — <em>smell</em> and <em>remember</em> describe a state, so no achievement is asserted. The third is negative, and a failure is not an achievement either. The three blocked cards all report one affirmative occasion on which something was brought off, and the giveaways are the time expressions: <em>before the storm closed in</em>, <em>at the second attempt</em>, <em>just before dawn</em>.' },

        { id: 't4l2s2-5', type: 'choose', tag: 'dyn-occexcept', level: 'B2+',
          stem: 'After forty minutes of reading the file line by line, I finally ______ the missing semicolon.',
          options: ['could spot', 'could have spotted', 'could be spotting', 'managed to spot'],
          answer: 3,
          why: '<em>Spot</em> looks like a perception verb, but <em>after forty minutes</em> and <em>finally</em> force an achievement reading: the sentence is reporting a culmination, not a state. That brings the single-occasion rule back and makes <em>managed to</em> the right form, since the difficulty is part of the point. <em>Could spot</em> is blocked by the achievement reading. <em>Could be spotting</em> describes an activity in progress. <em>Could have spotted</em> turns the find into a missed chance or a guess, when <em>finally</em> reports that it happened.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't4l2s3', name: 'Choosing under pressure', cefr: 'B2+',
      theory: {
        key: 'The decision is two questions long: does the slot allow a modal at all, and if it does, is the sentence reporting one occasion that came off?',
        body: [
          'The two rules of this stage interact, and the <strong>order matters</strong>. Ask the grammatical question first: does the slot allow a modal? After <em>will</em>, after <em>have</em>, after <em>to</em>, and in an <em>-ing</em> form, the answer is no, so <em>be able to</em> is forced and the aspectual question never arises. Students who start with the single-occasion rule end up agonising over sentences where there was never a choice.',
          'If a modal <strong>is</strong> possible, then ask the aspectual question. A standing capacity, a habit or a period gives you <em>could</em>. One occasion with a result gives you <em>was able to</em>, <em>managed to</em> or <em>succeeded in -ing</em>. A negative gives you <em>couldn\'t</em>, which is always available. That is the whole decision.',
          'There is a third check, and it is the one most often forgotten: <strong>is the sentence about ability at all?</strong> <em>Could</em> is also tentative present possibility — <em>That could be the answer</em>, which is Stage 5 — and, with <em>have</em>, an unrealised past chance — <em>We could have caught the earlier train</em>, which is Stage 6. If the sentence is not about what somebody was capable of, the single-occasion rule has nothing to say about it.',
          'Finally, do not over-correct. A student who has just met this rule starts writing <em>was able to</em> everywhere, including where a plain <em>could</em> was always right. <em>I was able to swim when I was five</em> is not ungrammatical, but it makes an ordinary childhood skill sound like an escape from a sinking boat. The repair is for achievements; leave capacities alone.'
        ],
        simple: [
          'First question: can a modal even go here? After <em>will</em>, <em>have</em>, <em>to</em>, or as an <em>-ing</em> word, no — so use <em>be able to</em> and stop.',
          'Second question: is it one occasion that worked? Yes → <em>was able to</em> or <em>managed to</em>. No (a skill, a habit, a period) → <em>could</em>. Negative → <em>couldn\'t</em>.',
          'Third question: is the sentence about ability at all? <em>That could be true</em> and <em>We could have gone</em> are different meanings, and this rule does not apply to them.'
        ],
        examples: [
          { s: 'By March the laboratory <b>will be able to</b> sequence a sample overnight.', g: 'the slot forbids a modal, so the aspect question never arises.' },
          { s: 'We <b>managed to</b> reach the village before the bridge went under.', g: 'one occasion, one result, difficulty overcome.' },
          { s: 'As a boy he <b>could</b> name every bird on the estuary.', g: 'a standing capacity; was able to would sound like a rescue.' },
          { s: '<s>We could reach the village before the bridge went under.</s>', g: 'a single occasion that came off cannot take could.' }
        ]
      },
      items: [
        { id: 't4l2s3-1', type: 'cloze', tag: 'dyn-occasion', level: 'B2+',
          passage: 'When the landslide cut the road above the pass, the district office ___(1)___ reach nine of the hill villages by vehicle at all.\n\nA helicopter crew ___(2)___ in the school field on the second morning and take out the four people who needed hospital treatment. Officials say that once the culverts have been rebuilt they ___(3)___ move supplies by road again within a week.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['was able to land', 'could land', 'could have landed', 'could be landing'],
          answer: 0,
          why: 'The helicopter landed once, on a named morning, and the paragraph goes on to report what followed — a single occasion with an outcome, which blocks <em>could</em> and calls for the periphrasis. <em>Could land</em> would only say the crew had the general power to land in school fields. <em>Could have landed</em> would make the landing either a chance that was not taken or a guess, which contradicts the rescue the paragraph reports. <em>Could be landing</em> describes something in progress.' },

        { id: 't4l2s3-2', type: 'choose', tag: 'dyn-repair', level: 'B2+',
          stem: 'For the past two years, students from the far bank ______ to school without crossing the ford.',
          options: ['can get', 'could get', 'have been able to get', 'were able to get'],
          answer: 2,
          why: '<em>For the past two years</em> measures a stretch of time running up to the present, which requires a present perfect — and a modal has no participle, so the first question, does this slot allow a modal at all, settles the sentence before aspect is even considered. <em>Can get</em> is present and cannot cover the two years behind it. <em>Could get</em> puts the change in the past and implies it has since stopped. <em>Were able to get</em> is a past simple and would have to name a finished period, not one running up to now.' },

        { id: 't4l2s3-3', type: 'spot', tag: 'dyn-occasion', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The engineers worked all night,', 'and at six the next morning', 'they could restore power', 'to the whole of the old town.'],
          answer: 2,
          fix: 'they were able to restore power',
          why: 'A modal is perfectly legal in that slot, so the aspectual question decides it — and <em>at six the next morning</em> names one occasion on which the power actually came back. That is an achievement, so <em>were able to restore</em> or <em>managed to restore</em> is needed. The other three parts are all correct, and the first two are in fact what set up the achievement reading.' },

        { id: 't4l2s3-4', type: 'choose', tag: 'dyn-occasion', level: 'B2+',
          stem: 'In which sentence is <em>could</em> <strong>not</strong> about ability, so that the single-occasion rule does not apply?',
          options: [
            'By the end of the first year she could read the inscriptions unaided.',
            'The delay could be down to a faulty relay in the signal box.',
            'He could hold his breath for almost three minutes.',
            'Before the drought, the well could supply four households.'
          ],
          answer: 1,
          why: 'The second sentence is a tentative guess about a present cause — the distance use of Stage 5 — so it makes no claim about anyone\'s capacity and the aspectual rule is irrelevant to it. The other three all describe a standing power: a skill acquired over a year, a physical capacity, and what a well was able to supply over a period. All three are perfectly good uses of <em>could</em>, which is why they are the wrong answer here.' },

        { id: 't4l2s3-5', type: 'build', tag: 'dyn-occasion', level: 'B2+',
          stem: 'Put the words in order. The sentence reports one occasion, and the difficulty was part of it.',
          tiles: ['after', 'three attempts', 'the crew', 'managed', 'to free', 'the anchor chain'],
          solution: 'after three attempts the crew managed to free the anchor chain',
          alt: ['the crew managed to free the anchor chain after three attempts'],
          why: '<em>After three attempts</em> names one culminating occasion and announces that it was hard, which is precisely the work <em>managed to</em> does. <em>Could free</em> would be blocked here, and <em>were able to free</em> would be correct but would throw away the struggle the sentence is built around. Note that <em>managed</em> takes a <em>to</em>-infinitive, so the two tiles cannot be separated. The time phrase reads equally well at either end, so both orders are accepted.' }
      ]
    }
  ],

  check: {
    id: 't4l2ck', name: 'Stage Check · The single-occasion rule',
    items: [
      { id: 't4l2ck-1', type: 'choose', tag: 'dyn-occasion', level: 'B2+',
        stem: 'The queue stretched around the block, but somehow Nok ______ tickets for all six of us.',
        options: ['could get', 'can get', 'could got', 'managed to get'],
        answer: 3,
        why: '<em>But somehow</em> announces one occasion, one result and a struggle, which is the exact job of <em>managed to</em>. <em>Could get</em> is the near miss: it would be right for a standing ability, but a single affirmative achievement cannot take <em>could</em>. <em>Could got</em> puts a past form after a modal, which must be followed by a bare infinitive. <em>Can get</em> is present and clashes with the past tense in the first clause.' },

      { id: 't4l2ck-2', type: 'choose', tag: 'dyn-occexcept', level: 'B2+',
        stem: 'Which sentence is correct as it stands?',
        options: [
          'Even from the back row we could hear every word of the summing-up.',
          'On the third attempt the climbers could reach the eastern ridge.',
          'In the end the auditor could find the missing entry in the paper ledger.',
          'At the last moment the goalkeeper could push the ball over the bar.'
        ],
        answer: 0,
        why: '<em>Hear</em> is a perception verb and so is stative: nothing is asserted to have been brought off, and <em>could</em> is the natural form. The other three all report a single affirmative occasion that succeeded, flagged by <em>on the third attempt</em>, <em>in the end</em> and <em>at the last moment</em>, so each one needs <em>was able to</em> or <em>managed to</em>.' },

      { id: 't4l2ck-3', type: 'spot', tag: 'dyn-occasion', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The archivist could track down', 'the owner of the photograph', 'on the afternoon it arrived,', 'and the museum bought the print the same week.'],
        answer: 0,
        fix: 'The archivist was able to track down',
        why: 'The second half confirms that the search actually came off on one named afternoon, so this is an achievement and <em>was able to track down</em> or <em>managed to track down</em> is required. The verb matters here: <em>recognise</em> or <em>remember</em> would be cognition verbs and would escape the rule altogether, whereas tracking someone down names a result reached after effort. The other three parts are correct, and <em>the archivist could track down an owner in a morning</em>, with no occasion named, would be perfectly good English.' },

      { id: 't4l2ck-4', type: 'equiv', tag: 'dyn-occexcept', level: 'B2+',
        given: 'In the 2019 trial, ten of the twelve prototypes failed to complete the full test cycle.',
        stem: 'Which sentence reports the same finding?',
        options: [
          'In the 2019 trial, ten of the twelve prototypes could not complete the full test cycle.',
          'In the 2019 trial, ten of the twelve prototypes could have completed the full test cycle.',
          'In the 2019 trial, ten of the twelve prototypes were not able to completing the full test cycle.',
          'In the 2019 trial, ten of the twelve prototypes may not complete the full test cycle.'
        ],
        answer: 0,
        why: 'A failure on one occasion is exactly what the negative <em>could not</em> is free to report, and it is the standard form in a results paragraph. <em>Could have completed</em> loses the finding: it reads either as a capacity that was there and unused or as a guess that they did complete it, and the original reports a failure. The third option has the right meaning but puts an <em>-ing</em> after <em>able to</em>, which takes an infinitive. <em>May not complete</em> is a present hedge about what might happen, not a report of what did.' },

      { id: 't4l2ck-5', type: 'build', tag: 'dyn-repair', level: 'B2+',
        stem: 'Put the words in order. The sentence describes an ability the library will have in the future.',
        tiles: ['by', 'next term', 'the library', 'will', 'be', 'able', 'to', 'issue', 'books', 'automatically'],
        solution: 'by next term the library will be able to issue books automatically',
        alt: ['the library will be able to issue books automatically by next term'],
        why: '<em>Will</em> occupies the modal slot, and nothing else can follow it but a bare infinitive, so the ability has to be carried by <em>be able to</em>. This is the grammatical question, and it settles the sentence on its own — no aspectual judgement is needed, because there was never a choice between <em>can</em> and <em>be able to</em> here. The time phrase may stand at either end of the sentence.' },

      { id: 't4l2ck-6', type: 'order', tag: 'dyn-occasion', level: 'B2+',
        stem: 'Put the four sentences in the order that makes a coherent paragraph.',
        items: [
          'The storm took out the causeway on the Friday afternoon, cutting the island off completely.',
          'For the next two days the clinic could treat patients only with what it already had on its shelves.',
          'On the Sunday morning a fishing boat managed to land a crate of insulin on the northern beach.',
          'By the following week the ferry was running again and the shortage was over.'
        ],
        why: 'The paragraph moves from cause to consequence to turning point to resolution, and the modal forms track that movement. <em>Could treat</em> is right for the two-day period because it names a standing limitation, not an event; <em>managed to land</em> is right for the Sunday because one delivery actually came off, in difficult conditions. Swapping the two forms would make the period sound like a single act and the delivery sound like a general capacity.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T4.levels.push({
  id: 't4l3', n: 3, name: 'Willingness, refusal and character', cefr: 'B2+',
  blurb: 'Will and would when they are not about the future at all, but about what someone is prepared to do and what they are like.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't4l3s1', name: 'will and won\'t as willingness and refusal', cefr: 'B2+',
      theory: {
        key: '<em>Will</em> is not a future tense; with a present subject it often reports willingness, and <em>won\'t</em> reports an active refusal — including from a door, a printer or an engine.',
        body: [
          'Stage 1 established that <em>will</em> is a modal like any other: it sits in the modal slot, takes a bare infinitive and cannot stack. What it expresses is a <strong>stance</strong>, and the future reading is only its commonest one. In the dynamic corner of the system its stance is <strong>willingness</strong> — the subject\'s present readiness to act. <em>I\'ll carry that for you.</em> <em>She\'ll help if you ask her.</em> The event lies in the future only because a decision made now is carried out afterwards.',
          'The negative is sharper than the positive, and this is where students lose meaning. <em>Won\'t</em> is not simply "will not happen"; it is an <strong>active refusal</strong>. <em>He won\'t answer my emails</em> does not predict silence, it accuses. Compare <em>He isn\'t answering my emails</em>, which reports the same facts with no charge attached. That is why <em>won\'t</em> can sound rude where <em>doesn\'t</em> is neutral.',
          '<strong>Inanimate refusal</strong> is the same reading with a non-human subject: <em>The door won\'t open</em>, <em>The engine won\'t start</em>, <em>This lid won\'t come off</em>. English is treating the object as though it were withholding cooperation. Notice that the affirmative is rare — you would say <em>the door opens</em>, not <em>the door will open</em> — which tells you that this reading lives almost entirely in the negative.',
          'Two boundaries. In <em>if</em>-clauses, where predictive <em>will</em> is blocked (Stage 8), willingness <em>will</em> survives, because it is contributing something the <em>if</em> does not already supply: <em>If you\'ll take a seat, the registrar will call you.</em> And a <strong>stressed</strong> <em>WILL</em> with a habitual sentence is a third reading again — irritation at characteristic behaviour — which is module 3.3.'
        ],
        simple: [
          '<em>Will</em> often means "is willing to", not "in the future": <em>I\'ll carry that for you</em>.',
          '<em>Won\'t</em> means "refuses to". <em>She won\'t tell me</em> = she is refusing, not just that she is silent.',
          'Machines refuse too: <em>The door won\'t open</em>, <em>The engine won\'t start</em>. Do not say <s>the engine does not want to start</s> — that is a translation, not English.'
        ],
        examples: [
          { s: '<b>I\'ll</b> carry the projector down for you.', g: 'willingness — a decision made at the moment of speaking.' },
          { s: 'The side door <b>won\'t</b> open in wet weather.', g: 'inanimate refusal; the door is treated as uncooperative.' },
          { s: 'She <b>won\'t</b> say who told her.', g: 'a refusal, not a prediction: she is declining to say.' },
          { s: '<s>The engine does not want to start.</s>', g: 'a direct translation; English says the engine will not start.' }
        ]
      },
      items: [
        { id: 't4l3s1-1', type: 'choose', tag: 'dyn-will', level: 'B2+',
          stem: 'In which sentence does <em>will not</em> report a <strong>refusal</strong> rather than a prediction?',
          options: [
            'The results will not be ready until next week.',
            'The witness will not give his name in open court.',
            'The rain will not reach the coast before midnight.',
            'The shop will not be open on the public holiday.'
          ],
          answer: 1,
          why: 'Only a witness can decline to do something, and that is exactly what the second sentence reports: he is being asked and is refusing. The other three have subjects that make no decisions — a results date, weather and opening hours are simply predicted, and each could be rewritten with <em>is not going to</em> or a present tense with no loss.' },

        { id: 't4l3s1-2', type: 'gap', tag: 'dyn-will', level: 'B2+',
          blank: '(1)',
          lines: [
            { who: 'Nan', text: 'The big copier ___(1)___ feed the thick paper. Look, I am pressing Start right now and nothing is happening.' },
            { who: 'Krit', text: 'Leave it for now. I ___(2)___ ring the technician as soon as the office opens.' }
          ],
          stem: 'Choose the best option for gap (1).',
          options: ['does', 'will', 'wouldn\'t', 'won\'t'],
          answer: 3,
          why: 'Nan is pressing the button and the machine is not cooperating, which is the inanimate refusal that <em>won\'t</em> carries in present time. <em>Wouldn\'t</em> is the near miss: it is the same refusal, but in past time, and Nan is describing what is happening right now. <em>Does</em> would assert that it feeds the paper perfectly well. <em>Will</em> does the same, since the affirmative of this reading is a prediction, not a complaint.' },

        { id: 't4l3s1-3', type: 'choose', tag: 'dyn-will', level: 'B2+',
          stem: 'After <em>if</em>, <em>will</em> is not normally used for a simple prediction. In which sentence does the <em>will</em> after <em>if</em> mean something else, so that the sentence is correct?',
          options: ['If it will rain tomorrow, we will move the ceremony indoors.', 'If you will take a seat, the registrar will call you shortly.', 'If the train will be late tonight, we will take a taxi from the station.', 'If the results will arrive on Friday, we will publish them at once.'],
          answer: 1,
          why: 'An <em>if</em>-clause already marks the situation as a possibility, so it does not need a second operator to predict it — which is why the first, third and fourth, every one of them a prediction, are ruled out. The second is different: <em>will</em> there is willingness, not prediction, so it is contributing something the <em>if</em> has not already supplied. This is one of the few uses of <em>will</em> that survive in an <em>if</em>-clause.' },

        { id: 't4l3s1-4', type: 'spot', tag: 'dyn-will', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The old chest freezer is not willing to close', 'properly any more,', 'so everything inside it', 'is slowly thawing.'],
          answer: 0,
          fix: 'The old chest freezer will not close',
          why: '<em>Be willing to</em> needs a subject with a will of its own, and a freezer has none; English gives refusal to an object with <em>won\'t</em>. <em>Will not close</em> says exactly the intended thing. The rest of the sentence is sound, and the final clause is in fact good evidence that a refusal reading is what is wanted.' },

        { id: 't4l3s1-5', type: 'equiv', tag: 'dyn-will', level: 'B2+',
          given: 'The porter is refusing to take the trolley up to the third floor.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The porter won\'t take the trolley up to the third floor.',
            'The porter can\'t take the trolley up to the third floor.',
            'The porter shouldn\'t take the trolley up to the third floor.',
            'The porter mustn\'t take the trolley up to the third floor.'
          ],
          answer: 0,
          why: '<em>Won\'t</em> is the ordinary way English reports a present refusal, and it keeps the decision with the porter, where the original puts it. <em>Can\'t</em> makes it a question of ability, so it would excuse him rather than accuse him. <em>Shouldn\'t</em> turns it into advice from the speaker. <em>Mustn\'t</em> makes it a prohibition imposed by somebody else, which reverses who is deciding.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't4l3s2', name: 'would and wouldn\'t in past time', cefr: 'B2+',
      theory: {
        key: '<em>Would</em> and <em>wouldn\'t</em> carry willingness and refusal back into past time — <em>She wouldn\'t tell me where she had been</em> means she declined, not that she was unable to.',
        body: [
          'Willingness <em>will</em> has a genuine past, and it is <em>would</em>. This is one of the few corners of the modal system where the historical past-tense relationship still does ordinary work, rather than having been taken over by distance. <em>He said he would drive us to the airport</em> is reported willingness; <em>She wouldn\'t tell me where she had been</em> is refusal, then.',
          'The negative again does most of the work, and it has to be kept apart from <em>couldn\'t</em>. <em>She wouldn\'t open the door</em> means she declined to. <em>She couldn\'t open the door</em> means she was unable to. Students who translate both as "not able" lose the accusation, and in a narrative that is a loss of <strong>meaning</strong>, not of style — the first sentence tells you something about her intentions and the second tells you something about the lock.',
          'Inanimate refusal transfers into the past intact: <em>The car wouldn\'t start that morning</em>, <em>The window wouldn\'t shut</em>, <em>The printer wouldn\'t recognise the new cartridge</em>. This is by far the commonest <em>would</em> in everyday spoken narrative, and it is worth recognising on sight because of what it is not.',
          'Which is the warning. This <em>would</em> is <strong>not</strong> the conditional <em>would</em> of <em>I would help you if I could</em>. That one marks distance and unreality and belongs to Stage 5. The clue is the surroundings: a refusal <em>would</em> sits in a plain past narrative, with no <em>if</em>, no unreal condition and no hypothetical anywhere in sight, and the events it describes really happened.'
        ],
        simple: [
          '<em>Would</em> is the past of willingness <em>will</em>: <em>He said he would drive us</em>.',
          '<em>Wouldn\'t</em> = refused to. <em>She wouldn\'t tell me</em> is about her decision. <em>She couldn\'t tell me</em> is about her ability. They are different facts.',
          'Machines too: <em>The car wouldn\'t start</em>. This is not the <em>would</em> of <em>I would help if I could</em> — there is no <em>if</em> anywhere.'
        ],
        examples: [
          { s: 'The car <b>wouldn\'t</b> start on the coldest morning of the year.', g: 'inanimate refusal in past time; not a conditional.' },
          { s: 'She <b>wouldn\'t</b> tell me where she had been.', g: 'she declined; it is not that she was unable to.' },
          { s: 'He promised he <b>would</b> collect the parcel on his way home.', g: 'reported willingness: the past of I will collect it.' },
          { s: '<s>She couldn\'t tell me where she had been, so in the end I stopped asking.</s>', g: 'the could form says she was unable to; a refusal needs the would form.' }
        ]
      },
      items: [
        { id: 't4l3s2-1', type: 'choose', tag: 'dyn-would', level: 'B2+',
          stem: 'The caretaker was standing right there with the key, but however politely we asked, he ______ the gate for us.',
          options: ['couldn\'t open', 'mightn\'t open', 'shouldn\'t open', 'wouldn\'t open'],
          answer: 3,
          why: '<em>However politely we asked</em> tells you the outcome depended on his decision, not on the lock: asking nicely cannot change what someone is able to do, only what he is prepared to do — which is <em>wouldn\'t</em>. <em>Couldn\'t</em> is the near miss: it would be right if the key did not fit, but then the politeness of the asking would be beside the point. <em>Shouldn\'t</em> is the speaker\'s advice about what was right, not a report of what he did. <em>Mightn\'t</em> is a weak guess about possibility and makes no sense as a narrative event.' },

        { id: 't4l3s2-2', type: 'equiv', tag: 'dyn-would', level: 'B2+',
          given: 'My brother refused to say how much he had paid for it.',
          stem: 'Which sentence says the same thing?',
          options: [
            'My brother wouldn\'t say how much he had paid for it.',
            'My brother couldn\'t say how much he had paid for it.',
            'My brother mustn\'t say how much he had paid for it.',
            'My brother shouldn\'t say how much he had paid for it.'
          ],
          answer: 0,
          why: '<em>Refused to</em> and <em>wouldn\'t</em> are the same fact about the same person\'s decision. <em>Couldn\'t</em> would mean he did not know the figure, which excuses him instead of describing his choice. <em>Mustn\'t</em> makes it a prohibition from outside, so somebody else has decided. <em>Shouldn\'t</em> makes it the speaker\'s judgement about what he ought to do.' },

        { id: 't4l3s2-3', type: 'choose', tag: 'dyn-would', level: 'B2+',
          stem: 'Read: <em>The landlord wouldn\'t give us a key to the side entrance.</em> What does the sentence say?',
          options: [
            'He had no spare key to give us.',
            'He was forbidden to give us one.',
            'He decided not to let us have one.',
            'He had not been asked for one.'
          ],
          answer: 2,
          why: '<em>Wouldn\'t</em> in a past narrative is a refusal, so the sentence reports his decision. The first option is what <em>couldn\'t</em> would have said. The second is what <em>wasn\'t allowed to</em> would have said, and it moves the decision to somebody above him. The fourth contradicts the sentence, since refusing presupposes having been asked.' },

        { id: 't4l3s2-4', type: 'spot', tag: 'dyn-would', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['When we lived beside the canal,', 'the front gate would not to close', 'in the rainy season,', 'and the mosquitoes came straight in.'],
          answer: 1,
          fix: 'the front gate would not close',
          why: '<em>Would</em> is a modal, so it takes a bare infinitive and the <em>to</em> has nowhere to attach. The meaning is right: this is inanimate refusal moved into past time, and the gate is being described as uncooperative rather than broken. The remaining three parts are correct, and the last clause is what makes the refusal reading the natural one.' },

        { id: 't4l3s2-5', type: 'cloze', tag: 'dyn-would', level: 'B2+',
          passage: 'The night the substation failed, half the district went dark. The duty engineer ___(1)___ leave the control room while the alarms were still sounding, so his deputy drove out to the site alone.\n\nThe main relay ___(2)___ reset, however hard the deputy pushed the handle, and the operator on the manufacturer\'s helpline ___(3)___ pass on the on-call technician\'s number, even though she admitted she had it in front of her.',
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['couldn\'t', 'wouldn\'t', 'shouldn\'t', 'needn\'t'],
          answer: 1,
          why: '<em>Even though she admitted she had it in front of her</em> rules inability out and leaves only a decision: the operator was declining, which is <em>wouldn\'t</em>. <em>Couldn\'t</em> would say she did not have the number, which the same clause has just denied. <em>Shouldn\'t</em> would be the writer judging that giving it out was wrong. <em>Needn\'t</em> says there was no obligation, which is not what a stonewalled caller is reporting.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't4l3s3', name: 'will / would for characteristic behaviour', cefr: 'B2+',
      theory: {
        key: '<em>Will</em> and <em>would</em> also report what someone or something characteristically does — and putting the stress on the modal turns the report into a complaint.',
        body: [
          'A third dynamic reading. <em>Will</em> with a habitual or generic sentence reports <strong>characteristic behaviour</strong>: <em>She\'ll sit in the same seat every week</em>, <em>A cracked bell will always sound flat</em>, <em>Oil will float on water</em>. None of these is about the future; the events are happening now or in general. What <em>will</em> adds is that the behaviour <strong>follows from what the subject is like</strong>, which is why it is at home in scientific description as well as in gossip.',
          '<em>Would</em> does the same work in past time: <em>On Sundays my grandfather would walk the whole length of the beach.</em> This is the <em>would</em> of memoir and biography. For repeated actions it is interchangeable with <em>used to</em> — but <strong>not for past states</strong>. <em>He used to own a bookshop</em> is fine; <s>he would own a bookshop</s> is not, because owning is not something you repeatedly do. If the verb is <em>be</em>, <em>have</em>, <em>own</em>, <em>know</em>, <em>live</em> or <em>believe</em>, only <em>used to</em> is available.',
          'Stress changes the reading. Unstressed, the sentence is a neutral report. <strong>Stressed</strong> — and in writing, marked by italics or by an adverb like <em>always</em> or <em>keep</em> — it becomes a complaint: <em>He WILL leave his boots in the hallway</em> means he keeps doing it and it irritates me. <em>Would</em> carries the same irritation backwards: <em>She WOULD ring at dinner time.</em> Nothing in the grammar changes; only the prominence of the modal does.',
          'And one thing this <em>would</em> is not: the conditional <em>would</em> of <em>I would tell you if I knew</em>. That one marks unreality and is Stage 5\'s business. Here the events really took place, repeatedly, and there is no condition anywhere in the sentence — which is the quickest way to tell the two apart in a reading passage.'
        ],
        simple: [
          '<em>Will</em> can describe what someone typically does: <em>She\'ll sit in the same seat every week</em>. It is not about the future.',
          '<em>Would</em> does this in the past: <em>On Sundays he would walk along the beach</em>. For a past state, use <em>used to</em>: <em>He used to own a bookshop</em>, not <s>he would own a bookshop</s>.',
          'Stress the modal and it becomes a complaint: <em>He WILL leave his boots in the hallway</em> means it happens again and again and it annoys me.'
        ],
        examples: [
          { s: 'On Sundays my grandfather <b>would</b> walk the whole length of the beach.', g: 'past characteristic behaviour; the walks really happened.' },
          { s: 'Oil <b>will</b> float on water.', g: 'generic will: a property of the substance, not a prediction.' },
          { s: 'He <b>WILL</b> leave his boots in the hallway.', g: 'stressed will: a repeated habit, reported as a complaint.' },
          { s: '<s>He would own a bookshop in the old market.</s>', g: 'a past state needs used to; would reports repeated actions only.' }
        ]
      },
      items: [
        { id: 't4l3s3-1', type: 'choose', tag: 'dyn-habit', level: 'B2+',
          stem: 'In which sentence does <em>will</em> describe characteristic behaviour rather than the future?',
          options: [
            'The inspectors will publish their report in the second week of May.',
            'A badly balanced fan will vibrate at almost any speed.',
            'We will know the final figures once the audit is complete.',
            'The council will replace the pedestrian crossing next year.'
          ],
          answer: 1,
          why: 'The second sentence states a property of a class of objects: this is what badly balanced fans do, and it is as true yesterday as tomorrow. The other three are genuine predictions about dated events, and each could be replaced by <em>is going to</em> or a future time expression. The test is whether you could add <em>always</em> without changing anything, which works only for the fan.' },

        { id: 't4l3s3-2', type: 'sort', tag: 'dyn-habit', level: 'B2+',
          stem: 'Each sentence uses <em>used to</em>. In which of them could you also use <em>would</em>?',
          bins: [
            { key: 'both', label: '<em>would</em> works too', hint: 'a repeated action' },
            { key: 'only', label: 'only <em>used to</em>', hint: 'a state, not a repeated action' }
          ],
          items: [
            { text: 'My uncle <b>used to</b> walk the dogs along the canal before breakfast.', bin: 'both' },
            { text: 'My uncle <b>used to</b> own three taxis.', bin: 'only' },
            { text: 'She <b>used to</b> ring the office every Monday with the same complaint.', bin: 'both' },
            { text: 'She <b>used to</b> be terrified of thunderstorms.', bin: 'only' },
            { text: 'The night watchman <b>used to</b> whistle the same tune on his rounds.', bin: 'both' },
            { text: 'The night watchman <b>used to</b> live in the room behind the boiler.', bin: 'only' }
          ],
          why: '<em>Would</em> reports repeated actions, so it works wherever you can picture the event happening again and again — walking, ringing, whistling. <em>Own</em>, <em>be</em> and <em>live</em> describe states that simply held, with no repetition to report, so only <em>used to</em> is available. The subjects are deliberately repeated across the pairs so that the verb is the only thing deciding.' },

        { id: 't4l3s3-3', type: 'choose', tag: 'dyn-habit', level: 'B2+',
          stem: 'In <em>He <strong>WILL</strong> leave his boots in the hallway</em>, with the stress on <em>will</em>, what does the stress add?',
          options: [
            'a prediction about what he is going to do tomorrow',
            'permission that somebody has granted him',
            'the speaker\'s irritation at something he keeps doing',
            'a promise that the speaker is making on his behalf'
          ],
          answer: 2,
          why: 'Stressing the modal in a habitual sentence turns a neutral report into a complaint: he does this repeatedly and the speaker has had enough. It is not a prediction, because the sentence is about a standing habit rather than tomorrow. It is not permission, which would be <em>can</em> or <em>may</em>. And it is not a promise, because the subject is <em>he</em>, not the speaker.' },

        { id: 't4l3s3-4', type: 'judge', tag: 'dyn-habit', level: 'B2+',
          given: 'On winter mornings the old bus would take twenty minutes to warm up, and the whole class stood about in the yard waiting for it.',
          stem: 'The sentence describes something that actually happened, repeatedly.',
          answer: 0,
          why: 'True. This is the habitual <em>would</em> of past narrative: the mornings were real and the bus really did take twenty minutes, over and over. The reading to rule out is the conditional one, and the sentence gives you the evidence to rule it out: there is no <em>if</em> and no unreal condition, the time expression is a recurring one, and the second clause is a plain past tense reporting that the waiting actually happened.' },

        { id: 't4l3s3-5', type: 'order', tag: 'dyn-habit', level: 'B2+',
          stem: 'Put the four sentences in the order that makes a coherent paragraph.',
          items: [
            'My grandmother ran a noodle stall at the top of the market for nearly forty years.',
            'She would arrive before five every morning to get the charcoal going, whatever the weather.',
            'By seven the queue would be halfway down the alley, although she never once advertised.',
            'Even now, customers who moved away years ago will come back at New Year just to eat there.'
          ],
          why: 'The paragraph opens with the standing fact, then narrows to the daily routine, then to its result later the same morning, and finally steps forward into the present. The modal forms follow that movement: two past habitual <em>would</em>s for what happened repeatedly then, and a present characteristic <em>will</em> in the last sentence for what returning customers typically do now. Starting anywhere else leaves the pronoun <em>she</em> with nothing to refer back to.' }
      ]
    }
  ],

  check: {
    id: 't4l3ck', name: 'Stage Check · Willingness, refusal and character',
    items: [
      { id: 't4l3ck-1', type: 'choose', tag: 'dyn-will', level: 'B2+',
        stem: 'Which option presents the boot as <strong>refusing to cooperate</strong>? <em>I am pressing the release as hard as I can, and the boot still ______ open.</em>',
        options: ['does not', 'cannot to', 'would not', 'will not'],
        answer: 3,
        why: 'Inanimate refusal in present time is <em>will not</em> (<em>won\'t</em>), and a struggle happening right now is exactly the setting for it. <em>Does not open</em> is perfectly good English, but it reports a bare fact and carries none of the resistance the question asks for. <em>Would not</em> is the same refusal in past time, and the speaker is pressing the release at this moment. <em>Cannot to</em> puts a <em>to</em> after a modal, which no modal allows.' },

      { id: 't4l3ck-2', type: 'choose', tag: 'dyn-habit', level: 'B2+',
        stem: 'Which sentence states a general property of the material rather than making a prediction?',
        options: [
          'The sample will be tested again in the second week of trials.',
          'The laboratory will publish the full data set in March.',
          'Untreated bamboo will split as it dries.',
          'The new coating will be applied once the frame is dry.'
        ],
        answer: 2,
        why: 'Generic <em>will</em> states what a class of things characteristically does, and <em>untreated bamboo will split</em> is true of bamboo in general rather than of one dated event. The other three all attach to specific future occasions — a retest, a publication date, a stage in a process — and each carries a time expression that a general property would not need.' },

      { id: 't4l3ck-3', type: 'choose', tag: 'dyn-would', level: 'B2+',
        stem: 'Which sentence tells you that the clerk made a decision, rather than that something was beyond him?',
        options: [
          'The clerk couldn\'t stamp the form without a second signature.',
          'The clerk needn\'t stamp the form without a second signature.',
          'The clerk mightn\'t stamp the form without a second signature.',
          'The clerk wouldn\'t stamp the form without a second signature.'
        ],
        answer: 3,
        why: '<em>Wouldn\'t</em> reports a refusal, so the decision is his. <em>Couldn\'t</em> makes it inability or lack of authority, so the decision is somebody else\'s and he is merely constrained. <em>Mightn\'t</em> is a weak guess about what may happen, not a report of what did. <em>Needn\'t</em> says there was no obligation on him, which is a statement about the rules rather than about his behaviour.' },

      { id: 't4l3ck-4', type: 'equiv', tag: 'dyn-would', level: 'B2+',
        given: 'However many times we asked, the landlord refused to give us a written receipt.',
        stem: 'Which sentence says the same thing?',
        options: [
          'However many times we asked, the landlord couldn\'t give us a written receipt.',
          'However many times we asked, the landlord shouldn\'t give us a written receipt.',
          'However many times we asked, the landlord wouldn\'t give us a written receipt.',
          'However many times we asked, the landlord would have given us a written receipt.'
        ],
        answer: 2,
        why: 'Repeated asking met with repeated declining, which is past refusal and therefore <em>wouldn\'t</em>. <em>Couldn\'t</em> would say he was unable to, and a landlord with a receipt book is not. <em>Shouldn\'t</em> turns it into the speaker\'s view of what was proper. <em>Would have given</em> is an unreal past consequent and says the receipt never came but might have, which reverses the story.' },

      { id: 't4l3ck-5', type: 'cloze', tag: 'dyn-habit', level: 'B2+',
        passage: 'My first landlady kept a ledger of everything that happened in the building. Whenever a tap dripped, she ___(1)___ write the date beside the room number and telephone the plumber before breakfast.\n\nTenants who paid late ___(2)___ a polite note under the door within a day. She is eighty-three now, and she ___(3)___ still tell you which room had the worst window.',
        blank: '(2)',
        stem: 'Choose the best option for blank (2).',
        options: ['would find', 'used to finding', 'will find', 'must find'],
        answer: 0,
        why: 'The paragraph is describing what happened over and over in the past, which is habitual <em>would</em>. <em>Will find</em> is the near miss: characteristic <em>will</em> is the same habit reading, but in present time, and this landlady\'s routine belongs to the past — she is eighty-three now. <em>Used to finding</em> is not possible, since <em>used to</em> takes a bare infinitive (<em>used to find</em>). <em>Must find</em> turns the note into an obligation laid on the tenants, when the point is that the landlady put it there whether they looked for it or not.' },

      { id: 't4l3ck-6', type: 'gap', tag: 'dyn-will', level: 'B2+',
        blank: '(1)',
        lines: [
          { who: 'Supervisor', text: 'The haulage firm says its driver is only ten minutes away, but he ___(1)___ come back for the damaged pallets. He insists they were fine when he left them.' },
          { who: 'Nok', text: 'Then I ___(2)___ ring the depot myself and ask for the manager.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['won\'t', 'can\'t', 'mustn\'t', 'shouldn\'t'],
        answer: 0,
        why: 'The driver is close by and is giving his own reason for staying away, so this is a refusal: <em>won\'t</em>. <em>Can\'t</em> is the near miss — it would be right if he were stuck somewhere — but a driver ten minutes away is not unable, and his reason is an argument, not an obstacle. <em>Mustn\'t</em> would mean somebody has forbidden him, which is a different source of authority. <em>Shouldn\'t</em> would be the supervisor advising against his return, when the whole point is that the pallets need collecting.' }
    ]
  }
});

TOPICS.push(T4);
