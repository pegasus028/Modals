/* ===========================================================================
   FINE TUNING — prep-data.js
   "Unit 5 test prep": three mock tests for Mikii (Gateway to the World B2,
   Unit 5), built 18 Nov 2026 on the shape of her school practice test of the
   same day:
     Paper 1  Obligation, no obligation, prohibition, advice (+ permission,
              the past, and the rest of the modal family)
       1 Choose the best modal (5)      2 Same form, different meaning (4)
       3 Identify the meaning O/P/A/N + clue (6)
       4 Correct or incorrect? (6)      5 Rewrite with the word given (5)
     Paper 2  Speculation and deduction (now, future and past)
       1 Choose the best modal (5)      2 Same situation, different certainty (4)
       3 Present, future or past? + clue (6)
       4 Make the deduction (5)         5 Who has the better reasoning? (5)
   51 items per test. Free-text items carry:
     model   the answer shown after marking and rebuilt from tiles
     tiles   the model cut into chunks, in order (only one natural order)
     all     regexes that must ALL match the normalised answer (rule checker,
             used when AI marking is not available, and as a gate on it)
     none    regexes that must NOT match
     tip     what to check, shown when an answer is wrong
     tests   {pass:[], fail:[]} sample answers, checked by tools/prep-check.js
   Regex placeholders: {V3} = a past participle, {BASE} = a base verb whose
   past participle is different (so "could have buy" is caught).
   Answers are normalised before checking: lower case, straight apostrophes,
   "do not" -> "don't", "'d better" -> "had better", "'d rather" ->
   "would rather", "'ve got to" -> "have got to", "dont" -> "don't" etc.
   =========================================================================== */
window.PREP = {
  version: '2026-11-18c',
  tests: [

  /* =====================================================================
     MOCK 1 · SAVING FOR A CONCERT
     ===================================================================== */
  {
    id: 'prep1',
    name: 'Mock 1 · Saving for a concert',
    blurb: 'Fah and her friends save, spend and queue for a concert. Two papers, 51 questions, like your practice test, with the past forms added.',
    papers: [
    {
      code: '1',
      title: 'Obligation, no obligation, prohibition, advice and permission',
      sections: [
      {
        code: '1', title: 'Choose the best modal', type: 'mc',
        instructions: 'Choose the option that best fits the meaning.',
        items: [
          { id: 'p1-1-1-1', focus: 'no obligation (don’t have to)',
            stem: 'There is a cashpoint in the lobby of the concert hall, so you ______ bring a lot of cash with you.',
            options: ['mustn’t', 'had better', 'don’t have to', 'ought to'], answer: 2,
            why: 'Clue: there is a cashpoint inside, so cash is not necessary. Mustn’t would mean cash is forbidden; had better and ought to tell you to bring it.' },
          { id: 'p1-1-1-2', focus: 'past: done, but not necessary (needn’t have)',
            stem: 'Ploy printed her concert ticket at home, but at the door the staff only scanned the QR code on her phone. She ______ printed it.',
            options: ['needn’t have', 'didn’t need to', 'shouldn’t', 'mustn’t have'], answer: 0,
            why: 'She printed it (it happened), but it was not necessary: needn’t have + V3. Didn’t need to and shouldn’t need a bare verb, not printed.' },
          { id: 'p1-1-1-3', focus: 'strong advice with a warning (had better)',
            stem: 'Your bank card expires next week. You ______ order a new one before your trip, or you won’t be able to use cashpoints abroad.',
            options: ['are allowed to', 'don’t need to', 'used to', 'had better'], answer: 3,
            why: 'Clue: “or you won’t be able to…” is a warning about one situation, so had better. Don’t need to says the opposite; used to is a past habit.' },
          { id: 'p1-1-1-4', focus: 'prohibition (mustn’t)',
            stem: 'Visitors ______ film the show on their phones. Anyone who does will be asked to leave.',
            options: ['don’t have to', 'mustn’t', 'needn’t', 'should'], answer: 1,
            why: 'Clue: people who do it are asked to leave, so it is not allowed: mustn’t. Don’t have to and needn’t only mean it is not necessary.' },
          { id: 'p1-1-1-5', focus: 'preference (would rather + bare verb + than)',
            stem: 'I ______ save my allowance for the concert than spend it on bubble tea every day.',
            options: ['had better', 'ought to', 'would rather', 'prefer'], answer: 2,
            why: 'Would rather + bare verb + than compares two choices. Prefer would need “to save … rather than spend”; had better and ought to do not go with than.' }
        ]
      },
      {
        code: '2', title: 'Same form, different meaning', type: 'pick',
        instructions: 'Read each pair. Decide which sentence expresses the meaning given.',
        items: [
          { id: 'p1-1-2-1', label: 'PAST: DONE, BUT IT WASN’T NECESSARY', focus: 'needn’t have vs didn’t need to',
            options: ['We didn’t need to queue for tickets.', 'We needn’t have queued for tickets.'], answer: 1,
            why: 'Needn’t have + V3 says you did it for nothing. Didn’t need to only says it was not necessary; it does not say whether you queued.' },
          { id: 'p1-1-2-2', label: 'PERMISSION', focus: 'can (allowed) vs have to',
            options: ['You can pay for your ticket in two parts.', 'You have to pay for your ticket in two parts.'], answer: 0,
            why: 'Can = you are allowed to (it is your choice). Have to = it is necessary.' },
          { id: 'p1-1-2-3', label: 'PAST PROHIBITION', focus: 'weren’t allowed to vs didn’t have to',
            options: ['We didn’t have to bring drinks into the hall.', 'We weren’t allowed to bring drinks into the hall.'], answer: 1,
            why: 'Weren’t allowed to = it was forbidden. Didn’t have to = it was not necessary. ต้องไม่ ≠ ไม่ต้อง.' },
          { id: 'p1-1-2-4', label: 'PAST CRITICISM (A MISTAKE)', focus: 'should have vs had to',
            options: ['You should have checked the price. That bag cost an arm and a leg!', 'You had to check the price. That bag cost an arm and a leg!'], answer: 0,
            why: 'Should have + V3 = it was a good idea, but you didn’t do it. Had to = it was necessary.' }
        ]
      },
      {
        code: '3', title: 'Identify the meaning', type: 'tag',
        choices: [['O', 'obligation'], ['P', 'prohibition'], ['A', 'advice'], ['N', 'no obligation']],
        instructions: 'For each sentence, choose O, P, A or N. Then tap the words that helped you decide.',
        items: [
          { id: 'p1-1-3-1', sentence: 'Under-15s have to be with an adult at the evening show.', answer: 'O', clue: ['have to'],
            why: 'Have to = necessary because of a rule.' },
          { id: 'p1-1-3-2', sentence: 'You needn’t print your ticket. The QR code on your phone is fine.', answer: 'N', clue: ['needn’t'],
            why: 'Needn’t + bare verb = it is not necessary.' },
          { id: 'p1-1-3-3', sentence: 'Fans aren’t allowed to bring selfie sticks into the stadium.', answer: 'P', clue: ['aren’t allowed to'],
            why: 'Aren’t allowed to = it is forbidden.' },
          { id: 'p1-1-3-4', sentence: 'Last year we had to show our student cards to get the discount.', answer: 'O', clue: ['had to'],
            why: 'Had to is the past of must / have to: it was necessary.' },
          { id: 'p1-1-3-5', sentence: 'You ought to set aside a little money every week for the ticket.', answer: 'A', clue: ['ought to'],
            why: 'Ought to = should: it is a good idea.' },
          { id: 'p1-1-3-6', sentence: 'You’d better not swipe your card on that machine. The screen looks broken.', answer: 'A', clue: ['’d better not'],
            why: 'Had better not is strong advice with a warning, not a rule. Nobody forbids it; it is just a bad idea.' }
        ]
      },
      {
        code: '4', title: 'Correct or incorrect?', type: 'fix',
        instructions: 'Some sentences are correct. Some contain one modal error. Correct only the incorrect ones.',
        items: [
          { id: 'p1-1-4-4', sentence: 'Students aren’t allowed to use their phones in the exam room.', ok: true,
            why: 'Correct: aren’t allowed to + bare verb = forbidden.' },
          { id: 'p1-1-4-1', sentence: 'You mustn’t pay a booking fee if you buy your ticket at the box office.', ok: false,
            model: 'You don’t have to pay a booking fee if you buy your ticket at the box office.',
            tiles: ['You', 'don’t have to', 'pay a booking fee', 'if you buy', 'your ticket', 'at the box office.'],
            all: ["\\b(don't have to|don't need to|needn't|do not have to)\\b"], none: ["\\bmustn't\\b"],
            tip: 'Is paying forbidden, or just not necessary at the box office?',
            why: 'Paying is not necessary at the box office; it is not forbidden. Use don’t have to / don’t need to / needn’t.',
            tests: { pass: ["don't have to", "You don't need to pay a booking fee", 'needn’t'], fail: ["mustn't", "shouldn't"] } },
          { id: 'p1-1-4-2', sentence: 'Yesterday we must wait an hour to get into the hall.', ok: false,
            model: 'Yesterday we had to wait an hour to get into the hall.',
            tiles: ['Yesterday we', 'had to', 'wait an hour', 'to get into', 'the hall.'],
            all: ["\\b(had to|needed to)\\b"], none: ["\\bmust\\b", "\\bhad to waited\\b"],
            tip: 'Must has no past form. What does it borrow for yesterday?',
            why: 'Must has no past form. For a past obligation, swap the word: had to.',
            tests: { pass: ['had to', 'Yesterday we had to wait an hour to get into the hall.'], fail: ['must have waited', 'have to'] } },
          { id: 'p1-1-4-5', sentence: 'Fah should have shopped around before she bought her headphones.', ok: true,
            why: 'Correct: should have + V3 = a good idea that she didn’t follow.' },
          { id: 'p1-1-4-3', sentence: 'You had better to keep the receipt in case you need a refund.', ok: false,
            model: 'You had better keep the receipt in case you need a refund.',
            tiles: ['You', 'had better', 'keep the receipt', 'in case', 'you need', 'a refund.'],
            all: ["\\bhad better keep\\b|^\\s*had better\\s*$|^\\s*keep\\s*$|\\bbetter keep\\b"], none: ["\\bbetter to\\b"],
            tip: 'Which modals take “to” after them, and which take a bare verb?',
            why: 'Had better is followed by a bare verb: had better keep, not had better to keep.',
            tests: { pass: ['had better keep', "You'd better keep the receipt in case you need a refund."], fail: ['had better to keep', 'should to keep'] } },
          { id: 'p1-1-4-6', sentence: 'We didn’t need to buy drinks because the ticket price included them.', ok: true,
            why: 'Correct: didn’t need to + bare verb = it was not necessary (and we didn’t buy them).' }
        ]
      },
      {
        code: '5', title: 'Rewrite without changing the meaning', type: 'rewrite',
        instructions: 'Rewrite each sentence using the word given. Keep the meaning the same.',
        items: [
          { id: 'p1-1-5-1', source: 'It was necessary for us to show our tickets at the gate.', keyword: 'HAD',
            model: 'We had to show our tickets at the gate.',
            tiles: ['We', 'had to', 'show our tickets', 'at the gate.'],
            all: ["\\bhad to show\\b", "\\bticket", "\\bgate\\b"], none: ["\\bhad to showed\\b"],
            tip: 'Necessary + past = had to + bare verb. Start with “We”.',
            why: 'Past obligation: had to + bare verb.',
            tests: { pass: ['We had to show our tickets at the gate.', 'we had to show our tickets at the gate'], fail: ['We must show our tickets at the gate.', 'We had to showed our tickets at the gate.'] } },
          { id: 'p1-1-5-2', source: 'It wasn’t necessary to bring cash, but I brought some anyway.', keyword: 'NEEDN’T',
            model: 'I needn’t have brought any cash.',
            tiles: ['I', 'needn’t have', 'brought', 'any cash.'],
            all: ["\\bneedn't have brought\\b", "\\bcash\\b"], none: [],
            tip: 'You DID bring it, for nothing. Which form says that? needn’t + have + V3.',
            why: 'It happened, but it was not necessary: needn’t have + V3 (brought).',
            tests: { pass: ['I needn’t have brought any cash.', "I needn't have brought cash", "I need not have brought some cash."], fail: ["I needn't bring cash.", "I didn't need to bring cash.", "I needn't have bring cash"] } },
          { id: 'p1-1-5-3', source: 'Photos are not permitted inside the hall.', keyword: 'ALLOWED',
            model: 'You aren’t allowed to take photos inside the hall.',
            tiles: ['You', 'aren’t allowed', 'to take photos', 'inside the hall.'],
            all: ["\\b(aren't|isn't|are not|is not|not)\\s*(\\w+\\s)?allowed\\b", "\\bphoto"], none: ["\\bdidn't allowed\\b", "\\bdon't allowed\\b", "\\bnot allow\\b"],
            tip: 'Use be + not + allowed to + verb. Who is not allowed? “You…”',
            why: 'Prohibition: aren’t allowed to + bare verb. “Photos aren’t allowed inside the hall” is also correct.',
            tests: { pass: ['You aren’t allowed to take photos inside the hall.', 'Photos are not allowed inside the hall.', "We're not allowed to take photos inside the hall"], fail: ["You don't allowed to take photos inside the hall.", 'You are allowed to take photos inside the hall.'] } },
          { id: 'p1-1-5-4', source: 'It was a bad idea to spend all your allowance on the first day.', keyword: 'SHOULDN’T',
            model: 'You shouldn’t have spent all your allowance on the first day.',
            tiles: ['You', 'shouldn’t have', 'spent', 'all your allowance', 'on the first day.'],
            all: ["\\bshouldn't have spent\\b", "\\ballowance\\b"], none: [],
            tip: 'A past mistake = shouldn’t + have + V3. What is the V3 of spend?',
            why: 'Criticism of a past action: shouldn’t have + V3 (spent).',
            tests: { pass: ['You shouldn’t have spent all your allowance on the first day.'], fail: ["You shouldn't spend all your allowance on the first day.", "You shouldn't have spend all your allowance on the first day."] } },
          { id: 'p1-1-5-5', source: 'I prefer to pay by card.', keyword: 'RATHER',
            model: 'I’d rather pay by card.',
            tiles: ['I’d rather', 'pay', 'by card.'],
            all: ["\\bwould rather pay\\b", "\\bcard\\b"], none: ["\\brather to\\b"],
            tip: 'Would rather (’d rather) + bare verb, no “to”.',
            why: 'Would rather (I’d rather) + bare verb = I prefer to.',
            tests: { pass: ['I’d rather pay by card.', 'I would rather pay by card'], fail: ['I’d rather to pay by card.', 'I rather pay by card.'] } }
        ]
      }
      ]
    },
    {
      code: '2',
      title: 'Speculation and deduction: now, the future and the past',
      sections: [
      {
        code: '1', title: 'Choose the best modal', type: 'mc',
        instructions: 'Choose the option that best matches the evidence and the level of certainty.',
        items: [
          { id: 'p1-2-1-1', focus: 'expected result (should)',
            stem: 'Ploy’s banking app shows 3,000 baht in her account, and the concert ticket costs 2,500 baht. She ______ be able to afford it.',
            options: ['can’t', 'might not', 'should', 'mustn’t'], answer: 2,
            why: 'Clue: she has more than the price, so we expect she can pay. Can’t and might not go against the evidence; mustn’t is a prohibition.' },
          { id: 'p1-2-1-2', focus: 'sure yes, now (must)',
            stem: 'Everyone coming into the mall is carrying a dripping umbrella. It ______ be raining outside.',
            options: ['must', 'should', 'can’t', 'needn’t'], answer: 0,
            why: 'Clue: dripping umbrellas are strong evidence, so must. Should is for what we expect from a plan or pattern, not for what the evidence proves.' },
          { id: 'p1-2-1-3', focus: 'sure yes, past (must have)',
            stem: 'This morning Mai had 500 baht. She went to the night market after school, and now her purse is empty and she is carrying three shopping bags. She ______ spent it all at the market.',
            options: ['can’t have', 'should', 'might', 'must have'], answer: 3,
            why: 'Past + strong evidence (empty purse, three bags) = must have + V3. Should and might need have before spent.' },
          { id: 'p1-2-1-4', focus: 'sure no, now (can’t)',
            stem: 'Fah’s message says she is already inside the concert hall, but I can see her standing at the bus stop across the road. She ______ be inside the hall yet.',
            options: ['must', 'can’t', 'mustn’t', 'should'], answer: 1,
            why: 'I can see her at the bus stop, so it is impossible that she is inside: can’t. Mustn’t is a prohibition, never a guess.' },
          { id: 'p1-2-1-5', focus: 'possible, past (might have)',
            stem: 'Jane’s receipt says she paid 1,200 baht, but she thought the price tag said 1,500 baht. The shop ______ given her a discount, or perhaps she read the tag wrong.',
            options: ['might have', 'must have', 'can’t have', 'should have'], answer: 0,
            why: 'Two possible reasons, so we are not sure: might have + V3. Must have is too sure; should have means a good idea she missed.' }
        ]
      },
      {
        code: '2', title: 'Same situation, different certainty', type: 'pick',
        instructions: 'Read the evidence carefully. Choose the statement that is best supported.',
        items: [
          { id: 'p1-2-2-1', context: 'Nok ordered a dress online two days ago. The shop’s website says delivery takes two to three days.', focus: 'should (expected)',
            options: ['It must arrive by tomorrow.', 'It should arrive by tomorrow.', 'It can’t arrive by tomorrow.'], answer: 1,
            why: 'The website gives a usual time, so we expect it: should. Must is too sure; can’t goes against the evidence.' },
          { id: 'p1-2-2-2', context: 'Praew’s card was refused at the till. Yesterday she spent all her savings on a new phone.', focus: 'must (strong evidence)',
            options: ['Her account might be almost empty.', 'Her account can’t be almost empty.', 'Her account must be almost empty.'], answer: 2,
            why: 'Two strong clues (card refused, all savings spent), so must. Might is too weak for evidence this strong.' },
          { id: 'p1-2-2-3', context: 'Mint says she bought the last concert T-shirt, but the shop still has twenty on the shelf.', focus: 'can’t have (past, sure no)',
            options: ['She can’t have bought the last one.', 'She must have bought the last one.', 'She should have bought the last one.'], answer: 0,
            why: 'Twenty are still on the shelf, so it is impossible: can’t have + V3.' },
          { id: 'p1-2-2-4', context: 'A new bubble tea shop opens next week. Nobody has tried it yet.', focus: 'might (no evidence)',
            options: ['It must be the best shop in Siam.', 'It might be popular.', 'It can’t be popular.'], answer: 1,
            why: 'No evidence either way, so only a possibility: might.' }
        ]
      },
      {
        code: '3', title: 'Present, future or past?', type: 'tag',
        choices: [['P', 'present'], ['F', 'future'], ['Pa', 'past']],
        instructions: 'For each sentence, choose P (present), F (future) or Pa (past). Then tap the words that helped you decide.',
        items: [
          { id: 'p1-2-3-1', sentence: 'Judging by the crowds in the shoe shop, shoppers must be snapping up the new trainers.', answer: 'P', clue: ['must be snapping', 'be snapping', 'snapping', 'judging by the crowds'],
            why: 'Must be + -ing = a guess about what is happening now.' },
          { id: 'p1-2-3-2', sentence: 'Mai can’t have lost her ticket. I saw it in her bag five minutes ago.', answer: 'Pa', clue: ['can’t have lost', 'have lost'],
            why: 'Can’t have + V3 = a guess about the past.' },
          { id: 'p1-2-3-3', sentence: 'With the sale starting on Saturday, prices could drop by 30%.', answer: 'F', clue: ['starting on saturday', 'on saturday', 'saturday'],
            why: 'The sale starts on Saturday, so the guess is about the future.' },
          { id: 'p1-2-3-4', sentence: 'There is a long queue at the cashpoint, so it must be working again.', answer: 'P', clue: ['must be working', 'be working', 'working', 'is a long queue'],
            why: 'There is a queue now; must be + -ing is about now.' },
          { id: 'p1-2-3-5', sentence: 'Ploy might have used her allowance to chip in for her mum’s present.', answer: 'Pa', clue: ['might have used', 'have used'],
            why: 'Might have + V3 = a guess about the past.' },
          { id: 'p1-2-3-6', sentence: 'If prices keep rising, Fah may have to tighten her belt next year.', answer: 'F', clue: ['next year', 'keep rising', 'if prices keep rising'],
            why: '“Next year” puts the guess in the future.' }
        ]
      },
      {
        code: '4', title: 'Make the deduction', type: 'deduce',
        instructions: 'Read the evidence. Write ONE logical conclusion using the modal given. Use information from the evidence, but do not copy it.',
        items: [
          { id: 'p1-2-4-1', modal: 'MUST HAVE',
            evidence: 'Kaew went to the mall with 2,000 baht to splash out on her birthday. She came home with only 200 baht and one new jacket, the only thing she bought.',
            model: 'The jacket must have cost about 1,800 baht.',
            tiles: ['The jacket', 'must have cost', 'about 1,800 baht.'],
            all: ["\\bmust have {V3}\\b"], none: ["\\bmust have {BASE}\\b"],
            tip: 'Must have + V3 for a past deduction (cost, spent, paid). What did the jacket cost?',
            why: 'She had 2,000 and has 200 left, so we can work out the jacket’s price: must have + V3.',
            tests: { pass: ['The jacket must have cost about 1,800 baht.', 'She must have spent 1800 baht on the jacket.', 'Kaew must have paid around 1,800 baht for her jacket'], fail: ['She must have spend 1800 baht.', 'The jacket must cost 1,800 baht.', 'She might have spent 1800 baht.'] } },
          { id: 'p1-2-4-2', modal: 'MIGHT',
            evidence: 'The music shop usually has a sale in December, but this year it hasn’t announced anything yet.',
            model: 'The music shop might announce a sale soon.',
            tiles: ['The music shop', 'might announce', 'a sale soon.'],
            all: ["\\bmight\\b", "\\b(sale|cheaper|discount|lower|prices?)\\b"], none: ["\\bmight to\\b", "\\bmight (has|having)\\b"],
            tip: 'Might + bare verb. No announcement yet, so you are not sure. Is there a sale this year?',
            why: 'It usually happens, but there is no announcement, so it is only possible: might + bare verb.',
            tests: { pass: ['The shop might have a sale this December.', 'Prices might be cheaper in December.', 'There might be a sale in December this year'], fail: ['The shop must have a sale.', 'The shop might has a sale.'] } },
          { id: 'p1-2-4-3', modal: 'CAN’T',
            evidence: 'Fern says her new headphones were a rip-off, but she paid only 300 baht. The same model costs 1,500 baht in every other shop.',
            model: 'The headphones can’t have been a rip-off.',
            tiles: ['The headphones', 'can’t have been', 'a rip-off.'],
            all: ["\\bcan't\\b", "\\b(rip.?off|expensive|overpriced|too much|ripped)\\b"], none: ["\\bcan't (has|to)\\b", "\\bcan't have {BASE}\\b"],
            tip: 'Can’t (+ have been) = sure it is not true. Was 300 baht too much?',
            why: '300 baht is much cheaper than everywhere else, so it is impossible that it was a rip-off: can’t (have been).',
            tests: { pass: ['The headphones can’t have been a rip-off.', "They can't be a rip-off.", "The shop can't have ripped her off."], fail: ['The headphones must have been a rip-off.', "They can't has been a rip-off."] } },
          { id: 'p1-2-4-4', modal: 'SHOULD',
            evidence: 'A shop approved Mai’s refund on Monday. Its website says refunds normally take two working days.',
            model: 'Her refund should arrive by Wednesday.',
            tiles: ['Her refund', 'should arrive', 'by Wednesday.'],
            all: ["\\bshould (arrive|be|come|reach|get|appear|go)\\b"], none: ["\\bshould to\\b", "\\bshould (arrives|arrived)\\b"],
            tip: 'Should + bare verb = what we expect. When will the money arrive?',
            why: 'The website gives the normal time, so we expect it: should + bare verb.',
            tests: { pass: ['Her refund should arrive by Wednesday.', 'The money should be in her account by Wednesday.', 'Mai should get her refund on Wednesday'], fail: ['Her refund should arrived by Wednesday.', 'Her refund must arrive by Wednesday.'] } },
          { id: 'p1-2-4-5', modal: 'COULD',
            evidence: 'Bam needs 1,500 baht for a concert ticket. She has saved 1,000 baht, and her grandmother usually gives her 500 baht on her birthday, which is next week.',
            model: 'Bam could buy the ticket after her birthday.',
            tiles: ['Bam', 'could buy', 'the ticket after her birthday.'],
            all: ["\\bcould \\w+"], none: ["\\bcould have {V3}\\b", "\\bcould have {BASE}\\b", "\\bcould to\\b", "\\bcould (bought|buys|affords)\\b"],
            tip: 'This is about the FUTURE: could + bare verb (could buy). Could have + V3 is only for the past.',
            why: 'A future possibility: could + bare verb. Could have + V3 would be about the past.',
            tests: { pass: ['Bam could buy the ticket after her birthday.', 'She could afford the ticket next week.', 'Bam could have enough money next week.'], fail: ['Bam could have buy the ticket next week.', 'Bam could have bought the ticket next week.', 'She could bought the ticket.'] } }
        ]
      },
      {
        code: '5', title: 'Who has the better reasoning?', type: 'reason',
        instructions: 'Two students reached different conclusions. Choose the student with the better reasoning and explain why their modal is more appropriate.',
        items: [
          { id: 'p1-2-5-1', situation: 'Last year the band’s concert sold out in ten minutes. This year the band is even more popular, and tickets go on sale tomorrow at 10 a.m.',
            a: 'The tickets will definitely sell out in ten minutes.', b: 'The tickets might sell out very quickly.', answer: 'B',
            model: 'Because we can’t be sure about the future; last year is only a clue.',
            tiles: ['Because', 'we can’t be sure', 'about the future;', 'last year', 'is only a clue.'],
            all: ["(not sure|n't sure|can't be sure|cannot be sure|don't know|doesn't know|no one knows|nobody knows|not certain|uncertain|no proof|only a (guess|clue)|future|guess|maybe|possib|predict|exactly|might)"], none: [],
            tip: 'Can anyone know the exact time something will sell out? How sure can we be about tomorrow?',
            why: 'Last year’s sell-out is a clue, not proof about tomorrow, and nobody can know it will be exactly ten minutes. Might fits the evidence.',
            tests: { pass: ["Because we can't be sure what will happen tomorrow.", 'because last year is only a clue, not proof'], fail: ['because the band is popular'] } },
          { id: 'p1-2-5-2', situation: 'Mum had 1,000 baht in her purse this morning. She went only to the supermarket, and now she has 350 baht and a supermarket receipt for 650 baht.',
            a: 'She must have spent the money at the supermarket.', b: 'She might have spent the money at the supermarket.', answer: 'A',
            model: 'Because the receipt shows exactly 650 baht, and she went nowhere else.',
            tiles: ['Because', 'the receipt shows', 'exactly 650 baht,', 'and she went', 'nowhere else.'],
            all: ["(receipt|650|exact|nowhere else|only (went|to)|no other|proof|evidence|matches|same amount|adds up)"], none: [],
            tip: 'Look at the numbers: 1,000 − 350 = ? Is there any other place she could have spent it?',
            why: 'The receipt matches the missing money exactly, and she went nowhere else. That is proof, so must have.',
            tests: { pass: ['Because the receipt shows exactly 650 baht and she went nowhere else.', 'the receipt is proof'], fail: ['because she likes shopping'] } },
          { id: 'p1-2-5-3', situation: 'An online shop says orders usually arrive within three days. Nok ordered a skirt on Monday.',
            a: 'It should arrive by Thursday.', b: 'It must arrive by Thursday.', answer: 'A',
            model: 'Because “usually” means we expect it, but it isn’t certain.',
            tiles: ['Because', '“usually”', 'means we expect it,', 'but it isn’t certain.'],
            all: ["(usual|normally|expect|not (sure|certain)|n't (sure|certain)|no proof|might be late|could be late|delay|late)"], none: [],
            tip: 'What does “usually” tell you? Is it proof, or what normally happens?',
            why: '“Usually” describes the normal pattern, so should (expected). Must would mean we are sure, and must here can also sound like a rule.',
            tests: { pass: ['Because it usually takes three days, so we expect it.', 'because it is not certain, it could be late'], fail: ['because she ordered it'] } },
          { id: 'p1-2-5-4', situation: 'Fah’s phone was at 100% when she left home. Now it is at 20%, and she has been watching videos on the BTS for two hours.',
            a: 'She can’t have used her phone much.', b: 'She must have used her phone a lot.', answer: 'B',
            model: 'Because the battery went from 100% to 20% while she watched videos.',
            tiles: ['Because', 'the battery', 'went from 100%', 'to 20%', 'while she watched videos.'],
            all: ["(battery|20|100|videos?|two hours|2 hours|went down|dropped|low)"], none: [],
            tip: 'What happened to the battery, and what was she doing?',
            why: 'Two strong clues (80% of the battery gone, two hours of videos) make must have the right choice.',
            tests: { pass: ['Because her battery dropped from 100% to 20%.', 'because she watched videos for 2 hours'], fail: ['because she likes her phone'] } },
          { id: 'p1-2-5-5', situation: 'A new café is giving away free drinks today. There is no queue outside at 9 a.m., but the café has only just opened.',
            a: 'The café might get busier later.', b: 'The café can’t be popular.', answer: 'A',
            model: 'Because it has only just opened, and more people might come later.',
            tiles: ['Because', 'it has only', 'just opened,', 'and more people', 'might come later.'],
            all: ["(just opened|only just|early|later|free|not sure|n't sure|too soon|no proof|still)"], none: [],
            tip: 'Is 9 a.m. on the first morning enough evidence to be sure?',
            why: 'It is early and the drinks are free, so there is no proof it is unpopular. Can’t is too sure; might fits.',
            tests: { pass: ['Because it has only just opened, so more people might come later.', "because it's still early"], fail: ['because there is no queue'] } }
        ]
      }
      ]
    }
    ]
  },

  /* =====================================================================
     MOCK 2 · A WEEKEND AT SIAM
     ===================================================================== */
  {
    id: 'prep2',
    name: 'Mock 2 · A weekend at Siam',
    blurb: 'Exams, shopping and pocket money at Siam. Two papers, 51 questions. New this time: have got to, used to, shall, will, ought to have and could have.',
    papers: [
    {
      code: '1',
      title: 'Obligation, no obligation, prohibition, advice and permission',
      sections: [
      {
        code: '1', title: 'Choose the best modal', type: 'mc',
        instructions: 'Choose the option that best fits the meaning.',
        items: [
          { id: 'p2-1-1-1', focus: 'no obligation (don’t need to)',
            stem: 'The school library card is free for all students, so you ______ pay anything to borrow books.',
            options: ['shouldn’t', 'mustn’t', 'can’t', 'don’t need to'], answer: 3,
            why: 'Clue: the card is free, so paying is not necessary. Mustn’t and can’t mean paying is forbidden; shouldn’t means it is a bad idea.' },
          { id: 'p2-1-1-2', focus: 'past prohibition (wasn’t allowed to)',
            stem: 'Last Saturday Pim ______ go to Siam with her friends. Her mum said no because she had an exam on Monday.',
            options: ['didn’t have to', 'wasn’t allowed to', 'mustn’t', 'needn’t have'], answer: 1,
            why: 'Her mum said no, so it was forbidden in the past: wasn’t allowed to. Mustn’t has no past; didn’t have to = not necessary.' },
          { id: 'p2-1-1-3', focus: 'strong advice with a warning (had better)',
            stem: 'Your credit card bill is overdue, and the bank adds a 300-baht fee every week. You ______ pay it today, or you’ll get into debt.',
            options: ['had better', 'are allowed to', 'don’t have to', 'used to'], answer: 0,
            why: 'A warning about one situation (“or you’ll get into debt”): had better.' },
          { id: 'p2-1-1-4', focus: 'obligation (have got to)',
            stem: 'My exams start tomorrow, so I ______ study tonight instead of watching K-dramas.',
            options: ['needn’t', 'don’t have to', 'have got to', 'mustn’t'], answer: 2,
            why: 'Exams tomorrow make studying necessary: have got to (= have to). The other three say it is not necessary or forbidden.' },
          { id: 'p2-1-1-5', focus: 'offer (Shall I…?)',
            stem: '“______ I carry some of your shopping bags? You look tired.”',
            options: ['Have', 'Would', 'Must', 'Shall'], answer: 3,
            why: 'Shall I…? is an offer to help. Must I…? asks if it is necessary; Have and Would do not work here.' }
        ]
      },
      {
        code: '2', title: 'Same form, different meaning', type: 'pick',
        instructions: 'Read each pair. Decide which sentence expresses the meaning given.',
        items: [
          { id: 'p2-1-2-1', label: 'NO OBLIGATION', focus: 'don’t have to vs mustn’t',
            options: ['Students don’t have to wear a jacket in class.', 'Students mustn’t wear a jacket in class.'], answer: 0,
            why: 'Don’t have to = it is your choice (ไม่ต้อง). Mustn’t = forbidden (ต้องไม่).' },
          { id: 'p2-1-2-2', label: 'STRONG ADVICE WITH A WARNING', focus: 'had better vs could',
            options: ['You could charge your phone now. It’s at 2%.', 'You’d better charge your phone now. It’s at 2%.'], answer: 1,
            why: 'Had better is strong advice for one situation, with trouble if you don’t. Could is only a gentle suggestion.' },
          { id: 'p2-1-2-3', label: 'PAST: A GOOD IDEA THAT DIDN’T HAPPEN', focus: 'should have vs had to',
            options: ['You had to set aside some money last month.', 'You should have set aside some money last month.'], answer: 1,
            why: 'Should have + V3 = it was a good idea, but you didn’t. Had to = it was necessary.' },
          { id: 'p2-1-2-4', label: 'FUTURE OBLIGATION', focus: 'will have to vs had to',
            options: ['I’ll have to pay my sister back next week.', 'I won’t have to pay my sister back next week.'], answer: 0,
            why: 'Will have to = future obligation (must has no future form). Won’t have to = it will not be necessary.' }
        ]
      },
      {
        code: '3', title: 'Identify the meaning', type: 'tag',
        choices: [['O', 'obligation'], ['P', 'prohibition'], ['A', 'advice'], ['N', 'no obligation']],
        instructions: 'For each sentence, choose O, P, A or N. Then tap the words that helped you decide.',
        items: [
          { id: 'p2-1-3-1', sentence: 'Customers need to keep the receipt if they want a refund.', answer: 'O', clue: ['need to'],
            why: 'Need to = it is necessary.' },
          { id: 'p2-1-3-2', sentence: 'You don’t have to tip taxi drivers in Thailand.', answer: 'N', clue: ['don’t have to'],
            why: 'Don’t have to = not necessary; it is your choice.' },
          { id: 'p2-1-3-3', sentence: 'Students can’t bring food into the exam hall.', answer: 'P', clue: ['can’t'],
            why: 'Can’t here = not allowed.' },
          { id: 'p2-1-3-4', sentence: 'You should cut down on bubble tea if you want to save money.', answer: 'A', clue: ['should'],
            why: 'Should = a good idea.' },
          { id: 'p2-1-3-5', sentence: 'We weren’t allowed to leave the hall until eleven o’clock.', answer: 'P', clue: ['weren’t allowed to'],
            why: 'Weren’t allowed to = it was forbidden (past).' },
          { id: 'p2-1-3-6', sentence: 'I didn’t need to pay for the bus because my friend’s dad drove us.', answer: 'N', clue: ['didn’t need to'],
            why: 'Didn’t need to = it was not necessary (past).' }
        ]
      },
      {
        code: '4', title: 'Correct or incorrect?', type: 'fix',
        instructions: 'Some sentences are correct. Some contain one modal error. Correct only the incorrect ones.',
        items: [
          { id: 'p2-1-4-1', sentence: 'You don’t have to share your PIN with anyone. It is against the bank’s rules.', ok: false,
            model: 'You mustn’t share your PIN with anyone. It is against the bank’s rules.',
            tiles: ['You', 'mustn’t share', 'your PIN', 'with anyone.', 'It is against', 'the bank’s rules.'],
            all: ["\\b(mustn't|can't|shouldn't|aren't allowed to|are not allowed to|must never|should never)\\b"], none: ["\\bdon't have to\\b"],
            tip: 'Is sharing your PIN just not necessary, or is it forbidden?',
            why: '“Against the rules” means sharing your PIN is forbidden, not just unnecessary: mustn’t (ต้องไม่).',
            tests: { pass: ["mustn't", "You mustn't share your PIN with anyone. It is against the bank's rules.", "can't share"], fail: ["don't need to", "needn't"] } },
          { id: 'p2-1-4-2', sentence: 'Ploy needn’t have bought a calculator. The school lends them to students for free.', ok: true,
            why: 'Correct: she bought one (needn’t have + V3), but it was not necessary.' },
          { id: 'p2-1-4-3', sentence: 'We didn’t allowed to use calculators in the maths test.', ok: false,
            model: 'We weren’t allowed to use calculators in the maths test.',
            tiles: ['We', 'weren’t allowed', 'to use calculators', 'in the maths test.'],
            all: ["\\b(weren't allowed|were not allowed|couldn't use|could not use)\\b"], none: ["\\bdidn't allowed\\b", "\\bwasn't allowed\\b"],
            tip: 'NOT goes on the first helper. For allowed, the helper is be (was/were).',
            why: 'Allowed uses be, not do: weren’t allowed to (or couldn’t).',
            tests: { pass: ["weren't allowed", 'We were not allowed to use calculators in the maths test.', "couldn't use"], fail: ["didn't allow", "wasn't allowed"] } },
          { id: 'p2-1-4-4', sentence: 'You should to compare prices before you buy a new laptop.', ok: false,
            model: 'You should compare prices before you buy a new laptop.',
            tiles: ['You', 'should compare', 'prices', 'before you buy', 'a new laptop.'],
            all: ["\\bshould compare\\b|^\\s*should\\s*$|^\\s*compare\\s*$|\\bought to compare\\b"], none: ["\\bshould to\\b"],
            tip: 'Should + bare verb. Which word is extra?',
            why: 'Should is followed by a bare verb: should compare (or ought to compare).',
            tests: { pass: ['should compare', 'You should compare prices before you buy a new laptop.', 'ought to compare'], fail: ['should to compare', 'should compared'] } },
          { id: 'p2-1-4-5', sentence: 'You ought to have told me you had run out of money.', ok: true,
            why: 'Correct: ought to have + V3 = it was a good idea, but you didn’t do it.' },
          { id: 'p2-1-4-6', sentence: 'You’d better not go over your budget again this month.', ok: true,
            why: 'Correct: had better not + bare verb = strong advice not to do something.' }
        ]
      },
      {
        code: '5', title: 'Rewrite without changing the meaning', type: 'rewrite',
        instructions: 'Rewrite each sentence using the word given. Keep the meaning the same.',
        items: [
          { id: 'p2-1-5-1', source: 'It is necessary to show your student card to get the discount.', keyword: 'GOT',
            model: 'You’ve got to show your student card to get the discount.',
            tiles: ['You’ve got to', 'show your student card', 'to get', 'the discount.'],
            all: ["\\b(have|has) got to show\\b", "\\bdiscount\\b"], none: [],
            tip: 'Have got to = have to. Start with “You’ve got to…”.',
            why: 'Have got to + bare verb = it is necessary.',
            tests: { pass: ['You’ve got to show your student card to get the discount.', 'You have got to show your student card to get the discount'], fail: ['You got to show your student card.', 'You must show your student card to get the discount.'] } },
          { id: 'p2-1-5-2', source: 'Wearing a uniform on Saturdays isn’t necessary.', keyword: 'NEED',
            model: 'You don’t need to wear a uniform on Saturdays.',
            tiles: ['You', 'don’t need to', 'wear a uniform', 'on Saturdays.'],
            all: ["\\b(don't need to|needn't|doesn't need to) wear\\b", "\\bsaturday"], none: [],
            tip: 'Not necessary = don’t need to + verb (or needn’t + verb).',
            why: 'No obligation: don’t need to / needn’t + bare verb.',
            tests: { pass: ['You don’t need to wear a uniform on Saturdays.', "You needn't wear a uniform on Saturdays.", "Students don't need to wear a uniform on Saturdays"], fail: ["You mustn't wear a uniform on Saturdays.", "You don't need wear a uniform on Saturdays."] } },
          { id: 'p2-1-5-3', source: 'Mai wasn’t permitted to use her phone during the test.', keyword: 'COULDN’T',
            model: 'Mai couldn’t use her phone during the test.',
            tiles: ['Mai', 'couldn’t use', 'her phone', 'during the test.'],
            all: ["\\bcouldn't use\\b", "\\bphone\\b"], none: [],
            tip: 'Couldn’t + bare verb can mean “was not allowed to” in the past.',
            why: 'Past prohibition: couldn’t + bare verb = wasn’t allowed to.',
            tests: { pass: ['Mai couldn’t use her phone during the test.', "She couldn't use her phone during the test"], fail: ["Mai couldn't used her phone during the test.", "Mai couldn't to use her phone."] } },
          { id: 'p2-1-5-4', source: 'It was a mistake not to keep the receipt.', keyword: 'SHOULD',
            model: 'I should have kept the receipt.',
            tiles: ['I', 'should have', 'kept', 'the receipt.'],
            all: ["\\bshould have kept\\b", "\\breceipt\\b"], none: [],
            tip: 'A past mistake: should + have + V3. What is the V3 of keep?',
            why: 'Regret about the past: should have + V3 (kept). You / she / we should have kept are also fine.',
            tests: { pass: ['I should have kept the receipt.', 'You should have kept the receipt'], fail: ['I should keep the receipt.', 'I should have keep the receipt.', 'I should had kept the receipt.'] } },
          { id: 'p2-1-5-5', source: 'When I was younger, I spent all my pocket money on stickers. I don’t now.', keyword: 'USED',
            model: 'I used to spend all my pocket money on stickers.',
            tiles: ['I', 'used to spend', 'all my pocket money', 'on stickers.'],
            all: ["\\bused to spend\\b", "\\bsticker"], none: [],
            tip: 'A past habit that has stopped: used to + bare verb.',
            why: 'Used to + bare verb = a past habit that is now finished.',
            tests: { pass: ['I used to spend all my pocket money on stickers.', 'When I was younger, I used to spend all my pocket money on stickers.'], fail: ['I used to spent all my pocket money on stickers.', 'I use to spending my money on stickers.'] } }
        ]
      }
      ]
    },
    {
      code: '2',
      title: 'Speculation and deduction: now, the future and the past',
      sections: [
      {
        code: '1', title: 'Choose the best modal', type: 'mc',
        instructions: 'Choose the option that best matches the evidence and the level of certainty.',
        items: [
          { id: 'p2-2-1-1', focus: 'sure no, now (can’t)',
            stem: 'Pim gets 3,000 baht a month. This month she has already spent a fortune: 2,800 baht on concert tickets, a new dress and dinner. She ______ have much money left.',
            options: ['mustn’t', 'should', 'must', 'can’t'], answer: 3,
            why: 'Only 200 baht is left, so it is impossible that she has much: can’t. Mustn’t is a prohibition, never a guess.' },
          { id: 'p2-2-1-2', focus: 'possible, now (might)',
            stem: 'I have called Ploy three times in the last five minutes, but she isn’t answering. She ______ be in the shower.',
            options: ['might', 'must', 'mustn’t', 'can’t'], answer: 0,
            why: 'There are many possible reasons, so it is only a possibility: might. There is no strong clue for must or can’t.' },
          { id: 'p2-2-1-3', focus: 'sure no, past (can’t have)',
            stem: 'Fah says she saved 5,000 baht last month, but her allowance is only 3,000 baht a month and she has no other money. She ______ saved that much.',
            options: ['must have', 'can’t have', 'mustn’t have', 'should have'], answer: 1,
            why: 'She cannot save more than she gets, so it is impossible: can’t have + V3. Mustn’t have is not used for guesses.' },
          { id: 'p2-2-1-4', focus: 'possibly not (might not)',
            stem: 'The cashpoint at the station is often empty by Friday evening. It’s Friday evening now, so it ______ have any cash left.',
            options: ['mustn’t', 'can’t', 'might not', 'needn’t'], answer: 2,
            why: '“Often” is not “always”, so possibly not: might not. Can’t is too sure; mustn’t and needn’t are about rules.' },
          { id: 'p2-2-1-5', focus: 'future prediction (won’t)',
            stem: 'The weather app says heavy rain is almost certain this afternoon. The outdoor market ______ be very busy.',
            options: ['mustn’t', 'won’t', 'needn’t', 'shouldn’t have'], answer: 1,
            why: 'A prediction about the future from strong evidence: won’t + bare verb. The others are rules or a past form.' }
        ]
      },
      {
        code: '2', title: 'Same situation, different certainty', type: 'pick',
        instructions: 'Read the evidence carefully. Choose the statement that is best supported.',
        items: [
          { id: 'p2-2-2-1', context: 'Praew’s bag is on her desk, but she isn’t in the classroom. It’s lunchtime.', focus: 'might (possible)',
            options: ['She must have gone home.', 'She can’t be at school.', 'She might be in the canteen.'], answer: 2,
            why: 'Her bag is here, so she is probably still at school; the canteen is a possibility at lunchtime: might.' },
          { id: 'p2-2-2-2', context: 'A phone case costs 350 baht in every shop at the mall. Nok saw the same case at a market stall for 900 baht.', focus: 'must (strong evidence)',
            options: ['The market price must be a rip-off.', 'The market price might be a bargain.', 'The market price can’t be expensive.'], answer: 0,
            why: '900 is far more than 350 everywhere else: strong evidence, so must.' },
          { id: 'p2-2-2-3', context: 'Mai’s mum sends her allowance on the 1st of every month. Today is the 2nd, and Mai’s banking app shows a 2,000-baht payment from her mum yesterday.', focus: 'must have (past, sure)',
            options: ['Her allowance can’t have arrived.', 'Her allowance might have arrived.', 'Her allowance must have arrived.'], answer: 2,
            why: 'The app shows the payment, so we are sure: must have + V3.' },
          { id: 'p2-2-2-4', context: 'Fern has an interview for a summer job next week. She has prepared well, but 40 people have applied for two jobs.', focus: 'might (future possibility)',
            options: ['She will definitely get the job.', 'She might get the job.', 'She can’t get the job.'], answer: 1,
            why: 'Good preparation helps, but with 40 people we cannot be sure either way: might.' }
        ]
      },
      {
        code: '3', title: 'Present, future or past?', type: 'tag',
        choices: [['P', 'present'], ['F', 'future'], ['Pa', 'past']],
        instructions: 'For each sentence, choose P (present), F (future) or Pa (past). Then tap the words that helped you decide.',
        items: [
          { id: 'p2-2-3-1', sentence: 'Look at that queue! The shop next door must be having a sale.', answer: 'P', clue: ['must be having', 'be having', 'having', 'look at that queue'],
            why: 'Must be + -ing = a guess about what is happening now.' },
          { id: 'p2-2-3-2', sentence: 'The price of concert tickets could go up again next year.', answer: 'F', clue: ['next year'],
            why: '“Next year” = the future.' },
          { id: 'p2-2-3-3', sentence: 'Ploy may have left her purse in the taxi this morning.', answer: 'Pa', clue: ['may have left', 'have left', 'this morning'],
            why: 'May have + V3 = a guess about the past.' },
          { id: 'p2-2-3-4', sentence: 'That can’t be Mai’s new phone. Hers is pink.', answer: 'P', clue: ['can’t be', 'is pink', 'hers is pink'],
            why: 'Can’t be + adjective or noun = a guess about now.' },
          { id: 'p2-2-3-5', sentence: 'They must have sold all the cheap tickets already.', answer: 'Pa', clue: ['must have sold', 'have sold', 'already'],
            why: 'Must have + V3 = a guess about the past.' },
          { id: 'p2-2-3-6', sentence: 'Jane should get her refund by the end of the week.', answer: 'F', clue: ['by the end of the week', 'end of the week'],
            why: '“By the end of the week” = the future; should = expected.' }
        ]
      },
      {
        code: '4', title: 'Make the deduction', type: 'deduce',
        instructions: 'Read the evidence. Write ONE logical conclusion using the modal given. Use information from the evidence, but do not copy it.',
        items: [
          { id: 'p2-2-4-1', modal: 'MIGHT NOT',
            evidence: 'Bam’s bank says transfers made at the weekend can take until Monday. She sent her sister 500 baht on Saturday morning.',
            model: 'Her sister might not get the money until Monday.',
            tiles: ['Her sister', 'might not get', 'the money', 'until Monday.'],
            all: ["\\bmight not\\b"], none: ["\\bmight not to\\b", "\\bmight not (gets|got|arrives|arrived)\\b"],
            tip: 'Might not + bare verb. Will the money arrive at the weekend?',
            why: 'Transfers CAN take until Monday, so it is possible that the money is late: might not + bare verb.',
            tests: { pass: ['Her sister might not get the money until Monday.', 'The money might not arrive before Monday.'], fail: ['The money might not arrived until Monday.', 'Her sister must not get the money.'] } },
          { id: 'p2-2-4-2', modal: 'MUST',
            evidence: 'Kaew’s piggy bank is so heavy that she can hardly lift it, and she hasn’t bought anything for months.',
            model: 'There must be a lot of money in her piggy bank.',
            tiles: ['There', 'must be', 'a lot of money', 'in her piggy bank.'],
            all: ["\\bmust (be|have)\\b", "\\b(money|saved|savings|coins|lot|full|rich)\\b"], none: ["\\bmust to\\b", "\\bmust have {BASE}\\b"],
            tip: 'Must + bare verb (or must have + V3). Why is it heavy?',
            why: 'A heavy piggy bank and no spending are strong clues: must be (or must have saved).',
            tests: { pass: ['There must be a lot of money in her piggy bank.', 'She must have saved a lot of money.', 'Her piggy bank must be full of coins.'], fail: ['She must have save a lot of money.', 'She might have saved some money.'] } },
          { id: 'p2-2-4-3', modal: 'CAN’T HAVE',
            evidence: 'Fah says she bought her trainers in the sale, but the sale ended last Sunday and the receipt is dated yesterday, Wednesday.',
            model: 'She can’t have bought them in the sale.',
            tiles: ['She', 'can’t have bought', 'them', 'in the sale.'],
            all: ["\\bcan't have {V3}\\b"], none: ["\\bcan't have {BASE}\\b", "\\bmustn't\\b"],
            tip: 'Can’t have + V3 = impossible in the past. What is the V3 of buy?',
            why: 'The sale had ended before the date on the receipt, so it is impossible: can’t have + V3.',
            tests: { pass: ['She can’t have bought her trainers in the sale.', "Fah can't have got the sale price."], fail: ["She can't have buy her trainers in the sale.", "She mustn't have bought them in the sale."] } },
          { id: 'p2-2-4-4', modal: 'SHOULD',
            evidence: 'A new phone model goes on sale on Friday. Online shops usually lower their prices about a month after a new model comes out.',
            model: 'The new phone should be cheaper in about a month.',
            tiles: ['The new phone', 'should be', 'cheaper', 'in about a month.'],
            all: ["\\bshould (go|drop|fall|be|come|get|become|lower|reduce|cut|cost)\\b", "\\b(down|drop|fall|lower|cheaper|less|decrease|reduce|cut)"], none: ["\\bshould to\\b"],
            tip: 'Should + bare verb = what we expect from the usual pattern. What happens to prices?',
            why: '“Usually” gives the normal pattern, so we expect it: should + bare verb.',
            tests: { pass: ['The new phone should be cheaper in about a month.', 'Online shops should lower the price next month.', 'The price should go down about a month after Friday.', 'The phone should be cheaper next month.', 'Prices should drop in about a month'], fail: ['The price must go down next month.', 'The price should to drop.'] } },
          { id: 'p2-2-4-5', modal: 'COULD HAVE',
            evidence: 'Nok can’t find her library card. This morning she used it at the library, then she went to the canteen and the gym.',
            model: 'She could have left it in the canteen.',
            tiles: ['She', 'could have left', 'it', 'in the canteen.'],
            all: ["\\bcould have {V3}\\b"], none: ["\\bcould have {BASE}\\b"],
            tip: 'A guess about the PAST: could have + V3. Where might the card be?',
            why: 'She went to three places, so each is possible: could have + V3 (left, dropped).',
            tests: { pass: ['She could have left it in the canteen.', 'She could have dropped her card at the gym.'], fail: ['She could have leave it in the canteen.', 'She could leave it at the gym.'] } }
        ]
      },
      {
        code: '5', title: 'Who has the better reasoning?', type: 'reason',
        instructions: 'Two students reached different conclusions. Choose the student with the better reasoning and explain why their modal is more appropriate.',
        items: [
          { id: 'p2-2-5-1', situation: 'Ploy’s laptop is two months old and has suddenly stopped working. The shop says repairs are free for the first year.',
            a: 'She shouldn’t have to pay for the repair.', b: 'She might have to pay a lot for the repair.', answer: 'A',
            model: 'Because repairs are free in the first year, and the laptop is only two months old.',
            tiles: ['Because', 'repairs are free', 'in the first year,', 'and the laptop is', 'only two months old.'],
            all: ["(free|first year|two months|2 months|new|warranty|guarantee)"], none: [],
            tip: 'How old is the laptop, and what does the shop say?',
            why: 'The rule says repairs are free, so we expect no cost: shouldn’t have to (expectation + have to).',
            tests: { pass: ['because the repair is free for the first year', 'because the laptop is only 2 months old'], fail: ['because laptops are expensive'] } },
          { id: 'p2-2-5-2', situation: 'Mai’s friend said the new bubble tea shop is good value for money. Mai hasn’t seen its menu yet.',
            a: 'The drinks must be cheap.', b: 'The drinks could be cheap.', answer: 'B',
            model: 'Because she hasn’t seen the prices yet; it is only her friend’s opinion.',
            tiles: ['Because', 'she hasn’t seen', 'the prices yet;', 'it is only', 'her friend’s opinion.'],
            all: ["(menu|prices?|seen|opinion|friend|not sure|n't sure|no proof|don't know|doesn't know|value)"], none: [],
            tip: 'Has Mai seen any prices? Is a friend’s opinion proof?',
            why: 'One opinion and no prices are weak evidence. Also, good value is not the same as cheap. Could fits.',
            tests: { pass: ["because she hasn't seen the menu", "because it's only her friend's opinion"], fail: ['because bubble tea is popular'] } },
          { id: 'p2-2-5-3', situation: 'Nok always cycles home after school. Her bike isn’t in the bike shed, and her helmet isn’t on its hook.',
            a: 'She must have gone home.', b: 'She might have gone home.', answer: 'A',
            model: 'Because her bike and her helmet are both gone, and she always cycles home.',
            tiles: ['Because', 'her bike', 'and her helmet', 'are both gone,', 'and she always', 'cycles home.'],
            all: ["(bike|helmet|always|both|gone|missing)"], none: [],
            tip: 'How many clues are there, and what does “always” tell you?',
            why: 'Three clues together (bike gone, helmet gone, always cycles home) are strong evidence: must have.',
            tests: { pass: ['because her bike and helmet are gone', 'because she always cycles home'], fail: ['because school has finished'] } },
          { id: 'p2-2-5-4', situation: 'The weather app says it will be sunny all weekend. Fern is planning a picnic on Saturday.',
            a: 'It must be a good day for a picnic.', b: 'It should be a good day for a picnic.', answer: 'B',
            model: 'Because a weather forecast tells us what to expect, but it can be wrong.',
            tiles: ['Because', 'a weather forecast', 'tells us', 'what to expect,', 'but it can be wrong.'],
            all: ["(forecast|app|expect|can be wrong|could be wrong|might be wrong|not (sure|certain)|n't (sure|certain)|change|future)"], none: [],
            tip: 'Is a forecast proof, or what we expect?',
            why: 'A forecast is an expectation, not proof: should. Must would mean we are sure about Saturday.',
            tests: { pass: ['because the forecast can be wrong', 'because we only expect it from the weather app'], fail: ['because picnics are fun'] } },
          { id: 'p2-2-5-5', situation: 'Pim’s piggy bank had 1,000 baht in it. Now it has 400 baht. Pim doesn’t remember taking any money out, but she bought a 600-baht jacket last week.',
            a: 'She can’t have used the money for the jacket.', b: 'She might have used the money for the jacket.', answer: 'B',
            model: 'Because the jacket cost exactly the amount that is missing.',
            tiles: ['Because', 'the jacket', 'cost', 'exactly the amount', 'that is missing.'],
            all: ["(600|same|remember|missing|match|possible|equal|exact|amount)"], none: [],
            tip: 'Compare the missing money with the jacket’s price. Is it impossible?',
            why: 'The missing 600 baht matches the jacket, so it is clearly possible. Can’t says it is impossible, which the evidence does not support.',
            tests: { pass: ['because the jacket cost 600 baht and 600 baht is missing', "because she doesn't remember but the money matches"], fail: ['because she likes jackets'] } }
        ]
      }
      ]
    }
    ]
  },

  /* =====================================================================
     MOCK 3 · ONLINE SHOPPING AND A SCHOOL TRIP
     ===================================================================== */
  {
    id: 'prep3',
    name: 'Mock 3 · Online orders and a school trip',
    blurb: 'Parcels, refunds and a museum trip. Two papers, 51 questions. New this time: may (permission and possibility), would, needn’t, couldn’t and will.',
    papers: [
    {
      code: '1',
      title: 'Obligation, no obligation, prohibition, advice and permission',
      sections: [
      {
        code: '1', title: 'Choose the best modal', type: 'mc',
        instructions: 'Choose the option that best fits the meaning.',
        items: [
          { id: 'p3-1-1-1', focus: 'no obligation (don’t need to)',
            stem: 'Entry to the museum is free on Sundays, so you ______ buy a ticket.',
            options: ['aren’t allowed to', 'can’t', 'ought to', 'don’t need to'], answer: 3,
            why: 'Clue: entry is free, so a ticket is not necessary. Aren’t allowed to and can’t mean it is forbidden.' },
          { id: 'p3-1-1-2', focus: 'past regret (should have)',
            stem: 'The shop wouldn’t give me a refund because I had lost my receipt. I ______ kept it.',
            options: ['should have', 'must have', 'had to', 'needn’t have'], answer: 0,
            why: 'Keeping it was a good idea that I didn’t follow: should have + V3. Must have is a guess; had to needs a bare verb.' },
          { id: 'p3-1-1-3', focus: 'prohibition (mustn’t)',
            stem: 'You ______ reply to emails that ask for your bank password. Banks never ask for it.',
            options: ['don’t have to', 'mustn’t', 'needn’t', 'ought to'], answer: 1,
            why: 'It is dangerous, so it is forbidden: mustn’t. Don’t have to and needn’t only say it is not necessary.' },
          { id: 'p3-1-1-4', focus: 'past obligation (had to)',
            stem: 'When my sister was at university, she ______ work at a café at weekends to get by.',
            options: ['must', 'should', 'had to', 'needn’t'], answer: 2,
            why: 'Necessary in the past (to get by = to have just enough money): had to. Must has no past form.' },
          { id: 'p3-1-1-5', focus: 'polite request (Would you…?)',
            stem: '“Excuse me, ______ you tell me where the nearest cashpoint is?”',
            options: ['must', 'shall', 'should', 'would'], answer: 3,
            why: 'Would you…? (or Could you…?) is a polite request. Shall is for offers with I / we.' }
        ]
      },
      {
        code: '2', title: 'Same form, different meaning', type: 'pick',
        instructions: 'Read each pair. Decide which sentence expresses the meaning given.',
        items: [
          { id: 'p3-1-2-1', label: 'A RULE (OBLIGATION)', focus: 'must vs should',
            options: ['All passengers must wear a seatbelt.', 'All passengers should wear a seatbelt.'], answer: 0,
            why: 'Must = a rule; there is no choice. Should = advice.' },
          { id: 'p3-1-2-2', label: 'NO OBLIGATION', focus: 'needn’t vs mustn’t',
            options: ['You mustn’t bring a packed lunch.', 'You needn’t bring a packed lunch.'], answer: 1,
            why: 'Needn’t = not necessary. Mustn’t = forbidden.' },
          { id: 'p3-1-2-3', label: 'PAST: IT WAS NECESSARY', focus: 'had to vs should have',
            options: ['We should have waited an hour for the bus.', 'We had to wait an hour for the bus.'], answer: 1,
            why: 'Had to = necessary in the past. Should have + V3 = a good idea that we didn’t follow.' },
          { id: 'p3-1-2-4', label: 'PERMISSION', focus: 'may vs must',
            options: ['You may use a dictionary in this test.', 'You must use a dictionary in this test.'], answer: 0,
            why: 'May = you are allowed to (formal). Must = it is necessary.' }
        ]
      },
      {
        code: '3', title: 'Identify the meaning', type: 'tag',
        choices: [['O', 'obligation'], ['P', 'prohibition'], ['A', 'advice'], ['N', 'no obligation']],
        instructions: 'For each sentence, choose O, P, A or N. Then tap the words that helped you decide.',
        items: [
          { id: 'p3-1-3-1', sentence: 'You’ve got to be 18 to get a credit card in the UK.', answer: 'O', clue: ['’ve got to', 'got to'],
            why: 'Have got to = have to: it is necessary.' },
          { id: 'p3-1-3-2', sentence: 'Students mustn’t leave the group during the trip.', answer: 'P', clue: ['mustn’t'],
            why: 'Mustn’t = forbidden.' },
          { id: 'p3-1-3-3', sentence: 'You needn’t bring cash. The museum café accepts cards.', answer: 'N', clue: ['needn’t'],
            why: 'Needn’t = not necessary.' },
          { id: 'p3-1-3-4', sentence: 'You’d better book your ticket early. It might sell out.', answer: 'A', clue: ['’d better'],
            why: 'Had better = strong advice with a warning (it might sell out).' },
          { id: 'p3-1-3-5', sentence: 'We had to pay a 50-baht fee to use the lockers.', answer: 'O', clue: ['had to'],
            why: 'Had to = it was necessary (past).' },
          { id: 'p3-1-3-6', sentence: 'We didn’t have to queue because we had booked online.', answer: 'N', clue: ['didn’t have to'],
            why: 'Didn’t have to = it was not necessary (past).' }
        ]
      },
      {
        code: '4', title: 'Correct or incorrect?', type: 'fix',
        instructions: 'Some sentences are correct. Some contain one modal error. Correct only the incorrect ones.',
        items: [
          { id: 'p3-1-4-1', sentence: 'Students mustn’t bring their passports. A student card is enough.', ok: false,
            model: 'Students don’t have to bring their passports. A student card is enough.',
            tiles: ['Students', 'don’t have to', 'bring', 'their passports.', 'A student card', 'is enough.'],
            all: ["\\b(don't have to|don't need to|needn't|do not have to)\\b"], none: ["\\bmustn't\\b"],
            tip: 'A student card is enough. So is a passport forbidden, or just not necessary?',
            why: 'A passport is not necessary, not forbidden: don’t have to / needn’t.',
            tests: { pass: ["don't have to", "needn't", "Students don't need to bring their passports."], fail: ["mustn't", "can't"] } },
          { id: 'p3-1-4-2', sentence: 'Buying snacks every day is throwing money down the drain. You ought to save some of your allowance.', ok: true,
            why: 'Correct: ought to + bare verb = advice.' },
          { id: 'p3-1-4-3', sentence: 'I should have checked my bank balance before I went shopping. I ran out of money.', ok: true,
            why: 'Correct: should have + V3 = a good idea I didn’t follow.' },
          { id: 'p3-1-4-4', sentence: 'Last year we must pay for the trip ourselves.', ok: false,
            model: 'Last year we had to pay for the trip ourselves.',
            tiles: ['Last year we', 'had to', 'pay for the trip', 'ourselves.'],
            all: ["\\b(had to|needed to)\\b"], none: ["\\bmust\\b"],
            tip: 'Must has no past form. Swap the word for “last year”.',
            why: 'Must has no past. Past obligation = had to.',
            tests: { pass: ['had to', 'Last year we had to pay for the trip ourselves.'], fail: ['must have paid', 'should pay'] } },
          { id: 'p3-1-4-5', sentence: 'You don’t have to pay for delivery if your order comes to more than 500 baht.', ok: true,
            why: 'Correct: don’t have to = not necessary (delivery is free over 500 baht).' },
          { id: 'p3-1-4-6', sentence: 'I’d rather to pay by card than carry a lot of cash.', ok: false,
            model: 'I’d rather pay by card than carry a lot of cash.',
            tiles: ['I’d rather', 'pay by card', 'than carry', 'a lot of cash.'],
            all: ["\\bwould rather pay\\b|^\\s*(would rather|rather)\\s*$|^\\s*pay\\s*$|\\brather pay\\b"], none: ["\\brather to\\b"],
            tip: 'Would rather + bare verb. Which word is extra?',
            why: 'Would rather is followed by a bare verb: I’d rather pay, not I’d rather to pay.',
            tests: { pass: ["I'd rather pay by card than carry a lot of cash.", 'rather pay'], fail: ["I'd rather to pay", "I'd prefer pay"] } }
        ]
      },
      {
        code: '5', title: 'Rewrite without changing the meaning', type: 'rewrite',
        instructions: 'Rewrite each sentence using the word given. Keep the meaning the same.',
        items: [
          { id: 'p3-1-5-1', source: 'It is necessary for us to be at the station by 7 a.m.', keyword: 'MUST',
            model: 'We must be at the station by 7 a.m.',
            tiles: ['We', 'must be', 'at the station by 7 a.m.'],
            all: ["\\bmust be\\b", "\\bstation\\b"], none: ["\\bmust to\\b"],
            tip: 'Must + bare verb (be). Start with “We”.',
            why: 'Obligation: must + bare verb.',
            tests: { pass: ['We must be at the station by 7 a.m.', 'we must be at the station by 7am'], fail: ['We must to be at the station by 7 a.m.', 'We must being at the station.'] } },
          { id: 'p3-1-5-2', source: 'It wasn’t necessary for me to buy a new uniform, so I didn’t buy one.', keyword: 'DIDN’T',
            model: 'I didn’t have to buy a new uniform.',
            tiles: ['I', 'didn’t have to', 'buy', 'a new uniform.'],
            all: ["\\bdidn't (have|need) to buy\\b", "\\buniform\\b"], none: [],
            tip: 'Not necessary, and you didn’t do it: didn’t have to / didn’t need to + verb.',
            why: 'Not necessary, and I didn’t buy it: didn’t have to (or didn’t need to) + bare verb.',
            tests: { pass: ['I didn’t have to buy a new uniform.', "I didn't need to buy a new uniform"], fail: ["I didn't have to bought a new uniform.", "I didn't buy a new uniform."] } },
          { id: 'p3-1-5-3', source: 'Taking food into the museum is not allowed.', keyword: 'CAN’T',
            model: 'You can’t take food into the museum.',
            tiles: ['You', 'can’t take', 'food', 'into the museum.'],
            all: ["\\bcan't take\\b", "\\bmuseum\\b"], none: [],
            tip: 'Can’t + bare verb can mean “not allowed”.',
            why: 'Prohibition: can’t + bare verb.',
            tests: { pass: ['You can’t take food into the museum.', "Visitors can't take food into the museum"], fail: ["You can't to take food into the museum.", "You don't have to take food into the museum."] } },
          { id: 'p3-1-5-4', source: 'Let’s chip in and buy a present for our teacher.', keyword: 'SHALL',
            model: 'Shall we chip in and buy a present for our teacher?',
            tiles: ['Shall we', 'chip in', 'and buy a present', 'for our teacher?'],
            all: ["^shall we chip in\\b", "\\bteacher\\b"], none: [],
            tip: 'A suggestion with “we” as a question: Shall we…?',
            why: 'Shall we…? makes a suggestion, like Let’s.',
            tests: { pass: ['Shall we chip in and buy a present for our teacher?'], fail: ['We shall chip in and buy a present for our teacher.', 'Shall we to chip in?'] } },
          { id: 'p3-1-5-5', source: 'My advice is to shop around before you buy a new phone.', keyword: 'OUGHT',
            model: 'You ought to shop around before you buy a new phone.',
            tiles: ['You', 'ought to', 'shop around', 'before you buy', 'a new phone.'],
            all: ["\\bought to shop around\\b", "\\bphone\\b"], none: [],
            tip: 'Ought + to + bare verb.',
            why: 'Advice: ought to + bare verb (= should).',
            tests: { pass: ['You ought to shop around before you buy a new phone.'], fail: ['You ought shop around before you buy a new phone.', 'You ought to shopping around.'] } }
        ]
      }
      ]
    },
    {
      code: '2',
      title: 'Speculation and deduction: now, the future and the past',
      sections: [
      {
        code: '1', title: 'Choose the best modal', type: 'mc',
        instructions: 'Choose the option that best matches the evidence and the level of certainty.',
        items: [
          { id: 'p3-2-1-1', focus: 'sure yes, now (must)',
            stem: 'The tracking page for Jane’s order says “Delivered” and shows a photo of the parcel at her front door. The parcel ______ be at her house.',
            options: ['might', 'must', 'can’t', 'might not'], answer: 1,
            why: 'The photo is strong evidence, so must.' },
          { id: 'p3-2-1-2', focus: 'sure no, now (can’t)',
            stem: 'The price tag on a pencil case says 199 baht, but the till says 1,990 baht. The till ______ be right.',
            options: ['mustn’t', 'shouldn’t', 'can’t', 'needn’t'], answer: 2,
            why: 'A 1,990-baht pencil case is impossible here: can’t. Mustn’t is a prohibition, never a guess.' },
          { id: 'p3-2-1-3', focus: 'sure yes, past (must have)',
            stem: 'Fern had 300 baht at lunchtime. Now her purse is empty, and there is a bookshop receipt for 300 baht on her desk. She ______ spent all her money at the bookshop.',
            options: ['might not have', 'can’t have', 'should', 'must have'], answer: 3,
            why: 'The receipt matches the missing money exactly: must have + V3.' },
          { id: 'p3-2-1-4', focus: 'expected (should)',
            stem: 'The shop usually opens at 10 a.m., and it’s 10.15 now. It ______ be open.',
            options: ['should', 'needn’t', 'can’t', 'mustn’t'], answer: 0,
            why: '“Usually” tells us what to expect: should. Can’t goes against the evidence; mustn’t and needn’t are about rules.' },
          { id: 'p3-2-1-5', focus: 'possible, future (might)',
            stem: 'Pim hasn’t decided what to do with her birthday money. She ______ buy a new jacket, or she may save it.',
            options: ['must', 'might', 'can’t', 'will'], answer: 1,
            why: '“Or she may save it” shows two possibilities: might. Must and will are too sure.' }
        ]
      },
      {
        code: '2', title: 'Same situation, different certainty', type: 'pick',
        instructions: 'Read the evidence carefully. Choose the statement that is best supported.',
        items: [
          { id: 'p3-2-2-1', context: 'Ploy has heard that you can change money at the airport bank without paying a fee, but she isn’t sure.', focus: 'might (not sure)',
            options: ['Changing money there must be free.', 'Changing money there can’t be free.', 'Changing money there might be free.'], answer: 2,
            why: 'She has heard it but isn’t sure: might.' },
          { id: 'p3-2-2-2', context: 'Kaew paid for a 250-baht cinema ticket with a 500-baht note. She had no other money with her, and now she has exactly 250 baht in her purse.', focus: 'must have (past, sure)',
            options: ['She must have got the correct change.', 'She can’t have got the correct change.', 'She might not have got the correct change.'], answer: 0,
            why: '500 − 250 = 250, which is exactly what she has: must have + V3.' },
          { id: 'p3-2-2-3', context: 'An online sale price ends at midnight. It’s 11.58 p.m., and Mint’s order is still loading.', focus: 'might not (possibly not)',
            options: ['She can’t get the sale price.', 'She might not get the sale price.', 'She must get the sale price.'], answer: 1,
            why: 'Two minutes are left, so it is possible she misses it, but it is not certain: might not.' },
          { id: 'p3-2-2-4', context: 'The school coach leaves for Ayutthaya at 8 a.m. The journey usually takes about two hours.', focus: 'should (expected)',
            options: ['They should arrive at about 10 a.m.', 'They can’t arrive before noon.', 'They must arrive at about 10 a.m.'], answer: 0,
            why: '“Usually about two hours” = what we expect: should. Must is too sure for “usually”.' }
        ]
      },
      {
        code: '3', title: 'Present, future or past?', type: 'tag',
        choices: [['P', 'present'], ['F', 'future'], ['Pa', 'past']],
        instructions: 'For each sentence, choose P (present), F (future) or Pa (past). Then tap the words that helped you decide.',
        items: [
          { id: 'p3-2-3-1', sentence: 'The bank might change its fees next month.', answer: 'F', clue: ['next month'],
            why: '“Next month” = the future.' },
          { id: 'p3-2-3-2', sentence: 'Mint must be using her mum’s card. Her own card is in her desk drawer.', answer: 'P', clue: ['must be using', 'be using', 'using', 'is in her desk drawer'],
            why: 'Must be + -ing = a guess about now.' },
          { id: 'p3-2-3-3', sentence: 'Ploy can’t have read the message yet. It still says “unread”.', answer: 'Pa', clue: ['can’t have read', 'have read'],
            why: 'Can’t have + V3 = a guess about the past.' },
          { id: 'p3-2-3-4', sentence: 'Kaew might have forgotten to set aside money for the trip.', answer: 'Pa', clue: ['might have forgotten', 'have forgotten'],
            why: 'Might have + V3 = a guess about the past.' },
          { id: 'p3-2-3-5', sentence: 'Fah’s parcel should be here by Thursday.', answer: 'F', clue: ['by thursday', 'thursday'],
            why: '“By Thursday” = the future; should = expected.' },
          { id: 'p3-2-3-6', sentence: 'Judging by the queue, that stall must be very good value.', answer: 'P', clue: ['must be', 'judging by the queue', 'queue'],
            why: 'Must be + adjective/noun = a guess about now.' }
        ]
      },
      {
        code: '4', title: 'Make the deduction', type: 'deduce',
        instructions: 'Read the evidence. Write ONE logical conclusion using the modal given. Use information from the evidence, but do not copy it.',
        items: [
          { id: 'p3-2-4-1', modal: 'CAN’T',
            evidence: 'Mai’s coin purse feels very light, and when she shakes it, it makes no sound.',
            model: 'There can’t be any coins in her purse.',
            tiles: ['There', 'can’t be', 'any coins', 'in her purse.'],
            all: ["\\bcan't\\b", "\\b(coins?|money|empty|anything|cash)\\b"], none: ["\\bcan't to\\b", "\\bcan't (is|has)\\b"],
            tip: 'Can’t + bare verb = sure it is NOT true. What is in the purse?',
            why: 'No sound and very light are strong clues: can’t be + (any coins).',
            tests: { pass: ['There can’t be any coins in her purse.', "Her purse can't have any coins in it.", "It can't have any money in it"], fail: ["There mustn't be any coins.", "There can't to be any coins."] } },
          { id: 'p3-2-4-2', modal: 'MUST HAVE',
            evidence: 'Praew had only 50 baht this morning, but she came home with a 350-baht T-shirt. Her grandma visited her at school at lunchtime.',
            model: 'Her grandma must have given her some money.',
            tiles: ['Her grandma', 'must have given', 'her', 'some money.'],
            all: ["\\bmust have {V3}\\b"], none: ["\\bmust have {BASE}\\b"],
            tip: 'Must have + V3. Where did the money come from?',
            why: '50 baht can’t buy a 350-baht T-shirt, and her grandma visited: must have + V3 (given, bought).',
            tests: { pass: ['Her grandma must have given her some money.', 'Her grandma must have bought the T-shirt for her.'], fail: ['Her grandma must have give her money.', 'Her grandma might have given her money.'] } },
          { id: 'p3-2-4-3', modal: 'MIGHT',
            evidence: 'Fern’s favourite band is coming to Bangkok in March. The tickets haven’t gone on sale yet, and Fern hasn’t saved much money.',
            model: 'Fern might not have enough money for a ticket.',
            tiles: ['Fern', 'might not have', 'enough money', 'for a ticket.'],
            all: ["\\bmight\\b", "\\b(ticket|money|afford|save|saving|expensive|enough|cost|price|concert|go)"], none: ["\\bmight to\\b", "\\bmight (has|affords|saves)\\b"],
            tip: 'Might (or might not) + bare verb. Will Fern be able to pay for a ticket?',
            why: 'Tickets aren’t on sale yet and she hasn’t saved much, so it is only possible: might (not) + bare verb.',
            tests: { pass: ['Fern might not have enough money for a ticket.', 'The tickets might be expensive.', 'She might have to save more money.'], fail: ['Fern must not have enough money.', 'Fern might has enough money.'] } },
          { id: 'p3-2-4-4', modal: 'SHOULD',
            evidence: 'Nok’s online order says “Out for delivery”. The courier normally delivers before 6 p.m., and it’s 2 p.m. now.',
            model: 'Her order should arrive before 6 p.m.',
            tiles: ['Her order', 'should arrive', 'before 6 p.m.'],
            all: ["\\bshould (arrive|be|come|get|reach)\\b"], none: ["\\bshould to\\b", "\\bshould (arrives|arrived)\\b"],
            tip: 'Should + bare verb = expected. When will the parcel come?',
            why: '“Normally” gives the usual pattern, so we expect it: should + bare verb.',
            tests: { pass: ['Her order should arrive before 6 p.m.', 'The parcel should be here this afternoon.', 'Nok should get her order today'], fail: ['Her order should arrived today.', 'Her order must arrive before 6.'] } },
          { id: 'p3-2-4-5', modal: 'COULD',
            evidence: 'Bam wants a 4,000-baht watch. This weekend a shop at the mall is offering 30% off everything, and Bam has 3,000 baht.',
            model: 'Bam could buy the watch this weekend.',
            tiles: ['Bam', 'could buy', 'the watch this weekend.'],
            all: ["\\bcould \\w+"], none: ["\\bcould have {V3}\\b", "\\bcould have {BASE}\\b", "\\bcould to\\b", "\\bcould (bought|buys|affords)\\b"],
            tip: 'This is about the FUTURE: could + bare verb. 30% off 4,000 baht = ? Is it enough?',
            why: '30% off makes the watch 2,800 baht, so she has enough this weekend: could + bare verb.',
            tests: { pass: ['Bam could buy the watch this weekend.', 'She could afford the watch at the weekend.'], fail: ['Bam could have bought the watch this weekend.', 'Bam could buys the watch.'] } }
        ]
      },
      {
        code: '5', title: 'Who has the better reasoning?', type: 'reason',
        instructions: 'Two students reached different conclusions. Choose the student with the better reasoning and explain why their modal is more appropriate.',
        items: [
          { id: 'p3-2-5-1', situation: 'Jane had 5,000 baht in her account this morning. Now she has 4,200 baht, and there is an 800-baht purchase from an online shop she often uses.',
            a: 'She can’t have bought anything online.', b: 'She must have paid for something online.', answer: 'B',
            model: 'Because the account shows an 800-baht purchase, the same as the missing money.',
            tiles: ['Because', 'the account shows', 'an 800-baht purchase,', 'the same as', 'the missing money.'],
            all: ["(800|purchase|account|app|same|matches|missing|proof|shows)"], none: [],
            tip: 'How much money is missing, and what does the account show?',
            why: 'The 800-baht purchase matches the missing money exactly: strong evidence, so must have.',
            tests: { pass: ['because the account shows an 800 baht purchase', 'because 800 baht is missing and there is a purchase'], fail: ['because she likes shopping'] } },
          { id: 'p3-2-5-2', situation: 'The weather forecast says there is a small chance of rain. Fah wants to go to the floating market.',
            a: 'It might rain.', b: 'It will definitely rain.', answer: 'A',
            model: 'Because the forecast only says there is a small chance of rain.',
            tiles: ['Because', 'the forecast', 'only says', 'there is', 'a small chance', 'of rain.'],
            all: ["(small chance|chance|forecast|not (sure|certain)|n't (sure|certain)|maybe|possib)"], none: [],
            tip: 'Is a small chance strong evidence?',
            why: 'A small chance is weak evidence, so only might. “Will definitely” would mean we are sure about the rain.',
            tests: { pass: ['because there is only a small chance of rain', "because it's not certain"], fail: ['because Fah likes markets'] } },
          { id: 'p3-2-5-3', situation: 'Kaew says her new trainers were “a real bargain”, but she paid the same price as in every other shop.',
            a: 'They might have been a real bargain.', b: 'They can’t have been a real bargain.', answer: 'B',
            model: 'Because a bargain is cheaper than usual, and she paid the normal price.',
            tiles: ['Because', 'a bargain', 'is cheaper than usual,', 'and she paid', 'the normal price.'],
            all: ["(same price|same|everywhere|every other|not cheaper|n't cheaper|no discount|normal price)"], none: [],
            tip: 'What is a bargain? Was her price lower than other shops?',
            why: 'A bargain is cheaper than usual. She paid the normal price, so it is impossible: can’t have been.',
            tests: { pass: ['because she paid the same price as every other shop', "because it wasn't cheaper"], fail: ['because trainers are nice'] } },
          { id: 'p3-2-5-4', situation: 'Nok asked for a refund three days ago. The shop says refunds usually take three to five working days.',
            a: 'The refund must be in her account already.', b: 'The refund should arrive soon.', answer: 'B',
            model: 'Because refunds usually take three to five days, and only three have passed.',
            tiles: ['Because', 'refunds usually take', 'three to five days,', 'and only three', 'have passed.'],
            all: ["(usual|three to five|3.?5|expect|not (sure|certain|yet)|n't (sure|certain)|five days|5 days|maybe)"], none: [],
            tip: 'Three days have passed. The shop says three to FIVE. Is it certain?',
            why: 'It is inside the normal time, so we expect it, but it could take two more days: should, not must.',
            tests: { pass: ['because refunds usually take 3-5 days', 'because it might take five days, so we only expect it'], fail: ['because she wants her money'] } },
          { id: 'p3-2-5-5', situation: 'Mai’s mum said she might give Mai some extra money if her exam results are good. The results come out next week.',
            a: 'Mai could get some extra money next week.', b: 'Mai will get some extra money next week.', answer: 'A',
            model: 'Because her mum only said “might”, and we don’t know her results yet.',
            tiles: ['Because', 'her mum', 'only said “might”,', 'and we don’t know', 'her results yet.'],
            all: ["(might|results|don't know|not (sure|certain)|n't (sure|certain)|if|maybe|possib|yet)"], none: [],
            tip: 'What did Mum actually promise? Do we know the results?',
            why: 'Two unknowns (Mum said might; the results aren’t out), so only could. Will is too sure.',
            tests: { pass: ["because her mum only said might", "because we don't know her results yet"], fail: ['because Mai is clever'] } }
        ]
      }
      ]
    }
    ]
  }
  ]
};
