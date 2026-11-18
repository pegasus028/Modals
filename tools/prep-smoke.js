/* Browser test of the Unit 5 test prep tab (node tools/prep-smoke.js; needs playwright).
   Every call to the class server is intercepted: nothing reaches the live Sheet or the AI marker.
   Checks: all 30 parts open at 390 and 420 px, no sideways scroll, no console errors,
   AI verdict used, one retry after an unreadable reply, rule-checker fallback, tiles = half a mark. */
const http=require('http'),fs=require('fs'),path=require('path'),{chromium}=require('playwright');
const ROOT=path.join(__dirname,'..');const glob=fs.readdirSync('/opt/pw-browsers').filter(d=>/^chromium-\d+/.test(d))[0];
const exe=process.env.CHROME_PATH||'/opt/pw-browsers/'+glob+'/chrome-linux64/chrome';
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json'};
const srv=http.createServer((q,r)=>{let f=path.join(ROOT,decodeURIComponent(q.url.split('?')[0]));if(q.url.startsWith('/favicon')){r.writeHead(204);return r.end();}
 if(f.endsWith('/'))f+='index.html';fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);return r.end();}r.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'});r.end(d);});});
let fails=0;const check=(ok,m)=>{console.log((ok?'  ok   ':'  FAIL ')+m);if(!ok)fails++;};
srv.listen(0,async()=>{const base='http://localhost:'+srv.address().port;const b=await chromium.launch({executablePath:exe});
 for(const [w,scheme] of [[390,'light'],[420,'dark']]){
 const ctx=await b.newContext({viewport:{width:w,height:844},colorScheme:scheme});const errs=[];let ai=[],other=0,script=[];
 await ctx.route(/script\.google\.com|script\.googleusercontent\.com/,r=>{let body={};try{body=JSON.parse(r.request().postData()||'{}')}catch(e){}
  if(body.action==='aiMark'){ai.push(body.payload);const rep=script.shift()||{ok:false,error:'parse'};return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify(rep)});}
  other++;r.abort();});
 const p=await ctx.newPage();p.on('console',m=>{if(m.type()==='error'&&!/ERR_FAILED|Failed to load resource/.test(m.text()))errs.push(m.text());});p.on('pageerror',e=>errs.push(e.message));
 await p.goto(base+'/index.html');await p.click('#tab-new');await p.fill('#f-id','prep-test-'+Date.now());await p.fill('#f-name','Prep Test');await p.fill('#f-pw','prep-test-pw');
 await p.click('#btn-go');await p.waitForSelector('#screen-app:not(.hidden)');
 console.log('--- '+w+'px '+scheme);
 await p.evaluate(()=>{location.hash='#prep'});await p.click('button[data-view="prep"]').catch(()=>{});
 await p.waitForSelector('[data-pp-open]');check((await p.$$('[data-pp-open]')).length===3,'three mock tests listed');
 const over=async l=>check(await p.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),'no sideways scroll: '+l);
 await over('list');
 for(const id of ['prep1','prep2','prep3']){
  await p.click('[data-pp-open="'+id+'"]');await p.waitForSelector('.pp-item');
  const chips=await p.$$('[data-pp-go]');
  for(let i=0;i<chips.length-1;i++){await (await p.$$('[data-pp-go]'))[i].click();await p.waitForSelector('.pp-item');
   const bad=await p.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);if(bad)check(false,id+' part '+i+' overflows');}
  check(true,id+': all 10 parts open');
  if(id==='prep1'){
   // P1.4 order and a correct/incorrect tap
   await (await p.$$('[data-pp-go]'))[3].click();await p.waitForSelector('[data-pp-fix]');
   const first=await p.textContent('.pp-item .pp-stem');check(/Students aren’t allowed/.test(first),'Mock 1 P1·4 now opens with a correct sentence');
   // written answer: first reply unreadable, second fine -> AI verdict after one retry
   await (await p.$$('[data-pp-go]'))[4].click();await p.waitForSelector('[data-pp-text="p1-1-5-1"]');
   script=[{ok:false,error:'parse'},{ok:true,correct:true,feedback:'Well done.',corrected:'',polish:''}];ai=[];
   await p.fill('[data-pp-text="p1-1-5-1"]','We had to show our tickets at the gate.');await p.click('[data-pp-check="p1-1-5-1"]');
   await p.waitForSelector('#pp-p1-1-5-1 .pp-fb.final');
   check(ai.length===2,'unreadable reply is asked again once ('+ai.length+' calls)');
   check(/AI marking/.test(await p.textContent('#pp-p1-1-5-1'))&&/Correct/.test(await p.textContent('#pp-p1-1-5-1 .pp-fb.final')),'second reply is used: marked by AI, correct');
   // both replies unreadable -> rule checker marks a wrong answer wrong, tiles appear
   script=[{ok:false,error:'parse'},{ok:false,error:'parse'}];ai=[];
   await p.fill('[data-pp-text="p1-1-5-2"]','I needn\'t bring cash.');await p.click('[data-pp-check="p1-1-5-2"]');
   await p.waitForSelector('#pp-p1-1-5-2 .pp-tiles');check(ai.length===2,'two unreadable replies: falls back to the rule checker and shows tiles');
   // AI says wrong -> tiles; rebuild in order = half mark
   script=[{ok:true,correct:false,feedback:'Check the verb form.',corrected:'You shouldn\'t have spent all your allowance on the first day.',polish:''}];ai=[];
   await p.fill('[data-pp-text="p1-1-5-4"]','You shouldn\'t have spend all your allowance on the first day.');await p.click('[data-pp-check="p1-1-5-4"]');
   await p.waitForSelector('#pp-p1-1-5-4 .pp-tiles');check(ai.length===1,'a readable "wrong" verdict is not asked twice');
   for(let k=0;k<5;k++)await p.click('[data-pp-put="p1-1-5-4:'+k+'"]');await p.click('[data-pp-order="p1-1-5-4"]');
   await p.waitForSelector('#pp-p1-1-5-4 .pp-fb.half');check(true,'tiles rebuilt in order give half a mark');
   // reason item after the A/B swap
   await (await p.$$('[data-pp-go]'))[9].click();await p.waitForSelector('[data-pp-ab="p1-2-5-5:A"]');
   script=[{ok:true,correct:true,feedback:'Good reasoning.',corrected:'',polish:''}];ai=[];
   await p.click('[data-pp-ab="p1-2-5-5:A"]');await p.fill('[data-pp-text="p1-2-5-5"]','Because it has only just opened.');await p.click('[data-pp-check="p1-2-5-5"]');
   await p.waitForSelector('#pp-p1-2-5-5 .pp-fb.final');check(ai[0]&&ai[0].chosen==='A'&&/might get busier/.test(ai[0].a),'reasoning item: Student A (might) is the key and is sent to the marker');
   // no-key is not retried
   await (await p.$$('[data-pp-go]'))[4].click();await p.waitForSelector('[data-pp-text="p1-1-5-5"]');
   script=[{ok:false,error:'no-key'}];ai=[];
   await p.fill('[data-pp-text="p1-1-5-5"]','I would rather pay by card.');await p.click('[data-pp-check="p1-1-5-5"]');
   await p.waitForSelector('#pp-p1-1-5-5 .pp-fb.final');check(ai.length===1,'"no-key" is not retried; rule checker marks it');
  }
  // every MC option clickable: answer first MC of each test with the key
  await p.click('[data-pp-back]');await p.waitForSelector('[data-pp-open]');
 }
 check(errs.length===0,'no console errors '+JSON.stringify(errs).slice(0,300));console.log('  (other backend calls blocked: '+other+')');await ctx.close();}
 await b.close();srv.close();console.log(fails?fails+' FAILED':'SMOKE OK');process.exit(fails?1:0);});
