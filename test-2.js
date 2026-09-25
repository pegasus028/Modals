/* ===========================================================================
   TEST 2 — m2 · FINAL CHECK, B2
   Twenty items drawn from Stages 1 to 6, weighted towards the errors that
   cost a B2 candidate most: the negation cliff, the suppletive negative,
   the single-occasion rule, the defectiveness repairs and past modality.
   No item requires the C1 material.
   =========================================================================== */
MOCKS.push({
  id: 'm2',
  name: 'Final Check · B2',
  blurb: 'Twenty questions at B2. Everything here is taught in Stages 1 to 6; nothing needs the C1 material. Seventy per cent means the core system is secure.',
  minutes: 30,
  total: 20,
  sections: [

    /* ------------------------------------------------ PART A, items 1-5 */
    {
      code: 'A-I',
      part: 'PART A: GRAMMAR',
      title: 'Choose the correct form',
      instructions: 'Choose the option that completes the sentence correctly. Only one option is possible in the context given.',
      points: 1,
      items: [

        { id: 'm2-1', type: 'choose', tag: 'frame-defect', level: 'B1+',
          stem: 'If the ferry is cancelled again, passengers ______ wait until Thursday for the next crossing.',
          options: ['will have to', 'will must', 'will need', 'must have to'],
          answer: 0,
          why: 'A modal has no infinitive, so nothing can follow <em>will</em> except a bare verb; the repair for <em>must</em> in that slot is <em>have to</em>. <em>will must</em> stacks one modal under another, which English never allows. <em>will need</em> is a lexical verb and needs <em>to</em> before the infinitive: <em>will need to wait</em>. <em>must have to</em> is a deduction about an obligation — I conclude that they are obliged — rather than a statement of what a cancellation would require, and it leaves the future unmarked.' },

        { id: 'm2-2', type: 'choose', tag: 'epi-cant', level: 'B2',
          stem: 'The shutters have not been opened and four days of post are still lying in the hall, so the tenants ______ back from the coast yet.',
          options: ['mustn\'t be', 'can\'t be', 'may not be', 'shouldn\'t be'],
          answer: 1,
          why: 'The negative of a confident deduction is built with <em>can\'t</em>, not with <em>mustn\'t</em>, so <em>can\'t be back</em> is the only deduction on offer. <em>mustn\'t be</em> can only forbid, which makes no sense about tenants returning to their own flat. <em>may not be</em> leaves the possibility open, and four days of uncollected post behind closed shutters have already closed it. <em>shouldn\'t be</em> turns the sentence into an expectation or a rule instead of a conclusion.' },

        { id: 'm2-3', type: 'choose', tag: 'deo-source', level: 'B2',
          stem: 'In her opening paragraph the writer sets herself a rule that nobody has imposed on her: <em>I ______ stop checking email before breakfast.</em>',
          options: ['am supposed to', 'am required to', 'must', 'had to'],
          answer: 2,
          why: 'Where the necessity comes from the speaker herself, English uses <em>must</em>; that is the whole difference the form carries. <em>am supposed to</em> reports an expectation that somebody else has set, which the stem explicitly rules out. <em>am required to</em> goes further still and reports an external regulation, and it belongs to formal, institutional prose. <em>had to</em> puts the resolution in past time, but the writer is making it now.' },

        { id: 'm2-4', type: 'choose', tag: 'dyn-occasion', level: 'B2+',
          stem: 'Everyone said the deadline was impossible, and yet the translation team ______ the whole report by Friday evening.',
          options: ['could finish', 'could have finished', 'was capable of finishing', 'managed to finish'],
          answer: 3,
          why: 'One completed achievement against difficulty is what <em>managed to</em> is for, and <em>and yet</em> demands a form that asserts the job was actually done. <em>could finish</em> names a standing power rather than a single event, which is the single-occasion restriction. <em>could have finished</em> says the chance was there and was not taken, contradicting the sentence. <em>was capable of finishing</em> reports a capacity without ever claiming the report was delivered.' },

        { id: 'm2-5', type: 'choose', tag: 'past-deduce', level: 'B2+',
          stem: 'There were two sets of footprints in the dust and only one key had been signed out, so somebody ______ let the second person in.',
          options: ['must have', 'can\'t have', 'must', 'should have'],
          answer: 0,
          why: 'The deduction is being made now about something that happened earlier, and that is the job of <em>must have</em> plus a past participle. <em>can\'t have</em> draws the opposite conclusion from the same footprints, which are the reason for thinking somebody did open the door. <em>must</em> with a bare infinitive puts the letting-in in present time, which the past-tense evidence rules out. <em>should have</em> says it did not happen and that this was a failing.' }
      ]
    },

    /* ----------------------------------------------- PART A, items 6-10 */
    {
      code: 'A-II',
      part: 'PART A: GRAMMAR',
      title: 'Error identification',
      instructions: 'Each sentence is divided into four parts. Exactly one part contains an error. Choose it.',
      points: 1,
      items: [

        { id: 'm2-6', type: 'spot', tag: 'frame-form', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The new guidelines state', 'that at the end of a session', 'every supervisor must to record', 'the outcome in the shared log.'],
          answer: 2,
          fix: 'every supervisor must record',
          why: 'A modal is followed by a bare infinitive, so the <em>to</em> in <em>must to record</em> cannot stand. The error survives in writing because many languages build verb-plus-verb sequences with a linking element, and English modals do not. Parts 1, 2 and 4 contain no modal and nothing that could take an infinitive.' },

        { id: 'm2-7', type: 'spot', tag: 'frame-chain', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['By the time the bell goes', 'the papers will have been collect', 'and stacked at the front', 'of the examination hall.'],
          answer: 1,
          fix: 'the papers will have been collected',
          why: 'Each link in the chain fixes the form of the next: <em>have</em> takes <em>been</em>, and passive <em>be</em> takes a past participle, so the verb must be <em>collected</em>. The bare form <em>collect</em> belongs immediately after the modal and nowhere else in the phrase. Part 3 shows the correct participle, <em>stacked</em>, in the same coordinate structure, which is the clue.' },

        { id: 'm2-8', type: 'spot', tag: 'deo-periph', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Part-time students must pay', 'the full library charge', 'at the start of every term,', 'until the funding rules changed.'],
          answer: 0,
          fix: 'Part-time students had to pay',
          why: '<em>must</em> has no past form, so a past obligation is carried by <em>had to</em>; part 4, <em>until the funding rules changed</em>, fixes the whole sentence in past time. <em>must pay</em> reports a rule that is in force now, which part 4 has already said is no longer the case. Parts 2, 3 and 4 are ordinary past-time description with nothing modal in them.' },

        { id: 'm2-9', type: 'spot', tag: 'dyn-repair', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Since the second bridge opened,', 'the journey into town has become much shorter,', 'and the villagers', 'have could reach the hospital in minutes.'],
          answer: 3,
          fix: 'have been able to reach the hospital in minutes.',
          why: 'A perfect requires a past participle and <em>can</em> has none, so the slot is filled by the repair form: <em>have been able to reach</em>. <em>have could</em> is the defectiveness showing through — it is the exact point at which the modal runs out. Part 1 forces a present perfect right across the sentence, so it cannot simply be rewritten with <em>can</em>, and part 2 shows the same perfect used correctly.' },

        { id: 'm2-10', type: 'spot', tag: 'past-should', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The organisers now admit', 'that more than two hundred people were turned away,', 'and that they should book a larger hall', 'for last month\'s concert.'],
          answer: 2,
          fix: 'and that they should have booked a larger hall',
          why: 'Part 4 dates the booking to one particular past event, so part 3 cannot be advice about a hall still to be hired; it is criticism of something that never happened, which needs <em>should have booked</em>. <em>should book</em> would have to point forward, and <em>for last month\'s concert</em> leaves it nowhere to point. Parts 1, 2 and 4 report what was admitted and what actually occurred, and carry no modal to get wrong.' }
      ]
    },

    /* ---------------------------------------------- PART B, items 11-15 */
    {
      code: 'B-I',
      part: 'PART B: MEANING',
      title: 'Closest meaning',
      instructions: 'Read the sentence in the box, then choose the option that is closest to it in meaning.',
      points: 1,
      items: [

        { id: 'm2-11', type: 'equiv', tag: 'epi-negscope', level: 'B2',
          given: 'There is a chance that the two files are not identical.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The two files can\'t be identical.',
            'The two files may not be identical.',
            'The two files might be not identical.',
            'The two files must not be identical.'
          ],
          answer: 1,
          why: '<em>may not</em> is the possibility of a negative, which is exactly what <em>there is a chance that … not</em> states. <em>can\'t be identical</em> is the impossibility of a positive, a far stronger claim that rules the matching out. Option 3 puts <em>not</em> after <em>be</em>, where English will not have it; the negation belongs on the modal. <em>must not</em> reads as a prohibition, and a file cannot be forbidden to resemble another; even read as a conclusion, it would claim certainty where the original offers only a chance.' },

        { id: 'm2-12', type: 'equiv', tag: 'deo-noneed', level: 'B2',
          given: 'There is no requirement for volunteers to attend the Saturday briefing.',
          stem: 'Which sentence says the same thing?',
          options: [
            'Volunteers mustn\'t attend the Saturday briefing.',
            'Volunteers needn\'t have attended the Saturday briefing.',
            'Volunteers shouldn\'t attend the Saturday briefing.',
            'Volunteers needn\'t attend the Saturday briefing.'
          ],
          answer: 3,
          why: '<em>needn\'t</em> removes an obligation and creates none, which is precisely what <em>no requirement</em> means. <em>mustn\'t attend</em> creates a prohibition, turning an open invitation into a ban. <em>needn\'t have attended</em> looks back at a briefing that has already happened and says people went unnecessarily. <em>shouldn\'t attend</em> advises against going, which the original does not.' },

        { id: 'm2-13', type: 'equiv', tag: 'epi-scale', level: 'B2',
          given: 'It is just about possible that the committee will meet before the recess, but I would not count on it.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The committee must meet before the recess.',
            'The committee might meet before the recess.',
            'The committee should meet before the recess.',
            'The committee can\'t meet before the recess.'
          ],
          answer: 1,
          why: '<em>might</em> sits on the weak middle of the scale, which is where <em>just about possible</em> and <em>would not count on it</em> put the speaker. <em>must meet</em> is the top rung and, with a human subject and a schedule, also reads as an obligation. <em>should meet</em> claims a positive expectation the speaker has just declined to make. <em>can\'t meet</em> is the bottom rung and rules out the possibility the original keeps open.' },

        { id: 'm2-14', type: 'equiv', tag: 'dist-core', level: 'B2+',
          given: 'Before they widened the canal, the barges could turn at the second basin.',
          stem: 'Which sentence says the same thing?',
          options: [
            'Until the canal was widened, it was possible for barges to turn at the second basin.',
            'If the canal were widened, barges would be able to turn at the second basin.',
            'Barges are perhaps able to turn at the second basin now that the canal is wider.',
            'Barges would have turned at the second basin if the canal had not been widened.'
          ],
          answer: 0,
          why: 'Here the remote form marks distance in <strong>time</strong>, and <em>before they widened</em> is the cue, so the meaning is a past standing capacity. Option 2 reads the same form as distance in likelihood and invents an unreal condition. Option 3 reads it as present tentativeness and moves the turning into today. Option 4 builds an unreal past consequent, which says the barges never turned at all.' },

        { id: 'm2-15', type: 'equiv', tag: 'past-needpair', level: 'B2+',
          given: 'You needn\'t have carried the boxes up; the lift was working after all.',
          stem: 'Which sentence says the same thing?',
          options: [
            'You did not carry the boxes up, because the lift was working.',
            'You ought not to have carried the boxes up, and it was careless of you.',
            'You carried the boxes up, and it turned out to be unnecessary.',
            'You were not allowed to carry the boxes up, and you did it anyway.'
          ],
          answer: 2,
          why: '<em>needn\'t have done</em> builds the wasted effort into the form: the action happened, and the necessity was not there. Option 1 is the meaning of <em>didn\'t need to</em>, which normally implies the work was never started. Option 2 adds blame, and <em>needn\'t have</em> carries none — it reports waste, not fault. Option 4 keeps the carrying but turns an absent obligation into a prohibition that was then broken.' }
      ]
    },

    /* ---------------------------------------------- PART C, items 16-20 */
    {
      code: 'C-I',
      part: 'PART C: TEXT',
      title: 'Gapped text and conversation',
      instructions: 'Questions 16 to 18 are gaps in one briefing note. Questions 19 and 20 are gaps in one conversation. Read the whole text before you answer.',
      points: 1,
      items: [

        { id: 'm2-16', type: 'cloze', tag: 'deo-negcliff', level: 'B2',
          passage: 'Briefing note for marathon volunteers.\n\nThank you for signing up. Everyone on a water station should collect a numbered tabard from the depot before six, so that we know where you are if a runner needs help. You ___(16)___ bring your own drinks, since the stations are stocked for volunteers as well as runners, though anyone who prefers their own bottle is welcome to bring one.\n\nVolunteers under eighteen ___(17)___ work on the road-crossing points, because our insurance does not cover them there; we will place you at a water station instead, where there is always a supervisor within sight.\n\nThe course closes at two o\'clock. If a runner is still on your section after that, the sweep vehicle ___(18)___ reach you within about ten minutes, though do not rely on it to the minute; stay where you are and wave it down rather than setting off back on your own.',
          blank: '(16)',
          stem: 'Choose the best option for blank (16).',
          options: ['mustn\'t', 'don\'t have to', 'shouldn\'t', 'are not to'],
          answer: 1,
          why: 'The stations are stocked, so the obligation to bring drinks simply is not there, and <em>don\'t have to</em> is the form that removes an obligation without creating one. <em>mustn\'t</em> forbids, which the following clause contradicts outright — anyone who prefers is welcome to bring a bottle. <em>shouldn\'t</em> advises against it, and nobody advises against something in the same breath as welcoming it. <em>are not to</em> is a flat prohibition in the register of a written instruction, and a briefing note that has just explained why nobody needs a bottle is not banning one.' },

        { id: 'm2-17', type: 'cloze', tag: 'deo-prohibit', level: 'B2',
          passage: 'Briefing note for marathon volunteers.\n\nThank you for signing up. Everyone on a water station should collect a numbered tabard from the depot before six, so that we know where you are if a runner needs help. You ___(16)___ bring your own drinks, since the stations are stocked for volunteers as well as runners, though anyone who prefers their own bottle is welcome to bring one.\n\nVolunteers under eighteen ___(17)___ work on the road-crossing points, because our insurance does not cover them there; we will place you at a water station instead, where there is always a supervisor within sight.\n\nThe course closes at two o\'clock. If a runner is still on your section after that, the sweep vehicle ___(18)___ reach you within about ten minutes, though do not rely on it to the minute; stay where you are and wave it down rather than setting off back on your own.',
          blank: '(17)',
          stem: 'Choose the best option for blank (17).',
          options: ['don\'t have to', 'shouldn\'t have to', 'had better not', 'are not allowed to'],
          answer: 3,
          why: 'The insurance does not cover these volunteers at the crossings and the next clause reassigns them, so they are barred, and a rule that bars is a prohibition: <em>are not allowed to</em>. <em>don\'t have to</em> merely excuses them, which would leave them free to choose a crossing the insurance does not cover. <em>shouldn\'t have to</em> complains that the arrangement is unfair rather than stating what the arrangement is. <em>had better not</em> warns them off, and a warning is the organiser\'s opinion, not the rule that the following clause then acts on.' },

        { id: 'm2-18', type: 'cloze', tag: 'epi-expect', level: 'B2',
          passage: 'Briefing note for marathon volunteers.\n\nThank you for signing up. Everyone on a water station should collect a numbered tabard from the depot before six, so that we know where you are if a runner needs help. You ___(16)___ bring your own drinks, since the stations are stocked for volunteers as well as runners, though anyone who prefers their own bottle is welcome to bring one.\n\nVolunteers under eighteen ___(17)___ work on the road-crossing points, because our insurance does not cover them there; we will place you at a water station instead, where there is always a supervisor within sight.\n\nThe course closes at two o\'clock. If a runner is still on your section after that, the sweep vehicle ___(18)___ reach you within about ten minutes, though do not rely on it to the minute; stay where you are and wave it down rather than setting off back on your own.',
          blank: '(18)',
          stem: 'Choose the best option for blank (18).',
          options: ['must', 'can', 'might not', 'should'],
          answer: 3,
          why: '<em>should</em> here is expectation, not advice: it says what the schedule predicts while leaving room for the warning that follows. <em>must</em> claims a confident deduction, which the clause <em>do not rely on it to the minute</em> immediately withdraws. <em>can</em> states a capacity of the vehicle in general rather than a prediction about this afternoon. <em>might not</em> reverses the direction and would leave a volunteer with no reason to wait.' },

        { id: 'm2-19', type: 'gap', tag: 'dyn-ability', level: 'B2', blank: '(19)',
          lines: [
            { who: 'Mali', text: 'I have been practising the demonstration all week, and I still ___(19)___ get the projector to mirror my laptop.' },
            { who: 'Teerapat', text: 'The socket on the side of the desk is loose. Try the one at the back instead.' },
            { who: 'Mali', text: 'I did, twice. Nothing at all. If it fails on Friday I will be talking through the slides from memory.' },
            { who: 'Teerapat', text: '___(20)___ bring my adapter in tomorrow? You could test it in the room before the class arrives.' },
            { who: 'Mali', text: 'That would save me. Tomorrow morning, then, if you are here early.' }
          ],
          stem: 'Choose the best option for gap (19).',
          options: ['can\'t', 'couldn\'t', 'am not able', 'mustn\'t'],
          answer: 0,
          why: 'The inability is going on now — <em>I have been practising all week, and I still …</em> — so the present form <em>can\'t</em> is required. <em>couldn\'t</em> pushes the failure back into finished past time, which <em>still</em> contradicts. <em>am not able</em> is the repair form with its <em>to</em> missing: it would have to be <em>am not able to get</em>. <em>mustn\'t</em> forbids, and nobody has banned Mali from using the projector.' },

        { id: 'm2-20', type: 'gap', tag: 'dist-offer', level: 'B2+', blank: '(20)',
          lines: [
            { who: 'Mali', text: 'I have been practising the demonstration all week, and I still ___(19)___ get the projector to mirror my laptop.' },
            { who: 'Teerapat', text: 'The socket on the side of the desk is loose. Try the one at the back instead.' },
            { who: 'Mali', text: 'I did, twice. Nothing at all. If it fails on Friday I will be talking through the slides from memory.' },
            { who: 'Teerapat', text: '___(20)___ bring my adapter in tomorrow? You could test it in the room before the class arrives.' },
            { who: 'Mali', text: 'That would save me. Tomorrow morning, then, if you are here early.' }
          ],
          stem: 'Choose the best option for gap (20).',
          options: ['Must I', 'Do I', 'Shall I', 'Need I'],
          answer: 2,
          why: '<em>Shall I …?</em> is the standard way of offering to do something, and Mali\'s reply — <em>that would save me</em> — accepts an offer. <em>Must I …?</em> is a natural question from someone who has been told to bring the adapter and would rather not, but nobody has told Teerapat anything; he is volunteering. <em>Do I …?</em> asks whether that is the existing arrangement, and no arrangement has been made yet. <em>Need I …?</em> asks whether it is really necessary, which again treats the adapter as a chore rather than as help he is putting on the table.' }
      ]
    }
  ]
});
