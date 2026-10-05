/* ===========================================================================
   STAGE 10 — Modals in the TCAS70 Paper
   The modal system as the A-Level English paper (subject 82) tests it.
   Level 1 follows Part I (short conversations: the line after the blank
   decides), Level 2 follows Part III-1 (Text Completion: four forms of one
   verb), and Level 3 follows Part II (reading: how sure the writer is, what
   the fine print allows, and what the writer thinks).
   All passages, notices and news reports are illustrative, written for
   practice; the people and places in them are not real.
   =========================================================================== */

/* ------------------------------------------------------- shared dialogues */
var T10_D_LIB = [
  { who: 'Situation', text: 'In the school library, the day before a mock exam' },
  { who: 'Nan', text: 'Excuse me, ___(1)___ My laptop is almost dead.' },
  { who: 'Mint', text: 'Not at all. I\'m only using one of them.' },
  { who: 'Nan', text: 'Thanks. Oh, sorry, my bag is right in your way.' },
  { who: 'Mint', text: 'Don\'t worry. ___(2)___' },
  { who: 'Nan', text: 'Oh, thanks. That\'s really kind of you. By the way, a few of us are doing a practice paper at my house on Saturday. ___(3)___' },
  { who: 'Mint', text: 'I\'d love to, but I\'ve got a piano lesson. Maybe next time?' }
];

var T10_D_VAN = [
  { who: 'Situation', text: 'Two friends at the school gate at 4.30 p.m.' },
  { who: 'Fah', text: 'I think I left my phone in the school van this morning. I didn\'t notice until lunch.' },
  { who: 'Pim', text: 'Oh no. ___(1)___' },
  { who: 'Fah', text: 'I know, I know. It\'s too late to worry about that now. So what should I do?' },
  { who: 'Pim', text: '___(2)___ They keep a list of everything that passengers leave behind.' },
  { who: 'Fah', text: 'Good idea. I\'ll do it tonight.' },
  { who: 'Pim', text: 'Tonight? ___(3)___ The van office closes at five, and it\'s already half past four.' },
  { who: 'Fah', text: 'OK, OK. I\'m calling them right now.' }
];

var T10_D_CINEMA = [
  { who: 'Situation', text: 'Two friends waiting for a third friend outside a cinema in Siam Square' },
  { who: 'Mai', text: 'Nan has just texted. She says she\'s already inside, in seat F12.' },
  { who: 'Mint', text: '___(1)___ We\'ve been standing at the only entrance for twenty minutes, and she hasn\'t walked past us.' },
  { who: 'Mai', text: 'Wait, look at the photo of her ticket. It says CentralWorld, not Siam Square.' },
  { who: 'Mint', text: 'Oh no. So she\'s at a different cinema?' },
  { who: 'Mai', text: 'Yes. It\'s on her ticket in black and white. She ___(2)___ the wrong cinema when she booked.' },
  { who: 'Mint', text: 'Well, at least we know where she is. Let\'s call her.' }
];

/* -------------------------------------------------------- shared passages */
var T10_P_DRAIN = 'After last year\'s floods, engineers say that every drainage tunnel in the district ___(1)___ before the next rainy season begins. During the worst nights, several pumping stations were not working at all, and many residents believe the faults ___(2)___ months earlier. A full inspection plan is expected ___(3)___ by the end of March.\n\nThere were problems with the flood warnings too. One district officer said that the text alerts to some areas ___(4)___ on time, since many families received nothing until the water was already at their door.';

var T10_P_HEAT = 'After two students fainted during a morning assembly in April, the school nurse recommended that assemblies ___(1)___ to fifteen minutes during the hot season. Parents went further and insisted that every student ___(2)___ a water bottle to school. The head of the student council agreed, but she suggested that the new rule ___(3)___ to all year groups at once rather than tried with one class first.\n\nThe nurse\'s report also suggests that heatstroke ___(4)___ more common among teenagers than many parents realise.';

var T10_P_VOLUNTEER = 'More than 300 students from our school spent the October holiday filling sandbags in villages along the river. ___(1)___ for their help, many families would have lost everything. One volunteer, Mai, said she was exhausted but proud. "If I hadn\'t joined the team, I ___(2)___ so much about my own province now," she said.\n\nThe villagers are already worried about next year. Unless the riverbanks ___(3)___ before the next rainy season, the same homes are likely to flood again. ___(4)___ you wish to join next year\'s team, please contact Ms Ladda in the Student Affairs Office.';

var T10_P_NEWS = 'Bangkok schools may start later next year\n\nBy a staff reporter\n\n(1) Secondary schools in Bangkok could be allowed to start lessons at 9 a.m. instead of 8 a.m. from next May, according to a proposal that education officials will discuss this month.\n\n(2) The idea follows a study by researchers at Chao Phraya University, which found that students at three schools that already start later slept about 40 minutes more each night. The researchers say the extra sleep appears to improve concentration in morning lessons, but they warn that the study was small and that a longer trial is needed.\n\n(3) Officials say the change is likely to be popular with students but may cause problems for working parents, who often drop their children off on the way to work. Traffic on some roads could also become heavier at 8.30 a.m.\n\n(4) A final decision is expected by the end of the year. If the plan is approved, it will apply first to schools in six districts.';

var T10_P_AD = 'SKYLINE STUDY PASS\n\nFor M4–M6 students: unlimited access to all 12 Skyline study cafés in Bangkok for just 690 baht a month.\n\n• Show a valid student ID card every time you enter.\n\n• You need not book a seat, but group rooms must be reserved at least one day in advance.\n\n• Members may bring their own snacks. Hot food is not allowed in the study areas.\n\n• Passes cannot be shared with or transferred to another person.\n\n• This offer cannot be combined with any other discount.\n\n• Members under 16 will be required to show a letter from a parent when they buy their first pass.\n\nOffer valid for passes bought between 1 November and 31 December 2026.';

var T10_P_OPINION = 'Every March, thousands of Thai teenagers sit the TCAS papers after months of late nights in tutoring schools. Most of them are told what to study; very few are told how to rest. Schools ought to treat sleep as part of exam preparation, not as a reward for after it.\n\nThis is not a new idea. Five years ago, a group of Bangkok schools could have moved their extra classes from 7 p.m. to the weekend, and several head teachers wanted to. The plan was dropped because parents worried that their children would fall behind. In hindsight, those schools should have listened to their own students, who had asked for exactly this change.\n\nTutoring schools must also take responsibility. A centre that keeps sixteen-year-olds in a classroom until ten at night is not helping them; it is selling them anxiety. Parents, for their part, might want to ask how many hours their child actually sleeps before they book another course.';

var T10 = {
  id: 't10', n: 10, code: 'Stage 10', art: 'scope',
  name: 'Modals in the TCAS70 Paper',
  cefr: 'B2–C1',
  blurb: 'Modals the way the A-Level English paper tests them: the line after the blank in a conversation, the verb form inside a sentence, and how sure a writer is in a news report, an ad or an opinion piece.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T10.levels.push({
  id: 't10l1', n: 1, name: 'Conversations: the line after the blank', cefr: 'B2',
  blurb: 'TCAS Part I prints short conversations with one line missing. The line after the blank tells you what was said: a request or an offer, advice or a regret, a sure guess or a careful one.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't10l1s1', name: 'Requests, offers and permission: who does the action?', cefr: 'B2',
      theory: {
        key: 'Before you choose a request, an offer or a permission question, ask <strong>who will do the action</strong>. The listener does it in a request (<em>Could you…? / Would you mind + -ing?</em>); the speaker does it in an offer (<em>Shall I…? / Would you like me to…?</em>) and in a request for permission (<em>Can I…? / Do you mind if I…?</em>). And <em>Would you mind…?</em> is answered with a negative when the answer is yes.',
        body: [
          '<strong>Who does the action?</strong> In a <em>request</em> the listener does it: <em>Could you…? Can you…? Would you mind + -ing?</em> (<em>Would you mind closing the door?</em>). In an <em>offer</em> the speaker does it for the listener: <em>Shall I…? Would you like me to…? I can … if you like.</em> In a request for <em>permission</em> the speaker does it but needs the listener\'s OK: <em>Can I…? Could I…? Is it OK if I…? Do you mind if I</em> + present? <em>Would you mind if I</em> + past? (<em>Would you mind if I opened the window?</em>). In an <em>invitation</em> the listener is asked to join: <em>Would you like to…? Do you want to…?</em> One small word changes everything: <em>Would you like <strong>me</strong> to come?</em> is an offer; <em>Would you like to come?</em> is an invitation.',
          '<strong>Each job has its own replies.</strong> Agreeing to a request: <em>Sure. / Of course. / No problem.</em> Accepting an offer: <em>That\'s kind of you. / Yes, please — that would be great.</em> Refusing an offer: <em>Thanks, but I can manage.</em> Giving permission: <em>Go ahead. / Sure, help yourself.</em> Refusing permission: <em>I\'d rather you didn\'t. / I\'m afraid not.</em> Accepting an invitation: <em>I\'d love to.</em> Declining: <em>I\'d love to, but… / Maybe next time.</em> So a reply is a fingerprint: <em>Thanks, but I can manage</em> can only follow an offer, and <em>Go ahead</em> can only follow a request for permission.',
          '<strong>The Would-you-mind trap.</strong> <em>Mind</em> means "be bothered by", so <em>Would you mind…?</em> really asks "Would it bother you?". The helpful answer is therefore negative: <em>Not at all. / Of course not. / No, go ahead.</em> A reply that begins with <em>Yes</em> — <em>Yes, I would</em>, <em>Yes, actually</em> — says that it does bother you, so it is a refusal. In fast, casual speech people sometimes just say <em>Sure</em>, but in the exam the safe yes to a <em>mind</em> question is a no-word. It works the other way too: <em>Not at all</em> cannot answer <em>Is it OK if I…?</em> or <em>Could you…?</em>, because there it would mean "it is not OK at all".',
          '<strong>How TCAS tests it.</strong> The paper removes the question and leaves the reply, so you work backwards. If the next line thanks the speaker (<em>Oh, that\'s really kind of you</em>), the blank was an offer. If the next line begins <em>Not at all</em>, the blank was a <em>mind</em> question. If the next line is <em>I\'d love to, but…</em>, the blank was an invitation. Read the line after the blank first, decide which job the blank did and who does the action, and only then look at the options.'
        ],
        simple: [
          'Request: the listener does it — <em>Could you…? / Would you mind + -ing?</em> Offer: the speaker does it — <em>Shall I…? / Would you like me to…?</em>',
          'Permission: the speaker does it and asks first — <em>Can I…? / Do you mind if I…?</em> The answer is <em>Go ahead.</em>',
          '<em>Would you mind…?</em> → <em>Not at all</em> = yes, happily. <em>Yes, I would</em> = no.'
        ],
        examples: [
          { s: '"<b>Would you mind</b> turning the fan up?" — "<b>Not at all.</b>"', g: 'A request: the listener does it, and not at all means it is no trouble.' },
          { s: '"<b>Shall I</b> print your ticket for you?" — "<b>That\'s kind of you.</b>"', g: 'An offer: the speaker does it, so the reply is thanks.' },
          { s: '"<b>Do you mind if I</b> sit here?" — "<b>Go ahead.</b>"', g: 'Permission: the speaker wants to do it and asks first.' },
          { s: '"<b>Would you like me to</b> carry one of those bags?" — "<b>Thanks, but I can manage.</b>"', g: 'An offer refused politely; like me to means I will do it.' }
        ]
      },
      items: [
        { id: 't10l1s1-1', type: 'gap', tag: 'tc-request', level: 'B2',
          lines: T10_D_LIB, blank: '(1)',
          stem: 'Choose the best option for gap (1).',
          options: [
            'is it OK if I use the other socket?',
            'could you charge my laptop for me?',
            'would you mind if I used the other socket?',
            'shall I plug your laptop in for you?'
          ],
          answer: 2,
          why: 'Mint answers <em>Not at all</em> and adds that she is only using one of "them", so Nan must have asked a <em>mind</em> question about something there are two of. Nan is the one who will act, so it is a request for permission with <em>if I</em> + past: <em>would you mind if I used the other socket?</em> <em>Is it OK if I use the other socket?</em> is the near miss: the right job and the right topic, but <em>Not at all</em> would answer it with "it is not OK at all". <em>Could you charge my laptop for me?</em> asks Mint to do the work, and a request like that is answered <em>Sure</em>. <em>Shall I plug your laptop in for you?</em> is an offer, which clashes with Nan\'s own next words, <em>My laptop is almost dead</em>.' },

        { id: 't10l1s1-2', type: 'gap', tag: 'tc-request', level: 'B2',
          lines: T10_D_LIB, blank: '(2)',
          stem: 'Choose the best option for gap (2).',
          options: [
            'Could you move it, please?',
            'Shall I put it under the table for you?',
            'Would you mind moving it?',
            'Can I put mine next to it?'
          ],
          answer: 1,
          why: 'Nan\'s reply, <em>Oh, thanks. That\'s really kind of you</em>, is how you accept an offer, so Mint must be offering to do something for her: <em>Shall I put it under the table for you?</em> <em>Could you move it, please?</em> and <em>Would you mind moving it?</em> are requests: they ask Nan to do the work, and they also clash with Mint\'s <em>Don\'t worry</em> just before. <em>Can I put mine next to it?</em> asks permission, and nobody answers a request for permission by saying how kind you are.' },

        { id: 't10l1s1-3', type: 'gap', tag: 'tc-request', level: 'B2',
          lines: T10_D_LIB, blank: '(3)',
          stem: 'Choose the best option for gap (3).',
          options: [
            'Would you like to join us?',
            'Would you like me to join you?',
            'Do you mind if I bring my cousin?',
            'Shall I send you the answers afterwards?'
          ],
          answer: 0,
          why: 'Mint says <em>I\'d love to, but…</em> and <em>Maybe next time?</em>, which is how you decline an invitation, so Nan invited her: <em>Would you like to join us?</em> <em>Would you like me to join you?</em> is the near miss: one extra word, <em>me</em>, turns it into an offer by Nan to join somebody else, which makes no sense when the practice paper is at Nan\'s own house. <em>Do you mind if I bring my cousin?</em> asks permission and <em>Shall I send you the answers afterwards?</em> is an offer; neither is answered with <em>I\'d love to, but I\'ve got a piano lesson</em>.' },

        { id: 't10l1s1-4', type: 'sort', tag: 'tc-request', level: 'B2',
          stem: 'Who will do the action in each question?',
          bins: [
            { key: 'you', label: 'The listener does it', hint: 'a request or an invitation' },
            { key: 'me', label: 'The speaker does it', hint: 'an offer or a request for permission' }
          ],
          items: [
            { text: '<em>Could you</em> send me the link to the slides?', bin: 'you' },
            { text: '<em>Would you mind</em> closing the door?', bin: 'you' },
            { text: '<em>Would you like to</em> join our study group?', bin: 'you' },
            { text: '<em>Shall I</em> book the meeting room?', bin: 'me' },
            { text: '<em>Would you like me to</em> explain it again?', bin: 'me' },
            { text: '<em>Do you mind if I</em> record the lesson?', bin: 'me' }
          ],
          why: 'Requests and invitations put the action on the listener: she sends the link, closes the door, joins the group. Offers and requests for permission are about the speaker\'s own action: <em>Shall I book…?</em> and <em>Would you like me to explain…?</em> mean "I will do it for you", and <em>Do you mind if I record…?</em> means "I want to do it, and I am asking first". The pair to watch is <em>Would you like to join…?</em> (you do it) and <em>Would you like me to explain…?</em> (I do it): the word <em>me</em> moves the action to the speaker.' },

        { id: 't10l1s1-5', type: 'choose', tag: 'tc-request', level: 'B2',
          stem: 'Your teacher asks: <em>Would you mind carrying these exam papers to the staff room?</em> You are happy to help. Which reply tells her so?',
          options: ['Yes, I would.', 'I\'d rather not.', 'Thanks, but I can manage.', 'Not at all.'],
          answer: 3,
          why: 'Your teacher has asked whether carrying the papers would bother you, so the helpful answer is negative: <em>Not at all.</em> <em>Yes, I would</em> is the trap — it sounds positive, but it says that the job does bother you, so it is a refusal. <em>I\'d rather not</em> is a polite refusal too. <em>Thanks, but I can manage</em> refuses an offer, and the teacher has not offered you anything.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't10l1s2', name: 'Advice and warnings: how strong, and when?', cefr: 'B2',
      theory: {
        key: 'Advice comes in strengths — <em>You could…</em> and <em>Why don\'t you…?</em> are gentle, <em>You should…</em> and <em>If I were you, I\'d…</em> are firm, and <em>You\'d better… or …</em> is a warning — while <em>should have</em> and <em>shouldn\'t have</em> look back at a mistake that has already been made, so they can never answer <em>What should I do?</em>',
        body: [
          '<strong>The strength scale.</strong> Gentle suggestions leave the choice open: <em>You could… / Why don\'t you…? / How about + -ing? / Have you thought about + -ing?</em> Firm advice says what you think is right: <em>You should… / You ought to… / If I were you, I\'d…</em> A warning adds a bad result if the listener ignores it: <em>You\'d better (not)…</em>, often followed by <em>or</em> and the consequence — <em>You\'d better leave now, or you\'ll miss the last train.</em> The <em>\'d</em> is <em>had</em>, but <em>had better</em> is about now, not the past.',
          '<strong>The time trap.</strong> <em>Should have</em> + past participle means it did not happen, and that was a mistake: <em>You should have saved your file.</em> <em>Shouldn\'t have</em> + past participle means it did happen, and that was a mistake: <em>You shouldn\'t have stayed up so late.</em> Both look back, so they criticise or regret; they cannot help a friend who asks <em>What should I do?</em>, because nothing can be done about the past. One friendly exception: when somebody gives you a present, <em>Oh, you shouldn\'t have!</em> means "How kind — you didn\'t need to do that". It is a thank-you, not a complaint.',
          '<strong>Replies show what the advice was.</strong> Accepting: <em>Good idea. / That\'s worth a try. / Thanks, I\'ll do that.</em> Resisting: <em>I\'ve already tried that. / Easier said than done.</em> Accepting criticism: <em>I know, I know. It\'s too late now.</em> A reply often repeats the time of the advice: <em>I\'ll do it tonight</em> answers a suggestion about the future; <em>It\'s too late for that now</em> answers <em>should have</em>.',
          '<strong>How TCAS tests it.</strong> The options usually include advice on the right topic but at the wrong strength or the wrong time. Read the line after the blank. If the friend says <em>Good idea, I\'ll do it tonight</em>, the blank looked forward; if she says <em>I know — it\'s too late now</em>, it looked back; if the line goes on with <em>or you\'ll…</em>, or the next speaker rushes to act, it was a warning.'
        ],
        simple: [
          'Gentle: <em>Why don\'t you…? / You could…</em> Firm: <em>You should…</em> Warning: <em>You\'d better… or …</em>',
          '<em>You should have studied</em> = you didn\'t study, and that was a mistake. It is about the past.',
          'Only advice about now or later can answer <em>What should I do?</em>'
        ],
        examples: [
          { s: '<b>Why don\'t you</b> ask the librarian? She knows every shelf.', g: 'A gentle suggestion about what to do next.' },
          { s: '<b>You\'d better</b> take an umbrella, or you\'ll get soaked.', g: 'A warning: do it now, or something bad will happen.' },
          { s: '<b>You should have</b> saved your file before the power cut.', g: 'Looking back: the file was not saved, and that was a mistake.' },
          { s: '"<b>Oh, you shouldn\'t have!</b> I love it."', g: 'Said when you open a present; it means thank you.' }
        ]
      },
      items: [
        { id: 't10l1s2-1', type: 'gap', tag: 'tc-advice', level: 'B2',
          lines: T10_D_VAN, blank: '(1)',
          stem: 'Choose the best option for gap (1).',
          options: [
            'Why don\'t you ask at the lost-property office?',
            'You\'d better call the driver right now.',
            'You should check your seat next time.',
            'You should have checked your seat!'
          ],
          answer: 3,
          why: 'Fah answers <em>I know, I know. It\'s too late to worry about that now</em> and then asks <em>So what should I do?</em>, so Pim\'s line looked back at the mistake rather than giving advice: <em>You should have checked your seat!</em> <em>You should check your seat next time</em> is the near miss: it is about the same mistake, but it is advice for the future, and nobody answers advice for next time with "it\'s too late". <em>Why don\'t you ask at the lost-property office?</em> and <em>You\'d better call the driver right now</em> are both advice about what to do next, so Fah would not need to ask what to do straight afterwards.' },

        { id: 't10l1s2-2', type: 'gap', tag: 'tc-advice', level: 'B2',
          lines: T10_D_VAN, blank: '(2)',
          stem: 'Choose the best option for gap (2).',
          options: [
            'Why don\'t you call the van company?',
            'You should have called the van company.',
            'Shall I call the van company for you?',
            'Did you call the van company?'
          ],
          answer: 0,
          why: 'Fah says <em>Good idea. I\'ll do it tonight</em>, so Pim made a suggestion that Fah herself can act on: <em>Why don\'t you call the van company?</em> <em>You should have called the van company</em> looks back at a missed chance, and you cannot say <em>I\'ll do it tonight</em> about the past. <em>Shall I call the van company for you?</em> is an offer, so Fah would thank Pim instead of promising to do it herself. <em>Did you call the van company?</em> is a question, and <em>Good idea</em> does not answer a question.' },

        { id: 't10l1s2-3', type: 'gap', tag: 'tc-advice', level: 'B2',
          lines: T10_D_VAN, blank: '(3)',
          stem: 'Choose the best option for gap (3).',
          options: [
            'You could leave it until Monday.',
            'You\'d better not do it now.',
            'You\'d better do it now.',
            'You needn\'t do it today.'
          ],
          answer: 2,
          why: 'Pim gives a reason why the call is urgent — the office closes in half an hour — and Fah reacts by calling at once, so Pim warned her: <em>You\'d better do it now.</em> <em>You\'d better not do it now</em> is the near miss: the same warning form, but the opposite advice. <em>You could leave it until Monday</em> and <em>You needn\'t do it today</em> both tell Fah there is no hurry, which contradicts the closing time and Fah\'s <em>I\'m calling them right now</em>.' },

        { id: 't10l1s2-4', type: 'judge', tag: 'tc-advice', level: 'B2',
          given: 'Ploy, opening a birthday present: "Oh, you <em>shouldn\'t have</em>! I\'ve wanted this book for ages."',
          stem: 'Ploy is thanking her friend for the present.',
          answer: 0,
          why: 'True. <em>Oh, you shouldn\'t have!</em> is the one use of <em>shouldn\'t have</em> that is not a criticism. Said as you open a present, it means "You didn\'t need to do that — how kind", and the second sentence, <em>I\'ve wanted this book for ages</em>, shows that Ploy is delighted. It is not False, because she is not complaining about the gift, and it is not Can\'t tell, because the fixed phrase and her next sentence make her feeling clear.' },

        { id: 't10l1s2-5', type: 'choose', tag: 'tc-advice', level: 'B2',
          stem: 'Ploy asks: <em>My laptop keeps freezing during online lessons. What should I do?</em> Which reply actually answers her question?',
          options: [
            'You should have bought a better one.',
            'If I were you, I\'d restart it first.',
            'You shouldn\'t have downloaded all those games.',
            'You ought to have asked the IT room for help.'
          ],
          answer: 1,
          why: 'Ploy asks what to do <strong>now</strong>, so only advice about the present or the future can answer her: <em>If I were you, I\'d restart it first.</em> The other three all look back with <em>should have</em>, <em>shouldn\'t have</em> or <em>ought to have</em>: they criticise what she did or did not do, and none of them tells her what to do next. <em>You ought to have asked the IT room for help</em> is the near miss, because asking IT is sensible — but <em>ought to have</em> says the chance has already gone.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't10l1s3', name: 'Guessing in conversation: how sure is the speaker?', cefr: 'B2',
      theory: {
        key: 'In conversation, <em>must</em>, <em>can\'t</em> and <em>might</em> are guesses that show how sure the speaker is: <em>You must be joking</em> (I\'m almost sure), <em>That can\'t be right</em> (I\'m almost sure it isn\'t), <em>It might be</em> (maybe). Add <em>have</em> + past participle to guess about the past (<em>She must have forgotten</em>) — and the evidence around the blank, and any stance marker, must show the same strength.',
        body: [
          '<strong>Three strengths for now.</strong> <em>Must be</em> = I\'m almost sure it is true: <em>You must be exhausted after that run.</em> <em>Can\'t be</em> = I\'m almost sure it is not true: <em>That can\'t be Nan — she\'s in Chiang Mai this week.</em> <em>Might / may / could be</em> = it is possible: <em>It might be in your other bag.</em> Some of these are fixed reactions in speech: <em>You must be joking!</em> means "I can\'t believe it", and <em>That can\'t be right</em> means "I\'m sure there\'s a mistake". The opposite of a <em>must</em> guess is <em>can\'t</em>, never <em>mustn\'t</em>, which is for rules.',
          '<strong>Guessing about the past.</strong> Add <em>have</em> + past participle: <em>She must have forgotten</em> (almost sure she did), <em>He can\'t have seen it</em> (almost sure he didn\'t), <em>He could have missed the bus</em> (maybe he did). Do not confuse these with <em>should have</em>, which is not a guess at all: it says that something was the right thing to do and did not happen.',
          '<strong>Stance markers match the strength.</strong> <em>Apparently</em> = I heard it from someone else. <em>As far as I know</em> = I think so, but my information may be incomplete. <em>If I\'m not mistaken</em> = I think so — correct me if I\'m wrong. <em>Obviously</em> and <em>clearly</em> = anyone can see it. A speaker who adds <em>but I haven\'t checked</em> cannot also say <em>obviously</em>, and a speaker with clear proof does not say <em>might</em>.',
          '<strong>How TCAS tests it.</strong> The lines around the blank give the evidence. Strong proof (<em>her name is on the lid</em>, <em>it\'s on her ticket in black and white</em>) calls for <em>must</em>; proof against (<em>she hasn\'t walked past us</em>) calls for <em>can\'t</em>; a speaker who adds <em>or maybe…</em> is only at <em>might</em>. Weigh the evidence first, then choose the modal with the same strength and the right time.'
        ],
        simple: [
          '<em>must be</em> = almost sure yes · <em>might be</em> = maybe · <em>can\'t be</em> = almost sure no.',
          'For the past, add <em>have</em> + past participle: <em>She must have forgotten.</em>',
          'Check the evidence near the blank: strong proof → <em>must</em>; proof against → <em>can\'t</em>.'
        ],
        examples: [
          { s: '"I ran ten kilometres this morning." — "You <b>must be</b> exhausted!"', g: 'Almost sure: the evidence is strong.' },
          { s: '"The bill says 4,000 baht for two coffees." — "That <b>can\'t be</b> right!"', g: 'Almost sure it is not true: there must be a mistake.' },
          { s: 'He <b>could have missed</b> the bus, or maybe he overslept.', g: 'A past possibility; there is another explanation.' },
          { s: '<b>Apparently</b>, the pool is closed on Monday. I haven\'t seen a notice.', g: 'Apparently shows the news came from someone else.' }
        ]
      },
      items: [
        { id: 't10l1s3-1', type: 'gap', tag: 'tc-guess-talk', level: 'B2',
          lines: T10_D_CINEMA, blank: '(1)',
          stem: 'Choose the best option for gap (1).',
          options: ['She must be right.', 'That can\'t be right.', 'That might be true.', 'She must be early.'],
          answer: 1,
          why: 'Mint goes straight on to give strong evidence against Nan\'s text — they have been at the only entrance for twenty minutes and Nan has not walked past — so she is almost sure the message is wrong: <em>That can\'t be right.</em> <em>That might be true</em> is the near miss: it is a guess, but far too weak to be followed directly by proof that the text is wrong. <em>She must be right</em> and <em>She must be early</em> both accept Nan\'s message, which the evidence in the same line contradicts.' },

        { id: 't10l1s3-2', type: 'gap', tag: 'tc-guess-talk', level: 'B2',
          lines: T10_D_CINEMA, blank: '(2)',
          stem: 'Choose the best option for gap (2).',
          options: ['must choose', 'can\'t have chosen', 'should have chosen', 'must have chosen'],
          answer: 3,
          why: 'The ticket shows the other cinema <em>in black and white</em>, so Mai is almost sure about something that happened when Nan booked: <em>must have chosen</em>. <em>Should have chosen</em> is the near miss: it has <em>have</em> + past participle, but it is not a guess — it would mean that choosing the wrong cinema was the right thing to do. <em>Can\'t have chosen</em> says the opposite of the evidence, and <em>must choose</em> is about now, not the past booking.' },

        { id: 't10l1s3-3', type: 'equiv', tag: 'tc-guess-talk', level: 'B2',
          given: '"Krit <em>can\'t have seen</em> my message. He\'s been in an exam all morning."',
          stem: 'Which sentence means the same as the first sentence?',
          options: [
            'I\'m almost sure Krit didn\'t see my message.',
            'Perhaps Krit didn\'t see my message.',
            'Krit wasn\'t allowed to read messages in the exam.',
            'Krit saw my message but didn\'t reply.'
          ],
          answer: 0,
          why: '<em>Can\'t have seen</em> is a strong guess about the past: the speaker is almost sure it did not happen, and the exam all morning is her evidence. <em>Perhaps Krit didn\'t see my message</em> is the near miss: right direction, but only a maybe. <em>Krit wasn\'t allowed to read messages in the exam</em> reads <em>can\'t</em> as a rule, but with <em>have</em> + past participle it is a guess. <em>Krit saw my message but didn\'t reply</em> says the opposite.' },

        { id: 't10l1s3-4', type: 'choose', tag: 'tc-guess-talk', level: 'B2',
          stem: 'Which word fits best? <em>______, the canteen is closing early today. I heard it from a girl in M5, but I haven\'t seen a notice yet.</em>',
          options: ['Clearly', 'Obviously', 'Apparently', 'Without doubt'],
          answer: 2,
          why: 'The speaker heard the news from someone else and has not seen a notice, so she needs a marker for second-hand information: <em>Apparently</em>. <em>Clearly</em>, <em>Obviously</em> and <em>Without doubt</em> all present the fact as certain or plain to see, which clashes with <em>I haven\'t seen a notice yet</em>.' },

        { id: 't10l1s3-5', type: 'sort', tag: 'tc-guess-talk', level: 'B2',
          stem: 'How sure is the speaker in each sentence?',
          bins: [
            { key: 'yes', label: 'Almost sure it is true', hint: 'the evidence is strong' },
            { key: 'maybe', label: 'It is possible', hint: 'there could be another answer' },
            { key: 'no', label: 'Almost sure it is not true', hint: 'the evidence points against it' }
          ],
          items: [
            { text: 'You <em>must be</em> exhausted after that run.', bin: 'yes' },
            { text: 'He <em>could have missed</em> the bus.', bin: 'maybe' },
            { text: 'That <em>can\'t be</em> Nan — she\'s in Chiang Mai this week.', bin: 'no' },
            { text: 'She <em>must have forgotten</em> our meeting.', bin: 'yes' },
            { text: 'It <em>might be</em> in your other bag.', bin: 'maybe' },
            { text: 'They <em>can\'t have finished</em> already — they only started ten minutes ago.', bin: 'no' }
          ],
          why: '<em>Must</em> and <em>must have</em> mean the speaker is almost sure it is true. <em>Might</em> and <em>could have</em> leave it open. <em>Can\'t</em> and <em>can\'t have</em> mean she is almost sure it is not true, and both of those sentences give a reason (Nan is in Chiang Mai; they only started ten minutes ago). The past forms keep the same strength as the present ones; they only add <em>have</em> + past participle.' }
      ]
    }
  ],

  check: {
    id: 't10l1ck', name: 'Stage Check · Conversations',
    items: [
      { id: 't10l1ck-1', type: 'gap', tag: 'tc-request', level: 'B2',
        blank: '(1)',
        lines: [
          { who: 'Situation', text: 'On the BTS, a passenger with a heavy suitcase' },
          { who: 'Mai', text: 'Excuse me, that suitcase looks heavy. ___(1)___' },
          { who: 'Passenger', text: 'Thanks, but I can manage. I\'m getting off at the next stop anyway.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: [
          'Would you like me to hold it?',
          'Would you mind holding it?',
          'Could you hold my bag too?',
          'Can I put my bag on top of it?'
        ],
        answer: 0,
        why: 'The passenger answers <em>Thanks, but I can manage</em>, which is how you refuse an offer, so Mai offered to do something for her: <em>Would you like me to hold it?</em> <em>Would you mind holding it?</em> is the near miss: it uses the same polite frame, but it asks the passenger to do the work — to hold her own suitcase. <em>Could you hold my bag too?</em> is a request and <em>Can I put my bag on top of it?</em> asks permission; neither is refused with <em>I can manage</em>.' },

      { id: 't10l1ck-2', type: 'choose', tag: 'tc-request', level: 'B2',
        stem: 'Mai missed a lesson and wants to take a photo of her friend\'s notes herself. Which question asks for permission correctly?',
        options: [
          'Would you mind taking a photo of your notes for me?',
          'Do you mind if I took a photo of your notes?',
          'Would you like me to take a photo of your notes?',
          'Would you mind if I took a photo of your notes?'
        ],
        answer: 3,
        why: 'Mai will take the photo herself, so she needs a permission question, and <em>Would you mind if I</em> is followed by a past form: <em>Would you mind if I took a photo of your notes?</em> <em>Do you mind if I took…?</em> is the near miss: the right job, but <em>Do you mind if I</em> is followed by a present form (<em>take</em>). <em>Would you mind taking a photo of your notes for me?</em> asks the friend to take it, and <em>Would you like me to take a photo…?</em> is an offer.' },

      { id: 't10l1ck-3', type: 'gap', tag: 'tc-advice', level: 'B2',
        blank: '(1)',
        lines: [
          { who: 'Situation', text: 'Two friends the evening before a school trip' },
          { who: 'Nan', text: 'The bus leaves at six tomorrow morning, and I haven\'t packed anything yet.' },
          { who: 'Pim', text: '___(1)___ or you\'ll be up half the night.' },
          { who: 'Nan', text: 'You\'re right. I\'m getting my bag out now.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: [
          'You should have packed yesterday,',
          'You\'d better start packing right now,',
          'You needn\'t pack until tomorrow,',
          'You could pack in the morning,'
        ],
        answer: 1,
        why: 'The line goes on <em>or you\'ll be up half the night</em> — a bad result if Nan ignores the advice — and Nan starts packing at once, so Pim gave a warning: <em>You\'d better start packing right now</em>. <em>You should have packed yesterday</em> looks back, and <em>or you\'ll be up half the night</em> cannot follow a criticism of the past. <em>You needn\'t pack until tomorrow</em> and <em>You could pack in the morning</em> both say there is no hurry, which the warning contradicts.' },

      { id: 't10l1ck-4', type: 'spot', tag: 'tc-advice', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['If you\'re nervous about next week\'s speaking test,', 'you should have talked', 'to Ms Ladda about it', 'before the test starts.'],
        answer: 1,
        fix: 'you should talk',
        why: 'The test is <em>next week</em> and has not started, so this is advice about the future: <em>you should talk</em> to Ms Ladda before it starts. <em>You should have talked</em> looks back at a chance that has already gone, which cannot be true of something that is still in the future. The other three parts are correct.' },

      { id: 't10l1ck-5', type: 'gap', tag: 'tc-guess-talk', level: 'B2',
        blank: '(1)',
        lines: [
          { who: 'Situation', text: 'Two students in a classroom at lunchtime' },
          { who: 'Pim', text: 'Whose water bottle is this? Someone left it on my desk.' },
          { who: 'Fah', text: 'It ___(1)___ Mint\'s. It\'s pink, and her name is written on the lid.' },
          { who: 'Pim', text: 'Then I\'ll take it to her. She\'s in the library.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['might be', 'can\'t be', 'must be', 'must have been'],
        answer: 2,
        why: 'Fah has two pieces of strong evidence — the bottle is pink, and Mint\'s name is on the lid — so she is almost sure: <em>must be</em>. <em>Might be</em> is the near miss: the right direction, but far too weak when the owner\'s name is written on it. <em>Can\'t be</em> says the opposite, and <em>must have been</em> is about the past, but the bottle is still Mint\'s now.' },

      { id: 't10l1ck-6', type: 'equiv', tag: 'tc-guess-talk', level: 'B2',
        given: '"<em>If I\'m not mistaken</em>, the canteen closes at two on Fridays."',
        stem: 'Which sentence best describes how sure the speaker is?',
        options: [
          'She is completely certain.',
          'Someone else told her.',
          'She has no idea at all.',
          'She thinks so, but she could be wrong.'
        ],
        answer: 3,
        why: '<em>If I\'m not mistaken</em> means "I think this is right, but correct me if I\'m wrong": the speaker is fairly sure and open to correction. <em>She is completely certain</em> is too strong. <em>Someone else told her</em> describes <em>apparently</em>, a different marker. <em>She has no idea at all</em> is far too weak.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T10.levels.push({
  id: 't10l2', n: 2, name: 'Text Completion: modals inside the sentence', cefr: 'B2+–C1',
  blurb: 'TCAS Part III gives four forms of one verb. Choose by voice, by time and by the word in front of the gap: modal passives, the base form after suggest and insist, and modals in conditionals.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't10l2s1', name: 'Modal passives: must be checked, should have been reported', cefr: 'B2+',
      theory: {
        key: 'When the subject <strong>receives</strong> the action, a modal takes the passive: modal + <em>be</em> + past participle for now and later (<em>must be checked</em>), modal + <em>have been</em> + past participle for the past (<em>should have been reported</em>, <em>can\'t have been sent</em>), and <em>to be</em> + past participle after <em>need to</em>, <em>ought to</em> and <em>is expected to</em>.',
        body: [
          '<strong>Two questions, in this order: who, then when.</strong> First ask whether the subject does the action or receives it. Drainage tunnels do not check anything; engineers check them, so the tunnels need a passive. Then ask about time. For now or the future, use modal + <em>be</em> + past participle: <em>Library books must be returned by Friday.</em> For the past, use modal + <em>have been</em> + past participle: <em>The bridge should have been repaired years ago</em> (it was not — a criticism); <em>The parcel can\'t have been posted yet</em> (I am almost sure it was not — a guess).',
          '<strong>Modals that keep their <em>to</em>.</strong> <em>Need to, ought to, have to</em> and <em>be expected / likely / supposed to</em> are followed by <em>to be</em> + past participle: <em>Every visitor needs to be checked at the gate. Swimming ought to be taught in every school. The work is expected to be finished by June.</em> The past participle is not optional: <s>ought to be teach</s> and <s>need to be check</s> are wrong.',
          '<strong>How TCAS tests it.</strong> Text Completion gives four forms of one verb — <em>must check / must be checked / must have been checked / must be checking</em> — and only one has both the right voice and the right time. Look for the time clue (<em>before the next rainy season</em>, <em>months earlier</em>, <em>by the end of March</em>) and for the doer (<em>engineers</em>, <em>officials</em>), which is often in another sentence. TCAS69 tested the same shape with a passive infinitive: <em>the next foundation to be questioned</em>.',
          '<strong>The usual traps.</strong> An active form at the right time (<em>must check</em> — but tunnels cannot check). A passive at the wrong time (<em>must have been checked</em> when the clue says <em>before the next season</em>). A missing <em>been</em> or past participle (<em>ought to be teach</em>). And <em>mustn\'t have been</em> for a negative guess, where English uses <em>can\'t have been</em>.'
        ],
        simple: [
          'Does the subject do it or receive it? If it receives it, use the passive.',
          'Now or later: modal + <em>be</em> + past participle (<em>must be checked</em>). Past: modal + <em>have been</em> + past participle (<em>should have been reported</em>).',
          'After <em>need to, ought to, is expected to</em>: <em>to be</em> + past participle (<em>to be finished</em>).'
        ],
        examples: [
          { s: 'Library books <b>must be returned</b> by Friday.', g: 'Students return the books, so the books take a passive.' },
          { s: 'The bridge <b>should have been repaired</b> years ago.', g: 'Past criticism: nobody repaired it.' },
          { s: 'The parcel <b>can\'t have been posted</b> yet — it\'s still on your desk.', g: 'A strong guess about the past, in the passive.' },
          { s: '<s>All visitors need to be check at the gate.</s>', g: 'After to be the verb must be a past participle: need to be checked.' }
        ]
      },
      items: [
        { id: 't10l2s1-1', type: 'cloze', tag: 'tc-modal-passive', level: 'B2+',
          passage: T10_P_DRAIN, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['must check', 'must be checked', 'must have been checked', 'must be checking'],
          answer: 1,
          why: 'Engineers check the tunnels, so the tunnels receive the action, and <em>before the next rainy season begins</em> puts it in the future: modal + <em>be</em> + past participle, <em>must be checked</em>. <em>Must have been checked</em> is the near miss: the right voice, but it looks back at the past, which clashes with <em>before the next rainy season</em>. <em>Must check</em> and <em>must be checking</em> are active, so the tunnels would be doing the checking.' },

        { id: 't10l2s1-2', type: 'cloze', tag: 'tc-modal-passive', level: 'B2+',
          passage: T10_P_DRAIN, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['should be reported', 'should have reported', 'should have been reporting', 'should have been reported'],
          answer: 3,
          why: 'Faults do not report anything; people report them, so the verb is passive. <em>Months earlier</em> puts it in the past, and the residents are complaining that it did not happen: <em>should have been reported</em>. <em>Should have reported</em> is the near miss — the right time, but active, so the faults would have done the reporting. <em>Should be reported</em> is about now, not months earlier, and <em>should have been reporting</em> is active and continuous.' },

        { id: 't10l2s1-3', type: 'cloze', tag: 'tc-modal-passive', level: 'B2+',
          passage: T10_P_DRAIN, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['can\'t have been sent', 'mustn\'t have been sent', 'can\'t have sent', 'can\'t be sent'],
          answer: 0,
          why: 'Families received nothing until the water arrived, so the officer is almost sure the alerts did not go out on time — a strong negative guess about the past — and alerts are sent by somebody, so it is passive: <em>can\'t have been sent</em>. <em>Mustn\'t have been sent</em> is the near miss: <em>mustn\'t</em> is for rules, never for guesses, so the negative of a <em>must</em> guess is <em>can\'t</em>. <em>Can\'t have sent</em> is active (the alerts would be the senders), and <em>can\'t be sent</em> is about now.' },

        { id: 't10l2s1-4', type: 'spot', tag: 'tc-modal-passive', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['According to the report,', 'basic first-aid skills', 'are now taught in a few schools, but they', 'ought to be teach in every school.'],
          answer: 3,
          fix: 'ought to be taught in every school.',
          why: 'Skills are taught by teachers, so after <em>ought to be</em> the verb must be a past participle: <em>ought to be taught</em>. The other three parts are correct: <em>according to the report</em>, the plural subject <em>basic first-aid skills</em>, and <em>are now taught in a few schools</em>, which is already a correct passive.' },

        { id: 't10l2s1-5', type: 'build', tag: 'tc-modal-passive', level: 'B2+',
          stem: 'Build the sentence from a school-trip notice. It means that a teacher has to identify each student before the bus leaves.',
          tiles: ['Every student', 'needs', 'to be', 'identified', 'by a teacher', 'before the bus leaves.'],
          solution: 'Every student needs to be identified by a teacher before the bus leaves.',
          alt: [],
          why: 'The students do not identify anybody; a teacher identifies them, so the verb is passive. <em>Need</em> keeps its <em>to</em>, so the passive is <em>to be</em> + past participle: <em>needs to be identified</em>. <em>By a teacher</em> names the doer, and the time clause comes last.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't10l2s2', name: 'The subjunctive: recommend that she be', cefr: 'B2+',
      theory: {
        key: 'After <em>recommend</em>, <em>suggest</em>, <em>insist</em>, <em>demand</em> and <em>It is essential / vital that</em>, the that-clause says what <strong>should</strong> happen, so it uses the bare base form for every subject (<em>that she <strong>be</strong></em>, <em>that he <strong>take</strong></em>) or <em>should</em> + base form — not <em>will</em> or <em>would</em>, not an <em>-s</em>, not <em>to</em>.',
        body: [
          '<strong>A hidden <em>should</em>.</strong> <em>The coach recommended that we <strong>should rest</strong></em> and <em>The coach recommended that we <strong>rest</strong></em> mean the same thing: the that-clause is a plan, not a fact. Formal English, and the TCAS paper, usually drop <em>should</em> and leave the bare base form, which is the same for every subject and every tense: <em>The coach insisted that every swimmer <strong>arrive</strong> by six</em> — no <em>-s</em> on <em>arrive</em>, even though <em>every swimmer</em> is singular and <em>insisted</em> is past. TCAS never offers both forms in one item.',
          '<strong>What does not fit.</strong> The base form after these triggers rules out an <em>-s</em> (<s>that she arrives</s>), a past form, <em>to</em> (<s>that she to arrive</s>), an <em>-ing</em> form, and the future and conditional modals <em>will</em> and <em>would</em> (<s>that the rule will be changed</s>). The only modal that belongs here is <em>should</em>. The negative is <em>not</em> + base form, with no <em>do</em>: <em>It is vital that the questions <strong>not be</strong> shared online.</em>',
          '<strong>The passive subjunctive.</strong> If the subject receives the action, the base form is <em>be</em> + past participle: <em>The principal suggested that the canteen menu <strong>be changed</strong>. It is essential that the room <strong>be cleaned</strong> before the exam.</em> TCAS67 keyed exactly this: <em>suggested that exams be tailored</em>.',
          '<strong>When <em>suggest</em> reports a fact.</strong> <em>Suggest</em> and <em>insist</em> have a second meaning. <em>The study suggests that teenagers <strong>need</strong> more sleep</em> means "the study shows it"; <em>Pim insisted that she <strong>had locked</strong> the door</em> means "she said firmly that it was true". There the that-clause is a fact, so it takes a normal tense. The test: is somebody saying what should happen (base form), or what is true (normal verb)?'
        ],
        simple: [
          'After <em>recommend / suggest / insist / demand / It is essential that</em>: base form for everyone — <em>that she <strong>go</strong></em>, <em>that he <strong>be</strong></em>.',
          'No <em>-s</em>, no <em>to</em>, no <em>will</em>. Passive: <em>that it <strong>be done</strong></em>. Negative: <em>that he <strong>not go</strong></em>.',
          'If the clause reports a fact (<em>The data suggest that…</em>), use a normal tense.'
        ],
        examples: [
          { s: 'The coach insisted that every swimmer <b>arrive</b> by six.', g: 'A demand: base form, even with a singular subject and a past verb.' },
          { s: 'The principal suggested that the canteen menu <b>be changed</b>.', g: 'Passive subjunctive: be plus past participle.' },
          { s: 'It is vital that the questions <b>not be</b> shared online.', g: 'Negative subjunctive: not plus base form, with no do.' },
          { s: 'The study suggests that teenagers <b>need</b> more sleep.', g: 'Here suggest reports a fact, so the verb is normal.' }
        ]
      },
      items: [
        { id: 't10l2s2-1', type: 'cloze', tag: 'tc-subjunctive', level: 'B2+',
          passage: T10_P_HEAT, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['brings', 'to bring', 'bring', 'would bring'],
          answer: 2,
          why: '<em>Insisted that</em> introduces what the parents want to happen, so the verb is the bare base form for every subject: that every student <em>bring</em> a water bottle. <em>Brings</em> is the near miss: <em>every student</em> is singular, so an <em>-s</em> looks natural, but after a trigger like <em>insist</em> the clause is a demand, not a fact, and takes no <em>-s</em>. <em>To bring</em> cannot follow <em>that</em> + subject, and <em>would bring</em> turns the demand into a prediction.' },

        { id: 't10l2s2-2', type: 'cloze', tag: 'tc-subjunctive', level: 'B2+',
          passage: T10_P_HEAT, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['be introduced', 'introduce', 'will be introduced', 'to be introduced'],
          answer: 0,
          why: 'The student-council head is saying what should happen, and a rule does not introduce anything — the school introduces it — so the base form is passive: that the new rule <em>be introduced</em>. <em>Introduce</em> has the right base shape but active voice, and it leaves the verb with no object. <em>Will be introduced</em> is not used after <em>suggested that</em> when it makes a proposal, and <em>to be introduced</em> cannot follow <em>that</em> + subject.' },

        { id: 't10l2s2-3', type: 'cloze', tag: 'tc-subjunctive', level: 'C1',
          passage: T10_P_HEAT, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['be', 'should be', 'to be', 'is'],
          answer: 3,
          why: 'Here <em>suggests</em> does not make a proposal: the nurse\'s report is showing a fact about heatstroke, so the that-clause takes a normal present verb, <em>is</em>. <em>Be</em> and <em>should be</em> are the near misses — right after <em>suggest</em> when it means "propose", but the report is not proposing that heatstroke become more common. <em>To be</em> cannot follow <em>that</em> + subject.' },

        { id: 't10l2s2-4', type: 'spot', tag: 'tc-subjunctive', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The dentist', 'recommended that my brother', 'brushes his teeth', 'after every meal.'],
          answer: 2,
          fix: 'brush his teeth',
          why: 'The dentist is saying what the brother should do, so the verb after <em>recommended that</em> is the bare base form, <em>brush</em>, with no <em>-s</em>, even though <em>my brother</em> is singular. <em>Should brush</em> would also be correct. The other three parts are fine.' },

        { id: 't10l2s2-5', type: 'sort', tag: 'tc-subjunctive', level: 'C1',
          stem: 'Does the that-clause say what should happen, or what is true?',
          bins: [
            { key: 'should', label: 'What should happen', hint: 'a base form for every subject' },
            { key: 'fact', label: 'What is true', hint: 'a normal tense' }
          ],
          items: [
            { text: 'The doctor recommended that Mai <em>rest</em> for a week.', bin: 'should' },
            { text: 'The survey suggests that most students <em>sleep</em> less than seven hours.', bin: 'fact' },
            { text: 'Our teacher insisted that we <em>hand in</em> our phones before the test.', bin: 'should' },
            { text: 'Pim insisted that she <em>had locked</em> the door.', bin: 'fact' },
            { text: 'It is vital that the hall <em>be cleaned</em> before the exam.', bin: 'should' },
            { text: 'The figures suggest that screen time <em>is rising</em>.', bin: 'fact' }
          ],
          why: 'The first group all tell somebody what to do, and their verbs are bare base forms: <em>rest</em> (no <em>-s</em> after <em>Mai</em>), <em>hand in</em>, <em>be cleaned</em>. The second group use <em>suggest</em> and <em>insist</em> to report what is true, so their verbs are ordinary: <em>sleep</em>, <em>had locked</em>, <em>is rising</em>. Decide by the meaning, not by the trigger word: <em>insist</em> and <em>suggest</em> appear in both boxes.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't10l2s3', name: 'Modals in conditionals: would, could, might — and Should you…?', cefr: 'C1',
      theory: {
        key: 'In an if-sentence the modal goes in the <strong>result</strong> clause — <em>would / could / might</em> + base form for an unreal present, <em>would / could / might have</em> + past participle for an unreal past — never in the if-clause (<s>if it will rain</s>). <em>Unless</em> takes a present verb for the future, and formal English can drop <em>if</em> and invert: <em>Should you need…</em>, <em>Had it not been for…</em>.',
        body: [
          '<strong>The modal lives in the result clause.</strong> Real future: <em>If it rains, the match will be moved indoors</em> — present in the if-clause, <em>will / can / may</em> in the result. Unreal present: <em>If I had more time, I could join the team</em> — past in the if-clause, <em>would / could / might</em> + base form in the result. Unreal past: <em>If they had left earlier, they might have caught the train</em> — <em>had</em> + past participle, then <em>would / could / might have</em> + past participle. <em>Would</em> gives a sure result, <em>could</em> a possible one or an ability, <em>might</em> a possible one.',
          '<strong>Each half has its own clock.</strong> A past condition can have a present result: <em>If she hadn\'t moved to Bangkok, she <strong>wouldn\'t speak</strong> such good Thai now.</em> That is a mixed conditional, and TCAS68 keyed exactly this shape (<em>might not even know … today</em>), with the type 3 form as the trap. Find the time word in each half before you choose.',
          '<strong>What fails.</strong> <em>Will</em> does not go in an if-clause about the future: <s>If it will rain tomorrow</s> → <em>If it rains tomorrow</em>. <em>Unless</em> means "if not", so it takes a present verb and no extra negative: <em>Unless the rain stops soon, the match will be cancelled</em> — not <s>unless the rain will stop</s>, and not <s>unless the rain doesn\'t stop</s>, which turns the meaning upside down.',
          '<strong>Formal inversion.</strong> Notices and articles drop <em>if</em> and put the verb first. <em>Should you lose your card, call this number</em> = If you lose your card. <em>Had it not been for the volunteers, the village would have flooded</em> = If it had not been for (without) the volunteers, in the past. <em>Were it not for</em> + noun does the same job for the present. The <em>should</em> in <em>Should you lose…</em> is not advice; it simply means "if".'
        ],
        simple: [
          'The modal goes in the result: <em>If it rains, we\'ll stay in. If I had time, I\'d help. If you\'d asked, I would have helped.</em>',
          'No <em>will</em> after <em>if</em> or <em>unless</em>: <em>if it rains</em>, <em>unless it stops</em>.',
          'Formal: <em>Should you need help</em> = if you need help; <em>Had it not been for you</em> = without you (past).'
        ],
        examples: [
          { s: 'If she hadn\'t moved to Bangkok, she <b>wouldn\'t speak</b> such good Thai now.', g: 'Past condition, present result: a mixed conditional.' },
          { s: '<b>Unless</b> the rain <b>stops</b> soon, the match will be cancelled.', g: 'Unless means if not, and takes a present verb.' },
          { s: '<b>Should you lose</b> your card, call this number at once.', g: 'Formal inversion: should here means if, not advice.' },
          { s: '<s>If it will rain tomorrow, we will stay at home.</s>', g: 'No will in the if-clause: if it rains tomorrow.' }
        ]
      },
      items: [
        { id: 't10l2s3-1', type: 'cloze', tag: 'tc-cond', level: 'C1',
          passage: T10_P_VOLUNTEER, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['wouldn\'t have known', 'wouldn\'t know', 'won\'t know', 'hadn\'t known'],
          answer: 1,
          why: 'Mai\'s condition is about the past (she did join the team during the holiday), but the result is about <em>now</em>, so this is a mixed conditional: past condition, present result, <em>wouldn\'t know</em>. <em>Wouldn\'t have known</em> is the type 3 trap: it would fit a past result, but it clashes with <em>now</em>. <em>Won\'t know</em> is for a real future condition, and <em>hadn\'t known</em> belongs in an if-clause, not in a result.' },

        { id: 't10l2s3-2', type: 'cloze', tag: 'tc-cond', level: 'C1',
          passage: T10_P_VOLUNTEER, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['will be strengthened', 'aren\'t strengthened', 'are strengthened', 'would be strengthened'],
          answer: 2,
          why: '<em>Unless</em> means "if not" and talks about the future with a present verb, and riverbanks are strengthened by somebody, so the verb is a present passive: <em>are strengthened</em>. <em>Aren\'t strengthened</em> is the near miss: it looks natural, but <em>unless</em> already contains the "not", so the sentence would say the homes will flood only if the banks <strong>are</strong> repaired. <em>Will be strengthened</em> and <em>would be strengthened</em> put a modal into the condition, where it does not belong.' },

        { id: 't10l2s3-3', type: 'cloze', tag: 'tc-cond', level: 'C1',
          passage: T10_P_VOLUNTEER, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['Should', 'Would', 'Unless', 'Had'],
          answer: 0,
          why: 'A notice that drops <em>if</em> and puts the verb first uses <em>Should</em>: <em>Should you wish to join</em> = If you wish to join. <em>Would</em> cannot replace <em>if</em> in this way, and <em>Had you wish</em> is not a possible form. <em>Unless</em> would mean "if you do not wish to join, please contact Ms Ladda", which is the opposite of the message.' },

        { id: 't10l2s3-4', type: 'spot', tag: 'tc-cond', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['If it will rain', 'on sports day,', 'all the races will be moved', 'to the indoor hall.'],
          answer: 0,
          fix: 'If it rains',
          why: 'A condition about the future uses a present verb, not <em>will</em>: <em>If it rains on sports day</em>. The <em>will</em> belongs in the result clause, where it already is: <em>all the races will be moved to the indoor hall</em>. Parts 2, 3 and 4 are correct.' },

        { id: 't10l2s3-5', type: 'equiv', tag: 'tc-cond', level: 'C1',
          given: '<em>Should you need</em> any help with the application form, please ask at the front desk.',
          stem: 'Which sentence has the same meaning?',
          options: [
            'You should ask for help with the form at the front desk.',
            'You will need help with the form, so please ask at the front desk.',
            'If you needed help, you would have asked at the front desk.',
            'If you need help with the form, please ask at the front desk.'
          ],
          answer: 3,
          why: '<em>Should you need…</em> is a formal way of saying <em>If you need…</em>; the <em>should</em> is not advice. So the notice means: if you need help, ask at the desk. <em>You should ask for help with the form at the front desk</em> is the near miss — it reads <em>should</em> as advice and turns the condition into an instruction for everyone. <em>You will need help with the form…</em> says you certainly will need help, and the sentence with <em>would have asked</em> is about an unreal past.' }
      ]
    }
  ],

  check: {
    id: 't10l2ck', name: 'Stage Check · Text Completion',
    items: [
      { id: 't10l2ck-1', type: 'cloze', tag: 'tc-modal-passive', level: 'B2+',
        passage: T10_P_DRAIN, blank: '(3)',
        stem: 'Choose the best option for blank (3).',
        options: ['to complete', 'to be completed', 'being completed', 'to have completed'],
        answer: 1,
        why: 'A plan does not complete anything; officials complete it, so the infinitive after <em>is expected</em> is passive: <em>to be completed</em>. <em>To complete</em> is the near miss: the right shape, but active, so the plan would be doing the completing. <em>Being completed</em> does not follow <em>expected</em>, and <em>to have completed</em> is active and looks back, which clashes with <em>by the end of March</em>.' },

      { id: 't10l2ck-2', type: 'cloze', tag: 'tc-subjunctive', level: 'B2+',
        passage: T10_P_HEAT, blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['be shortened', 'to be shortened', 'will be shortened', 'are shortening'],
        answer: 0,
        why: 'The nurse is saying what should happen, so the that-clause takes the bare base form, and assemblies are shortened by the school, so it is passive: that assemblies <em>be shortened</em>. <em>To be shortened</em> is the near miss: the right passive, but <em>to</em> cannot follow <em>that</em> + subject. <em>Will be shortened</em> is not used after a recommendation, and <em>are shortening</em> is an active present continuous.' },

      { id: 't10l2ck-3', type: 'cloze', tag: 'tc-cond', level: 'C1',
        passage: T10_P_VOLUNTEER, blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['Unless it had been', 'If it has not been', 'Had it not been', 'Hadn\'t it been'],
        answer: 2,
        why: 'The result clause, <em>would have lost</em>, is about the past, so the formal inverted condition is <em>Had it not been for their help</em> (= if it had not been for their help). <em>Hadn\'t it been</em> is the near miss: an inverted condition never takes the short form <em>n\'t</em>, so the <em>not</em> must stand after the subject. <em>If it has not been</em> puts a present perfect into an unreal past, and <em>Unless it had been for their help</em> is not a possible pattern.' },

      { id: 't10l2ck-4', type: 'choose', tag: 'tc-modal-passive', level: 'B2+',
        stem: 'The science fair results were wrong because the samples were left in a warm room all weekend. They ______ in the fridge.',
        options: ['should have kept', 'should be kept', 'should have been kept', 'must have been kept'],
        answer: 2,
        why: 'The samples were not kept cold, and that was a mistake, so the writer criticises the past; samples do not keep anything, so it is passive: <em>should have been kept</em>. <em>Should have kept</em> is the near miss — the right time, but active, so the samples would be doing the keeping. <em>Should be kept</em> is advice for now, and <em>must have been kept</em> is a guess that they <strong>were</strong> kept in the fridge, which the first sentence contradicts.' },

      { id: 't10l2ck-5', type: 'choose', tag: 'tc-subjunctive', level: 'C1',
        stem: 'It is essential that the results ______ until every school has finished the test.',
        options: ['not published', 'won\'t be published', 'don\'t be published', 'not be published'],
        answer: 3,
        why: 'After <em>It is essential that</em>, the clause says what must happen, so it takes the base form, and its negative is <em>not</em> + base form with no <em>do</em>. Results are published by somebody, so it is passive: <em>not be published</em>. <em>Not published</em> drops the <em>be</em>; <em>don\'t be published</em> adds a <em>do</em> that the subjunctive never takes; <em>won\'t be published</em> uses a <em>will</em> that does not belong after this trigger.' },

      { id: 't10l2ck-6', type: 'choose', tag: 'tc-cond', level: 'B2+',
        stem: 'If the school ______ the trip a month earlier, more students could have joined it.',
        options: ['announced', 'had announced', 'would announce', 'has announced'],
        answer: 1,
        why: 'The result, <em>could have joined</em>, is about the past, so the condition is an unreal past: <em>had</em> + past participle, <em>had announced</em>. <em>Announced</em> is the near miss: it is the condition for an unreal present, which clashes with <em>could have joined</em>. <em>Would announce</em> puts a modal into the if-clause, and <em>has announced</em> is a real present perfect.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
T10.levels.push({
  id: 't10l3', n: 3, name: 'Reading: what the writer is sure of', cefr: 'B2+–C1',
  blurb: 'TCAS Part II asks what a text really says. The modals carry the answer: may is not will in a news report, need not is not cannot in the fine print, and should have tells you what the writer thinks.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't10l3s1', name: 'Hedged claims in the news: may is not will', cefr: 'B2+',
      theory: {
        key: 'News reports and articles show how sure the writer is: <em>may</em>, <em>might</em> and <em>could</em> say a thing is possible, <em>is likely to</em> and <em>is expected to</em> say it is probable, <em>appears to</em> says the evidence points that way — and an option that says <em>will</em>, <em>has</em> or <em>proved</em> when the text only says <em>may</em> is not true according to the text.',
        body: [
          '<strong>The certainty ladder in writing.</strong> At the top is a plain verb with no modal: <em>The plan was approved</em> — a fact. Then <em>will</em>: <em>The plan will apply to six districts</em> — a firm prediction. Then <em>is likely to / is expected to / should</em>: probable. Then <em>may / might / could</em>: possible. <em>Appears to / seems to / suggests that</em> say what the evidence shows so far, without a promise. Journalists choose these words carefully, because a hedged claim cannot later be called false.',
          '<strong>Who is sure?</strong> Often the hedge belongs to someone the writer is quoting: <em>Officials say the change is likely to be popular</em>; <em>the researchers say the extra sleep appears to help, but they warn that the study was small</em>. Keep track of whose opinion each modal carries — the officials\', the researchers\' or the writer\'s own.',
          '<strong>How TCAS tests it.</strong> "Which statement is TRUE?" and "It can be inferred that…" questions hide the trap in the modal. The text says <em>may cause problems</em>; a wrong option says <em>will cause problems</em> or <em>has caused problems</em>. The text says <em>appears to improve</em>; a wrong option says <em>proved that it improves</em>. The right option keeps the same strength in different words: <em>might cause difficulties</em>, <em>could lead to</em>, <em>has not been decided yet</em>.',
          '<strong>The procedure.</strong> Step 1: find the sentence the option is about. Step 2: underline its modal or hedge. Step 3: put the option on the same rung of the ladder. If the option is stronger or weaker than the text, or turns a possibility into a fact, it is wrong, even if every other word matches.'
        ],
        simple: [
          '<em>may / might / could</em> = possible. <em>is likely to / is expected to</em> = probable. <em>will</em> = sure.',
          '<em>appears to / seems to</em> = the evidence so far says so, but it is not proved.',
          'If the text says <em>may</em> and the option says <em>will</em>, the option does not match the text.'
        ],
        examples: [
          { s: 'The new rule <b>may</b> reduce queues at the canteen.', g: 'Possible, not certain.' },
          { s: 'The new bridge <b>is expected to</b> open in March.', g: 'Probable, but nothing is certain yet.' },
          { s: 'The new diet <b>appears to</b> lower blood pressure.', g: 'The evidence points that way, but it is not proved.' },
          { s: 'Heavy rain <b>might</b> delay the opening of the new pier.', g: 'A possibility; the writer does not say it will happen.' }
        ]
      },
      items: [
        { id: 't10l3s1-1', type: 'read', tag: 'tc-read-hedge', level: 'B2+',
          passage: T10_P_NEWS,
          source: 'Illustrative news report written for practice',
          stem: 'Which statement is TRUE according to the report?',
          options: [
            'Bangkok schools will start at 9 a.m. from next May.',
            'Officials have approved a later start for six districts.',
            'A later start might cause difficulties for some working parents.',
            'The study proved that a later start improves concentration.'
          ],
          answer: 2,
          why: 'Paragraph 3 says the change <em>may cause problems for working parents</em>, and <em>might cause difficulties for some working parents</em> keeps the same strength in other words. <em>Bangkok schools will start at 9 a.m. from next May</em> is the will trap: the report says they <em>could be allowed</em> to, and nothing has been decided. <em>Officials have approved…</em> is false, because a decision is still <em>expected by the end of the year</em>. <em>The study proved…</em> is too strong: the researchers say the sleep <em>appears to</em> help and warn that the study was small.' },

        { id: 't10l3s1-2', type: 'read', tag: 'tc-read-hedge', level: 'B2+',
          passage: T10_P_NEWS,
          source: 'Illustrative news report written for practice',
          stem: 'What can be inferred about the later start time?',
          options: [
            'It has not been decided yet.',
            'It will apply to every school in Bangkok at once.',
            'It will be popular with working parents.',
            'It has been delayed until next May.'
          ],
          answer: 0,
          why: 'Officials <em>will discuss</em> the proposal this month, and a final decision <em>is expected</em> by the end of the year, so it has not been decided yet. <em>It will apply to every school in Bangkok at once</em> contradicts paragraph 4, where it would apply <em>first to schools in six districts</em>. <em>It will be popular with working parents</em> reverses paragraph 3, which says it <em>may cause problems</em> for them. Nothing has been delayed: next May is simply the proposed start.' },

        { id: 't10l3s1-3', type: 'judge', tag: 'tc-read-hedge', level: 'B2+',
          given: 'A health report says that a new sugar tax <em>may</em> reduce the number of fizzy drinks that teenagers buy.',
          stem: 'The sugar tax will reduce the number of fizzy drinks that teenagers buy.',
          answer: 2,
          why: 'Can\'t tell. The report says the tax <em>may</em> reduce sales: that is a possibility, not a promise and not a denial. The statement turns it into <em>will</em>, which the report does not claim — but the report does not say that sales will <strong>not</strong> fall either, so the statement is not False. This is the classic TCAS trap: a <em>will</em> statement built on a <em>may</em> text.' },

        { id: 't10l3s1-4', type: 'equiv', tag: 'tc-read-hedge', level: 'B2+',
          given: 'Experts say the heatwave <em>is likely to</em> continue until the end of April.',
          stem: 'Which sentence reports the same level of certainty?',
          options: [
            'The heatwave will certainly continue until the end of April.',
            'There is a small chance that the heatwave will continue until April.',
            'The heatwave cannot continue until the end of April.',
            'The heatwave will probably continue until the end of April.'
          ],
          answer: 3,
          why: '<em>Is likely to</em> means probably: more than a possibility, less than a certainty, so <em>will probably continue</em> is on the same rung. <em>Will certainly continue</em> is the near miss in the strong direction, and <em>There is a small chance…</em> is the near miss in the weak direction. <em>Cannot continue</em> says the opposite.' },

        { id: 't10l3s1-5', type: 'choose', tag: 'tc-read-hedge', level: 'B2+',
          stem: 'A journalist wants to report a possible effect without claiming that it is certain. Which sentence should she write?',
          options: [
            'The heatwave will damage the rice harvest.',
            'The heatwave could damage the rice harvest.',
            'The heatwave has damaged the rice harvest.',
            'The heatwave is damaging the rice harvest.'
          ],
          answer: 1,
          why: 'A possible effect, with no claim of certainty, needs a modal of possibility: <em>could damage</em>. <em>Will damage</em> is the near miss: it is about the future too, but it is a firm prediction. <em>Has damaged</em> and <em>is damaging</em> report the damage as a fact that has happened or is happening now.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't10l3s2', name: 'Fine print: must, need not, may, cannot', cefr: 'B2+',
      theory: {
        key: 'Notices, ads and fine print use modals as rules: <em>must</em> and <em>will be required to</em> = you have to; <em>need not</em> = you don\'t have to; <em>may</em> = you are allowed to; <em>cannot</em>, <em>may not</em> and <em>is not allowed</em> = it is forbidden — and NOT / EXCEPT questions turn on the difference between "not necessary" and "not allowed".',
        body: [
          '<strong>Rules in the third person.</strong> Fine print rarely says <em>you must</em>; it says <em>Members must…</em>, <em>Group rooms must be reserved…</em>, <em>Members under 16 will be required to show…</em>. All of these are obligations. <em>Will be required to</em> is a formal future of <em>have to</em>. Passives are common: <em>must be reserved</em>, <em>cannot be shared</em>, <em>cannot be combined</em>.',
          '<strong>Two negatives, opposite meanings.</strong> <em>Need not</em> (<em>needn\'t</em>) and <em>do not have to</em> mean it is not necessary — you may still do it if you like: <em>Visitors need not print their tickets.</em> <em>Cannot</em>, <em>may not</em>, <em>must not</em> and <em>is not allowed</em> mean it is forbidden: <em>Vouchers cannot be exchanged for cash.</em> A line such as <em>This offer cannot be combined with any other discount</em> means a second discount is forbidden, not optional.',
          '<strong><em>May</em> has two jobs.</strong> In a rule, <em>may</em> gives permission: <em>Guests may use the gym free of charge</em> = they are allowed to. In a report, <em>may</em> is a possibility: <em>Prices may change</em> = perhaps they will. In a notice, read <em>may</em> as permission first, and <em>may not</em> as "is not allowed".',
          '<strong>How TCAS tests it.</strong> Ad items ask "Which is NOT allowed?", "Who would be able to get the discount?" or "Which statement is FALSE?". Make a quick table — must / need not / may / cannot — and tick each option against it. The trap is nearly always a <em>need not</em> read as a ban, or a <em>cannot</em> read as a choice. TCAS also likes conditions: dates, ages, a <em>valid</em> ID, <em>at least one day in advance</em>.'
        ],
        simple: [
          '<em>must</em> / <em>will be required to</em> = you have to. <em>need not</em> = you don\'t have to.',
          '<em>may</em> = you are allowed to. <em>cannot</em> / <em>may not</em> / <em>is not allowed</em> = forbidden.',
          'For NOT / EXCEPT questions, check every option against the rule words one by one.'
        ],
        examples: [
          { s: 'Swimmers <b>must</b> shower before entering the pool.', g: 'An obligation: you have to.' },
          { s: 'Visitors <b>need not</b> print their tickets.', g: 'Not necessary: you can print one, but you do not have to.' },
          { s: 'Guests <b>may</b> use the gym free of charge.', g: 'Permission: it is allowed.' },
          { s: 'Vouchers <b>cannot be exchanged</b> for cash.', g: 'Forbidden: you are not allowed to swap them for money.' }
        ]
      },
      items: [
        { id: 't10l3s2-1', type: 'read', tag: 'tc-fineprint', level: 'B2+',
          passage: T10_P_AD,
          source: 'Illustrative advertisement',
          stem: 'Which of the following is NOT allowed?',
          options: [
            'Eating your own snacks in a study area',
            'Lending your pass to a friend for a day',
            'Using the pass without booking a seat',
            'Studying at two different Skyline cafés in one week'
          ],
          answer: 1,
          why: 'The ad says passes <em>cannot be shared with or transferred to another person</em>, so lending your pass to a friend, even for one day, is forbidden. Your own snacks are allowed (<em>may bring their own snacks</em>; only hot food is banned), and the pass covers <em>all 12</em> cafés. Using the pass without booking a seat is the near miss: <em>need not</em> can look like a ban, but it only means booking is not necessary.' },

        { id: 't10l3s2-2', type: 'read', tag: 'tc-fineprint', level: 'B2+',
          passage: T10_P_AD,
          source: 'Illustrative advertisement',
          stem: 'Pim, who is 17, wants to use a group room with three classmates on Saturday afternoon. What must she do?',
          options: [
            'Bring a letter from one of her parents',
            'Book a seat for herself in the study area',
            'Show her student ID only on her first visit',
            'Reserve the group room by Friday at the latest'
          ],
          answer: 3,
          why: 'Group rooms <em>must be reserved at least one day in advance</em>, so for Saturday Pim has to reserve by Friday. The parent letter is only for members under 16, and Pim is 17. She <em>need not</em> book a seat, and she must show her ID <em>every time</em>, not just on her first visit.' },

        { id: 't10l3s2-3', type: 'read', tag: 'tc-fineprint', level: 'B2+',
          passage: T10_P_AD,
          source: 'Illustrative advertisement',
          stem: 'The words <em>You need not book a seat</em> mean that members ______.',
          options: [
            'don\'t have to book one',
            'are not allowed to book one',
            'must book one a day before',
            'pay extra when they book one'
          ],
          answer: 0,
          why: '<em>Need not</em> means there is no obligation: members <em>don\'t have to book one</em>, though they can if they want to. <em>Are not allowed to book one</em> is the classic misreading: it treats <em>need not</em> as a ban. <em>Must book one a day before</em> confuses seats with group rooms, and the ad says nothing about paying extra.' },

        { id: 't10l3s2-4', type: 'judge', tag: 'tc-fineprint', level: 'B2+',
          given: 'Skyline Study Pass: "This offer <em>cannot be combined</em> with any other discount."',
          stem: 'A member who buys this pass can also use the café\'s 10% birthday discount on it.',
          answer: 1,
          why: 'False. <em>Cannot be combined with any other discount</em> means that this offer and another discount are not allowed together, so the birthday discount cannot be added to the pass. It is not Can\'t tell: <em>any other discount</em> includes a birthday discount.' },

        { id: 't10l3s2-5', type: 'choose', tag: 'tc-fineprint', level: 'B2+',
          stem: 'A library notice says: <em>Books may be borrowed for up to two weeks.</em> What does <em>may</em> mean here?',
          options: [
            'Perhaps somebody will borrow the books.',
            'Books must be returned after exactly two weeks.',
            'You are allowed to borrow books for two weeks.',
            'Borrowers might be asked to pay a fee.'
          ],
          answer: 2,
          why: 'In a notice, <em>may</em> gives permission: you are allowed to keep books for up to two weeks. <em>Perhaps somebody will borrow the books</em> reads <em>may</em> as a possibility, which is its job in a report, not in a rule. <em>Up to two weeks</em> means two weeks or less, not <em>exactly</em> two weeks, and the notice says nothing about a fee.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't10l3s3', name: 'The writer\'s stance: should, must, could have, might want to', cefr: 'C1',
      theory: {
        key: 'A writer\'s modals show their attitude: <em>should</em> and <em>ought to</em> recommend, <em>must</em> insists, <em>could have</em> and <em>should have</em> criticise a chance that was missed, and <em>might want to</em> makes a polite suggestion — so tone and purpose questions can often be answered from the modals alone.',
        body: [
          '<strong>Recommendation and insistence.</strong> <em>Schools ought to treat sleep as part of exam preparation</em> and <em>Schools should…</em> give the writer\'s recommendation: this is an argument, not a report. <em>Tutoring schools must take responsibility</em> is stronger: the writer insists, and often criticises at the same time. When an article is full of <em>should</em> and <em>must</em>, its purpose is to persuade.',
          '<strong>Criticism of the past.</strong> <em>Could have</em> + past participle describes a chance that existed and was not taken: <em>The city could have built the bridge years ago</em> (but it did not). <em>Should have</em> + past participle adds the writer\'s judgement that not taking it was a mistake: <em>They should have listened to their students.</em> Together they signal disappointment or criticism. They are not advice for the future, and here they are not guesses.',
          '<strong>Polite suggestion.</strong> <em>You might want to…</em>, <em>Readers may wish to…</em> and <em>It might be worth…</em> are soft. They tell the reader what to do without giving an order, which is how a writer addresses a group she does not want to attack. So one article can be harsh with one group (<em>must</em>) and gentle with another (<em>might want to</em>), and a question about whom the writer criticises most is answered by comparing the modals.',
          '<strong>How TCAS tests it.</strong> Tone and attitude questions offer four adjectives (critical, balanced, neutral, enthusiastic); purpose questions offer four verbs (to argue, to report, to advertise, to explain); and "The writer uses X to…" questions test the job of one phrase. As you read, mark each modal R (recommend), I (insist), C (criticise the past) or P (polite suggestion), then let the pattern answer.'
        ],
        simple: [
          '<em>should / ought to</em> = I recommend it. <em>must</em> = I insist.',
          '<em>could have / should have</em> + past participle = a chance was missed, and that was a mistake.',
          '<em>might want to</em> = a polite suggestion.'
        ],
        examples: [
          { s: 'The council <b>ought to</b> plant more trees along the canal.', g: 'A recommendation: the writer is arguing.' },
          { s: 'Van companies <b>must</b> stop overcrowding their vehicles.', g: 'Insistence, with criticism.' },
          { s: 'The city <b>could have</b> built the bridge years ago.', g: 'A missed chance: it was possible, but it did not happen.' },
          { s: 'Readers <b>might want to</b> check the price before booking.', g: 'A polite suggestion.' }
        ]
      },
      items: [
        { id: 't10l3s3-1', type: 'read', tag: 'tc-read-stance', level: 'C1',
          passage: T10_P_OPINION,
          source: 'Illustrative opinion article written for practice',
          stem: 'What is the writer\'s main purpose?',
          options: [
            'To argue that rest should be part of exam preparation',
            'To report the results of a new study on teenage sleep',
            'To advertise a tutoring school that offers shorter classes',
            'To explain how the TCAS papers are marked'
          ],
          answer: 0,
          why: 'The writer argues for a change — <em>Schools ought to treat sleep as part of exam preparation</em> — and then supports it with a missed chance from the past and a criticism of tutoring schools. That is the purpose of an opinion piece: to argue. There is no new study, the article criticises tutoring schools rather than selling one, and nothing is said about how papers are marked.' },

        { id: 't10l3s3-2', type: 'read', tag: 'tc-read-stance', level: 'C1',
          passage: T10_P_OPINION,
          source: 'Illustrative opinion article written for practice',
          stem: 'In paragraph 2, the writer uses <em>should have listened</em> to ______.',
          options: [
            'give the schools advice for next year',
            'criticise a decision that was made in the past',
            'guess why the plan was dropped',
            'report what the students asked for'
          ],
          answer: 1,
          why: '<em>Should have listened</em> looks back at a decision that was already made (the plan was dropped five years ago) and says it was a mistake: it criticises. <em>Give the schools advice for next year</em> is the near miss: <em>should</em> on its own gives advice, but <em>should have</em> + past participle is about the past. The writer is not guessing — she says plainly why the plan was dropped — and the students\' request is reported by the relative clause that follows (<em>who had asked for exactly this change</em>), not by <em>should have</em>.' },

        { id: 't10l3s3-3', type: 'equiv', tag: 'tc-read-stance', level: 'B2+',
          given: '"You <em>might want to</em> check the deadline again."',
          stem: 'What is the speaker doing?',
          options: [
            'Ordering you to check the deadline',
            'Guessing that you will check it',
            'Making a polite suggestion',
            'Criticising you for not checking it'
          ],
          answer: 2,
          why: '<em>Might want to</em> is a soft way of telling someone what to do: a polite suggestion. It is not an order. <em>Might</em> can express a guess, but <em>you might want to</em> is not a prediction about what you will do. And it looks forward, so it does not criticise anything in the past.' },

        { id: 't10l3s3-4', type: 'sort', tag: 'tc-read-stance', level: 'C1',
          stem: 'Is the writer saying what should happen, or criticising a chance that was missed?',
          bins: [
            { key: 'now', label: 'What should happen', hint: 'a recommendation, an insistence or a polite suggestion' },
            { key: 'past', label: 'A missed chance', hint: 'something that did or did not happen' }
          ],
          items: [
            { text: 'Schools <em>ought to</em> treat sleep as part of exam preparation.', bin: 'now' },
            { text: 'Those schools <em>should have listened</em> to their students.', bin: 'past' },
            { text: 'The schools <em>could have moved</em> their classes to the weekend.', bin: 'past' },
            { text: 'Tutoring schools <em>must</em> also take responsibility.', bin: 'now' },
            { text: 'Parents <em>might want to</em> ask how much their child sleeps.', bin: 'now' },
            { text: 'The ministry <em>shouldn\'t have ignored</em> the survey.', bin: 'past' }
          ],
          why: 'The sentences with <em>ought to</em>, <em>must</em> and <em>might want to</em> all point forward: the writer wants something to happen. <em>Should have</em>, <em>could have</em> and <em>shouldn\'t have</em> + past participle point back at something that did or did not happen, and they carry the writer\'s criticism or regret.' },

        { id: 't10l3s3-5', type: 'judge', tag: 'tc-read-stance', level: 'C1',
          given: 'Five years ago, several schools <em>could have moved</em> their evening classes to the weekend, but the plan was dropped.',
          stem: 'The schools moved their evening classes to the weekend.',
          answer: 1,
          why: 'False. <em>Could have moved</em> describes a chance that existed and was not taken, and <em>the plan was dropped</em> confirms that the classes were not moved. It is not Can\'t tell: here <em>could have</em> is not a guess, because the sentence itself says what happened.' }
      ]
    }
  ],

  check: {
    id: 't10l3ck', name: 'Stage Check · Reading',
    items: [
      { id: 't10l3ck-1', type: 'read', tag: 'tc-read-hedge', level: 'B2+',
        passage: T10_P_NEWS,
        source: 'Illustrative news report written for practice',
        stem: 'How do the researchers feel about their own findings?',
        options: [
          'They are sure that a later start improves concentration.',
          'They believe their study was too small to be of any use.',
          'They think officials should approve the plan this year.',
          'They find the results encouraging but not conclusive.'
        ],
        answer: 3,
        why: 'The researchers say the extra sleep <em>appears to</em> improve concentration but <em>warn that the study was small and that a longer trial is needed</em>: they find the results encouraging but not conclusive. <em>They believe their study was too small to be of any use</em> is the near miss, and it goes too far: they ask for a longer trial; they do not call the study useless. <em>They are sure…</em> overstates <em>appears to</em>, and the report gives no view from the researchers on the decision.' },

      { id: 't10l3ck-2', type: 'read', tag: 'tc-fineprint', level: 'B2+',
        passage: T10_P_AD,
        source: 'Illustrative advertisement',
        stem: 'Which of these students will be required to do something extra?',
        options: [
          'Mai, 17, who wants to bring a sandwich',
          'Nan, 15, who is buying her first pass',
          'Ploy, 16, who wants to use two different cafés',
          'Fah, 18, who does not want to book a seat'
        ],
        answer: 1,
        why: 'The ad says members under 16 <em>will be required to show a letter from a parent when they buy their first pass</em>, so Nan, who is 15 and buying her first pass, must bring a letter. Mai\'s sandwich is a snack, which members <em>may</em> bring; Ploy may use any of the 12 cafés; and Fah <em>need not</em> book a seat.' },

      { id: 't10l3ck-3', type: 'read', tag: 'tc-read-stance', level: 'C1',
        passage: T10_P_OPINION,
        source: 'Illustrative opinion article written for practice',
        stem: 'Which group does the writer criticise most strongly?',
        options: ['Parents', 'Students', 'Tutoring schools', 'Bangkok head teachers'],
        answer: 2,
        why: 'The strongest language is kept for tutoring schools: they <em>must also take responsibility</em>, and a centre that keeps teenagers late <em>is selling them anxiety</em>. Parents get only a polite <em>might want to ask</em>. Students are defended, not criticised, and several head teachers actually wanted the change; the <em>should have listened</em> criticism is aimed at the schools\' past decision and is milder than <em>must</em> together with <em>selling them anxiety</em>.' },

      { id: 't10l3ck-4', type: 'equiv', tag: 'tc-read-hedge', level: 'B2+',
        given: 'According to the study, the new app <em>appears to</em> help students remember vocabulary.',
        stem: 'Which sentence is closest in meaning?',
        options: [
          'The study proves that the app helps students remember vocabulary.',
          'The study suggests that the app may help students remember vocabulary.',
          'The study shows that the app does not help students at all.',
          'The study says that students must use the app.'
        ],
        answer: 1,
        why: '<em>Appears to</em> reports what the evidence suggests so far, without proof, so <em>suggests that the app may help</em> is on the same rung. <em>Proves that the app helps</em> is the near miss in the strong direction. <em>Does not help students at all</em> reverses the finding, and <em>students must use the app</em> turns a finding into a rule.' },

      { id: 't10l3ck-5', type: 'choose', tag: 'tc-fineprint', level: 'B2+',
        stem: 'A sign at a swimming pool says: <em>Children under 10 must be accompanied by an adult. Swimming caps need not be worn.</em> Which statement is true?',
        options: [
          'A nine-year-old may swim without an adult.',
          'Swimmers are not allowed to wear caps.',
          'Each swimmer can decide whether to wear a cap.',
          'Every adult must wear a swimming cap.'
        ],
        answer: 2,
        why: '<em>Need not be worn</em> means caps are not necessary, so whether to wear one is the swimmer\'s choice. <em>Swimmers are not allowed to wear caps</em> is the classic misreading of <em>need not</em> as a ban. A nine-year-old is under 10, so she <em>must</em> be with an adult, and the sign does not make caps compulsory for anyone.' },

      { id: 't10l3ck-6', type: 'choose', tag: 'tc-read-stance', level: 'C1',
        stem: 'A hotel review ends: <em>This place could have been excellent. The staff should have been trained to deal with complaints.</em> What is the reviewer\'s attitude?',
        options: [
          'Disappointed by a chance the hotel missed',
          'Completely satisfied with her stay',
          'Unsure whether she really stayed there',
          'Certain the hotel will improve next year'
        ],
        answer: 0,
        why: '<em>Could have been excellent</em> describes a chance the hotel missed, and <em>should have been trained</em> says that not training the staff was a mistake: the reviewer is disappointed. <em>Completely satisfied</em> ignores both criticisms. The modals are not guesses, so nothing suggests she is unsure about her own stay, and nothing looks forward to next year — both modals look back.' }
    ]
  }
});

TOPICS.push(T10);
