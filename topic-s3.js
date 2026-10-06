/* ===========================================================================
   STAGE 03 — Obligation, Permission, Prohibition
   Installs the deontic scale: where an obligation comes from, what happens to
   it under negation, and how the same rule is worded at four social altitudes.
   =========================================================================== */

var T3 = {
  id: 't3', n: 3, code: 'Stage 03', art: 'grid',
  name: 'Obligation, Permission, Prohibition',
  cefr: 'B2',
  blurb: 'The same scale again, applied to rules instead of evidence — and the one place where a negative means the opposite of what it looks like.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T3.levels.push({
  id: 't3l1', n: 1, name: 'Necessity and its source', cefr: 'B2',
  blurb: 'Who is imposing this — me, or somebody else? And what does English do when the modal runs out of forms?',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't3l1s1', name: 'must against have to: whose authority?', cefr: 'B2',
      theory: {
        key: 'Where both are possible, <em>must</em> puts the obligation in the speaker\'s own mouth, while <em>have to</em> reports one that comes from somewhere outside the speaker.',
        body: [
          'Deontic necessity says that <strong>every acceptable course of action includes this</strong> — there is no permitted alternative. Both <em>must</em> and <em>have to</em> say exactly that, so the difference between them is not one of strength. It is a difference of <strong>source</strong>: the sentence also tells you where the requirement came from.',
          '<em>Must</em> sources it in the speaker. <em>I <strong>must</strong> stop checking my phone while I revise</em> — nobody imposed that; I did. <em>You <strong>must</strong> be at the gate by six</em> — I am the one requiring it. This is why public notices written <u>by</u> the authority that made the rule use <em>must</em>: <em>Passengers <strong>must</strong> retain their ticket.</em> The exam board, the airline, the hospital is speaking in its own voice.',
          '<em>Have to</em> sources it elsewhere. <em>I <strong>have to</strong> be at the clinic by eight</em> — the appointment decided that, not me. A speaker passing on somebody else\'s rule reaches for <em>have to</em> almost automatically, and often adds themselves to the group: <em>We all <strong>have to</strong> do the security module this term.</em>',
          'The quick test: <strong>ask whether the speaker is standing behind the rule or passing it on.</strong> <em>Must</em> = "I say so": her own resolution, a parent or teacher giving the order, the school\'s own notice. <em>Have to</em> = "it is not my idea": a rule passed on, or circumstances (<em>I have to take the BTS — Dad can\'t drive me</em>). The same school rule takes either verb depending on who is speaking: the teacher says <em>You must wear your school pin</em>; a student telling a friend says <em>We have to wear our pins</em>. This is a British tendency, not a law, and <em>have to</em> is never wrong. Two cautions. In many slots there is no choice at all, because <em>must</em> has no past, no infinitive and no participle — that is the next module. And in everyday spoken English <em>have to</em> is spreading into both jobs, so <em>must</em> now survives most strongly in written rules and in obligations we impose on ourselves.'
        ],
        simple: [
          'Both <em>must</em> and <em>have to</em> mean that something is necessary. The difference is <strong>who says so</strong>.',
          '<em>Must</em> = I say so. <em>I must stop eating so much sugar.</em> A teacher, a parent or a school notice uses <em>must</em> because they stand behind the rule: <em>You must wear your school pin.</em>',
          '<em>Have to</em> = somebody else says so. <em>I have to be at the clinic by eight</em> — the clinic decided the time. If you are passing on a rule, or the situation forces you, use <em>have to</em>. If you are not sure, <em>have to</em> is always safe.'
        ],
        examples: [
          { s: 'I <b>must</b> stop checking my phone during revision.', g: 'my own decision about myself; nobody imposed it.' },
          { s: 'I <b>have to</b> be at the clinic by eight.', g: 'the appointment set the time, not the speaker.' },
          { s: 'Passengers <b>must</b> retain their ticket until the end of the journey.', g: 'a notice written by the authority that makes the rule.' },
          { s: '<s>He must to renew his permit this month.</s>', g: 'a modal takes a bare infinitive; the "to" belongs with "have to", not with "must".' }
        ]
      },
      items: [
        { id: 't3l1s1-1', type: 'choose', tag: 'deo-source', level: 'B2',
          stem: 'Three of these obligations were imposed on the speaker by somebody else. In which one has she imposed it on herself?',
          options: [
            'I have to hand the coursework in by Friday.',
            'I must stop leaving my reading until the night before.',
            'I have to renew my library card every September.',
            'I have to wear a lanyard in the laboratory.'
          ],
          answer: 1,
          why: '<em>Must</em> shows the speaker owning the obligation — here it is her own resolution, since nobody has ordered her to stop last-minute reading. The other three use <em>have to</em>, and each reports a requirement set elsewhere — the deadline by the department, the lanyard by a safety regulation, the renewal date by the library. With <em>must</em> in those, she would sound as though she were adding her own push to those rules rather than simply passing them on.' },

        { id: 't3l1s1-2', type: 'sort', tag: 'deo-source', level: 'B2',
          stem: 'Each sentence states an obligation. Is it imposed by whoever is speaking or writing, or reported from somewhere else?',
          bins: [
            { key: 'self', label: 'The speaker\'s own authority', hint: 'the speaker or writer is the one imposing it' },
            { key: 'ext',  label: 'An outside authority',        hint: 'a law, a timetable or another person imposed it' }
          ],
          items: [
            { text: 'I really <em>must</em> take the bike in for a service.', bin: 'self' },
            { text: 'A notice from the exam board: Candidates <em>must</em> bring photographic identification.', bin: 'self' },
            { text: 'You <em>must</em> let me pay for the taxi.', bin: 'self' },
            { text: 'I <em>have to</em> be in Chiang Mai by Thursday for the audit.', bin: 'ext' },
            { text: 'Drivers <em>have to</em> carry a warning triangle in France.', bin: 'ext' },
            { text: 'Apparently we <em>have to</em> book the hall six weeks in advance.', bin: 'ext' }
          ],
          why: 'Every <em>must</em> here carries the speaker\'s or writer\'s own push — a personal resolution, an insistent offer, and the exam board\'s own regulation printed in its own notice. Every <em>have to</em> passes on a requirement that comes from somewhere else: the audit, French law, the booking policy of the hall. <em>Apparently</em> in the last one is the giveaway, because nobody reports their own decision as hearsay.' },

        { id: 't3l1s1-3', type: 'choose', tag: 'deo-source', level: 'B2',
          stem: 'At a staff meeting, a head of department announces a new university rule: the online security module is now compulsory. The rule is not hers, and she does not want to sound as though it were. Which sentence suits her position?',
          options: [
            'Everyone must complete the online security module before the end of term.',
            'Everyone ought to complete the online security module before the end of term.',
            'Everyone has to complete the online security module before the end of term.',
            'Everyone may complete the online security module before the end of term.'
          ],
          answer: 2,
          why: '<em>Have to</em> passes on a requirement that comes from elsewhere, which is exactly her position: the university issued it and she is passing it on. <em>Must</em> is the near miss — good English from someone who owns or endorses the rule, and that is the trouble here, because it would claim the regulation as her own. <em>Ought to</em> drops the force to a recommendation the staff could reasonably decline, which a compulsory module is not. <em>May</em> only gives permission, so it would make the module sound optional.' },

        { id: 't3l1s1-4', type: 'spot', tag: 'deo-source', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: [
            'Under the ministry\'s new rules,',
            'which came into force in March,',
            'every private clinic in the province',
            'must to send in monthly figures on antibiotic use.'
          ],
          answer: 3,
          fix: 'has to send in monthly figures on antibiotic use.',
          why: 'Learners write <em>must to</em> by blending two constructions: <em>must</em> is a modal and takes a bare infinitive, while <em>have to</em> carries its own <em>to</em>. Either repair is grammatical (<em>must send</em> would also be correct), and <em>has to send</em> fits a writer who is reporting the ministry\'s rule rather than issuing it. The other three parts are sound — the phrase naming the rules, the clause giving the date and the subject all sit where they belong.' },

        { id: 't3l1s1-5', type: 'equiv', tag: 'deo-source', level: 'B2',
          given: 'The insurers require every rider to wear a helmet, and in practice they all do.',
          stem: 'Which sentence reports that requirement most accurately?',
          options: [
            'Riders should wear a helmet.',
            'Riders are supposed to wear a helmet.',
            'Riders had better wear a helmet.',
            'Riders have to wear a helmet.'
          ],
          answer: 3,
          why: '<em>Have to</em> is how a speaker reports a requirement that comes from somewhere else, and an insurance company is exactly such a source. <em>Should</em> demotes a condition of cover to a recommendation riders could ignore. <em>Had better</em> warns about one occasion with a bad outcome implied, rather than stating a standing rule. <em>Be supposed to</em> is the near miss: it does report an outside rule, but it often hints that the rule is not being kept — and the given sentence says the riders all keep it.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't3l1s2', name: 'have got to, need to, be required to, and the past had to', cefr: 'B2',
      theory: {
        key: '<em>Must</em> has no past, no infinitive and no participle, so <em>have to</em> does its tense work — and <em>had to</em> is the only past of obligation English possesses.',
        body: [
          'Modals are a <strong>defective</strong> class: they have finite forms only. <em>Must</em> therefore cannot be made past, cannot follow <em>will</em>, cannot follow <em>to</em>, and cannot take <em>have</em>. English solved this by pressing an ordinary lexical verb into service. <em>Have to</em> conjugates like any other verb, so it goes everywhere <em>must</em> cannot: <em>had to</em>, <em>will have to</em>, <em>to have to</em>, <em>has had to</em>, <em>having to</em>.',
          'In those slots there is <strong>no choice to make</strong>. <em>Last term every student had to resit the listening paper</em> is the only way to say it; <em>must</em> in a past sentence is not a weaker option but an ungrammatical one. Note also the trap on the other side: <em>must have resat</em> is not a past obligation at all. It is a deduction made now about something that happened then, and Stage 6 is devoted to it.',
          'Around the core sit three register variants. <em>Have got to</em> is spoken, chiefly British, and <strong>present only</strong> — <em>I\'ve got to go</em> is natural, but there is no past <em>had got to</em> doing this job. <em>Need to</em> is softer and presents the requirement as arising from circumstances rather than from an authority. <em>Be required to</em> and <em>be obliged to</em> are formal and impersonal, which is why written regulations reach for them.',
          'One more consequence worth storing now: because <em>must</em> cannot be tensed, it also cannot survive backshift. Report <em>You must leave</em> after a past verb and it normally becomes <em>She said we <strong>had to</strong> leave</em>. The pattern is always the same — <strong>when the grammar needs a form the modal does not have, the periphrastic takes over.</strong>'
        ],
        simple: [
          'Modals have no past and no <em>-ing</em> form. <em>Must</em> cannot become past, cannot follow <em>will</em>, and cannot follow <em>have</em>.',
          'So <em>have to</em> does that work: <em>had to</em> (past), <em>will have to</em> (future), <em>has had to</em> (perfect). <em>Had to</em> is the only past of obligation.',
          '<em>Have got to</em> is spoken and present only. <em>Need to</em> is softer. <em>Be required to</em> is formal, and belongs in written rules.'
        ],
        examples: [
          { s: 'We <b>had to</b> rewrite the whole questionnaire after the pilot study.', g: 'the only past of obligation in English.' },
          { s: 'If the grant is refused, the team <b>will have to</b> find another sponsor.', g: 'nothing can follow will except a bare infinitive, so have to takes the slot.' },
          { s: 'She <b>has had to</b> cancel three site visits this term.', g: 'a perfect needs a participle, and must has none.' },
          { s: '<s>Last term every student must resit the listening paper.</s>', g: 'must has no past; the sentence needs "had to resit".' }
        ]
      },
      items: [
        { id: 't3l1s2-1', type: 'choose', tag: 'deo-periph', level: 'B2',
          stem: 'The storms last winter left the ferry company with no choice at all. Which completion records the obligation it was under? <em>The company ______ forty sailings.</em>',
          options: ['had to cancel', 'must cancel', 'must have cancelled', 'have to cancel'],
          answer: 0,
          why: '<em>Had to</em> is the usual past of <em>must</em> and <em>have to</em>, and the storms are what imposed it. <em>Must cancel</em> is finite but tenseless and reads as present, which contradicts <em>last winter</em>. <em>Must have cancelled</em> is perfectly good English, but it is a deduction made now about what probably happened, and the stem says the obligation is a fact rather than a guess. <em>Have to cancel</em> is the right verb in the wrong tense.' },

        { id: 't3l1s2-2', type: 'cloze', tag: 'deo-periph', level: 'B2',
          passage: 'When the airport opened its second runway, its noise licence changed overnight. Under the old licence, night flights ___(1)___ stop at eleven, and any airline that broke the curfew was fined.\n\nThe new licence pushes the curfew back to midnight, but it also says that from next year every operator ___(2)___ publish its own noise figures. The airport itself ___(3)___ rebuild two taxiways since the runway opened, and the bill has not yet been made public.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['must', 'will have to', 'have to', 'had to'],
          answer: 3,
          why: 'The whole sentence is anchored in the past by <em>under the old licence</em> and by <em>was fined</em>, so the obligation needs its past form, <em>had to</em>. <em>Must</em> cannot be made past and would pull the sentence into the present. <em>Have to</em> is the right verb in the wrong tense. <em>Will have to</em> puts a rule that has already been replaced into future time.' },

        { id: 't3l1s2-3', type: 'choose', tag: 'deo-periph', level: 'B2',
          stem: 'Which sentence is <strong>not</strong> possible in English?',
          options: [
            'We\'ve got to leave before the traffic builds up.',
            'We had to leave before the traffic built up.',
            'We will have got to leave before the traffic builds up.',
            'We will have to leave before the traffic builds up.'
          ],
          answer: 2,
          why: '<em>Have got to</em> is a finite present form and nothing else: it has no infinitive, so nothing can put it after <em>will</em>, and option 3 is impossible. Option 4 is the repair English actually uses, since <em>have to</em> conjugates like any other verb and fills every slot the other two cannot. Option 1 is the ordinary spoken present of the idiom, and option 2 is the standard past of obligation, <em>had to</em>.' },

        { id: 't3l1s2-4', type: 'spot', tag: 'deo-periph', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: [
            'The organisers of the sports day',
            'have warned us that if the rain',
            'continues into next week, they',
            'will must move it to the covered court.'
          ],
          answer: 3,
          fix: 'will have to move it to the covered court.',
          why: 'Two modals cannot share one slot, so <em>will must</em> is impossible; only one operator may stand at the head of the verb phrase. <em>Have to</em> is not a modal, so it can follow <em>will</em> quite happily and carries the obligation into future time. The other three parts are correct: the reporting verb is well formed, and the <em>if</em> clause rightly uses a present tense for future reference.' },

        { id: 't3l1s2-5', type: 'build', tag: 'deo-periph', level: 'B2+',
          stem: 'Put the words in order to say that the obligation has already been faced more than once this term.',
          tiles: ['the', 'laboratory', 'has', 'had', 'to', 'close', 'twice', 'this', 'term'],
          solution: 'the laboratory has had to close twice this term',
          alt: ['this term the laboratory has had to close twice', 'twice this term the laboratory has had to close', 'the laboratory has twice had to close this term', 'this term the laboratory has twice had to close'],
          why: 'A present perfect needs a past participle, and <em>must</em> has none, so the obligation is carried by <em>have to</em>: <em>has</em> (the auxiliary) + <em>had</em> (the participle) + <em>to close</em>. Students who try to build <em>has must close</em> or <em>must have closed</em> produce either an impossible string or, in the second case, a deduction about the past rather than a record of an obligation met twice.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't3l1s3', name: 'should, ought to, had better, be supposed to', cefr: 'B2',
      theory: {
        key: 'Below <em>must</em> sits a rung where the obligation is real but escapable: <em>should</em> and <em>ought to</em> recommend, <em>had better</em> warns, and <em>be supposed to</em> reports a rule while hinting that it is not being kept.',
        body: [
          '<em>Must</em> and <em>have to</em> say that no acceptable alternative exists. <em>Should</em> and <em>ought to</em> say something weaker and more useful: that this is <strong>the best of several acceptable options</strong>. Because they leave room for not doing it, they are the modals of advice, of expectation and of the recommendation paragraph in an essay. <em>Ought to</em> is very nearly identical to <em>should</em>, slightly more formal, rarer in questions and negatives, and it keeps its <em>to</em> because it is a survival from an older stage of the language.',
          '<em>Had better</em> is the one everybody misfiles. It is <strong>not</strong> weaker than <em>should</em> and it is <strong>not</strong> past. It is stronger, because it has a threat folded into it: <em>You\'d better back up that file</em> means <em>or you will lose it</em>. Its shape is fixed — <em>had better</em> plus a bare infinitive, negative <em>had better not</em> — and it points at the immediate future, so it cannot state a standing rule or give general advice.',
          '<em>Be supposed to</em> reports an obligation that came from outside and characteristically implies that it is being ignored. <em>We <strong>are supposed to</strong> log every visitor</em> usually means that we do not. In past time the implication is almost automatic: <em>She <strong>was supposed to</strong> return the projector on Friday</em> tells you the projector is still missing. It is the polite English way of pointing at a breach.',
          'Ranked by the pressure they apply now: <em>must / have to</em>, then <em>had better</em>, then <em>should / ought to</em>, then <em>be supposed to</em>. Register matters as much as force. <em>Should</em> is the workhorse of academic recommendation; <em>had better</em> is spoken, personal and directed at one hearer, and so it almost never belongs in an essay, where the reader is nobody in particular and there is no consequence you can threaten them with.'
        ],
        simple: [
          '<em>Should</em> and <em>ought to</em> mean "this is the best thing to do" — good advice, but you could still decide not to.',
          '<em>Had better</em> is stronger, not weaker. It means "do it, or something bad will happen", and it is about now or very soon. It is not a past tense.',
          '<em>Be supposed to</em> reports a rule from somewhere else, and usually hints that nobody is following it: <em>We are supposed to log every visitor</em> — but we do not.'
        ],
        examples: [
          { s: 'Governments <b>should</b> invest in flood defences before the next monsoon.', g: 'recommendation: the best option, not the only one.' },
          { s: 'You <b>had better</b> leave now — the last boat goes at six.', g: 'advice with a consequence attached; stronger than should.' },
          { s: 'We are <b>supposed to</b> log every visitor, but nobody does.', g: 'reports an outside rule and hints that it is broken.' },
          { s: '<s>Last year we had better apply earlier.</s>', g: 'had better is not a past tense; the sentence needs "should have applied".' }
        ]
      },
      items: [
        { id: 't3l1s3-1', type: 'choose', tag: 'deo-advice', level: 'B2',
          stem: 'Your friend\'s laptop has crashed twice this week, and her whole dissertation is on it. You don\'t just want to give advice — you want to warn her. What do you say?',
          options: [
            'You should back up your dissertation tonight.',
            'You had better back up your dissertation tonight.',
            'You are supposed to back up your dissertation tonight.',
            'You ought to back up your dissertation tonight.'
          ],
          answer: 1,
          why: '<em>Had better</em> is advice with an unstated consequence built in — she is meant to hear <em>or you will lose it</em>. <em>Should</em> and <em>ought to</em> are the near misses: good advice, and exactly right if you only wanted to recommend, but they threaten nothing. <em>Be supposed to</em> reports a rule someone else made and implies she is failing to follow it, which is a reproach rather than a warning about what comes next.' },

        { id: 't3l1s3-2', type: 'equiv', tag: 'deo-advice', level: 'B2',
          given: 'We were supposed to submit the risk assessment a fortnight before the trip.',
          stem: 'What does the sentence most strongly suggest?',
          options: ['Somebody else set the deadline, and we probably did not meet it.', 'Somebody else set the deadline, and we met it.', 'We set the deadline ourselves, and we probably did not meet it.', 'We set the deadline ourselves, and we met it.'],
          answer: 0,
          why: '<em>Was supposed to</em> does two jobs at once, and the four options pull them apart. It reports an obligation that came from elsewhere, which rules out options 3 and 4. In the past it also usually signals that the obligation was not met — if the assessment had gone in on time, the speaker would simply say <em>we submitted it</em> — which rules out option 2. Only option 1 keeps both halves.' },

        { id: 't3l1s3-3', type: 'choose', tag: 'deo-advice', level: 'B2+',
          stem: 'In a paragraph recommending a policy, which sentence is best calibrated for academic writing?',
          options: [
            'Governments had better raise the tax on sugary drinks.',
            'Governments have got to raise the tax on sugary drinks.',
            'Governments should raise the tax on sugary drinks.',
            'Governments are supposed to raise the tax on sugary drinks.'
          ],
          answer: 2,
          why: '<em>Should</em> proposes the best of several defensible courses of action, which is precisely what a recommendation paragraph claims. <em>Had better</em> is spoken, addressed to one hearer, and threatens a reader who cannot be threatened. <em>Have got to</em> is spoken idiom, and it also overclaims: it says no alternative policy exists, which an examiner reads as a writer who cannot calibrate. <em>Be supposed to</em> reports the policy as an existing requirement and often hints that it is being ignored — a claim of fact the writer has not established.' },

        { id: 't3l1s3-4', type: 'judge', tag: 'deo-advice', level: 'B2+',
          given: 'Ploy was supposed to collect the permits from the district office on Monday.',
          stem: 'The sentence suggests that Ploy did not collect them.',
          answer: 0,
          why: 'True. <em>Was supposed to</em> states a past obligation and, in ordinary use, signals that the obligation was not met — if the permits had been collected, a speaker would simply say <em>Ploy collected the permits on Monday</em>. Answering False would treat the form as a neutral record of a plan, which it is not. Answering "Can\'t tell" ignores an implication so regular that English speakers rely on it to complain without accusing anyone.' },

        { id: 't3l1s3-5', type: 'choose', tag: 'deo-advice', level: 'B2',
          stem: 'Which sentence is correctly formed?',
          options: [
            'You had better check the visa rules before you book.',
            'You had better to check the visa rules before you book.',
            'You ought check the visa rules before you book.',
            'You had better checking the visa rules before you book.'
          ],
          answer: 0,
          why: '<em>Had better</em> behaves like a modal and takes a bare infinitive, so option 1 is the only well-formed version. Option 2 is the near miss: it inserts a <em>to</em> that belongs with <em>ought</em>, not with <em>had better</em>. Option 3 removes the <em>to</em> from <em>ought</em>, which is the one member of this family that has kept it. Option 4 puts an <em>-ing</em> form where no auxiliary licenses one.' }
      ]
    }
  ],

  check: {
    id: 't3l1ck', name: 'Stage Check · Necessity and its source',
    items: [
      { id: 't3l1ck-1', type: 'choose', tag: 'deo-source', level: 'B2',
        stem: 'A safety notice inside a factory is written by the company that owns the factory. Which opening suits that situation best?',
        options: [
          'All staff have got to wear ear protection in Bay 3.',
          'All staff had better wear ear protection in Bay 3.',
          'All staff are supposed to wear ear protection in Bay 3.',
          'All staff must wear ear protection in Bay 3.'
        ],
        answer: 3,
        why: 'The company is the author of its own rule, so the notice speaks in its own authority and takes <em>must</em>. <em>Have got to</em> is spoken idiom and too casual for printed safety wording. <em>Be supposed to</em> reports a rule as coming from elsewhere and often hints that it is not being followed — a strange thing for a company to print about itself. <em>Had better</em> threatens a consequence on one occasion rather than stating a standing requirement.' },

      { id: 't3l1ck-2', type: 'spot', tag: 'deo-periph', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: [
          'Because the inspectors arrived a day early,',
          'the kitchen staff must throw away',
          'two trays of prepared food',
          'before the lunch service began.'
        ],
        answer: 1,
        fix: 'the kitchen staff had to throw away',
        why: '<em>Arrived</em> and <em>began</em> place the whole sentence in past time, and <em>must</em> has no past form, so the obligation must be carried by <em>had to</em>. Note that <em>must have thrown away</em> would not repair it either: that is a present-day deduction about the past, not a record of a rule. The remaining three parts are sound — the reason clause, the object and the time clause all agree with the past frame.' },

      { id: 't3l1ck-3', type: 'sort', tag: 'deo-advice', level: 'B2',
        stem: 'What is each sentence doing with the obligation?',
        bins: [
          { key: 'rec',  label: 'Recommending',  hint: 'the best option, not the only one' },
          { key: 'warn', label: 'Warning',       hint: 'something bad follows if you ignore it' },
          { key: 'rule', label: 'Reporting a rule that is not being kept', hint: 'someone else made it, and it is being ignored' }
        ],
        items: [
          { text: 'Students <em>should</em> keep a record of every source they read.', bin: 'rec' },
          { text: 'You <em>had better</em> take a raincoat — that sky looks bad.', bin: 'warn' },
          { text: 'We are <em>supposed to</em> sign the visitors\' book, but the pen went missing months ago.', bin: 'rule' },
          { text: 'Cyclists <em>ought to</em> use the marked lane where one exists.', bin: 'rec' },
          { text: 'The caretaker was <em>supposed to</em> unlock the hall at seven.', bin: 'rule' },
          { text: 'We <em>had better</em> book now, or there will be nothing left under four thousand baht.', bin: 'warn' }
        ],
        why: '<em>Should</em> and <em>ought to</em> are interchangeable here and both simply name the better course. Both <em>had better</em> sentences supply the threatened consequence out loud, which is exactly what distinguishes them from advice. Both <em>be supposed to</em> sentences point at a rule made elsewhere and let the listener infer that it is not being observed — in the past-tense one, the hall was plainly still locked at seven.' },

      { id: 't3l1ck-4', type: 'equiv', tag: 'deo-source', level: 'B2',
        given: 'My supervisor insists that I redraft the literature review.',
        stem: 'Which sentence reports that, and shows that the requirement comes from somebody other than the speaker?',
        options: [
          'I must redraft the literature review.',
          'I have to redraft the literature review.',
          'I had better redraft the literature review.',
          'I should redraft the literature review.'
        ],
        answer: 1,
        why: 'The supervisor is an authority outside the speaker, and <em>have to</em> is how a speaker reports such a requirement without taking it on as her own. Option 1 is the near miss — perfectly good English, and that is the point of the contrast: <em>must</em> puts the requirement in the speaker\'s own mouth, as if she owned it, so it loses the one thing the stem asks to be shown. Option 3 turns an instruction into self-directed advice with a vague threat attached. Option 4 turns an insistence into a recommendation the speaker could decide to ignore.' },

      { id: 't3l1ck-5', type: 'gap', tag: 'deo-periph', level: 'B2',
        blank: '(1)',
        lines: [{ who: 'Fah', text: 'The registry says our drama club has lost its room booking for next term.' }, { who: 'Ploy', text: 'So we ___(1)___ find somewhere else before rehearsals start.' }, { who: 'Fah', text: 'We ___(2)___ move once last term, remember, and that took six weeks.' }],
        stem: 'Choose the best option for gap (1).',
        options: ['will have to', 'will must', 'must to', 'had to'],
        answer: 0,
        why: 'The problem lies ahead of the speakers, so the obligation needs future reference, and nothing but a bare infinitive can follow <em>will</em> — hence <em>will have to</em>. <em>Will must</em> stacks two modals in one slot, which English does not allow. <em>Must to</em> gives a modal the <em>to</em> that belongs to <em>have to</em>. <em>Had to</em> is the near miss: it is exactly the form for gap (2), but here the search for a new room still lies ahead of them.' },

      { id: 't3l1ck-6', type: 'choose', tag: 'deo-advice', level: 'B2+',
        stem: 'Which sentence would a careful writer avoid in an academic essay?',
        options: [
          'Planners should consider the effect on nearby wetlands.',
          'Planners ought to consider the effect on nearby wetlands.',
          'Planners had better consider the effect on nearby wetlands.',
          'Planners are expected to consider the effect on nearby wetlands.'
        ],
        answer: 2,
        why: '<em>Had better</em> is spoken, personal and directed at a particular hearer on a particular occasion, and it threatens a consequence the writer is in no position to deliver. <em>Should</em> and <em>ought to</em> are the standard recommendation forms of written argument. <em>Be expected to</em> is different in meaning — it reports an institutional expectation rather than making a recommendation — but it is perfectly at home in academic register.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T3.levels.push({
  id: 't3l2', n: 2, name: 'The negation cliff', cefr: 'B2',
  blurb: 'Where the not lands — on the rule or on the action — decides whether you are forbidding something or letting it go.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't3l2s1', name: 'mustn\'t against don\'t have to', cefr: 'B2',
      theory: {
        key: 'In <em>mustn\'t</em> the negative belongs to the action, so the sentence forbids; in <em>don\'t have to</em> it belongs to the obligation itself, so the sentence releases you — the two are near-opposites, not a pair.',
        body: [
          'Start from the logic. A necessity says <strong>every acceptable option includes X</strong>. There are two different things you can deny. Deny the whole statement and you get <em>not every option includes X</em> — that is, <strong>there is no requirement</strong>. Deny only X and you get <em>every acceptable option includes not-X</em> — that is, <strong>you are required not to</strong>. Those are completely different instructions, and English chooses between them invisibly, inside a word.',
          'Here is where each expression puts the <em>not</em>. It goes <strong>onto the action</strong> in <em>mustn\'t</em>, <em>can\'t</em>, <em>may not</em> and <em>shouldn\'t</em>: all of these forbid or advise against. It goes <strong>onto the obligation</strong> in <em>don\'t have to</em>, <em>needn\'t</em>, <em>don\'t need to</em> and <em>aren\'t required to</em>: all of these release. Nothing in the shape of the words predicts which group an expression belongs to. It has to be learnt as a fact about each one.',
          'Two tests you can actually use mid-sentence. <strong>The paraphrase test:</strong> try <em>It is forbidden to …</em> and <em>It is not necessary to …</em> and see which one is true. <strong>The "but you can if you like" test:</strong> add that phrase and listen. <em>You don\'t have to wear a tie, but you can if you like</em> is fine; <em>You mustn\'t wear a tie, but you can if you like</em> is a contradiction. If the addition survives, you need the no-obligation form.',
          'Why this costs more marks than anything else in the modal system: in the affirmative, <em>must</em> and <em>have to</em> are near-synonyms, so the two negatives look like a matched pair. The symmetry breaks the instant <em>not</em> appears, and Thai offers no cue that anything is happening, so the mistake sails through unnoticed — and it does not blur a meaning, it <strong>inverts</strong> it. When the stakes are high, say it twice: <em>Attendance is optional; you are not required to come.</em>'
        ],
        simple: [
          '<em>You mustn\'t come</em> = coming is <strong>forbidden</strong>. <em>You don\'t have to come</em> = coming is <strong>your choice</strong>. They are opposites.',
          'The reason: in <em>mustn\'t</em> the <em>not</em> goes onto the action (a rule not to do it). In <em>don\'t have to</em> the <em>not</em> goes onto the rule itself (there is no rule).',
          'Test it by adding <em>but you can if you like</em>. That fits after <em>don\'t have to</em>. It makes nonsense after <em>mustn\'t</em>.'
        ],
        examples: [
          { s: 'You <b>mustn\'t</b> use a dictionary in the exam.', g: 'forbidden: using one breaks the rule.' },
          { s: 'You <b>don\'t have to</b> use a dictionary in the exam.', g: 'optional: use one or do not, as you prefer.' },
          { s: 'Passengers <b>don\'t have to</b> reserve a seat, but it is cheaper if they do.', g: 'the "but you can" test passes, so this is the no-obligation form.' },
          { s: '<s>You mustn\'t come if you are busy — it is only a rehearsal.</s>', g: 'this forbids attendance; the writer meant "you do not have to come".' }
        ]
      },
      items: [
        { id: 't3l2s1-1', type: 'choose', tag: 'deo-negcliff', level: 'B2',
          stem: 'A hospital notice reads: <em>Visitors must not bring flowers onto the ward.</em> What does it mean?',
          options: [
            'Bringing flowers is forbidden.',
            'Bringing flowers is optional.',
            'Bringing flowers is not recommended.',
            'There is no rule about flowers either way.'
          ],
          answer: 0,
          why: 'In <em>must not</em> the negative attaches to the action, so the ward is banning flowers. Option 2 is the negation cliff itself: it reads <em>must not</em> as though it were <em>do not have to</em>, which would make the flowers a matter of choice. Option 3 is the near miss — it is on the right side of the cliff, and it would be the meaning of <em>should not</em>, but <em>must not</em> is a ban, not advice. Option 4 removes the rule that the notice exists to state.' },

        { id: 't3l2s1-2', type: 'equiv', tag: 'deo-negcliff', level: 'B2',
          given: 'It is not necessary for delegates to print the conference programme.',
          stem: 'Which sentence says the same thing?',
          options: [
            'Delegates mustn\'t print the conference programme.',
            'Delegates shouldn\'t print the conference programme.',
            'Delegates can\'t print the conference programme.',
            'Delegates don\'t have to print the conference programme.'
          ],
          answer: 3,
          why: 'The given sentence denies the obligation and says nothing against printing, so it needs a form whose <em>not</em> sits on the obligation — <em>don\'t have to</em>. <em>Mustn\'t</em> moves the negative onto the action and bans printing. <em>Can\'t</em> also bans it, and additionally suggests it is impossible. <em>Shouldn\'t</em> advises against it, which is weaker than a ban but still the wrong side of the cliff.' },

        { id: 't3l2s1-3', type: 'choose', tag: 'deo-negcliff', level: 'B2',
          stem: 'A colleague has a long journey to the office, and you want him to know that nobody will mind if he watches the recording instead. Which completion says that? <em>The workshop is being recorded, so you ______ come in person.</em>',
          options: ['mustn\'t', 'shouldn\'t', 'don\'t have to', 'may not'],
          answer: 2,
          why: 'You are lifting an obligation rather than imposing one, and <em>don\'t have to</em> is the form whose negative sits on the obligation: come if you like, or watch the recording. <em>Mustn\'t</em> forbids him to come at all. <em>May not</em> refuses permission, which is the same ban in a more formal voice. <em>Shouldn\'t</em> advises against coming, so a colleague would read the email as being told to stay away rather than as being offered a choice.' },

        { id: 't3l2s1-4', type: 'spot', tag: 'deo-negcliff', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: [
            'Because all results are published online,',
            'candidates mustn\'t return to the school',
            'in August unless they wish',
            'to collect a printed certificate.'
          ],
          answer: 1,
          fix: 'candidates do not have to return to the school',
          why: 'The <em>unless</em> clause openly permits a return for anyone who wants a printed certificate, so nothing here can be forbidden. <em>Mustn\'t</em> puts the negative on the action and bans the visit, contradicting the rest of the sentence. The other three parts are fine: the reason clause explains the release, the time phrase is correct, and the infinitive after <em>wish</em> is well formed.' },

        { id: 't3l2s1-5', type: 'sort', tag: 'deo-negcliff', level: 'B2+',
          stem: 'Does each sentence forbid the action, or does it only say that the action is not required?',
          bins: [
            { key: 'ban',  label: 'Forbidden',    hint: 'there is a rule against doing it' },
            { key: 'free', label: 'Your choice', hint: 'do it or not, as you like' }
          ],
          items: [
            { text: 'You <em>mustn\'t</em> feed the monkeys.', bin: 'ban' },
            { text: 'You <em>don\'t have to</em> tip in most restaurants here.', bin: 'free' },
            { text: 'Staff <em>needn\'t</em> stay until the end of the fair.', bin: 'free' },
            { text: 'Cyclists <em>may not</em> use the pedestrian bridge.', bin: 'ban' },
            { text: 'Applicants <em>are not required to</em> supply a photograph.', bin: 'free' },
            { text: 'You <em>can\'t</em> park on the yellow lines at any hour.', bin: 'ban' }
          ],
          why: 'Three of these attach the negative to the action — <em>mustn\'t</em>, <em>may not</em> and <em>can\'t</em> — and each therefore states a prohibition, however different their register. The other three attach it to the obligation and leave the action open. <em>Needn\'t</em> is the one that catches people: it looks like a close relative of <em>mustn\'t</em> but sits on the other side of the cliff.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't3l2s2', name: 'needn\'t, don\'t need to: no obligation', cefr: 'B2',
      theory: {
        key: '<em>Needn\'t</em> and <em>don\'t need to</em> both cancel an obligation and neither ever forbids — the only difference is that <em>need</em> is a modal in the first and an ordinary verb in the second.',
        body: [
          '<em>Need</em> sits on the boundary between the modal class and the lexical class, and it can be either. As a <strong>modal</strong> it shows the full signature: no third-person <em>-s</em>, no <em>to</em>, it takes <em>not</em> directly (<em>needn\'t</em>) and it inverts on its own (<em>Need we decide today?</em>). As a <strong>lexical verb</strong> it behaves like any other: <em>needs to</em>, <em>doesn\'t need to</em>, <em>needed to</em>, <em>will need to</em>.',
          'Modal <em>need</em> survives almost entirely in negatives and questions, and it is the more formal, more British of the two. Affirmative <em>You need worry</em> is barely used outside fixed phrases such as <em>need hardly</em>. In practice that gives a simple division of labour: <em>needn\'t</em> for the negative, <em>need to</em> for everything else, including the past and the future.',
          'Both belong firmly on the release side of the cliff. <em>You needn\'t apply again</em> means there is no requirement to apply; it does not mean applying is banned. This makes <em>needn\'t</em> the cleanest paraphrase of <em>don\'t have to</em>, and the quickest way to show a student where <em>mustn\'t</em> went wrong: if the intended meaning survives when you substitute <em>needn\'t</em>, the sentence never wanted <em>mustn\'t</em> in the first place.',
          'Two things to store. First, the scope does not change when <em>need</em> goes lexical — <em>don\'t need to</em> is still no-obligation, with nothing forbidden. Second, the past splits into a famous pair: <em>needn\'t have done</em> (you did it, and it turned out to be unnecessary) against <em>didn\'t need to do</em> (it was not necessary, and normally you did not). Stage 6 takes that pair apart properly; for now, remember that the ordinary past of <em>don\'t have to</em> is <em>didn\'t need to</em> or <em>didn\'t have to</em>.'
        ],
        simple: [
          '<em>Needn\'t</em> and <em>don\'t need to</em> mean the same thing: there is <strong>no obligation</strong>. Neither one forbids anything.',
          '<em>Need</em> can be two kinds of verb. Modal: <em>You needn\'t worry</em> — no <em>do</em>, no <em>to</em>. Ordinary: <em>You don\'t need to worry</em> — with <em>do</em> and <em>to</em>. Pick one; never mix them.',
          'If you can replace a negative with <em>needn\'t</em> and keep your meaning, then <em>mustn\'t</em> was the wrong word, because <em>mustn\'t</em> forbids.'
        ],
        examples: [
          { s: 'You <b>needn\'t</b> bring anything — the department is providing lunch.', g: 'no obligation; nothing is being forbidden.' },
          { s: 'We <b>don\'t need to</b> book, but the queue can be long.', g: 'lexical need: it takes do-support and a "to".' },
          { s: '<b>Need</b> we decide today?', g: 'modal need inverts on its own, with no "do".' },
          { s: '<s>You don\'t needn\'t to worry about the deposit.</s>', g: 'choose one pattern: modal "needn\'t worry" or lexical "don\'t need to worry".' }
        ]
      },
      items: [
        { id: 't3l2s2-1', type: 'choose', tag: 'deo-noneed', level: 'B2',
          stem: 'In which sentence is <em>need</em> working as a modal verb?',
          options: [
            'The committee needs to meet before Friday.',
            'You needn\'t sign every page.',
            'Do we need to reserve a room?',
            'She needed to leave early.'
          ],
          answer: 1,
          why: 'Only option 2 shows the modal signature: <em>not</em> attached directly with no <em>do</em>, a bare infinitive after it, and no third-person <em>-s</em> anywhere. Option 1 carries the <em>-s</em> and a <em>to</em>, which a modal can never do. Option 3 needs <em>do</em> to form its question, so <em>need</em> there is an ordinary verb. Option 4 is the past <em>-ed</em>, and modals have no past inflection at all.' },

        { id: 't3l2s2-2', type: 'judge', tag: 'deo-noneed', level: 'B2',
          given: 'You needn\'t hand in the reading log this week.',
          stem: 'The teacher is telling the student not to hand the reading log in.',
          answer: 1,
          why: 'False. <em>Needn\'t</em> lifts the obligation and leaves the action entirely open: a student who wants to hand the log in this week may still do so. Reading it as an instruction not to is the negation cliff, and that meaning would need <em>mustn\'t hand in</em>. "Can\'t tell" is not right either, because the sentence states plainly which side of the cliff it is on.' },

        { id: 't3l2s2-3', type: 'choose', tag: 'deo-noneed', level: 'B2',
          stem: 'Which sentence does <strong>not</strong> mean the same as the other three?',
          options: [
            'Residents don\'t have to sort their glass by colour.',
            'Residents needn\'t sort their glass by colour.',
            'Residents are not required to sort their glass by colour.',
            'Residents must not sort their glass by colour.'
          ],
          answer: 3,
          why: 'The first three all put the negative on the obligation and say the same thing three ways: nobody is obliged to sort the glass, and anyone who wants to still may. Option 4 puts the negative on the action and forbids sorting, which is a different instruction and would leave a conscientious resident breaking a rule. That single switch is the whole of the negation cliff.' },

        { id: 't3l2s2-4', type: 'cloze', tag: 'deo-noneed', level: 'B2+',
          passage: 'The new library card arrived with a leaflet that managed to answer almost nothing. It said that borrowers ___(1)___ return books to the branch they borrowed them from, which sounded generous.\n\nIt also said that readers ___(2)___ remove the security strip under any circumstances, which sounded alarming. Only the last line was unambiguous: fines ___(3)___ be paid before a card can be renewed.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['mustn\'t', 'must', 'may not', 'needn\'t'],
          answer: 3,
          why: 'The clause <em>which sounded generous</em> tells you the library is lifting a restriction, and only <em>needn\'t</em> does that: books may go back to any branch. <em>Mustn\'t</em> and <em>may not</em> both forbid returning a book to its home branch, which would be a bizarre rule and the opposite of generous. <em>Must</em> imposes the obligation the sentence is describing as being lifted.' },

        { id: 't3l2s2-5', type: 'choose', tag: 'deo-noneed', level: 'B2+',
          stem: 'Nobody asked us for a deposit when we collected the keys, and we did not pay one. Which sentence reports that?',
          options: [
            'We mustn\'t have paid a deposit.',
            'We needn\'t have paid a deposit.',
            'We didn\'t need to pay a deposit.',
            'We weren\'t allowed to pay a deposit.'
          ],
          answer: 2,
          why: '<em>Didn\'t need to</em> is the plain past statement that no obligation existed, which is what the situation describes. <em>Needn\'t have paid</em> is the near miss: it would be right if we had paid, because it says the deposit was handed over and then turned out to be unnecessary — but we did not pay one. <em>Mustn\'t have paid</em> is not a past deduction at all: English uses <em>can\'t have</em> for that, and <em>mustn\'t</em> is for prohibitions. <em>Weren\'t allowed to</em> says somebody refused a deposit, when in fact nobody asked for one.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't3l2s3', name: 'can\'t, may not, are not to: prohibition and register', cefr: 'B2+',
      theory: {
        key: 'English has a whole ladder of ways to forbid — from the flat spoken <em>can\'t</em> to the institutional <em>is not to</em> — and they differ in register and authority, not in scope.',
        body: [
          'Everything in this family puts the negative on the action: <em>can\'t</em>, <em>cannot</em>, <em>mustn\'t</em>, <em>may not</em>, <em>is not to</em>, <em>is not permitted to</em>, <em>shall not</em>. Logically they are identical — each says that every acceptable course of action excludes this. What separates them is <strong>who is speaking and how loudly</strong>.',
          'The ladder, from the ground up. <em>Can\'t</em> is spoken and immediate, the everyday refusal issued by whoever is in charge at that moment. <em>Mustn\'t</em> is a rule the speaker owns, common to a class, a child or a printed notice. <em>May not</em> is formal and refuses permission in so many words, which is why written regulations prefer it. <em>Is not to</em> is administrative — a named authority has decided, and the subject is being told. <em>Is not permitted</em> and <em>shall not</em> are legal and impersonal.',
          'Two practical notes. In formal prose <em>cannot</em> is written as one word. And spoken <em>can\'t</em> is ambiguous between <em>not allowed</em> and <em>not able</em>: <em>You can\'t enter the archive</em> might be a rule or a broken lock. Regulations choose <em>may not</em> partly to close that gap, which is a small lesson in why formal registers exist at all.',
          'Choosing well means <strong>matching the force of the wording to the authority you actually hold</strong>. A student notice reading <em>You shall not enter the staff room</em> is comic, because <em>shall not</em> borrows the voice of a statute. A tenancy agreement reading <em>You can\'t sublet the flat</em> is sloppy, because a contract does not speak in the voice of a friend. Neither is a grammar error, but both are read as one.'
        ],
        simple: [
          'All of these forbid: <em>can\'t</em>, <em>mustn\'t</em>, <em>may not</em>, <em>is not to</em>, <em>shall not</em>. They mean the same thing but sound very different.',
          '<em>Can\'t</em> is spoken and immediate. <em>Mustn\'t</em> is a rule the speaker owns. <em>May not</em> is formal and written. <em>Is not to</em> is an instruction from an authority. <em>Shall not</em> is legal.',
          'Choose the one that matches your real authority. A friend does not say <em>shall not</em>; a contract does not say <em>can\'t</em>.'
        ],
        examples: [
          { s: 'You <b>can\'t</b> take drinks into the computer room.', g: 'spoken and immediate, said by whoever is in charge at the time.' },
          { s: 'Candidates <b>may not</b> consult notes of any kind.', g: 'a formal refusal of permission, the register of exam rules.' },
          { s: 'The fire door <b>is not to</b> be propped open.', g: 'an administrative instruction about one specific thing.' },
          { s: '<s>You shall not borrow my umbrella.</s>', g: 'legal register in a domestic situation; it sounds absurd.' }
        ]
      },
      items: [
        { id: 't3l2s3-1', type: 'choose', tag: 'deo-prohibit', level: 'B2+',
          stem: 'An examination paper has to tell candidates in its printed rubric that dictionaries are banned. Which version is worded for that job?',
          options: [
            'Candidates can\'t use a dictionary.',
            'Candidates may not use a dictionary.',
            'Candidates shouldn\'t use a dictionary.',
            'Candidates don\'t have to use a dictionary.'
          ],
          answer: 1,
          why: '<em>May not</em> refuses permission in the formal, impersonal register that rubrics use, and it also closes the gap that spoken <em>can\'t</em> leaves between "not allowed" and "not able". Option 1 is that spoken form, contraction and all, which is why no printed rubric uses it. Option 3 advises against the dictionary instead of banning it, so a candidate who used one would have broken no rule. Option 4 falls off the negation cliff and tells candidates the dictionary is optional — the opposite of the intended instruction.' },

        { id: 't3l2s3-2', type: 'sort', tag: 'deo-prohibit', level: 'B2+',
          stem: 'Each sentence forbids something. Where would you expect to meet it?',
          bins: [
            { key: 'spoken',  label: 'Spoken, on the spot', hint: 'said by whoever is in charge at that moment' },
            { key: 'printed', label: 'A printed rule',      hint: 'a notice or a set of regulations' },
            { key: 'legal',   label: 'Legal or contractual', hint: 'a statute, a licence or an agreement' }
          ],
          items: [
            { text: 'You <em>can\'t</em> park there, sorry — that space is reserved.', bin: 'spoken' },
            { text: 'Passengers <em>may not</em> occupy an exit row if they are under fifteen.', bin: 'printed' },
            { text: 'The tenant <em>shall not</em> sublet the property without written consent.', bin: 'legal' },
            { text: 'You <em>mustn\'t</em> touch that — it is still wet.', bin: 'spoken' },
            { text: 'Equipment <em>is not to</em> be removed from the studio.', bin: 'printed' },
            { text: 'The supplier <em>shall not</em> subcontract the work without written consent.', bin: 'legal' }
          ],
          why: 'Person and contraction do most of the sorting. The spoken pair use <em>you</em> plus a contraction and attach a here-and-now reason. The printed pair name a class of people or things in the third person, which is how a notice addresses everybody at once. The <em>shall not</em> pair name the parties to an agreement, and that third-person plus <em>shall</em> combination is the fingerprint of contractual English.' },

        { id: 't3l2s3-3', type: 'choose', tag: 'deo-prohibit', level: 'B2+',
          stem: 'A teacher is speaking to her class about the new fire door at the back of the room. Which sentence fits the situation?',
          options: [
            'That door shall not be blocked at any time.',
            'You mustn\'t block that door with your bags.',
            'That door is not permitted to be blocked.',
            'You don\'t have to block that door with your bags.'
          ],
          answer: 1,
          why: '<em>Mustn\'t</em> is a prohibition the speaker owns, addressed directly to the people in front of her, and that is what a teacher enforcing a rule sounds like. The two impersonal options are not merely more formal than the situation needs: <em>shall not</em> borrows the voice of a statute, and option 3 is clumsy legalese which, as written, makes the door rather than the pupils the thing lacking permission. Changing register forces the subject to change with it, which is why those two cannot say <em>you</em>. Option 4 is the cliff error: it tells the class that blocking the door is merely optional.' },

        { id: 't3l2s3-4', type: 'spot', tag: 'deo-prohibit', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: [
            'Under the terms of the licence,',
            'material downloaded from the archive',
            'does not have to be reproduced',
            'in any commercial publication.'
          ],
          answer: 2,
          fix: 'may not be reproduced',
          why: 'A licence restricting commercial use has to forbid, and <em>does not have to</em> forbids nothing — it says only that nobody is obliged to reproduce the material, which is no restriction at all. The negative has to sit on the action instead, and <em>may not be reproduced</em> does that in the formal register the rest of the clause is written in. The other three parts are sound: the licence phrase, the subject and the prepositional phrase are all correctly built.' },

        { id: 't3l2s3-5', type: 'equiv', tag: 'deo-prohibit', level: 'B2+',
          given: 'Under no circumstances are staff to discuss an ongoing investigation with the press.',
          stem: 'Which sentence carries the same force?',
          options: [
            'Staff must not discuss an ongoing investigation with the press.',
            'Staff needn\'t discuss an ongoing investigation with the press.',
            'Staff shouldn\'t discuss an ongoing investigation with the press.',
            'Staff don\'t have to discuss an ongoing investigation with the press.'
          ],
          answer: 0,
          why: '<em>Under no circumstances are staff to …</em> is an absolute prohibition, and <em>must not</em> is the everyday equivalent that keeps both the scope and the strength. <em>Needn\'t</em> and <em>don\'t have to</em> both release the obligation and would leave a member of staff free to talk to a reporter. <em>Shouldn\'t</em> is on the right side of the cliff but far too weak: it advises against something that the original rules out completely.' }
      ]
    }
  ],

  check: {
    id: 't3l2ck', name: 'Stage Check · The negation cliff',
    items: [
      { id: 't3l2ck-1', type: 'choose', tag: 'deo-negcliff', level: 'B2',
        stem: 'The football coach emails a parent: <em>As your daughter is still getting over flu, she ______ come to Saturday\'s practice — though if she feels well enough, she is very welcome to.</em> Which completion fits the email?',
        options: ['mustn\'t', 'shouldn\'t', 'doesn\'t have to', 'may not'],
        answer: 2,
        why: '<em>Doesn\'t have to</em> lifts the obligation and leaves the decision with the family, which is exactly what <em>she is very welcome to</em> goes on to confirm. <em>Mustn\'t</em> is the near miss: it would be right if the coach were keeping an infectious player away, but it bans attendance, and the second half of the email invites her. <em>May not</em> is the same ban in a more formal voice. <em>Shouldn\'t</em> advises her to stay away, which also clashes with the warm invitation that follows.' },

      { id: 't3l2ck-2', type: 'spot', tag: 'deo-negcliff', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: [
          'Delegates mustn\'t attend',
          'the optional city tour on Sunday',
          'if they would rather',
          'rest at the hotel.'
        ],
        answer: 0,
        fix: 'Delegates do not have to attend',
        why: 'The tour is described as <em>optional</em> and the conditional openly offers an alternative, so nothing is being forbidden and <em>mustn\'t</em> contradicts the rest of the sentence. The negative belongs on the obligation, not on the attending. The other three parts are correct: the noun phrase, the conditional and the infinitive after <em>would rather</em> are all well formed.' },

      { id: 't3l2ck-3', type: 'equiv', tag: 'deo-noneed', level: 'B2',
        given: 'There is no requirement for first-year students to buy the textbook.',
        stem: 'Which sentence says the same thing?',
        options: [
          'First-year students needn\'t buy the textbook.',
          'First-year students mustn\'t buy the textbook.',
          'First-year students shouldn\'t buy the textbook.',
          'First-year students can\'t buy the textbook.'
        ],
        answer: 0,
        why: 'The given sentence denies that any requirement exists, and <em>needn\'t</em> is the form whose negative sits on exactly that. <em>Mustn\'t</em> forbids the purchase, which would be an odd thing for a department to rule on. <em>Shouldn\'t</em> advises against buying it, adding an opinion the original does not hold. <em>Can\'t</em> suggests the book is unobtainable or the purchase not permitted, neither of which is stated.' },

      { id: 't3l2ck-4', type: 'build', tag: 'deo-negcliff', level: 'B2',
        stem: 'Put the words in order to tell a colleague that filling in section four is optional.',
        tiles: ['you', 'do', 'not', 'have', 'to', 'complete', 'section', 'four'],
        solution: 'you do not have to complete section four',
        alt: [],
        why: 'The tiles supply <em>do</em> and <em>to</em>, which are the marks of the periphrastic form, and in that form the negative lands on the obligation: there is no requirement, and the colleague may still fill the section in. Building <em>you must not complete section four</em> from the same idea would move the negative onto the action and ban the very thing you are offering as a choice.' },

      { id: 't3l2ck-5', type: 'cloze', tag: 'deo-prohibit', level: 'B2+',
        passage: 'The reading room reopened last month with a short list of rules taped to the door. Bags larger than a laptop case ___(1)___ be brought inside, and there are lockers in the lobby for anything bigger.\n\nReaders ___(2)___ reshelve books themselves, and are asked to leave them on the trolley at the end of each row. Food of any kind ___(3)___ be consumed at the desks.',
        blank: '(3)',
        stem: 'Choose the best option for blank (3).',
        options: ['needn\'t', 'had better not', 'does not have to', 'may not'],
        answer: 3,
        why: 'The door carries a list of prohibitions, so the last line bans food rather than making it optional, and <em>may not</em> is the impersonal refusal of permission that a printed rule uses. <em>Needn\'t</em> and <em>does not have to</em> both say only that nobody is obliged to eat at the desks, which restricts nothing. <em>Had better not</em> is spoken advice with a threatened consequence, and no printed rule speaks that way.' },

      { id: 't3l2ck-6', type: 'judge', tag: 'deo-prohibit', level: 'B2+',
        given: 'Personal laptops are not to be connected to the ward network.',
        stem: 'The sentence forbids connecting a personal laptop to the ward network.',
        answer: 0,
        why: 'True. <em>Be to</em> delivers an instruction from an authority, and in the negative the <em>not</em> sits on the action, so connecting a personal laptop is prohibited. It is not a statement that connecting one is unnecessary — that would be <em>do not have to be connected</em>, which restricts nobody and would leave the network open. Nor is it a prediction about what staff are likely to do; the passive and the impersonal subject mark it as a rule that somebody has issued.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T3.levels.push({
  id: 't3l3', n: 3, name: 'Permission and the language of rules', cefr: 'B2+',
  blurb: 'Who is allowed to do what — and how the same permission is worded in a conversation, on a notice and in a contract.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't3l3s1', name: 'can / may / be allowed to / be permitted to', cefr: 'B2+',
      theory: {
        key: 'Permission is the possibility half of the deontic scale: <em>can</em> is the everyday form, <em>may</em> the formal one, and <em>be allowed to</em> and <em>be permitted to</em> are the repairs that let permission take a tense.',
        body: [
          'If necessity says that <strong>every</strong> acceptable course of action includes something, permission says that <strong>at least one</strong> does — the rules leave the door open. <em>You can go</em> and <em>You may go</em> make the identical logical claim. What differs is register, not force, and a student who thinks <em>may</em> is "stronger permission" has misread a social signal as a semantic one.',
          '<em>Can</em> is the default spoken form and does three jobs at once — ability, permission and request — which is precisely why it is overused: the politeness dial never gets turned. <em>May</em> is formal, and in the permission sense it is the choice of written rules and of a careful speaker addressing someone senior. <em>Could</em> is not the past of permission for a single occasion; it is distance, used to soften a request, and Stage 5 is where that mechanism is taught.',
          'Because <em>can</em> and <em>may</em> are modals, they cannot be tensed, cannot follow <em>will</em> and cannot take <em>have</em>. Permission across time therefore runs on the periphrastic repairs: <em>were allowed to</em>, <em>will be allowed to</em>, <em>has been permitted to</em>, <em>to be allowed to</em>. <em>Be permitted to</em> is the more formal of the two and is at home in regulations; <em>be allowed to</em> is neutral and works everywhere.',
          'Finally, keep asking apart from granting. <em>Can I …?</em> and <em>May I …?</em> request permission; <em>You can</em> and <em>You may</em> grant it. And granting is not requiring: <em>You may leave at four</em> does not mean you have to. A surprising number of misunderstandings at work and in exams come from reading a permission as an instruction, which is the same two-layer confusion in a new place.'
        ],
        simple: [
          '<em>Can</em> and <em>may</em> both give permission. <em>Can</em> is everyday; <em>may</em> is formal and belongs in written rules.',
          'Modals have no past and no future form, so permission in other tenses uses <em>be allowed to</em> or <em>be permitted to</em>: <em>were allowed to</em>, <em>will be allowed to</em>.',
          'Permission is not obligation. <em>You may leave at four</em> means you are free to go, not that you must.'
        ],
        examples: [
          { s: 'You <b>can</b> use the side entrance after six.', g: 'everyday spoken permission.' },
          { s: 'Members <b>may</b> bring one guest to the annual dinner.', g: 'formal written permission, in the voice of the rule.' },
          { s: 'Only final-year students <b>were allowed to</b> enter the studio at night.', g: 'permission in past time; can and may have no past here.' },
          { s: '<s>Next year we will can apply for the travel grant.</s>', g: 'no modal may follow will; use "will be allowed to".' }
        ]
      },
      items: [
        { id: 't3l3s1-1', type: 'choose', tag: 'deo-permit', level: 'B2+',
          stem: 'Which sentence is the formal written equivalent of <em>You can bring a guest</em>?',
          options: [
            'Members must bring a guest.',
            'Members may bring a guest.',
            'Members had better bring a guest.',
            'Members may not bring a guest.'
          ],
          answer: 1,
          why: '<em>May</em> plus a third-person subject is how a written rule grants permission, and it makes the same claim as <em>can</em> at a higher register. Option 1 is the near miss: right register for a written rule, but it turns a permission into a requirement, so a member who came alone would be breaking it. <em>Had better</em> turns an invitation into a warning with a consequence attached. Option 4 is in the right register but reverses the rule, refusing the very permission the original grants.' },

        { id: 't3l3s1-2', type: 'cloze', tag: 'deo-permit', level: 'B2+',
          passage: 'The observatory has changed the way it handles visitors. Until last year only registered astronomy clubs ___(1)___ use the main telescope, and anyone else was politely turned away at the gate.\n\nFrom January the general public ___(2)___ book a two-hour slot through the website, although groups of more than six ___(3)___ apply in writing at least a month in advance.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['can', 'may', 'were allowed to', 'are permitted to'],
          answer: 2,
          why: '<em>Until last year</em> and <em>was turned away</em> fix the clause in past time, so permission needs a past form: <em>were allowed to</em> (or <em>could</em>, for a general past permission). <em>Can</em> and <em>may</em> are present and would both drag the sentence into the present, contradicting the time phrase. <em>Are permitted to</em> has the right kind of form but the wrong tense, and would say the old restriction is still in force.' },

        { id: 't3l3s1-3', type: 'choose', tag: 'deo-permit', level: 'B2+',
          stem: 'A notice in a research library reads: <em>Readers may photograph unbound items using a handheld camera.</em> What is the notice doing?',
          options: [
            'Requiring readers to photograph unbound items.',
            'Permitting something that is otherwise restricted.',
            'Predicting that readers will probably photograph unbound items.',
            'Advising readers to use a handheld camera rather than a scanner.'
          ],
          answer: 1,
          why: 'On a notice, <em>may</em> is the formal grant of permission: the library is opening a door that is normally shut. Option 1 reads permission as obligation, which is the single most expensive misreading of this form in workplaces. Option 3 takes <em>may</em> in its other, epistemic sense — possible but wrong here, since a library notice states rules rather than forecasting behaviour. Option 4 recasts a permission as advice about equipment, which the sentence never gives.' },

        { id: 't3l3s1-4', type: 'spot', tag: 'deo-permit', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: [
            'After the renovation is finished,',
            'postgraduate students will can use',
            'the fourth-floor reading room',
            'at any hour of the night.'
          ],
          answer: 1,
          fix: 'postgraduate students will be allowed to use',
          why: 'No modal may follow <em>will</em>, so <em>will can</em> is impossible; the meaning has to be carried by a periphrastic form. <em>Will be allowed to</em> is one repair; <em>will be able to</em> is equally grammatical and frames it as access rather than permission. The other three parts are correct.' },

        { id: 't3l3s1-5', type: 'equiv', tag: 'deo-permit', level: 'B2+',
          given: 'The committee did not give us permission to film inside the museum.',
          stem: 'Which sentence says the same thing?',
          options: ['We weren\'t allowed to film inside the museum.', 'We shouldn\'t have filmed inside the museum.', 'We didn\'t have to film inside the museum.', 'We mustn\'t film inside the museum.'],
          answer: 0,
          why: 'Permission was refused in past time, which calls for the past of the periphrastic permission form. Option 2 criticises filming that it takes to have happened; the given sentence reports a refusal, not a regret. Option 3 is the near miss — the right past tense, but it falls off the negation cliff and says only that filming was optional. Option 4 is a present prohibition and puts the rule in the speaker\'s own mouth rather than the committee\'s.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't3l3s2', name: 'shall and be to in rules and contracts', cefr: 'B2+',
      theory: {
        key: 'In legal and institutional English <em>shall</em> does not mean the future: it imposes a duty, and <em>be to</em> delivers an instruction issued by an authority.',
        body: [
          'In everyday speech <em>shall</em> has shrunk almost to nothing — it survives in offers and suggestions, <em>Shall I carry that?</em>, <em>Shall we take the earlier train?</em>, always first person and almost always a question. But in statutes, contracts, regulations and examination rubrics it is fully alive and means something quite different: it states what a party is <strong>obliged</strong> to do. <em>The tenant <strong>shall</strong> maintain the interior in good repair</em> is a duty, not a prediction, and you should read it as <em>must</em>.',
          '<em>Shall not</em> is the matching prohibition: <em>Candidates <strong>shall not</strong> remove any materials from the examination room.</em> The subject is characteristically third person and institutional — <em>the supplier</em>, <em>the applicant</em>, <em>candidates</em> — and that combination of third person with <em>shall</em> is the fingerprint of the register. Plain-English drafting campaigns now push writers towards <em>must</em>, but <em>shall</em> remains everywhere in documents that already exist.',
          '<em>Be to</em> (<em>is to</em>, <em>are to</em>, <em>was to</em>) is the instruction form. Someone with authority has decided, and the subject is being told. <em>You <strong>are to</strong> report to reception on arrival.</em> <em>All windows <strong>are to be</strong> closed by six.</em> In the passive it is the neutral way to issue an order without naming who gave it, which is why it suits notices and timetables. The past <em>was to</em> often carries a second meaning — that the plan did not come off — and Stage 6 returns to that.',
          'This is not only a lesson about law. It is the register of <strong>rule and process description</strong>, which IELTS Academic Task 1 asks for directly. Paraphrasing a diagram as <em>the mixture is to be heated to ninety degrees</em> or <em>operators must wear protective gloves</em> shows control that a string of <em>and then</em> clauses cannot. The reverse mistake costs too: dropping contractual <em>shall</em> into a Task 2 essay makes an argument sound like a lease.'
        ],
        simple: [
          'In contracts and regulations, <em>shall</em> means <em>must</em>. <em>The tenant shall give one month\'s notice</em> is a duty, not a prediction about the future.',
          'In ordinary speech, <em>shall</em> only survives in offers and suggestions: <em>Shall I help?</em>, <em>Shall we go?</em>',
          '<em>Be to</em> gives an instruction from an authority: <em>You are to report to reception</em>, <em>All windows are to be closed by six</em>.'
        ],
        examples: [
          { s: 'The tenant <b>shall</b> give one month\'s notice in writing.', g: 'contractual shall: a duty, not a prediction.' },
          { s: 'Candidates <b>shall not</b> remove any materials from the room.', g: 'the matching prohibition, in examination-rubric register.' },
          { s: 'You <b>are to</b> report to reception on arrival.', g: 'an instruction issued by an authority.' },
          { s: '<s>I shall not lend you my charger.</s>', g: 'contractual register in a conversation; the speaker means "I am not going to".' }
        ]
      },
      items: [
        { id: 't3l3s2-1', type: 'choose', tag: 'deo-shall', level: 'B2+',
          stem: 'In <em>The contractor shall remove all waste from the site at the end of each working day</em>, what does <em>shall</em> express?',
          options: [
            'A prediction about what the contractor will probably do.',
            'An offer of help from the contractor.',
            'A duty imposed by the contract.',
            'A polite suggestion about a possible arrangement.'
          ],
          answer: 2,
          why: 'Third-person <em>shall</em> in a contract states an obligation, and a clause of this kind exists precisely so that failing to clear the site is a breach. Option 1 reads it as future time, which is how <em>shall</em> is usually taught and almost never how it works in a legal document. Options 2 and 4 belong to the surviving conversational uses, which are first person and interrogative — <em>Shall I …?</em>, <em>Shall we …?</em> — neither of which this sentence is.' },

        { id: 't3l3s2-2', type: 'order', tag: 'deo-shall', level: 'B2+',
          stem: 'Put the four sentences in the order that makes a coherent extract from a set of laboratory regulations.',
          items: [
            'All persons entering the laboratory shall sign the register at the door.',
            'Those signing in are to collect a numbered badge from the technician on duty.',
            'The badge shall be worn visibly for the whole of the visit.',
            'It is to be returned to the technician before the visitor leaves the building.'
          ],
          why: 'The extract follows one visitor through one procedure, and each sentence picks up the noun the sentence before it introduced: register, then badge, then wearing the badge, then returning it. <em>Those signing in</em> can only refer back to the people who signed the register, and <em>It</em> in the last sentence can only be the badge. A student who puts the return before the wearing has the visitor handing back something not yet collected.' },

        { id: 't3l3s2-3', type: 'choose', tag: 'deo-shall', level: 'B2+',
          stem: 'A head teacher is writing to parents about a school trip. Which sentence sets the limit in the voice of a school writing to families, rather than that of a legal document or a conversation?',
          options: [
            'Pupils shall not bring more than five hundred baht in cash.',
            'Pupils don\'t have to bring more than five hundred baht in cash.',
            'Pupils can\'t bring more than five hundred baht in cash.',
            'Pupils are not to bring more than five hundred baht in cash.'
          ],
          answer: 3,
          why: '<em>Are not to</em> is the instruction form: an authority has decided and is telling the reader, which is exactly the relationship between a school and a parent. <em>Shall not</em> is not simply more formal than it needs to be — it borrows the voice of a statute, and reads as though the trip were governed by contract. <em>Can\'t</em> falls the other way, into spoken idiom. <em>Don\'t have to</em> is not a register fault at all but a meaning one: it falls off the negation cliff and tells parents the money is optional rather than capped.' },

        { id: 't3l3s2-4', type: 'spot', tag: 'deo-shall', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: [
            'Under clause nine of the agreement,',
            'if the client requests replacement parts in writing,',
            'the supplier shall to deliver them',
            'within ten working days.'
          ],
          answer: 2,
          fix: 'the supplier shall deliver them',
          why: '<em>Shall</em> is a modal and takes a bare infinitive, so the <em>to</em> has nothing to attach to; the writer has blended <em>shall</em> with <em>be obliged to</em>. It is worth noticing what the repaired clause then means: <em>shall deliver</em> is a duty, not a forecast of what the supplier is likely to do. The other three parts are correct: the <em>if</em> clause sets the condition, and the time phrase is the kind of precise limit such a clause needs.' },

        { id: 't3l3s2-5', type: 'sort', tag: 'deo-shall', level: 'B2+',
          stem: 'Each sentence uses <em>shall</em> or <em>be to</em>. Which of its two lives is on show?',
          bins: [
            { key: 'duty',  label: 'A duty or instruction', hint: 'somebody is being required to act' },
            { key: 'offer', label: 'An offer or suggestion', hint: 'the speaker is proposing something' }
          ],
          items: [
            { text: '<em>Shall</em> I close the window?', bin: 'offer' },
            { text: 'The parties <em>shall</em> meet twice a year to review the contract.', bin: 'duty' },
            { text: '<em>Shall</em> we take the earlier train?', bin: 'offer' },
            { text: 'Employees <em>shall</em> report any accident within twenty-four hours.', bin: 'duty' },
            { text: 'You <em>are to</em> wait here until your name is called.', bin: 'duty' },
            { text: '<em>Shall</em> I ask them to hold the room for us?', bin: 'offer' }
          ],
          why: 'Two signals sort these instantly. The offers are all first person and all questions — <em>Shall I …?</em>, <em>Shall we …?</em> — which is the main job conversational <em>shall</em> still does. The duties are statements with third-person institutional subjects, or with <em>you</em> plus <em>are to</em>, which marks an instruction coming down from an authority rather than a proposal going across between equals.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't3l3s3', name: 'Choosing the right force when you write a rule', cefr: 'B2+',
      theory: {
        key: 'Writing a rule means choosing two things at once — how much force the rule really has, and the register your reader expects to meet it in.',
        body: [
          'The whole deontic grid, in one place. <strong>Necessity:</strong> <em>must</em>, <em>have to</em>, <em>shall</em>, <em>be to</em>, <em>be required to</em>. <strong>Prohibition:</strong> <em>must not</em>, <em>may not</em>, <em>shall not</em>, <em>is not to</em>, <em>is not permitted to</em>. <strong>Permission:</strong> <em>can</em>, <em>may</em>, <em>be allowed to</em>, <em>be permitted to</em>. <strong>Recommendation:</strong> <em>should</em>, <em>ought to</em>, <em>be expected to</em>. Every cell has a spoken end and a written end, and moving along the cell changes only who is speaking.',
          'Three questions, in order, before you write. <strong>First: which cell is this?</strong> Requirement, prohibition, permission or recommendation. <strong>Second: whose authority is behind it</strong> — mine, or an institution\'s? <strong>Third: who is reading it, and where?</strong> Get the first question wrong and you invert the rule, which is a failure of meaning. Get the second or third wrong and you merely sound wrong — but in an exam that is still marked.',
          'The four commonest failures. Using <em>should</em> for something compulsory, so readers treat a requirement as advice. Using <em>mustn\'t</em> for something merely optional, which is the negation cliff and inverts the instruction. Dropping contractual <em>shall</em> into ordinary prose. And the quietest one: <strong>mixing registers inside a single document</strong> — <em>Candidates shall present identification. You can\'t use your phone.</em>',
          'Consistency is itself a rule of the genre. Pick one altitude — say <em>must / must not / may</em> for a set of institutional rules — and hold it for the whole document. A reader who meets three registers in five lines stops trusting any of them, because the voice keeps changing and no single authority seems to be speaking. In an IELTS Task 1 description of rules or a process, a single steady register across the answer is worth more than any individual clever sentence in it.'
        ],
        simple: [
          'Before writing a rule, ask three things: is it a requirement, a ban, a permission or advice? Whose authority is behind it? Who will read it?',
          'The dangerous mistakes are the ones that change the meaning: <em>should</em> for something compulsory, and <em>mustn\'t</em> for something optional.',
          'Then keep one register. Do not write <em>Candidates shall present identification</em> and then <em>You can\'t use your phone</em> in the same notice.'
        ],
        examples: [
          { s: 'Visitors <b>must</b> sign in; they <b>may not</b> enter the workshop unaccompanied.', g: 'one register, held across both halves.' },
          { s: '<s>Visitors must sign in; they can\'t just wander into the workshop.</s>', g: 'the register collapses halfway through the sentence.' },
          { s: 'Students <b>are expected to</b> attend every seminar.', g: 'an institutional expectation, just short of a rule.' },
          { s: 'Applications <b>are to be</b> submitted through the portal.', g: 'an impersonal instruction, with no authority named.' }
        ]
      },
      items: [
        { id: 't3l3s3-1', type: 'choose', tag: 'deo-register', level: 'B2+',
          stem: 'A university wants to make clear that attendance at laboratory sessions is compulsory and that missing one breaks a rule. Which sentence leaves a student no room to treat it as a matter of choice?',
          options: [
            'Students should attend every laboratory session.',
            'Students are expected to attend every laboratory session.',
            'Students must attend every laboratory session.',
            'Students are asked to attend every laboratory session.'
          ],
          answer: 2,
          why: '<em>Must</em> is the necessity cell, and the university is the authority making the rule, so it states it in its own voice and leaves nothing to weigh up. <em>Should</em> recommends, and a student may reasonably decide otherwise. <em>Be expected to</em> is an institutional expectation just short of a rule, which is exactly why students so often read it as advice. <em>Be asked to</em> is a request, and a request can be turned down without a rule being broken.' },

        { id: 't3l3s3-2', type: 'judge', tag: 'deo-register', level: 'B2+',
          given: 'We recommend that residents do not leave bicycles in the stairwell.',
          stem: 'The notice makes leaving a bicycle in the stairwell against the rules.',
          answer: 1,
          why: 'False. <em>We recommend</em> frames it as advice, not a rule: residents are being steered away from the stairwell, not forbidden it. A building that meant to prohibit would write <em>bicycles must not be left</em> or <em>may not be left</em>. "Can\'t tell" would be right only if the wording left the force genuinely open, and here it does not — this is a notice that has chosen, perhaps unwisely, to recommend.' },

        { id: 't3l3s3-3', type: 'choose', tag: 'deo-register', level: 'B2+',
          stem: 'Which pair of sentences keeps a single consistent register?',
          options: [
            'Delegates must wear their badges at all times. You can\'t take photographs in the main hall.',
            'Delegates must wear their badges at all times. Photography is not permitted in the main hall.',
            'Delegates shall wear their badges at all times. You\'d better not take photographs in the main hall.',
            'Delegates have got to wear their badges at all times. Photography shall not occur in the main hall.'
          ],
          answer: 1,
          why: 'Both sentences in option 2 address a class of people impersonally and state rules in the same institutional voice. Option 1 begins formally and then drops into spoken <em>you can\'t</em>. Option 3 is worse in the same way, moving from contractual <em>shall</em> to a personal warning. Option 4 reverses the slide, opening with spoken <em>have got to</em> and ending in legal <em>shall not</em>, which also sits oddly with the inanimate <em>photography</em>.' },

        { id: 't3l3s3-4', type: 'order', tag: 'deo-register', level: 'B2+',
          stem: 'Put the four sentences in the order that makes a coherent notice.',
          items: [
            'The sports hall will be closed for resurfacing from the first of October.',
            'During the closure all indoor classes are to be held in the gymnasium.',
            'Because the gymnasium is considerably smaller, every class must be booked in advance.',
            'Bookings may be made at the sports office from Monday of next week.'
          ],
          why: 'The notice moves from a cause to its consequence and then to the procedure that consequence creates. <em>During the closure</em> can only follow the announcement of a closure; <em>Because the gymnasium is considerably smaller</em> can only follow the move to the gymnasium; and the booking arrangements only make sense once booking has been said to be necessary. Notice also that the register holds steady — <em>are to</em>, <em>must</em>, <em>may</em> — across all four.' },

        { id: 't3l3s3-5', type: 'choose', tag: 'deo-register', level: 'B2+',
          stem: 'A laboratory notice has to forbid eating, permit water in sealed bottles, and require eye protection. Which version does all three correctly and in one register?',
          options: [
            'Food may not be consumed in the laboratory. Water in sealed bottles is permitted. Eye protection must be worn at all times.',
            'Food must not be consumed in the laboratory. Water in sealed bottles does not have to be brought. Eye protection should be worn at all times.',
            'You can\'t eat in the laboratory. Water in sealed bottles may not be brought in. Eye protection must be worn at all times.',
            'Food is not to be consumed in the laboratory. Water in sealed bottles must be brought. Eye protection is permitted at all times.'
          ],
          answer: 0,
          why: 'Option 1 puts each instruction in the right cell — prohibition, permission, requirement — and keeps one impersonal written register throughout. Option 2 gets the water wrong, since <em>does not have to be brought</em> releases an obligation nobody had instead of permitting anything, and it demotes a safety requirement to <em>should</em>. Option 3 opens in spoken register and then forbids the water it was meant to allow. Option 4 inverts two cells at once: it requires the water and merely permits the eye protection.' }
      ]
    }
  ],

  check: {
    id: 't3l3ck', name: 'Stage Check · Permission and the language of rules',
    items: [
      { id: 't3l3ck-1', type: 'choose', tag: 'deo-permit', level: 'B2+',
        stem: 'In which sentence does <em>can</em> express permission rather than capacity?',
        options: [
          'The new scanner can read badly damaged barcodes.',
          'Visitors can borrow a wheelchair at the main desk.',
          'She can name every wading bird in the reserve.',
          'The old bridge can carry forty tonnes.'
        ],
        answer: 1,
        why: 'Only option 2 is about what the rules of the place allow: the desk is offering a service that visitors are entitled to use. The other three are all about what a subject is physically or mentally capable of — a machine\'s function, a person\'s knowledge and a structure\'s load limit. That is dynamic modality, which Stage 4 takes up, and it is the reason <em>can</em> is so often ambiguous on a notice.' },

      { id: 't3l3ck-2', type: 'spot', tag: 'deo-shall', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: [
          'You are to reporting to the site office',
          'as soon as you arrive on Monday,',
          'where a supervisor will issue',
          'your safety equipment.'
        ],
        answer: 0,
        fix: 'You are to report to the site office',
        why: 'The instruction form is <em>be</em> plus <em>to</em> plus a bare infinitive, so <em>are to report</em> is the only possible shape; <em>are to reporting</em> blends it with the present continuous. The other three parts are sound: the time clause, the relative clause and the object all sit correctly, and <em>will issue</em> is a genuine future prediction rather than an instruction.' },

      { id: 't3l3ck-3', type: 'gap', tag: 'deo-permit', level: 'B2+',
        blank: '(1)',
        lines: [{ who: 'Nok', text: 'I want to take the drone up over the reservoir for the geography project.' }, { who: 'Pim', text: 'You ___(1)___ fly it there without a permit from the district office.' }, { who: 'Nok', text: 'Then I ___(2)___ apply this week, because the project is due in a fortnight.' }],
        stem: 'Choose the best option for gap (1).',
        options: ['don\'t have to', 'aren\'t obliged to', 'needn\'t', 'aren\'t allowed to'],
        answer: 3,
        why: 'Pim is reporting a rule that closes the reservoir to unlicensed flying, and Nok\'s reply — that she will apply this week — only makes sense if the permit is compulsory. <em>Aren\'t allowed to</em> is the everyday form for a refusal of permission. The other three all sit on the release side of the cliff: <em>don\'t have to</em>, <em>needn\'t</em> and <em>aren\'t obliged to</em> would only say that nobody is forcing her to fly without a permit, which is no answer to her plan and does not make the permit compulsory.' },

      { id: 't3l3ck-4', type: 'choose', tag: 'deo-register', level: 'B2+',
        stem: 'Which sentence is wrong for the register of a tenancy agreement?',
        options: [
          'The tenant shall not keep pets on the premises.',
          'The tenant is not permitted to keep pets on the premises.',
          'The tenant must not keep pets on the premises.',
          'The tenant can\'t keep pets on the premises.'
        ],
        answer: 3,
        why: '<em>Can\'t</em> is spoken idiom, and a contract does not speak in the voice of a friend; the contraction alone marks it as out of place in a signed document. The other three are all at home there: <em>shall not</em> is the traditional drafting form, <em>is not permitted to</em> the impersonal one, and <em>must not</em> the plain-English replacement that drafting guides now recommend. All four forbid, so the fault is register rather than meaning.' },

      { id: 't3l3ck-5', type: 'equiv', tag: 'deo-shall', level: 'B2+',
        given: 'All applications are to be submitted through the online portal.',
        stem: 'Which sentence carries the same force?',
        options: [
          'All applications may be submitted through the online portal.',
          'All applications must be submitted through the online portal.',
          'All applications should be submitted through the online portal.',
          'All applications need not be submitted through the online portal.'
        ],
        answer: 1,
        why: '<em>Be to</em> issues an instruction from an authority, and its everyday equivalent is <em>must</em>: the portal is the only route. <em>May</em> turns the requirement into one permitted option among several, so paper applications would still be valid. <em>Should</em> demotes it to a recommendation. Option 4 removes the requirement altogether, which is the negation cliff arriving in a sentence that never mentioned a negative.' },

      { id: 't3l3ck-6', type: 'build', tag: 'deo-register', level: 'B2+',
        stem: 'Put the words in order to make one sentence for a set of printed museum rules, forbidding flash photography.',
        tiles: ['flash', 'photography', 'is', 'not', 'permitted', 'in', 'the', 'galleries'],
        solution: 'flash photography is not permitted in the galleries',
        alt: ['in the galleries flash photography is not permitted'],
        why: 'The impersonal passive states a prohibition without addressing anybody in particular, which is exactly the voice a printed rule uses, and the negative sits on the action so the practice is genuinely forbidden. <em>You can\'t use your flash</em> would forbid the same thing in the wrong register, and <em>flash photography does not have to be used</em> would fall off the negation cliff and tell visitors the flash was merely optional.' }
    ]
  }
});

TOPICS.push(T3);
