/* ===========================================================================
   FINE TUNING — audit.js
   Checks the answer-key balance that verify.js does not:
     - key position (1-4) per stage and per test paper, and per level
     - how often the key is the strictly longest option (target: ~25%)
     - how often the key is the strictly shortest option
     - spot-item error position, judge True/False split
     - hint leaks: the key's wording appearing inside the tag's hint (principle)

   node audit.js              summary for every stage and paper
   node audit.js t3           detail for one stage (or m1/m2/m3)
   =========================================================================== */
var fs=require('fs'),vm=require('vm'),path=require('path');
var DIR=__dirname;
var ALL=['content.js','topic-s1.js','topic-s2.js','topic-s3.js','topic-s4.js','topic-s5.js','topic-s6.js','topic-s7.js','topic-s8.js','media.js','test-1.js','test-2.js','test-3.js','content-export.js'];
var ctx={window:{},console:console};vm.createContext(ctx);
ALL.forEach(function(f){vm.runInContext(fs.readFileSync(path.join(DIR,f),'utf8'),ctx,{filename:f});});
var C=ctx.window.CONTENT, R=C.REMEDIATION;
function plain(s){return String(s).replace(/<[^>]+>/g,'').replace(/&[a-z]+;/g,'x').replace(/\s+/g,' ').trim();}
var groups={}, lvOf={};
function add(g,lv,it){(groups[g]=groups[g]||[]).push(it);lvOf[it.id]=lv;}
C.TOPICS.forEach(function(t){t.levels.forEach(function(lv){lv.subs.forEach(function(s){s.items.forEach(function(i){add(t.id,lv.id,i);});});lv.check.items.forEach(function(i){add(t.id,lv.id,i);});});});
C.MOCKS.forEach(function(m){m.sections.forEach(function(s){s.items.forEach(function(i){add(m.id,m.id+s.code,i);});});});
var ONLY=process.argv[2];
function pct(a,b){return b?Math.round(100*a/b)+'%':'-';}
var tot={n:0,pos:[0,0,0,0],longest:0,shortest:0,spos:[0,0,0,0],sn:0,leaks:0};
Object.keys(groups).forEach(function(g){
  if(ONLY&&g!==ONLY)return;
  var r={n:0,pos:[0,0,0,0],longest:0,shortest:0,tied:0,spos:[0,0,0,0],sn:0,jt:0,jf:0,leaks:[]},rows=[],byLv={};
  groups[g].forEach(function(it){
    var lv=lvOf[it.id];byLv[lv]=byLv[lv]||[0,0,0,0];
    if(it.options&&it.options.length===4){
      r.n++;r.pos[it.answer]++;byLv[lv][it.answer]++;
      var L=it.options.map(function(o){return plain(o).length;});
      var mx=Math.max.apply(null,L),mn=Math.min.apply(null,L);
      var isL=L[it.answer]===mx&&L.filter(function(x){return x===mx;}).length===1;
      var isS=L[it.answer]===mn&&L.filter(function(x){return x===mn;}).length===1;
      if(isL)r.longest++; if(isS)r.shortest++;
      if(L[it.answer]===mx&&!isL)r.tied++;
      rows.push(it.id+'  key '+(it.answer+1)+'  len ['+L.join(',')+']'+(isL?'  KEY-LONGEST':'')+(isS?'  key-shortest':''));
      var p=R[it.tag]&&plain(R[it.tag].principle).toLowerCase(), k=plain(it.options[it.answer]).toLowerCase().replace(/[.?!]$/,'');
      if(p&&k.length>=4&&p.indexOf(k)>=0)r.leaks.push(it.id+' ('+it.tag+'): key "'+k+'" appears in hint');
    } else if(it.type==='spot'&&it.words&&it.words.length===4){r.sn++;r.spos[it.answer]++;rows.push(it.id+'  spot error in part '+(it.answer+1));}
    else if(it.type==='judge'){ if(it.answer===0)r.jt++; else r.jf++; }
  });
  console.log(g+': MCQ '+r.n+'  key pos '+r.pos.join('/')+'  key longest '+r.longest+' ('+pct(r.longest,r.n)+')  key shortest '+r.shortest+' ('+pct(r.shortest,r.n)+')  tied-longest '+r.tied+
    '  | spot '+r.sn+' pos '+r.spos.join('/')+'  | judge T/F '+r.jt+'/'+r.jf+'  | hint leaks '+r.leaks.length);
  if(ONLY){
    Object.keys(byLv).forEach(function(l){console.log('   level '+l+' key pos '+byLv[l].join('/'));});
    rows.forEach(function(x){console.log('   '+x);});
    r.leaks.forEach(function(x){console.log('   LEAK '+x);});
  }
  ['n','longest','shortest','sn'].forEach(function(k){tot[k]+=r[k];});tot.leaks+=r.leaks.length;
  for(var i=0;i<4;i++){tot.pos[i]+=r.pos[i];tot.spos[i]+=r.spos[i];}
});
if(!ONLY)console.log('ALL: MCQ '+tot.n+'  key pos '+tot.pos.join('/')+'  key longest '+tot.longest+' ('+pct(tot.longest,tot.n)+')  key shortest '+tot.shortest+' ('+pct(tot.shortest,tot.n)+')  | spot '+tot.sn+' pos '+tot.spos.join('/')+'  | hint leaks '+tot.leaks);
