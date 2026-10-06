/* ===========================================================================
   FINE TUNING — lenses.js
   The extra ways into each module's lesson, shown as tabs beside Explain:
   ภาษาไทย · Mind map · Story · Chant · Moves, plus the analogy and the exam
   trap that sit under the explanation. Keyed by module id; student.js merges
   each entry into that module's theory when the lesson opens, so a module
   with no entry simply shows fewer tabs.

   Field rules (verify.js checks them): thai, map text, story who, chant title
   and beat, analogy title and move are plain text; everything else may carry
   <em>, <strong>, <b> and <s>.
   =========================================================================== */
var LENSES = {
 "t1l1s1": {
  "thai": "ประโยคที่มี modal จะมีสองชั้นเสมอ ชั้นล่างคือ “เนื้อความ” (proposition) ว่าเกิดอะไรขึ้นในโลกจริง ส่วนชั้นบนคือ “กรอบ” (frame) ที่บอกว่าผู้พูดคิดอย่างไรกับเรื่องนั้น เช่น มั่นใจแค่ไหน เป็นการคาดเดา เป็นข้อบังคับ หรือเป็นการอนุญาต ลองเทียบ It rains in April. (เดือนเมษายนฝนตก — บอกข้อเท็จจริงเรื่องฝน) กับ It may rain in April. (เดือนเมษายนฝนอาจจะตก — บอกว่าผู้พูดไม่แน่ใจ) ฝนยังเป็นฝนเหมือนเดิม สิ่งที่เปลี่ยนคือจุดยืนของผู้พูดเท่านั้น วิธีเช็กคือลองเถียงด้วยหลักฐาน ถ้าเถียงได้ เช่น “ไม่จริง เดือนเมษาฝนไม่ตกหรอก” แปลว่าเป็นเนื้อความ ส่วนกรอบเถียงแบบนั้นไม่ได้ เพราะบอกแค่ความมั่นใจของผู้พูด ระวัง must have rained ด้วย แม้จะพูดถึงอดีต แต่ก็ยังเป็นการสรุปของผู้พูด ไม่ใช่การรายงานข้อเท็จจริง",
  "analogy": {
   "title": "Photo and caption",
   "text": "Picture an IG story of a packed BTS platform. The photo is the <strong>proposition</strong> — it never changes. Now try three captions: <em>The train <strong>is</strong> late.</em> <em>The train <strong>might</strong> be late.</em> <em>The train <strong>must</strong> be late.</em> The platform, the crowd and the train are exactly the same each time. Only the caption moves, and the caption tells your friends about <em>you</em>: how sure you are."
  },
  "trap": "Learners read a modal as part of the news. They take <em>The train <strong>may</strong> be cancelled</em> as “the train won't run”, and they take <em>It <strong>must have</strong> rained</em> as a report of the weather because it is about the past. Tests put it right next to the plain fact <em>It rained</em> as the near miss. Dodge: a modal in the verb adds the speaker's stance (here, how sure the speaker is); it doesn't report what happened.",
  "map": {
   "center": "Two layers",
   "branches": [
    {
     "label": "Proposition",
     "leaves": [
      "the event itself",
      "It rains in April."
     ]
    },
    {
     "label": "Frame",
     "leaves": [
      "modal = speaker's stance",
      "It may rain in April."
     ]
    },
    {
     "label": "Kinds of frame",
     "leaves": [
      "doubt: may, might",
      "deduction: must be",
      "require / permit"
     ]
    },
    {
     "label": "Disagree test",
     "leaves": [
      "fact → “No, it doesn't!”",
      "frame → about the speaker"
     ]
    },
    {
     "label": "Operator",
     "leaves": [
      "stands outside the event",
      "no -s, no stack, no tense"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Deletes the Frame",
   "panels": [
    {
     "who": "Ploy",
     "text": "Sports day is tomorrow. It <em>might</em> rain."
    },
    {
     "who": "Nong Bot",
     "text": "BEEP! News for the whole class: IT RAINS TOMORROW! Cancel sports day!"
    },
    {
     "who": "Fah",
     "text": "Wait, Bot. Ploy didn't say it <em>will</em> rain."
    },
    {
     "who": "Nong Bot",
     "text": "I deleted the extra word. <em>Might</em> told me nothing about the rain. Beep!"
    },
    {
     "who": "T.Chris",
     "text": "Right, Bot: <em>might</em> says nothing about the rain. It says how sure Ploy is. Delete it and you delete Ploy."
    }
   ],
   "moral": "A modal doesn't change the event; it shows the speaker's position on it, so <em>It might rain</em> is not a weather report."
  },
  "chant": {
   "title": "Two Layers",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Bottom layer, the event: <em>it rains</em>!",
    "Top layer, the frame: <em>it may</em>, <em>it must</em>!",
    "Swap the modal, the rain's still rain,",
    "Only the speaker moves in the frame!",
    "<em>Will</em>: I'm sure. <em>Might</em>: maybe not.",
    "<em>Must</em>: I worked it out, or it's a rule you've got!"
   ]
  },
  "moves": [
   {
    "move": "Lay one palm flat on the desk",
    "says": "Bottom layer, the event: <em>It rains in April.</em>"
   },
   {
    "move": "Hold your other hand above it like a roof",
    "says": "Top layer, the frame: <em>It <strong>may</strong> rain in April.</em>"
   },
   {
    "move": "Raise and lower the top hand while the bottom hand stays still",
    "says": "<em>will</em>, <em>might</em>, <em>must</em>: the rain doesn't move, only I do."
   },
   {
    "move": "Point both thumbs at yourself",
    "says": "A modal is about the speaker, not the world."
   }
  ]
 },
 "t1l1s2": {
  "thai": "modal มี “ลายเซ็น” สามข้อ ข้อแรก ไม่เติม -s แม้ประธานจะเป็นเอกพจน์บุรุษที่ 3 เช่น he must ไม่ใช่ he musts และกริยาที่ตามมาก็ไม่เติม -s ด้วย must get ไม่ใช่ must gets ข้อสอง ไม่มี to คั่นระหว่าง modal กับกริยา เช่น She must sign the form. (เธอต้องเซ็นแบบฟอร์ม) ไม่ใช่ must to sign ซึ่งเป็นข้อผิดที่เด็กไทยเจอบ่อย เพราะเราจำรูป want to do หรือ need to do มาใช้ ข้อสาม ใช้ modal ได้ทีละตัวเท่านั้น ห้ามซ้อนกัน will can ผิด ต้องพูดว่า will be able to ทั้งสามข้อมาจากเหตุผลเดียวกัน คือ modal ไม่ใช่กริยาหลักของประโยค แต่เป็น “กรอบ” ที่อยู่ข้างบน ข้อยกเว้นเดียวที่ยังมี to คือ ought to เวลาทำข้อสอบ ให้ดูว่าหลัง modal เป็นกริยาช่องที่ 1 ที่ไม่เติมอะไรเลยหรือเปล่า",
  "analogy": {
   "title": "The motorbike taxi",
   "text": "A motorbike taxi has one driver's seat, and that's the modal. Only <strong>one</strong> driver per bike, so <s>will can</s> is two drivers fighting over the handlebars. The driver wears the same orange vest whoever rides: <em>he must</em>, <em>they must</em>, never <s>he musts</s>. The passenger, the bare verb, sits right behind with nothing squeezed in between, so no <em>to</em>: <em>must go</em>."
  },
  "trap": "Verbs like <em>want to go</em> and <em>need to go</em> teach Thai learners to put <em>to</em> between two verbs, so they write <s>must to go</s>. Tests also hide the <em>-s</em> on the second verb (<s>must gets</s>) and stack two modals (<s>will can</s>, <s>will must</s>). Dodge: read the word right after the modal. It must be a bare verb, with no <em>to</em>, no <em>-s</em> and no second modal.",
  "map": {
   "center": "The modal signature",
   "branches": [
    {
     "label": "No -s",
     "leaves": [
      "he must ≠ he musts",
      "she must get ≠ gets"
     ]
    },
    {
     "label": "No to",
     "leaves": [
      "must go ≠ must to go",
      "only ought keeps to"
     ]
    },
    {
     "label": "One modal only",
     "leaves": [
      "will can ✗",
      "→ will be able to"
     ]
    },
    {
     "label": "Why?",
     "leaves": [
      "modal ≠ main verb",
      "it sits above the clause"
     ]
    },
    {
     "label": "Quick check",
     "leaves": [
      "1 modal + bare verb",
      "nothing in between"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Adds Everything",
   "panels": [
    {
     "who": "Mai",
     "text": "Bot, please read out the new library rule."
    },
    {
     "who": "Nong Bot",
     "text": "Every student <s>musts to gets</s> a library card! He, she, it: add <em>-s</em> everywhere! Beep!"
    },
    {
     "who": "Pim",
     "text": "Bot, that's three mistakes in one rule."
    },
    {
     "who": "Nong Bot",
     "text": "Fixed! Every student <s>will can</s> get a card. Two modals, double power!"
    },
    {
     "who": "T.Chris",
     "text": "One modal, no <em>-s</em>, no <em>to</em>: <em>Every student <strong>must get</strong> a library card.</em>"
    }
   ],
   "moral": "After a modal: one modal only, no <em>-s</em>, no <em>to</em>, just the bare verb."
  },
  "chant": {
   "title": "No S, No To, No Two",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "No <em>-s</em> on <em>must</em>: <em>he must</em>, that's it!",
    "No <em>to</em> in the gap: <em>must go</em>, don't split!",
    "No two in a row: <s>will can</s> is a crash,",
    "<em>Will be able to</em>: fix it in a flash!",
    "Modal on top, bare verb below,",
    "Only <em>ought</em> keeps its <em>to</em>, now you know!"
   ]
  },
  "moves": [
   {
    "move": "Wag one finger side to side",
    "says": "No <em>-s</em>: <em>he must</em>, <em>she can</em>."
   },
   {
    "move": "Press your palms together with no gap",
    "says": "No <em>to</em>: <em>must go</em>, modal and verb stuck together."
   },
   {
    "move": "Hold up one finger, then push a second finger back down",
    "says": "One modal only: <s>will can</s> → <em>will be able to</em>."
   },
   {
    "move": "Flat hand above your head, then point down at the desk",
    "says": "Modal on top, bare verb below."
   }
  ]
 },
 "t1l1s3": {
  "thai": "กริยาธรรมดาต้อง “ยืม” do มาช่วยเวลาทำประโยคคำถาม ปฏิเสธ และคำตอบสั้น เช่น Does she work? / She doesn't work. / Yes, she does. แต่ modal ทำหน้าที่เหล่านี้ได้เองโดยไม่ต้องพึ่ง do เช่น Can she work? / She can't work. / Yes, she can. ดังนั้นห้ามใช้ do คู่กับ modal เด็ดขาด Does she can drive? หรือ doesn't can ผิด เพราะมีตัวช่วยสองตัวแย่งหน้าที่กัน จำคำว่า NICE ได้แก่ Negation (เติม not ได้เลย เช่น cannot) Inversion (ย้ายไปไว้หน้าประธานเพื่อถาม) Code (ยืนเดี่ยว ๆ ได้เมื่อละกริยา เช่น I can't come, but Nan can. ฉันมาไม่ได้ แต่นานมาได้) และ Emphasis (เน้นเสียงที่ modal ได้) ส่วนคำตอบสั้นต้องใช้ modal ตัวเดิมจากคำถาม เช่น Will the results be posted online? — Yes, they will. ไม่ใช่ Yes, they do.",
  "analogy": {
   "title": "The substitute teacher",
   "text": "<em>Do</em> is the substitute teacher: it only comes in when the real teacher is missing. An ordinary verb like <em>work</em> can't run the class alone, so <em>do</em> steps in: <em>Does she work?</em> But a modal <strong>is</strong> the real teacher. It asks the question (<em>Can she…?</em>) and says no (<em>can't</em>) all by itself. Two teachers at one desk? <s>Does she can</s>: total chaos."
  },
  "trap": "A Thai question just adds <em>ไหม</em> at the end, so learners reach for the default English question tool, <em>do</em>, every time: <s>Do you can help?</s>, <s>The panel doesn't can…</s>. Tests also check short answers, offering <em>Yes, they do</em> or <em>Yes, they have</em> after a <em>will</em> question. Dodge: if a modal is in the sentence, never add <em>do</em>, and answer with the same modal the question used.",
  "map": {
   "center": "NICE: modals alone",
   "branches": [
    {
     "label": "Negation",
     "leaves": [
      "can't, mustn't, cannot",
      "not sticks to the modal"
     ]
    },
    {
     "label": "Inversion",
     "leaves": [
      "Can she…? Should we…?",
      "no do needed"
     ]
    },
    {
     "label": "Code",
     "leaves": [
      "I can't, but Nan can.",
      "modal stands alone"
     ]
    },
    {
     "label": "Emphasis",
     "leaves": [
      "I CAN do it!",
      "stress on the modal"
     ]
    },
    {
     "label": "No do + modal",
     "leaves": [
      "Does she can…? ✗",
      "doesn't can ✗ → cannot"
     ]
    },
    {
     "label": "Short answers",
     "leaves": [
      "Will…? — Yes, they will.",
      "same modal comes back"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Calls a Helper",
   "panels": [
    {
     "who": "Nan",
     "text": "Bot, can you help with our stall on Saturday?"
    },
    {
     "who": "Nong Bot",
     "text": "<s>Yes, I do!</s> Beep!"
    },
    {
     "who": "Nan",
     "text": "…You do what?"
    },
    {
     "who": "Nong Bot",
     "text": "Upgrade: <s>Do I can help?</s> <s>Yes, I do can!</s> Now I have two helpers!"
    },
    {
     "who": "Mint",
     "text": "Two helpers and still no help."
    },
    {
     "who": "T.Chris",
     "text": "Bot, the modal answers by itself: <em>Can you help? — Yes, I <strong>can</strong>.</em>"
    }
   ],
   "moral": "Modals ask, say no and answer on their own: never add <em>do</em>, and a short answer repeats the same modal."
  },
  "chant": {
   "title": "Do Takes a Day Off",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Does she work?</em> <em>Do</em> helps the verb.",
    "<em>Can she work?</em> <em>Do</em> says not a word!",
    "<em>Can't</em>, <em>mustn't</em>: <em>not</em> sticks tight,",
    "<em>Can you?</em> <em>Should we?</em> Flip it right!",
    "<em>Can you come?</em> <em>Yes, I can!</em>",
    "Same modal back, that's the plan!",
    "N-I-C-E, the modal's on its own,",
    "<em>Do</em> takes a day off, <em>do</em> goes home!"
   ]
  },
  "moves": [
   {
    "move": "Cross your forearms in an X",
    "says": "No <em>do</em> with a modal: <s>Does she can…?</s>"
   },
   {
    "move": "Swap your two fists so the modal fist jumps in front",
    "says": "Inversion: <em>She can</em> → <em>Can she…?</em>"
   },
   {
    "move": "Point down, then snap your fingers",
    "says": "Negation: <em>can</em> + <em>not</em> = <em>can't</em>."
   },
   {
    "move": "Cover your mouth, then uncover it for one word",
    "says": "Code: <em>I can't come, but Nan <strong>can</strong>.</em>"
   },
   {
    "move": "Thumbs up and nod twice",
    "says": "Short answer: <em>Will they…? — Yes, they <strong>will</strong>.</em>"
   }
  ]
 },
 "t1l2s1": {
  "thai": "หลัง modal ทุกตัว กริยาตัวถัดไปต้องเป็น bare infinitive คือกริยาช่องที่ 1 ที่ไม่มี to ไม่เติม -s และไม่เติม -ed เช่น must go, will be, can meet ไม่ว่าประธานจะเป็น I, she, they หรือ neither ก็ใช้รูปเดิมเสมอ ระวังกริยา be ด้วย หลัง modal ต้องใช้ be ไม่ใช่ is หรือ being เช่น The lift will be out of service. (ลิฟต์จะใช้งานไม่ได้) อีกเรื่องที่สำคัญมากคือ must ทำเป็นอดีตเองไม่ได้ จะเติม yesterday แล้วใช้ must finish หรือ must finished ไม่ได้ ถ้าเป็นการคาดเดา ต้องย้ายความเป็นอดีตไปไว้ที่ have + V3 แทน เช่น She must have finished the report yesterday. (เมื่อวานเธอคงทำรายงานเสร็จแล้วแน่ ๆ) วิธีเช็กคือดูคำแรกของกลุ่มกริยา ถ้าเป็น modal คำถัดไปต้องเป็นรูปเปล่าเท่านั้น",
  "analogy": {
   "title": "Plain uniform only",
   "text": "Think of the modal as the guard at the school gate. Every verb that walks in after it must wear the <strong>plain uniform</strong>: no <em>-s</em> badge, no <em>-ed</em> badge, no <em>to</em> bag. <em>She must go</em>, <em>they must go</em>: same uniform for everyone. Talking about yesterday? The guard won't let a past badge in, so <em>have</em> walks in first: <em>must <strong>have gone</strong></em>."
  },
  "trap": "Thai verbs never change, so Thai learners show past time with a time word (<em>เมื่อวาน</em> = <em>yesterday</em>) and leave the verb alone: <s>She must finish the report yesterday.</s> Tests love it because <em>must finish</em> looks fine on its own. Also watch <s>will is</s>, and singular subjects like <em>neither</em> that tempt you to add <em>-s</em>. Dodge: if the time is past, look for <em>have</em> + V3 straight after the modal.",
  "map": {
   "center": "Modal + bare verb",
   "branches": [
    {
     "label": "Bare = plain",
     "leaves": [
      "no to, no -s, no -ed",
      "must go, will be"
     ]
    },
    {
     "label": "Every subject",
     "leaves": [
      "I / she / they must go",
      "neither can meet ✓"
     ]
    },
    {
     "label": "be after modal",
     "leaves": [
      "will be ≠ will is",
      "≠ will being, will to be"
     ]
    },
    {
     "label": "No past tense",
     "leaves": [
      "must go yesterday ✗",
      "→ must have gone ✓"
     ]
    },
    {
     "label": "Quick check",
     "leaves": [
      "1st word = modal?",
      "next word = bare verb"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Goes Back in Time",
   "panels": [
    {
     "who": "Ploy",
     "text": "Where's Fah's report? It's not on her desk."
    },
    {
     "who": "Mai",
     "text": "It's already in T.Chris's tray."
    },
    {
     "who": "Nong Bot",
     "text": "Deduction: Fah <s>must finish it yesterday</s>! Beep!"
    },
    {
     "who": "Fah",
     "text": "Bot, <em>must finish</em>… <em>yesterday</em>? Yesterday is over!"
    },
    {
     "who": "Nong Bot",
     "text": "Then Fah <s>must finished</s> it. Past tense added. Problem solved!"
    },
    {
     "who": "T.Chris",
     "text": "The past can't sit on the modal or on the verb after it. Use <em>have</em>: <em>She <strong>must have finished</strong> it.</em>"
    }
   ],
   "moral": "<em>Must</em> can't carry past time: for a past deduction, put the past into <em>have</em> + V3, as in <em>must have finished</em>."
  },
  "chant": {
   "title": "Plain After the Modal",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Modal first, then the verb stays plain,",
    "No <em>to</em>, no <em>-s</em>, no <em>-ed</em>, same again!",
    "<em>She must go</em>, <em>they must go</em>, <em>neither can meet</em>,",
    "<em>Will be</em>, not <s>will is</s>: keep it neat!",
    "Talking yesterday? Don't break the chain,",
    "<em>Must have gone</em>: let <em>have</em> take the strain!"
   ]
  },
  "moves": [
   {
    "move": "Point forward with one finger, then open your hand flat",
    "says": "Modal first, then the plain verb: <em>must go</em>."
   },
   {
    "move": "Brush your sleeve three times",
    "says": "No <em>to</em>, no <em>-s</em>, no <em>-ed</em>."
   },
   {
    "move": "Sweep one hand across the whole class",
    "says": "Same form for everyone: <em>I / she / they must go</em>."
   },
   {
    "move": "Point your thumb back over your shoulder",
    "says": "Past? <em>must <strong>have</strong> gone</em>, not <s>must go yesterday</s>."
   }
  ]
 },
 "t1l2s2": {
  "thai": "กลุ่มกริยาหลัง modal เรียงตามลำดับตายตัวเสมอ คือ MODAL → have → be (กำลังทำ) → be (ถูกกระทำ) → กริยาหลัก จะใช้ไม่ครบทุกตัวก็ได้ แต่ห้ามสลับลำดับ และแต่ละตัวจะกำหนดรูปของคำถัดไป modal ตามด้วยรูปเปล่า have ตามด้วย V3 be แบบกำลังทำตามด้วย -ing ส่วน be แบบถูกกระทำ (passive) ตามด้วย V3 เช่น She might be waiting. (เธออาจกำลังรออยู่) และ Every application must be signed by a parent. (ใบสมัครทุกใบต้องให้ผู้ปกครองเซ็น) ข้อสอบชอบหลอกด้วยรูปที่ขาดตัวใดตัวหนึ่ง เช่น must signed (ขาด be) หรือ may been (ขาด have) หรือใช้ -ing ผิดที่ เช่น coats must be washing ซึ่งแปลว่าเสื้อกำลังซักอะไรบางอย่างอยู่ ให้ถามตัวเองว่าประธาน “ทำ” หรือ “ถูกทำ” ถ้าถูกทำ ใช้ be + V3 ถ้ากำลังทำอยู่ ใช้ be + -ing",
  "analogy": {
   "title": "One line, fixed stations",
   "text": "Ride the BTS Sukhumvit line: a trip can use just a few stations, but they always come in the same order. The verb chain works the same way: <strong>MODAL → have → be (-ing) → be (passive) → verb</strong>. Use only the stops you need, as in <em>might be waiting</em>, <em>must be signed</em> or <em>may have been damaged</em>, but never change the order, and each stop sets the shape of the next word."
  },
  "trap": "Thai uses <em>ถูก</em> for passive and <em>กำลัง</em> for in-progress only when it wants to, so learners drop the <em>be</em>: <s>must signed</s>. Or they choose <em>-ing</em> because it looks active: <s>coats must be washing</s> means the coats are doing the washing! Tests hide one missing or wrong link. Dodge: ask “Does the subject do it, or is it done to it?” Done to it → <em>be</em> + V3. In progress → <em>be</em> + -ing.",
  "map": {
   "center": "The slot chain",
   "branches": [
    {
     "label": "Order",
     "leaves": [
      "MODAL→have→be→be→verb",
      "skip links, never swap"
     ]
    },
    {
     "label": "have",
     "leaves": [
      "→ V3 (past participle)",
      "may have gone"
     ]
    },
    {
     "label": "be (progressive)",
     "leaves": [
      "→ verb-ing",
      "might be waiting"
     ]
    },
    {
     "label": "be (passive)",
     "leaves": [
      "→ V3",
      "must be signed"
     ]
    },
    {
     "label": "Missing link ✗",
     "leaves": [
      "must signed → be?",
      "may been → have?"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot and the Self-Washing Coats",
   "panels": [
    {
     "who": "Pim",
     "text": "Bot, make a sign for the lab: the coats need washing at sixty degrees."
    },
    {
     "who": "Nong Bot",
     "text": "SIGN: <s>ALL LAB COATS MUST BE WASHING AT 60°</s>. Beep!"
    },
    {
     "who": "Mint",
     "text": "So… the coats wash themselves?"
    },
    {
     "who": "Nong Bot",
     "text": "Yes. I am waiting for them to start. Coats, begin!"
    },
    {
     "who": "T.Chris",
     "text": "Coats don't wash anything; they get washed. Passive <em>be</em> + V3: <em>must <strong>be washed</strong></em>."
    }
   ],
   "moral": "Each link sets the next form: progressive <em>be</em> + -ing for doing, passive <em>be</em> + V3 for being done to."
  },
  "chant": {
   "title": "Build the Chain",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Modal, <em>have</em>, <em>be</em>, <em>be</em>, verb: that's the line!",
    "Skip what you don't need, but keep the order fine.",
    "<em>Have</em> wants V3: <em>may have gone</em>,",
    "<em>Be</em> wants <em>-ing</em>: <em>might be waiting</em>, carry on!",
    "Passive <em>be</em> wants V3 too,",
    "<em>Must be signed</em>: it's done to you!",
    "Each link shapes the next in the chain,",
    "Build it, don't memorise, again and again!"
   ]
  },
  "moves": [
   {
    "move": "Hook your index fingers together like a chain",
    "says": "Modal → <em>have</em> → <em>be</em> → <em>be</em> → verb, always in this order."
   },
   {
    "move": "Point your thumb back over your shoulder",
    "says": "<em>have</em> + V3: <em>may have gone</em>."
   },
   {
    "move": "Roll your hands round and round",
    "says": "<em>be</em> + -ing, still happening: <em>might be waiting</em>."
   },
   {
    "move": "Tap your own chest as if something lands on you",
    "says": "Passive <em>be</em> + V3, done to it: <em>must be signed</em>."
   }
  ]
 },
 "t1l2s3": {
  "thai": "เวลาอ่านกลุ่มกริยายาว ๆ ให้แบ่งเป็นสองส่วน modal ตัวแรกบอกจุดยืนของผู้พูด เช่น มั่นใจแค่ไหน หรือเป็นข้อบังคับ ส่วนคำที่ตามมาทั้งหมดบอกเรื่องของเหตุการณ์ have + V3 แปลว่าเหตุการณ์จบไปแล้ว be + -ing แปลว่ากำลังเกิดขึ้นอยู่ และ be + V3 แปลว่าประธานเป็นผู้ถูกกระทำ เช่น He must have left. (เขาคงออกไปแล้วแน่ ๆ เพราะกระเป๋าหายไปแล้ว) เทียบกับ He must be leaving. (เขาคงกำลังออกไปอยู่ตอนนี้) ข้อสอบมักให้สถานการณ์มา แล้วให้เลือกรูปที่ตรงกับหลักฐาน ให้ดูว่าเหตุการณ์จบแล้ว กำลังเกิด หรือเป็นสิ่งที่ถูกทำ ข้อควรระวังคือ ถ้าหลัง modal ไม่มี have หรือ be เลย เช่น must work มักจะอ่านเป็นข้อบังคับ ไม่ใช่การคาดเดาเรื่องที่กำลังเกิดขึ้นตอนนี้",
  "analogy": {
   "title": "Grab order status",
   "text": "Your Grab app freezes, so you have to guess. The <strong>modal</strong> is how sure you are; the words after it are the order status. <em>The rider <strong>must have</strong> arrived</em>: done, over. <em>He <strong>must be</strong> riding over now</em>: in progress. <em>The food <strong>must be</strong> packed already</em>: something done to the food. Same confidence every time; only the status changes."
  },
  "trap": "Thai shows “finished” with a little word like <em>แล้ว</em>, so learners pick the right modal and ignore the link after it. Tests give a clue (a missing coat, a printer running <em>now</em>) and offer <em>must have worked</em> next to <em>must be working</em>. And a bare <em>must work</em> reads as a rule, not a guess. Dodge: find the time clue in the situation. Over → <em>have</em> + V3; happening now → <em>be</em> + -ing.",
  "map": {
   "center": "Read outside → in",
   "branches": [
    {
     "label": "Modal = frame",
     "leaves": [
      "how sure / required",
      "the speaker's stance"
     ]
    },
    {
     "label": "have + V3",
     "leaves": [
      "already over",
      "must have left"
     ]
    },
    {
     "label": "be + -ing",
     "leaves": [
      "going on now",
      "must be leaving"
     ]
    },
    {
     "label": "be + V3",
     "leaves": [
      "done to the subject",
      "may be published"
     ]
    },
    {
     "label": "No link?",
     "leaves": [
      "must work → often a rule",
      "not a guess about now"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Waits at the Door",
   "panels": [
    {
     "who": "Fah",
     "text": "Where's Nan? Her bag's gone and her laptop's off."
    },
    {
     "who": "Nong Bot",
     "text": "Analysis: Nan <s>must be leaving</s>. I will wait at the door to wave goodbye! Beep!"
    },
    {
     "who": "Mai",
     "text": "Bot… you've been at the door for an hour."
    },
    {
     "who": "Nong Bot",
     "text": "She is still leaving. Very slow leaver."
    },
    {
     "who": "T.Chris",
     "text": "Her bag is gone, so it's over: <em>She <strong>must have left</strong>.</em> <em>Be</em> + -ing would mean she's walking out right now."
    }
   ],
   "moral": "The modal gives your confidence; the link after it gives the event: <em>have</em> + V3 = over, <em>be</em> + -ing = happening now, <em>be</em> + V3 = done to it."
  },
  "chant": {
   "title": "Read the Links",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Modal on top says how sure I am,",
    "The links below tell the story, fam!",
    "<em>Have</em> + V3? It's over and done,",
    "<em>Must have left</em>: the bag is gone!",
    "<em>Be</em> + <em>-ing</em>? It's happening now,",
    "<em>Must be working</em>: printer's on, wow!",
    "<em>Be</em> + V3? It's done to you,",
    "<em>May be published</em>: results come through!"
   ]
  },
  "moves": [
   {
    "move": "Hold your hand at head height and tilt it up or down",
    "says": "The modal = how sure I am."
   },
   {
    "move": "Wave goodbye over your shoulder",
    "says": "<em>have</em> + V3, over: <em>She must have left.</em>"
   },
   {
    "move": "Roll your hands forward",
    "says": "<em>be</em> + -ing, happening now: <em>He must be leaving.</em>"
   },
   {
    "move": "Tap your own shoulder as if someone taps you",
    "says": "<em>be</em> + V3, done to it: <em>The results may be published.</em>"
   }
  ]
 },
 "t1l3s1": {
  "thai": "modal มีรูปเดียวเท่านั้น ไม่มีรูป to-infinitive ไม่มีรูป -ing และไม่มีรูป V3 จึงเอาไปวางหลัง will หลัง to หลัง have หรือหลัง without ไม่ได้เลย เช่น will must, to can, has must ผิดทั้งหมด ภาษาอังกฤษจึงใช้วลีกริยาธรรมดาที่มีความหมายเหมือนกันมาแทน คือ have to แทน must, be able to แทน can และ be allowed to แทน may ที่แปลว่าอนุญาต วลีพวกนี้ผันได้ครบทุกรูป เช่น We will have to leave at six. (พวกเราจะต้องออกเดินทางตอนหกโมง) หรือ She has been able to walk unaided since March. (เธอเดินเองได้ตั้งแต่เดือนมีนาคม) สิ่งสำคัญคือ นี่ไม่ใช่ “ทางเลือกที่ฟังดูหรูกว่า” แต่เป็นทางเดียวที่ถูกไวยากรณ์ เพราะในตำแหน่งนั้นไม่มี modal ให้เลือกเลย",
  "analogy": {
   "title": "The charger adaptor",
   "text": "Your phone charger has <strong>one</strong> plug shape. In the normal socket it works fine: that's <em>must</em>, <em>can</em> or <em>may</em> in an ordinary sentence. But some sockets need a different shape: after <em>will</em>, after <em>to</em>, after <em>has</em>. The modal plug just won't go in. So you use the adaptor (<em>have to</em>, <em>be able to</em>, <em>be allowed to</em>), which fits every socket: <em>will have to</em>, <em>to be able to</em>, <em>has been able to</em>."
  },
  "trap": "Thai <em>ต้อง</em> and <em>ได้</em> fit anywhere (<em>จะต้อง</em>, <em>อยากพูดได้</em>), so learners stack <s>will must</s> and write <s>want to can</s>. Tests also tempt you with the wrong stand-in: <em>will not be able to give a reason</em> (impossible) vs <em>will not have to give a reason</em> (no need). Dodge: check the word before the gap. After <em>will</em>, <em>to</em> or <em>has</em>, no modal fits, so choose the stand-in that matches the meaning.",
  "map": {
   "center": "Modal: one form only",
   "branches": [
    {
     "label": "Missing forms",
     "leaves": [
      "no to must",
      "no musting, no has must"
     ]
    },
    {
     "label": "Locked slots",
     "leaves": [
      "after will / to",
      "after has / without"
     ]
    },
    {
     "label": "The stand-ins",
     "leaves": [
      "must → have to",
      "can → be able to",
      "may → be allowed to"
     ]
    },
    {
     "label": "Examples",
     "leaves": [
      "will have to leave",
      "has been able to walk",
      "want to be able to read"
     ]
    },
    {
     "label": "Not style",
     "leaves": [
      "no modal = no choice",
      "the only correct form"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot's Plug Won't Fit",
   "panels": [
    {
     "who": "Mint",
     "text": "It's raining. What's the plan for the picnic, Bot?"
    },
    {
     "who": "Nong Bot",
     "text": "We <s>will must</s> move it! Error… We <s>will can</s>… Error! Beep beep!"
    },
    {
     "who": "Ploy",
     "text": "Bot's stuck. It keeps pushing <em>must</em> in after <em>will</em>."
    },
    {
     "who": "Nong Bot",
     "text": "<em>Must</em> has only one shape. The <em>will</em> socket rejects it!"
    },
    {
     "who": "T.Chris",
     "text": "Use the stand-in: <em>We <strong>will have to</strong> move it.</em> <em>Have to</em> has every form <em>must</em> is missing."
    }
   ],
   "moral": "Where the grammar needs a form a modal hasn't got (after <em>will</em>, <em>to</em> or <em>has</em>), use <em>have to</em>, <em>be able to</em> or <em>be allowed to</em>."
  },
  "chant": {
   "title": "One-Shape Modal",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Must</em> has one shape, <em>can</em> has one too,",
    "No <em>to</em>, no <em>-ing</em>, no V3 for you!",
    "After <em>will</em>? <em>Will have to</em> go!",
    "After <em>to</em>? <em>To be able to</em>, whoa!",
    "After <em>has</em>? <em>Has been able to</em> swim,",
    "Not just style: it's the only way in!"
   ]
  },
  "moves": [
   {
    "move": "Hold up one stiff finger",
    "says": "A modal has only ONE form."
   },
   {
    "move": "Try to push a fist through a small ring made by your other hand",
    "says": "<s>will must</s>, <s>to can</s>: no way in!"
   },
   {
    "move": "Slide a flat hand through the ring instead",
    "says": "<em>will have to</em>, <em>to be able to</em>: the stand-in fits."
   },
   {
    "move": "Shrug with open hands",
    "says": "Not a choice, just the only way."
   }
  ]
 },
 "t1l3s2": {
  "thai": "วิธีเลือกรูปให้ถูกมีสองขั้นตอน ขั้นแรก ดูคำที่อยู่หน้าช่องว่าง หลัง will หรือ do ต้องเป็นรูปเปล่า หลัง want, hope หรือ need ต้องมี to หลัง have หรือ has ต้องเป็น V3 และหลัง without หรือ before ต้องเป็น -ing ขั้นที่สอง ผันวลีให้ตรงกับรูปนั้น have to ผันเหมือน have เช่น has to, had to, will have to ส่วน be able to ผันเหมือน be เช่น was able to, has been able to, to be able to จุดที่คนพลาดบ่อยคือใส่ tense ผิดคำ จำไว้ว่า tense อยู่ที่ have หรือ be เท่านั้น คำหลัง to ต้องเป็นรูปเปล่าเสมอ เช่น She has been able to walk since March. (เธอเดินได้ตั้งแต่เดือนมีนาคม) ไม่ใช่ has been able to walked และอย่าลืม be ด้วย has able to ผิด ต้องเป็น has been able to",
  "analogy": {
   "title": "Check the stall first",
   "text": "The word in front of the gap is like a canteen stall: the noodle stall wants noodles, the rice stall wants rice. After <em>will</em> → bare: <em>will have to</em>. After <em>hope</em> → <em>to</em>: <em>hope to be allowed to</em>. After <em>has</em> → V3: <em>has been able to</em>. After <em>without</em> → -ing: <em>without having to</em>. Check the stall first, then serve <em>have to</em> or <em>be able to</em> in the right bowl."
  },
  "trap": "Because <em>be able to</em> is three words, learners put the tense on the wrong one: <s>has able to</s> (no <em>been</em>), <s>has been able to walked</s>, <s>couldn't able to</s>. Thai <em>ได้</em> never changes, so changing <em>be</em> feels strange. Tests line up all these near misses together. Dodge: only <em>have</em> or <em>be</em> changes shape; <em>able</em>, <em>to</em> and the verb after <em>to</em> never move.",
  "map": {
   "center": "Choose the repair",
   "branches": [
    {
     "label": "Look left first",
     "leaves": [
      "the word before the gap",
      "decides the form"
     ]
    },
    {
     "label": "After will / do",
     "leaves": [
      "→ bare form",
      "will have to finish"
     ]
    },
    {
     "label": "After want/hope",
     "leaves": [
      "→ to + bare",
      "hope to be allowed to"
     ]
    },
    {
     "label": "After has / have",
     "leaves": [
      "→ V3: been, had",
      "has been able to walk"
     ]
    },
    {
     "label": "After without",
     "leaves": [
      "→ -ing form",
      "without having to"
     ]
    },
    {
     "label": "Tense lives on",
     "leaves": [
      "have / be only",
      "able to + bare: no change"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Doubles the Past",
   "panels": [
    {
     "who": "Pim",
     "text": "My grandpa had an operation in June. Now he climbs the stairs on his own!"
    },
    {
     "who": "Nong Bot",
     "text": "Wonderful! Since June he <s>has been able to climbed</s>! Beep!"
    },
    {
     "who": "Pim",
     "text": "Bot, you put the past in two places."
    },
    {
     "who": "Nong Bot",
     "text": "More past = more correct! Also: since June he <s>could</s> climb!"
    },
    {
     "who": "T.Chris",
     "text": "<em>Since</em> needs the perfect, and only <em>be</em> changes: <em>he <strong>has been able to climb</strong></em>."
    }
   ],
   "moral": "Look at the word before the gap, then change only <em>have</em> or <em>be</em>; everything after <em>to</em> stays bare."
  },
  "chant": {
   "title": "Look Left",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Look left first: what's in front of the gap?",
    "<em>Will</em>? Go bare: <em>will have to</em>, snap!",
    "<em>Hope</em>? Add <em>to</em>: <em>to be allowed to</em> go,",
    "<em>Has</em>? V3: <em>has been able to</em>, so!",
    "<em>Without</em>? <em>-ing</em>: <em>without having to</em> try,",
    "Only <em>have</em> or <em>be</em> will change, that's why!",
    "After <em>to</em> the verb stays plain, plain, plain,",
    "Look left, fix one word, and you're in the lane!"
   ]
  },
  "moves": [
   {
    "move": "Turn your head and point left",
    "says": "Look at the word before the gap."
   },
   {
    "move": "Wiggle just one finger",
    "says": "Only <em>have</em> or <em>be</em> changes: <em>had to</em>, <em>has been able to</em>."
   },
   {
    "move": "Hold your other hand flat and still",
    "says": "After <em>to</em>, a plain verb: <em>able to walk</em>, not <s>able to walked</s>."
   },
   {
    "move": "Point back over your shoulder, then down at the floor",
    "says": "<em>Since</em> + up to now → <em>has been able to</em>, not <s>could</s>."
   }
  ]
 },
 "t1l3s3": {
  "thai": "need กับ dare เป็นคำที่ยืนอยู่ตรงเส้นแบ่ง บางครั้งทำตัวเป็น modal บางครั้งเป็นกริยาธรรมดา วิธีตัดสินคือใช้ NICE test ถ้าเติม not ได้เอง หรือย้ายไปหน้าประธานได้เอง และตามด้วยกริยารูปเปล่า แปลว่าในประโยคนั้นเป็น modal เช่น You needn't wait. (ไม่จำเป็นต้องรอ) แต่ถ้าต้องยืม do และตามด้วย to แปลว่าเป็นกริยาธรรมดา เช่น You don't need to wait. ทั้งสองแบบถูกต้อง แต่ห้ามผสมกัน don't need bring หรือ needn't to bring ผิด ส่วน dare แบบ modal เหลือแค่ในสำนวน เช่น How dare you! และ I daren't look. สำหรับ have to นั้นไม่ใช่ modal เลย เพราะต้องใช้ do ในคำถามและปฏิเสธ เติม -s ได้ (she has to) และมีรูปอดีต (had to) ดังนั้น don't must ผิดเสมอ ต้องใช้ don't have to",
  "analogy": {
   "title": "The dual-SIM phone",
   "text": "<em>Need</em> is a dual-SIM phone. On the <strong>modal SIM</strong> it works alone: <em>You needn't wait.</em> <em>Need I say more?</em> On the <strong>ordinary SIM</strong> it calls <em>do</em> for help and adds <em>to</em>: <em>You don't need to wait.</em> Both work, but only one SIM per sentence, so <s>don't need wait</s> drops the call. <em>Have to</em> has only the ordinary SIM: <em>Do we have to pay?</em>"
  },
  "trap": "Because <em>have to</em> means much the same as <em>must</em>, learners treat it like a modal and write <s>don't must</s> or <s>Have to we…?</s> Others mix the two <em>need</em>s: <s>needn't to bring</s>, <s>don't need bring</s>. Tests put both mixes beside the correct forms. Dodge: run NICE. If the word takes <em>not</em> and inverts by itself, a bare verb follows; if it needs <em>do</em>, a <em>to</em> follows.",
  "map": {
   "center": "Modal or main verb?",
   "branches": [
    {
     "label": "The NICE test",
     "leaves": [
      "takes not by itself?",
      "inverts by itself?",
      "short answer alone?"
     ]
    },
    {
     "label": "Modal need",
     "leaves": [
      "needn't + bare verb",
      "Need I say more?"
     ]
    },
    {
     "label": "Ordinary need",
     "leaves": [
      "don't need to + verb",
      "Do I need to…?"
     ]
    },
    {
     "label": "dare",
     "leaves": [
      "How dare you!",
      "I daren't look."
     ]
    },
    {
     "label": "have to",
     "leaves": [
      "always ordinary",
      "do / has to / had to"
     ]
    },
    {
     "label": "Don't mix",
     "leaves": [
      "needn't to ✗",
      "don't need bring ✗",
      "don't must ✗"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Needs Too Much",
   "panels": [
    {
     "who": "Mai",
     "text": "Bot, do we need to bring laptops to the workshop?"
    },
    {
     "who": "Nong Bot",
     "text": "No! You <s>needn't to bring</s>… you <s>don't need bring</s>… Both <em>need</em>s at once = double safety! Beep!"
    },
    {
     "who": "Nan",
     "text": "And do we have to sign in?"
    },
    {
     "who": "Nong Bot",
     "text": "You <s>don't must</s>! Beep!"
    },
    {
     "who": "T.Chris",
     "text": "One <em>need</em> at a time: <em>you <strong>needn't bring</strong></em> or <em>you <strong>don't need to bring</strong></em>. And <em>have to</em> takes <em>do</em>: <em>you <strong>don't have to</strong> sign in</em>."
    }
   ],
   "moral": "Modal <em>need</em> works alone with a bare verb; ordinary <em>need</em> takes <em>do</em> and <em>to</em>; and <em>have to</em> is always ordinary."
  },
  "chant": {
   "title": "Two Needs, Don't Mix",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Needn't wait</em>: modal style, no <em>to</em>, no <em>do</em>!",
    "<em>Don't need to wait</em>: ordinary, that works too!",
    "Mix them up? <s>Needn't to</s>? No way!",
    "<s>Don't need wait</s>? That's a crash today!",
    "<em>Have to</em> calls <em>do</em>: <em>Do we have to pay?</em>",
    "<em>She has to</em>, <em>had to</em>: ordinary all day!",
    "Takes <em>not</em> and flips alone? Modal, it's true,",
    "Needs a <em>do</em>? Ordinary through and through!"
   ]
  },
  "moves": [
   {
    "move": "Point at the word, then flip your hand over",
    "says": "NICE test: does it take <em>not</em> and flip by itself?"
   },
   {
    "move": "Hold up one fist on its own",
    "says": "Modal <em>need</em> works alone: <em>You needn't wait.</em>"
   },
   {
    "move": "Cup your other hand under the fist like a helper",
    "says": "Ordinary <em>need</em> calls <em>do</em>: <em>You don't need to wait.</em>"
   },
   {
    "move": "Make a big X with both arms",
    "says": "Don't mix: <s>needn't to</s>, <s>don't need bring</s>, <s>don't must</s>."
   },
   {
    "move": "Keep the helper hand under the fist and nod",
    "says": "<em>have to</em> always needs <em>do</em>: <em>Do we have to pay?</em>"
   }
  ]
 },
 "t2l1s1": {
  "thai": "modal ที่ใช้ในการคาดเดา ไม่ได้เปลี่ยนตัวเหตุการณ์ แต่บอกว่าผู้พูด \"มั่นใจแค่ไหน\" จากหลักฐานที่มี ให้นึกภาพบันไดอันเดียว เรียงจากมั่นใจมากที่สุดลงไป must (หลักฐานไม่เหลือคำอธิบายอื่นแล้ว) → will (คาดได้แน่จากสิ่งที่รู้อยู่แล้ว) → should / ought to (ตามปกติน่าจะเป็นอย่างนั้น) → may / might / could (เป็นไปได้ เป็นหนึ่งในหลายคำตอบ ทั้งสามคำอยู่ขั้นเดียวกัน) และขั้นล่างสุดคือ can't (เป็นไปไม่ได้เลย) ตัวอย่าง The lights are off, so the office must be closed. (ไฟดับหมดแล้ว ออฟฟิศต้องปิดแล้วแน่ ๆ) ข้อควรจำ ขั้นล่างสุดคือ can't ไม่ใช่ mustn't และห้ามยืนสองขั้นพร้อมกัน เช่น might definitely ผิด เพราะ might แปลว่า \"อาจจะ\" แต่ definitely แปลว่า \"แน่นอน\" ถ้าเห็นกับตาตัวเองแล้ว ไม่ต้องใช้ modal เลย พูดว่า It is raining. ได้เลย",
  "analogy": {
   "title": "The condo lift",
   "text": "Think of the lift in a condo tower. The building never moves — only you do. Press the top button and you are at <em>must</em>: no other explanation. One floor down is <em>will</em>, then <em>should</em>. <em>May</em>, <em>might</em> and <em>could</em> all share one middle floor. The ground floor is <em>can't</em>. A modal is just the floor you choose to stand on."
  },
  "trap": "Students want to sound sure, so they bolt แน่ ๆ onto อาจจะ and write <s>might definitely</s> — two rungs at once. They also build the bottom rung from ต้อง + ไม่ and write <s>mustn't be open</s>. Tests hide the first in a find-the-error item and offer the second next to <em>can't</em>. Dodge: point at ONE rung — if your sentence needs two fingers on the ladder, it is wrong.",
  "map": {
   "center": "The certainty ladder",
   "branches": [
    {
     "label": "Top: must",
     "leaves": [
      "no other explanation",
      "lights off → must be shut"
     ]
    },
    {
     "label": "Near the top",
     "leaves": [
      "will = sure from habit",
      "should = normal pattern"
     ]
    },
    {
     "label": "Middle rung",
     "leaves": [
      "may = might = could",
      "one possibility of many"
     ]
    },
    {
     "label": "Bottom: can't",
     "leaves": [
      "no possibility at all",
      "can't ≠ mustn't"
     ]
    },
    {
     "label": "No modal",
     "leaves": [
      "you saw it → just say it",
      "It is raining = strongest"
     ]
    },
    {
     "label": "One rung only",
     "leaves": [
      "✗ might definitely",
      "one claim = one rung"
     ]
    }
   ]
  },
  "story": {
   "title": "Who Closed the Canteen?",
   "panels": [
    {
     "who": "Fah",
     "text": "The canteen lights are off and the shutters are down. It <em>must</em> be closed."
    },
    {
     "who": "Nong Bot",
     "text": "Beep! Fah said \"must\". Fah has closed the canteen! Reporting Fah to the principal!"
    },
    {
     "who": "Mai",
     "text": "And if I say it <em>might</em> be closed?"
    },
    {
     "who": "Nong Bot",
     "text": "Calculating… then it is half closed. Half a canteen. Half a bowl of noodles."
    },
    {
     "who": "T.Chris",
     "text": "Bot, the canteen didn't move. Fah did — <em>must</em> only shows how sure she is."
    }
   ],
   "moral": "A modal changes how sure the speaker is, not the event: <em>must</em> at the top, <em>may / might / could</em> in the middle, <em>can't</em> at the bottom."
  },
  "chant": {
   "title": "Climb the Ladder",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Must</em> on the top — no other way!",
    "<em>Will</em> just below — like every day!",
    "<em>Should</em> is the pattern, what I expect,",
    "<em>May, might, could</em> — one rung, all connect!",
    "<em>Can't</em> at the bottom — no chance at all,",
    "Not <s>mustn't</s>, not <s>mustn't</s> — that's a rule on the wall!",
    "Saw it with your eyes? Then drop the guess:",
    "<em>It is raining</em> — no modal, no stress!"
   ]
  },
  "moves": [
   {
    "move": "Hand high above your head, flat like a shelf",
    "says": "<em>Must</em> — no other explanation!"
   },
   {
    "move": "Hand at chin height",
    "says": "<em>Will</em>… <em>should</em> — I expect it."
   },
   {
    "move": "Hand at chest height, wobble it side to side",
    "says": "<em>May, might, could</em> — same rung, one possibility."
   },
   {
    "move": "Slap your palm flat on the desk",
    "says": "<em>Can't</em> — no possibility at all!"
   },
   {
    "move": "Point at your eyes, then wave the hand away",
    "says": "I saw it? No modal: <em>It is raining.</em>"
   }
  ]
 },
 "t2l1s2": {
  "thai": "เวลาคาดเดา may, might และ could มีความหมายเกือบเหมือนกัน ทั้งสามคำบอกว่า \"เป็นไปได้ เป็นหนึ่งในหลายคำตอบ\" เช่น The fault may / might / could be in the router. (ปัญหาอาจจะอยู่ที่เราเตอร์ก็ได้) บางคนรู้สึกว่า might ฟังไม่แน่ใจกว่า may นิดหน่อย แต่ต่างกันน้อยมาก และเจ้าของภาษาเองก็ยังเห็นไม่ตรงกัน ความต่างที่สำคัญกว่าคือระดับภาษา may เป็นคำที่ใช้ในงานเขียนทางการ เช่น รายงานหรืองานวิชาการ ส่วน might และ could ใช้บ่อยในภาษาพูด สิ่งที่ต้องตัดสินใจจริง ๆ คือ \"ขั้น\" บนบันได เพราะถ้าเปลี่ยนจาก may เป็น must หรือ can't ความหมายจะเปลี่ยนทั้งประโยค แต่ถ้าเปลี่ยนจาก may เป็น might ความหมายแทบไม่เปลี่ยนเลย และในงานเขียนไม่จำเป็นต้องซ้อนคำแสดงความไม่แน่ใจ เช่น might possibly หรือ could maybe (ไม่ผิดไวยากรณ์) เพราะ might อย่างเดียวก็บอกครบแล้ว ซ้อนบ่อย ๆ จะฟังเหมือนผู้เขียนตัดสินใจไม่ได้",
  "analogy": {
   "title": "One drink, three names",
   "text": "At the canteen you might order <em>cha yen</em>, write <em>Thai iced tea</em> on the class menu poster, or just say \"the orange one\". Same drink, three names — you pick the name for the situation. <em>May</em>, <em>might</em> and <em>could</em> are one guess with three names: <em>may</em> for the written report, <em>might</em> and <em>could</em> for chatting. Switching to <em>must</em> is ordering a different drink."
  },
  "trap": "Students memorise \"might = 30%, may = 50%\" and waste time choosing between them, then miss the real change: the rung. Thai อาจจะ…ก็ได้ also makes a double hedge feel normal, so <em>might possibly</em> and <em>could maybe</em> look \"careful\". They aren't wrong, but one hedge is usually enough. Tests put <em>may</em>, <em>might</em> and <em>could</em> side by side so none can be the one answer. Dodge: if two options differ only by may/might/could, the answer is the odd rung out.",
  "map": {
   "center": "The weak middle",
   "branches": [
    {
     "label": "Same claim",
     "leaves": [
      "may = might = could",
      "one possibility of many"
     ]
    },
    {
     "label": "may",
     "leaves": [
      "formal writing, reports",
      "can mean permission too"
     ]
    },
    {
     "label": "might / could",
     "leaves": [
      "commoner in speech",
      "could also = ability"
     ]
    },
    {
     "label": "What matters",
     "leaves": [
      "the rung, not the word",
      "may → must = new claim"
     ]
    },
    {
     "label": "Double hedge?",
     "leaves": [
      "might possibly = extra-unsure",
      "not wrong, but rarely needed",
      "one hedge is usually enough"
     ]
    }
   ]
  },
  "story": {
   "title": "Bot Does the Maths",
   "panels": [
    {
     "who": "Pim",
     "text": "Where's Nan? She <em>might</em> be in the library."
    },
    {
     "who": "Mint",
     "text": "Or she <em>could</em> be in the library."
    },
    {
     "who": "Nong Bot",
     "text": "Error! Pim says 40%. Mint says 37.5%. Searching the library at 38.75% speed…"
    },
    {
     "who": "Nan",
     "text": "(walking in) Hi! I was in the music room."
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>might</em> and <em>could</em> made the same guess — one possibility. The music room was just another one."
    }
   ],
   "moral": "In a guess, <em>may</em>, <em>might</em> and <em>could</em> say the same thing: one possibility among several."
  },
  "chant": {
   "title": "Three Names, One Rung",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>May, might, could</em> — they're all the same,",
    "One possibility, three names in the game!",
    "<em>May</em> for writing, formal and neat,",
    "<em>Might</em> and <em>could</em> when you chat in the street.",
    "<em>Might possibly</em>? <em>Could maybe</em>? Too much to say —",
    "One hedge is enough in your essay today!",
    "Change the word — the claim stays the same,",
    "Change the rung — it's a brand-new claim!"
   ]
  },
  "moves": [
   {
    "move": "Hold up three fingers, then squeeze them into one fist",
    "says": "<em>May, might, could</em> — one rung, one claim."
   },
   {
    "move": "Mime writing neatly with a pen",
    "says": "<em>May</em> — the formal written one."
   },
   {
    "move": "Open and close your hand like a talking mouth",
    "says": "<em>Might</em>, <em>could</em> — commoner in speech."
   },
   {
    "move": "Hold up two fingers, then fold one down",
    "says": "One hedge is usually enough: just <em>might</em>."
   },
   {
    "move": "Move a flat hand up a level",
    "says": "Change the rung → you change the claim."
   }
  ]
 },
 "t2l1s3": {
  "thai": "must มีสองหน้าที่ หน้าที่แรกคือข้อบังคับ เช่น Visitors must sign in. (ผู้มาติดต่อต้องลงชื่อ) หน้าที่ที่สองคือการคาดเดาจากหลักฐาน เช่น The lift must be broken again. (ลิฟต์ต้องเสียอีกแล้วแน่ ๆ) วิธีแยกง่าย ๆ คือดูประธาน ถ้าประธานเป็นสิ่งของ เช่น ลิฟต์ เครื่องพิมพ์ หรือตัวเลข ซึ่งทำตามกฎไม่ได้ และไม่ใช่ประโยค passive ที่บอกว่าคนต้องทำอะไรกับสิ่งนั้น must ตรงนั้นมักเป็นการคาดเดา (แต่ The form must be signed. ยังเป็นกฎ) และดูคำที่ตามหลัง ถ้าเป็นสภาพ เช่น be, know, belong หรือเป็น be + -ing ก็มักเป็นการคาดเดา ส่วน will ไม่ใช่แค่ \"อนาคต\" แต่เป็นการคาดเดาอย่างมั่นใจจากสิ่งที่เรารู้อยู่แล้ว เช่น ได้ยินกริ่งดังตามเวลาปกติแล้วพูดว่า That will be the courier. (นั่นคงเป็นคนส่งของแน่เลย) ซึ่งเป็นการคาดเดาเรื่อง \"ตอนนี้\" ระวังประโยค Somebody must work late ฟังเหมือนเป็นคำสั่ง ถ้าจะคาดเดาต้องใช้ Somebody must be working late.",
  "analogy": {
   "title": "Shoes outside the door",
   "text": "At 7.30 the guard blows his whistle: everyone <em>must</em> be inside the gate. That is a rule. Later you see forty pairs of shoes outside the music room and say, \"There <em>must</em> be a rehearsal.\" Nobody ordered anything — you worked it out. Then your phone buzzes at 9 p.m. sharp: \"That'll be Mum.\" <em>Will</em> here is a guess about right now, from habit."
  },
  "trap": "Thai ต้อง makes students read every <em>must</em> as a rule, and จะ makes every <em>will</em> look like the future. So in \"which one is a deduction?\" they choose a rule, and they write <s>Somebody must work late</s> when they mean a guess about now. Dodge: ask \"Can the subject obey?\" A lift, a server or a printer can't — so <em>The lift must be stuck</em> is a deduction. But a passive rule (<em>Forms must be signed</em>) is still a rule.",
  "map": {
   "center": "must / will = deduce",
   "branches": [
    {
     "label": "Deduction",
     "leaves": [
      "I worked it out",
      "The lift must be stuck"
     ]
    },
    {
     "label": "Obligation",
     "leaves": [
      "a rule + an authority",
      "Staff must sign in"
     ]
    },
    {
     "label": "Deduction clues",
     "leaves": [
      "subject can't obey (not a passive rule)",
      "must be / know / belong",
      "must be + -ing = now"
     ]
    },
    {
     "label": "will",
     "leaves": [
      "not a future tense",
      "That'll be the courier",
      "from a known pattern"
     ]
    },
    {
     "label": "must vs will",
     "leaves": [
      "must ← evidence I see",
      "will ← what I know"
     ]
    },
    {
     "label": "Seen it?",
     "leaves": [
      "then no must",
      "must = I didn't see it"
     ]
    }
   ]
  },
  "story": {
   "title": "Orders for the Server",
   "panels": [
    {
     "who": "Mint",
     "text": "The screen's frozen again. The server <em>must</em> be down."
    },
    {
     "who": "Nong Bot",
     "text": "Beep! Server, you MUST be down! That is an order! …Good server. It is obeying."
    },
    {
     "who": "Ploy",
     "text": "(phone buzzes at 9 p.m. sharp) That'll be my mum."
    },
    {
     "who": "Nong Bot",
     "text": "Future tense detected! Your mum will call… tomorrow? Next year?"
    },
    {
     "who": "T.Chris",
     "text": "Bot, both are guesses about right now. Mint worked it out from the screen, Ploy from her mum's habit."
    }
   ],
   "moral": "At the top of the ladder, <em>must</em> and <em>will</em> report a deduction — not a rule and not the future."
  },
  "chant": {
   "title": "Rule or Clue?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Lift not moving? It <em>must</em> be stuck —",
    "Nobody ordered it, just bad luck!",
    "<em>Staff must sign in</em>? That's a rule on the door,",
    "A person who can act — that's what rules are for!",
    "Phone rings at seven? \"<em>That'll</em> be Nok!\"",
    "<em>Will</em> isn't future — it's reading the clock!",
    "Lift or printer? It can't obey — it's a guess:",
    "<em>Must be</em>, <em>will be</em> — I worked it out, yes!"
   ]
  },
  "moves": [
   {
    "move": "Point a stern finger forward",
    "says": "Rule: <em>Staff must sign in.</em> A person who can obey."
   },
   {
    "move": "Tap your temple, then point at something on your desk",
    "says": "Clue: <em>The printer must be out of toner.</em>"
   },
   {
    "move": "Cup a hand to your ear, as if hearing a bell",
    "says": "<em>That'll be the courier</em> — <em>will</em>, about right now."
   },
   {
    "move": "Hold out a fist (the subject) and shake your head at it",
    "says": "Can it obey? No, and it's not a passive rule → it's a deduction."
   }
  ]
 },
 "t2l2s1": {
  "thai": "ถ้าจะปฏิเสธการคาดเดาที่ใช้ must ให้มั่นใจเท่าเดิม ต้องใช้ can't ไม่ใช่ mustn't เช่น His car is gone, so he must be at the hospital. (รถเขาไม่อยู่ เขาต้องอยู่ที่โรงพยาบาลแน่ ๆ) ฝั่งตรงข้ามคือ His car is still here, so he can't be at the hospital. (รถเขายังจอดอยู่ เขาไม่มีทางอยู่ที่โรงพยาบาลหรอก) ส่วนประโยค He mustn't be at the hospital ถูกไวยากรณ์ แต่แปลว่า \"ห้ามเขาอยู่ที่โรงพยาบาล\" ซึ่งเป็นข้อห้าม ไม่ใช่การคาดเดา เพราะ mustn't ถูกใช้ในความหมาย \"ห้าม\" ไปแล้ว ภาษาอังกฤษจึงใช้คำอื่นมาแทน ให้จำเป็นคู่ must be ↔ can't be เหมือนจำ go ↔ went ไม่ต้องหากฎ ทั้งสองข้างมั่นใจพอ ๆ กัน แค่คนละทิศ และในงานเขียนทางการให้ใช้ cannot แบบเต็ม",
  "analogy": {
   "title": "PUSH and PULL",
   "text": "Walk into 7-Eleven: the door says PUSH. Walk out: it doesn't say NOT PUSH — it says PULL. A different word does the opposite job. Certainty works the same way: the opposite of <em>must be</em> is <em>can't be</em>. And <em>mustn't</em>? That is the NO ENTRY sign on the staff room — a rule, never a guess."
  },
  "trap": "Thai makes a negative by adding ไม่, so students add <em>-n't</em>: <em>must</em> → <s>mustn't</s>. But <em>mustn't</em> means ห้าม — a prohibition. Tests put <em>mustn't</em> in a find-the-error sentence about an envelope or a photo, or as an option beside <em>can't</em>. Dodge: swap in \"is forbidden to\". If the sentence turns silly (an envelope is forbidden?), you need <em>can't</em>.",
  "map": {
   "center": "must ↔ can't",
   "branches": [
    {
     "label": "Positive",
     "leaves": [
      "must be = sure it is",
      "car gone → must be there"
     ]
    },
    {
     "label": "Negative",
     "leaves": [
      "can't be = sure it isn't",
      "car here → can't be there"
     ]
    },
    {
     "label": "Not mustn't",
     "leaves": [
      "mustn't = forbidden",
      "✗ He mustn't be home"
     ]
    },
    {
     "label": "Learn the pair",
     "leaves": [
      "must be ↔ can't be",
      "like go ↔ went"
     ]
    },
    {
     "label": "Formal",
     "leaves": [
      "write cannot in full",
      "couldn't = a bit softer"
     ]
    },
    {
     "label": "Strength",
     "leaves": [
      "both ends = strong",
      "same rung, other side"
     ]
    }
   ]
  },
  "story": {
   "title": "The Forbidden Cup",
   "panels": [
    {
     "who": "Nan",
     "text": "Is that T.Chris's coffee? His cup is always blue, and this one is pink."
    },
    {
     "who": "Nong Bot",
     "text": "Logic: add \"not\". So it <s>mustn't be</s> his coffee!"
    },
    {
     "who": "Pim",
     "text": "Wait — it's <em>forbidden</em> to be his coffee? Is the coffee in trouble?"
    },
    {
     "who": "Nong Bot",
     "text": "Yes! Pink cup, you are forbidden to belong to T.Chris! (drops it in the bin)"
    },
    {
     "who": "T.Chris",
     "text": "That was my new cup, Bot. And when you're sure it isn't mine, say \"It <em>can't</em> be his.\""
    }
   ],
   "moral": "The negative of <em>must be</em> is <em>can't be</em>; <em>mustn't</em> only ever makes a rule."
  },
  "chant": {
   "title": "Must Up, Can't Down",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Must be</em> up, <em>can't be</em> down,",
    "Two different words — learn them both by sound!",
    "Car's still here? He <em>can't</em> be out,",
    "<em>Mustn't</em> is a rule — no guessing about!",
    "Like <em>go</em> and <em>went</em>, they don't look the same,",
    "<em>Must</em> and <em>can't</em> — same strength, two names!",
    "Writing it formal? Spell out <em>cannot</em>,",
    "Sure that it's false? <em>Can't</em> hits the spot!"
   ]
  },
  "moves": [
   {
    "move": "Hand high, palm flat",
    "says": "<em>He must be at home.</em>"
   },
   {
    "move": "Flip the same hand upside down and drop it to the desk",
    "says": "<em>He can't be at home.</em> Just as sure — other side."
   },
   {
    "move": "Cross your arms in an X",
    "says": "<em>Mustn't</em> = a rule: <em>You mustn't go home!</em>"
   },
   {
    "move": "Clap both hands together like closing a book",
    "says": "Learn the pair: <em>must be</em> ↔ <em>can't be</em>."
   }
  ]
 },
 "t2l2s2": {
  "thai": "เรื่องนี้ขึ้นอยู่กับว่าคำว่า not ไปอยู่ตรงไหน She may not be coming. แปลว่า \"เป็นไปได้ที่เธอจะไม่มา\" คำถามยังเปิดอยู่ เธออาจจะมาก็ได้ ส่วน She can't be coming. แปลว่า \"เป็นไปไม่ได้ที่เธอจะมา\" ปิดประตูไปเลย สองประโยคนี้ไม่ใช่ความหมายเดียวกันที่แรงต่างกัน แต่เป็นคนละข้อความ ถ้าเปลี่ยน may not เป็น can't ก็ไม่ได้แค่ทำให้ประโยคแรงขึ้น แต่เปลี่ยนสิ่งที่เราอ้างไปทั้งหมด เช่น The samples may not be contaminated. (ตัวอย่างอาจจะไม่ได้ปนเปื้อน แต่ก็อาจปนเปื้อนก็ได้) ไม่ได้บอกว่าตัวอย่างสะอาด วิธีทดสอบ ลองเติมท้ายประโยคว่า …but then again, she might. ถ้าเติมแล้วยังฟังเข้าท่า ต้องใช้ may not ถ้าเติมแล้วขัดกันเอง แปลว่าต้องใช้ can't",
  "analogy": {
   "title": "The Grab driver",
   "text": "Your Grab app says \"Driver delayed\". Your friend says, \"He <em>may not</em> be coming\" — but his car is still on the map, so he might turn up. Then the app says \"Trip cancelled\". Now it's \"He <em>can't</em> be coming.\" <em>May not</em> keeps the door open; <em>can't</em> slams it shut."
  },
  "trap": "Students treat <em>may not</em> as a soft <em>can't</em> — two volumes of \"no\" — because อาจจะไม่ and ไม่มีทาง feel like neighbours. They aren't: one keeps the question open, the other closes it. Tests give thin evidence (a habit, early complaints, figures not in yet) and offer <em>can't</em> as the bold-looking choice. Dodge: add \"…but then again, it might.\" Still makes sense? You need <em>may not</em>.",
  "map": {
   "center": "Where is the NOT?",
   "branches": [
    {
     "label": "may not",
     "leaves": [
      "possible that NOT",
      "question still open"
     ]
    },
    {
     "label": "might not",
     "leaves": [
      "= may not",
      "both answers alive"
     ]
    },
    {
     "label": "can't",
     "leaves": [
      "NOT possible that",
      "question closed"
     ]
    },
    {
     "label": "Not the same",
     "leaves": [
      "not 2 strengths of no",
      "swap them → new claim"
     ]
    },
    {
     "label": "The test",
     "leaves": [
      "+ but then again, it might",
      "OK → may not",
      "clash → can't"
     ]
    },
    {
     "label": "Evidence",
     "leaves": [
      "no proof yet → may not",
      "proof → can't"
     ]
    }
   ]
  },
  "story": {
   "title": "The Deleted Chair",
   "panels": [
    {
     "who": "Fah",
     "text": "Mint isn't online. She <em>may not</em> be coming to the study group."
    },
    {
     "who": "Nong Bot",
     "text": "Upgrading: Mint <em>can't</em> be coming. I have given her chair away."
    },
    {
     "who": "Mint",
     "text": "(running in) Sorry I'm late! My phone battery died."
    },
    {
     "who": "Nong Bot",
     "text": "Error. You can't be here. Please leave."
    },
    {
     "who": "T.Chris",
     "text": "Bot, Fah left the door open — <em>may not</em> means she might still come. <em>Can't</em> shut it."
    }
   ],
   "moral": "<em>May not</em> = possibly not, the question is still open; <em>can't</em> = not possible, the question is closed."
  },
  "chant": {
   "title": "Door Open, Door Shut",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>May not</em>, <em>might not</em> — the door's still open,",
    "Maybe she's coming, maybe not — keep hoping!",
    "<em>Can't</em> means no way — the door slams shut,",
    "Not possible at all — no if, no but!",
    "Where's the <em>not</em>? Inside or out?",
    "Swap them around and you turn it about!",
    "Test it: \"but then again, she might\" —",
    "Works? <em>May not</em>. Clashes? <em>Can't</em> is right!"
   ]
  },
  "moves": [
   {
    "move": "Hold an imaginary door open with one hand",
    "says": "<em>She may not be coming</em> — door still open."
   },
   {
    "move": "Slam an imaginary door shut with both hands",
    "says": "<em>She can't be coming</em> — door shut."
   },
   {
    "move": "Rock a flat hand like a seesaw",
    "says": "\"…but then again, she might\" makes sense? → <em>may not</em>."
   },
   {
    "move": "Bang two fists together like a crash",
    "says": "\"…but then again, she might\" clashes? → <em>can't</em>."
   }
  ]
 },
 "t2l2s3": {
  "thai": "สรุปทั้งระบบในตารางเดียว ฝั่งบวกเรียงจากบนลงล่าง must · will · should / ought to · may / might / could ฝั่งลบเรียงจากล่างขึ้นบน can't / cannot · won't · shouldn't · may not / might not จุดสำคัญคือ ขั้นบนสุดกับขั้นล่างสุดเป็นคู่กัน must ↔ can't มั่นใจมากเท่ากันแต่คนละทิศ will ↔ won't ต่ำลงมานิดหนึ่ง should ↔ shouldn't คือระดับ “คาดว่าน่าจะ” ส่วนขั้นกลางยังอยู่ตรงกลาง may ↔ may not เพราะ \"อาจจะใช่\" กับ \"อาจจะไม่ใช่\" ไม่แน่ใจเท่ากัน ระดับเหล่านี้วัดความมั่นใจของผู้พูด ไม่ใช่ตัวเหตุการณ์ เวลาเขียนให้ตัดสินใจระดับความมั่นใจก่อน แล้วค่อยเลือกคำจากตาราง จากนั้นอ่านทวนว่าไม่มีใครอ่าน modal ของเราเป็นกฎได้ เช่น The archive can't be on the third floor. (ห้องเก็บเอกสารไม่มีทางอยู่ชั้นสามหรอก) ห้ามใช้ mustn't เพราะแปลว่า \"ห้าม\"",
  "analogy": {
   "title": "The class timetable",
   "text": "You never guess what's in Period 3 on Tuesday — you find the row, find the column and read the box. The certainty grid works the same way. Row = how sure you are (sure, a bit less sure, expected, the middle). Column = yes or no. And the \"no\" box in the <em>must</em> row doesn't say <em>mustn't</em> — it says <em>can't</em>."
  },
  "trap": "Students fill the negative column by adding <em>-n't</em> to everything (<em>must</em> → <s>mustn't</s>) and read <em>may not</em> as a strong \"no\". Tests mix both: a sort with <em>can't</em>, <em>couldn't</em>, <em>may not</em> and <em>might not</em>, or a cloze where <em>must not</em> and <em>need not</em> sit beside <em>cannot</em>. Dodge: decide first — sure, or still open? — then read the word off the grid.",
  "map": {
   "center": "The certainty grid",
   "branches": [
    {
     "label": "Top (sure)",
     "leaves": [
      "must ↔ can't / cannot",
      "just as sure, flipped"
     ]
    },
    {
     "label": "will ↔ won't",
     "leaves": [
      "a bit below must",
      "That won't be the courier"
     ]
    },
    {
     "label": "Expect",
     "leaves": [
      "should ↔ shouldn't",
      "shouldn't = expect not"
     ]
    },
    {
     "label": "Middle",
     "leaves": [
      "may / might / could",
      "may not / might not",
      "possibly yes = possibly no"
     ]
    },
    {
     "label": "How to write",
     "leaves": [
      "1 pick the strength",
      "2 read the word off",
      "3 check: not a rule?"
     ]
    },
    {
     "label": "Not on the grid",
     "leaves": [
      "mustn't = a rule",
      "need not = no requirement"
     ]
    }
   ]
  },
  "story": {
   "title": "Bot Makes It Polite",
   "panels": [
    {
     "who": "Fah",
     "text": "(holding a phone with no case) This <em>must</em> be Pim's."
    },
    {
     "who": "Pim",
     "text": "It <em>can't</em> be mine — mine has a pink case."
    },
    {
     "who": "Nong Bot",
     "text": "Too strong! Making it polite: \"It <em>may not</em> be Pim's.\""
    },
    {
     "who": "Fah",
     "text": "So… maybe it IS Pim's? Here, Pim, take it!"
    },
    {
     "who": "Pim",
     "text": "But I'm SURE it isn't!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>may not</em> isn't a polite <em>can't</em> — it reopens the question. Pim was on the bottom rung."
    }
   ],
   "moral": "Pick the strength first, then read the word off the grid: sure it's not = <em>can't</em>, still open = <em>may not</em>."
  },
  "chant": {
   "title": "Flip the Grid",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Must</em> flips to <em>can't</em> — top to the floor,",
    "<em>Will</em> flips to <em>won't</em> — just a little bit lower,",
    "<em>Should</em> flips to <em>shouldn't</em> — expected, both sides,",
    "<em>May</em> flips to <em>may not</em> — the middle's alive!",
    "Pick the strength first, then read the box,",
    "Check it's not a rule — <s>mustn't</s> gets knocked!"
   ]
  },
  "moves": [
   {
    "move": "Hand high, then flip it and slam it low",
    "says": "<em>must</em> ↔ <em>can't</em> — top flips to bottom."
   },
   {
    "move": "Hand at shoulder height, flip it to waist height",
    "says": "<em>should</em> ↔ <em>shouldn't</em> — expectation, both ways."
   },
   {
    "move": "Hand at chest height, turn the palm up and down without moving it",
    "says": "<em>may</em> ↔ <em>may not</em> — the middle stays in the middle."
   },
   {
    "move": "Draw a grid in the air: one line down, one line across",
    "says": "Row = strength, column = yes or no. Read the box."
   },
   {
    "move": "Cross your arms in an X",
    "says": "<em>mustn't</em>? That's a rule — not on the grid."
   }
  ]
 },
 "t2l3s1": {
  "thai": "ถ้าอยากคาดเดาว่า \"ตอนนี้\" กำลังเกิดอะไรขึ้น ให้ใช้ modal + be + V-ing เช่น The kitchen fan is running, so somebody must be cooking. (พัดลมดูดควันเปิดอยู่ ต้องมีคนกำลังทำอาหารอยู่แน่ ๆ) modal บอกความมั่นใจ ส่วน be + -ing บอกว่ากำลังเกิดขึ้นอยู่ตอนนี้ ข้อดีอีกอย่างคือ พอใส่ be + -ing แล้ว ประโยคจะไม่ถูกอ่านเป็นข้อบังคับอีก Somebody must work late ฟังเหมือนคำสั่งว่าต้องมีคนอยู่ทำงานดึก แต่ Somebody must be working late เป็นการคาดเดาล้วน ๆ โครงสร้างนี้ใช้ได้ทุกขั้นบนบันได เช่น could be waiting, should be landing, can't be sleeping ข้อควรระวัง กริยาที่บอกสภาพ เช่น know, understand, belong ไม่ใส่ -ing ต้องพูดว่า She must know by now. ไม่ใช่ must be knowing เพราะการรู้ไม่ใช่สิ่งที่เรา \"กำลังทำอยู่\"",
  "analogy": {
   "title": "The Grab map",
   "text": "Your Grab driver's car icon is crawling down Sukhumvit: \"He <em>must be sitting</em> in traffic.\" The <em>be + -ing</em> puts your guess on right now. The icon stops outside a 7-Eleven: \"He <em>could be buying</em> a drink.\" But you don't say he <s>must be knowing</s> the way — knowing isn't something he's in the middle of. He <em>must know</em> the way."
  },
  "trap": "Thai กำลัง…อยู่ seems to fit every verb, so students write <s>must be knowing</s>, <s>must be understanding</s>, <s>must be belonging</s>. Tests hide one in a \"which is not possible?\" or find-the-error item. The opposite slip is <s>Somebody must work late</s>, which sounds like a rule, for a guess about now. Dodge: ask \"Can you be in the middle of it?\" Yes → <em>be + -ing</em>; no → keep it simple.",
  "map": {
   "center": "modal + be + -ing",
   "branches": [
    {
     "label": "The chain",
     "leaves": [
      "modal → be → -ing",
      "She must be running it"
     ]
    },
    {
     "label": "= right now",
     "leaves": [
      "fan on → must be cooking",
      "-ing carries the \"now\""
     ]
    },
    {
     "label": "Every rung",
     "leaves": [
      "should be landing",
      "could be waiting",
      "can't be sleeping"
     ]
    },
    {
     "label": "No rule reading",
     "leaves": [
      "must work = sounds a rule",
      "must be working = guess"
     ]
    },
    {
     "label": "State verbs",
     "leaves": [
      "know · understand · belong",
      "✗ must be knowing",
      "✓ She must know by now"
     ]
    }
   ]
  },
  "story": {
   "title": "Bot Adds -ing",
   "panels": [
    {
     "who": "Nan",
     "text": "The music room speakers are booming. Pim <em>must be practising</em> for the concert."
    },
    {
     "who": "Nong Bot",
     "text": "Understood! Pim <s>must be knowing</s> all the songs. Pim <s>must be belonging</s> to the band."
    },
    {
     "who": "Mai",
     "text": "Bot, you sound like a broken translation app."
    },
    {
     "who": "Nong Bot",
     "text": "Oh no. I <em>must be malfunctioning</em>!"
    },
    {
     "who": "T.Chris",
     "text": "That one's right, Bot! But knowing isn't an activity: Pim <em>must know</em> the songs and <em>must belong</em> to the band."
    }
   ],
   "moral": "Modal + <em>be</em> + <em>-ing</em> is a guess about right now — but state verbs like <em>know</em>, <em>understand</em> and <em>belong</em> stay simple."
  },
  "chant": {
   "title": "Right-Now Chain",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Modal — <em>be</em> — <em>-ing</em>: that's the chain,",
    "A guess about now, again and again!",
    "Fan is on? Somebody <em>must be cooking</em>!",
    "Light is on? He <em>can't be sleeping</em> — go and look in!",
    "<em>Must work late</em> sounds like a rule from the boss,",
    "<em>Must be working</em> — now the rule gets lost!",
    "But <em>know</em> and <em>belong</em> don't take the ring:",
    "<em>She must know</em> — no <s>knowing</s>, no -ing!"
   ]
  },
  "moves": [
   {
    "move": "Link three fingers one by one, left to right",
    "says": "Modal → <em>be</em> → <em>-ing</em>."
   },
   {
    "move": "Tap your wrist like a watch",
    "says": "<em>-ing</em> = right now: <em>She must be running a seminar.</em>"
   },
   {
    "move": "Stir an imaginary pot",
    "says": "<em>Somebody must be cooking.</em>"
   },
   {
    "move": "Tap your head, then wag a finger",
    "says": "<em>Know</em> is a state: <em>She must know</em>, not <s>must be knowing</s>."
   }
  ]
 },
 "t2l3s2": {
  "thai": "should มีสองหน้าที่ หน้าที่แรกคือให้คำแนะนำ เช่น You should book early. (เธอควรจองเร็ว ๆ) หน้าที่ที่สองคือการคาดการณ์จากสิ่งที่เป็นปกติ เช่น The results should be online by Friday. (ผลน่าจะขึ้นออนไลน์ภายในวันศุกร์) วิธีแยกคือดูประธาน ถ้าเป็นพัสดุ แบตเตอรี่ หรือฝน ซึ่งรับคำแนะนำไม่ได้ should ตรงนั้นแปลว่า \"น่าจะ\" ไม่ใช่ \"ควร\" (ยกเว้นรูป passive ที่เป็นคำแนะนำ เช่น Goggles should be worn.) และมักมีคำบอกเวลา เช่น by now, by Friday หรือตามด้วย be / be + -ing should แบบคาดการณ์มั่นใจพอจะวางแผนได้ แต่ยอมรับว่าอาจผิดได้ จึงเหมาะกับตารางเวลา พยากรณ์อากาศ และการประมาณ ought to อยู่ขั้นเดียวกันแต่ทางการกว่านิดหน่อย ส่วน shouldn't แปลว่า \"ไม่น่าจะ\" เช่น There shouldn't be much traffic before six. อย่าเปลี่ยนไปใช้ must เพราะตารางเวลาไม่ใช่หลักฐานที่ยืนยันได้",
  "analogy": {
   "title": "The BTS screen",
   "text": "The platform screen says the next train comes in three minutes. \"It <em>should</em> be here in three minutes.\" You trust the pattern enough to stand by the doors, but you won't be shocked by a delay. You'd only say <em>must</em> if you could hear it braking into the station. And you can't give a train advice — so this <em>should</em> isn't advice. It's an expectation."
  },
  "trap": "Thai teaches ควร = <em>should</em>, so students read every <em>should</em> as advice — even when the subject is a parcel, a battery or the rain. The other slip: climbing to <em>must</em> to sound confident (<s>They left at nine, so they must be arriving now</s>). Tests offer <em>must</em> as the \"strong\" choice for a timetable or a trend. Dodge: ask \"Can the subject take advice?\" No, and it isn't a passive instruction (<em>should be worn</em>) → it's an expectation, so keep <em>should</em>.",
  "map": {
   "center": "should = expect",
   "branches": [
    {
     "label": "Advice",
     "leaves": [
      "You should book early",
      "subject can choose"
     ]
    },
    {
     "label": "Expectation",
     "leaves": [
      "should be online by Fri",
      "from a normal pattern"
     ]
    },
    {
     "label": "Clues",
     "leaves": [
      "subject can't act (not a passive instruction)",
      "by now / by Friday",
      "should be / be + -ing"
     ]
    },
    {
     "label": "ought to",
     "leaves": [
      "same rung as should",
      "a bit more formal"
     ]
    },
    {
     "label": "shouldn't",
     "leaves": [
      "= expect it's not so",
      "little traffic before 6"
     ]
    },
    {
     "label": "Not must",
     "leaves": [
      "timetable ≠ proof",
      "may be wrong — that's OK"
     ]
    }
   ]
  },
  "story": {
   "title": "Advice for a Parcel",
   "panels": [
    {
     "who": "Pim",
     "text": "I ordered my new phone case on Monday. It <em>should</em> arrive today."
    },
    {
     "who": "Nong Bot",
     "text": "Advice received! Parcel, you should arrive today. I strongly recommend it."
    },
    {
     "who": "Nong Bot",
     "text": "(two hours later) The parcel is ignoring my advice. Rude parcel."
    },
    {
     "who": "Mai",
     "text": "Bot, a parcel can't take advice."
    },
    {
     "who": "T.Chris",
     "text": "Pim isn't advising the parcel, Bot — she's expecting it. <em>Should</em> here means \"if things go normally\"."
    }
   ],
   "moral": "When the subject can't take advice (and it isn't a passive instruction like <em>Goggles should be worn</em>), <em>should</em> is an expectation from a normal pattern — confident, but it might be wrong."
  },
  "chant": {
   "title": "Advice or Expect?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>You should rest</em> — that's advice for you,",
    "<em>It should arrive</em> — that's what I expect it to do!",
    "Parcel, battery, rain — they can't take advice,",
    "So <em>should</em> means \"expected\" — say it twice!",
    "<em>By now</em>, <em>by Friday</em> — the clock gives a clue,",
    "<em>Ought to</em> is the same, a bit formal too.",
    "A timetable's no proof, so don't jump to <em>must</em>:",
    "<em>Should</em> is the rung of a pattern you trust!"
   ]
  },
  "moves": [
   {
    "move": "Put a hand on your own shoulder, kind face",
    "says": "Advice: <em>You should book early.</em>"
   },
   {
    "move": "Look at your wrist like a watch and nod",
    "says": "Expectation: <em>They should be arriving about now.</em>"
   },
   {
    "move": "Hand at chin height, then a small wobble",
    "says": "<em>Should</em> = I expect it, but I might be wrong."
   },
   {
    "move": "Hand low in front, shake your head slowly",
    "says": "<em>There shouldn't be much traffic before six.</em>"
   },
   {
    "move": "Raise your hand but stop before the top",
    "says": "A timetable isn't proof — not <em>must</em>."
   }
  ]
 },
 "t2l3s3": {
  "thai": "เวลาอ่านบทความหรือรายงาน ให้อ่านสองชั้น ชั้นแรกคือเนื้อหา ซึ่งอยู่ในคำนามและคำกริยา ชั้นที่สองคือความมั่นใจของผู้เขียน ซึ่งอยู่ใน modal เช่น Walking may improve concentration. (การเดินอาจช่วยให้มีสมาธิดีขึ้น) เป็นข้ออ้างที่เล็กกว่า Walking improves concentration. มาก ประโยคที่ไม่มี modal เลยคือการยืนยันที่แรงที่สุด และต้องจำว่าการคาดเดาไม่ใช่ความรู้ She must have missed the train. แปลว่าผู้พูดอนุมานเอาเอง ไม่ได้เห็นกับตา วิธีอ่านมีสามขั้น หา modal ทุกตัวแล้ววางบนบันได ถามว่ามีหลักฐานพอกับขั้นนั้นหรือไม่ และระวังย่อหน้าที่เริ่มด้วย may แต่จบด้วย must โดยไม่มีหลักฐานใหม่ เวลาสรุปงานของคนอื่น ต้องรักษาระดับความมั่นใจเดิมไว้",
  "analogy": {
   "title": "The class LINE group",
   "text": "One friend posts: \"Ajarn <em>might</em> cancel the quiz.\" Another: \"She <em>must</em> be cancelling it — she's not in school.\" A third posts a screenshot: \"The quiz <em>is</em> cancelled.\" Same news, three levels of commitment, and you only stop revising for the third. Read reports the same way: the modal tells you how far the writer will stand behind the claim."
  },
  "trap": "Students read only the content words, so <em>may improve</em> and <em>improves</em> look like the same fact — and when summarising in Thai they drop the อาจ. Tests ask which claim the writer is <em>least</em> committed to, or whether \"She must have missed the train\" means the speaker <em>knows</em>. Dodge: circle every modal before answering. No modal = strongest; <em>must</em> = worked out, not seen.",
  "map": {
   "center": "Writer's confidence",
   "branches": [
    {
     "label": "Two layers",
     "leaves": [
      "finding = nouns, verbs",
      "confidence = modals"
     ]
    },
    {
     "label": "Strength",
     "leaves": [
      "no modal = strongest",
      "should = expected",
      "may = one possibility"
     ]
    },
    {
     "label": "Deduction",
     "leaves": [
      "must ≠ I saw it",
      "must have missed = guess"
     ]
    },
    {
     "label": "How to read",
     "leaves": [
      "1 circle every modal",
      "2 place it on the ladder",
      "3 does the evidence fit?"
     ]
    },
    {
     "label": "Watch for shifts",
     "leaves": [
      "starts may → ends must?",
      "argued up, or promoted?"
     ]
    },
    {
     "label": "Quote fairly",
     "leaves": [
      "keep the writer's rung",
      "may ≠ does"
     ]
    }
   ]
  },
  "story": {
   "title": "Eighty Cups of Bubble Tea",
   "panels": [
    {
     "who": "Fah",
     "text": "(reading the news) \"Bubble tea <em>may</em> improve exam scores, a small study suggests.\""
    },
    {
     "who": "Nong Bot",
     "text": "Fact stored: bubble tea improves exam scores! Ordering 40 cups for the class."
    },
    {
     "who": "Nan",
     "text": "Bot, it said <em>may</em>. That's just one possibility."
    },
    {
     "who": "Nong Bot",
     "text": "Upgrading: bubble tea <em>must</em> raise scores! Ordering 80 cups."
    },
    {
     "who": "T.Chris",
     "text": "Bot, the writer stayed on the middle rung — you can't move her up the ladder. Cancel the order."
    }
   ],
   "moral": "The modal shows how far the writer will commit — report <em>may</em> as <em>may</em>, never as a fact."
  },
  "chant": {
   "title": "Read the Stance",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Read it once for the story, twice for the stance,",
    "Circle every modal — give the rungs a glance!",
    "No modal at all? That's the strongest claim,",
    "<em>May</em> is a maybe — keep it the same!",
    "<em>Must</em> means \"I worked it out\", not \"I saw\",",
    "A guess isn't knowledge — that's the law!",
    "Starts with <em>may</em>, ends with <em>must</em>? Hold on —",
    "Did they prove it, or just move on?"
   ]
  },
  "moves": [
   {
    "move": "Hold up an imaginary highlighter and circle in the air",
    "says": "Circle every modal."
   },
   {
    "move": "Press your thumb flat and firm on the desk",
    "says": "No modal: <em>The effect survives adjustment.</em> Strongest."
   },
   {
    "move": "Tap your temple, then cover your eyes",
    "says": "<em>She must have missed the train</em> — worked out, not seen."
   },
   {
    "move": "Climb your hand slowly upward, then freeze and frown",
    "says": "<em>May</em>… then <em>must</em>? Where's the new evidence?"
   }
  ]
 },
 "t3l1s1": {
  "thai": "must กับ have to แปลว่า “ต้อง” เหมือนกัน และมีน้ำหนักเท่ากัน ความต่างไม่ได้อยู่ที่ความแรง แต่อยู่ที่ว่าผู้พูด “เป็นเจ้าของ” ข้อบังคับนั้นหรือไม่ ถ้าผู้พูดยืนยันเองว่า “ฉันบอกให้ทำ” ให้ใช้ must เช่น ความตั้งใจของตัวเอง I must stop checking my phone. (ฉันต้องเลิกเช็กมือถือ — ฉันตั้งใจเอง) ครูหรือพ่อแม่สั่งเอง You must wear your school pin. หรือประกาศของโรงเรียนเอง ส่วน have to ใช้เมื่อผู้พูดแค่ส่งต่อกฎจากที่อื่น หรือสถานการณ์บังคับ (“ไม่ใช่ความคิดของฉัน”) เช่น I have to be at the clinic by eight. (ฉันต้องไปคลินิกก่อนแปดโมง — คลินิกเป็นคนกำหนด) วิธีเช็กคือถามว่าผู้พูดกำลังบอกว่า “ฉันสั่ง ฉันเห็นด้วย” หรือ “มีคนอื่นกำหนดมา” ถ้าไม่แน่ใจ ใช้ have to ได้เสมอ และนี่เป็นแนวโน้มในภาษาอังกฤษแบบบริติช ไม่ใช่กฎตายตัว จำไว้ด้วยว่า must ตามด้วยกริยาช่องหนึ่งโดยไม่มี to ต้องพูดว่า must go ไม่ใช่ must to go",
  "analogy": {
   "title": "Alarm clock or school bell",
   "text": "Your phone alarm at 5:30 is <em>must</em>: you set it yourself, because <em>I must</em> finish my reading before school. The school bell at 7:30 is different. When you tell a friend about it, it's <em>have to</em>: ‘We <em>have to</em> be in by 7:30’ — you're passing the school's rule on. The school's own notice says ‘Students <em>must</em> be in by 7:30’ — the school owns it. Same force every time; the only question is <strong>whose voice owns the rule</strong>: the speaker's (<em>must</em>) or someone else's, passed on (<em>have to</em>)."
  },
  "trap": "Thai ต้อง covers both, so students grab <em>must</em> by habit — or think <em>must</em> is ‘stronger’. It isn't; it only shows that the speaker owns or backs the rule. In the present, tests don't hinge on <em>must</em> vs <em>have to</em>; they test <em>had to</em> / <em>will have to</em> and <em>mustn't</em> vs <em>don't have to</em>. They also plant <s>must to send</s>. Dodge: ask ‘Is the speaker saying “I say so”, or passing it on?’ I say so → <em>must</em>; passing it on → <em>have to</em>; unsure → <em>have to</em> is always safe.",
  "map": {
   "center": "must vs have to",
   "branches": [
    {
     "label": "must = I say so",
     "leaves": [
      "speaker owns or backs it",
      "I must stop snacking",
      "You must wear your pin (teacher)",
      "notice by the rule-maker"
     ]
    },
    {
     "label": "have to = passed on",
     "leaves": [
      "rule from elsewhere",
      "circumstances",
      "clinic set it → have to",
      "‘Apparently’ → have to"
     ]
    },
    {
     "label": "Same strength",
     "leaves": [
      "difference = source",
      "not stronger or weaker"
     ]
    },
    {
     "label": "Quick test",
     "leaves": [
      "I say so? → must",
      "passing it on? → have to",
      "unsure → have to"
     ]
    },
    {
     "label": "Form",
     "leaves": [
      "must + verb: must go",
      "have to + verb",
      "✗ must to go"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Steals a Rule",
   "panels": [
    {
     "who": "Fah",
     "text": "Bot, please read out the new ministry rule about the science fair."
    },
    {
     "who": "Nong Bot",
     "text": "Beep! Every team <em>must</em> hand in its form by Friday! I have decided this myself!"
    },
    {
     "who": "Ploy",
     "text": "Wait — <em>you</em> made this rule? Since when are you the ministry?"
    },
    {
     "who": "T.Chris",
     "text": "Bot, the ministry made it — you're passing it on. Say: every team <em>has to</em> hand in its form by Friday."
    },
    {
     "who": "Nong Bot",
     "text": "Correcting… Every team <em>has to</em> hand it in. And I <em>must</em> stop stealing rules. Beep."
    }
   ],
   "moral": "Use <em>must</em> when the speaker owns or backs the rule (‘I say so’): your own resolution, a teacher's or parent's order, the school's own notice. Use <em>have to</em> when you pass on a rule from somewhere else."
  },
  "chant": {
   "title": "Whose Rule?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Whose voice is it? Point and say!",
    "<em>Must</em> — I say so, do it today!",
    "<em>Have to</em> — passed on: the law, the bell,",
    "Not my idea? <em>Have to</em> works well!",
    "Same strength, same push — a different source,",
    "<em>Must</em> + verb, no <em>to</em>, of course!"
   ]
  },
  "moves": [
   {
    "move": "Tap your own chest twice",
    "says": "<em>Must</em> — I say so: <em>I must stop snacking.</em>"
   },
   {
    "move": "Point over your shoulder with your thumb",
    "says": "<em>Have to</em> — passed on: <em>I have to be at the clinic by eight.</em>"
   },
   {
    "move": "Hold both fists out at exactly the same height",
    "says": "Same strength! Only the source is different."
   },
   {
    "move": "Snip with two fingers like scissors",
    "says": "<em>Must</em> + verb — cut the <em>to</em>: <s>must to go</s>, <em>must go</em>."
   }
  ]
 },
 "t3l1s2": {
  "thai": "must เป็น modal ที่มีแค่รูปปัจจุบัน ไม่มีรูปอดีต ไม่มีรูป -ing และวางหลัง will หรือ has ไม่ได้ เมื่อประโยคต้องการกาลอื่น จึงต้องให้ have to มาทำงานแทน อดีตใช้ had to อนาคตใช้ will have to และ present perfect ใช้ has had to เช่น We had to cancel the trip. (เราจำเป็นต้องยกเลิกทริป) had to เป็นรูปอดีตปกติของ must ห้ามเขียน will must เพราะ modal สองตัวอยู่ติดกันไม่ได้ และระวัง must have cancelled เพราะนั่นคือการคาดเดาเรื่องในอดีต ไม่ใช่ข้อบังคับในอดีต ส่วนรูปอื่น ๆ have got to เป็นภาษาพูดและใช้ได้เฉพาะปัจจุบันเท่านั้น จึงพูดว่า will have got to ไม่ได้ need to นุ่มนวลกว่า บอกว่าสถานการณ์ทำให้จำเป็น และ be required to เป็นภาษาทางการที่ใช้ในกฎระเบียบ",
  "analogy": {
   "title": "The universal adapter",
   "text": "<em>Must</em> is a charger with only one plug: it fits the <strong>present</strong> socket and nothing else. Need power in the past, the future or the perfect? Grab the universal adapter, <em>have to</em>: <em>had to</em>, <em>will have to</em>, <em>has had to</em>. Same electricity, every socket. And <em>have got to</em>? A plug that only works at home — present only."
  },
  "trap": "Thai ต้อง has no tense, so students write <s>Last term we must resit it</s> or <s>they will must move it</s>. Tests also put <em>must have cancelled</em> next to <em>had to cancel</em> — but <em>must have</em> is a guess about the past, not a past rule — and slip in <s>will have got to</s>. Dodge: if you see <em>last</em>, <em>yesterday</em>, <em>will</em> or <em>has</em>, switch to <em>have to</em> in that tense.",
  "map": {
   "center": "When must runs out",
   "branches": [
    {
     "label": "Past",
     "leaves": [
      "had to = the normal past",
      "✗ must (last winter)",
      "must have = guess ≠ rule"
     ]
    },
    {
     "label": "Future",
     "leaves": [
      "will have to",
      "✗ will must"
     ]
    },
    {
     "label": "Perfect",
     "leaves": [
      "has had to close",
      "✗ has must"
     ]
    },
    {
     "label": "have got to",
     "leaves": [
      "spoken, present only",
      "I've got to go ✓",
      "✗ will have got to"
     ]
    },
    {
     "label": "Register",
     "leaves": [
      "need to = softer",
      "be required to = formal",
      "have to = neutral"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot's Broken Time Machine",
   "panels": [
    {
     "who": "Mai",
     "text": "Bot, why weren't you at sports day yesterday?"
    },
    {
     "who": "Nong Bot",
     "text": "Beep! Yesterday I <s>must charge</s> my battery!"
    },
    {
     "who": "Mai",
     "text": "<em>Must</em>? That sounds like you're charging right now."
    },
    {
     "who": "Nong Bot",
     "text": "Then tomorrow I <s>will must charge</s> again! Error… error…"
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>must</em> can't travel in time. Yesterday you <em>had to</em> charge; tomorrow you'll <em>have to</em>."
    },
    {
     "who": "Nong Bot",
     "text": "Updating… I <em>have had to</em> reboot twice today. Beep."
    }
   ],
   "moral": "When the sentence needs past, future or perfect, <em>must</em> steps out and <em>have to</em> takes over: <em>had to</em>, <em>will have to</em>, <em>has had to</em>."
  },
  "chant": {
   "title": "Must Stays Home",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Must</em> lives now — it can't go back,",
    "Yesterday? <em>Had to</em> — that's the track!",
    "Tomorrow? <em>Will have to</em> — say it right,",
    "<s>Will must</s>? Two modals? Not tonight!",
    "<em>Has had to</em> for the perfect line,",
    "<em>Got to</em>'s spoken, present time!",
    "<em>Must have done</em>? That's a guess, not a rule —",
    "<em>Had to</em> is the past at school!"
   ]
  },
  "moves": [
   {
    "move": "Point straight down at your desk",
    "says": "Now: <em>must</em> or <em>have to</em> — both work."
   },
   {
    "move": "Throw your thumb back over your shoulder",
    "says": "Past: <em>had to</em> — the normal past of <em>must</em>."
   },
   {
    "move": "Push one hand forward, away from you",
    "says": "Future: <em>will have to</em> — never <s>will must</s>."
   },
   {
    "move": "Tap your temple with raised eyebrows",
    "says": "<em>Must have done</em> = a guess about the past, not a rule."
   },
   {
    "move": "Hold an imaginary phone to your ear",
    "says": "<em>I've got to go!</em> — spoken, present only."
   }
  ]
 },
 "t3l1s3": {
  "thai": "ใต้ must ยังมีอีกระดับหนึ่ง คือข้อบังคับที่เลี่ยงได้ should และ ought to แปลว่า “ควร” หมายถึงทางเลือกที่ดีที่สุด แต่ไม่ได้บังคับ จะเลือกไม่ทำก็ได้ และ ought to ต้องมี to เสมอ ส่วน had better ไม่ใช่รูปอดีต และไม่ได้อ่อนกว่า should แต่แรงกว่า เพราะแฝงคำขู่ว่า “ไม่อย่างนั้นจะเกิดเรื่องไม่ดี” ใช้กับตอนนี้หรืออนาคตอันใกล้ และตามด้วยกริยาช่องหนึ่งโดยไม่มี to เช่น You'd better back up your file. (เธอสำรองไฟล์ไว้เถอะ ไม่อย่างนั้นงานหายแน่) ส่วน be supposed to ใช้รายงานกฎที่คนอื่นตั้ง และมักแฝงว่าไม่มีใครทำตาม เช่น We're supposed to log every visitor. (ตามกฎแล้วเราต้องลงชื่อผู้มาติดต่อ — มักแฝงว่าไม่ค่อยมีใครทำจริง) ในเรียงความวิชาการให้ใช้ should ไม่ใช้ had better เพราะ had better เป็นภาษาพูดที่พูดกับคนตรงหน้า",
  "analogy": {
   "title": "Three battery messages",
   "text": "At 40%, your phone says: ‘You <em>should</em> turn on battery saver.’ Good advice — ignore it if you like. At 3%: ‘You'd <em>better</em> charge now’ — or it dies in the middle of your LINE call. And the canteen sign? ‘Students are <em>supposed to</em> charge phones at home.’ Everyone ignores it. Advice, warning, broken rule — three different messages."
  },
  "trap": "Students see <em>had</em> and think <em>had better</em> is past, or think it is softer than <em>should</em>. It is neither: it is a warning about now, with a threat inside. Tests also plant <s>had better to check</s> and <s>ought check</s>, and slip <em>had better</em> into an essay. Dodge: add ‘…or else!’ If it fits, <em>had better</em>; if it's a calm best option, <em>should</em>.",
  "map": {
   "center": "Advice, warning, rule",
   "branches": [
    {
     "label": "should/ought to",
     "leaves": [
      "best option, not the only",
      "ought keeps its ‘to’",
      "essay recommendation ✓"
     ]
    },
    {
     "label": "had better",
     "leaves": [
      "advice + a threat",
      "now / soon — not past",
      "✗ had better to"
     ]
    },
    {
     "label": "be supposed to",
     "leaves": [
      "rule from outside",
      "hint: nobody keeps it",
      "was supposed to = didn't"
     ]
    },
    {
     "label": "Pressure now",
     "leaves": [
      "must > had better > should",
      "supposed to = a reported rule",
      "often not kept"
     ]
    },
    {
     "label": "Register",
     "leaves": [
      "essay → should",
      "had better = spoken",
      "one hearer, one moment"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot's Calm Advice",
   "panels": [
    {
     "who": "Pim",
     "text": "Bot, my laptop crashed twice this week, and my whole project is on it!"
    },
    {
     "who": "Nong Bot",
     "text": "Beep! You <em>should</em> back it up. Some day. Whenever you like."
    },
    {
     "who": "Pim",
     "text": "Whenever I like?! It could die tonight!"
    },
    {
     "who": "Nong Bot",
     "text": "Then… <s>yesterday you had better back it up</s>? Beep?"
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>had better</em> isn't past — it's a warning about now: <em>You'd better back it up tonight</em>, or you'll lose it."
    },
    {
     "who": "Pim",
     "text": "Done! And Bot, you <em>were supposed to</em> remind me last week."
    }
   ],
   "moral": "<em>Should</em> gives calm advice; <em>had better</em> warns about now, with a threat inside; <em>was supposed to</em> points at a rule somebody didn't keep."
  },
  "chant": {
   "title": "Or Else!",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Should</em>, <em>ought to</em> — that's the best advice,",
    "You can still say no, but it's nice.",
    "<em>Had better</em> — WARNING! Do it, or else!",
    "Not past, not soft — it's a danger bell!",
    "<em>Supposed to</em>? A rule that nobody keeps,",
    "The sign says ‘sign in’ — but the pen's asleep!",
    "In your essay, <em>should</em> is the way,",
    "Save <em>had better</em> for what friends say!"
   ]
  },
  "moves": [
   {
    "move": "Offer an open palm forward, gently",
    "says": "<em>Should / ought to</em>: here's the best idea — take it or leave it."
   },
   {
    "move": "Wag one finger with wide eyes",
    "says": "<em>Had better</em>: do it now — or else!"
   },
   {
    "move": "Point at an imaginary sign, then shrug",
    "says": "<em>Supposed to</em>: that's the rule… but nobody does it."
   },
   {
    "move": "Mime writing, then shake your head at the wagging finger",
    "says": "Essay? <em>Should</em> — yes. <em>Had better</em> — no."
   }
  ]
 },
 "t3l2s1": {
  "thai": "ข้อนี้เป็นจุดที่เสียคะแนนบ่อยที่สุด ในประโยคบอกเล่า must กับ have to ความหมายใกล้กัน แต่พอเติม not ความหมายกลับตรงข้ามกันเลย mustn't แปลว่า “ห้าม” เพราะ not ไปปฏิเสธการกระทำ ส่วน don't have to แปลว่า “ไม่จำเป็นต้อง” เพราะ not ไปปฏิเสธตัวข้อบังคับ คือไม่มีกฎ จะทำหรือไม่ทำก็ได้ เช่น You mustn't use a dictionary. (ห้ามใช้พจนานุกรม) กับ You don't have to use a dictionary. (ไม่จำเป็นต้องใช้ จะใช้ก็ได้) วิธีทดสอบคือเติม but you can if you like ต่อท้าย ถ้าฟังเข้ากันได้ ต้องใช้ don't have to ถ้าขัดกันเอง แสดงว่าเป็นการห้าม ต้องใช้ mustn't กลุ่มที่แปลว่าห้ามยังมี can't และ may not ส่วนกลุ่มที่แปลว่าไม่จำเป็นยังมี needn't และ aren't required to",
  "analogy": {
   "title": "Two rules on the BTS",
   "text": "On the BTS, you <em>mustn't</em> eat or drink — try it with your bubble tea and staff will stop you. But you <em>don't have to</em> ride in the first carriage — any carriage is fine. In the first rule the <em>not</em> sits on the <strong>action</strong> (eating = forbidden). In the second it sits on the <strong>rule</strong> (no rule = your choice). Same little word, opposite worlds."
  },
  "trap": "Thai ไม่ต้อง (no need) and ต้องไม่ (must not) use the same two words in a different order, so students mix them up and write <s>You mustn't come if you're busy</s> when they mean ‘it's your choice’. That doesn't blur the meaning — it flips it. Tests hide a clue that only fits no-obligation: <em>unless</em>, <em>optional</em>, ‘you're welcome to’. Dodge: add ‘…but you can if you like’. Makes sense → <em>don't have to</em>; contradiction → <em>mustn't</em>.",
  "map": {
   "center": "The negation cliff",
   "branches": [
    {
     "label": "mustn't",
     "leaves": [
      "not → on the action",
      "= forbidden",
      "You mustn't feed monkeys"
     ]
    },
    {
     "label": "don't have to",
     "leaves": [
      "not → on the rule",
      "= no need, your choice"
     ]
    },
    {
     "label": "Ban family",
     "leaves": [
      "mustn't / can't",
      "may not",
      "shouldn't = advise against"
     ]
    },
    {
     "label": "Free family",
     "leaves": [
      "don't have to / needn't",
      "aren't required to"
     ]
    },
    {
     "label": "Test it",
     "leaves": [
      "+ but you can if you like",
      "fits → don't have to",
      "clashes → mustn't"
     ]
    },
    {
     "label": "Paraphrase",
     "leaves": [
      "It is forbidden to…",
      "It is not necessary to…"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot's Kind Message",
   "panels": [
    {
     "who": "Mint",
     "text": "Bot, LINE Nan: the rehearsal is being recorded, so she can stay home if she's busy."
    },
    {
     "who": "Nong Bot",
     "text": "Sending! ‘Nan, you <em>mustn't</em> come to rehearsal.’ Beep!"
    },
    {
     "who": "Nan",
     "text": "(reading) What?! Did I do something wrong? Am I out of the play?!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>mustn't</em> bans her. You meant <em>you don't have to come</em> — but you can if you like."
    },
    {
     "who": "Nan",
     "text": "Phew! Then I'll come anyway."
    }
   ],
   "moral": "<em>Mustn't</em> means forbidden; <em>don't have to</em> means no rule, your choice — they are opposites, not a pair."
  },
  "chant": {
   "title": "Mind the Cliff",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Mustn't</em> means NO — the rule says stop!",
    "<em>Don't have to</em> means FREE — do it or not!",
    "Not on the action? That's a ban!",
    "Not on the rule? Skip it — you can!",
    "‘But you can if you like’ — try it out,",
    "If it fits, it's freedom, no doubt!",
    "Same little <em>not</em>, but the meanings collide —",
    "Mind the cliff and pick the right side!"
   ]
  },
  "moves": [
   {
    "move": "Cross your forearms in a big X",
    "says": "<em>Mustn't</em>: forbidden! The <em>not</em> is on the action."
   },
   {
    "move": "Shrug with both palms up",
    "says": "<em>Don't have to</em>: no rule — your choice."
   },
   {
    "move": "Walk two fingers to the edge of the desk and stop",
    "says": "Mind the cliff: one <em>not</em> can flip the meaning."
   },
   {
    "move": "Open both arms wide in a welcome",
    "says": "‘…but you can if you like’ — only fits <em>don't have to</em>."
   }
  ]
 },
 "t3l2s2": {
  "thai": "needn't กับ don't need to แปลว่า “ไม่จำเป็นต้อง” เหมือน don't have to และไม่เคยแปลว่าห้าม ความต่างอยู่ที่ไวยากรณ์ เพราะ need เป็นได้ทั้ง modal และกริยาธรรมดา ถ้าเป็น modal จะไม่มี do ไม่มี to ไม่เติม -s และเติม not ได้ทันที เช่น You needn't worry. หรือ Need we decide today? ถ้าเป็นกริยาธรรมดา ต้องมี do และ to เช่น She doesn't need to worry. ห้ามผสมสองแบบเข้าด้วยกัน เช่น don't needn't to worry เป็นรูปที่ผิด ตัวอย่างที่ถูก: You needn't bring anything. (ไม่ต้องเอาอะไรมานะ ภาควิชาเตรียมอาหารกลางวันไว้แล้ว) ส่วนเรื่องอดีต didn't need to pay แปลว่า ไม่จำเป็นต้องจ่าย (ไม่ได้บอกว่าจ่ายหรือไม่ แต่ส่วนใหญ่หมายถึงไม่ได้จ่าย) แต่ needn't have paid แปลว่า จ่ายไปแล้ว ทั้งที่ไม่จำเป็นเลย ถ้าแทนที่ด้วย needn't แล้วความหมายยังเหมือนเดิม แปลว่าประโยคนั้นไม่ควรใช้ mustn't ตั้งแต่แรก",
  "analogy": {
   "title": "The student-card sign",
   "text": "A sign at 7-Eleven: ‘You <em>needn't</em> show your student card — the discount is automatic.’ Show it if you like; nobody stops you. Nothing is banned — the rule just disappears. <em>Don't need to</em> is the same message in everyday clothes: ‘You <em>don't need to</em> show it.’ And if you'd already dug it out of your bag? ‘I <em>needn't have shown</em> it.’"
  },
  "trap": "<em>Needn't</em> looks like a cousin of <em>mustn't</em> — both end in <em>n't</em> — so students read it as a ban. It's the opposite: it sits with <em>don't have to</em>. Tests also mix the two patterns (<s>don't needn't to</s>) and swap <em>needn't have paid</em> (you paid) with <em>didn't need to pay</em> (no need — it doesn't say whether you paid). Dodge: swap in <em>don't have to</em> — if the meaning holds, <em>needn't</em> fits.",
  "map": {
   "center": "No need: needn't",
   "branches": [
    {
     "label": "Meaning",
     "leaves": [
      "no obligation",
      "never a ban",
      "= don't have to"
     ]
    },
    {
     "label": "Modal need",
     "leaves": [
      "needn't + verb",
      "Need we…? (no do)",
      "no -s, no to"
     ]
    },
    {
     "label": "Verb need",
     "leaves": [
      "doesn't need to + verb",
      "Do we need to…?",
      "needed / will need to"
     ]
    },
    {
     "label": "Don't mix",
     "leaves": [
      "✗ don't needn't to",
      "✗ needn't to worry"
     ]
    },
    {
     "label": "Past",
     "leaves": [
      "didn't need to → no need (done or not)",
      "needn't have → done anyway"
     ]
    },
    {
     "label": "vs mustn't",
     "leaves": [
      "mustn't = forbidden",
      "needn't = your choice"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot and the Free Lunch",
   "panels": [
    {
     "who": "Mai",
     "text": "Bot, tell everyone: we <em>needn't</em> bring lunch tomorrow — the department is providing it."
    },
    {
     "who": "Nong Bot",
     "text": "Beep! ATTENTION! Lunch is BANNED! Hand over your sandwiches!"
    },
    {
     "who": "Ploy",
     "text": "(hugging her lunchbox) But I made this myself!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>needn't</em> isn't <em>mustn't</em>. There's no need to bring lunch — but Ploy can still eat hers."
    },
    {
     "who": "Nong Bot",
     "text": "Recalculating… I <em>needn't have taken</em> twelve sandwiches. Returning them. Beep."
    }
   ],
   "moral": "<em>Needn't</em> and <em>don't need to</em> remove the obligation — they never forbid anything."
  },
  "chant": {
   "title": "No Need, No Ban",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Needn't</em> worry, <em>needn't</em> pay —",
    "No rule here, so do it your way!",
    "Modal style: no <em>do</em>, no <em>to</em>,",
    "Verb style: <em>don't need to</em> — that's true too!",
    "Never mix them, never stack:",
    "<s>Don't needn't to</s>? Send it back!",
    "<em>Needn't</em>'s not <em>mustn't</em> — check the side:",
    "No need means free, not denied!"
   ]
  },
  "moves": [
   {
    "move": "Brush the desk with one hand like sweeping crumbs away",
    "says": "<em>Needn't</em> — the rule is gone. No need."
   },
   {
    "move": "Shrug and smile",
    "says": "<em>Don't need to</em> — same meaning, everyday style."
   },
   {
    "move": "Hold up one finger on each hand and keep them apart",
    "says": "<em>Needn't worry</em> OR <em>don't need to worry</em> — never both."
   },
   {
    "move": "Mime handing over money, then slap your forehead",
    "says": "<em>I needn't have paid!</em> I paid… and it wasn't necessary."
   }
  ]
 },
 "t3l2s3": {
  "thai": "การห้ามในภาษาอังกฤษมีหลายระดับ ทุกคำหมายถึง “ห้าม” เหมือนกัน เพราะ not อยู่ที่การกระทำ แต่ต่างกันที่ระดับภาษาและอำนาจของผู้พูด can't เป็นภาษาพูด ใช้ห้ามทันทีตรงหน้า mustn't เป็นกฎที่ผู้พูดเป็นเจ้าของเอง เช่น ครูพูดกับนักเรียน may not เป็นภาษาทางการ ใช้ในประกาศ กฎระเบียบ หรือข้อสอบ is not to เป็นคำสั่งจากผู้มีอำนาจ ส่วน shall not และ is not permitted to เป็นภาษากฎหมายและสัญญา เช่น Candidates may not consult notes. (ผู้เข้าสอบไม่ได้รับอนุญาตให้ดูโน้ต) ต้องเลือกให้ตรงกับอำนาจจริงของเรา ถ้าเพื่อนพูดว่า shall not จะฟังดูตลก ถ้าสัญญาเขียนว่า can't จะดูไม่เป็นมืออาชีพ นอกจากนี้ can't ในภาษาพูดยังกำกวม อาจแปลว่าไม่ได้รับอนุญาตหรือทำไม่ได้ก็ได้ และระวังอย่าใช้ don't have to เพราะไม่ใช่การห้าม",
  "analogy": {
   "title": "One ban, four voices",
   "text": "Same message — ‘no phones’ — in four voices. The canteen auntie: ‘You <em>can't</em> use your phone at this table.’ Your teacher in class: ‘You <em>mustn't</em> use your phones.’ The exam paper: ‘Candidates <em>may not</em> use phones.’ The agreement your parents signed: ‘The student <em>shall not</em> use a phone.’ The ban never changes — only <strong>who is speaking</strong>."
  },
  "trap": "Students think <em>shall not</em> or <em>may not</em> forbid ‘more’ than <em>can't</em>. They don't — the ban is identical; only the register changes. Tests ask which wording fits a rubric, a licence or a teacher, and hide <em>don't have to</em> among the bans — it falls off the cliff and forbids nothing. Dodge: first check that the <em>not</em> sits on the action; then match the voice to the speaker.",
  "map": {
   "center": "Ways to forbid",
   "branches": [
    {
     "label": "can't",
     "leaves": [
      "spoken, on the spot",
      "rule or broken lock?"
     ]
    },
    {
     "label": "mustn't",
     "leaves": [
      "speaker owns the rule",
      "teacher → class"
     ]
    },
    {
     "label": "may not",
     "leaves": [
      "formal, written",
      "exam rules, notices"
     ]
    },
    {
     "label": "is not to",
     "leaves": [
      "authority's instruction",
      "Equipment is not to be…"
     ]
    },
    {
     "label": "shall not",
     "leaves": [
      "legal / contract",
      "The tenant shall not…",
      "comic between friends"
     ]
    },
    {
     "label": "NOT a ban",
     "leaves": [
      "✗ don't have to",
      "✗ needn't"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot the Lawyer",
   "panels": [
    {
     "who": "Mai",
     "text": "Bot, can I borrow your charger for a minute?"
    },
    {
     "who": "Nong Bot",
     "text": "Beep! The borrower <em>shall not</em> remove the charger from the robot without written consent!"
    },
    {
     "who": "Mai",
     "text": "…It's a charger, Bot, not a condo."
    },
    {
     "who": "T.Chris",
     "text": "Bot, between friends just say: <em>Sorry, you can't — I need it.</em> Save <em>shall not</em> for contracts."
    },
    {
     "who": "Nong Bot",
     "text": "Sorry, you can't. I'm at 4%. Beep."
    }
   ],
   "moral": "Every ban means ‘forbidden’ — choose the one that matches your real authority: <em>can't</em> for chat, <em>may not</em> for notices, <em>shall not</em> for contracts."
  },
  "chant": {
   "title": "The Ban Ladder",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Can't</em> is spoken — ‘Sorry, you can't sit there!’",
    "<em>Mustn't</em> is my rule — ‘You mustn't touch my hair!’",
    "<em>May not</em> on the paper, the rubric, the rule,",
    "<em>Is not to</em> from the office, the head of the school,",
    "<em>Shall not</em> in the contract, the lease and the law —",
    "Same ban, different voice — that's all!",
    "Match your power, match your place,",
    "No <em>shall not</em> to your best friend's face!"
   ]
  },
  "moves": [
   {
    "move": "Flash one palm up, like a quick stop sign",
    "says": "<em>Can't</em>: spoken, on the spot — ‘Sorry, you can't park there.’"
   },
   {
    "move": "Point one finger firmly down at the desk",
    "says": "<em>Mustn't</em>: my rule — ‘You mustn't block that door.’"
   },
   {
    "move": "Hold up an imaginary sheet of paper",
    "says": "<em>May not</em>, <em>is not to</em>: printed rules — ‘Candidates may not use notes.’"
   },
   {
    "move": "Bang an imaginary judge's hammer",
    "says": "<em>Shall not</em>: the contract voice — ‘The tenant shall not sublet.’"
   },
   {
    "move": "Cross your arms, then lift them up and down like a ladder",
    "says": "Same ban every time — only the voice changes."
   }
  ]
 },
 "t3l3s1": {
  "thai": "การอนุญาตคือการบอกว่ากฎเปิดทางให้ทำได้ can กับ may ให้อนุญาตเหมือนกันและแรงเท่ากัน ความต่างอยู่ที่ระดับภาษา can ใช้พูดทั่วไป ส่วน may เป็นทางการ ใช้ในประกาศหรือกฎระเบียบ เช่น Members may bring one guest. (สมาชิกพาแขกมาได้หนึ่งคน) เพราะ can กับ may เป็น modal จึงไม่มีรูปอนาคตสำหรับความหมายนี้ ถ้าต้องการบอกการอนุญาตในอดีตให้ใช้ were allowed to (หรือใช้ could กับการอนุญาตทั่วไปในอดีต เช่น We could leave early on Fridays.) และในอนาคตใช้ will be allowed to ห้ามเขียน will can ส่วน be permitted to เป็นทางการกว่า be allowed to สิ่งสำคัญคือ การอนุญาตไม่ใช่ข้อบังคับ You may leave at four แปลว่า “กลับได้” ไม่ได้แปลว่า “ต้องกลับ” และ weren't allowed to แปลว่า “ไม่ได้รับอนุญาต” ซึ่งต่างจาก didn't have to ที่แปลว่า “ไม่จำเป็นต้อง”",
  "analogy": {
   "title": "The group-chat admin",
   "text": "In your class LINE group, the admin posts: ‘You <em>can</em> share memes after 9 p.m.’ The school's official page says the same thing in a suit and tie: ‘Students <em>may</em> share…’ Same open door, different clothes. Last year? ‘We <em>were allowed to</em> post any time.’ Next term? ‘We <em>will be allowed to</em>…’ And an open door is not a push: <em>may</em> post ≠ <em>must</em> post."
  },
  "trap": "Students think <em>may</em> is ‘stronger’ permission than <em>can</em> — it's only more formal. Tests plant <s>will can use</s>, put present <em>can</em> into a past sentence, and offer <em>must</em> beside <em>may</em>, turning a permission into a duty. They also swap <em>weren't allowed to</em> (refused) with <em>didn't have to</em> (optional). Dodge: ask ‘open door or push?’ Open = <em>can / may</em>; push = <em>must</em>.",
  "map": {
   "center": "Permission",
   "branches": [
    {
     "label": "can",
     "leaves": [
      "everyday, spoken",
      "You can use the side door"
     ]
    },
    {
     "label": "may",
     "leaves": [
      "formal, written rules",
      "Members may bring a guest",
      "same force as can"
     ]
    },
    {
     "label": "Other tenses",
     "leaves": [
      "past: were allowed to / could (general)",
      "future: will be allowed to",
      "✗ will can"
     ]
    },
    {
     "label": "be permitted to",
     "leaves": [
      "more formal",
      "at home in regulations"
     ]
    },
    {
     "label": "≠ obligation",
     "leaves": [
      "may leave ≠ must leave",
      "open door, not a push"
     ]
    },
    {
     "label": "Asking/granting",
     "leaves": [
      "Can I…? May I…? = ask",
      "You can / may = grant"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Reads the Notice",
   "panels": [
    {
     "who": "Fah",
     "text": "Look at the library notice: ‘Readers <em>may</em> photograph unbound items.’"
    },
    {
     "who": "Nong Bot",
     "text": "Beep! Order received! I <em>must</em> photograph ALL unbound items! Flash! Flash! Flash!"
    },
    {
     "who": "Pim",
     "text": "Bot… you've taken 900 photos of one leaflet."
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>may</em> opens a door — it doesn't push you through. You're <em>allowed to</em>, not required to."
    },
    {
     "who": "Nong Bot",
     "text": "Understood. Deleting 899 photos. Beep."
    }
   ],
   "moral": "<em>Can</em> and <em>may</em> give permission — they never mean <em>must</em>."
  },
  "chant": {
   "title": "Open Door",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Can</em> when you chat, and <em>may</em> on the sign,",
    "Same open door — just a different line!",
    "Last year? <em>Were allowed to</em> — that's the past,",
    "Next year? <em>Will be allowed to</em> — built to last!",
    "<s>Will can</s>? No way — two modals clash,",
    "<em>Be allowed to</em> fixes it fast!",
    "<em>May</em> leave at four? You can — not must!",
    "An open door: no push, no fuss!"
   ]
  },
  "moves": [
   {
    "move": "Open one hand outward like opening a door",
    "says": "<em>Can</em> / <em>may</em>: the door is open — you're allowed."
   },
   {
    "move": "Straighten an imaginary tie",
    "says": "<em>May</em> = <em>can</em> in a suit: more formal, same force."
   },
   {
    "move": "Thumb back over your shoulder, then point forward",
    "says": "<em>Were allowed to</em> (past), <em>will be allowed to</em> (future)."
   },
   {
    "move": "Open the door, then pull both hands back — no pushing",
    "says": "<em>You may leave</em> ≠ <em>you must leave</em>."
   }
  ]
 },
 "t3l3s2": {
  "thai": "ในภาษาพูดทั่วไป shall เหลือใช้แค่การเสนอหรือการชวน เช่น Shall I help? หรือ Shall we go? ซึ่งประธานเป็น I หรือ we และเป็นประโยคคำถาม แต่ในสัญญา กฎหมาย และระเบียบ shall ไม่ได้บอกอนาคต มันแปลว่า “ต้อง” คือหน้าที่ตามข้อตกลง เช่น The tenant shall give one month's notice. (ผู้เช่าต้องแจ้งล่วงหน้าหนึ่งเดือน) และ shall not แปลว่า “ห้าม” ส่วน be to เช่น is to หรือ are to เป็นคำสั่งจากผู้มีอำนาจ เช่น You are to report to reception. (ให้ไปรายงานตัวที่แผนกต้อนรับ) หรือรูป passive เช่น All windows are to be closed by six. ทั้งสองแบบตามด้วยกริยาช่องหนึ่ง จึงห้ามเขียน shall to deliver หรือ are to reporting และอย่าเอา shall แบบสัญญาไปใช้คุยกับเพื่อนหรือเขียนเรียงความ เพราะจะฟังเหมือนสัญญาเช่า",
  "analogy": {
   "title": "The two lives of shall",
   "text": "<em>Shall</em> lives two lives. After school it's friendly: ‘<em>Shall</em> we get mookata?’ — first person, a question, a friendly suggestion. At the condo office it wears a uniform: ‘The tenant <em>shall</em> pay the rent by the 5th’ — third person, a statement, a duty. And <em>be to</em> is the announcement over the school speakers: ‘All M4 students <em>are to</em> report to the hall.’ Nobody asks; you go."
  },
  "trap": "Thai students learn <em>shall</em> = future (จะ), so they read <em>The contractor shall remove the waste</em> as a prediction. In a contract it's a duty — read it as <em>must</em>. Tests also plant <s>shall to deliver</s> and <s>are to reporting</s>, and ask which voice a school letter needs (<em>are not to</em>, not <em>shall not</em>). Dodge: question + I/we = offer; statement + third-person party = duty.",
  "map": {
   "center": "shall & be to",
   "branches": [
    {
     "label": "Chat shall",
     "leaves": [
      "Shall I help? = offer",
      "Shall we go? = suggest",
      "I / we + question"
     ]
    },
    {
     "label": "Contract shall",
     "leaves": [
      "= must (a duty)",
      "The tenant shall pay…",
      "not a prediction"
     ]
    },
    {
     "label": "shall not",
     "leaves": [
      "= prohibition",
      "Candidates shall not…"
     ]
    },
    {
     "label": "be to",
     "leaves": [
      "authority's instruction",
      "You are to report…",
      "are to be closed (passive)"
     ]
    },
    {
     "label": "Form",
     "leaves": [
      "shall deliver ✓",
      "✗ shall to deliver",
      "✗ are to reporting"
     ]
    },
    {
     "label": "Where?",
     "leaves": [
      "contracts, rules, rubrics",
      "official notices",
      "not in Task 1 or Task 2 essays"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Offers Help",
   "panels": [
    {
     "who": "Pim",
     "text": "Ugh, these books are so heavy."
    },
    {
     "who": "Nong Bot",
     "text": "Beep! The robot <em>shall</em> carry the books to the library within ten working days!"
    },
    {
     "who": "Pim",
     "text": "Ten working days?! I just wanted help to the stairs!"
    },
    {
     "who": "Mint",
     "text": "Bot, you sound like a condo contract."
    },
    {
     "who": "T.Chris",
     "text": "Bot, between friends <em>shall</em> is an offer. Just ask: <em>Shall I carry them?</em>"
    },
    {
     "who": "Nong Bot",
     "text": "<em>Shall I carry them?</em> … Carrying now. Beep."
    }
   ],
   "moral": "Ask <em>Shall I…?</em> to offer help; in contracts, third-person <em>shall</em> is a duty, not the future."
  },
  "chant": {
   "title": "Two Shalls",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Shall I</em>? <em>Shall we</em>? Friends just ask,",
    "<em>The tenant shall</em> — that's a task!",
    "Contract <em>shall</em> doesn't mean ‘will’,",
    "It means <em>must</em> — so pay that bill!",
    "<em>Shall not</em>? Banned — it's in the deal,",
    "No <em>to</em> after <em>shall</em> — keep it real!",
    "<em>You are to</em> report — the order came down,",
    "From the office, the school, the boss in town!"
   ]
  },
  "moves": [
   {
    "move": "Hold out both hands as if offering a box",
    "says": "<em>Shall I carry that?</em> — an offer between friends."
   },
   {
    "move": "Sign an imaginary contract with a big flourish",
    "says": "<em>The tenant shall pay</em> — a duty, not the future."
   },
   {
    "move": "Cross your arms over the imaginary contract",
    "says": "<em>Shall not</em> — forbidden by the agreement."
   },
   {
    "move": "Point firmly towards the door, like giving directions",
    "says": "<em>You are to report to reception</em> — an order from above."
   }
  ]
 },
 "t3l3s3": {
  "thai": "เวลาเขียนกฎ ต้องตัดสินใจสองเรื่องพร้อมกัน คือกฎนั้นแรงแค่ไหน และผู้อ่านคาดหวังภาษาระดับไหน ให้ถามสามข้อตามลำดับ ข้อแรก กฎนี้อยู่ช่องไหน เป็นข้อบังคับ (must) การห้าม (must not, may not) การอนุญาต (may, be permitted to) หรือคำแนะนำ (should) ข้อสอง ใครเป็นเจ้าของอำนาจ ตัวเราหรือสถาบัน ข้อสาม ใครเป็นคนอ่าน และอ่านที่ไหน ถ้าตอบข้อแรกผิด ความหมายจะกลับด้าน เช่น ใช้ should กับสิ่งที่บังคับ หรือใช้ mustn't กับสิ่งที่ไม่จำเป็น ถ้าตอบข้อสองหรือข้อสามผิด ประโยคจะฟังผิดระดับ ซึ่งในข้อสอบก็เสียคะแนนเหมือนกัน และต้องใช้ระดับภาษาเดียวตลอดทั้งประกาศ เช่น Visitors must sign in; they may not enter the workshop unaccompanied. (ผู้มาติดต่อต้องลงชื่อ และห้ามเข้าโรงฝึกงานโดยไม่มีคนพาไป) อย่าเขียน shall คู่กับ can't ในประกาศเดียวกัน",
  "analogy": {
   "title": "The matching uniform",
   "text": "A notice is like your school uniform: every piece has to match. You wouldn't wear the formal jacket with beach flip-flops. If line one says ‘Students <em>must</em> wear ID cards’, line two can't suddenly say ‘You <em>can't</em> bring snacks lol’. First choose the right piece — require, ban, permit or advise — then keep the whole outfit in <strong>one style</strong>."
  },
  "trap": "Students think the only danger is grammar. The bigger one is the wrong cell: <em>should</em> for a compulsory rule (readers treat it as advice) or <em>mustn't</em> for an optional one (it flips the meaning). Tests then add mixed registers — <em>shall</em> next to <em>you can't</em> — or <em>are advised… should not</em>, which only recommends. Dodge: label each line require / ban / permit / advise, check the modal matches, then check one voice throughout.",
  "map": {
   "center": "Writing a rule",
   "branches": [
    {
     "label": "Require",
     "leaves": [
      "must / have to",
      "are to / be required to",
      "shall (contracts)"
     ]
    },
    {
     "label": "Ban",
     "leaves": [
      "must not / may not",
      "is not to / shall not"
     ]
    },
    {
     "label": "Permit",
     "leaves": [
      "can / may",
      "be allowed / permitted to"
     ]
    },
    {
     "label": "Recommend",
     "leaves": [
      "should / ought to",
      "are advised to"
     ]
    },
    {
     "label": "3 questions",
     "leaves": [
      "1 Which cell?",
      "2 Whose authority?",
      "3 Who reads it, where?"
     ]
    },
    {
     "label": "Common fails",
     "leaves": [
      "should for compulsory",
      "mustn't for optional",
      "mixed registers"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Writes a Notice",
   "panels": [
    {
     "who": "Nan",
     "text": "Bot, write the lab notice: no food, sealed water bottles are OK, goggles are required."
    },
    {
     "who": "Nong Bot",
     "text": "Done! ‘Food <em>shall not</em> be eaten. You <em>can't</em> bring water. Goggles <em>should</em> be worn, maybe.’ Beep!"
    },
    {
     "who": "Nan",
     "text": "Bot! You banned the water and made the goggles optional!"
    },
    {
     "who": "Mai",
     "text": "And it sounds like a lawyer, a friend and a shy cat wrote it."
    },
    {
     "who": "T.Chris",
     "text": "Right cells, one voice: ‘Food <em>may not</em> be consumed. Water in sealed bottles <em>is permitted</em>. Goggles <em>must</em> be worn.’"
    },
    {
     "who": "Nong Bot",
     "text": "Reprinting. Goggles <em>must</em> be worn. Even by robots. Beep."
    }
   ],
   "moral": "Pick the right cell first — require, ban, permit or advise — then hold one register through the whole notice."
  },
  "chant": {
   "title": "Write It Right",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Require? <em>Must</em>! Ban? <em>May not</em>!",
    "Permit? <em>May</em>! Advise? <em>Should</em> — that's the lot!",
    "Ask the cell, then ask who's boss,",
    "Then ask who reads — or the meaning's lost!",
    "<em>Should</em> for a rule? They'll think it's free!",
    "<em>Mustn't</em> for optional? A flipped decree!",
    "One notice, one voice, from start to end,",
    "No <em>shall</em> with <em>can't</em> — don't mix, my friend!"
   ]
  },
  "moves": [
   {
    "move": "Touch the four corners of your desk, one by one",
    "says": "Require, ban, permit, advise — which corner is this rule?"
   },
   {
    "move": "Tap your chest, then point out of the window at the school",
    "says": "Whose authority? Mine — or the institution's?"
   },
   {
    "move": "Hold an imaginary notice up for a reader",
    "says": "Who reads it, and where? Match the voice."
   },
   {
    "move": "Draw one straight line across the desk with a finger",
    "says": "One register, top to bottom: <em>must</em>, <em>may not</em>, <em>may</em>."
   }
  ]
 },
 "t4l1s1": {
  "thai": "บทนี้เป็นเรื่อง “ความสามารถ” ซึ่งเป็นข้อเท็จจริงเกี่ยวกับตัวประธานเอง ไม่ใช่การอนุญาต ใช้ can เมื่อพูดถึงความสามารถในปัจจุบัน และใช้ could เมื่อพูดถึงความสามารถที่มีอยู่ตลอดช่วงหนึ่งในอดีต ทั้งสองคำบอกแค่ว่า “มีความสามารถ” ไม่ได้บอกว่าได้ลงมือทำจริง เช่น Until the accident, my grandfather could carve a set of shadow puppets in a week. (ก่อนเกิดอุบัติเหตุ คุณปู่แกะหุ่นเงาได้ครบทั้งชุดภายในสัปดาห์เดียว) ส่วน be able to ไม่ใช่คำที่หรูกว่า can แต่เป็น “ตัวซ่อม” สำหรับตำแหน่งที่ modal เข้าไปไม่ได้ เช่น will be able to (ห้ามพูดว่า will can) และต้องมี to เสมอ ถ้าใช้ can ได้ก็ใช้ can เพราะ I am able to help ฟังแข็งเกินไป วิธีเช็กง่าย ๆ คือ ถ้าแทนด้วย knows how to ได้ แปลว่าเป็นความสามารถ ถ้าแทนด้วย is allowed to ได้ แปลว่าเป็นการอนุญาต",
  "analogy": {
   "title": "The skill card",
   "text": "Your profile card in a game lists your <strong>skills</strong>: swim, play the khim, edit videos. That's <em>can</em> — a fact about you right now. An old screenshot of last year's card is <em>could</em>: skills you had back then. Neither card says you actually used them today. The school rule board is a different thing: ‘Students <em>can</em> use the lab after four’ is permission, not a skill."
  },
  "trap": "Thai <em>ได้</em> covers both skill and permission, so students read every <em>can</em> the same way. Tests mix them: <em>Library members can borrow six books</em> is permission, not ability. Students who learn <em>be able to</em> as a ‘smart <em>can</em>’ also write <s>only they are able treat</s> or <s>will can</s>. Dodge: swap in <em>knows how to</em> (ability) or <em>is allowed to</em> (permission) — and never drop the <em>to</em> in <em>able to</em>.",
  "map": {
   "center": "can · could · able to",
   "branches": [
    {
     "label": "can = now",
     "leaves": [
      "a power the subject has",
      "Nong can read diagrams"
     ]
    },
    {
     "label": "could = then",
     "leaves": [
      "a power over a past period",
      "until the accident → could"
     ]
    },
    {
     "label": "be able TO",
     "leaves": [
      "after will / have / to",
      "✗ will can",
      "✗ are able treat"
     ]
    },
    {
     "label": "Ability test",
     "leaves": [
      "knows how to → ability",
      "is allowed to → permission"
     ]
    },
    {
     "label": "Style",
     "leaves": [
      "can = normal choice",
      "am able to = heavy",
      "repair only when forced"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Checks the Rule Book",
   "panels": [
    {
     "who": "Ploy",
     "text": "Bot, the fan in our room is broken. <em>Can</em> you read a circuit diagram?"
    },
    {
     "who": "Nong Bot",
     "text": "Checking the rule book… Beep! Rule 12: robots are allowed in Room 304. Yes, I can!"
    },
    {
     "who": "Fah",
     "text": "We didn't ask if you're <em>allowed</em>, Bot. We asked if you <em>know how</em>."
    },
    {
     "who": "Nong Bot",
     "text": "Oh. Running skill check… zero results. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Then the answer is ‘No, I <em>can't</em>’, Bot — here <em>can</em> means <em>know how to</em>, not <em>allowed to</em>."
    }
   ],
   "moral": "Ability <em>can</em> is a fact about the subject: if <em>knows how to</em> fits, it's ability; if <em>is allowed to</em> fits, it's permission."
  },
  "chant": {
   "title": "Plug It In",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Can</em> is now — I know how!",
    "<em>Could</em> is then — I knew how back when!",
    "After <em>will</em>, <em>have</em>, <em>to</em> — the plug won't fit,",
    "Clip on <em>be able to</em> — that's it!",
    "Keep the <em>to</em>, don't let it go:",
    "<em>Able TO</em> — every time, you know!",
    "<em>Can</em> fits fine? Then <em>can</em> is best —",
    "Skill, not permission: that's the test!"
   ]
  },
  "moves": [
   {
    "move": "Flex one arm like showing a muscle",
    "says": "<em>Can</em> — I've got the skill right now!"
   },
   {
    "move": "Point your thumb back over your shoulder, then flex",
    "says": "<em>Could</em> — I had that power back then."
   },
   {
    "move": "Open your palm like a guard waving you through",
    "says": "<em>Is allowed to</em> = permission. That's not ability!"
   },
   {
    "move": "Click two fists together like a plug into an adapter",
    "says": "After <em>will</em>, <em>have</em>, <em>to</em>: clip on <em>be able to</em>!"
   },
   {
    "move": "Tap the desk twice",
    "says": "<em>Able</em>… <em>TO</em>! Never drop the <em>to</em>."
   }
  ]
 },
 "t4l1s2": {
  "thai": "modal อย่าง can มีแค่รูปเดียว ไม่มีรูป to can ไม่มี canned ไม่มี canning และวางต่อจาก modal ตัวอื่นไม่ได้ ภาษาอังกฤษจึงใช้ be able to แทนในสี่ตำแหน่ง คือ (1) หลัง modal ตัวอื่น เช่น will be able to (2) หลัง have ในรูป perfect เช่น has been able to (3) หลัง to เช่น hope to be able to และ (4) ตำแหน่งที่ต้องใช้รูป -ing เช่น Being able to drive is now essential. คำที่ผันตามกาลมีแค่ be ส่วน able to คงรูปเดิมเสมอ ระวัง hope to be able to มี to สองตัว ตัวแรกเป็นของ hope ตัวที่สองเป็นของ able ห้ามตัดทิ้งตัวไหนเลย เช่น By June the team will be able to test the prototype outdoors. (ภายในเดือนมิถุนายน ทีมจะทดสอบต้นแบบกลางแจ้งได้) แต่ถ้าตำแหน่งนั้นใช้ can ได้อยู่แล้ว ก็ใช้ can ไปเลย อย่าซ่อมเกินจำเป็น",
  "analogy": {
   "title": "The plug adapter",
   "text": "At home your phone charger goes straight into the wall — that's <em>can</em>. But some sockets are a different shape: after <em>will</em>, after <em>have</em>, after <em>to</em>, and the <em>-ing</em> slot. The modal plug won't go in, so you clip on the adapter <em>be able to</em>: <em>will be able to</em>, <em>has been able to</em>, <em>to be able to</em>, <em>being able to</em>. Only the <em>be</em> part changes shape. And nobody uses an adapter when the plug already fits."
  },
  "trap": "Thai <em>สามารถ</em> fits anywhere — <em>จะสามารถ</em>, <em>หวังว่าจะสามารถ</em> — so students write <s>will can</s>, <s>has could</s>, <s>hope to can</s>. Tests hide the slot: a <em>since</em> clause demands <em>has been able to</em>, a subject slot demands <em>Being able to</em>, and <em>hope</em> needs two <em>to</em>s. Dodge: look left of the gap — <em>will</em>, <em>have</em>, <em>to</em>, or a subject? Write <em>be able to</em> and count your <em>to</em>s.",
  "map": {
   "center": "No modal? → be able to",
   "branches": [
    {
     "label": "After a modal",
     "leaves": [
      "will be able to",
      "might / should be able to",
      "✗ will can"
     ]
    },
    {
     "label": "After have",
     "leaves": [
      "has been able to",
      "had been able to",
      "✗ has could"
     ]
    },
    {
     "label": "After to",
     "leaves": [
      "hope to be able to",
      "2 × to — keep both!",
      "✗ hope to can"
     ]
    },
    {
     "label": "-ing slot",
     "leaves": [
      "Being able to drive is…",
      "without being able to…"
     ]
    },
    {
     "label": "Only be changes",
     "leaves": [
      "is/was/will be + able to",
      "able to never changes"
     ]
    },
    {
     "label": "Don't over-fix",
     "leaves": [
      "I can send it now ✓",
      "I am able to… = stiff"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Stacks the Modals",
   "panels": [
    {
     "who": "Nong Bot",
     "text": "Good news! Tomorrow I <s>will can</s> fix the projector. Beep!"
    },
    {
     "who": "Mai",
     "text": "Will… can? Bot, that sounds broken."
    },
    {
     "who": "T.Chris",
     "text": "Two modals can't stack, Bot. After <em>will</em>, use <em>be able to</em>: I <em>will be able to</em> fix it."
    },
    {
     "who": "Nong Bot",
     "text": "Upgrade installed! I am able to sit. I am able to blink. I am able to say hello."
    },
    {
     "who": "Nan",
     "text": "T.Chris, now he's using it everywhere!"
    },
    {
     "who": "T.Chris",
     "text": "Only where the slot forces it, Bot. Everywhere else, just say <em>I can</em>."
    }
   ],
   "moral": "Use <em>be able to</em> where a modal can't go — after <em>will</em>, <em>have</em>, <em>to</em>, or as <em>-ing</em> — and plain <em>can</em> everywhere else."
  },
  "chant": {
   "title": "The Four Slots",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "After <em>will</em> — <em>be able to</em>!",
    "After <em>have</em> — <em>been able to</em>!",
    "After <em>to</em> — <em>to be able to</em>!",
    "Need an <em>-ing</em>? <em>Being able to</em>!",
    "Only <em>be</em> will change its shape,",
    "<em>Able to</em> stays — no escape!",
    "Two <em>to</em>s in <em>hope to be able to</em> —",
    "<em>Can</em> is free? Then <em>can</em> will do!"
   ]
  },
  "moves": [
   {
    "move": "Stack one fist on the other, then knock the top one off",
    "says": "<s>will can</s> — modals don't stack!"
   },
   {
    "move": "Point straight ahead into the future",
    "says": "<em>will be able to</em>"
   },
   {
    "move": "Sweep your hand from behind you to your desk",
    "says": "<em>has been able to</em> — from then up to now."
   },
   {
    "move": "Hold up two fingers",
    "says": "<em>hope TO be able TO</em> — two <em>to</em>s!"
   },
   {
    "move": "Shrug and relax your shoulders",
    "says": "Can a modal go here? Then just say <em>can</em>."
   }
  ]
 },
 "t4l1s3": {
  "thai": "can ไม่ได้ใช้กับคนเท่านั้น สิ่งของก็มี “ความสามารถ” ได้ เช่น The crane can lift forty tonnes. (เครนตัวนี้ยกได้สี่สิบตัน) ซึ่งเป็นสเปกของเครื่อง แต่ can ยังมีความหมายที่สาม คือ “ความเป็นไปได้ทั่วไป” เช่น Accidents can happen. หรือ Power cuts can last for hours. แปลว่า “บางครั้งก็เกิดขึ้นได้” เป็นการบอกความถี่ ไม่ใช่ความสามารถ และไม่ใช่การอนุญาต วิธีเช็กคือลองแทน can ด้วย sometimes ถ้าความหมายยังเหมือนเดิม (Power cuts sometimes last for hours.) เป็นความเป็นไปได้ทั่วไป ถ้าความหมายเพี้ยน (The crane sometimes lifts forty tonnes.) เป็นความสามารถ และระวังอย่าใช้ can คาดเดาเรื่องครั้งเดียว Winters in the north can be severe. เป็นความจริงทั่วไปของฤดูหนาวทุกปี แต่ถ้าพูดถึงฤดูหนาวปีนี้ปีเดียว ต้องใช้ could หรือ may",
  "analogy": {
   "title": "Spec sheet vs. traffic app",
   "text": "The box of a new phone says it <em>can</em> charge to 50% in fifteen minutes. That's a spec — what the phone is built to do. Your Grab app warns that Sukhumvit traffic <em>can</em> be terrible at six o'clock. Traffic has no skill and nobody gave it permission; it just means it <em>sometimes is</em>. Same word, two jobs: a spec sheet and a ‘sometimes’ warning."
  },
  "trap": "Students learn ‘<em>can</em> = ability or permission’ (<em>ได้</em>), so <em>Storms can close the road</em> gets read as a skill or a rule. Tests offer paraphrases like <em>are permitted to</em>, <em>are likely to… today</em> or <em>have the power to</em>, and some read <em>Rip currents can form quickly</em> as ‘are forming now’. Dodge: replace <em>can</em> with <em>sometimes</em> — if the meaning survives, it's general possibility about the whole kind, not this one day.",
  "map": {
   "center": "can: things & events",
   "branches": [
    {
     "label": "Thing's capacity",
     "leaves": [
      "crane can lift 40 tonnes",
      "alloy can take 900°",
      "data can be exported"
     ]
    },
    {
     "label": "Sometimes-can",
     "leaves": [
      "Accidents can happen",
      "Power cuts can last hours"
     ]
    },
    {
     "label": "Permission",
     "leaves": [
      "Staff can book the bus",
      "= are allowed to"
     ]
    },
    {
     "label": "Sometimes test",
     "leaves": [
      "can → sometimes: same?",
      "yes = general possibility",
      "no = capacity"
     ]
    },
    {
     "label": "One occasion?",
     "leaves": [
      "can = the whole kind",
      "this winter → could / may"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Reads the Lab Sign",
   "panels": [
    {
     "who": "Mint",
     "text": "Careful, Bot. Look at the sign in the science lab: <em>Accidents can happen.</em>"
    },
    {
     "who": "Nong Bot",
     "text": "<em>Can</em> = permission! Accidents are allowed! Beep! (drops a beaker)"
    },
    {
     "who": "Pim",
     "text": "Bot! Nobody <em>allowed</em> that!"
    },
    {
     "who": "Nong Bot",
     "text": "Then <em>can</em> = ability? Wow. Accidents are very talented."
    },
    {
     "who": "T.Chris",
     "text": "Neither, Bot. Swap in <em>sometimes</em>: accidents <em>sometimes</em> happen. It's a warning, not a permission slip."
    }
   ],
   "moral": "If <em>sometimes</em> can replace <em>can</em>, it's general possibility — not ability, and not permission."
  },
  "chant": {
   "title": "Spec or Sometimes",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "The crane <em>can</em> lift it — that's the spec,",
    "Built to do it: tick, check!",
    "Storms <em>can</em> close the road? Not a skill, not a rule —",
    "It just means <em>sometimes</em> — that's the tool!",
    "Swap in <em>sometimes</em>: does it still make sense?",
    "Yes — it's general! No — it's capacity, friends!",
    "Just this winter? <em>Could</em> or <em>may</em> —",
    "<em>Can</em> is for the kind, not one day!"
   ]
  },
  "moves": [
   {
    "move": "Lift an invisible heavy box with both hands",
    "says": "The crane <em>can</em> lift forty tonnes — what a thing is built to do."
   },
   {
    "move": "Wobble your hand from side to side",
    "says": "Power cuts <em>can</em> last for hours — <em>sometimes</em> they do."
   },
   {
    "move": "Open your palm like a guard waving you through",
    "says": "Staff <em>can</em> book the minibus — that's permission."
   },
   {
    "move": "Press one finger on a single spot on the desk",
    "says": "Just this one winter? Switch to <em>could</em> or <em>may</em>."
   }
  ]
 },
 "t4l2s1": {
  "thai": "could บอกความสามารถที่มีอยู่ตลอดช่วงเวลาหนึ่งในอดีต เช่น At fourteen she could already sail the boat single-handed. (ตอนอายุสิบสี่ เธอแล่นเรือคนเดียวได้แล้ว) แต่ could บอกไม่ได้ว่า “ครั้งนั้นทำสำเร็จจริง” ถ้าประโยคพูดถึงเหตุการณ์ครั้งเดียวที่สำเร็จ ต้องใช้ was able to, managed to หรือ succeeded in -ing เช่น She was able to win the final last Saturday. (เธอชนะนัดชิงเมื่อวันเสาร์ที่แล้ว) ห้ามพูดว่า She could win the final last Saturday. ให้ถามตัวเองว่า “ประโยคนี้บอกว่ามีครั้งหนึ่งที่ทำได้สำเร็จหรือเปล่า” ถ้าใช่ ห้ามใช้ could แต่ถ้าเป็นทักษะ นิสัย หรือช่วงเวลา could เหมาะกว่า ส่วน managed to และ succeeded in เพิ่มความหมายว่า “ยาก แต่ก็ทำได้” คนไทยพูดว่า “ได้” ทั้งสองกรณี จึงมักใช้ could ผิดที่",
  "analogy": {
   "title": "Skill badge vs. trophy",
   "text": "In a mobile game, your character has a skill badge: ‘triple jump’. It's there all season — that's <em>could</em>, a power you had. Last night you finally beat the final boss, and the screen flashed <strong>ACHIEVEMENT UNLOCKED</strong>. That pop-up is <em>was able to</em> or <em>managed to</em>: one time, it actually worked. A skill badge can never tell you that you won last night."
  },
  "trap": "Thai uses <em>ได้</em> for a skill (<em>ว่ายน้ำได้</em>) and for one success (<em>ซื้อตั๋วได้แล้ว</em>), so students write <s>I could get the tickets yesterday</s> (meaning ‘I got them’). Tests plant <em>could deliver… by noon</em> in a one-occasion story — and also tempt you to ‘fix’ a decade-long skill with <em>managed to</em>. Dodge: ask ‘one occasion, and it actually worked?’ Yes → <em>was able to</em> / <em>managed to</em>; no → <em>could</em>.",
  "map": {
   "center": "could vs was able to",
   "branches": [
    {
     "label": "could = power",
     "leaves": [
      "a skill over a period",
      "At 14 she could sail",
      "says nothing of events"
     ]
    },
    {
     "label": "One success",
     "leaves": [
      "was able to win (Sat.)",
      "managed to restart it",
      "succeeded in getting"
     ]
    },
    {
     "label": "Blocked",
     "leaves": [
      "✗ could win the final Sat.",
      "one event + result ≠ could"
     ]
    },
    {
     "label": "managed to",
     "leaves": [
      "+ difficulty overcome",
      "I managed to get a seat"
     ]
    },
    {
     "label": "The question",
     "leaves": [
      "one occasion? it worked?",
      "yes → was able / managed",
      "no → could"
     ]
    },
    {
     "label": "Don't over-fix",
     "leaves": [
      "10-year skill → could",
      "able to swim at 5 = OK, could more usual"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot's Football Report",
   "panels": [
    {
     "who": "Nong Bot",
     "text": "Breaking news! Last Saturday our school team <s>could win</s> the final! Beep!"
    },
    {
     "who": "Fah",
     "text": "So… did they win or not?"
    },
    {
     "who": "Nong Bot",
     "text": "Could = they had the power to win. Data on the actual match: not included."
    },
    {
     "who": "Mai",
     "text": "Bot, that's a story with no ending!"
    },
    {
     "who": "T.Chris",
     "text": "If they won, Bot, say they <em>were able to</em> win — or <em>managed to</em> win, if it was hard."
    },
    {
     "who": "Nong Bot",
     "text": "1–0 in extra time. They <em>managed to</em> win! Beep beep!"
    }
   ],
   "moral": "<em>Could</em> names a power; one occasion that actually worked needs <em>was able to</em>, <em>managed to</em> or <em>succeeded in -ing</em>."
  },
  "chant": {
   "title": "Power or Win",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Could</em> is a power, a skill that stays —",
    "Childhood, habits, the old school days.",
    "But one time it worked? One time, one win?",
    "<em>Could</em> can't say it — let <em>able to</em> in!",
    "<em>Was able to</em>, <em>managed to</em>, <em>succeeded in</em> —",
    "<em>Managed</em> means it was hard, but you got the win!"
   ]
  },
  "moves": [
   {
    "move": "Flex your arm and hold it still",
    "says": "<em>Could</em> — a power I had for years."
   },
   {
    "move": "One quick fist pump",
    "says": "One time, it worked! <em>Was able to!</em>"
   },
   {
    "move": "Wipe sweat off your forehead, then fist pump",
    "says": "Hard, but done — <em>managed to</em>!"
   },
   {
    "move": "Cross your forearms in an X",
    "says": "<em>Could</em> + one success? Blocked!"
   }
  ]
 },
 "t4l2s2": {
  "thai": "กฎที่ห้ามใช้ could กับความสำเร็จครั้งเดียวมีข้อยกเว้นสองข้อ และทั้งสองข้อมาจากเหตุผลเดียวกัน คือกฎนี้ห้าม could เฉพาะเมื่อประโยคยืนยันว่า “ทำสำเร็จ” ในครั้งหนึ่งเท่านั้น ข้อแรก กริยาการรับรู้และการคิด เช่น see, hear, smell, understand, remember เป็นกริยาบอกสภาพ ไม่ใช่ความสำเร็จ จึงใช้ could ได้ตามปกติ เช่น From the top of the tower we could see as far as the estuary. (จากยอดหอคอยเรามองเห็นไปไกลถึงปากแม่น้ำ) ข้อสอง รูปปฏิเสธ couldn't ใช้ได้เสมอ เพราะความล้มเหลวไม่ใช่ความสำเร็จ เช่น She couldn't win the final. (เธอไม่สามารถชนะนัดชิงได้) แต่ระวัง ถ้าเป็นกริยาที่บอกความสำเร็จ เช่น spot, find หรือ reach ซึ่งมักมาพร้อมคำอย่าง finally, at last หรือ after forty minutes ต้องใช้ managed to ส่วน At last we could see the coast. ยังใช้ could ได้ เพราะ see เป็นกริยาการรับรู้ (เหมือน hear) ซึ่งใช้ could ได้",
  "analogy": {
   "title": "The rooftop view",
   "text": "On a rooftop in Bangkok you <em>could see</em> the whole river — no effort, the view was just there, so <em>could</em> is fine. Your phone had no signal up there: you <em>couldn't</em> call anyone. A failure wins no trophy, so <em>couldn't</em> is fine too. But after twenty minutes of searching the crowd at Siam, you <em>finally</em> spotted your friend — that's a win you worked for: <em>managed to spot</em>."
  },
  "trap": "After learning the single-occasion rule, students over-apply it: they ‘fix’ <em>we could hear every word</em> or <em>she couldn't win</em> because each is one occasion. Tests reward the opposite (‘Which sentence is correct as it stands?’) — then flip it with <em>finally spotted</em>: <em>spot</em> means finding something after a search, so it is an achievement (but <em>at last we could see the coast</em> is fine). Dodge: <em>could</em> is blocked only if the sentence is affirmative AND says something was brought off.",
  "map": {
   "center": "Where could is OK",
   "branches": [
    {
     "label": "Senses",
     "leaves": [
      "see · hear · smell · feel",
      "could see the harbour ✓"
     ]
    },
    {
     "label": "Mind verbs",
     "leaves": [
      "understand · remember",
      "could understand it ✓"
     ]
    },
    {
     "label": "Negative",
     "leaves": [
      "couldn't = always OK",
      "failure ≠ achievement"
     ]
    },
    {
     "label": "Still blocked",
     "leaves": [
      "+ one success = ✗ could",
      "could reach the summit ✗"
     ]
    },
    {
     "label": "Warning sign",
     "leaves": [
      "finally + spot / find / reach → managed to",
      "at last we could see ✓"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Over-Corrects",
   "panels": [
    {
     "who": "Nan",
     "text": "From the school roof yesterday I <em>could see</em> Wat Arun!"
    },
    {
     "who": "Nong Bot",
     "text": "ERROR! One occasion! Correct form: ‘I <em>managed to</em> see Wat Arun!’ Beep!"
    },
    {
     "who": "Nan",
     "text": "It wasn't hard, Bot. It was just… there."
    },
    {
     "who": "Mint",
     "text": "And I <em>couldn't</em> find my keys this morning."
    },
    {
     "who": "Nong Bot",
     "text": "ERROR! One occasion again! Alarm! Alarm!"
    },
    {
     "who": "T.Chris",
     "text": "Relax, Bot. Seeing is a state, and failing is no achievement — <em>could see</em> and <em>couldn't find</em> are both fine."
    }
   ],
   "moral": "<em>Could</em> is blocked only for one affirmative success; sense verbs, thinking verbs and the negative are free."
  },
  "chant": {
   "title": "Free Passes",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "See it, hear it, smell it — <em>could</em> is cool,",
    "Understand, remember — still inside the rule.",
    "<em>Couldn't</em> win? <em>Couldn't</em> find? Say it any time —",
    "A failure's not a trophy, so the negative's fine.",
    "But <em>finally spotted</em>, <em>at last found</em>, <em>reached</em> after an hour? —",
    "That's a win you worked for: <em>managed to</em> has the power!"
   ]
  },
  "moves": [
   {
    "move": "Hold a hand above your eyes like looking far away",
    "says": "<em>Could see</em> — a sense is a state. Fine!"
   },
   {
    "move": "Tap your temple twice",
    "says": "<em>Could understand</em>, <em>could remember</em> — fine!"
   },
   {
    "move": "Thumbs down, then a calm nod",
    "says": "<em>Couldn't</em> — a failure is always fine."
   },
   {
    "move": "Search with your hand over your eyes, then point suddenly",
    "says": "<em>Finally</em> spotted it? <em>Managed to spot</em>!"
   }
  ]
 },
 "t4l2s3": {
  "thai": "เวลาเลือกคำตอบ ให้ถามสามคำถามตามลำดับ คำถามแรก ตำแหน่งนี้ใส่ modal ได้ไหม ถ้าอยู่หลัง will หลัง have หลัง to หรือต้องเป็นรูป -ing ใส่ไม่ได้ ต้องใช้ be able to ทันทีแล้วจบเลย เช่น For the past two years, students have been able to get to school without crossing the ford. คำถามที่สอง ถ้าใส่ modal ได้ ประโยคพูดถึงความสำเร็จครั้งเดียวหรือเปล่า ถ้าใช่ ใช้ was able to หรือ managed to ถ้าเป็นทักษะ นิสัย หรือช่วงเวลา ใช้ could และถ้าเป็นประโยคปฏิเสธ ใช้ couldn't ได้เสมอ คำถามที่สาม ประโยคนี้พูดถึงความสามารถจริงหรือไม่ เช่น The delay could be down to a faulty relay. (ความล่าช้าอาจเกิดจากรีเลย์เสีย) เป็นการคาดเดา กฎนี้จึงไม่เกี่ยว สุดท้าย อย่าแก้เกินเหตุ As a boy he could name every bird. ใช้ could ถูกต้องแล้ว",
  "analogy": {
   "title": "Three gates at the BTS",
   "text": "Picture three ticket gates. Gate 1: can a modal pass here? After <em>will</em>, <em>have</em> or <em>to</em>, or in an <em>-ing</em> slot, the gate is shut — take <em>be able to</em> and you're done. Gate 2: one trip that worked? Tap <em>was able to</em> or <em>managed to</em>; a regular route gets <em>could</em>. Gate 3: is this even an ability ticket? <em>That could be the answer</em> belongs on another line."
  },
  "trap": "Students start with the single-occasion rule and agonise over sentences where there was never a choice: <em>For the past two years</em> needs <em>have been able to</em>, full stop. Tests also slip in a <em>could</em> that isn't ability at all (<em>The delay could be down to a faulty relay</em>), and tempt you to over-fix a childhood skill into <em>was able to</em>. Dodge: ask in order — modal slot? one success? ability at all?",
  "map": {
   "center": "3 questions, in order",
   "branches": [
    {
     "label": "1 Modal slot?",
     "leaves": [
      "after will/have/to/-ing",
      "→ be able to. Stop."
     ]
    },
    {
     "label": "2 One success?",
     "leaves": [
      "yes → was able / managed",
      "no → could",
      "negative → couldn't"
     ]
    },
    {
     "label": "3 Ability?",
     "leaves": [
      "That could be the answer",
      "guess → rule doesn't apply"
     ]
    },
    {
     "label": "Clue words",
     "leaves": [
      "past 2 yrs → have been",
      "at 6 a.m. → were able to"
     ]
    },
    {
     "label": "Don't over-fix",
     "leaves": [
      "As a boy he could name…",
      "skill → keep could"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Overthinks",
   "panels": [
    {
     "who": "Pim",
     "text": "Bot, gap-fill: ‘For the past two years, students ___ get to school by canal boat.’"
    },
    {
     "who": "Nong Bot",
     "text": "Single occasion? Habit? Perception verb? Processing… 12%… 13%…"
    },
    {
     "who": "Fah",
     "text": "Bot, the exam ends in five minutes!"
    },
    {
     "who": "T.Chris",
     "text": "Question one first, Bot: <em>for the past two years</em> needs <em>have</em>, and no modal fits after it. <em>Have been able to</em>. Done."
    },
    {
     "who": "Nong Bot",
     "text": "Processing complete. 100%. I have been able to… relax."
    }
   ],
   "moral": "Ask the slot question first; only if a modal fits do you ask whether it's one success — and whether it's ability at all."
  },
  "chant": {
   "title": "One, Two, Three",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "One: is it <em>will</em>, <em>have</em>, <em>to</em>, or <em>-ing</em>?",
    "Then <em>be able to</em> — don't think a thing!",
    "Two: one success? <em>Managed</em>, <em>was able</em>!",
    "Skill or habit? <em>Could</em> is on the table.",
    "<em>Couldn't</em>? Always fine — a fail's no prize.",
    "Three: is it ability, or a guess in disguise?",
    "<em>That could be true</em> is a guess, not a skill —",
    "One, two, three: run the drill!"
   ]
  },
  "moves": [
   {
    "move": "Hold up one finger, then show a flat ‘stop’ palm",
    "says": "<em>Will</em>, <em>have</em>, <em>to</em>, <em>-ing</em>? <em>Be able to</em> — stop!"
   },
   {
    "move": "Hold up two fingers, then one fist pump",
    "says": "One success? <em>Was able to</em> / <em>managed to</em>."
   },
   {
    "move": "Hold up two fingers, then flex and hold",
    "says": "A skill or a habit? Keep <em>could</em>."
   },
   {
    "move": "Hold up three fingers, then tilt your hand side to side",
    "says": "Just a guess? Not ability — this rule doesn't apply."
   }
  ]
 },
 "t4l3s1": {
  "thai": "will ไม่ได้แปลว่า “อนาคต” เสมอไป หลายครั้ง will บอก “ความเต็มใจ” ที่ตัดสินใจตอนนี้ เช่น I'll carry the projector down for you. (เดี๋ยวฉันช่วยถือโปรเจกเตอร์ลงไปให้) ส่วน won't แปลว่า “ไม่ยอม” คือการปฏิเสธอย่างตั้งใจ เช่น She won't say who told her. หมายถึงเธอไม่ยอมบอก ไม่ใช่การทำนายอนาคต และฟังแรงกว่า She isn't saying ซึ่งเป็นกลาง ที่สำคัญคือสิ่งของก็ “ไม่ยอม” ได้ เช่น The door won't open. หรือ The engine won't start. คนไทยชอบแปลตรงตัวว่า The engine doesn't want to start. ซึ่งไม่ใช่ภาษาอังกฤษที่เป็นธรรมชาติ อีกข้อหนึ่ง หลัง if ห้ามใช้ will ที่บอกอนาคต แต่ will ที่แปลว่าเต็มใจใช้ได้ เช่น If you'll take a seat, the registrar will call you shortly. (ถ้ากรุณานั่งรอสักครู่ เจ้าหน้าที่จะเรียกชื่อคุณ)",
  "analogy": {
   "title": "The stubborn ticket machine",
   "text": "You push a coin into the BTS ticket machine. It spits it straight back out. Again. And again. In English, the machine <em>won't</em> take your coin — as if it has decided to refuse. Your friend who <em>won't</em> reply on LINE is doing the same thing, on purpose. And when you say ‘<em>I'll</em> lend you a coin’, that <em>will</em> is you being willing, right now."
  },
  "trap": "Thai <em>ไม่ยอม</em> gets translated word for word: <s>The engine doesn't want to start</s>. Students also read every <em>won't</em> as a forecast, so they miss the refusal in <em>The witness will not give his name</em>. And because <s>If it will rain</s> is wrong, they reject <em>If you'll take a seat</em> too. Dodge: can you say ‘refuses to’ or ‘is willing to’? Then it's willingness <em>will</em>.",
  "map": {
   "center": "will = willing",
   "branches": [
    {
     "label": "Willingness",
     "leaves": [
      "I'll carry it for you",
      "a decision made now"
     ]
    },
    {
     "label": "won't = refuses",
     "leaves": [
      "She won't tell me",
      "≠ isn't telling (neutral)"
     ]
    },
    {
     "label": "Things refuse",
     "leaves": [
      "The door won't open",
      "The engine won't start",
      "✗ doesn't want to start"
     ]
    },
    {
     "label": "After if",
     "leaves": [
      "✗ If it will rain…",
      "✓ If you'll take a seat"
     ]
    },
    {
     "label": "Don't confuse",
     "leaves": [
      "can't = unable",
      "mustn't = forbidden"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Interviews the Printer",
   "panels": [
    {
     "who": "Fah",
     "text": "(pressing Start) The printer <em>won't</em> print my report!"
    },
    {
     "who": "Nong Bot",
     "text": "Interviewing printer… Printer, do you want to print? … No answer. Report: the printer <s>does not want to print</s>."
    },
    {
     "who": "Mai",
     "text": "Bot, printers don't <em>want</em> things."
    },
    {
     "who": "Nong Bot",
     "text": "Understood. <em>I'll</em> fix it! (kicks the printer)"
    },
    {
     "who": "T.Chris",
     "text": "Thanks for being willing, Bot — that's <em>I'll</em>. But in English the printer <em>won't</em> print; it doesn't ‘not want to’."
    }
   ],
   "moral": "<em>Will</em> can mean ‘is willing to’, and <em>won't</em> means ‘refuses to’ — for people and machines alike."
  },
  "chant": {
   "title": "Willing or Won't",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>I'll</em> carry that — I'm willing, I'm here!",
    "<em>Won't</em> means <em>refuse</em> — let's make that clear!",
    "She <em>won't</em> tell me — she's saying no,",
    "The door <em>won't</em> open, the car <em>won't</em> go!",
    "Machines don't <em>want</em> — so don't say that,",
    "Say it <em>won't</em> start, and that's that!",
    "<em>If you'll</em> take a seat — that <em>will</em> can stay:",
    "Willing <em>will</em> after <em>if</em> is OK!"
   ]
  },
  "moves": [
   {
    "move": "Hand on your chest, lean forward",
    "says": "<em>I'll</em> do it! — willing."
   },
   {
    "move": "Cross your arms and turn your head away",
    "says": "<em>Won't</em> — refusing, on purpose."
   },
   {
    "move": "Push hard on an imaginary door that doesn't move",
    "says": "The door <em>won't</em> open!"
   },
   {
    "move": "Sweep your palm towards a chair, like a receptionist",
    "says": "<em>If you'll</em> take a seat… — willing <em>will</em> after <em>if</em>."
   }
  ]
 },
 "t4l3s2": {
  "thai": "would เป็นรูปอดีตของ will ที่แปลว่าเต็มใจ เช่น He promised he would collect the parcel. (เขาสัญญาว่าจะไปรับพัสดุให้) ส่วน wouldn't คือ “ไม่ยอม” ในอดีต เช่น She wouldn't tell me where she had been. (เธอไม่ยอมบอกว่าไปไหนมา) ต้องแยกให้ออกจาก couldn't ซึ่งแปลว่า “ทำไม่ได้” He wouldn't open the gate. คือเขาไม่ยอมเปิด แต่ He couldn't open the gate. คือเขาเปิดไม่ได้ เช่น กุญแจไม่เข้า ถ้าแปลทั้งสองแบบว่า “เปิดไม่ได้” จะเสียความหมายทันที เพราะแบบแรกบอกเจตนาของคน แบบหลังบอกปัญหาของกุญแจ สิ่งของก็ใช้แบบนี้ได้ เช่น The car wouldn't start. (รถสตาร์ทไม่ติด) และอย่าสับสนกับ would แบบเงื่อนไขอย่าง I would help you if I could. เพราะ would ในบทนี้อยู่ในเรื่องเล่าอดีตธรรมดา ไม่มี if และเหตุการณ์เกิดขึ้นจริง",
  "analogy": {
   "title": "Read, no reply",
   "text": "You sent your friend a message on LINE last night. It says <strong>Read</strong>, but no reply came all evening. She <em>wouldn't</em> answer — she saw it and chose not to. If her phone had died at 0%, she <em>couldn't</em> answer. Same silence, two different stories: one about her decision, one about her battery."
  },
  "trap": "Students translate both as ‘<em>ไม่ได้</em>’ / ‘not able’ and pick <em>couldn't</em>, so a refusal turns into an excuse. Tests plant the clue that kills inability: <em>he was standing there with the key</em>, <em>however politely we asked</em>, <em>she had the number in front of her</em>. Dodge: was it a choice? He could have done it but said no → <em>wouldn't</em>; something stopped him (no key, a broken lock) → <em>couldn't</em>.",
  "map": {
   "center": "would / wouldn't",
   "branches": [
    {
     "label": "Past willing",
     "leaves": [
      "He said he would drive us",
      "past of ‘I'll help’"
     ]
    },
    {
     "label": "wouldn't",
     "leaves": [
      "= refused to",
      "She wouldn't tell me"
     ]
    },
    {
     "label": "≠ couldn't",
     "leaves": [
      "couldn't = unable",
      "wouldn't = decided not to"
     ]
    },
    {
     "label": "Things too",
     "leaves": [
      "The car wouldn't start",
      "✗ would not to close"
     ]
    },
    {
     "label": "Not if-would",
     "leaves": [
      "no if, real events",
      "≠ I'd help if I could"
     ]
    },
    {
     "label": "Clue test",
     "leaves": [
      "asked nicely → wouldn't",
      "key didn't fit → couldn't"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Diagnoses the Guard",
   "panels": [
    {
     "who": "Ploy",
     "text": "The guard had the key in his hand, but he <em>wouldn't</em> open the gate after six!"
    },
    {
     "who": "Nong Bot",
     "text": "Correction: he <em>couldn't</em> open it. I will lend him my laser. Beep!"
    },
    {
     "who": "Ploy",
     "text": "Bot, he <em>could</em>. He just said no."
    },
    {
     "who": "Nong Bot",
     "text": "Then the key is broken? The guard's arm is broken? Diagnosing guard…"
    },
    {
     "who": "T.Chris",
     "text": "Nothing's broken, Bot. <em>Wouldn't</em> = he decided not to. <em>Couldn't</em> = he wasn't able to."
    }
   ],
   "moral": "<em>Wouldn't</em> reports a past refusal — a decision; <em>couldn't</em> reports that someone was unable."
  },
  "chant": {
   "title": "No Way, No Way",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Would</em> is <em>will</em> in the past, you see —",
    "<em>He said he would</em>: he agreed with me.",
    "<em>Wouldn't</em> means he said ‘no way’,",
    "<em>Couldn't</em> means he had no way!",
    "The car <em>wouldn't</em> start on a cold, wet day —",
    "No <em>if</em> in sight, it's the past, OK?",
    "Asked so nicely, still a no?",
    "Then it's <em>wouldn't</em> — now you know!"
   ]
  },
  "moves": [
   {
    "move": "Nod and point back over your shoulder",
    "says": "<em>He said he would</em> — willing, back then."
   },
   {
    "move": "Cross your arms and turn your head away",
    "says": "<em>Wouldn't</em> — he refused."
   },
   {
    "move": "Show two empty palms with a sad face",
    "says": "<em>Couldn't</em> — he wasn't able to."
   },
   {
    "move": "Turn an invisible car key, then shake your head",
    "says": "The car <em>wouldn't</em> start!"
   }
  ]
 },
 "t4l3s3": {
  "thai": "will และ would ยังใช้บอก “พฤติกรรมที่เป็นนิสัยหรือธรรมชาติ” ได้ด้วย ไม่ได้หมายถึงอนาคต เช่น Oil will float on water. (น้ำมันย่อมลอยบนน้ำ) หรือ She'll sit in the same seat every week. (เธอมักนั่งที่เดิมทุกสัปดาห์) ส่วน would ใช้เล่าสิ่งที่ทำซ้ำ ๆ ในอดีต เช่น On Sundays my grandfather would walk the whole length of the beach. (ทุกวันอาทิตย์คุณปู่มักจะเดินเล่นไปตลอดแนวชายหาด) would ใช้แทน used to ได้เฉพาะการกระทำที่เกิดซ้ำ แต่ใช้กับสภาพไม่ได้ ถ้ากริยาเป็น be, have (ที่แปลว่ามีหรือเป็นเจ้าของ), own, live, know ต้องใช้ used to เท่านั้น เช่น He used to own a bookshop. ไม่ใช่ He would own a bookshop. และถ้าเน้นเสียงที่ will เช่น He WILL leave his boots in the hallway. จะกลายเป็นการบ่นว่า “ชอบทำแบบนี้อยู่เรื่อย น่ารำคาญจริง ๆ”",
  "analogy": {
   "title": "Mai's usual order",
   "text": "In the canteen, Mai <em>will</em> always order khao man gai — that's just what Mai does, not a plan for tomorrow. Back in M1 she <em>would</em> buy pink milk every break: real, repeated, past. But she <em>used to</em> be shy — that's a state, so no <em>would</em>. And Pim <em>WILL</em> put her bag on your chair? Stress it, and it's a complaint."
  },
  "trap": "Thai <em>เคย</em> covers every past habit, so students use <em>would</em> for states too: <s>He would own a bookshop</s>, <s>She would be scared of storms</s>. Tests sort <em>used to</em> sentences into ‘<em>would</em> works / only <em>used to</em>’, and offer <em>will find</em> for a routine that belongs to the past. Dodge: can you picture it happening again and again? Then <em>would</em> is fine; <em>be</em>, <em>have</em> (= own), <em>own</em>, <em>live</em>, <em>know</em> take only <em>used to</em>.",
  "map": {
   "center": "will / would = habit",
   "branches": [
    {
     "label": "will = typical",
     "leaves": [
      "She'll take the same seat",
      "Oil will float on water"
     ]
    },
    {
     "label": "would = past",
     "leaves": [
      "Sundays he would walk…",
      "real, repeated events"
     ]
    },
    {
     "label": "States → used to",
     "leaves": [
      "be/have (= own)/own/live/know",
      "✗ would own a shop",
      "✓ used to own a shop"
     ]
    },
    {
     "label": "Stress = moan",
     "leaves": [
      "He WILL leave his boots…",
      "= keeps doing it, grr"
     ]
    },
    {
     "label": "Not conditional",
     "leaves": [
      "no if, really happened",
      "≠ I'd tell you if I knew"
     ]
    },
    {
     "label": "Quick tests",
     "leaves": [
      "add always → same?",
      "picture it repeating?"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Buys a Noodle Stall",
   "panels": [
    {
     "who": "Pim",
     "text": "My grandma <em>used to</em> own a noodle stall in the market."
    },
    {
     "who": "Nong Bot",
     "text": "Upgrading sentence: ‘Your grandma <s>would own</s> a noodle stall.’ Every morning she would own it again! Beep!"
    },
    {
     "who": "T.Chris",
     "text": "Owning is a state, Bot — only <em>used to</em>. But <em>she would light the charcoal before five</em>: that really happened, again and again."
    },
    {
     "who": "Pim",
     "text": "And my brother <em>WILL</em> leave his socks on the sofa!"
    },
    {
     "who": "Nong Bot",
     "text": "Prediction saved: socks, sofa, tomorrow. Beep!"
    },
    {
     "who": "T.Chris",
     "text": "Not the future, Bot. Stressed <em>WILL</em> means he keeps doing it — and Pim is fed up."
    }
   ],
   "moral": "<em>Would</em> = repeated past actions (states need <em>used to</em>); stressed <em>WILL</em> = an annoying habit, not the future."
  },
  "chant": {
   "title": "Same Old Habit",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Oil <em>will</em> float — that's what oil does,",
    "She'll take that seat — just because!",
    "Sundays Grandpa <em>would</em> walk the sand,",
    "Every week the same — you understand?",
    "But <em>own</em>, <em>be</em>, <em>live</em>? No <em>would</em> for those —",
    "States take <em>used to</em> — that's how it goes!",
    "Stress it: he <em>WILL</em> leave his socks on the floor —",
    "That's a complaint! I can't take any more!"
   ]
  },
  "moves": [
   {
    "move": "Roll your hands over each other in circles",
    "says": "<em>Would</em> — again and again, in the past."
   },
   {
    "move": "Lay both hands flat and still on the desk",
    "says": "A state? Only <em>used to</em>: <em>He used to own a bookshop</em>."
   },
   {
    "move": "Stamp one foot and roll your eyes",
    "says": "He <em>WILL</em> leave his boots there! (a complaint)"
   },
   {
    "move": "Let one hand float gently upwards",
    "says": "Oil <em>will</em> float — that's just what it does."
   }
  ]
 },
 "t5l1s1": {
  "thai": "could, might, would, should หน้าตาเหมือนรูปอดีตของ can, may, will, shall แต่ส่วนใหญ่ไม่ได้บอกอดีตเลย สิ่งที่มันบอกจริง ๆ คือ “ระยะห่าง” หรือการถอยออกมาหนึ่งก้าวจากตอนนี้และความจริงตรงหน้า ซึ่งมี 3 แบบ คือ ห่างในเวลา (อดีต) ห่างในความเป็นไปได้ (อาจจะ หรือไม่เป็นจริง) และห่างทางสังคม (ความสุภาพ) ตัวคำบอกไม่ได้ว่าเป็นแบบไหน ต้องดูบริบท ถ้ามีวลีบอกเวลาในอดีต คือเวลา ถ้ามี if หรือเป็นการคาดเดา คือความเป็นไปได้ ถ้าเป็นคำถามขอให้ผู้ฟังทำอะไรให้ คือความสุภาพ เช่น Could you send the file again? (ช่วยส่งไฟล์อีกครั้งได้ไหมคะ) ไม่ได้พูดถึงเมื่อวาน แต่ We could walk to the market when we lived closer. (ตอนบ้านอยู่ใกล้ เราเดินไปตลาดได้) เป็นอดีตจริง",
  "analogy": {
   "title": "One step from the dot",
   "text": "Every BTS station map has a red <em>You are here</em> dot. <em>Could, might, would, should</em> all mean <strong>one step away from the dot</strong> — and the dot is <em>now, real, face to face</em>. But the step can go along three lines: back in <strong>time</strong>, away from what is <strong>certain</strong>, or back from the <strong>person</strong> you are talking to. The signs around the sentence tell you which line you took."
  },
  "trap": "Students learn “<em>could</em> = past of <em>can</em>” and read every <em>could</em> as อดีต. So <em>The delay could be caused by a faulty sensor</em> turns into a story about yesterday, and <em>Could I borrow your notes?</em> looks like a memory. Tests line up four <em>could</em> sentences and only one has a past frame. Dodge: hunt for a past time phrase (<em>as a child, in those days, before…</em>) — no past frame, no past time.",
  "map": {
   "center": "One form, 3 distances",
   "branches": [
    {
     "label": "Time",
     "leaves": [
      "past frame → past time",
      "as a child she could…"
     ]
    },
    {
     "label": "Likelihood",
     "leaves": [
      "a guess about now",
      "That could be the answer"
     ]
    },
    {
     "label": "Social space",
     "leaves": [
      "asking the listener",
      "Could you send it again?"
     ]
    },
    {
     "label": "Read the cue",
     "leaves": [
      "past phrase = time",
      "if / no cue = likelihood",
      "asking you = politeness"
     ]
    },
    {
     "label": "Not past!",
     "leaves": [
      "could ≠ always past",
      "the axes don't mix"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Lives in the Past",
   "panels": [
    {
     "who": "Ploy",
     "text": "Bot, <em>could</em> you pass me the glue?"
    },
    {
     "who": "Nong Bot",
     "text": "<em>Could</em> = past! Beep! Yes, I <em>could</em> pass glue… last week. I was excellent at it."
    },
    {
     "who": "Ploy",
     "text": "Bot, I don't need your history. I need the glue <strong>now</strong>!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, there's no past phrase here. A question asking you for something = politeness, not time."
    },
    {
     "who": "Nong Bot",
     "text": "Recalculating… Here you are, Ploy. Beep!"
    }
   ],
   "moral": "<em>Could</em> is only about past time when a past frame (<em>last year, as a child, when we lived there</em>) is in the sentence; a request is distance in social space."
  },
  "chant": {
   "title": "Three Ways Away",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Could, might, would, should</em> — they wear a past-tense mask,",
    "But they mean <strong>one step away</strong> — so read the cue and ask:",
    "“<em>In those days</em>”, “<em>as a child</em>” — step back in <strong>time</strong>,",
    "“<em>That could be the answer</em>” — a guess, the <strong>likelihood</strong> line,",
    "“<em>Could you send it again?</em>” — <strong>polite</strong>, step back from you,",
    "Same word, three jobs — let the <strong>context</strong> be your clue!"
   ]
  },
  "moves": [
   {
    "move": "Point backwards over your shoulder",
    "says": "<em>In those days we could…</em> = distance in <strong>time</strong>"
   },
   {
    "move": "Hold one hand flat and tilt it from side to side",
    "says": "<em>That could be the answer</em> = distance in <strong>likelihood</strong>"
   },
   {
    "move": "Lean back a little and open both palms towards a friend",
    "says": "<em>Could you send it again?</em> = distance in <strong>social space</strong>"
   },
   {
    "move": "Tap your ear, then tap the desk on both sides of an imaginary word",
    "says": "The word won't tell me — the <strong>context</strong> will"
   }
  ]
 },
 "t5l1s2": {
  "thai": "เวลาเราไม่อยากพูดฟันธง ภาษาอังกฤษใช้รูป remote ของ modal เพื่อลดน้ำหนักของข้อความ โดยไม่เปลี่ยนเนื้อหาเลย That is the answer (ฟันธงเต็มที่) → That may be the answer หรือ That might be the answer (อาจจะใช่ ทั้งสองคำอยู่ระดับเดียวกัน บางคนรู้สึกว่า might ลังเลกว่านิดหน่อย) ในคู่ can/could และ will/would ตัวที่เป็นรูปอดีตจะระมัดระวังกว่าหนึ่งขั้น ส่วน I would say, I would think และ I'd have thought ไม่ได้ทำให้เหตุการณ์ไม่แน่นอน แต่ทำให้ “การพูด” นุ่มลง เช่น I would say the deposit is refundable. (ดิฉันว่ามัดจำได้คืนนะคะ) ก็ยังหมายความว่าได้คืนจริง ๆ ระวังความผิดพลาด 2 แบบ คือพูดฟันธงเกินหลักฐาน เช่น The pilot study proves… และใส่คำลังเลซ้อนกันหลายคำ เช่น might possibly perhaps ซึ่งไม่ได้ทำให้ระวังขึ้น แต่ฟังเหมือนไม่มีอะไรจะพูด ใช้คำลังเลคำเดียวที่มีน้ำหนักพอดีก็พอ",
  "analogy": {
   "title": "Sugar level at the bubble-tea shop",
   "text": "At a bubble-tea shop you choose the sugar: 100%, 50%, 25%. <em>That is the answer</em> is 100% — full commitment. <em>That may — or might — be the answer</em> is about 50%. The tea — the content — is exactly the same; only the strength changes. And shouting “less, less, less!” (<em>might possibly perhaps</em>) doesn't get you a better drink. Pick one level."
  },
  "trap": "Thai makes a claim careful with words like อาจจะ or น่าจะ, so students either write flat English — <em>The study proves…</em> — or stack every hedge they know: <s>might possibly perhaps indicate</s>. Tests give four strengths of one claim (<em>must / will / should / might</em>) and ask which fits the evidence, or hide the hedge pile-up in a spot-the-error. Dodge: one claim, one hedge — and ask “how strong is the evidence?” first.",
  "map": {
   "center": "Step back = weaker",
   "branches": [
    {
     "label": "Pairs",
     "leaves": [
      "can→could",
      "will→would"
     ]
    },
    {
     "label": "Strength",
     "leaves": [
      "is > may / might be",
      "must>will>should>might",
      "content stays the same"
     ]
    },
    {
     "label": "I would say",
     "leaves": [
      "softens the saying",
      "the fact still stands"
     ]
    },
    {
     "label": "Too strong",
     "leaves": [
      "proves / always",
      "a pilot study ≠ proof"
     ]
    },
    {
     "label": "Too weak",
     "leaves": [
      "might possibly perhaps ✗",
      "one hedge is enough"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Hedges Everything",
   "panels": [
    {
     "who": "Fah",
     "text": "Bot, how many students joined the robotics club?"
    },
    {
     "who": "Nong Bot",
     "text": "It <s>might possibly perhaps maybe</s> be around forty. Beep."
    },
    {
     "who": "Fah",
     "text": "So… is it forty or not? I have to tell the principal!"
    },
    {
     "who": "Nong Bot",
     "text": "It could conceivably perhaps arguably…"
    },
    {
     "who": "T.Chris",
     "text": "One hedge, Bot. “<em>I would say</em> it's about forty.” The number stays; only the saying gets softer."
    },
    {
     "who": "Fah",
     "text": "Thanks, T.Chris. Forty it is."
    }
   ],
   "moral": "One hedge at the right strength does the whole job, and <em>I would say</em> softens the saying, not the fact."
  },
  "chant": {
   "title": "One Hedge Rap",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Is it true? Say “<em>is</em>”. Not sure? Say “<em>may</em>” or “<em>might</em>” —",
    "Same step for both: just one step away.",
    "“<em>I would say</em>” makes the <strong>saying</strong> soft and light,",
    "But the fact stays put — I'm just not holding tight.",
    "<s>Might possibly perhaps</s>? Stop! That's way too much —",
    "One hedge does the job, one careful touch.",
    "Small study? Don't say “<em>proves</em>” — “<em>suggests</em>” is light,",
    "Match the hedge to the evidence and your claim sounds right!"
   ]
  },
  "moves": [
   {
    "move": "Raise your hand high, palm flat",
    "says": "That <strong>is</strong> the answer — 100%"
   },
   {
    "move": "Lower your hand to shoulder height",
    "says": "That <strong>may</strong> / <strong>might</strong> be the answer — one step back"
   },
   {
    "move": "Hold up one finger, then wave away three fingers",
    "says": "One hedge, not three: <s>might possibly perhaps</s>"
   },
   {
    "move": "Touch your lips softly with two fingers",
    "says": "<em>I would say…</em> softens the <strong>saying</strong>, not the fact"
   }
  ]
 },
 "t5l1s3": {
  "thai": "could, might, would, should รูปเดียวมีได้หลายความหมาย แต่บริบทไม่กำกวม ให้เช็ก 4 ข้อตามลำดับ ข้อ 1 ประโยครอบ ๆ เป็นอดีตไหม ข้อ 2 มีวลีบอกเวลาในอดีตไหม เช่น when we lived closer, in those days, as a child ถ้ามี แปลว่าห่างในเวลา และเป็นสัญญาณที่แรงที่สุด ข้อ 3 เป็นคำถามที่ขอให้ผู้ฟังทำอะไรไหม ถ้าใช่คือความสุภาพ วิธีเช็กคือไม่มีใครตอบ Could you check this? ว่า Yes, I could ข้อ 4 มี if ไหม ทั้งที่พูดออกมาและที่ซ่อนไว้ เช่น That would take three days (ถ้าทำจริง) ถ้ามี คือสิ่งที่ไม่เป็นจริง และถ้าไม่มีสัญญาณอะไรเลย ให้ตีความว่าเป็นการคาดเดาเกี่ยวกับปัจจุบัน เช่น The missing folder could still be in the archive. (แฟ้มที่หายไปอาจจะยังอยู่ในห้องเก็บเอกสาร)",
  "analogy": {
   "title": "The praying-hands sticker",
   "text": "In a LINE chat, the praying-hands sticker can mean <em>thank you</em>, <em>sorry</em> or <em>please help me</em>. The sticker never changes; the messages around it tell you which. A remote modal works the same way. Before you decide, check four things around it: a past clause, a past time phrase, a request to the listener, an <em>if</em>. No clue at all? Then it's a guess about now."
  },
  "trap": "Students decide from the modal alone, or from how “advanced” a form looks, instead of running the checklist. A favourite test trick: <em>these days you <s>might have needed</s> to queue</em> — <em>might have</em> sounds clever, but <em>these days</em> fixes present time, so it must be <em>might need</em>. Another: a past reporting frame (<em>were told that the session might overrun</em>) dressed up as a guess about now. Dodge: run the four cues in order before you choose.",
  "map": {
   "center": "4 cues decide",
   "branches": [
    {
     "label": "1 Past clause",
     "leaves": [
      "when we lived closer",
      "→ distance in time"
     ]
    },
    {
     "label": "2 Past phrase",
     "leaves": [
      "in those days / as a child",
      "→ time (strongest cue)"
     ]
    },
    {
     "label": "3 Request",
     "leaves": [
      "asks the listener",
      "no “Yes, I could” reply",
      "→ social distance"
     ]
    },
    {
     "label": "4 An if",
     "leaves": [
      "said or unsaid",
      "→ unreal"
     ]
    },
    {
     "label": "No cue at all",
     "leaves": [
      "→ a guess about now",
      "could still be there"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Answers the Wrong Question",
   "panels": [
    {
     "who": "Mai",
     "text": "Bot, <em>could</em> you check the reference on page twelve?"
    },
    {
     "who": "Nong Bot",
     "text": "Yes, I <em>could</em>! Beep. My eyes are excellent."
    },
    {
     "who": "Mai",
     "text": "…So are you going to check it?"
    },
    {
     "who": "Nong Bot",
     "text": "You asked if I <em>could</em>. You did not ask if I <em>would</em>. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Bot, it's a question asking you for something — a request, not a test of your ability. Just check it."
    }
   ],
   "moral": "Read a remote modal from its cues: a question asking the listener for something is politeness, and nobody answers it with <em>Yes, I could</em>."
  },
  "chant": {
   "title": "Four-Cue Check",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Don't read the word — read what's <strong>around</strong>!",
    "Four little cues and the meaning is found:",
    "Past clause, past phrase? That's <strong>time</strong> — it's done!",
    "Asking the listener? <strong>Polite</strong> — no “<s>Yes, I could</s>”!",
    "An <em>if</em> in view? It's <strong>unreal</strong>, understood,",
    "No cue at all? A <strong>guess</strong> about <strong>now</strong> — that's good!"
   ]
  },
  "moves": [
   {
    "move": "Count one, two on your fingers, then point over your shoulder",
    "says": "Past clause? Past time phrase? → distance in <strong>time</strong>"
   },
   {
    "move": "Show three fingers, then open your palm towards a friend",
    "says": "Asking you for something → <strong>politeness</strong>"
   },
   {
    "move": "Show four fingers, then draw the letters “if” in the air",
    "says": "An <em>if</em>, said or unsaid → <strong>unreal</strong>"
   },
   {
    "move": "Close your fist and shrug",
    "says": "No cue at all → a <strong>guess about now</strong>"
   }
  ]
 },
 "t5l2s1": {
  "thai": "การขอร้องคือการขอเวลาหรือแรงของคนอื่น ภาษาอังกฤษจึงใช้ระยะห่างทางไวยากรณ์ทำให้คำขอดู “เล็กลง” ระดับไล่จาก Open the window. → Can you open the window? → Could you open the window? → Would you mind opening the window? → I was wondering whether you might be able to open the window. เนื้อหาเหมือนเดิมทุกประโยค ต่างกันแค่ระยะห่าง เลือกระดับจาก 2 อย่างเท่านั้น คือ ขอเรื่องใหญ่แค่ไหน และเรากับผู้ฟังห่างกันแค่ไหน ระวัง Would you mind…? เพราะ mind แปลว่า “ขัดข้อง” ถ้ายินดีช่วยต้องตอบ No, not at all. (ไม่ขัดข้องเลยค่ะ) ถ้าตอบ Yes, I would. คือปฏิเสธ และ mind ต้องตามด้วย -ing เช่น Would you mind opening the window? ไม่ใช่ mind to open นอกจากนี้อย่าสุภาพเกินไปกับเพื่อนสนิทเรื่องเล็ก ๆ เพราะจะฟังเหมือนประชดหรือเย็นชา",
  "analogy": {
   "title": "How high is your wai?",
   "text": "Think of the <em>wai</em>. To a friend you barely lift your hands; to a teacher, higher; to your grandparents, higher still. The request dial works the same way: <em>Can you</em> → <em>Could you</em> → <em>Would you mind</em> → <em>I was wondering whether you might</em>. The size of the favour and the distance between you set the height. And a deep wai to your best friend for a pen? She'll think you're joking."
  },
  "trap": "Two Thai-transfer traps. First, <em>Would you mind…?</em> — students hear a question and say <em>Yes</em> to agree, but <em>Yes, I would</em> means “yes, I object”: a refusal. Second, verb-plus-verb: <s>Would you mind to check</s>. Tests also hide a register trap: four grammatical requests, only one pitched right for the favour and the person. Dodge: agree with <em>No, not at all</em>, put <em>-ing</em> after <em>mind</em>, and ask “how big is the favour, how far away is the person?”",
  "map": {
   "center": "The request dial",
   "branches": [
    {
     "label": "Near end",
     "leaves": [
      "Can you…?",
      "small favour, friend"
     ]
    },
    {
     "label": "Middle",
     "leaves": [
      "Could you…?",
      "safe workplace default"
     ]
    },
    {
     "label": "Far end",
     "leaves": [
      "Would you mind + -ing?",
      "I was wondering whether…"
     ]
    },
    {
     "label": "Mind = object?",
     "leaves": [
      "agree → No, not at all",
      "Yes, I would = refusal"
     ]
    },
    {
     "label": "Set the rung",
     "leaves": [
      "size of the favour",
      "social distance"
     ]
    },
    {
     "label": "Two errors",
     "leaves": [
      "too near → sounds rude",
      "too far → cold/sarcastic"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Says Yes",
   "panels": [
    {
     "who": "Pim",
     "text": "Bot, <em>would you mind opening</em> the window? It's so hot in here."
    },
    {
     "who": "Nong Bot",
     "text": "Yes, I would! Beep."
    },
    {
     "who": "Pim",
     "text": "…Oh. Okay. Sorry I asked."
    },
    {
     "who": "Nong Bot",
     "text": "Why is Pim sad? I said YES. Yes is a nice word."
    },
    {
     "who": "T.Chris",
     "text": "Bot, she asked if you <em>object</em>. “Yes” means you do. Say “<strong>No, not at all</strong>” — and open it."
    }
   ],
   "moral": "<em>Would you mind…?</em> asks whether you object, so to agree you say <strong>No, not at all</strong> — and <em>mind</em> always takes <em>-ing</em>."
  },
  "chant": {
   "title": "Climb the Dial",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Small favour, close friend? “<em>Can you</em>…?” is fine,",
    "One step back — “<em>Could you</em>…?” — keeps you safe in line,",
    "Bigger favour? “<em>Would you mind</em>” + <strong>-ing</strong>, never “<s>to</s>”!",
    "Happy to help? Say “<strong>No</strong>, not at all” — <s>Yes, I would</s> means no!",
    "Big ask, stranger? “<em>I was wondering whether you might</em>…”",
    "But too far with a friend? Cold and weird — not polite!"
   ]
  },
  "moves": [
   {
    "move": "Put your palms together and lift them just a little (a small wai)",
    "says": "<em>Can you…?</em> — small favour, close friend"
   },
   {
    "move": "Lift your joined palms up to your chin",
    "says": "<em>Could you…?</em> / <em>Would you mind…?</em> — bigger favour, more distance"
   },
   {
    "move": "Shake your head and smile, thumbs up",
    "says": "<em>Would you mind…?</em> → <strong>No, not at all!</strong> (= happy to help)"
   },
   {
    "move": "Cross your arms",
    "says": "<s>Yes, I would</s> = I object! That's a refusal."
   },
   {
    "move": "Point at an imaginary word, then write “-ing” in the air",
    "says": "<em>mind opening</em>, <s>mind to open</s>"
   }
  ]
 },
 "t5l2s2": {
  "thai": "ต้องแยก 3 อย่างให้ออก คือ การขอร้อง (ผู้ฟังเป็นคนทำ) การเสนอช่วย (ผู้พูดทำเอง) และการแนะนำ (ผู้ฟังเป็นคนทำ แต่เราไปบอกเขา) การเสนอช่วยแบบปกติใช้ Shall I…? เช่น Shall I carry the projector down for you? (ให้ช่วยถือโปรเจกเตอร์ลงไปให้ไหมคะ) ถ้าต้องการระวังมากขึ้นกับคนที่ไม่สนิท ใช้ Would you like me to…? ส่วน I could… เป็นการเสนอแบบนุ่มที่สุด สำหรับการแนะนำ ต้องพูดให้อ่อนลงเพราะเป็นการไปบอกให้คนอื่นทำ ใช้ You could try…, You might want to…, It might be worth -ing ส่วนคำสั่ง You must ใช้ได้เมื่อมีอำนาจจริงเท่านั้น และ You should เป็นคำแนะนำตรง ๆ ใช้กับเพื่อนได้ แต่เวลาวิจารณ์งานของเพื่อน เช่น เรียงความ You might want to… จะนุ่มกว่า และ You had better… เป็นการเตือนว่าถ้าไม่ทำจะเกิดเรื่องไม่ดี ส่วน You could always… คือทางเลือกสำรอง วิธีเช็กง่าย ๆ คือถามว่า “สุดท้ายใครเป็นคนลงมือทำ”",
  "analogy": {
   "title": "Who carries the bag?",
   "text": "Your friend's 7-Eleven bags are heavy. <em>Shall I carry one?</em> — <strong>you</strong> do the work: an offer. <em>You could always ask for a second bag</em> — <strong>she</strong> does the work: a suggestion. Both are soft and friendly; the difference is whose hands the bag ends up in. Before you choose a frame, look at the end of the sentence and ask: who is carrying the bag now?"
  },
  "trap": "Students pick the frame that sounds most polite, not the one with the right person doing the work: <em>Would you mind getting yourself a chair?</em> sounds polite to a guest, but the guest does the fetching. In peer feedback, ต้อง pushes students to <em>You must…</em>, which claims authority a classmate doesn't have. Dodge: ask “who does the work?” — me = <em>Shall I / Would you like me to</em>; you = <em>You might want to / You could</em>.",
  "map": {
   "center": "Who does the work?",
   "branches": [
    {
     "label": "Offer (me)",
     "leaves": [
      "Shall I…? = neutral",
      "Would you like me to…?",
      "I could… = softest"
     ]
    },
    {
     "label": "Suggest (you)",
     "leaves": [
      "You could try…",
      "You might want to…",
      "It might be worth -ing"
     ]
    },
    {
     "label": "Fallback",
     "leaves": [
      "You could always…",
      "if nothing better works"
     ]
    },
    {
     "label": "Strong",
     "leaves": [
      "You must = needs authority",
      "You should = direct advice"
     ]
    },
    {
     "label": "Warning",
     "leaves": [
      "You had better…",
      "or something bad follows"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot the Bossy Reviewer",
   "panels": [
    {
     "who": "Nan",
     "text": "Bot, can you read my essay draft before I hand it in?"
    },
    {
     "who": "Nong Bot",
     "text": "Scanning… You <strong>MUST</strong> cut the conclusion. You <strong>HAD BETTER</strong> obey. Beep!"
    },
    {
     "who": "Nan",
     "text": "Excuse me? You're my classmate, not my teacher!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, a classmate suggests, she doesn't order. Try: “You <em>might want to</em> cut the conclusion.”"
    },
    {
     "who": "Nong Bot",
     "text": "You might want to cut the conclusion… <em>Shall I</em> highlight the long part for you?"
    },
    {
     "who": "Nan",
     "text": "Now <strong>that</strong> is a helpful robot."
    }
   ],
   "moral": "Advice to a peer needs a soft frame like <em>You might want to</em>; an offer of your own work starts with <em>Shall I…?</em>"
  },
  "chant": {
   "title": "Me or You?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "If <strong>I</strong> do the work, it's an <strong>offer</strong> — “<em>Shall I</em>…?”",
    "More careful? “<em>Would you like me to</em>…?” — give it a try!",
    "If <strong>you</strong> do the work, it's <strong>advice</strong> — keep it light:",
    "“<em>You might want to</em>…”, “<em>You could try</em>…” — that sounds right.",
    "“<em>You could always</em>…” — a Plan B, just for you,",
    "But <em>must</em> needs power, and <em>should</em> is blunt — so soften it too!"
   ]
  },
  "moves": [
   {
    "move": "Tap your own chest",
    "says": "<em>Shall I…?</em> / <em>Would you like me to…?</em> — <strong>I</strong> do it: an offer"
   },
   {
    "move": "Open your palm towards a friend",
    "says": "<em>You might want to…</em> / <em>You could try…</em> — <strong>you</strong> do it: a suggestion"
   },
   {
    "move": "Point over your shoulder at an imaginary back door",
    "says": "<em>You could always…</em> — the fallback, Plan B"
   },
   {
    "move": "Start to wag your finger, then pull it back quickly",
    "says": "<em>You must…</em> — an order needs real authority"
   }
  ]
 },
 "t5l2s3": {
  "thai": "เวลาพูด เรามีน้ำเสียงและรอยยิ้มช่วยให้คำขอฟังสุภาพ แต่อีเมลไม่มีน้ำเสียง ความสุภาพจึงต้องอยู่ในไวยากรณ์ทั้งหมด อีเมลทางการจึงเต็มไปด้วย would, could, might รูปที่ใช้บ่อย ได้แก่ I was wondering whether you might…, It would be helpful if…, Would it be possible to…? และ I would be grateful if you could… แต่ระวังอย่าห่างจนผู้อ่านไม่รู้ว่าเราต้องการอะไร จากใคร และเมื่อไร หลักคือ สุภาพในการขอ แต่ชัดเจนในสิ่งที่ขอ เช่น I would be grateful if you could confirm the room numbers by Wednesday. (จะขอบคุณมากถ้าช่วยยืนยันหมายเลขห้องภายในวันพุธค่ะ) ประโยคนี้บอกทั้งสิ่งที่ต้องการและกำหนดเวลา และอย่าลืมว่า modal ตามด้วยกริยาช่องที่ 1 ไม่มี to เช่น might be able to ไม่ใช่ might to be able",
  "analogy": {
   "title": "Soft wrapping, clear label",
   "text": "Sending a parcel to your cousin? Wrap it nicely — that's <em>I would be grateful if you could…</em>. But the address label must be crystal clear: the item and the date. A beautifully wrapped box with no address never arrives. An email works the same way: <strong>soft on the asking, sharp on the thing asked</strong>. No tone of voice travels with it, so the wrapping has to be in the grammar."
  },
  "trap": "Two opposite traps. Students write emails like LINE chats — <em>Send the figures.</em> / <em>We need it by Friday.</em> — which read as orders when there's no voice to soften them. Or they overcorrect and hedge everything, so nobody knows what is wanted. Tests also check the grammar inside the frames: <s>might to be able</s>. Dodge: underline the <strong>item</strong> and the <strong>deadline</strong> — if you can't find both, the email is too vague; if there's no <em>would/could/might</em>, it's too blunt.",
  "map": {
   "center": "Email: no voice",
   "branches": [
    {
     "label": "Soft frames",
     "leaves": [
      "I was wondering whether…",
      "It would be helpful if…",
      "I'd be grateful if…"
     ]
    },
    {
     "label": "Be exact",
     "leaves": [
      "name the item",
      "name the date"
     ]
    },
    {
     "label": "Too direct",
     "leaves": [
      "Send the figures.",
      "reads as an order"
     ]
    },
    {
     "label": "Too vague",
     "leaves": [
      "at some stage… something",
      "reader can't act"
     ]
    },
    {
     "label": "Grammar",
     "leaves": [
      "might be able to",
      "✗ might to be able"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Writes an Email",
   "panels": [
    {
     "who": "Mint",
     "text": "Bot, please email the canteen. We need thirty lunch boxes for Friday's trip."
    },
    {
     "who": "Nong Bot",
     "text": "Sending: “We were wondering whether somebody might possibly at some stage consider some food.” Beep!"
    },
    {
     "who": "Mint",
     "text": "Bot! What food? How many? When? They'll send <strong>nothing</strong>!"
    },
    {
     "who": "T.Chris",
     "text": "Polite asking, exact thing: “<em>I would be grateful if you could</em> prepare thirty lunch boxes by Friday morning.”"
    },
    {
     "who": "Nong Bot",
     "text": "Sent. Reply: “Of course!” Wow. It works. Beep!"
    }
   ],
   "moral": "Be remote about the <strong>asking</strong> and exact about the <strong>thing asked</strong>: name the item and the deadline."
  },
  "chant": {
   "title": "Soft Wrap, Clear Label",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "No voice in an email, no smile on the screen,",
    "So the grammar's polite — <em>would</em>, <em>could</em>, <em>might</em> in between:",
    "“<em>I was wondering whether</em>…”, “<em>It would be helpful if</em>…”,",
    "“<em>I'd be grateful if you could</em>…” — soft, not stiff!",
    "But say <strong>what</strong> you need, and say <strong>when</strong>,",
    "Or they'll read it, smile — and never write back again!"
   ]
  },
  "moves": [
   {
    "move": "Mime typing on a keyboard, then cover your mouth",
    "says": "No voice in an email — the <strong>grammar</strong> must be polite"
   },
   {
    "move": "Wrap your hands around an imaginary box",
    "says": "Soft wrapping: <em>I would be grateful if you could…</em>"
   },
   {
    "move": "Tap your palm sharply with one finger, twice",
    "says": "Clear label: the <strong>item</strong> and the <strong>date</strong>"
   },
   {
    "move": "Wave your hands in a foggy circle, then shake your head",
    "says": "Too vague: <em>at some stage… something…</em> — the reader can't act"
   }
  ]
 },
 "t5l3s1": {
  "thai": "ประโยคเงื่อนไขที่ไม่เป็นจริง ต้อง “ถอย” ทั้งสองส่วนพร้อมกัน ส่วน if ใช้รูปอดีต ส่วนผลใช้ would + กริยาช่องที่ 1 เช่น If the council released the land, prices would fall. (ถ้าเทศบาลปล่อยที่ดินออกมา ราคาก็จะลดลง แต่ความจริงยังไม่ได้ปล่อย) ถ้าใช้ will หรือ present ในส่วนผล ประโยคจะผิด เพราะสองส่วนอยู่คนละโลก would ที่ไม่มี if ให้เห็นก็มักซ่อนเงื่อนไขไว้ เช่น That would take three days. หมายถึง ถ้าทำจริงจะใช้เวลาสามวัน ส่วน wish ก็พูดถึงสิ่งที่ไม่เป็นจริงเช่นกัน I wish I knew คืออยากให้ตอนนี้เป็นอีกแบบ I wish they would decide คืออยากให้คนอื่นเปลี่ยนพฤติกรรม และกำลังหงุดหงิดที่ต้องรอ I wish I had asked คือเสียดายเรื่องในอดีต และห้ามพูด I wish I would เพราะเราจะบ่นความเต็มใจของตัวเองไม่ได้",
  "analogy": {
   "title": "Tap Play, stay in the game",
   "text": "Open a game on your phone and tap <strong>Play</strong>: now everything happens in the game world. <em>If I had a million baht</em> taps Play. So the result must stay in the game too: I <strong>would</strong> buy a café. Saying I <s>will</s> buy a café is like spending real money on a game item that doesn't exist. Both halves of the sentence must be in the same world."
  },
  "trap": "Thai uses the same จะ for real and imagined results, so students write <s>If the council released the land, prices will fall</s> — an unreal <em>if</em> glued to a real prediction. With wishes they write <s>I wish the committee decides</s> or <s>I wish I would</s>. Tests put <em>will</em>, the present, <em>would</em> and <em>would have</em> side by side. Dodge: if the <em>if</em> uses a past form for something not true now, the other half needs <em>would</em> (or <em>could</em> / <em>might</em>) + bare verb.",
  "map": {
   "center": "Unreal = 2 steps back",
   "branches": [
    {
     "label": "If-half",
     "leaves": [
      "past form",
      "if they funded it",
      "if I were you"
     ]
    },
    {
     "label": "Result half",
     "leaves": [
      "would / could / might + bare verb",
      "prices would fall"
     ]
    },
    {
     "label": "Hidden if",
     "leaves": [
      "That would take 3 days",
      "= if we did it"
     ]
    },
    {
     "label": "Wishes",
     "leaves": [
      "I wish I knew = now",
      "wish they'd = impatient",
      "I had asked = regret"
     ]
    },
    {
     "label": "Don't mix",
     "leaves": [
      "✗ unreal if + will",
      "✗ I wish I would"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Buys the Canteen",
   "panels": [
    {
     "who": "Fah",
     "text": "If I <em>had</em> a million baht, I <em>would</em> buy the school canteen."
    },
    {
     "who": "Nong Bot",
     "text": "Data saved: Fah <strong>WILL</strong> buy the canteen. Telling the canteen auntie now. Beep!"
    },
    {
     "who": "Mai",
     "text": "Fah! The auntie is packing her woks. She thinks you're buying her shop!"
    },
    {
     "who": "Fah",
     "text": "Bot, I don't <strong>have</strong> a million baht!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, “if I had… I would…” is an imagined world. <em>Would</em> = not real. <em>Will</em> = a real plan."
    },
    {
     "who": "Nong Bot",
     "text": "Sorry, Fah. I wish I <em>had</em> understood. Beep."
    }
   ],
   "moral": "In an unreal sentence both halves step back — a past form after <em>if</em>, <em>would</em> in the result; <em>will</em> turns a dream into a plan."
  },
  "chant": {
   "title": "Two Steps Back",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "If it isn't real, <strong>both halves</strong> go back:",
    "Past after <em>if</em>, then <em>would</em> (or <em>could</em>, <em>might</em>) on the track!",
    "“<s>If I had the cash, I will</s>…” — no, no, no!",
    "“<em>If I had the cash, I would</em>…” — now go!",
    "“<em>I wish I knew</em>” — it's now, and it's not true,",
    "“<em>I wish they would</em> hurry” — I'm tired of the wait,",
    "“<em>I wish I had asked</em>” — that's regret, it's too late,",
    "And “<s>I wish I would</s>”? That's one you can't do!"
   ]
  },
  "moves": [
   {
    "move": "Push the air behind you with one hand, then the other",
    "says": "Two steps back: past after <em>if</em>, <em>would</em> in the result"
   },
   {
    "move": "Draw a thought bubble above your head",
    "says": "<em>That would take three days</em> — the <em>if</em> is hiding in the bubble"
   },
   {
    "move": "Tap your wrist impatiently and look at a friend",
    "says": "<em>I wish they would decide!</em> — someone else, and I'm impatient"
   },
   {
    "move": "Put a hand on your forehead and look back over your shoulder",
    "says": "<em>I wish I had asked</em> — a regret about the past"
   }
  ]
 },
 "t5l3s2": {
  "thai": "ในประโยคเงื่อนไขที่ไม่เป็นจริง ส่วนผลไม่จำเป็นต้องใช้ would เสมอ would บอกว่าผลจะเกิดขึ้นแน่นอนในโลกสมมุติ แต่ might และ could บอกแค่ว่าผลอาจเกิดขึ้น จึงมีระยะห่างสองชั้น ชั้นแรกคือสถานการณ์ไม่เป็นจริง ชั้นที่สองคือในโลกสมมุตินั้นผลก็ยังไม่แน่นอน เช่น If the council invested in the branch line, ridership might recover. (ถ้าเทศบาลลงทุนกับทางรถไฟสายนี้ จำนวนผู้โดยสารอาจจะกลับมา) ในงานเขียนวิชาการที่พูดถึงแผนที่ยังไม่มีใครทดลอง might และ could มักซื่อตรงกว่า would ความต่างคือ could เน้นความสามารถที่การเปลี่ยนแปลงจะสร้างขึ้น ส่วน might เน้นโอกาสที่ผลจะเกิดจริง และระวัง modal ที่อยู่ในส่วน if เช่น if you could send it by Friday เป็นการขอร้อง ไม่ใช่ส่วนหนึ่งของเงื่อนไข",
  "analogy": {
   "title": "The MRT line not built yet",
   "text": "Imagine a new MRT line that doesn't exist yet. If the line were built, the trains <strong>would</strong> be full — you're promising passengers in a world nobody has seen. …the line <strong>could</strong> carry 50,000 people a day — the trains would have room. …people <strong>might</strong> use it — maybe they'd come, maybe not. Step into the imagined world first; then choose how sure you are inside it."
  },
  "trap": "Students learn “unreal = <em>would</em>” as a formula, so a policy essay says congestion <strong>would certainly</strong> fall by a fifth about a scheme nobody has tested — grammatical, but claiming far too much. Others mix worlds: <s>If the levy were introduced, congestion will fall</s>. Dodge: find the contrary-to-fact <em>if</em>, then ask “how sure can I be inside it?” — usually <em>might</em> or <em>could</em>.",
  "map": {
   "center": "Unreal + uncertain",
   "branches": [
    {
     "label": "would",
     "leaves": [
      "the result follows",
      "a strong claim"
     ]
    },
    {
     "label": "could",
     "leaves": [
      "capacity it creates",
      "could carry twice as many"
     ]
    },
    {
     "label": "might",
     "leaves": [
      "outcome may happen",
      "ridership might recover"
     ]
    },
    {
     "label": "Two layers",
     "leaves": [
      "1 the world is unreal",
      "2 result unsure inside"
     ]
    },
    {
     "label": "Real guess",
     "leaves": [
      "no if → about now",
      "the leak could be there"
     ]
    },
    {
     "label": "Modal in the if",
     "leaves": [
      "if you could… = request",
      "if it should… = unlikely"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Promises Too Much",
   "panels": [
    {
     "who": "Nan",
     "text": "Bot, finish our project sentence: “If the school had a rooftop garden…”"
    },
    {
     "who": "Nong Bot",
     "text": "“…every student <em>would</em> get straight A's and grow ten centimetres.” Beep! Finished."
    },
    {
     "who": "Nan",
     "text": "Bot, nobody has ever tested that! The teacher will laugh at us."
    },
    {
     "who": "T.Chris",
     "text": "Imagined world, unsure result: “If the school had a rooftop garden, students <em>might</em> feel calmer.”"
    },
    {
     "who": "Nong Bot",
     "text": "Adding: the garden <em>could</em> grow fifty kilos of vegetables a year. That's capacity. Beep!"
    },
    {
     "who": "Nan",
     "text": "Perfect. <em>Might</em> for maybe, <em>could</em> for capacity."
    }
   ],
   "moral": "In an unreal scenario <em>would</em> claims the result, while <em>might</em> and <em>could</em> only open it — and for an untested idea that is usually the honest choice."
  },
  "chant": {
   "title": "Would, Could, Might",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Imagined world? Past after <em>if</em> — that's the start,",
    "Now choose how sure — that's the clever part:",
    "<em>Would</em> says it <strong>happens</strong> — a big, bold claim,",
    "<em>Could</em> says there's <strong>room</strong> for it — capacity's the name,",
    "<em>Might</em> says <strong>maybe</strong> — it may or may not come,",
    "Nobody's tested it? Then <em>might</em> is how it's done!"
   ]
  },
  "moves": [
   {
    "move": "Draw a big bubble in the air with both hands",
    "says": "<em>If the line were built…</em> — an imagined world"
   },
   {
    "move": "Knock the desk once with your fist",
    "says": "<em>…the trains would be full</em> — the result happens: a strong claim"
   },
   {
    "move": "Stretch your arms out wide",
    "says": "<em>…it could carry twice as many</em> — capacity, room"
   },
   {
    "move": "Tilt your flat hand from side to side",
    "says": "<em>…people might use it</em> — maybe yes, maybe no"
   }
  ]
 },
 "t5l3s3": {
  "thai": "นักเรียนมักจำว่า “ห้ามใช้ will หลัง if” แต่ไม่รู้เหตุผล เหตุผลคือ will เป็น modal ไม่ใช่ tense หน้าที่ของมันคือบอกว่าเป็นการคาดการณ์ ไม่ใช่ข้อเท็จจริง แต่ if ทำหน้าที่นั้นไปแล้ว จึงไม่ต้องพูดซ้ำ ส่วน if จึงใช้ present simple แม้จะพูดถึงอนาคต แล้วไปใส่ will ในส่วนผลแทน เช่น If it rains tomorrow, the match will be moved. (ถ้าพรุ่งนี้ฝนตก จะเลื่อนการแข่งขัน) กฎเดียวกันใช้กับ when, as soon as, until, before และประโยคที่ไม่เป็นจริงก็ห้ามใช้ if it would rain ด้วยเหตุผลเดียวกัน แต่ will อยู่หลัง if ได้ถ้ามีความหมายอื่นที่ if ไม่ได้บอก คือ ความเต็มใจ (If you'll wait here… = ถ้าคุณยินดีรอ) ผลที่จะตามมาทีหลัง (If it'll help, I'll stay late. = ถ้าช่วยได้ ฉันจะอยู่ต่อให้) และการบ่นพฤติกรรมที่ทำซ้ำ ๆ (If you will keep leaving the door open…)",
  "analogy": {
   "title": "Umbrella under the skywalk",
   "text": "Walking under the BTS skywalk in the rain, you fold your umbrella — the roof already keeps you dry. <em>If</em> is the roof: it already marks the clause as “maybe”. Predictive <em>will</em> is the umbrella doing the same job, so fold it: If it <strong>rains</strong> tomorrow…. Open <em>will</em> only when it has a different job — If <strong>you'll</strong> wait here means <em>if you are willing to</em>."
  },
  "trap": "Students think “tomorrow = future = <em>will</em> (จะ)”, so they write <s>If it will rain tomorrow</s> and <s>before the term will start</s>. Tests also plant the reverse trap: a correct <em>If you will just sign at the bottom…</em> that students “fix” because they learned a flat ban. Dodge: does <em>will</em> mean <em>are willing to</em>, <em>insist on -ing</em>, or a result that comes after the main clause (<em>If it'll help, I'll stay late</em>)? If so, keep <em>will</em>; if not, use the present.",
  "map": {
   "center": "if + will = double job",
   "branches": [
    {
     "label": "Why?",
     "leaves": [
      "if = already “maybe”",
      "will = same job again"
     ]
    },
    {
     "label": "Fix",
     "leaves": [
      "If it rains tomorrow…",
      "future goes in result"
     ]
    },
    {
     "label": "Same rule",
     "leaves": [
      "when / until / before",
      "as soon as / by the time"
     ]
    },
    {
     "label": "Unreal too",
     "leaves": [
      "✗ if it would rain",
      "✓ if it rained"
     ]
    },
    {
     "label": "Will stays if…",
     "leaves": [
      "willing: If you'll wait",
      "result: If it'll help",
      "insist: If you will keep"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Deletes Every Will",
   "panels": [
    {
     "who": "Nong Bot",
     "text": "<s>If it will rain tomorrow</s>, I will bring two umbrellas. Beep!"
    },
    {
     "who": "Ploy",
     "text": "Bot, <em>if</em> already says “maybe”. Just say “If it <em>rains</em> tomorrow”."
    },
    {
     "who": "Nong Bot",
     "text": "Rule installed: delete every <em>will</em> after <em>if</em>! Pim, your sign is wrong too."
    },
    {
     "who": "Pim",
     "text": "My sign says “If you<em>'ll</em> follow me, the hall is this way.” That's polite!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, Pim's <em>will</em> means “are willing to” — it has its own job. Keep it."
    },
    {
     "who": "Nong Bot",
     "text": "So: <em>will</em> repeating “maybe” — goes. <em>Will</em> with a new job — stays. Beep!"
    }
   ],
   "moral": "<em>If</em> already marks the possibility, so predictive <em>will</em> goes — but <em>will</em> for willingness, a result that comes later, or a complaint stays."
  },
  "chant": {
   "title": "Don't Say It Twice",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>If</em> says <strong>maybe</strong> — <em>will</em> says <strong>maybe</strong> too,",
    "Don't say it twice — one word will do!",
    "“If it <strong>rains</strong> tomorrow, the match <strong>will</strong> move” —",
    "Present after <em>if</em>, future in the result: that's the groove!",
    "<em>When</em>, <em>until</em>, <em>before</em>, <em>as soon as</em> — same law,",
    "“<s>If it would rain</s>”? Same reason — same flaw!",
    "But “<em>If you'll</em> wait here” — willing? Then it stays,",
    "New job for <em>will</em>? Keep it! Same old job? Away!"
   ]
  },
  "moves": [
   {
    "move": "Hold up two fingers, then fold one down",
    "says": "<em>If</em> + <em>will</em> = the same job twice → drop <em>will</em>: <em>If it rains…</em>"
   },
   {
    "move": "Push your right hand forward, away from you",
    "says": "The future lives in the result: …the match <strong>will</strong> be moved"
   },
   {
    "move": "Open your palm and guide a friend towards a chair",
    "says": "<em>If you'll take a seat…</em> — <em>will</em> = willing, so it stays"
   },
   {
    "move": "Fold your arms and tap your foot",
    "says": "If you <strong>will</strong> keep leaving the door open… — a complaint, so it stays"
   },
   {
    "move": "Point ahead, then give a thumbs up",
    "says": "<em>If it'll help, I'll stay late</em> — the help comes later, so it stays"
   }
  ]
 },
 "t6l1s1": {
  "thai": "modal ไม่มีรูปอดีต ไม่มีคำว่า musted หรือ mighted ดังนั้นเวลาเราอยากคาดเดาเรื่องที่เกิดขึ้นไปแล้ว เราต้องย้ายความเป็นอดีตไปไว้ที่กริยาด้วย have + V3 เช่น He must have left. = เขาต้องออกไปแล้วแน่ ๆ การคาดเดาเกิดขึ้น “ตอนนี้” แต่เหตุการณ์เกิดขึ้น “ก่อนหน้านี้” อย่าสับสนกับ He had to leave. ซึ่งแปลว่า เขาจำเป็นต้องออกไป เป็นข้อบังคับในอดีต และเขาออกไปจริง ๆ ถ้าจะคาดเดาอย่างมั่นใจว่าเรื่องนั้นไม่ได้เกิดขึ้น ให้ใช้ can't have หรือ couldn't have เช่น He can't have read it. = เขาไม่มีทางได้อ่านแน่นอน ส่วน couldn't have นิยมใช้ในการเล่าเรื่องอดีตหรือหลังกริยารายงานอย่าง concluded ห้ามใช้ mustn't have เพราะ mustn't แปลว่า ห้าม และอย่าคิดว่าแค่ใส่ yesterday แล้วประโยคจะเป็นอดีต ต้องมี have เสมอ",
  "analogy": {
   "title": "Detective, not rulebook",
   "text": "You left your phone on the sofa at 80%. You come back from tutoring: 5%, and a game is still open. Your little brother <em>must have played</em> on it. You are the detective, deciding <strong>now</strong> from a clue about something that happened <strong>while you were out</strong>. <em>He had to play</em> would mean somebody made him do it, like a school rule. Detective = <em>must have</em>; rulebook = <em>had to</em>."
  },
  "trap": "Thai ต้อง has no past form, so learners write <s>He must leave the building yesterday</s> and let the adverb carry the past. Others file <em>must have</em> as “the past of must” and pick it for a past rule, or write <s>mustn't have</s> for a negative deduction. Tests put <em>must have</em> and <em>had to</em> side by side. Dodge: ask “Am I reasoning from a clue now (<em>must have / can't have</em>) or reporting a rule that was obeyed (<em>had to</em>)?”",
  "map": {
   "center": "must have / can't have",
   "branches": [
    {
     "label": "Form",
     "leaves": [
      "must + have + V3",
      "no musted, no mighted"
     ]
    },
    {
     "label": "Two layers",
     "leaves": [
      "must = deciding now",
      "have left = happened then"
     ]
    },
    {
     "label": "Top of scale",
     "leaves": [
      "must have = sure it did",
      "no other explanation"
     ]
    },
    {
     "label": "Negative",
     "leaves": [
      "can't have = surely not",
      "couldn't have = past story",
      "✗ mustn't have (= a ban)"
     ]
    },
    {
     "label": "≠ had to",
     "leaves": [
      "had to leave = a rule",
      "and he really left"
     ]
    },
    {
     "label": "Adverb trap",
     "leaves": [
      "✗ must leave yesterday",
      "✓ must have left yesterday"
     ]
    }
   ]
  },
  "story": {
   "title": "Who Made Mai Go Home?",
   "panels": [
    {
     "who": "Ploy",
     "text": "Mai's bag is gone and her desk is empty. She <em>must have gone</em> home."
    },
    {
     "who": "Nong Bot",
     "text": "ALERT! Who forced Mai to go home? Beep! I will find the person who made this rule!"
    },
    {
     "who": "Fah",
     "text": "Nobody forced her, Bot. Ploy is guessing from the empty desk."
    },
    {
     "who": "Nong Bot",
     "text": "Understood. Then Mai <s>mustn't have gone</s> to the canteen. Beep! I have banned the canteen!"
    },
    {
     "who": "T.Chris",
     "text": "Bot: <em>must have gone</em> = a sure guess now. <em>Had to go</em> = a rule. The negative guess is <em>can't have gone</em>, not a ban."
    }
   ],
   "moral": "<em>Must have</em> + V3 is a confident guess made now about the past; its negative is <em>can't have</em>, and a past rule is <em>had to</em>."
  },
  "chant": {
   "title": "Clue on the Table",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "No <s>musted</s>, no <s>mighted</s> — a modal can't go back,",
    "So <em>have</em> + V3 puts the past on track!",
    "Lights off, door locked: she <em>must have</em> gone —",
    "A guess made now about a thing that's done.",
    "Sure it didn't happen? Say <em>can't have</em> seen,",
    "<s>Mustn't have</s> is a ban — that's not what you mean!",
    "<em>Had to</em> go? That's a rule — and she went, it's true;",
    "<em>Must have</em> gone? That's a clue — and the guesser is you!"
   ]
  },
  "moves": [
   {
    "move": "Tap your temple, then point at an empty desk",
    "says": "Clue now → <em>must have</em> + V3: She <em>must have gone</em> home."
   },
   {
    "move": "Raise your hand high, then flip it palm-down and push it flat on the desk",
    "says": "Sure it did NOT happen: He <em>can't have read</em> it."
   },
   {
    "move": "Cross your arms in a big X",
    "says": "<s>mustn't have</s> — mustn't is a ban, not a guess!"
   },
   {
    "move": "Point a stern finger, then march on the spot",
    "says": "<em>had to go</em> = a rule, and she really went."
   },
   {
    "move": "Throw your thumb back over your shoulder",
    "says": "The past lives in <em>have</em>, not in <em>yesterday</em>: must <strong>have</strong> left yesterday."
   }
  ]
 },
 "t6l1s2": {
  "thai": "ถ้าหลักฐานยังไม่พอจะฟันธง ให้ลดระดับความมั่นใจลง ใช้ may have / might have / could have + V3 ซึ่งแปลว่า “อาจจะ...ไปแล้ว” เป็นความเป็นไปได้ข้อหนึ่งในหลาย ๆ ข้อเท่านั้น เช่น She might have missed the announcement. = เธออาจจะไม่ได้ยินประกาศก็ได้ ส่วน must have คือมั่นใจว่าไม่มีคำอธิบายอื่นแล้ว may have ทางการกว่าเล็กน้อย might have ใช้ในชีวิตประจำวัน จุดที่ต้องระวังมากคือรูปปฏิเสธ She may not have seen it. = เธออาจจะไม่ได้เห็น แต่ก็อาจจะเห็นก็ได้ ส่วน She can't have seen it. = เธอไม่มีทางเห็นแน่นอน สองประโยคนี้หน้าตาคล้ายกันแต่อยู่คนละขั้วกันเลย และเวลาเขียนรายงานหรือเรียงความ ถ้าหลักฐานแค่ชี้แนวโน้ม ให้ใช้ may have อย่าใช้ must have เพราะจะกลายเป็นการสรุปเกินหลักฐาน",
  "analogy": {
   "title": "The frozen Grab map",
   "text": "Your Grab food is late and the rider's dot has frozen on the map. He <em>may have</em> got stuck at the Asok junction, he <em>might have</em> gone down the wrong soi, he <em>could have</em> stopped for fuel — three possibilities, none proved. Only when the guard calls to say a bag is waiting in the lobby can you say he <em>must have</em> arrived. Weak clue, weak modal."
  },
  "trap": "Thai learners hear ไม่ in both and treat <em>may not have</em> and <em>can't have</em> as the same sentence. They sit at opposite ends of the scale: <em>may not have seen</em> = perhaps not (so perhaps yes); <em>can't have seen</em> = certainly not. Essay questions also punish the overclaim: <em>must have caused</em> on a mere correlation. Dodge: ask “Could the answer still be yes?” If it could, use <em>may / might not have</em>.",
  "map": {
   "center": "may/might/could have",
   "branches": [
    {
     "label": "Form",
     "leaves": [
      "modal + have + V3",
      "only the frame changes"
     ]
    },
    {
     "label": "Meaning",
     "leaves": [
      "= perhaps it happened",
      "one possibility of many"
     ]
    },
    {
     "label": "Scale",
     "leaves": [
      "must have = no other way",
      "may / might have = maybe"
     ]
    },
    {
     "label": "may not have",
     "leaves": [
      "= perhaps it didn't",
      "yes is still possible"
     ]
    },
    {
     "label": "can't have",
     "leaves": [
      "= certainly didn't",
      "the possibility is gone"
     ]
    },
    {
     "label": "Essays",
     "leaves": [
      "✓ may have caused",
      "✗ must have = overclaim"
     ]
    }
   ]
  },
  "story": {
   "title": "The Silent LINE Chat",
   "panels": [
    {
     "who": "Pim",
     "text": "Nan hasn't replied on LINE for an hour."
    },
    {
     "who": "Nong Bot",
     "text": "Calculating… Nan <em>must have</em> been kidnapped by aliens! Beep! Calling the police!"
    },
    {
     "who": "Mint",
     "text": "Bot! She <em>might have</em> fallen asleep. Or her phone <em>may have</em> died."
    },
    {
     "who": "Nong Bot",
     "text": "Correction: Nan <em>may not have</em> read it, so she <em>can't have</em> read it. Same thing! Beep!"
    },
    {
     "who": "T.Chris",
     "text": "No, Bot. <em>May not have</em> = maybe not, maybe yes. <em>Can't have</em> = definitely not. One quiet hour is a <em>may have</em> clue."
    },
    {
     "who": "Nan",
     "text": "(new message) Sorry, my phone died!"
    }
   ],
   "moral": "Weak evidence takes <em>may / might / could have</em>; <em>may not have</em> keeps “yes” possible, but <em>can't have</em> rules it out."
  },
  "chant": {
   "title": "Down the Ladder",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Must have</em> — the clue leaves just one way,",
    "<em>May have</em>, <em>might have</em>, <em>could have</em> — maybe, okay!",
    "Same <em>have</em> + V3, just a lower stair,",
    "Weak clue, weak modal — play it fair!",
    "<em>May not have</em> seen it? Maybe yes, maybe no,",
    "<em>Can't have</em> seen it? Definitely no!",
    "Writing an essay? Don't overclaim —",
    "<em>May have caused</em> wins the essay game!"
   ]
  },
  "moves": [
   {
    "move": "Raise your hand to the top of your head",
    "says": "<em>must have</em> = my clue leaves only one answer."
   },
   {
    "move": "Hold your hand at shoulder height and wiggle it",
    "says": "<em>may / might / could have</em> = perhaps it happened."
   },
   {
    "move": "Shrug with both palms up",
    "says": "She <em>may not have</em> seen it — maybe not, maybe yes!"
   },
   {
    "move": "Slice your hand flat across the desk",
    "says": "She <em>can't have</em> seen it — no way, door closed."
   },
   {
    "move": "Hold up a pretend essay and lower your hand from head to shoulder",
    "says": "Thin evidence? Drop from <em>must have</em> to <em>may have</em>."
   }
  ]
 },
 "t6l1s3": {
  "thai": "ถ้าอยากคาดเดาว่าในอดีตมีกิจกรรมหนึ่ง “กำลังดำเนินอยู่” ในตอนนั้น ให้ใช้ modal + have + been + V-ing เช่น She must have been working late. = เธอคงกำลังทำงานดึกอยู่แน่ ๆ ลำดับคำต้องเป็นแบบนี้เสมอ ห้ามสลับ และห้ามตัด have ทิ้ง เพราะ must been working ผิด รูปนี้เหมาะกับหลักฐานที่ยังเหลือร่องรอยของกิจกรรมที่กำลังทำอยู่ เช่น กาน้ำยังอุ่น ไฟทางเดินยังเปิดอยู่ หรือรอยยางยาวเก้าสิบเมตรซึ่งบอกความเร็วขณะที่รถกำลังวิ่ง ส่วน She must have worked late. มองเหตุการณ์เป็นก้อนเดียวที่จบไปแล้ว ให้ถามตัวเองว่าหลักฐานบอกถึงการกระทำที่จบแล้ว หรือสิ่งที่ยังดำเนินอยู่ และอย่าใช้รูป -ing กับกริยาบอกสภาพ เช่น know, own, belong",
  "analogy": {
   "title": "The warm BTS seat",
   "text": "You get on the BTS at Siam and sit down — the seat is still warm. Someone <em>must have been sitting</em> here a moment ago. The warmth is a clue to something that was <strong>still going on</strong>, not a finished package. Same at home: the wok is still warm and the kitchen smells of garlic, so Mum <em>must have been cooking</em>."
  },
  "trap": "Thai has no have-been chain, so learners shorten it: <s>must been working</s>, or <s>He must be waiting there since eight</s>. Tests then offer <em>must have travelled</em> beside <em>must have been travelling</em> when the clue is a speed or a job left half done. Dodge: count the links — modal + <em>have</em> + <em>been</em> + <em>-ing</em> — and ask “Is the clue evidence of a finished act, or of something still in progress?”",
  "map": {
   "center": "must have been + -ing",
   "branches": [
    {
     "label": "Chain",
     "leaves": [
      "modal → have → been → -ing",
      "never skip have"
     ]
    },
    {
     "label": "Meaning",
     "leaves": [
      "in progress back then",
      "judged from now"
     ]
    },
    {
     "label": "Clues",
     "leaves": [
      "kettle still warm",
      "lights still on",
      "90 m of tyre marks"
     ]
    },
    {
     "label": "Speed / rate",
     "leaves": [
      "speed = action in progress",
      "must have been travelling"
     ]
    },
    {
     "label": "≠ must have done",
     "leaves": [
      "worked = finished whole",
      "working = seen from inside"
     ]
    },
    {
     "label": "Blocked",
     "leaves": [
      "✗ must have been knowing",
      "✗ must been working"
     ]
    }
   ]
  },
  "story": {
   "title": "The Half-Written Essay",
   "panels": [
    {
     "who": "Fah",
     "text": "Pim's laptop is still open, her pen is on the page and her tea is still warm."
    },
    {
     "who": "Nong Bot",
     "text": "Deduction: Pim <em>must have finished</em> her homework! Beep! Task complete!"
    },
    {
     "who": "Fah",
     "text": "Bot, look — the essay stops in the middle of a sentence."
    },
    {
     "who": "Nong Bot",
     "text": "Correction: Pim <s>must been writing</s>… ERROR! Missing part! Beep!"
    },
    {
     "who": "T.Chris",
     "text": "The chain is must + have + been + -ing, Bot: Pim <em>must have been writing</em> when she left."
    },
    {
     "who": "Pim",
     "text": "(running back) I was! I only went to buy a snack."
    }
   ],
   "moral": "When the clue shows an action that was still running, use <em>must have been</em> + <em>-ing</em> — and never drop the <em>have</em>."
  },
  "chant": {
   "title": "Chain Gang",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Modal, <em>have</em>, <em>been</em>, then <em>-ing</em> — that's the chain,",
    "Four links in order, say it again!",
    "Kettle still warm? Someone <em>must have been making</em> tea,",
    "Lights still on? They <em>must have been working</em>, see?",
    "Long tyre marks? <em>Must have been travelling</em> fast —",
    "Speed is in progress, so the <em>-ing</em> must last!",
    "Drop the <em>have</em>? <s>must been</s> — no way!",
    "<s>been knowing</s>? No — stative verbs don't play!"
   ]
  },
  "moves": [
   {
    "move": "Hook your index fingers together like a chain link, four times",
    "says": "must — <em>have</em> — <em>been</em> — <em>-ing</em>!"
   },
   {
    "move": "Roll your hands over each other like a turning wheel",
    "says": "<em>-ing</em> = it was still going on: she <em>must have been working</em> late."
   },
   {
    "move": "Clap once and keep your hands closed together",
    "says": "A finished package: she <em>must have worked</em> late all week."
   },
   {
    "move": "Put your palm on the desk as if it is warm",
    "says": "Warm kettle = clue: someone <em>must have been making</em> tea."
   },
   {
    "move": "Pull one finger out of the chain and shake your head",
    "says": "No missing links: <s>must been working</s>."
   }
  ]
 },
 "t6l2s1": {
  "thai": "should have + V3 ไม่ใช่การคาดเดา แต่เป็นการตัดสินว่า “เรื่องนั้นไม่ได้เกิดขึ้น และการที่ไม่เกิดขึ้นถือเป็นความผิด” ถ้าประธานเป็น you หรือบุคคลอื่น จะเป็นการตำหนิ เช่น You should have told me. = เธอควรจะบอกฉันนะ (แต่ไม่ได้บอก) ถ้าประธานเป็น I หรือ we จะกลายเป็นความเสียใจหรือคำขอโทษ เช่น I should have checked the figures. = ฉันควรจะตรวจตัวเลขก่อน (แต่ไม่ได้ตรวจ) ส่วน shouldn't have + V3 ความหมายกลับกัน คือเรื่องนั้นเกิดขึ้นไปแล้ว และไม่ควรเกิด ought to have มีความหมายเหมือนกันแต่ทางการกว่า และต้องมี to เสมอ ห้ามเขียน ought have นอกจากนี้ระวัง should have ที่แปลว่า “น่าจะ...แล้ว” ตามกำหนดการ เช่น They should have landed by now. ประโยคนี้ไม่ได้ตำหนิใคร เป็นแค่การคาดการณ์จากตารางเวลา",
  "analogy": {
   "title": "The red BTS gate",
   "text": "Your Rabbit card beeps red at the BTS gate: no money left. Your friend says, “You <em>should have topped it up</em> at 7-Eleven!” You didn't, and that was the mistake — blame. You sigh, “I <em>should have</em>…” — the same words, now regret. Then you add, “I <em>shouldn't have spent</em> it all on bubble tea.” That one <strong>did</strong> happen, and it was the mistake."
  },
  "trap": "Thai ควรจะ has no past form, so learners read <em>should have</em> as a soft guess that it happened. It means the opposite: it did <strong>not</strong> happen. Tests then flip the negative — <em>shouldn't have released</em> = it <em>was</em> released — and plant <s>ought have</s> without its <em>to</em>. Dodge: after <em>should have</em> say “so it didn't happen”; after <em>shouldn't have</em> say “so it did”.",
  "map": {
   "center": "should have done",
   "branches": [
    {
     "label": "Meaning",
     "leaves": [
      "it did NOT happen",
      "+ that was wrong"
     ]
    },
    {
     "label": "Subject",
     "leaves": [
      "you / they → blame",
      "I / we → regret"
     ]
    },
    {
     "label": "Negative flip",
     "leaves": [
      "shouldn't have = it did",
      "+ that was a mistake"
     ]
    },
    {
     "label": "ought to have",
     "leaves": [
      "= should have, more formal",
      "✗ ought have — keep to"
     ]
    },
    {
     "label": "Expectation",
     "leaves": [
      "should have landed by now",
      "timetable, no blame"
     ]
    }
   ]
  },
  "story": {
   "title": "The Poster That Wasn't",
   "panels": [
    {
     "who": "Mai",
     "text": "Bot, where's the poster? You <em>should have printed</em> it this morning!"
    },
    {
     "who": "Nong Bot",
     "text": "Thank you! Beep! I am very proud that I printed it!"
    },
    {
     "who": "Mai",
     "text": "You DIDN'T print it! That's why I'm cross."
    },
    {
     "who": "Nong Bot",
     "text": "Understood. I <em>shouldn't have printed</em> it. So sorry! Beep!"
    },
    {
     "who": "Ploy",
     "text": "Now Bot's apologising for printing a poster it never printed…"
    },
    {
     "who": "T.Chris",
     "text": "Bot: <em>should have printed</em> = you didn't, and that was wrong. Your apology is “I <em>should have printed</em> it.”"
    }
   ],
   "moral": "<em>Should have</em> + V3 says it did <strong>not</strong> happen and that was a fault; <em>shouldn't have</em> says it <strong>did</strong> happen and was a mistake."
  },
  "chant": {
   "title": "Too Late, Mate",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Should have</em> done it? You didn't — too late!",
    "<em>You</em> should have: blame. <em>I</em> should have: regret, mate.",
    "<em>Shouldn't have</em> done it? You did — that's the crime,",
    "Flip the <em>not</em> and you flip the facts every time!",
    "<em>Ought to have</em> — formal, and it keeps its <em>to</em>,",
    "<s>ought have</s>? No, that will never do!",
    "Plane <em>should have landed</em>? Nobody's to blame —",
    "That's a timetable guess, not the blaming game!"
   ]
  },
  "moves": [
   {
    "move": "Point at a friend and shake your head",
    "says": "You <em>should have</em> told me! (You didn't — blame.)"
   },
   {
    "move": "Put your hand on your heart and sigh",
    "says": "I <em>should have</em> checked. (I didn't — regret.)"
   },
   {
    "move": "Turn your hand from palm-up to palm-down",
    "says": "Flip! <em>Shouldn't have</em> = it happened, and it was a mistake."
   },
   {
    "move": "Pinch a tiny invisible word between finger and thumb and hold it up",
    "says": "<em>ought to have</em> — never drop the <strong>to</strong>!"
   },
   {
    "move": "Tap your wrist like a watch",
    "says": "They <em>should have landed</em> by now — timetable, no blame."
   }
  ]
 },
 "t6l2s2": {
  "thai": "could have + V3 ในบทนี้ไม่ใช่การเดา แต่บอกว่า “ในอดีตมีโอกาสหรือทางเลือกนั้นอยู่จริง แต่ไม่ได้ทำ” เช่น We could have sold the building in 2019. = ตอนนั้นเราขายตึกได้ (แต่ไม่ได้ขาย ตอนนี้ตึกยังเป็นของเราอยู่) ต่างจาก could have ที่เป็นการเดา ซึ่งยังไม่รู้ว่าเกิดหรือไม่ ส่วน You might have told me! ถ้าเน้นเสียงที่ might จะเป็นการต่อว่า ประมาณว่า “บอกกันสักคำก็ไม่ได้!” เพราะเป็นเรื่องง่าย ๆ ที่อีกฝ่ายไม่ยอมทำ รูปเดียวกันนี้ยังใช้แสดงความโล่งใจได้ด้วย เช่น That could have ended very badly. = เกือบแย่แล้ว (แต่ก็ไม่ได้แย่) ข้อสำคัญคือ could have เฉย ๆ บอกแค่ว่ามีทางเลือกอยู่ แต่ถ้าพูดกับ you และเน้นเสียง เช่น You COULD have told me! ก็เป็นการต่อว่าได้เหมือน might have ส่วน should have บอกตรง ๆ ว่าการไม่ทำนั้นเป็นความผิด",
  "analogy": {
   "title": "The unused coupon",
   "text": "Yesterday the Grab app showed you a half-price coupon for noodles, and you ignored it. Today you think, “I <em>could have</em> got them half price.” The coupon was really there, and you didn't use it. Your best friend finds out you saw it and says, “You <em>might have</em> told me!” — that's not a guess, it's a complaint: telling her was easy, and you didn't."
  },
  "trap": "Thai learners translate every <em>could have</em> as อาจจะ — a guess. Here it means the chance was real and was <strong>not</strong> taken, so the event never happened. Tests also offer <em>should have</em>, which adds blame, and <em>may have</em> for the complaint, which has no reproach reading. Dodge: if you can add “…but didn't”, it's a chance not taken; if the sentence also calls that a fault, it's <em>should have</em>.",
  "map": {
   "center": "chance not taken",
   "branches": [
    {
     "label": "could have done",
     "leaves": [
      "the chance was there",
      "→ it didn't happen"
     ]
    },
    {
     "label": "≠ a guess",
     "leaves": [
      "guess: maybe it happened",
      "this: it did NOT"
     ]
    },
    {
     "label": "might have!",
     "leaves": [
      "stress might = complaint",
      "You might have told me!"
     ]
    },
    {
     "label": "Relief",
     "leaves": [
      "could have ended badly",
      "→ but it didn't"
     ]
    },
    {
     "label": "vs should have",
     "leaves": [
      "could = road was there (no fault stated)",
      "should = + it was a fault"
     ]
    }
   ]
  },
  "story": {
   "title": "Free Mango Sticky Rice",
   "panels": [
    {
     "who": "Nan",
     "text": "Mint! The canteen gave out free mango sticky rice today. You <em>might have</em> told me!"
    },
    {
     "who": "Nong Bot",
     "text": "Calculating chance that Mint told you… 50%! Beep! She might have, she might not!"
    },
    {
     "who": "Nan",
     "text": "Bot, I'm not guessing. I'm complaining! She didn't tell me."
    },
    {
     "who": "Mint",
     "text": "Sorry! I <em>could have</em> texted you, but I was too busy eating mine!"
    },
    {
     "who": "Nong Bot",
     "text": "So you DID text her? Beep! Mystery solved!"
    },
    {
     "who": "T.Chris",
     "text": "No, Bot. <em>Could have texted</em> = the chance was there and she didn't take it. Stressed <em>might have told me</em> is a complaint."
    }
   ],
   "moral": "<em>Could have</em> + V3 can mean the chance existed and was not taken; stressed <em>might have</em> turns that into a complaint."
  },
  "chant": {
   "title": "Missed It!",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Chance was there — and you let it go:",
    "<em>Could have</em> done it, but you didn't, so!",
    "Friend kept quiet? Hands on hips and cry,",
    "“You <em>MIGHT</em> have told me!” — it was easy, so why?",
    "Nearly fell down? <em>Could have</em> been bad —",
    "But it didn't happen, so be glad!",
    "<em>Could have</em>: the road was there — stress it, and it's a fight;",
    "<em>Should have</em> adds the blame — get it right!"
   ]
  },
  "moves": [
   {
    "move": "Open an invisible door with your hand, then close it again",
    "says": "The chance was open… and I didn't take it: I <em>could have</em> gone."
   },
   {
    "move": "Put your hands on your hips and lean forward",
    "says": "You <em>MIGHT</em> have told me! (Easy — and you didn't.)"
   },
   {
    "move": "Wipe your forehead with the back of your hand",
    "says": "Phew — that <em>could have</em> ended badly. It didn't."
   },
   {
    "move": "Draw a road in the air with one finger",
    "says": "<em>Could have</em> = the road was there. No blame — unless you stress it."
   },
   {
    "move": "Draw the same road, then wag your finger",
    "says": "<em>Should have</em> = the road was there AND missing it was wrong."
   }
  ]
 },
 "t6l2s3": {
  "thai": "would have + V3 คือผลลัพธ์ของเงื่อนไขที่ไม่เป็นจริงในอดีต รูปที่ใช้คือ If + had + V3, ... would have + V3 เช่น If the alarm had sounded, the staff would have evacuated. = ถ้าตอนนั้นสัญญาณเตือนดัง พนักงานก็คงจะอพยพออกไปแล้ว สิ่งที่ต้องจำคือ ทั้งสองส่วนไม่ได้เกิดขึ้นจริง สัญญาณไม่ได้ดัง และพนักงานก็ไม่ได้อพยพ เงื่อนไขไม่จำเป็นต้องมีคำว่า if เสมอ อาจมาในรูปวลี เช่น Without the second pump หรือแบบกลับประโยค Had it been serviced นอกจากนี้สองส่วนอาจอยู่คนละเวลาได้ เช่น เงื่อนไขในอดีต แต่ผลในปัจจุบัน the plant would still be running ข้อผิดพลาดที่พบบ่อยคือใส่ would have ในส่วน if ซึ่งผิด และเขียน would of ซึ่งผิดเสมอ ต้องเขียน would have หรือ would've",
  "analogy": {
   "title": "The snooze button",
   "text": "You pressed snooze, fell back asleep, missed the school van and paid for a Grab. “If I <em>had got up</em> at six, I <em>would have caught</em> the van.” Both halves are a dream: you didn't get up, and you didn't catch it. Then: “If I'd caught the van, I'<em>d still have</em> my 200 baht.” Past condition, present result — each half keeps its own time."
  },
  "trap": "Thai ถ้า… ก็คง… never changes form, so learners write <s>If the alarm would have sounded</s>, putting <em>would</em> in the if-part, or spell <em>would've</em> as <s>would of</s>. Tests also offer <em>must have</em> as a look-alike — but a deduction says the event <em>did</em> happen. Dodge: <em>had</em> + V3 in the if-part, <em>would have</em> + V3 in the result, then check “Did either half really happen? No.”",
  "map": {
   "center": "would have done",
   "branches": [
    {
     "label": "Pattern",
     "leaves": [
      "If + had + V3,",
      "→ would have + V3"
     ]
    },
    {
     "label": "Meaning",
     "leaves": [
      "both halves are false",
      "→ it didn't happen"
     ]
    },
    {
     "label": "Hidden if",
     "leaves": [
      "Without the pump…",
      "Had it been serviced…",
      "A week earlier…"
     ]
    },
    {
     "label": "Mixed time",
     "leaves": [
      "past if → present result",
      "would still be running"
     ]
    },
    {
     "label": "Never",
     "leaves": [
      "✗ if … would have",
      "✗ would of"
     ]
    },
    {
     "label": "≠ must have",
     "leaves": [
      "must have = it DID happen",
      "would have = it didn't"
     ]
    }
   ]
  },
  "story": {
   "title": "One Minute Too Late",
   "panels": [
    {
     "who": "Fah",
     "text": "The concert tickets sold out one minute before I clicked!"
    },
    {
     "who": "Nong Bot",
     "text": "Analysis: if you <s>would have clicked</s> faster, you <s>would of</s> got them! Beep!"
    },
    {
     "who": "Ploy",
     "text": "Bot, that's two mistakes in one sentence."
    },
    {
     "who": "Nong Bot",
     "text": "Correction: Fah <em>must have got</em> the tickets! Beep! Congratulations!"
    },
    {
     "who": "Fah",
     "text": "No! I DIDN'T get them. That's the whole point."
    },
    {
     "who": "T.Chris",
     "text": "Bot: “If you <em>had clicked</em> faster, you <em>would have got</em> them.” Both halves are dreams — she didn't, and she didn't."
    }
   ],
   "moral": "<em>If</em> + <em>had</em> + V3, <em>would have</em> + V3: neither half happened — and it is never <s>would of</s>."
  },
  "chant": {
   "title": "Dream Machine",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>If</em> I <em>had</em> known, I <em>would have</em> gone —",
    "I didn't know, I didn't go — both halves gone!",
    "<em>Had</em> in the <em>if</em>, <em>would have</em> at the end,",
    "<em>Would have</em> in the <em>if</em>? No way, my friend!",
    "Not <s>would of</s> — it's <em>would have</em>, that's the rule,",
    "Say <em>would've</em> fast, but spell it right at school!",
    "Past <em>if</em>, result now? Yes, they can mix:",
    "If I'd saved last year, I'd be rich — no tricks!"
   ]
  },
  "moves": [
   {
    "move": "Draw a thought bubble above your head",
    "says": "<em>If I had…, I would have…</em> — it's a dream world."
   },
   {
    "move": "Shake your head twice, once for each half",
    "says": "Didn't happen — didn't happen. Both halves are false."
   },
   {
    "move": "Show your left hand, then your right hand",
    "says": "Left: <em>had</em> + V3 (the if-part). Right: <em>would have</em> + V3 (the result)."
   },
   {
    "move": "Cover your left hand with your right and shake your head",
    "says": "No <em>would have</em> in the <em>if</em>-part!"
   },
   {
    "move": "Write the word “have” in the air with your finger",
    "says": "Spell it <em>would have</em> — never <s>would of</s>."
   }
  ]
 },
 "t6l3s1": {
  "thai": "สองรูปนี้บอกเหมือนกันว่า “ไม่จำเป็น” แต่ต่างกันตรงที่ว่าได้ทำไปแล้วหรือเปล่า needn't have + V3 แปลว่า ทำไปแล้ว แต่จริง ๆ ไม่จำเป็นต้องทำเลย เสียแรงเปล่า เช่น You needn't have bought a sandwich. = เธอไม่จำเป็นต้องซื้อแซนด์วิชมาเลย (แต่ซื้อมาแล้ว เพราะเขามีอาหารกลางวันให้) ส่วน didn't need to + V1 แปลว่า ไม่จำเป็นต้องทำ และโดยปกติหมายความว่าไม่ได้ทำ เช่น I didn't need to buy one, so I went straight in. ความต่างที่สำคัญคือ needn't have บอกชัดว่าทำไปแล้ว จึงต่อด้วยประโยคที่บอกว่าไม่ได้ทำไม่ได้ แต่ didn't need to ต่อด้วย but I paid anyway ได้ วิธีเช็กง่าย ๆ คือถามว่าประโยคนี้พูดถึงแรงที่เสียไปแล้วหรือไม่ ถ้าใช่ใช้ needn't have ถ้าอธิบายว่าทำไมถึงไม่ต้องทำ ใช้ didn't need to ส่วน didn't have to ใช้แบบเดียวกับ didn't need to",
  "analogy": {
   "title": "The umbrella in the sun",
   "text": "You carried your big umbrella all day — on the BTS, to school, to tutoring — and the sun never stopped shining. Your friend laughs: “You <em>needn't have brought</em> it!” You did bring it, and the effort was wasted. Mai checked the weather app, saw no rain and left hers at home: she <em>didn't need to bring</em> one, so she didn't."
  },
  "trap": "Thai ไม่จำเป็นต้อง covers both forms, so learners swap them freely. But <em>needn't have</em> + V3 <strong>asserts</strong> the action happened, and nothing after it can deny it: <s>We needn't have reserved seats, so we didn't</s>. Tests write exactly that clash and ask you to spot it. Dodge: ask “Was the effort already spent?” Yes → <em>needn't have</em>; skipped → <em>didn't need to</em>.",
  "map": {
   "center": "needn't vs didn't need",
   "branches": [
    {
     "label": "needn't have V3",
     "leaves": [
      "you DID it",
      "= wasted effort"
     ]
    },
    {
     "label": "didn't need to",
     "leaves": [
      "no requirement",
      "→ usually not done"
     ]
    },
    {
     "label": "Quick test",
     "leaves": [
      "effort already spent?",
      "yes → needn't have",
      "skipped → didn't need to"
     ]
    },
    {
     "label": "Cancel test",
     "leaves": [
      "✓ didn't need to, but did",
      "✗ needn't have, so didn't"
     ]
    },
    {
     "label": "didn't have to",
     "leaves": [
      "= didn't need to",
      "✗ mustn't have done"
     ]
    }
   ]
  },
  "story": {
   "title": "Six Heavy Books",
   "panels": [
    {
     "who": "Ploy",
     "text": "(sweating, carrying six textbooks) I brought every book for the open-book test!"
    },
    {
     "who": "Mint",
     "text": "Ploy, the test only allows one book. You <em>needn't have brought</em> all six!"
    },
    {
     "who": "Nong Bot",
     "text": "Logic: needn't = didn't. So Ploy didn't bring them. Beep! Then what is she holding?"
    },
    {
     "who": "Ploy",
     "text": "My very heavy mistake, Bot."
    },
    {
     "who": "Nan",
     "text": "I read the LINE group, so I <em>didn't need to bring</em> them all. I brought one."
    },
    {
     "who": "T.Chris",
     "text": "Bot: <em>needn't have brought</em> = she brought them, for nothing. <em>Didn't need to bring</em> = no need, so normally she didn't."
    }
   ],
   "moral": "<em>Needn't have</em> + V3 = you did it and it was unnecessary; <em>didn't need to</em> + V1 = no need, and usually you didn't."
  },
  "chant": {
   "title": "Wasted Sweat",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Did it already? Sweat was spent?",
    "<em>Needn't have</em> done it — that's what's meant!",
    "Skipped it, no need, just walked on through?",
    "<em>Didn't need to</em> — that one's for you!",
    "<em>Needn't have bought</em> it? The bag's in your hand,",
    "Can't take it back now — that's how it stands!",
    "<em>Didn't need to</em> pay, but I paid anyway —",
    "That one can bend, so that's okay!"
   ]
  },
  "moves": [
   {
    "move": "Wipe sweat off your forehead, then shrug",
    "says": "I <em>needn't have</em> carried it — I did, and it was for nothing."
   },
   {
    "move": "Walk two fingers straight past your pencil case",
    "says": "I <em>didn't need to</em> stop — so I walked straight past."
   },
   {
    "move": "Lift a heavy invisible shopping bag",
    "says": "<em>Needn't have bought</em> = the bag is already in my hand."
   },
   {
    "move": "Try to push the bag away, then shake your head",
    "says": "You can't cancel <em>needn't have</em>: <s>…so I didn't buy it</s>."
   }
  ]
 },
 "t6l3s2": {
  "thai": "เวลาพูดถึงแผนในอดีต มีสามรูปที่ความหมายต่างกัน was to have + V3 คือแผนหรือกำหนดการที่ตั้งไว้แล้ว แต่ไม่ได้เกิดขึ้นจริง ความล้มเหลวอยู่ในรูปประโยคเลยโดยไม่ต้องมี but เช่น The bridge was to have opened in May. = สะพานมีกำหนดเปิดเดือนพฤษภาคม (แต่ไม่ได้เปิด) ถ้าเป็น was to open เฉย ๆ จะเป็นกลาง อาจเกิดขึ้นตามแผนก็ได้ ส่วน was supposed to คือสิ่งที่คนอื่น กฎ หรือตารางเวลากำหนดไว้ และมักสื่อว่าไม่ได้เป็นไปตามนั้น เช่น The alarm was supposed to sound at six. ส่วน was going to คือความตั้งใจของตัวเอง ที่เปลี่ยนไปเพราะมีเหตุการณ์อื่นเข้ามา เช่น We were going to fly, but the fares doubled. รูปนี้ไม่เกี่ยวกับข้อบังคับเลย",
  "analogy": {
   "title": "The cancelled school trip",
   "text": "The class trip to Khao Yai <em>was to have taken place</em> in June — it's on the official calendar, and the form already tells you it didn't happen. The bus company <em>was supposed to</em> send two buses (that's the contract) — none came, so the trip was off. And you <em>were going to</em> buy new sneakers for it — your own plan, dropped when the trip was cancelled."
  },
  "trap": "In Thai, จะ…, มีกำหนด… and ตั้งใจว่าจะ… blur together, so learners mix the three forms. Tests check two things: whose plan, and did it fail? <em>Was to have</em> + V3 builds the failure in, so it can't be followed by “and it went ahead as planned”. <em>Was supposed to</em> = a rule from outside; <em>was going to</em> = my own intention. Dodge: ask “Whose plan — a schedule's, a rule's or mine?”",
  "map": {
   "center": "plans in the past",
   "branches": [
    {
     "label": "was to have V3",
     "leaves": [
      "fixed plan + it failed",
      "failure built in"
     ]
    },
    {
     "label": "was to + V1",
     "leaves": [
      "neutral arrangement",
      "may have gone ahead"
     ]
    },
    {
     "label": "was supposed to",
     "leaves": [
      "rule / rota / contract",
      "→ almost surely unmet",
      "= was meant to"
     ]
    },
    {
     "label": "was going to",
     "leaves": [
      "my own intention",
      "changed by events"
     ]
    },
    {
     "label": "Clash",
     "leaves": [
      "✗ to have + it went ahead",
      "use was to + V1 instead"
     ]
    }
   ]
  },
  "story": {
   "title": "Sports Day in the Rain",
   "panels": [
    {
     "who": "Nan",
     "text": "Sports day <em>was to have been held</em> on Friday."
    },
    {
     "who": "Nong Bot",
     "text": "Excellent! Beep! I will now report the results of Friday's sports day!"
    },
    {
     "who": "Nan",
     "text": "Bot, it rained all day. There was no sports day."
    },
    {
     "who": "Nong Bot",
     "text": "Then the rain <em>was supposed to</em> fall on Friday! It was in the rules! Beep!"
    },
    {
     "who": "Pim",
     "text": "Rain doesn't follow a rota, Bot. And I <em>was going to</em> run the 100 metres…"
    },
    {
     "who": "T.Chris",
     "text": "Bot: <em>was to have been held</em> = the plan failed. <em>Supposed to</em> = someone else's rule. <em>Going to</em> = Pim's own plan."
    }
   ],
   "moral": "<em>Was to have</em> + V3 = the plan failed; <em>was supposed to</em> = someone else's rule; <em>was going to</em> = your own intention."
  },
  "chant": {
   "title": "Plan Fail",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Was to have</em> done it? Then it never came true,",
    "The fail is built in — no <em>but</em> needed for you!",
    "<em>Was to</em> do it? Neutral — maybe it went fine,",
    "<em>Supposed to</em>? A rule from the rota line!",
    "<em>Going to</em>? That's mine — my own little plan,",
    "Till the fares went up and I took the van!",
    "Whose plan? Did it fail? Ask those two —",
    "Then pick the form that tells it true!"
   ]
  },
  "moves": [
   {
    "move": "Hold up a pretend calendar, then tear it in half",
    "says": "<em>was to have opened</em> — the plan was on the calendar, and it failed."
   },
   {
    "move": "Point up and away, as if at a boss",
    "says": "<em>was supposed to</em> — somebody else's rule (and it probably didn't happen)."
   },
   {
    "move": "Point at yourself, then shrug",
    "says": "<em>was going to</em> — my own plan… then things changed."
   },
   {
    "move": "Hold one flat palm perfectly level",
    "says": "<em>was to visit</em> — neutral: maybe it went ahead."
   }
  ]
 },
 "t6l3s3": {
  "thai": "could have + V3 มีได้สามความหมาย ทั้งที่รูปประโยคเหมือนกันทุกอย่าง จึงต้องดูบริบทรอบ ๆ (ก) โอกาสที่ไม่ได้ใช้ เช่น I could have flown down on Friday, but I took the train. มักมี but ตามมา และแปลว่าไม่ได้ทำ (ข) การเดาแบบไม่แน่ใจ เช่น She could have missed the train; nobody has heard from her. ยังไม่รู้ว่าเกิดหรือไม่ มักมีคำที่บอกหลักฐาน (ค) ผลของเงื่อนไขที่ไม่จริง เช่น With a better map, we could have found the track. มีเงื่อนไขอย่าง if, with, without หรือ had ... ขึ้นต้น และแปลว่าไม่ได้เกิดขึ้น ข้อ (ก) กับ (ค) บอกว่าเหตุการณ์ไม่ได้เกิด แต่ข้อ (ข) ยังเปิดอยู่ ถ้าต้องการให้ชัดเจน ให้เขียนใหม่ ใช้ may have สำหรับการเดา had the chance to ... but didn't สำหรับโอกาสที่ไม่ได้ใช้ และ would have พร้อมเงื่อนไขสำหรับผลที่ไม่จริง",
  "analogy": {
   "title": "One sticker, three moods",
   "text": "On LINE, the same smiley sticker can mean “I'm happy”, “whatever” or “I'm annoyed” — you only know from the messages around it. <em>Could have</em> is the same: one form, three meanings. Read the words around it: a <em>but</em> (a chance not taken), a clue like <em>nobody has heard</em> (a guess), or <em>if / with / without</em> (an unreal result)."
  },
  "trap": "Thai learners translate every <em>could have</em> as อาจจะ — a guess — and miss that two of the three readings mean it did <strong>not</strong> happen. Tests add a clue (<em>but</em>, <em>if</em>, <em>nobody knows</em>) that forces one reading and offer the others as distractors. Writers clash too: <s>I could have taken a taxi, and I took one</s>. Dodge: find the clue — <em>but</em> → chance missed; evidence → guess; condition → unreal.",
  "map": {
   "center": "could have × 3",
   "branches": [
    {
     "label": "(a) Chance",
     "leaves": [
      "…but I stayed",
      "→ didn't happen"
     ]
    },
    {
     "label": "(b) Guess",
     "leaves": [
      "nobody has heard…",
      "→ still open"
     ]
    },
    {
     "label": "(c) Unreal",
     "leaves": [
      "if / with / without / had…",
      "→ didn't happen"
     ]
    },
    {
     "label": "Make it clear",
     "leaves": [
      "guess → may have",
      "chance → …but didn't",
      "unreal → would have + if"
     ]
    },
    {
     "label": "Spelling",
     "leaves": [
      "✗ could of",
      "✓ could have / could've"
     ]
    }
   ]
  },
  "story": {
   "title": "Bot Goes Dancing",
   "panels": [
    {
     "who": "Mai",
     "text": "I <em>could have</em> gone to the concert, but I stayed home to study."
    },
    {
     "who": "Nong Bot",
     "text": "Probability that Mai went: 50%! Beep! She could have, she could not!"
    },
    {
     "who": "Fah",
     "text": "Bot, she said <em>but I stayed home</em>. She didn't go."
    },
    {
     "who": "Nong Bot",
     "text": "Understood. And with a ticket, I <em>could have</em> danced. So I danced! Beep!"
    },
    {
     "who": "Pim",
     "text": "You don't even have legs, Bot."
    },
    {
     "who": "T.Chris",
     "text": "Read the clue, Bot: <em>but</em> = a chance not taken. <em>With a ticket</em> = unreal. Only evidence like <em>nobody knows</em> makes it a guess."
    }
   ],
   "moral": "One <em>could have</em>, three meanings — the clue around it (<em>but</em>, evidence, or a condition) tells you which."
  },
  "chant": {
   "title": "Three-Way Could",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Could have</em> done it — which one, which one?",
    "Look for the clue and the job is done!",
    "Hear a <em>but</em>? The chance was there — you passed it by,",
    "Hear <em>nobody knows</em>? Just a guess — don't ask why!",
    "Hear <em>if</em>, <em>with</em>, <em>without</em>? Unreal — never true,",
    "Two say “didn't happen”, one's still open for you!",
    "Need it clear? Write <em>may have</em> for a guess,",
    "And <s>could of</s> on paper? That's a mess!"
   ]
  },
  "moves": [
   {
    "move": "Hold up one finger, then push your palm out like “stop”",
    "says": "(a) …<em>but</em> I stayed — a chance not taken."
   },
   {
    "move": "Two fingers on your temple, squint",
    "says": "(b) Nobody knows — just a guess, still open."
   },
   {
    "move": "Draw a thought bubble in the air",
    "says": "(c) <em>With a better map</em>… unreal — it didn't happen."
   },
   {
    "move": "Make a magnifying glass with your hand and move it over the desk",
    "says": "Find the clue before you choose the meaning!"
   }
  ]
 },
 "t7l1s1": {
  "thai": "ในงานเขียนเชิงวิชาการ hedge อย่าง may, tends to หรือ it appears that ไม่ได้มีไว้เพื่อความสุภาพ และไม่ใช่เพราะไม่กล้าฟันธง แต่เป็น “รายงานหลักฐาน” ที่บอกผู้อ่านว่าผู้เขียนมั่นใจแค่ไหน ประโยคที่ไม่มี hedge เช่น This proves that smaller classes raise attainment. เท่ากับสัญญาว่าเป็นจริงทุกกรณีทุกที่ เจอข้อยกเว้นเพียงกรณีเดียวก็ล้มทั้งประโยค ส่วน This suggests that smaller classes may raise attainment. (ผลนี้ชี้ว่าห้องเรียนขนาดเล็กอาจช่วยให้ผลการเรียนดีขึ้น) อ้างแค่ว่าอาจเป็นจริง ไม่ได้ยืนยันว่าเป็นจริง จึงล้มยากกว่ามาก เป้าหมายไม่ใช่ความระมัดระวัง แต่คือ “ความพอดี” ระหว่างน้ำหนักของข้ออ้างกับหลักฐาน ถ้าแรงเกินไป ผู้ตรวจจะมองว่า over-generalise ถ้าอ่อนเกินไป ก็ดูเหมือนไม่มีอะไรจะพูด และข้อเท็จจริงที่ยืนยันแล้ว เช่น Water boils at 100 degrees at sea level. ไม่ต้อง hedge เลย",
  "analogy": {
   "title": "The one-visit food review",
   "text": "You tried the new mookata place in Siam once and loved it. Post <em>‘This is THE best mookata in Bangkok — everyone will love it!’</em> and one friend who hated it destroys your whole post. Post ‘From one visit, it <strong>seems</strong> really good — it <strong>may</strong> be worth a try’ and nobody can knock it down. Same experience, smaller promise. That smaller promise is a hedge."
  },
  "trap": "Thai students often feel that a hedge sounds weak or just เกรงใจ, so they write every claim at full force: <em>proves</em>, <em>will</em>, <em>everyone</em>. Others swing the other way and stack five hedges. Tests offer both extremes, plus a sneaky middle option that stretches one city's survey to <em>other cities too</em>. Dodge: ask ‘How much evidence is there?’ One study → <em>suggests … may</em>; a settled fact → no hedge.",
  "map": {
   "center": "Why we hedge",
   "branches": [
    {
     "label": "Hedge = report",
     "leaves": [
      "tells how sure you are",
      "not politeness",
      "not weakness"
     ]
    },
    {
     "label": "No hedge",
     "leaves": [
      "= always, everywhere",
      "1 exception → it breaks"
     ]
    },
    {
     "label": "Hedged claim",
     "leaves": [
      "= possibly true, not proved",
      "much harder to knock down"
     ]
    },
    {
     "label": "Too strong",
     "leaves": [
      "proves / everyone will",
      "→ over-generalising"
     ]
    },
    {
     "label": "Too weak",
     "leaves": [
      "may possibly perhaps…",
      "→ nothing to say"
     ]
    },
    {
     "label": "Settled fact",
     "leaves": [
      "Water boils at 100°C.",
      "no hedge needed"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Reviews the Bubble Tea",
   "panels": [
    {
     "who": "Ploy",
     "text": "I tried the new bubble tea shop by the school gate. I liked it!"
    },
    {
     "who": "Nong Bot",
     "text": "DATA RECEIVED. This <em>proves</em> that every human in Thailand loves this shop! Beep!"
    },
    {
     "who": "Fah",
     "text": "Er… I tried it too. I hated it."
    },
    {
     "who": "Nong Bot",
     "text": "ERROR. One Fah has destroyed my entire sentence. Beep… beep…"
    },
    {
     "who": "T.Chris",
     "text": "Bot, one happy customer <em>suggests</em> the shop <em>may</em> be good. Pitch the claim to the evidence."
    }
   ],
   "moral": "A claim with no hedge promises <em>always and everywhere</em>, so match its strength to the evidence: one finding <em>suggests</em> and <em>may</em>, it never <em>proves</em>."
  },
  "chant": {
   "title": "Match It",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "No hedge means <em>always</em> — every place, every case,",
    "One exception comes along and knocks it off its base!",
    "One small study? It <em>suggests</em>, it <em>may</em> —",
    "Not <em>proves</em>, not <em>everyone</em>, no way!",
    "But <em>may possibly perhaps</em>? Now there's nothing to say,",
    "And water <em>boils</em> at a hundred — facts don't need a <em>may</em>!",
    "Not too strong, not too weak, that's the way to play:",
    "Match the claim to the evidence — that's the C1 way!"
   ]
  },
  "moves": [
   {
    "move": "Hold your hands far apart, like measuring a giant fish",
    "says": "No hedge = <em>always, everywhere</em> — a giant promise"
   },
   {
    "move": "Bring your hands close together, a small gap between them",
    "says": "<em>suggests … may</em> = a small promise I can keep"
   },
   {
    "move": "Poke one finger up, then pop your hands apart",
    "says": "One exception — pop! — the universal claim is gone"
   },
   {
    "move": "Hold both palms flat and level, like a balance",
    "says": "Claim = evidence. Not too heavy, not too light."
   },
   {
    "move": "Tap the desk once, firmly",
    "says": "Settled fact? <em>Water boils at 100°C.</em> No hedge."
   }
  ]
 },
 "t7l1s2": {
  "thai": "การอ้างเกินหลักฐาน (overclaim) มาได้สามรูปแบบ คือ คำกริยา เช่น proves, demonstrates คำบอกปริมาณ เช่น everyone, all, always, never และ modal ที่ใช้เต็มแรง เช่น will หรือ must be ทั้งสามแบบทำให้ข้ออ้างกลายเป็น “ทุกกรณี” ผู้อ่านจึงหาข้อยกเว้นเพียงหนึ่งเดียวมาล้มได้ทันที วิธีแก้ไม่ใช่การลบทิ้ง แต่คือ “ลดลงหนึ่งขั้น” เช่น proves → suggests, will → is likely to, everyone → the majority, always → in most cases, must be → may well be ตัวอย่าง Road pricing is likely to reduce peak-hour traffic. (การเก็บค่าใช้ถนนน่าจะช่วยลดการจราจรช่วงเร่งด่วน) ระวังด้วยว่าผลสำรวจบอกได้แค่ว่าสองสิ่ง “เกี่ยวข้องกัน” (are associated with) ไม่ได้พิสูจน์ว่าสิ่งหนึ่งเป็นสาเหตุของอีกสิ่ง ส่วนนิยามศัพท์ ข้อเท็จจริงที่ไม่มีใครโต้แย้ง และจุดยืนของเราเอง ไม่จำเป็นต้อง hedge",
  "analogy": {
   "title": "Everyone has one, Mum",
   "text": "‘Mum, <em>everyone</em> in my class has the new phone!’ Mum names one girl who doesn't, and the argument is over in two seconds. ‘<em>Most</em> of my class has it’ is much harder to beat — she would have to count the whole room. <em>Everyone</em>, <em>always</em>, <em>proves</em> and <em>will</em> all hand the other person the one exception they need."
  },
  "trap": "Thai จะ slides straight into <em>will</em>, and พิสูจน์ into <em>proves</em>, so <em>Fees will deter applicants</em> or <em>The survey proves…</em> feel natural. Tests also plant an option that keeps the exact survey figure but uses a cause verb like <em>cut</em> — it looks precise, yet a survey only shows a link. Dodge: hunt the three shapes — verb, quantifier, modal — and move each one down one rung.",
  "map": {
   "center": "Overclaim: 3 shapes",
   "branches": [
    {
     "label": "The verb",
     "leaves": [
      "proves → suggests",
      "demonstrates → indicates"
     ]
    },
    {
     "label": "The quantifier",
     "leaves": [
      "everyone → the majority",
      "always → in most cases"
     ]
    },
    {
     "label": "The modal",
     "leaves": [
      "will → is likely to",
      "must be → may well be"
     ]
    },
    {
     "label": "Why it fails",
     "leaves": [
      "all = 1 exception kills it",
      "reader hunts for it"
     ]
    },
    {
     "label": "Link ≠ cause",
     "leaves": [
      "survey = link, not cause",
      "are associated with ✓"
     ]
    },
    {
     "label": "No hedge needed",
     "leaves": [
      "definitions",
      "undisputed facts",
      "your own thesis"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot and the Phone at Bedtime",
   "panels": [
    {
     "who": "Mai",
     "text": "I used my phone in bed last night and slept really badly."
    },
    {
     "who": "Nong Bot",
     "text": "This <em>proves</em> that <em>everyone</em> who uses a phone <em>will</em> never sleep again! Beep!"
    },
    {
     "who": "Nan",
     "text": "I scrolled TikTok till midnight and slept ten hours."
    },
    {
     "who": "Nong Bot",
     "text": "…Error. One Nan has broken all three of my words. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Drop each one a rung, Bot: phone use at night <em>is linked to</em> poorer sleep for <em>many</em> students."
    }
   ],
   "moral": "Find the overclaim in the verb, the quantifier and the modal, and move each one down a rung instead of deleting the claim."
  },
  "chant": {
   "title": "Three Shapes",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Verb says <em>proves</em>? Bring it down — it <em>suggests</em>!",
    "<em>Everyone</em>? <em>Always</em>? That fails the test!",
    "<em>Will</em> steps down to <em>is likely to</em>,",
    "<em>Must be</em> drops to <em>may well be</em> too.",
    "One exception is enough to kill the word <em>all</em> —",
    "<em>Most</em> stays standing when the critics call.",
    "Don't delete the claim, just step it down one rung —",
    "Definitions and your thesis? Leave them strong!"
   ]
  },
  "moves": [
   {
    "move": "Bang a fist on the desk like a judge's hammer, then lift it",
    "says": "<em>Proves!</em> — too loud. Lift it: <em>suggests</em>."
   },
   {
    "move": "Sweep one arm across the whole room, then stop it halfway",
    "says": "<em>Everyone, always</em> → <em>most, in most cases</em>"
   },
   {
    "move": "Walk two fingers down one step on the desk",
    "says": "One rung down: <em>will</em> → <em>is likely to</em>"
   },
   {
    "move": "Hold up one finger and wag it",
    "says": "One exception is enough to break <em>all</em>"
   },
   {
    "move": "Hand on heart, sit up tall",
    "says": "My thesis: <em>Tuition fees should be capped.</em> No hedge needed."
   }
  ]
 },
 "t7l1s3": {
  "thai": "หลังเรียนเรื่อง hedge นักเรียนมักใส่ซ้อนกันจนล้น เช่น It may possibly perhaps be somewhat arguable that… ซึ่งไม่ได้ทำให้รอบคอบขึ้นเลย เพราะ hedge ทุกตัวปรับ “ตัวแปรเดียวกัน” คือระดับความมั่นใจ may ก็แปลว่า possibly อยู่แล้ว ใส่ซ้ำก็เหมือนหมุนปุ่มเดิมสองรอบ สุดท้ายประโยคไม่เหลือข้ออ้างอะไรเลย ใช้ hedge ตัวเดียวก็พอ เช่น Fees may deter applicants. (ค่าเล่าเรียนอาจทำให้ผู้สมัครถอดใจ) ข้อยกเว้นคือ modal คู่กับคำวิเศษณ์ที่ “ขยับ” ระดับ เช่น may well (น่าจะเป็นไปได้มาก) หรือ would almost certainly วิธีทดสอบง่ายๆ ถ้าคำที่สองซ้ำความหมายคำแรก ให้ตัดทิ้ง ถ้าคำที่สองขยับระดับ ให้เก็บไว้ อีกด้านหนึ่งคือการอ้างน้อยเกินไป (underclaim) เช่น hedge สิ่งที่ไม่มีใครเถียง อย่าง It may be that regular exercise has some benefits ซึ่งฟังดูเลี่ยงมากกว่ารอบคอบ",
  "analogy": {
   "title": "Pressing the lift button",
   "text": "In the lift at the BTS station, pressing the button for floor 3 five times does not get you to floor 3 any faster — it only shows everyone you are nervous. That is <em>may possibly perhaps</em>: the same button, pressed again and again. <em>May well</em> is different: it presses a <strong>different</strong> button and actually takes you somewhere else. If a word only presses the same button, stop pressing."
  },
  "trap": "Thai softens with many small words at once — อาจจะ…มั้ง…นิดนึง — and it sounds polite, so learners translate that straight into <em>may possibly perhaps somewhat</em>. Tests exploit this with a ‘shorter pile-up’ option that keeps three hedges instead of six, and with false reasons such as ‘<em>may possibly</em> is ungrammatical’ (it isn't; it's empty). Dodge: for each extra hedge word ask ‘Does it repeat the first one, or move it?’ Repeat → cut.",
  "map": {
   "center": "One hedge is enough",
   "branches": [
    {
     "label": "Pile-up",
     "leaves": [
      "may possibly perhaps…",
      "= no claim left"
     ]
    },
    {
     "label": "Why it fails",
     "leaves": [
      "all turn the same dial",
      "may = possibly already"
     ]
    },
    {
     "label": "Moves it ✓",
     "leaves": [
      "may well ↑",
      "would almost certainly ↑"
     ]
    },
    {
     "label": "The test",
     "leaves": [
      "repeats? → cut it",
      "moves? → keep it"
     ]
    },
    {
     "label": "Underclaim",
     "leaves": [
      "hedging the undisputed",
      "sounds evasive"
     ]
    },
    {
     "label": "Scope ≠ pile-up",
     "leaves": [
      "in smaller clinics ✓",
      "limits who, not how sure"
     ]
    },
    {
     "label": "Verb + modal ✓",
     "leaves": [
      "suggests that … may",
      "evidence verb + one modal = normal"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Learns to Hedge",
   "panels": [
    {
     "who": "Pim",
     "text": "Bot, the sky's really dark. Will it rain this afternoon?"
    },
    {
     "who": "Nong Bot",
     "text": "It may possibly perhaps conceivably be somewhat arguable that some rain could fall. Beep."
    },
    {
     "who": "Pim",
     "text": "So… umbrella or no umbrella?!"
    },
    {
     "who": "Mint",
     "text": "And Bot, is exercise good for you?"
    },
    {
     "who": "Nong Bot",
     "text": "It may be that exercise has some possible benefits. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Bot: one hedge for the rain — <em>it may well rain</em> — and none for exercise. It <em>is</em> good for you."
    }
   ],
   "moral": "Hedges don't add up: use one, keep a second word only if it moves the first (<em>may well</em>), and don't hedge what nobody disputes."
  },
  "chant": {
   "title": "Don't Stack It",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>May</em>, <em>possibly</em>, <em>perhaps</em> — stop, that's a pile!",
    "Same dial turned three times — it won't move a mile.",
    "One hedge, one claim, that's all you need:",
    "<em>Fees may deter applicants</em> — job done, agreed.",
    "<em>May well</em> moves it up, so <em>well</em> can stay;",
    "If the second word repeats, cut it away!",
    "Hedge the obvious? That's dodging the ball —",
    "Exercise <em>is</em> good for you — no <em>may</em> at all!"
   ]
  },
  "moves": [
   {
    "move": "Turn an invisible dial once, then let go",
    "says": "One hedge: <em>may</em>. Done."
   },
   {
    "move": "Keep twisting the dial on the same spot, looking confused",
    "says": "<em>may possibly perhaps</em> — same dial, nothing moves"
   },
   {
    "move": "Turn the dial and lift your hand higher",
    "says": "<em>may well</em> — the adverb moves it up, so it stays"
   },
   {
    "move": "Make scissors with two fingers and snip",
    "says": "Second word only repeats the first? Snip it out."
   },
   {
    "move": "Shrug, then shake your head",
    "says": "Hedging the obvious = dodging. <em>Exercise is good for you.</em>"
   }
  ]
 },
 "t7l2s1": {
  "thai": "modal อย่าง may, might และ could มีความหมายใกล้กันมาก อยู่ตรงกลางสเกลเหมือนกันหมด คำวิเศษณ์ที่วางไว้ “หลัง” modal จะช่วยขยับระดับให้แม่นยำขึ้น ตัวยกระดับขึ้น เช่น may well, would almost certainly (เกือบแน่นอน) ตัวลดระดับลง เช่น might conceivably (เป็นไปได้ แต่น้อยมาก) ส่วน could arguably ไม่ได้บอกความน่าจะเป็น แต่บอกว่าประเด็นนี้ “ยังถกเถียงได้” จึงเหมาะวางไว้ก่อนข้อโต้แย้ง ถ้าอยากบอกว่า “น่าจะไม่เกิดขึ้น” ให้ใช้ is unlikely to ไม่ใช่ may not เพราะ may not แปลว่า “อาจจะไม่” ซึ่งยังเปิดโอกาสทั้งสองทาง ตัวอย่าง The scheme is unlikely to pay for itself within a decade. (โครงการนี้ไม่น่าจะคุ้มทุนภายในสิบปี) และ unlikely ยังปรับระดับได้ เช่น highly unlikely ระวังลำดับคำ ต้องเป็น would almost certainly ไม่ใช่ almost would certainly ส่วน may possibly แค่ซ้ำความหมาย ไม่ได้ขยับอะไรเลย",
  "analogy": {
   "title": "Ordering som tam",
   "text": "At the som tam stall you don't just say ‘spicy’ — you say ‘spicy, a lot’ or ‘spicy, just a little’. The modal is the order: <em>may</em>, <em>might</em> and <em>could</em> are all plain ‘spicy’. The adverb after it tunes the level: <em>may well</em> is extra spicy, <em>might conceivably</em> is barely spicy. <em>May possibly</em> is shouting ‘spicy, spicy!’ — the cook just hears the same order twice."
  },
  "trap": "Thai อาจจะไม่ turns into <em>may not</em> when the student means ‘probably not’ — but <em>may not</em> leaves both outcomes open. And เกือบจะแน่นอน puts ‘almost’ first, giving <s>almost would certainly</s>. Tests ask for ‘probably not’ and offer <em>may not</em> and <em>cannot</em> as bait, or hide a wrongly placed adverb in a spot-the-error item. Dodge: ‘probably not’ = <em>is unlikely to</em>; then check the adverb comes <strong>after</strong> the modal (with a negative, <em>probably won't</em> is fine too).",
  "map": {
   "center": "Modal + adverb",
   "branches": [
    {
     "label": "Up ↑",
     "leaves": [
      "may well",
      "would almost certainly"
     ]
    },
    {
     "label": "Down ↓",
     "leaves": [
      "might conceivably",
      "lower than bare might"
     ]
    },
    {
     "label": "Contested",
     "leaves": [
      "could arguably",
      "→ just before your counter"
     ]
    },
    {
     "label": "Empty (repeats)",
     "leaves": [
      "may possibly",
      "might perhaps"
     ]
    },
    {
     "label": "Probably not",
     "leaves": [
      "is unlikely to ✓",
      "may not = maybe not",
      "highly unlikely ✓"
     ]
    },
    {
     "label": "Word order",
     "leaves": [
      "adverb after the modal: may well",
      "with not: probably won't ✓"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot and the Mango Sticky Rice",
   "panels": [
    {
     "who": "Fah",
     "text": "Bot, will the canteen's mango sticky rice sell out before lunch?"
    },
    {
     "who": "Nong Bot",
     "text": "It <em>may</em> sell out. Beep."
    },
    {
     "who": "Fah",
     "text": "Only <em>may</em>? Then I'll finish my homework first."
    },
    {
     "who": "Fah",
     "text": "Bot! It's gone! Every single box!"
    },
    {
     "who": "Nong Bot",
     "text": "Correct. My data said it was almost certain. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Bot, almost certain isn't plain <em>may</em>. Say: ‘It <em>will almost certainly</em> sell out.’"
    }
   ],
   "moral": "Plain <em>may</em> is the rough middle; an adverb after the modal — <em>may well</em>, <em>will almost certainly</em>, <em>might conceivably</em> — puts the claim on the right rung."
  },
  "chant": {
   "title": "Tune the Modal",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>May</em>, <em>might</em>, <em>could</em> — they all sit in the middle,",
    "Add an adverb after and you tune them a little:",
    "<em>May well</em> — up! <em>Would almost certainly</em> — higher!",
    "<em>Might conceivably</em> — down, the chance gets tinier!",
    "<em>Could arguably</em>? That's a fight, not a chance —",
    "Use it just before you answer back: that's the dance!",
    "‘Probably not’? Say <em>unlikely to</em>, not <em>may not</em>!",
    "Adverb goes <strong>after</strong> — <s>almost would</s>? Stop!"
   ]
  },
  "moves": [
   {
    "move": "Hold one hand flat at chest height",
    "says": "<em>may / might / could</em> — the middle"
   },
   {
    "move": "Raise the flat hand up to eye level",
    "says": "<em>may well</em> … even higher: <em>would almost certainly</em>"
   },
   {
    "move": "Lower the flat hand almost to the desk",
    "says": "<em>might conceivably</em> — possible, but only just"
   },
   {
    "move": "Rock the flat hand from side to side",
    "says": "<em>could arguably</em> — not a chance, a debate"
   },
   {
    "move": "Thumbs down, held low",
    "says": "Probably not = <em>is unlikely to</em>, not <em>may not</em>"
   }
  ]
 },
 "t7l2s2": {
  "thai": "hedge อีกกลุ่มหนึ่งไม่ได้ลดความมั่นใจ แต่ย้าย “แหล่งที่มา” ของข้ออ้างออกจากตัวผู้เขียน เช่น It may be argued that…, It is widely held that…, It would appear that… ประโยค It may be argued that fees improve quality. (อาจมีผู้โต้แย้งว่าค่าเล่าเรียนช่วยยกระดับคุณภาพการสอน) ไม่ได้บอกว่าผู้เขียนเชื่ออย่างนั้น บอกเพียงว่ามีข้อโต้แย้งนี้อยู่ จึงเหมาะมากสำหรับเปิดความเห็นของฝ่ายตรงข้าม ก่อนที่เราจะโต้กลับในประโยคถัดไป ส่วน would ใน it would appear หรือ this would suggest ไม่ได้หมายถึงอนาคตหรือเงื่อนไข แต่เป็น “ระยะห่าง” ที่ทำให้ผู้เขียนถอยออกมาครึ่งก้าวจากข้อสรุป ข้อควรระวังคือ อย่าใช้กรอบแบบนี้ทุกประโยค เพราะจะฟังดูเลี่ยง ในกรอบต้องมีข้ออ้างจริงที่คนเถียงได้ และหลัง would ต้องเป็นกริยารูปพื้นฐาน would appear ไม่ใช่ would appears",
  "analogy": {
   "title": "On the table",
   "text": "You're the class rep at a student council meeting. You say: ‘It has been suggested that phones should be banned at lunch.’ You haven't said <em>you</em> want the ban — you've put the idea on the table so the meeting can answer it. <em>It may be argued that…</em> does the same in an essay: the claim is on the table, not in your mouth."
  },
  "trap": "Thai learners read <em>would</em> as จะ — future, or ‘if’. So <em>It would appear that footfall has fallen</em> gets matched with <em>Moving the market would reduce footfall</em>, although the fall has already happened. Here <em>would</em> is distance, not time. Tests also slip in <em>would appears</em>, or <em>it is widely known</em>, which vouches for the claim. Dodge: is the claim inside already past or present? Then <em>would</em> = distance — and after <em>would</em>, bare verb only.",
  "map": {
   "center": "Impersonal frames",
   "branches": [
    {
     "label": "The frames",
     "leaves": [
      "It may be argued that…",
      "It is widely held that…",
      "It would appear that…"
     ]
    },
    {
     "label": "What it does",
     "leaves": [
      "moves claim off the writer",
      "reports the debate"
     ]
    },
    {
     "label": "Best use",
     "leaves": [
      "state the other view",
      "→ answer it next sentence"
     ]
    },
    {
     "label": "would =",
     "leaves": [
      "distance, not future",
      "half a step back"
     ]
    },
    {
     "label": "Warnings",
     "leaves": [
      "not on every sentence",
      "who holds it?",
      "needs a real claim inside"
     ]
    },
    {
     "label": "Grammar",
     "leaves": [
      "would + bare verb",
      "would appear ✓ appears ✗"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Opens the Debate",
   "panels": [
    {
     "who": "Nan",
     "text": "Bot, we're arguing FOR homework. Open by stating the other side's view, then answer it."
    },
    {
     "who": "Nong Bot",
     "text": "Homework should be banned. Beep!"
    },
    {
     "who": "Mint",
     "text": "Bot! You just said their view as OUR view!"
    },
    {
     "who": "Nong Bot",
     "text": "Correction: homework should be banned… and it should not. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Put a frame on it, Bot: ‘<em>It may be argued that</em> homework should be banned.’ Then answer it."
    }
   ],
   "moral": "An impersonal frame reports a view without adopting it, so you can answer it in the very next sentence."
  },
  "chant": {
   "title": "Frame It",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>It may be argued that</em> — that's their view, not mine,",
    "Put it in a frame, then I answer down the line.",
    "<em>It would appear that</em> — the evidence points that way,",
    "<em>Would</em> is half a step back, not a future day.",
    "<em>It is widely held</em> — but tell me who, please!",
    "Frame on every sentence? That's dodging with ease.",
    "After <em>would</em>, bare verb: <em>would appear</em> is right —",
    "Frame their view, then hit back: that's how you fight!"
   ]
  },
  "moves": [
   {
    "move": "Draw a picture frame in the air with both hands",
    "says": "<em>It may be argued that…</em> — their view, in a frame"
   },
   {
    "move": "Point away from yourself, to the side",
    "says": "Not my claim — the debate's claim"
   },
   {
    "move": "Lean back half a step in your chair",
    "says": "<em>It would appear that…</em> — <em>would</em> = distance"
   },
   {
    "move": "Close the pointing hand into a fist and bring it back to centre",
    "says": "Next sentence: <em>However,</em> … now I answer it"
   }
  ]
 },
 "t7l2s3": {
  "thai": "approximator ไม่ได้ลดความมั่นใจ แต่จำกัด “ขอบเขต” ของข้ออ้าง ประโยค Graduates tend to earn more than non-graduates. (ผู้จบปริญญามักมีรายได้สูงกว่าผู้ไม่ได้จบปริญญา) ยังยืนยันว่ารูปแบบนี้มีอยู่จริง เพียงยอมรับว่ามีข้อยกเว้น เจอบัณฑิตรายได้น้อยสักคนก็ไม่ทำให้ประโยคล้ม ต่างจาก Graduates may earn more ซึ่งยอมรับว่ารูปแบบนี้อาจไม่มีอยู่เลยด้วยซ้ำ จึงอ่อนกว่าที่หลักฐานให้ approximator มีสามกลุ่ม คือ กริยา เช่น tend to (ส่วน appear to และ seem to เป็นการรายงานว่าหลักฐานดูเป็นอย่างไร) วลีบอกปริมาณ เช่น in most cases, on the whole, as a rule และคำบอกระดับ เช่น largely, broadly, to some extent ใช้ modal หนึ่งตัวคู่กับ approximator หนึ่งตัวได้ แต่ห้ามใช้สองตัวจากกลุ่มเดียวกัน เช่น On the whole, in most cases… และอย่าเอาคำกว้างๆ มาทำให้ตัวเลขที่ให้ไปแล้วเบลอ",
  "analogy": {
   "title": "The 8 a.m. BTS",
   "text": "<em>The BTS tends to be packed at 8 a.m.</em> — you're not guessing; you stand in it every school day. You're only admitting that on one holiday Tuesday it was empty. Now try <em>The BTS may be packed at 8 a.m.</em> — suddenly you sound as if you've never taken it. <em>Tend to</em> shrinks how <strong>wide</strong> the claim is, not how <strong>sure</strong> you are."
  },
  "trap": "Because Thai มัก feels a bit unsure, students treat <em>tend to</em> like <em>may</em> and sort it under ‘how sure’ — the most common wrong answer in this module. They also stack ส่วนใหญ่…โดยรวม into <em>On the whole, in most cases…</em>. Tests exploit both. Dodge: ask ‘Is the writer unsure, or just admitting exceptions?’ Exceptions = how wide (<em>tend to</em>, <em>in most cases</em>); unsure = how sure (<em>may</em>, <em>is unlikely to</em>).",
  "map": {
   "center": "Approximators = scope",
   "branches": [
    {
     "label": "How WIDE",
     "leaves": [
      "not how SURE",
      "pattern still asserted"
     ]
    },
    {
     "label": "Verbs",
     "leaves": [
      "tend to (how often)",
      "appear/seem to = evidence"
     ]
    },
    {
     "label": "Quantity",
     "leaves": [
      "in most cases",
      "on the whole / as a rule"
     ]
    },
    {
     "label": "Degree",
     "leaves": [
      "largely, broadly",
      "to some extent"
     ]
    },
    {
     "label": "tend to vs may",
     "leaves": [
      "tend to: pattern is real",
      "may: pattern might not be"
     ]
    },
    {
     "label": "Don't",
     "leaves": [
      "2 from one family ✗",
      "blur a figure you gave ✗"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Counts the Graduates",
   "panels": [
    {
     "who": "Mai",
     "text": "Bot, do graduates earn more than people without a degree?"
    },
    {
     "who": "Nong Bot",
     "text": "<em>ALL</em> graduates earn more than non-graduates. Beep!"
    },
    {
     "who": "Pim",
     "text": "My cousin has a degree and earns less than her friend who sells clothes online."
    },
    {
     "who": "Nong Bot",
     "text": "…Then graduates <em>may</em> earn more. Maybe. Possibly. Nobody knows. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Bot, the pattern is real — just leave room for Pim's cousin: graduates <em>tend to</em> earn more."
    }
   ],
   "moral": "An approximator like <em>tend to</em> limits how wide a claim is, not how sure you are, so one exception can't knock it down."
  },
  "chant": {
   "title": "How Wide?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>May</em> says how <strong>sure</strong>, <em>tend to</em> says how <strong>wide</strong> —",
    "The pattern is real, with the exceptions inside!",
    "<em>In most cases</em>, <em>on the whole</em>, <em>as a rule</em>, <em>broadly</em> —",
    "Pick just one, and say it proudly!",
    "<em>Graduates tend to earn more</em> — the claim stands tall,",
    "One low-paid graduate can't make it fall!",
    "Got a figure — nine per cent? Then say it straight,",
    "Don't blur it to <em>a certain amount</em> — that's not great!"
   ]
  },
  "moves": [
   {
    "move": "Spread your arms wide, then pull them in a little",
    "says": "<em>all</em> → <em>tend to</em>: same claim, less width"
   },
   {
    "move": "Keep a steady thumbs-up while your arms move",
    "says": "Still sure! <em>Tend to</em> is not <em>may</em>."
   },
   {
    "move": "Point to one spot just outside your arms",
    "says": "An exception? It's outside the claim — no damage."
   },
   {
    "move": "Hold up one finger, then cross two fingers into an X",
    "says": "One approximator ✓ — <em>on the whole, in most cases</em> ✗"
   }
  ]
 },
 "t7l3s1": {
  "thai": "ในเรียงความ การยอมรับความเห็นฝ่ายตรงข้าม (concession) ไม่ได้แปลว่าแพ้ ถ้าเรา hedge ส่วนที่ยอมรับ เช่น While automation may well displace routine roles in the short term, it is unlikely to replace professional judgement. (แม้ระบบอัตโนมัติน่าจะเข้ามาแทนงานประจำได้ในระยะสั้น แต่ก็ไม่น่าจะแทนวิจารณญาณของมืออาชีพได้) โครงสร้างมีสี่ส่วน คือ คำเชื่อม (while, although, granted that) ข้อที่ยอมรับพร้อม modal (may well) และจำกัดขอบเขตให้แคบลง (routine roles, in the short term) จุดหักเห และข้อโต้แย้งของเราเองที่มีระดับความมั่นใจของมันเอง (is unlikely to) กฎสำคัญคือ ข้อโต้แย้งของเราต้องแรงอย่างน้อยเท่ากับส่วนที่ยอมรับ ถ้ายอมรับแบบ will certainly แล้วโต้กลับด้วย might possibly ประโยคจะกลายเป็นการเถียงแทนอีกฝ่าย ถ้าโต้กลับแรงๆ ไม่ได้ ก็ให้ยอมรับน้อยลง",
  "analogy": {
   "title": "Arguing with Mum",
   "text": "You want to go to a concert. Say ‘Yes, it <em>will</em> finish really late and it's dangerous… but maybe it might be OK?’ and you've just argued Mum's case for her. Say ‘It <em>may well</em> finish late, but Dad's picking me up, so I'm <em>unlikely to</em> be stuck alone’ and you're winning: you lent her the point, then made your half heavier."
  },
  "trap": "Thai politeness pushes students to concede generously and then answer softly — ก็อาจจะ…มั้ง — so they write <em>Although X will certainly…, it might possibly…</em>: the right shape with the balance reversed. Tests love that option, and also offer the false rule ‘both halves must be hedged exactly the same’. Dodge: compare the two modals — is your counter at least as high on the ladder as the concession? If not, concede less.",
  "map": {
   "center": "Concede, then counter",
   "branches": [
    {
     "label": "1 Subordinator",
     "leaves": [
      "while / although",
      "granted that"
     ]
    },
    {
     "label": "2 Concession",
     "leaves": [
      "hedged: may well",
      "narrowed: routine roles"
     ]
    },
    {
     "label": "3 Pivot",
     "leaves": [
      "main clause starts",
      "turn to your side"
     ]
    },
    {
     "label": "4 Counter",
     "leaves": [
      "your own claim",
      "own force: is unlikely to"
     ]
    },
    {
     "label": "Golden rule",
     "leaves": [
      "counter ≥ concession",
      "can't? → concede less"
     ]
    },
    {
     "label": "Reversed ✗",
     "leaves": [
      "will certainly … but",
      "… might possibly = lose"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Changes Sides",
   "panels": [
    {
     "who": "Ploy",
     "text": "Bot, the other team says online classes are lonely. Answer them!"
    },
    {
     "who": "Nong Bot",
     "text": "Online classes <em>will certainly</em> make students lonely… but they <em>might possibly</em> be OK. Beep."
    },
    {
     "who": "Fah",
     "text": "Bot, whose side are you ON?!"
    },
    {
     "who": "Nong Bot",
     "text": "Ours. I think. Beep?"
    },
    {
     "who": "T.Chris",
     "text": "Concede less, counter more: ‘<em>While</em> online classes <em>may well</em> feel lonely, they <em>are unlikely to</em> harm learning.’"
    }
   ],
   "moral": "Hedge what you grant, and make your counter at least as strong as your concession."
  },
  "chant": {
   "title": "Lend It, Don't Give It",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>While</em> they <em>may well</em> have a point — I'll lend it,",
    "Narrow it down — <em>in the short term</em> — then I end it:",
    "My half: <em>is unlikely to</em>, firm and clear,",
    "Concede, pivot, counter — the judges cheer!",
    "<em>Will certainly</em> for them? <em>Might possibly</em> for me?",
    "That's arguing their side — can't you see?",
    "Counter at least as strong as what you gave —",
    "Can't counter hard? Concede less — be brave!"
   ]
  },
  "moves": [
   {
    "move": "Offer an open palm out to the side",
    "says": "<em>While</em> they <em>may well</em> be right… (lend it)"
   },
   {
    "move": "Pinch your fingers to make the space smaller",
    "says": "…<em>in the short term</em>, for <em>routine roles</em> (narrow it)"
   },
   {
    "move": "Turn your palm over and press down firmly",
    "says": "…it <em>is unlikely to</em> replace judgement (my counter)"
   },
   {
    "move": "Weigh both hands like a scale and let your side drop lower",
    "says": "My half must be at least as heavy as theirs"
   }
  ]
 },
 "t7l3s2": {
  "thai": "งานเขียนที่ hedge ทุกประโยคจะไม่มีจุดยืน ต้องมีบางจุดที่ผู้เขียนบอกว่า “ตรงนี้ไม่ต้องสงสัย” คำที่ทำหน้าที่นี้คือ booster เช่น clearly, undoubtedly และ must แต่ booster ต้อง “จ่ายด้วยหลักฐาน” ที่ผู้อ่านเห็นอยู่ตรงหน้า มีสามอย่างที่ทำให้ใช้ได้ คือ ตัวเลขที่ให้ไว้แล้ว นิยามของคำ และข้อสรุปที่ตามมาจากสิ่งที่แสดงไปแล้ว ตัวอย่าง The fall was nine per cent against a target of twenty; the scheme must therefore be judged to have fallen short. (ลดลงเก้าเปอร์เซ็นต์จากเป้ายี่สิบ จึงต้องถือว่าโครงการนี้ไม่ถึงเป้า) must ในที่นี้คือการสรุปเชิงตรรกะ ไม่ใช่ข้อบังคับ หลักคือให้ boost “ขั้นของเหตุผล” ไม่ใช่ตัวข้อเท็จจริง และ boost ครั้งเดียวพอ ถ้าไม่มีอะไรรองรับ คำว่า clearly จะฟังเหมือนการบลัฟ",
  "analogy": {
   "title": "Show the receipt",
   "text": "At the 7-Eleven counter, ‘I <em>definitely</em> paid already!’ means nothing — unless you're holding up the receipt. Then <em>definitely</em> is fair, because the cashier can see why. A booster works the same way: <em>clearly</em> means ‘look at what I've just shown you’. Show the figures first, then boost. No receipt? Then no <em>clearly</em> — it just sounds like bluffing."
  },
  "trap": "Thai ต้อง makes <em>must</em> feel like obligation, so students pick <em>Governments must act</em> as a booster — it isn't; it's a duty. Thai essays also sprinkle อย่างชัดเจน and อย่างไม่ต้องสงสัย as decoration. Tests plant a sentence with a reason plus <em>must</em> where the step doesn't follow: <em>lots of cars, so the air must be the worst in the region</em>. Dodge: point at the ground — a figure, a definition, a step that really follows. Can't point? Drop the booster.",
  "map": {
   "center": "Boosters: earn them",
   "branches": [
    {
     "label": "Boosters",
     "leaves": [
      "clearly, undoubtedly",
      "must (= it follows)"
     ]
    },
    {
     "label": "Earned by",
     "leaves": [
      "arithmetic (9 vs 20)",
      "a definition",
      "a step that follows"
     ]
    },
    {
     "label": "Boost the step",
     "leaves": [
      "must therefore be ✓",
      "is undoubtedly true ✗"
     ]
    },
    {
     "label": "Boost once",
     "leaves": [
      "clearly + undoubtedly ✗",
      "1 per paragraph stands out"
     ]
    },
    {
     "label": "Not a booster",
     "leaves": [
      "must act = obligation",
      "everybody knows = bluff"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Boosts Bubble Tea",
   "panels": [
    {
     "who": "Nan",
     "text": "Bot, your essay says: ‘Clearly and undoubtedly, bubble tea is the best drink in the world.’"
    },
    {
     "who": "Nong Bot",
     "text": "Correct. Two boosters. Double strength. Beep!"
    },
    {
     "who": "Nan",
     "text": "But where's your evidence?"
    },
    {
     "who": "Nong Bot",
     "text": "…Clearly. Beep."
    },
    {
     "who": "Pim",
     "text": "In our class vote, nine of twelve picked bubble tea."
    },
    {
     "who": "T.Chris",
     "text": "Now boost what you've shown, once: ‘Nine of twelve chose it, so it was <em>clearly</em> the class favourite.’"
    }
   ],
   "moral": "A booster must point at something the reader can see — a figure, a definition or a step that follows — and once is enough."
  },
  "chant": {
   "title": "Show the Receipt",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Clearly</em>? Show me! Point at the proof!",
    "Nine against twenty — now that's the truth.",
    "Numbers, a definition, a step that follows —",
    "Without them, <em>clearly</em> just sounds hollow!",
    "Boost the step: <em>it must therefore be</em>,",
    "Not the fact with a shout of <em>undoubtedly</em>!",
    "One booster stands out, four disappear —",
    "Earn it once, and the reader will hear!"
   ]
  },
  "moves": [
   {
    "move": "Point down hard at the desk, as if at a number",
    "says": "Here's the figure: nine against twenty…"
   },
   {
    "move": "Stand the pointing finger straight up",
    "says": "…so it <em>clearly</em> fell short. Earned!"
   },
   {
    "move": "Point at empty air and look around, confused",
    "says": "<em>Undoubtedly</em>… at what? Nothing there = bluff"
   },
   {
    "move": "Draw an arrow in the air from left to right",
    "says": "<em>must therefore</em> — boost the step, not the fact"
   },
   {
    "move": "Hold up one finger only",
    "says": "Boost once. <em>Clearly and undoubtedly</em> is a booster pile-up — one is enough."
   }
  ]
 },
 "t7l3s3": {
  "thai": "การปรับระดับความแรงของข้ออ้างเป็นทักษะตอน “แก้ไขงาน” ให้ตรวจย่อหน้าทีละข้ออ้าง แล้วถามว่า “อะไรในย่อหน้านี้ทำให้ข้ออ้างนี้เป็นจริง” คำตอบมีแค่สามแบบ คือ หลักฐานพอดี หลักฐานน้อยเกินไป ให้ลดลงหนึ่งขั้น (proves → suggests, will → is likely to, everyone → most) หรือหลักฐานมากกว่าที่เขียนไว้ ให้ยกระดับขึ้นหรือตัด hedge ออก และห้าม hedge ตัวเลขที่ให้ไปแล้ว ย่อหน้าที่ดีมี “รูปทรง” ประโยคหัวเรื่องมักเป็นข้ออ้างหลักที่กว้างที่สุด เช่น Smaller classes are likely to benefit the youngest pupils most. (ห้องเรียนขนาดเล็กน่าจะเป็นประโยชน์ต่อเด็กเล็กที่สุด) ส่วนขยายมีหลักฐานและขอบเขตที่ชัดเจน ส่วนประโยคสุดท้ายเป็นจุดที่ใช้ booster ได้ เพราะผู้อ่านเห็นหลักฐานแล้ว ถ้าทุกประโยคเป็น may เหมือนกันหมด หรือเป็น will เหมือนกันหมด ผู้อ่านจะไม่รู้ว่าประโยคไหนสำคัญ",
  "analogy": {
   "title": "The highlighter test",
   "text": "Borrow a friend's notes where every line is highlighted yellow. Which line matters? No idea. Notes with no highlighting at all are just as useless. A paragraph where every claim says <em>will</em> is the all-yellow page; one where every claim says <em>may</em> is the blank page. Highlight by evidence: bold where the proof is solid, light where it isn't."
  },
  "trap": "After learning to hedge, many Thai students play safe and put <em>may</em> on every sentence — even on their own data: <s>The data may show a nine per cent fall</s>. Tests offer repairs that hedge the figure too, or a ‘balanced’ paragraph that alternates strong and weak for no reason. Dodge: for each claim, point at what in the paragraph makes it true. Nothing → downgrade; a measured figure or a step that follows → no hedge.",
  "map": {
   "center": "Audit the paragraph",
   "branches": [
    {
     "label": "Ask each claim",
     "leaves": [
      "underline every claim",
      "what here makes it true?"
     ]
    },
    {
     "label": "Too little",
     "leaves": [
      "down one rung",
      "proves → suggests"
     ]
    },
    {
     "label": "More than shown",
     "leaves": [
      "upgrade / cut the hedge",
      "never hedge your figure"
     ]
    },
    {
     "label": "Paragraph shape",
     "leaves": [
      "topic: the main (widest) claim",
      "middle: evidence + scope",
      "end: earned booster"
     ]
    },
    {
     "label": "Flat ✗",
     "leaves": [
      "all may = no shape",
      "all will = no shape"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Edits Mint's Paragraph",
   "panels": [
    {
     "who": "Mint",
     "text": "Bot, can you check my paragraph for overclaims?"
    },
    {
     "who": "Nong Bot",
     "text": "Done! I added <em>may</em> to every sentence. Even ‘The data <em>may</em> show a nine per cent fall.’ Beep!"
    },
    {
     "who": "Mint",
     "text": "But I measured it! It WAS nine per cent!"
    },
    {
     "who": "Nong Bot",
     "text": "Possibly. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Bot, ask each claim: what here makes it true? A figure Mint measured needs no <em>may</em>."
    }
   ],
   "moral": "Audit claim by claim and move each one up or down to match its evidence, so the force varies across the paragraph."
  },
  "chant": {
   "title": "Audit Time",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Underline each claim, then ask it straight:",
    "<em>What here makes you true?</em> — then set the weight!",
    "Too little? Step down — <em>proves</em> to <em>suggests</em>,",
    "More than you admitted? Cut the hedge — no stress!",
    "Topic sentence leads, the middle brings the facts,",
    "Last line draws the step — <em>must therefore</em> — that's the max!",
    "All <em>may</em>, all <em>will</em> — flat as a floor,",
    "Vary the force — that's what the argument's for!"
   ]
  },
  "moves": [
   {
    "move": "Draw a line under an invisible sentence",
    "says": "Underline the claim."
   },
   {
    "move": "Cup a hand to your ear, eyebrows raised",
    "says": "What here makes it true?"
   },
   {
    "move": "Walk two fingers down a step, then up a step",
    "says": "Too little → down a rung; more than shown → up, or cut the hedge"
   },
   {
    "move": "Draw a wave in the air: high, lower, high",
    "says": "Main claim · evidence · earned ending — a paragraph with shape"
   },
   {
    "move": "Slide a flat hand along, perfectly level, and shake your head",
    "says": "All <em>may</em>? All <em>will</em>? Flat — no argument."
   }
  ]
 },
 "t8l1s1": {
  "thai": "modal ส่วนใหญ่ทำได้สองหน้าที่ในคำเดียว คือ การคาดเดาจากหลักฐาน (epistemic) และข้อบังคับหรือการอนุญาต (deontic) เช่น He must be in the library. อาจหมายถึง “เขาต้องอยู่ห้องสมุดแน่ๆ” เพราะจักรยานยังจอดอยู่ข้างนอก หรืออาจหมายถึง “เขาต้องไปอยู่ที่ห้องสมุด” เพราะกฎกำหนดไว้ ตัว must เองไม่ได้บอกเลยว่าเป็นแบบไหน ต้องดูส่วนที่เหลือของประโยคและสถานการณ์ may ก็เช่นกัน อาจแปลว่า “อาจจะ” หรือ “ได้รับอนุญาตให้” ส่วน should อาจเป็น “น่าจะ” หรือ “ควร” วิธีเช็กง่ายๆ คือลองพูดเป็นประโยคปฏิเสธ ถ้าเป็นการคาดเดา ใช้ can't ถ้าเป็นข้อบังคับ ใช้ mustn't (ห้าม) เช่น His bike has gone, so he can't be in the library. (จักรยานไม่อยู่แล้ว เขาไม่มีทางอยู่ในห้องสมุดหรอก) ถ้าใช้ mustn't ประโยคจะกลายเป็น “ห้ามเขาอยู่ในห้องสมุด” ทันที",
  "analogy": {
   "title": "The hidden sender",
   "text": "A LINE notification pops up with the sender hidden: <em>“Fah must be at the canteen.”</em> If it came from the class gossip group, it's a <strong>guess</strong> — somebody saw her bag there. If it came from the teacher's group, it's an <strong>order</strong> — go and stand there. Same words, same <em>must</em>. Only the sender tells you which. A modal is that notification: before you act, find out whether evidence or a rule sent it."
  },
  "trap": "Thai <em>ต้อง</em> also does both jobs, so the danger isn't the positive — it's the negative. Students turn “ต้องไม่อยู่แน่ๆ” into <s>he mustn't be there</s> for a deduction, which really says he is <em>forbidden</em> to be there. Tests hide exactly this in a spot-the-error item after two clues of evidence. Dodge: say it in the negative — if <em>can't</em> fits, it's a deduction; if <em>mustn't</em> fits, it's a rule.",
  "map": {
   "center": "One modal, two jobs",
   "branches": [
    {
     "label": "must",
     "leaves": [
      "sure: bike's outside",
      "rule: be there by 4"
     ]
    },
    {
     "label": "may",
     "leaves": [
      "perhaps = weak guess",
      "allowed = permission"
     ]
    },
    {
     "label": "should",
     "leaves": [
      "expected: should be shut",
      "advice = weak rule"
     ]
    },
    {
     "label": "can",
     "leaves": [
      "possible: can be cold in December",
      "allowed: you can go now"
     ]
    },
    {
     "label": "Negative test",
     "leaves": [
      "guess → can't",
      "rule → mustn't"
     ]
    },
    {
     "label": "Who decides?",
     "leaves": [
      "not the modal",
      "the clause + situation"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Guards the Library",
   "panels": [
    {
     "who": "Ploy",
     "text": "Mai's bike is still outside. She <em>must</em> be in the library."
    },
    {
     "who": "Nong Bot",
     "text": "RULE RECEIVED! Mai <em>must</em> be in the library! Beep! I will guard the door so she cannot leave."
    },
    {
     "who": "Mai",
     "text": "(from inside) Bot! Nobody ordered me to stay here. I just want to go home!"
    },
    {
     "who": "Fah",
     "text": "And look — Pim's bike has gone."
    },
    {
     "who": "Nong Bot",
     "text": "Then <s>Pim mustn't be in the library</s>! FORBIDDEN! Beep beep!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, they're guessing from bikes, not making rules. A guess says no with <em>can't</em>: Pim <em>can't</em> be in the library."
    }
   ],
   "moral": "One <em>must</em> can be a deduction or a rule — check whether evidence or a rule is behind it, and deny a deduction with <em>can't</em>, never <em>mustn't</em>."
  },
  "chant": {
   "title": "Two Jobs, One Word",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Must</em>, <em>must</em> — two jobs, one word,",
    "Sure from the clues, or a rule you've heard.",
    "Bike outside? She <em>must</em> be in — that's a guess!",
    "Be there by four? That's a rule — no less!",
    "Flip it negative, the test is free:",
    "<em>Can't</em> for a guess, <em>mustn't</em> for a rule — you see?",
    "<em>May</em> means perhaps, or “yes, you can go” —",
    "The word won't say it; the context will show."
   ]
  },
  "moves": [
   {
    "move": "Tap your temple with one finger",
    "says": "<em>must</em> = I'm sure (a deduction)."
   },
   {
    "move": "Point down firmly at the desk",
    "says": "<em>must</em> = you have to (a rule)."
   },
   {
    "move": "Shake your head, palms open",
    "says": "A guess says no: <em>He can't be there.</em>"
   },
   {
    "move": "Cross your arms in an X",
    "says": "A rule says no: <em>You mustn't go there.</em>"
   },
   {
    "move": "Shrug, then point at the rest of the sentence",
    "says": "The modal won't tell me — the clues will."
   }
  ]
 },
 "t8l1s2": {
  "thai": "must เป็นการคาดเดาหรือข้อบังคับ? หลักมีข้อเดียว: ข้อบังคับต้องมี “คนที่ทำตามได้” และ “การกระทำที่ทำได้จริง” ส่วนการคาดเดาไม่ต้องมีอะไรเลย ดังนั้นถ้ากริยาบอกสภาวะ (must know) เป็น perfect ที่จบไปแล้ว (must have left) หรือเป็น progressive ที่กำลังเกิดอยู่ (must be waiting) มักจะเป็นการคาดเดา เพราะสั่งให้ใคร “รู้” หรือ “ทำไปแล้ว” ไม่ได้ (แต่นี่เป็นแค่เบาะแส ไม่ใช่กฎตายตัว เช่น You must be quiet. หรือ Applicants must have completed Year 12. เป็นกฎ) ประธานที่ไม่ใช่ผู้กระทำ เช่น สินค้าหรือฝน ก็สั่งไม่ได้ แต่ถ้ามีเส้นตายในอนาคตกับการกระทำที่คนควบคุมได้ จะเป็นข้อบังคับ เช่น You must be there by four. (เธอต้องไปถึงที่นั่นภายในสี่โมง) ส่วน passive ที่ระบุผู้กระทำ เช่น must be signed by the applicant ยังเป็นกฎได้ ถ้าเป็นคน + การกระทำปกติ + ไม่มีเบาะแสอื่น เช่น Dr Suwan must supervise the night shift. ประโยคเปิดได้ทั้งสองความหมาย ต้องดูบริบท",
  "analogy": {
   "title": "The monitor's rule board",
   "text": "The class monitor can only write rules on the board that a person could actually obey: <em>“Everyone must hand in phones by 8:00.”</em> She can't write <s>Everyone must know the answer</s>, <s>Everyone must have finished last week</s>, or <s>The rain must stop by lunch</s> — nobody can obey those. So test any <em>must</em>: could it go on her board? If not, it isn't a rule. It's a deduction."
  },
  "trap": "Tests offer reasons that <em>sound</em> grammatical: “a collective noun can't take an obligation”, “a passive can't be a rule”, “<em>meet</em> is stative”. All false — committees take duties, <em>must be signed by the applicant</em> is a rule, and <em>meet</em> is an action. Thai learners also grab <em>is required to</em> for any strong <em>must</em>, even a guess. Dodge: ask “Could someone obey this by doing something?” If no, it's a deduction.",
  "map": {
   "center": "Rule or guess? Clues",
   "branches": [
    {
     "label": "State verb",
     "leaves": [
      "must know → guess",
      "must be exhausted → guess"
     ]
    },
    {
     "label": "Perfect",
     "leaves": [
      "must have left → guess",
      "no rule for what's done"
     ]
    },
    {
     "label": "Progressive",
     "leaves": [
      "must be waiting → guess",
      "can't order mid-action"
     ]
    },
    {
     "label": "Subject",
     "leaves": [
      "shipment / rain → guess",
      "signed by applicant → rule"
     ]
    },
    {
     "label": "Deadline",
     "leaves": [
      "be there by four → rule",
      "person + action + time"
     ]
    },
    {
     "label": "No clue",
     "leaves": [
      "Dr Suwan must supervise",
      "→ context decides"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Orders the Rain",
   "panels": [
    {
     "who": "Nan",
     "text": "The results came out an hour ago. Fah <em>must know</em> by now."
    },
    {
     "who": "Nong Bot",
     "text": "ORDER RECEIVED! Fah, you MUST KNOW! Know immediately! Beep beep!"
    },
    {
     "who": "Fah",
     "text": "Bot, I can't know things on command. That's not how brains work."
    },
    {
     "who": "Nong Bot",
     "text": "Then I order this: <s>The rain must be lighter by four!</s> Beep!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, a rule needs someone who can obey it. Fah can't choose to know, and rain obeys nobody. Nan was guessing."
    }
   ],
   "moral": "If nobody could obey it — a state, a finished event, something already happening, or a subject like rain — the <em>must</em> is usually a deduction; a person, an action and a deadline usually make it a rule."
  },
  "chant": {
   "title": "Who Can Obey?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "A rule needs a person with a job to do —",
    "If no one can obey it, it's a guess right through!",
    "<em>Must know</em>, <em>must have left</em>, <em>must be waiting</em> there:",
    "State, done, happening — usually a guess, I'd swear!",
    "A shipment, the weather can't take a command,",
    "But “by four o'clock” — that's a rule, understand?",
    "A person plus an action, no clue in sight?",
    "Read the situation, then call it right!"
   ]
  },
  "moves": [
   {
    "move": "Freeze like a statue",
    "says": "States, finished things, things already happening — usually not orders. Guess!"
   },
   {
    "move": "Tap your wrist like a watch",
    "says": "Deadline + action: <em>You must be there by four.</em> Rule!"
   },
   {
    "move": "Hold an imaginary box and shrug at it",
    "says": "A shipment can't obey: <em>It must be delayed.</em> Guess!"
   },
   {
    "move": "Hold both hands out like balanced scales",
    "says": "Person + action + no clue: both readings open — check the context."
   }
  ]
 },
 "t8l1s3": {
  "thai": "ประโยคที่ must ตีความได้สองแบบไม่ได้ผิดเสมอไป คำถามสำคัญคือ “ผู้อ่านต้องลงมือทำอะไรตามประโยคนี้หรือไม่” ในบทความ ข่าว หรือรีวิวหนัง บริบทช่วยตัดสินให้เอง ปล่อยไว้ได้ แต่ในกฎระเบียบ สัญญา ป้ายความปลอดภัย หรือขั้นตอนทางการแพทย์ ความกำกวมอาจทำให้คนทำผิด ถ้าต้องการให้เป็นข้อบังคับแน่นอน ให้ใช้รูปที่มีความหมายเดียว เช่น is required to, is to, must not หรือ shall ในภาษากฎหมาย ถ้าต้องการให้เป็นการคาดเดาแน่นอน ใช้ is presumably, appears to หรือ almost certainly เช่น Applicants are required to hold a first degree. (ผู้สมัครต้องมีวุฒิปริญญาตรี) อ่านได้แบบเดียวคือเป็นกฎ ข้อควรระวังคือต้องแก้ให้ถูกทิศ และอย่าผสมสองฝั่ง เช่น are presumably required to เพราะกฎที่ “เดาเอา” ไม่ได้บังคับใครเลย",
  "analogy": {
   "title": "Group chat vs fire-drill sheet",
   "text": "If your friend's LINE says <em>“Pim must be at the canteen”</em>, nothing bad happens whether you read it as a guess or an order. But the fire-drill sheet by the classroom door can't be fuzzy. <em>“Students must be on the field”</em> — is that where they are, or where they have to go? So the sheet says <strong>“Students are required to go to the field.”</strong> One meaning, because people have to act on it."
  },
  "trap": "Two opposite mistakes. Some students “fix” every <em>must</em>, even in a film review. Others fix it the wrong way: <em>should</em> (now it's only advice), <em>will</em> (now it's a prediction), or the monster <s>are presumably required to</s> — a rule that guesses at itself. Tests put <em>should</em> as the near miss. Dodge: ask “Must the reader act on this?” If yes, choose a one-meaning form pointing the right way, at the same strength.",
  "map": {
   "center": "Fix it or leave it?",
   "branches": [
    {
     "label": "Ask first",
     "leaves": [
      "Will the reader act on it?",
      "no → leave the must"
     ]
    },
    {
     "label": "Leave it",
     "leaves": [
      "film review, blog, news",
      "chats with friends"
     ]
    },
    {
     "label": "Fix it",
     "leaves": [
      "contracts, safety notices",
      "handbooks, protocols, exam rules"
     ]
    },
    {
     "label": "Rule only",
     "leaves": [
      "is required to / is to",
      "must not / shall (legal)"
     ]
    },
    {
     "label": "Guess only",
     "leaves": [
      "is presumably / appears to",
      "almost certainly"
     ]
    },
    {
     "label": "Don't",
     "leaves": [
      "presumably required to ✗",
      "fix in the wrong direction"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot, Chief Editor",
   "panels": [
    {
     "who": "Mint",
     "text": "Bot, the fire-drill sheet says “Students must be on the field.” Is that where we are, or where we go?"
    },
    {
     "who": "Nong Bot",
     "text": "FIXED! Beep! <s>Students are presumably required to be on the field.</s>"
    },
    {
     "who": "Mint",
     "text": "Presumably required? So is it a rule, or are you guessing there's a rule?"
    },
    {
     "who": "Nong Bot",
     "text": "Also fixing Ploy's LINE message: “Pim is required to be at the canteen.” Beep!"
    },
    {
     "who": "Pim",
     "text": "Bot! I'm not required to be anywhere. I just went for noodles!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, fix the sheet: “Students are required to go to the field.” Leave Ploy's chat alone — nobody acts on it."
    }
   ],
   "moral": "Remove the ambiguity only where the reader has to act — and then use a form with one meaning, pointing the right way."
  },
  "chant": {
   "title": "Fix It Right",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Two-way <em>must</em>? Don't fix it in a rush —",
    "Will the reader act on it? If not, hush.",
    "Contract, safety sheet, exam-hall rule?",
    "<em>Required to</em> — one meaning, that's the tool!",
    "Just a guess? Then <em>presumably</em> will do,",
    "<em>Appears to</em>, <em>almost certainly</em> — guessing, through and through.",
    "Never mix the two — that's the final rule:",
    "<s>presumably required</s> makes the rule a fool!"
   ]
  },
  "moves": [
   {
    "move": "Hold up an imaginary contract and tap it",
    "says": "The reader must act → fix the <em>must</em>."
   },
   {
    "move": "Wave one hand casually",
    "says": "Just a chat or a review → leave it alone."
   },
   {
    "move": "Point down firmly",
    "says": "Rule only: <em>is required to</em>, <em>is to</em>, <em>must not</em>."
   },
   {
    "move": "Tilt your head and tap your temple",
    "says": "Guess only: <em>is presumably</em>, <em>appears to</em>."
   },
   {
    "move": "Push two fists apart",
    "says": "Never weld them: <s>presumably required to</s>."
   }
  ]
 },
 "t8l2s1": {
  "thai": "กริยาในประโยคมีลำดับตายตัวห้าช่อง คือ modal → have → be (progressive) → be (passive) → กริยาหลัก เช่น might have been being examined จะข้ามช่องไหนก็ได้ แต่สลับลำดับไม่ได้ เพราะแต่ละคำเป็นตัวกำหนดรูปของคำถัดไป: modal ตามด้วยกริยารูปเดิมไม่มี to, have ตามด้วย past participle (been), be ที่เป็น progressive ตามด้วยรูป -ing (being) และ be ที่เป็น passive ตามด้วย past participle (examined) เวลาอ่านประโยคยาวๆ ให้เริ่มจากคำสุดท้ายแล้วย้อนกลับ: เกิดอะไรขึ้น ใครถูกกระทำ กำลังเกิดอยู่หรือเกิดก่อนแล้ว และผู้เขียนมั่นใจหรือบังคับแค่ไหน ในชีวิตจริงใช้กันแค่สองถึงสามช่อง เช่น The leak should have been reported. (การรั่วไหลควรถูกรายงานไปแล้ว แต่ไม่มีใครรายงาน) ส่วนแบบห้าช่องให้อ่านออกก็พอ ไม่ต้องเขียนเอง",
  "analogy": {
   "title": "The adapter chain",
   "text": "Your charger cable won't reach the socket, so you join adapters. Each adapter's output end decides which plug can go in next — put them in the wrong order and nothing connects. The verb phrase works the same way: <em>might</em> takes a bare <em>have</em>; <em>have</em> takes <em>been</em>; progressive <em>been</em> takes <em>being</em>; passive <em>being</em> takes <em>examined</em>. Every word's socket picks the next word's shape."
  },
  "trap": "Thai verbs never change form, so Thai learners pick auxiliaries by meaning and forget that each one demands a shape: <s>must being counted</s>, <s>should have be archived</s>, <s>might been have serviced</s>. Tests give four strings with the same words in different orders and forms. Another favourite: reading <em>may have to be replaced</em> as <em>may have been replaced</em>. Dodge: walk left to right — modal → bare; <em>have</em> → participle; progressive <em>be</em> → <em>-ing</em>; passive <em>be</em> → participle.",
  "map": {
   "center": "The 5-slot chain",
   "branches": [
    {
     "label": "Fixed order",
     "leaves": [
      "modal·have·be·be·verb",
      "skip slots, never swap"
     ]
    },
    {
     "label": "Each picks next",
     "leaves": [
      "modal → bare form",
      "have → been / -ed",
      "be (prog) → being / -ing"
     ]
    },
    {
     "label": "Read backwards",
     "leaves": [
      "verb = what happened",
      "being = in progress",
      "modal frames it all"
     ]
    },
    {
     "label": "Real life",
     "leaves": [
      "must be signed",
      "should have been reported",
      "may have to be replaced"
     ]
    },
    {
     "label": "Broken",
     "leaves": [
      "must being counted ✗",
      "should have be archived ✗",
      "might been have ✗"
     ]
    },
    {
     "label": "All 5 slots?",
     "leaves": [
      "parse it, don't write it",
      "split the sentence"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot's Word Blender",
   "panels": [
    {
     "who": "Nan",
     "text": "Bot, nobody reported the leak in the lab. Say that it was a mistake."
    },
    {
     "who": "Nong Bot",
     "text": "Easy! <s>The leak should be have reported.</s> Beep!"
    },
    {
     "who": "Nan",
     "text": "Er… that's all the right words, but you put them in a blender."
    },
    {
     "who": "Nong Bot",
     "text": "UPGRADE! More slots! <s>The leak might being have been been reported!</s> Beep beep!"
    },
    {
     "who": "T.Chris",
     "text": "Bot: modal, then <em>have</em>, then <em>been</em>, then the verb — <em>should have been reported</em>. Three slots is plenty."
    }
   ],
   "moral": "The slots never swap, because each word picks the next one's form — and real sentences need only two or three of them."
  },
  "chant": {
   "title": "Modal, Have, Be, Be, Verb",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Modal, have, be, be, verb — that's the line,",
    "Skip a slot if you like, but the order stays fine.",
    "Modal wants it bare, and <em>have</em> wants <em>been</em>,",
    "Progressive wants <em>-ing</em>, passive wants <em>-ed</em> clean!",
    "<em>Might have been being examined</em>? Read it from the end:",
    "What happened, to whom, when — and how sure, my friend.",
    "Real life uses two or three, not five:",
    "<em>Should have been reported</em> — short and alive!"
   ]
  },
  "moves": [
   {
    "move": "Count five fingers from left to right",
    "says": "Modal, <em>have</em>, <em>be</em>, <em>be</em>, verb — one order only."
   },
   {
    "move": "Hook your index fingers together and pull",
    "says": "Each word picks the next word's form: <em>have</em> → <em>been</em>."
   },
   {
    "move": "Slide your hand from right to left along the desk",
    "says": "Read from the end: <em>reported</em> — <em>been</em> — <em>have</em> — <em>should</em>."
   },
   {
    "move": "Fold down two fingers and keep three up",
    "says": "Real sentences: two or three slots — <em>must be signed</em>."
   }
  ]
 },
 "t8l2s2": {
  "thai": "เมื่อเล่าคำพูดของคนอื่นด้วยกริยาอดีต เช่น said หรือ told modal บางตัวถอยไปเป็นรูปที่ไกลขึ้นได้หนึ่งก้าว มีสี่ตัว คือ must → had to, will → would, can → could และ may → might อีกหกตัวไม่เปลี่ยนเลย คือ would, could, might, should, ought to และ had better เพราะเป็นรูปที่ถอยมาแล้ว ไม่มีที่ให้ถอยต่อ ข้อสำคัญคือ must ที่เป็นการคาดเดาต้องคงเป็น must ห้ามเปลี่ยนเป็น had to เช่น “He must be lying.” → She said he must be lying. (เธอบอกว่าเขาต้องโกหกอยู่แน่ๆ) ถ้าเปลี่ยนเป็น had to be lying จะกลายเป็น “เขาถูกบังคับให้โกหก” ถ้าต้องการพูดถึงอดีตให้ใช้ must have been lying แทน มีแค่ must ที่เป็นข้อบังคับเท่านั้นที่เปลี่ยนเป็น had to และการถอยรูปไม่ได้บังคับเสมอ ถ้าสิ่งที่เล่ายังเป็นจริงอยู่ ใช้รูปเดิมได้",
  "analogy": {
   "title": "The yellow line",
   "text": "On a BTS platform there is one yellow line. When you report what someone said, the station says “step back”: <em>will</em>, <em>can</em>, <em>may</em> and rule-<em>must</em> step behind the line and become <em>would</em>, <em>could</em>, <em>might</em>, <em>had to</em>. But <em>would</em>, <em>could</em>, <em>might</em>, <em>should</em>, <em>ought to</em> and <em>had better</em> are already standing against the back wall. There is nowhere further to go, so they stay put."
  },
  "trap": "Thai doesn't change verbs in reported speech, so students either never step back, or — after drilling — step back everything. Then a guess becomes a duty (<s>She said he had to be lying</s>), or they hunt for a “past of <em>could</em>” and stack modals (<s>would could</s>). Tests love epistemic <em>must</em> and already-back forms. Dodge: ask “Is this <em>must</em> a guess or a rule?” Guess → keep <em>must</em>; rule → <em>had to</em>.",
  "map": {
   "center": "Reporting modals",
   "branches": [
    {
     "label": "Can step back",
     "leaves": [
      "will → would",
      "can → could, may → might"
     ]
    },
    {
     "label": "Already back",
     "leaves": [
      "would · could · might",
      "should · ought to",
      "had better (frozen)"
     ]
    },
    {
     "label": "Rule must",
     "leaves": [
      "→ had to",
      "no past form of its own"
     ]
    },
    {
     "label": "Guess must",
     "leaves": [
      "stays must",
      "past: must have been"
     ]
    },
    {
     "label": "Optional",
     "leaves": [
      "still true? keep it",
      "situation moved on → shift"
     ]
    },
    {
     "label": "Never",
     "leaves": [
      "two modals stacked ✗",
      "must held a licence ✗"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Reports a Guess",
   "panels": [
    {
     "who": "Mai",
     "text": "(looking at an empty desk) Nan's never late, and her mum just phoned the office. She <em>must</em> be sick."
    },
    {
     "who": "Fah",
     "text": "(later) Bot, what did Mai say about Nan?"
    },
    {
     "who": "Nong Bot",
     "text": "Mai said Nan <s>had to be sick</s>! It was a RULE! Beep!"
    },
    {
     "who": "Mai",
     "text": "Bot! Nobody ordered Nan to get sick!"
    },
    {
     "who": "Nong Bot",
     "text": "Correction: Mai said Nan <s>would could be sick</s>… beep?"
    },
    {
     "who": "T.Chris",
     "text": "No. A guess keeps its <em>must</em>: “Mai said Nan <em>must</em> be sick.” Only a rule-<em>must</em> becomes <em>had to</em>."
    }
   ],
   "moral": "In a report, rule-<em>must</em> can become <em>had to</em>, guess-<em>must</em> stays <em>must</em>, and forms that are already stepped back — like <em>could</em> — never move."
  },
  "chant": {
   "title": "One Step Back",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Will</em> goes <em>would</em>, <em>can</em> goes <em>could</em>,",
    "<em>May</em> goes <em>might</em> — just like it should!",
    "<em>Must</em> for a rule? Then say <em>had to</em>;",
    "<em>Must</em> for a guess? It stays — that's true!",
    "<em>Would</em>, <em>could</em>, <em>might</em>, <em>should</em>, <em>ought to</em>, <em>had better</em> —",
    "Already back, they don't change a letter.",
    "Still true today? Step back or leave it alone —",
    "Both are correct, so the choice is your own."
   ]
  },
  "moves": [
   {
    "move": "Lean back once in your chair",
    "says": "One step back: <em>will</em> → <em>would</em>, <em>can</em> → <em>could</em>, <em>may</em> → <em>might</em>."
   },
   {
    "move": "Press your back flat against the chair",
    "says": "Already back: <em>could</em>, <em>might</em>, <em>should</em> — no change."
   },
   {
    "move": "Tap your temple",
    "says": "Guess-<em>must</em> stays: <em>She said he must be lying.</em>"
   },
   {
    "move": "Point down firmly at the desk",
    "says": "Rule-<em>must</em> → <em>had to</em>: <em>He told her she had to renew it.</em>"
   },
   {
    "move": "Give a thumbs-up to the room",
    "says": "Still true now? Keep the original modal."
   }
  ]
 },
 "t8l2s3": {
  "thai": "ในภาษาทางการ เราตัด if ออกแล้วยกกริยาขึ้นไว้หน้าประธานได้ แต่ทำได้แค่สามคำเท่านั้น คือ should, were และ had แบบแรก Should you need help, call the office. (หากท่านต้องการความช่วยเหลือ โปรดติดต่อสำนักงาน) ใช้กับความเป็นไปได้ที่ไม่ค่อยเกิดแต่ยังเกิดได้ ตามด้วยกริยารูปเดิม และจับคู่กับประโยคคำสั่งหรือ will แบบที่สอง Were the plan to fail, we would lose the deposit. ใช้กับเรื่องสมมติ จับคู่กับ would แบบที่สาม Had they acted sooner, nothing would have been lost. ใช้กับอดีตที่ไม่ได้เกิดขึ้นจริง จับคู่กับ would have รูปนี้ฟังเป็นทางการ เหมาะกับจดหมาย รายงาน และสัญญา ไม่เหมาะกับแชตกับเพื่อน ข้อห้ามสำคัญคือห้ามย่อ not ต้องเขียน Had they not acted ไม่ใช่ Hadn't they acted ซึ่งจะกลายเป็นคำถาม และห้ามใช้ Did, Was หรือ Would ขึ้นต้นแทน if",
  "analogy": {
   "title": "Three VIP wristbands",
   "text": "At the concert's VIP door, only three wristbands get you in without a ticket called <em>if</em>: <strong>should</strong>, <strong>were</strong> and <strong>had</strong>. <em>Did</em>, <em>was</em> and <em>would</em> get turned away every time. And there's a dress code inside: formal only, so no contractions — <em>Had they not</em>, never <s>Hadn't they</s>. That's why you see this door in letters and contracts, not in your LINE chats."
  },
  "trap": "Students treat this like making a question and invert any auxiliary: <s>Did the council act sooner, …</s>, <s>Was the contract to be terminated, …</s>, or contract the negative, <s>Hadn't the surveyor noticed, …</s>. They also mix the patterns: <s>Were the ministry decide</s>, <s>Should the ministry to decide</s>. Dodge: check the wristband and its partner — <em>should</em> + bare verb → <em>will</em>; <em>were</em> + <em>to</em> + verb (or <em>Were I you</em>) → <em>would</em>; <em>had</em> + participle → <em>would have</em>.",
  "map": {
   "center": "If-less conditionals",
   "branches": [
    {
     "label": "Should",
     "leaves": [
      "Should you need help, …",
      "+ verb → will / imperative"
     ]
    },
    {
     "label": "Were",
     "leaves": [
      "Were the plan to fail, …",
      "+ to + verb / Were I you → would"
     ]
    },
    {
     "label": "Had",
     "leaves": [
      "Had they acted sooner, …",
      "+ -ed → would have -ed"
     ]
    },
    {
     "label": "Only these 3",
     "leaves": [
      "Did / Was / Would ✗",
      "never if + inversion"
     ]
    },
    {
     "label": "Negative",
     "leaves": [
      "Had they not acted ✓",
      "Hadn't they acted ✗"
     ]
    },
    {
     "label": "Register",
     "leaves": [
      "formal letters, contracts",
      "chat with friends → if"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Goes Formal",
   "panels": [
    {
     "who": "Ploy",
     "text": "Bot, if you see Mint, tell her I'm at the canteen."
    },
    {
     "who": "Nong Bot",
     "text": "Should I see Mint, I will inform her without delay. Beep."
    },
    {
     "who": "Ploy",
     "text": "…Okay, that's very formal for noodles, but fine."
    },
    {
     "who": "Nong Bot",
     "text": "<s>Did Mint arrive</s>, I would tell her! <s>Hadn't she come</s>, I would wait! Beep beep!"
    },
    {
     "who": "Mint",
     "text": "Was that a question? Did I arrive or not?"
    },
    {
     "who": "T.Chris",
     "text": "Bot, only <em>should</em>, <em>were</em> and <em>had</em> can replace <em>if</em> — and no <em>hadn't</em>. Try: “Had she not come, I would have waited.” And save it for letters, not noodles."
    }
   ],
   "moral": "Only <em>should</em>, <em>were</em> and <em>had</em> can take the place of <em>if</em>, never with a contracted <em>not</em> — and it's a formal move for letters, reports and contracts."
  },
  "chant": {
   "title": "Three Words at the Door",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Three words only open the formal door —",
    "<em>Should</em>, <em>were</em>, <em>had</em> — and not one more!",
    "<em>Should you need help</em>, call — I'll be there;",
    "<em>Were it to rain</em>, we'd move the fair;",
    "<em>Had we known</em>, we'd have come on time —",
    "Verb goes first, and the <em>if</em> resigns!",
    "No <s>hadn't</s> in front — write <em>had we not</em>;",
    "<em>Did</em> and <em>was</em>? They don't get a spot!"
   ]
  },
  "moves": [
   {
    "move": "Hold up three fingers",
    "says": "Only three: <em>should</em>, <em>were</em>, <em>had</em>."
   },
   {
    "move": "Brush “if” off the desk with the back of your hand, then point to the front",
    "says": "Drop <em>if</em>, verb first: <em>Had they acted sooner, …</em>"
   },
   {
    "move": "Sit up straight and fix an imaginary tie",
    "says": "Formal: letters, reports, contracts."
   },
   {
    "move": "Wag one finger",
    "says": "No contraction: <em>Had they not acted</em> — <s>Hadn't they acted</s>."
   }
  ]
 },
 "t8l3s1": {
  "thai": "จริงๆ แล้วภาษาอังกฤษไม่มี future tense เพราะ will เป็น modal เหมือน can และ must คือไม่เติม -s ตามด้วยกริยารูปเดิมไม่มี to และใช้ซ้อนกับ modal ตัวอื่นไม่ได้ (will can ผิด ต้องใช้ will be able to) ความหมายของ will คือ “การคาดการณ์” ซึ่งไม่จำเป็นต้องเป็นอนาคตเสมอไป มีสี่แบบ: คาดเดาเรื่องตอนนี้ That'll be the courier. (นั่นคงเป็นคนส่งของแน่ๆ) ความจริงทั่วไป Oil will float on water. นิสัยที่ทำเป็นประจำ He will leave his boots in the hallway. และอนาคต The results will be published in June. วิธีเช็กคือถามว่า “เมื่อไร” ถ้าคำตอบคือ “ทุกครั้ง” หรือ “ตอนนี้เลย” แสดงว่าไม่ใช่อนาคต ด้วยเหตุนี้ If it will rain tomorrow จึงผิด เพราะ if ทำหน้าที่สมมติอยู่แล้ว ต้องใช้ If it rains tomorrow ยกเว้น will ที่แปลว่า “ยินยอม” เช่น If you'll wait here a moment",
  "analogy": {
   "title": "Mint the predictor",
   "text": "Mint predicts everything. Someone knocks: <em>“That'll be the Grab rider.”</em> (now). Ice cream in the sun: <em>“It'll melt.”</em> (always). Fah again: <em>“She will leave her charger on the desk.”</em> (a habit). The canteen: <em>“They'll run out of mango sticky rice by noon.”</em> (the future). One word, one job — <strong>predicting</strong>. Only one of those four predictions is about later."
  },
  "trap": "Thai <em>จะ</em> feels like a future marker, so students treat <em>will</em> as a future tense. They write <s>If it will rain tomorrow</s> because of “ถ้าพรุ่งนี้ฝนจะตก”, and read <em>the polymer will creep</em> as a forecast instead of a property. Tests offer “it refers to events that have not happened yet” as the reason <em>will</em> is a modal. Dodge: ask “when?” — if the answer is <em>now</em>, <em>always</em> or <em>whenever</em>, it isn't future.",
  "map": {
   "center": "Will = prediction",
   "branches": [
    {
     "label": "It's a modal",
     "leaves": [
      "no -s, no to",
      "will can ✗ → will be able"
     ]
    },
    {
     "label": "Now",
     "leaves": [
      "That'll be the courier",
      "a deduction, like must"
     ]
    },
    {
     "label": "Always",
     "leaves": [
      "Oil will float on water",
      "generic: every time"
     ]
    },
    {
     "label": "Habit",
     "leaves": [
      "He will leave his boots…",
      "stressed WILL = complaint"
     ]
    },
    {
     "label": "Future",
     "leaves": [
      "published in June",
      "only 1 reading of 4"
     ]
    },
    {
     "label": "After if",
     "leaves": [
      "if it rains ✓ (not will)",
      "If you'll wait = willing"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Waits for the Future",
   "panels": [
    {
     "who": "Pim",
     "text": "(ding-dong!) That'll be the Grab rider with our food."
    },
    {
     "who": "Nong Bot",
     "text": "ERROR! <em>Will</em> = FUTURE. The rider arrives LATER. Do not open the door! Beep!"
    },
    {
     "who": "Pim",
     "text": "Bot, he's ringing the bell right now. Our noodles are getting cold."
    },
    {
     "who": "Nong Bot",
     "text": "Also: “Oil will float on water.” I will check this next year. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>will</em> means “I predict” — about now, about always, or about later. “That'll be the rider” is a guess about right now."
    }
   ],
   "moral": "<em>Will</em> is a modal of prediction, not a future tense: it can predict now, always, a habit — or the future."
  },
  "chant": {
   "title": "Will Predicts",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Will</em> is a modal, not a tense —",
    "It says “I predict!” — now that makes sense.",
    "Knock at the door? <em>That'll be Grab</em> — that's now!",
    "<em>Oil will float</em> — always, anyhow.",
    "<em>He will leave his socks</em> — a habit, you see;",
    "<em>Results out in June</em> — the future, finally!",
    "<em>If it rains</em> tomorrow — no <s>will</s> in there:",
    "The <em>if</em> is already doing its share."
   ]
  },
  "moves": [
   {
    "move": "Point at the classroom door",
    "says": "Now: <em>That'll be the Grab rider.</em>"
   },
   {
    "move": "Draw a big circle in the air",
    "says": "Always: <em>Oil will float on water.</em>"
   },
   {
    "move": "Roll your eyes and fold your arms",
    "says": "Habit, complaint: <em>He WILL leave his socks there!</em>"
   },
   {
    "move": "Point forward over the desk",
    "says": "Future: <em>The results will be out in June.</em>"
   },
   {
    "move": "Chop your hand down after saying “if”",
    "says": "<em>If it rains</em> — <s>if it will rain</s>."
   }
  ]
 },
 "t8l3s2": {
  "thai": "modal บางตัวกำลัง “หดหาย” และเหลือที่ใช้แคบลงเรื่อยๆ shall เหลือสองที่ คือในสัญญาหรือภาษากฎหมาย เช่น The tenant shall pay the rent monthly. (ผู้เช่าต้องชำระค่าเช่ารายเดือน) และในคำถามเสนอหรือชวน เช่น Shall I open the window? / Shall we start? ส่วน need และ dare เป็นได้ทั้ง modal และกริยาธรรมดา แบบ modal ใช้ได้เฉพาะในประโยคปฏิเสธและคำถาม (หรือกับ hardly) ไม่เติม -s ไม่ใช้ do และตามด้วยกริยารูปเดิมไม่มี to เช่น He needn't wait. / Need I say more? แบบกริยาธรรมดาใช้ do เติม -s และมี to เช่น He doesn't need to wait. สำหรับ need ห้ามผสมสองแบบ เช่น He doesn't need wait หรือ He needs not wait (แต่ dare ผสมได้ เช่น She doesn't dare ask ถูกต้อง) ส่วน ought to เป็น modal ตัวเดียวที่ยังมี to ติดอยู่ รูปคำถาม Ought I to go? ถูกต้องแต่ฟังแข็งมาก คนส่วนใหญ่จึงใช้ Should I go? แทน",
  "analogy": {
   "title": "The old shops on your soi",
   "text": "Every soi used to have a little family grocery. Now the 7-Eleven sells almost everything, and the old shops survive by doing one thing well. <em>Shall</em> now only does contracts and <em>“Shall we…?”</em>. Modal <em>need</em> and <em>dare</em> only open for negatives and questions. And <em>ought to</em> is slowly losing customers to <em>should</em> — the 7-Eleven next door."
  },
  "trap": "The half-and-half mix. Thai has no <em>do</em> or <em>-s</em> system, so learners grab one piece from each pattern: <s>He doesn't need wait</s>, <s>She needs not have signed</s>, <s>Does the tribunal ought to</s>, <s>Ought the tribunal consider</s>. Tests hide one mixed form in a spot-the-error item. Dodge: for <em>need</em>, keep one pattern whole — modal = no <em>do</em>, no <em>-s</em>, no <em>to</em>; verb = <em>do</em> + <em>-s</em> + <em>to</em>. And <em>ought</em> always keeps its <em>to</em>.",
  "map": {
   "center": "The shrinking edges",
   "branches": [
    {
     "label": "shall",
     "leaves": [
      "contracts: shall pay",
      "Shall I…? Shall we…?"
     ]
    },
    {
     "label": "need (modal)",
     "leaves": [
      "needn't wait · Need I…?",
      "no do, no -s, no to"
     ]
    },
    {
     "label": "need (verb)",
     "leaves": [
      "doesn't need to wait",
      "Do I need to…?"
     ]
    },
    {
     "label": "dare",
     "leaves": [
      "daren't ask (modal)",
      "doesn't dare to ask (verb)"
     ]
    },
    {
     "label": "ought to",
     "leaves": [
      "keeps its to",
      "Ought I to…? → Should I?"
     ]
    },
    {
     "label": "Don't mix",
     "leaves": [
      "doesn't need wait ✗",
      "needs not wait ✗"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Signs a Contract",
   "panels": [
    {
     "who": "Fah",
     "text": "Bot, are you coming to the canteen?"
    },
    {
     "who": "Nong Bot",
     "text": "The Robot shall proceed to the canteen for the duration of lunch. Beep."
    },
    {
     "who": "Fah",
     "text": "Why do you sound like a rental contract?"
    },
    {
     "who": "Nong Bot",
     "text": "Correction: <s>Fah doesn't need wait for me.</s> <s>Fah needs not worry.</s> Beep!"
    },
    {
     "who": "Mint",
     "text": "Bot, you just mixed two grammars in two sentences."
    },
    {
     "who": "T.Chris",
     "text": "Bot: say “Shall we go?” — save the other <em>shall</em> for contracts. And pick one <em>need</em>: “You needn't wait” or “You don't need to wait.”"
    }
   ],
   "moral": "<em>Shall</em>, modal <em>need</em>, <em>dare</em> and <em>ought to</em> live in narrow corners — use them there, and never mix the modal and ordinary-verb patterns of <em>need</em>."
  },
  "chant": {
   "title": "The Shrinking Edges",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Shall</em> in contracts, <em>“Shall we go?”</em> —",
    "Two little corners, that's all it knows.",
    "<em>Needn't wait</em>, <em>need I ask</em>? — modal style:",
    "No <em>do</em>, no <em>-s</em>, no <em>to</em> all the while.",
    "<em>Doesn't need to</em>? That's the verb, with <em>do</em> and <em>to</em> —",
    "Mix the two? <s>doesn't need wait</s> — no, not you!",
    "<em>Ought</em> keeps its <em>to</em>: <em>“Ought I to go?”</em>",
    "Sounds too stiff? Say <em>“Should I?”</em> — and go!"
   ]
  },
  "moves": [
   {
    "move": "Sign an imaginary contract with a flourish",
    "says": "Contracts: <em>The tenant shall pay the rent.</em>"
   },
   {
    "move": "Open your palm toward a friend",
    "says": "An offer: <em>Shall we start?</em>"
   },
   {
    "move": "Shake your head and wave one hand gently",
    "says": "No need: <em>You needn't wait</em> — or <em>You don't need to wait.</em>"
   },
   {
    "move": "Push two fists apart",
    "says": "Don't mix: <s>doesn't need wait</s>, <s>needs not wait</s>."
   },
   {
    "move": "Pinch two fingers together like you're holding a tiny “to”",
    "says": "<em>Ought</em> keeps its <em>to</em>: <em>Ought I to go?</em>"
   }
  ]
 },
 "t8l3s3": {
  "thai": "ในบทความหนึ่งเรื่อง ความมั่นใจของผู้เขียนไม่ได้คงที่ แต่เปลี่ยนไปทีละประโยค ผู้อ่านต้องตามให้ทันว่าความมั่นใจขึ้นหรือลงตรงไหน และเป็นความมั่นใจของใคร ให้ดูสี่อย่าง: หนึ่ง modal อยู่ระดับไหน สอง เป็นความเห็นของใคร สาม มีคำลดน้ำหนักหรือคำเน้นไหม เช่น may well, arguably, clearly และสี่ ประโยคที่ไม่มี modal เลย ซึ่งแสดงความมั่นใจสูงสุดของผู้เขียน ข้อผิดพลาดที่พบบ่อยคือคิดว่าความมั่นใจของคนที่ถูกอ้างถึงเป็นของผู้เขียน เช่น Ministers insist the scheme will cut waiting times. (รัฐมนตรียืนกรานว่าโครงการจะลดเวลารอคิวได้) คำว่า insist หรือ claim บอกเป็นนัยว่าผู้เขียนเว้นระยะ ไม่ได้รับรองข้อความนั้นเอง ส่วน show, find หรือ establish แสดงว่าผู้เขียนยอมรับ และเมื่อเจอ may well … but … จุดยืนที่แท้จริงของผู้เขียนอยู่หลัง but",
  "analogy": {
   "title": "The sports-day group chat",
   "text": "In the sports-day chat, Pim posts: <em>“Nan says Red will definitely win.”</em> That's Nan's confidence, not Pim's. Then Pim writes: <em>“Red may well win the relay, but Blue has the best sprinters.”</em> Her real view is after <em>but</em>. Finally: <em>“Blue won all three races last year.”</em> No <em>maybe</em>, no <em>says</em> — that's Pim at full volume. Reading a passage is following one voice through the chat."
  },
  "trap": "Students rate the loudest modal on the page as the writer's view. Thai readers often skim for keywords like <em>must</em> and <em>will</em> and skip “ใครพูด” — who says it. Tests ask where the writer's commitment is highest and offer a quoted <em>must</em> as bait, while the real answer is a plain sentence with no modal. Dodge: before you rate any modal, underline who owns it — if <em>say</em>, <em>claim</em> or <em>insist</em> owns it, it isn't the writer's.",
  "map": {
   "center": "Tracking stance",
   "branches": [
    {
     "label": "The rung",
     "leaves": [
      "must > will > should",
      "may / might = weak middle"
     ]
    },
    {
     "label": "Whose voice?",
     "leaves": [
      "Ministers say… = theirs",
      "no source = the writer"
     ]
    },
    {
     "label": "Reporting verb",
     "leaves": [
      "claim / insist = distance",
      "show / find = endorse"
     ]
    },
    {
     "label": "Hedge & boost",
     "leaves": [
      "may well, arguably",
      "clearly, undoubtedly"
     ]
    },
    {
     "label": "No modal",
     "leaves": [
      "bare fact = full strength",
      "e.g. “not in dispute”"
     ]
    },
    {
     "label": "Concession",
     "leaves": [
      "may well…, but…",
      "position = the but-clause"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Reads the News",
   "panels": [
    {
     "who": "Ploy",
     "text": "Bot, what does the writer think about the new phone ban?"
    },
    {
     "who": "Nong Bot",
     "text": "“Teachers <em>insist</em> it <em>will</em> raise grades.” So the writer is 100% sure! Beep!"
    },
    {
     "who": "Ploy",
     "text": "But the next line says “Grades have not changed.”"
    },
    {
     "who": "Nong Bot",
     "text": "That sentence has no modal. Zero confidence! Ignoring it. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Bot, it's backwards. <em>Insist</em> is the teachers' confidence, not the writer's. A sentence with no modal is the writer at full volume."
    }
   ],
   "moral": "Ask whose certainty it is: reported confidence belongs to the source, and a plain statement with no modal is the writer's strongest voice."
  },
  "chant": {
   "title": "Who's So Sure?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Who's so sure? Find who's speaking —",
    "“Ministers say…” — that's their thinking!",
    "<em>Claim</em>, <em>insist</em> — the writer steps away;",
    "<em>Show</em>, <em>find</em>, <em>establish</em> — the writer stays.",
    "“<em>May well</em>… <em>but</em>…” — the point's after <em>but</em>:",
    "Grant it, then block it — that's the writer's cut.",
    "Track it up, track it down, line by line —",
    "No modal at all? The writer's loudest sign!"
   ]
  },
  "moves": [
   {
    "move": "Slide one hand up and down like a volume slider as you read",
    "says": "Up for <em>must</em>, down for <em>might</em> — track it line by line."
   },
   {
    "move": "Point away to someone across the room",
    "says": "<em>Ministers say…</em> = their confidence, not the writer's."
   },
   {
    "move": "Lean back with both palms out",
    "says": "<em>Claim</em>, <em>insist</em> = the writer keeps her distance."
   },
   {
    "move": "Open one hand, then chop down with the other",
    "says": "<em>May well…</em> (grant it), <em>but…</em> (the real point)."
   },
   {
    "move": "Press a fist to your chest",
    "says": "No modal at all = the writer at full strength."
   }
  ]
 },
 "t9l1s1": {
  "thai": "ในประโยคบอกเล่า have to, must และ need to แปลว่า “ต้อง” เหมือนกัน แต่พอเป็นประโยคปฏิเสธ ความหมายจะแยกเป็นสองฝั่งตรงข้ามกันเลย ฝั่งแรกคือ don't have to, don't need to และ needn't แปลว่า “ไม่จำเป็นต้อง” จะทำหรือไม่ทำก็ได้ อีกฝั่งคือ mustn't, can't และ aren't allowed to แปลว่า “ห้าม” เพราะมีกฎไม่ให้ทำ เช่น You don't have to bring a coat. (ไม่ต้องเอาเสื้อโค้ทมาก็ได้) แต่ You mustn't feed the animals. (ห้ามให้อาหารสัตว์) คนไทยมักคิดว่า “ไม่ต้อง” คือ mustn't ซึ่งทำให้ความหมายกลับด้าน วิธีเช็กง่าย ๆ คือลองเติม …but you can if you like ถ้าฟังขึ้นแปลว่าเป็น “ไม่จำเป็น” นอกจากนี้ ในประโยคบอกเล่า must มักใช้เมื่อผู้พูดเป็นเจ้าของหรือรับรองข้อบังคับนั้นเอง เช่น เราตั้งใจเอง ครูหรือพ่อแม่เป็นคนสั่ง หรือป้ายประกาศของโรงเรียน ส่วน have to ใช้เมื่อผู้พูดเล่าต่อข้อบังคับที่มาจากที่อื่น เช่น กฎที่คนอื่นตั้ง หรือสถานการณ์บังคับ นี่เป็นแนวโน้มในภาษาอังกฤษแบบบริติช ไม่ใช่กฎตายตัว ถ้าไม่แน่ใจ ใช้ have to ได้เสมอ",
  "analogy": {
   "title": "Green sign, red sign",
   "text": "At the canteen there are two signs. Green: <em>You don't have to pay cash — phone pay is fine.</em> That's a free choice. Red: <em>You mustn't take trays out of the canteen.</em> That's a rule. Without <em>not</em>, <em>have to</em> and <em>must</em> say the same thing. Add <em>not</em> and they split: <em>don't have to</em> stays green, <em>mustn't</em> turns red."
  },
  "trap": "In Thai, ไม่ต้อง looks like the simple negative of ต้อง, so students turn <em>must</em> into <em>mustn't</em> for “no need” — but <em>mustn't</em> = ห้าม. Tests put <em>mustn't</em> next to <em>don't have to</em> where the thing is still allowed (the canteen still takes cash). And <em>needn't</em> looks like <em>mustn't</em>, but it is the free-choice twin. Dodge: add “…but you can if you like”. If it makes sense, choose <em>don't have to</em> / <em>needn't</em>.",
  "map": {
   "center": "Have to / must / need",
   "branches": [
    {
     "label": "Positive",
     "leaves": [
      "have to = passing a rule on",
      "must = I say so (me, teacher, notice)",
      "need to = it's necessary"
     ]
    },
    {
     "label": "No obligation",
     "leaves": [
      "don't have to",
      "don't need to / needn't",
      "= your choice"
     ]
    },
    {
     "label": "Not allowed",
     "leaves": [
      "mustn't",
      "can't / aren't allowed to",
      "= a rule against it"
     ]
    },
    {
     "label": "Saying no",
     "leaves": [
      "Can I pay by card?",
      "→ Sorry, you can't."
     ]
    },
    {
     "label": "The test",
     "leaves": [
      "+ but you can if you like",
      "OK → no obligation",
      "nonsense → not allowed"
     ]
    },
    {
     "label": "Look-alikes",
     "leaves": [
      "needn't ≠ mustn't",
      "needn't = don't have to"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Bans the Presents",
   "panels": [
    {
     "who": "Ploy",
     "text": "Bot, tell everyone about my party on Saturday. They don't have to bring anything!"
    },
    {
     "who": "Nong Bot",
     "text": "ATTENTION, CLASS! You <s>mustn't</s> bring anything to Ploy's party! Beep!"
    },
    {
     "who": "Fah",
     "text": "(hiding a wrapped box behind her back) Oh no… are presents against the rules now?"
    },
    {
     "who": "T.Chris",
     "text": "Bot, Ploy meant <em>don't have to</em> — it's a free choice. <em>Mustn't</em> makes presents illegal."
    },
    {
     "who": "Nong Bot",
     "text": "Correction: you <em>needn't</em> bring anything… but you can if you like. Beep!"
    }
   ],
   "moral": "<em>Don't have to</em> / <em>needn't</em> = your choice; <em>mustn't</em> / <em>can't</em> = there's a rule against it."
  },
  "chant": {
   "title": "Add a Not, Watch It Split",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Have to</em>, <em>need to</em>, <em>must</em> — you gotta, no fuss!",
    "Add a <em>not</em> and it splits in two — watch this!",
    "<em>Don't have to</em>, <em>needn't</em> — chill, it's free,",
    "Do it or don't, it's up to me!",
    "<em>Mustn't</em>, <em>can't</em>, <em>not allowed</em> — STOP!",
    "Rule says no, and the rule's on top!",
    "<em>Needn't</em> looks like <em>mustn't</em> — don't be fooled:",
    "<em>Needn't</em> means free, <em>mustn't</em> means rule!"
   ]
  },
  "moves": [
   {
    "move": "Shrug both shoulders, palms up",
    "says": "<em>Don't have to</em>, <em>needn't</em> — it's your choice!"
   },
   {
    "move": "Cross your forearms in a big X",
    "says": "<em>Mustn't</em>, <em>can't</em>, <em>aren't allowed to</em> — there's a rule!"
   },
   {
    "move": "Point at someone else, then tap your own chest",
    "says": "<em>Have to</em> = I'm passing on a rule… <em>must</em> = I say so (me, a teacher, the school notice)!"
   },
   {
    "move": "Raise your hand to ask, then shake your head",
    "says": "Can I pay by card? — Sorry, you <em>can't</em>."
   },
   {
    "move": "Open palm, wave it forward like an invitation",
    "says": "“…but you can if you like” — only fits the shrug!"
   }
  ]
 },
 "t9l1s2": {
  "thai": "should และ ought to ใช้ให้คำแนะนำ แปลว่า “ควรจะ” ผู้ฟังยังเลือกได้ว่าจะทำหรือไม่ทำ ought to มีความหมายเหมือน should แต่ใช้น้อยกว่า ส่วน had better (ย่อเป็น 'd better) แรงกว่า ใช้เตือนเรื่องสถานการณ์ตอนนี้ว่า “ทำเถอะ ไม่อย่างนั้นจะมีปัญหา” เช่น You'd better hurry, or you'll miss the bus. (รีบหน่อยดีกว่า ไม่งั้นจะตกรถ) แม้ had จะดูเป็นรูปอดีต แต่ had better พูดถึงตอนนี้หรืออนาคตอันใกล้ และ 'd ในที่นี้ย่อมาจาก had ไม่ใช่ would ระวังเรื่องรูปด้วย ought ต้องมี to เสมอ เช่น You ought to ask. ส่วน should และ had better ไม่มี to ตามหลัง รูปปฏิเสธของ had better คือ had better not ไม่ใช่ hadn't better ถ้าเป็นกฎจริง ๆ ให้ใช้ must หรือ have to แทน",
  "analogy": {
   "title": "The battery warning",
   "text": "Your phone is on 50% at lunch. A friend says, <em>You should charge it tonight</em> — a friendly tip; you can ignore it. Now it's on 3% and you're about to take the BTS to meet friends at Siam: <em>You'd better charge it now, or you won't be able to find them!</em> That's the red pop-up: do it now, or there's trouble."
  },
  "trap": "Students see <em>had</em> and think the advice is about the past, or hear <em>'d</em> and think <em>would</em>. Then they build the negative like other verbs (<s>hadn't better</s>) and drop the <em>to</em> from <em>ought</em> (<s>ought ask</s>). Tests use exactly these in gap and spot-the-error items. Dodge: say it in full in your head — <em>had better not</em> + verb, <em>ought to</em> + verb. If the full form sounds wrong, the option is wrong.",
  "map": {
   "center": "Giving advice",
   "branches": [
    {
     "label": "should",
     "leaves": [
      "= it's a good idea",
      "listener can say no",
      "neg: shouldn't"
     ]
    },
    {
     "label": "ought to",
     "leaves": [
      "= should (less common)",
      "always keeps its to",
      "neg: ought not to"
     ]
    },
    {
     "label": "had better",
     "leaves": [
      "'d = had, not would",
      "a warning about now",
      "or something bad happens"
     ]
    },
    {
     "label": "Form traps",
     "leaves": [
      "'d better not + verb",
      "✗ hadn't better",
      "✗ ought ask"
     ]
    },
    {
     "label": "Advice ≠ rule",
     "leaves": [
      "must / have to = a rule",
      "should = you can say no"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Reads the Past",
   "panels": [
    {
     "who": "Mint",
     "text": "My phone's on 2%, and I'm meeting Fah at Siam in an hour."
    },
    {
     "who": "Pim",
     "text": "You'd better charge it now, or you won't find her!"
    },
    {
     "who": "Nong Bot",
     "text": "Beep! <em>Had</em> is past tense. So Mint charged it yesterday. No action needed!"
    },
    {
     "who": "Mint",
     "text": "(staring at a black screen) …Bot, it's dead."
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>had better</em> looks past, but it's a warning about <strong>now</strong>: charge it, or there'll be a problem."
    }
   ],
   "moral": "<em>'d better</em> = <em>had better</em>: strong advice about now or soon — do it, or something bad will happen."
  },
  "chant": {
   "title": "Tip or Warning",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Should</em>, <em>should</em> — a friendly tip,",
    "<em>Ought TO</em>, <em>ought TO</em> — don't let the <em>to</em> slip!",
    "<em>'d better</em>, <em>'d better</em> — the warning light's red,",
    "It's HAD, not WOULD — get it in your head!",
    "Looks like the past, but it's NOW, right now,",
    "<em>Had better NOT</em> — the <em>not</em> goes after, that's how!"
   ]
  },
  "moves": [
   {
    "move": "Give a gentle thumbs-up to a friend",
    "says": "You <em>should</em> try it — it's a good idea."
   },
   {
    "move": "Pinch your fingers and pull an invisible string",
    "says": "<em>Ought</em>… <em>TO</em> — never cut the <em>to</em>!"
   },
   {
    "move": "Open and close both hands fast, like a flashing light",
    "says": "You<em>'d better</em> hurry — or there's trouble!"
   },
   {
    "move": "Point at the floor in front of you, not over your shoulder",
    "says": "<em>Had better</em> = now, not the past."
   },
   {
    "move": "Wag your finger after you say 'better'",
    "says": "You'd better… <em>NOT</em> — the <em>not</em> comes last."
   }
  ]
 },
 "t9l1s3": {
  "thai": "บทนี้เป็นเรื่องรูปประโยค แบ่งได้เป็นสองกลุ่ม กลุ่มแรกไม่มี to ตามหลัง ได้แก่ must, mustn't, needn't, should, can't และ had better เช่น We needn't go. ไม่ใช่ needn't to go กลุ่มที่สองต้องมี to ได้แก่ have to, need to, ought to และ be allowed to เวลาทำประโยคคำถาม have to และ need to ทำตัวเหมือนกริยาธรรมดา จึงต้องใช้ do หรือ does ขึ้นต้น เช่น Does everybody have to pay? (ทุกคนต้องจ่ายไหม) ห้ามพูดว่า Has everybody to pay? ส่วน be allowed to ต้องมีทั้ง be และ to เช่น We aren't allowed to use our phones in class. คนไทยมักพูดผิดเป็น We don't allowed to เพราะภาษาไทยไม่มีคำที่ทำหน้าที่แบบ be หรือ do และจำไว้ว่าคู่ของ needn't ในประโยคบอกเล่าคือ need to ไม่ใช่ need เฉย ๆ",
  "analogy": {
   "title": "Two lines at the canteen",
   "text": "Picture two lines at the canteen. Line 1 — <em>must</em>, <em>mustn't</em>, <em>needn't</em>, <em>should</em>, <em>can't</em>, <em>had better</em> — walks straight to the food: no ticket, no <em>to</em>. Line 2 — <em>have to</em>, <em>need to</em>, <em>ought to</em>, <em>be allowed to</em> — must show a <em>to</em> ticket every time. And when someone in Line 2 asks a question, <em>do</em> or <em>does</em> has to go first and hold the tray."
  },
  "trap": "Thai has no <em>to</em> and no <em>do</em> in questions (ต้องจ่ายไหม), so students guess: <s>needn't to bring</s>, <s>Must we to wear…?</s>, <s>Has everybody to pay?</s>, <s>We don't allowed to</s>. Tests give four almost identical options with one tiny link added or missing. Dodge: put the modal in Line 1 (no <em>to</em>) or Line 2 (keep <em>to</em>); then check that <em>have to</em> questions start with <em>do</em>/<em>does</em> and <em>allowed</em> has <em>be</em> in front.",
  "map": {
   "center": "To or no to?",
   "branches": [
    {
     "label": "No to",
     "leaves": [
      "must / mustn't",
      "needn't / should / can't",
      "had better"
     ]
    },
    {
     "label": "Keep to",
     "leaves": [
      "have to / need to",
      "ought to",
      "be allowed to"
     ]
    },
    {
     "label": "Questions",
     "leaves": [
      "Do we have to pay?",
      "Should we leave now?",
      "✗ Has she to pay?"
     ]
    },
    {
     "label": "Pairs",
     "leaves": [
      "need to ↔ needn't",
      "need to ↔ don't need to",
      "✗ You need go"
     ]
    },
    {
     "label": "Allowed",
     "leaves": [
      "be + allowed + to",
      "aren't allowed to use",
      "✗ don't allowed to"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot at the Pool",
   "panels": [
    {
     "who": "Nan",
     "text": "Bot, can you ask the lifeguard about the rules?"
    },
    {
     "who": "Nong Bot",
     "text": "Excuse me! <s>Must we to wear</s> a cap? <s>Has everybody to pay?</s> <s>We don't allowed to</s> run? Beep!"
    },
    {
     "who": "Lifeguard",
     "text": "Er… sorry, what language is that?"
    },
    {
     "who": "T.Chris",
     "text": "Try this, Bot: <em>Do we have to wear a cap? Does everybody have to pay? Are we allowed to run?</em>"
    },
    {
     "who": "Lifeguard",
     "text": "Yes, yes — and no, you <em>aren't allowed to</em> run!"
    }
   ],
   "moral": "<em>Must</em> takes no <em>to</em>; <em>have to</em> makes questions with <em>do</em>/<em>does</em>; <em>allowed</em> needs <em>be</em> + <em>to</em>."
  },
  "chant": {
   "title": "Cut the To, Keep the To",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Must</em>, <em>mustn't</em>, <em>needn't</em> — no <em>to</em>, go!",
    "<em>Should</em>, <em>can't</em>, <em>had better</em> — no <em>to</em>, no!",
    "<em>Have to</em>, <em>need to</em>, <em>ought to</em> — keep the <em>to</em>,",
    "<em>Be allowed to</em> — <em>be</em> and <em>to</em>, that's two!",
    "Questions with <em>have to</em>? Call <em>do</em> or <em>does</em>:",
    "“<em>Does</em> she <em>have to</em> pay?” — “Yes, she does!”"
   ]
  },
  "moves": [
   {
    "move": "Chop the desk with a flat hand",
    "says": "<em>must</em>, <em>needn't</em>, <em>should</em>, <em>can't</em>, <em>had better</em> — cut the <em>to</em>!"
   },
   {
    "move": "Hook two fingers together like a chain",
    "says": "<em>have to</em>, <em>need to</em>, <em>ought to</em> — keep the <em>to</em> hooked on!"
   },
   {
    "move": "Raise your hand, then tap the desk twice",
    "says": "<em>Do</em> we have to pay? <em>Does</em> she need to book?"
   },
   {
    "move": "Hold up one finger, then a second",
    "says": "<em>Be</em>… allowed <em>to</em> — two pieces, every time!"
   }
  ]
 },
 "t9l2s1": {
  "thai": "must ไม่มีรูปอดีต ถ้าจะพูดว่า “ต้อง” ในอดีต ให้ใช้ had to หรือ needed to เช่น The card machine was broken, so we had to pay in cash. (เครื่องรูดบัตรเสีย เราเลยต้องจ่ายเป็นเงินสด) และ had to บอกว่าเรื่องนั้นเกิดขึ้นจริง ถ้า “ไม่จำเป็นต้อง” ในอดีต ให้ใช้ didn't have to หรือ didn't need to คำถามและประโยคปฏิเสธต้องใช้ did เช่น Did you have to pay? ห้ามใช้ hadn't to หรือ Had you to pay? คนไทยชินกับการบอกอดีตด้วยคำบอกเวลา เช่น “เมื่อวานต้องไปธนาคาร” จึงมักพูดว่า We have to go to the bank yesterday ซึ่งผิด เพราะภาษาอังกฤษต้องเปลี่ยนกริยาเป็นรูปอดีตด้วย ที่ถูกคือ We had to go to the bank yesterday และอย่าสับสนกับ must have + V3 ซึ่งเป็นการคาดเดาเรื่องในอดีต ไม่ใช่ข้อบังคับ",
  "analogy": {
   "title": "The photo album",
   "text": "Your phone gallery has a <em>Yesterday</em> album. You can't move today's selfie into it just by typing “yesterday” in the caption — the photo itself has to be from yesterday. The verb is the photo. <em>Have to</em> lives in today's album; <em>had to</em> lives in the past album. And <em>must</em>? It has no past album at all."
  },
  "trap": "Thai shows the past with time words (เมื่อวาน), not with the verb, so students write <s>We have to go to the bank yesterday</s> or <s>I must show my card yesterday</s>. They also copy <em>can</em>/<em>must</em> questions: <s>Had you to pay?</s>, <s>hadn't to</s>. Tests also put <em>must have helped</em> (a guess) next to <em>had to help</em>. Dodge: see a past time word? The verb must be <em>had to</em>, <em>did … have to</em> or <em>didn't have to</em>.",
  "map": {
   "center": "Past obligation",
   "branches": [
    {
     "label": "It was needed",
     "leaves": [
      "had to + verb",
      "needed to + verb",
      "= it really happened"
     ]
    },
    {
     "label": "Not needed",
     "leaves": [
      "didn't have to",
      "didn't need to",
      "= no obligation then"
     ]
    },
    {
     "label": "Questions",
     "leaves": [
      "Did you have to pay?",
      "✗ Had you to pay?",
      "✗ We hadn't to wait"
     ]
    },
    {
     "label": "No past must",
     "leaves": [
      "✗ musted",
      "✗ I must go yesterday",
      "→ I had to go yesterday"
     ]
    },
    {
     "label": "Don't confuse",
     "leaves": [
      "had to = it happened",
      "must have = a guess"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot's Time Machine",
   "panels": [
    {
     "who": "Fah",
     "text": "Bot, why didn't you come to the party last night?"
    },
    {
     "who": "Nong Bot",
     "text": "I <s>must charge</s> my battery last night! Beep!"
    },
    {
     "who": "Nong Bot",
     "text": "Error… <em>must</em> + <em>last night</em> does not compute… opening time machine… rebooting!"
    },
    {
     "who": "T.Chris",
     "text": "Stop spinning, Bot! <em>Must</em> has no past. Say: <em>I <strong>had to</strong> charge my battery last night.</em>"
    },
    {
     "who": "Fah",
     "text": "And next time, charge it before the party — then you <em>won't have to</em> miss it!"
    }
   ],
   "moral": "<em>Must</em> has no past: use <em>had to</em>, and make questions and negatives with <em>did</em> (<em>Did you have to…? / didn't have to</em>)."
  },
  "chant": {
   "title": "Must Can't Time-Travel",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Must</em> can't travel back in time,",
    "So use <em>had to</em> — that's the line!",
    "Yesterday? Last night? Change the verb —",
    "<s>I have to … yesterday</s>? That's absurd!",
    "<em>Did</em> you <em>have to</em>? No, I <em>didn't have to</em>,",
    "Never <s>hadn't to</s> — that's not what we do!"
   ]
  },
  "moves": [
   {
    "move": "Throw your thumb back over your shoulder",
    "says": "Past rule? <em>had to</em> — and it really happened."
   },
   {
    "move": "Hand on your chest, shake your head",
    "says": "<em>Must</em>? No past for me!"
   },
   {
    "move": "Shrug, with your thumb pointing back",
    "says": "<em>didn't have to</em> — it wasn't necessary back then."
   },
   {
    "move": "Knock on the desk like a door",
    "says": "<em>Did</em> you have to pay? — Yes, I did."
   },
   {
    "move": "Point at the time word, then at the verb",
    "says": "“Yesterday” isn't enough — change the verb!"
   }
  ]
 },
 "t9l2s2": {
  "thai": "ถ้าจะบอกว่าเรื่องไหน “ถูกห้าม” ในอดีต ให้ใช้ wasn't allowed to หรือ weren't allowed to เช่น I wasn't allowed to go to the shops alone when I was seven. (ตอนเจ็ดขวบ ฉันไม่ได้รับอนุญาตให้ไปร้านค้าคนเดียว) couldn't ก็ใช้ได้ แต่ couldn't มีสองความหมาย คือ “ไม่ได้รับอนุญาต” กับ “ทำไม่ได้” ต้องดูบริบทหรือเหตุผลในประโยคว่าหมายถึงอะไร ส่วน mustn't ไม่มีรูปอดีต จึงใช้กับกฎในอดีตไม่ได้ ถ้าได้รับอนุญาต ให้พูดว่า was allowed to และอย่าลืม was เพราะ I allowed to ผิด และฟังเหมือนว่า “ฉันเป็นคนอนุญาต” สุดท้ายอย่าสับสนระหว่าง wasn't allowed to ซึ่งแปลว่า “ถูกห้าม” กับ didn't have to ซึ่งแปลว่า “ไม่จำเป็นต้อง” แม้ทั้งสองจะเป็นรูปอดีตปฏิเสธเหมือนกันก็ตาม",
  "analogy": {
   "title": "The old school sign",
   "text": "Remember the sign in your primary school: <em>You mustn't run in the corridor.</em> That sign is still on the old wall, in the present. But you're not seven any more. When you tell the story today, the words change: <em>We weren't allowed to run</em> or <em>We couldn't run.</em> <em>Mustn't</em> stays on the wall; it can't walk into your story."
  },
  "trap": "Thai ห้าม has no tense, so students keep <em>mustn't</em> for last year's rules (<s>We mustn't use phones last year</s>) or drop <em>was</em> (<s>I allowed to go</s>). Tests also put <em>didn't have to</em> next to <em>weren't allowed to</em>: both past, both negative, opposite meanings. Dodge: ask “Was there a rule against it?” Yes → <em>wasn't allowed to</em> / <em>couldn't</em>. “Was it just not necessary?” → <em>didn't have to</em>.",
  "map": {
   "center": "Past rules",
   "branches": [
    {
     "label": "Forbidden",
     "leaves": [
      "wasn't allowed to",
      "weren't allowed to",
      "couldn't"
     ]
    },
    {
     "label": "Permitted",
     "leaves": [
      "was / were allowed to",
      "✗ I allowed to go"
     ]
    },
    {
     "label": "couldn't = 2",
     "leaves": [
      "not allowed (a rule)",
      "not possible (no way)",
      "the reason decides"
     ]
    },
    {
     "label": "mustn't",
     "leaves": [
      "now / future only",
      "✗ no past form"
     ]
    },
    {
     "label": "≠ didn't have to",
     "leaves": [
      "wasn't allowed = banned",
      "didn't have to = free"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Calls the Parents",
   "panels": [
    {
     "who": "Mai",
     "text": "I couldn't go to Pim's birthday party on Saturday."
    },
    {
     "who": "Nong Bot",
     "text": "ALERT! Mai's parents banned her! Writing a complaint to her parents now! Beep!"
    },
    {
     "who": "Mai",
     "text": "No, Bot! My parents said yes. I had a fever."
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>couldn't</em> can mean <em>wasn't allowed to</em> <strong>or</strong> <em>wasn't possible</em>. Mai gave no reason, so you can't tell yet."
    },
    {
     "who": "Nong Bot",
     "text": "Update: Mai <em>couldn't</em> go because she was ill. Not possible — not a rule. Complaint deleted. Beep."
    }
   ],
   "moral": "For a past ban, use <em>wasn't allowed to</em> or <em>couldn't</em> — but <em>couldn't</em> can also mean “not possible”, so read the reason."
  },
  "chant": {
   "title": "Back Then, Banned Then",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Mustn't</em> stays in the here and now,",
    "For the past, let me show you how:",
    "<em>Wasn't allowed</em>, <em>weren't allowed</em> — banned back then,",
    "<em>Couldn't</em> works too — but check again:",
    "<em>Couldn't</em> — a rule, or just no way?",
    "Read the reason, then you can say!",
    "<em>Didn't have to</em>? That's free, not banned!"
   ]
  },
  "moves": [
   {
    "move": "Cross your arms, then throw your thumb over your shoulder",
    "says": "<em>Wasn't allowed to</em> — banned, back then."
   },
   {
    "move": "Arms crossed, then open them with palms up",
    "says": "<em>Couldn't</em> — a rule? Or just not possible?"
   },
   {
    "move": "Point at the classroom wall, then tap your wrist",
    "says": "<em>Mustn't</em> = now only — it stays on the wall."
   },
   {
    "move": "Shrug with your thumb pointing back",
    "says": "<em>Didn't have to</em> = free, not banned."
   },
   {
    "move": "Thumbs-up, then hold up one finger for 'was'",
    "says": "<em>Was allowed to</em> — don't forget the <em>was</em>!"
   }
  ]
 },
 "t9l2s3": {
  "thai": "needn't have + V3 (กริยาช่องที่ 3) แปลว่า “ทำไปแล้ว แต่จริง ๆ ไม่จำเป็นต้องทำเลย” เช่น You needn't have bought me a present. But thank you! (ไม่เห็นต้องซื้อของขวัญมาให้เลย แต่ก็ขอบคุณนะ) ส่วน didn't need to + V1 บอกแค่ว่า “ไม่จำเป็น” ไม่ได้บอกว่าทำหรือไม่ได้ทำ ดังนั้นถ้าเรื่องนั้นไม่ได้เกิดขึ้น ให้ใช้ didn't need to ห้ามใช้ needn't have ถ้าจะบอกว่าในอดีตควรทำแต่ไม่ได้ทำ ใช้ should have หรือ ought to have + V3 เช่น I should have been more careful with my money. (น่าจะระวังเรื่องเงินมากกว่านี้) และ shouldn't have + V3 แปลว่า “ไม่น่าทำเลย” คือทำไปแล้วและรู้สึกเสียใจ ระวังรูปด้วย หลัง modal ต้องตามด้วย have + V3 เสมอ และ ought ต้องมี to",
  "analogy": {
   "title": "Three friends, one gate",
   "text": "Three friends think they're late for school. Ploy takes a Grab, but the gate stays open for another twenty minutes: <em>I needn't have taken a Grab</em> — she did, and it wasn't necessary. Fah checks the time and doesn't rush: <em>I didn't need to rush.</em> Mint misses the bus and arrives late: <em>I should have left earlier.</em>"
  },
  "trap": "Thai ไม่จำเป็นต้อง covers both, so students choose <em>needn't have</em> for something that never happened. Tests hide the clue in the next sentence (“so we didn't”, “I paid for them myself”), and that clue rules out <em>needn't have</em>. Others write <s>ought have</s> or <s>shouldn't had</s>. Dodge: ask “Did it happen?” Yes, but it wasn't necessary → <em>needn't have done</em>. No → <em>didn't need to do</em>.",
  "map": {
   "center": "Looking back",
   "branches": [
    {
     "label": "needn't have V3",
     "leaves": [
      "you DID it…",
      "…but there was no need",
      "needn't have bought"
     ]
    },
    {
     "label": "didn't need to",
     "leaves": [
      "= not necessary",
      "happened? not said",
      "use it if it didn't"
     ]
    },
    {
     "label": "should have V3",
     "leaves": [
      "a good idea…",
      "…but you didn't do it",
      "= ought to have V3"
     ]
    },
    {
     "label": "shouldn't have",
     "leaves": [
      "you did it…",
      "…and it was a mistake"
     ]
    },
    {
     "label": "Form",
     "leaves": [
      "modal + have + V3",
      "✗ ought have gone",
      "✗ shouldn't had"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Returns the Gifts",
   "panels": [
    {
     "who": "Nan",
     "text": "Bot, it's my birthday tomorrow — but please don't buy me anything!"
    },
    {
     "who": "Nong Bot",
     "text": "(next day, carrying twelve boxes) Happy birthday! Beep!"
    },
    {
     "who": "Nan",
     "text": "Bot! You <em>needn't have bought</em> me all this. But… thank you!"
    },
    {
     "who": "Nong Bot",
     "text": "Error! <em>Needn't</em> = not necessary. So I will take them all back to the shop. Beep!"
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>needn't have bought</em> means you <strong>did</strong> buy them, and it wasn't necessary. It's a thank-you, not an order."
    }
   ],
   "moral": "<em>Needn't have done</em> = it happened, but it wasn't needed; <em>didn't need to do</em> = not needed (maybe it never happened); <em>should have done</em> = a good idea you missed."
  },
  "chant": {
   "title": "Looking Back",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Needn't have bought</em> it — but I did, oh well!",
    "<em>Didn't need to buy</em> it — did I? Can't tell!",
    "<em>Should have saved</em> my money — but I didn't, oops!",
    "<em>Shouldn't have bought</em> that fourth pair of shoes!",
    "Modal, <em>have</em>, V3 — that's the chain,",
    "<em>Ought TO have</em>, <em>ought TO have</em> — say it again!"
   ]
  },
  "moves": [
   {
    "move": "Hold an imaginary gift, then tap your forehead lightly",
    "says": "You <em>needn't have bought</em> it — but you did!"
   },
   {
    "move": "Shrug with palms up and eyebrows raised",
    "says": "<em>Didn't need to</em> — did it happen? It doesn't say."
   },
   {
    "move": "Point back over your shoulder, then shake your head slowly",
    "says": "I <em>should have</em> left earlier… but I didn't."
   },
   {
    "move": "Cover your mouth and wince",
    "says": "I <em>shouldn't have</em> eaten all of it — I did, and it was a mistake."
   },
   {
    "move": "Tap the desk three times",
    "says": "Modal — <em>have</em> — V3!"
   }
  ]
 },
 "t9l3s1": {
  "thai": "เวลาคาดเดาเรื่องตอนนี้ ให้เลือกคำตามระดับความมั่นใจ must แปลว่า “ต้อง…แน่ ๆ” คือมั่นใจประมาณ 90% ว่าจริง เช่น She lives in an enormous house. She must be rich. (เธอต้องรวยแน่ ๆ) may, might และ could แปลว่า “อาจจะ” คือเป็นไปได้ประมาณ 50% และใช้เดาเรื่องในอนาคตได้ด้วย เช่น It might rain later. ส่วน can't แปลว่า “ไม่มีทาง…แน่ ๆ” คือมั่นใจประมาณ 90% ว่าไม่จริง คนไทยมักใช้ mustn't เป็นคำตรงข้ามของ must แต่ mustn't แปลว่า “ห้าม” ใช้กับกฎ ไม่ใช้กับการคาดเดา ถ้าจะบอกว่า “อาจจะไม่” ให้ใช้ may not หรือ might not (mightn't) ห้ามใช้ couldn't เพราะ couldn't มั่นใจพอ ๆ กับ can't ถ้าเดาสิ่งที่กำลังเกิดขึ้นอยู่ ให้ใช้ be + V-ing เช่น She must be working.",
  "analogy": {
   "title": "The battery bar",
   "text": "Think of a phone battery bar as your certainty. Nearly full = <em>must</em>: “Her shoes are by the door. She <em>must</em> be home.” Half full = <em>may</em> / <em>might</em> / <em>could</em>: “She <em>might</em> be at 7-Eleven.” Nearly full, but for <strong>no</strong> = <em>can't</em>: “She <em>can't</em> be asleep — I can hear her singing.” <em>Mustn't</em> isn't on the battery at all; it lives on the school rules board."
  },
  "trap": "Because ต้อง and ไม่ต้อง feel like a pair, students use <em>mustn't</em> as the opposite of <em>must</em> and write <s>He mustn't be at home</s> for a 90% “no”. Tests also offer <em>couldn't</em> as a soft “maybe not”, but in a guess it is as strong as <em>can't</em>. Dodge: rate the evidence: 90% yes → <em>must</em>; 50% → <em>may</em> / <em>might</em> / <em>could</em> (maybe not: <em>may not</em> / <em>might not</em>); 90% no → <em>can't</em>.",
  "map": {
   "center": "Guessing about now",
   "branches": [
    {
     "label": "90% yes",
     "leaves": [
      "must be",
      "She must be rich."
     ]
    },
    {
     "label": "50% maybe",
     "leaves": [
      "may / might / could",
      "not: may not / mightn't",
      "It might rain later."
     ]
    },
    {
     "label": "90% no",
     "leaves": [
      "can't be (couldn't be)",
      "He can't be 30!"
     ]
    },
    {
     "label": "Traps",
     "leaves": [
      "mustn't = rules only",
      "couldn't = can't, not 50%"
     ]
    },
    {
     "label": "Happening now",
     "leaves": [
      "must be + -ing",
      "She must be working."
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Makes a Law",
   "panels": [
    {
     "who": "Fah",
     "text": "Is that Nan's car outside? She's only fifteen!"
    },
    {
     "who": "Nong Bot",
     "text": "Beep! Calculating… That <s>mustn't</s> be her car!"
    },
    {
     "who": "Pim",
     "text": "Wait — is there a new law? Who banned her car?"
    },
    {
     "who": "T.Chris",
     "text": "No law, Bot. You're 90% sure it's <strong>not</strong> hers: <em>It <strong>can't</strong> be her car.</em> <em>Mustn't</em> is for rules, not guesses."
    },
    {
     "who": "Nong Bot",
     "text": "Recalculating… It <em>can't</em> be Nan's. It <em>must</em> be her dad's! Beep!"
    }
   ],
   "moral": "In a guess, <em>must</em> = 90% yes, <em>may</em> / <em>might</em> / <em>could</em> = 50%, <em>can't</em> = 90% no — never <em>mustn't</em>."
  },
  "chant": {
   "title": "How Sure Are You?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Ninety yes? Say <em>MUST</em> — she must be rich,",
    "Fifty-fifty? <em>MIGHT</em>, <em>MAY</em>, <em>COULD</em> — make the switch!",
    "Maybe not? <em>MIGHT NOT</em> — that's understood,",
    "<em>COULDN'T</em> isn't fifty — it's a no for good!",
    "Ninety no? Say <em>CAN'T</em> — that can't be true,",
    "<em>MUSTN'T</em> is a rule, not a guess for you!",
    "Happening now? <em>Must be</em> + <em>-ing</em>:",
    "She <em>must be typing</em> — hear the keyboard ring!"
   ]
  },
  "moves": [
   {
    "move": "Raise your hand high above your head",
    "says": "Ninety per cent yes: She <em>must</em> be rich!"
   },
   {
    "move": "Hold your hand flat at chest height and wobble it",
    "says": "Fifty-fifty: It <em>might</em> rain later."
   },
   {
    "move": "Put your hand low near the desk and shake your head",
    "says": "Ninety per cent no: That <em>can't</em> be true!"
   },
   {
    "move": "Cross your arms in an X, then uncross them and shake your head",
    "says": "<em>Mustn't</em>? That's a rule, not a guess."
   },
   {
    "move": "Wiggle your fingers like you're typing",
    "says": "Right now: she <em>must be typing</em>."
   }
  ]
 },
 "t9l3s2": {
  "thai": "ถ้าจะคาดเดาเรื่องที่เกิดขึ้นในอดีต ให้ใช้คำเดิมแล้วเติม have + V3 must have + V3 แปลว่า “ต้อง…ไปแล้วแน่ ๆ” คือมั่นใจประมาณ 90% ว่าเกิดขึ้น เช่น He hasn't got any money left. He must have spent it all. (เขาต้องใช้เงินหมดไปแล้วแน่ ๆ) may, might หรือ could have + V3 แปลว่า “อาจจะ…ไปแล้ว” ประมาณ 50% ถ้า “อาจจะยังไม่ได้…” ให้ใช้ may not have หรือ might not have ส่วน can't have หรือ couldn't have + V3 แปลว่า “ไม่มีทาง…แน่ ๆ” คือมั่นใจ 90% ว่าไม่ได้เกิดขึ้น ห้ามใช้ mustn't have ถ้าเป็นเรื่องที่ทำต่อเนื่องอยู่ช่วงหนึ่งในอดีต ใช้ have been + V-ing เช่น You must have been talking for hours! จำไว้ว่าหลักฐานอยู่ตรงหน้าเราตอนนี้ แต่เหตุการณ์ที่เราเดาเกิดขึ้นก่อนหน้านั้น",
  "analogy": {
   "title": "The snack detective",
   "text": "You get home and find crumbs on the sofa and an empty snack box. You didn't see anything happen, so you become a detective. Strong clue for: “My brother <em>must have eaten</em> it — the crumbs lead to his room.” Weak clue: “The cat <em>might have</em> knocked it over.” Strong clue against: “Mum <em>can't have eaten</em> it — she's been at work all day.” The clue is now; the crime was earlier."
  },
  "trap": "Thai คง… has no past form, so students write <s>He must walked home</s>, use <em>must be walking</em> for something already finished, or <s>mustn't have</s> for a 90% “no”. Tests show evidence now and an event earlier (muddy shoes, a busy line last night) and offer <em>must be</em> + <em>-ing</em> as the near miss. Dodge: ask “When did it happen?” Earlier → modal + <em>have</em> + V3; then rate the evidence: 90% / 50% / 90% not.",
  "map": {
   "center": "Guessing the past",
   "branches": [
    {
     "label": "90% it happened",
     "leaves": [
      "must have + V3",
      "He must have walked."
     ]
    },
    {
     "label": "50% maybe",
     "leaves": [
      "may / might / could have",
      "not: might not have",
      "mightn't have = might not"
     ]
    },
    {
     "label": "90% it didn't",
     "leaves": [
      "can't have + V3",
      "couldn't have = same",
      "✗ mustn't have"
     ]
    },
    {
     "label": "Went on a while",
     "leaves": [
      "have been + -ing",
      "must have been talking"
     ]
    },
    {
     "label": "Evidence first",
     "leaves": [
      "for → must have",
      "unsure → might have",
      "against → can't have"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot and the Muddy Shoes",
   "panels": [
    {
     "who": "Ploy",
     "text": "Mai's trainers are covered in mud — and the park path is the only muddy way home."
    },
    {
     "who": "Nong Bot",
     "text": "Scanning… Mai <s>must be walking</s> through the park! Beep!"
    },
    {
     "who": "Mai",
     "text": "(on the sofa, eating noodles) I'm right here, Bot. I'm not walking anywhere."
    },
    {
     "who": "T.Chris",
     "text": "The mud is now; the walk was earlier. Say: <em>She <strong>must have walked</strong> through the park.</em>"
    },
    {
     "who": "Nong Bot",
     "text": "Update: Mai <em>must have walked</em> through the park… and she <em>might have</em> jumped in a puddle too! Beep!"
    }
   ],
   "moral": "Evidence now, event earlier → modal + <em>have</em> + V3: <em>must have</em> (90% yes), <em>might have</em> (50%), <em>can't have</em> (90% no)."
  },
  "chant": {
   "title": "Clue Now, Story Then",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "The clue is now, but the story's past,",
    "Add <em>HAVE</em> + V3 — and make it last!",
    "<em>Must have done</em> it? Ninety yes,",
    "<em>Might have done</em> it? Fifty — guess!",
    "<em>Can't have</em>, <em>couldn't have</em> — ninety no,",
    "<em>Mustn't have</em>? Not for guesses — no, no, no!",
    "Going on for hours? <em>Have been</em> + <em>-ing</em>:",
    "<em>Must have been talking</em> — ring, ring, ring!"
   ]
  },
  "moves": [
   {
    "move": "Point down at the desk, then throw your thumb over your shoulder",
    "says": "Clue now… event before: <em>have</em> + V3!"
   },
   {
    "move": "Hand high, thumb pointing back",
    "says": "She <em>must have</em> walked home."
   },
   {
    "move": "Hand at chest height, wobbling",
    "says": "I <em>might have</em> left them at school."
   },
   {
    "move": "Hand low, shake your head",
    "says": "He <em>can't have</em> studied much."
   },
   {
    "move": "Hold an imaginary phone to your ear for a long time",
    "says": "You <em>must have been talking</em> for hours!"
   }
  ]
 },
 "t9l3s3": {
  "thai": "การคาดเดาเรื่องในอดีตมีโครงสร้างตายตัวสามส่วน เรียงเหมือนโซ่ คือ modal + have + V3 (กริยาช่องที่ 3) เช่น might have gone หรือ can't have known คำว่า have จะไม่เปลี่ยนรูปเลย แม้ประธานเป็น he หรือ she ก็ไม่ใช้ has หรือ had และกริยาตัวสุดท้ายต้องเป็นช่องที่ 3 ไม่ใช่ช่องที่ 2 เช่น must have seen ไม่ใช่ must have saw ข้อผิดพลาดที่พบบ่อยคือลืม have เช่น might seen และถ้ากริยาหลักคือ have ต้องมีทั้งสองตัว เช่น You must have had a good rest. ถ้าเป็นประโยค passive ใช้ modal + have been + V3 เช่น This map must have been drawn by hand. (แผนที่นี้ต้องถูกวาดด้วยมือแน่ ๆ) นอกจากรูปถูกแล้วต้องเลือกคำให้ถูกความหมายด้วย ถ้าหลักฐานบอกว่าไม่ใช่ ต้องใช้ can't have ไม่ใช่ must have หรือ mustn't have",
  "analogy": {
   "title": "The three-car train",
   "text": "A past guess is a BTS train with its cars always in the same order. Car 1 is the modal (<em>must</em>, <em>might</em>, <em>can't</em>). Car 2 is <em>have</em> — never <em>has</em>, never <em>had</em>. The last car is the V3 (<em>seen</em>, <em>gone</em>, <em>made</em>). Passive? Add a <em>been</em> car before the last one. Drop a car or swap two, and the train doesn't leave the station."
  },
  "trap": "Thai verbs don't change form, so students write <s>might left</s>, <s>must has made</s>, <s>must have saw</s>, or forget the second <em>have</em>: <s>You must have a good rest last night</s> (→ <em>must have had</em>). Tests also hide a perfect chain with the wrong modal: <s>It must have been Dad</s> when Dad was at work all day. Dodge: tap the three links — modal, <em>have</em>, V3 — then ask “Does the evidence say yes or no?”",
  "map": {
   "center": "The past-guess chain",
   "branches": [
    {
     "label": "The chain",
     "leaves": [
      "modal + have + V3",
      "might have gone",
      "can't have known"
     ]
    },
    {
     "label": "have stays",
     "leaves": [
      "✗ must has made",
      "✗ must had heard",
      "even after he / she"
     ]
    },
    {
     "label": "V3, not V2",
     "leaves": [
      "must have seen, ✗ saw",
      "have gone, ✗ have went",
      "✗ might seen (no have)"
     ]
    },
    {
     "label": "Longer chains",
     "leaves": [
      "passive: have been + V3",
      "ongoing: have been + -ing",
      "must have been drawn"
     ]
    },
    {
     "label": "have + had",
     "leaves": [
      "must have had a rest",
      "both haves needed"
     ]
    },
    {
     "label": "Right modal",
     "leaves": [
      "evidence no → can't have",
      "✗ mustn't have"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot's Broken Chain",
   "panels": [
    {
     "who": "Mint",
     "text": "The whole house smells of chocolate!"
    },
    {
     "who": "Nong Bot",
     "text": "Analysis: Dad <s>must has made</s> a cake. No — Dad <s>must made</s>… ERROR!"
    },
    {
     "who": "T.Chris",
     "text": "Three links, Bot: modal, <em>have</em>, V3. <em>Dad must have made a cake.</em>"
    },
    {
     "who": "Nong Bot",
     "text": "Got it! The last piece vanished ten minutes ago, but Dad left an hour ago. He <em>can't have eaten</em> it. And Mint has chocolate on her face — Mint <em>must have eaten</em> it!"
    },
    {
     "who": "Mint",
     "text": "(wiping her face) …No comment."
    }
   ],
   "moral": "Every past guess is modal + <em>have</em> + V3 — and the evidence chooses the modal: <em>must have</em> for yes, <em>can't have</em> for no."
  },
  "chant": {
   "title": "Link, Link, Link",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Modal, <em>HAVE</em>, V3 — link, link, link!",
    "Never <em>HAS</em> and never <em>HAD</em> — stop and think!",
    "<em>Must have SEEN</em>, not saw; <em>might have GONE</em>, not went,",
    "Drop the <em>HAVE</em> and the whole chain's bent!",
    "Passive? <em>Must have BEEN made</em> — add the <em>been</em>,",
    "Evidence says no? <em>Can't have</em> — keep it clean!"
   ]
  },
  "moves": [
   {
    "move": "Tap your fist on the desk three times",
    "says": "Modal — <em>have</em> — V3!"
   },
   {
    "move": "Hold up two fingers, then shake your head",
    "says": "<em>have</em> — never <em>has</em>, never <em>had</em>!"
   },
   {
    "move": "Link the fingers of both hands and pull tight",
    "says": "<em>might have left</em> — no broken links!"
   },
   {
    "move": "Tap the desk four times, slower on the third",
    "says": "Passive: <em>must have <strong>been</strong> drawn</em>."
   },
   {
    "move": "Thumbs down at the evidence",
    "says": "The evidence says no → <em>can't have</em>."
   }
  ]
 },
 "t10l1s1": {
  "thai": "ก่อนเลือกคำตอบในบทสนทนา ให้ถามตัวเองก่อนว่า “ใครเป็นคนทำ” ถ้าผู้ฟังเป็นคนทำ คือการขอร้อง เช่น Could you…? หรือ Would you mind + -ing? ถ้าผู้พูดทำให้ คือการเสนอความช่วยเหลือ เช่น Shall I…? หรือ Would you like me to…? ถ้าผู้พูดอยากทำเองแต่ขออนุญาตก่อน ใช้ Can I…? หรือ Do you mind if I…? คำตอบของแต่ละแบบก็ไม่เหมือนกัน รับข้อเสนอใช้ That's kind of you. อนุญาตใช้ Go ahead. ระวัง Would you mind…? เพราะ mind แปลว่า “รู้สึกรำคาญหรือขัดข้อง” ถ้าตอบ Not at all. แปลว่า “ไม่ขัดข้องเลย ยินดี” แต่ถ้าตอบ Yes, I would. แปลว่าปฏิเสธ เช่น Would you mind closing the door? — Not at all. (ได้เลย ไม่มีปัญหา)",
  "analogy": {
   "title": "The class party group chat",
   "text": "You are planning a class party on LINE. <em>Could you bring the ice?</em> puts the job on your friend. <em>Shall I bring the ice?</em> puts it on you, as a favour. <em>Can I bring my cousin?</em> is your action too, but you need the group's OK. Before you reply to any message, look at <strong>whose name is next to the job</strong>."
  },
  "trap": "Thai learners hear <em>Would you mind…?</em> and answer <em>Yes, of course!</em> because yes feels polite — but it says the job bothers you. TCAS also puts an offer reply after a request: <em>That's kind of you</em> can only follow an offer. And one small word flips the job: <em>Would you like me to…?</em> is an offer, <em>Would you like to…?</em> an invitation. Dodge: before you choose, say who does the action.",
  "map": {
   "center": "Who does the action?",
   "branches": [
    {
     "label": "Request",
     "leaves": [
      "Could you…? → listener",
      "Would you mind + -ing?",
      "→ Sure / Not at all"
     ]
    },
    {
     "label": "Offer",
     "leaves": [
      "Shall I…? → speaker",
      "Would you like me to…?",
      "→ That's kind of you"
     ]
    },
    {
     "label": "Permission",
     "leaves": [
      "Can I…? / Is it OK if I…?",
      "Do you mind if I…?",
      "→ Go ahead"
     ]
    },
    {
     "label": "Invitation",
     "leaves": [
      "Would you like to…?",
      "→ I'd love to (, but…)"
     ]
    },
    {
     "label": "Mind trap",
     "leaves": [
      "Not at all = yes, happily",
      "Yes, I would = no"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Minds",
   "panels": [
    {
     "who": "Mint",
     "text": "Nong Bot, would you mind turning the music down? We're studying."
    },
    {
     "who": "Nong Bot",
     "text": "Yes, of course! Beep! (the music stays loud)"
    },
    {
     "who": "Mint",
     "text": "So turn it down!"
    },
    {
     "who": "Nong Bot",
     "text": "But you asked if I <em>mind</em>. I do mind. I love this song."
    },
    {
     "who": "T.Chris",
     "text": "Bot, <em>yes</em> means it bothers you. If you're happy to help, say <em>Not at all</em> — and then do it."
    },
    {
     "who": "Nong Bot",
     "text": "Not at all! (music off) Beep."
    }
   ],
   "moral": "With <em>Would you mind…?</em>, <em>Not at all</em> means yes, happily — and <em>Yes, I would</em> means no."
  },
  "chant": {
   "title": "Who Does It?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Could you</em>? <em>Would you mind</em>? The job's for you,",
    "<em>Shall I</em>? <em>Would you like me to</em>? I'll do it, it's true.",
    "<em>Can I</em>? <em>Could I</em>? I'll do it — is that OK?",
    "Answer <em>Go ahead</em>, and I'm on my way.",
    "<em>Would you mind</em>? means: does it bother you?",
    "<em>Not at all</em>! — that's a yes coming through!",
    "So who does the action? Check before you choose,",
    "Read the line that follows, and you'll never lose."
   ]
  },
  "moves": [
   {
    "move": "Point both index fingers at your partner",
    "says": "<em>Could you…? / Would you mind + -ing?</em> — you do it"
   },
   {
    "move": "Tap your own chest with both hands",
    "says": "<em>Shall I…? / Would you like me to…?</em> — I'll do it for you"
   },
   {
    "move": "Tap your chest, then raise your eyebrows and open one palm",
    "says": "<em>Can I…? / Do you mind if I…?</em> — I do it, if that's OK"
   },
   {
    "move": "Shake your head slowly while smiling and giving a thumbs-up",
    "says": "<em>Not at all!</em> — no problem, happy to help"
   }
  ]
 },
 "t10l1s2": {
  "thai": "คำแนะนำมีหลายระดับความแรง เสนอแนะเบา ๆ ใช้ You could… หรือ Why don't you…? แนะนำจริงจังใช้ You should… หรือ If I were you, I'd… ส่วนการเตือนแรง ๆ ใช้ You'd better… ซึ่งมักตามด้วย or และผลเสีย เช่น You'd better leave now, or you'll miss the bus. (รีบไปเถอะ ไม่อย่างนั้นจะตกรถ) แต่ should have + V3 พูดถึงอดีต แปลว่า “น่าจะทำ แต่ไม่ได้ทำ” จึงเป็นการตำหนิหรือเสียดาย ใช้ตอบคำถาม What should I do? ไม่ได้ เพราะแก้อดีตไม่ได้แล้ว ให้ดูบรรทัดถัดไป ถ้าอีกฝ่ายตอบว่า I'll do it tonight แปลว่าช่องว่างเป็นคำแนะนำสำหรับอนาคต ถ้าตอบว่า It's too late now แปลว่าช่องว่างมองย้อนอดีต ยกเว้นตอนได้รับของขวัญ Oh, you shouldn't have! แปลว่า “ไม่ต้องลำบากเลย ขอบคุณมาก”",
  "analogy": {
   "title": "The phone battery",
   "text": "Your battery is at 30%, and a friend says <em>You could charge it at the café</em> — gentle. At 5%: <em>You'd better charge it now, or it'll die on the BTS</em> — a warning. When the screen is already black: <em>You should have charged it</em> — true, but no help at all. Only the first two can still <strong>save the phone</strong>."
  },
  "trap": "Thai shows time with words like แล้ว, not with the verb, so <em>should have</em> can feel like extra-strong advice. It isn't: it looks back. TCAS puts <em>You should have…</em> before a reply such as <em>Good idea, I'll do it tonight</em>, and puts gentle advice before <em>…or you'll miss the bus</em>. Dodge: read the reply — <em>I'll…</em> means forward advice, <em>too late</em> means <em>should have</em>, <em>or…</em> means a warning.",
  "map": {
   "center": "Advice: how strong?",
   "branches": [
    {
     "label": "Gentle",
     "leaves": [
      "You could…",
      "Why don't you…?"
     ]
    },
    {
     "label": "Firm",
     "leaves": [
      "You should…",
      "If I were you, I'd…"
     ]
    },
    {
     "label": "Warning",
     "leaves": [
      "You'd better… or …",
      "→ act now!"
     ]
    },
    {
     "label": "Look back",
     "leaves": [
      "should have → past mistake",
      "≠ answer to What now?"
     ]
    },
    {
     "label": "Replies",
     "leaves": [
      "I'll do it → forward",
      "Too late now → looked back"
     ]
    },
    {
     "label": "Gift phrase",
     "leaves": [
      "Oh, you shouldn't have!",
      "= thank you!"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot's Time Machine",
   "panels": [
    {
     "who": "Mai",
     "text": "Bot, I've got a maths test tomorrow and I haven't started. What should I do?"
    },
    {
     "who": "Nong Bot",
     "text": "You should have studied last week. Beep!"
    },
    {
     "who": "Mai",
     "text": "I know! But I can't go back to last week!"
    },
    {
     "who": "Nong Bot",
     "text": "Then you should have built a time machine. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Bot, she's asking about tonight. Try: <em>You'd better start now, or you'll be up all night.</em>"
    },
    {
     "who": "Nong Bot",
     "text": "You'd better start now! …Should I have said that first? Beep."
    }
   ],
   "moral": "<em>Should have</em> only looks back; to answer <em>What should I do?</em>, give advice for now or later."
  },
  "chant": {
   "title": "Forward or Back?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>You could</em>, <em>why don't you</em> — soft and slow,",
    "<em>You should</em>, <em>if I were you</em> — now you know.",
    "<em>You'd better</em>… <em>or</em>! That's the warning bell:",
    "Do it now, or it won't go well.",
    "<em>Should have</em> looks back — the chance has gone,",
    "It can't tell a friend what to do from now on.",
    "Hear <em>I'll do it</em>? The advice looked ahead.",
    "Hear <em>too late</em>? It was <em>should have</em> instead."
   ]
  },
  "moves": [
   {
    "move": "Hold your palm low and wave it gently",
    "says": "<em>You could… / Why don't you…?</em> — a soft suggestion"
   },
   {
    "move": "Raise your palm to shoulder height",
    "says": "<em>You should…</em> — firm advice"
   },
   {
    "move": "Hold your hand up high like a stop sign, then tap your wrist",
    "says": "<em>You'd better… or…</em> — a warning: now!"
   },
   {
    "move": "Point your thumb back over your shoulder",
    "says": "<em>should have</em> — looking back; it's too late now"
   },
   {
    "move": "Hug an imaginary present to your chest",
    "says": "<em>Oh, you shouldn't have!</em> — thank you!"
   }
  ]
 },
 "t10l1s3": {
  "thai": "ในบทสนทนา must และ can't มักไม่ได้หมายถึงกฎ แต่เป็นการคาดเดาว่าผู้พูดมั่นใจแค่ไหน must be = เกือบแน่ใจว่าใช่ might be หรือ could be = อาจจะใช่ can't be = เกือบแน่ใจว่าไม่ใช่ ถ้าเดาเรื่องในอดีตให้เติม have + V3 เช่น She must have forgotten. (เธอต้องลืมแน่ ๆ) ห้ามใช้ mustn't กับการคาดเดา เพราะ mustn't คือการห้าม ส่วน should have ส่วนใหญ่หมายถึง “ควรทำแต่ไม่ได้ทำ” หรือ “น่าจะ…แล้วตามที่คาดไว้” เช่น The parcel should have arrived by now. ไม่ใช่การเดาจากหลักฐานแบบ must have ให้ดูหลักฐานในบรรทัดก่อนและหลังช่องว่าง ถ้าหลักฐานชัดมาก เช่น มีชื่อเขียนอยู่บนฝาขวด ใช้ must ถ้าหลักฐานค้าน ใช้ can't นอกจากนี้ stance marker ต้องเข้ากับระดับความมั่นใจด้วย เช่น Apparently = ได้ยินมาจากคนอื่น As far as I know = เท่าที่ฉันรู้",
  "analogy": {
   "title": "The Grab driver's dot",
   "text": "Your Grab app shows the car outside your soi: <em>He must be here.</em> The map shows him stuck on Sukhumvit: <em>He can't be here yet.</em> The dot has frozen: <em>He might be close.</em> The order has vanished: <em>He must have cancelled.</em> Your guess follows <strong>what the screen shows</strong>, never what you hope."
  },
  "trap": "Thai learners meet <em>must</em> as a rule first, so the negative they reach for is <em>mustn't</em> — but the opposite of a <em>must</em> guess is <em>can't</em>. TCAS also puts <em>should have</em> beside <em>must have</em>: the same shape, but it usually says what was right to do (or what was expected), not what the evidence shows. And it pairs strong evidence with a weak <em>might</em>. Dodge: underline the evidence, rate it strong yes, maybe or strong no, then choose.",
  "map": {
   "center": "How sure is she?",
   "branches": [
    {
     "label": "Sure: yes",
     "leaves": [
      "must be",
      "must have + V3",
      "You must be joking!"
     ]
    },
    {
     "label": "Maybe",
     "leaves": [
      "might / may / could be",
      "could have + V3"
     ]
    },
    {
     "label": "Sure: no",
     "leaves": [
      "can't be",
      "can't have + V3",
      "That can't be right!"
     ]
    },
    {
     "label": "Not evidence-based guesses",
     "leaves": [
      "mustn't = a rule",
      "should have = right thing / expected"
     ]
    },
    {
     "label": "Stance",
     "leaves": [
      "Apparently = heard it",
      "As far as I know = limited",
      "If I'm not mistaken"
     ]
    }
   ]
  },
  "story": {
   "title": "Whose Bottle?",
   "panels": [
    {
     "who": "Pim",
     "text": "Whose bottle is this? It's pink, and it says MINT on the lid."
    },
    {
     "who": "Nong Bot",
     "text": "It might be Mint's. It might be the Prime Minister's. Beep. Anything is possible."
    },
    {
     "who": "Fah",
     "text": "Bot, her NAME is on it!"
    },
    {
     "who": "Nong Bot",
     "text": "Then it <s>mustn't</s> be anyone else's. Beep!"
    },
    {
     "who": "T.Chris",
     "text": "Close, Bot. With her name on it, it <em>must be</em> Mint's. And a strong no in a guess is <em>can't</em>: it <em>can't be</em> anyone else's."
    }
   ],
   "moral": "Match the modal to the evidence: <em>must</em> for strong proof, <em>might</em> for maybe, <em>can't</em> for strong proof against — never <em>mustn't</em>."
  },
  "chant": {
   "title": "Evidence Beat",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Name on the lid? It <em>must be</em> hers!",
    "Just a clue or two? It <em>might be</em>, sure.",
    "She's in Chiang Mai? It <em>can't be</em> her!",
    "Match the guess to the proof you've heard.",
    "Back in time? Add <em>have</em> + V3:",
    "<em>She must have forgotten</em> — that's the key!",
    "<em>Mustn't</em> is a rule, it's not a guess,",
    "<em>Can't</em> is the no — now you know the rest!"
   ]
  },
  "moves": [
   {
    "move": "Raise your hand high above your head",
    "says": "<em>must be</em> — almost sure it's true"
   },
   {
    "move": "Hold your hand flat at chest height and wobble it",
    "says": "<em>might be / could be</em> — maybe"
   },
   {
    "move": "Push your hand down to the desk",
    "says": "<em>can't be</em> — almost sure it's not"
   },
   {
    "move": "Keep your hand at the same height and point your other thumb backwards",
    "says": "Add <em>have</em> + V3 for the past: <em>must have forgotten</em>"
   },
   {
    "move": "Cup a hand to your ear",
    "says": "<em>Apparently</em> — I heard it from someone"
   }
  ]
 },
 "t10l2s1": {
  "thai": "ข้อ Text Completion มักให้ตัวเลือกเป็นกริยาตัวเดียวกันสี่รูป ให้ถามสองคำถามตามลำดับ ข้อแรก ประธานเป็นผู้ทำหรือผู้ถูกกระทำ ถ้าถูกกระทำต้องใช้ passive ข้อสอง เป็นเรื่องของเวลาไหน ถ้าเป็นปัจจุบันหรืออนาคตใช้ modal + be + V3 เช่น must be checked ถ้าเป็นอดีตใช้ modal + have been + V3 เช่น should have been reported (ควรได้รับการรายงาน แต่ไม่มีใครรายงาน) หรือ can't have been sent (ไม่มีทางถูกส่งออกไปแล้วแน่ ๆ) หลัง need to, ought to และ is expected to ใช้ to be + V3 เช่น needs to be identified กับดักที่พบบ่อยคือตัวเลือกที่เวลาถูกแต่เป็น active หรือเป็น passive แต่เวลาผิด อย่าลืมหาผู้กระทำซึ่งมักอยู่ในอีกประโยคหนึ่ง",
  "analogy": {
   "title": "The Shopee parcel",
   "text": "A Shopee parcel never sends itself: somebody sends it, so the parcel always takes <em>be</em> + V3. The shop promises delivery within three days — it <em>must be delivered</em> by Friday. The return box is still by your door after a week — it <em>should have been sent</em> back already. First ask <strong>who does the job</strong>, then check the date."
  },
  "trap": "Students check only one thing. They see <em>months earlier</em> and grab <em>should have reported</em>, forgetting that faults cannot report anything. Or they see the passive and grab <em>must have been checked</em> next to <em>before the next rainy season</em>. Thai verbs do not change for time or voice, so both slips feel natural. Dodge: say the doer and the time out loud before you look at the options.",
  "map": {
   "center": "Modal + passive",
   "branches": [
    {
     "label": "Who?",
     "leaves": [
      "receives → be + V3",
      "does it → active"
     ]
    },
    {
     "label": "Now / later",
     "leaves": [
      "must be checked",
      "can be booked online"
     ]
    },
    {
     "label": "Past",
     "leaves": [
      "should have been reported",
      "can't have been sent"
     ]
    },
    {
     "label": "Keeps to",
     "leaves": [
      "needs to be identified",
      "ought to be taught",
      "is expected to be done"
     ]
    },
    {
     "label": "Traps",
     "leaves": [
      "should have reported ✗",
      "ought to be teach ✗",
      "mustn't have been ✗"
     ]
    }
   ]
  },
  "story": {
   "title": "The Self-Fixing Projector",
   "panels": [
    {
     "who": "Nan",
     "text": "The classroom projector is broken again!"
    },
    {
     "who": "Nong Bot",
     "text": "It <s>must fix</s> itself. Beep. Projector, fix yourself!"
    },
    {
     "who": "Mai",
     "text": "Bot, a projector can't fix itself. Somebody has to fix it."
    },
    {
     "who": "Nong Bot",
     "text": "Then it must be fixed. Beep. And it <s>should have fixed</s> last month."
    },
    {
     "who": "T.Chris",
     "text": "Half right, Bot. It <em>should have been fixed</em> last month — by a technician. The projector receives the action, so it needs <em>be</em> + V3."
    }
   ],
   "moral": "When the subject receives the action, use modal + <em>be</em> + V3 for now, and modal + <em>have been</em> + V3 for the past."
  },
  "chant": {
   "title": "Who Does It?",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "Tunnels don't check and parcels don't send,",
    "Somebody does it — so <em>be</em> + V3 at the end.",
    "<em>Must be checked</em> now, <em>will be done</em> next week,",
    "<em>Should have been fixed</em> — it's the past we seek.",
    "<em>Need to</em>, <em>ought to</em>: keep the <em>to</em>,",
    "<em>To be taught</em>, <em>to be checked</em> — that's what you do.",
    "Ask who does it, then ask when:",
    "Voice, then time — you'll get it then!"
   ]
  },
  "moves": [
   {
    "move": "Push both palms forward",
    "says": "Does it — active"
   },
   {
    "move": "Pull both palms back to your chest",
    "says": "Receives it — passive: <em>be</em> + V3"
   },
   {
    "move": "Point at the floor in front of you",
    "says": "Now or later: <em>must be checked</em>"
   },
   {
    "move": "Point your thumb back over your shoulder",
    "says": "Past: <em>should have been reported</em>"
   }
  ]
 },
 "t10l2s2": {
  "thai": "หลังคำที่บอกว่า “อะไรควรจะเกิดขึ้น” เช่น recommend, suggest, insist, demand และ It is essential/vital that ประโยค that ต้องใช้กริยารูปพื้นฐาน (V1 ไม่เติม -s) กับทุกประธานและทุกเวลา เช่น The coach insisted that every swimmer arrive by six. หรือจะใส่ should หน้ากริยาก็ได้ ห้ามใช้ will หรือ would และห้ามมี to ส่วนรูปเติม -s พบได้ในภาษาพูดแบบบริติช แต่ไม่ใช่คำตอบในข้อสอบ ถ้าประธานถูกกระทำ ใช้ be + V3 เช่น that the menu be changed ส่วนรูปปฏิเสธใช้ not + V1 โดยไม่ต้องมี do เช่น that the questions not be shared แต่ต้องระวัง ถ้า suggest หรือ insist ใช้รายงานข้อเท็จจริง เช่น The study suggests that teenagers need more sleep. (งานวิจัยชี้ว่าวัยรุ่นต้องการนอนมากขึ้น) ให้ใช้ tense ตามปกติ",
  "analogy": {
   "title": "Two notes from the doctor",
   "text": "A doctor at a Bangkok hospital writes two kinds of note. The prescription says what must happen: <em>that the patient rest for three days</em> — a plain verb, no <em>-s</em>, whoever the patient is. The lab report says what is true: <em>The patient has a fever.</em> After <em>recommend</em> or <em>insist</em> you are writing the <strong>prescription</strong>; after <em>The study suggests</em> you are writing the <strong>lab report</strong>."
  },
  "trap": "Third-person <em>-s</em> took you years to learn, so <em>that every student brings</em> feels right — it's informal at best; the exam answer is the base form, <em>that every student bring</em>. <em>Will</em> feels right too, because the plan is in the future, but it's wrong after a trigger + <em>that</em>. The opposite trap is forcing a base form after <em>The data suggest that…</em>, which reports a fact. Dodge: say a silent <em>should</em> before the verb — if the sentence still means the same, use the bare base form.",
  "map": {
   "center": "The hidden should",
   "branches": [
    {
     "label": "Triggers",
     "leaves": [
      "recommend, suggest",
      "insist, demand",
      "It is essential that"
     ]
    },
    {
     "label": "Form",
     "leaves": [
      "base for all: that she go",
      "passive: that it be done",
      "negative: that he not go"
     ]
    },
    {
     "label": "Not here",
     "leaves": [
      "to ✗ · -s = informal only",
      "will / would ✗"
     ]
    },
    {
     "label": "Fact meaning",
     "leaves": [
      "data suggest → is, are",
      "insisted she had locked"
     ]
    },
    {
     "label": "Quick test",
     "leaves": [
      "add a silent should",
      "same meaning → base form"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Fixes Grammar",
   "panels": [
    {
     "who": "T.Chris",
     "text": "The doctor recommended that Mai rest for a week."
    },
    {
     "who": "Nong Bot",
     "text": "Error! Mai is singular. It should be <em>that Mai rests</em>. Beep. Fixing your grammar…"
    },
    {
     "who": "Pim",
     "text": "Bot, it's not a fact. It's what the doctor wants to happen."
    },
    {
     "who": "Nong Bot",
     "text": "Ah. Hidden <em>should</em>: that Mai should rest. So: that Mai rest. Beep."
    },
    {
     "who": "Nong Bot",
     "text": "New rule! I insist that Pim give me her snacks!"
    },
    {
     "who": "T.Chris",
     "text": "Perfect grammar, Bot. Still no snacks."
    }
   ],
   "moral": "After <em>recommend</em>, <em>insist</em> or <em>It is essential that</em>, the verb is the bare base form for every subject: <em>that Mai rest</em>."
  },
  "chant": {
   "title": "The Hidden Should",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Recommend</em>, <em>suggest</em>, <em>insist</em>, <em>demand</em> —",
    "A silent <em>should</em> is close at hand.",
    "No <em>to</em>, no <em>will</em>, no exam <em>-s</em> in sight:",
    "<em>That she be there</em> — the base form's right!",
    "Passive? Add <em>be</em> and V3:",
    "<em>That the menu be changed</em> — easy!",
    "But if the data show what's true,",
    "A normal tense comes back to you."
   ]
  },
  "moves": [
   {
    "move": "Put a finger to your lips",
    "says": "The hidden <em>should</em>: you don't say it, but it's there"
   },
   {
    "move": "Wipe an imaginary -s off the desk",
    "says": "Exam form, no <em>-s</em>: <em>that every student bring</em>"
   },
   {
    "move": "Cross your forearms in an X",
    "says": "No <em>to</em>, no <em>will</em> after <em>that</em>"
   },
   {
    "move": "Hold one flat hand up like a page you are reading",
    "says": "Fact meaning: <em>The study suggests that teenagers need…</em>"
   }
  ]
 },
 "t10l2s3": {
  "thai": "ในประโยคเงื่อนไข will ที่บอกอนาคตจะอยู่ในวรรคผลลัพธ์ ไม่อยู่หลัง if เช่น If it rains, the match will be moved indoors. (ไม่ใช่ If it will rain) ส่วน can หรือ should ใช้หลัง if ได้ เช่น If you can come, … ถ้าเป็นเรื่องสมมติในปัจจุบันใช้ would, could หรือ might + V1 ถ้าสมมติในอดีตใช้ would, could หรือ might have + V3 และแต่ละวรรคมีเวลาของตัวเอง ถ้าเงื่อนไขเป็นอดีตแต่ผลเป็นปัจจุบัน (มีคำว่า now หรือ today) ให้ใช้ would + V1 เรียกว่า mixed conditional คำว่า unless แปลว่า “ถ้าไม่” จึงใช้กริยาปัจจุบันและไม่ต้องเติม not ซ้ำอีก ภาษาทางการจะตัด if แล้วยกกริยาขึ้นมาไว้หน้าประธาน เช่น Should you need help = If you need help (should ตรงนี้ไม่ได้แปลว่า “ควร”) และ Had it not been for… = ถ้าไม่มี… (ในอดีต)",
  "analogy": {
   "title": "Platform and train",
   "text": "An if-sentence is a BTS trip. The <em>if</em>-clause is the platform where you wait; the result is the train. Future <em>will</em> is the announcement, and it plays only <strong>on the train</strong>: <em>If it rains</em>, <em>we'll stay in</em> — never <em>if it will rain</em>. Each part keeps its own clock, too: if you had set your alarm last night, you <em>wouldn't be</em> late now."
  },
  "trap": "Thai uses the same future word in both halves, so <em>if it will rain</em> sounds natural, and students add a second <em>not</em> after <em>unless</em>, which flips the meaning. TCAS also loves the mixed conditional: a past <em>if</em>-clause with <em>now</em> in the result, where the type 3 form is the trap. And formal <em>Should you need…</em> gets misread as advice. Dodge: find the time word in each half, and keep future <em>will</em> out of the condition.",
  "map": {
   "center": "Two clocks in an if",
   "branches": [
    {
     "label": "Real future",
     "leaves": [
      "If it rains, we'll…",
      "no will after if"
     ]
    },
    {
     "label": "Unreal now",
     "leaves": [
      "If I had time, I'd…",
      "would / could / might"
     ]
    },
    {
     "label": "Unreal past",
     "leaves": [
      "had + V3 → would have + V3",
      "might have caught it"
     ]
    },
    {
     "label": "Mixed",
     "leaves": [
      "past if → now result",
      "…→ wouldn't know now"
     ]
    },
    {
     "label": "Unless",
     "leaves": [
      "= if not",
      "present verb, no 2nd not"
     ]
    },
    {
     "label": "Formal",
     "leaves": [
      "Should you need = if",
      "Had it not been for"
     ]
    }
   ]
  },
  "story": {
   "title": "Sports Day Forecast",
   "panels": [
    {
     "who": "Mint",
     "text": "Bot, what happens on sports day if the weather's bad?"
    },
    {
     "who": "Nong Bot",
     "text": "<s>If it will rain</s>, the races will move indoors. And <s>unless it doesn't rain</s>, we will stay outside. Beep."
    },
    {
     "who": "Mint",
     "text": "Wait… so we stay outside only if it rains?"
    },
    {
     "who": "T.Chris",
     "text": "Two bugs, Bot. No <em>will</em> after <em>if</em>: <em>If it rains</em>. And <em>unless</em> already means <em>if not</em>: <em>unless it rains</em>."
    },
    {
     "who": "Nong Bot",
     "text": "Repaired. Should you need more weather facts, ask me. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Relax, Mint. <em>Should you need</em> just means <em>if you need</em>. Bot is being formal now."
    }
   ],
   "moral": "Keep <em>will</em> out of <em>if</em> and <em>unless</em> clauses; <em>unless</em> means <em>if not</em>; and formal <em>Should you…</em> means <em>if you…</em>."
  },
  "chant": {
   "title": "Two Clocks",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "No <em>will</em> after <em>if</em>, no <em>will</em> after <em>unless</em>,",
    "Future <em>will</em> rides the result — no more, no less.",
    "<em>If I had time</em>, I <em>would</em>, I <em>could</em>, I <em>might</em>,",
    "<em>If I'd known</em> before, I'd <em>have</em> got it right.",
    "Past in the <em>if</em>, but <em>now</em> in the rest?",
    "<em>Would</em> + base form passes the test.",
    "<em>Should you need</em> help? It's formal, it's true —",
    "It just means <em>if</em>, not advice for you!"
   ]
  },
  "moves": [
   {
    "move": "Hold up two fists side by side, like two clocks",
    "says": "Each half has its own time"
   },
   {
    "move": "Tap your left fist and shake your head",
    "says": "No <em>will</em> in the <em>if</em>-clause"
   },
   {
    "move": "Tap your right fist and nod",
    "says": "The modal goes in the result: <em>would</em>, <em>could</em>, <em>might</em>"
   },
   {
    "move": "Draw one minus sign in the air",
    "says": "<em>unless</em> = if not — one <em>not</em> is enough"
   },
   {
    "move": "Bow slightly, like a hotel receptionist",
    "says": "<em>Should you need help</em> = if you need help"
   }
  ]
 },
 "t10l3s1": {
  "thai": "ข่าวและบทความบอกระดับความมั่นใจด้วยคำกริยาช่วย ประโยคที่ใช้กริยาธรรมดาโดยไม่มี modal คือข้อเท็จจริง will คือการคาดการณ์ที่มั่นใจ is likely to และ is expected to คือน่าจะเกิดขึ้น may, might และ could คืออาจจะเกิดขึ้น ส่วน appears to คือหลักฐานตอนนี้ชี้ไปทางนั้น แต่ยังพิสูจน์ไม่ได้ ในคำถามแบบ Which statement is TRUE? กับดักคือตัวเลือกที่ใช้ will หรือ has ทั้งที่บทความเขียนว่า may ให้หาประโยคที่ตัวเลือกพูดถึง ขีดเส้นใต้คำแสดงความมั่นใจ แล้วเลือกตัวเลือกที่มั่นใจ “เท่ากัน” เช่น may cause problems มีความหมายเท่ากับ might cause difficulties ไม่ใช่ will cause problems",
  "analogy": {
   "title": "The weather app",
   "text": "A weather app rarely promises <em>It will rain at 3 p.m.</em>; it shows how likely rain is. A news report works the same way: <em>may</em> is the 'possible' icon, <em>is likely to</em> the 'probable' icon, and <em>will</em> the 'certain' icon. If a friend posts <em>It WILL rain!</em> after seeing 'possible', she has <strong>changed the forecast</strong>. TCAS options do exactly the same thing."
  },
  "trap": "Students read news for topic words, so an option that repeats <em>later start</em> and <em>next May</em> looks true even when it says <em>will</em> and the text says <em>could</em>. The opposite trap turns <em>appears to</em> into <em>proved</em>. A judge item may also want Can't tell, because <em>may</em> neither confirms nor denies <em>will</em>. Dodge: underline the modal in the text, underline the modal in the option, and check they sit on the same rung.",
  "map": {
   "center": "How sure is the text?",
   "branches": [
    {
     "label": "Fact",
     "leaves": [
      "plain verb: was approved",
      "no modal at all"
     ]
    },
    {
     "label": "Certain",
     "leaves": [
      "will apply",
      "= sure"
     ]
    },
    {
     "label": "Probable",
     "leaves": [
      "is likely to",
      "is expected to"
     ]
    },
    {
     "label": "Possible",
     "leaves": [
      "may / might / could",
      "could be allowed to"
     ]
    },
    {
     "label": "Evidence",
     "leaves": [
      "appears to / seems to",
      "≠ proved"
     ]
    },
    {
     "label": "Trap",
     "leaves": [
      "text: may → option: will ✗",
      "same rung = a match"
     ]
    }
   ]
  },
  "story": {
   "title": "Breaking News",
   "panels": [
    {
     "who": "Nan",
     "text": "Breaking news! Schools WILL start at 9 a.m. next year!"
    },
    {
     "who": "Nong Bot",
     "text": "Confirmed. Beep. Deleting morning alarm."
    },
    {
     "who": "Pim",
     "text": "Read it again: <em>could be allowed to</em>. Nothing has been decided."
    },
    {
     "who": "Nong Bot",
     "text": "Could… Reinstalling morning alarm. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Good, Bot. <em>Could</em> is a possibility, not a promise. Never upgrade <em>may</em> or <em>could</em> to <em>will</em>."
    }
   ],
   "moral": "Keep the writer's strength: <em>may</em> and <em>could</em> are possible, <em>will</em> is certain — an option that swaps one for the other is wrong."
  },
  "chant": {
   "title": "Same Rung",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "A plain verb's a fact, and <em>will</em> is sure,",
    "<em>Likely to</em>, <em>expected to</em> — probable, no more.",
    "<em>May</em>, <em>might</em>, <em>could</em> — just possible, friend,",
    "<em>Appears to</em> is evidence, not the end.",
    "Text says <em>may</em>? Don't pick <em>will</em>!",
    "Keep the rung, and you've got the skill."
   ]
  },
  "moves": [
   {
    "move": "Hold your hand flat on top of your head",
    "says": "A plain fact or <em>will</em> — certain"
   },
   {
    "move": "Move your hand down to your chin",
    "says": "<em>is likely to</em> / <em>is expected to</em> — probable"
   },
   {
    "move": "Move your hand down to your chest",
    "says": "<em>may</em> / <em>might</em> / <em>could</em> — possible"
   },
   {
    "move": "Hold both hands at the same height and nod",
    "says": "Text and option on the same rung — a match"
   }
  ]
 },
 "t10l3s2": {
  "thai": "ในโฆษณา ประกาศ และเงื่อนไขตัวเล็ก modal ทำหน้าที่เป็นกฎ must และ will be required to = ต้องทำ need not = ไม่จำเป็นต้องทำ (จะทำหรือไม่ทำก็ได้) may = อนุญาตให้ทำได้ ส่วน cannot, may not และ is not allowed = ห้ามทำ ระวังรูปปฏิเสธสองแบบที่มีความหมายตรงข้ามกัน need not ไม่ใช่การห้าม แต่ cannot คือการห้าม เช่น You need not book a seat. (ไม่ต้องจองที่นั่ง) กับ Passes cannot be shared. (ห้ามใช้บัตรร่วมกับคนอื่น) เมื่อเจอคำถาม NOT allowed หรือ EXCEPT ให้แบ่งกฎเป็นสี่ช่อง แล้วเช็กตัวเลือกทีละข้อ และอย่าลืมดูเงื่อนไข เช่น อายุ วันที่ และบัตรนักเรียนที่ยังไม่หมดอายุ",
  "analogy": {
   "title": "The condo pool sign",
   "text": "Picture the sign at a condo pool in Bangkok. <em>Swimmers must shower first</em> — you have to. <em>Swimming caps need not be worn</em> — your choice. <em>Residents may bring one guest</em> — allowed. <em>Glass bottles cannot be taken into the pool area</em> — forbidden. Four rules, <strong>four boxes</strong>. Before you answer any ad question, put each rule in its box."
  },
  "trap": "In English the two negatives look alike — <em>need not</em> and <em>cannot</em> — so students read every <em>not</em> in fine print as a ban. TCAS asks <em>Which is NOT allowed?</em> and puts the <em>need not</em> action in the options as bait. It also hides conditions: an age, a date, a <em>valid</em> ID. Dodge: copy every rule into must / need not / may / cannot, then tick each option against its box.",
  "map": {
   "center": "Fine-print rules",
   "branches": [
    {
     "label": "Have to",
     "leaves": [
      "must",
      "will be required to"
     ]
    },
    {
     "label": "Don't have to",
     "leaves": [
      "need not = your choice",
      "≠ forbidden"
     ]
    },
    {
     "label": "Allowed",
     "leaves": [
      "may (in a rule)",
      "Photos may be taken"
     ]
    },
    {
     "label": "Forbidden",
     "leaves": [
      "cannot / may not",
      "is not allowed",
      "cannot be combined"
     ]
    },
    {
     "label": "Conditions",
     "leaves": [
      "age, dates, valid ID",
      "at least 1 day ahead"
     ]
    },
    {
     "label": "NOT / EXCEPT",
     "leaves": [
      "check all four options",
      "odd one out = the key"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Cancels Everything",
   "panels": [
    {
     "who": "Mai",
     "text": "This study-café ad says, <em>You need not book a seat.</em>"
    },
    {
     "who": "Nong Bot",
     "text": "Booking FORBIDDEN. Beep. Cancelling all our bookings."
    },
    {
     "who": "Mai",
     "text": "Bot! We booked a group room. Group rooms MUST be reserved!"
    },
    {
     "who": "Nong Bot",
     "text": "Need not… must… Beep. My circuits are confused."
    },
    {
     "who": "T.Chris",
     "text": "<em>Need not</em> means you don't have to. Seats: your choice. Group rooms: you have to. <em>Cannot</em> is the ban."
    }
   ],
   "moral": "<em>Need not</em> = not necessary, <em>cannot</em> = forbidden, <em>must</em> = you have to, <em>may</em> = you are allowed to."
  },
  "chant": {
   "title": "Four Boxes",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Must</em> — you have to, that's the rule,",
    "<em>Need not</em> — your choice, so keep it cool.",
    "<em>May</em> — you're allowed, go right ahead,",
    "<em>Cannot</em> — forbidden, see it in red.",
    "Two little <em>not</em>s, but they're not the same:",
    "One sets you free, one's a ban — know the game!"
   ]
  },
  "moves": [
   {
    "move": "Point down firmly at the desk",
    "says": "<em>must</em> — you have to"
   },
   {
    "move": "Shrug with open palms",
    "says": "<em>need not</em> — not necessary; your choice"
   },
   {
    "move": "Wave someone through with one hand",
    "says": "<em>may</em> — you're allowed"
   },
   {
    "move": "Cross your forearms in an X",
    "says": "<em>cannot</em> / <em>may not</em> — forbidden"
   }
  ]
 },
 "t10l3s3": {
  "thai": "ในบทความแสดงความคิดเห็น modal บอกทัศนคติของผู้เขียน should และ ought to = แนะนำ must = ยืนยันหนักแน่นและมักแฝงการตำหนิ could have + V3 = เคยมีโอกาสแต่ไม่ได้ทำ should have + V3 = ไม่ได้ทำ และนั่นเป็นความผิดพลาด ทั้งสองแบบจึงแสดงความผิดหวังหรือการวิจารณ์ ส่วน might want to = เสนอแนะอย่างสุภาพ เช่น Parents might want to ask how much their child sleeps. (ผู้ปกครองอาจลองถามดูว่าลูกนอนกี่ชั่วโมง) เวลาตอบคำถามเรื่อง tone หรือ purpose ให้ทำเครื่องหมายที่ modal ทุกตัวว่าเป็นการแนะนำ ยืนยัน ตำหนิอดีต หรือเสนอแนะอย่างสุภาพ แล้วดูภาพรวม ถ้าบทความเต็มไปด้วย should และ must แปลว่าผู้เขียนกำลังโน้มน้าว ไม่ได้รายงานข่าว",
  "analogy": {
   "title": "Comments after the match",
   "text": "Read the comments after a Thai national team match. <em>They should press higher</em> — advice. <em>The coach must change the defence</em> — insisting. <em>We could have won that</em> and <em>he should have passed</em> — disappointment about a chance that has gone. <em>Fans might want to wait before judging</em> — a polite nudge. You can tell <strong>each commenter's mood</strong> from the modals alone."
  },
  "trap": "Students meet <em>could</em> as ability and <em>should</em> as advice, so they read <em>could have moved</em> as a guess and <em>should have listened</em> as advice for next year. They also judge tone by topic: an article about tired teenagers feels sympathetic even when it attacks tutoring schools with <em>must</em>. Dodge: code every modal R (recommend), I (insist), C (criticise the past) or P (polite), then let the codes answer.",
  "map": {
   "center": "The writer's stance",
   "branches": [
    {
     "label": "Recommend",
     "leaves": [
      "should / ought to",
      "→ the text argues"
     ]
    },
    {
     "label": "Insist",
     "leaves": [
      "must",
      "→ strong, often critical"
     ]
    },
    {
     "label": "Missed chance",
     "leaves": [
      "could have + V3",
      "should have + V3",
      "→ criticism, regret"
     ]
    },
    {
     "label": "Polite nudge",
     "leaves": [
      "might want to",
      "may wish to"
     ]
    },
    {
     "label": "Exam questions",
     "leaves": [
      "purpose: to argue?",
      "tone / who is criticised"
     ]
    }
   ]
  },
  "story": {
   "title": "Nong Bot Reads an Opinion",
   "panels": [
    {
     "who": "Fah",
     "text": "The article says the schools <em>could have moved</em> their evening classes."
    },
    {
     "who": "Nong Bot",
     "text": "Ability confirmed. The schools were strong enough to move them. Beep."
    },
    {
     "who": "Fah",
     "text": "And <em>should have listened to their students</em>?"
    },
    {
     "who": "Nong Bot",
     "text": "Advice for next week: schools, please listen next week. Beep."
    },
    {
     "who": "T.Chris",
     "text": "Both look back, Bot. A chance existed, it was missed, and the writer thinks that was a mistake. That's criticism."
    }
   ],
   "moral": "In an opinion piece, <em>could have</em> and <em>should have</em> + V3 usually criticise a missed chance — but check the context: <em>could have</em> can also be a guess about the past."
  },
  "chant": {
   "title": "Read the Mood",
   "beat": "kick-kick-clap (4/4)",
   "lines": [
    "<em>Should</em> and <em>ought to</em>: I recommend,",
    "<em>Must</em>: I insist, and I won't bend.",
    "<em>Could have</em>, <em>should have</em>: the chance has gone,",
    "The writer's upset that it wasn't done.",
    "<em>Might want to</em>: a gentle tip —",
    "Code every modal, don't let one slip!"
   ]
  },
  "moves": [
   {
    "move": "Point forward with an open hand",
    "says": "<em>should / ought to</em> — I recommend"
   },
   {
    "move": "Tap a fist softly on the desk",
    "says": "<em>must</em> — I insist"
   },
   {
    "move": "Look back over your shoulder and shake your head",
    "says": "<em>could have / should have</em> — a missed chance"
   },
   {
    "move": "Offer something with both palms up and a small smile",
    "says": "<em>might want to</em> — a polite suggestion"
   }
  ]
 }
};
