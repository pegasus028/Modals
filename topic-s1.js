/* ===========================================================================
   STAGE 01 — The Modal Frame
   Installs the founding idea: a modal is an operator on a proposition, not a
   verb describing an event — and the signature, the slot chain and the
   semi-modals all follow from that.
   =========================================================================== */

var T1 = {
  id: 't1', n: 1, code: 'Stage 01', art: 'chip',
  name: 'The Modal Frame',
  cefr: 'B1–B1+',
  blurb: 'A modal does not describe the event; it frames it. Every strange thing about modal grammar follows from that one fact.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T1.levels.push({
  id: 't1l1', n: 1, name: 'What a modal actually does', cefr: 'B1',
  blurb: 'A sentence with a modal has two layers, and only one of them is about the world.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't1l1s1', name: 'The two layers: proposition and frame', cefr: 'B1',
      theory: {
        key: 'A modal adds no information about the event; it tells you what the speaker is doing with the event — doubting it, deducing it, requiring it, permitting it.',
        body: [
          'Put two sentences side by side. <em>It rains in April.</em> <em>It may rain in April.</em> The first makes a claim about rainfall. The second makes no claim about rainfall at all — it reports how far the speaker is prepared to commit. The rain is unchanged; the speaker has stepped back from it.',
          'So every modal sentence has <strong>two layers</strong>. Underneath sits the <strong>proposition</strong>, the state of affairs being talked about: <em>the team win</em>. Above it sits the <strong>frame</strong>: <em>the team <u>will</u> win</em>, <em>the team <u>might</u> win</em>, <em>the team <u>must</u> win</em>, <em>the team <u>can\'t</u> win</em>. Change the modal and the picture of the match never changes. Only your relationship to it does.',
          'There is a quick test. Try to disagree. A proposition can be contradicted with evidence — <em>no, they lost</em>. A frame cannot be argued with in the same way, because it is a report of somebody\'s position, and <em>no, you don\'t think that</em> is a completely different kind of argument. If you cannot attack a word with evidence about the world, that word is not describing the world.',
          'All of which makes a modal an <strong>operator</strong>: something standing outside a proposition and looking in, rather than a verb living inside it. Operators do not conjugate, do not stack, and do not carry a tense of their own — and English modals do none of those three things. Everything in this stage is that one paragraph, worked out.'
        ],
        simple: [
          'A normal verb tells you what happens. A modal tells you what the speaker thinks about what happens.',
          '<em>It rains in April</em> is about the rain. <em>It may rain in April</em> is about the speaker — about how sure they are.',
          'Change the modal and the event stays the same: <em>the team will win</em>, <em>might win</em>, <em>must win</em>. Only the speaker\'s position moves.'
        ],
        examples: [
          { s: 'The bus <b>is</b> late again.', g: 'a plain claim about the bus; the speaker is inside the event.' },
          { s: 'The bus <b>must</b> be late again.', g: 'the same event, now framed as a deduction the speaker has reasoned out.' },
          { s: 'Students <b>may</b> use the library after six.', g: 'the frame is permission; nothing at all is said about whether anyone does.' },
          { s: '<s>The team must to win on Saturday.</s>', g: 'the frame attaches straight to the proposition; nothing is allowed to stand between them.' }
        ]
      },
      items: [
        { id: 't1l1s1-1', type: 'choose', tag: 'frame-twolayer', level: 'B1',
          stem: 'Which sentence tells you what the weather at the ceremony actually did, rather than how sure the speaker is about it?',
          options: [
            'It may rain during the ceremony.',
            'It rained during the ceremony.',
            'It might rain during the ceremony.',
            'It could rain during the ceremony.'
          ],
          answer: 1,
          why: 'Only option 2 asserts anything about the weather: the speaker reports an event, and you could contradict them with evidence. <em>May</em>, <em>might</em> and <em>could</em> in options 1, 3 and 4 leave the rain entirely undecided and tell you instead how far the speaker will commit to it — three different words doing one job. Notice that the asserting option has to change tense: without a modal there is no way to make a bare claim about weather that has not happened yet, which is the first sign that a modal is doing something a tense cannot.' },

        { id: 't1l1s1-2', type: 'judge', tag: 'frame-twolayer', level: 'B1',
          given: 'The 07:40 train <em>may</em> be cancelled on Friday.',
          stem: 'The speaker is telling you that the 07:40 train will not run on Friday.',
          answer: 1,
          why: 'False. <em>May</em> leaves the cancellation open, offering it as one possibility among others, so nothing at all has been asserted about Friday\'s train. This is not a case of having too little information either: the sentence tells us something quite definite, but what it tells us is how far the speaker will commit, not what the timetable will do.' },

        { id: 't1l1s1-3', type: 'choose', tag: 'frame-twolayer', level: 'B1',
          stem: 'All four sentences are about the same thing: the committee accepting the proposal. In which one is accepting it something the committee has to do, rather than something the speaker expects to happen?',
          options: [
            'The committee will accept the proposal at Friday\'s meeting.',
            'The committee might accept the proposal at Friday\'s meeting.',
            'The committee must accept the proposal at Friday\'s meeting.',
            'The committee could accept the proposal at Friday\'s meeting.'
          ],
          answer: 2,
          why: 'Every option holds the same proposition still and changes only the one word in front of it. <em>Will</em>, <em>might</em> and <em>could</em> in options 1, 2 and 4 are all predictions — strong, weak and weak — and none of them places any obligation on the committee. Only option 3 makes accepting the proposal something the committee is required to do, and notice that it says nothing at all about how likely acceptance is. The meeting has not changed; only the speaker\'s relationship to it has.' },

        { id: 't1l1s1-4', type: 'sort', tag: 'frame-twolayer', level: 'B1',
          stem: 'Does the sentence tell you what happens, or how the speaker sees it?',
          bins: [
            { key: 'desc', label: 'What happens', hint: 'a plain claim about the world' },
            { key: 'frame', label: 'How the speaker sees it', hint: 'how sure, how necessary, how permitted' }
          ],
          items: [
            { text: 'The lift <em>breaks down</em> twice a month.', bin: 'desc' },
            { text: 'The lift <em>must</em> be broken again.', bin: 'frame' },
            { text: 'Visitors <em>sign</em> the register at reception.', bin: 'desc' },
            { text: 'Visitors <em>must</em> sign the register at reception.', bin: 'frame' },
            { text: 'The report <em>runs</em> to forty pages.', bin: 'desc' },
            { text: 'The report <em>might</em> run to forty pages.', bin: 'frame' }
          ],
          why: 'Each pair holds the proposition still and changes only the layer above it. <em>The lift breaks down</em> is a fact about the lift; <em>the lift must be broken</em> is a fact about the speaker\'s reasoning. <em>Visitors sign</em> reports a routine; <em>visitors must sign</em> imposes one. In no pair does the second sentence add any information about the world.' },

        { id: 't1l1s1-5', type: 'equiv', tag: 'frame-twolayer', level: 'B1',
          given: 'I don\'t know whether the clinic opens on Saturday.',
          stem: 'Which sentence says the same thing using a modal?',
          options: [
            'The clinic doesn\'t open on Saturday.',
            'The clinic may open on Saturday.',
            'The clinic must open on Saturday.',
            'The clinic opens on Saturday.'
          ],
          answer: 1,
          why: '<em>May</em> is the frame that matches <em>I don\'t know</em>: it leaves the proposition open. Options 1 and 4 drop the frame and assert in opposite directions, and either would be claiming knowledge the speaker has just denied having. <em>Must</em> is a frame, but the wrong one — it reports a confident deduction, which is the opposite of not knowing.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't1l1s2', name: 'The signature: no -s, no to, no double modal', cefr: 'B1',
      theory: {
        key: 'A modal takes no third-person -s, takes no to, and cannot sit under another modal — three facts with a single cause, which is that the modal is not the verb of the clause.',
        body: [
          'An ordinary verb agrees with its subject: <em>he works</em>, <em>she signs</em>. A modal never does: <em>he must</em>, <em>she can</em>, <em>it will</em>. <s>He musts</s> is impossible not because modals are irregular but because agreement is something the <strong>verb of the clause</strong> does — and the modal is not that verb. It sits above the clause, and there is nothing up there for it to agree with.',
          'The same reasoning removes the <em>to</em>. <em>To</em> marks an infinitive that is the object of a verb: <em>I want <u>to</u> go</em>, <em>I decided <u>to</u> go</em>. A modal does not take the proposition as an object; it operates on it directly, so nothing may stand between them: <em>I must go</em>, never <s>I must to go</s>. The single apparent exception, <em>ought to</em>, has kept a <em>to</em> for centuries and is the last survivor of an older pattern.',
          'And there is <strong>one operator slot per verb phrase</strong>, which is why <s>he will can come</s> is impossible. This is not a rule about which words go together; it is a fact about how many frames a clause may carry. If you need two modal ideas at once, one of them has to be expressed some other way: <em>he will <u>be able to</u> come</em>.',
          'So the three facts are really one fact, and they give you a single check you can run in a second. Find the verb phrase. Is its first word a modal? Then there must be exactly one of them, the modal must have no ending, and the very next word must be a bare verb. An <em>-s</em>, a <em>to</em> or a second modal in that space means the frame has been built wrongly.'
        ],
        simple: [
          'Modals never take <em>-s</em>: <em>he must</em>, not "he musts". The <em>-s</em> belongs to ordinary verbs only.',
          'Nothing goes between a modal and its verb: <em>I must go</em>, not "I must to go". Only <em>ought</em> keeps a <em>to</em>.',
          'You can only use one modal at a time: not "he will can come" but <em>he will be able to come</em>.'
        ],
        examples: [
          { s: 'She <b>must sign</b> the form before Friday.', g: 'no ending on must, no to after it, one modal only.' },
          { s: '<s>She must to sign the form before Friday.</s>', g: 'the to comes from a verb-plus-verb pattern English does not use here.' },
          { s: '<s>He will can finish the report tonight.</s>', g: 'two operators in one slot; English says he will be able to finish.' },
          { s: 'He <b>ought to</b> apologise.', g: 'ought is the one modal that has kept its to.' }
        ]
      },
      items: [
        { id: 't1l1s2-1', type: 'choose', tag: 'frame-form', level: 'B1',
          stem: 'Every student ______ a library card before the end of week one.',
          options: ['musts get', 'must to get', 'must get', 'must gets'],
          answer: 2,
          why: '<em>Must get</em> is the only form that obeys all three parts of the signature. <em>Musts</em> puts subject agreement on the operator, where agreement can never go; <em>must to get</em> inserts an infinitive marker into a space that must stay empty; <em>must gets</em> moves the <em>-s</em> down onto the main verb, but a verb under a modal is bare for every subject alike.' },

        { id: 't1l1s2-2', type: 'spot', tag: 'frame-form', level: 'B1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The health centre says that staff', 'must to wash their hands', 'for twenty seconds', 'before every appointment.'],
          answer: 1,
          fix: 'must wash their hands',
          why: 'A modal is followed by a bare infinitive with nothing in between, so <em>must wash</em>. The <em>to</em> has been imported from a verb-plus-verb pattern, which is how the idea is built in Thai but not in English. The other three parts are sound: <em>says that</em> introduces the report correctly, and both of the final phrases are ordinary adverbials.' },

        { id: 't1l1s2-3', type: 'choose', tag: 'frame-form', level: 'B1',
          stem: 'Which sentence is grammatical?',
          options: [
            'By next term the new intake will can use the online catalogue.',
            'By next term the new intake can will use the online catalogue.',
            'By next term the new intake will could use the online catalogue.',
            'By next term the new intake will be able to use the online catalogue.'
          ],
          answer: 3,
          why: 'There is one modal slot, so <em>will can</em>, <em>will could</em> and <em>can will</em> are the same error in three different arrangements: stacked, stacked with a remote form, and reversed. <em>Be able to</em> is not a more elegant way of saying <em>can</em> here — it is the only way, because <em>can</em> has no form at all that can follow another verb.' },

        { id: 't1l1s2-4', type: 'build', tag: 'frame-form', level: 'B1',
          stem: 'Put the words in order to make one correct sentence.',
          tiles: ['the caretaker', 'should', 'check', 'the fire doors', 'every morning'],
          solution: 'the caretaker should check the fire doors every morning',
          alt: ['every morning the caretaker should check the fire doors'],
          why: 'The modal comes first in the verb phrase and the verb after it stays bare — <em>check</em>, never "checks" and never "to check". The subject belongs to the whole frame, not to <em>should</em> on its own, which is why <em>should</em> looks the same whether the caretaker is one person or twenty.' },

        { id: 't1l1s2-5', type: 'choose', tag: 'frame-form', level: 'B1',
          stem: 'A journal is writing its guidance for reviewers. Which sentence is correctly formed?',
          options: [
            'A reviewer musts declare any conflict of interest.',
            'A reviewer must to declare any conflict of interest.',
            'A reviewer must declare any conflict of interest.',
            'A reviewer will must declare any conflict of interest.'
          ],
          answer: 2,
          why: 'Only option 3 leaves the modal bare and the verb bare. Option 1 gives <em>must</em> a third-person <em>-s</em> that no modal ever takes; option 2 inserts <em>to</em> between the frame and the proposition; option 4 stacks two operators in a slot that holds exactly one, and the repair for that would be <em>will have to declare</em>.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't1l1s3', name: 'Questions, negatives and short answers', cefr: 'B1',
      theory: {
        key: 'A modal negates, inverts and stands alone without help, because an operator is exactly what <em>do</em> is brought in to supply when a clause has not got one.',
        body: [
          'Watch an ordinary verb. <em>She works on Saturdays</em> becomes <em>She <u>doesn\'t</u> work</em>, <em><u>Does</u> she work?</em>, <em>Yes, she <u>does</u>.</em> The <em>do</em> appears from nowhere and means nothing. It is there purely to hold the negation, the inversion and the tense, because the lexical verb cannot hold them and something must.',
          'A modal is already sitting in that position, so no <em>do</em> is needed — and none is permitted: <em>She can\'t work on Saturdays</em>, <em>Can she work on Saturdays?</em>, <em>Yes, she can.</em> <s>Does she can work</s> is doubly wrong, because it drafts in an operator where one is already on duty.',
          'There are four of these behaviours, traditionally remembered as <strong>NICE</strong>. <strong>N</strong>egation, with <em>not</em> attaching directly: <em>cannot</em>, <em>must not</em>. <strong>I</strong>nversion for questions: <em>Can she…?</em> <strong>C</strong>ode, meaning survival on its own when the verb is dropped: <em>She can, and he can too.</em> <strong>E</strong>mphasis, carrying the stress: <em>I <u>can</u> do it.</em>',
          'Treat these four as a test rather than a list. Anything that does them belongs to the modal class; anything that reaches for <em>do</em> does not. That is what makes the test worth learning: later in this stage it will tell you, in one move, that <em>have to</em> is an ordinary verb wearing a modal\'s meaning.'
        ],
        simple: [
          'Ordinary verbs borrow <em>do</em> for questions and negatives: <em>Does she work? She doesn\'t work.</em>',
          'Modals do the job themselves: <em>Can she work? She can\'t work.</em> Never put <em>do</em> with a modal.',
          'A short answer repeats the modal: <em>Can you come? — Yes, I can.</em> Not "Yes, I do."'
        ],
        examples: [
          { s: '<b>Should</b> we book the hall now?', g: 'the modal itself moves in front of the subject; no do is needed.' },
          { s: 'They <b>mustn\'t</b> park on the grass.', g: 'not attaches straight to the modal.' },
          { s: 'I can\'t come, but Nan <b>can</b>.', g: 'code: the modal survives alone when the verb is dropped.' },
          { s: '<s>Does she can drive a minibus?</s>', g: 'two operators; can is already doing the inverting.' }
        ]
      },
      items: [
        { id: 't1l1s3-1', type: 'choose', tag: 'frame-nice', level: 'B1',
          stem: 'Which is the correct question?',
          options: [
            'Do you can help with the stall on Saturday?',
            'Can you help with the stall on Saturday?',
            'Are you can help with the stall on Saturday?',
            'Will you can help with the stall on Saturday?'
          ],
          answer: 1,
          why: 'A modal moves in front of the subject by itself, so <em>Can you help…?</em> needs nothing added to it. Option 1 drafts in <em>do</em>, which English supplies only where there is no operator; option 3 tries <em>be</em> in a role it cannot fill; option 4 inverts correctly but then stacks a second modal into a slot that holds exactly one, and the question it is reaching for is <em>Will you be able to help…?</em> The key is the shortest option here, and that is the point rather than an accident: everything the other three add is something a modal question has no room for.' },

        { id: 't1l1s3-2', type: 'gap', tag: 'frame-nice', level: 'B1',
          blank: '(1)',
          lines: [
            { who: 'Ploy', text: 'The hall is free on Thursday. ___(1)___ we book it for the rehearsal?' },
            { who: 'Anan', text: 'We should, but I can\'t get there before six.' },
            { who: 'Ploy', text: 'That is fine. Kwan can, so she will open up for us.' }
          ],
          stem: 'Choose the best option for gap (1).',
          options: ['Do we should', 'Will we should', 'Are we should', 'Should we'],
          answer: 3,
          why: 'The modal moves to the front of the clause on its own: <em>Should we book it…?</em> Each of the other three puts a second operator into a slot that <em>should</em> has already filled — <em>do</em>, <em>are</em> and a stacked <em>will</em> alike. That is why the right answer is the shortest one: a modal question needs nothing added to it. Notice too that <em>Kwan can</em> in the last line stands with no verb after it at all.' },

        { id: 't1l1s3-3', type: 'choose', tag: 'frame-nice', level: 'B1',
          stem: '"Will the results be posted online?" — "______"',
          options: ['Yes, they are.', 'Yes, they do.', 'Yes, they will.', 'Yes, they can.'],
          answer: 2,
          why: 'A short answer repeats the operator from the question, and the operator here is <em>will</em>. <em>Do</em> belongs to questions that had no operator of their own; <em>are</em> would answer a <em>be</em>-question such as "Are the results online?"; and <em>can</em> is a perfectly good short answer to a different question, since it echoes an operator this one never used and replies about what is possible instead of what will happen.' },

        { id: 't1l1s3-4', type: 'spot', tag: 'frame-nice', level: 'B1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The panel doesn\'t can release the figures', 'until the audit is complete,', 'so the department will publish them', 'in the autumn instead.'],
          answer: 0,
          fix: 'The panel cannot release the figures',
          why: 'A modal takes <em>not</em> directly — <em>cannot</em>, <em>can\'t</em> — and never borrows <em>do</em>, because <em>do</em> exists only to supply an operator where a clause has none. The remaining parts are correct: <em>until the audit is complete</em> is a normal time clause, and <em>will publish</em> is a single modal with a bare verb after it.' },

        { id: 't1l1s3-5', type: 'equiv', tag: 'frame-nice', level: 'B1',
          given: 'Nan is able to drive the minibus, and Somchai is able to drive it too.',
          stem: 'Which sentence says the same thing most naturally?',
          options: [
            'Nan can drive the minibus, and Somchai does too.',
            'Nan can drive the minibus, and Somchai can too.',
            'Nan can drive the minibus, and Somchai is too.',
            'Nan can drive the minibus, and Somchai will too.'
          ],
          answer: 1,
          why: 'When the verb is dropped the modal stays behind to hold the clause up — that is the code property, and it is why the second half of option 2 needs no verb at all. <em>Somchai does too</em> echoes an operator that is not there, since the first clause contains no <em>do</em>; <em>Somchai is too</em> echoes a <em>be</em> that is not there either. <em>Somchai will too</em> is well formed English, but <em>will</em> is a different operator from <em>can</em>, so it reports willingness rather than the ability the given sentence describes.' }
      ]
    }
  ],
  check: {
    id: 't1l1ck', name: 'Stage Check · What a modal actually does',
    items: [
      { id: 't1l1ck-1', type: 'choose', tag: 'frame-twolayer', level: 'B1',
        stem: 'All four sentences start from the same idea: <em>the ferry runs on Sundays</em>. Which one tells you nothing new about the ferry and only reports how sure the speaker is?',
        options: [
          'The ferry ran on Sundays last year.',
          'The ferry should run on Sundays.',
          'The ferry runs on Sundays and Mondays.',
          'The ferry stopped running on Sundays.'
        ],
        answer: 1,
        why: 'Option 2 leaves the timetable exactly where it was and reports the speaker\'s expectation about it, which is the frame layer doing its work. Option 1 moves the claim into past time, option 3 adds a day the original never mentioned, and option 4 asserts a change in the service. Each of those three tells you something new about the ferry; only the modal comments on the proposition without altering it.' },

      { id: 't1l1ck-2', type: 'choose', tag: 'frame-form', level: 'B1',
        stem: 'Which sentence is correct?',
        options: [
          'My sister cans ride a motorbike, but she won\'t ride in the rain.',
          'My sister can to ride a motorbike, but she won\'t ride in the rain.',
          'My sister can ride a motorbike, but she won\'t to ride in the rain.',
          'My sister can ride a motorbike, but she won\'t ride in the rain.'
        ],
        answer: 3,
        why: 'Both clauses need the same shape: one modal, then a bare verb, nothing in between. Option 1 puts an agreement <em>-s</em> on the operator itself; option 2 inserts <em>to</em> after <em>can</em>; option 3 hides the same <em>to</em> in the second clause after <em>won\'t</em>, where it is just as impossible. Only option 4 keeps both frames bare.' },

      { id: 't1l1ck-3', type: 'spot', tag: 'frame-form', level: 'B1',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The museum announced that visitors', 'will can book free tickets', 'from the first of next month', 'through its new website.'],
        answer: 1,
        fix: 'will be able to book free tickets',
        why: 'There is one modal slot, so <em>will</em> and <em>can</em> cannot share it. Because <em>can</em> has no form that can follow another verb, the only repair is the periphrastic <em>be able to</em>. The other parts are sound: <em>announced that</em> reports correctly, and both prepositional phrases are well formed.' },

      { id: 't1l1ck-4', type: 'gap', tag: 'frame-nice', level: 'B1',
        blank: '(4)',
        lines: [
          { who: 'Mali', text: '___(4)___ I hand the assignment in on Monday instead?' },
          { who: 'Mr Preecha', text: 'You can, but only if you email me tonight.' },
          { who: 'Mali', text: 'I will. Thank you.' }
        ],
        stem: 'Choose the best option for gap (4).',
        options: ['Do I can', 'Will I can', 'Can I to', 'Can I'],
        answer: 3,
        why: 'The modal inverts with the subject on its own, so the question is simply <em>Can I…?</em> <em>Do I can</em> supplies an operator where <em>can</em> is already one; <em>can I to</em> inserts an infinitive marker a modal never takes; <em>will I can</em> puts two modals in a slot that holds exactly one, and the repair for that would be <em>Will I be able to…?</em> The reply <em>You can</em> echoes the operator, as a short answer must.' },

      { id: 't1l1ck-5', type: 'equiv', tag: 'frame-twolayer', level: 'B1',
        given: 'I am certain that the office is closed today.',
        stem: 'Which sentence shows that the speaker is sure, using a modal?',
        options: [
          'The office is closed today.',
          'The office may be closed today.',
          'The office must be closed today.',
          'The office can be closed today.'
        ],
        answer: 2,
        why: '<em>Must</em> is the frame for a conclusion the speaker has reasoned their way to, which is what <em>I am certain</em> reports. Option 1 drops the frame and states the closure as a bare fact, losing the speaker altogether; <em>may</em> frames it as one possibility among several, which is far weaker; and <em>can be closed</em> says that closure is something which sometimes happens, not that it has happened today.' },

      { id: 't1l1ck-6', type: 'judge', tag: 'frame-nice', level: 'B1',
        given: 'Kanya can\'t come to the rehearsal, but Tim can.',
        stem: 'The words <em>come to the rehearsal</em> have been left out after the final <em>can</em>.',
        answer: 0,
        why: 'True. This is the code property: when the verb phrase is dropped, the modal remains behind to carry the clause on its own, and the missing words are recovered from the clause before it. An ordinary verb cannot do this — it would need <em>does</em> — and that difference is one of the tests that places <em>can</em> in the operator class.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T1.levels.push({
  id: 't1l2', n: 2, name: 'The slot chain', cefr: 'B1+',
  blurb: 'One fixed order — MODAL, have, be, be, verb — explains every complex modal form you will ever meet.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't1l2s1', name: 'Modal + bare infinitive', cefr: 'B1+',
      theory: {
        key: 'The modal is always the first word of the verb phrase and whatever follows it is always bare — the first link of a chain that never reorders.',
        body: [
          'Fix the base case first. Whatever else happens later, the verb phrase after a modal begins with a <strong>bare infinitive</strong>: <em>must go</em>, <em>will be</em>, <em>should have</em>, <em>can be</em>. The bare form carries no <em>-s</em>, no <em>-ed</em> and no <em>to</em>. It is not "the present tense"; it is the form with no tense at all, which is precisely what an operator needs beneath it.',
          'Why bare? Because tense and agreement are properties of a finite clause, and the modal has taken that position for itself. Nothing is left over for the following verb to agree with, so it appears in its plainest shape — and in that same shape for every subject, every modal and every time reference: <em>I / she / they <u>must go</u></em>.',
          'The same fact explains why a modal phrase has no past of its own. <s>He must go yesterday</s> is impossible: the modal cannot be tensed, and the bare verb underneath it cannot be tensed either, so there is nowhere in the phrase for a past to live. English pushes it one link further down instead, using <em>have</em>: <em>he <u>must have gone</u></em>. Stage 6 is built entirely on that move.',
          'The practical payoff is a one-pass check. Find the first word of the verb phrase. If it is a modal, the very next word is bare. A <em>to</em>, an <em>-s</em>, an <em>-ed</em> or a second modal in that position means the chain has broken at its first link, and nothing further down will repair it.'
        ],
        simple: [
          'After a modal, the next verb has no ending and no <em>to</em>: <em>must go</em>, <em>will be</em>, <em>can have</em>.',
          'This is true for every subject: <em>I must go</em>, <em>she must go</em>, <em>they must go</em>.',
          'A modal cannot be made past. Not "he must go yesterday" but <em>he must have gone</em>.'
        ],
        examples: [
          { s: 'The gates <b>will close</b> at nine.', g: 'modal first, bare verb second.' },
          { s: 'Every application <b>should include</b> two references.', g: 'no s on include, even though the subject is singular.' },
          { s: '<s>The committee will to meet on Tuesday.</s>', g: 'the first link is bare; nothing precedes the verb.' },
          { s: '<s>He must finish it yesterday.</s>', g: 'a modal cannot be put into the past; English says he must have finished it.' }
        ]
      },
      items: [
        { id: 't1l2s1-1', type: 'choose', tag: 'frame-form', level: 'B1+',
          stem: 'Neither of the two proposals ______ the minimum safety standard.',
          options: ['can meets', 'cans meet', 'can to meet', 'can meet'],
          answer: 3,
          why: 'The subject <em>neither</em> is singular, so a student watching for agreement will want an <em>-s</em> somewhere — but there is nowhere to put one. The modal is the finite word and modals never agree, and the verb beneath a modal is bare for every subject alike, so <em>can meet</em> serves <em>neither</em>, <em>I</em> and <em>they</em> equally. <em>Can to meet</em> adds an infinitive marker the chain has no room for.' },

        { id: 't1l2s1-2', type: 'spot', tag: 'frame-form', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The authors argue that a short questionnaire', 'might to produce more reliable answers', 'than a long interview,', 'particularly with younger respondents.'],
          answer: 1,
          fix: 'might produce more reliable answers',
          why: 'The first link after a modal is always bare, so <em>might produce</em>. The <em>to</em> has come across from verb-plus-verb patterns such as <em>want to produce</em>, where the second verb genuinely is the object of the first; a modal takes no object, it frames a whole clause. The rest is well formed: <em>argue that</em> introduces the claim, the comparison with <em>than</em> is complete, and the final phrase is an ordinary adverbial.' },

        { id: 't1l2s1-3', type: 'cloze', tag: 'frame-form', level: 'B1+',
          passage: 'Notice to all residents.\n\nThe lift in Block B ___(1)___ out of service from Monday to Wednesday while the cables are replaced. Residents on the upper floors ___(2)___ the stairs during this period, and anyone who needs help with shopping should speak to the caretaker in Flat 2.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['will is', 'will being', 'will to be', 'will be'],
          answer: 3,
          why: 'The verb under a modal is bare, and the bare form of <em>is</em> is <em>be</em>. <em>Will is</em> keeps the third-person form, which the slot has no room for; <em>will to be</em> inserts an infinitive marker; <em>will being</em> uses the <em>-ing</em> form, which belongs further down the chain and only ever after a <em>be</em> of its own. It is the irregularity of <em>be</em> that makes this link visible, since with most verbs the bare form and the plain present look identical.' },

        { id: 't1l2s1-4', type: 'choose', tag: 'frame-form', level: 'B1+',
          stem: 'All four sentences are trying to say that the speaker is sure the report was finished yesterday. Which one is correct English?',
          options: [
            'She must finished the report yesterday.',
            'She must finish the report yesterday.',
            'She musted finish the report yesterday.',
            'She must have finished the report yesterday.'
          ],
          answer: 3,
          why: 'A modal has no past tense and the bare verb beneath it cannot carry one either, so the past has to travel one link further down, into <em>have</em> plus a participle. Option 1 puts a past ending in the bare-infinitive slot, the one place it cannot go; option 2 leaves the whole phrase in the present and asks the adverbial <em>yesterday</em> to drag it backwards, which is why it reads as nonsense; option 3 invents a past form of the modal itself, and no modal in the language has one. Option 4 is longer than the others only because the extra link is the entire repair: <em>must have finished</em> is a deduction made now about something already over.' },

        { id: 't1l2s1-5', type: 'equiv', tag: 'frame-form', level: 'B1+',
          given: 'The regulations do not permit staff to park in the visitor bays.',
          stem: 'Which sentence says the same thing?',
          options: [
            'Staff cannot park in the visitor bays.',
            'Staff do not can park in the visitor bays.',
            'Staff cannot to park in the visitor bays.',
            'Staff can not parking in the visitor bays.'
          ],
          answer: 0,
          why: 'The modal supplies the whole frame by itself: <em>not</em> attaches to the operator and the verb stays bare. Option 2 borrows <em>do</em>, which English uses only where no operator is present; option 3 adds the infinitive marker a modal never takes; option 4 reaches for <em>-ing</em>, which needs a <em>be</em> above it that is nowhere in the sentence. Only the first keeps one operator, one negator and one bare verb.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't1l2s2', name: 'Modal + be + -ing, modal + be + participle', cefr: 'B1+',
      theory: {
        key: 'MODAL, then have, then be for the progressive, then be for the passive, then the main verb: one fixed order in which each link decides the shape of the next.',
        body: [
          'Here is the chain in full: <strong>MODAL · have · be · be · main verb</strong>. All five links at once is rare — <em>might have been being examined</em> — but the <strong>order never varies</strong>, and no link ever jumps in front of another. Learn the order once and every complicated modal form you will ever meet becomes readable.',
          'The engine driving it is simple: <strong>each auxiliary determines the form of whatever follows it</strong>. <em>Have</em> demands a past participle (<em>have gone</em>). Progressive <em>be</em> demands an <em>-ing</em> form (<em>be going</em>). Passive <em>be</em> demands a past participle (<em>be taken</em>). The modal demands the bare form. Every link obeys the link above it, and the modal obeys nobody.',
          'That is why the endings seem to move around. In <em>might be examining</em>, the <em>-ing</em> sits on the main verb; in <em>might be being examined</em>, the <em>-ing</em> sits on the second <em>be</em>. Nothing has moved at all: <em>be</em> is simply the word that happens to follow the progressive <em>be</em> in the second sentence, so <em>be</em> is the word that takes the ending.',
          'So you never memorise "modal + be + -ing" as a structure. You <strong>build</strong> it: put the modal in the slot, then add only the links the meaning needs, in order, each one shaping the word after it. A student who memorises structures has to recognise each one; a student who builds them can assemble a form they have never seen.'
        ],
        simple: [
          'The order is always the same: modal, then <em>have</em>, then <em>be</em> for <em>-ing</em>, then <em>be</em> for the passive, then the main verb.',
          'Each helper decides the form of the next word: <em>have</em> takes <em>-ed/-en</em>, <em>be</em> takes <em>-ing</em>, passive <em>be</em> takes <em>-ed/-en</em>.',
          '<em>She might be waiting</em> (it is happening now). <em>The form must be signed</em> (somebody signs it).'
        ],
        examples: [
          { s: 'She <b>might be waiting</b> at the north gate.', g: 'modal, then be, then -ing: a guess about something in progress.' },
          { s: 'Every application <b>must be signed</b> by a parent.', g: 'modal, then be, then a past participle: the passive.' },
          { s: 'The samples <b>may have been damaged</b> in transit.', g: 'four links, in their fixed order.' },
          { s: '<s>The form must signed by a parent.</s>', g: 'the passive needs its be; without it nothing supports the participle.' }
        ]
      },
      items: [
        { id: 't1l2s2-1', type: 'choose', tag: 'frame-chain', level: 'B1+',
          stem: 'Don\'t call her — she ______ her driving test at the moment.',
          options: ['might take', 'might be take', 'might taking', 'might be taking'],
          answer: 3,
          why: 'The reason not to call is that the test is under way, and progressive <em>be</em> plus <em>-ing</em> is the link that says so. <em>Might take</em> guesses about the test as a whole event rather than about what is happening right now, so it clashes with <em>at the moment</em>; <em>might taking</em> has an <em>-ing</em> with no <em>be</em> to license it, and a modal is never followed directly by an <em>-ing</em> form; <em>might be take</em> keeps the <em>be</em> but leaves the verb bare, and progressive <em>be</em> always demands <em>-ing</em>.' },

        { id: 't1l2s2-2', type: 'build', tag: 'frame-chain', level: 'B1+',
          stem: 'Put the words in order. The parcels are the things that get checked.',
          tiles: ['the parcels', 'must', 'be', 'checked', 'at the gate'],
          solution: 'the parcels must be checked at the gate',
          alt: ['at the gate the parcels must be checked'],
          why: 'The chain runs modal, then passive <em>be</em>, then the past participle. "Must checked" would leave the participle with nothing holding it up, and "must be check" would ignore the fact that passive <em>be</em> always demands a participle. The parcels do not do the checking, and moving the doer out of the subject position is exactly what the passive link is for.' },

        { id: 't1l2s2-3', type: 'choose', tag: 'frame-chain', level: 'B1+',
          stem: 'A laboratory report is describing a possible problem. Which sentence uses the chain correctly?',
          options: [
            'The soil samples may have been contaminated during storage.',
            'The soil samples may have contaminated during storage.',
            'The soil samples may been contaminated during storage.',
            'The soil samples may have being contaminated during storage.'
          ],
          answer: 0,
          why: '<em>May · have · been · contaminated</em> is the chain in order, each link shaping the next: the modal takes a bare <em>have</em>, <em>have</em> takes the participle <em>been</em>, and passive <em>be</em> takes the participle <em>contaminated</em>. Option 2 drops the passive <em>be</em> and so claims the samples did the contaminating; option 3 drops <em>have</em>, leaving <em>been</em> with nothing above it; option 4 supplies an <em>-ing</em> where <em>have</em> has already demanded a participle.' },

        { id: 't1l2s2-4', type: 'spot', tag: 'frame-chain', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['All laboratory coats must', 'be washing at sixty degrees', 'and hung to dry', 'in the drying room.'],
          answer: 1,
          fix: 'be washed at sixty degrees',
          why: 'The coats do not wash anything, so this is a passive, and passive <em>be</em> takes a past participle: <em>be washed</em>. <em>Be washing</em> is the progressive link, which would put the coats to work. The later <em>hung to dry</em> is itself a participle, and that parallel is the clue that the first verb should have the same shape.' },

        { id: 't1l2s2-5', type: 'cloze', tag: 'frame-chain', level: 'B1+',
          passage: 'Match report.\n\nThe second half was held up for nearly ten minutes while a player ___(1)___ on the pitch. By the time play restarted the light had begun to go, and the referee warned both captains that the match ___(2)___ if it got any darker.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['would abandon', 'would abandoned', 'would be abandoning', 'would be abandoned'],
          answer: 3,
          why: 'The match is the thing abandoned, not the thing doing the abandoning, so the chain needs passive <em>be</em> and a past participle. <em>Would abandon</em> makes the match the agent; <em>would be abandoning</em> uses the progressive link, which would have the match busy abandoning something else; <em>would abandoned</em> drops the <em>be</em> altogether and leaves a participle immediately after a modal, which only ever takes a bare form. The modal is <em>would</em> and not <em>will</em> because the warning is being reported afterwards, in past time.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't1l2s3', name: 'Reading the chain: what each slot adds', cefr: 'B1+',
      theory: {
        key: 'Read a modal verb phrase from the outside in: the modal gives you the speaker\'s stance, and every link after it tells you something about the event itself.',
        body: [
          'The chain is not decoration. Each link carries meaning, and the meanings stack in the order the links do. The modal comes first and sets the <strong>frame</strong> — how sure, how required, how permitted. Everything after the modal belongs to the <strong>proposition</strong>. Split the phrase at that point and a long verb group stops being frightening.',
          '<em>Have</em> puts the event before now. <em>He must have left</em> means: I am deciding, at this moment, about a departure that is already over. Compare <em>He must leave</em>, where the frame has the same shape but nothing stands between the modal and the verb, so nothing places the event in past time.',
          'Progressive <em>be</em> makes the event ongoing at the time being talked about. <em>She could be working late</em> is about this evening as it unfolds; <em>She could work late</em> is about a general possibility or a willingness. Notice that the <em>-ing</em> adds no doubt at all — the doubt was already in <em>could</em>, and the links below the modal never touch the frame.',
          'Passive <em>be</em> changes who occupies the subject position without changing the event. <em>The results may be published in June</em> and <em>They may publish the results in June</em> report the same event under the same frame; only the starting point of the sentence has moved. Reading outward-in like this is what stops the chain from looking like a list of structures to be memorised one by one.'
        ],
        simple: [
          'The modal says how sure or how necessary. Everything after it describes the event.',
          '<em>have</em> means the event is already over. <em>be + -ing</em> means it is happening. <em>be +</em> participle means it is done to the subject.',
          '<em>He must have left</em> (already gone) · <em>He must be leaving</em> (going now) · <em>He must be stopped</em> (somebody must stop him).'
        ],
        examples: [
          { s: 'He <b>must be leaving</b> — his bag has gone.', g: 'a deduction about something in progress right now.' },
          { s: 'He <b>must have left</b> — his bag has gone.', g: 'the same deduction, but about an event already finished.' },
          { s: 'The results <b>may be published</b> in June.', g: 'the same possibility; only the subject position has changed.' },
          { s: '<s>The results may publish in June.</s>', g: 'results do not publish anything; the passive link is missing.' }
        ]
      },
      items: [
        { id: 't1l2s3-1', type: 'sort', tag: 'frame-chain', level: 'B1+',
          stem: 'What do the words after the modal tell you about the event?',
          bins: [
            { key: 'over', label: 'Already over', hint: 'have plus a past form' },
            { key: 'going', label: 'Going on now', hint: 'be plus an -ing form' },
            { key: 'done', label: 'Done to the subject', hint: 'be plus a past form' }
          ],
          items: [
            { text: 'The train <em>must have left</em> without us.', bin: 'over' },
            { text: 'She <em>might be revising</em> in the library.', bin: 'going' },
            { text: 'Every entry <em>must be checked</em> by two markers.', bin: 'done' },
            { text: 'They <em>may have missed</em> the announcement.', bin: 'over' },
            { text: 'He <em>could be waiting</em> at the wrong gate.', bin: 'going' },
            { text: 'The hall <em>can be booked</em> online.', bin: 'done' }
          ],
          why: 'The modal is not the clue here; the link under it is. <em>Have</em> plus a participle puts the event before now, progressive <em>be</em> plus <em>-ing</em> stretches it across the moment being described, and passive <em>be</em> plus a participle moves the doer out of the subject slot. Read the links in order and the meaning falls out of them, whatever modal happens to be on top.' },

        { id: 't1l2s3-2', type: 'choose', tag: 'frame-chain', level: 'B1+',
          stem: 'It is half past four. You look across the office: your colleague\'s coat has gone from the hook and her computer is switched off. Which sentence fits what you can see?',
          options: ['She must be leaving.', 'She must be left.', 'She must leave.', 'She must have left.'],
          answer: 3,
          why: 'A missing coat and a dark screen are the traces of something already finished, and <em>have</em> plus a participle is the link that puts the event before now. <em>Must be leaving</em> would describe her walking out at this very moment, which is not what you can see; <em>must leave</em> is an obligation rather than a deduction; <em>must be left</em> is a passive and would mean that somebody has to leave her behind.' },

        { id: 't1l2s3-3', type: 'equiv', tag: 'frame-chain', level: 'B1+',
          given: 'The university may publish the entry statistics next month.',
          stem: 'Which sentence describes the same event with the statistics as the subject?',
          options: [
            'The entry statistics may publish next month.',
            'The entry statistics may be published next month.',
            'The entry statistics may be publishing next month.',
            'The entry statistics may have published next month.'
          ],
          answer: 1,
          why: 'Moving the object into the subject position requires the passive link, <em>be</em> plus a past participle, and the frame <em>may</em> is left completely untouched by the change. Option 1 leaves the statistics doing the publishing; option 3 uses the progressive link, which would have them busy publishing something; option 4 adds a perfect that pushes the event into the past and then contradicts itself with <em>next month</em>.' },

        { id: 't1l2s3-4', type: 'choose', tag: 'frame-chain', level: 'B1+',
          stem: 'Two colleagues are looking up at a lit office window at ten at night. Which sentence is the natural deduction?',
          options: [
            'Someone must work late tonight.',
            'Someone must be worked late tonight.',
            'Someone must have worked late tonight.',
            'Someone must be working late tonight.'
          ],
          answer: 3,
          why: 'The light is on at this moment, so the event is in progress and the chain needs progressive <em>be</em> plus <em>-ing</em>. <em>Must work</em> reads as an obligation, because with no link underneath it nothing anchors the event to the present moment; <em>must have worked</em> places the work before now, which the lit window contradicts; <em>must be worked</em> is a passive, and it is not the person who is being worked.' },

        { id: 't1l2s3-5', type: 'order', tag: 'frame-chain', level: 'B1+',
          stem: 'Put the four sentences in the order that makes a coherent paragraph.',
          items: [
            'A modal is always the first word of the verb phrase, and everything after it belongs to the event rather than to the speaker.',
            'The link immediately after the modal is have, which places the event before the moment of speaking.',
            'Next comes be with an -ing form, which stretches the event across the time being talked about.',
            'Last of all comes the passive be, which moves the doer out of the subject position without changing the event itself.'
          ],
          why: 'The paragraph has to walk the chain in its fixed order, so the sentence that names the modal and states the principle comes first and the three links follow in the sequence they actually occupy. The signposts confirm it: <em>immediately after the modal</em> can only be the first link, <em>next</em> the second, and <em>last of all</em> the third. Any other arrangement would describe a chain English does not permit.' }
      ]
    }
  ],
  check: {
    id: 't1l2ck', name: 'Stage Check · The slot chain',
    items: [
      { id: 't1l2ck-1', type: 'choose', tag: 'frame-chain', level: 'B1+',
        stem: 'The minutes ______ to all members before the next meeting.',
        options: ['should send', 'should have sending', 'should being sent', 'should be sent'],
        answer: 3,
        why: 'The minutes are the thing sent, not the sender, so the passive link is needed: <em>be</em> plus a past participle. <em>Should send</em> makes the minutes do the sending; <em>should being sent</em> puts an <em>-ing</em> form directly after a modal, which demands a bare one; <em>should have sending</em> puts an <em>-ing</em> after <em>have</em>, which only ever takes a participle.' },

      { id: 't1l2ck-2', type: 'choose', tag: 'frame-form', level: 'B1+',
        stem: 'The speaker does not know whether the delivery arrived before opening time. Which sentence is correct English?',
        options: [
          'The delivery might arrived before we opened.',
          'The delivery might have arrived before we opened.',
          'The delivery might arrive before we opened.',
          'The delivery mighted arrive before we opened.'
        ],
        answer: 1,
        why: 'A modal cannot be tensed and neither can the bare verb beneath it, so the past is carried one link further down by <em>have</em> plus a participle. Option 1 puts a past ending in the bare-infinitive slot; option 3 leaves the verb bare and in present time and then asks the past clause <em>before we opened</em> to drag it backwards, which is much the commonest way of getting this wrong; option 4 invents a past form of the modal itself, and no modal has one.' },

      { id: 't1l2ck-3', type: 'spot', tag: 'frame-chain', level: 'B1+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['Candidates are reminded that', 'mobile phones must be switch off', 'and left in the tray', 'at the front of the hall.'],
        answer: 1,
        fix: 'mobile phones must be switched off',
        why: 'Passive <em>be</em> always takes a past participle, so <em>be switched off</em>. The bare form <em>switch</em> would be right only immediately after the modal, with no <em>be</em> in between. The later <em>left in the tray</em> is a participle, and that parallel shows what shape the first verb needs.' },

      { id: 't1l2ck-4', type: 'cloze', tag: 'frame-chain', level: 'B1+',
        passage: 'From a university handbook.\n\nCoursework ___(1)___ through the online portal by four o\'clock on the deadline day. Work that arrives late without an approved extension ___(2)___ a penalty of five marks a day. Students who are unwell should contact the faculty office before the deadline rather than after it.',
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['must submit', 'must been submitted', 'must be submitting', 'must be submitted'],
        answer: 3,
        why: 'Coursework does not submit anything; it is submitted, so the passive link is required — <em>be</em> plus a past participle. <em>Must submit</em> would make the coursework the agent; <em>must be submitting</em> uses the progressive link, describing an action in progress rather than a standing requirement; <em>must been submitted</em> uses a participle of <em>be</em> with no <em>have</em> above it to license it.' },

      { id: 't1l2ck-5', type: 'order', tag: 'frame-chain', level: 'B1+',
        stem: 'Put the four sentences in the order that makes a coherent paragraph.',
        items: [
          'A student once asked why English says the samples may have been contaminated instead of something shorter.',
          'The answer is that every word in that phrase is doing a separate job.',
          'May supplies the frame, have places the event before now, and been marks the passive.',
          'Take away any one of the three and the sentence stops meaning what the writer intended.'
        ],
        why: 'The paragraph opens with the question, gives the general answer, unpacks it, and then draws the consequence. <em>The answer is</em> can only follow a question; the list of three words has to come after the promise that each word is doing a job; and <em>any one of the three</em> depends on the three having just been named.' },

      { id: 't1l2ck-6', type: 'sort', tag: 'frame-chain', level: 'B1+',
        stem: 'Look at the words that follow the modal. Which pattern is it?',
        bins: [
          { key: 'perf', label: 'have plus a past form', hint: 'the event is already over' },
          { key: 'prog', label: 'be plus an -ing form', hint: 'the event is in progress' },
          { key: 'pass', label: 'be plus a past form', hint: 'the event is done to the subject' }
        ],
        items: [
          { text: 'The keys <em>must have fallen</em> out of my pocket.', bin: 'perf' },
          { text: 'The kettle <em>might be boiling</em> already.', bin: 'prog' },
          { text: 'All bags <em>may be searched</em> at the entrance.', bin: 'pass' },
          { text: 'She <em>could have forgotten</em> the meeting.', bin: 'perf' },
          { text: 'They <em>must be repairing</em> the road again.', bin: 'prog' },
          { text: 'The decision <em>should be announced</em> on Friday.', bin: 'pass' }
        ],
        why: 'The modal on top tells you nothing about which link is present; the word under it tells you everything. A participle after <em>have</em> puts the event before now, an <em>-ing</em> after <em>be</em> spreads it across the moment, and a participle after <em>be</em> shows the subject on the receiving end. The same three tests work under every modal in the language.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T1.levels.push({
  id: 't1l3', n: 3, name: 'Where a modal cannot go', cefr: 'B1+',
  blurb: 'Modals have no infinitive and no participle, so English keeps a second set of forms for the places a modal cannot reach.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't1l3s1', name: 'Why have to, be able to and be allowed to exist', cefr: 'B1+',
      theory: {
        key: 'Modals have no infinitive and no participle, so in any slot that demands one there is no modal available at all — and <em>have to</em>, <em>be able to</em> and <em>be allowed to</em> are the forms English grew to fill those slots.',
        body: [
          'An ordinary verb has a full set of forms: <em>work, works, worked, working, to work, have worked</em>. A modal has <strong>one form and no more</strong>. There is no <s>to must</s>, no <s>musting</s>, no <s>have musted</s>, no <s>will can</s>. The class is <strong>defective</strong> — not irregular, but missing whole cells of the paradigm that every other verb in the language possesses.',
          'And English constantly demands those missing cells. After <em>will</em>, the grammar wants a bare infinitive. After <em>to</em>, an infinitive. After <em>have</em>, a past participle. After <em>without</em> or <em>before</em>, an <em>-ing</em> form. A modal can supply none of them, so in those four positions there is simply nothing in the modal class to reach for.',
          'The language solved the problem by recruiting ordinary verb phrases that carry the same meanings and have all the forms modals lack. <em>Have to</em> covers for <em>must</em>. <em>Be able to</em> covers for <em>can</em>. <em>Be allowed to</em> and <em>be permitted to</em> cover for permission <em>may</em>. <em>Be supposed to</em> covers for <em>should</em>. These are <strong>periphrastic</strong> forms, and they behave exactly like the ordinary verbs they are built from.',
          'So <em>will have to</em>, <em>to be able to</em> and <em>has been able to</em> are <strong>not stylistic alternatives</strong> to a modal. Where a modal is grammatically impossible there is no choice to be made. A real choice between <em>must</em> and <em>have to</em> exists only in the one slot where both forms are available — the finite present — and there the difference is about whose authority stands behind the requirement, which is Stage 3.'
        ],
        simple: [
          'A modal has only one form. There is no "to must", no "musting" and no "will can".',
          'When the grammar needs one of those missing forms, English uses <em>have to</em>, <em>be able to</em> or <em>be allowed to</em> instead.',
          'So <em>will have to go</em> and <em>has been able to swim</em> are not fancier ways of saying it. They are the only ways.'
        ],
        examples: [
          { s: 'We <b>will have to</b> leave at six.', g: 'must has no form that can follow will, so have to stands in for it.' },
          { s: 'I want <b>to be able to</b> read the contract myself.', g: 'can has no infinitive; be able to supplies one.' },
          { s: 'She <b>has been able to</b> walk unaided since March.', g: 'has demands a participle, and can has none.' },
          { s: '<s>We will must leave at six.</s>', g: 'two operators in one slot, and must has no non-finite form in any case.' }
        ]
      },
      items: [
        { id: 't1l3s1-1', type: 'choose', tag: 'frame-defect', level: 'B1+',
          stem: 'If the rain keeps up, we ______ the picnic to next weekend.',
          options: ['will must move', 'will have to move', 'must will move', 'will musting move'],
          answer: 1,
          why: '<em>Must</em> has no form that can follow another verb, so it cannot appear after <em>will</em> in any shape. Options 1, 3 and 4 are three versions of that one impossibility: two operators stacked, the same two reversed, and an invented <em>-ing</em> form that no modal has. <em>Have to</em> is an ordinary verb phrase with a bare infinitive, so it drops into the slot after <em>will</em> without difficulty.' },

        { id: 't1l3s1-2', type: 'spot', tag: 'frame-defect', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Since the new rule came in,', 'every driver has must carry', 'a printed copy of the permit', 'in the vehicle.'],
          answer: 1,
          fix: 'every driver has had to carry',
          why: '<em>Has</em> demands a past participle and <em>must</em> has none, so the sentence needs the periphrastic form: <em>has had to carry</em>. The remaining parts are sound — <em>since the new rule came in</em> is a normal time clause and the two final phrases are ordinary adverbials. This is not a question of style: in a participle slot there is no modal available to choose.' },

        { id: 't1l3s1-3', type: 'choose', tag: 'frame-defect', level: 'B1+',
          stem: 'Which sentence is possible in English?',
          options: [
            'Everyone in the team wants to can speak at the meeting.',
            'Everyone in the team wants to be able to speak at the meeting.',
            'Everyone in the team wants can to speak at the meeting.',
            'Everyone in the team wants to could speak at the meeting.'
          ],
          answer: 1,
          why: '<em>Want</em> is followed by a <em>to</em>-infinitive, and <em>can</em> has no infinitive to give, so options 1 and 4 both ask for a form that does not exist — <em>could</em> is a remote form, not an infinitive, so swapping it in changes nothing. Option 3 drops the <em>to</em> that <em>want</em> requires and puts a finite modal in its place. <em>Be able to</em> is an ordinary verb phrase, so it has an infinitive, and that is the entire reason English keeps it.' },

        { id: 't1l3s1-4', type: 'sort', tag: 'frame-defect', level: 'B1+',
          stem: 'Can a modal stand in this position, or is the longer form the only thing that fits?',
          bins: [
            { key: 'modal', label: 'A modal fits here', hint: 'the slot takes must, can or may just as it is' },
            { key: 'periph', label: 'Only the longer form fits', hint: 'the slot needs a shape no modal has' }
          ],
          items: [
            { text: 'Every visitor <em>must</em> sign in at reception.', bin: 'modal' },
            { text: 'Visitors will <em>have to</em> sign in at reception.', bin: 'periph' },
            { text: 'She <em>can</em> read Japanese quite well.', bin: 'modal' },
            { text: 'She hopes <em>to be able to</em> read Japanese by next year.', bin: 'periph' },
            { text: 'Students <em>may</em> use the studio at weekends.', bin: 'modal' },
            { text: 'Students have <em>been allowed to</em> use the studio since March.', bin: 'periph' }
          ],
          why: 'The test is position, not meaning. A finite slot — first word of the verb phrase, subject in front of it — accepts a modal. After <em>will</em>, after <em>to</em> and after <em>have</em>, the grammar demands a non-finite form, and the modal class has none, so the periphrastic phrase is the only thing in the language that fits. Every sentence in the second group sits in one of those three positions.' },

        { id: 't1l3s1-5', type: 'cloze', tag: 'frame-defect', level: 'B1+',
          passage: 'From a research ethics briefing.\n\nBefore any interview begins, participants ___(1)___ sign a consent form. Researchers must also explain that a participant who changes their mind ___(2)___ withdraw at any point, and that they will not ___(3)___ give a reason for doing so.',
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['must', 'have to', 'musting', 'must to'],
          answer: 1,
          why: 'The slot follows <em>will not</em>, where the grammar wants a bare infinitive, and <em>must</em> has no form that can stand there — which removes options 1, 3 and 4 in a single stroke, whatever shape they are twisted into. <em>Have to</em> is an ordinary verb with a bare infinitive of its own, so <em>will not have to give</em> is the form English makes available here.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't1l3s2', name: 'Choosing the repair: will have to, has been able to, to be allowed to', cefr: 'B1+',
      theory: {
        key: 'Choose the repair by looking at the word in front of the gap: it tells you which form is needed, and then the semi-modal conjugates like any ordinary verb.',
        body: [
          'Two steps, always in this order. <strong>First, find what the slot demands</strong> — a bare infinitive after a modal or after <em>do</em>, a <em>to</em>-infinitive after <em>want</em>, <em>hope</em> or <em>seem</em>, a past participle after <em>have</em>, an <em>-ing</em> form after <em>without</em>, <em>before</em> or <em>avoid</em>. <strong>Second, put the periphrastic phrase into that shape.</strong>',
          'The second step is easy, because <em>have to</em> and <em>be able to</em> are completely ordinary. <em>Have to</em> changes like <em>have</em>: <em>has to</em>, <em>had to</em>, <em>having to</em>, <em>to have to</em>, <em>will have to</em>. <em>Be able to</em> changes like <em>be</em>: <em>is able to</em>, <em>was able to</em>, <em>been able to</em>, <em>being able to</em>, <em>to be able to</em>. Nothing irregular happens anywhere.',
          'Watch which word carries the tense. In <em>had to wait</em>, the past is on <em>have</em>, not on <em>wait</em>. In <em>has been able to walk</em>, the perfect is on <em>have</em> and <em>be</em> has turned into <em>been</em>, while <em>able</em> and <em>to walk</em> never change at all. Learners often put the tense on the wrong word because the phrase is several words long and the <em>to</em> looks like the start of something new. It is not: everything after <em>to</em> stays bare.',
          'And the repair covers the whole chain, not just one link. <em>The roof will have to be replaced</em> stacks periphrastic necessity above a passive, which is perfectly normal — once <em>have to</em> is an ordinary verb, it can appear anywhere an ordinary verb can, and the links below it behave exactly as they did in Level 2.'
        ],
        simple: [
          'Look at the word in front of the gap. It tells you which form you need.',
          '<em>have to</em> changes like <em>have</em>: <em>has to</em>, <em>had to</em>, <em>will have to</em>, <em>to have to</em>.',
          '<em>be able to</em> changes like <em>be</em>: <em>is able to</em>, <em>was able to</em>, <em>has been able to</em>, <em>to be able to</em>.'
        ],
        examples: [
          { s: 'By July we <b>will have had to</b> replace the whole roof.', g: 'the repair conjugates freely; a modal could never take this shape.' },
          { s: 'She <b>has been able to</b> cycle to work since the bridge reopened.', g: 'a participle slot, so be becomes been.' },
          { s: 'I hope <b>to be allowed to</b> sit the exam early.', g: 'a to-infinitive slot, so be allowed to.' },
          { s: '<s>She has been able to walked since March.</s>', g: 'the tense is carried by has; everything after to stays bare.' }
        ]
      },
      items: [
        { id: 't1l3s2-1', type: 'choose', tag: 'frame-semi', level: 'B1+',
          stem: 'Since the operation, my grandfather ______ climb the stairs on his own.',
          options: ['has can', 'has could', 'has been able to', 'has able to'],
          answer: 2,
          why: '<em>Has</em> demands a past participle, and <em>can</em> has none — neither <em>can</em> nor its remote form <em>could</em> can stand there, which disposes of options 1 and 2 together. Option 4 reaches for the right phrase but forgets that <em>be able to</em> is built on <em>be</em>, and it is <em>be</em> that has to become the participle. Only <em>has been able to</em> puts a participle where the grammar asks for one.' },

        { id: 't1l3s2-2', type: 'cloze', tag: 'frame-defect', level: 'B1+',
          passage: 'Email to a project team.\n\nThe client has moved the presentation forward by a week, so we ___(1)___ finish the costings by Thursday. I know that is tight. Anyone who cannot manage it should tell me today rather than on Wednesday night, because we ___(2)___ ask the client for an extension once the slides have gone out.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['will must', 'must will', 'will have to', 'will can'],
          answer: 2,
          why: 'The slot follows <em>will</em>, which takes a bare infinitive, and no modal has one; <em>will must</em>, <em>must will</em> and <em>will can</em> are three arrangements of the same impossibility. <em>Have to</em> is an ordinary verb and its bare infinitive fits exactly, so <em>will have to finish</em> is the only way English can place a requirement in future time.' },

        { id: 't1l3s2-3', type: 'choose', tag: 'frame-semi', level: 'B1+',
          stem: 'A job advertisement is listing its requirements. Which sentence is correct?',
          options: [
            'Applicants need to be able to demonstrate two years of relevant experience.',
            'Applicants need to can demonstrate two years of relevant experience.',
            'Applicants need to be can demonstrate two years of relevant experience.',
            'Applicants need be able demonstrate two years of relevant experience.'
          ],
          answer: 0,
          why: '<em>Need to</em> is followed by an infinitive, and <em>can</em> has none, so options 2 and 3 are both asking for a form that does not exist — option 3 merely hides the problem behind a <em>be</em>. Option 4 has the right phrase but strips out both the <em>to</em> that <em>need</em> requires and the <em>to</em> that belongs to <em>be able to</em>, leaving <em>demonstrate</em> with nothing to attach to. The phrase is a fixed unit and only its <em>be</em> ever changes shape.' },

        { id: 't1l3s2-4', type: 'build', tag: 'frame-defect', level: 'B1+',
          stem: 'Put the words in order. The students hope that the visit will be permitted.',
          tiles: ['the students', 'hope', 'to be allowed to', 'visit', 'the archive'],
          solution: 'the students hope to be allowed to visit the archive',
          alt: [],
          why: '<em>Hope</em> takes a <em>to</em>-infinitive, and permission <em>may</em> has no infinitive, so the only form the language offers is <em>to be allowed to</em>. That is why it arrives as a single tile: <em>be allowed</em> supplies the infinitive, and its own <em>to</em> then introduces the bare <em>visit</em>. A student who writes "hope to may visit" has asked English for a form it does not possess.' },

        { id: 't1l3s2-5', type: 'equiv', tag: 'frame-semi', level: 'B1+',
          given: 'It was not possible for us to reach the summit before dark.',
          stem: 'Which sentence says the same thing?',
          options: [
            'We couldn\'t able to reach the summit before dark.',
            'We weren\'t able to reach the summit before dark.',
            'We didn\'t can reach the summit before dark.',
            'We haven\'t could reach the summit before dark.'
          ],
          answer: 1,
          why: '<em>Be able to</em> is an ordinary verb phrase, so it takes tense and negation in the ordinary way: <em>weren\'t able to</em>. Option 1 puts the repair underneath a modal that does not need repairing and leaves <em>able</em> with no <em>be</em>; option 3 uses <em>do</em> with a modal, which is never possible because the modal is already the operator; option 4 asks <em>have</em> for a participle of <em>can</em>, and there is none to give.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't1l3s3', name: 'Modal or main verb? need, dare and have to at the boundary', cefr: 'B1+',
      theory: {
        key: 'A few words sit on the border of the class, and the NICE tests decide which side they are on in a given sentence: whatever negates and inverts by itself is behaving as a modal there.',
        body: [
          '<em>Need</em>, <em>dare</em> and <em>have to</em> all look like modals from the meaning alone. Run the tests instead. Does the word take <em>not</em> directly? Does it invert for a question? Does it survive on its own in a short answer? If yes, it is behaving as a modal in that sentence. If it reaches for <em>do</em>, it is an ordinary verb, whatever it means.',
          '<em>Need</em> has both lives. Modal <em>need</em> takes a bare infinitive, occurs almost only in questions and negatives, and sounds formal: <em>Need I say more?</em>, <em>You needn\'t wait.</em> Ordinary <em>need</em> is far commoner and entirely regular: <em>Do I need to say more?</em>, <em>You don\'t need to wait.</em> Both are correct English; this is two words, not one word behaving inconsistently. <em>Dare</em> works the same way and has retreated further still, into fixed phrases such as <em>How dare you</em> and <em>I daren\'t look</em>.',
          '<em>Have to</em> is the clearest case in the language: it is <strong>not a modal and never was one</strong>. It takes <em>do</em> for questions and negatives (<em>Do we have to pay?</em>), it takes a third-person <em>-s</em> (<em>she has to</em>), and it has a past (<em>had to</em>). It fails every NICE test there is.',
          'And that is exactly why it is useful. The label "semi-modal" describes what <em>have to</em> <strong>means</strong>, not how it behaves, and its ordinariness is the whole point: because it conjugates like any other verb, it can walk into every slot the defective modals are locked out of. The boundary is not untidy — it is the mechanism of Level 3 seen from the other side.'
        ],
        simple: [
          'Some words can behave either as a modal or as an ordinary verb: <em>need</em> and <em>dare</em>.',
          'Test it. If it takes <em>not</em> and inverts by itself, it is a modal here: <em>you needn\'t wait</em>. If it needs <em>do</em>, it is an ordinary verb: <em>you don\'t need to wait</em>.',
          '<em>have to</em> is always an ordinary verb: <em>she has to</em>, <em>did she have to?</em>, <em>we don\'t have to</em>.'
        ],
        examples: [
          { s: 'You <b>needn\'t</b> bring anything.', g: 'modal need: not attaches directly and the verb after it is bare.' },
          { s: 'You <b>don\'t need to</b> bring anything.', g: 'ordinary need: do supplies the operator, and to appears.' },
          { s: '<b>Do</b> we <b>have to</b> book in advance?', g: 'have to borrows do like any other ordinary verb.' },
          { s: '<s>You don\'t need bring anything.</s>', g: 'ordinary need takes a to-infinitive; only modal need takes a bare verb.' }
        ]
      },
      items: [
        { id: 't1l3s3-1', type: 'choose', tag: 'frame-boundary', level: 'B1+',
          stem: 'Which sentence uses <em>need</em> as an ordinary verb rather than as a modal?',
          options: [
            'Need I bring my own laptop?',
            'You needn\'t bring your own laptop.',
            'Do I need to bring my own laptop?',
            'Nobody need bring their own laptop.'
          ],
          answer: 2,
          why: 'Only option 3 borrows <em>do</em> and takes a <em>to</em>-infinitive, and those two facts together are the signature of an ordinary verb. The other three put <em>need</em> in front of the subject, attach <em>not</em> to it, or leave it with no <em>-s</em> after a singular subject, and all three are followed by a bare verb — which is modal behaviour, and also why they sound formal, since modal <em>need</em> now survives mainly in questions and negatives. All four sentences are correct English; the question is how <em>need</em> is behaving in each, not which one is right.' },

        { id: 't1l3s3-2', type: 'judge', tag: 'frame-boundary', level: 'B1+',
          given: 'Do we have to submit two copies?',
          stem: 'The presence of <em>do</em> shows that <em>have to</em> is not a modal.',
          answer: 0,
          why: 'True. <em>Do</em> is inserted only where a clause has no operator of its own, so anything that needs it cannot be a modal. <em>Have to</em> fails every NICE test: it takes <em>do</em> for questions and negatives, it takes an <em>-s</em> in <em>she has to</em>, and it has the past form <em>had to</em>. That ordinariness is precisely why it can go where <em>must</em> cannot.' },

        { id: 't1l3s3-3', type: 'choose', tag: 'frame-boundary', level: 'B1+',
          stem: 'Which sentence is correctly formed?',
          options: [
            'You don\'t need bring anything to the workshop.',
            'You needn\'t to bring anything to the workshop.',
            'You don\'t needn\'t bring anything to the workshop.',
            'You needn\'t bring anything to the workshop.'
          ],
          answer: 3,
          why: 'Modal <em>need</em> takes <em>not</em> directly and a bare verb after it. Option 1 uses the ordinary verb\'s <em>do</em> but then forgets the <em>to</em> that the ordinary verb requires; option 2 does the reverse, adding <em>to</em> to the modal, which never takes it; option 3 negates twice, once with <em>do</em> and once on <em>need</em>, which is one operator too many for a single clause. The two correct patterns are <em>needn\'t bring</em> and <em>don\'t need to bring</em>, and mixing them is the commonest error here.' },

        { id: 't1l3s3-4', type: 'spot', tag: 'frame-boundary', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Under the new guidance,', 'schools don\'t must keep', 'paper copies of the attendance register', 'for more than three years.'],
          answer: 1,
          fix: 'schools don\'t have to keep',
          why: '<em>Do</em> never appears alongside a modal, because the modal is already the operator, so <em>don\'t must</em> is impossible whatever it is meant to say. The repair is the ordinary verb <em>have to</em>, which takes <em>do</em> quite happily. The other parts are well formed, and the bare <em>keep</em> is correct once <em>have to</em> is in place.' },

        { id: 't1l3s3-5', type: 'sort', tag: 'frame-boundary', level: 'B1+',
          stem: 'In each sentence, is the word behaving as a modal or as an ordinary verb?',
          bins: [
            { key: 'mod', label: 'Behaving as a modal', hint: 'negates and inverts on its own, bare verb after it' },
            { key: 'ord', label: 'Behaving as an ordinary verb', hint: 'takes do, takes to, takes an -s' }
          ],
          items: [
            { text: 'You <em>needn\'t</em> wait for me.', bin: 'mod' },
            { text: 'You <em>don\'t need to</em> wait for me.', bin: 'ord' },
            { text: '<em>Dare</em> we ask for an extension?', bin: 'mod' },
            { text: 'She <em>has to</em> collect her brother at four.', bin: 'ord' },
            { text: 'I <em>daren\'t</em> look at the results.', bin: 'mod' },
            { text: '<em>Did</em> you <em>have to</em> queue for long?', bin: 'ord' }
          ],
          why: 'The test is behaviour, not meaning. Every sentence in the modal group attaches <em>not</em> to the word itself or puts it in front of the subject, and follows it with a bare verb. Every sentence in the other group brings in <em>do</em>, or adds an <em>-s</em>, or takes a <em>to</em>-infinitive. <em>Have to</em> lands in the ordinary group every time, which is exactly why it, and not <em>must</em>, can be tensed.' }
      ]
    }
  ],
  check: {
    id: 't1l3ck', name: 'Stage Check · Where a modal cannot go',
    items: [
      { id: 't1l3ck-1', type: 'choose', tag: 'frame-defect', level: 'B1+',
        stem: 'Which sentence is possible?',
        options: [
          'She left the meeting without must explain why.',
          'She left the meeting without having to explain why.',
          'She left the meeting without to must explain why.',
          'She left the meeting without can explain why.'
        ],
        answer: 1,
        why: '<em>Without</em> is a preposition and takes an <em>-ing</em> form, and no modal has one, so options 1, 3 and 4 each ask for a shape that does not exist — a bare modal, an impossible <em>to</em>-infinitive, and a bare <em>can</em>. <em>Have to</em> is an ordinary verb, so its <em>-ing</em> form <em>having to</em> is available, and it carries exactly the meaning of requirement the sentence needs.' },

      { id: 't1l3ck-2', type: 'choose', tag: 'frame-semi', level: 'B1+',
        stem: 'You and your team got the job done just before the storm arrived. Which sentence reports that correctly?',
        options: [
          'We was able to finish before the storm.',
          'We were able to finished before the storm.',
          'We were able to finish before the storm.',
          'We were be able to finish before the storm.'
        ],
        answer: 2,
        why: 'In <em>be able to</em> the tense lands on <em>be</em>, and nothing after <em>to</em> ever changes. Option 1 chooses the right word but the wrong agreement for <em>we</em>; option 2 moves the past ending onto the bare infinitive, where it cannot go; option 4 leaves a second <em>be</em> stranded between the tensed verb and <em>able</em>.' },

      { id: 't1l3ck-3', type: 'choose', tag: 'frame-boundary', level: 'B1+',
        stem: 'You want to ask whether bringing your own equipment is required. Which question is correctly formed?',
        options: [
          'Are we have to bring our own equipment?',
          'Do we have to bring our own equipment?',
          'Do we must bring our own equipment?',
          'Have to we bring our own equipment?'
        ],
        answer: 1,
        why: '<em>Have to</em> has no operator properties of its own, so its question is formed with <em>do</em>, exactly as with <em>work</em> or <em>live</em>. Option 1 reaches for <em>be</em>, which has no part in <em>have to</em> at all; option 3 puts <em>do</em> with a real modal, which already inverts by itself; option 4 moves the whole phrase in front of the subject, which no ordinary verb may do. The meaning of <em>have to</em> is modal; its behaviour is not, and it is the behaviour that decides the grammar.' },

      { id: 't1l3ck-4', type: 'spot', tag: 'frame-defect', level: 'B1+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The researchers report that', 'several participants have could recall', 'only two of the eight images', 'shown to them a week earlier.'],
        answer: 1,
        fix: 'several participants have been able to recall',
        why: '<em>Have</em> requires a past participle and <em>can</em> has none, so no form of the modal will stand there — swapping <em>can</em> for <em>could</em> changes nothing, since a remote form is not a participle. The periphrastic <em>been able to</em> is the only option. The rest of the sentence is sound: <em>report that</em> introduces the finding, and <em>shown to them</em> is a correct reduced relative.' },

      { id: 't1l3ck-5', type: 'equiv', tag: 'frame-defect', level: 'B1+',
        given: 'Everyone will need to work an extra shift in December.',
        stem: 'Which sentence expresses the same requirement?',
        options: [
          'Everyone will must work an extra shift in December.',
          'Everyone must will work an extra shift in December.',
          'Everyone will have to work an extra shift in December.',
          'Everyone will musting work an extra shift in December.'
        ],
        answer: 2,
        why: '<em>Will</em> takes a bare infinitive and <em>must</em> has none, so options 1, 2 and 4 are three ways of asking for a form the modal class does not possess: stacked, reversed, and with an invented <em>-ing</em>. <em>Have to</em> is an ordinary verb with a bare infinitive, so <em>will have to work</em> is not a paraphrase of some better sentence — it is the only sentence available.' },

      { id: 't1l3ck-6', type: 'gap', tag: 'frame-semi', level: 'B1+',
        blank: '(6)',
        lines: [
          { who: 'Adviser', text: 'Good morning. How can I help?' },
          { who: 'Customer', text: 'I would like ___(6)___ use the app abroad next month. Is that possible?' },
          { who: 'Adviser', text: 'It is, but you have to tell us the dates first.' }
        ],
        stem: 'Choose the best option for gap (6).',
        options: ['to can', 'to could', 'can to', 'to be able to'],
        answer: 3,
        why: '<em>Would like</em> is followed by a <em>to</em>-infinitive, and <em>can</em> has no infinitive, so <em>to can</em> and <em>to could</em> both ask for a form that does not exist — <em>could</em> is a remote form, not an infinitive. <em>Can to</em> simply reverses the two words without solving anything. <em>Be able to</em> is an ordinary verb phrase, so <em>to be able to use</em> is available, and it is what English actually says.' }
    ]
  }
});

TOPICS.push(T1);
