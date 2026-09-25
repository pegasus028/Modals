/* ===========================================================================
   STAGE 07 — Hedging and Stance
   Installs calibration: matching the force of a claim to the strength of the
   evidence behind it, in both directions — the overclaim and the hedge pile-up.
   =========================================================================== */

var T7 = {
  id: 't7', n: 7, code: 'Stage 07', art: 'scope',
  name: 'Hedging and Stance',
  cefr: 'C1',
  blurb: 'Academic English hedges because a claim must be pitched at the strength the evidence will bear. This is where the grammar becomes a band score.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T7.levels.push({
  id: 't7l1', n: 1, name: 'Matching the claim to the evidence', cefr: 'C1',
  blurb: 'The principle, and the two ways of getting it wrong — claiming more than the evidence allows, and hedging until nothing is left.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't7l1s1', name: 'Why academic English hedges', cefr: 'C1',
      theory: {
        key: 'A hedge is not timidity; it is the instrument by which a writer pitches a claim at exactly the strength the evidence will bear, and an examiner reads that calibration as evidence of thought.',
        body: [
          'Stage 2 built the epistemic ladder — <em>must · will · should · may · might · could · can\'t</em>. Academic writing uses the whole of it, constantly, and not for the reason students usually assume. A hedge is not politeness, and it is not a way of avoiding commitment. It is a <strong>report on the evidence</strong>: the modal tells the reader how far the writer is prepared to go, and therefore how much weight the claim can carry.',
          'Consider the same finding stated twice. <em>This proves that smaller classes raise attainment.</em> <em>This suggests that smaller classes may raise attainment.</em> The finding has not changed. What has changed is the size of the promise. The first sentence guarantees that the relationship holds everywhere, for every class and every subject; one well-designed study that finds nothing destroys it. The second survives that study intact, because it only ever claimed the relationship might hold.',
          'The mechanism is the quantification from Stage 2. An unhedged claim is <strong>universal</strong> — in every situation, this is so. A hedged claim is <strong>existential</strong> — in at least some situations, this is so. Universals are cheap to write and expensive to defend, because a single counterexample is enough, and readers hunt for it automatically. Every hedge narrows the set of cases you are answerable for, which is precisely why hedging is not weakness. You are choosing what you can defend.',
          'The Task Response descriptor caps a script at Band 7 for <strong>a tendency to over-generalise</strong>, and that is the ceiling this stage exists to break; Band 8 asks instead for ideas that are <strong>relevant, extended and supported</strong>. Notice that precision cuts both ways. Writing <em>may</em> where the evidence supports <em>is</em> is as inaccurate as writing <em>proves</em> where it supports <em>suggests</em>. The target is not caution. It is a match.'
        ],
        simple: [
          'A hedge — <em>may</em>, <em>tends to</em>, <em>it appears that</em> — tells the reader how sure you are. It is not politeness and it is not weakness.',
          'A sentence with no hedge promises that the claim is true <strong>always and everywhere</strong>, so one exception destroys it. A hedged sentence promises much less, and is therefore much harder to knock down.',
          'The aim is a match. Too strong (<em>this proves</em>) and the examiner sees over-generalising. Too weak (<em>it may possibly be</em>) and the examiner sees a writer with nothing to say.'
        ],
        examples: [
          { s: 'This <b>suggests</b> that smaller classes <b>may</b> raise attainment.', g: 'one study, reported at the strength one study will bear.' },
          { s: 'Rising rents <b>appear to</b> be pushing younger workers out of the centre.', g: 'the evidence points this way; the writer stops short of asserting it.' },
          { s: '<s>This proves that smaller classes raise attainment.</s>', g: 'a universal claim built from a single finding, which an examiner reads as over-generalising.' },
          { s: 'Water <b>boils</b> at 100 degrees at sea level.', g: 'no hedge, because none is needed — hedging a settled fact is its own error.' }
        ]
      },
      items: [
        { id: 't7l1s1-1', type: 'choose', tag: 'hedge-why', level: 'C1',
          stem: 'A survey of 400 commuters in one city found that those who switched to the new metro line reported shorter journeys. Which sentence reports that finding at the strength it will bear?',
          options: [
            'The survey proves that metro lines shorten journeys.',
            'The survey suggests that a new metro line may shorten journeys for some commuters.',
            'The survey suggests that a new metro line is likely to shorten journeys in other cities too.',
            'The survey may possibly indicate that it could perhaps be somewhat arguable that journeys are shorter.'
          ],
          answer: 1,
          why: 'Four hundred commuters in one city is enough to point in a direction and not enough to settle anything, which is exactly what <em>suggests … may … for some</em> claims. <em>Proves</em> turns one local survey into a general law. Option 3 looks careful, but <em>is likely to … in other cities too</em> stretches a survey of one city to places it never looked at, and at a strength one survey cannot give. The last option hedges five times over and ends up asserting nothing at all.' },

        { id: 't7l1s1-2', type: 'judge', tag: 'hedge-why', level: 'C1',
          given: 'Congestion charging may reduce private car use in dense city centres.',
          stem: 'The writer is claiming that congestion charging does reduce private car use.',
          answer: 1,
          why: '<em>May</em> places the claim in the weak middle of the epistemic ladder: the writer states that the reduction is possible, not that it occurs. Asserting that it occurs would need <em>reduces</em> or <em>is likely to reduce</em>. This is not a case of missing information, so <em>Can\'t tell</em> is wrong — the sentence is perfectly explicit about its own strength, and that strength is not assertion.' },

        { id: 't7l1s1-3', type: 'choose', tag: 'hedge-why', level: 'C1',
          stem: 'What does adding <em>may</em> to a claim actually change?',
          options: [
            'It makes the sentence more polite, and examiners reward politeness.',
            'It limits the claim to some cases instead of every case.',
            'It makes the claim harder for the reader to understand.',
            'It removes the writer\'s responsibility for the claim entirely.'
          ],
          answer: 1,
          why: 'Without a hedge the claim covers every case; with one it covers only some, and that is the whole mechanism. Politeness is the wrong frame, since no one\'s feelings are at stake in a claim about traffic and examiners reward accuracy rather than deference. Clarity is unaffected — a well-hedged claim is more precise, not less. And responsibility is not removed but reduced to something defensible, which is why a careful writer can still be held to exactly what they wrote.' },

        { id: 't7l1s1-4', type: 'equiv', tag: 'hedge-why', level: 'C1',
          given: 'It is certain that automation will eliminate most clerical work within a decade.',
          stem: 'Nobody can check a ten-year forecast until the ten years have passed. Which sentence makes the same point as strongly as an honest forecast can?',
          options: [
            'Automation is likely to remove a large share of clerical work within a decade.',
            'Automation could conceivably remove some clerical work within a decade.',
            'Automation will definitely remove nearly all clerical work within a decade.',
            'It may possibly be arguable that automation could perhaps affect clerical work.'
          ],
          answer: 0,
          why: 'A forecast a decade ahead is a prediction, and <em>is likely to</em> is the strongest honest form a prediction takes, while <em>a large share</em> keeps the scale without promising <em>most</em>. Option 2 is honest too, but <em>could conceivably … some</em> pitches the forecast far lower than it needs to be, and the question asks for the strongest honest version. Option 3 is the original overclaim in new clothes, since <em>definitely</em> and <em>nearly all</em> do the work of <em>certain</em> and <em>most</em>. Option 4 stacks four hedges on one claim and asserts nothing.' },

        { id: 't7l1s1-5', type: 'sort', tag: 'hedge-why', level: 'C1',
          stem: 'One study of a single hospital found that patients discharged with a follow-up phone call were readmitted less often. Sort the claims by whether that one finding will carry them.',
          bins: [
            { key: 'ok', label: 'Within the finding', hint: 'claims no more than one study of one hospital allows' },
            { key: 'no', label: 'Beyond the finding', hint: 'claims more than one study of one hospital allows' }
          ],
          items: [
            { text: 'Follow-up calls <em>appear to</em> reduce readmission in this hospital.', bin: 'ok' },
            { text: 'Follow-up calls <em>may</em> be worth trialling more widely.', bin: 'ok' },
            { text: 'The study <em>indicates</em> a possible link between contact after discharge and readmission.', bin: 'ok' },
            { text: 'Follow-up calls <em>prove</em> that patient contact prevents readmission.', bin: 'no' },
            { text: 'Every hospital <em>will</em> cut readmissions by introducing follow-up calls.', bin: 'no' },
            { text: 'Readmission <em>is always</em> the result of poor contact after discharge.', bin: 'no' }
          ],
          why: 'The three claims that stay within the finding all keep it tied to its source — one hospital, one direction, one possibility worth testing. The three that fail do so for different reasons: <em>prove</em> converts a correlation into a cause, <em>every hospital will</em> generalises from a single site to all of them, and <em>always</em> makes poor contact the only cause of readmission when the study observed one contributing factor among many.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't7l1s2', name: 'The overclaim: proves, will always, everyone', cefr: 'C1',
      theory: {
        key: 'An overclaim is a promise the evidence cannot keep, and it arrives in one of three shapes: the verb (<em>proves</em>), the quantifier (<em>everyone, always</em>) or the modal (<em>will, must be</em>).',
        body: [
          'Overclaiming is the commonest single reason an otherwise competent essay stalls below Band 7. It is rarely a matter of one bad word. It is a habit of writing every claim at maximum force, because maximum force feels like confidence — and to an examiner it reads as the opposite, as a writer who has not noticed that claims differ in how well they are supported.',
          'Learn the three shapes, because they are easy to hunt for in a draft. <strong>The verb:</strong> <em>proves, shows conclusively, demonstrates, establishes</em>. Almost nothing available to an essay candidate proves anything; findings <em>suggest, indicate, point to</em>. <strong>The quantifier:</strong> <em>everyone, all, none, always, never, in every country</em>. <strong>The modal:</strong> <em>will</em> and epistemic <em>must</em> at full strength — <em>fees will deter applicants</em>, <em>the cause must be poverty</em>.',
          'One mechanism lies behind all three. A universal claim is a claim about every member of a set, so it is falsified by one member. <em>Everyone benefits from studying abroad</em> invites the reader to think of one person who did not, and the moment they do, the paragraph is finished. <em>Most students benefit</em> asks them to think about the majority instead, and the majority is a far easier thing to defend. The overclaim does not make the argument stronger; it hands the reader the tool to break it.',
          'The repair is not deletion but <strong>downgrading by one rung</strong>, and the claim normally survives with its argumentative work intact: <em>proves → suggests</em>, <em>will → is likely to</em>, <em>everyone → the majority</em>, <em>always → in most cases</em>, <em>must be → may well be</em>. Notice what does <u>not</u> need hedging: definitions, uncontested facts, and your own thesis. A thesis is a position you are taking, not a finding you are reporting, so <em>I would argue that fees should be capped</em> is fine, while <em>fees may perhaps possibly need capping</em> is not.'
        ],
        simple: [
          'Three things overclaim: the verb (<em>proves</em>), the quantifier (<em>everyone, always</em>) and the modal (<em>will, must be</em>). Hunt for all three in your own drafts.',
          'A claim about <strong>everyone</strong> is destroyed by <strong>one</strong> exception, and the reader will look for it. A claim about <strong>most</strong> is not.',
          'Do not delete the claim — move it down one step. <em>Proves</em> becomes <em>suggests</em>; <em>will</em> becomes <em>is likely to</em>; <em>everyone</em> becomes <em>the majority</em>.'
        ],
        examples: [
          { s: 'The results <b>indicate</b> that longer commutes <b>are associated with</b> poorer sleep.', g: 'the verb reports a link without claiming a cause.' },
          { s: '<b>In most cases</b>, graduates of these programmes found work within a year.', g: 'a quantifier that survives the exceptions.' },
          { s: '<s>This proves that everyone will benefit from free public transport.</s>', g: 'all three overclaims at once: the verb, the quantifier and the modal.' },
          { s: 'Road pricing <b>is likely to</b> reduce peak-hour traffic.', g: 'a prediction pitched at the strength a prediction can bear.' }
        ]
      },
      items: [
        { id: 't7l1s2-1', type: 'choose', tag: 'hedge-over', level: 'C1',
          stem: 'A survey of 1,200 secondary students found that those who used a phone in the hour before bed slept on average twenty-seven minutes less than those who did not. Which sentence reports this correctly?',
          options: [
            'The survey proves that phone use in the hour before bed causes teenagers to lose sleep.',
            'The survey found that phone use in the hour before bed cut teenagers\' sleep by twenty-seven minutes.',
            'The survey found that phone use in the hour before bed was linked to shorter sleep.',
            'The survey shows that teenagers who use a phone at night always sleep badly.'
          ],
          answer: 2,
          why: 'A survey can record that two things go together, and only option 3 says no more than that. Option 1 turns the link into a cause, which the design cannot support — a student who is already sleeping badly may reach for a phone as readily as the reverse. Option 2 keeps the survey\'s own figure, which makes it look precise, but <em>cut</em> is still a claim about cause, and it hands an average to every teenager. Option 4 replaces an average with a universal (<em>always</em>) and a measured difference with a value judgement (<em>badly</em>).' },

        { id: 't7l1s2-2', type: 'spot', tag: 'hedge-over', level: 'C1',
          stem: 'One of the four parts overclaims. Find it.',
          words: ['The survey of eight provincial hospitals', 'proves that longer consultations', 'are associated with higher patient satisfaction', 'in outpatient departments.'],
          answer: 1,
          fix: 'suggests that longer consultations',
          why: 'A survey of eight hospitals can point to a pattern but cannot prove one, and <em>proves</em> is the single word doing the damage. The other three parts are all correctly pitched: the sample is stated honestly, <em>are associated with</em> names a link rather than a cause, and the final phrase keeps the claim inside the setting that was actually studied.' },

        { id: 't7l1s2-3', type: 'choose', tag: 'hedge-over', level: 'C1',
          stem: 'One city introduced a tram line and recorded a nine per cent fall in car journeys into the centre over the following year. Which conclusion does that support?',
          options: [
            'Trams will reduce car use in any city that builds them, whatever the local conditions.',
            'The figures show that the tram line cut car journeys into the centre by nine per cent.',
            'This suggests that the tram line may have helped to reduce car journeys into the centre.',
            'It is certain that the tram line caused the fall, since the two happened in the same year.'
          ],
          answer: 2,
          why: 'One city over one year cannot separate the tram from everything else that changed — fuel prices, parking charges, the weather — so the honest conclusion gives the tram a possible part in the fall, which is what option 3 does. Option 1 generalises from a single city to all cities. Option 2 quotes the figure accurately but hands the whole of it to the tram, as though nothing else had changed that year. Option 4 asserts a cause from nothing more than the order in which two things happened.' },

        { id: 't7l1s2-4', type: 'equiv', tag: 'hedge-over', level: 'C1',
          given: 'Studies have proved that everyone who learns a second language will develop stronger memory.',
          stem: 'Which sentence makes the same point without claiming more than research of this kind can support?',
          options: [
            'Studies indicate that learning a second language may strengthen certain kinds of memory in many learners.',
            'Studies have shown that a second language definitely improves the memory of all learners.',
            'It could possibly perhaps be the case that a second language might somewhat affect memory.',
            'Nobody knows whether learning a second language affects memory.'
          ],
          answer: 0,
          why: 'Three separate overclaims have to come down at once: <em>proved → indicate</em>, <em>everyone → many learners</em>, and <em>will develop stronger memory → may strengthen certain kinds of memory</em>. Option 2 changes only the verb and leaves <em>definitely</em> and <em>all</em> standing, so the universal survives. Option 3 over-corrects into a pile-up that reports no finding. Option 4 is a different claim altogether — it denies that evidence exists, when the premise is that studies do.' },

        { id: 't7l1s2-5', type: 'choose', tag: 'hedge-over', level: 'C1',
          stem: 'Which of these sentences does <strong>not</strong> need hedging?',
          options: [
            'Air pollution in the capital will cause 4,200 premature deaths next year.',
            'A carbon tax will solve the problem within five years.',
            'Everyone agrees that public transport should be subsidised.',
            'Inflation, in the sense used here, refers to a sustained rise in the general price level.'
          ],
          answer: 3,
          why: 'Option 4 is a definition: the writer is stipulating how a term will be used in this essay, and a stipulation cannot be pitched too strongly. The other three all overclaim, each in a different way. Option 1 would be fine as a recorded figure for a past year, but as a forecast it states an estimate as though it had already been counted, so it needs <em>is expected to cause</em>. Option 2 promises both an outcome and a timetable that no policy forecast can guarantee. Option 3 claims universal consensus about a proposal that is actively disputed.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't7l1s3', name: 'The underclaim and the hedge pile-up', cefr: 'C1',
      theory: {
        key: 'Hedges do not stack. Each one already names a degree of confidence, so a second and a third do not lower it further — they only announce that the writer has nothing to say.',
        body: [
          'The mirror image of the overclaim is the hedge pile-up, and it is the error a student makes in the fortnight after learning to hedge. <em>It may possibly perhaps be somewhat arguable that class size could have some slight effect on attainment.</em> Count the devices: <em>may</em>, <em>possibly</em>, <em>perhaps</em>, <em>somewhat</em>, <em>arguable</em>, <em>could</em>, <em>some</em>, <em>slight</em>. Eight of them, and between them they make no claim whatever.',
          'They fail to combine because they all operate on the <strong>same variable</strong>. A hedge sets the writer\'s degree of commitment to a value, and a value cannot be set twice. <em>May</em> already means <em>possibly</em>, so adding <em>possibly</em> to <em>may</em> is turning the same dial twice and expecting it to travel further. It is repetition, not refinement, and what the reader hears is the repetition rather than the claim.',
          'One combination genuinely works, and it works because the two elements move in <strong>different directions</strong>. <em>May well</em> is a modal plus an upgrading adverb: <em>may</em> sets the rung and <em>well</em> lifts it. <em>Would almost certainly</em> has the same architecture. That is calibration, not accumulation, and Level 2 is built on it. The test is mechanical — if the second word repeats the first, delete it; if it moves the first, keep it.',
          'Underclaiming is the other half of the same fault and is less visible, because it does not look like an error. <em>It may be that regular exercise has some benefits</em> hedges something nobody disputes, and the effect is evasive rather than careful. Force has to vary across a paragraph, strong where the ground is solid and weak where it is not, because a paragraph written entirely in <em>may</em> gives the reader no way of telling which sentence matters.'
        ],
        simple: [
          'One hedge is enough. <em>It may possibly perhaps be arguable</em> uses four to do the work of one, and the reader stops believing there is a claim at all.',
          'Hedges do not add up, because they all set the same thing: how sure you are. <em>May</em> already means <em>possibly</em>.',
          'The exception is a modal plus an adverb that <strong>moves</strong> it: <em>may well</em>, <em>would almost certainly</em>. If the second word repeats the first, cut it.'
        ],
        examples: [
          { s: 'Fees <b>may</b> deter applicants from lower-income households.', g: 'one hedge, doing all the work that needs doing.' },
          { s: '<s>It may possibly perhaps be somewhat arguable that fees could deter applicants.</s>', g: 'six hedges on one proposition, and the claim disappears.' },
          { s: 'Fees <b>may well</b> deter applicants from lower-income households.', g: 'the adverb lifts the modal: two words, one calibration.' },
          { s: '<s>It may be that regular exercise has some possible benefits for health.</s>', g: 'underclaiming — hedging what nobody disputes reads as evasion.' }
        ]
      },
      items: [
        { id: 't7l1s3-1', type: 'choose', tag: 'hedge-under', level: 'C1',
          stem: 'Which sentence hedges once and still makes a claim a reader could argue with?',
          options: [
            'It might possibly be arguable that rural bus services could perhaps be somewhat underfunded.',
            'Rural bus services appear to be underfunded relative to urban routes.',
            'Rural bus services are without question the most underfunded part of the entire transport system.',
            'It may be that rural bus services receive some public funding.'
          ],
          answer: 1,
          why: '<em>Appear to</em> is a single evidential hedge — the visible evidence points this way — and the comparison with urban routes gives the reader a claim they can check and contest. Option 1 is a pile-up four devices deep and ends up claiming nothing anyone could agree or disagree with. Option 3 runs the fault the other way: <em>without question</em> and <em>the entire transport system</em> make a superlative claim that no essay could support. Option 4 does hedge only once, but what it hedges is something nobody disputes, and a hedge on the undisputed reads as evasion rather than care.' },

        { id: 't7l1s3-2', type: 'spot', tag: 'hedge-under', level: 'C1',
          stem: 'One of the four parts contains a redundant hedge. Find it.',
          words: ['Recent evidence suggests', 'that the scheme may possibly', 'reduce waiting times', 'in smaller clinics.'],
          answer: 1,
          fix: 'that the scheme may',
          why: '<em>May</em> already places the claim at possibility, so <em>possibly</em> sets the same value a second time and adds nothing but length. Each of the other parts does a distinct job: <em>suggests</em> grades the evidence, <em>reduce waiting times</em> is the proposition itself, and <em>in smaller clinics</em> limits the scope of the claim rather than the confidence in it, which is a different and perfectly legitimate kind of hedge.' },

        { id: 't7l1s3-3', type: 'equiv', tag: 'hedge-under', level: 'C1',
          given: 'It may possibly perhaps be somewhat arguable that a shorter working week could conceivably have some effect on productivity.',
          stem: 'Which sentence says what this was trying to say?',
          options: [
            'A shorter working week may raise productivity.',
            'A shorter working week will raise productivity.',
            'A shorter working week might possibly perhaps raise productivity.',
            'Nobody can say anything about the effect of a shorter working week on productivity.'
          ],
          answer: 0,
          why: 'Strip the repetition and one hedge remains over one proposition, which is all the original ever meant; <em>raise</em> also replaces the empty <em>have some effect</em>, since an effect with no direction is not a claim. Option 2 deletes the hedging altogether and promises the outcome. Option 3 keeps three of the six devices, so the pile-up is shorter but not cured. Option 4 mistakes a weak claim for no claim, when the writer plainly did want to say something.' },

        { id: 't7l1s3-4', type: 'choose', tag: 'hedge-under', level: 'C1',
          stem: 'Why is <em>may well</em> acceptable when <em>may possibly</em> is not?',
          options: [
            'Because <em>well</em> is a shorter word than <em>possibly</em>.',
            'Because <em>possibly</em> repeats the value that <em>may</em> has already set, while <em>well</em> raises it.',
            'Because <em>may possibly</em> is ungrammatical in English.',
            'Because <em>may well</em> is more formal, and academic writing prefers formal phrases.'
          ],
          answer: 1,
          why: 'Two hedges combine only when the second changes what the first did, and <em>well</em> is an upgrader — <em>may well</em> sits noticeably higher on the scale than bare <em>may</em>. <em>Possibly</em> means what <em>may</em> means, so the pair moves nothing. Length is irrelevant: <em>would almost certainly</em> is longer still and works, because <em>almost certainly</em> moves the modal instead of repeating it. Option 3 is false, since <em>may possibly</em> breaks no rule of grammar — it is a stylistic failure, not an error. And formality is not the issue either; <em>may possibly</em> is no less formal, merely empty.' },

        { id: 't7l1s3-5', type: 'build', tag: 'hedge-under', level: 'C1',
          stem: 'Put the words in order to make one calibrated claim from a single study.',
          tiles: ['the', 'evidence', 'suggests', 'that', 'fees', 'may', 'be', 'deterring', 'applicants'],
          solution: 'the evidence suggests that fees may be deterring applicants',
          why: 'One reporting verb graded to the evidence (<em>suggests</em>) and one modal on the proposition (<em>may</em>) is the standard shape of an academic claim, and the two do different jobs: the first says how good the evidence is, the second how likely the outcome is. <em>May be deterring</em> adds the progressive, which reports something going on now — the natural reading of a current finding. A second hedge anywhere in this sentence, whether <em>may possibly</em>, <em>somewhat</em> or <em>it could be argued</em>, would start the pile-up and cost the claim its force.' }
      ]
    }
  ],

  check: {
    id: 't7l1ck', name: 'Stage Check · Matching the claim to the evidence',
    items: [
      { id: 't7l1ck-1', type: 'cloze', tag: 'hedge-over', level: 'C1',
        passage: 'A recent review of trials of the four-day working week found that, in the small number of firms that have tried the arrangement, output per worker held steady or rose slightly. The authors are careful with their language. Their report ___(1)___ that shorter weeks can be introduced without a loss of output, and notes that the firms which volunteered for the trials ___(2)___ be unusually well managed to begin with.\n\nThat qualification matters. A firm confident enough to run the experiment is not a typical firm, and until the arrangement has been tested somewhere less willing, the finding remains a promising one rather than a settled one.',
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['proves', 'demonstrates conclusively', 'will show', 'suggests'],
        answer: 3,
        why: 'The paragraph says the authors are careful with their language and then hands us a self-selected sample of volunteer firms, which is the situation a reporting verb like <em>suggests</em> exists for. <em>Proves</em> and <em>demonstrates conclusively</em> both declare the question closed, and the second paragraph immediately contradicts them. <em>Will show</em> is a prediction about the report rather than a report of it, which makes no sense of a review that has already been completed.' },

      { id: 't7l1ck-2', type: 'choose', tag: 'hedge-over', level: 'C1',
        stem: 'An essay states: <em>Since more people now work from home, city centres will inevitably empty and public transport will collapse.</em> What is the main problem?',
        options: [
          'The sentence is too informal for an academic essay.',
          'It should be in the past tense, since the change has already happened.',
          'It hedges its predictions so heavily that it takes no clear position.',
          'It makes two very strong predictions from one trend, with no hedging.'
        ],
        answer: 3,
        why: '<em>Will inevitably empty</em> and <em>will collapse</em> both sit at the top of the scale, and the only support offered is that more people work from home — a trend consistent with many outcomes far short of collapse. Option 3 names the right kind of fault but points it the wrong way: there is no hedge anywhere in the sentence. The register is unremarkable, so the fault is force rather than formality, and the tense is right: predictions take <em>will</em>, and the premise is genuinely present.' },

      { id: 't7l1ck-3', type: 'spot', tag: 'hedge-under', level: 'C1',
        stem: 'One of the four parts contains a hedge pile-up. Find it.',
        words: ['It may perhaps possibly be that', 'online tutorials improved results', 'for students in the lowest attainment band,', 'although the sample was small.'],
        answer: 0,
        fix: 'It may be that',
        why: 'Three devices — <em>may</em>, <em>perhaps</em>, <em>possibly</em> — all set the same level of confidence, so two of them are doing no work. The second part is the claim itself, the third narrows the group the claim covers, which restricts scope rather than confidence, and the last is a legitimate limitation on the evidence. Only one part hedges the same thing more than once.' },

      { id: 't7l1ck-4', type: 'equiv', tag: 'hedge-over', level: 'C1',
        given: 'Everybody knows that homework is a waste of time for primary pupils.',
        stem: 'Which sentence makes a related claim that an essay could actually defend?',
        options: [
          'There is some evidence that homework brings little measurable benefit at primary level.',
          'Nobody has ever found any benefit in primary homework at all.',
          'It may possibly be that homework is perhaps not entirely useful for young children.',
          'Homework must be abolished in all primary schools immediately.'
        ],
        answer: 0,
        why: '<em>There is some evidence</em> names a source, <em>little measurable benefit</em> reports a size rather than delivering a verdict, and <em>at primary level</em> keeps the claim where the evidence is. Option 2 simply swaps one universal (<em>everybody</em>) for another (<em>nobody ever, any, at all</em>). Option 3 collapses into a pile-up. Option 4 is a policy demand at maximum force, and <em>must</em> plus <em>all</em> plus <em>immediately</em> stands even further from the evidence than the original did.' },

      { id: 't7l1ck-5', type: 'judge', tag: 'hedge-why', level: 'C1',
        given: 'The trial data would suggest that the new treatment is no more effective than the existing one.',
        stem: 'The writer accepts that the two treatments are equally effective.',
        answer: 2,
        why: '<em>Would suggest</em> reports what the data point to while holding the writer slightly back from the conclusion, so the sentence tells us about the evidence and not about the writer\'s own position, which may well be stated elsewhere. <em>True</em> would require an endorsement, and the distancing <em>would</em> is precisely what stops short of one. <em>False</em> would require some sign of disagreement, and the sentence gives none. Note also that <em>no more effective than</em> leaves open that the new treatment is worse, so even the data as reported stop short of saying the two are equal.' },

      { id: 't7l1ck-6', type: 'choose', tag: 'hedge-why', level: 'C1',
        stem: 'Why does a well-calibrated claim give an examiner a better impression than a bold one?',
        options: [
          'Because it uses less common vocabulary.',
          'Because it is longer, and length raises the word count.',
          'Because it shows the writer has weighed how far the evidence goes.',
          'Because examiners prefer writers who avoid taking a clear position on the question.'
        ],
        answer: 2,
        why: 'The descriptors cap Band 7 partly on <em>a tendency to over-generalise</em>, so matching force to evidence is scored directly rather than treated as a matter of taste. Vocabulary is a separate criterion and most hedges are very ordinary words. Length is not rewarded in itself, and a pile-up is long. Option 4 inverts the aim: the task demands a clear position, and calibration is how a position is made defensible, not how it is avoided.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T7.levels.push({
  id: 't7l2', n: 2, name: 'The toolkit', cefr: 'C1',
  blurb: 'The devices themselves: modal plus adverb, the impersonal frame, and the approximator that limits scope rather than confidence.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't7l2s1', name: 'Modal + adverb: may well, would almost certainly', cefr: 'C1',
      theory: {
        key: 'A modal sets the rung and an adverb moves it — <em>may well</em> is higher than <em>may</em>, <em>might conceivably</em> lower than <em>might</em> — so the pair is one calibration rather than two hedges.',
        body: [
          'The modals on their own are a coarse instrument. <em>May</em>, <em>might</em> and <em>could</em> all land in the same weak middle of the scale, and between that middle and the certainty of <em>will</em> there is a wide gap with nothing in it. The adverb fills the gap. It attaches to the modal and shifts it, so that a writer can distinguish a possibility worth mentioning from a possibility worth acting on.',
          '<strong>Upgraders</strong> raise the modal: <em>may well</em>, <em>could well</em>, <em>would almost certainly</em>, <em>will surely</em>. <em>May well happen</em> is close to <em>is quite likely to happen</em>, well above bare <em>may</em>. <strong>Downgraders</strong> lower it: <em>might conceivably</em>, <em>could just possibly</em>. <strong>Contestability markers</strong> do something else again — <em>could arguably</em> and <em>may reasonably be said to</em> report no probability at all, but flag the claim as defensible and disputed, which is why they belong in the sentence immediately before a counter-argument.',
          'The low end of the scale is not built with <em>not</em>. <em>May not</em> is the possibility of a negative, not a low probability, so a writer who means <em>this probably will not happen</em> reaches instead for <em>is unlikely to</em>. That form is a lexical predicate rather than a modal, and it earns its place because it takes modification freely — <em>highly unlikely</em>, <em>increasingly unlikely</em>, <em>somewhat unlikely</em> — where a modal cannot be graded at all.',
          'Two mechanical points. The adverb goes <strong>after</strong> the modal — <em>may well</em>, <em>would almost certainly</em>, never <s>well may</s> or <s>almost would certainly</s> in this sense. And the pile-up test from Level 1 still applies: an adverb that names the value the modal has already set is doing nothing. <em>May possibly</em> and <em>might perhaps</em> fail that test; <em>may well</em> and <em>might conceivably</em> pass it.'
        ],
        simple: [
          'Modals are rough. <em>May</em>, <em>might</em> and <em>could</em> all mean roughly the same thing. An adverb placed after the modal makes the meaning exact.',
          'Up: <em>may well</em>, <em>would almost certainly</em>. Down: <em>might conceivably</em>. Empty: <em>may possibly</em>, <em>might perhaps</em> — the adverb only repeats the modal.',
          'For low probability use <em>is unlikely to</em>, not <em>may not</em>. <em>It may not happen</em> means it is possible it will not; <em>it is unlikely to happen</em> means it probably will not.'
        ],
        examples: [
          { s: 'Congestion pricing <b>may well</b> reduce peak-hour traffic.', g: 'clearly above bare may: the writer thinks it probable.' },
          { s: 'A tax of that size <b>would almost certainly</b> be passed on to tenants.', g: 'near the top of the scale, and still short of a guarantee.' },
          { s: 'The scheme <b>is unlikely to</b> pay for itself within a decade.', g: 'low probability stated positively, and gradable: highly unlikely, increasingly unlikely.' },
          { s: '<s>The scheme may possibly pay for itself within a decade.</s>', g: 'the adverb repeats the modal and moves nothing.' }
        ]
      },
      items: [
        { id: 't7l2s1-1', type: 'choose', tag: 'hedge-adverb', level: 'C1',
          stem: 'Three separate national studies have found the same effect, and none has found the opposite. Which form fits that strength of evidence?',
          options: [
            'The policy may possibly reduce emissions.',
            'The policy may well reduce emissions.',
            'The policy might reduce emissions.',
            'The policy will certainly reduce emissions.'
          ],
          answer: 1,
          why: 'Three converging studies justify a claim above bare possibility but short of certainty, and <em>may well</em> is exactly that rung. <em>May possibly</em> is bare <em>may</em> with a wasted word, so it under-reports what the evidence gives. Bare <em>might</em> reports a possibility and nothing more, which is what a single suggestive finding would deserve rather than three converging ones. <em>Will certainly</em> treats a converging body of evidence as a closed question, which is the overclaim from Level 1.' },

        { id: 't7l2s1-2', type: 'sort', tag: 'hedge-adverb', level: 'C1',
          stem: 'What is the adverb doing to the modal in each phrase?',
          bins: [
            { key: 'up', label: 'Raises the modal', hint: 'the claim comes out likelier than the modal alone would make it' },
            { key: 'arg', label: 'Marks the claim as contested', hint: 'says nothing about likelihood; flags the point as defensible but disputed' },
            { key: 'flat', label: 'Repeats the modal', hint: 'sets a value the modal has already set' }
          ],
          items: [
            { text: 'may <em>well</em> succeed', bin: 'up' },
            { text: 'would <em>almost certainly</em> fail', bin: 'up' },
            { text: 'could <em>arguably</em> be extended', bin: 'arg' },
            { text: 'may <em>reasonably</em> be said to work', bin: 'arg' },
            { text: 'may <em>possibly</em> help', bin: 'flat' },
            { text: 'might <em>perhaps</em> follow', bin: 'flat' }
          ],
          why: 'Only an adverb that changes what the modal has done is worth its space. <em>Well</em> and <em>almost certainly</em> lift the modal towards probability. <em>Arguably</em> and <em>reasonably</em> report no probability at all — they mark the claim as one a reader could contest, which is why they belong in the sentence just before a counter-argument. <em>Possibly</em> and <em>perhaps</em> name the value <em>may</em> and <em>might</em> have already set, so they are the Level 1 pile-up in miniature.' },

        { id: 't7l2s1-3', type: 'choose', tag: 'hedge-adverb', level: 'C1',
          stem: 'The writer wants to say that a rise in fees will probably <strong>not</strong> reduce applications. Which sentence does that?',
          options: [
            'Higher fees may not reduce applications.',
            'Higher fees are unlikely to reduce applications.',
            'Higher fees cannot reduce applications.',
            'Higher fees may possibly not reduce applications.'
          ],
          answer: 1,
          why: '<em>Is unlikely to</em> puts the whole claim low on the probability scale, which is what <em>probably not</em> means. <em>May not</em> is the possibility of a negative and leaves a reduction perfectly open, so it is both weaker and differently shaped. <em>Cannot</em> sits at the bottom of the scale and denies that a reduction is even possible. The last option combines a negative with two hedges and states nothing at all.' },

        { id: 't7l2s1-4', type: 'spot', tag: 'hedge-adverb', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The subsidy was trialled', 'in only two provinces,', 'so the results', 'almost would certainly fail to generalise nationally.'],
          answer: 3,
          fix: 'would almost certainly fail to generalise nationally.',
          why: 'The adverb follows the modal: <em>would almost certainly</em>. Putting <em>almost</em> in front of <em>would</em> attaches it to the modal itself, which English does not allow here, and the phrase reads as a word-for-word transfer from another language. The other parts are sound — the first clause is well formed, <em>in only two provinces</em> limits the evidence honestly, and <em>so the results</em> introduces the consequence; once the adverb is moved, <em>fail to generalise</em> is the right prediction to make about a two-province trial.' },

        { id: 't7l2s1-5', type: 'equiv', tag: 'hedge-adverb', level: 'C1',
          given: 'It is highly unlikely that the scheme will cover its costs within ten years.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The scheme may not cover its costs within ten years.',
            'The scheme is unlikely to cover its costs within ten years.',
            'The scheme cannot cover its costs within ten years.',
            'The scheme is highly unlikely to cover its costs within ten years.'
          ],
          answer: 3,
          why: 'The two forms are the same claim with the subject lifted out of the <em>that</em>-clause, and the degree word travels with the predicate. Option 2 has the right form but drops <em>highly</em>, so it reports a weaker claim than the original makes. <em>May not</em> merely opens the possibility of failure and so reports far less. <em>Cannot</em> goes beyond the original to impossibility, which <em>highly unlikely</em> deliberately stops short of.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't7l2s2', name: 'Impersonal frames: it may be argued that', cefr: 'C1',
      theory: {
        key: 'An impersonal frame moves a claim off the writer and onto the argument, so that what is reported is the state of the debate rather than the writer\'s own confidence.',
        body: [
          'Not every hedge lowers confidence. A second family shifts the <strong>source</strong> of the claim instead: <em>it may be argued that</em>, <em>it is widely held that</em>, <em>it would appear that</em>, <em>this would suggest that</em>. These put a frame around the proposition and attribute it to somewhere other than the writer\'s own conviction.',
          'The mechanism is syntactic. The frame demotes the claim to a complement clause, which leaves the main clause free to carry modality of its own. In <em>it may be argued that fees improve quality</em>, the modality sits on <em>be argued</em>, not on <em>improve</em>: the writer asserts that the argument is available and asserts nothing whatever about fees. That separation is why the frame is the natural opening for a concession, and Level 3 is built on it.',
          'The <em>would</em> in these frames is the distance from Stage 5, not a future or a conditional. <em>It would appear that attendance has fallen</em> and <em>this would suggest a seasonal effect</em> each step back half a pace from the inference: the evidence points there, and the writer declines to close the gap. Remove the <em>would</em> and the same sentences assert. That is the whole of the difference, and it is worth a rung on the scale.',
          'Two warnings. The frames cost words, so a paragraph built entirely out of them reads as evasion — the Level 1 pile-up in a longer form. And <em>it is widely held that</em>, with no indication of who holds it, is <em>some people say</em> in a better suit. Use a frame when you are genuinely reporting a position, and above all when you intend to answer it in the next sentence.'
        ],
        simple: [
          'A frame holds the claim at arm\'s length: <em>it may be argued that…</em>, <em>it is widely held that…</em>, <em>it would appear that…</em>',
          '<em>It may be argued that fees improve quality</em> does not say fees improve quality. It says the argument exists — which makes it the perfect way to introduce a view you are about to answer.',
          'The <em>would</em> in <em>it would appear</em> and <em>this would suggest</em> is distance, not future time. It stops the writer just short of asserting the conclusion.'
        ],
        examples: [
          { s: '<b>It may be argued that</b> tuition fees improve the quality of teaching.', g: 'the argument exists; the writer has not endorsed it.' },
          { s: '<b>It would appear that</b> attendance has fallen since the timetable changed.', g: 'the evidence points this way, and the writer stops half a pace short.' },
          { s: 'The decline in rural enrolment <b>would suggest</b> that the subsidy is reaching the wrong schools.', g: 'the inference is offered rather than forced on the reader.' },
          { s: '<s>It may be argued that it would appear that it is widely held that fees improve quality.</s>', g: 'three frames on one proposition, and now nobody is making the claim.' }
        ]
      },
      items: [
        { id: 't7l2s2-1', type: 'choose', tag: 'hedge-imperson', level: 'C1',
          stem: 'A writer intends to state an opposing view and then answer it. Which opening does the job?',
          options: [
            'Fees improve the quality of teaching.',
            'Fees may possibly improve the quality of teaching.',
            'It has been clearly shown that fees improve the quality of teaching.',
            'It may be argued that fees improve the quality of teaching.'
          ],
          answer: 3,
          why: 'The frame attributes the claim to the debate rather than to the writer, so the writer can turn on it in the next sentence without contradicting themselves. Option 1 asserts the opposing view as the writer\'s own, which makes the counter that follows look like a change of mind. Option 2 is the writer\'s own weak claim rather than a report of anyone else\'s, and its adverb merely repeats the modal. Option 3 is an impersonal frame too, but <em>has been clearly shown</em> tells the reader the question is settled, so answering it would mean arguing against established evidence.' },

        { id: 't7l2s2-2', type: 'equiv', tag: 'hedge-imperson', level: 'C1',
          given: 'It would appear that the relocation of the market has reduced footfall on the old high street.',
          stem: 'Which sentence says the same thing?',
          options: [
            'The evidence suggests that moving the market has reduced footfall on the old high street.',
            'Moving the market has certainly reduced footfall on the old high street.',
            'Moving the market would reduce footfall on the old high street.',
            'Nobody can tell whether moving the market has reduced footfall on the old high street.'
          ],
          answer: 0,
          why: '<em>It would appear that</em> reports an inference and the <em>would</em> holds the writer half a pace back from it, which is exactly the distance <em>the evidence suggests that</em> keeps. Option 2 removes that distance and states the fall as settled. Option 3 keeps the <em>would</em> but reads it as a conditional about a move that has not happened, when the perfect <em>has reduced</em> shows that it already has. Option 4 denies that there is any evidence, when the original is reporting some.' },

        { id: 't7l2s2-3', type: 'choose', tag: 'hedge-imperson', level: 'C1',
          stem: 'All four sentences use an impersonal frame. In which one is there nothing inside the frame that a reader could dispute or evidence could test?',
          options: [
            'It has been argued by the city\'s own transport board that the fare rise deterred off-peak travel.',
            'It is widely held that something ought to be done about the fare structure.',
            'This would suggest that the effect is concentrated in the evening period.',
            'It may be argued that the cost falls disproportionately on the outer suburbs.'
          ],
          answer: 1,
          why: 'A frame is only worth its words if there is a claim inside it, and <em>something ought to be done</em> is not one — nobody would disagree with it and no figure could confirm or refute it. Option 1 names who made the argument, which is the strongest form the device takes. Option 3 draws a specific inference from data the paragraph has presented. Option 4 states a contestable proposition that the essay can then examine.' },

        { id: 't7l2s2-4', type: 'spot', tag: 'hedge-imperson', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['It may be argued', 'that widening the motorway', 'would appears to relieve congestion', 'only in the short term.'],
          answer: 2,
          fix: 'would appear to relieve congestion',
          why: 'A modal takes a bare infinitive, so <em>would</em> must be followed by <em>appear</em> and never by a form carrying third-person <em>-s</em>. The remaining parts are correct: the frame is well formed, the complement clause is properly introduced by <em>that</em>, and <em>only in the short term</em> narrows the scope of the concession, which is precisely what a writer building towards a counter-argument wants.' },

        { id: 't7l2s2-5', type: 'cloze', tag: 'hedge-imperson', level: 'C1',
          passage: 'Supporters of road pricing point to the experience of several European capitals, where charges on entry to the centre were followed by measurable falls in traffic. ___(1)___ that a well-designed charge can change travel behaviour quickly.\n\nCritics answer that the falls were concentrated among discretionary trips. ___(2)___ that the scheme is fairest where the alternatives are good, and that in cities where they are not, the charge works as a tax on people who have no other way of reaching work.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['It proves', 'It is certain', 'It may be argued', 'It may possibly perhaps be argued'],
          answer: 2,
          why: 'The blank introduces the critics\' position, and <em>it may be argued</em> reports that position without the writer adopting it — the standard move at the point where a paragraph turns. <em>It proves</em> endorses the criticism at full strength and abandons the balance the passage has been building. <em>It is certain</em> does the same with an even flatter assertion. The last option frames the claim and then hedges the frame, so the reader loses the claim entirely.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't7l2s3', name: 'Approximators: tend to, in most cases, broadly', cefr: 'C1',
      theory: {
        key: 'An approximator hedges the <strong>scope</strong> of a claim rather than the writer\'s confidence in it: <em>tend to</em>, <em>in most cases</em> and <em>broadly</em> leave the claim assertive while building the exceptions into it.',
        body: [
          'Every hedge so far has adjusted one variable — how sure the writer is. Approximators adjust a different one: how <strong>wide</strong> the claim is. <em>Graduates tend to earn more than non-graduates</em> is not a guess. The writer is asserting the pattern; what they decline to assert is that it holds for every graduate.',
          'This is the direct antidote to the Band 7 ceiling. The descriptors cap a response partly on <strong>a tendency to over-generalise</strong>, and an approximator removes the over-generalisation without removing the generalisation. A counterexample no longer touches the claim, because the claim has already conceded that counterexamples exist. That is a far stronger position than <em>graduates may earn more</em>, which concedes that the pattern itself might not be there.',
          'The family has three branches. <strong>Verbs:</strong> <em>tend to</em>, <em>appear to</em>, <em>seem to</em>. <strong>Quantity phrases:</strong> <em>in most cases</em>, <em>the majority of</em>, <em>on the whole</em>, <em>as a rule</em>. <strong>Degree words:</strong> <em>largely</em>, <em>broadly</em>, <em>to some extent</em>, <em>relatively</em>. Inside the verbs there is a real split: <em>tend to</em> is about frequency, while <em>appear to</em> and <em>seem to</em> are evidential — they report what the evidence looks like, and so belong with <em>it would appear that</em> rather than with <em>in most cases</em>.',
          'Because approximators and modals grade different things, one of each can legitimately coexist: <em>rents in the outer districts may tend to rise more slowly</em> is acceptable, if slightly heavy. What fails is doubling inside a branch — <s>in most cases the majority of students</s>, <s>tends to generally</s> — and what fails worse is using an approximator to blur a figure you have already given. Having written that the fall was nine per cent, do not then call it <em>a certain amount</em>.'
        ],
        simple: [
          'A modal hedge says how <strong>sure</strong> you are. An approximator says how <strong>wide</strong> the claim is: <em>tend to</em>, <em>in most cases</em>, <em>on the whole</em>, <em>to some extent</em>.',
          '<em>Graduates tend to earn more</em> still asserts the pattern. It only admits that some graduates do not, so one exception no longer destroys the sentence.',
          'You may use one modal and one approximator together. You may not use two from the same family: <s>in most cases, the majority of students usually…</s>'
        ],
        examples: [
          { s: 'Graduates <b>tend to</b> earn more than non-graduates.', g: 'the pattern is asserted and the exceptions are built in.' },
          { s: '<b>In most cases</b>, the scheme reached households in the lowest income decile.', g: 'scope limited, confidence intact.' },
          { s: 'The reforms <b>appear to</b> have had <b>little</b> effect on waiting times.', g: 'evidential: this is what the evidence looks like.' },
          { s: '<s>In most cases, the majority of students usually tend to prefer coursework.</s>', g: 'four approximators on one claim, when scope only needs setting once.' }
        ]
      },
      items: [
        { id: 't7l2s3-1', type: 'choose', tag: 'hedge-approx', level: 'C1',
          stem: 'Which sentence asserts a pattern while admitting that there are exceptions?',
          options: [
            'All graduates earn more than non-graduates.',
            'Graduates may earn more than non-graduates.',
            'Graduates tend to earn more than non-graduates.',
            'It could be argued that graduates possibly earn more than non-graduates.'
          ],
          answer: 2,
          why: '<em>Tend to</em> states the pattern as a fact and limits only its reach, which is why a single low-paid graduate leaves it untouched. <em>All</em> is the universal that one exception destroys. <em>May</em> hedges the wrong variable: it concedes that the pattern itself might not exist, which is a weaker position than the evidence requires. The last option wraps a frame around an already-hedged claim and asserts nothing.' },

        { id: 't7l2s3-2', type: 'spot', tag: 'hedge-approx', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['On the whole, in most cases', 'older commuters in the survey', 'preferred fixed timetables', 'to on-demand services.'],
          answer: 0,
          fix: 'On the whole,',
          why: '<em>On the whole</em> and <em>in most cases</em> are the same device used twice, and the scope of a claim only needs setting once. The remaining parts are sound: the subject is limited to the people actually surveyed, the verb reports what they did rather than guessing at it, and the comparison names both of the alternatives on offer.' },

        { id: 't7l2s3-3', type: 'choose', tag: 'hedge-approx', level: 'C1',
          stem: 'A writer has just reported that emergency admissions fell by nine per cent. Which sentence takes the next step — explaining the fall — at the strength a single figure will bear?',
          options: [
            'This suggests that the triage system may be diverting some cases to primary care.',
            'This proves that the new triage system caused the fall in admissions.',
            'This suggests that there has been a certain amount of change in admissions.',
            'It may possibly be that admissions might have altered to some degree.'
          ],
          answer: 0,
          why: 'The figure is already precise, so what the next sentence has to calibrate is the <em>explanation</em> — hence <em>suggests</em> for the inference and <em>may … some cases</em> for the mechanism. Option 2 turns one figure into proof of a causal claim. Option 3 uses the right reporting verb, but what it reports is <em>a certain amount of change</em>, a blur over a number the paragraph has just stated exactly, which throws away information the writer had already earned. Option 4 blurs the figure in the same way and adds a pile-up on top.' },

        { id: 't7l2s3-4', type: 'sort', tag: 'hedge-approx', level: 'C1',
          stem: 'Is each phrase adjusting how sure the writer is, or how wide the claim is?',
          bins: [
            { key: 'sure', label: 'How sure', hint: 'the confidence the writer has in the claim' },
            { key: 'wide', label: 'How wide', hint: 'how many cases the claim covers' }
          ],
          items: [
            { text: 'the policy <em>may</em> reduce costs', bin: 'sure' },
            { text: 'the policy <em>is unlikely to</em> reduce costs', bin: 'sure' },
            { text: '<em>it would appear that</em> costs have fallen', bin: 'sure' },
            { text: 'costs fell <em>in most cases</em>', bin: 'wide' },
            { text: 'these schemes <em>tend to</em> reduce costs', bin: 'wide' },
            { text: 'costs fell <em>on the whole</em>', bin: 'wide' }
          ],
          why: 'The first three leave the scope of the claim untouched and move only the writer\'s commitment to it; the last three assert the outcome and limit how far it reaches. <em>Tend to</em> is the one most often sorted wrongly, because it looks tentative — but a writer who says these schemes tend to reduce costs is stating that they do, in the general run of cases.' },

        { id: 't7l2s3-5', type: 'choose', tag: 'hedge-approx', level: 'C1',
          stem: 'Which sentence uses <em>appear to</em> correctly?',
          options: [
            'The reforms appear to always work in every hospital.',
            'The reforms may appear to possibly have worked.',
            'The reforms appear to have shortened waiting times.',
            'In most cases the reforms appear to tend to work.'
          ],
          answer: 2,
          why: '<em>Appear to</em> is evidential: it reports what the available evidence looks like, and shorter waiting times are exactly the kind of observable outcome evidence can show. Option 1 puts a universal (<em>always … every</em>) inside an evidential hedge, so the sentence claims the evidence shows something no evidence could show. Option 2 stacks a modal and an adverb onto the same evidential and says nothing. Option 4 limits the scope twice over, since <em>in most cases</em> and <em>tend to</em> both say that the pattern holds only usually.' }
      ]
    }
  ],

  check: {
    id: 't7l2ck', name: 'Stage Check · The toolkit',
    items: [
      { id: 't7l2ck-1', type: 'choose', tag: 'hedge-adverb', level: 'C1',
        stem: 'A single pilot study, not yet repeated anywhere else, found a small effect. Which sentence pitches the claim at the strength one unrepeated pilot will bear?',
        options: [
          'The effect would almost certainly hold at scale, as the pilot indicates.',
          'The effect may hold at scale, though a single pilot cannot establish that it does.',
          'The effect will hold at scale, as the pilot has demonstrated.',
          'The effect may possibly hold at scale, as the pilot perhaps suggests.'
        ],
        answer: 1,
        why: 'One unrepeated pilot supports a possibility together with a statement of what it cannot show, which is exactly what bare <em>may</em> plus the second clause delivers. Option 1 puts the claim near the top of the scale on the strength of a single study. Option 3 abandons hedging altogether and calls a pilot a demonstration. Option 4 sets the same value twice over, once in each half of the sentence, so it reports less than the pilot actually found.' },

      { id: 't7l2ck-2', type: 'gap', tag: 'hedge-imperson', level: 'C1',
        blank: '(1)',
        lines: [
          { who: 'Tutor', text: 'Your second paragraph states flatly that automation destroys jobs. If you mean it as the view you are about to answer, write ___(1)___ that automation destroys more jobs than it creates.' },
          { who: 'Pim', text: 'And then I answer it in the next sentence, so the reader can see it is not ___(2)___ own position.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['it proves', 'it is widely known', 'it is possibly perhaps held', 'it is widely held'],
        answer: 3,
        why: 'The tutor wants the claim attributed to somebody else so that the paragraph can turn on it, and <em>it is widely held that</em> does precisely that without the writer endorsing it. <em>It is widely known</em> looks almost the same, but <em>know</em> treats what follows as a fact, so the writer would be vouching for the very claim they are about to attack. <em>It proves</em> puts the writer behind the claim at full strength, which is the fault being corrected. <em>It is possibly perhaps held</em> hedges the frame itself and would read as evasion rather than attribution.' },

      { id: 't7l2ck-3', type: 'equiv', tag: 'hedge-approx', level: 'C1',
        given: 'Students from rural schools tend to apply later in the admissions cycle.',
        stem: 'Which sentence says the same thing?',
        options: [
          'As a rule, rural applicants apply later in the cycle.',
          'All rural applicants apply later in the cycle.',
          'Rural applicants may apply later in the cycle.',
          'Rural applicants would seem to apply later in the cycle.'
        ],
        answer: 0,
        why: '<em>As a rule</em> is the same move as <em>tend to</em>: the pattern is asserted and only its reach is limited. <em>All</em> converts the tendency into a universal that one early applicant would falsify. <em>May apply</em> hedges the writer\'s confidence rather than the scope, so it concedes that the pattern might not exist at all. <em>Would seem to</em> makes a similar mistake from the evidential family: it reports how the evidence looks, which leaves the writer unsure whether the pattern is there, when the original states that it is.' },

      { id: 't7l2ck-4', type: 'cloze', tag: 'hedge-adverb', level: 'C1',
        passage: 'Cities that have introduced low-emission zones report cleaner air within the boundary. What is less clear is what happens outside it. Some traffic is simply displaced onto the ring roads, and the modelling ___(1)___ suggests that a proportion of the gain inside the zone is paid for by households on its edge.\n\nUntil the monitoring stations outside the boundary are as dense as those within it, the honest position is that the zones work where they are measured, and that the gains claimed for the city as a whole ___(2)___ be overstated.',
        blank: '(2)',
        stem: 'Choose the best option for blank (2).',
        options: ['may well', 'may possibly', 'will certainly', 'must undoubtedly'],
        answer: 0,
        why: 'The modelling described in the first paragraph points firmly towards displacement without settling it, and <em>may well</em> is the rung for evidence of exactly that weight. Option 2 sets the same value twice, since <em>possibly</em> is what <em>may</em> already means, and so under-reports what the modelling gives. Option 3 closes a question the passage has just described as open. Option 4 does the same and stacks two boosters while doing it.' },

      { id: 't7l2ck-5', type: 'choose', tag: 'hedge-approx', level: 'C1',
        stem: 'Which sentence over-generalises?',
        options: [
          'Public transport use is broadly higher in cities with integrated ticketing.',
          'Cities with integrated ticketing tend to report higher off-peak use.',
          'Integrated ticketing raises public transport use in every city that adopts it.',
          'In most of the cities studied, integrated ticketing coincided with higher off-peak use.'
        ],
        answer: 2,
        why: '<em>Every city that adopts it</em> is a universal, and one city where use did not rise would finish the claim. The other three limit scope in different ways and all survive exceptions: <em>broadly</em> is a degree word, <em>tend to</em> turns the pattern into a tendency, and <em>in most of the cities studied</em> ties the claim to the sample while <em>coincided</em> declines to claim a cause.' },

      { id: 't7l2ck-6', type: 'judge', tag: 'hedge-imperson', level: 'C1',
        given: 'It is widely held that examinations measure memory rather than understanding.',
        stem: 'The writer believes that examinations measure memory rather than understanding.',
        answer: 2,
        why: 'The frame attributes the view to a broad body of opinion and says nothing at all about whether the writer shares it, which is the entire purpose of the device. <em>True</em> would require an endorsement that the sentence carefully withholds. <em>False</em> would require a signal of disagreement, and there is none — though a writer who follows this sentence with <em>however</em> is about to supply one.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T7.levels.push({
  id: 't7l3', n: 3, name: 'Stance across an argument', cefr: 'C1+',
  blurb: 'Conceding, boosting and revising — modality as the shape of an argument rather than the shape of a sentence.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't7l3s1', name: 'The concessive modal: may well … but', cefr: 'C1+',
      theory: {
        key: 'The concessive modal grants the opposing case at a measured strength and then limits it, so that conceding strengthens the writer\'s position instead of surrendering it.',
        body: [
          'Every Task 2 prompt has an opposing case, and an essay that never acknowledges it reads as though the writer has not met it. The Band 8 descriptor asks for a <strong>well-developed response with relevant, extended and supported ideas</strong>, and answering the strongest version of the other side is the clearest way to show that development. The difficulty is that conceding looks like losing.',
          'It looks like losing when the concession is left unmodalised. Write <em>Automation will displace routine roles</em> and you have made the opposing argument on its behalf, at full strength, in your own voice. The modal is what keeps the concession on loan: <em>Automation <strong>may well</strong> displace routine roles</em> grants the point generously, credits it as probable, and still stops short of accepting it as settled. The reader sees a writer who has weighed the other side rather than one who has swallowed it.',
          'The construction has four parts, and they are worth assembling deliberately. A <strong>subordinator</strong>: <em>while</em>, <em>although</em>, <em>granted that</em>, <em>it may well be that</em>. The <strong>conceded claim</strong>, calibrated: <em>may well displace routine roles</em>. A <strong>pivot</strong>, often no more than the main clause beginning. And the <strong>counter</strong>, which is your own claim and carries its own calibration: <em>it is unlikely to eliminate the need for human judgement in the professions</em>. Notice that the concession is narrowed as well as hedged — <em>routine roles</em>, <em>in the short term</em>.',
          'One rule governs the balance. <strong>The counter must be at least as strong as the concession.</strong> <em>While automation may well displace routine roles, it might possibly not eliminate the need for judgement</em> concedes at probability and counters at bare possibility, so the sentence ends up arguing for the other side. If you cannot counter strongly, concede less: narrow what you grant, or move it from <em>may well</em> down to <em>may</em>, until your own half is the heavier one.'
        ],
        simple: [
          'Conceding is not losing, provided the concession is hedged. <em>Automation will displace routine roles</em> gives the point away; <em>automation may well displace routine roles</em> only lends it.',
          'Build it in four parts: <em>While</em> + the other side, hedged + your claim + your own calibration. <em>While automation may well displace routine roles in the short term, it is unlikely to replace professional judgement.</em>',
          'Your half must be at least as strong as theirs. If the best counter you have is <em>might possibly</em>, concede less in the first half.'
        ],
        examples: [
          { s: '<b>While</b> automation <b>may well</b> displace routine roles in the short term, it <b>is unlikely to</b> eliminate the need for human judgement in the professions.', g: 'concede, scale and counter, all of it built out of modality.' },
          { s: '<b>Granted that</b> fees <b>could arguably</b> fund better teaching, they <b>are likely to</b> narrow the intake that reaches it.', g: 'the contestability marker concedes while flagging the point as disputed.' },
          { s: '<s>While automation will displace routine roles, it might possibly not eliminate judgement.</s>', g: 'strong concession and weak counter, so the sentence argues the other side.' },
          { s: '<b>It may well be that</b> congestion charges fall hardest on outer suburbs; the remedy, however, is better bus provision rather than abandoning the charge.', g: 'concede the objection, then redirect instead of denying it.' }
        ]
      },
      items: [
        { id: 't7l3s1-1', type: 'choose', tag: 'hedge-concede', level: 'C1+',
          stem: 'Which sentence concedes without handing the argument over?',
          options: [
            'Although automation will certainly displace routine roles, it might possibly leave some professional jobs untouched.',
            'Automation may possibly perhaps displace some roles, and it may possibly perhaps not.',
            'Automation will not displace any roles at all.',
            'While automation may well displace routine roles, it is unlikely to replace professional judgement.'
          ],
          answer: 3,
          why: 'The concession is generous but hedged (<em>may well</em>) and narrowed in scope (<em>routine roles</em>), and the counter is pitched no lower than the concession (<em>is unlikely to</em>). Option 1 has the right shape, a concession followed by a counter, but reverses the balance: it concedes at full strength and counters at bare possibility, so the reader leaves agreeing with the other side. Option 2 hedges both halves into silence. Option 3 refuses to concede anything, which in the face of the obvious evidence reads as a writer who has not looked.' },

        { id: 't7l3s1-2', type: 'order', tag: 'hedge-concede', level: 'C1+',
          stem: 'Put the four sentences in the order that makes a coherent concessive paragraph.',
          items: [
            'It may well be true that raising the school leaving age keeps some reluctant students in classrooms where they do not want to be.',
            'Schools in several countries have reported exactly this, and the disruption it causes to other learners is a genuine cost.',
            'That cost, however, has to be set against what happens to those same students when they leave at sixteen with no qualification and no training place.',
            'On the evidence available, the disruption appears to be the smaller and the more manageable of the two problems.'
          ],
          why: 'The paragraph runs concede, evidence for the concession, pivot, calibrated verdict. Opening with the counter would leave the reader wondering what was being answered, and putting the verdict before the pivot would settle the question before the second cost had been named. Notice how the force moves as the paragraph goes on: <em>may well be true</em> for the concession, a flat report of the evidence, then <em>appears to be</em> for the writer\'s own judgement, which is offered rather than announced.' },

        { id: 't7l3s1-3', type: 'choose', tag: 'hedge-concede', level: 'C1+',
          stem: 'What is wrong with this sentence? <em>While congestion charges will certainly push traffic onto the ring roads, they might conceivably reduce pollution in the centre.</em>',
          options: [
            'The word <em>while</em> cannot be followed by a modal verb.',
            'The counter should come first, so that the reader knows the writer\'s position from the start.',
            'The concession is stronger than the counter, so the sentence argues the other side.',
            'Both halves have to be hedged to exactly the same degree.'
          ],
          answer: 2,
          why: '<em>Will certainly</em> is near the top of the scale and <em>might conceivably</em> near the bottom, so the writer grants the objection as a near-certainty and offers their own point as a bare possibility. Option 1 is simply false: <em>while</em> takes any finite clause. Option 2 puts the problem in the wrong place — the concession normally comes first, and moving the counter to the front would leave it just as weak. Option 4 is close but states the wrong rule: the halves need not match, but the counter must be at least as strong, and matching is only the minimum case of that.' },

        { id: 't7l3s1-4', type: 'build', tag: 'hedge-concede', level: 'C1+',
          stem: 'Put the words in order to make the concessive half of this sentence: <em>______, it is unlikely to serve those at the start of a career equally well.</em>',
          tiles: ['while', 'remote', 'work', 'may', 'well', 'appeal', 'to', 'experienced', 'staff'],
          solution: 'while remote work may well appeal to experienced staff',
          why: 'The four parts run in a fixed order: subordinator, subject, calibrated modal, predicate. <em>May well</em> concedes generously, and that generosity is what makes the counter in the main clause worth reading — a concession at bare <em>may</em> would be too grudging to earn the <em>is unlikely to</em> that answers it. The adverb has to follow the modal, so <s>well may appeal</s> is not available, and <em>appeal</em> reaches its object through <em>to</em>, which fixes the remainder of the order.' },

        { id: 't7l3s1-5', type: 'equiv', tag: 'hedge-concede', level: 'C1+',
          given: 'Admittedly, online courses could arguably widen access; nevertheless, completion rates remain low.',
          stem: 'Which sentence makes the same move in a single concessive structure?',
          options: [
            'While online courses could arguably widen access, their completion rates remain low.',
            'Online courses widen access, but completion rates might possibly be low.',
            'Online courses do not widen access, because completion rates are low.',
            'It may possibly be arguable that online courses could perhaps widen access to some degree.'
          ],
          answer: 0,
          why: 'The concession, its calibration (<em>could arguably</em>) and the unhedged counter all survive intact; only the connectives change. Option 2 strengthens the concession into a flat assertion and weakens the counter to a possibility, which reverses the balance. Option 3 denies the concession instead of granting it, and offers a reason that does not follow, since low completion is perfectly compatible with wide access. Option 4 keeps only the concession, hedges it four times over, and never reaches the counter at all.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't7l3s2', name: 'Boosters, and where they are earned', cefr: 'C1+',
      theory: {
        key: 'A booster raises a claim above the ordinary default, and the raise has to be paid for — <em>clearly</em>, <em>undoubtedly</em> and epistemic <em>must</em> are earned by evidence the reader can see, never used as decoration.',
        body: [
          'Hedging is only half the skill. A writer who hedges everything has taken no position, and Task Response asks for a clear position sustained from the introduction to the conclusion. There has to be somewhere in the essay where the writer says, in effect, <em>this part is not in doubt</em>.',
          'The mechanism is the default. An unmodalised statement — <em>the charge reduced traffic</em> — is the neutral setting: the writer asserts it and leaves it there. A booster marks the claim as sitting <strong>above</strong> that setting, and in doing so it points at something. <em>Clearly</em> says: look at what I have just shown you. If there is nothing behind the writer for the word to point at, the reader turns round, finds an empty room, and the word registers as bluff — which is what an examiner is recording when they write <em>over-generalises</em>.',
          'Three things earn a booster. <strong>Arithmetic</strong> from figures the paragraph has already supplied: if the fall was nine per cent against a target of twenty, the shortfall is not a matter of opinion. <strong>Definition</strong>: what follows from the meaning of a term cannot be doubted. <strong>Entailment</strong>: a conclusion that follows from something the essay has established. All three concern the <em>step</em> rather than the world, which is why epistemic <em>must</em> is the best booster in the family. <em>The effect must therefore be small</em> says the conclusion follows; <em>the effect is undoubtedly small</em> merely shouts.',
          'Two disciplines. Boost the inference, not the finding — <em>this must mean</em> is defensible far more often than <em>this is certainly true</em>. And boost once. <em>Clearly and undoubtedly</em> is the hedge pile-up running in the opposite direction, and it fails for the same reason, because the second word sets a value the first has already set. One well-placed booster in a paragraph is conspicuous; four in a paragraph are invisible.'
        ],
        simple: [
          'A booster is the opposite of a hedge: <em>clearly</em>, <em>undoubtedly</em>, <em>certainly</em>, <em>must</em>. It says the claim sits above the normal level of confidence.',
          'You only get one when the reader can see why. <em>Clearly</em> means <em>look at what I have just shown you</em>. If there is nothing to look at, it sounds like bluffing.',
          'Boost the <strong>step</strong>, not the fact: <em>the effect must therefore be small</em> is safer than <em>the effect is undoubtedly small</em>. And never boost twice in one sentence.'
        ],
        examples: [
          { s: 'The fall was nine per cent against a target of twenty; the scheme <b>must</b> therefore be judged to have fallen short.', g: 'the booster rides on arithmetic the reader has just been given.' },
          { s: 'If access is defined by cost alone, a free course <b>is by definition</b> accessible.', g: 'earned by the definition rather than by evidence.' },
          { s: '<s>Congestion charging is undoubtedly the clearly best solution available.</s>', g: 'two boosters on one claim, and nothing behind either of them.' },
          { s: 'These figures <b>leave little doubt</b> that the shortage is concentrated in rural districts.', g: 'a boost that still points at the figures instead of replacing them.' }
        ]
      },
      items: [
        { id: 't7l3s2-1', type: 'choose', tag: 'hedge-boost', level: 'C1+',
          stem: 'A paragraph has just reported that the fall in emissions was nine per cent against a target of twenty. Which sentence states what follows at the force those two figures earn?',
          options: [
            'The scheme may possibly have fallen a little short of its target.',
            'The scheme has clearly fallen short of its own target.',
            'The scheme is undoubtedly the best available policy.',
            'It could be argued that the scheme did not quite meet its target.'
          ],
          answer: 1,
          why: 'Nine against twenty is arithmetic the reader has just been handed, so the shortfall is not a matter of how confident anyone feels, and <em>clearly</em> points straight at the subtraction. Option 1 hedges a figure the paragraph has already given, which throws away the one thing the writer had earned. Option 3 boosts a comparison with every other available policy, none of which the paragraph has examined. Option 4 hands a settled subtraction back to the debate, as though a reader might reasonably read the same two numbers differently.' },

        { id: 't7l3s2-2', type: 'judge', tag: 'hedge-boost', level: 'C1+',
          given: 'The sample was drawn entirely from private schools, so the findings must tell us little about state schools.',
          stem: 'The <em>must</em> in this sentence is earned by what the sentence itself has established.',
          answer: 0,
          why: 'The first clause supplies the ground and the second draws the conclusion that follows from it, so <em>must</em> marks an entailment rather than asserting a fact about the world — which is precisely the use this module defends. It would be unearned if the sentence read <em>the findings must be wrong</em>, since a narrow sample makes results unrepresentative rather than false, and that step does not follow.' },

        { id: 't7l3s2-3', type: 'choose', tag: 'hedge-boost', level: 'C1+',
          stem: 'Which use of <em>must</em> is doing the job a booster should do?',
          options: [
            'Governments must act on air quality.',
            'With so many cars on its roads, the capital must have the worst air in the region.',
            'If the two figures are accurate, the difference must be explained by something other than the tax.',
            'Everybody must agree that air quality matters.'
          ],
          answer: 2,
          why: 'Option 3 uses <em>must</em> to boost an inference: given the figures, the conclusion follows, and the conditional names the ground it stands on. Option 1 is an obligation rather than a boost, a different move altogether. Option 2 looks like the key, since it also gives a reason, but a lot of cars does not make the capital\'s air the worst in the region — other cities may have more traffic or more industry — so the step does not follow and the <em>must</em> is unearned. Option 4 tries to boost the reader into agreement, which is pressure rather than argument, and <em>everybody</em> is the Level 1 universal.' },

        { id: 't7l3s2-4', type: 'spot', tag: 'hedge-boost', level: 'C1+',
          stem: 'One of the four parts boosts a claim that has not been earned. Find it.',
          words: ['The survey covered three districts', 'and found consistent differences in bus frequency,', 'which undoubtedly proves that rural residents', 'are underserved by the evening timetable.'],
          answer: 2,
          fix: 'which suggests that rural residents',
          why: 'A survey of three districts can establish a difference in frequency, and <em>undoubtedly proves</em> boosts and overclaims in the same breath — no booster is available here, because the paragraph has offered nothing beyond the comparison itself. The other parts are sound: the scope of the survey is stated, the finding is described as a difference rather than a cause, and the last part keeps the claim inside the evening timetable that was measured.' },

        { id: 't7l3s2-5', type: 'cloze', tag: 'hedge-boost', level: 'C1+',
          passage: 'Two of the four districts in the trial recorded no change at all in cycling rates, and a third recorded a fall. Only the fourth, which had also rebuilt its junctions that year, showed the increase the programme was designed to produce.\n\nThe programme ___(1)___ therefore be judged on the fourth district alone. Whether the junction work or the cycling campaign produced the gain is a question the trial ___(2)___ answer, because the two were never separated.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['will not', 'might not', 'need not', 'cannot'],
          answer: 3,
          why: 'The first paragraph has just shown that three districts out of four behaved differently, so the conclusion follows from the evidence the reader has been given — <em>cannot</em> rules the fourth-district-only judgement out, boosting the step rather than the finding. <em>Will not</em> predicts what someone is going to do instead of stating what the evidence permits. <em>Might not</em> hedges a conclusion the figures have already settled, so it gives away the force the writer had earned. <em>Need not</em> says judging on the fourth district alone is optional, when the point is that it is not available at all.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't7l3s3', name: 'Revising a paragraph for calibrated force', cefr: 'C1+',
      theory: {
        key: 'Revising for force means auditing a paragraph claim by claim — asking of each one what the evidence in front of the reader will support — and then moving it up or down a rung.',
        body: [
          'Calibration is a revision skill before it is a writing skill, because under exam conditions the first draft of a claim comes out at whatever force the sentence happened to need. The audit is mechanical and takes two minutes. Underline every claim in the paragraph. For each one ask: <strong>what in this paragraph makes that true?</strong> There are only three answers — enough, too little, or more than you admitted — and each has a standard repair.',
          'Too little support: downgrade. <em>Proves</em> becomes <em>suggests</em>, <em>will</em> becomes <em>is likely to</em>, <em>everyone</em> becomes <em>most</em>, <em>always</em> becomes <em>in most cases</em>. More support than you admitted: upgrade, or remove the hedge altogether. A hedge on a figure you have already given, on a definition, or on a step that plainly follows is not caution — it is a failure to notice what you had in your hand.',
          'Force is a property of the paragraph rather than of the sentence, and a well-built paragraph has a shape. The topic sentence usually carries the boldest claim, because it is what the paragraph exists to support. The development is where the evidence and the qualifications live, and its force is lower and more varied. The final sentence draws the inference, and it is the one place where a booster is most often earned, because by then the reader has seen the ground it stands on.',
          'The failure to avoid is uniform hedging. A paragraph in which every claim sits at <em>may</em> gives the reader no way of telling which sentence matters, and it reads exactly like a paragraph in which every claim sits at <em>will</em> — flat, and unreadable for the same reason. Variation in force <strong>is</strong> the argument: it tells the reader where you are standing firm and where you are giving ground, and a reader who can see that is a reader who can follow you.'
        ],
        simple: [
          'Check a paragraph claim by claim. For each one ask: <strong>what here makes that true?</strong> Then move it up a rung, down a rung, or leave it alone.',
          'Too strong: <em>proves → suggests</em>, <em>will → is likely to</em>, <em>everyone → most</em>. Too weak: cut the hedge. Never hedge a number you have already given.',
          'Do not put <em>may</em> on every sentence. The topic sentence is usually your boldest claim and the last sentence is where a booster is usually earned. A paragraph with one force throughout has no shape.'
        ],
        examples: [
          { s: 'Smaller classes <b>are likely to</b> benefit the youngest pupils most.', g: 'topic sentence: the boldest claim in the paragraph, and still calibrated.' },
          { s: 'In the three districts studied, reading scores rose <b>in most</b> year groups.', g: 'development: the evidence, with its scope stated exactly.' },
          { s: 'The gain <b>must therefore be</b> largest where class sizes were highest to begin with.', g: 'closing inference: the booster is paid for by what came before it.' },
          { s: '<s>It may be that smaller classes may possibly help, and it could be that scores may have risen.</s>', g: 'uniform hedging, so no sentence in the paragraph outranks any other.' }
        ]
      },
      items: [
        { id: 't7l3s3-1', type: 'read', tag: 'hedge-revise', level: 'C1+',
          passage: 'Raising the retirement age is often presented as the obvious answer to an ageing population, and the arithmetic behind it is not in dispute: if people live longer and stop working at the same age, the ratio of workers to pensioners falls. It does not follow, however, that everyone can simply work for longer. Life expectancy has risen unevenly, and in several countries the gap in healthy life expectancy between the richest and the poorest districts is more than a decade. A uniform rise in the pension age would therefore fall hardest on the people whose working lives have already been shortest.\n\nThis is not an argument against reform. It is an argument against a single number. Schemes that allow earlier retirement from physically demanding work, or that phase the change in by cohort, appear to preserve most of the fiscal gain while avoiding the worst of the unfairness. On the evidence from the countries that have tried them, they are also considerably easier to legislate.',
          source: 'Adapted for classroom use.',
          stem: 'Which claim in the passage is stated most strongly, and why is the writer entitled to state it that way?',
          options: [
            'That the ratio of workers to pensioners falls, because the sentence supplies the condition from which it follows.',
            'That phased schemes preserve most of the fiscal gain, because the writer has seen the evidence.',
            'That a uniform rise would fall hardest on the poorest, because it is the writer\'s own view.',
            'That the schemes are easier to legislate, because the claim is placed last.'
          ],
          answer: 0,
          why: 'The arithmetic claim is the only one in the passage carrying no hedge whatever, and the sentence hands the reader its own ground: the conditional <em>if people live longer and stop working at the same age</em> makes it an entailment rather than a prediction. Option 2 names a claim the writer explicitly hedges with <em>appear to</em> and <em>most of</em>. Option 3 names a claim carried by <em>would</em>, which is a calibrated prediction rather than an assertion, and a writer\'s own view is not by itself a warrant for force. Option 4 mistakes position for strength, since <em>considerably easier</em> is tied to a limited sample by the phrase that introduces it.' },

        { id: 't7l3s3-2', type: 'choose', tag: 'hedge-revise', level: 'C1+',
          stem: 'A student writes: <em>The data show a nine per cent fall, which may possibly suggest that the policy might have had some effect.</em> What is the repair?',
          options: [
            'Hedge the figure too: <em>The data may show a fall of about nine per cent…</em>',
            'Keep just one hedge: <em>…which suggests that the policy had some effect.</em>',
            'Remove every hedge: <em>…which proves that the policy worked.</em>',
            'Move the hedge to the front: <em>It may be that the data show a nine per cent fall.</em>'
          ],
          answer: 1,
          why: 'Three devices — <em>may</em>, <em>possibly</em> and <em>might</em> — all set the same value on a single inference, so they go and <em>suggests</em> is left to do the work it was already doing. Option 1 would hedge a measured figure and discard information the writer had earned. Option 3 swings across to the overclaim and converts a correlation into proof. Option 4 hedges the data instead of the inference, telling the reader that the writer is unsure what the figure was.' },

        { id: 't7l3s3-3', type: 'equiv', tag: 'hedge-revise', level: 'C1+',
          given: 'Everyone accepts that traffic in the capital is getting worse, and the new ring road will definitely solve it.',
          stem: 'Which revision calibrates both claims correctly?',
          options: [
            'Everybody accepts that congestion is rising, and the ring road may help to reduce it.',
            'Traffic in the capital seems to be worsening, and the new ring road will solve the problem.',
            'It could be argued that traffic might be worsening, and that the ring road could conceivably have some effect.',
            'Traffic in the capital appears to be getting worse, and the new ring road may help to ease it.'
          ],
          answer: 3,
          why: 'Both claims in the original overreach. <em>Everyone accepts</em> claims a consensus nobody has counted, so it comes down to what the evidence shows (<em>appears to be getting worse</em>); <em>will definitely solve</em> promises an outcome no road can guarantee, so it comes down to <em>may help to ease</em>. Option 1 repairs the second claim but keeps the invented consensus. Option 2 repairs the first claim but keeps the guarantee. Option 3 over-corrects both halves into a pile-up that says nothing.' },

        { id: 't7l3s3-4', type: 'spot', tag: 'hedge-revise', level: 'C1+',
          stem: 'One of the four parts is calibrated wrongly. Find it.',
          words: ['Across the twelve schools in the trial,', 'attendance rose by an average of four percentage points,', 'which may possibly indicate that', 'breakfast provision is worth extending.'],
          answer: 2,
          fix: 'which suggests that',
          why: '<em>May possibly indicate</em> sets one value three times over on a single inference, and the trial is in fact stronger evidence than that: twelve schools and a measured average will support <em>suggests</em>. The other parts are correctly pitched — the sample is named, the result is given as the figure it was, and <em>is worth extending</em> frames the recommendation modestly enough for a twelve-school trial.' },

        { id: 't7l3s3-5', type: 'choose', tag: 'hedge-revise', level: 'C1+',
          stem: 'Which paragraph shape lets a reader see which of its claims the writer is standing behind most firmly?',
          options: [
            'Every sentence hedged with <em>may</em>, so that nothing is overstated.',
            'Every sentence asserted flatly, so that the position is unmistakable.',
            'Each claim pitched to match its evidence, so that the force varies.',
            'Alternating strong and weak sentences, so that the paragraph sounds balanced.'
          ],
          answer: 2,
          why: 'Force should track evidence, and when it does, the strength of each sentence tells the reader how much stands behind it, which is how they see where the writer is standing firm. Option 1 flattens the paragraph: if everything sits at <em>may</em>, nothing stands out and the reader cannot tell what is being argued. Option 2 is the over-generalisation the descriptors penalise, and it flattens the paragraph just as completely. Option 4 does vary the force, but by pattern rather than by evidence, which produces a rhythm instead of an argument and leaves strong claims resting on nothing.' }
      ]
    }
  ],

  check: {
    id: 't7l3ck', name: 'Stage Check · Stance across an argument',
    items: [
      { id: 't7l3ck-1', type: 'read', tag: 'hedge-concede', level: 'C1+',
        passage: 'Critics of remote work argue that it hollows out the workplaces where junior staff learn their trade. There is something in this. Most of what a new recruit picks up in the first year is absorbed sideways: from overheard calls, from watching how a difficult client is handled, from the small corrections nobody would bother to put in an email. A video call carries none of that, and the firms that went fully remote earliest are the ones now reporting the greatest difficulty in promoting from within.\n\nIt does not follow that the office must be restored as it was. The same firms report that experienced staff are both more productive and more willing to stay, and those gains are not trivial. What the evidence would appear to support is a division: remote by default for those who already know the job, and structured, in-person time for those who do not.',
        source: 'Adapted for classroom use.',
        stem: 'How does the writer manage the concession across the two paragraphs?',
        options: [
          'The concession is granted without hedging, and the second paragraph limits what follows from it rather than denying it.',
          'The concession is heavily hedged, so that the writer never really grants the point.',
          'The concession is denied outright, and the evidence in the second paragraph supports that denial.',
          'The concession and the counter are pitched at the same weak strength throughout.'
        ],
        answer: 0,
        why: 'The first paragraph grants the criticism in flat assertions — <em>a video call carries none of that</em>, <em>are the ones now reporting</em> — because the writer intends to concede it fully and can afford to. The management happens afterwards: <em>it does not follow</em> limits what the concession entails, and <em>would appear to support</em> pitches the writer\'s own proposal lower than the point just granted. Option 2 misreads the first paragraph, which contains almost no hedging at all. Option 3 is wrong because the concession is never withdrawn. Option 4 is wrong because the two halves sit at visibly different strengths.' },

      { id: 't7l3ck-2', type: 'choose', tag: 'hedge-boost', level: 'C1+',
        stem: 'Which sentence uses a booster that the sentence itself pays for?',
        options: [
          'Undoubtedly, distance learning is the future of education.',
          'As the new timetable was popular with staff, it must have raised exam results.',
          'Clearly, governments should invest more in vocational training.',
          'As the groups differed only in timing, the difference must be due to timing.'
        ],
        answer: 3,
        why: 'The first clause states the single respect in which the groups differed, so the conclusion follows from it and <em>must</em> marks an entailment rather than announcing a conviction. Option 1 boosts a prediction about the future of an entire sector, which nothing could pay for. Option 2 has the same shape as the key — a reason, then <em>must</em> — but staff liking a timetable does not lead to higher exam results, so the step it boosts does not follow. Option 3 boosts a policy recommendation, which is an argument to be made rather than a step to be pointed at.' },

      { id: 't7l3ck-3', type: 'gap', tag: 'hedge-concede', level: 'C1+',
        blank: '(1)',
        lines: [
          { who: 'Anucha', text: 'My third paragraph admits that free university tuition would cost a great deal. I am worried that admitting it loses me the argument.' },
          { who: 'Tutor', text: 'It only does if you admit it flatly. Write that it may well prove expensive in the first decade, and then answer it firmly, without promising what nobody can know yet: the cost ___(1)___ outweigh the long-run gain in participation.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['might possibly not', 'will not', 'is unlikely to', 'cannot'],
        answer: 2,
        why: 'The concession the tutor has just dictated is pitched at probability (<em>may well prove expensive</em>), so the counter has to be at least as strong, and <em>is unlikely to</em> is a firm claim about the balance that still stops short of a guarantee. <em>Might possibly not</em> counters at bare possibility and would leave the concession the heavier half of the sentence. <em>Will not</em> would be the right strength if the long-run figures were already in, but the tutor has ruled out promising what nobody can know yet about the coming decades, and <em>cannot</em> goes further still.' },

      { id: 't7l3ck-4', type: 'cloze', tag: 'hedge-revise', level: 'C1+',
        passage: 'A city that doubles its cycle lanes and then records more cycling has not yet shown that the lanes caused the increase. Fuel prices, the weather and a new bike-hire scheme all moved in the same year, and the data as published ___(1)___ separate them.\n\nWhat the figures do support is narrower and still useful. Where lanes were built on routes that already carried cyclists, use rose sharply; where they were built on quiet residential streets, it barely moved. The programme ___(2)___ work, in other words, but not everywhere, and the difference between the two kinds of street is where the next round of spending should go.',
        blank: '(2)',
        stem: 'Choose the best option for blank (2).',
        options: ['undoubtedly does', 'may well', 'might conceivably', 'does not'],
        answer: 1,
        why: 'The paragraph has just drawn a sharp contrast between two kinds of street, which supports a claim well above bare possibility and still short of certainty — and the clause that follows, <em>but not everywhere</em>, needs a concession-shaped modal to lean against. <em>Undoubtedly does</em> ignores the confounding factors named in the first paragraph. <em>Might conceivably</em> under-reports evidence the writer has just described as sharp. <em>Does not</em> contradicts the finding outright.' },

      { id: 't7l3ck-5', type: 'sort', tag: 'hedge-boost', level: 'C1+',
        stem: 'In each sentence, is the force earned by what the sentence gives the reader?',
        bins: [
          { key: 'earned', label: 'Earned', hint: 'the sentence supplies its own ground' },
          { key: 'unearned', label: 'Unearned', hint: 'nothing in the sentence pays for the force' }
        ],
        items: [
          { text: 'Since only the timetable changed, the fall <em>must</em> be a timetable effect.', bin: 'earned' },
          { text: 'If access means cost alone, a free course <em>is by definition</em> accessible.', bin: 'earned' },
          { text: 'The shortfall was nine points against a target of twenty, so the scheme <em>clearly</em> missed it.', bin: 'earned' },
          { text: 'Private cars are <em>undoubtedly</em> the main cause of urban decline.', bin: 'unearned' },
          { text: '<em>Everyone knows</em> that examinations are unfair to slower writers.', bin: 'unearned' },
          { text: 'This <em>certainly proves</em> that smaller classes raise attainment.', bin: 'unearned' }
        ],
        why: 'The three earned sentences each hand the reader the ground in the same breath as the claim — a stated constraint, a stated definition, a stated pair of numbers — so the booster points at something. The three unearned ones point at nothing: <em>undoubtedly</em> decorates a large causal claim, <em>everyone knows</em> substitutes assumed consensus for evidence, and <em>certainly proves</em> boosts a verb that was already overclaiming.' },

      { id: 't7l3ck-6', type: 'build', tag: 'hedge-concede', level: 'C1+',
        stem: 'Put the words in order to make the counter half of this sentence: <em>While higher fees may well raise revenue in the short term, ______.</em>',
        tiles: ['they', 'are', 'unlikely', 'to', 'widen', 'access', 'in', 'the', 'long', 'run'],
        solution: 'they are unlikely to widen access in the long run',
        alt: ['in the long run they are unlikely to widen access', 'they are unlikely in the long run to widen access'],
        why: 'The counter must be at least as strong as the concession, and <em>are unlikely to</em> answers <em>may well</em> at a matching weight; a weaker counter would leave the concession in charge of the sentence. <em>Unlikely</em> is a predicate adjective, so it needs <em>are</em> in front of it and <em>to</em> after it — there is no modal in this half at all, which is why the negative sits inside the adjective rather than in a <em>not</em>. The time phrase answers <em>in the short term</em> in the concession, and may stand at either end of the clause.' }
    ]
  }
});

TOPICS.push(T7);
