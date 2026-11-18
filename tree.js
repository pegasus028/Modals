/* ===========================================================================
   FINE TUNING — tree.js
   The "Decision tree" tab (it replaced the Deduction tab on 18 Nov 2026).
   Four questions choose the modal and its form:
     1 What is the modal doing?  (telling / guessing / being polite / past habit)
     2 When?                     (now / the future / the past)
     3 Positive or negative?
     4 What exactly?             (the push, or how strong the clue is)
   Each answer shows the forms, the pattern for the next verb, two examples,
   the trap to avoid and, where it helps, the Thai contrast.
   =========================================================================== */
(function (global) {
  'use strict';

  /* ------------------------------------------------------------- leaves */
  function L(title, forms, pattern, ex, trap, extra) {
    return { leaf: true, title: title, forms: forms, pattern: pattern, ex: ex, trap: trap, extra: extra || '' };
  }

  var PUSH_NOW_POS = {
    q: 'What is the push?',
    hint: 'A rule = no choice. Trouble = something bad happens if you don’t. A good idea = advice. Allowed = it’s OK.',
    opts: [
      ['A rule: it is necessary', L('Obligation now', ['must', 'have to', 'have got to', 'need to'], 'modal + bare verb · have to / need to + verb',
        ['Students <b>must</b> wear their school pin. (a school notice: the school owns the rule)', 'I <b>have to</b> take the BTS today. Dad can’t drive me. (the reason comes from outside)'],
        'You must to pay. ✗ → You must pay. ✓',
        'If you are not sure, <em>have to</em> is always safe. <em>Must</em> = the speaker owns the rule; <em>have to</em> = the speaker reports it.')],
      ['A warning: do it now, or there will be trouble', L('Strong advice for one situation', ['had better (’d better)'], 'had better + bare verb',
        ['Your bill is due today. You<b>’d better</b> pay it before midnight.', 'It’s raining. We<b>’d better</b> take a taxi.'],
        'You had better to go. ✗ · You would better go. ✗ → You’d better go. ✓',
        '<em>Had</em> looks past, but <em>had better</em> is about now or the future.')],
      ['A good idea (advice)', L('Advice', ['should', 'ought to'], 'should + bare verb · ought to + bare verb',
        ['You <b>should</b> shop around before you buy a phone.', 'You <b>ought to</b> set aside some of your allowance.'],
        'You should to save. ✗ · You ought save. ✗',
        '<em>Should</em> and <em>ought to</em> usually mean the same. <em>Should</em> is more common.')],
      ['It is allowed (permission)', L('Permission', ['can', 'may', 'be allowed to'], 'can / may + bare verb · am/is/are allowed to + verb',
        ['You <b>can</b> pay by card or in cash.', 'Students <b>may</b> use a dictionary in this test. (formal)'],
        'You are allow to… ✗ → You are allowed to… ✓',
        '')]
    ]
  };
  var PUSH_NOW_NEG = {
    q: 'What does the negative mean?',
    hint: 'Forbidden = you have NO choice (ต้องไม่). Not necessary = you DO have a choice (ไม่ต้อง).',
    opts: [
      ['Forbidden: don’t do it!', L('Prohibition now', ['mustn’t', 'can’t', 'am/is/are not allowed to'], 'mustn’t / can’t + bare verb · aren’t allowed to + verb',
        ['You <b>mustn’t</b> share your PIN with anyone.', 'We <b>aren’t allowed to</b> use phones in the exam.'],
        'You don’t have to share your PIN. ✗ (that means it’s your choice!)',
        'Thai: <b>ต้องไม่</b> = mustn’t · <b>ไม่ต้อง</b> = don’t have to')],
      ['Not necessary: you have a choice', L('No obligation now', ['don’t have to', 'don’t need to', 'needn’t'], 'don’t have to / don’t need to + verb · needn’t + bare verb',
        ['You <b>don’t have to</b> tip taxi drivers in Thailand.', 'You <b>needn’t</b> bring cash. The café takes cards.'],
        'You mustn’t pay. Entry is free. ✗ → You don’t have to pay. ✓',
        'Thai: <b>ไม่ต้อง</b> = don’t have to / needn’t')],
      ['A bad idea (advice against)', L('Advice against', ['shouldn’t', 'ought not to'], 'shouldn’t + bare verb',
        ['You <b>shouldn’t</b> spend all your allowance on the first day.', 'You <b>ought not to</b> lend money to strangers.'],
        'You don’t ought to… ✗ → You ought not to… ✓',
        '')],
      ['A warning: don’t do it, or there will be trouble', L('Strong advice not to', ['had better not (’d better not)'], 'had better not + bare verb',
        ['You<b>’d better not</b> swipe your card on that broken machine.', 'We<b>’d better not</b> be late. The doors close at seven.'],
        'You hadn’t better go. ✗ → You’d better not go. ✓',
        'NOT goes after <em>better</em>.')]
    ]
  };
  var PUSH_PAST_POS = {
    q: 'What was the push?',
    hint: 'Rules SWAP the word (must → had to). Advice ADDS have + V3 (should → should have done).',
    opts: [
      ['It was necessary', L('Obligation in the past', ['had to', 'needed to'], 'had to + bare verb',
        ['Yesterday we <b>had to</b> show our tickets at the gate.', 'She <b>needed to</b> take out some cash.'],
        'Yesterday we must wait. ✗ (must has no past) · We had to waited. ✗',
        '')],
      ['It was allowed', L('Permission in the past', ['was/were allowed to', 'could (general permission)'], 'was allowed to + verb · could + bare verb',
        ['We <b>were allowed to</b> leave early on Friday.', 'At my old school we <b>could</b> wear trainers.'],
        'We were allow to… ✗',
        '')],
      ['It was a good idea, but it DIDN’T happen (regret)', L('Past criticism / regret', ['should have + V3', 'ought to have + V3'], 'should have + past participle',
        ['I <b>should have kept</b> the receipt. Now I can’t get a refund.', 'You <b>ought to have told</b> me you had run out of money.'],
        'I should kept… ✗ · I should had kept… ✗ · I should of kept… ✗',
        '<em>Have</em> never changes after a modal.')]
    ]
  };
  var PUSH_PAST_NEG = {
    q: 'What did the negative mean?',
    hint: 'Forbidden or not necessary? For “not necessary”, the next question is: did it happen?',
    opts: [
      ['It was forbidden', L('Prohibition in the past', ['wasn’t/weren’t allowed to', 'couldn’t'], 'wasn’t allowed to + verb · couldn’t + bare verb',
        ['We <b>weren’t allowed to</b> use calculators in the test.', 'Pim <b>couldn’t</b> go to Siam. Her mum said no.'],
        'We didn’t allowed to… ✗ (allowed uses be, not do)',
        '')],
      ['It wasn’t necessary', {
        q: 'Did the action happen?',
        hint: 'This is the only place where you must know what really happened.',
        opts: [
          ['Yes, it happened (but it wasn’t necessary)', L('Done for nothing', ['needn’t have + V3'], 'needn’t have + past participle',
            ['I <b>needn’t have brought</b> cash. The café took cards.', 'You <b>needn’t have bought</b> me a present, but thank you!'],
            'I needn’t have bring… ✗ · I didn’t need to brought… ✗',
            'Thai: ทำไปแล้ว แต่ไม่จำเป็นต้องทำ')],
          ['No, it didn’t happen (or we don’t know)', L('Not necessary in the past', ['didn’t have to', 'didn’t need to'], 'didn’t have to / didn’t need to + bare verb',
            ['We <b>didn’t have to</b> queue because we had booked online.', 'I <b>didn’t need to</b> pay for the bus. Dad drove us.'],
            'We didn’t had to… ✗ · We hadn’t to… ✗',
            'Did is the past, so the verb after it stays bare.')]
        ]
      }],
      ['It was a bad idea, but it DID happen (regret)', L('Past criticism of something done', ['shouldn’t have + V3'], 'shouldn’t have + past participle',
        ['You <b>shouldn’t have spent</b> all your allowance on the first day.', 'I <b>shouldn’t have lent</b> her my card.'],
        'You shouldn’t spent… ✗ · You shouldn’t had spent… ✗',
        '')]
    ]
  };
  var PUSH_FUT_POS = {
    q: 'What will the push be?',
    hint: '<em>Must</em> has no future form. It borrows <em>will have to</em>.',
    opts: [
      ['It will be necessary', L('Obligation in the future', ['will have to', 'will need to'], 'will have to + bare verb',
        ['I<b>’ll have to</b> pay my sister back next week.', 'You<b>’ll need to</b> show your passport at the airport.'],
        'I will must pay. ✗',
        '<em>Must</em> can talk about the future too (<em>I must call her tomorrow</em>), but after <em>will</em> or another modal use <em>have to</em>.')],
      ['It will be allowed', L('Permission in the future', ['will be allowed to', 'can'], 'will be allowed to + verb',
        ['Next year we<b>’ll be allowed to</b> go on the trip without our parents.', 'You <b>can</b> collect your refund tomorrow.'],
        'We will can… ✗ → We will be able to / allowed to… ✓',
        '')],
      ['It will be a good idea', L('Advice about the future', ['should', 'ought to', 'had better'], 'should + bare verb (add a future time word)',
        ['You <b>should</b> book your ticket early next time.', 'We<b>’d better</b> leave early tomorrow. The traffic is bad.'],
        'You should to book… ✗',
        '')]
    ]
  };
  var PUSH_FUT_NEG = {
    q: 'What will the negative mean?',
    hint: 'Forbidden or not necessary?',
    opts: [
      ['It will be forbidden', L('Prohibition in the future', ['won’t be allowed to', 'mustn’t'], 'won’t be allowed to + verb · mustn’t + bare verb',
        ['You <b>won’t be allowed to</b> take food into the museum.', 'You <b>mustn’t</b> forget your passport tomorrow.'],
        'You won’t allowed to… ✗',
        '')],
      ['It won’t be necessary', L('No obligation in the future', ['won’t have to', 'won’t need to', 'needn’t'], 'won’t have to + bare verb',
        ['You <b>won’t have to</b> pay for delivery. Your order is over 500 baht.', 'You <b>needn’t</b> come tomorrow.'],
        'You mustn’t come tomorrow. ✗ (= it is forbidden)',
        '')]
    ]
  };

  /* Guessing: how strong is the clue? */
  var CLUE_HINT = '<b>Proof</b> = a receipt, an app, a photo, “exactly”, “no other”. <b>Usual pattern</b> = usually, normally, a policy, a forecast. <b>No proof</b> = not announced yet, “interested”, “maybe”.';
  var GUESS_NOW_POS = {
    q: 'How strong is the clue?', hint: CLUE_HINT,
    opts: [
      ['Proof: I am sure it is true', L('Sure yes, now', ['must'], 'must + bare verb · must be + -ing',
        ['Everyone has a wet umbrella. It <b>must be</b> raining.', 'She has three new bags. She <b>must have</b> a lot of money.'],
        'With a strong clue, don’t use might. With no clue, don’t use must.',
        '')],
      ['A usual pattern: I expect it is true', L('Expected, now', ['should'], 'should + bare verb',
        ['The shop usually opens at 10, and it’s 10.15. It <b>should</b> be open.', 'Your refund <b>should</b> be in your account by now.'],
        'Should for expectations is a guess, not advice. Look at the clue words: usually, normally.',
        '')],
      ['Some chance: it is possible', L('Possible, now', ['may', 'might', 'could'], 'may / might / could + bare verb',
        ['She isn’t answering. She <b>might</b> be in the shower.', 'That stall <b>could</b> be cheaper.'],
        'She might to be… ✗',
        'May, might and could mean almost the same here.')]
    ]
  };
  var GUESS_NOW_NEG = {
    q: 'How strong is the clue?', hint: CLUE_HINT,
    opts: [
      ['Proof: I am sure it is NOT true', L('Sure no, now', ['can’t', 'couldn’t'], 'can’t + bare verb',
        ['The till says 1,990 baht for a pencil case. It <b>can’t</b> be right.', 'Her balance is 12,500 baht. She <b>can’t</b> be out of money.'],
        'She mustn’t be at home. ✗ → She can’t be at home. ✓ (mustn’t is never a guess)',
        'Sure NO = can’t. Mustn’t = forbidden.')],
      ['Maybe not: it is possible that it isn’t true', L('Possibly not, now', ['may not', 'might not'], 'may not / might not + bare verb',
        ['The cashpoint is often empty on Fridays. It <b>might not</b> have any cash.', 'She <b>may not</b> know about the sale.'],
        'Couldn’t ≠ might not. Couldn’t = sure no.',
        '')]
    ]
  };
  var GUESS_FUT_POS = {
    q: 'How strong is the clue?', hint: CLUE_HINT,
    opts: [
      ['Proof: I am sure it will happen', L('Sure yes, future', ['will'], 'will + bare verb',
        ['The forecast says heavy rain is almost certain. The market <b>will</b> be quiet.', 'Only ten tickets are left. They<b>’ll</b> sell out soon.'],
        'Don’t use must for future predictions: The tickets must sell out. ✗ (sounds like a rule)',
        '')],
      ['A usual pattern: I expect it will happen', L('Expected, future', ['should'], 'should + bare verb',
        ['Refunds normally take two days. It <b>should</b> arrive by Wednesday.', 'The journey usually takes an hour, so we <b>should</b> get there by 7.'],
        'Look for: usually, normally, the website says, the forecast says.',
        '')],
      ['Some chance: it is possible', L('Possible, future', ['may', 'might', 'could'], 'may / might / could + bare verb',
        ['The shop <b>might</b> have a sale in December.', 'Bam <b>could</b> buy the ticket after her birthday.'],
        'Bam could have buy the ticket next week. ✗ → Bam could buy… ✓ (future = no have)',
        '')]
    ]
  };
  var GUESS_FUT_NEG = {
    q: 'How strong is the clue?', hint: CLUE_HINT,
    opts: [
      ['Proof: I am sure it won’t happen', L('Sure no, future', ['won’t'], 'won’t + bare verb',
        ['Heavy rain is almost certain. The outdoor market <b>won’t</b> be busy.', 'She has spent everything. She <b>won’t</b> be able to afford it.'],
        'mustn’t for a prediction ✗',
        '')],
      ['Maybe not: it is possible that it won’t happen', L('Possibly not, future', ['may not', 'might not'], 'may not / might not + bare verb',
        ['Weekend transfers can be slow. The money <b>might not</b> arrive until Monday.', 'She <b>may not</b> get the sale price.'],
        'might not to… ✗',
        '')]
    ]
  };
  var GUESS_PAST_POS = {
    q: 'How strong is the clue?', hint: CLUE_HINT + ' For the past, keep the modal and add <b>have + V3</b>.',
    opts: [
      ['Proof: I am sure it happened', L('Sure yes, past', ['must have + V3'], 'must have + past participle',
        ['Her purse is empty and she has three bags. She <b>must have spent</b> it all.', 'The app shows the payment. It <b>must have arrived</b>.'],
        'She must have spend… ✗ · She must spent… ✗ · She had to spend… (= necessary, not a guess)',
        '')],
      ['A usual pattern: I expect it happened', L('Expected, past', ['should have + V3'], 'should have + past participle',
        ['I posted it on Monday. It <b>should have arrived</b> by now.', 'The film started at 7, so it <b>should have finished</b> by 9.'],
        'Careful: <em>should have</em> can also mean a regret (You should have checked!). The clue words decide.',
        '')],
      ['Some chance: it possibly happened', L('Possible, past', ['may have + V3', 'might have + V3', 'could have + V3'], 'may / might / could have + past participle',
        ['She <b>could have left</b> her card in the canteen.', 'The shop <b>might have given</b> her a discount.'],
        'She could have leave it… ✗',
        '')]
    ]
  };
  var GUESS_PAST_NEG = {
    q: 'How strong is the clue?', hint: CLUE_HINT + ' For the past, keep the modal and add <b>have + V3</b>.',
    opts: [
      ['Proof: I am sure it did NOT happen', L('Sure no, past', ['can’t have + V3', 'couldn’t have + V3'], 'can’t have + past participle',
        ['Twenty T-shirts are still on the shelf. She <b>can’t have bought</b> the last one.', 'The sale ended on Sunday. She <b>can’t have paid</b> the sale price.'],
        'She mustn’t have bought… ✗ (mustn’t is never a guess)',
        '')],
      ['Maybe not: it possibly didn’t happen', L('Possibly not, past', ['may not have + V3', 'might not have + V3'], 'might not have + past participle',
        ['She <b>might not have seen</b> my message.', 'He <b>may not have got</b> the correct change.'],
        'might not have saw ✗ → might not have seen ✓',
        '')]
    ]
  };

  var TREE = {
    q: 'What is the modal doing?',
    hint: 'Telling = rules, advice, permission (what to do). Guessing = how sure you are (what is true).',
    opts: [
      ['Telling someone what to do (rules, advice, permission)', {
        q: 'When?', hint: 'Look for time words: now, tomorrow, next week, yesterday, last year.',
        opts: [
          ['Now / in general', { q: 'Positive or negative?', opts: [['Positive: do it / you may do it', PUSH_NOW_POS], ['Negative: don’t do it / no need', PUSH_NOW_NEG]] }],
          ['The future', { q: 'Positive or negative?', opts: [['Positive', PUSH_FUT_POS], ['Negative', PUSH_FUT_NEG]] }],
          ['The past', { q: 'Positive or negative?', opts: [['Positive', PUSH_PAST_POS], ['Negative', PUSH_PAST_NEG]] }]
        ]
      }],
      ['Guessing what is true (how sure am I?)', {
        q: 'When is the thing you are guessing about?', hint: 'Now: is she at home? Future: will it arrive? Past: did she lose it?',
        opts: [
          ['Now', { q: 'Positive or negative?', opts: [['Positive: it IS true', GUESS_NOW_POS], ['Negative: it ISN’T true', GUESS_NOW_NEG]] }],
          ['The future', { q: 'Positive or negative?', opts: [['Positive: it WILL happen', GUESS_FUT_POS], ['Negative: it WON’T happen', GUESS_FUT_NEG]] }],
          ['The past', { q: 'Positive or negative?', opts: [['Positive: it DID happen', GUESS_PAST_POS], ['Negative: it DIDN’T happen', GUESS_PAST_NEG]] }]
        ]
      }],
      ['Being polite: asking, offering, suggesting, preferring', {
        q: 'What are you doing?',
        opts: [
          ['Asking for permission', L('Asking permission', ['Can I…?', 'Could I…?', 'May I…?'], 'Can / Could / May I + bare verb…?',
            ['<b>Could I</b> pay by card, please?', '<b>May I</b> leave early today? (very polite)'],
            'May you…? ✗ (may is only for I / we)',
            'More polite: can → could → may.')],
          ['Asking someone to do something', L('Requests', ['Can you…?', 'Could you…?', 'Would you…?'], 'Could / Would you + bare verb…?',
            ['<b>Could you</b> tell me where the cashpoint is?', '<b>Would you</b> mind waiting a moment? (mind + -ing)'],
            'Answer “Could you…?” with “Sure!”, not “Yes, I could.”',
            '')],
          ['Offering to help', L('Offers', ['Shall I…?', 'I’ll…'], 'Shall I + bare verb…?',
            ['<b>Shall I</b> carry your bags? You look tired.', 'Don’t worry, <b>I’ll</b> pay this time.'],
            'Must I carry your bags? ✗ (asks if it is necessary)',
            '')],
          ['Making a suggestion', L('Suggestions', ['Shall we…?', 'We could…', 'Why don’t we…?'], 'Shall we + bare verb…?',
            ['<b>Shall we</b> chip in for a present?', 'We <b>could</b> share a taxi.'],
            'Shall we to go? ✗',
            '')],
          ['Saying what I prefer', L('Preference', ['would rather (’d rather)', 'would rather not'], 'would rather + bare verb (+ than + bare verb)',
            ['I<b>’d rather</b> save my money than spend it on snacks.', 'I<b>’d rather not</b> go out tonight.'],
            'I’d rather to pay. ✗ · I’d rather paying. ✗',
            '')]
        ]
      }],
      ['Talking about a past habit that has stopped', L('Past habits', ['used to', 'would (actions only)'], 'used to + bare verb',
        ['I <b>used to</b> spend all my pocket money on stickers.', 'Every Saturday Grandma <b>would</b> take us to the market.'],
        'I used to spent… ✗ · I would have long hair. ✗ (would is not for states)',
        'Negative: <em>didn’t use to</em>. Question: <em>Did you use to…?</em>')]
    ]
  };

  /* ---------------------------------------------------------------- view */
  var path = [];          /* indices chosen so far */
  var host = null;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function nodeAt(p) {
    var n = TREE, labels = [];
    for (var i = 0; i < p.length; i++) { labels.push(n.opts[p[i]][0]); n = n.opts[p[i]][1]; }
    return { node: n, labels: labels };
  }
  function paint(h) {
    host = h || host;
    var at = nodeAt(path), n = at.node, out = '';
    out += '<div class="sect-h"><div><h2>Which modal? The decision tree</h2>' +
      '<p class="pp-lead">Answer up to four questions: what the modal is doing, when, positive or negative, and how strong. ' +
      'The tree gives you the modal, the form of the next verb and the trap to avoid.</p></div></div>';
    out += '<div class="dt-wrap">';
    out += '<div class="dt-path">' + (path.length ? '<button class="dt-crumb" data-dt-to="0">Start</button>' : '<span class="dt-crumb on">Start</span>') +
      at.labels.map(function (lb, i) {
        return '<span class="dt-sep">›</span>' + (i < at.labels.length - 1 || !n.leaf
          ? '<button class="dt-crumb" data-dt-to="' + (i + 1) + '">' + esc(short(lb)) + '</button>'
          : '<span class="dt-crumb on">' + esc(short(lb)) + '</span>');
      }).join('') + '</div>';
    if (!n.leaf) {
      out += '<div class="dt-q"><p class="dt-step">Question ' + (path.length + 1) + '</p><p class="dt-qt">' + n.q + '</p>' +
        (n.hint ? '<p class="dt-hint">' + n.hint + '</p>' : '') + '<div class="dt-opts">' +
        n.opts.map(function (o, i) {
          return '<button class="dt-opt" data-dt-pick="' + i + '"><span>' + esc(o[0]) + '</span><b>→</b></button>';
        }).join('') + '</div></div>';
    } else {
      out += '<div class="dt-leaf"><p class="dt-step">Your modal</p><p class="dt-qt">' + esc(n.title) + '</p>' +
        '<div class="dt-forms">' + n.forms.map(function (f) { return '<span class="dt-form">' + esc(f) + '</span>'; }).join('') + '</div>' +
        '<p class="dt-pat"><b>Pattern:</b> ' + esc(n.pattern) + '</p>' +
        '<ul class="dt-ex">' + n.ex.map(function (e) { return '<li>' + e + '</li>'; }).join('') + '</ul>' +
        '<p class="dt-trap"><b>Trap:</b> ' + esc(n.trap) + '</p>' +
        (n.extra ? '<p class="dt-extra">' + n.extra + '</p>' : '') +
        '<div class="dt-acts"><button class="btn sm" data-dt-back>← Back one step</button><button class="btn primary sm" data-dt-to="0">Start again</button></div></div>';
    }
    out += '</div>';
    out += '<div class="dt-map"><p class="dt-step">The whole tree at a glance</p>' + mapHtml() + '</div>';
    host.innerHTML = out;
    host.querySelectorAll('[data-dt-pick]').forEach(function (b) {
      b.addEventListener('click', function () { path.push(+b.dataset.dtPick); paint(); scrollTop(); });
    });
    host.querySelectorAll('[data-dt-to]').forEach(function (b) {
      b.addEventListener('click', function () { path = path.slice(0, +b.dataset.dtTo); paint(); });
    });
    var bk = host.querySelector('[data-dt-back]');
    if (bk) bk.addEventListener('click', function () { path.pop(); paint(); });
    host.querySelectorAll('[data-dt-jump]').forEach(function (b) {
      b.addEventListener('click', function () { path = b.dataset.dtJump.split('.').map(Number); paint(); scrollTop(); });
    });
  }
  function scrollTop() { try { host.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {} }
  function short(s) { return s.length > 34 ? s.slice(0, 32) + '…' : s; }

  /* A compact table of every leaf: family · time · sense · meaning → forms. */
  function mapHtml() {
    var rows = [];
    (function walk(n, p, labels) {
      if (n.leaf) { rows.push({ p: p, labels: labels, n: n }); return; }
      n.opts.forEach(function (o, i) { walk(o[1], p.concat(i), labels.concat(o[0])); });
    })(TREE, [], []);
    var h = '<div class="dd-scroll"><table class="sectable dt-table"><tr><th>Doing</th><th>When</th><th>+ / −</th><th>Meaning</th><th>Use</th></tr>';
    rows.forEach(function (r) {
      var fam = /^Telling/.test(r.labels[0]) ? 'Telling' : /^Guessing/.test(r.labels[0]) ? 'Guessing' : /^Being/.test(r.labels[0]) ? 'Polite' : 'Habit';
      var when = (fam === 'Telling' || fam === 'Guessing') ? r.labels[1].replace(' / in general', '').replace('The f', 'F').replace('The p', 'P') : '—';
      var sense = (fam === 'Telling' || fam === 'Guessing') ? (/^Positive/.test(r.labels[2]) ? '+' : '−') : '—';
      h += '<tr><td>' + fam + '</td><td>' + esc(when) + '</td><td class="dt-sense">' + sense + '</td><td>' + esc(r.n.title) + '</td>' +
        '<td><button class="dt-jump" data-dt-jump="' + r.p.join('.') + '">' + esc(r.n.forms.join(' · ')) + '</button></td></tr>';
    });
    return h + '</table></div>';
  }

  global.DecisionTree = { paint: paint, TREE: TREE };
})(window);
