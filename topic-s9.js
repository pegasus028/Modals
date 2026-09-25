/* ===========================================================================
   STAGE 09 — Unit 5 Review: Rules, Regrets and Guesses
   A review stage keyed to Gateway to the World B2, Unit 5 (pp. 60–61, 64–65,
   68–69): obligation, prohibition and advice in the present and the past,
   and speculation and deduction about the present and the past. The triage
   test sends a student here when a Unit 5 point is missed.
   =========================================================================== */

var T9 = {
  id: 't9', n: 9, code: 'Stage 09', art: 'sim',
  name: 'Unit 5 Review: Rules, Regrets and Guesses',
  cefr: 'B1+–B2',
  blurb: 'Everything in Unit 5 in one place: what you have to do, what you had to do, what you should have done, and how sure you are about what happened.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
T9.levels.push({
  id: 't9l1', n: 1, name: 'Rules now', cefr: 'B1+',
  blurb: 'What you have to do, what you mustn\'t do and what you should do: obligation, prohibition and advice in the present.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't9l1s1', name: 'Have to, must, need to — and the negatives that flip the meaning', cefr: 'B1+',
      theory: {
        key: 'In the positive, <em>have to</em>, <em>must</em> and <em>need to</em> all say that something is necessary; in the negative they split into two opposite meanings — <em>don\'t have to</em>, <em>don\'t need to</em> and <em>needn\'t</em> mean there is no obligation, while <em>mustn\'t</em>, <em>can\'t</em> and <em>aren\'t allowed to</em> mean it is not allowed.',
        body: [
          '<em>Have to</em>, <em>must</em> and <em>need to</em> all say that something is necessary. <em>Have to</em> is the usual choice when the obligation comes from <strong>other people</strong> — a shop, a bank, a school, the law: <em>You have to pay before you leave the shop.</em> <em>Must</em> is common in written rules and notices (<em>Passengers must show their tickets</em>), and it is also what we say when the obligation comes from <strong>ourselves</strong>: <em>I must remember to buy Mum a present.</em> <em>Need to</em> simply says that something is necessary.',
          'The negatives are where marks are lost, because they do not match. <em>Don\'t have to</em>, <em>don\'t need to</em> and <em>needn\'t</em> all mean <strong>there is no obligation</strong>: you can do it if you want, but nobody says you must. <em>Mustn\'t</em>, <em>can\'t</em> and <em>aren\'t allowed to</em> all mean <strong>it is not allowed</strong>: there is a rule against it. <em>You can\'t use cash on the bus</em> and <em>Children under seven aren\'t allowed to have a card</em> are both rules, not choices.',
          'A quick test: add <em>… but you can if you like</em>. It makes sense after a no-obligation form: <em>You don\'t have to come, but you can if you like.</em> After a prohibition it is nonsense: <s>You mustn\'t come, but you can if you like.</s>',
          'Why it matters: mixing them up does not make your meaning a little unclear — it turns it upside down. If you tell a friend <em>You mustn\'t bring anything to my party</em> when you mean <em>You don\'t have to</em>, you have just told her that bringing a present is against the rules.'
        ],
        simple: [
          '<em>Don\'t have to</em>, <em>don\'t need to</em> and <em>needn\'t</em> = there is no obligation; it is your choice.',
          '<em>Mustn\'t</em>, <em>can\'t</em> and <em>aren\'t allowed to</em> = there is a rule against it.',
          '<em>Have to</em> is often somebody else\'s rule; <em>must</em> is often your own idea or a written rule.'
        ],
        examples: [
          { s: 'You <b>don\'t have to</b> pay to go into the park — it\'s free.', g: 'no obligation: nobody asks you to pay.' },
          { s: 'You <b>mustn\'t</b> feed the animals at the zoo.', g: 'a rule: feeding them is not allowed.' },
          { s: 'I <b>must</b> save some money this month.', g: 'the speaker has decided this herself.' },
          { s: '<s>You mustn\'t bring a coat — it\'s really warm today.</s>', g: 'the speaker means there is no need, so it should be: you don\'t have to bring a coat.' }
        ]
      },
      items: [
        { id: 't9l1s1-1', type: 'choose', tag: 'u5-now-neg', level: 'B1+',
          stem: 'The school canteen has started taking phone payments, but it still accepts cash too. Complete the message to students: <em>Good news! You ______ bring cash for lunch any more — just use your phone if you prefer.</em>',
          options: ['mustn\'t', 'don\'t have to', 'shouldn\'t', 'aren\'t allowed to'],
          answer: 1,
          why: 'Cash is still accepted, so nothing is forbidden: the news is that cash is now a choice, and <em>don\'t have to</em> says exactly that — there is no obligation. Option 1, <em>mustn\'t</em>, is the near miss: it would be right if the canteen had stopped taking cash, but here it would ban something that is still allowed. Option 4, <em>aren\'t allowed to</em>, is the same ban in other words. Option 3, <em>shouldn\'t</em>, advises students not to bring cash, but nobody is giving that advice — the message is only saying that the phone is a new option.' },

        { id: 't9l1s1-2', type: 'equiv', tag: 'u5-now-neg', level: 'B1+',
          given: 'It isn\'t necessary to book a table at the café on weekdays.',
          stem: 'Which sentence means the same?',
          options: [
            'You mustn\'t book a table at the café on weekdays.',
            'You aren\'t allowed to book a table at the café on weekdays.',
            'You have to book a table at the café on weekdays.',
            'You needn\'t book a table at the café on weekdays.'
          ],
          answer: 3,
          why: '<em>It isn\'t necessary</em> means there is no obligation: you can book if you like, but you don\'t need to. <em>Needn\'t</em> says exactly that. Option 1, <em>mustn\'t</em>, looks like a partner of <em>needn\'t</em> but means the opposite: booking would be against the rules. Option 2 is also a rule against booking. Option 3 goes the other way and makes booking necessary, which is what the given sentence denies.' },

        { id: 't9l1s1-3', type: 'cloze', tag: 'u5-now-neg', level: 'B1+',
          passage: 'Opening a student account with us is easy. You have to be at least fifteen, and you need to bring your passport or ID card. You ___(1)___ pay a fee to open the account, and there are no monthly charges either.\n\nPlease remember that you mustn\'t tell anyone your PIN, not even a member of our staff.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['don\'t have to', 'mustn\'t', 'have to', 'can\'t'],
          answer: 0,
          why: 'The bank is telling you that opening the account is free, so there is no obligation to pay: <em>don\'t have to</em>. The word <em>either</em> in <em>no monthly charges either</em> confirms that the first part was also about something you do not pay. Option 3, <em>have to</em>, would be right if there were an opening fee, but <em>either</em> rules that out. Option 2, <em>mustn\'t</em>, is the near miss — it is right for the PIN in the next paragraph, but no bank forbids you to pay. Option 4, <em>can\'t</em>, is also a ban, so it fails for the same reason.' },

        { id: 't9l1s1-4', type: 'sort', tag: 'u5-now-neg', level: 'B1+',
          stem: 'Is each sentence about something that is not necessary, or something that is not allowed?',
          bins: [
            { key: 'free', label: 'No obligation', hint: 'you can do it or not, as you like' },
            { key: 'ban',  label: 'Not allowed',   hint: 'there is a rule against it' }
          ],
          items: [
            { text: 'You <em>don\'t have to</em> pay for the museum on Sundays — it\'s free.', bin: 'free' },
            { text: 'Passengers <em>mustn\'t</em> eat or drink on the Skytrain.', bin: 'ban' },
            { text: 'You <em>needn\'t</em> print your ticket; the one on your phone is fine.', bin: 'free' },
            { text: 'Sorry, you <em>can\'t</em> pay by card in this shop — it\'s cash only.', bin: 'ban' },
            { text: 'Under-18s <em>aren\'t allowed to</em> have a credit card.', bin: 'ban' },
            { text: 'We <em>don\'t need to</em> change money at the airport — the hotel has a cash machine.', bin: 'free' }
          ],
          why: '<em>Don\'t have to</em>, <em>needn\'t</em> and <em>don\'t need to</em> all mean there is no obligation, and each sentence gives the reason it is not necessary (it\'s free, the phone ticket is fine, there is a cash machine). <em>Mustn\'t</em>, <em>can\'t</em> and <em>aren\'t allowed to</em> all mean there is a rule against it. The one that catches people is <em>needn\'t</em>: it looks like <em>mustn\'t</em>, but it belongs with <em>don\'t have to</em>.' },

        { id: 't9l1s1-5', type: 'gap', tag: 'u5-now-neg', level: 'B1',
          blank: '(1)',
          lines: [
            { who: 'Fah', text: 'Are you coming to the cinema with us on Saturday?' },
            { who: 'Ploy', text: 'I\'d love to, but I ___(1)___ work in my aunt\'s shop all day. She needs help with the big sale.' }
          ],
          stem: 'Choose the best option for gap (1).',
          options: ['mustn\'t', 'don\'t have to', 'have to', 'needn\'t'],
          answer: 2,
          why: 'Ploy is saying no to the cinema because somebody else — her aunt — needs her at the shop, so she needs a positive obligation: <em>have to</em>. Option 2, <em>don\'t have to</em>, is the near miss: it would be right if she were free and accepting, but after <em>I\'d love to, but …</em> she must be giving a reason she can\'t come. Option 4, <em>needn\'t</em>, has the same problem. Option 1, <em>mustn\'t</em>, would mean working in the shop is against the rules, which makes no sense when her aunt is asking for help.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't9l1s2', name: 'Should, ought to, had better', cefr: 'B1+',
      theory: {
        key: '<em>Should</em> and <em>ought to</em> give advice; <em>had better</em> (<em>\'d better</em>) gives stronger advice about a situation now, often a warning that something bad will happen if you ignore it.',
        body: [
          '<em>Should</em> and <em>ought to</em> both mean <strong>it\'s a good idea</strong>: <em>You should compare prices before you buy a phone.</em> <em>Ought to</em> means the same, but it is less common, especially in negatives and questions. Advice is weaker than a rule: after <em>should</em>, the listener is still free to say no. After <em>must</em> or <em>have to</em>, she isn\'t.',
          '<em>Had better</em> is stronger. We use it when we think something is a really good idea <strong>in this situation</strong>, and there is often a warning in it — do it, or something bad will happen: <em>You\'d better hurry, or you\'ll miss the bus.</em> In speech it is nearly always shortened to <em>\'d better</em>, and the <em>\'d</em> is <em>had</em>, not <em>would</em>. Even though <em>had</em> looks past, <em>had better</em> is about now or the near future.',
          'Watch the negatives and the <em>to</em>. The negative of <em>had better</em> is <em>had better not</em> (<em>You\'d better not be late</em>), never <s>hadn\'t better</s>. <em>Ought</em> always keeps its <em>to</em>: <em>You ought to ask</em>, not <s>You ought ask</s>, and its negative is <em>ought not to</em> or <em>oughtn\'t to</em>. <em>Should</em> and <em>had better</em> never take <em>to</em>.',
          'Choosing: for general advice, <em>should</em> is the safe choice. For a warning about what to do right now, <em>\'d better</em> sounds natural. For a real rule, use <em>must</em> or <em>have to</em> instead, because advice leaves the choice to the listener.'
        ],
        simple: [
          '<em>Should</em> and <em>ought to</em> = it\'s a good idea.',
          '<em>\'d better</em> (= <em>had better</em>) = do it now, or there could be a problem.',
          'Negatives: <em>shouldn\'t</em>, <em>ought not to</em>, <em>\'d better not</em>. Never <s>ought ask</s> or <s>hadn\'t better</s>.'
        ],
        examples: [
          { s: 'You <b>should</b> try the mango sticky rice — it\'s delicious.', g: 'friendly advice; you can say no.' },
          { s: 'We<b>\'d better</b> take a taxi — the last train has gone.', g: 'a warning about now; the \'d means had, not would.' },
          { s: 'You<b>\'d better not</b> spend all your pocket money on the first day.', g: 'the not goes after better.' },
          { s: '<s>You ought ask the teacher.</s>', g: 'ought keeps its to: you ought to ask the teacher.' }
        ]
      },
      items: [
        { id: 't9l1s2-1', type: 'choose', tag: 'u5-advice', level: 'B1+',
          stem: 'Your friend\'s phone battery is almost dead. You say: <em>You\'d better charge it before you go out.</em> What does <em>\'d</em> stand for here?',
          options: ['would', 'did', 'had', 'should'],
          answer: 2,
          why: '<em>\'d better</em> is always short for <em>had better</em>, even though the advice is about now. Option 1, <em>would</em>, is the near miss: <em>\'d</em> does mean <em>would</em> in sentences like <em>I\'d like a coffee</em>, but never before <em>better</em> — <s>would better</s> is not English. Option 2, <em>did</em>, makes no sense here: <s>you did better charge it</s> is not English. Option 4, <em>should</em>, gives advice too, but it is never shortened to <em>\'d</em>.' },

        { id: 't9l1s2-2', type: 'judge', tag: 'u5-advice', level: 'B1+',
          given: 'We\'d better take a taxi — the last train has already gone.',
          stem: 'The speaker is talking about something they did in the past.',
          answer: 1,
          why: 'False. <em>\'d better</em> contains the past form <em>had</em>, but it is about now or the near future: the speaker is saying that taking a taxi is the best idea at this moment, because there is no train. The past event in the sentence is the train leaving, not the taxi. It is not "Can\'t tell", because <em>had better</em> always looks forward, never back.' },

        { id: 't9l1s2-3', type: 'gap', tag: 'u5-advice', level: 'B1+',
          blank: '(1)',
          lines: [
            { who: 'Nok', text: 'Look, the ticket inspector is checking every carriage today.' },
            { who: 'Mint', text: 'Then we ___(1)___ put our feet on the seats. It\'s a 500-baht fine!' }
          ],
          stem: 'Choose the best option for gap (1).',
          options: ['had better not', 'had not better', 'needn\'t', 'hadn\'t better'],
          answer: 0,
          why: 'Mint is warning her friend about a problem right now — a fine — so she uses <em>had better</em>, and its negative puts <em>not</em> at the end: <em>had better not</em>. Options 2 and 4 put the <em>not</em> in the wrong place; <em>hadn\'t better</em> is a very common mistake because other verbs make their negative that way, but <em>had better</em> does not. Option 3, <em>needn\'t</em>, means there is no obligation to put your feet on the seats, which is a strange thing to say about a 500-baht fine.' },

        { id: 't9l1s2-4', type: 'spot', tag: 'u5-advice', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: [
            'If you\'re not sure',
            'which bus goes to the airport,',
            'you ought ask the driver',
            'before you get on.'
          ],
          answer: 2,
          fix: 'you ought to ask the driver',
          why: '<em>Ought</em> gives the same advice as <em>should</em>, but unlike <em>should</em> it always keeps its <em>to</em>: <em>you ought to ask</em>. <em>You should ask the driver</em> would also be correct. The other three parts are fine: the <em>if</em> clause, the question phrase and the time clause are all correctly formed.' },

        { id: 't9l1s2-5', type: 'equiv', tag: 'u5-advice', level: 'B1+',
          given: 'It\'s a good idea for you to compare prices online before you buy a new laptop.',
          stem: 'Which sentence gives the same advice?',
          options: [
            'You have to compare prices online before you buy a new laptop.',
            'You don\'t have to compare prices online before you buy a new laptop.',
            'You can\'t compare prices online before you buy a new laptop.',
            'You ought to compare prices online before you buy a new laptop.'
          ],
          answer: 3,
          why: '<em>It\'s a good idea</em> is advice, and <em>ought to</em> gives advice: the listener can still decide not to. Option 1, <em>have to</em>, is the near miss — it points the same way, but it turns a good idea into an obligation, as if a rule said so. Option 2 says the opposite: there is no need to compare prices. Option 3 says comparing prices is not allowed, which makes no sense here.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't9l1s3', name: 'Getting the form right: to or no to, questions and negatives', cefr: 'B1+',
      theory: {
        key: '<em>Must</em>, <em>mustn\'t</em>, <em>needn\'t</em>, <em>should</em>, <em>can\'t</em> and <em>had better</em> are followed by a verb without <em>to</em>; <em>have to</em>, <em>need to</em>, <em>ought to</em> and <em>be allowed to</em> keep their <em>to</em> — and the two groups make questions and negatives differently.',
        body: [
          'There are two groups. <strong>Group 1 — no <em>to</em>:</strong> <em>must</em>, <em>mustn\'t</em>, <em>needn\'t</em>, <em>should</em>, <em>shouldn\'t</em>, <em>can\'t</em>, <em>had better</em>. The next verb is the bare infinitive: <em>We needn\'t go</em>, not <s>We needn\'t to go</s>. <strong>Group 2 — with <em>to</em>:</strong> <em>have to</em>, <em>need to</em>, <em>ought to</em>, <em>be allowed to</em>.',
          '<strong>Questions.</strong> <em>Have to</em> and <em>need to</em> work like ordinary verbs, so their questions use <em>do</em> or <em>does</em>: <em>Does everybody have to pay?</em> <em>Do I need to book?</em> — not <s>Has everybody to pay?</s> <em>Should</em> goes to the front by itself: <em>Should we leave now?</em> Questions with <em>ought</em> are rare; the formal form is <em>Ought we to leave?</em>, never <s>Ought we leave?</s> In conversation, just use <em>should</em>.',
          '<strong>Negatives.</strong> <em>Don\'t have to</em>, <em>don\'t need to</em>, <em>needn\'t</em>, <em>mustn\'t</em>, <em>shouldn\'t</em>, <em>ought not to</em> or <em>oughtn\'t to</em>, <em>aren\'t allowed to</em>, <em>\'d better not</em>. Notice one pair: the positive of <em>We needn\'t go</em> is <em>We need to go</em>, not <s>We need go</s>.',
          '<strong>Allowed.</strong> <em>Be allowed to</em> needs both <em>be</em> and <em>to</em>: <em>We aren\'t allowed to use our phones in class.</em> A very common mistake is to drop <em>be</em> and use <em>do</em> instead: <s>We don\'t allowed to</s>.'
        ],
        simple: [
          'No <em>to</em> after <em>must</em>, <em>needn\'t</em>, <em>should</em>, <em>can\'t</em> and <em>had better</em>. Keep <em>to</em> after <em>have</em>, <em>need</em>, <em>ought</em> and <em>be allowed</em>.',
          'Questions with <em>have to</em> and <em>need to</em> use <em>do</em>/<em>does</em>: <em>Do we have to pay?</em>',
          'Positive <em>need to</em> ↔ negative <em>needn\'t</em> or <em>don\'t need to</em>.'
        ],
        examples: [
          { s: '<b>Does</b> everybody <b>have to</b> pay?', g: 'have to makes its question with does, like an ordinary verb.' },
          { s: 'You <b>needn\'t bring</b> anything — we\'ve got plenty of food.', g: 'needn\'t is followed by the verb with no to.' },
          { s: 'We <b>aren\'t allowed to use</b> our phones in class.', g: 'be allowed needs both be and to.' },
          { s: '<s>Has everybody to pay?</s>', g: 'the question needs does: does everybody have to pay?' }
        ]
      },
      items: [
        { id: 't9l1s3-1', type: 'choose', tag: 'u5-now-form', level: 'B1+',
          stem: 'You want to know about a rule at the new swimming pool. Which question is correct?',
          options: [
            'Do we have wear a swimming cap?',
            'Do we have to wear a swimming cap?',
            'Do we must wear a swimming cap?',
            'Must we to wear a swimming cap?'
          ],
          answer: 1,
          why: '<em>Have to</em> makes its question like an ordinary verb, with <em>do</em> at the front, and it keeps its <em>to</em>: <em>Do we have to wear …?</em> Option 1 is the near miss — the right shape, but the <em>to</em> is missing. Option 3 uses <em>do</em> with <em>must</em>, but <em>must</em> makes questions by itself (<em>Must we wear …?</em>). Option 4 does that correctly but then adds <em>to</em>, which never follows <em>must</em>.' },

        { id: 't9l1s3-2', type: 'spot', tag: 'u5-now-form', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: [
            'You needn\'t to bring',
            'any food to the party —',
            'my mum is making',
            'enough for everyone.'
          ],
          answer: 0,
          fix: 'You needn\'t bring',
          why: '<em>Needn\'t</em> is followed by the verb without <em>to</em>: <em>You needn\'t bring</em>. The form with <em>to</em> is <em>You don\'t need to bring</em>, which is also correct — the mistake is mixing the two. The other parts are fine: <em>any food</em> is right after a negative, and <em>is making enough for everyone</em> is a correct present continuous for an arrangement.' },

        { id: 't9l1s3-3', type: 'build', tag: 'u5-now-form', level: 'B1+',
          stem: 'You are going to a festival and want to know whether there is an entry fee for everyone. Put the words in order to make the question.',
          tiles: ['to', 'pay', 'everybody', 'get', 'have', 'does', 'in', 'to'],
          solution: 'does everybody have to pay to get in',
          alt: [],
          why: '<em>Have to</em> makes its question with <em>does</em>, like an ordinary verb: <em>Does everybody have to pay …?</em> <em>Everybody</em> takes a singular verb, so it is <em>does</em>, not <em>do</em>. The second <em>to</em> belongs to <em>to get in</em>, which gives the purpose. <s>Has everybody to pay?</s> is not possible in modern English, and there is no <em>has</em> tile for that reason.' },

        { id: 't9l1s3-4', type: 'choose', tag: 'u5-now-form', level: 'B1+',
          stem: 'In which sentence is <em>to</em> missing?',
          options: [
            'You must show your ID card at the door.',
            'We needn\'t hurry — the shop is open late.',
            'You\'d better check the price first.',
            'You ought check your change before you leave.'
          ],
          answer: 3,
          why: '<em>Ought</em> always keeps its <em>to</em>: <em>You ought to check your change</em>. The other three are correct without <em>to</em>, because <em>must</em>, <em>needn\'t</em> and <em>had better</em> are all followed by the bare verb. Option 2 is the one that tempts people, since <em>need to</em> has a <em>to</em> — but <em>needn\'t</em> never does.' },

        { id: 't9l1s3-5', type: 'cloze', tag: 'u5-now-form', level: 'B1+',
          passage: 'Our Junior Card is for young people aged seven to seventeen. Children under seven ___(1)___ have a card of their own.\n\nA parent has to sign the form, but you needn\'t put any money into the account on the first day.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['aren\'t allowed to', 'aren\'t allowed', 'don\'t allowed to', 'aren\'t be allowed to'],
          answer: 0,
          why: '<em>Be allowed to</em> needs both parts: the verb <em>be</em> (<em>aren\'t</em>) and <em>to</em> before the next verb. Option 2 is the near miss — right as far as it goes, but without <em>to</em> it cannot join onto <em>have</em>. Option 3 uses <em>do</em> instead of <em>be</em>, but <em>allowed</em> is not an ordinary verb here, so it needs <em>be</em>. Option 4 puts in <em>be</em> twice.' }
      ]
    }
  ],

  check: {
    id: 't9l1ck', name: 'Stage Check · Rules now',
    items: [
      { id: 't9l1ck-1', type: 'choose', tag: 'u5-now-neg', level: 'B1+',
        stem: 'Which sentence is most likely to be about a rule that somebody else has made?',
        options: [
          'I must call Grandma tonight.',
          'I must stop buying so many snacks.',
          'I have to wear a uniform at my new job.',
          'I must remember my sister\'s birthday.'
        ],
        answer: 2,
        why: 'A uniform at work is a rule made by the employer, and <em>have to</em> is the usual choice for an obligation that comes from other people. The three sentences with <em>must</em> are all things the speaker has decided for herself: to call Grandma, to spend less on snacks, to remember a birthday. Option 2 is the closest — it sounds strict, like a rule — but nobody has made it except the speaker.' },

      { id: 't9l1ck-2', type: 'equiv', tag: 'u5-now-neg', level: 'B1+',
        given: 'Visitors under 12 are not allowed to use the gym.',
        stem: 'Which sentence has the same meaning?',
        options: [
          'Visitors under 12 don\'t have to use the gym.',
          'Visitors under 12 can\'t use the gym.',
          'Visitors under 12 shouldn\'t use the gym.',
          'Visitors under 12 needn\'t use the gym.'
        ],
        answer: 1,
        why: '<em>Are not allowed to</em> is a rule, and <em>can\'t</em> is the everyday way to say that something is not permitted. Option 3, <em>shouldn\'t</em>, is the near miss: it points the same way, but it is only advice, so a child who used the gym would not be breaking a rule. Options 1 and 4 say there is no obligation to use the gym, which leaves children free to use it if they want.' },

      { id: 't9l1ck-3', type: 'gap', tag: 'u5-advice', level: 'B1+',
        blank: '(1)',
        lines: [
          { who: 'Pim', text: 'I lent Ploy 2,000 baht last month and she still hasn\'t paid me back.' },
          { who: 'Ann', text: 'Hmm. You ___(1)___ lend her any more money until she does.' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['had better not to', 'hadn\'t better', 'ought not', 'shouldn\'t'],
        answer: 3,
        why: 'Ann is giving advice, and <em>shouldn\'t</em> is followed by the bare verb: <em>You shouldn\'t lend her any more money</em>. Option 3 is the near miss: <em>ought not</em> gives the same advice, but it needs its <em>to</em> — <em>ought not to lend</em>. Option 1 adds a <em>to</em> that <em>had better</em> never takes, and option 2 puts the <em>not</em> in the wrong place; the correct form is <em>had better not lend</em>.' },

      { id: 't9l1ck-4', type: 'choose', tag: 'u5-advice', level: 'B1+',
        stem: 'Which sentence sounds most like a warning?',
        options: [
          'You\'d better hurry — the bank closes soon.',
          'You should try the new café near our school.',
          'You don\'t have to pay until next week.',
          'You ought to read more in English.'
        ],
        answer: 0,
        why: '<em>\'d better</em> is used when something bad will happen if you ignore the advice — here, the bank will be closed. Options 2 and 4 are the near misses: <em>should</em> and <em>ought to</em> give advice too, but it is friendly, general advice with no danger attached. Option 3 is not advice at all; it says there is no obligation to pay yet.' },

      { id: 't9l1ck-5', type: 'spot', tag: 'u5-now-form', level: 'B1+',
        stem: 'One of the four parts is wrong. Find it.',
        words: [
          'Excuse me,',
          'I\'m new here —',
          'is this the right queue,',
          'or have I to fill in a form first?'
        ],
        answer: 3,
        fix: 'or do I have to fill in a form first?',
        why: '<em>Have to</em> makes its question like an ordinary verb, with <em>do</em>: <em>Do I have to fill in a form?</em> Putting <em>have</em> at the front, as you would with <em>must</em> or <em>should</em>, is not correct in modern English. The other parts are fine: the polite opening, the explanation and the question <em>is this the right queue</em> are all correctly formed.' },

      { id: 't9l1ck-6', type: 'choose', tag: 'u5-now-form', level: 'B1+',
        stem: 'Complete the reminder from the school office: <em>You needn\'t bring any money for the trip, but you ______ bring your student card.</em>',
        options: ['need', 'needn\'t', 'need to', 'don\'t need to'],
        answer: 2,
        why: 'The positive partner of <em>needn\'t</em> is <em>need to</em>, with <em>to</em>: <em>you need to bring your student card</em>. Option 1 is the near miss — it looks like <em>needn\'t</em> without the <em>not</em>, but <em>need</em> without <em>to</em> is not used in positive sentences like this. Options 2 and 4 are both negative, and <em>but</em> tells you the second half is something you <em>do</em> have to bring.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 2 */
T9.levels.push({
  id: 't9l2', n: 2, name: 'Rules then', cefr: 'B2',
  blurb: 'Rules, duties and freedoms in the past: what you had to do, what you did not have to do, what you were not allowed to do, and what you should or needn\'t have done.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't9l2s1', name: 'Had to, needed to, didn\'t have to', cefr: 'B2',
      theory: {
        key: 'For a past obligation or necessity use <em>had to</em> or <em>needed to</em>; when there was no obligation, use <em>didn\'t have to</em> or <em>didn\'t need to</em>.',
        body: [
          '<em>Must</em> has no past form — there is no <s>musted</s>, and <em>must</em> cannot talk about yesterday. So when a rule or a necessity belongs to the past, English uses <em>had to</em>: <em>I had to show my passport when I opened the account.</em> In the past it no longer matters whether the rule came from other people or from yourself; <em>had to</em> does both jobs. <em>Needed to</em> works in the same way: <em>We needed to change some money at the airport.</em>',
          'When something was <strong>not necessary</strong>, use <em>didn\'t have to</em> or <em>didn\'t need to</em>: <em>We didn\'t have to pay for the museum — it was free.</em> Because <em>have to</em> behaves like an ordinary verb, its questions and negatives in the past use <em>did</em>: <em>Did you have to pay?</em> — <em>No, we didn\'t have to.</em> Never <s>hadn\'t to</s> and never <s>Had you to pay?</s>',
          'The past must be on the verb itself. A time word such as <em>yesterday</em> or <em>last week</em> cannot do the job on its own: <s>We have to go to the bank yesterday</s> and <s>I must go to the bank yesterday</s> are both wrong. The correct sentence is <em>We had to go to the bank yesterday.</em>',
          'Finally, <em>had to</em> tells you that the thing really happened: <em>I had to wait an hour</em> means I waited. Do not confuse it with <em>must have</em> + past participle, which is a guess about the past (<em>She must have forgotten</em> = I\'m almost sure she forgot). That is a different job, and you will meet it in Level 3.'
        ],
        simple: [
          'Past obligation: <em>had to</em> or <em>needed to</em>. <em>I had to pay in cash.</em> There is no past of <em>must</em>.',
          'No obligation in the past: <em>didn\'t have to</em> or <em>didn\'t need to</em>. Questions use <em>did</em>: <em>Did you have to pay?</em>',
          'Put the past on the verb: <em>We had to go yesterday</em>, not <s>We have to go yesterday</s>.'
        ],
        examples: [
          { s: 'The card machine was broken, so we <b>had to</b> pay in cash.', g: 'a past necessity, and it really happened: we paid in cash.' },
          { s: 'We <b>didn\'t have to</b> pay for the museum — entry was free for students.', g: 'no obligation in the past; the negative uses did.' },
          { s: '<b>Did</b> you <b>have to</b> show your ID at the bank?', g: 'past questions with have to use did, not had.' },
          { s: '<s>We hadn\'t to wait long.</s> We <b>didn\'t have to</b> wait long.', g: 'hadn\'t to is not English; use didn\'t have to.' }
        ]
      },
      items: [
        { id: 't9l2s1-1', type: 'choose', tag: 'u5-past-oblig', level: 'B1+',
          stem: 'My bank card didn\'t work at the supermarket last night, so I ______ pay in cash.',
          options: ['had to', 'have to', 'must', 'didn\'t have to'],
          answer: 0,
          why: 'The problem happened <em>last night</em>, and paying in cash was necessary, so the sentence needs the past of obligation: <em>had to</em>. <em>Have to</em> is the near miss — the right verb, but present, and the time word cannot make it past on its own. <em>Must</em> has no past form, so it cannot talk about last night. <em>Didn\'t have to</em> says paying in cash was not necessary, which makes no sense when the card did not work.' },

        { id: 't9l2s1-2', type: 'spot', tag: 'u5-past-oblig', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Last Saturday the cash machine was broken,', 'so we have to walk', 'all the way to the bank in town', 'to get money for the concert tickets.'],
          answer: 1,
          fix: 'so we had to walk',
          why: 'The story is about <em>last Saturday</em>, so the obligation must be in the past: <em>we had to walk</em>. <em>Have to</em> is present, and the time phrase at the start cannot turn it into a past verb. The other parts are correct: the first is a normal past simple, and the last two only say where we went and why.' },

        { id: 't9l2s1-3', type: 'gap', tag: 'u5-past-oblig', level: 'B1+',
          blank: '(1)',
          lines: [
            { who: 'Ploy', text: 'I love your new phone! ___(1)___ show your ID when you bought it?' },
            { who: 'Nina', text: 'Yes, and they made a copy of it too, because I paid in monthly instalments.' }
          ],
          stem: 'Choose the best option for gap (1).',
          options: ['Had you to', 'Did you have to', 'Have you had to', 'Do you have to'],
          answer: 1,
          why: 'Nina bought the phone in the past, and <em>have to</em> makes its past questions with <em>did</em>: <em>Did you have to show your ID?</em> <em>Do you have to</em> is the near miss — the right question form, but present, and <em>when you bought it</em> puts the question in the past. <em>Had you to</em> treats <em>have to</em> like <em>can</em> or <em>must</em>, which it is not. <em>Have you had to</em> is present perfect, which cannot go with a finished time like <em>when you bought it</em>.' },

        { id: 't9l2s1-4', type: 'sort', tag: 'u5-past-oblig', level: 'B2',
          stem: 'A student wrote these sentences about a school trip to a museum. Which are correct English, and which are not?',
          bins: [
            { key: 'ok', label: 'Correct', hint: 'the past is shown by the verb, and questions and negatives use did' },
            { key: 'wrong', label: 'Not correct', hint: 'the past is missing from the verb, or the question or negative is built the wrong way' }
          ],
          items: [
            { text: 'We had to leave our bags in a locker at the entrance.', bin: 'ok' },
            { text: 'We hadn\'t to pay for the lockers.', bin: 'wrong' },
            { text: 'Did you have to pay for the lockers at your museum?', bin: 'ok' },
            { text: 'I must show my student card at the ticket desk yesterday.', bin: 'wrong' },
            { text: 'We didn\'t need to buy a guidebook, because the teacher had one.', bin: 'ok' },
            { text: 'Had you to wait long to get in?', bin: 'wrong' }
          ],
          why: '<em>Had to</em>, <em>Did you have to</em> and <em>didn\'t need to</em> are the correct past forms: <em>have to</em> and <em>need to</em> work like ordinary verbs, so their questions and negatives use <em>did</em>. <s>hadn\'t to</s> and <s>Had you to</s> treat <em>have to</em> as if it were <em>can</em> or <em>must</em>; the correct forms are <em>didn\'t have to</em> and <em>Did you have to</em>. <s>I must show … yesterday</s> tries to take the past from the time word; <em>must</em> has no past, so it should be <em>I had to show</em>.' },

        { id: 't9l2s1-5', type: 'cloze', tag: 'u5-past-oblig', level: 'B2',
          passage: 'When I arrived in Bristol for my exchange year, the first thing I did was open a bank account. The bank ___(1)___ see my passport and a letter from my school, so I took both with me.\n\nLuckily, I ___(2)___ pay anything when I opened the account, because accounts for students are free. The only bad part was the queue: I waited nearly an hour before someone could see me.',
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['hadn\'t to', 'mustn\'t', 'didn\'t have to', 'don\'t have to'],
          answer: 2,
          why: 'Paying was not necessary, and it was <em>when I opened the account</em> — in the past — so the sentence needs <em>didn\'t have to</em>. <em>Don\'t have to</em> is the near miss: it means "not necessary", but it is present, and the opening of the account is finished. <em>Hadn\'t to</em> is not English, because the negative of <em>had to</em> is made with <em>did</em>. <em>Mustn\'t</em> means that something is forbidden, and nobody forbids you to pay a bank.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't9l2s2', name: 'Wasn\'t allowed to and couldn\'t: rules in the past', cefr: 'B2',
      theory: {
        key: 'To say that something was forbidden in the past, use <em>wasn\'t / weren\'t allowed to</em> or <em>couldn\'t</em>; <em>mustn\'t</em> has no past form.',
        body: [
          'When something was forbidden in the past, say <em>wasn\'t allowed to</em> or <em>weren\'t allowed to</em>: <em>I wasn\'t allowed to go to school alone when I was small.</em> The positive is <em>was allowed to</em> — <em>I was allowed to open an account when I was sixteen</em>. Remember the <em>was</em>: <s>I allowed to open an account</s> is wrong, because it says that <strong>I</strong> gave the permission.',
          '<em>Couldn\'t</em> can do the same job: <em>I couldn\'t go out alone when I was younger.</em> But <em>couldn\'t</em> has two meanings. It can mean something was <strong>not allowed</strong> (<em>We couldn\'t use our phones in class</em>) or that it was <strong>not possible</strong> (<em>He couldn\'t pay with cash, because they only accepted cards</em>). The situation tells you which one the speaker means.',
          '<em>Mustn\'t</em> is only for rules now or in the future: <em>You mustn\'t use your phone in the exam.</em> It has no past form, so for last year\'s rules you need <em>weren\'t allowed to</em> or <em>couldn\'t</em>: <em>We weren\'t allowed to use our phones in last year\'s exam.</em>',
          'Be careful not to mix up <em>wasn\'t allowed to</em> with <em>didn\'t have to</em>. <em>I wasn\'t allowed to wear trainers</em> means it was forbidden. <em>I didn\'t have to wear a tie</em> means it was not necessary — I could choose.'
        ],
        simple: [
          'Past rule against something: <em>wasn\'t / weren\'t allowed to</em> or <em>couldn\'t</em>. <em>We weren\'t allowed to use calculators.</em>',
          'Past permission: <em>was allowed to</em>. Don\'t forget <em>was</em>: <s>I allowed to go</s> is wrong.',
          '<em>Mustn\'t</em> has no past. And <em>didn\'t have to</em> is different: it means "not necessary", not "forbidden".'
        ],
        examples: [
          { s: 'I <b>wasn\'t allowed to</b> go to the shops alone when I was seven.', g: 'a rule against something in the past.' },
          { s: 'We <b>were allowed to</b> use our phones at lunchtime.', g: 'past permission; was or were is needed before allowed.' },
          { s: 'He <b>couldn\'t</b> pay with cash, because the shop only accepted cards.', g: 'couldn\'t can mean not possible as well as not allowed.' },
          { s: '<s>We mustn\'t leave school at lunchtime last year.</s> We <b>couldn\'t</b> leave.', g: 'mustn\'t has no past form.' }
        ]
      },
      items: [
        { id: 't9l2s2-1', type: 'choose', tag: 'u5-past-prohib', level: 'B1+',
          stem: 'When I was small, I ______ go to the shops on my own, even though I really wanted to. My parents said I was too young.',
          options: ['mustn\'t', 'needn\'t', 'didn\'t have to', 'couldn\'t'],
          answer: 3,
          why: 'Her parents said no, so going alone was forbidden, and it was when she was small — in the past. <em>Couldn\'t</em> does exactly that job. <em>Didn\'t have to</em> is the near miss: it is past and negative, but it means "it wasn\'t necessary", which cannot be right when she <em>really wanted to</em> go and was told she was too young. <em>Mustn\'t</em> has no past form. <em>Needn\'t</em> is present and means "not necessary", not "forbidden".' },

        { id: 't9l2s2-2', type: 'equiv', tag: 'u5-past-prohib', level: 'B2',
          given: 'On our school trip to the palace, we weren\'t allowed to take photos inside — there were signs everywhere.',
          stem: 'Which sentence means the same?',
          options: [
            'We couldn\'t take photos inside the palace.',
            'We didn\'t have to take photos inside the palace.',
            'We mustn\'t take photos inside the palace.',
            'We shouldn\'t have taken photos inside the palace.'
          ],
          answer: 0,
          why: 'Taking photos was forbidden on that trip, and <em>couldn\'t</em> can report a past rule like this one — the signs make it clear that it means "not allowed". <em>Mustn\'t take</em> is the near miss — it does mean "forbidden", but it is a rule for now, and the trip is over; <em>mustn\'t</em> has no past form. <em>Didn\'t have to</em> only says photos were not necessary. <em>Shouldn\'t have taken</em> criticises something that happened, so it means we did take photos.' },

        { id: 't9l2s2-3', type: 'judge', tag: 'u5-past-prohib', level: 'B2',
          given: 'I couldn\'t go to Mai\'s birthday party on Saturday.',
          stem: 'The speaker\'s parents didn\'t let her go to the party.',
          answer: 2,
          why: 'Can\'t tell. <em>Couldn\'t</em> can mean "wasn\'t allowed to", but it can just as well mean "wasn\'t possible" — perhaps she was ill, had a family dinner, or had no way to get there. The sentence gives no reason, so we cannot say that her parents stopped her (True), and we cannot say that they didn\'t (False). Compare <em>I couldn\'t go because my parents said no</em>, where the reason makes it a rule.' },

        { id: 't9l2s2-4', type: 'gap', tag: 'u5-past-prohib', level: 'B1+',
          blank: '(1)',
          lines: [
            { who: 'Fern', text: 'At your old school, could you use the computers in the library at lunchtime?' },
            { who: 'Anna', text: 'Yes, we ___(1)___ use them, but only for homework. No games!' }
          ],
          stem: 'Choose the best option for gap (1).',
          options: ['allowed to', 'had to', 'were allowed to', 'weren\'t allowed to'],
          answer: 2,
          why: 'Anna says <em>Yes</em> — there was permission in the past — so the answer is <em>were allowed to</em>. <em>Weren\'t allowed to</em> is the near miss: the right form, but it says the opposite of <em>Yes</em>. <em>Allowed to</em> on its own is missing <em>were</em>, so it would mean that the students gave the permission. <em>Had to</em> is past, but it says using the computers was compulsory, which is not what Fern asked about.' },

        { id: 't9l2s2-5', type: 'build', tag: 'u5-past-prohib', level: 'B1+',
          stem: 'Your friend asks how you did the maths test yesterday without a calculator. Put the words in order to explain the rule.',
          tiles: ['we', 'weren\'t', 'allowed', 'to', 'use', 'calculators', 'in', 'the', 'test'],
          solution: 'we weren\'t allowed to use calculators in the test',
          alt: ['in the test we weren\'t allowed to use calculators'],
          why: 'The test was yesterday and calculators were forbidden, so the sentence needs the past rule: <em>weren\'t allowed to</em> + base verb. <em>Weren\'t</em> must come before <em>allowed</em>, and <em>to</em> comes straight after it. <s>We mustn\'t use calculators</s> would be a rule for now, and <em>mustn\'t</em> has no past.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't9l2s3', name: 'Needn\'t have, didn\'t need to, should have: looking back', cefr: 'B2',
      theory: {
        key: '<em>Needn\'t have done</em> means you did something that wasn\'t necessary; <em>didn\'t need to</em> only says it wasn\'t necessary; <em>should have / ought to have done</em> and <em>shouldn\'t have done</em> say that a past action was a mistake.',
        body: [
          '<em>Needn\'t have</em> + past participle means that you <strong>did</strong> something, but it wasn\'t necessary: <em>You needn\'t have bought me a present. But thank you!</em> The present was bought. The speaker is saying it was not needed.',
          '<em>Didn\'t need to</em> + base verb simply says that something wasn\'t necessary. It does not tell you whether it happened: <em>We didn\'t need to give the waiter a tip</em> could continue <em>…so we didn\'t</em> or <em>…but we did anyway</em>. So when the action did <strong>not</strong> happen, use <em>didn\'t need to</em>, never <em>needn\'t have</em>.',
          'To criticise a past action, or to say it was a mistake, use <em>should have</em> or <em>ought to have</em> + past participle: <em>I should have been more careful with my money, but I spent it all.</em> The negative <em>shouldn\'t have</em> + past participle says that somebody did something they regret: <em>We shouldn\'t have stayed up so late.</em>',
          'Watch the form. After these modals always comes <em>have</em> + past participle: <s>We ought have gone</s> → <em>We ought to have gone</em> (<em>ought</em> keeps its <em>to</em>); <s>Anne shouldn\'t had</s> → <em>Anne shouldn\'t have had</em>.'
        ],
        simple: [
          '<em>Needn\'t have done</em> = you did it, but it wasn\'t necessary. <em>You needn\'t have waited for me.</em>',
          '<em>Didn\'t need to do</em> = it wasn\'t necessary. Maybe you did it, maybe you didn\'t.',
          '<em>Should have done</em> / <em>ought to have done</em> = it was a good idea, but you didn\'t do it. <em>Shouldn\'t have done</em> = you did it, and it was a mistake.'
        ],
        examples: [
          { s: 'You <b>needn\'t have bought</b> me a present. But thank you!', g: 'the present was bought, but it wasn\'t necessary.' },
          { s: 'We <b>didn\'t need to</b> book a table — the restaurant was almost empty.', g: 'not necessary; the sentence doesn\'t say whether we booked.' },
          { s: 'I <b>should have been</b> more careful with my money, but I spent it all.', g: 'a past mistake: I wasn\'t careful.' },
          { s: '<s>We ought have left earlier.</s> We <b>ought to have left</b> earlier.', g: 'ought keeps to: ought to have + past participle.' }
        ]
      },
      items: [
        { id: 't9l2s3-1', type: 'choose', tag: 'u5-past-look', level: 'B2',
          stem: 'I took a taxi to the station because I thought I was late, but then I found out that my train was delayed by an hour. I ______ a taxi — the bus would have been fine.',
          options: ['needn\'t take', 'needn\'t have taken', 'mustn\'t have taken', 'should have taken'],
          answer: 1,
          why: 'The speaker <strong>did</strong> take the taxi, and it turned out to be unnecessary, which is exactly what <em>needn\'t have taken</em> says. <em>Needn\'t take</em> is the near miss — the right idea of "not necessary", but it is about now or the future, not about a finished journey. <em>Should have taken</em> says taking a taxi would have been a good idea, which the delayed train shows is untrue. <em>Mustn\'t have taken</em> is not a correct way to talk about a past action.' },

        { id: 't9l2s3-2', type: 'spot', tag: 'u5-past-look', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Before the exam Mia was so nervous', 'that her hands were shaking.', 'Looking back, she thinks', 'she shouldn\'t had so much coffee.'],
          answer: 3,
          fix: 'she shouldn\'t have had so much coffee.',
          why: 'To say a past action was a mistake, <em>shouldn\'t</em> is followed by <em>have</em> + past participle: <em>shouldn\'t have had</em>. <s>Shouldn\'t had</s> puts a past form straight after the modal, which is never possible. The other parts are correct: two ordinary past sentences and <em>she thinks</em>, which is present because she is thinking about it now.' },

        { id: 't9l2s3-3', type: 'equiv', tag: 'u5-past-look', level: 'B2',
          given: 'It wasn\'t necessary to change any money at the airport, so we didn\'t — we just used our cards.',
          stem: 'Which sentence matches this situation?',
          options: [
            'We needn\'t have changed money at the airport.',
            'We couldn\'t change money at the airport.',
            'We shouldn\'t have changed money at the airport.',
            'We didn\'t need to change money at the airport.'
          ],
          answer: 3,
          why: 'Changing money was not necessary, and they did not do it. <em>Didn\'t need to change</em> says it was not necessary without claiming that it happened, so it fits. <em>Needn\'t have changed</em> is the near miss: it also means "not necessary", but it tells you they <strong>did</strong> change money, which the situation denies. <em>Shouldn\'t have changed</em> also says they did it, and adds that it was a mistake. <em>Couldn\'t change</em> means it was not possible or not allowed, but the situation says it was simply not needed.' },

        { id: 't9l2s3-4', type: 'judge', tag: 'u5-past-look', level: 'B1+',
          given: 'You needn\'t have paid for my cinema ticket — I had my own money!',
          stem: 'The speaker\'s friend paid for the ticket.',
          answer: 0,
          why: 'True. <em>Needn\'t have paid</em> means the paying happened, but it was not necessary. If the friend had not paid, the speaker would say <em>You didn\'t need to pay</em> or simply thank her for offering. False would mean the ticket was never paid for, and "Can\'t tell" misses the fact that <em>needn\'t have</em> + past participle always tells you the action took place.' },

        { id: 't9l2s3-5', type: 'cloze', tag: 'u5-past-look', level: 'B2',
          passage: 'Last month I got my first wages from my weekend job at a café, and I spent almost everything in two days on clothes and snacks. Then my phone screen cracked, and I had nothing left to repair it.\n\nLooking back, I ___(1)___ more careful with my money. I didn\'t need that second pair of trainers — I already had three pairs at home! Next time I\'m going to save at least half.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['ought to have been', 'ought have been', 'must have been', 'had to be'],
          answer: 0,
          why: 'The writer is looking back at a mistake — she was <strong>not</strong> careful — so she needs the form for criticising a past action: <em>ought to have been</em>. <em>Must have been</em> is the near miss: the right shape, but it is a guess that something was true, and she knows she was not careful. <em>Ought have been</em> drops the <em>to</em>, which <em>ought</em> always keeps. <em>Had to be</em> says being careful was compulsory, not that it was a mistake not to be.' }
      ]
    }
  ],

  check: {
    id: 't9l2ck', name: 'Stage Check · Rules then',
    items: [
      { id: 't9l2ck-1', type: 'choose', tag: 'u5-past-oblig', level: 'B1+',
        stem: 'Sorry I didn\'t answer your call yesterday. I ______ my dad in his shop all afternoon.',
        options: ['must help', 'must have helped', 'had to help', 'have to help'],
        answer: 2,
        why: 'The call was <em>yesterday</em>, so the speaker needs the past of obligation: <em>had to help</em>. <em>Must have helped</em> is the near miss — it looks past, but it is a guess about the past, and the speaker knows exactly where she was yesterday afternoon, so there is nothing to guess. <em>Have to help</em> is present, so it cannot explain yesterday. <em>Must help</em> has no past form.' },

      { id: 't9l2ck-2', type: 'equiv', tag: 'u5-past-oblig', level: 'B2',
        given: 'It was necessary for us to show our passports twice at the airport.',
        stem: 'Which sentence says the same thing?',
        options: [
          'We should have shown our passports twice at the airport.',
          'We had to show our passports twice at the airport.',
          'We didn\'t need to show our passports twice at the airport.',
          'We must have shown our passports twice at the airport.'
        ],
        answer: 1,
        why: '<em>It was necessary</em> is a past obligation, and <em>had to show</em> says the same: the showing was required, and it happened. <em>Must have shown</em> is the near miss — it is about the past too, but it is a guess ("I\'m almost sure we showed them"), not a rule. <em>Didn\'t need to show</em> says the opposite: it was not necessary. <em>Should have shown</em> says showing them would have been right, which suggests we didn\'t.' },

      { id: 't9l2ck-3', type: 'gap', tag: 'u5-past-prohib', level: 'B1+',
        blank: '(1)',
        lines: [
          { who: 'Dao', text: 'Why didn\'t you take any pictures on the school trip?' },
          { who: 'Kate', text: 'We ___(1)___ take our phones. The teachers checked our bags on the bus!' }
        ],
        stem: 'Choose the best option for gap (1).',
        options: ['didn\'t have to', 'mustn\'t', 'hadn\'t to', 'weren\'t allowed to'],
        answer: 3,
        why: 'The teachers checked the bags, so taking phones was forbidden, and the trip is over: <em>weren\'t allowed to</em>. <em>Didn\'t have to</em> is the near miss — past and negative, but it means "not necessary", and a bag check shows a rule, not a free choice. <em>Mustn\'t</em> has no past form. <em>Hadn\'t to</em> is not English.' },

      { id: 't9l2ck-4', type: 'choose', tag: 'u5-past-prohib', level: 'B2',
        stem: 'When the new pool opened last summer, children under ten ______ swim without an adult, so my little brother always went with Dad.',
        options: ['couldn\'t', 'can\'t', 'didn\'t need to', 'mustn\'t'],
        answer: 0,
        why: 'This is a rule from last summer, and it stopped children swimming alone, so <em>couldn\'t</em> is right: here it means "weren\'t allowed to". <em>Can\'t</em> is the near miss — it is the right idea of a rule, but it is present, and the story is past. <em>Mustn\'t</em> has no past form either. <em>Didn\'t need to</em> means an adult was not necessary, which does not explain why the brother always went with Dad.' },

      { id: 't9l2ck-5', type: 'choose', tag: 'u5-past-look', level: 'B2',
        stem: 'The concert tickets were cheaper than I expected, so I ______ money from my sister. I paid for them myself.',
        options: ['needn\'t have borrowed', 'mustn\'t borrow', 'didn\'t need to borrow', 'shouldn\'t have borrowed'],
        answer: 2,
        why: 'Borrowing was not necessary, and the speaker did not borrow — she paid herself. <em>Didn\'t need to borrow</em> fits, because it says "not necessary" without saying it happened. <em>Needn\'t have borrowed</em> is the near miss: it means she <strong>did</strong> borrow the money, which <em>I paid for them myself</em> rules out. <em>Shouldn\'t have borrowed</em> also says she borrowed, and calls it a mistake. <em>Mustn\'t borrow</em> is a present rule against borrowing.' },

      { id: 't9l2ck-6', type: 'spot', tag: 'u5-past-look', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['The film was sold out when we arrived,', 'so we went home disappointed.', 'We ought have booked', 'our tickets online the day before.'],
        answer: 2,
        fix: 'We ought to have booked',
        why: '<em>Ought</em> always keeps its <em>to</em>, so the criticism of a past action is <em>ought to have</em> + past participle: <em>We ought to have booked</em>. The other parts are correct: two ordinary past sentences, and a time phrase that tells you when the booking should have happened.' }
    ]
  }
});

/* ---------------------------------------------------------------- LEVEL 3 */
/* ---------------------------------------------------------------- LEVEL 3 */
T9.levels.push({
  id: 't9l3', n: 3, name: 'Guesses', cefr: 'B2',
  blurb: 'How sure are you? Must, might and can\'t for guesses about now, must have, might have and can\'t have for guesses about the past, and the forms the book tests.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't9l3s1', name: 'Must, might, can\'t: guessing about now', cefr: 'B1+',
      theory: {
        key: 'To guess about now, choose the verb by how sure you are: <em>must</em> = about 90% sure it is true, <em>may</em>, <em>might</em> or <em>could</em> = about a 50% possibility, and <em>can\'t</em> = about 90% sure it is <strong>not</strong> true.',
        body: [
          'Often we don\'t know something for certain, but we can make a good guess from what we see or hear. <em>She lives in an enormous house. She <strong>must</strong> be rich.</em> The house is our evidence, and <em>must</em> says we are about 90% sure. It is not a rule here: nobody is telling her to be rich.',
          'When the evidence could point either way, use <em>may</em>, <em>might</em> or <em>could</em>: <em>Take an umbrella. It <strong>might</strong> rain later.</em> That is about a 50% possibility. The 50% negatives are <em>may not</em> and <em>might not</em> (<em>mightn\'t</em>): <em>The shop <strong>might not</strong> be open yet.</em> Be careful: <em>couldn\'t</em> is <strong>not</strong> a 50% negative. <em>It couldn\'t be true</em> means almost the same as <em>It can\'t be true</em>.',
          'When you are about 90% sure something is <strong>not</strong> true, use <em>can\'t</em>: <em>She\'s only fourteen. She <strong>can\'t</strong> have a driving licence.</em> The opposite of <em>must</em> in a guess is <em>can\'t</em>, not <em>mustn\'t</em>. <em>Mustn\'t</em> is for rules (<em>You mustn\'t use your phone in the exam</em>), so <s>She mustn\'t have a driving licence</s> sounds as if somebody has banned her from having one.',
          'All these verbs are followed by the infinitive without <em>to</em>. If you are guessing about something that is going on right now, use <em>be</em> + <em>-ing</em>: <em>She\'s got a Spanish textbook. She <strong>must be learning</strong> Spanish.</em>'
        ],
        simple: [
          '<em>must</em> = I\'m about 90% sure it\'s true. <em>may</em> / <em>might</em> / <em>could</em> = maybe (about 50%). <em>can\'t</em> = I\'m about 90% sure it\'s not true.',
          'The opposite of <em>must</em> here is <em>can\'t</em>, not <em>mustn\'t</em>. For "maybe not", say <em>may not</em> or <em>might not</em>, not <em>couldn\'t</em>.',
          'For something happening now, use <em>be</em> + <em>-ing</em>: <em>He must be sleeping.</em>'
        ],
        examples: [
          { s: 'She lives in an enormous house. She <b>must be</b> rich.', g: 'about 90% sure it is true.' },
          { s: 'The shop <b>might not be</b> open yet. Let\'s ring first.', g: 'a 50% "maybe not". Couldn\'t would be much stronger.' },
          { s: 'You\'ve only just had lunch. You <b>can\'t be</b> hungry again!', g: 'about 90% sure it is not true. The opposite of must here is can\'t, never mustn\'t.' },
          { s: 'She\'s got a Spanish textbook. She <b>must be learning</b> Spanish.', g: 'a guess about something going on now: be + -ing.' }
        ]
      },
      items: [
        { id: 't9l3s1-1', type: 'choose', tag: 'u5-guess-now', level: 'B1+',
          stem: 'Tom is only fifteen, so that ______ his car parked outside. It must be his dad\'s.',
          options: ['can\'t be', 'mustn\'t be', 'might not be', 'must be'],
          answer: 0,
          why: 'At fifteen Tom is too young to drive, and the next sentence shows the speaker is sure it is somebody else\'s car, so we need "about 90% sure it is <strong>not</strong> true": <em>can\'t be</em>. <em>Mustn\'t be</em> is the near miss. It looks like the opposite of <em>must</em>, but <em>mustn\'t</em> is for rules (<em>You mustn\'t park here</em>), not guesses. <em>Might not be</em> is only a 50% "maybe not", too weak for a speaker who then says <em>It must be his dad\'s</em>. <em>Must be</em> says the opposite of what the evidence shows.' },

        { id: 't9l3s1-2', type: 'equiv', tag: 'u5-guess-now', level: 'B1+',
          given: 'It\'s possible that Dan isn\'t at home right now.',
          stem: 'Which sentence means the same?',
          options: [
            'Dan can\'t be at home right now.',
            'Dan might not be at home right now.',
            'Dan couldn\'t be at home right now.',
            'Dan mustn\'t be at home right now.'
          ],
          answer: 1,
          why: '<em>It\'s possible that … isn\'t</em> is a 50% "maybe not", and the 50% negatives are <em>may not</em> and <em>might not</em>: option 2. Option 3, <em>couldn\'t be</em>, is the near miss. It looks like a softer <em>can\'t</em>, but in a guess <em>couldn\'t</em> means almost the same as <em>can\'t</em>: about 90% sure it is not true. Option 1, <em>can\'t be</em>, is just as strong. Option 4, <em>mustn\'t be</em>, sounds as if Dan is not allowed to be at home.' },

        { id: 't9l3s1-3', type: 'sort', tag: 'u5-guess-now', level: 'B1+',
          stem: 'How sure is the speaker? Put each sentence in the right box.',
          bins: [
            { key: 'sure', label: 'About 90% sure', hint: 'the evidence points clearly one way, towards yes or towards no' },
            { key: 'maybe', label: 'About 50%: maybe', hint: 'the speaker thinks it is possible but has no real evidence either way' }
          ],
          items: [
            { text: 'Look at her face. She <em>must be</em> really tired after that flight.', bin: 'sure' },
            { text: 'That <em>can\'t be</em> Ana\'s bag. Hers is red.', bin: 'sure' },
            { text: 'He <em>couldn\'t be</em> the new teacher. He looks about sixteen!', bin: 'sure' },
            { text: 'The bank <em>may not be</em> open yet. Let\'s check online first.', bin: 'maybe' },
            { text: 'Ask Kim about the homework. She <em>could</em> know the answer.', bin: 'maybe' },
            { text: 'Take a jacket. It <em>might</em> get cold later.', bin: 'maybe' }
          ],
          why: '<em>Must</em>, <em>can\'t</em> and <em>couldn\'t</em> all show the speaker is about 90% sure: <em>must</em> that something is true, <em>can\'t</em> and <em>couldn\'t</em> that it is not. <em>May</em>, <em>might</em>, <em>could</em> and the negatives <em>may not</em> and <em>might not</em> are for a 50% possibility. The card that catches people is <em>couldn\'t be</em>: it looks weak, like <em>could</em>, but in a guess it is a strong "no", just like <em>can\'t</em>.' },

        { id: 't9l3s1-4', type: 'gap', tag: 'u5-guess-now', level: 'B1+',
          blank: '(1)',
          lines: [
            { who: 'Mum', text: 'Where\'s Ploy? I haven\'t seen her all evening.' },
            { who: 'Dad', text: 'She\'s in her room. I can hear her typing, so she ___(1)___ on her history project right now.' }
          ],
          stem: 'Choose the best option for gap (1).',
          options: ['must work', 'can\'t be working', 'must be working', 'mustn\'t be working'],
          answer: 2,
          why: 'The typing is Dad\'s evidence, and the activity is going on at this moment, so he needs a 90% guess with <em>be</em> + <em>-ing</em>: <em>must be working</em>. <em>Must work</em> is the near miss. It has the right verb, but the simple form does not fit something happening right now, and with <em>right now</em> it sounds like an order. <em>Can\'t be working</em> says the opposite of what the typing shows. <em>Mustn\'t be working</em> sounds as if Ploy is forbidden to work.' },

        { id: 't9l3s1-5', type: 'judge', tag: 'u5-guess-now', level: 'B1+',
          given: 'Ella: "Someone\'s at the door. It might be the delivery driver with my new trainers."',
          stem: 'Ella is sure that it is the delivery driver.',
          answer: 1,
          why: 'False. <em>Might be</em> shows only a 50% possibility: Ella hopes it is the delivery driver, but it could be someone else. If she were about 90% sure, she would say <em>It must be the delivery driver</em>. "Can\'t tell" is not right either, because the word <em>might</em> itself tells us how sure she is.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't9l3s2', name: 'Must have, might have, can\'t have: guessing about the past', cefr: 'B2',
      theory: {
        key: 'To guess about the past, keep the same verbs and add <em>have</em> + past participle: <em>must have done</em> (about 90% sure it happened), <em>may</em> / <em>might</em> / <em>could have done</em> (about 50%), <em>can\'t</em> / <em>couldn\'t have done</em> (about 90% sure it did not happen).',
        body: [
          'Here the evidence is in front of us now, but the thing we are guessing about happened earlier. <em>He hasn\'t got any money left. He <strong>must have spent</strong> it all.</em> We can see the empty wallet now; the spending happened before. <em>Must have</em> + past participle says we are about 90% sure it happened.',
          'When something possibly happened, use <em>may have</em>, <em>might have</em> or <em>could have</em> + past participle: <em>I can\'t find my keys. I <strong>might have left</strong> them at school.</em> For a 50% "maybe not", use <em>may not have</em> or <em>might not have</em> (<em>mightn\'t have</em>): <em>She <strong>may not have seen</strong> your message yet.</em>',
          'When you are about 90% sure something did <strong>not</strong> happen, use <em>can\'t have</em> or <em>couldn\'t have</em>. Here they mean the same: <em>He didn\'t do very well in the test. He <strong>can\'t have studied</strong> much.</em> Don\'t use <em>mustn\'t have</em> for this: the opposite of <em>must have</em> is <em>can\'t have</em>. And remember that <em>couldn\'t have</em> is a strong "no", not a 50% "maybe not".',
          'For something that was going on for a while in the past, use <em>have been</em> + <em>-ing</em>: <em>Nobody knows where his money came from. He <strong>might have been working</strong> for the government.</em> Always look at the evidence first. Strong evidence for: <em>must have</em>. Strong evidence against: <em>can\'t have</em>. Not enough evidence either way: <em>may</em>, <em>might</em> or <em>could have</em>.'
        ],
        simple: [
          'A past guess = <em>must</em>, <em>might</em>, <em>can\'t</em> (and so on) + <em>have</em> + past participle.',
          '<em>must have done</em> = I\'m about 90% sure it happened. <em>may</em> / <em>might</em> / <em>could have done</em> = maybe it happened. <em>may not</em> / <em>might not have done</em> = maybe it didn\'t.',
          '<em>can\'t have done</em> or <em>couldn\'t have done</em> = I\'m about 90% sure it didn\'t happen. Never <s>mustn\'t have done</s>.'
        ],
        examples: [
          { s: 'He hasn\'t got any money left. He <b>must have spent</b> it all.', g: 'about 90% sure it happened.' },
          { s: 'I can\'t find my keys. I <b>might have left</b> them at school.', g: 'a 50% possibility about the past.' },
          { s: 'She <b>may not have seen</b> your message yet.', g: 'maybe she did not see it: a 50% "not".' },
          { s: 'He didn\'t do very well in the test. He <b>can\'t have studied</b> much.', g: 'about 90% sure it did not happen. Couldn\'t have means the same.' }
        ]
      },
      items: [
        { id: 't9l3s2-1', type: 'choose', tag: 'u5-guess-past', level: 'B2',
          stem: 'Ben\'s trainers are covered in mud, and there\'s a muddy trail all the way across the kitchen floor. He ______ home through the park.',
          options: ['must be walking', 'can\'t have walked', 'mustn\'t have walked', 'must have walked'],
          answer: 3,
          why: 'The mud is the evidence we can see now, and the walk happened earlier, so the guess needs <em>have</em> + past participle: <em>must have walked</em>, about 90% sure. <em>Must be walking</em> is the near miss: the right strength, but it is about now, and Ben is already home. <em>Can\'t have walked</em> has the right form but says the opposite of what the mud shows. <em>Mustn\'t have walked</em> is not how English makes a guess (the opposite of <em>must have</em> is <em>can\'t have</em>), and it points the wrong way too.' },

        { id: 't9l3s2-2', type: 'equiv', tag: 'u5-guess-past', level: 'B2',
          given: 'I\'m almost certain that Sam didn\'t read my message.',
          stem: 'Which sentence means the same?',
          options: [
            'Sam couldn\'t have read my message.',
            'Sam might not have read my message.',
            'Sam must have read my message.',
            'Sam didn\'t have to read my message.'
          ],
          answer: 0,
          why: '<em>Almost certain … didn\'t</em> means about 90% sure it did not happen, which is <em>can\'t have</em> or <em>couldn\'t have</em>: option 1. Option 2, <em>might not have read</em>, is the near miss. It is about not reading, but it is only a 50% "maybe not", far weaker than <em>almost certain</em>. Option 3 is 90% sure in the wrong direction. Option 4 says Sam was not required to read it, which is about rules, not guesses.' },

        { id: 't9l3s2-3', type: 'judge', tag: 'u5-guess-past', level: 'B2',
          given: 'Jack: "You can\'t have gone to the right café. The one I mean is closed on Mondays."',
          stem: 'Jack thinks his friend went to a different café.',
          answer: 0,
          why: 'True. <em>Can\'t have gone</em> means Jack is about 90% sure it did <strong>not</strong> happen: his friend did not go to the café Jack means, because that one is closed on Mondays. So Jack thinks the friend went somewhere else. <em>Can\'t</em> here is not about ability (the friend was perfectly able to go there); it is a guess based on evidence.' },

        { id: 't9l3s2-4', type: 'cloze', tag: 'u5-guess-past', level: 'B2',
          passage: 'A painting worth £2 million has disappeared from a small museum in York. The alarm did not go off, and the doors were still locked when staff arrived this morning.\n\nThe manager told reporters that it was too early to say how the thief got in. "Someone ___(1)___ climbed in through the roof, or perhaps a member of staff helped them. We just don\'t know yet," she said. The police are now checking the museum\'s cameras.',
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['must have', 'can\'t have', 'might have', 'should have'],
          answer: 2,
          why: 'The manager says it is <em>too early to say</em> and <em>we just don\'t know yet</em>, and she offers two different ideas, so she needs a 50% guess: <em>might have climbed</em>. <em>Must have</em> is the near miss: the right form for a past guess, but it says she is about 90% sure, which her own words deny. <em>Can\'t have</em> rules the roof out, when she still thinks it is possible. <em>Should have climbed</em> would mean that climbing in was the right thing to do.' },

        { id: 't9l3s2-5', type: 'choose', tag: 'u5-guess-past', level: 'B2',
          stem: 'Your phone was engaged every time I rang last night. You ______ to someone for hours!',
          options: ['must be talking', 'must have been talking', 'can\'t have been talking', 'must talk'],
          answer: 1,
          why: 'The busy line last night is the evidence, and the talking went on for a long time, so the guess needs <em>have been</em> + <em>-ing</em>: <em>must have been talking</em>. <em>Must be talking</em> is the near miss: the right strength and the right <em>-ing</em>, but it is about now, not last night. <em>Can\'t have been talking</em> has the right form but says the opposite of what the busy line shows. <em>Must talk</em> sounds like an order or a habit, and there is no past in it at all.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't9l3s3', name: 'Past guesses: getting the form right', cefr: 'B2',
      theory: {
        key: 'Every past guess has the same three parts in the same order: the modal, then <em>have</em>, then a past participle, as in <em>might have gone</em> or <em>can\'t have known</em>.',
        body: [
          'A past guess is built like a chain: <strong>modal + <em>have</em> + past participle</strong>. The modal never changes, <em>have</em> never changes (no <s>has</s>, no <s>had</s>, even after <em>he</em> or <em>she</em>), and the last verb is always the past participle, the third form: <em>go – went – <strong>gone</strong></em>, <em>see – saw – <strong>seen</strong></em>.',
          'Most mistakes come from dropping a link or using the wrong form. <s>She must have saw it</s> → <em>must have seen</em>: past participle, not past simple. <s>I think Joel might seen it</s> → <em>might have seen</em>: don\'t drop <em>have</em>. <s>She might read it already</s> → <em>might have read</em>. <s>You can\'t finish watching that film already</s> → <em>can\'t have finished</em>. <s>You must have a good rest last night</s> → <em>must have had</em>: you need the <em>have</em> of the chain <strong>and</strong> the past participle of the verb <em>have</em>.',
          'The chain can be longer. For something going on for a while: modal + <em>have been</em> + <em>-ing</em> (<em>She might have been sleeping</em>). For something done <strong>to</strong> a thing, the passive: modal + <em>have been</em> + past participle (<em>These cave paintings <strong>must have been created</strong> thousands of years ago</em>). The order is always the same: modal, <em>have</em>, <em>been</em>, then the main verb.',
          'Getting the form right is only half the job; you also need the right modal. <s>It must have been Kim, because she doesn\'t study science</s> has perfect grammar, but the reason shows we are sure it was <strong>not</strong> Kim, so it should be <em>can\'t have been</em>. And <s>The exam mustn\'t have been very hard</s> should be <em>can\'t have been</em>, because <em>mustn\'t</em> is for rules, not guesses.'
        ],
        simple: [
          'A past guess = modal + <em>have</em> + past participle: <em>might have gone</em>, <em>can\'t have known</em>.',
          'Use the past participle (<em>seen</em>, <em>gone</em>, <em>eaten</em>), not the past simple (<s>saw</s>, <s>went</s>, <s>ate</s>), and never drop or change <em>have</em>.',
          'Passive: <em>must have been built</em>. Going on for a while: <em>might have been sleeping</em>. And when the evidence says no, use <em>can\'t have</em>, not <em>must have</em> or <em>mustn\'t have</em>.'
        ],
        examples: [
          { s: '<s>I think Joel might seen it.</s> I think Joel <b>might have seen</b> it.', g: 'never drop have.' },
          { s: 'You <b>must have had</b> a good rest last night.', g: 'have from the chain, then had, the past participle of the verb have. Both are needed.' },
          { s: 'These cave paintings <b>must have been created</b> thousands of years ago.', g: 'passive: modal + have been + past participle.' },
          { s: 'It <b>can\'t have been</b> Kim. She doesn\'t even study science.', g: 'right form and right modal: the evidence says no, so can\'t have, not must have.' }
        ]
      },
      items: [
        { id: 't9l3s3-1', type: 'spot', tag: 'u5-guess-form', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['I can\'t find my history homework anywhere.', 'I\'ve looked in my bag and on my desk,', 'so I think I might left it', 'on the kitchen table this morning.'],
          answer: 2,
          fix: 'so I think I might have left it',
          why: 'A past guess needs all three parts: modal + <em>have</em> + past participle. <s>Might left</s> drops <em>have</em> and puts a past simple straight after the modal, which English never allows. The fix is <em>might have left</em>. Part 1 uses <em>can\'t</em> for ability (I am not able to find it), which is correct, and parts 2 and 4 are ordinary, correct phrases.' },

        { id: 't9l3s3-2', type: 'choose', tag: 'u5-guess-form', level: 'B2',
          stem: 'The whole house smells of chocolate. Dad ______ a cake while we were out.',
          options: ['must made', 'must be making', 'must has made', 'must have made'],
          answer: 3,
          why: 'The smell is the evidence now, and the baking happened while we were out, so the chain is modal + <em>have</em> + past participle: <em>must have made</em>. <em>Must has made</em> is the near miss. All three parts are there, but <em>have</em> never changes after a modal, even with <em>he</em> or <em>she</em>. <em>Must made</em> drops <em>have</em>. <em>Must be making</em> would be a guess about now, which <em>while we were out</em> rules out.' },

        { id: 't9l3s3-3', type: 'build', tag: 'u5-guess-form', level: 'B2',
          stem: 'Your friend says he walked all the way home from the city centre: fifteen kilometres! Put the words in order to show that you don\'t believe him.',
          tiles: ['walked', 'can\'t', 'that', 'you', 'all', 'have', 'way'],
          solution: 'you can\'t have walked all that way',
          alt: [],
          why: 'You don\'t believe him, so you are about 90% sure it did not happen: <em>can\'t have</em> + past participle. The order never changes: subject, modal, <em>have</em>, past participle, then the rest. <s>You can\'t walked</s> drops <em>have</em>, and <s>You have can\'t walked</s> puts the links in the wrong order.' },

        { id: 't9l3s3-4', type: 'spot', tag: 'u5-guess-form', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Someone has eaten the last piece of cake,', 'but it must have been Dad,', 'because he\'s been at work', 'since seven o\'clock this morning.'],
          answer: 1,
          fix: 'but it can\'t have been Dad,',
          why: 'The grammar of part 2 looks fine, but the modal is wrong. Dad has been at work all day, so the speaker is sure it was <strong>not</strong> him, and that needs <em>can\'t have been</em>. <em>Must have been</em> says the opposite of the reason given in parts 3 and 4. The other parts are correct: the present perfect in parts 1 and 3 fits something with a result now.' },

        { id: 't9l3s3-5', type: 'choose', tag: 'u5-guess-form', level: 'B2',
          stem: 'This old map ______ by hand. You can still see the pencil lines under the ink.',
          options: ['must have been drawn', 'must have drawn', 'must be drawn', 'must been drawn'],
          answer: 0,
          why: 'The map did not draw anything (somebody drew it), so the guess needs the passive: modal + <em>have been</em> + past participle, <em>must have been drawn</em>. <em>Must have drawn</em> is the near miss: it is a correct past guess, but active, so it says the map did the drawing. <em>Must be drawn</em> is about now or the future, not an old map. <em>Must been drawn</em> leaves out <em>have</em>.' }
      ]
    }
  ],

  check: {
    id: 't9l3ck', name: 'Stage Check · Guesses',
    items: [
      { id: 't9l3ck-1', type: 'choose', tag: 'u5-guess-now', level: 'B1+',
        stem: 'I\'m not sure, but that jacket ______ cheaper in the shop than online. Let\'s go and check.',
        options: ['must be', 'mustn\'t be', 'might be', 'can\'t be'],
        answer: 2,
        why: 'The speaker says <em>I\'m not sure</em> and wants to go and check, so this is a 50% possibility: <em>might be</em>. <em>Must be</em> is the near miss: the right kind of verb for a guess, but it means about 90% sure, which <em>I\'m not sure</em> rules out. <em>Can\'t be</em> is just as sure in the other direction, and then there would be no reason to go and check. <em>Mustn\'t be</em> is for rules, not guesses.' },

      { id: 't9l3ck-2', type: 'equiv', tag: 'u5-guess-past', level: 'B2',
        given: 'Maybe Zoe didn\'t get my birthday card.',
        stem: 'Which sentence means the same?',
        options: [
          'Zoe can\'t have got my birthday card.',
          'Zoe may not have got my birthday card.',
          'Zoe couldn\'t have got my birthday card.',
          'Zoe mustn\'t have got my birthday card.'
        ],
        answer: 1,
        why: '<em>Maybe … didn\'t</em> is a 50% "maybe not" about the past: <em>may not have got</em>, option 2. Option 3, <em>couldn\'t have got</em>, is the near miss. It looks softer than <em>can\'t</em>, but in a guess it means the same: about 90% sure she did not get it, which is much stronger than <em>maybe</em>. Option 1 is just as strong. Option 4 uses <em>mustn\'t</em>, which is for rules, not guesses: the opposite of <em>must have</em> is <em>can\'t have</em>.' },

      { id: 't9l3ck-3', type: 'spot', tag: 'u5-guess-form', level: 'B2',
        stem: 'One of the four parts is wrong. Find it.',
        words: ['Everyone in the class got top marks,', 'and most people finished in twenty minutes,', 'so the maths quiz', 'mustn\'t have been very difficult.'],
        answer: 3,
        fix: 'can\'t have been very difficult.',
        why: 'The speaker is about 90% sure the quiz was <strong>not</strong> difficult, and the opposite of <em>must have</em> in a guess is <em>can\'t have</em> (or <em>couldn\'t have</em>): <em>can\'t have been very difficult</em>. <em>Mustn\'t</em> is for rules (<em>You mustn\'t talk during the quiz</em>), so it is the wrong modal here even though the rest of the chain is right. Parts 1 to 3 are correct.' },

      { id: 't9l3ck-4', type: 'cloze', tag: 'u5-guess-now', level: 'B1+',
        passage: 'Last week Mrs Patel got a text message that looked as if it came from her bank. It asked her to click on a link and type in her password.\n\nMrs Patel was suspicious. "My bank never asks for passwords by text," she said, "so this message ___(1)___ from them. It must be from a criminal." She deleted it and phoned the bank, who thanked her for being so careful.',
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['might not be', 'mustn\'t be', 'must be', 'can\'t be'],
        answer: 3,
        why: 'Mrs Patel knows her bank never asks for passwords by text, and she goes on to say the message <em>must be from a criminal</em>, so she is about 90% sure it is <strong>not</strong> from the bank: <em>can\'t be</em>. <em>Might not be</em> is the near miss. It is about "not", but only a 50% "maybe not", too weak for someone this sure. <em>Mustn\'t be</em> is for rules, not guesses. <em>Must be</em> says the message really is from the bank, the opposite of her point.' },

      { id: 't9l3ck-5', type: 'choose', tag: 'u5-guess-past', level: 'B2',
        stem: 'I rang Mia\'s doorbell three times yesterday afternoon, but nobody answered. I\'m not sure why. She ______ in the garden, or perhaps she was out.',
        options: ['might have been working', 'must have been working', 'had to be working', 'might be working'],
        answer: 0,
        why: 'The speaker is guessing about yesterday and gives two possible reasons, so she needs a 50% past guess, and working in the garden is something that goes on for a while: <em>might have been working</em>. <em>Must have been working</em> is the near miss: the right form, but about 90% sure, which <em>I\'m not sure</em> and <em>or perhaps</em> rule out. <em>Might be working</em> is about now, not yesterday. <em>Had to be working</em> would mean somebody made her work.' },

      { id: 't9l3ck-6', type: 'choose', tag: 'u5-guess-form', level: 'B2',
        stem: 'Don\'t pretend you don\'t know about the school trip! You ______ about it. Ms Clarke told the whole class this morning.',
        options: ['must had heard', 'must hear', 'must have heard', 'must heard'],
        answer: 2,
        why: 'The speaker is about 90% sure it happened this morning, so the chain is modal + <em>have</em> + past participle: <em>must have heard</em>. <em>Must had heard</em> is the near miss: it has the past participle, but after a modal the middle word is always <em>have</em>, never <em>had</em>. <em>Must heard</em> drops <em>have</em>. <em>Must hear</em> has no past in it and sounds like an order.' }
    ]
  }
});

TOPICS.push(T9);
