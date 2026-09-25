/* ===========================================================================
   STAGE 08 — The Whole System
   The capstone. Everything installed in Stages 1-7 is put back together and
   stress-tested: one modal with two readings, a verb phrase five slots deep,
   the shrinking edges of the class, and a writer's stance tracked across a page.
   =========================================================================== */

var T8 = {
  id: 't8', n: 8, code: 'Stage 08', art: 'lexicon',
  name: 'The Whole System',
  cefr: 'C1–C1+',
  blurb: 'One modal, two readings; a verb phrase five slots deep; and a writer\'s stance tracked across a page. Everything at once, which is how the exam asks for it.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T8.levels.push({
  id: 't8l1', n: 1, name: 'One modal, two readings', cefr: 'C1',
  blurb: 'The same word does two different jobs, and the sentence itself does not always say which.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't8l1s1', name: 'Epistemic or deontic?', cefr: 'C1',
      theory: {
        key: 'A core modal is neutral between domains: <em>He must be in the library</em> is a deduction or an order, and nothing inside the sentence marks which.',
        body: [
          'Stage 2 gave you the epistemic ladder — <em>must, will, should, may, might, could, can\'t</em> — and Stage 3 gave you the deontic scale. You will have noticed that the two lists are largely the same words. That is not an accident of vocabulary, and it is not laziness on the part of English. It is the most important structural fact about the system, and this stage begins with it.',
          'A necessity modal says that <strong>every possibility still open is one in which the proposition holds</strong>; a possibility modal says that <strong>at least one is</strong>. What changes between the two domains is not the logic but the <strong>set of possibilities being quantified over</strong>. For an epistemic modal that set is whatever is consistent with the speaker\'s evidence. For a deontic modal it is whatever is consistent with the rules. Same shape, different source — so one word does for both, and it carries no mark at all of which set it has in mind.',
          'The consequence is that the ambiguity is <strong>structural rather than accidental</strong>. <em>He must be in the library</em>: my evidence leaves no other option, or the regulations leave him none. <em>You may leave at four</em>: perhaps you will, or you are permitted to. <em>She can work a fourteen-hour shift</em>: she has the stamina (dynamic, Stage 4) or she is authorised to (deontic). These are not badly written sentences. They are ordinary ones.',
          'Nothing inside the modal resolves them. What resolves them is the rest of the clause and the situation, and the clues are systematic enough to be taught — which is Module 1.2. One free test is worth having now: the two domains have different negatives. A deduction is denied with <em>can\'t</em> and an obligation with <em>mustn\'t</em> (Stages 2 and 3), so if you can restate the point in the negative, the form you reach for tells you which reading you were holding.'
        ],
        simple: [
          'Most modals do two jobs. <em>Must</em> can mean <strong>I am sure</strong> or it can mean <strong>you have to</strong>. <em>May</em> can mean <strong>perhaps</strong> or <strong>you are allowed</strong>.',
          'The word itself does not tell you which. Only the rest of the sentence and the situation do.',
          'A quick test: say it in the negative. <em>Can\'t</em> is for being sure; <em>mustn\'t</em> is for rules. Whichever one feels right shows you which meaning you had.'
        ],
        examples: [
          { s: 'He <b>must</b> be in the library — his bike is still outside.', g: 'a deduction: the evidence leaves no other option.' },
          { s: 'He <b>must</b> be in the library by four to collect his transcript.', g: 'an obligation: the regulation leaves him no option.' },
          { s: 'Visitors <b>may</b> photograph the cloister.', g: 'permission, although out of context this could be a weak guess.' },
          { s: '<s>He mustn\'t be in the library — his bike has gone.</s>', g: 'a deduction cannot be denied with mustn-t; the negative of epistemic must is can-t.' }
        ]
      },
      items: [
        { id: 't8l1s1-1', type: 'choose', tag: 'sys-ambig', level: 'C1',
          stem: 'A colleague sends you one line: <em>Anan must be in the server room.</em> What makes this ambiguous?',
          options: [
            '<em>Must</em> can refer either to the present or to the past.',
            '<em>Be</em> could be either the main verb or the passive auxiliary.',
            '<em>Must</em> can be a deduction or a requirement, and nothing here chooses.',
            '<em>Must</em> can be a firm deduction or a cautious guess, and nothing here chooses.'
          ],
          answer: 2,
          why: 'The same word serves the epistemic and the deontic domain, so the message may report an inference or relay an instruction, and a reader who acts on the wrong one goes to the wrong place. Option 4 is the near miss: it stays inside the deduction reading and asks how strong it is, but a deducing <em>must</em> always sits at the top of the scale, so there is no cautious reading for it to be confused with. Option 1 is false: a modal plus a bare infinitive refers to now, and past reference goes into the proposition as <em>must have been</em> (Stage 6). Option 2 fails because nothing follows <em>be</em> but a place phrase, so there is no participle for a passive to attach to.' },

        { id: 't8l1s1-2', type: 'judge', tag: 'sys-ambig', level: 'C1',
          given: 'Visitors may use the reading room on production of a day pass.',
          stem: 'The writer is estimating how likely it is that visitors use the reading room.',
          answer: 1,
          why: 'False. <em>On production of a day pass</em> attaches a condition to an entitlement, and entitlements are granted, not estimated — no writer makes a probability depend on whether a document is produced. So the reading is deontic permission, and the phrase that looks like decoration is in fact what settles the domain. The answer is not <em>Can\'t tell</em>, because that condition removes the epistemic reading rather than leaving it open.' },

        { id: 't8l1s1-3', type: 'equiv', tag: 'sys-ambig', level: 'C1',
          given: 'All candidates must sit the paper in the main hall.',
          stem: 'A university examinations handbook contains this sentence. Which sentence says the same thing?',
          options: [
            'It is almost certain that all candidates are sitting the paper in the main hall.',
            'All candidates are required to sit the paper in the main hall.',
            'All candidates are likely to sit the paper in the main hall.',
            'All candidates are permitted to sit the paper in the main hall.'
          ],
          answer: 1,
          why: 'A handbook states rules, the subject is a set of people who can act, and <em>sit the paper</em> is something they do — so this is deontic necessity, which <em>are required to</em> renders exactly. Option 1 keeps the strength but switches domains, turning a regulation into a confident guess about where people happen to be. Option 3 switches domains <strong>and</strong> drops down the ladder to mere likelihood. Option 4 stays deontic but converts necessity into possibility, which would let a candidate sit anywhere else without breaking a rule.' },

        { id: 't8l1s1-4', type: 'choose', tag: 'sys-ambig', level: 'C1',
          stem: 'A safety report reads: <em>The valve should be closed at the end of each cycle.</em> An engineer cannot tell which of two things the sentence means. Which two?',
          options: [
            'That the valve is closed now, or that it will be closed at some later point.',
            'That one particular valve is meant, or that every valve of that type is.',
            'That the author is issuing an instruction, or that the author is granting permission.',
            'That closing the valve is the required procedure, or that it can be expected to be closed by then.'
          ],
          answer: 3,
          why: '<em>Should</em> is ambiguous in exactly the way <em>must</em> is: deontic weak obligation (Stage 3) against epistemic expectation (Stage 2, <em>should</em> and <em>ought to</em> as expectation). The engineer cannot tell whether the line is an instruction to carry out or a prediction to verify, and those call for different actions. Option 1 offers two times rather than two readings, and both readings look at the same moment anyway. Option 2 is not available at all: <em>the valve</em> is a definite singular and picks out one valve, and a claim about the type would have to read <em>valves of this type</em>. Option 3 is the near miss: an instruction is one of the two readings, but it is paired with a second rule-reading, and <em>should</em> has no permission sense at all — permission would need <em>may</em> or <em>can</em>.' },

        { id: 't8l1s1-5', type: 'spot', tag: 'sys-ambig', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Nobody has seen the caretaker all morning', 'and his van is not in the yard,', 'so unless he came in on foot,', 'he mustn\'t be on site today.'],
          answer: 3,
          fix: 'he can\'t be on site today.',
          why: 'Two clauses of evidence make this a deduction, and the negative of a deducing <em>must</em> is a different word: the denial of a deduction is <em>can\'t</em>, never <em>mustn\'t</em> (Stage 2). <em>Mustn\'t</em> can only be read as a rule, which would say the caretaker is forbidden to be on site — a claim no missing van could support. The other three parts are sound: two pieces of evidence and an <em>unless</em>-clause naming the one possibility the evidence leaves open.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't8l1s2', name: 'The clues: subject, aspect, adverbial', cefr: 'C1',
      theory: {
        key: 'A deontic modal puts a requirement on a participant, so it needs a subject who can act and an action that can be performed; every clue that resolves an ambiguous modal follows from that one condition.',
        body: [
          'Resolving an ambiguous modal is not intuition, and a student who treats it as intuition will be right about seventy per cent of the time for the rest of their life. It is a short procedure, and the whole procedure rests on a single asymmetry: <strong>a deontic modal imposes something on the subject, and an epistemic modal imposes nothing on anyone.</strong> Obligation has entry requirements. Deduction has none. So wherever a requirement could not possibly be met, the deontic reading dies and only the epistemic survives.',
          '<strong>Clue one: a stative verb, a perfect, or a progressive points to the epistemic reading.</strong> <em>He must know by now</em> — knowing is a state you are not in a position to take up on instruction. <em>She must have left before six</em> — the perfect looks back at a finished event, and nobody can be placed under an obligation to have already acted. <em>They must be waiting outside</em> — a progressive describes something already under way, and you cannot be ordered into the middle of an action. Obligation looks forward at an open choice; all three of these forms look at something that is closed.',
          '<strong>Clue two: an inanimate or non-agentive subject blocks the deontic reading.</strong> <em>The shipment must be delayed</em> reads as an inference, because the shipment is a patient and not an agent — there is nobody in the sentence for a requirement to land on. Note the contrast with a passive that keeps a recoverable agent: <em>The form must be signed by the applicant</em> is a rule, because the applicant is named and can sign. It is agency that matters, not the passive voice.',
          '<strong>Clue three: a future deadline plus a goal-directed, controllable action points to the deontic reading</strong> — <em>You must be there by four</em>. A deadline is the shape of a requirement, and evidence cannot be about a moment that has not arrived. <strong>Clue four: an agentive subject and a controllable action with no other clue leaves both readings open</strong> — <em>Dr Suwan must supervise the night shift</em> — and that is the configuration in which a writer has to decide something, which is Module 1.3.'
        ],
        simple: [
          'A rule needs somebody who can obey it and something they can do. A deduction needs neither. That one difference produces all the clues.',
          'States (<em>must know</em>), finished events (<em>must have left</em>) and things already happening (<em>must be waiting</em>) cannot be ordered, so those are deductions. Things that cannot act — a shipment, the weather — cannot be ordered either.',
          'A deadline (<em>by four</em>) with an action somebody controls is a rule. A person plus a normal action plus nothing else is open, and only the context decides.'
        ],
        examples: [
          { s: 'He <b>must know</b> the result by now.', g: 'a stative verb: nobody can be instructed to know something, so this is a deduction.' },
          { s: 'The shipment <b>must have been</b> delayed at customs.', g: 'the perfect looks back at a finished event, so no requirement can attach to it.' },
          { s: 'All visitors <b>must report</b> to reception on arrival.', g: 'an agent, a controllable action and a moment named: this is a rule.' },
          { s: '<s>The rainfall must be heavier than last year by the end of the month.</s>', g: 'a deadline cannot be imposed on rainfall, so the two clues pull against each other and the sentence collapses.' }
        ]
      },
      items: [
        { id: 't8l1s2-1', type: 'choose', tag: 'sys-clues', level: 'C1',
          stem: 'Why can <em>The committee must have met in secret</em> only be a deduction?',
          options: [
            'Because <em>committee</em> is a collective noun and cannot be the subject of an obligation.',
            'Because <em>meet</em> is a stative verb.',
            'Because <em>have met</em> describes a finished event, and no rule can demand what is already done.',
            'Because <em>in secret</em> is an adverbial of manner rather than of time.'
          ],
          answer: 2,
          why: 'Obligation is about an open choice, and the perfect closes the event before the moment of speaking, so only the epistemic reading survives (Stage 6). Option 1 is false in the plainest way: <em>The committee must approve every change to the timetable</em> is a rule, and collective nouns take duties constantly. Option 2 is the near miss — a stative verb really would force a deduction — but <em>meet</em> is dynamic and entirely controllable, which is why <em>The committee must meet before Friday</em> is a perfectly good requirement; it is the perfect that blocks the reading, not the verb. Option 4 is accurate about the adverbial but irrelevant, since manner adverbials sit comfortably in both domains.' },

        { id: 't8l1s2-2', type: 'cloze', tag: 'sys-clues', level: 'C1',
          passage: 'The container was logged out of Laem Chabang on the eleventh and has not been scanned since. It ___(1)___ be sitting in a transit yard somewhere between the port and the depot, because nothing else would account for the silence.\n\nUnder the carrier\'s own terms, every consignment ___(2)___ be scanned at each transfer point, and a missing scan ___(3)___ be reported within forty-eight hours. Neither of those things happened.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['must', 'is required to', 'is to', 'shall'],
          answer: 0,
          why: 'The <em>because</em>-clause offers evidence, the subject is a container that can obey nothing, and the progressive describes something already under way — three clues all pointing the same way, so the slot needs the epistemic <em>must</em>. The other three options are single-domain deontic forms: <em>is required to</em>, <em>is to</em> and <em>shall</em> all impose duties, and a container cannot be under a duty to sit in a yard. Blanks (2) and (3), where a written rule is being reported, are exactly where those forms do belong.' },

        { id: 't8l1s2-3', type: 'choose', tag: 'sys-clues', level: 'C1',
          stem: 'Which sentence leaves <strong>both</strong> readings genuinely open?',
          options: [
            'Dr Suwan must have supervised the night shift.',
            'Dr Suwan must be exhausted.',
            'Dr Suwan must report to the ward sister before eight.',
            'Dr Suwan must supervise the night shift.'
          ],
          answer: 3,
          why: 'An agentive subject, a controllable action, no perfect, no progressive and no deadline: nothing in the clause pushes either way, so only the context can settle whether this is the rota speaking or a colleague inferring. Option 1 has the perfect, so the event is closed and no duty can attach. Option 2 has a state nobody chooses, and exhaustion cannot be required. Option 3 is the near miss: same subject, same kind of action, but the deadline <em>before eight</em> gives it the classic signature of a rule.' },

        { id: 't8l1s2-4', type: 'spot', tag: 'sys-clues', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The pressure in the main line has dropped sharply,', 'and no alarm has sounded,', 'so the sensor on the east branch is required to be faulty,', 'which the engineers will check in the morning.'],
          answer: 2,
          fix: 'so the sensor on the east branch must be faulty,',
          why: 'The clause draws a conclusion from two pieces of evidence, but <em>is required to</em> is a deontic-only periphrasis: it says a duty has been placed on the sensor, and nothing can be under a duty to be faulty. Only <em>must</em> — or a single-domain epistemic repair such as <em>is presumably</em> — carries the inference. The other three parts are correct: two evidence clauses, and a final clause in which <em>will</em> is an ordinary prediction.' },

        { id: 't8l1s2-5', type: 'choose', tag: 'sys-clues', level: 'C1',
          stem: 'An economics paper reads: <em>Households in the lowest quintile must be under-reporting income by a considerable margin.</em> Which single feature most firmly rules out an obligation reading?',
          options: [
            'The subject <em>households</em>, which cannot take instructions.',
            'The progressive <em>be under-reporting</em>.',
            'The adverbial <em>by a considerable margin</em>.',
            'The strength of <em>must</em> compared with <em>should</em>.'
          ],
          answer: 1,
          why: '<em>Must be doing</em> is deduction about what is happening now (Stage 2): it describes a pattern already under way, and an instruction cannot be issued to be in the middle of something; a rule on this subject would have to read <em>must not under-report</em>. Option 1 is the near miss — a subject that cannot act really would block the obligation reading — but households can act, and <em>Households must declare all income</em> is an ordinary rule. Option 3 measures the size of the effect and is neutral between the domains. Option 4 is about position on the scale, and that scale runs through both domains alike, so it cannot distinguish them.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't8l1s3', name: 'When a writer should remove the ambiguity', cefr: 'C1',
      theory: {
        key: 'Ambiguity is a fault only where the reader has to act on the sentence; where it is, replace the modal with a form that belongs to one domain only — <em>is required to</em> for the rule, <em>is presumably</em> for the deduction.',
        body: [
          'An ambiguous modal is not automatically a defect. In journalism, in a report, in ordinary prose, context resolves it without the reader noticing, and the neutral modal is shorter and less pompous than anything you could replace it with. <em>Staff must wear identification at all times</em> needs no repair, because a staff handbook is read as a set of rules before the sentence begins. The question to ask is not <em>is this ambiguous</em> but <strong>what will the reader do with it</strong>.',
          'Where it matters: instructions, regulations, contracts, safety notices, clinical protocols, marking criteria, tender documents — anywhere a reader has to decide whether they are being told a fact or given a duty. In those genres one ambiguous <em>must</em> is a real cost, and in a contract it is the kind of thing that gets litigated. The higher the consequence of acting on the wrong reading, the less tolerance the genre has.',
          'The repair on the deontic side is to use a form that exists only in that domain: <em>is required to</em>, <em>is to</em>, <em>has a duty to</em>, <em>shall</em> in legal drafting, and <em>must not</em> for prohibition (Stage 3). None of these can be read as an inference, because none of them has an epistemic life at all. The cost is weight, so use them where the stakes justify it and leave the bare modal where they do not.',
          'The repair on the epistemic side is the same move in the other direction: <em>is presumably</em>, <em>appears to</em>, <em>is almost certainly</em>, <em>the evidence suggests</em> — or keep <em>must</em> and attach the evidence to it, since an explicit <em>on this evidence</em> makes the domain unmistakable. And remember the free test from Module 1.1: the negatives are already unambiguous, so a writer who can restate the point negatively has a check that costs nothing.'
        ],
        simple: [
          'Not every ambiguous modal needs fixing. Ask what the reader has to do with the sentence. A blog post is safe; a safety notice is not.',
          'To make it a rule for certain: <em>is required to</em>, <em>is to</em>, <em>must not</em>. None of those can be misread as a guess.',
          'To make it a guess for certain: <em>is presumably</em>, <em>appears to</em>, <em>almost certainly</em>. None of those can be misread as a rule.'
        ],
        examples: [
          { s: 'Applicants <b>are required to</b> hold a first degree.', g: 'a single-domain form: this can only be a rule.' },
          { s: 'The delay <b>is presumably</b> the result of the new scanner.', g: 'a single-domain form on the other side: this can only be an inference.' },
          { s: 'Staff <b>must</b> wear identification at all times.', g: 'left ambiguous on purpose, because a staff handbook is read as rules anyway.' },
          { s: '<s>The claimant must have been resident for five years and must be telling the truth.</s>', g: 'one sentence, two domains, two different musts; split it or replace both.' }
        ]
      },
      items: [
        { id: 't8l1s3-1', type: 'equiv', tag: 'sys-disambig', level: 'C1',
          given: 'Candidates must be present in the hall fifteen minutes before the paper begins.',
          stem: 'The examinations officer wants a version that cannot be misread. Which one is it?',
          options: [
            'Candidates are presumably present in the hall fifteen minutes before the paper begins.',
            'Candidates should be present in the hall fifteen minutes before the paper begins.',
            'Candidates will be present in the hall fifteen minutes before the paper begins.',
            'Candidates are required to be present in the hall fifteen minutes before the paper begins.'
          ],
          answer: 3,
          why: '<em>Are required to</em> is deontic-only and keeps the original at full strength, which is what a regulation needs. Option 1 removes the ambiguity by moving into the wrong domain entirely, so nobody is obliged to do anything. Option 2 is the near miss: it stays with rules but slides down to advice, and a late candidate could argue that advice was not followed rather than that a rule was broken. Option 3 is a prediction: if it turns out false, no rule has been broken and the officer has no grounds for anything.' },

        { id: 't8l1s3-2', type: 'sort', tag: 'sys-disambig', level: 'C1',
          stem: 'Sort each sentence by the reading its own wording forces.',
          bins: [
            { key: 'epi', label: 'Deduction', hint: 'about what the evidence makes true' },
            { key: 'deo', label: 'Requirement', hint: 'about what the rules make obligatory' }
          ],
          items: [
            { text: 'The alarm panel <em>must</em> have been reset overnight.', bin: 'epi' },
            { text: 'Contractors <em>must</em> sign out at the gatehouse before the end of each shift.', bin: 'deo' },
            { text: 'She <em>can\'t</em> be the duty officer — she is on the rota for Thursday.', bin: 'epi' },
            { text: 'Passengers <em>may not</em> board without a printed boarding card.', bin: 'deo' },
            { text: 'The soil <em>must</em> be more acidic here than in the lower field.', bin: 'epi' },
            { text: 'Every dose <em>is to be</em> recorded in the ward book.', bin: 'deo' }
          ],
          why: 'Each deduction is fixed by something that blocks obligation: a perfect looking back at a finished event, an evidence clause after <em>can\'t</em>, or a subject — soil — that can be told nothing. Each requirement has an agent who can act, a controllable action and a deadline or a rule-giving form: <em>before the end of each shift</em>, the condition <em>without a printed boarding card</em> that only an entitlement can carry, and <em>is to be</em>, which has no epistemic life at all. Note that <em>can\'t</em> and <em>may not</em> are not themselves single-domain — both also prohibit — so it is the surrounding wording, not the modal, that settles each of those two.' },

        { id: 't8l1s3-3', type: 'choose', tag: 'sys-disambig', level: 'C1',
          stem: 'In which of these does an ambiguous <em>must</em> do real damage?',
          options: [
            'A film review: <em>The director must have shot the whole sequence in one take.</em>',
            'A weather column: <em>It must be the driest March in a decade.</em>',
            'A clinical protocol: <em>The line must be flushed with saline.</em>',
            'A travel piece: <em>You must try the fish at the market by the pier.</em>'
          ],
          answer: 2,
          why: 'Only the protocol asks a reader to act, and the sentence is exactly the configuration that invites both readings — a passive with an inanimate subject, no named agent and no deadline to settle it. A nurse who reads it as a requirement flushes the line; one who reads it as an inference assumes somebody already has. Options 1 and 2 are fixed as deductions by a perfect and by a state, and nothing turns on them in any case. Option 4 is the near miss: it is a rule in form and it does address the reader, but it is unenforceable advice, and no reader has ever mistaken a food recommendation for a report on their eating habits.' },

        { id: 't8l1s3-4', type: 'spot', tag: 'sys-disambig', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The new code of practice states', 'that staff are presumably required to log', 'every visit to a client\'s home', 'within twenty-four hours.'],
          answer: 1,
          fix: 'that staff are required to log',
          why: '<em>Presumably</em> is an epistemic hedge and <em>are required to</em> is a deontic form, so welding them together produces a code that guesses at its own rules — and a guess creates no obligation. <em>Are required to</em> already states the duty and needs no help. If the writer really means that this is what normally happens rather than what is demanded, the deontic frame has to go too: <em>staff normally log every visit</em>. The other three parts are sound — the reporting frame, the object and the time limit all belong to the requirement.' },

        { id: 't8l1s3-5', type: 'choose', tag: 'sys-disambig', level: 'C1',
          stem: 'A research paper reads: <em>Trials of this kind must be pre-registered.</em> The author is describing what researchers in the field already do, not laying down a rule. Which revision says that?',
          options: [
            'Trials of this kind are now routinely pre-registered.',
            'Trials of this kind are required to be pre-registered.',
            'Trials of this kind shall be pre-registered.',
            'Trials of this kind must have been pre-registered.'
          ],
          answer: 0,
          why: 'The author is describing what the field does, which is a claim about practice, so the repair has to leave the deontic domain altogether — <em>routinely</em> reports a regularity and imposes nothing. Options 2 and 3 are both single-domain deontic forms, so they remove the ambiguity in precisely the wrong direction, and <em>shall</em> adds a drafting register that a research paper has no use for. Option 4 shifts to a deduction about particular past trials, which is a third meaning again and not what the author said.' }
      ]
    }
  ],

  check: {
    id: 't8l1ck', name: 'Stage Check · One modal, two readings',
    items: [
      { id: 't8l1ck-1', type: 'choose', tag: 'sys-clues', level: 'C1',
        stem: 'Which sentence can <strong>only</strong> be read as a deduction?',
        options: [
          'The porters must lock the side gate at seven.',
          'Porters must not leave the side gate unattended.',
          'The side gate must have been locked from the inside.',
          'The side gate must be locked by seven o\'clock each evening.'
        ],
        answer: 2,
        why: 'The perfect closes the event and the adverbial describes how it happened, so there is nothing left for a requirement to attach to. Option 1 has an agentive subject and a rule-giving shape. Option 2 is <em>must not</em>, which is deontic only — the epistemic system denies a deduction with <em>can\'t</em>, never with <em>mustn\'t</em>. Option 4 is the near miss: the same gate and the same passive, but without the perfect, and its deadline is the signature of an obligation.' },

      { id: 't8l1ck-2', type: 'cloze', tag: 'sys-ambig', level: 'C1',
        passage: 'The council has not published the consultation results, which were promised in March. Officers say the analysis ___(1)___ still be under way, though the contractor was paid in full in February.\n\nUnder the council\'s own publication scheme, findings of this kind ___(2)___ be released within eight weeks of the closing date. That deadline passed in April.',
        blank: '(2)',
        stem: 'Choose the best option for blank (2).',
        options: ['might', 'must', 'may well', 'can'],
        answer: 1,
        why: 'The clause sits inside a reported rule — <em>under the council\'s own publication scheme</em> — and a scheme with a deadline imposes a duty, so the slot needs deontic necessity, which <em>must</em> supplies. <em>Might</em> and <em>may well</em> are weak-middle epistemic forms from Stage 2, and either would turn a published obligation into a guess about what the council might get round to. <em>Can</em> stays in the deontic domain but drops from necessity to permission, which would mean the council was merely allowed to publish and could not have missed anything. Blank (1) is the opposite case: there the evidence clause makes a weak epistemic form exactly right.' },

      { id: 't8l1ck-3', type: 'spot', tag: 'sys-disambig', level: 'C1',
        stem: 'This clause is from a supply contract. One of the four parts is wrong. Find it.',
        words: ['The supplier can\'t have subcontracted', 'any part of the work', 'without the prior written consent', 'of the purchasing authority.'],
        answer: 0,
        fix: 'The supplier shall not subcontract',
        why: '<em>Can\'t have done</em> is epistemic: it is a confident deduction that something did not happen, so the clause states a belief where a contract has to impose a prohibition. Contracts use <em>shall not</em> or <em>may not</em>, which are deontic only, and they use the present, because the clause governs conduct still to come. The other three parts are correct: the object, the consent condition and the naming of the authority are all properly built.' },

      { id: 't8l1ck-4', type: 'judge', tag: 'sys-clues', level: 'C1',
        given: 'The technician must know by now whether the drive can be recovered.',
        stem: 'The speaker is imposing a duty on the technician.',
        answer: 1,
        why: 'False. <em>Know</em> names a mental state the technician does not take up by choice, and <em>by now</em> measures elapsed time rather than setting a deadline — two clues agreeing that this is a deduction from how much time has passed. A duty would need a controllable action and a real deadline, as in <em>must tell us by four</em>. The answer is not <em>Can\'t tell</em>, because nothing in the sentence leaves the second reading open.' },

      { id: 't8l1ck-5', type: 'equiv', tag: 'sys-ambig', level: 'C1',
        given: 'Passengers may use the forward lounge.',
        stem: 'An airline notice carries this sentence. Which sentence says the same thing?',
        options: [
          'Passengers are permitted to use the forward lounge.',
          'Passengers are perhaps using the forward lounge.',
          'Passengers are obliged to use the forward lounge.',
          'Passengers are able to use the forward lounge.'
        ],
        answer: 0,
        why: 'In a notice, <em>may</em> grants permission: deontic possibility. Option 2 takes the epistemic reading, and an airline does not post estimates of where its passengers are. Option 3 is the near miss: it stays with rules but upgrades possibility to necessity, which would put anyone sitting elsewhere in breach. Option 4 is the dynamic reading from Stage 4 — the lounge is usable — which can be perfectly true while access is still restricted to one cabin.' },

      { id: 't8l1ck-6', type: 'choose', tag: 'sys-disambig', level: 'C1',
        stem: 'An engineer wants to make it clear that she is working something out, not giving an instruction. Which version does that?',
        options: [
          'The generator must run on the reserve tank.',
          'The generator is to run on the reserve tank.',
          'The generator is required to run on the reserve tank.',
          'The generator presumably runs on the reserve tank.'
        ],
        answer: 3,
        why: '<em>Presumably</em> is an evidential adverb with no life in the deontic domain, so the sentence can now only be an inference. Option 1 is the near miss: <em>must</em> can carry a deduction, but it can equally be a maintenance instruction, so it leaves the reader exactly where the engineer did not want them. Options 2 and 3 are both single-domain deontic repairs: they remove the ambiguity, but in the other direction, and a reader would now take them as orders. All four keep the same subject and the same verb, so the only thing that changes is the word that frames it.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T8.levels.push({
  id: 't8l2', n: 2, name: 'Modality under complex syntax', cefr: 'C1+',
  blurb: 'Five slots in one verb phrase, a whole statement pushed a step back in time, and an if that has vanished into an inversion.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't8l2s1', name: 'The full chain and modal passives', cefr: 'C1+',
      theory: {
        key: 'The verb phrase runs MODAL, <em>have</em>, <em>be</em> (progressive), <em>be</em> (passive), main verb — in that order and no other, because each element fixes the form of the one after it.',
        body: [
          'Stage 1 taught the slot chain. This module takes it to its limit and asks you to read it at speed. Five slots, one order: <em>might · have · been · being · examined</em>. Only the modal slot has to be filled; the rest are optional. What is not optional is the sequence, and the reason it cannot be rearranged is mechanical rather than conventional.',
          '<strong>Each element selects the form of the next.</strong> A modal selects a bare infinitive. <em>Have</em> selects a past participle. Progressive <em>be</em> selects an <em>-ing</em> form. Passive <em>be</em> selects a past participle. The main verb comes last because it is the only element nothing selects. Trace the string and every form in it is predicted: <em>might</em> demands the bare <em>have</em>; <em>have</em> demands the participle of progressive <em>be</em>, which is <em>been</em>; progressive <em>be</em> demands the <em>-ing</em> of passive <em>be</em>, which is <em>being</em>; passive <em>be</em> demands <em>examined</em>. Move any two of them and three forms break at once, which is why a wrong chain looks so badly wrong.',
          'The meanings stack outward from the verb. <em>Examined</em> is the event; passive <em>be</em> says the subject undergoes it rather than performs it; progressive <em>be</em> says it is mid-course; <em>have</em> places the whole thing before a reference point; and the modal frames the lot. Reading a long chain is therefore a matter of starting at the right-hand end and working back, not of recognising a memorised shape.',
          'Almost every real phrase uses two or three slots, and those are the ones worth producing: <em>must be signed</em> (modal plus passive), <em>should have been reported</em> (modal plus perfect plus passive), <em>must have been waiting</em> (modal plus perfect plus progressive), <em>may have to be replaced</em> (modal plus the <em>have to</em> repair plus passive). The five-slot form is the <strong>outer limit of the system, not a model to copy</strong>: you will meet it far more often in a grammar book than in prose, and a writer who produces one has usually written a sentence that should be split. Learn to parse it; do not reach for it. One warning carries over from Level 1: the modal passive names a duty without naming who is to perform it, which is convenient for a regulation and is sometimes exactly why the regulation is unclear.'
        ],
        simple: [
          'The order is always modal, then <em>have</em>, then <em>be</em> for the progressive, then <em>be</em> for the passive, then the verb. You can leave slots out, but you can never swap them.',
          'Each word decides the shape of the next one. That is why <em>have</em> is followed by <em>been</em> and <em>been</em> is followed by <em>being</em>.',
          'To read a long one, start at the last word and work backwards: what happened, who it happened to, whether it was finished, and how sure the writer is.'
        ],
        examples: [
          { s: 'The samples <b>might have been being examined</b> when the power failed.', g: 'all five slots in the only order the grammar allows; the outer limit, shown once, not a sentence to imitate.' },
          { s: 'Every amendment <b>must be signed</b> by both parties.', g: 'modal plus passive be: two slots, and the agent is named.' },
          { s: 'The leak <b>should have been reported</b> within an hour.', g: 'modal plus perfect plus passive: three slots, and a criticism.' },
          { s: '<s>The samples might be have been examined.</s>', g: 'have cannot follow be; reordering the chain breaks every form in the string.' }
        ]
      },
      items: [
        { id: 't8l2s1-1', type: 'choose', tag: 'sys-chain', level: 'C1+',
          stem: 'Only one of these is grammatical. Which one completes the sentence? <em>Nobody can be sure, but when the power failed the samples ______.</em>',
          options: [
            'might have being been examined',
            'might be having been examined',
            'might have been being examined',
            'might been have being examined'
          ],
          answer: 2,
          why: 'A five-slot chain is rare in real prose, but this is the only order the grammar allows. Trace the selections: <em>might</em> takes the bare <em>have</em>, <em>have</em> takes the participle <em>been</em>, progressive <em>be</em> takes the <em>-ing</em> form <em>being</em>, and passive <em>be</em> takes <em>examined</em>. Option 1 swaps the two forms of <em>be</em>, so the perfect is followed by an <em>-ing</em> where it demands a participle. Option 2 puts the progressive in front of the perfect, reversing two slots. Option 4 puts a participle straight after the modal, which can only take a bare infinitive.' },

        { id: 't8l2s1-2', type: 'build', tag: 'sys-chain', level: 'C1+',
          stem: 'Nobody reported the incident at the time. Put the words in order to criticise that.',
          tiles: ['the', 'incident', 'should', 'have', 'been', 'reported', 'immediately'],
          solution: 'the incident should have been reported immediately',
          alt: ['the incident should have been immediately reported', 'the incident should immediately have been reported'],
          why: 'Three slots: <em>should</em> frames the event as what was required, <em>have</em> places it before now, and <em>been reported</em> makes the incident the thing acted on rather than the actor. <em>Should be reported</em> would lose the past and with it the criticism, which is the whole point of the sentence (Stage 6). <em>Should have reported</em> drops the passive and makes the incident the reporter.' },

        { id: 't8l2s1-3', type: 'choose', tag: 'sys-chain', level: 'C1+',
          stem: 'A maintenance note reads: <em>The seals on the older pumps may have to be replaced before the winter.</em> What is the note actually saying?',
          options: [
            'That the seals have already been replaced, and that the writer is not certain of it.',
            'That the writer is under an obligation to replace the seals before the winter.',
            'That the seals may themselves replace something before the winter.',
            'That replacing the seals may turn out to be necessary before the winter.'
          ],
          answer: 3,
          why: 'Work back from the verb: <em>replaced</em> is the event, passive <em>be</em> makes the seals the thing acted on, <em>have to</em> supplies the necessity — a modal cannot follow a modal, so the repair kit lends its infinitive (Stage 1) — and <em>may</em> frames that necessity as merely possible, which is the weak epistemic rung from Stage 2. Option 1 is the near miss: it would be right for <em>may have been replaced</em>, but the <em>to</em> in front of <em>be</em> shows that this <em>have</em> is the semi-modal, not the perfect. Option 2 puts the obligation on the writer, but the passive leaves the agent unnamed and the necessity sits on the replacement, not on any person. Option 3 ignores the passive and hands the seals the agent role.' },

        { id: 't8l2s1-4', type: 'sort', tag: 'sys-chain', level: 'C1+',
          stem: 'Sort each verb phrase by whether the chain is correctly built.',
          bins: [
            { key: 'ok', label: 'Correctly built', hint: 'the slots are in the fixed order' },
            { key: 'bad', label: 'Chain broken', hint: 'a slot is out of place or in the wrong form' }
          ],
          items: [
            { text: 'The site <em>may have been closed</em> for weeks.', bin: 'ok' },
            { text: 'The ballots <em>must being counted</em> at this moment.', bin: 'bad' },
            { text: 'The bridge <em>could be being resurfaced</em> this week.', bin: 'ok' },
            { text: 'The files <em>should have be archived</em> last term.', bin: 'bad' },
            { text: 'The order <em>will have been dispatched</em> by Friday.', bin: 'ok' },
            { text: 'The pump <em>might been have serviced</em> in March.', bin: 'bad' }
          ],
          why: 'The three correct phrases each run modal, then <em>have</em> if the perfect is present, then <em>be</em>, then the participle. <em>Must being counted</em> omits the bare <em>be</em> that the modal selects. <em>Should have be archived</em> puts a bare infinitive where <em>have</em> demands a participle. <em>Might been have serviced</em> reverses the modal\'s complement and the perfect, so the modal is followed by a participle and <em>have</em> by another one.' },

        { id: 't8l2s1-5', type: 'choose', tag: 'sys-chain', level: 'C1+',
          stem: 'A construction contract reads: <em>The contractor shall have completed the works by 31 March.</em> What does <em>have completed</em> add here?',
          options: [
            'It limits the clause to works that were finished before the contract was signed.',
            'It sets a deadline: the works must be finished by that date, not merely under way.',
            'It turns the clause into a deduction that the works are already finished.',
            'It is forced, because <em>shall</em> has no simple present form in legal drafting.'
          ],
          answer: 1,
          why: 'A perfect after a modal places the event before a reference point, and here that point is 31 March; the duty is therefore to have finished by then rather than to be working then, which is why a contract distinguishes <em>shall have completed</em> from <em>shall be working</em>. Option 1 reads the perfect as plain past time reference, but the date named is in the future and a contract speaks forward. Option 3 is the near miss, and the Level 1 confusion: after <em>must</em> a perfect would indeed signal a deduction, but contractual <em>shall</em> is deontic only, so no deduction is available whatever follows it. Option 4 invents a gap — <em>shall complete the works by 31 March</em> is equally good drafting for a duty of a slightly different shape.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't8l2s2', name: 'Reported speech and backshift', cefr: 'C1+',
      theory: {
        key: 'Backshift is Stage 5\'s distance applied to time: a past reporting verb <em>may</em> push the report one step back, it does so only when the situation has moved on, and a modal that already carries the remote morphology has nowhere further to go.',
        body: [
          'Four modals have a step available: <em>must</em> can become <em>had to</em>, <em>will</em> can become <em>would</em>, <em>can</em> can become <em>could</em>, <em>may</em> can become <em>might</em>. Three of those are ordinary remote forms. <em>Must</em> is the interesting one: it has no past form at all, because modals have no non-finite or tensed forms (Stage 1), so the repair kit supplies <em>had to</em> from outside the class.',
          'Six do not move: <em>would</em>, <em>could</em>, <em>might</em>, <em>should</em>, <em>ought to</em> and <em>had better</em>. The reason is the mechanism, not a list. English has <strong>one step of remoteness</strong> (Stage 5) and these forms have already taken it, so there is nothing further back for them to move into. <em>"I could help," she said</em> is reported as <em>She said she could help</em>, and the sentence is identical. A student who hunts for a more remote form of <em>could</em> is looking for something the language does not contain.',
          'Epistemic <em>must</em> is the exception that shows the rule is about meaning as well as form. <em>"He must be lying," she said</em> reports as <em>She said he must be lying</em>, not <em>had to be lying</em> — because <em>had to</em> would describe an obligation to lie, which is a different and rather strange claim. Deontic <em>must</em> backshifts; epistemic <em>must</em> stays, and where past reference is wanted the tense drops into the proposition instead: <em>She said he must have been lying</em> (Stage 6).',
          'Finally, backshift is not a reflex. It is optional whenever the reported content is still true at the moment of reporting, which in academic writing is most of the time: <em>The authors argue that class size may matter</em> keeps the present because the argument has not expired. Backshift aligns the report with the reporting; where nothing needs aligning, nothing moves.'
        ],
        simple: [
          'After a past reporting verb, four modals have a further-back form to move into: <em>must</em> → <em>had to</em>, <em>will</em> → <em>would</em>, <em>can</em> → <em>could</em>, <em>may</em> → <em>might</em>. They move when the situation has moved on; if it still holds, they can stay exactly as they were.',
          'Six do not change at all — <em>would, could, might, should, ought to, had better</em> — because they are already the stepped-back forms.',
          'If <em>must</em> means <strong>I am sure</strong>, leave it alone: <em>She said he must be lying.</em> Only <em>must</em> meaning <strong>has to</strong> becomes <em>had to</em>.'
        ],
        examples: [
          { s: '"You must renew the licence," he told her. → He told her she <b>had to</b> renew the licence.', g: 'deontic must has no past form, so the repair kit supplies one.' },
          { s: '"He must be lying." → She said he <b>must</b> be lying.', g: 'a deduction does not backshift, because had to would report a duty instead.' },
          { s: '"We might appeal," they said. → They said they <b>might</b> appeal.', g: 'might is already remote and has nowhere further to go.' },
          { s: '<s>They said they would could appeal.</s>', g: 'two modals cannot stack; the backshift of can is could, and that is the whole change.' }
        ]
      },
      items: [
        { id: 't8l2s2-1', type: 'choose', tag: 'sys-report', level: 'C1+',
          stem: 'The minister said: <em>"Every operator must hold a licence by the end of the year."</em> Which report is correct?',
          options: [
            'The minister said that every operator had to hold a licence by the end of the year.',
            'The minister said that every operator must held a licence by the end of the year.',
            'The minister said that every operator must have held a licence by the end of the year.',
            'The minister said that every operator would must hold a licence by the end of the year.'
          ],
          answer: 0,
          why: 'A deadline and an agentive subject make this deontic, and deontic <em>must</em> has no past form of its own, so a report that does step back borrows <em>had to</em>. Option 2 tries to inflect the bare infinitive that follows a modal. Option 3 is the near miss: it is well formed, but it reports a deduction that the licence had already been obtained, which is not what the minister announced. Option 4 stacks two modals, which the class forbids absolutely (Stage 1). Note that <em>said that every operator must hold a licence</em> is also good English while the deadline still stands — backshift is available, not compulsory — but it is not among the four offered here.' },

        { id: 't8l2s2-2', type: 'equiv', tag: 'sys-report', level: 'C1+',
          given: 'The surveyor told the owners: "The wall may have moved since the survey."',
          stem: 'Which report says the same thing?',
          options: [
            'The surveyor told the owners that the wall might move since the survey.',
            'The surveyor told the owners that the wall had to move since the survey.',
            'The surveyor told the owners that the wall might have moved since the survey.',
            'The surveyor told the owners that the wall was allowed to move since the survey.'
          ],
          answer: 2,
          why: 'Epistemic <em>may</em> steps back to <em>might</em>, and the perfect stays exactly where it was, because the past reference belongs to the proposition and not to the modal (Stage 6). Option 1 is the near miss: it backshifts the modal correctly but drops the perfect, and so loses the past event that <em>since the survey</em> requires. Option 2 converts a weak possibility into a necessity and moves it into the deontic domain at the same time. Option 4 takes the permission reading of <em>may</em>, and nothing can grant a wall leave to move. Keeping <em>may</em> unchanged would also report the surveyor accurately, since the wall\'s movement is still an open question; <em>might</em> is simply the stepped-back form, and it is the only option here that preserves both the strength and the past event.' },

        { id: 't8l2s2-3', type: 'choose', tag: 'sys-report', level: 'C1+',
          stem: 'When we report what someone said with a past verb such as <em>said</em>, a modal can sometimes step one form further back. Which of these four <strong>has a further-back form to step into</strong>?',
          options: ['<em>ought to</em>', '<em>might</em>', '<em>had better</em>', '<em>can</em>'],
          answer: 3,
          why: '<em>Can</em> has a remote counterpart, <em>could</em>, so a report that steps back has somewhere to put it. <em>Ought to</em> and <em>might</em> already carry the remote morphology of Stage 5 and English offers only one step of it, so a report leaves them exactly as they are. <em>Had better</em> is the trap: the <em>had</em> looks like a past tense but the phrase is frozen, refers to the present, and has no further form — <em>had better</em> in a report is still <em>had better</em>. The question is about what forms exist, not about what a reporter must do: even <em>can</em> may be left alone where the ability still holds.' },

        { id: 't8l2s2-4', type: 'sort', tag: 'sys-report', level: 'C1+',
          stem: 'A report can step a modal one form further back, but only where a further-back form exists. Sort each quotation by whether its modal has one.',
          bins: [
            { key: 'shift', label: 'Can step back', hint: 'a further-back form exists' },
            { key: 'stay', label: 'Cannot step back', hint: 'already remote, so there is nothing to move into' }
          ],
          items: [
            { text: 'They said: <em>"We will appeal the decision."</em>', bin: 'shift' },
            { text: 'They said: <em>"We would appeal if we could afford it."</em>', bin: 'stay' },
            { text: 'She said: <em>"You may borrow the key overnight."</em>', bin: 'shift' },
            { text: 'She said: <em>"You ought to renew it before August."</em>', bin: 'stay' },
            { text: 'He said: <em>"I can drive the van myself."</em>', bin: 'shift' },
            { text: 'He said: <em>"You had better keep the receipt."</em>', bin: 'stay' }
          ],
          why: '<em>Will</em>, <em>may</em> and <em>can</em> each have a remote partner — <em>would</em>, <em>might</em>, <em>could</em> — so each has somewhere to go if the report steps back. The other three are already at the far end of the one step English provides: <em>would</em> and <em>ought to</em> are remote forms, and <em>had better</em> is frozen and present-referring despite the <em>had</em>. Searching for a past of <em>would</em> or a past of <em>ought</em> is searching for a form the language has never had. Sorting here is about what the form allows: whether a writer actually takes the step depends on whether the situation has moved on.' },

        { id: 't8l2s2-5', type: 'choose', tag: 'sys-report', level: 'C1+',
          stem: 'A police officer said: <em>"Whoever moved the barrier must have had a key."</em> Which report is right?',
          options: [
            'The officer said that whoever moved the barrier must have had a key.',
            'The officer said that whoever moved the barrier was required to have a key.',
            'The officer said that whoever moved the barrier can\'t have had a key.',
            'The officer said that whoever moved the barrier might have had a key.'
          ],
          answer: 0,
          why: 'The officer is deducing from the state of the barrier, and epistemic <em>must</em> does not step back at all; the past reference is already carried by <em>have had</em> inside the proposition, so nothing needs to move. Option 2 uses a deontic-only form and so converts the deduction into a rule — that whoever moved it was obliged to be carrying a key, which says nothing about whether they were. Option 3 keeps the domain but reverses the conclusion, denying what the officer asserted. Option 4 is the near miss: it keeps the domain and the direction but drops from near-certainty to bare possibility, which misreports how confident the officer was.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't8l2s3', name: 'Conditionals and inversion', cefr: 'C1+',
      theory: {
        key: 'Only three verbs can replace <em>if</em> by inverting — <em>were</em>, <em>had</em> and <em>should</em> — and the construction carries a formal register because it is the last working trace of an older grammar.',
        body: [
          'Three patterns, and there are no others. <em>Should you require further assistance, please contact the registry</em> — an open but remote possibility, equivalent to <em>if you should require</em>. <em>Were the scheme to fail, the loss would fall on the operator</em> — the unreal present, and the same remoteness Stage 5 described, equivalent to <em>if the scheme were to fail</em>. <em>Had the council acted sooner, the damage would have been contained</em> — the unreal past, equivalent to <em>if the council had acted</em>.',
          'The movement itself is subject-operator inversion: the same thing that makes a question, and possible for the same reason (Stage 1\'s NICE properties — these verbs invert without <em>do</em>). Older English marked conditional clauses with subjunctive morphology and this word order; modern English has kept the word order in three fossils. Because only <em>were</em>, <em>had</em> and <em>should</em> survive in it, nothing else can be inverted: there is no <em>Rained it tomorrow</em>, and <em>Did the council act sooner</em> is a question and cannot be read as a condition at all.',
          'The formality comes from two directions at once. The construction is archaic, so it is <strong>marked</strong> — a reader notices it. And it is shorter than the <em>if</em> version, which suits the compression of contracts, formal correspondence and academic prose. <em>Should you require</em> belongs in a covering letter; <em>if you need</em> belongs in a message to a friend. Using the inverted form casually sounds pompous, and failing to use it in a legal document sounds amateur, so this is a register choice before it is a grammar one.',
          'Two mechanical traps. The negative <strong>cannot be contracted</strong>: <em>Had the council not acted…</em> is right, and <em>Hadn\'t the council acted…</em> can only be a question. And the <em>should</em> of this construction is neither ordinary advice nor ordinary expectation — it means <em>if it should happen that</em>, a remote but live possibility, which is why it pairs naturally with an imperative or a <em>will</em>-clause rather than with <em>would</em>.'
        ],
        simple: [
          'You can drop <em>if</em> and put the verb first, but only with three words: <em>were</em>, <em>had</em> and <em>should</em>.',
          '<em>Should you need help, call the office.</em> · <em>Were the plan to fail, we would lose the deposit.</em> · <em>Had they acted sooner, nothing would have been lost.</em>',
          'It sounds formal, so use it in letters, reports and contracts. And never contract the <em>not</em>: write <em>Had they not acted</em>, not <em>Hadn\'t they acted</em>.'
        ],
        examples: [
          { s: '<b>Should you require</b> further assistance, please contact the registry.', g: 'if by any chance you need it: a remote but open possibility, in a formal register.' },
          { s: '<b>Were the scheme to fail</b>, the loss would fall on the operator.', g: 'the unreal present, compressed; the same as if the scheme were to fail.' },
          { s: '<b>Had the council acted</b> sooner, the damage would have been contained.', g: 'the unreal past, with had inverted and if deleted.' },
          { s: '<s>Hadn\'t the council acted sooner, the damage would have been contained.</s>', g: 'the negative cannot be contracted here; write had the council not acted.' }
        ]
      },
      items: [
        { id: 't8l2s3-1', type: 'choose', tag: 'sys-invert', level: 'C1+',
          stem: '______ the tribunal find in the claimant\'s favour, the costs will be met by the authority.',
          options: ['Were', 'Should', 'Had', 'Would'],
          answer: 1,
          why: 'Two signs point to <em>should</em>: the bare infinitive <em>find</em>, which only a modal can be followed by, and the <em>will</em>-clause after the comma, which is the pattern for a possibility that is remote but still open. <em>Were</em> is the near miss: it can head an inverted condition, but it would need <em>to find</em> and a <em>would</em>-clause (<em>Were the tribunal to find…, the costs would be met</em>). <em>Had</em> would need the participle <em>found</em> and a <em>would have</em>-clause. <em>Would</em> cannot head an inverted conditional at all.' },

        { id: 't8l2s3-2', type: 'order', tag: 'sys-invert', level: 'C1+',
          stem: 'Put the four sentences in the order that makes a coherent paragraph from a formal letter.',
          items: [
            'Your application for the research allowance has been received and will be considered at the June meeting.',
            'Should the committee require further documentation, the registry will write to you directly.',
            'Were that to happen, you would have fourteen days in which to respond.',
            'Finally, had you submitted the application before the April deadline, a decision would already have been issued.'
          ],
          why: 'The paragraph moves from what has actually happened, to an open future possibility marked by <em>should</em>, to the consequence of that possibility, and last of all to a closed past alternative marked by <em>had</em>. Three signals fix the order and leave no second reading: the first sentence is the only one with nothing to refer back to, <em>that</em> in the <em>were</em>-sentence can only point at the request for documents, and <em>Finally</em> can only introduce the closing sentence. A student who puts the <em>were</em>-sentence first leaves <em>that</em> with nothing to point at.' },

        { id: 't8l2s3-3', type: 'choose', tag: 'sys-invert', level: 'C1+',
          stem: 'Why does <em>Were the pilot scheme to be extended, the unit cost would fall sharply</em> sound more formal than <em>If the pilot scheme were extended, the unit cost would fall sharply</em>?',
          options: [
            'Because <em>were to be extended</em> is more certain than <em>were extended</em>.',
            'Because inversion is only possible when the condition is passive.',
            'Because it is an old word order, and dropping <em>if</em> makes the clause more compact.',
            'Because the inverted form refers to the future, while the <em>if</em> form refers to the present.'
          ],
          answer: 2,
          why: 'The inverted form is the last trace of an older grammar, so it is noticeable, and dropping <em>if</em> compresses the clause, so it is efficient; formal written English values both. Option 1 is the near miss, since <em>were to</em> really does change something — but it marks the possibility as more remote, not more certain, and in any case the two sentences make the same claim. Option 2 is refuted by <em>Were the minister to resign</em>, which contains no passive at all. Option 4 is false — both are unreal-present conditionals and both look forward from now.' },

        { id: 't8l2s3-4', type: 'spot', tag: 'sys-invert', level: 'C1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Hadn\'t the surveyor noticed the crack', 'during the first inspection,', 'the whole east wing', 'would have been condemned.'],
          answer: 0,
          fix: 'Had the surveyor not noticed the crack',
          why: 'An inverted conditional cannot take a contracted negative: <em>hadn\'t</em> at the front of a clause is read as a question and the conditional reading is lost. The <em>not</em> has to follow the subject. The other three parts are correct: the time adverbial is well placed, and <em>would have been condemned</em> is the properly formed consequent of an unreal past conditional — modal, perfect, passive, in that order.' },

        { id: 't8l2s3-5', type: 'equiv', tag: 'sys-invert', level: 'C1+',
          given: 'If the ministry should decide to review the licence, the operator will be given thirty days\' notice.',
          stem: 'Which sentence says the same thing in a more formal register?',
          options: [
            'Were the ministry decide to review the licence, the operator will be given thirty days\' notice.',
            'Should the ministry to decide to review the licence, the operator will be given thirty days\' notice.',
            'Did the ministry decide to review the licence, the operator will be given thirty days\' notice.',
            'Should the ministry decide to review the licence, the operator will be given thirty days\' notice.'
          ],
          answer: 3,
          why: '<em>Should</em> moves in front of the subject and <em>if</em> is deleted; nothing else changes, and the <em>will</em>-clause is left alone because the possibility is still open. Option 1 mixes the two patterns — inverted <em>were</em> needs either a past form or <em>to</em> plus infinitive, as in <em>were the ministry to decide</em>, never a bare verb. Option 2 is the near miss: the right verb in the right place, but with <em>to</em> after a modal. Option 3 inverts <em>did</em>, which English does not permit in a conditional; that string can only be a question.' }
      ]
    }
  ],

  check: {
    id: 't8l2ck', name: 'Stage Check · Modality under complex syntax',
    items: [
      { id: 't8l2ck-1', type: 'choose', tag: 'sys-chain', level: 'C1+',
        stem: 'Which sentence is grammatical?',
        options: [
          'The accounts must be being audited at this moment.',
          'The accounts must being audited at this moment.',
          'The accounts must be been audited at this moment.',
          'The accounts must been being audited at this moment.'
        ],
        answer: 0,
        why: 'The modal selects the bare <em>be</em> of the progressive, the progressive selects the <em>-ing</em> form of passive <em>be</em>, and passive <em>be</em> selects the participle. Option 2 omits the bare <em>be</em> the modal demands. Option 3 is the near miss: it starts correctly, but uses <em>been</em> where the progressive needs <em>being</em>, which breaks the form and loses the in-progress meaning at the same time. Option 4 puts a participle straight after the modal, which can only take a bare infinitive.' },

      { id: 't8l2ck-2', type: 'spot', tag: 'sys-chain', level: 'C1+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['By the time the tribunal sits,', 'the disputed invoices will have be examined', 'by an independent accountant', 'appointed by both parties.'],
        answer: 1,
        fix: 'the disputed invoices will have been examined',
        why: '<em>Have</em> selects a past participle, and the past participle of <em>be</em> is <em>been</em>, never the bare form. The chain here is modal plus perfect plus passive: <em>will have been examined</em>. The other three parts are sound — the time clause, the named agent and the reduced relative <em>appointed by both parties</em> are all correctly built.' },

      { id: 't8l2ck-3', type: 'gap', tag: 'sys-report', level: 'C1+',
        blank: '(1)',
        lines: [
          { who: 'Editor', text: 'The spokesman told us back in January that every application ___(1)___ be lodged before the end of that month, so anyone who waited has missed it.' },
          { who: 'Reporter', text: 'He also said the committee ___(2)___ well reject half of the ones that did arrive, which is not the same thing at all.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['must have been', 'would must', 'had to', 'musts'],
        answer: 2,
        why: 'The original was a deontic <em>must</em>, which has no past form of its own, and here the situation has moved on — the January deadline has passed and the report says so — which is exactly when the step back is called for, so the gap takes <em>had to</em>. Where a deadline still stood, leaving <em>must</em> in place would be just as good; backshift is available, not compulsory. <em>Must have been</em> is well formed but turns a deadline into a deduction that the applications had already been lodged. <em>Would must</em> stacks two modals. <em>Musts</em> inflects a modal for the third person, which the class never allows.' },

      { id: 't8l2ck-4', type: 'build', tag: 'sys-report', level: 'C1+',
        stem: 'Put the words in order to make the fully backshifted report of <em>"We may have underestimated the cost," she admitted.</em>',
        tiles: ['she', 'admitted', 'they', 'might', 'have', 'underestimated', 'the', 'cost'],
        solution: 'she admitted they might have underestimated the cost',
        alt: [],
        why: 'Epistemic <em>may</em> steps back to <em>might</em>, and that is the only change the modal makes; the perfect stays put because the past reference belongs to the proposition, not to the modal. <em>Might had underestimated</em> would try to tense the auxiliary after a modal, and <em>might have had underestimated</em> would stack a second perfect on the first. Leaving <em>may</em> in place is heard and is not wrong in real prose, but it is not the fully backshifted report the question asks for.' },

      { id: 't8l2ck-5', type: 'choose', tag: 'sys-invert', level: 'C1+',
        stem: 'Which sentence is correctly formed?',
        options: [
          'Was the contract to be terminated early, the deposit would be forfeited.',
          'Were the contract to be terminated early, the deposit would be forfeited.',
          'Were the contract terminated early, the deposit will be forfeited.',
          'If were the contract to be terminated early, the deposit would be forfeited.'
        ],
        answer: 1,
        why: 'Inverted <em>were</em> takes <em>to</em> plus infinitive, and the consequent takes <em>would</em>, so both halves agree about how remote the situation is. Option 1 uses <em>was</em>, which this construction never admits — only <em>were</em> inverts. Option 3 is the near miss: its condition is well formed, but it is attached to a <em>will</em>-clause, so the two halves disagree about whether the situation is live or hypothetical. Option 4 keeps <em>if</em> as well as inverting; they are alternatives and never both.' },

      { id: 't8l2ck-6', type: 'cloze', tag: 'sys-invert', level: 'C1+',
        passage: 'The authority accepts that the notice was served late. ___(1)___ it been served within the statutory period, the operator would have had time to object.\n\n___(2)___ the tribunal find that the delay was material, the notice will be quashed and the authority will bear the costs. Counsel for the operator has indicated that the point will be pressed.',
        blank: '(2)',
        stem: 'Choose the best option for blank (2).',
        options: ['Would', 'Should', 'Did', 'Were'],
        answer: 1,
        why: 'The consequent is a <em>will</em>-clause, so the condition is open rather than unreal, and <em>should</em> is the inverted form for an open but remote possibility — if by any chance the tribunal so finds. <em>Were</em> would need <em>to find</em> and would pair with <em>would</em>. <em>Did</em> cannot head a conditional in English at all. <em>Would</em> is not one of the three verbs that can invert. Blank (1), by contrast, is the unreal past and takes <em>Had</em>.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T8.levels.push({
  id: 't8l3', n: 3, name: 'The periphery and the page', cefr: 'C1+',
  blurb: 'A modal that is mistaken for a tense, four verbs that are half in and half out of the class, and a page of prose read for stance.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't8l3s1', name: 'Will as a modal, not a tense', cefr: 'C1+',
      theory: {
        key: 'English has no future tense: <em>will</em> is a modal of prediction, and futurity is only its commonest reading, not its meaning.',
        body: [
          'The evidence is grammatical before it is semantic. <em>Will</em> sits in the modal slot, takes a bare infinitive, takes no third-person <em>-s</em>, negates and inverts without <em>do</em>, and cannot stack — there is no <em>will can</em>, only <em>will be able to</em> (Stage 1). A tense is an inflection on a verb; English has two of those, present and past. <em>Will</em> is not an inflection. It is a word, and it is one of the core modals.',
          'What it expresses is <strong>prediction</strong>, which is a stance and not a time. A prediction is a claim made on the speaker\'s judgement rather than on direct observation, and it can be made about any moment at all. Four readings follow. <em>That\'ll be the courier</em> is a deduction about the present, which is why Stage 2 placed <em>will</em> on the epistemic ladder just below <em>must</em>. <em>Oil will float on water</em> is generic: a prediction about every instance whatever. <em>She will keep interrupting</em> reports characteristic behaviour, and with the stress on <em>will</em> it becomes a complaint (Stage 4). Only the fourth, <em>The results will be published in June</em>, is about the future.',
          'Seeing this dissolves a rule that students usually meet as an arbitrary prohibition: <em>if it will rain tomorrow</em> is bad English. The reason is that <em>if</em> already frames the clause as a possibility, so a second operator doing the same work has nothing to add and is blocked. Where <em>will</em> does survive after <em>if</em>, it is doing one of its other jobs: <em>If you\'ll wait here a moment</em> is willingness, and <em>If it will make things easier, I\'ll send a copy</em> predicts a result rather than supposing a condition.',
          'And it changes how you read. In a technical report, <em>the model will overestimate demand at low prices</em> is not a forecast about next quarter; it is a statement of what the model reliably does, and a reader who hears a future tense has lost the claim. At C1 that misreading costs marks in exactly the registers these students are heading for.'
        ],
        simple: [
          '<em>Will</em> is a modal, not a future tense. It behaves like <em>can</em> and <em>must</em>: no <em>-s</em>, no <em>to</em>, and you cannot put two of them together.',
          'It means <strong>I predict</strong>. That can be about now (<em>That will be the postman</em>), about always (<em>Water will boil at 100 degrees</em>), about somebody\'s habits (<em>He will leave his boots there</em>), or about the future.',
          'That is why <em>if it will rain</em> is wrong. The <em>if</em> is already doing the job, so <em>will</em> has nothing left to do.'
        ],
        examples: [
          { s: 'That <b>will</b> be the courier now — nobody else rings twice.', g: 'a deduction about the present, with the evidence in the second clause.' },
          { s: 'Sea water <b>will</b> freeze at about minus two degrees.', g: 'generic: a prediction that holds of every instance.' },
          { s: 'He <b>will</b> leave his boots in the hallway.', g: 'characteristic behaviour, and with stress on will it becomes a complaint.' },
          { s: '<s>If the results will be published in June, we can plan the launch.</s>', g: 'the if already supplies the modality; write if the results are published in June.' }
        ]
      },
      items: [
        { id: 't8l3s1-1', type: 'choose', tag: 'sys-will', level: 'C1+',
          stem: 'Which fact shows most directly that <em>will</em> is a modal rather than a future tense?',
          options: [
            'It is very often shortened to <em>\'ll</em> in speech.',
            'It is used in polite requests such as <em>Will you hold the door?</em>',
            'It refers to events that have not yet happened.',
            'It cannot be combined with another modal: <s>will can</s>.'
          ],
          answer: 3,
          why: 'There is exactly one modal slot in the verb phrase, and <em>will</em> competes for it; a tense would not, which is why <em>will have</em> and <em>will be</em> are fine while <em>will can</em> has to be repaired as <em>will be able to</em> (Stage 1). Option 1 is a fact about pronunciation, and <em>is</em> and <em>has</em> contract too. Option 2 is the near miss: requests are something modals do, but it names a use, not a grammatical property, and <em>could</em> and <em>would</em> make requests as well. Option 3 states the very assumption under examination, and it is false in three of the four readings.' },

        { id: 't8l3s1-2', type: 'sort', tag: 'sys-will', level: 'C1+',
          stem: 'Sort each sentence by whether its <em>will</em> is actually about the future.',
          bins: [
            { key: 'now', label: 'Not about the future', hint: 'deduction, generic truth or characteristic behaviour' },
            { key: 'fut', label: 'About the future', hint: 'a forecast or a plan' }
          ],
          items: [
            { text: 'That <em>will</em> be the inspector at the gate.', bin: 'now' },
            { text: 'The tender <em>will</em> be advertised in October.', bin: 'fut' },
            { text: 'Copper <em>will</em> conduct heat far better than steel.', bin: 'now' },
            { text: 'He <em>will</em> reply to messages at two in the morning, night after night.', bin: 'now' },
            { text: 'The tunnel <em>will</em> open to traffic next spring.', bin: 'fut' },
            { text: 'Under load, the older cables <em>will</em> sag by several centimetres.', bin: 'now' }
          ],
          why: 'Four of the six have no future reference at all: a deduction about who is at the gate, a generic truth about copper, a complaint about somebody\'s habits, where <em>night after night</em> rules a single coming occasion out, and a conditional generalisation about cables, where <em>under load</em> supplies a condition rather than a time. The two future ones both name a date, which is the surest sign that the prediction is about a particular coming event. A useful check: ask <em>when</em>, and if the only answer is <em>whenever</em> or <em>always</em>, the reading is not future.' },

        { id: 't8l3s1-3', type: 'choose', tag: 'sys-will', level: 'C1+',
          stem: 'A materials report reads: <em>Under sustained load the polymer will creep by up to three per cent.</em> What is the writer claiming?',
          options: [
            'That the material is permitted to creep by that amount.',
            'That this is what the material reliably does whenever the condition holds.',
            'That the material is expected to creep at some point in the future.',
            'That the writer is fairly sure the material has already crept.'
          ],
          answer: 1,
          why: '<em>Under sustained load</em> is a condition, not a time, and a prediction attached to a condition rather than to a moment is the generic reading: it holds of every instance. Option 1 reads <em>will</em> deontically, which it never is — there is no permission sense anywhere in the modal. Option 3 is the near miss: it hears a tense and turns a material property into a forecast, which would be right with a date instead of a condition, but would make the figure useless to an engineer choosing a component. Option 4 would need the perfect, <em>will have crept</em>, and even then the deduction would be about one particular sample rather than about the polymer.' },

        { id: 't8l3s1-4', type: 'judge', tag: 'sys-will', level: 'C1+',
          given: 'If the committee will not release the minutes, we shall have to apply formally.',
          stem: 'Here <em>will</em> marks the committee\'s refusal rather than plain future time.',
          answer: 0,
          why: 'True. Plain futurity is blocked in an <em>if</em>-clause, because <em>if</em> has already framed the clause as a possibility and a second operator doing the same work has nothing to add; a <em>will</em> that survives there must therefore be doing one of its other jobs. With a negative and a human subject that job is willingness, so the clause means <em>if the committee refuses to release the minutes</em> (Stage 4). The answer is not <em>Can\'t tell</em>, because the grammar settles it without any appeal to context: the futurity reading is not available at all, and the repair for that reading would be <em>if the committee does not release</em>.' },

        { id: 't8l3s1-5', type: 'choose', tag: 'sys-will', level: 'C1+',
          stem: 'Which sentence is <strong>not</strong> acceptable English?',
          options: [
            'If you will sign at the bottom, I will witness it.',
            'If it will speed things up, I will send the signed contract by courier.',
            'If the survey will take over an hour, we should book the afternoon.',
            'If the funding is confirmed in June, the launch can go ahead as planned.'
          ],
          answer: 2,
          why: 'In option 3, <em>will</em> is marking nothing but futurity inside a clause that <em>if</em> has already modalised, so the operator is redundant and the string is blocked; the repair is <em>If the survey takes over an hour</em>. Option 1 is willingness — roughly <em>if you would be so good as to sign</em> — and is a standard polite formula. Option 2 is the near miss: the speeding up is a <strong>result of the sending</strong> rather than a supposition about the world, and <em>will</em> is predicting that result, which is real work only it can do; compare the fixed <em>if it will help</em>. Option 4 is the ordinary present-tense conditional and is exactly what option 3 should have been.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't8l3s2', name: 'shall, need, dare, ought: the shrinking edges', cefr: 'C1+',
      theory: {
        key: 'The modal class has a hard core and a soft edge: <em>shall</em>, <em>need</em>, <em>dare</em> and <em>ought to</em> are half in and half out, and each of them has retreated into a narrow band of register.',
        body: [
          '<strong><em>Shall</em></strong> has two surviving jobs. In legal and contractual drafting it expresses obligation — <em>The contractor shall maintain insurance for the duration of the works</em> — where it is close to <em>must</em> but names a duty created by the document itself. In questions with a first-person subject it makes offers and suggestions: <em>Shall I open a window? Shall we begin?</em> Outside those two it has all but vanished, which is why drafting manuals now often recommend replacing legal <em>shall</em> with <em>must</em>: a form that can express duty, entitlement and plain futurity in the same paragraph is doing too many jobs to be safe.',
          '<strong><em>Need</em> and <em>dare</em> are each two verbs</strong>, and the modal versions survive only in <strong>non-assertive</strong> contexts — negatives, questions, and clauses with <em>hardly</em>, <em>only</em> or <em>if</em>. Modal: <em>Need I say more?</em>, <em>He needn\'t wait</em>, <em>He daren\'t ask</em>, <em>I need hardly remind you</em>. Lexical: <em>Do I need to say more?</em>, <em>He doesn\'t need to wait</em>, <em>He doesn\'t dare to ask</em>. The modal takes no <em>-s</em>, no <em>do</em> and a bare infinitive; the lexical verb takes all three. What you must not do is mix them: <em>He doesn\'t need wait</em> and <em>He needs not wait</em> are each half of one pattern and half of the other.',
          '<strong><em>Ought to</em></strong> is the awkward one: a modal that has kept its <em>to</em>. It inverts and negates like a modal, which gives <em>Ought I to go?</em> and <em>oughtn\'t to</em>, and both of those strike most speakers as stiff, so English quietly substitutes <em>Should I go?</em> and <em>shouldn\'t</em>. You are watching a class member lose its paradigm in public.',
          'What this adds up to is that the modal class is <strong>historically shrinking</strong>. <em>Shall</em> has lost most of its ground to <em>will</em>, <em>need</em> and <em>dare</em> have been largely displaced by their lexical twins, and <em>ought to</em> is being absorbed by <em>should</em>. The practical consequence for a C1 learner is asymmetrical: read all of these confidently, because formal and legal prose is full of them, but produce them only where the register genuinely calls for it — which for most writing means contracts and formal correspondence, plus the entirely ordinary <em>Shall we…?</em> of spoken English.'
        ],
        simple: [
          '<em>Shall</em> now lives in two places: contracts (<em>The tenant shall pay…</em>) and offers (<em>Shall I help? Shall we start?</em>).',
          '<em>Need</em> and <em>dare</em> can be modals or ordinary verbs. As modals they only appear in negatives and questions: <em>need not wait</em>, <em>Need I ask?</em>, <em>daren\'t say</em>. As ordinary verbs they take <em>do</em>, <em>-s</em> and <em>to</em>: <em>doesn\'t need to wait</em>.',
          '<em>Ought to</em> keeps its <em>to</em>. Its negative and question forms exist but sound stiff, so most people use <em>should</em> instead.'
        ],
        examples: [
          { s: 'The contractor <b>shall</b> maintain insurance for the duration of the works.', g: 'contractual obligation: the duty is created by the document itself.' },
          { s: '<b>Need I</b> remind the committee of the deadline?', g: 'modal need: no do, no -s, bare infinitive, and only because the clause is a question.' },
          { s: 'He <b>doesn\'t dare to</b> raise it with the director.', g: 'lexical dare: do-support, third-person -s, and to.' },
          { s: '<s>He doesn\'t need wait for the second signature.</s>', g: 'the two patterns are mixed; write does not need to wait, or need not wait.' }
        ]
      },
      items: [
        { id: 't8l3s2-1', type: 'choose', tag: 'sys-periphery', level: 'C1+',
          stem: 'Which sentence uses <em>need</em> as a modal?',
          options: [
            'The committee needs to approve the revised budget.',
            'The committee need not approve the revised budget.',
            'Does the committee need to approve the revised budget?',
            'The committee will need to approve the revised budget.'
          ],
          answer: 1,
          why: 'Three marks of the modal are present at once: no third-person <em>-s</em>, <em>not</em> attached directly with no <em>do</em>, and a bare infinitive after it. Option 1 has the <em>-s</em> and the <em>to</em>, both lexical. Option 3 uses <em>do</em>-support, which no modal ever requires. Option 4 puts <em>need</em> after another modal, and that is only possible because it is the lexical verb there — a modal cannot follow a modal.' },

        { id: 't8l3s2-2', type: 'spot', tag: 'sys-periphery', level: 'C1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The registrar ought to have waited', 'until the board had met,', 'and she needs not have signed', 'the summary sheet in the meantime.'],
          answer: 2,
          fix: 'and she need not have signed',
          why: 'Modal <em>need</em> takes no third-person <em>-s</em>, and the bare infinitive after it confirms that the modal is what was intended; <em>needs</em> is the lexical verb and would require <em>did not need to sign</em>. The meaning matters too: <em>need not have signed</em> says she did sign and it was unnecessary (Stage 6). The other three parts are correct — <em>ought to have waited</em> is the standard form for a past criticism, the past perfect in the time clause is right, and the closing adverbial is properly placed.' },

        { id: 't8l3s2-3', type: 'choose', tag: 'sys-periphery', level: 'C1+',
          stem: 'A drafting manual advises replacing <em>shall</em> with <em>must</em> throughout a contract. What is the argument for that?',
          options: [
            'Because <em>shall</em> is not a modal verb.',
            'Because <em>must</em> expresses a stronger obligation than <em>shall</em>.',
            'Because <em>shall</em> cannot be used with a third-person subject.',
            'Because <em>shall</em> can mark a duty, a right or a plain future, and readers cannot always tell which.'
          ],
          answer: 3,
          why: 'This is Level 1\'s complaint in its most expensive form: a single form with more than one reading, in a genre where the reader has to act, and courts have had to decide whether a particular <em>shall</em> imposed a duty or merely described what would happen. Option 1 is false — <em>shall</em> has the full modal signature. Option 2 is the near miss, since in everyday speech <em>must</em> does sound firmer; but in drafting both impose obligation, and the manual\'s argument is about clarity rather than force. Option 3 inverts the facts, since contractual <em>shall</em> is almost always third person and it is the first-person future <em>shall</em> that has died out.' },

        { id: 't8l3s2-4', type: 'equiv', tag: 'sys-periphery', level: 'C1+',
          given: 'He doesn\'t dare to question the figures in front of the finance committee.',
          stem: 'Which sentence says the same thing using the modal form of <em>dare</em>?',
          options: [
            'He daren\'t question the figures in front of the finance committee.',
            'He dares not to question the figures in front of the finance committee.',
            'He doesn\'t dare question the figures in front of the finance committee.',
            'He needn\'t question the figures in front of the finance committee.'
          ],
          answer: 0,
          why: 'The modal takes <em>not</em> directly, carries no <em>-s</em> and is followed by a bare infinitive, which gives <em>daren\'t question</em>. Option 2 keeps the lexical <em>-s</em> and the <em>to</em> while borrowing modal negation, so it belongs to neither pattern. Option 3 is real and common English, but it is a blend — <em>do</em>-support with a bare infinitive — and it is not the modal form the question asks for. Option 4 changes the meaning entirely: it says there is no need, not that he is afraid.' },

        { id: 't8l3s2-5', type: 'choose', tag: 'sys-periphery', level: 'C1+',
          stem: 'Which sentence is correctly formed?',
          options: [
            'Ought the tribunal consider the delay before it rules on the substance?',
            'Does the tribunal ought to consider the delay before it rules on the substance?',
            'Ought the tribunal to consider the delay before it rules on the substance?',
            'The tribunal oughts to consider the delay before it rules on the substance.'
          ],
          answer: 2,
          why: '<em>Ought</em> inverts on its own like any modal, but it is the one modal that keeps its <em>to</em>, and the <em>to</em> travels with the infinitive: <em>Ought the tribunal to consider…?</em> Option 1 is the near miss: the inversion is right, but it strips the <em>to</em>, which <em>ought</em> never permits. Option 2 adds <em>do</em>-support to a modal. Option 4 inflects a modal for the third person. Note that option 3 is simultaneously correct and so stiff that most writers would reach for <em>Should the tribunal consider…</em> — which is precisely the module\'s point about a class quietly losing its paradigm.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't8l3s3', name: 'Tracking modal stance across a passage', cefr: 'C1+',
      theory: {
        key: 'A writer\'s commitment is not fixed for a whole text: it is reset sentence by sentence, and reading well means following where it rises, where it drops, and whose commitment it is.',
        body: [
          'Stage 7 taught calibration from the writer\'s side. This module is the reader\'s side of the same skill, and it is the one C1 comprehension questions actually test. In any argued text the modality moves: a cautious opening, a firmer middle where the evidence is strongest, a concession granted and then defeated, a guarded conclusion. Following that movement is comprehension; noting the individual modals is not.',
          'Four things to track. First, <strong>the modal and its rung</strong> on the ladder (Stage 2): <em>must</em>, <em>will</em>, <em>should</em>, <em>may</em>, <em>might</em> are not interchangeable and the choice is deliberate. Second, <strong>whose modality it is</strong>: <em>ministers say the scheme will cut waiting times</em> attributes the confidence and does not share it. Third, <strong>hedges and boosters</strong> (Stage 7) — <em>may well</em>, <em>arguably</em>, <em>clearly</em>, <em>undoubtedly</em>. Fourth, and most easily missed, <strong>the bare assertion with no modal at all</strong>, which is the strongest thing a writer can do and therefore the most informative when it appears.',
          'The commonest misreading is to take reported confidence for the writer\'s own. <em>The authors claim that the effect must be causal</em> tells you what the authors think, and the choice of <em>claim</em> rather than <em>show</em> or <em>find</em> quietly tells you that the writer is not joining them. Watch the reporting verb as closely as the modal: <em>insist</em>, <em>maintain</em> and <em>claim</em> distance, while <em>demonstrate</em>, <em>establish</em> and <em>find</em> endorse.',
          'The second commonest is to read a concession as a retreat. <em>Automation may well displace routine roles, but it is unlikely to eliminate the need for human judgement</em> grants a point at a measured strength in order to defeat it, and the writer\'s position lives in the <em>but</em>-clause. A paragraph that ends firmer than it began is usually arguing, not wavering — and a paragraph that ends weaker has either found a limit in the evidence or lost its nerve, which is a distinction worth being able to make.'
        ],
        simple: [
          'Writers change how sure they sound from sentence to sentence. Follow the changes, not just the words.',
          'Ask whose certainty it is. <em>Ministers say the scheme will work</em> reports their confidence, not the writer\'s — and <em>claim</em> or <em>insist</em> usually means the writer disagrees.',
          'A sentence with no modal at all is the writer at full strength. When one appears after a run of hedges, that is the main point.'
        ],
        examples: [
          { s: 'The effect <b>appears to</b> be small but consistent.', g: 'a hedged report: the writer is committed to the pattern, not to its exact size.' },
          { s: 'Ministers <b>insist</b> the scheme will cut waiting times.', g: 'the confidence belongs to the ministers, and insist signals that the writer is not endorsing it.' },
          { s: 'The design <b>cannot</b> support a causal claim.', g: 'an unhedged negative: this is the writer speaking at full strength.' },
          { s: '<s>The study proves that smaller classes must raise attainment.</s>', g: 'two boosters on evidence that will not bear one; the overclaim of Stage 7.' }
        ]
      },
      items: [
        { id: 't8l3s3-1', type: 'read', tag: 'sys-track', level: 'C1+',
          passage: 'Three years after the low-emission zone was introduced, the city\'s own monitoring stations record a fall of eleven per cent in roadside nitrogen dioxide. The figure is not in dispute. What is in dispute is what produced it.\n\nThe transport authority is confident. Officials say the zone will have removed some nine thousand of the oldest vehicles from the network, and that the improvement must therefore be attributed to the scheme. They point to the timing: the curve bends in the month the charge began.\n\nThe independent review is more careful. It accepts that the zone may well have contributed, and that no other single measure was introduced in the same period. But it notes that fuel prices rose sharply across the same three years, that two arterial roads were closed for resurfacing, and that a national fleet-renewal grant was running throughout. Any of these could account for part of the fall, and the review declines to say how much.\n\nOn one point the review is not tentative at all. It finds that the modelling behind the authority\'s forecast assumed a traffic volume the counters never recorded, and it states flatly that the forecast cannot be reconciled with the observed data. Whatever caused the improvement, the review concludes, it was not the mechanism the authority predicted.',
          source: 'Adapted for classroom use.',
          stem: 'Where does the <strong>writer\'s own</strong> commitment reach its highest point?',
          options: [
            'In the first paragraph, where the writer states that the figure is not in dispute.',
            'In the second paragraph, where officials use <em>will have</em> and <em>must</em>.',
            'In the third paragraph, where the review uses <em>may well</em> and <em>could</em>.',
            'In the fourth paragraph, where the review calls the forecast irreconcilable with the data.'
          ],
          answer: 0,
          why: '<em>The figure is not in dispute</em> and <em>what is in dispute is what produced it</em> are the only sentences in the passage that carry neither a modal nor a source, and a bare assertion in the writer\'s own voice outranks every modal there is. Options 2 and 4 both point at strong claims, but each one is handed to somebody else — <em>officials say</em>, <em>it states flatly</em>, <em>the review concludes</em> — so they report other people\'s confidence, however firm it sounds. Option 3 identifies real hedging but attributes it correctly to the review, and hedged reported modality is the weakest combination in the passage, not the strongest. Note that the eleven per cent figure itself is sourced to the monitoring stations; it is the sentence about the dispute, not the number, that the writer owns.' },

        { id: 't8l3s3-2', type: 'choose', tag: 'sys-track', level: 'C1+',
          stem: 'A literature review contains: <em>Several authors have claimed that the effect must be causal, though none has controlled for selection.</em> What does this tell you about the reviewer\'s own position?',
          options: [
            'That the reviewer shares the authors\' confidence.',
            'That the reviewer believes the effect is produced by selection.',
            'That the reviewer doubts the claim but does not say so directly.',
            'That the reviewer doubts whether there is any effect to explain at all.'
          ],
          answer: 2,
          why: '<em>Claimed</em> is a distancing reporting verb — compare <em>shown</em>, <em>found</em>, <em>established</em> — and the <em>though</em>-clause names precisely the control that would be needed to support a <em>must</em>. Together they withhold endorsement without ever contradicting anyone. Option 1 is the standard error of taking reported modality for the writer\'s own. Option 2 turns an uncontrolled possibility into a positive claim and puts it in the reviewer\'s mouth. Option 4 is the near miss: the reviewer is doubtful, but what is doubted is the causal interpretation, not the existence of the effect, which the sentence takes for granted.' },

        { id: 't8l3s3-3', type: 'cloze', tag: 'sys-track', level: 'C1+',
          passage: 'The survey found that two-thirds of respondents had delayed a medical appointment because of cost. On that finding the authors are unequivocal: the association ___(1)___ be explained by differences in reported health, because the same pattern holds within every health band.\n\nOn the mechanism they are far more guarded. Cost ___(2)___ be operating directly, through the fee itself, or indirectly, through the time and travel a visit requires. The data cannot separate the two, and the authors say that a further study ___(3)___ be needed before the question is settled.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['must', 'may', 'will', 'has to'],
          answer: 1,
          why: 'The sentence sets out two rival mechanisms and the next sentence says in as many words that the data cannot choose between them, so the writer needs the weak middle rung (Stage 2), which commits to neither. <em>Must</em> and <em>will</em> both sit near the top of the ladder and would assert exactly what the authors have just disclaimed. <em>Has to</em> is worse again: it is a deontic form, and it would place a requirement on the cost rather than make a claim about it. Note the contrast with blank (1), where <em>unequivocal</em> calls for the flat epistemic negative <em>cannot</em>.' },

        { id: 't8l3s3-4', type: 'choose', tag: 'sys-track', level: 'C1+',
          stem: 'A paragraph opens <em>It may well be that the shortfall is temporary</em> and closes <em>The department cannot, however, plan on that assumption.</em> What has the writer done?',
          options: [
            'Granted a possibility, then refused to rely on it.',
            'Retracted the opening claim.',
            'Hedged twice, leaving the reader with no position at all.',
            'Raised the claim from possibility to certainty.'
          ],
          answer: 0,
          why: '<em>May well</em> grants that the shortfall might be temporary without endorsing it, and <em>cannot</em> is an unhedged negative in the writer\'s own voice; the position lives in the second sentence, which is where a concessive paragraph always puts it (Stage 7). Option 2 confuses conceding with withdrawing — nothing was asserted in the first place, so there is nothing to retract. Option 3 misses that <em>cannot</em> is not a hedge but the firmest form available. Option 4 is the near miss: it has the direction right but the target wrong, because the certainty attaches to what the department can plan on, not to the shortfall.' },

        { id: 't8l3s3-5', type: 'order', tag: 'sys-track', level: 'C1+',
          stem: 'Put the four sentences in the order that makes a coherent paragraph in which the writer\'s commitment rises from a bare possibility to a firm conclusion.',
          items: [
            'It is possible that the new timetable, rather than the fare change, accounts for the rise in evening journeys.',
            'The two were introduced within a fortnight of each other, and no operator collected data in the interval.',
            'Later figures, however, show the rise continuing after the fares were quietly restored in March.',
            'The timetable, not the fare, must therefore be doing the work.'
          ],
          why: 'The paragraph climbs one rung at a time: a bare possibility, the reason it could not immediately be tested, the evidence that arrives later, and the deduction that evidence now licenses. The connectives fix the sequence as firmly as the argument does — <em>however</em> can only follow a statement of the difficulty, and <em>therefore</em> can only follow the evidence it draws on. A student who ends on the opening sentence has the commitment falling instead of rising, which is the opposite of what the paragraph is built to do.' }
      ]
    }
  ],

  check: {
    id: 't8l3ck', name: 'Stage Check · The periphery and the page',
    items: [
      { id: 't8l3ck-1', type: 'read', tag: 'sys-track', level: 'C1+',
        passage: 'The trial reported last month is the largest of its kind, and its headline result is clear enough: pupils given a free breakfast at school gained, on average, two months of additional progress in reading over the year.\n\nNewspaper coverage has treated this as settled. One national daily reported that free breakfasts will raise attainment across the board, and a second that the finding proves what teachers have been saying for a decade. Neither claim appears anywhere in the trial report.\n\nWhat the report says is narrower. The effect was concentrated in the first two years of primary school and could not be detected at all after the age of nine. The authors suggest that the benefit may come less from the food than from the earlier arrival at school, and note that a breakfast club run at the same hour without food would test that directly.\n\nThe caution is warranted. A programme that works at six and not at ten is not a general remedy, and any policy built on the headline figure would be spending on the wrong age group. That much the trial does establish.',
        source: 'Adapted for classroom use.',
        stem: 'How does the writer\'s commitment change between the third paragraph and the fourth?',
        options: [
          'It falls: the writer moves from reporting a finding to speculating about a mechanism.',
          'It stays level: both paragraphs are hedged with <em>may</em> and <em>could</em>.',
          'It falls: the writer concedes that the newspapers were right after all.',
          'It rises: the writer moves from the authors\' hedged suggestion to a firm claim of their own.'
        ],
        answer: 3,
        why: 'Paragraph three is attributed and hedged throughout — <em>the authors suggest</em>, <em>may come</em>, <em>could not be detected</em> — while paragraph four drops both the attribution and the hedging and adds a booster: <em>is not a general remedy</em>, <em>would be spending on the wrong age group</em>, and <em>does establish</em>, where <em>does</em> is doing emphatic work. Option 1 is the near miss: a finding and a mechanism really are both in play, but it reverses the direction and misplaces the speculation, which belongs to paragraph three. Option 2 ignores the fact that paragraph four contains no hedge at all. Option 3 misreads the paragraph, which endorses the authors\' caution precisely against the newspapers.' },

      { id: 't8l3ck-2', type: 'choose', tag: 'sys-will', level: 'C1+',
        stem: 'Which use of <em>will</em> is a deduction about the present?',
        options: [
          'The results will be announced on the fifteenth.',
          'I will send the file as soon as the meeting finishes.',
          'That will be the surveyor at the door — she said ten o\'clock.',
          'Left untreated, the timber will rot within five winters.'
        ],
        answer: 2,
        why: 'The second clause supplies evidence for an inference about who is at the door now, which is <em>will</em> on the epistemic ladder just below <em>must</em> (Stage 2). Option 1 names a date and is an ordinary forecast. Option 2 is willingness — a promise made in the moment of speaking (Stage 4) — and could be replaced by <em>I am happy to</em>. Option 4 is the near miss: it is not about one future date either, but it is generic rather than about the present — <em>left untreated</em> supplies a condition rather than a time, so the claim holds of any untreated timber.' },

      { id: 't8l3ck-3', type: 'spot', tag: 'sys-periphery', level: 'C1+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The clerk asked whether she ought', 'to circulate the draft before Friday,', 'and the chair replied that', 'nobody needs read it before the meeting.'],
        answer: 3,
        fix: 'nobody need read it before the meeting.',
        why: 'A bare infinitive follows, which only modal <em>need</em> licenses, but the form carries a third-person <em>-s</em>, which only the lexical verb takes. Choose one pattern: <em>nobody need read it</em>, where the modal is licensed because <em>nobody</em> makes the clause non-assertive, or <em>nobody needs to read it</em>. Parts 1 and 2 are correct — <em>ought</em> keeps its <em>to</em>, and inside an indirect question it does not invert. Part 3 is an ordinary reporting frame and is properly formed.' },

      { id: 't8l3ck-4', type: 'gap', tag: 'sys-periphery', level: 'C1+',
        blank: '(1)',
        lines: [
          { who: 'Chair', text: 'Shall we take the finance report first? I ___(1)___ hardly remind the committee that the treasurer leaves at four.' },
          { who: 'Secretary', text: 'Agreed. And members ___(2)___ not raise any other business until the vote has been taken.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['need', 'needs', 'need to', 'am needing'],
        answer: 0,
        why: '<em>Hardly</em> makes the clause non-assertive, which is the environment in which modal <em>need</em> still lives; the modal takes no <em>-s</em> and a bare infinitive, giving the fixed formula <em>I need hardly remind you</em>. <em>Needs</em> inflects a modal for the third person, and the subject is <em>I</em> in any case. <em>Need to</em> is the lexical verb, which would have to be rearranged as <em>I hardly need to remind the committee</em>. <em>Am needing</em> puts a stative verb into the progressive.' },

      { id: 't8l3ck-5', type: 'equiv', tag: 'sys-will', level: 'C1+',
        given: 'She has an irritating habit of answering every question with a question.',
        stem: 'Which sentence says the same thing using a modal?',
        options: [
          'She would answer every question with a question.',
          'She may answer every question with a question.',
          'She must answer every question with a question.',
          'She will answer every question with a question.'
        ],
        answer: 3,
        why: '<em>Will</em> with a habitual present reports characteristic behaviour, and with the stress on <em>will</em> it carries exactly the irritation the original names (Stage 4). Option 1 is the near miss: <em>would</em> reports characteristic behaviour too, but in past time, so it is no longer something she does. Option 2 turns a settled habit into an occasional possibility, which loses both the regularity and the annoyance. Option 3 reads either as an obligation imposed on her or as a deduction about one occasion, and a habit is neither.' },

      { id: 't8l3ck-6', type: 'choose', tag: 'sys-track', level: 'C1+',
        stem: 'A report reads: <em>Local authorities insist that the backlog will clear by the autumn. The department\'s own projections suggest otherwise.</em> What is the writer doing?',
        options: [
          'Endorsing the authorities\' prediction and adding evidence for it.',
          'Setting one source against another without committing to either.',
          'Predicting that the backlog will not clear.',
          'Reporting two predictions that agree.'
        ],
        answer: 1,
        why: '<em>Insist</em> hands the confident <em>will</em> to the authorities and hints that the writer is unpersuaded, while <em>suggest otherwise</em> is a hedged counter-source rather than a claim. Between the two sentences the writer\'s own voice never appears, and noticing that is the whole skill. Option 1 reads the second sentence as support when <em>otherwise</em> makes it opposition. Option 3 is the near miss: the writer does lean that way, but the prediction belongs to the projections, and the writer has carefully declined to make it in their own voice. Option 4 ignores <em>otherwise</em> altogether.' }
    ]
  }
});

TOPICS.push(T8);
