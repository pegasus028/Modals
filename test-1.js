/* ===========================================================================
   TEST 1 — m1 · THE TRIAGE
   Twenty items, one per teaching point, sampling all eight stages in order.
   MOCKS[0] is the diagnostic: the engine turns every miss into a study
   checklist, so each item is a clean single-point test of one tag.
   =========================================================================== */
MOCKS.push({
  id: 'm1',
  name: 'Triage Test',
  blurb: 'Twenty questions across all eight stages. It is not a score to be proud of or ashamed of — it is a map. What you miss here becomes your checklist.',
  minutes: 25,
  total: 20,
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
          options: ['must show', 'must shows', 'must to show', 'must showing'],
          answer: 0,
          why: 'A modal is followed by a bare infinitive, so <em>must show</em> is the only possible shape. <em>must shows</em> adds the third-person <em>-s</em> that a modal never takes, because the modal is not the verb of the clause. <em>must to show</em> inserts <em>to</em>, which is the commonest transfer error from a language that builds verb-plus-verb freely. <em>must showing</em> puts an <em>-ing</em> form where only a bare form can stand.' },

        { id: 'm1-2', type: 'spot', tag: 'frame-defect', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Candidates who register after the closing date', 'will must pay', 'an additional administration fee', 'before their entry is confirmed.'],
          answer: 1,
          fix: 'will have to pay',
          why: 'A modal has no infinitive, so it can never follow another modal: <em>will must</em> is impossible and the language repairs it with <em>will have to</em>. The other three parts are ordinary clauses with ordinary verbs and contain nothing modal to go wrong. This is the gap the whole semi-modal system exists to fill.' },

        { id: 'm1-3', type: 'choose', tag: 'epi-scale', level: 'B1+',
          stem: 'The lights are on, both bicycles are in the yard and the radio is playing, so someone ______ at home.',
          options: ['must be', 'should be', 'may be', 'can be'],
          answer: 0,
          why: 'Three converging pieces of evidence leave no other reasonable conclusion, which is the top rung of the scale: <em>must be</em>. <em>should be</em> states what a pattern predicts rather than what this evidence shows, so it would fit a timetable, not a lit window. <em>may be</em> drops to the weak middle and throws away the evidence you have just been given. <em>can be</em> is not used for a deduction about one particular situation at all; it states a general capacity.' },

        { id: 'm1-4', type: 'equiv', tag: 'epi-cant', level: 'B2',
          given: 'I am certain that the fault is not in the wiring.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The fault can\'t be in the wiring.',
            'The fault mustn\'t be in the wiring.',
            'The fault may not be in the wiring.',
            'The fault shouldn\'t be in the wiring.'
          ],
          answer: 0,
          why: 'Deductive <em>must</em> has a suppletive negative: the opposite of <em>it must be</em> is <em>it can\'t be</em>, not <em>it mustn\'t be</em>. <em>mustn\'t</em> was already taken by prohibition, so option 1 says the wiring is forbidden to contain the fault. <em>may not</em> only leaves the possibility open, which is far weaker than certainty. <em>shouldn\'t</em> is expectation or advice, not a conclusion from evidence.' },

        { id: 'm1-5', type: 'choose', tag: 'epi-negscope', level: 'B2',
          stem: 'Nothing in the file settles it either way, so the second signature ______ genuine — the auditors have not ruled that out.',
          options: ['can\'t be', 'may not be', 'mustn\'t be', 'shouldn\'t be'],
          answer: 1,
          why: 'The clause says the possibility is still open, so you need the possibility of a negative: <em>may not be</em>. <em>can\'t be</em> shuts the door completely and contradicts <em>have not ruled that out</em> in the same sentence. <em>mustn\'t be</em> forbids the signature from being genuine, which is nonsense about a document. <em>shouldn\'t be</em> makes it a matter of what ought to be the case rather than of what the evidence allows.' }
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
          stem: 'A research student writes to her supervisor: <em>I am sorry, but I ______ move our Thursday meeting — the clinic has given me a fixed appointment at two.</em>',
          options: ['must', 'have to', 'should', 'had better'],
          answer: 1,
          why: 'The authority is outside the writer — the clinic fixed the time — and that is exactly what <em>have to</em> reports. <em>must</em> would claim the decision as her own, which sits oddly next to an apology and a named external cause. <em>should</em> downgrades an immovable clash to a recommendation. <em>had better</em> warns about a bad consequence for herself, which is not what a diary clash is.' },

        { id: 'm1-7', type: 'spot', tag: 'deo-negcliff', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The laboratory is open to all students,', 'so you mustn\'t book a slot in advance', 'unless you need the fume cupboard,', 'which is shared with the research group.'],
          answer: 1,
          fix: 'so you don\'t have to book a slot in advance',
          why: '<em>mustn\'t</em> forbids, so part 1 as written bans booking — the opposite of what an open laboratory means. Removing an obligation needs <em>don\'t have to</em> or <em>needn\'t</em>; the two forms look like a pair and are near-opposites. The other parts are consistent with each other and contain no negation to misplace.' },

        { id: 'm1-8', type: 'gap', tag: 'deo-advice', level: 'B2', blank: '(8)',
          lines: [
            { who: 'Nok', text: 'My interview is at nine on Friday, and the office is right across the city from here.' },
            { who: 'Kiet', text: 'Then you ___(8)___ leave before seven. The expressway is solid after that, and arriving late at an interview is not something you recover from.' },
            { who: 'Nok', text: 'That early? I was going to take the eight o\'clock bus.' },
            { who: 'Kiet', text: 'Take the earlier one. You can always sit in a coffee shop for an hour.' }
          ],
          stem: 'Choose the best option for gap (8).',
          options: ['had better', 'should have', 'are supposed to', 'are allowed to'],
          answer: 0,
          why: '<em>had better</em> is urgent advice backed by a specific bad consequence, and Kiet names the consequence in the next clause. <em>should have</em> looks back at something that did not happen, but Friday is still ahead. <em>are supposed to</em> reports a rule somebody else has laid down, and nobody has laid one down here. <em>are allowed to</em> grants permission, which is not what a warning about traffic does.' },

        { id: 'm1-9', type: 'choose', tag: 'dyn-occasion', level: 'B2+',
          stem: 'The rope bridge was down, but by following the dry riverbed the survey team ______ the village before nightfall.',
          options: ['could reach', 'was able to reach', 'can reach', 'could have reached'],
          answer: 1,
          why: 'One successful completed action needs a form that asserts the event actually came off, so <em>was able to reach</em>. <em>could</em> names a standing power rather than an achievement, and is blocked here by the single-occasion rule. <em>can reach</em> puts a finished past event in present time. <em>could have reached</em> says the chance existed and was not taken, which denies that they arrived at all.' },

        { id: 'm1-10', type: 'choose', tag: 'dyn-repair', level: 'B2+',
          stem: 'Since the new filter was fitted, the plant ______ meet the discharge limit every single month.',
          options: ['has been able to', 'has could', 'could have', 'can have'],
          answer: 0,
          why: 'A perfect needs a past participle, and <em>can</em> has none, so the repair form <em>be able to</em> is forced: <em>has been able to</em>. <em>has could</em> is the error itself — a modal has no participle. <em>could have</em> shifts the meaning to a chance that was not taken, contradicting <em>every single month</em>. <em>can have</em> is not used to report a record of past success.' }
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
          stem: 'One of these four sentences uses <em>could</em> for remoteness in <strong>time</strong>. Which one?',
          options: [
            'Could I leave the draft with you until Monday morning?',
            'The stain on the ceiling could be coming from the flat above.',
            'In the years the mill was running, you could smell the dye from the station.',
            'If they redrew the timetable, the whole branch line could run on time.'
          ],
          answer: 2,
          why: 'Only option 2 is anchored in finished past time, by <em>in the years the mill was running</em>, so the remote form is marking distance in time. Option 0 is a present request, where the distance is social and reduces the imposition. Option 1 is a guess about what is happening now, so the distance is in likelihood. Option 3 sits in an unreal condition, which is distance in likelihood again rather than a past event.' },

        { id: 'm1-12', type: 'equiv', tag: 'dist-request', level: 'B2+',
          given: 'Would you mind moving your car? It is blocking the loading bay.',
          stem: 'Which sentence makes the same request at roughly the same level of politeness?',
          options: [
            'Could you move your car, please? It is blocking the loading bay.',
            'You must move your car. It is blocking the loading bay.',
            'Do you mind to move your car? It is blocking the loading bay.',
            'Would you like to move your car? It is blocking the loading bay.'
          ],
          answer: 0,
          why: '<em>Could you … please</em> sits on the same part of the politeness dial as <em>would you mind</em>: a remote form that reduces the imposition. <em>You must move</em> drops the dial to bare obligation and issues an order. <em>Do you mind to move</em> is ungrammatical — <em>mind</em> is followed by an <em>-ing</em> form. <em>Would you like to</em> is an offer or an invitation, so it asks about the hearer\'s wishes instead of asking for a favour.' },

        { id: 'm1-13', type: 'choose', tag: 'past-deduce', level: 'B2+',
          stem: 'The cabinet was locked at six and nothing was signed out overnight, so the missing folder ______ inside the building all night.',
          options: ['must have been', 'had to be', 'must be', 'should have been'],
          answer: 0,
          why: 'The deduction is being made now about a state that held last night, and that is exactly <em>must have been</em>: present modality over a past proposition. <em>had to be</em> reports a past requirement, as though a rule obliged the folder to stay. <em>must be</em> makes the state present, but the sentence is about the night that has finished. <em>should have been</em> says it did not happen and that this was a fault.' },

        { id: 'm1-14', type: 'spot', tag: 'past-should', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The contractor now accepts', 'that the scaffolding should be inspected on the Friday', 'and admits that nobody', 'signed the log at any point that week.'],
          answer: 1,
          fix: 'that the scaffolding should have been inspected on the Friday',
          why: 'The inspection did not take place — the log was never signed — so the criticism of an unrealised past action needs <em>should have been inspected</em>. <em>should be inspected</em> states a standing rule and leaves open that it was followed, which the last part of the sentence contradicts. The remaining parts report facts in the past and contain no modal to get wrong.' },

        { id: 'm1-15', type: 'cloze', tag: 'past-needpair', level: 'C1',
          passage: 'Notes from a project review.\n\nThe team spent the whole of Tuesday rebuilding the customer index by hand, a job nobody enjoyed. On Wednesday morning the supplier admitted that a clean backup from the previous week had been sitting on the archive server the entire time.\n\nIn other words, they ___(15)___ the index by hand at all, and one email on Monday would have saved two days of work.',
          blank: '(15)',
          stem: 'Choose the best option for blank (15).',
          options: ['needn\'t have rebuilt', 'didn\'t need to rebuild', 'mustn\'t have rebuilt', 'shouldn\'t rebuild'],
          answer: 0,
          why: '<em>needn\'t have done</em> says the action was carried out and then turned out to be unnecessary, which is precisely what the passage describes. <em>didn\'t need to rebuild</em> says the necessity was absent, and normally implies the work was never done — but Tuesday was spent doing it. <em>mustn\'t have rebuilt</em> is not English for this: <em>mustn\'t</em> forbids and cannot look back. <em>shouldn\'t rebuild</em> gives advice about now, and adds a blame the passage does not.' }
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
            'This proves that school breakfasts raise reading attainment.',
            'School breakfasts will always improve a child\'s reading.',
            'This suggests that a school breakfast may contribute to better reading scores.',
            'It could possibly be somewhat arguable that school breakfasts perhaps help reading.'
          ],
          answer: 2,
          why: 'One district and a small difference support a cautious causal suggestion, which is what <em>suggests</em> plus <em>may</em> delivers. <em>proves</em> converts a correlation into a demonstrated cause on a single study. <em>will always</em> adds a universal claim that no sample of one district can reach. Option 3 makes the opposite error: four hedges stacked on one proposition leave the reader with no claim to assess.' },

        { id: 'm1-17', type: 'choose', tag: 'hedge-adverb', level: 'C1',
          stem: 'A housing economist wants to say that an outcome is <strong>likely but not certain</strong>, in one phrase and without repeating herself: <em>Rents within walking distance of the new station ______ rise.</em>',
          options: ['may well', 'might possibly', 'will certainly', 'may not'],
          answer: 0,
          why: '<em>may well</em> is the standard way of raising a bare possibility to a likelihood: the adverb does work the modal alone cannot do. <em>might possibly</em> stacks an adverb that only repeats the modal, so it adds nothing and reads as padding. <em>will certainly</em> is a booster and claims the certainty the writer has just said she does not have. <em>may not</em> reverses the direction and makes the claim about rents failing to rise.' },

        { id: 'm1-18', type: 'equiv', tag: 'hedge-concede', level: 'C1+',
          given: 'Online lectures are certainly convenient for students who live far from campus. Even so, they weaken the informal contact that makes a department work.',
          stem: 'Which sentence makes the same concession and the same counter-argument in one move?',
          options: [
            'Online lectures may well suit students living far from campus, but they erode the informal contact on which a department depends.',
            'Online lectures are undoubtedly convenient for students living far from campus, and they erode the informal contact on which a department depends.',
            'Online lectures might suit students living far from campus, and they might erode the informal contact on which a department depends.',
            'Although online lectures could not suit students living far from campus, they erode the informal contact on which a department depends.'
          ],
          answer: 0,
          why: '<em>may well … but</em> grants the other side at a measured strength and then turns, which is the concessive move the original makes in two sentences. Option 1 concedes with a booster and then joins the two halves with <em>and</em>, so nothing is countered. Option 2 hedges the writer\'s own counter-claim as well as the concession, leaving no position at all. Option 3 denies the point that was supposed to be granted.' },

        { id: 'm1-19', type: 'choose', tag: 'sys-ambig', level: 'C1',
          stem: 'In which sentence is <em>must</em> a <strong>deduction</strong> rather than an obligation?',
          options: [
            'All visiting researchers must register with the porters on arrival.',
            'You must try the noodle place under the bridge — it is extraordinary.',
            'The freezer alarm has been silent all week, so the sensor must be faulty.',
            'Applications must reach the admissions office by the first of March.'
          ],
          answer: 2,
          why: 'Option 2 has a subject that cannot obey anything, a state verb after the modal and an explicit piece of evidence, which are the three clearest signs of a deduction. Option 0 is an institutional rule addressed to people who can comply. Option 1 is insistent recommendation — still something the hearer is being pushed to do. Option 3 is a deadline, which is a rule with a time on it.' },

        { id: 'm1-20', type: 'spot', tag: 'sys-report', level: 'C1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['At the briefing the director said', 'that the new rota will take effect', 'in the following January,', 'and that nobody would be moved between sites.'],
          answer: 1,
          fix: 'that the new rota would take effect',
          why: 'The reporting verb is past and the time reference is the past-anchored <em>the following January</em>, so <em>will</em> must take the step back to <em>would</em>. The final part already shows the backshifted pattern, which makes the inconsistency in part 1 visible. Parts 0 and 2 carry no modal, and <em>would be moved</em> in part 3 is exactly what the rule produces.' }
      ]
    }
  ]
});
