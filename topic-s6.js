/* ===========================================================================
   STAGE 06 — Modality in Past Time
   Installs the central repair of a tenseless class: the modal stays in the
   present and the past is pushed into the proposition, as have + participle.
   =========================================================================== */

var T6 = {
  id: 't6', n: 6, code: 'Stage 06', art: 'clock',
  name: 'Modality in Past Time',
  cefr: 'B2+–C1',
  blurb: 'A modal has no past tense, so the past goes into the proposition instead. Must have left is a deduction made now about something that happened then.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T6.levels.push({
  id: 't6l1', n: 1, name: 'Deduction about the past', cefr: 'B2+',
  blurb: 'The modality is present and the proposition is past — which is why must have left and had to leave are not the same sentence at all.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't6l1s1', name: 'must have / can\'t have / couldn\'t have', cefr: 'B2+',
      theory: {
        key: 'A modal has no past tense, so English pushes the past into the proposition instead: <em>must have left</em> is a deduction made <strong>now</strong> about an event that happened <strong>then</strong>.',
        body: [
          'Stage 1 established that a modal is an operator standing outside the proposition and looking in. An operator of that kind has no tense of its own — there is no <s>musted</s>, no <s>mighted</s> — so when the event a speaker is judging lies in the past, English cannot move the modal backwards. It moves the <strong>proposition</strong> backwards instead, by adding <em>have</em> and a past participle. <em>He must have left</em> splits cleanly into two layers: the frame <em>must</em>, which is happening as I speak, and the proposition <em>he left</em>, which is finished.',
          'That split is the whole of this stage, and the fastest way to feel it is the pair <em>He must have left</em> against <em>He had to leave</em>. The second is the genuine past of obligation: somebody required him to go, and go he did. The first makes no claim about rules at all — it reports my inference, made right now, from evidence in front of me. <strong>One English word differs, and almost nothing in the meaning survives.</strong> A student who files <em>must have</em> as "the past of must" has no way of explaining that.',
          'Because the deduction is present, its strength is graded in the present too, on exactly the scale Stage 2 built. <em>Must have done</em> sits at the top: the evidence leaves no other explanation. And the negative end behaves as it did there — the negative of a deduction with <em>must</em> is never <em>mustn\'t</em> but the suppletive <em>can\'t</em>. <em>He can\'t have left</em> is the confident deduction that the leaving did <strong>not</strong> happen, while <em>He mustn\'t have left</em> is no deduction at all in careful usage, because <em>mustn\'t</em> only prohibits.',
          '<em>Couldn\'t have</em> does the same work as <em>can\'t have</em>, and is the one to reach for inside a past narrative or after a past reporting verb, where the whole paragraph has already stepped back in time: <em>The inspector concluded that the fire couldn\'t have started in the kitchen.</em> The difference is one of distance, not of strength. Watch, finally, for the commonest first-language shortcut, which is to leave the modal alone and mark the past with an adverb: <s>He must leave the building yesterday</s>. English will not take the past from the adverb. It has to come from <em>have</em>.'
        ],
        simple: [
          'A modal cannot be put into the past. So the past goes into the second half of the sentence: <em>must</em> + <em>have</em> + past participle. <em>He must have left</em> = I am deciding <strong>now</strong> that he left <strong>earlier</strong>.',
          '<em>He must have left</em> (I am sure he left) is not the same as <em>He had to leave</em> (somebody made him leave, and he went).',
          'The opposite of <em>must have done</em> is <em>can\'t have done</em> or <em>couldn\'t have done</em>, never <s>mustn\'t have done</s>. And never put the past on the adverb alone.'
        ],
        examples: [
          { s: 'The lights are off, so she <b>must have gone</b> home.', g: 'present deduction, past event — the deciding is happening now.' },
          { s: 'She <b>had to go</b> home, because the clinic rang.', g: 'past obligation, and the going really happened.' },
          { s: 'He <b>can\'t have read</b> the report — it only arrived this morning.', g: 'the negative of a deduction with must is can\'t, never mustn\'t.' },
          { s: '<s>He must leave the building yesterday.</s>', g: 'the past cannot come from the adverb; it has to come from have plus a participle.' }
        ]
      },
      items: [
        { id: 't6l1s1-1', type: 'choose', tag: 'past-deduce', level: 'B2+',
          stem: 'The seal on the sample box was already broken when it reached the laboratory, so somebody ______ it in transit.',
          options: ['must open', 'must have opened', 'must be opening', 'had to open'],
          answer: 1,
          why: 'The evidence is present — a broken seal on the bench — but the opening is finished, so the frame stays in the present and the past is carried by <em>have opened</em>. <em>Must open</em> puts a present or future event under the deduction, which the broken seal contradicts. <em>Must be opening</em> makes the opening still in progress. <em>Had to open</em> reports a past obligation, which would accuse somebody of being required to break the seal rather than of having broken it.' },

        { id: 't6l1s1-2', type: 'spot', tag: 'past-deduce', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The alarm log records nothing after ten,', 'and the backup battery was found flat,', 'so at some point during the power cut', 'the motion sensor must failed as well.'],
          answer: 3,
          fix: 'the motion sensor must have failed as well.',
          why: 'A modal takes a bare infinitive, and the only way to put the failure into the past is <em>have</em> plus a participle: <em>must have failed</em>. <s>Must failed</s> tries to put the past tense straight onto the verb after the modal, which no modal permits. The other three parts are sound — the log is reported in the present, the flat battery is an ordinary past passive, and the time phrase does not touch the verb phrase.' },

        { id: 't6l1s1-3', type: 'equiv', tag: 'past-deduce', level: 'B2+',
          given: 'There is no way that the driver saw the red signal.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The driver may not have seen the red signal.',
            'The driver can\'t have seen the red signal.',
            'The driver shouldn\'t have seen the red signal.',
            'The driver didn\'t have to see the red signal.'
          ],
          answer: 1,
          why: '<em>There is no way that</em> rules the possibility out completely, and the confident deduction that something did not happen is carried by <em>can\'t have</em>. <em>May not have seen</em> is the near miss: it is also about not seeing, but it only says that perhaps he did not, and leaves open the chance that he did — far weaker than <em>no way</em>. <em>Didn\'t have to see</em> says there was no requirement to look, which is about duty rather than evidence. <em>Shouldn\'t have seen</em> says the driver did see it and that seeing it was a fault.' },

        { id: 't6l1s1-4', type: 'judge', tag: 'past-deduce', level: 'B2+',
          given: 'Judging by the timestamps, the surveyor must have taken the second set of readings before the tide turned.',
          stem: 'The writer is reporting a requirement that was placed on the surveyor.',
          answer: 1,
          why: 'False. <em>Judging by the timestamps</em> tells you the writer is reasoning from evidence, so <em>must have taken</em> is a deduction: the writer is concluding, now, that the readings were taken then. A requirement in past time would be <em>had to take</em>, and being a real past tense it would normally imply that the taking happened, which this sentence only concludes. "Can\'t tell" would need the sentence to be genuinely two-way, but the opening phrase leaves no room for a rule: the writer is working it out from the record.' },

        { id: 't6l1s1-5', type: 'choose', tag: 'past-deduce', level: 'C1',
          stem: 'An incident report contains the line <em>The duty engineer had to reset the system manually.</em> Which statement about that sentence is correct?',
          options: [
            'It reports an obligation, and the reset took place.',
            'It reports an inference, and the reset only probably took place.',
            'It reports a criticism, and the reset never took place.',
            'It reports an opportunity, and the reset never took place.'
          ],
          answer: 0,
          why: '<em>Had to</em> is the genuine past tense of obligation, and in a report like this it tells you the event took place: the requirement existed and was met. An inference would need <em>must have reset</em>, which leaves the writer reasoning rather than recording. A criticism would need <em>should have reset</em>, and that form says the reset never happened at all. An opportunity not taken would need <em>could have reset</em>. All four options are built to the same pattern, so the choice turns on the verb phrase alone — and this is why <em>must have</em> cannot be filed as the past of <em>must</em>.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't6l1s2', name: 'may have / might have / could have', cefr: 'B2+',
      theory: {
        key: 'The weak rungs of the certainty scale take the same perfect proposition: <em>may have / might have / could have done</em> says that a past event is one of the possibilities the speaker\'s evidence leaves open.',
        body: [
          'Nothing new is invented for the lower rungs. The proposition keeps the shape it had — <em>have</em> plus a participle — and only the frame changes. <em>Must have failed</em> says my evidence leaves no other explanation; <em>may have failed</em> says it leaves several, and this is one of them. The whole Stage 2 ladder simply slides across into past reference, which is the payoff for having learned it as a scale rather than as a list of words.',
          'The three weak forms are close to interchangeable in this reading. <em>May have</em> is a shade more formal and reads as slightly the likelier of the possibilities; <em>might have</em> is the everyday workhorse; <em>could have</em> means the same but is the one to handle with care, because it carries two further readings that Level 2 and Level 3 will introduce. In writing where you want possibility and nothing else, <em>may have</em> and <em>might have</em> are the safe choices.',
          'Now the trap, which is Stage 2\'s scope problem in past time. <strong>In <em>may not have done</em> the negative is inside the proposition; in <em>can\'t have done</em> it is on the modal.</strong> <em>She may not have seen the notice</em> = it is possible that she did not see it, and equally possible that she did. <em>She can\'t have seen the notice</em> = the possibility of her seeing it is destroyed. They look like a matched pair and they sit at opposite ends of the scale, which is why treating them as synonyms inverts the meaning of a report.',
          'This is also the register of careful research and investigation, and the place where modality earns marks. <em>The contamination may have occurred during storage</em> offers a cause without asserting it; <em>must have occurred</em> claims the evidence closes the question. Choosing the second when the data supports only the first is the classic overclaim, and a reader who can tell a correlation from a cause will notice it immediately.'
        ],
        simple: [
          'The weak rungs work exactly like <em>must have</em>, but claim less: <em>may have done</em>, <em>might have done</em>, <em>could have done</em> all mean "perhaps it happened".',
          'Be careful with the negatives. <em>She may not have seen it</em> = perhaps she did not see it. <em>She can\'t have seen it</em> = it is certain she did not. These are not the same sentence.',
          'In an essay or a report, use <em>may have</em> or <em>might have</em> when the evidence points somewhere without proving it. Saying <em>must have</em> on thin evidence is an overclaim.'
        ],
        examples: [
          { s: 'The delay <b>may have been caused</b> by the rerouting of the night flights.', g: 'one possible cause, offered to the reader but not asserted.' },
          { s: 'She <b>might have missed</b> the last announcement.', g: 'the everyday weak guess about a past event.' },
          { s: 'The registrar <b>may not have opened</b> the attachment.', g: 'possibly not opened, possibly opened. The question is left open.' },
          { s: 'The registrar <b>can\'t have opened</b> the attachment.', g: 'the possibility itself is destroyed: it certainly was not opened.' }
        ]
      },
      items: [
        { id: 't6l1s2-1', type: 'choose', tag: 'past-weak', level: 'B2+',
          stem: 'Only one of the four samples was contaminated, and nobody has checked the storage records yet. The contamination ______ during storage, but at this stage it is impossible to say for certain.',
          options: ['must have occurred', 'may have occurred', 'can\'t have occurred', 'had to occur'],
          answer: 1,
          why: 'The records have not been checked and the writer says outright that nothing is certain, so the sentence needs the rung that offers one explanation among several: <em>may have occurred</em>. <em>Must have occurred</em> is the near miss — the right form for a firm conclusion, but it claims a certainty that the second half of the sentence denies. <em>Can\'t have occurred</em> is just as certain in the other direction, and rules storage out. <em>Had to occur</em> brings obligation into a laboratory report, where nothing is being required of anybody.' },

        { id: 't6l1s2-2', type: 'sort', tag: 'past-weak', level: 'B2+',
          stem: 'Each sentence is negative. Which ones leave the question open, and which ones close it?',
          bins: [
            { key: 'open', label: 'Possibly did not happen', hint: 'the word "not" goes with the event, so both outcomes are still possible' },
            { key: 'ruled', label: 'Certainly did not happen', hint: 'the word "not" goes with the modal, so the possibility itself is denied' }
          ],
          items: [
            { text: 'She <em>may not have seen</em> the second email.', bin: 'open' },
            { text: 'She <em>can\'t have seen</em> the second email.', bin: 'ruled' },
            { text: 'He <em>might not have understood</em> the instructions.', bin: 'open' },
            { text: 'He <em>couldn\'t have understood</em> the instructions.', bin: 'ruled' },
            { text: 'The pilot <em>may not have received</em> the revised clearance.', bin: 'open' },
            { text: 'The pilot <em>can\'t have received</em> the revised clearance.', bin: 'ruled' }
          ],
          why: 'In <em>may not have</em> and <em>might not have</em> the negative sits inside the proposition: it is possible that the thing did not happen, and it is equally possible that it did. In <em>can\'t have</em> and <em>couldn\'t have</em> the negative sits on the modal: the possibility itself is denied. The two families look like a matched pair and are at opposite ends of the scale, which is why an investigator writes <em>may not have received</em> until the recorder proves otherwise.' },

        { id: 't6l1s2-3', type: 'choose', tag: 'past-weak', level: 'B2+',
          stem: 'Which sentence leaves open the possibility that the review board <strong>did</strong> receive the objection?',
          options: [
            'The review board can\'t have received the objection.',
            'The review board may not receive the objection.',
            'The review board may not have received the objection.',
            'The review board mustn\'t have received the objection.'
          ],
          answer: 2,
          why: '<em>May not have received</em> negates the receiving rather than the possibility, so both outcomes are still live. <em>Can\'t have received</em> puts the negative on the modal instead and destroys the possibility altogether. <em>May not receive</em> does leave a possibility open, but in present or future time, so it says nothing about what has already happened — the past has to be carried by <em>have</em> and a participle. <em>Mustn\'t have received</em> looks like the negative of a deduction and is not one: <em>mustn\'t</em> prohibits, and nothing can be forbidden once it is over.' },

        { id: 't6l1s2-4', type: 'cloze', tag: 'past-weak', level: 'B2+',
          passage: 'The inquiry has not established how the second door came to be unlocked. It ___(1)___ been left open by the contractors, who were working in the corridor until six, although none of them remembers doing so.\n\nWhat is certain is that the door was locked at four, when the duty officer walked the floor. The lock is undamaged and cannot be opened without a key, so whoever unlocked it ___(2)___ had one.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['may have', 'had to', 'can\'t have', 'must have'],
          answer: 3,
          why: 'A lock that is undamaged and cannot be opened without a key leaves a key as the only way in, so the writer is entitled to the top of the scale: <em>must have had</em>. <em>May have had</em> is the near miss — the right form for a guess, but it underclaims and throws away the evidence the same sentence has just supplied. <em>Can\'t have had</em> reverses the inference and denies the one explanation left standing. <em>Had to</em> cannot be followed by <em>had one</em> at all, and in any case would be about obligation, not evidence.' },

        { id: 't6l1s2-5', type: 'choose', tag: 'past-weak', level: 'C1',
          stem: 'A study reports that attendance fell in the same term as a change to the bus timetable, with no other change recorded. Which sentence pitches the claim at the strength the evidence will bear?',
          options: [
            'The timetable change must have caused the fall in attendance.',
            'The timetable change can\'t have caused the fall in attendance.',
            'The timetable change may have caused the fall in attendance.',
            'The timetable change caused the fall in attendance.'
          ],
          answer: 2,
          why: 'Two things moving together is consistent with a causal link but does not establish one, so the writer needs the rung that offers the explanation without asserting it. All four options name the same cause and the same effect, and only the frame changes. <em>Must have caused</em> treats a correlation as proof, and the unframed <em>caused</em> goes further still and states the link as a fact; that pair is the overclaim an examiner reads as a failure of judgement. <em>Can\'t have caused</em> is just as strong in the other direction and rules out the one explanation the data points to.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't6l1s3', name: 'must have been doing', cefr: 'B2+',
      theory: {
        key: 'Put the progressive underneath the perfect and the deduction acquires a shape in time: <em>must have been waiting</em> judges a past event from inside it, while it was still running.',
        body: [
          'No new machinery is needed here either. Stage 1 fixed the order of the verb phrase once and for all — <strong>modal, then <em>have</em>, then <em>be</em>, then the main verb</strong> — and this module simply fills two of those slots instead of one: <em>might · have · been · waiting</em>. Students who find the form frightening are usually trying to memorise it as a unit rather than reading it off the chain they already own.',
          'What the progressive adds is a point of view. <em>She must have worked late</em> packages the evening as a completed whole, now over. <em>She must have been working late</em> looks at it from inside, as an activity still running at the moment that matters. That is why this form is the natural one for explaining a residue: the kettle is still warm, the corridor lights were still on, the tyre marks run for ninety metres. Each of those is evidence of something that was in progress, not of something that had finished.',
          'The same reasoning makes the progressive almost obligatory where the proposition is about a rate rather than an event. A speed is a property of an action while it is under way, so an accident report says <em>the vehicle must have been travelling well above the limit</em>, not <s>must have travelled</s>. Ask what the evidence is evidence <em>of</em>: a completed act, or a state of affairs that was continuing.',
          'Two restrictions. The progressive is blocked with stative verbs for exactly the reason it is blocked in ordinary tenses — <s>must have been knowing</s> is out because <s>is knowing</s> is out. And the order of the chain is fixed absolutely: <s>must been have waiting</s> and <s>must have waiting been</s> are not variants but impossibilities, because each link takes the form the link before it demands.'
        ],
        simple: [
          'The order never changes: modal + <em>have</em> + <em>been</em> + <em>-ing</em>. <em>She must have been working late.</em>',
          'Use it when the evidence you can see now was left by something that was <strong>still going on</strong> at the time: warm kettle, lights on, long tyre marks.',
          'Do not use it with verbs like <em>know</em>, <em>belong</em> or <em>own</em>, and never drop the <em>have</em>: <s>must been working</s> is not English.'
        ],
        examples: [
          { s: 'The kettle is still warm — somebody <b>must have been making</b> tea.', g: 'present evidence explained by an activity that was under way.' },
          { s: 'The river <b>must have been rising</b> for several hours before the gauge failed.', g: 'a rate of change is a property of an action in progress, so the progressive is needed.' },
          { s: 'She <b>must have worked</b> late every night that week.', g: 'a completed stretch, viewed as a whole — no progressive wanted here.' },
          { s: '<s>He must be waiting there since eight.</s>', g: 'the modal cannot reach back on its own: he must have been waiting there since eight.' }
        ]
      },
      items: [
        { id: 't6l1s3-1', type: 'choose', tag: 'past-prog', level: 'B2+',
          stem: 'The tyre marks run for ninety metres before the bend. The vehicle ______ well above the limit at the moment the driver braked.',
          options: ['must have travelled', 'had to travel', 'can\'t have been travelling', 'must have been travelling'],
          answer: 3,
          why: 'A speed is a property of an action while it is running, and <em>at the moment the driver braked</em> names a point inside the journey, so the deduction needs the progressive under the perfect. <em>Must have travelled</em> packages the journey as a completed whole, which cannot be what was true at a single moment. <em>Can\'t have been travelling</em> has the right shape but the wrong direction: ninety metres of tyre marks are evidence of high speed, not against it. <em>Had to travel</em> makes speeding a requirement somebody imposed.' },

        { id: 't6l1s3-2', type: 'build', tag: 'past-prog', level: 'B2+',
          stem: 'The corridor lights were still on at midnight. Put the words in order to make the caretaker\'s deduction.',
          tiles: ['have', 'someone', 'been', 'must', 'working', 'late'],
          solution: 'someone must have been working late',
          alt: [],
          why: 'The chain is fixed: subject, modal, <em>have</em>, <em>been</em>, then the <em>-ing</em> form. Nothing may come between <em>have</em> and <em>been</em>, and <em>been</em> must precede the participle, so <s>must been have working</s> and <s>must have working been</s> are both impossible rather than merely odd. Starting with <em>must</em> would invert the clause and produce a question instead of a deduction.' },

        { id: 't6l1s3-3', type: 'choose', tag: 'past-prog', level: 'B2+',
          stem: 'When the alarm sounded, the technician ran out of the lab. The meter was later found with its cover off and only half of its settings changed. What can the investigators conclude?',
          options: [
            'The technician must have calibrated the meter.',
            'The technician must calibrate the meter.',
            'The technician must have been calibrating the meter.',
            'The technician had to calibrate the meter.'
          ],
          answer: 2,
          why: 'A meter with half its settings changed is evidence of a job interrupted, so the conclusion needs the progressive under the perfect: the calibration was still under way when the alarm went off. <em>Must have calibrated</em> is the near miss — a correct deduction about a past event, but it presents the job as finished, which the half-changed settings contradict. <em>Must calibrate</em> is about a present or future event. <em>Had to calibrate</em> reports an obligation, which is a record of a rule rather than a conclusion from evidence.' },

        { id: 't6l1s3-4', type: 'spot', tag: 'past-prog', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The heating was still running at two in the morning,', 'so the night shift must been working', 'far longer than the roster allowed,', 'which nobody had authorised.'],
          answer: 1,
          fix: 'so the night shift must have been working',
          why: 'The chain needs all four links in order — modal, <em>have</em>, <em>been</em>, <em>-ing</em> — and <s>must been working</s> drops <em>have</em>, which is the one element carrying the past into the proposition. Without it the sentence has no way of being about last night at all. The remaining parts are correct: the past continuous sets the scene, the comparative is well formed, and the relative clause takes an ordinary past perfect.' },

        { id: 't6l1s3-5', type: 'gap', tag: 'past-prog', level: 'C1',
          blank: '(1)',
          lines: [
            { who: 'Site manager', text: 'The concrete has set unevenly along the north wall, so they ___(1)___ it while the temperature was still dropping.' },
            { who: 'Engineer', text: 'That would explain it. Nobody ___(2)___ the overnight forecast before the lorry arrived.' }
          ],
          stem: 'Choose the best option for gap (1).',
          options: ['must have been pouring', 'must pour', 'can\'t have been pouring', 'had to pour'],
          answer: 0,
          why: 'Uneven setting is evidence seen now, and the explanation is an activity that was still under way while the temperature fell, so the manager needs the progressive under the perfect: <em>must have been pouring</em>. <em>Can\'t have been pouring</em> is the near miss — exactly the right shape, but it denies the one explanation the uneven wall supports. <em>Must pour</em> would be about the present, when the pour is long finished. <em>Had to pour</em> says somebody required it, and a requirement is not what the wall is evidence of — nor does <em>so</em> make sense in front of it.' }
      ]
    }
  ],

  check: {
    id: 't6l1ck', name: 'Stage Check · Deduction about the past',
    items: [
      { id: 't6l1ck-1', type: 'choose', tag: 'past-deduce', level: 'B2+',
        stem: 'The copy of the speech in the archive is dated three days before the ceremony, so it ______ in advance.',
        options: ['must be written', 'must been written', 'must have written', 'must have been written'],
        answer: 3,
        why: 'The speech is the thing written rather than the writer, so the chain needs the passive under the perfect: <em>must</em> + <em>have</em> + <em>been</em> + participle. <em>Must have written</em> is the near miss — the right deduction about the past, but active, so it makes the speech do the writing. <em>Must be written</em> is about a present or future writing, which a date three days earlier rules out. <em>Must been written</em> drops <em>have</em>, leaving nothing to carry the past.' },

      { id: 't6l1ck-2', type: 'equiv', tag: 'past-weak', level: 'B2+',
        given: 'Perhaps the committee never saw the revised figures.',
        stem: 'Which sentence says the same thing?',
        options: [
          'The committee can\'t have seen the revised figures.',
          'The committee mustn\'t have seen the revised figures.',
          'The committee may not have seen the revised figures.',
          'The committee didn\'t need to see the revised figures.'
        ],
        answer: 2,
        why: '<em>Perhaps … never</em> puts the negative inside the proposition and leaves the possibility open, which is exactly <em>may not have seen</em>. <em>Can\'t have seen</em> hardens a guess into a certainty by negating the possibility instead of the seeing. <em>Mustn\'t have seen</em> is not a deduction at all: <em>mustn\'t</em> prohibits, and nothing can be forbidden once it is over. <em>Didn\'t need to see</em> swaps the question of what happened for the question of what was required.' },

      { id: 't6l1ck-3', type: 'spot', tag: 'past-deduce', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The evening ferry was cancelled', 'and nobody saw them at the port,', 'so the delegation must arrive by road yesterday,', 'which would explain why they looked so tired this morning.'],
        answer: 2,
        fix: 'so the delegation must have arrived by road yesterday,',
        why: 'The past cannot be carried by the adverb. <em>Yesterday</em> tells the reader when, but the verb phrase still has to be put into the past by <em>have</em> plus a participle: <em>must have arrived</em>. This is a common shortcut for learners whose first language marks time with particles, since such a language has no reason to touch the verb. The other three parts are correctly built.' },

      { id: 't6l1ck-4', type: 'cloze', tag: 'past-prog', level: 'B2+',
        passage: 'The temperature trace from the sample freezer ends abruptly at 03:14 and resumes at 06:02. During those three hours no reading of any kind was recorded.\n\nThe unit ___(1)___ without power for the whole of that period, and the samples ___(2)___ slowly the entire time. Nothing in the duty log explains the gap, and the technician on call insists that the alarm never sounded.',
        blank: '(2)',
        stem: 'Choose the best option for blank (2).',
        options: ['must have been warming', 'must warm', 'can\'t have been warming', 'were having to warm'],
        answer: 0,
        why: 'Three unrecorded hours describe a process spread across a stretch of past time, which is the progressive under the perfect. <em>Must warm</em> is a deduction about the present or about a general property of samples. <em>Can\'t have been warming</em> denies the very inference the missing power supports. <em>Were having to warm</em> puts the samples under an obligation, which is not a thing that can be imposed on a box of tissue.' },

      { id: 't6l1ck-5', type: 'choose', tag: 'past-weak', level: 'C1',
        stem: 'Which sentence offers a possible explanation without claiming that it is certain?',
        options: [
          'The sensor drift must have begun before the recalibration.',
          'The sensor drift had to begin before the recalibration.',
          'The sensor drift can\'t have begun before the recalibration.',
          'The sensor drift might have begun before the recalibration.'
        ],
        answer: 3,
        why: '<em>Might have begun</em> places the drift on the weak rung: one possibility among others, offered for the reader to weigh. <em>Must have begun</em> asserts that the evidence closes the question. <em>Can\'t have begun</em> is equally strong in the opposite direction and rules the timing out. <em>Had to begin</em> is an obligation, and instrument drift is not answerable to anybody.' },

      { id: 't6l1ck-6', type: 'judge', tag: 'past-deduce', level: 'C1',
        given: 'The porter can\'t have locked the gate at nine.',
        stem: 'The speaker believes the gate was locked at nine by somebody else.',
        answer: 2,
        why: 'Can\'t tell. The sentence rules out one thing only — that the porter did the locking at nine. Whether the gate was locked at all, and by whom, is left entirely open. Answering True imports an alternative agent the sentence never mentions; answering False assumes the gate stayed unlocked, which it equally does not say. A deduction narrows the possibilities; it does not always narrow them to one.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T6.levels.push({
  id: 't6l2', n: 2, name: 'The unrealised and the regretted', cefr: 'C1',
  blurb: 'Three forms that all entail the same thing — it did not happen — and differ only in whether that is a fault, a missed chance or an unreal consequence.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't6l2s1', name: 'should have / ought to have: criticism and regret', cefr: 'C1',
      theory: {
        key: 'Used to judge rather than to weigh evidence, <em>should have done</em> and <em>ought to have done</em> <strong>entail</strong> that the event did not happen and add that its not happening was a fault — criticism when the subject is <em>you</em>, regret when it is <em>I</em>.',
        body: [
          'Level 1 was about knowledge. Every form there left the occurrence of the event genuinely open and told you only how confident the speaker was. Level 2 leaves that scale altogether. <em>You should have booked</em> is not a weak guess that you booked; it states flatly that you did <strong>not</strong>, and then passes judgement on that fact. The perfect is doing the same mechanical job as before — putting the proposition into past time — but the frame sitting on top of it is evaluative rather than epistemic, and that is the difference the whole level turns on.',
          'Where the criticism lands is read off the subject and nothing else. <em>You should have told me</em> is blame. <em>I should have told you</em> is regret, and in practice an apology. <em>They should have told us</em> is a complaint about a third party. One form, three social acts, and no grammatical difference between them at all — which is why the form is so useful in a post-mortem, where the same sentence pattern can accept fault, assign it, or do both in consecutive lines.',
          '<em>Ought to have done</em> means the same and is a shade more formal, with a faint moral colouring that suits regulations and findings. Its one peculiarity is that the <em>to</em> survives: <em>ought to have circulated</em>, never <s>ought have circulated</s>. Students drop it because they have correctly learned that modals take a bare infinitive; <em>ought</em> is the exception that has to be learned as such.',
          'Two warnings. First, the negative reverses the entailment: <em>should have released</em> says the release did not happen, while <em>shouldn\'t have released</em> says it did and was a mistake. Second, <em>should have done</em> has a quite separate reading inherited from Stage 2 — expectation rather than criticism. <em>Their flight left at six, so they should have landed by now</em> assigns no fault to anybody; it reasons from a timetable. If the sentence is judging, it is criticism; if it is predicting, it is expectation.'
        ],
        simple: [
          '<em>Should have done</em> = it did <strong>not</strong> happen, and that was wrong. <em>You should have phoned</em> (blame) · <em>I should have phoned</em> (regret).',
          '<em>Shouldn\'t have done</em> is the other way round: it <strong>did</strong> happen, and that was wrong.',
          '<em>Ought to have done</em> means the same as <em>should have done</em> but keeps its <em>to</em>. And watch for the second meaning: <em>They should have landed by now</em> is an expectation, not a criticism.'
        ],
        examples: [
          { s: 'The ward manager <b>should have logged</b> the equipment fault.', g: 'it was not logged, and the speaker is assigning fault for that.' },
          { s: 'I <b>should have queried</b> the invoice when it arrived.', g: 'the same form with a first-person subject, so it comes out as regret.' },
          { s: 'We <b>shouldn\'t have promised</b> a date before the survey was in.', g: 'the negative flips it: the promise was made, and it was a mistake.' },
          { s: '<s>The committee ought have circulated the plan.</s>', g: 'ought is the one modal that keeps its to: ought to have circulated.' }
        ]
      },
      items: [
        { id: 't6l2s1-1', type: 'choose', tag: 'past-should', level: 'C1',
          stem: 'An audit found that the second signature was missing from every one of the forms. The report then apportions the blame: <em>The clerk ______ each form to the head of department before filing it.</em>',
          options: ['must have sent', 'should have sent', 'can\'t have sent', 'needn\'t have sent'],
          answer: 1,
          why: 'The audit establishes that the forms were never countersigned, so the sending did not happen, and the sentence is judging that failure — which is <em>should have sent</em>. <em>Must have sent</em> would deduce that the sending did happen, contradicting the finding. <em>Can\'t have sent</em> is the near miss: it reaches the same factual outcome and would be perfectly good English elsewhere, but it draws an inference from evidence, where this line is expressly apportioning blame. <em>Needn\'t have sent</em> says the forms were sent and that sending them was unnecessary, which is the opposite of the finding.' },

        { id: 't6l2s1-2', type: 'equiv', tag: 'past-should', level: 'C1',
          given: 'I am sorry that I did not check the figures before the meeting.',
          stem: 'Which sentence says the same thing?',
          options: [
            'I must have checked the figures before the meeting.',
            'I should have checked the figures before the meeting.',
            'I needn\'t have checked the figures before the meeting.',
            'I shouldn\'t have checked the figures before the meeting.'
          ],
          answer: 1,
          why: 'With a first-person subject, <em>should have</em> turns the judgement inwards: the checking did not happen and the speaker holds it against themselves. <em>Must have checked</em> is a deduction that it did happen. <em>Shouldn\'t have checked</em> reverses the facts and says the checking took place and was a mistake. <em>Needn\'t have checked</em> also says it took place, and adds that it was a waste of effort, which is the opposite of an apology.' },

        { id: 't6l2s1-3', type: 'sort', tag: 'past-should', level: 'C1',
          stem: 'The form is the same in all six. What is each <em>should have</em> actually doing?',
          bins: [
            { key: 'blame', label: 'Criticising someone else', hint: 'a duty was not met, and the subject is not the speaker' },
            { key: 'regret', label: 'Regretting one\'s own act', hint: 'the speaker is one of the people in the subject' },
            { key: 'expect', label: 'Expecting, not judging', hint: 'reasoning from a schedule, with no fault assigned' }
          ],
          items: [
            { text: 'You <em>should have warned</em> the night staff.', bin: 'blame' },
            { text: 'I <em>should have kept</em> the original receipt.', bin: 'regret' },
            { text: 'The parcel <em>should have arrived</em> by now, so do ask at the porter\'s desk.', bin: 'expect' },
            { text: 'We <em>should have booked</em> the hall a month earlier.', bin: 'regret' },
            { text: 'The contractor <em>should have tested</em> the alarm before signing off.', bin: 'blame' },
            { text: 'Their flight left at six, so they <em>should have landed</em> by now.', bin: 'expect' }
          ],
          why: 'The grammar never varies; the work does. With a second- or third-person subject and a duty that went unmet, the form assigns fault. With a first-person subject — including <em>we</em> — it turns that fault inwards and becomes regret. And where the sentence reasons from a timetable rather than judging anyone, it is Stage 2\'s <em>should</em> of expectation carried into past time: nobody is being blamed for the parcel.' },

        { id: 't6l2s1-4', type: 'spot', tag: 'past-should', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The revised evacuation plan was ready in September,', 'but staff did not see it until late November.', 'The safety committee accepts that it', 'ought have circulated the plan at the start of term.'],
          answer: 3,
          fix: 'ought to have circulated the plan at the start of term.',
          why: '<em>Ought</em> keeps its <em>to</em> before a verb: <em>ought to go</em>, <em>ought to have circulated</em>. Dropping it over-applies the rule that modals take a bare infinitive, which is true of the others and false of this one. The remaining parts are sound: two ordinary past-tense statements of fact, and a present-tense reporting clause that introduces the criticism.' },

        { id: 't6l2s1-5', type: 'choose', tag: 'past-should', level: 'C1',
          stem: 'A minister said afterwards: <em>We shouldn\'t have released the figures before the audit was complete.</em> What does that sentence tell you?',
          options: [
            'The figures were released, and the minister now calls that a mistake.',
            'The figures were not released, and the minister now regrets that.',
            'The figures were probably not released, and the minister is only guessing.',
            'The figures were released, and the minister had been forbidden to release them.'
          ],
          answer: 0,
          why: 'The negative flips the entailment. <em>Should have released</em> would say the release did not happen and should have; <em>shouldn\'t have released</em> says it did happen and should not have. The option that leaves the figures unreleased applies the affirmative entailment to a negative form, which is the commonest error here. Reading the sentence as a weak deduction would need <em>may not have released</em>. And a ban issued in advance would have been <em>were not to release</em>: <em>shouldn\'t have</em> is a verdict delivered afterwards, not a rule that was in force at the time.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't6l2s2', name: 'could have / might have: the chance not taken', cefr: 'C1',
      theory: {
        key: '<em>Could have done</em> names a possibility that was genuinely available in past time and was not taken up; <em>might have done</em> can do the same, and under stress it becomes a reproach.',
        body: [
          'This module and Level 1 Module 2 both produce the string <em>could have done</em>, and they are different sentences. <em>She could have missed the train</em> is a guess: perhaps she did, perhaps she did not, and the form commits the speaker to nothing. <em>You could have caught the earlier train</em> is not a guess at all — it asserts that the earlier train was there for the taking and that you did not take it. The first leaves the event open; the second <strong>entails that it never happened</strong>. Module 3.3 turns telling them apart into a trainable skill; here the job is simply to own the second reading.',
          'Where the second reading comes from is straightforward once the two layers are separate. <em>Could</em> names a capacity or an opportunity, and the perfect puts it in past time; so the sentence says the capacity existed then. What it conspicuously does not say is that anything came of it, and English hearers fill that silence in the obvious way. <em>We could have sold the building in 2019</em> — the buyer was there, and we still own the building.',
          '<em>Might have done</em> reaches the same place by a different road and adds an accusation on the way. <em>You might have told me!</em> is not a possibility, weak or otherwise; it is a complaint that an easy and obvious act was omitted, and the stress falls on <em>might</em>. <em>You might at least have rung</em> is the same move with the minimum made explicit. This is one of the few places in the system where <em>might</em> is socially stronger than <em>could</em>.',
          'Finally, note that the same entailment can produce relief rather than regret. <em>That could have ended very badly</em> says the bad ending was available and did not occur. The form is identical to the reproachful one; only the desirability of the unrealised outcome has changed. And keep <em>could have</em> apart from <em>should have</em>: <em>could have</em> observes that a road existed, while <em>should have</em> adds that failing to take it was a fault.'
        ],
        simple: [
          '<em>Could have done</em> = the chance was there in the past, and it was <strong>not</strong> taken. <em>We could have sold the building in 2019</em> — we still own it.',
          '<em>You might have told me!</em> is a complaint, not a guess. Stress <em>might</em>, and it means "that would have been easy and you did not do it".',
          'The same form can mean relief: <em>That could have ended very badly</em> — it did not. And <em>could have</em> only notes the chance; <em>should have</em> blames you for missing it.'
        ],
        examples: [
          { s: 'The trust <b>could have renegotiated</b> the lease in 2022.', g: 'the route existed and was not used; no renegotiation took place.' },
          { s: 'You <b>might have told me</b> the meeting had been moved!', g: 'a reproach, not a possibility — an easy act that was omitted.' },
          { s: 'It <b>could have cost</b> somebody a hand.', g: 'the same entailment, but the unrealised outcome is a bad one, so the tone is relief.' },
          { s: 'He <b>could have taken</b> the earlier ferry; the office has not heard from him.', g: 'this one is only a guess, and it is still open whether he took it.' }
        ]
      },
      items: [
        { id: 't6l2s2-1', type: 'choose', tag: 'past-could', level: 'C1',
          stem: 'The grant application was refused on a technicality. Which sentence says that the department had another option and did not use it?',
          options: [
            'The department must have appealed within thirty days.',
            'The department can\'t have appealed within thirty days.',
            'The department could have appealed within thirty days.',
            'The department had to appeal within thirty days.'
          ],
          answer: 2,
          why: '<em>Could have appealed</em> puts the opportunity in past time and leaves it there: the option was open, and on this reading nothing came of it. <em>Must have appealed</em> is a deduction that an appeal was in fact made. <em>Can\'t have appealed</em> is the near miss: it also ends with no appeal, but it gets there by weighing evidence rather than by naming an option that was not taken. <em>Had to appeal</em> says an appeal was required and, being a real past tense, implies that it happened.' },

        { id: 't6l2s2-2', type: 'judge', tag: 'past-could', level: 'C1',
          given: 'With a longer run-up, the jumper could have cleared the bar.',
          stem: 'The jumper did not clear the bar.',
          answer: 0,
          why: 'True. <em>With a longer run-up</em> supplies a condition that did not hold, so <em>could have cleared</em> describes an outcome available only in circumstances that never existed — and therefore one that did not happen. Answering False reads the form as a report of an achievement, which is exactly what this frame withholds. "Can\'t tell" would be right only for the weak-guess <em>could have</em> of Level 1, and the opening phrase rules that reading out.' },

        { id: 't6l2s2-3', type: 'choose', tag: 'past-could', level: 'C1',
          stem: 'Anan learns at the door that the meeting was moved. He says to his colleague: <em>You ______ told me it had been changed!</em>',
          options: ['might have', 'needn\'t have', 'can\'t have', 'must have'],
          answer: 0,
          why: 'Stressed <em>might have</em> is English\'s standard reproach: it says an easy and obvious act was not performed, and it is the only one of the four that complains about something left undone. <em>Needn\'t have told</em> is the near miss: it can also carry a mild reproach, but for something that <strong>was</strong> done — it says the colleague did tell him and had no need to, which the situation contradicts. <em>Must have told</em> deduces that the colleague did tell him, which the situation also contradicts. <em>Can\'t have told</em> reaches the right conclusion but as a piece of reasoning rather than a complaint.' },

        { id: 't6l2s2-4', type: 'build', tag: 'past-could', level: 'C1',
          stem: 'A near-miss report describes a lorry that stopped a metre short. Put the words in order to say what did not happen but very easily might have.',
          tiles: ['have', 'that', 'badly', 'ended', 'could', 'very'],
          solution: 'that could have ended very badly',
          alt: [],
          why: 'The chain fixes the order: subject, modal, <em>have</em>, participle, then the adverbial — <em>that could have ended very badly</em>. Nothing may stand between <em>could</em> and <em>have</em>, and <em>very badly</em> cannot be split around the participle. <em>Could</em> here is neither a past ability nor a guess: it names an outcome that was genuinely available and did not occur, which is why the sentence reads as relief rather than regret.' },

        { id: 't6l2s2-5', type: 'choose', tag: 'past-could', level: 'C1',
          stem: 'Which sentence observes that a course of action was available, without saying that anyone was at fault for not taking it?',
          options: [
            'The council should have widened the footpath when the road was resurfaced.',
            'The council must have widened the footpath when the road was resurfaced.',
            'The council could have widened the footpath when the road was resurfaced.',
            'The council needn\'t have widened the footpath when the road was resurfaced.'
          ],
          answer: 2,
          why: 'Only <em>could have widened</em> can simply note that the chance was there without passing a verdict on anybody. <em>Should have widened</em> agrees that the widening never happened but adds that the failure was a fault, which is the verdict the question excludes. <em>Must have widened</em> runs in the opposite direction and deduces that the footpath was widened after all. <em>Needn\'t have widened</em> belongs to a different family again: it says the widening was carried out and turned out to be unnecessary.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't6l2s3', name: 'would have: the unreal consequent in past time', cefr: 'C1',
      theory: {
        key: '<em>Would have done</em> is the consequent of an unreal past conditional: it states what the world would have contained had things gone otherwise, and therefore that the world does not contain it.',
        body: [
          'Stage 5 established <em>would</em> as the marker of unreality in present time: <em>if they invested, they would recover</em>. Push the whole structure back and each clause takes the perfect that its own proposition needs — <em>if they had invested, they would have recovered</em>. Notice that the modal is still not tensed. The <em>have</em> is doing the work in the consequent exactly as it does in every other module of this stage, and the past perfect is doing it in the condition.',
          'What the structure asserts is easy to lose sight of: <strong>both halves are false</strong>. <em>If the alarm had sounded, the staff would have evacuated</em> tells the reader that the alarm did not sound and that the staff did not evacuate. That is the whole value of the form in report writing — it is the only economical way to describe an outcome that never happened and to name the reason in the same sentence.',
          'The two halves need not point at the same time. <em>If the sensor had been replaced last year, the plant would still be running</em> pairs a past condition with a present consequence; <em>If she were a better negotiator, she would have got a higher price</em> does the reverse. The rule is not "past with past" but the simpler one this whole stage rests on: <strong>each clause carries the time of its own proposition</strong>, and the modal never carries any time at all.',
          'Two practical points. The condition is often carried by a phrase rather than an <em>if</em>-clause — <em>without the second pump</em>, <em>a week earlier</em>, <em>had it not been for the duty officer</em> — and the reader is expected to reconstruct it. And <em>would</em> belongs in the consequent only: <s>if the inspection would have taken place</s> is one of the most persistent errors at C1, matched only by writing <em>would of</em>, which is simply the contraction <em>would\'ve</em> spelled as it sounds.'
        ],
        simple: [
          '<em>If X had happened, Y would have happened</em> means that X did <strong>not</strong> happen and Y did <strong>not</strong> happen.',
          'The two halves can point at different times: <em>If the sensor had been replaced last year, the plant would still be running.</em>',
          'Never put <em>would</em> in the <em>if</em>-clause, and never write <em>would of</em> — the word is <em>have</em>.'
        ],
        examples: [
          { s: 'If the alarm <b>had sounded</b>, the staff <b>would have evacuated</b>.', g: 'the alarm did not sound and the staff did not evacuate.' },
          { s: 'A week earlier, the boat <b>would have been</b> safely in harbour.', g: 'the condition is carried by a phrase, and the boat was not in harbour.' },
          { s: 'If the line had stayed open, the town <b>would still have</b> its visitors.', g: 'past condition, present consequence — a mixed conditional.' },
          { s: '<s>If the alarm would have sounded, the staff would have evacuated.</s>', g: 'the if-clause takes the past perfect; would belongs only in the consequent.' }
        ]
      },
      items: [
        { id: 't6l2s3-1', type: 'choose', tag: 'past-would', level: 'C1',
          stem: 'A report on last week\'s storm notes that a second pump had been installed in the basement in March. Which sentence describes what that pump prevented?',
          options: [
            'Without the second pump, the basement must have flooded.',
            'Without the second pump, the basement should have flooded.',
            'Without the second pump, the basement had to flood.',
            'Without the second pump, the basement would have flooded.'
          ],
          answer: 3,
          why: '<em>Without the second pump</em> is an unreal condition, since the pump was installed, so the result takes <em>would have</em> and the sentence as a whole says the flooding did not occur. <em>Must have flooded</em> is the near miss — the right shape for a deduction about the past, but a deduction says the flooding did happen. <em>Had to flood</em> reports an obligation, and a basement cannot be placed under one. <em>Should have flooded</em> would say the flooding was due or expected and complain that it failed to arrive.' },

        { id: 't6l2s3-2', type: 'cloze', tag: 'past-would', level: 'C1',
          passage: 'The inquiry has now published its timeline. The fire was detected at 02:41 by a technician who happened to be on the floor; the automatic system did not register it until 02:58.\n\nHad the detectors been serviced in the spring, as the maintenance schedule required, they ___(1)___ the smoke within a minute. The building ___(2)___ empty by three, and the losses would have been confined to the store room.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['would have registered', 'would register', 'must have registered', 'had registered'],
          answer: 0,
          why: 'The inverted <em>Had the detectors been serviced</em> is an unreal past condition, and its consequent takes <em>would have</em> plus a participle. <em>Would register</em> is a present result — possible in a mixed conditional about the detectors today, but this paragraph is about the night of the fire, so the result must be past too. <em>Must have registered</em> turns the sentence into a deduction that the detectors did their job, which the timeline flatly denies. <em>Had registered</em> repeats the past perfect of the condition in a slot that needs the modal.' },

        { id: 't6l2s3-3', type: 'choose', tag: 'past-would', level: 'C1',
          stem: 'The railway line closed in 2019 and the town has lost a third of its visitors since. Which sentence says how the town would be different <strong>today</strong> if the line had stayed open?',
          options: [
            'If the line had stayed open, the town would have had more visitors in 2020.',
            'If the line had stayed open, the town would still have its visitors.',
            'If the line stayed open, the town would keep its visitors.',
            'If the line would have stayed open, the town would still have its visitors.'
          ],
          answer: 1,
          why: 'Each clause carries the time of its own proposition: the condition is past (<em>had stayed</em>) and the consequence is present and continuing (<em>would still have</em>). Option 1 is the near miss: a well-formed third conditional, but <em>in 2020</em> confines the result to past time and says nothing about the town today. Option 3 makes both halves present unreal and loses the 2019 closure altogether. Option 4 puts <em>would have</em> into the <em>if</em>-clause, where standard written English does not allow it.' },

        { id: 't6l2s3-4', type: 'order', tag: 'past-would', level: 'C1',
          stem: 'Put the four sentences in the order that makes a coherent extract from an accident report.',
          items: [
            'The tanker left the depot at 04:10 with a load of chilled milk.',
            'Twenty minutes later its offside tyre deflated on the approach to the bridge.',
            'Had the road been busy at that hour, the consequences would have been far more serious.',
            'As it was, the driver brought the vehicle to rest on the verge without striking anything.'
          ],
          why: 'The extract runs from departure, to incident, to the unreal consequence, and then back to what actually happened. <em>Twenty minutes later</em> can only follow a stated departure time; <em>at that hour</em> needs the hour already on the page; and <em>As it was</em> is the standard signal that an unreal consequence has just been described and the real one is about to be. A student who puts the counterfactual last leaves <em>As it was</em> with nothing to contrast.' },

        { id: 't6l2s3-5', type: 'choose', tag: 'past-would', level: 'C1',
          stem: 'Which sentence is both correctly written and says that the delivery did <strong>not</strong> arrive on time?',
          options: [
            'With a second driver, the delivery would of arrived before noon.',
            'With a second driver, the delivery must have arrived before noon.',
            'With a second driver, the delivery would have arrived before noon.',
            'With a second driver, the delivery had to arrive before noon.'
          ],
          answer: 2,
          why: '<em>With a second driver</em> supplies an unreal condition — there was no second driver — so <em>would have arrived</em> is both well formed and entails that the delivery was late. <em>Would of</em> is the contraction <em>would\'ve</em> written as it sounds and is never correct on paper. <em>Must have arrived</em> is a deduction that the delivery did arrive. <em>Had to arrive</em> states a requirement and, as a real past tense, implies that it was met.' }
      ]
    }
  ],

  check: {
    id: 't6l2ck', name: 'Stage Check · The unrealised and the regretted',
    items: [
      { id: 't6l2ck-1', type: 'choose', tag: 'past-should', level: 'C1',
        stem: 'Which sentence tells you that the delivery note <strong>was</strong> signed?',
        options: [
          'The storeman should have signed the delivery note.',
          'The storeman can\'t have signed the delivery note.',
          'The storeman could have signed the delivery note.',
          'The storeman shouldn\'t have signed the delivery note.'
        ],
        answer: 3,
        why: 'The negative of <em>should have</em> reverses the entailment: it says the act took place and was a mistake. <em>Should have signed</em> is the near miss — the same verb and the same judgement, but without the negative it says the opposite: the note was left unsigned, and that was the fault. <em>Could have signed</em> either names an opportunity that was open and not taken or, on its weaker reading, guesses that the note may have been signed; on neither reading does it tell you that it was. <em>Can\'t have signed</em> is a confident deduction that the signing did not happen.' },

      { id: 't6l2ck-2', type: 'spot', tag: 'past-would', level: 'C1',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The corrosion on the upper brackets', 'would have been found months before the walkway opened', 'if the second inspection would have taken place', 'in June, as the schedule required.'],
        answer: 2,
        fix: 'if the second inspection had taken place',
        why: 'An unreal past condition is carried by the past perfect on its own; <em>would</em> belongs in the result clause and nowhere else. Writing it in both halves is the single most persistent error in third conditionals, and it comes from treating <em>would</em> as a marker of the whole sentence rather than of one clause. Putting the <em>if</em>-clause second does not change the rule. The other three parts are correct, including the passive result <em>would have been found</em>, which is exactly what the repaired condition requires.' },

      { id: 't6l2ck-3', type: 'equiv', tag: 'past-could', level: 'C1',
        given: 'The chance to buy the warehouse was there in 2021, and the company did not take it.',
        stem: 'Which sentence says the same thing?',
        options: [
          'The company must have bought the warehouse in 2021.',
          'The company should have bought the warehouse in 2021.',
          'The company could have bought the warehouse in 2021.',
          'The company needn\'t have bought the warehouse in 2021.'
        ],
        answer: 2,
        why: '<em>Could have bought</em> here names a chance that existed and was not taken, which is precisely what the given sentence reports. <em>Should have bought</em> adds a verdict the given sentence does not contain — it makes the decision a fault. <em>Must have bought</em> is a deduction that the purchase went through. <em>Needn\'t have bought</em> says the warehouse was bought and that buying it was unnecessary.' },

      { id: 't6l2ck-4', type: 'sort', tag: 'past-should', level: 'C1',
        stem: 'In each sentence, is the speaker taking the action to have happened, or taking it not to have happened?',
        bins: [
          { key: 'yes', label: 'The speaker takes it to have happened', hint: 'the sentence presents the event as having happened' },
          { key: 'no', label: 'The speaker takes it not to have happened', hint: 'in this sentence the form presents the event as not having happened' }
        ],
        items: [
          { text: 'You <em>shouldn\'t have signed</em> the delivery note.', bin: 'yes' },
          { text: 'You <em>should have signed</em> the delivery note.', bin: 'no' },
          { text: 'They <em>would have signed</em> it if anyone had asked them to.', bin: 'no' },
          { text: 'She <em>had to sign</em> it before the driver left.', bin: 'yes' },
          { text: 'We <em>could have signed</em> a longer lease at the same rent, but nobody thought of it.', bin: 'no' },
          { text: 'The night porter <em>must have signed</em> it, since nobody else was there.', bin: 'yes' }
        ],
        why: 'This is the line between Level 1 and Level 2, and it is a line about what the speaker is committed to rather than about proof. <em>Had to sign</em> is a real past tense and normally implies that the signing took place; <em>must have signed</em> only deduces it, and a deduction can be wrong — but nobody offers that deduction while believing the note unsigned, so the two land on the same side. The three evaluative forms do the opposite: in these sentences <em>should have</em>, <em>could have</em> and <em>would have</em> each present the event as not having happened, and differ only in whether that is a fault, a missed chance or an unreal result. <em>Shouldn\'t have</em> is the exception that proves the pattern, because the negative flips it back.' },

      { id: 't6l2ck-5', type: 'choose', tag: 'past-could', level: 'C1',
        stem: 'Which sentence reproaches the listener for failing to do something easy and obvious?',
        options: ['You would have mentioned the closure.', 'You needn\'t have mentioned the closure.', 'You must have mentioned the closure.', 'You might have mentioned the closure.'],
        answer: 3,
        why: 'Stressed <em>might have</em> is the reproach form: it says the mentioning would have cost nothing and did not happen. <em>Needn\'t have mentioned</em> is the near miss: it can also be a mild reproach, but for something the listener <strong>did</strong> — it says the closure was mentioned and there was no need to. <em>Would have mentioned</em> is not a reproach for something left undone: on its own it assumes that the listener did mention the closure, or supplies the result half of an unreal condition that has been left out. <em>Must have mentioned</em> deduces that they did.' },

      { id: 't6l2ck-6', type: 'cloze', tag: 'past-should', level: 'C1',
        passage: 'The review of the March outage makes uncomfortable reading. The on-call rota had a gap between midnight and two, and that gap ___(1)___ flagged when the rota was drawn up in January.\n\nNobody noticed it for six weeks. By the time the outage began there was no engineer to call, and the service stayed down for ninety minutes.',
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['should have been', 'must have been', 'would have been', 'can\'t have been'],
        answer: 0,
        why: 'The gap was not flagged — the next sentence says nobody noticed it for six weeks — and the report is assigning fault, which is <em>should have been flagged</em>. <em>Must have been flagged</em> would deduce that it was, contradicting what follows. <em>Would have been flagged</em> needs an unreal condition, and none has been supplied. <em>Can\'t have been flagged</em> is the near miss: it reaches the same factual conclusion, but by inference, where the review is delivering a criticism.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T6.levels.push({
  id: 't6l3', n: 3, name: 'The traps', cefr: 'C1',
  blurb: 'Three places where the form and the facts pull apart: the needn\'t pair, the plan that failed, and the three readings of could have.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't6l3s1', name: 'needn\'t have done against didn\'t need to do', cefr: 'C1',
      theory: {
        key: '<em>Needn\'t have done</em> asserts that the action <strong>was carried out</strong> and was unnecessary; <em>didn\'t need to do</em> asserts only that it was unnecessary, and normally implies that it was never done at all.',
        body: [
          'Both forms agree about the obligation: there was none. They disagree about the action, and the disagreement is built into the grammar rather than into the vocabulary. <em>Needn\'t have waited</em> is a modal with a <strong>perfect infinitive</strong> underneath it, and that perfect infinitive puts a real, completed event into the sentence: the waiting is there, on the page, and the modal then comments on it. <em>Didn\'t need to wait</em> is not a modal construction at all — it is the lexical verb <em>need</em>, negated in the past with <em>do</em> — so the waiting is only mentioned, never asserted.',
          'That difference has a consequence worth more than the rule itself. Because <em>needn\'t have</em> <strong>asserts</strong> the event, the assertion cannot be cancelled: <s>You needn\'t have waited, so you went straight in</s> is a contradiction, not a sentence. Because <em>didn\'t need to</em> only <strong>implies</strong> that the event did not happen, the implication can be cancelled without any awkwardness at all: <em>I didn\'t need to pay, but I paid anyway.</em> Try that cancellation on any doubtful example and the pair sorts itself out.',
          'The test a student can actually apply in an exam is shorter. Ask: <strong>is this sentence a comment on effort already spent?</strong> A wasted journey, an unnecessary purchase, a lunch that was already provided, a form filled in twice — all of those are <em>needn\'t have</em>, and all of them invite the reply "oh, I didn\'t know". If instead the sentence is explaining why something was skipped, it is <em>didn\'t need to</em>.',
          'In report writing the stakes are plain. <em>The crew didn\'t need to evacuate the lower deck</em> says no evacuation took place. <em>The crew needn\'t have evacuated the lower deck</em> says one did, and that it was wasted effort. Note finally that <em>didn\'t have to</em> patterns with <em>didn\'t need to</em>, and that there is no such form as <s>mustn\'t have done</s> in this family at all — <em>mustn\'t</em> prohibits, and a finished action cannot be forbidden.'
        ],
        simple: [
          '<em>You needn\'t have waited</em> = you <strong>did</strong> wait, and it was not necessary.',
          '<em>You didn\'t need to wait</em> = it was not necessary, and normally that means you <strong>didn\'t</strong> wait.',
          'Quick test: if the sentence is about effort somebody has already spent, use <em>needn\'t have</em>. If it explains why something was skipped, use <em>didn\'t need to</em>.'
        ],
        examples: [
          { s: 'You <b>needn\'t have bought</b> a sandwich — lunch was provided.', g: 'the sandwich was bought; the speaker is commenting on wasted money.' },
          { s: 'I <b>didn\'t need to buy</b> a sandwich, so I went straight in.', g: 'no obligation, and the ordinary reading is that nothing was bought.' },
          { s: 'I <b>didn\'t need to pay</b>, but I paid anyway.', g: 'the implication can be cancelled, because it is only an implication.' },
          { s: '<s>You needn\'t have waited, so you went straight in.</s>', g: 'needn\'t have asserts the waiting, so it cannot be followed by a clause denying it.' }
        ]
      },
      items: [
        { id: 't6l3s1-1', type: 'choose', tag: 'past-needpair', level: 'C1',
          stem: 'Anan had read on the booking page that the airport shuttle was free, so he walked past the taxi rank without stopping. Which sentence reports his morning correctly?',
          options: [
            'He needn\'t have taken a taxi into the city.',
            'He shouldn\'t have taken a taxi into the city.',
            'He couldn\'t take a taxi into the city.',
            'He didn\'t need to take a taxi into the city.'
          ],
          answer: 3,
          why: '<em>Didn\'t need to take</em> is the lexical verb <em>need</em> negated in the past with <em>do</em>: it removes the requirement and asserts nothing at all about what Anan did, which is what a morning with no taxi in it requires. <em>Needn\'t have taken</em> is the near miss: it puts a perfect infinitive under the modal and so asserts the journey — and because that is asserted rather than merely implied, no later clause can take it back. <em>Couldn\'t take</em> gets the outcome right but gives the wrong reason: nothing stopped Anan, he simply had no need. <em>Shouldn\'t have taken</em> also says the taxi was taken, and adds that taking it was a mistake.' },

        { id: 't6l3s1-2', type: 'judge', tag: 'past-needpair', level: 'C1',
          given: 'The crew needn\'t have launched the second lifeboat.',
          stem: 'The second lifeboat was launched.',
          answer: 0,
          why: 'True. <em>Needn\'t have launched</em> puts a completed event under the modal: the launch happened, and the speaker\'s comment is that it turned out to be unnecessary. Answering False applies the reading of <em>didn\'t need to launch</em>, which is the other half of the pair and asserts nothing about what the crew did. "Can\'t tell" would be right only if the form left the event open, and this one does not — the event is asserted, which is why no following clause can cancel it.' },

        { id: 't6l3s1-3', type: 'choose', tag: 'past-needpair', level: 'C1',
          stem: 'Which sentence tells you that the technician made the journey to the depot?',
          options: [
            'The technician didn\'t need to go to the depot.',
            'The technician should have gone to the depot.',
            'The technician couldn\'t have gone to the depot.',
            'The technician needn\'t have gone to the depot.'
          ],
          answer: 3,
          why: '<em>Needn\'t have gone</em> asserts the journey and then calls it unnecessary, because the perfect infinitive puts a real completed event under the modal. <em>Didn\'t need to go</em> removes the obligation and leaves the default reading that the journey was never made. <em>Couldn\'t have gone</em> is a deduction that it did not happen. <em>Should have gone</em> also says it did not happen, and adds that failing to go was a fault.' },

        { id: 't6l3s1-4', type: 'equiv', tag: 'past-needpair', level: 'C1',
          given: 'There was no requirement for the department to submit a second copy, so it did not.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The department needn\'t have submitted a second copy.',
            'The department didn\'t need to submit a second copy.',
            'The department can\'t have submitted a second copy.',
            'The department wasn\'t allowed to submit a second copy.'
          ],
          answer: 1,
          why: 'The given sentence removes the obligation and states that nothing was sent, which is the ordinary reading of <em>didn\'t need to submit</em>. <em>Needn\'t have submitted</em> is the near miss: it also removes the obligation, but it asserts that a second copy went out and the effort was wasted. <em>Wasn\'t allowed to submit</em> ends with no second copy too, but for the wrong reason — a ban rather than the absence of a requirement. <em>Can\'t have submitted</em> arrives at the right outcome but by deduction from evidence, whereas the given sentence reasons from a rule.' },

        { id: 't6l3s1-5', type: 'spot', tag: 'past-needpair', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['We needn\'t have reserved seats for the afternoon session,', 'so we didn\'t book at all', 'and found the back three rows', 'completely empty.'],
          answer: 0,
          fix: 'We didn\'t need to reserve seats for the afternoon session,',
          why: '<em>Needn\'t have reserved</em> asserts that seats were reserved, and the next clause flatly contradicts it by saying no booking was made. Because the event is asserted rather than implied, nothing that follows can cancel it, so the only repair is the other half of the pair. The remaining three parts are correct, and it is their consistency that exposes the clash in the first.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't6l3s2', name: 'was to have done, was supposed to, was going to', cefr: 'C1',
      theory: {
        key: 'A plan made in past time has a family of its own, and the three members differ in where the plan came from and in what they say about its failure: <em>was to have done</em> builds the failure into the form, <em>was supposed to do</em> names an expectation laid down from outside, and <em>was going to do</em> reports the subject\'s own intention.',
        body: [
          'Stage 3 introduced <em>be to</em> as the register of schedules and regulations: <em>The minister is to open the exhibition.</em> Put that into the past and you get an arrangement that existed — <em>The minister was to open the exhibition</em> — and the form is neutral about the outcome. Now add the perfect infinitive. <em>The minister was to have opened the exhibition</em> builds the failure into the grammar: the plan existed and was not fulfilled, and the sentence needs no <em>but</em> to say so.',
          'Why the perfect does that here is worth a moment, because it looks like the same machinery as Level 1 and is not. There, <em>have</em> plus a participle put a past event under a present modal. Here the frame is already in the past tense, so the perfect cannot be marking past time a second time; what it marks is a proposition belonging to a time that is now over, with the event still missing from it. The same logic produces <em>hoped to have finished</em> and <em>intended to have called</em>.',
          '<em>Was supposed to</em> is the workhorse of speech and of reports. It names an expectation coming from outside the subject — a rota, an instruction, a contract, a schedule — and it implies very strongly that the expectation went unmet: <em>The alarm was supposed to sound at six.</em> The implication is cancellable in principle and almost never cancelled in practice. <em>Was meant to</em> is its close synonym and sits a little lower in register.',
          '<em>Was going to</em> is the odd one out, because it carries no obligation at all. It reports an intention or a prediction held at a past moment and usually overtaken by events: <em>We were going to fly, but the fares doubled.</em> Use it when the plan was the subject\'s own. The three-way choice in a post-mortem is therefore quite sharp: <em>was to have been completed</em> for a contractual date missed, <em>was supposed to be inspected</em> for a procedure not followed, <em>was going to resign</em> for an intention abandoned.'
        ],
        simple: [
          '<em>The bridge was to have opened in May</em> = that was the plan, and it did not happen. The failure is built into the form.',
          '<em>The alarm was supposed to sound at six</em> = somebody else arranged it, and it almost certainly did not sound.',
          '<em>We were going to fly, but the fares doubled</em> = our own intention, changed by events. No obligation is involved.'
        ],
        examples: [
          { s: 'The dam <b>was to have been raised</b> before the monsoon.', g: 'a contractual date, and the form itself says it was missed.' },
          { s: 'The auditors <b>were to begin</b> work on the Monday.', g: 'the neutral form: the arrangement existed, and it may well have been kept.' },
          { s: 'The backup <b>was supposed to</b> run at two every morning.', g: 'an expectation imposed from outside, implying strongly that it went unmet.' },
          { s: '<s>The bridge was to have opened in May, and it opened on time.</s>', g: 'was to have opened builds the failure in, so the second clause contradicts it.' }
        ]
      },
      items: [
        { id: 't6l3s2-1', type: 'choose', tag: 'past-wasto', level: 'C1',
          stem: 'The new terminal opened eleven months behind schedule. A report on the delay begins: <em>The building ______ in September of the previous year.</em>',
          options: ['must have been completed', 'was to have been completed', 'was completed', 'would have been completed'],
          answer: 1,
          why: '<em>Was to have been completed</em> states the contractual date and builds into the form the fact that it was missed, which is exactly what a report on a delay needs in its opening line. <em>Would have been completed</em> is the near miss: it also says the completion did not happen, but it is an unreal result and needs a condition, and none has been supplied. <em>Must have been completed</em> deduces that the building was finished then, which the opening date disproves. <em>Was completed</em> asserts the completion as fact.' },

        { id: 't6l3s2-2', type: 'cloze', tag: 'past-wasto', level: 'C1',
          passage: 'The community clinic in Ban Pong ___(1)___ its new scanner in March. The equipment arrived on time, but the room built to house it failed its electrical inspection, and the machine spent five months in a corridor under plastic sheeting.\n\nStaff ___(2)___ trained on it during the same period. That programme was postponed twice, and the first patient was not scanned until August.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['must have been', 'needn\'t have been', 'were supposed to be', 'can\'t have been'],
          answer: 2,
          why: 'The training was arranged by somebody other than the staff and was then postponed, which is precisely <em>were supposed to be trained</em>: an external expectation that went unmet. <em>Can\'t have been trained</em> is the near miss: it gets the outcome right, but as a deduction from evidence, where the paragraph is reporting a schedule. <em>Must have been trained</em> deduces that the training happened, which the following sentence denies. <em>Needn\'t have been trained</em> would assert that it did take place and add that it was unnecessary.' },

        { id: 't6l3s2-3', type: 'choose', tag: 'past-wasto', level: 'C1',
          stem: 'All four sentences report a signing that never took place. Which one presents the plan as the speakers\' own intention, rather than as an arrangement or an expectation laid on them from outside?',
          options: [
            'We were to have signed the lease on the first, but the survey found damp in the cellar.',
            'We were supposed to sign the lease on the first, but the survey found damp in the cellar.',
            'We were going to sign the lease on the first, but the survey found damp in the cellar.',
            'We should have signed the lease on the first, but the survey found damp in the cellar.'
          ],
          answer: 2,
          why: '<em>Were going to sign</em> reports an intention held at a past moment and then overtaken by events: the plan is the speakers\' own and no authority is involved. <em>Were to have signed</em> names a fixed arrangement whose failure is built into the form, which is both more external and more formal than an intention. <em>Were supposed to sign</em> points at an expectation coming from a contract or a schedule rather than from the speakers. <em>Should have signed</em> is not a plan at all but a verdict passed afterwards, and a survey that finds damp is a reason rather than a failing.' },

        { id: 't6l3s2-4', type: 'spot', tag: 'past-wasto', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The delegation was to have visited the water treatment plant on Thursday,', 'and the visit went ahead as planned,', 'with the provincial governor present', 'for the whole afternoon.'],
          answer: 0,
          fix: 'The delegation was to visit the water treatment plant on Thursday,',
          why: 'The perfect infinitive in <em>was to have visited</em> marks the arrangement as one that failed, so it cannot introduce a clause reporting that the visit took place. The plain <em>was to visit</em> is the neutral member of the pair and states the arrangement without prejudging the outcome. The other three parts are all consistent with a successful visit, and it is their agreement that exposes the clash in the first.' },

        { id: 't6l3s2-5', type: 'order', tag: 'past-wasto', level: 'C1',
          stem: 'Put the four sentences in the order that makes a coherent extract from a project review.',
          items: [
            'The footbridge was to have been handed over to the city at the end of the dry season.',
            'In the event, the steel arrived from the mill six weeks late and out of specification.',
            'The contractor was then supposed to remedy the defects within a fortnight, under clause nine.',
            'That deadline was missed as well, and the bridge did not open until the following November.'
          ],
          why: 'The extract runs from the contractual date, to the first failure, to the remedy that failure triggered, to the second failure. <em>In the event</em> can only follow a stated plan; <em>then</em> and <em>the defects</em> both require the faulty steel to be already on the page; and <em>That deadline</em> refers back to the fortnight. Notice that each sentence uses a different member of the family while the register — <em>under clause nine</em> — holds steady across all four.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't6l3s3', name: 'Resolving could have: ability, possibility or regret?', cefr: 'C1',
      theory: {
        key: '<em>Could have done</em> is three sentences wearing one form — past ability not used, weak past possibility, and unreal past consequent — and only the surrounding clause can tell you which one you are reading.',
        body: [
          'The three readings, laid side by side. <strong>(a) A chance not taken:</strong> <em>I could have gone to the briefing, but I stayed to finish the audit</em> — the opportunity existed, and the event did not occur. <strong>(b) A weak guess:</strong> <em>She could have missed the train; nobody has heard from her</em> — the event is entirely open, and this is the Level 1 reading. <strong>(c) An unreal result:</strong> <em>With a better map we could have found the turning</em> — a condition is false, so the event did not occur. Readings (a) and (c) entail non-occurrence; reading (b) entails nothing at all, which is the sharpest line between them.',
          'The collapse is not an accident of English. <em>Could</em> is <em>can</em> at one remove, and <em>can</em> already covers ability, possibility and permission; add the perfect and all of those are pushed into past time at once, where no part of the form distinguishes them. The language tolerates the ambiguity because the context nearly always resolves it — and resolving it is the skill, not deploring it.',
          'The clues, in order of usefulness. A <strong>contrasting clause</strong> — <em>but I stayed</em>, <em>and chose not to</em> — announces reading (a). A <strong>condition</strong>, arriving as <em>if</em>, as <em>with</em> or <em>without</em>, as <em>a week earlier</em>, or as an inverted <em>had the warning gone out</em>, announces reading (c). <strong>Evidence language</strong> — <em>nobody has heard</em>, <em>the recorder shows nothing</em>, <em>perhaps</em> — announces reading (b). And a first-person subject with a decision attached usually gives (a).',
          'When you write, decide whether the ambiguity is affordable. If it is not, the repairs are simple: <em>may have</em> and <em>might have</em> are unambiguous for (b); <em>had the opportunity to … but did not</em> spells out (a); and <em>would have</em> with the condition made explicit gives (c). In a safety bulletin or an examination answer, the cost of leaving <em>could have</em> to fend for itself is a reader who cannot tell whether you are reporting a possibility or an omission.'
        ],
        simple: [
          '<em>Could have done</em> has three meanings: (a) the chance was there and was not taken, (b) perhaps it happened, (c) it would have happened under a condition that was false.',
          'Look at the clause around it. <em>but</em> gives (a) · evidence words such as <em>nobody knows</em> give (b) · a condition such as <em>with a better map</em> gives (c).',
          'If it matters, rewrite. Use <em>may have</em> for a guess, <em>had the chance to but did not</em> for an opportunity, and <em>would have</em> with the condition spelled out for an unreal result.'
        ],
        examples: [
          { s: 'I <b>could have flown</b> down on the Friday, but I took the overnight train.', g: 'a chance not taken, and the contrast with but is what settles it.' },
          { s: 'She <b>could have missed</b> the train; nobody has heard from her.', g: 'a weak guess; whether she missed it is still open.' },
          { s: 'With a better map we <b>could have found</b> the track before dark.', g: 'an unreal result: the condition is false, so the finding did not happen.' },
          { s: '<s>He could have left at six, but I do not know whether he did.</s>', g: 'but forces the chance-not-taken reading, which the second clause then denies. Use may have left for a guess.' }
        ]
      },
      items: [
        { id: 't6l3s3-1', type: 'sort', tag: 'past-ambig', level: 'C1',
          stem: 'Every sentence contains <em>could have</em>. Which of the three readings is in play?',
          bins: [
            { key: 'abil', label: 'A chance not taken', hint: 'the opportunity was there and was not used' },
            { key: 'poss', label: 'A weak guess', hint: 'the speaker does not know whether it happened' },
            { key: 'unreal', label: 'An unreal result', hint: 'a condition is false, so the result did not follow' }
          ],
          items: [
            { text: 'I <em>could have applied</em> for the scholarship, but I decided to work instead.', bin: 'abil' },
            { text: 'She <em>could have missed</em> the connection; the inbound flight was two hours late.', bin: 'poss' },
            { text: 'With one more pump, the cellar <em>could have been saved</em>.', bin: 'unreal' },
            { text: 'Nobody has heard from the survey team, so they <em>could have turned back</em> at the ridge.', bin: 'poss' },
            { text: 'The council <em>could have bought</em> the site in 2020, and chose not to.', bin: 'abil' },
            { text: 'Had the warning gone out at eight, the village <em>could have been evacuated</em> in time.', bin: 'unreal' }
          ],
          why: 'Nothing in the form tells the three apart, so the surrounding clause does all the work. A contrast — <em>but I decided</em>, <em>and chose not to</em> — announces an opportunity that existed and was refused. Evidence language, such as a late inbound flight or no word from a team, announces a guess and leaves the event entirely open. A condition, whether it arrives as <em>with one more pump</em> or as an inverted <em>had the warning gone out</em>, announces an unreal result and entails that the event did not occur.' },

        { id: 't6l3s3-2', type: 'choose', tag: 'past-ambig', level: 'C1',
          stem: 'Read the sentence: <em>The technician could have reset the alarm before leaving.</em> Which continuation forces the reading "she had the chance and did not take it"?',
          options: [
            '…, but she was already late for the last bus.',
            '…; the log shows nothing at all after half past five.',
            '…, if she had been given the override code.',
            '…, and we have no way of knowing whether she did.'
          ],
          answer: 0,
          why: 'A contrast with <em>but</em>, followed by a reason for not acting, is the standard signal that an opportunity existed and was passed over. Option 2 offers evidence and no verdict, which pushes the sentence towards the weak-guess reading. Option 3 supplies an unreal condition and produces the third reading, in which the reset did not happen because the code was never given. Option 4 states outright that the event is open, which is the guess reading spelled out.' },

        { id: 't6l3s3-3', type: 'spot', tag: 'past-ambig', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Had the second alarm been working,', 'the night staff could of reached the loading bay', 'in under three minutes,', 'and the fire would have been contained.'],
          answer: 1,
          fix: 'the night staff could have reached the loading bay',
          why: '<em>Could of</em> is the contraction <em>could\'ve</em> spelled as it sounds, and it is never correct in writing; the word is <em>have</em> — the same <em>have</em> that carries the proposition into past time in every module of this stage. The reading here is the unreal one, because <em>had the second alarm been working</em> is a false condition, so the staff did not reach the bay. The rest of the extract is correctly built, and the consequent <em>would have been contained</em> matches the condition exactly.' },

        { id: 't6l3s3-4', type: 'choose', tag: 'past-ambig', level: 'C1',
          stem: 'A safety bulletin contains the line <em>The crew could have evacuated the lower deck.</em> The writer means that the crew had the opportunity and did not use it. Which rewrite says this with no risk of being misread?',
          options: [
            'The crew may have evacuated the lower deck.',
            'The crew had time to evacuate the lower deck but did not.',
            'The crew would have evacuated the lower deck if ordered to.',
            'The crew were unable to evacuate the lower deck.'
          ],
          answer: 1,
          why: 'Only the second version states the opportunity and the failure to use it separately, so nothing is left to the reader\'s guesswork — which is what a safety bulletin requires. <em>May have evacuated</em> is unambiguous but unambiguously the wrong reading: it says perhaps they did. <em>Would have evacuated … if ordered to</em> is the near miss: it also says no evacuation happened, but it is the unreal-result reading, blaming the missing order rather than the crew. <em>Were unable to evacuate</em> says the opportunity was never there, which is the reverse of the writer\'s meaning.' },

        { id: 't6l3s3-5', type: 'gap', tag: 'past-ambig', level: 'C1',
          blank: '(2)',
          lines: [
            { who: 'Investigator', text: 'The tail lights were working when we tested the vehicle this morning, so the cyclist ___(1)___ them from forty metres.' },
            { who: 'Officer', text: 'He ___(2)___ through the gap on the inside instead of pulling out into the traffic, but he can\'t have seen it from where he was.' }
          ],
          stem: 'Choose the best option for gap (2).',
          options: ['could have gone', 'must have gone', 'needn\'t have gone', 'was going to go'],
          answer: 0,
          why: 'The <em>but</em> clause gives a reason why an available course was not taken, which is the chance-not-taken reading of <em>could have</em>. <em>Must have gone</em> deduces that he did go through the gap, which the rest of the line denies. <em>Needn\'t have gone</em> would assert that he did go through the gap and add that it was unnecessary. <em>Was going to go</em> would report an intention the cyclist formed, and a rider who never saw the gap can have formed no such intention — quite apart from the fact that nothing at the scene gives the officer access to his intentions.' }
      ]
    }
  ],

  check: {
    id: 't6l3ck', name: 'Stage Check · The traps',
    items: [
      { id: 't6l3ck-1', type: 'choose', tag: 'past-needpair', level: 'C1',
        stem: 'Which sentence tells you that the second inspection was carried out?',
        options: [
          'The team didn\'t need to carry out a second inspection.',
          'The team should have carried out a second inspection.',
          'The team couldn\'t have carried out a second inspection.',
          'The team needn\'t have carried out a second inspection.'
        ],
        answer: 3,
        why: 'The perfect infinitive under <em>needn\'t</em> asserts the inspection and then calls it unnecessary. <em>Didn\'t need to carry out</em> removes the obligation and carries the ordinary implication that no second inspection was made. <em>Couldn\'t have carried out</em> is a deduction that it did not happen. <em>Should have carried out</em> says it did not happen and that this was a fault.' },

      { id: 't6l3ck-2', type: 'equiv', tag: 'past-wasto', level: 'C1',
        given: 'The exhibition was scheduled to open in April, and it did not open then.',
        stem: 'Which sentence says the same thing?',
        options: [
          'The exhibition was to have opened in April.',
          'The exhibition was to open in April.',
          'The exhibition needn\'t have opened in April.',
          'The exhibition would have opened in April.'
        ],
        answer: 0,
        why: '<em>Was to have opened</em> states the arrangement and builds the failure into the form, which is both halves of the given sentence in four words. <em>Was to open</em> is the near miss: it states the arrangement correctly but is neutral about the outcome, so it leaves out the fact that the opening did not happen. <em>Needn\'t have opened</em> asserts that it opened and adds that there was no need. <em>Would have opened</em> is an unreal consequent and requires a condition, which the given sentence does not supply.' },

      { id: 't6l3ck-3', type: 'build', tag: 'past-ambig', level: 'C1',
        stem: 'Put the words in order to say that an opportunity existed in past time and was not used.',
        tiles: ['could', 'the company', 'the contract', 'taken', 'have'],
        solution: 'the company could have taken the contract',
        alt: [],
        why: 'The chain is subject, modal, <em>have</em>, participle, object: <em>the company could have taken the contract</em>. Nothing may sit between <em>could</em> and <em>have</em>, and the participle must follow <em>have</em> directly, so <s>could taken have</s> is not a variant but an impossibility. Read on its own the finished sentence has three possible meanings; it is the instruction — an opportunity that existed and was not used — that fixes it as the first.' },

      { id: 't6l3ck-4', type: 'choose', tag: 'past-wasto', level: 'C1',
        stem: 'Which sentence reports an expectation imposed from outside that was not met?',
        options: [
          'The auditor was going to visit in June.',
          'The auditor could have visited in June.',
          'The auditor was supposed to visit in June.',
          'The auditor must have visited in June.'
        ],
        answer: 2,
        why: '<em>Was supposed to</em> names an expectation coming from a schedule or an instruction rather than from the subject, and it implies strongly that the expectation went unmet. <em>Was going to visit</em> reports the auditor\'s own intention and involves no authority at all. <em>Could have visited</em> names an opportunity that was open and not used, or on its weaker reading guesses that a visit may have happened; either way no expectation has been laid on anybody. <em>Must have visited</em> deduces that the visit did take place.' },

      { id: 't6l3ck-5', type: 'spot', tag: 'past-needpair', level: 'C1',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['I needn\'t have renewed the licence in October,', 'so I left it until the new year', 'and paid the higher fee', 'when the district office reopened.'],
        answer: 0,
        fix: 'I didn\'t need to renew the licence in October,',
        why: '<em>Needn\'t have renewed</em> asserts that the licence was renewed in October, and the rest of the sentence says it was left until January. Because the event is asserted rather than implied, nothing that follows can cancel it, so the first part has to change rather than the last three. The repaired version removes the obligation without claiming anything about what was done, which is exactly what the narrative needs.' },

      { id: 't6l3ck-6', type: 'gap', tag: 'past-wasto', level: 'C1',
        blank: '(1)',
        lines: [
          { who: 'Coordinator', text: 'The interpreters ___(1)___ arrived on the Tuesday, but the visas came through four days late.' },
          { who: 'Wichai', text: 'Then somebody ___(2)___ the ministry in January, when the applications first went in.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['were to have', 'must have', 'needn\'t have', 'can\'t have'],
        answer: 0,
        why: 'The arrangement was for Tuesday and the visas stopped it, so the plan existed and failed: <em>were to have arrived</em>. <em>Must have arrived</em> deduces that they did arrive, which the second clause denies. <em>Needn\'t have arrived</em> would say they arrived and that there was no need for them to. <em>Can\'t have arrived</em> reaches the right outcome but as a deduction from evidence, where the coordinator is reporting a schedule that broke down.' }
    ]
  }
});

TOPICS.push(T6);
