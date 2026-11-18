/* ===========================================================================
   FINE TUNING — AiMark.gs   (live: appended to the end of Code.gs in the
   Apps Script project bound to the "Modals" Sheet; deployed as Version 3,
   18 Nov 2026)
   AI marking for the "Unit 5 test prep" tab (prep.js). One written answer
   per call; Claude says whether it is correct and gives short feedback.

   SETUP (once)
     Project Settings → Script Properties → add
       ANTHROPIC_API_KEY   your Anthropic API key   (required)
       AI_MODEL            optional, default claude-sonnet-5-5 (do not send
                           temperature: this model rejects it with HTTP 400)
       AI_DAILY_LIMIT      optional, default 600 calls a day
     Code.gs routes the action:  case 'aiMark': return json(doAiMark(payload));
     Run aiMarkSelfTest() once from the editor to approve the
     "connect to an external service" permission, then
     Deploy → Manage deployments → pencil → New version → Deploy.

   Without a key the action answers {ok:false, error:'no-key'} and the page
   marks with its own rule checker instead.
   =========================================================================== */

function doAiMark(p) {
  var key = PropertiesService.getScriptProperties().getProperty('ANTHROPIC_API_KEY');
  if (!key) return { ok: false, error: 'no-key' };
  p = p || {};
  var student = String(p.student || '').slice(0, 400).trim();
  if (!student) return { ok: false, error: 'empty' };

  /* A daily cap, so a stuck page cannot run up a bill. */
  var props = PropertiesService.getScriptProperties();
  var day = Utilities.formatDate(new Date(), 'Asia/Bangkok', 'yyyyMMdd');
  var limit = Number(props.getProperty('AI_DAILY_LIMIT') || 600);
  var used = Number(props.getProperty('AI_USED_' + day) || 0);
  if (used >= limit) return { ok: false, error: 'limit' };
  props.setProperty('AI_USED_' + day, String(used + 1));

  var system = [
    'You mark ONE answer in a grammar test for Mikii, a 13-year-old Thai student (CEFR B2) revising English modal verbs',
    '(Gateway to the World B2, Unit 5: obligation, prohibition, advice, permission, speculation and deduction; money vocabulary).',
    'Decide whether the answer is CORRECT for the task.',
    'Rules:',
    '- Accept ANY grammatical, natural answer that does the task and keeps the meaning, not only the model answer.',
    '- The word or modal given must be used, in the right form: modal + bare verb for now/future (could buy, should arrive);',
    '  modal + have + past participle for the past (must have spent, needn\'t have brought, should have kept).',
    '- A wrong verb form after a modal is INCORRECT: could have buy, should to compare, had to showed, didn\'t allowed, must have spend.',
    '- mustn\'t is never correct for "sure not" (use can\'t) or for "not necessary" (use don\'t have to / needn\'t).',
    '- Make the deduction: the conclusion must follow logically from the evidence, use the given modal with a suitable level of certainty,',
    '  and not just copy the evidence. A wrong conclusion (e.g. blaming the bank when the evidence is about the shop) is incorrect.',
    '- Better reasoning: the student has already chosen the right student. The explanation is correct if it gives a sensible reason based on',
    '  the evidence (how strong or weak the evidence is). Simple English is fine.',
    '- Correct the error: the student may write only the corrected words or the whole sentence. Correct if the modal error is fixed and no new error is added.',
    '- Rewrite: must use the word given and keep the meaning. Changing the subject (I / you / we) is fine if the meaning stays.',
    '- Do NOT mark wrong for capital letters, a missing full stop, or a small spelling slip that is not the grammar point; mention it in "polish".',
    'Reply with JSON only, no other text:',
    '{"correct": true or false, "feedback": "1-2 short sentences in simple English (B1), speaking to Mikii as you. If incorrect, say what to fix',
    ' but do NOT give the full correct answer.", "corrected": "the student\'s answer with the fewest changes to make it correct, or empty if it is correct",',
    ' "polish": "one short note about capitals, spelling or punctuation, or empty"}'
  ].join('\n');

  var task = [
    'Task type: ' + (p.kind || ''),
    'Instructions: ' + (p.instructions || ''),
    p.sentence ? 'Sentence to judge: ' + p.sentence : '',
    p.source ? 'Original sentence: ' + p.source : '',
    p.keyword ? 'Word to use: ' + p.keyword : '',
    p.modal ? 'Modal to use: ' + p.modal : '',
    p.evidence ? 'Evidence / situation: ' + p.evidence : '',
    p.a ? 'Student A said: ' + p.a : '',
    p.b ? 'Student B said: ' + p.b : '',
    p.chosen ? 'Mikii chose: Student ' + p.chosen : '',
    'Model answer (one possible correct answer): ' + (p.model || ''),
    'Teacher\'s note: ' + (p.notes || ''),
    '',
    'Mikii\'s answer: ' + student
  ].filter(function (x) { return x !== ''; }).join('\n');

  var model = props.getProperty('AI_MODEL') || 'claude-sonnet-5-5';
  var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
    method: 'post',
    contentType: 'application/json',
    headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    payload: JSON.stringify({
      model: model, max_tokens: 400,
      system: system,
      messages: [{ role: 'user', content: task }]
    }),
    muteHttpExceptions: true
  });
  var code = res.getResponseCode();
  if (code !== 200) {
    var msg = '';
    try { msg = (JSON.parse(res.getContentText()).error || {}).message || ''; } catch (e) {}
    return { ok: false, error: 'api-' + code + (msg ? ': ' + String(msg).slice(0, 200) : '') };
  }
  var body = JSON.parse(res.getContentText());
  var text = (body.content || []).map(function (c) { return c.text || ''; }).join('');
  var m = text.match(/\{[\s\S]*\}/);
  if (!m) return { ok: false, error: 'parse' };
  var out;
  try { out = JSON.parse(m[0]); } catch (e) { return { ok: false, error: 'parse' }; }
  return {
    ok: true,
    correct: out.correct === true,
    feedback: String(out.feedback || '').slice(0, 400),
    corrected: String(out.corrected || '').slice(0, 400),
    polish: String(out.polish || '').slice(0, 200)
  };
}

/* Run once from the editor: approves the permission and checks the key. */
function aiMarkSelfTest() {
  var r = doAiMark({
    kind: 'deduce', instructions: 'Write ONE logical conclusion using the modal given.',
    modal: 'COULD', evidence: 'Bam needs 1,500 baht. She has 1,000 baht and gets 500 baht on her birthday next week.',
    model: 'Bam could buy the ticket after her birthday.', notes: 'Future possibility: could + bare verb.',
    student: 'Bam could have buy the ticket next week'
  });
  Logger.log(JSON.stringify(r));
  return r;
}
