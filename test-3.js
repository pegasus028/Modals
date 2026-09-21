/* ===========================================================================
   TEST 3 — m3 · FINAL CHECK, C1
   Twenty items weighted to Stages 5 to 8 — the remote forms, past modality,
   calibrated stance and the whole system under load — with a few Stage 1 to 4
   points re-tested at C1 difficulty. Part C is one discursive passage read
   six times over.
   =========================================================================== */
MOCKS.push({
  id: 'm3',
  name: 'Final Check · C1',
  blurb: 'Twenty questions at C1. The remote forms, past modality, calibrated stance and the whole system under load. This is the paper an IELTS 7.5 candidate should be able to pass.',
  minutes: 35,
  total: 20,
  sections: [

    /* ------------------------------------------------ PART A, items 1-5 */
    {
      code: 'A-I',
      part: 'PART A: GRAMMAR',
      title: 'Advanced forms',
      instructions: 'Choose the option that completes the sentence correctly. Only one option is defensible in the context given.',
      points: 1,
      items: [

        { id: 'm3-1', type: 'choose', tag: 'frame-chain', level: 'C1',
          stem: 'Nothing has been decided yet, but a pencilled note on the file suggests the claim ______ twice before it ever reached this office.',
          options: ['may have been refused', 'may have refused', 'may be refused', 'may have been refusing'],
          answer: 0,
          why: 'The chain runs MODAL, <em>have</em>, passive <em>be</em>, participle, so a past possibility about something done <strong>to</strong> the claim is <em>may have been refused</em>. <em>may have refused</em> keeps the perfect but loses the passive, which makes the claim do the refusing. <em>may be refused</em> is a present or future passive, and <em>before it ever reached this office</em> is firmly past. <em>may have been refusing</em> uses the progressive participle, turning a decision into an ongoing activity.' },

        { id: 'm3-2', type: 'choose', tag: 'dyn-occexcept', level: 'B2+',
          stem: 'The window on to the corridor had been propped open, so from the bench outside I ______ every word the panel said.',
          options: ['could hear', 'managed to hear', 'have been able to hear', 'could have heard'],
          answer: 0,
          why: 'Perception verbs are stative and escape the single-occasion restriction, so <em>could hear</em> is idiomatic even about one specific past afternoon. <em>managed to hear</em> imports effort and difficulty, which the propped-open window rules out. <em>have been able to hear</em> is a present perfect and will not sit in a finished past narrative. <em>could have heard</em> says the opportunity existed and was not used, denying that anything was actually heard.' },

        { id: 'm3-3', type: 'choose', tag: 'dist-unreal', level: 'C1',
          stem: 'From a live planning inquiry, where the scheme is still under consideration: <em>If the developer ______ the affordable-housing quota, the scheme ______ far less opposition.</em>',
          options: [
            'would meet … would meet',
            'met … would meet',
            'had met … would have met',
            'met … will meet'
          ],
          answer: 1,
          why: 'Both halves of an unreal sentence step back together, so a hypothesis about a decision still open takes a past form in the <em>if</em>-clause and <em>would</em> in the result: <em>met … would meet</em>. Option 0 puts <em>would</em> inside the <em>if</em>-clause, where the conditional conjunction already supplies the modality. Option 2 uses the past-unreal pair, which would mean the quota can no longer be met — but the inquiry is live. Option 3 leaves the result clause in the real world while the condition has already moved out of it.' },

        { id: 'm3-4', type: 'choose', tag: 'past-ambig', level: 'C1',
          stem: 'Read: <em>The duty manager could have closed the barrier.</em> Which continuation forces the reading <strong>the chance was there and was not taken</strong>?',
          options: [
            'The switch was two metres from where she was standing, and nobody touched it.',
            'We still do not know who was on the gantry when the alarm went.',
            'She had been trained on that control system for six years.',
            'In any case the power to the barrier had already failed by then.'
          ],
          answer: 0,
          why: 'An available means plus an explicit statement that it was not used pins the sentence to the unrealised-opportunity reading. Option 1 leaves the facts open and so selects the weak-possibility reading: perhaps she did close it. Option 2 supplies a standing capacity and selects the pure ability reading. Option 3 removes the possibility altogether, which makes the sentence false rather than ambiguous.' },

        { id: 'm3-5', type: 'choose', tag: 'sys-invert', level: 'C1+',
          stem: 'Rewrite for a formal covering letter, without <em>if</em>: <em>If you require any further documents, my colleague will send them by courier.</em>',
          options: [
            'Should you require any further documents, my colleague will send them by courier.',
            'Should you required any further documents, my colleague will send them by courier.',
            'Would you require any further documents, my colleague will send them by courier.',
            'If should you require any further documents, my colleague will send them by courier.'
          ],
          answer: 0,
          why: 'Inversion with <em>should</em> replaces <em>if</em> in formal writing and leaves the following verb in its bare form: <em>Should you require</em>. Option 1 puts a past form after <em>should</em>, which no modal ever takes. Option 2 uses <em>would</em>, but only <em>should</em>, <em>were</em> and <em>had</em> invert in this construction. Option 3 keeps <em>if</em> as well as the inversion, so the clause is marked twice.' }
      ]
    },

    /* ------------------------------------------------ PART A, items 6-9 */
    {
      code: 'A-II',
      part: 'PART A: GRAMMAR',
      title: 'Error identification',
      instructions: 'Each sentence is divided into four parts. Exactly one part contains an error of form or of calibration. Choose it.',
      points: 1,
      items: [

        { id: 'm3-6', type: 'spot', tag: 'sys-chain', level: 'C1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['For the assay to be valid,', 'the samples must be having been stored', 'below minus twenty degrees', 'from the moment of collection.'],
          answer: 1,
          fix: 'the samples must have been stored',
          why: 'The chain has one order — MODAL, <em>have</em>, <em>be</em>, main verb — so <em>have</em> comes before any form of <em>be</em>, never after it. <em>must be having been stored</em> inverts two links and stacks a progressive that the meaning does not want. The correct chain is modal, perfect, passive: <em>must have been stored</em>. The other parts contain no auxiliary sequence to disturb.' },

        { id: 'm3-7', type: 'spot', tag: 'dist-ifwill', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['If the tribunal will accept', 'the late submission,', 'the hearing can go ahead', 'on the date originally listed.'],
          answer: 0,
          fix: 'If the tribunal accepts',
          why: '<em>If</em> already marks the clause as a possibility, so a second operator on top of it is redundant: the form is <em>If the tribunal accepts</em>. <em>will</em> survives in an <em>if</em>-clause only when it means willingness, and a tribunal accepting a document is an outcome, not a favour. Part 2 correctly keeps its modal, because the main clause is where the modality belongs.' },

        { id: 'm3-8', type: 'spot', tag: 'past-wasto', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The delegation', 'was to have arrive on Tuesday,', 'but the connecting flight was cancelled', 'and the talks opened without them.'],
          answer: 1,
          fix: 'was to have arrived on Tuesday',
          why: '<em>was to have done</em> is the form that builds the failure of a plan into the verb phrase, and <em>have</em> must be followed by a past participle: <em>arrived</em>. The bare form <em>arrive</em> can only follow a modal directly, and there is no modal next to it here. The rest of the sentence supplies exactly the frustrated-plan context that makes <em>was to have</em> the right choice in the first place.' },

        { id: 'm3-9', type: 'spot', tag: 'hedge-under', level: 'C1',
          stem: 'One of the four parts hedges far more than the claim needs. Find it.',
          words: ['The review concludes', 'that it may possibly be the case', 'that winter rainfall in the north', 'has declined over the last three decades.'],
          answer: 1,
          fix: 'that it may be the case',
          why: 'Three hedging devices sit on one proposition in part 1: the modal <em>may</em>, the adverb <em>possibly</em>, which only repeats it, and the empty frame <em>be the case that</em>. One of them would calibrate the claim; together they leave the reader with nothing to assess. <em>that it may be the case</em>, or simply <em>that winter rainfall may have declined</em>, does the whole job. The other parts assert a specific, datable finding and need no hedging at all.' }
      ]
    },

    /* ---------------------------------------------- PART B, items 10-14 */
    {
      code: 'B-I',
      part: 'PART B: MEANING AND STANCE',
      title: 'Closest meaning',
      instructions: 'Read the sentence in the box, then choose the option that is closest to it in meaning and in the strength of what it claims.',
      points: 1,
      items: [

        { id: 'm3-10', type: 'equiv', tag: 'dist-tentative', level: 'C1',
          given: 'That would appear to be the weakest part of the argument.',
          stem: 'Which sentence says the same thing?',
          options: [
            'In my judgement that is the weakest part of the argument, though I am putting it carefully.',
            'That was the weakest part of the argument when I read it before.',
            'That is certainly the weakest part of the argument, and nobody disputes it.',
            'That would have been the weakest part of the argument if it had been included.'
          ],
          answer: 0,
          why: 'The remote form lowers the <strong>strength</strong> of the claim, not its content: the speaker does think it is the weakest part, and is saying so with a margin. Option 1 reads <em>would</em> as a past tense, which it is not here. Option 2 strips the hedge out and turns a careful judgement into a settled fact. Option 3 reads the same form as an unreal past, inventing a condition the original never states.' },

        { id: 'm3-11', type: 'equiv', tag: 'past-could', level: 'C1',
          given: 'They could have settled the claim in January for a fraction of what it has cost them since.',
          stem: 'Which sentence says the same thing?',
          options: [
            'It is possible that they settled the claim cheaply in January.',
            'The chance to settle cheaply was there in January, and they did not take it.',
            'They were obliged to settle the claim in January.',
            'They succeeded in settling the claim cheaply in January.'
          ],
          answer: 1,
          why: '<em>what it has cost them since</em> proves that the claim was not settled, which fixes <em>could have</em> on the unrealised-opportunity reading. Option 0 is the weak-possibility reading of the same form, and the second clause rules it out. Option 2 confuses possibility with obligation — nothing here requires anything. Option 3 asserts that the settlement happened, which is the opposite of what the sentence implies.' },

        { id: 'm3-12', type: 'equiv', tag: 'hedge-imperson', level: 'C1',
          given: 'It is widely held that smaller cohorts improve the quality of supervision.',
          stem: 'Which sentence says the same thing?',
          options: [
            'Many people believe that smaller cohorts improve supervision, and the writer does not say whether they are right.',
            'The writer is fairly confident that smaller cohorts improve supervision.',
            'It has been demonstrated that smaller cohorts improve supervision.',
            'Smaller cohorts may improve supervision, but on balance they probably do not.'
          ],
          answer: 0,
          why: 'An impersonal frame moves the <strong>source</strong> of a claim away from the writer; it does not lower anyone\'s confidence in it. Option 1 treats the frame as a hedge on the writer\'s own certainty, which is the commonest misreading of the pattern. Option 2 upgrades a widespread belief into a demonstrated result. Option 3 adds a negative lean that nothing in the original supports.' },

        { id: 'm3-13', type: 'equiv', tag: 'hedge-concede', level: 'C1+',
          given: 'Critics are right that the new fare zones are complicated. That complexity, however, is what allows the discount for short journeys to exist at all.',
          stem: 'Which sentence makes the same move in a single sentence?',
          options: [
            'The new fare zones may well be complicated, but it is that complexity that makes the short-journey discount possible.',
            'The new fare zones are undoubtedly complicated, and the short-journey discount is possible because of it.',
            'Although the new fare zones might be complicated, the short-journey discount might be possible.',
            'The new fare zones cannot be complicated, since the short-journey discount depends on them.'
          ],
          answer: 0,
          why: '<em>may well … but</em> grants the objection at a measured strength and then turns against it, which is exactly the two-step the original performs. Option 1 concedes with a booster and then joins the halves with <em>and</em>, so the objection is never answered. Option 2 hedges the writer\'s own counter-claim as well as the concession, leaving no position standing. Option 3 refuses the point that was supposed to be granted, which is not a concession at all.' },

        { id: 'm3-14', type: 'equiv', tag: 'sys-report', level: 'C1+',
          given: 'The finance director told them: <em>We must have the revised figures before the board meets.</em>',
          stem: 'Which sentence reports that correctly?',
          options: [
            'The finance director told them that they had to have the revised figures before the board met.',
            'The finance director told them that they must have had the revised figures before the board met.',
            'The finance director told them that they would have the revised figures before the board met.',
            'The finance director told them that they should have the revised figures before the board met.'
          ],
          answer: 0,
          why: 'Deontic <em>must</em> has no past, so under a past reporting verb it steps back into <em>had to</em>, and the subordinate clause backshifts with it. Option 1 produces <em>must have had</em>, which is a deduction about a finished past state, not a requirement. Option 2 converts an instruction into a prediction that the figures would simply appear. Option 3 downgrades a requirement to a recommendation the team could decline.' }
      ]
    },

    /* ---------------------------------------------- PART C, items 15-20 */
    {
      code: 'C-I',
      part: 'PART C: READING',
      title: 'Modality in a text',
      instructions: 'Read the passage, then answer the six questions. Two of them ask about the writer, not about the subject: how far the writer is prepared to commit, and how that changes as the argument develops.',
      points: 1,
      items: [

        { id: 'm3-15', type: 'read', tag: 'sys-ambig', level: 'C1',
          passage: 'The demographic arithmetic is not in dispute. Within two decades, one person in four in most high-income countries will be over sixty-five, and the fastest-growing group of all is the one over eighty-five, which is the group that needs daily help. Whatever else is uncertain, demand for care workers will rise, and it will rise faster than the working-age population that has to supply them.\n\nWhat follows from that is much less clear. It is widely assumed that the shortage is essentially a problem of pay, and the assumption is not unreasonable: care work tends to sit near the bottom of the wage distribution, and turnover in most places is high. Yet the studies that have tried to isolate the effect of a pay rise report gains that are modest and short-lived. Pay may well be a necessary condition for a stable workforce; the evidence that it is a sufficient one is thin.\n\nA second answer is technology. Lifting aids, fall sensors and medication reminders already reduce the physical load of the work, and a home fitted with them could be managed on fewer visits than one without. It would be a mistake, though, to read that as a solution rather than a margin. The tasks that consume a care worker\'s day, such as noticing that somebody has stopped eating or judging whether a bruise needs a doctor, are exactly the ones that resist automation, and they must be done by someone who knows the person.\n\nThat leaves migration, which is where most systems have quietly settled. Ministers in several countries told their parliaments that the shortfall would be closed by training at home, and in each case the numbers have been made up from abroad instead. There is nothing dishonourable in recruiting abroad, but it is not a plan; it exports the shortage to the countries that trained the workers.\n\nNone of this points to a single lever. What the evidence does support is a narrower claim: a system that pays badly, recruits abroad and waits for a device will not hold, and the countries that recognised this earliest appear to be the ones now struggling least.',
          source: 'Adapted for classroom use.',
          stem: 'In <em>they must be done by someone who knows the person</em>, what is <em>must</em> doing?',
          options: [
            'Deducing, from the evidence given, that a particular person is in fact doing those tasks.',
            'Stating a requirement that follows from the nature of the tasks themselves.',
            'Reporting a rule that governments have laid down for care providers.',
            'Predicting that these tasks will go on being done by human beings.'
          ],
          answer: 1,
          why: 'The clause says what the work demands, not what the writer concludes from evidence, so this is the deontic reading: the tasks require someone with personal knowledge. Option 0 is the epistemic reading, which would need an evidence phrase and a subject the writer is drawing a conclusion about. Option 2 invents an external regulation the passage never mentions. Option 3 turns a requirement into a forecast, which would sit oddly with <em>resist automation</em> in the same sentence.' },

        { id: 'm3-16', type: 'read', tag: 'dist-unrealposs', level: 'C1',
          passage: 'The demographic arithmetic is not in dispute. Within two decades, one person in four in most high-income countries will be over sixty-five, and the fastest-growing group of all is the one over eighty-five, which is the group that needs daily help. Whatever else is uncertain, demand for care workers will rise, and it will rise faster than the working-age population that has to supply them.\n\nWhat follows from that is much less clear. It is widely assumed that the shortage is essentially a problem of pay, and the assumption is not unreasonable: care work tends to sit near the bottom of the wage distribution, and turnover in most places is high. Yet the studies that have tried to isolate the effect of a pay rise report gains that are modest and short-lived. Pay may well be a necessary condition for a stable workforce; the evidence that it is a sufficient one is thin.\n\nA second answer is technology. Lifting aids, fall sensors and medication reminders already reduce the physical load of the work, and a home fitted with them could be managed on fewer visits than one without. It would be a mistake, though, to read that as a solution rather than a margin. The tasks that consume a care worker\'s day, such as noticing that somebody has stopped eating or judging whether a bruise needs a doctor, are exactly the ones that resist automation, and they must be done by someone who knows the person.\n\nThat leaves migration, which is where most systems have quietly settled. Ministers in several countries told their parliaments that the shortfall would be closed by training at home, and in each case the numbers have been made up from abroad instead. There is nothing dishonourable in recruiting abroad, but it is not a plan; it exports the shortage to the countries that trained the workers.\n\nNone of this points to a single lever. What the evidence does support is a narrower claim: a system that pays badly, recruits abroad and waits for a device will not hold, and the countries that recognised this earliest appear to be the ones now struggling least.',
          source: 'Adapted for classroom use.',
          stem: 'What does the writer claim in <em>a home fitted with them could be managed on fewer visits than one without</em>?',
          options: [
            'That homes of this kind are already being managed on fewer visits everywhere.',
            'That fewer visits would certainly be enough in a home of this kind.',
            'That fewer visits are a genuine possibility in such a home, not a guaranteed result.',
            'That such homes were managed on fewer visits at some point in the past.'
          ],
          answer: 2,
          why: '<em>could</em> opens a possibility; it does not assert the outcome, and the next sentence warns the reader against treating it as one. Option 0 reports the possibility as an accomplished fact everywhere. Option 1 is what <em>would</em> would have said — the imagined result asserted, not merely opened. Option 3 reads the remote form as a past tense, which the surrounding present-time argument rules out.' },

        { id: 'm3-17', type: 'read', tag: 'hedge-approx', level: 'C1',
          passage: 'The demographic arithmetic is not in dispute. Within two decades, one person in four in most high-income countries will be over sixty-five, and the fastest-growing group of all is the one over eighty-five, which is the group that needs daily help. Whatever else is uncertain, demand for care workers will rise, and it will rise faster than the working-age population that has to supply them.\n\nWhat follows from that is much less clear. It is widely assumed that the shortage is essentially a problem of pay, and the assumption is not unreasonable: care work tends to sit near the bottom of the wage distribution, and turnover in most places is high. Yet the studies that have tried to isolate the effect of a pay rise report gains that are modest and short-lived. Pay may well be a necessary condition for a stable workforce; the evidence that it is a sufficient one is thin.\n\nA second answer is technology. Lifting aids, fall sensors and medication reminders already reduce the physical load of the work, and a home fitted with them could be managed on fewer visits than one without. It would be a mistake, though, to read that as a solution rather than a margin. The tasks that consume a care worker\'s day, such as noticing that somebody has stopped eating or judging whether a bruise needs a doctor, are exactly the ones that resist automation, and they must be done by someone who knows the person.\n\nThat leaves migration, which is where most systems have quietly settled. Ministers in several countries told their parliaments that the shortfall would be closed by training at home, and in each case the numbers have been made up from abroad instead. There is nothing dishonourable in recruiting abroad, but it is not a plan; it exports the shortage to the countries that trained the workers.\n\nNone of this points to a single lever. What the evidence does support is a narrower claim: a system that pays badly, recruits abroad and waits for a device will not hold, and the countries that recognised this earliest appear to be the ones now struggling least.',
          source: 'Adapted for classroom use.',
          stem: 'What do <em>tends to</em> and <em>in most places</em> do in <em>care work tends to sit near the bottom of the wage distribution, and turnover in most places is high</em>?',
          options: [
            'They limit how widely the claim applies, without weakening the writer\'s confidence in it.',
            'They show that the writer is unsure whether care wages are low at all.',
            'They attribute the claim to other people rather than to the writer.',
            'They concede a point that the writer is about to reject.'
          ],
          answer: 0,
          why: 'An approximator narrows the <strong>scope</strong> of a claim — most places, not all — and leaves the writer fully committed within that scope. Option 1 confuses scope with certainty, which is the standard misreading of these words. Option 2 describes an impersonal frame such as <em>it is widely assumed</em>, which the passage uses one sentence earlier for a different job. Option 3 describes a concession, and the writer immediately builds on this claim rather than turning against it.' },

        { id: 'm3-18', type: 'read', tag: 'sys-report', level: 'C1+',
          passage: 'The demographic arithmetic is not in dispute. Within two decades, one person in four in most high-income countries will be over sixty-five, and the fastest-growing group of all is the one over eighty-five, which is the group that needs daily help. Whatever else is uncertain, demand for care workers will rise, and it will rise faster than the working-age population that has to supply them.\n\nWhat follows from that is much less clear. It is widely assumed that the shortage is essentially a problem of pay, and the assumption is not unreasonable: care work tends to sit near the bottom of the wage distribution, and turnover in most places is high. Yet the studies that have tried to isolate the effect of a pay rise report gains that are modest and short-lived. Pay may well be a necessary condition for a stable workforce; the evidence that it is a sufficient one is thin.\n\nA second answer is technology. Lifting aids, fall sensors and medication reminders already reduce the physical load of the work, and a home fitted with them could be managed on fewer visits than one without. It would be a mistake, though, to read that as a solution rather than a margin. The tasks that consume a care worker\'s day, such as noticing that somebody has stopped eating or judging whether a bruise needs a doctor, are exactly the ones that resist automation, and they must be done by someone who knows the person.\n\nThat leaves migration, which is where most systems have quietly settled. Ministers in several countries told their parliaments that the shortfall would be closed by training at home, and in each case the numbers have been made up from abroad instead. There is nothing dishonourable in recruiting abroad, but it is not a plan; it exports the shortage to the countries that trained the workers.\n\nNone of this points to a single lever. What the evidence does support is a narrower claim: a system that pays badly, recruits abroad and waits for a device will not hold, and the countries that recognised this earliest appear to be the ones now struggling least.',
          source: 'Adapted for classroom use.',
          stem: 'The passage reports that ministers <em>told their parliaments that the shortfall would be closed by training at home</em>. What did the ministers themselves most probably say?',
          options: [
            'The shortfall will be closed by training at home.',
            'The shortfall would have been closed by training at home.',
            'The shortfall may be closed by training at home.',
            'The shortfall had to be closed by training at home.'
          ],
          answer: 0,
          why: 'Under a past reporting verb, <em>will</em> takes one step back to <em>would</em>, so the original commitment was a plain prediction: <em>will be closed</em>. Option 1 unwinds the backshift into a past unreal, which would mean the ministers were talking about something that never happened. Option 2 replaces a confident promise with a possibility, and a hedged original would have been reported with <em>might</em>. Option 3 turns a prediction into an obligation, and <em>had to</em> is what a reported <em>must</em> would have produced.' },

        { id: 'm3-19', type: 'read', tag: 'epi-read', level: 'C1',
          passage: 'The demographic arithmetic is not in dispute. Within two decades, one person in four in most high-income countries will be over sixty-five, and the fastest-growing group of all is the one over eighty-five, which is the group that needs daily help. Whatever else is uncertain, demand for care workers will rise, and it will rise faster than the working-age population that has to supply them.\n\nWhat follows from that is much less clear. It is widely assumed that the shortage is essentially a problem of pay, and the assumption is not unreasonable: care work tends to sit near the bottom of the wage distribution, and turnover in most places is high. Yet the studies that have tried to isolate the effect of a pay rise report gains that are modest and short-lived. Pay may well be a necessary condition for a stable workforce; the evidence that it is a sufficient one is thin.\n\nA second answer is technology. Lifting aids, fall sensors and medication reminders already reduce the physical load of the work, and a home fitted with them could be managed on fewer visits than one without. It would be a mistake, though, to read that as a solution rather than a margin. The tasks that consume a care worker\'s day, such as noticing that somebody has stopped eating or judging whether a bruise needs a doctor, are exactly the ones that resist automation, and they must be done by someone who knows the person.\n\nThat leaves migration, which is where most systems have quietly settled. Ministers in several countries told their parliaments that the shortfall would be closed by training at home, and in each case the numbers have been made up from abroad instead. There is nothing dishonourable in recruiting abroad, but it is not a plan; it exports the shortage to the countries that trained the workers.\n\nNone of this points to a single lever. What the evidence does support is a narrower claim: a system that pays badly, recruits abroad and waits for a device will not hold, and the countries that recognised this earliest appear to be the ones now struggling least.',
          source: 'Adapted for classroom use.',
          stem: 'How far is the writer prepared to commit on the question of pay?',
          options: [
            'Certain that higher pay would solve the shortage, since the writer calls pay the answer.',
            'Certain that higher pay would not help at all, since the studies found no effect.',
            'Confident that pay is part of the answer, but doubtful that pay on its own is enough.',
            'Unwilling to take any position, since the writer cites no evidence either way.'
          ],
          answer: 2,
          why: 'The sentence <em>Pay may well be a necessary condition … the evidence that it is a sufficient one is thin</em> commits to pay mattering and then withholds commitment on pay being sufficient — two different strengths in one sentence. Option 0 reads the concession as the writer\'s conclusion and ignores <em>thin</em>. Option 1 over-reads <em>modest and short-lived</em> into no effect at all, which the phrase does not say. Option 3 ignores the studies the writer explicitly leans on.' },

        { id: 'm3-20', type: 'read', tag: 'sys-track', level: 'C1+',
          passage: 'The demographic arithmetic is not in dispute. Within two decades, one person in four in most high-income countries will be over sixty-five, and the fastest-growing group of all is the one over eighty-five, which is the group that needs daily help. Whatever else is uncertain, demand for care workers will rise, and it will rise faster than the working-age population that has to supply them.\n\nWhat follows from that is much less clear. It is widely assumed that the shortage is essentially a problem of pay, and the assumption is not unreasonable: care work tends to sit near the bottom of the wage distribution, and turnover in most places is high. Yet the studies that have tried to isolate the effect of a pay rise report gains that are modest and short-lived. Pay may well be a necessary condition for a stable workforce; the evidence that it is a sufficient one is thin.\n\nA second answer is technology. Lifting aids, fall sensors and medication reminders already reduce the physical load of the work, and a home fitted with them could be managed on fewer visits than one without. It would be a mistake, though, to read that as a solution rather than a margin. The tasks that consume a care worker\'s day, such as noticing that somebody has stopped eating or judging whether a bruise needs a doctor, are exactly the ones that resist automation, and they must be done by someone who knows the person.\n\nThat leaves migration, which is where most systems have quietly settled. Ministers in several countries told their parliaments that the shortfall would be closed by training at home, and in each case the numbers have been made up from abroad instead. There is nothing dishonourable in recruiting abroad, but it is not a plan; it exports the shortage to the countries that trained the workers.\n\nNone of this points to a single lever. What the evidence does support is a narrower claim: a system that pays badly, recruits abroad and waits for a device will not hold, and the countries that recognised this earliest appear to be the ones now struggling least.',
          source: 'Adapted for classroom use.',
          stem: 'Which best describes how the writer\'s degree of commitment changes across the passage?',
          options: [
            'It is flat: every claim in the passage is hedged to the same degree.',
            'It begins unhedged on the demographic facts, hedges the explanations that follow, and closes on a deliberately narrow claim the writer is willing to assert.',
            'It begins cautiously and grows steadily more certain, ending in a confident prediction about the whole system.',
            'It begins confidently and then withdraws altogether, ending by saying that nothing useful can be known.'
          ],
          answer: 1,
          why: 'The first paragraph asserts flatly — <em>not in dispute</em>, <em>will rise</em> — while the middle paragraphs run on <em>may well</em>, <em>could</em> and <em>it would be a mistake</em>, and the last narrows the claim so that it can be asserted again. Option 0 misses the shift entirely, which is the whole architecture of the piece. Option 2 reverses the direction of the opening. Option 3 ignores <em>What the evidence does support</em> and <em>will not hold</em>, which are among the strongest statements in the passage.' }
      ]
    }
  ]
});
