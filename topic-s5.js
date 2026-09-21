/* ===========================================================================
   STAGE 05 — Distance
   Installs the pivot of the whole course: the past morphology of could,
   might, would and should marks remoteness, not past time — and remoteness
   is read off whichever axis the context makes available.
   =========================================================================== */

var T5 = {
  id: 't5', n: 5, code: 'Stage 05', art: 'layers',
  name: 'Distance',
  cefr: 'B2+–C1',
  blurb: 'Could, might, would, should are not past tenses. They mark distance — in time, in likelihood, or in social space — and one mechanism explains politeness, tentativeness and the unreal alike.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T5.levels.push({
  id: 't5l1', n: 1, name: 'The past form that is not past', cefr: 'B2+',
  blurb: 'One morphology, three distances — and the cues in the surrounding sentence that tell you which one is meant.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't5l1s1', name: 'One morphology, three distances', cefr: 'B2+',
      theory: {
        key: 'The old past ending on <em>could, might, would, should</em> does not mark past time. It marks <strong>remoteness</strong>, and the context decides whether the remoteness is in time, in likelihood, or in social space.',
        body: [
          'Historically, <em>could, might, would</em> and <em>should</em> are the past forms of <em>can, may, will</em> and <em>shall</em>. That history is real, and it is also the single most misleading thing a student is ever told about them, because synchronically these forms are usually <strong>not past at all</strong>. <em>Could you pass the salt?</em> is not about yesterday. <em>That might be the answer</em> is not about yesterday. Only one of the three common uses has anything to do with time.',
          'What the old past ending actually encodes is a <strong>step back from the here and now</strong> — from the speaker\'s present, actual, face-to-face reality. And there are exactly three ways for something to be <em>not here</em>. It can be remote in <strong>time</strong>: the event sits before now. It can be remote in <strong>likelihood</strong>: the speaker is not committed to it, or it is not the case at all. It can be remote in <strong>social space</strong>: the speaker is standing further back from the hearer, which is what politeness is made of.',
          'Because one form marks remoteness and remoteness has to point somewhere, the hearer reads the axis off the surrounding sentence. A past-time adverbial or a past-tense clause supplies the time axis: <em>We <u>could</u> walk to the market when we lived closer</em>. An <em>if</em> in view, or a bare claim about how things are, supplies the likelihood axis: <em>That <u>could</u> be the answer</em>. A question addressed to the hearer asking something of them supplies the social axis: <em><u>Could</u> you send it again?</em> Same word, three jobs, and the word is never what tells you which.',
          'This is worth more than any list of uses, because the same mechanism runs a great deal of the rest of English. The unreal past in conditionals (<em>if I had more time</em>), the remote form after <em>wish</em> and <em>I\'d rather</em>, the whole politeness dial from <em>can</em> up to <em>I was wondering whether you might</em>, and most academic hedging are all one move: <strong>step back from the present and actual, and let the context say in which direction.</strong> Stages 6, 7 and 8 all draw on it.'
        ],
        simple: [
          '<em>Could, might, would, should</em> look like past tenses, but most of the time they are not. They mean <strong>one step away from here and now</strong>.',
          'The step can be away in <strong>time</strong> (it happened before now), away in <strong>likelihood</strong> (maybe, or not really), or away from the <strong>person you are speaking to</strong> (politeness).',
          'The words around the sentence tell you which. A past time phrase means time. An <em>if</em> means likelihood. A question that asks the listener for something means politeness.'
        ],
        examples: [
          { s: 'We <b>could</b> walk to the market when we lived closer.', g: 'distance in time: the past clause fixes the reading.' },
          { s: 'That <b>could</b> be the answer, though I would check it.', g: 'distance in likelihood: a guess about now, not a memory.' },
          { s: '<b>Could</b> you send the file again?', g: 'distance in social space: the request is made smaller by the remote form.' },
          { s: '<s>Could you send the file again yesterday?</s>', g: 'a past adverbial cannot be forced onto the polite reading; the axes do not mix.' }
        ]
      },
      items: [
        { id: 't5l1s1-1', type: 'choose', tag: 'dist-core', level: 'B2+',
          stem: 'In which sentence does <em>could</em> refer to <strong>past time</strong>?',
          options: [
            'You <em>could</em> ask the registrar, though I doubt she keeps the old files.',
            'Before the bypass opened, we <em>could</em> reach the hospital in ten minutes.',
            '<em>Could</em> I borrow your notes for an hour?',
            'The delay <em>could</em> be caused by a single faulty sensor.'
          ],
          answer: 1,
          why: 'Only the second sentence has a past-time frame — <em>before the bypass opened</em> — and that frame is what makes the remoteness a matter of time. The first is a suggestion: the distance keeps the advice from sounding like an instruction. The third is a request, where the distance is social, and nobody would answer it with <em>Yes, I could</em>. The fourth is a guess about the delay right now, so the distance is in likelihood.' },

        { id: 't5l1s1-2', type: 'sort', tag: 'dist-core', level: 'B2+',
          stem: 'Each sentence uses a remote form. Decide whether it really refers to past time or not.',
          bins: [
            { key: 'past', label: 'Really about past time', hint: 'the event sits before now' },
            { key: 'remote', label: 'Not past at all', hint: 'remote in likelihood or in politeness' }
          ],
          items: [
            { text: 'As a child she <em>could</em> name every province in the country.', bin: 'past' },
            { text: '<em>Would</em> you mind repeating the second figure?', bin: 'remote' },
            { text: 'The committee <em>might</em> still reject the proposal.', bin: 'remote' },
            { text: 'In those days the ferry <em>would</em> leave before dawn.', bin: 'past' },
            { text: 'I <em>should</em> think forty thousand is closer to the truth.', bin: 'remote' },
            { text: 'When the dormitory stood next to the plant, we <em>could</em> hear the generator every night.', bin: 'past' }
          ],
          why: 'Every genuinely past item carries a past frame that does the work for you: <em>as a child</em>, <em>in those days</em>, <em>when the dormitory stood</em>. Strip the frame away and the same modal flips: <em>she could name every province</em> on its own is a guess about a person you are looking at. The three remote items have no past frame at all — one asks something of the hearer, one guesses about a decision still to come, and <em>I should think</em> softens the speaker\'s own estimate.' },

        { id: 't5l1s1-3', type: 'choose', tag: 'dist-core', level: 'B2+',
          stem: 'In <em>I would say the figure is nearer forty per cent</em>, what is <em>would</em> doing?',
          options: [
            'Reporting what the speaker said on an earlier occasion.',
            'Making the claim tentative — the speaker steps back from asserting it flatly.',
            'Marking the claim as unreal, that is, something that is not the case.',
            'Making a polite request of the listener.'
          ],
          answer: 1,
          why: 'There is no past adverbial, no reporting frame and no <em>if</em>, so the only axis the context leaves open is likelihood, and with a first-person verb of opinion that comes out as tentativeness: the speaker offers the figure instead of asserting it. Option 1 would need a past frame such as <em>at the time</em> or a reporting verb. Option 3 misreads the remoteness as unreality, but the speaker does believe the figure — that is why they are giving it. Option 4 imports the politeness axis, which needs a hearer and something asked of them, and <em>I would say</em> asks nothing of anyone.' },

        { id: 't5l1s1-4', type: 'spot', tag: 'dist-core', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['When the research centre first opened,', 'anyone with a student card', 'can use the reading room', 'until midnight without booking.'],
          answer: 2,
          fix: 'could use the reading room',
          why: 'The opening clause fixes the whole sentence in past time, so the modal has to step back with it: <em>could</em>. <em>Can</em> leaves the permission sitting in the speaker\'s present and contradicts <em>first opened</em>, which tells us the arrangement belongs to an earlier period. The other three parts are sound — the subject phrase, the object and the time adverbial all belong where they are, and nothing about them needs the modal to change.' },

        { id: 't5l1s1-5', type: 'equiv', tag: 'dist-core', level: 'B2+',
          given: 'Ten years ago you could park anywhere along the riverfront.',
          stem: 'Which sentence says the same thing?',
          options: [
            'Ten years ago you were allowed to park anywhere along the riverfront.',
            'Ten years ago you might have parked anywhere along the riverfront.',
            'You could park anywhere along the riverfront if the council agreed.',
            'You could have parked anywhere along the riverfront ten years ago.'
          ],
          answer: 0,
          why: 'The past adverbial forces the time reading, so <em>could</em> here is simply the past of permission, and option 1 says that outright: <em>were allowed to</em> states as a fact what the rules used to permit. Option 2 turns the fact into a weak guess about the past — it says the speaker does not know what was allowed. Option 3 drops the adverbial and puts a condition in view, which swings the axis over to unreality, so the parking becomes something that is not the case. Option 4 is the unrealised-possibility form and carries the implication that you did <strong>not</strong> park there, which the original does not say at all.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't5l1s2', name: 'Distance as tentativeness: I would say, that might be right', cefr: 'B2+',
      theory: {
        key: 'Stepping back in likelihood is how English says <em>I am not fully committed to this</em>: the remote form lowers the strength of a claim without altering a word of its content.',
        body: [
          'Take any proposition and put a modal in front of it. <em>That is the answer</em> commits the speaker entirely. <em>That may be the answer</em> commits them to a possibility. <em>That <strong>could</strong> be the answer</em> steps back again. Nothing about the answer has changed between the three; what has changed is the distance between the speaker and the claim, and the remote form is the instrument that measures it.',
          'The pairs line up: <em>can / could</em>, <em>may / might</em>, <em>will / would</em>, <em>shall / should</em>. In the field of certainty the remote member of each pair sits one notch lower — more guarded, less committed. <em>The results may indicate a seasonal effect</em> is a genuine possibility offered; <em>the results <strong>might</strong> indicate a seasonal effect</em> holds the same possibility a little further away from the writer.',
          'One family of uses is worth separating out, because it puzzles students: <em>I would say</em>, <em>I would think</em>, <em>I\'d have thought</em>, <em>that would be about right</em>. Here <em>would</em> is not softening the event at all — it is softening the <strong>act of asserting</strong>. That is why it appears with first-person verbs of opinion, why there is nothing hypothetical about it, and why the sentence it introduces can be flatly factual: <em>I would say the deposit is refundable</em> says the deposit is refundable, politely.',
          'This is the grammar that Stage 7 turns into a band score, so it is worth seeing the two failures now. <strong>Flat assertion</strong> — <em>this proves that smaller classes raise attainment</em> — reads as a writer who cannot tell a correlation from a cause, and it is the common outcome for students whose first language achieves caution lexically rather than grammatically. <strong>The hedge pile-up</strong> — <em>it might possibly perhaps be somewhat arguable that…</em> — is the opposite failure and reads as a writer with nothing to say. One hedge, chosen at the right strength, does the whole job.'
        ],
        simple: [
          'Putting a remote modal in front of a statement makes it weaker without changing what it says. <em>That is the answer</em> → <em>that may be the answer</em> → <em>that might be the answer</em>.',
          '<em>I would say</em>, <em>I would think</em> and <em>I\'d have thought</em> soften the <strong>saying</strong>, not the thing said. <em>I would say the deposit is refundable</em> still means it is refundable.',
          'Use one hedge, not three. <em>The results might indicate a seasonal effect</em> is careful. <em>The results might possibly perhaps indicate</em> is not more careful — it just sounds like you have nothing to say.'
        ],
        examples: [
          { s: 'That <b>could</b> be the answer, though the sample is small.', g: 'the guess is offered, not asserted.' },
          { s: 'I <b>would say</b> the figure is nearer forty per cent.', g: 'would softens the act of saying, not the figure itself.' },
          { s: 'The results <b>might</b> suggest a seasonal effect.', g: 'one notch weaker than may; the writer stays uncommitted.' },
          { s: '<s>The results might possibly perhaps suggest a small seasonal effect.</s>', g: 'three hedges on one claim reads as a writer with nothing to say.' }
        ]
      },
      items: [
        { id: 't5l1s2-1', type: 'choose', tag: 'dist-tentative', level: 'B2+',
          stem: 'A researcher has run one small pilot study. Which sentence is pitched at the strength the evidence will bear?',
          options: [
            'The pilot study proves that shorter shifts reduce error rates.',
            'The pilot study shows that shorter shifts will always reduce error rates.',
            'The pilot study suggests that shorter shifts <em>might</em> reduce error rates.',
            'The pilot study might possibly indicate that shorter shifts could perhaps reduce error rates.'
          ],
          answer: 2,
          why: 'A small pilot supports a possibility, and option 3 says exactly that: a cautious reporting verb plus one remote modal. Option 1 uses <em>proves</em>, which claims the study has ruled out every rival explanation — a claim no pilot can support. Option 2 adds <em>always</em> and so generalises from a handful of shifts to every workplace there has ever been. Option 4 has the right instinct and four hedges to do one hedge\'s work, which leaves the reader unable to tell what, if anything, has been found.' },

        { id: 't5l1s2-2', type: 'equiv', tag: 'dist-tentative', level: 'B2+',
          given: 'I would think the repairs will take a fortnight.',
          stem: 'Which sentence says the same thing?',
          options: [
            'I am certain the repairs will take a fortnight.',
            'I once thought the repairs would take a fortnight.',
            'My guess is that the repairs will take a fortnight.',
            'If I thought about it, the repairs would take a fortnight.'
          ],
          answer: 2,
          why: '<em>I would think</em> softens the asserting, not the fortnight, so the plainest paraphrase is <em>my guess is</em> — the estimate stands, offered rather than declared. Option 1 strips the hedge out and turns a guess into a certainty. Option 2 reads <em>would</em> as past time, which would need a reporting frame or a past adverbial that the sentence does not have. Option 4 reads it as an unreal condition, which makes the length of the repairs depend on whether the speaker thinks about them.' },

        { id: 't5l1s2-3', type: 'choose', tag: 'dist-tentative', level: 'B2+',
          stem: 'A writer wants the <strong>weakest</strong> of these four claims about a correlation. Which verb phrase should be chosen: <em>The pattern ______ a change in commuting habits.</em>',
          options: ['must reflect', 'will reflect', 'should reflect', 'might reflect'],
          answer: 3,
          why: '<em>Might reflect</em> is the only one of the four that merely opens the possibility and leaves the writer uncommitted to it. <em>Should reflect</em> states an expectation — the writer is saying the connection probably holds — which is a real claim about the pattern. <em>Will reflect</em> is confident prediction or deduction and asserts the connection outright. <em>Must reflect</em> is the top of the certainty scale and claims the evidence leaves no other explanation standing, which is the last thing a writer discussing a correlation should say.' },

        { id: 't5l1s2-4', type: 'cloze', tag: 'dist-tentative', level: 'B2+',
          passage: 'The city\'s new cycle lanes have been open for eleven weeks and the first counts are in. Traffic on the two monitored corridors is down by nine per cent, and cycle journeys along them are up by roughly a third.\n\nEleven weeks is not a season, however, and the figures ___(1)___ be read with some care. The fall in motor traffic ___(2)___ reflect the lanes themselves, but it may equally reflect the school holidays, which began in the same week. A full year of counts would settle the question; until then the strongest thing a report can honestly say is that the scheme looks promising.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['must', 'can\'t', 'might', 'will'],
          answer: 2,
          why: 'The next clause immediately offers a rival explanation with <em>may equally</em>, so the writer is holding two possibilities open side by side, and <em>might</em> does that without preferring either. <em>Must</em> would claim the evidence has already ruled out the holiday explanation that the same sentence goes on to raise. <em>Can\'t</em> denies that the lanes had any effect at all, which contradicts the paragraph. <em>Will</em> is confident prediction or deduction and is far too strong for eleven weeks of counts.' },

        { id: 't5l1s2-5', type: 'spot', tag: 'dist-tentative', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['A single term of attendance data', 'might possibly perhaps indicate', 'that the revised timetable', 'has reduced late arrivals.'],
          answer: 1,
          fix: 'might indicate',
          why: '<em>Might</em>, <em>possibly</em> and <em>perhaps</em> all mark the same single step back, and stacking them does not make the claim more careful — it makes the writer sound unwilling to commit to anything at all. One hedge carries the whole meaning. The other three parts are correct: a single term genuinely is thin evidence, so a hedge is earned here, and the noun phrase and the present perfect are both well formed.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't5l1s3', name: 'Telling the readings apart in context', cefr: 'B2+',
      theory: {
        key: 'The form is ambiguous; the context is not. Four things decide which distance is meant: the tense of the surrounding clause, a past time adverbial, the speech act, and whether an <em>if</em> is in view.',
        body: [
          'Because one morphology serves three axes, the reading is never in the word. It is in what stands around the word, and four cues do almost all of the work. Learning them as a checklist converts a guess into a procedure, which is exactly what a reading comprehension question is testing at C1.',
          '<strong>Cue one and two: the tense around it, and any past time adverbial.</strong> <em>When we lived closer</em>, <em>in those days</em>, <em>before the bypass opened</em>, <em>as a child</em> — if the frame is past, the distance is time, and the modal is doing the ordinary work of past ability, past permission or past habit. This cue is the strongest of the four, because the other two axes cannot combine with a past adverbial at all.',
          '<strong>Cue three: the speech act.</strong> Second person, a question, and something being asked of the hearer means the distance is social. The give-away is that the sentence is not answerable as a question about ability: nobody replies to <em>Could you check the reference?</em> with <em>Yes, I could</em>. A first-person offer works the same way — <em>Could I give you a hand?</em> is not a question about the speaker\'s capabilities.',
          '<strong>Cue four: an <em>if</em> in view, stated or unstated.</strong> <em>If the grant came through, we might open a second branch</em> is plainly unreal. So, on inspection, is <em>that would take three days</em>, which carries an unspoken <em>if we did it</em>. And where no cue is present at all, the default is likelihood, because a speaker with no frame around them is talking about how things stand now: <em>The missing folder could still be in the archive.</em>'
        ],
        simple: [
          'Four things tell you which distance a remote modal means. <strong>1.</strong> Is the clause around it in the past? <strong>2.</strong> Is there a past time phrase? Either one means distance in time.',
          '<strong>3.</strong> Is it a question to the listener asking for something? That means politeness. The test: nobody answers <em>Could you check this?</em> with <em>Yes, I could</em>.',
          '<strong>4.</strong> Is there an <em>if</em>, said or unsaid? That means unreality. And if there is no cue at all, it is a guess about now.'
        ],
        examples: [
          { s: 'Until the new depot opened, we <b>could</b> park behind the office.', g: 'a past time clause: the distance is in time.' },
          { s: '<b>Could</b> you check the reference on page twelve?', g: 'a question asking something of the hearer: the distance is social.' },
          { s: 'If the council released the land, prices <b>could</b> fall.', g: 'an if in view: the distance is in likelihood.' },
          { s: 'The missing folder <b>could</b> still be in the archive.', g: 'no cue at all, so the default: a guess about how things are now.' }
        ]
      },
      items: [
        { id: 't5l1s3-1', type: 'sort', tag: 'dist-read', level: 'B2+',
          stem: 'Put each sentence in the box for the kind of distance its remote modal is marking.',
          bins: [
            { key: 'time', label: 'Distance in time', hint: 'the event sits in past time' },
            { key: 'like', label: 'Distance in likelihood', hint: 'a guess, or something unreal' },
            { key: 'pol', label: 'Distance in social space', hint: 'politeness, a smaller imposition' }
          ],
          items: [
            { text: 'Before the flood defences were built, the market <em>would</em> close for a week every October.', bin: 'time' },
            { text: '<em>Would</em> you mind turning the fan down a little?', bin: 'pol' },
            { text: 'The noise <em>could</em> be coming from the ventilation shaft.', bin: 'like' },
            { text: 'I <em>could</em> read a contour map long before I learned to drive.', bin: 'time' },
            { text: 'If the entrance fee were waived, more families <em>might</em> apply.', bin: 'like' },
            { text: '<em>Might</em> I ask what the deposit covers?', bin: 'pol' }
          ],
          why: 'Every item carries its cue on its face. The two time items are pinned by a past clause — <em>before the flood defences were built</em>, <em>before I learned to drive</em>. The two social items are questions that ask the hearer for something, and neither can be answered as a question about ability. Of the two likelihood items, one has an explicit <em>if</em> and the other has no frame at all, which is the default case: a speaker with nothing around them is guessing about now.' },

        { id: 't5l1s3-2', type: 'choose', tag: 'dist-read', level: 'B2+',
          stem: 'Read: <em>The technician could open the cabinet.</em> Which continuation forces the <strong>past-time</strong> reading?',
          options: [
            'It is worth asking him before we call a locksmith.',
            'He is the only person on the site with a master key.',
            'If the supplier ever sent us the override code, that is.',
            'He kept a master key in his locker for the whole of that year.'
          ],
          answer: 3,
          why: 'Only the second continuation supplies a past frame — <em>kept</em> and <em>that year</em> — and once that frame is in place the modal can only be reporting what was possible then. The first turns the sentence into a suggestion, so the distance becomes social and the technician has not opened anything yet. The third puts an <em>if</em> in view and makes the whole thing unreal. The fourth states in the present who holds the key, so the capacity is alive now and <em>could</em> reads as a present possibility rather than a past fact.' },

        { id: 't5l1s3-3', type: 'judge', tag: 'dist-read', level: 'B2+',
          given: 'Could you have a look at the projector before the assembly?',
          stem: 'The speaker is asking about the listener\'s ability.',
          answer: 1,
          why: 'False. The frame is a request: second person, a question, a deadline, and something the speaker wants done. Nobody answers it with <em>Yes, I could</em> — the expected reply is agreement or an action, which shows the ability of the listener is being taken for granted rather than enquired about. The remoteness is social, not epistemic. It is not <em>Can\'t tell</em> either, because the speech-act frame settles the reading on its own.' },

        { id: 't5l1s3-4', type: 'choose', tag: 'dist-read', level: 'B2+',
          stem: 'In which sentence is <em>might</em> a guess about the <strong>present</strong>?',
          options: [
            '<em>Might</em> I suggest a short break before the next session?',
            'The delegates were told that the session <em>might</em> overrun.',
            'The queue outside the hall <em>might</em> be for the afternoon lecture.',
            'If the second speaker withdrew, the session <em>might</em> finish early.'
          ],
          answer: 2,
          why: 'In option 3 there is no past frame, no <em>if</em> and nothing asked of anyone: the speaker is looking at a queue now and offering an explanation for it. Option 1 is a request for permission to speak, made smaller by the remote form. Option 2 sits inside a past-tense reporting frame, so <em>might</em> is the backshifted form of <em>may</em> and belongs to what was said then. Option 4 has an unreal <em>if</em>, so its <em>might</em> describes a world in which the second speaker has withdrawn — which has not happened.' },

        { id: 't5l1s3-5', type: 'spot', tag: 'dist-read', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['When the language lab was new,', 'you could book a booth online,', 'but these days you might', 'have needed to queue from seven.'],
          answer: 3,
          fix: 'need to queue from seven.',
          why: '<em>These days</em> fixes the second half in present time, so the remote form has to be read as a guess about how things are now, and a guess about now takes a plain infinitive: <em>might need</em>. <em>Might have needed</em> pushes the proposition back into past time and flatly contradicts the adverbial in front of it. The first two parts are correct and in fact model the rule: the past clause <em>when the language lab was new</em> licenses the past-time <em>could</em> that follows it.' }
      ]
    }
  ],
  check: {
    id: 't5l1ck', name: 'Stage Check · The past form that is not past',
    items: [

      { id: 't5l1ck-1', type: 'choose', tag: 'dist-core', level: 'B2+',
        stem: 'Which sentence uses a remote form for <strong>social distance</strong> rather than time or likelihood?',
        options: [
          'The archive <em>might</em> hold a copy of the original plan.',
          '<em>Would</em> you be able to look at the figures before Thursday?',
          'Before the depot moved, the buses <em>would</em> run twenty minutes late.',
          'If the ferry were running, we <em>could</em> be there by noon.'
        ],
        answer: 1,
        why: 'Option 2 is a question addressed to the hearer asking them for something with a deadline attached, which is the signature of the social axis; the remote <em>would</em> is there to make the asking smaller. Option 1 is a guess about the archive as it stands now. Option 3 is past habit, and the past clause <em>before the depot moved</em> is what fixes it there. Option 4 has an explicit unreal condition, so its distance is in likelihood.' },

      { id: 't5l1ck-2', type: 'spot', tag: 'dist-read', level: 'B2+',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['Could you send me the minutes', 'of last Tuesday\'s meeting', 'yesterday evening,', 'because I was unable to attend?'],
        answer: 2,
        fix: 'this evening,',
        why: 'A polite <em>could</em> asks for something that has not happened yet, so it cannot be dated to a time that is already gone; the request reading and a past-time adverbial cannot share one clause. Replace it with a time still to come. The other parts are all sound: <em>of last Tuesday\'s meeting</em> dates the minutes rather than the sending, and <em>was unable to attend</em> is correctly in past time because the meeting really is over.' },

      { id: 't5l1ck-3', type: 'equiv', tag: 'dist-tentative', level: 'B2+',
        given: 'I\'d have thought the deposit was refundable.',
        stem: 'Which sentence says the same thing?',
        options: [
          'I expected the deposit to be refundable, and I am surprised to hear otherwise.',
          'I am certain the deposit is refundable.',
          'I thought about the deposit and decided that it was refundable.',
          'If I had thought about it, the deposit would have been refundable.'
        ],
        answer: 0,
        why: '<em>I\'d have thought</em> is a fixed softening formula: it reports a mild expectation and signals that the speaker has just been contradicted, which is why it almost always follows bad news. Option 2 removes the hedge and turns a mild expectation into certainty. Option 3 reads <em>would have</em> as a plain past narrative, which that form cannot be. Option 4 reads it as a third conditional and so makes the refund depend on whether the speaker did any thinking.' },

      { id: 't5l1ck-4', type: 'cloze', tag: 'dist-core', level: 'B2+',
        passage: 'When the old school library was still housed in the wooden building, pupils ___(1)___ take books home for a month at a time, and nobody counted them in or out. The new system logs every loan, and the limit is a fortnight.\n\nThe librarian is not sentimental about the change. Losses under the old arrangement, she says, ___(2)___ easily have run to a hundred volumes a year, and nobody will ever know for certain.',
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['can', 'would be able to', 'might', 'could'],
        answer: 3,
        why: 'The clause is anchored in past time by <em>when the old school library was still housed</em>, so the modal steps back with it and <em>could</em> reports what the rules then allowed. <em>Can</em> leaves the permission in the present and clashes with a frame that plainly belongs to an earlier period. <em>Might</em> would turn a remembered fact into a guess about what pupils may have been allowed to do. <em>Would be able to</em> forces a conditional reading — able to if something else happened — and nothing in the paragraph supplies the condition.' },

      { id: 't5l1ck-5', type: 'build', tag: 'dist-tentative', level: 'B2+',
        stem: 'Put the words in order to make a softened claim.',
        tiles: ['would', 'I', 'say', 'figure', 'the', 'optimistic', 'is'],
        solution: 'I would say the figure is optimistic',
        alt: ['the figure I would say is optimistic'],
        why: '<em>Would</em> is a modal, so it stands first in its verb phrase and takes a bare infinitive: <em>I would say</em>. That frame softens the <strong>act of asserting</strong>, so the claim it introduces follows it whole and unchanged, with its own present-tense verb: <em>the figure is optimistic</em>. Students often reach for <em>I say would</em>, which puts a modal after a lexical verb, or for <em>I would say the figure would be optimistic</em>, which hedges the same claim twice.' },

      { id: 't5l1ck-6', type: 'choose', tag: 'dist-read', level: 'B2+',
        stem: 'A colleague writes, with no other context: <em>We could run the trial in Chiang Mai.</em> What is the reading?',
        options: [
          'A report of what was possible at some time in the past.',
          'A suggestion — one option open to the team.',
          'A polite request addressed to the reader.',
          'A statement that the trial is impossible anywhere else.'
        ],
        answer: 1,
        why: 'With no past adverbial, no past-tense frame and no <em>if</em>, the remote form falls back to the likelihood axis; with a first-person-plural subject and an action verb, that comes out as an option tentatively put on the table. Option 1 would need a past frame to license it. Option 3 would need a second-person subject and a question. Option 4 reverses the grammar: a remote modal opens one possibility, it does not close the others off.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T5.levels.push({
  id: 't5l2', n: 2, name: 'Distance as politeness', cefr: 'B2+',
  blurb: 'The same remoteness, turned on the hearer: how English grades a request, an offer and a piece of advice to fit the cost and the relationship.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't5l2s1', name: 'Requests: can, could, would you mind', cefr: 'B2+',
      theory: {
        key: 'A request costs the hearer something, and the remote form is how English pays for it: the further the form stands from the plain present, the smaller the imposition looks.',
        body: [
          'Asking somebody to do something takes their time, their attention or their goodwill. English reduces the apparent size of that debt by increasing the grammatical distance between the asking and the plain, present, face-to-face demand. The dial runs roughly: <em>Open the window.</em> &rarr; <em>Can you open the window?</em> &rarr; <em>Could you open the window?</em> &rarr; <em>Would you mind opening the window?</em> &rarr; <em>I was wondering whether you might be able to open the window.</em> Not one word of the content changes across those five. Only the distance does.',
          'The top rungs are worth taking apart, because they are built out of exactly the mechanism this stage teaches. <em>Could</em> is simply the remote <em>can</em>. <em>Would you mind + -ing</em> goes further still by not asking the hearer to do anything at all: it asks whether an <strong>objection</strong> exists. That is why the co-operative answer is <em>No, not at all</em>, and why <em>Yes, I would</em> — which learners produce constantly, meaning to agree — is a refusal. Note also that <em>mind</em> is an ordinary lexical verb, so it takes a gerund: <s>would you mind to open</s> is the Thai verb-plus-verb pattern showing through.',
          'Which rung you want is decided by two things and two things only: <strong>how large the imposition is</strong> and <strong>how much social distance there already is</strong> between you and the hearer. It is not decided by how polite you would like to seem in general. A big favour asked of a stranger goes high on the dial; a trivial favour asked of a friend stays at the bottom.',
          'So there are two errors, not one. <strong>Under-remoteness</strong> is the familiar one — <em>Give me the marked scripts</em> to a head of department, or <em>can</em> used indiscriminately for every request regardless of who is being asked. But <strong>over-remoteness</strong> is just as wrong: <em>I was wondering whether you might possibly be able to pass the salt</em>, said to a sibling, does not sound polite, it sounds sarcastic or suddenly cold. Every rung on this dial is perfect English. What is at stake here is register, not grammar.'
        ],
        simple: [
          'The bigger the favour, and the further away the person socially, the further up the dial you go: <em>Can you</em> &rarr; <em>Could you</em> &rarr; <em>Would you mind</em> &rarr; <em>I was wondering whether you might</em>.',
          '<em>Would you mind opening it?</em> asks whether you object, so agreeing means saying <strong>no</strong>: <em>No, not at all.</em> And <em>mind</em> takes an <em>-ing</em> form, never <em>to</em>.',
          'Too far up the dial is also a mistake. Being very formal with a close friend about a tiny favour sounds sarcastic or cold, not polite.'
        ],
        examples: [
          { s: '<b>Can</b> you send it again?', g: 'neutral, for a colleague you know well and a tiny favour.' },
          { s: '<b>Could</b> you send it again?', g: 'one step back; the safe default for almost any workplace request.' },
          { s: '<b>Would you mind</b> sending it again?', g: 'asks whether an objection exists, so it imposes least.' },
          { s: '<s>Send me the marked scripts.</s>', g: 'grammatical, but to a head of department it reads as an order.' }
        ]
      },
      items: [
        { id: 't5l2s1-1', type: 'choose', tag: 'dist-request', level: 'B2+',
          stem: 'You have met a lecturer twice. You want her to write you a reference before the end of the month — several hours of her time, and she owes you nothing. Which request is pitched for the size of the favour and the distance between you?',
          options: [
            'Write me a reference before the end of the month.',
            'Can you write me a reference before the end of the month?',
            'I was wondering whether you might be able to write me a reference before the end of the month.',
            'You might want to write me a reference before the end of the month.'
          ],
          answer: 2,
          why: 'Two things set the rung, and both point the same way here: the imposition is large and the hearer barely knows you, which puts the asking at the top of the dial where <em>I was wondering whether you might be able to</em> sits. Option 1 is a bald imperative and issues an instruction to somebody under no obligation at all. Option 2 is perfectly good English, but <em>can you</em> is the rung for a small favour between people who work together daily, and it makes several hours of somebody else\'s time sound like a passing errand. Option 4 is not a request but a suggestion, and it implies the reference is something she would want to do for reasons of her own. All four are grammatical; only the third is pitched right.' },

        { id: 't5l2s1-2', type: 'gap', tag: 'dist-request', level: 'B2+',
          blank: '(2)',
          lines: [
            { who: 'Ploy', text: 'The projector in room four has stopped again. ___(1)___ you have time to look at it before my two o\'clock class?' },
            { who: 'Anan', text: 'I am up on the roof until one. ___(2)___ you mind asking Krit instead? He replaced the lamp last term.' }
          ],
          stem: 'Choose the best option for gap (2).',
          options: ['Would', 'Could', 'Should', 'Might'],
          answer: 0,
          why: 'The frame is fixed: <em>Would you mind</em> plus an <em>-ing</em> form is the formula, and it is also the right rung here, because Anan is handing back a job he cannot do and that is a larger imposition than the one he was offered. <em>Could you mind asking</em> and <em>Might you mind asking</em> are not English at all, since <em>mind</em> in this sense only takes the <em>would</em> frame. <em>Should you mind asking</em> is a conditional clause, not a request, and would leave Ploy waiting for the rest of the sentence.' },

        { id: 't5l2s1-3', type: 'choose', tag: 'dist-request', level: 'B2+',
          stem: 'Somebody asks you: <em>Would you mind moving your bag?</em> You are happy to move it. What do you say?',
          options: ['Yes, I would.', 'No, not at all.', 'Yes, I do mind.', 'Yes, please.'],
          answer: 1,
          why: 'The question asks whether an objection exists, so co-operating means denying that one does: <em>No, not at all</em>, usually said while already moving the bag. Options 1 and 3 both assert that an objection does exist, which is a refusal — and it is the commonest and most awkward error learners make with this formula, because the intention behind <em>yes</em> is agreement. Option 4 answers a different kind of question altogether: <em>yes, please</em> accepts an offer, and nothing has been offered.' },

        { id: 't5l2s1-4', type: 'spot', tag: 'dist-request', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Would you mind to check', 'the delivery address on the invoice', 'before the courier collects it', 'this afternoon?'],
          answer: 0,
          fix: 'Would you mind checking',
          why: '<em>Mind</em> here is an ordinary lexical verb, not a modal, and this sense of it takes a gerund: <em>would you mind checking</em>. The <em>to</em> is the verb-plus-verb pattern carried over from Thai, and it is the same slip that produces <s>must to approve</s>. The other three parts are correct, and the register is well judged: checking an address before a collection is a real favour, so the most remote request frame is the right one to reach for.' },

        { id: 't5l2s1-5', type: 'equiv', tag: 'dist-request', level: 'B2+',
          given: 'Would you mind if I took the earlier train?',
          stem: 'Which sentence says the same thing?',
          options: [
            'Is it all right with you if I take the earlier train?',
            'Would you like to take the earlier train?',
            'Do you mind that I took the earlier train?',
            'You should take the earlier train.'
          ],
          answer: 0,
          why: 'This frame asks permission for the <strong>speaker\'s own</strong> act, and the past-form <em>took</em> is a remoteness marker, not a past tense — which is why the journey being discussed is still to come. Option 2 turns it into an offer aimed at the hearer, so the wrong person ends up on the train. Option 3 reads <em>took</em> as a genuine past and so complains about something already done. Option 4 is advice, which imposes on the hearer instead of asking anything of them.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't5l2s2', name: 'Offers and suggestions: shall I, would you like, you might want to', cefr: 'B2+',
      theory: {
        key: 'An offer costs the speaker and a suggestion costs the hearer their autonomy, so English grades each with the same dial: <em>Shall I…?</em> and <em>Would you like me to…?</em> for offers, <em>You could…</em> and <em>You might want to…</em> for advice.',
        body: [
          'Three speech acts share this territory and they are not the same thing. A <strong>request</strong> takes something from the hearer. An <strong>offer</strong> puts the speaker\'s own time or labour on the table. A <strong>suggestion</strong> tells the hearer what to do. Each carries a different kind of cost, so each takes the dial differently, and choosing the frame for the wrong act is the fastest way to sound odd.',
          'For offers, the neutral English form is <em>Shall I…?</em> — one of the very few places where <em>shall</em> is still ordinary rather than archaic or legal. Step back from it and you get <em>Would you like me to…?</em>, which is more remote and therefore more careful, suitable for somebody you do not know. Step sideways and you get <em>I could…</em>, which offers without quite committing the speaker, leaving the hearer free to decline without refusing anything.',
          'Suggestions run on the same principle but the cost lands elsewhere: telling an adult what to do encroaches on their judgement. Hence the soft frames — <em>You could try…</em>, <em>You might want to…</em>, <em>It might be worth -ing</em>, <em>Have you thought of -ing?</em> By contrast <em>You should</em> and <em>You must</em> carry real authority, and <em>You had better</em> carries a warning: do this or something bad follows. Using an authority form where you hold no authority is the most common register error in peer feedback and in student writing generally.',
          '<em>You could always…</em> deserves its own line. The <em>always</em> marks the suggestion as a <strong>fallback</strong> — something available if nothing better works — which is why it lands as helpful rather than pushy, and why it so often follows a sentence about something going wrong: <em>If the projector fails again, you could always borrow the portable screen.</em>'
        ],
        simple: [
          'An <strong>offer</strong> means you do the work: <em>Shall I…?</em> is normal, <em>Would you like me to…?</em> is more careful, <em>I could…</em> is the softest.',
          'A <strong>suggestion</strong> means the other person does it, so soften it: <em>You could try…</em>, <em>You might want to…</em>, <em>It might be worth…</em>.',
          'Keep <em>You should</em> and <em>You must</em> for when you really do have authority, and <em>You had better</em> for a genuine warning. A classmate does not have authority over another classmate\'s essay.'
        ],
        examples: [
          { s: '<b>Shall I</b> carry the projector down for you?', g: 'the ordinary English offer; the cost falls on the speaker.' },
          { s: '<b>Would you like me to</b> forward the slides as well?', g: 'the same offer, more remote and so more careful.' },
          { s: 'You <b>might want to</b> check the ventilation figures first.', g: 'advice softened so that it does not sound like an instruction.' },
          { s: '<s>You must rewrite your conclusion.</s>', g: 'correct English, but a classmate reviewing a draft has no authority to say it.' }
        ]
      },
      items: [
        { id: 't5l2s2-1', type: 'choose', tag: 'dist-offer', level: 'B2+',
          stem: 'Two students are swapping essay drafts before submission, neither with any standing over the other\'s work. One of them thinks the other\'s conclusion is too long. Which comment fits the relationship?',
          options: [
            'You must cut the conclusion.',
            'You had better cut the conclusion.',
            'You might want to cut the conclusion.',
            'Cut the conclusion.'
          ],
          answer: 2,
          why: 'One peer advising another holds no authority, so the advice has to be offered rather than issued, and <em>you might want to</em> is the standard remote frame for exactly that. Option 1 claims an obligation the speaker is in no position to impose. Option 2 carries a warning — do it or something bad follows — which is out of scale for a draft. Option 4 is a bald imperative, fine between close friends but an instruction in form. None of the four is a grammar error; the choice is entirely social.' },

        { id: 't5l2s2-2', type: 'sort', tag: 'dist-offer', level: 'B2+',
          stem: 'Decide whether each sentence is an offer or a suggestion.',
          bins: [
            { key: 'off', label: 'An offer', hint: 'the speaker takes on the work' },
            { key: 'sug', label: 'A suggestion', hint: 'the hearer is the one who acts' }
          ],
          items: [
            { text: '<em>Shall I</em> ring the supplier for you?', bin: 'off' },
            { text: 'You <em>could always</em> ring the supplier yourself.', bin: 'sug' },
            { text: '<em>Would you like me to</em> draft the reply?', bin: 'off' },
            { text: 'You <em>might want to</em> draft the reply tonight.', bin: 'sug' },
            { text: 'I <em>could</em> take the samples down to the lab this afternoon.', bin: 'off' },
            { text: 'It <em>might be worth</em> taking the samples down yourself.', bin: 'sug' }
          ],
          why: 'The test is simply who ends up doing the work. <em>Shall I</em>, <em>Would you like me to</em> and <em>I could</em> all put the speaker\'s own time on the table, and all three could be answered with <em>yes, please</em>. <em>You could always</em>, <em>You might want to</em> and <em>It might be worth</em> all end with the hearer acting, and none of them can be answered that way. The remoteness is doing the same softening job in both columns; what changes is where the cost lands.' },

        { id: 't5l2s2-3', type: 'choose', tag: 'dist-offer', level: 'B2+',
          stem: 'A visitor you were introduced to a minute ago is standing while everyone else sits, and you want to offer to fetch her a chair yourself. Which sentence does that?',
          options: [
            'Would you like me to get you a chair?',
            'You could always get yourself a chair from the next room.',
            'Would you mind getting yourself a chair?',
            'You might want to find yourself a chair.'
          ],
          answer: 0,
          why: 'Only option 1 puts the speaker\'s own time on the table: the remote <em>would</em>, and a frame that asks about the visitor\'s wishes rather than announcing the speaker\'s action, make it an offer and a carefully pitched one for somebody met a minute ago. The other three are all perfectly grammatical and all leave the visitor doing the fetching. Option 2 is a fallback suggestion, which sends a guest off to look after herself. Option 3 is a request, so the person with the problem is also the person asked to solve it. Option 4 is advice, and advising a visitor to find her own chair is the opposite of what the situation calls for.' },

        { id: 't5l2s2-4', type: 'gap', tag: 'dist-offer', level: 'B2+',
          blank: '(1)',
          lines: [
            { who: 'Mali', text: 'The delegates arrive at nine and the room is still stacked with chairs. ___(1)___ I come in early and clear it?' },
            { who: 'Wichai', text: 'That would be a great help. And you ___(2)___ want to check the air conditioning while you are in there.' }
          ],
          stem: 'Choose the best option for gap (1).',
          options: ['Shall', 'Will', 'Might', 'Would'],
          answer: 0,
          why: '<em>Shall I…?</em> is the standard English way of putting your own labour on the table, and Wichai\'s reply — <em>that would be a great help</em> — confirms that an offer is what he has just been given. <em>Will I come in early?</em> asks for a prediction about the speaker\'s own future, which nobody but the speaker could supply. <em>Might I…?</em> asks Wichai for permission, and Mali needs nobody\'s permission to come in early; a request for permission is not what <em>that would be a great help</em> answers. <em>Would I…?</em> is not a usable offer frame without a condition attached to it.' },

        { id: 't5l2s2-5', type: 'judge', tag: 'dist-offer', level: 'B2+',
          given: 'You could always borrow the portable screen from the staff room.',
          stem: 'The speaker is presenting this as a fallback rather than the best option.',
          answer: 0,
          why: 'True. <em>Could always</em> is a fixed suggestion frame in which <em>always</em> marks the option as one that remains available if nothing better works — which is precisely why it sounds helpful rather than pushy. Strip the <em>always</em> out and <em>you could borrow the portable screen</em> becomes a neutral suggestion with no ranking attached to it. It is not <em>Can\'t tell</em>, because the fallback reading is carried by the frame itself and does not depend on anything outside the sentence.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't5l2s3', name: 'Softening in speech and in email', cefr: 'B2+',
      theory: {
        key: 'Writing has no tone of voice to carry the politeness, so the distance has to be built into the grammar — which is why professional email runs on remote forms.',
        body: [
          'In speech a request is carried by a great deal more than its words: intonation, a smile, the chance to soften something the moment it lands badly. An email has none of that. It is read by somebody you cannot see, at a moment you did not choose, sometimes forwarded to somebody you never wrote to. Everything that prosody would have done has to be done by the grammar instead, and that is the whole reason professional writing looks the way it does.',
          'The workhorses are all built out of this stage\'s mechanism: <em>I was wondering whether you might…</em>, <em>It would be helpful if…</em>, <em>Would it be possible to…?</em>, <em>I would be grateful if you could…</em>, <em>Perhaps we could…</em>. Each one puts something between the writer and the demand — an extra clause, a remote modal, or both.',
          'Look closely at <em>I was wondering whether</em>, because it is the most remote frame in ordinary use and it works on two axes at once. The past progressive pushes the very act of asking into the past and into the background, as though the request were something the writer happened to be turning over rather than something they are doing to you now; and <em>might</em> then holds the hearer\'s response at a distance too. That is remoteness applied to the speech act itself, which is as far back as English goes.',
          'There is a third failure mode here, beyond under- and over-remoteness: <strong>distance used to avoid saying anything</strong>. A message that hedges the content as well as the asking leaves the reader unsure what is wanted, from whom, or by when — and an unanswerable email is not polite, it is expensive. The rule is simple: <strong>be remote about the asking and exact about the thing asked.</strong> <em>I would be grateful if you could confirm the room numbers by Wednesday</em> does both.'
        ],
        simple: [
          'Email has no tone of voice, so the politeness has to be in the grammar. That is why business writing is full of <em>would</em>, <em>could</em> and <em>might</em>.',
          'The most useful frames: <em>I was wondering whether you might…</em>, <em>It would be helpful if…</em>, <em>I would be grateful if you could…</em>, <em>Would it be possible to…?</em>',
          'Be vague about the <strong>asking</strong>, never about the <strong>thing asked</strong>. Name the item and name the date, or the reader cannot act on your message at all.'
        ],
        examples: [
          { s: '<b>I was wondering whether</b> you might have time to look at the draft.', g: 'the asking is pushed into the past and into the background.' },
          { s: '<b>It would be helpful if</b> the figures came in a single file.', g: 'the requirement is stated without naming anyone who must meet it.' },
          { s: '<b>I would be grateful if you could</b> confirm by Friday.', g: 'remote frame, exact deadline: distance on the asking, not on the content.' },
          { s: '<s>Send the figures in a single file.</s>', g: 'clear, but to an external partner it reads as an instruction from someone with authority over them.' }
        ]
      },
      items: [
        { id: 't5l2s3-1', type: 'choose', tag: 'dist-soften', level: 'B2+',
          stem: 'You are emailing a partner organisation to ask for data your team needs. Which opening is pitched correctly?',
          options: [
            'You must send us the raw counts by Friday.',
            'I was wondering whether you might be able to let us have the raw counts by Friday.',
            'We were wondering whether it might conceivably be possible for somebody at your end to consider letting us have some of the data at some stage.',
            'We need the raw counts by Friday.'
          ],
          answer: 1,
          why: 'Option 2 is remote in the asking and exact in the content: a named item and a named date, wrapped in the most distant request frame English has. Option 1 imposes an obligation, and over a partner organisation you have no authority to impose one. Option 4 states your need as though your need created their obligation. Option 3 is the third failure — so much distance that the reader cannot tell what is wanted, by when, or from whom, and therefore cannot act.' },

        { id: 't5l2s3-2', type: 'cloze', tag: 'dist-soften', level: 'B2+',
          passage: 'Thank you for sending the parking survey; it arrived in good time and we have already started running the model.\n\nTwo of the tables, however, have come through without their headings. We ___(1)___ be grateful if somebody could send the original spreadsheet, since we would rather not guess which column is which.\n\nWe are also short of the evening counts. It ___(2)___ be helpful if those came as a separate file, as our model reads them on a different cycle.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['will', 'must', 'would', 'can'],
          answer: 2,
          why: '<em>It would be helpful if…</em> is the standard remote frame for asking somebody to do something you cannot require of them, and the <em>came</em> that follows is the same remoteness carried through the conditional clause. <em>It will be helpful</em> drops the distance and states as settled fact what the reader is going to do for you. <em>It must be helpful</em> is a deduction about how useful a separate file is, which is not the point being made. <em>It can be helpful</em> makes a general claim about separate files rather than a request about these particular ones.' },

        { id: 't5l2s3-3', type: 'choose', tag: 'dist-soften', level: 'B2+',
          stem: 'Which sentence is remote about the <strong>asking</strong> but exact about the <strong>thing asked</strong>?',
          options: [
            'It would be good to hear from you about the timetable at some point.',
            'I would be grateful if you could confirm the room numbers by Wednesday.',
            'Confirm the room numbers by Wednesday.',
            'I was rather hoping somebody might eventually be in a position to tell us something about the rooms.'
          ],
          answer: 1,
          why: 'Option 2 puts the distance exactly where it belongs — <em>I would be grateful if you could</em> — and then names the item and the deadline, so the reader knows what to do and when. Option 1 hedges the content as well as the frame, so nothing in particular is actually requested. Option 3 is exact but carries no distance at all and reads as an instruction. Option 4 is remote in three separate places and specifies nothing, which leaves the reader with a pleasant sentence and no action.' },

        { id: 't5l2s3-4', type: 'spot', tag: 'dist-soften', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['I was wondering whether you', 'might to be able', 'to send us the updated floor plan', 'before the end of the week.'],
          answer: 1,
          fix: 'might be able',
          why: 'A modal takes a bare infinitive, so <em>might be able to</em> is the only possible shape: the <em>to</em> belongs to <em>able to</em>, not to <em>might</em>. Inserting a second one is the verb-plus-verb pattern showing through from Thai. Everything else is correct and in fact well judged — <em>I was wondering whether</em> pushes the asking into the background, and the request names both the item and the deadline, so the reader can act on it.' },

        { id: 't5l2s3-5', type: 'order', tag: 'dist-soften', level: 'B2+',
          stem: 'Put the four sentences in the order that makes a coherent email.',
          items: [
            'Thank you for arranging the site visit on Tuesday; the group found it genuinely useful.',
            'One thing came up afterwards that I was wondering whether you might be able to help with.',
            'Several of the students asked whether the ventilation readings from the plant room could be shared.',
            'If that would be possible, a single spreadsheet before the end of term would be ideal.'
          ],
          why: 'A softened request email moves through four stages: thanks, a signal that something is coming, the specific thing wanted, and then the practical terms. Sentence 2 cannot precede sentence 1 because <em>afterwards</em> refers back to the visit. Sentence 3 supplies the <em>one thing</em> that sentence 2 has just announced, so it cannot stand before it. Sentence 4 opens with <em>if that would be possible</em>, whose <em>that</em> can only point at the request in sentence 3, which fixes it last.' }
      ]
    }
  ],
  check: {
    id: 't5l2ck', name: 'Stage Check · Distance as politeness',
    items: [

      { id: 't5l2ck-1', type: 'choose', tag: 'dist-request', level: 'B2+',
        stem: 'Your closest friend is sitting by the window on a hot bus. Which is the natural thing to say?',
        options: [
          'I was wondering whether you might possibly be able to open the window.',
          'Would you mind if I asked you to consider opening the window?',
          'Can you open the window?',
          'Might I trouble you to open the window?'
        ],
        answer: 2,
        why: 'A tiny favour asked of somebody you are close to belongs at the near end of the dial, and <em>can you</em> is exactly that. Options 1 and 4 put several steps of distance between two friends, and that distance is not read as politeness — it is read as sarcasm, or as something having suddenly gone wrong between you. Option 2 wraps a request inside a request about a request, which is over-remote and also faintly comic. Every option here is grammatical; only one is socially right.' },

      { id: 't5l2ck-2', type: 'equiv', tag: 'dist-offer', level: 'B2+',
        given: 'Would you like me to photocopy the handouts?',
        stem: 'Which sentence says the same thing?',
        options: [
          'Shall I photocopy the handouts?',
          'Would you photocopy the handouts?',
          'You could photocopy the handouts.',
          'Do you like photocopying handouts?'
        ],
        answer: 0,
        why: 'Both are offers — the speaker does the photocopying — and they differ only in how far up the dial they sit, <em>Shall I</em> being the neutral rung and <em>Would you like me to</em> a more remote one. Option 2 moves the work onto the hearer and so converts the offer into a request. Option 3 is a suggestion: the hearer does it, and is being told to. Option 4 asks about the hearer\'s tastes in photocopying, which is a question about them rather than an offer of help.' },

      { id: 't5l2ck-3', type: 'choose', tag: 'dist-soften', level: 'B2+',
        stem: 'A head of department is writing to all staff about a compulsory marking deadline. Which sentence is <strong>wrong</strong> for the job?',
        options: [
          'All marks must be entered by 5 p.m. on Friday.',
          'Please enter all marks by 5 p.m. on Friday.',
          'I was wondering whether you might be able to enter your marks at some point on Friday.',
          'Marks are to be entered by 5 p.m. on Friday.'
        ],
        answer: 2,
        why: 'Remoteness reduces the force of what is said, and here the force <strong>is</strong> the message: the deadline is not negotiable and the writer genuinely holds the authority. Option 3 dresses a requirement up as a favour and will produce late marks. Options 1 and 4 are both proper rule-language, the second more formal; option 2 is the ordinary courteous instruction. Distance is not a synonym for good manners — it is a tool for reducing an imposition, and a compulsory deadline is not an imposition the writer is free to reduce.' },

      { id: 't5l2ck-4', type: 'build', tag: 'dist-request', level: 'B2+',
        stem: 'Put the words in order to make a polite request.',
        tiles: ['mind', 'would', 'waiting', 'you', 'a', 'few', 'minutes'],
        solution: 'would you mind waiting a few minutes',
        why: '<em>Would you mind</em> is a fixed frame: the remote modal first, then the subject, then the lexical verb <em>mind</em>, which in this sense takes an <em>-ing</em> form. Two wrong versions are common. <em>Would you mind to wait</em> puts an infinitive after a verb that does not take one, and <em>Do you mind waiting</em>, while possible English, is a rung nearer and loses the remoteness that the <em>would</em> is there to supply.' },

      { id: 't5l2ck-5', type: 'cloze', tag: 'dist-soften', level: 'B2+',
        passage: 'The sports hall booking system has been down since Monday, and the technicians have not yet given a date for its return.\n\nIn the meantime, staff who need the hall should email the office directly. It ___(1)___ save a great deal of time if requests included the date, the start and finish times and the number of students, since every booking is now being written into the diary by hand.\n\nWe ___(2)___ be grateful for your patience while the system is rebuilt.',
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['would', 'will', 'should', 'can'],
        answer: 0,
        why: 'The <em>if</em>-clause has already stepped back — <em>included</em>, not <em>include</em> — so the main clause has to step back with it, and <em>would</em> is the form that does that. The result is a request dressed as an observation, which is how you ask colleagues for something you cannot require of them. <em>Will</em> makes a flat prediction and leaves the two halves of the sentence in different worlds; <em>should</em> and <em>can</em> do the same, since neither is a remote form and neither can stand over a remote <em>included</em>.' },

      { id: 't5l2ck-6', type: 'choose', tag: 'dist-offer', level: 'B2+',
        stem: 'A colleague is struggling with a heavy box of exam papers. You want to help without implying that she cannot manage. Which is best?',
        options: [
          'You cannot carry that on your own.',
          'Shall I take one end?',
          'You should ask somebody to help you.',
          'Would you mind if I carried that for you?'
        ],
        answer: 1,
        why: '<em>Shall I take one end?</em> offers the speaker\'s own labour and frames the job as shared work rather than a rescue, which is what keeps it from sounding like a comment on her strength. Option 1 is a flat statement about her ability and is the one version that actually says she cannot manage. Option 3 is advice, so it hands the work of finding help back to her. Option 4 uses a request frame, and asking permission to do somebody a favour makes the offer heavier than the situation warrants.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T5.levels.push({
  id: 't5l3', n: 3, name: 'Distance as unreality', cefr: 'C1',
  blurb: 'The same step back, taken all the way out of the real world — and the reason a second operator cannot stand inside an if-clause.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't5l3s1', name: 'Would in the unreal consequent and in wishes', cefr: 'C1',
      theory: {
        key: '<em>Would</em> is the mark of a consequence that is being imagined rather than claimed: it runs the main clause of an unreal conditional, and the main verb of a wish.',
        body: [
          'An unreal conditional takes a whole situation one step out of the facts, and it marks that step <strong>twice</strong>. The <em>if</em>-clause is made remote by a past form — <em>if the council released the land</em> — and the consequent is made remote by <em>would</em>: <em>prices would fall</em>. Two clauses, one mechanism, applied in both halves so that the halves agree about which world they are in.',
          'That agreement is the whole point, and it is what makes <em>would</em> obligatory rather than decorative. Take it out and the sentence claims its consequent: <s>if the council released the land, prices fall</s> is not English, because the first half has stepped out of reality and the second half has not followed. The same clash is behind the very common <s>if the council released the land, prices will fall</s>, where a plain prediction has been bolted onto an unreal condition.',
          'The condition does not have to be stated. <em>That would be about ten thousand baht</em>, <em>I wouldn\'t worry about it</em>, <em>It would take three days</em> all carry an unspoken <em>if you did it</em> or <em>if it happened</em>, and an enormous amount of everyday <em>would</em> lives here. When you meet a bare <em>would</em> with no <em>if</em> anywhere in sight, the useful question is not <em>which use is this?</em> but <em>what is the unstated condition?</em>',
          'Wishes run on the same fuel, because a wish is counter to fact by definition. The split is worth learning precisely. <em>I wish I knew</em> — a present state the speaker wants to be different. <em>I wish they <strong>would</strong> decide</em> — somebody else\'s behaviour the speaker wants changed, with a distinct note of impatience. <em>I wish I had asked</em> — a past regret. And <s>I wish I would</s> is impossible, because you cannot complain about your own willingness to act.'
        ],
        simple: [
          'In an unreal sentence both halves must step back together: past form in the <em>if</em>, <em>would</em> in the other half. <em>If the council released the land, prices would fall.</em>',
          'A bare <em>would</em> often hides its condition. <em>That would take three days</em> means <em>if we did it</em>.',
          '<em>I wish I knew</em> = a state now. <em>I wish they would decide</em> = somebody else\'s behaviour, and you are impatient. <em>I wish I had asked</em> = a regret about the past.'
        ],
        examples: [
          { s: 'If the council released the land, prices <b>would</b> fall.', g: 'both halves stepped back: past form in the if, would in the consequent.' },
          { s: 'That <b>would</b> take about three days.', g: 'the condition is unspoken: if we did it.' },
          { s: 'I wish the neighbours <b>would</b> move their scaffolding.', g: 'a wish about somebody else\'s behaviour, with a note of impatience.' },
          { s: '<s>If the council released the land, prices will fall.</s>', g: 'the halves disagree: the if is unreal but the consequent is a plain prediction.' }
        ]
      },
      items: [
        { id: 't5l3s1-1', type: 'choose', tag: 'dist-unreal', level: 'C1',
          stem: 'If the ministry funded the branch lines, rural ridership ______ within a decade.',
          options: ['will recover', 'recovers', 'would recover', 'would have recovered'],
          answer: 2,
          why: 'The <em>if</em>-clause uses the remote <em>funded</em> for something that is not happening, so the consequent has to step back with it, and <em>would recover</em> is that step. <em>Will recover</em> belongs to a real conditional and clashes with <em>funded</em>, leaving the two halves in different worlds. <em>Recovers</em> states the recovery as a plain present fact about the railways as they are. <em>Would have recovered</em> shifts the whole thing into unreal <strong>past</strong> time, which would mean the funding was available at some earlier point and refused — a different claim from the one the <em>if</em>-clause makes.' },

        { id: 't5l3s1-2', type: 'build', tag: 'dist-unreal', level: 'C1',
          stem: 'Put the words in order to make a complaint about a delay.',
          tiles: ['wish', 'would', 'I', 'the', 'committee', 'decide'],
          solution: 'I wish the committee would decide',
          why: 'A wish is counter to fact, so it takes remote forms, and <em>would</em> is the form used when the wish is about somebody <strong>else\'s</strong> behaviour — which is where the impatience in the sentence comes from. Because <em>would</em> is a modal, the verb after it is bare: <em>decide</em>, never <em>to decide</em> and never <em>decided</em>. <em>I wish the committee decides</em> is not English at all, and <em>I wish the committee decided</em> would be a wish about a standing state of affairs rather than about one overdue decision.' },

        { id: 't5l3s1-3', type: 'choose', tag: 'dist-unreal', level: 'C1',
          stem: 'In which sentence is <em>would</em> an unreal consequent with the condition left unstated?',
          options: [
            'I would not worry about the second draft until the data are in.',
            'I would always start with the appendices when I was marking.',
            'Would you send the corrected version to the registry?',
            'She said the corrected version would be ready on Friday.'
          ],
          answer: 0,
          why: 'Option 1 carries an unspoken <em>if I were you</em>, which is why it is advice rather than a report about the speaker\'s own anxiety levels. Option 2 is past habitual <em>would</em>, pinned in place by the past clause <em>when I was marking</em>. Option 3 is a request, so the distance is social and the registry is expecting a real document. Option 4 sits inside a past-tense report, where <em>would</em> is the backshifted <em>will</em> — the version really is expected on Friday, and nothing is being imagined.' },

        { id: 't5l3s1-4', type: 'spot', tag: 'dist-unreal', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['If the university were to publish', 'the full marking criteria,', 'far fewer students will appeal', 'against their final grades.'],
          answer: 2,
          fix: 'far fewer students would appeal',
          why: '<em>Were to publish</em> marks the condition as unreal and nothing else: the university does <strong>not</strong> publish its criteria, and no past event is being reported. The consequent therefore has to be remote too, so <em>would appeal</em>. <em>Will appeal</em> makes a plain prediction about the real world and so leaves the two halves of the sentence in different worlds. The other three parts are all correct, and the appeal clause needs no change beyond its modal.' },

        { id: 't5l3s1-5', type: 'equiv', tag: 'dist-unreal', level: 'C1',
          given: 'I wish they would tell us what the new timetable looks like.',
          stem: 'Which sentence says the same thing?',
          options: [
            'They have not told us what the new timetable looks like, and I am becoming impatient.',
            'They told us what the new timetable looks like, and I am glad they did.',
            'I wish I had asked them what the new timetable looks like.',
            'If they had told us about the new timetable, I would have stopped asking.'
          ],
          answer: 0,
          why: '<em>Wish</em> plus <em>would</em> aimed at another party means two things at once: the behaviour has not happened, and the speaker wants it to, with visible impatience. Option 2 reverses the facts entirely. Option 3 moves the regret onto the speaker\'s own past inaction, which is what <em>wish</em> plus the past perfect does. Option 4 is a genuine past unreal conditional about a moment that has gone, and it describes a consequence for the speaker rather than a complaint about anybody.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't5l3s2', name: 'Might and could in unreal possibility', cefr: 'C1',
      theory: {
        key: 'Where <em>would</em> asserts the imagined consequence, <em>might</em> and <em>could</em> only open it — the consequent is then not merely unreal but uncertain within the unreal world as well.',
        body: [
          'The consequent of an unreal conditional is not obliged to be <em>would</em>. <em>If the council invested, ridership <strong>would</strong> recover</em> claims that in the imagined world recovery follows. <em>If the council invested, ridership <strong>might</strong> recover</em> says only that it could. There are two layers of distance stacked here: the whole scenario is unreal, and inside that unreal scenario the outcome is uncertain.',
          'That second layer is worth a great deal to an academic writer, because arguing from an untested scenario is one of the standard moves in policy prose, and <em>would</em> in such a sentence is a strong claim about a world nobody has ever observed. <em>Might</em> and <em>could</em> are usually the honest choices, and an examiner reads them as calibration rather than as weakness. This is Stage 7 arriving early.',
          'The difference between the two is small but real. <em>Could</em> leans on the <strong>capacity</strong> the change would create — <em>if fares were halved, the network could carry twice as many passengers</em> says the capacity would exist. <em>Might</em> leans on the <strong>likelihood of the outcome</strong> — <em>the network might carry twice as many passengers</em> says the passengers might actually turn up. Both are legal in most contexts, and choosing deliberately between them is a C1 skill.',
          'One warning about position. A modal can also appear <strong>inside</strong> the <em>if</em>-clause, where it does something quite different: <em>if you could send it by Friday</em> is a polite request, not a condition, and <em>if it should rain</em> marks the condition as remote or unlikely. So do not read every modal near an <em>if</em> as part of the conditional machinery. Which clause it is in, and what is being asked of whom, decide the reading.'
        ],
        simple: [
          '<em>Would</em> says the result follows. <em>Might</em> and <em>could</em> only say it is possible. <em>If the council invested, ridership might recover.</em>',
          'When you are arguing from a scenario nobody has tested, <em>might</em> and <em>could</em> are usually the honest choice; <em>would</em> claims something about a world nobody has seen.',
          '<em>Could</em> is about the capacity a change would create; <em>might</em> is about whether the outcome would actually happen.'
        ],
        examples: [
          { s: 'If the council invested in the branch line, ridership <b>might</b> recover.', g: 'unreal, and inside the unreal, still uncertain.' },
          { s: 'If fares were halved, the network <b>could</b> carry twice as many passengers.', g: 'could leans on the capacity the change would create.' },
          { s: 'If it <b>should</b> rain, the ceremony moves indoors.', g: 'a modal inside the if-clause, marking the condition as unlikely.' },
          { s: '<s>If the council invested in the branch line, ridership will recover.</s>', g: 'an unreal if with a real consequent; the halves do not match.' }
        ]
      },
      items: [
        { id: 't5l3s2-1', type: 'choose', tag: 'dist-unrealposs', level: 'C1',
          stem: 'A policy paper is arguing from a scheme nobody has tested. Which consequent is pitched at the strength the argument will bear?',
          options: [
            'If the levy were introduced, congestion will fall by a fifth.',
            'If the levy were introduced, congestion would certainly fall by a fifth.',
            'If the levy were introduced, congestion might fall by a fifth.',
            'If the levy were introduced, congestion falls by a fifth.'
          ],
          answer: 2,
          why: 'The <em>if</em>-clause is unreal, so the consequent must be remote, and because nobody has run the scheme the writer should open the outcome rather than assert it — which is what <em>might</em> does. All four options name the same figure, so the only thing separating them is how hard the writer leans on it. Option 2 is correctly remote, but <em>would certainly</em> then claims that figure as settled in a world nobody has observed. Options 1 and 4 both put a real-world consequent under an unreal condition, so the two halves of the sentence disagree about whether they are describing the facts.' },

        { id: 't5l3s2-2', type: 'cloze', tag: 'dist-unrealposs', level: 'C1',
          passage: 'The branch line to the coast closed to passengers in the 1970s and has carried nothing but ballast trains ever since. Every few years somebody proposes reopening it, and every few years the proposal is costed and quietly shelved.\n\nThe arithmetic is not quite as hopeless as it looks. If the two intermediate stations were rebuilt, the line ___(1)___ absorb a good part of the summer traffic that now crawls along the coast road. Whether it ___(2)___ ever pay for itself is a harder question, and the last three studies have disagreed about it.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['will', 'must', 'can', 'could'],
          answer: 3,
          why: 'The <em>if</em>-clause has an unreal past — <em>were rebuilt</em> — so the consequent has to be remote as well, and <em>could</em> is the form that both matches it and names a capacity the rebuilding would create. <em>Will</em> and <em>can</em> are real-world forms and clash directly with <em>were rebuilt</em>, which tells us the stations are still ruins. <em>Must</em> would be a confident deduction about the carrying capacity of a line that currently carries nothing but ballast.' },

        { id: 't5l3s2-3', type: 'choose', tag: 'dist-unrealposs', level: 'C1',
          stem: 'What is the difference between <em>If the tolls were lifted, the bridge could take twice the traffic</em> and <em>…the bridge would take twice the traffic</em>?',
          options: [
            'The first is about a past scenario and the second about a future one.',
            'The first is polite and the second is direct.',
            'The first says the capacity would exist; the second claims the traffic would actually come.',
            'The first is a question and the second a statement.'
          ],
          answer: 2,
          why: 'Both sentences are unreal — the tolls have not been lifted in either — so the difference cannot be one of time, and what separates them is how much is being claimed inside the imagined world. <em>Could</em> opens a possibility and here leans on capacity; <em>would</em> asserts the outcome, which is a much stronger claim and one the writer would have to defend. Option 1 misreads the remote forms as tenses, which is exactly the error this stage exists to remove. Option 2 imports the politeness axis, which needs a hearer and something asked of them. Option 4 describes neither sentence.' },

        { id: 't5l3s2-4', type: 'sort', tag: 'dist-unrealposs', level: 'C1',
          stem: 'Decide whether each sentence describes an imagined world or guesses about the real one.',
          bins: [
            { key: 'unreal', label: 'Unreal — it is not the case', hint: 'a world being imagined' },
            { key: 'guess', label: 'A guess about the real world', hint: 'it may well be true right now' }
          ],
          items: [
            { text: 'If the bypass were finished, the lorries <em>could</em> stay out of the village centre.', bin: 'unreal' },
            { text: 'The leak <em>could</em> be somewhere under the car park.', bin: 'guess' },
            { text: 'If the ferry ran on Sundays, we <em>might</em> not need the car at all.', bin: 'unreal' },
            { text: 'The delay <em>might</em> be down to a signalling fault.', bin: 'guess' },
            { text: 'If the alarm were tested every month, a fire <em>could</em> be caught early.', bin: 'unreal' },
            { text: 'The alarm <em>could</em> still be under warranty.', bin: 'guess' }
          ],
          why: 'The test is whether a condition is in view that is contrary to fact. Each unreal item carries one on its face, and each condition tells you something the sentence is denying: the bypass is not finished, the ferry does not run on Sundays, the alarm is not tested every month. The three guesses have no condition at all — the leak, the delay and the warranty are all real and present, and the modal is measuring the speaker\'s confidence about them rather than building a scenario.' },

        { id: 't5l3s2-5', type: 'judge', tag: 'dist-unrealposs', level: 'C1',
          given: 'If the second runway were open, the airport could handle the Songkran traffic without diversions.',
          stem: 'As things stand, the airport can handle the Songkran traffic without diversions.',
          answer: 1,
          why: 'False. The remote <em>were</em> tells us the second runway is not open, and the sentence hangs the capacity on that runway, so the capacity does not exist as things stand. That is the work the two remote forms do between them: <em>were</em> denies the condition, and <em>could</em> puts the outcome inside the world the condition would create rather than in this one. It is not <em>Can\'t tell</em>, because the unreal forms settle the question without any help from outside the sentence.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't5l3s3', name: 'Why if it will rain fails', cefr: 'C1',
      theory: {
        key: '<em>If</em> already marks its clause as a possibility, so a second operator saying the same thing has nothing to do — which is why <em>will</em> is normally barred from an <em>if</em>-clause, and why every genuine exception is a case of <em>will</em> meaning something else.',
        body: [
          'Students usually meet this as a flat prohibition — <em>no future in the if-clause</em> — which is both wrong, since there are real exceptions, and unexplained, which means it is forgotten. The reason is worth having. <strong><em>Will</em> is a modal, not a tense.</strong> Its job is to mark a proposition as predicted rather than asserted. But <em>if</em> has already done that: it has lifted the clause out of the asserted and into the merely possible. The prediction operator arrives to find its work done.',
          'So the <em>if</em>-clause takes plain present forms even when it refers to the future, and the future is expressed once, in the consequent, where there is a proposition to predict: <em>If it <strong>rains</strong> tomorrow, the match <strong>will</strong> be moved.</em> The same applies to every other clause that marks its content as not-yet-settled — <em>when</em>, <em>as soon as</em>, <em>until</em>, <em>before</em>, <em>by the time</em>.',
          'Unreal conditions obey the identical logic one step further back. <em>If it rained</em>, <em>if they invested</em>, <em>if I were you</em> — the remoteness is carried by the past form, so <s>if it would rain</s> fails for exactly the reason <s>if it will rain</s> does. There is one operator\'s worth of work in the clause and one operator already in place to do it.',
          'The exceptions are not exceptions to the principle; they are cases where <em>will</em> is contributing meaning that <em>if</em> has <strong>not</strong> supplied. <strong>Willingness</strong>: <em>If you\'ll just wait here, I\'ll fetch the file</em> — here <em>will</em> means <em>are willing to</em>, and the sentence is in fact a courteous request. <strong>A deduction about the present</strong>: <em>If that will be all, I\'ll close the file</em> — the speaker is inferring from how things stand now, not predicting later. <strong>Characteristic behaviour, stressed</strong>: <em>If you <u>will</u> keep leaving the door open…</em> — a complaint. The test is simple: if you can replace <em>will</em> with <em>are willing to</em>, with <em>turns out to be the case now</em>, or with <em>insist on -ing</em>, it stays. If you cannot, it goes.'
        ],
        simple: [
          '<em>If</em> already says <em>this may or may not happen</em>. <em>Will</em> says the same thing, so English does not let you say it twice: <em>If it <strong>rains</strong> tomorrow, the match will be moved.</em>',
          'The same goes for <em>when</em>, <em>as soon as</em>, <em>until</em> and <em>before</em> — and for unreal sentences, where <s>if it would rain</s> fails for the same reason.',
          '<em>Will</em> can stay in an <em>if</em>-clause when it means something else: <em>are willing to</em> (<em>If you\'ll wait here…</em>), a deduction about now (<em>If that will be all…</em>), or a complaint (<em>If you will keep leaving the door open…</em>).'
        ],
        examples: [
          { s: 'If it <b>rains</b> tomorrow, the match will be moved.', g: 'the if already marks the possibility; the future is carried once, in the other half.' },
          { s: '<s>If it will rain tomorrow, the match will be moved.</s>', g: 'two operators sent to do one operator\'s work.' },
          { s: 'If you<b>\'ll</b> just wait here, I will fetch the file.', g: 'will means are willing to, which the if has not said; the sentence is a request.' },
          { s: 'If that <b>will</b> be all, I will close the file.', g: 'a deduction about the present state of affairs, not a prediction about later.' }
        ]
      },
      items: [
        { id: 't5l3s3-1', type: 'choose', tag: 'dist-ifwill', level: 'C1',
          stem: 'If the ferry ______ cancelled tomorrow, the school will send the minibus.',
          options: ['will be', 'would be', 'is', 'has been'],
          answer: 2,
          why: '<em>If</em> has already marked the clause as a possibility, so the plain present carries the future reference on its own and no second operator is needed. <em>Will be</em> supplies exactly the marking the <em>if</em> has just supplied. <em>Would be</em> is the remote form and would make the cancellation an imagined scenario, which clashes with the flat <em>will send</em> in the other half. <em>Has been</em> places a completed event before now and cannot be dated to tomorrow.' },

        { id: 't5l3s3-2', type: 'spot', tag: 'dist-ifwill', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['If the drainage work will finish', 'before the term starts,', 'the car park can reopen', 'in the first week of June.'],
          answer: 0,
          fix: 'If the drainage work finishes',
          why: 'The <em>if</em> has already marked the clause as unsettled, so <em>will</em> has no job left to do and the present simple carries the future reference on its own. The exception that rescues <em>will</em> elsewhere cannot help here: <em>the drainage work</em> is not a person and cannot be <em>willing to</em> finish, so there is no second meaning for <em>will</em> to contribute. The other three parts are correct, and the second of them applies the same rule to a time clause — <em>before the term starts</em>, not <s>before the term will start</s>.' },

        { id: 't5l3s3-3', type: 'choose', tag: 'dist-ifwill', level: 'C1',
          stem: 'In which sentence is <em>will</em> inside an <em>if</em>-clause correct?',
          options: [
            'If the train will be late, we will take a taxi.',
            'If you will just sign at the bottom, I can process the refund today.',
            'If it will snow next week, the pass will close.',
            'If the results will arrive on Friday, we will meet on Saturday.'
          ],
          answer: 1,
          why: 'In option 2 <em>will</em> is not predicting anything: it means <em>are willing to</em>, which is meaning the <em>if</em> has not already supplied, and the whole sentence works as a courteous request. In options 1, 3 and 4 <em>will</em> is doing precisely the job <em>if</em> has done — marking the clause as a possibility rather than a fact — and each needs a plain present instead: <em>if the train is late</em>, <em>if it snows</em>, <em>if the results arrive</em>.' },

        { id: 't5l3s3-4', type: 'equiv', tag: 'dist-ifwill', level: 'C1',
          given: 'If you\'ll take a seat, the registrar will be with you shortly.',
          stem: 'Which sentence says the same thing?',
          options: [
            'Please take a seat; the registrar will be with you shortly.',
            'If it turns out that you are going to sit down, the registrar will come over.',
            'You should take a seat, because the registrar is running late.',
            'Whether or not you sit down, the registrar will be with you shortly.'
          ],
          answer: 0,
          why: '<em>If you\'ll</em> here is willingness, and a condition built on the hearer\'s willingness is a standard courteous way of asking them to do something — which is why the natural paraphrase is a polite imperative. Option 2 reads <em>will</em> as prediction, the very reading the rule blocks, and turns a courtesy into an odd forecast about the visitor\'s posture. Option 3 invents a reason the original never gives. Option 4 removes the condition altogether and with it the request.' },

        { id: 't5l3s3-5', type: 'sort', tag: 'dist-ifwill', level: 'C1',
          stem: 'In each sentence, decide whether <em>will</em> is contributing meaning of its own or simply repeating what <em>if</em> has already said.',
          bins: [
            { key: 'ok', label: '<em>Will</em> is doing its own job', hint: 'willingness, a complaint, or a deduction about now' },
            { key: 'no', label: '<em>Will</em> is redundant', hint: 'the if has already marked the possibility' }
          ],
          items: [
            { text: 'If you <em>will</em> keep parking across the gate, the neighbours are going to complain.', bin: 'ok' },
            { text: 'If the rain <em>will</em> continue into Thursday, we should move the fair.', bin: 'no' },
            { text: 'If that <em>will</em> be all, I will close the account.', bin: 'ok' },
            { text: 'If the grant <em>will</em> come through in April, we can order the equipment.', bin: 'no' },
            { text: 'If you<em>\'ll</em> follow me, the seminar room is on the second floor.', bin: 'ok' },
            { text: 'If the inspection <em>will</em> take place in May, we must repaint the corridors.', bin: 'no' }
          ],
          why: 'Run the three substitutions. <em>Insist on parking</em> works for the first, <em>turns out to be the case now</em> for the third, and <em>are willing to follow</em> for the fifth, so in each of those <em>will</em> is carrying meaning the <em>if</em> never supplied. None of the three substitutions fits the rain, the grant or the inspection: each of those clauses is simply about something that may or may not happen, which is what the <em>if</em> has already said, so the present simple is all that is needed.' }
      ]
    }
  ],
  check: {
    id: 't5l3ck', name: 'Stage Check · Distance as unreality',
    items: [

      { id: 't5l3ck-1', type: 'choose', tag: 'dist-unreal', level: 'C1',
        stem: 'Which sentence is internally consistent?',
        options: [
          'If the archive were digitised, researchers will stop travelling to Bangkok.',
          'If the archive were digitised, researchers would stop travelling to Bangkok.',
          'If the archive would be digitised, researchers would stop travelling to Bangkok.',
          'If the archive is digitised, researchers would stop travelling to Bangkok.'
        ],
        answer: 1,
        why: 'Both halves have to agree about which world they are describing, and option 2 does that: the remote <em>were</em> in the condition and the remote <em>would</em> in the consequent. Option 1 hangs a plain prediction on an unreal condition. Option 3 puts <em>would</em> inside the <em>if</em>-clause, where the <em>if</em> has already marked the possibility and the remoteness belongs to the past form instead. Option 4 is the mirror image of option 1 — a real condition with an imagined consequent — which makes an ordinary possibility sound hypothetical.' },

      { id: 't5l3ck-2', type: 'cloze', tag: 'dist-unrealposs', level: 'C1',
        passage: 'The reservoir has been below forty per cent since the middle of March, and the district has been trucking water to six villages for eleven weeks.\n\nEngineers point out that the pipeline from the eastern catchment was surveyed in 2019 and never built. If the district laid it now, the tankers ___(1)___ be unnecessary by next summer. Whether that happens is another matter: the same objections ___(2)___ still be raised, and nothing has been budgeted.',
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['will', 'would', 'must', 'can'],
        answer: 1,
        why: 'The <em>if</em>-clause has stepped back — <em>laid</em> is the remote form, and the last sentence confirms that nothing has been budgeted — so the consequent has to step back with it, and <em>would</em> is the form that does that. <em>Will be unnecessary</em> is a flat prediction about the real world and clashes with the condition standing in front of it. <em>Must be unnecessary</em> is a deduction that the tankers are already pointless, which is the opposite of what the paragraph says. <em>Can be unnecessary</em> makes a general claim about tankers instead of saying anything about this pipeline.' },

      { id: 't5l3ck-3', type: 'choose', tag: 'dist-ifwill', level: 'C1',
        stem: 'Which sentence needs no correction?',
        options: [
          'If the budget will clear the committee in June, we can start hiring.',
          'If the budget clears the committee in June, we can start hiring.',
          'If the budget would clear the committee in June, we can start hiring.',
          'If the budget will have cleared the committee in June, we can start hiring.'
        ],
        answer: 1,
        why: '<em>If</em> marks the clause as a possibility, so the plain present carries the future reference and nothing else is required. Option 1 adds a second operator to do work the <em>if</em> has already done, and the willingness reading that rescues <em>will</em> in <em>if you\'ll just wait here</em> cannot save it: a budget is not a person and cannot be willing to do anything. Option 3 puts the remote form in the wrong place: in an unreal conditional the remoteness is carried by a past form — <em>if the budget cleared the committee</em> — not by <em>would</em>. Option 4 stacks a future perfect into a clause that cannot host a prediction operator at all, and it also leaves the consequent hanging in the wrong time.' },

      { id: 't5l3ck-4', type: 'order', tag: 'dist-unreal', level: 'C1',
        stem: 'Put the four sentences in the order that makes a coherent paragraph.',
        items: [
          'The night bus between the two provincial capitals was withdrawn four years ago for want of passengers.',
          'Since then the last train has left at eight, and anyone finishing a late shift has had to stay overnight or pay for a taxi.',
          'If the service were restored, even at three nights a week, those workers would have a way home.',
          'Whether enough of them would use it to cover the fuel is the question the operator has never managed to answer.'
        ],
        why: 'The paragraph runs fact, consequence, unreal proposal, doubt — and each sentence is pinned by what it refers back to. Sentence 2 opens with <em>since then</em>, which needs the withdrawal in sentence 1. Sentence 3 uses <em>restored</em>, which presupposes that same withdrawal, and its matched remote forms mark it as the proposal rather than the history. Sentence 4 begins with <em>whether enough of them</em>, whose <em>them</em> points at the workers named in sentence 2 and whose <em>it</em> points at the service proposed in sentence 3, so it can only stand last.' },

      { id: 't5l3ck-5', type: 'gap', tag: 'dist-unrealposs', level: 'C1',
        blank: '(1)',
        lines: [
          { who: 'Kanya', text: 'If the department paid for the licence, we ___(1)___ run the simulation on all four machines instead of one.' },
          { who: 'Boon', text: 'They are not going to pay for it, though. And even if they did, I ___(2)___ want to check whether the older machines can take the load.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['could', 'can', 'will', 'must'],
        answer: 0,
        why: 'The <em>if</em>-clause has the remote <em>paid</em> for something that is not happening, so the consequent has to be remote as well, and <em>could</em> also names the capacity the licence would create. <em>Can</em> and <em>will</em> are real-world forms and contradict the condition — Boon\'s reply confirms that the department is not paying. <em>Must</em> would be either an obligation or a deduction, and the sentence is about neither: nobody is requiring the simulation and nobody is inferring that it is being run.' },

      { id: 't5l3ck-6', type: 'choose', tag: 'dist-ifwill', level: 'C1',
        stem: 'Read: <em>If you will hold the ladder, I can reach the junction box.</em> Why is <em>will</em> acceptable here?',
        options: [
          'Because the holding of the ladder is in the future.',
          'Because it means <em>are willing to</em>, which the <em>if</em> has not already said.',
          'Because an <em>if</em>-clause takes <em>will</em> whenever the main clause has a modal in it.',
          'Because the speaker is predicting what the ladder will do.'
        ],
        answer: 1,
        why: 'The clause survives because <em>will</em> is carrying meaning of its own — the hearer\'s willingness — which the <em>if</em> has not supplied, and the sentence is therefore a courteous request. Option 1 gives the reason <em>will</em> is normally <strong>blocked</strong>, not the reason it survives: future reference inside an <em>if</em>-clause is carried by the present tense. Option 3 invents a rule, since the modal in the consequent has no bearing on the <em>if</em>-clause at all. Option 4 reads <em>will</em> as prediction, which is exactly the reading this sentence does not have.' }
    ]
  }
});

TOPICS.push(T5);
