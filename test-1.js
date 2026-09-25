/* ===========================================================================
   TEST 1 — m1 · THE TRIAGE
   Twenty-six items, one per teaching point: twenty sampling the eight core stages
   in order, and six (Part E) keyed to Gateway B2 Unit 5 that route to Stage 9.
   MOCKS[0] is the diagnostic: the engine turns every miss into a study
   checklist, so each item is a clean single-point test of one tag.
   =========================================================================== */
MOCKS.push({
  id: 'm1',
  name: 'Triage Test',
  blurb: 'Twenty-six questions across all nine stages. It is not a score to be proud of or ashamed of — it is a map. What you miss here becomes your checklist.',
  minutes: 32,
  total: 26,
  sections: [

    /* ------------------------------------------------ PART A, items 1-5 */
    {
      code: 'A',
      part: 'PART A: THE FRAME AND THE SCALE',
      title: 'Form, and how sure you are',
      instructions: 'Five questions on the shape of a modal verb phrase and on the scale of certainty. Answer every one; a guess you get wrong still tells the app where to send you.',
      points: 1,
      items: [

        { id: 'm1-1', type: 'choose', tag: 'frame-form', level: 'B1',
          stem: 'Every candidate ______ two forms of identification when collecting the examination permit.',
          options: ['must shows', 'must to show', 'must showing', 'must show'],
          answer: 3,
          why: 'A modal is followed by a bare infinitive, so <em>must show</em> is the only possible shape. <em>must shows</em> adds the third-person <em>-s</em> that a modal never takes, because the modal is not the verb of the clause. <em>must to show</em> inserts <em>to</em>, which is the commonest transfer error from a language that builds verb-plus-verb freely. <em>must showing</em> puts an <em>-ing</em> form where only a bare form can stand.' },

        { id: 'm1-2', type: 'spot', tag: 'frame-defect', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Candidates who register', 'after the closing date', 'will must pay an additional fee', 'before their entry is confirmed.'],
          answer: 2,
          fix: 'will have to pay an additional fee',
          why: 'A modal has no infinitive, so it can never follow another modal: <em>will must</em> is impossible, and the language repairs it with <em>will have to</em>. Part 3 is the only part with a modal in it; the other three are ordinary phrases with nothing modal to go wrong. This is the gap the whole semi-modal system exists to fill.' },

        { id: 'm1-3', type: 'choose', tag: 'epi-scale', level: 'B1+',
          stem: 'The lights are on, both bicycles are in the yard and the radio is playing, so someone ______ at home.',
          options: ['must be', 'should be', 'may be', 'can be'],
          answer: 0,
          why: 'Three converging pieces of evidence leave no other reasonable conclusion, which is the top rung of the scale: <em>must be</em>. <em>should be</em> states what a pattern predicts rather than what this evidence shows, so it would fit a timetable, not a lit window. <em>may be</em> drops to the weak middle and throws away the evidence you have just been given. <em>can be</em> is not used for a deduction about one particular situation at all; it states a general capacity.' },

        { id: 'm1-4', type: 'equiv', tag: 'epi-cant', level: 'B2',
          given: 'I am certain that the fault is not in the wiring.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The fault mustn\'t be in the wiring.',
            'The fault may not be in the wiring.',
            'The fault shouldn\'t be in the wiring.',
            'The fault can\'t be in the wiring.'
          ],
          answer: 3,
          why: 'Deductive <em>must</em> has a suppletive negative: the opposite of <em>it must be</em> is <em>it can\'t be</em>, not <em>it mustn\'t be</em>. <em>mustn\'t</em> was already taken by prohibition, so option 1 says the wiring is forbidden to contain the fault. Option 2, <em>may not</em>, only leaves the possibility open, which is far weaker than certainty. Option 3, <em>shouldn\'t</em>, is expectation or advice, not a conclusion drawn from evidence.' },

        { id: 'm1-5', type: 'choose', tag: 'epi-negscope', level: 'B2',
          stem: 'A document examiner has found a few things about the second signature that worry her, but nothing conclusive, so as things stand it ______ genuine.',
          options: ['can\'t be', 'may not be', 'mustn\'t be', 'shouldn\'t be'],
          answer: 1,
          why: 'The examiner has doubts but no proof, so what the sentence needs is the possibility that it is not genuine, and that is <em>may not be</em>. <em>can\'t be</em> puts the <em>not</em> on the possibility instead and claims an impossibility, which <em>nothing conclusive</em> expressly denies her. <em>mustn\'t be</em> forbids the signature from being genuine, which is nonsense about a document nobody can instruct. <em>shouldn\'t be</em> shifts the sentence to what ought to be the case rather than what the evidence allows.' }
      ]
    },

    /* ----------------------------------------------- PART B, items 6-10 */
    {
      code: 'B',
      part: 'PART B: RULES AND ABILITY',
      title: 'Obligation, permission, ability',
      instructions: 'Five questions on what the rules require and on what people and things are able to do. One of them is a conversation with a gap in it.',
      points: 1,
      items: [

        { id: 'm1-6', type: 'choose', tag: 'deo-source', level: 'B2',
          stem: 'A research student writes to her supervisor. The necessity is not hers, and she wants the sentence to show where it comes from: <em>I am sorry, but I ______ move our Thursday meeting — the clinic has given me a fixed appointment at two.</em>',
          options: ['must', 'have to', 'want to', 'am supposed to'],
          answer: 1,
          why: '<em>have to</em> reports a requirement issued somewhere else — here by the clinic — which is what the stem asks the sentence to show. <em>must</em> puts the necessity in the writer\'s own mouth, so it claims the decision as hers and leaves the named external cause with nothing to do. <em>want to</em> turns a constraint into a preference, which is not what an apology and a fixed appointment are reporting. <em>am supposed to</em> reports a rule somebody else has laid down and hints that it is not being kept, and no rule requires her to move the meeting.' },

        { id: 'm1-7', type: 'spot', tag: 'deo-negcliff', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The laboratory is open to all students,', 'so you mustn\'t book a slot in advance', 'unless you need the fume cupboard,', 'which is shared with the research group.'],
          answer: 1,
          fix: 'so you don\'t have to book a slot in advance',
          why: '<em>mustn\'t</em> forbids, so part 2 as written bans booking — the opposite of what an open laboratory means. Removing an obligation needs <em>don\'t have to</em> or <em>needn\'t</em>; the two forms look like a pair and are near-opposites. The other parts are consistent with each other and contain no negation to misplace.' },

        { id: 'm1-8', type: 'gap', tag: 'deo-advice', level: 'B2', blank: '(8)',
          lines: [
            { who: 'Nok', text: 'My interview is at nine on Friday, and the office is right across the city from here.' },
            { who: 'Kiet', text: 'Then you ___(8)___ leave before seven. The expressway is solid after that, and arriving late at an interview is not something you recover from.' },
            { who: 'Nok', text: 'That early? I was going to take the eight o\'clock bus.' },
            { who: 'Kiet', text: 'Take the earlier one. You can always sit in a coffee shop for an hour.' }
          ],
          stem: 'Choose the best option for gap (8).',
          options: ['had better', 'would rather', 'are supposed to', 'are allowed to'],
          answer: 0,
          why: '<em>had better</em> is urgent advice with a specific bad consequence attached, and Kiet spells that consequence out in the very next clause. <em>would rather</em> states a preference of Nok\'s own, but Kiet is telling her what to do, not reporting what she would like. <em>are supposed to</em> reports a rule somebody else has laid down, and nobody has laid one down about when Nok leaves the house. <em>are allowed to</em> grants permission, which is not what a warning about the expressway does.' },

        { id: 'm1-9', type: 'choose', tag: 'dyn-occasion', level: 'B2+',
          stem: 'The rope bridge was down, but by following the dry riverbed the survey team ______ the village before nightfall.',
          options: ['could reach', 'was able to reach', 'can reach', 'could have reached'],
          answer: 1,
          why: 'One successful completed action needs a form that asserts the event actually came off, so <em>was able to reach</em>. <em>could</em> names a standing power rather than an achievement, and is blocked here by the single-occasion rule. <em>can reach</em> puts a finished past event in present time. <em>could have reached</em> says the chance existed and was not taken, which denies that they arrived at all.' },

        { id: 'm1-10', type: 'choose', tag: 'dyn-repair', level: 'B2+',
          stem: 'Since the new filter was fitted, the plant ______ meet the discharge limit every single month.',
          options: ['has been able to', 'has could', 'could have', 'will be able to'],
          answer: 0,
          why: 'A perfect needs a past participle and <em>can</em> has none, so the repair form is forced: <em>has been able to</em>. <em>has could</em> is the error itself — a modal has no participle and cannot stand after <em>have</em>. <em>could have</em> shifts the meaning to a chance that was not taken, which contradicts <em>every single month</em>. <em>will be able to</em> is the right repair in the wrong slot: it points forward, while <em>since the new filter was fitted</em> asks for a record running from the past up to now.' }
      ]
    },

    /* ---------------------------------------------- PART C, items 11-15 */
    {
      code: 'C',
      part: 'PART C: DISTANCE AND THE PAST',
      title: 'Remote forms, and modality in past time',
      instructions: 'Five questions on the remote forms and on how English talks about the past with a modal. One question has a short text with a gap in it.',
      points: 1,
      items: [

        { id: 'm1-11', type: 'choose', tag: 'dist-core', level: 'B2+',
          stem: 'In which sentence does <em>could</em> refer to <strong>past time</strong>?',
          options: [
            'I was wondering whether you could look through the second draft for me.',
            'The stain spreading across the ceiling could be coming from the flat above.',
            'In the years the mill was running, you could smell the dye from the station.',
            'If the timetable were redrawn, the whole branch line could run on time.'
          ],
          answer: 2,
          why: 'Only option 3 is anchored in finished past time, by <em>in the years the mill was running</em>, so the remote form there is marking distance in time. Option 1 is a present request softened by the remote form, so its distance is social. Option 2 is a guess about what is happening now, so its distance is in likelihood. Option 4 sits inside an unreal condition, which is distance in likelihood again rather than a past event.' },

        { id: 'm1-12', type: 'equiv', tag: 'dist-request', level: 'B2+',
          given: 'Would you mind moving your car? It is blocking the loading bay.',
          stem: 'Which sentence makes the same request at roughly the same level of politeness?',
          options: [
            'You must move your car at once. It is blocking the loading bay.',
            'I need you to move your car. It is blocking the loading bay.',
            'Will you move your car? It is blocking the loading bay.',
            'Could you move your car, please? It is blocking the loading bay.'
          ],
          answer: 3,
          why: '<em>Could you … please</em> sits on the same part of the politeness dial as <em>would you mind</em>: a remote form that makes the request smaller. Option 1 drops the dial to bare obligation and issues an order. Option 2 is grammatical and perfectly clear, but it reports the speaker\'s need and leaves the hearer no room to decline. Option 3 is the right act at the wrong politeness: it is a request, but <em>Will you …?</em> with no softening sounds impatient, several rungs below <em>would you mind</em>.' },

        { id: 'm1-13', type: 'choose', tag: 'past-deduce', level: 'B2+',
          stem: 'The cabinet was locked at six and nothing was signed out overnight, so the missing folder ______ inside the building all night.',
          options: ['can\'t have been', 'must be', 'must have been', 'must had been'],
          answer: 2,
          why: 'The deduction is being made now about a state that held last night, and that is exactly <em>must have been</em>: a present conclusion about a past situation. <em>can\'t have been</em> draws the opposite conclusion from the same evidence, which points to the folder staying put rather than leaving the building. <em>must be</em> makes the state present, but the sentence is about a night that has finished. <em>must had been</em> is the right idea in the wrong shape: after a modal the verb stays bare, so it is always <em>have</em>, never <em>had</em>.' },

        { id: 'm1-14', type: 'spot', tag: 'past-should', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The contractor now accepts', 'that nobody signed the log at any point that week,', 'and that the scaffolding', 'should be inspected on the Friday before the collapse.'],
          answer: 3,
          fix: 'should have been inspected on the Friday before the collapse.',
          why: 'Part 4 names one particular past day, so it cannot be stating a standing rule; it is looking back at an inspection that never took place, and that criticism needs <em>should have been inspected</em>. <em>should be inspected</em> would have to point at the present or the future, and <em>the Friday before the collapse</em> leaves it nowhere to point. Parts 1, 2 and 3 report what was said and what was done, and carry no modal to get wrong.' },

        { id: 'm1-15', type: 'cloze', tag: 'past-needpair', level: 'C1',
          passage: 'Notes from a project review.\n\nThe team had set aside the whole of Tuesday to rebuild the customer index by hand, a job nobody was looking forward to. On Monday afternoon the supplier confirmed that a clean backup from the previous week had been sitting on the archive server all along, and the rebuild came straight off the plan.\n\nIn other words, they ___(15)___ the index by hand, and Tuesday went on the migration script instead.',
          blank: '(15)',
          stem: 'Choose the best option for blank (15).',
          options: ['needn\'t have rebuilt', 'didn\'t need to rebuild', 'mustn\'t have rebuilt', 'couldn\'t have rebuilt'],
          answer: 1,
          why: '<em>didn\'t need to do</em> states that the necessity was absent and says nothing at all about the action, so it is the only form that fits a job the passage tells you never started. <em>needn\'t have rebuilt</em> would assert that they did rebuild the index and wasted the day on it, which the change of plan rules out — that is the whole difference between the pair. <em>mustn\'t have rebuilt</em> could only be a guess about what happened, and British English makes that negative guess with <em>can\'t have</em>; the passage is stating a fact, not guessing. <em>couldn\'t have rebuilt</em> says the job would have been impossible, but nothing was stopping them; it was simply unnecessary.' }
      ]
    },

    /* ---------------------------------------------- PART D, items 16-20 */
    {
      code: 'D',
      part: 'PART D: STANCE AND THE WHOLE SYSTEM',
      title: 'Hedging, and modals under pressure',
      instructions: 'Five questions on pitching a claim at the right strength and on holding the whole system together. This is the material an IELTS essay is marked on.',
      points: 1,
      items: [

        { id: 'm1-16', type: 'choose', tag: 'hedge-over', level: 'C1',
          stem: 'A study in one district finds that children who eat a school breakfast score slightly higher in reading tests. Which sentence reports the finding at the strength it will bear?',
          options: [
            'This proves that eating a school breakfast raises a child\'s reading attainment.',
            'Giving children a school breakfast will always improve their reading attainment.',
            'This suggests that a school breakfast may contribute to better reading scores.',
            'Every child who eats a school breakfast reads better than one who does not.'
          ],
          answer: 2,
          why: 'One district and a small difference will support a cautious causal suggestion, and that is what <em>suggests</em> plus <em>may</em> delivers. Option 1 turns a correlation into a demonstrated cause on the strength of a single study. Option 2 adds an invariable future — <em>will always</em> — that no sample from one district can reach. Option 4 overclaims in a third way, quantifying over every individual child when the finding is an average difference between two groups.' },

        { id: 'm1-17', type: 'choose', tag: 'hedge-adverb', level: 'C1',
          stem: 'A housing economist thinks a rise is <strong>likely but not certain</strong>: <em>Rents within walking distance of the new station ______ rise.</em>',
          options: ['might possibly', 'will certainly', 'may not', 'may well'],
          answer: 3,
          why: '<em>may well</em> is the standard way of raising a bare possibility to a likelihood: the adverb does work the modal alone cannot do. <em>might possibly</em> is the right kind of phrase — modal plus adverb — pushed the wrong way: it keeps the claim at a bare possibility, or even below it, so it cannot say <em>likely</em>. <em>will certainly</em> is a booster and claims the certainty the writer has just said she does not have. <em>may not</em> reverses the direction and makes the claim about rents failing to rise.' },

        { id: 'm1-18', type: 'equiv', tag: 'hedge-concede', level: 'C1+',
          given: 'Online lectures are certainly convenient for students who live far from campus. Even so, they weaken the informal contact that makes a department work.',
          stem: 'Which sentence concedes the convenience and then counters it, in a single sentence?',
          options: [
            'Online lectures may well suit students living far from campus, but they erode the informal contact on which a department depends.',
            'Online lectures are undoubtedly convenient for students living far from campus, and they erode the informal contact on which a department depends.',
            'Online lectures might suit students living far from campus, and they might erode the informal contact on which a department depends.',
            'Although online lectures do not really suit students living far from campus, they erode the informal contact on which a department depends.'
          ],
          answer: 0,
          why: '<em>may well … but</em> is the concessive modal: it grants the other side at a strength the writer can afford, then turns, which is the two-step the original spreads over two sentences. Re-pitching <em>certainly</em> as <em>may well</em> is part of that move, because a point you are about to answer is conceded at a measured strength, not boosted. Option 2 boosts the concession and then joins the halves with <em>and</em>, so nothing is ever turned. Option 3 hedges the counter-claim as well as the concession, leaving no position standing, and option 4 refuses outright the point it was supposed to grant.' },

        { id: 'm1-19', type: 'choose', tag: 'sys-ambig', level: 'C1',
          stem: 'In which sentence is <em>must</em> a <strong>deduction</strong> rather than an obligation?',
          options: [
            'All visiting researchers must register with the porters on the day they arrive.',
            'You must try the noodle place under the bridge; it is quite extraordinary.',
            'The freezer alarm has been silent all week, so the sensor must be faulty.',
            'Applications must reach the admissions office by the end of the month.'
          ],
          answer: 2,
          why: 'Option 3 has a subject that cannot obey anything, a state verb after the modal and an explicit piece of evidence, which are the three clearest signs of a deduction. Option 1 is an institutional rule addressed to people who can comply with it. Option 2 is insistent recommendation — still something the hearer is being pushed to do. Option 4 is a deadline, which is a rule with a time on it.' },

        { id: 'm1-20', type: 'spot', tag: 'sys-report', level: 'C1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The new rota will take effect in the following January,', 'the director said at the staff briefing,', 'and he added that nobody', 'would be moved between the two sites.'],
          answer: 0,
          fix: 'The new rota would take effect in the following January,',
          why: 'The whole sentence is indirect speech under a past reporting verb, and <em>the following January</em> is a time phrase that only works from a past point of view, so <em>will</em> must take the step back to <em>would</em>. Part 4 already shows the backshifted pattern, which is what makes the inconsistency in part 1 visible. Parts 2 and 3 carry no modal of their own, and <em>would be moved</em> is exactly what the rule produces.' }
      ]
    },

    /* ------------------------------------------ PART E, items 21-26 */
    {
      code: 'E',
      part: 'PART E: UNIT 5 REVIEW',
      title: 'Rules now, rules then, and guesses',
      instructions: 'Six questions on the grammar of Unit 5 in your coursebook: what you have to do, what you had to do, and how sure you are about what is true or what happened. A miss here sends you to the Stage 9 review.',
      points: 1,
      items: [

        { id: 'm1-21', type: 'choose', tag: 'u5-now-neg', level: 'B1+',
          stem: 'The school concert is free for students. Complete the notice: <em>Students ______ buy a ticket — just show your student card at the door.</em>',
          options: ['mustn\'t', 'aren\'t allowed to', 'don\'t have to', 'shouldn\'t'],
          answer: 2,
          why: 'The concert is free, so there is no obligation to buy a ticket: <em>don\'t have to</em>. Option 1, <em>mustn\'t</em>, is the near miss: it looks like the negative of <em>have to</em>, but it means buying a ticket is against the rules — the opposite of the message. Option 2 is the same ban in other words. Option 4, <em>shouldn\'t</em>, advises students not to buy one, which is not what a notice about a free concert is saying.' },

        { id: 'm1-22', type: 'spot', tag: 'u5-now-form', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The station is only', 'five minutes away, so', 'we needn\'t to take', 'a taxi this evening.'],
          answer: 2,
          fix: 'we needn\'t take',
          why: '<em>Needn\'t</em> is followed by the verb without <em>to</em>: <em>we needn\'t take a taxi</em>. The form with <em>to</em> is <em>we don\'t need to take</em>, which is also correct — the mistake is mixing the two patterns. The other three parts are correct: the description of the station, the linking <em>so</em> and the time phrase are all well formed.' },

        { id: 'm1-23', type: 'choose', tag: 'u5-past-oblig', level: 'B1+',
          stem: 'The cash machine near our flat was broken, so yesterday we ______ to the bank in town.',
          options: ['must go', 'had to go', 'have to go', 'must have gone'],
          answer: 1,
          why: 'Going to the bank was necessary, and it happened <em>yesterday</em>, so the sentence needs the past of obligation: <em>had to go</em>. <em>Have to go</em> is the near miss — the right verb, but present, and the word <em>yesterday</em> cannot make it past on its own. <em>Must go</em> has no past form. <em>Must have gone</em> is a guess about the past ("I\'m almost sure we went"), but the speaker knows what she did yesterday, so there is nothing to guess.' },

        { id: 'm1-24', type: 'choose', tag: 'u5-past-look', level: 'B2',
          stem: 'I bought a dictionary for my English course, but on the first day the teacher gave everyone one for free. I ______ one.',
          options: ['needn\'t have bought', 'mustn\'t have bought', 'needn\'t buy', 'shouldn\'t buy'],
          answer: 0,
          why: 'The speaker <strong>did</strong> buy a dictionary, and it turned out to be unnecessary, which is exactly what <em>needn\'t have bought</em> says. <em>Needn\'t buy</em> is the near miss — the right idea of "not necessary", but it is about now or the future, and the buying is finished. <em>Shouldn\'t buy</em> is advice about now, not a comment on a past action. <em>Mustn\'t have bought</em> is not a correct way to talk about something you did.' },

        { id: 'm1-25', type: 'choose', tag: 'u5-guess-now', level: 'B1+',
          stem: 'Anna\'s sister is in Australia this month, so that girl at the bus stop ______ her. She just looks a bit like her.',
          options: ['mustn\'t be', 'might not be', 'must be', 'can\'t be'],
          answer: 3,
          why: 'Anna\'s sister is on the other side of the world, so the speaker is about 90% sure the girl is <strong>not</strong> her: <em>can\'t be</em>. <em>Mustn\'t be</em> is the near miss. It looks like the opposite of <em>must</em>, but <em>mustn\'t</em> is for rules, not guesses. <em>Might not be</em> is only a 50% "maybe not", too weak when we know the sister is in Australia. <em>Must be</em> says the opposite of the evidence.' },

        { id: 'm1-26', type: 'spot', tag: 'u5-guess-form', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Josh isn\'t answering his phone.', 'He might forgot to charge it,', 'because the battery was almost dead', 'when I saw him at lunchtime.'],
          answer: 1,
          fix: 'He might have forgotten to charge it,',
          why: 'A guess about the past needs the chain modal + <em>have</em> + past participle: <em>might have forgotten</em>. <s>Might forgot</s> drops <em>have</em> and puts a past simple straight after the modal, which English never allows. The other parts are correct: part 1 is about now, and parts 3 and 4 are ordinary past simple.' }
      ]
    }
  ]
});
