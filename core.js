(function(root){
'use strict';
const rooms=[
{id:'sirena',name:'El rescat de la sirena',topic:'Descobreix les potències',detail:'Base, exponent, producte repetit, quadrats i cubs.',story:'La sirena Ona juga amb un monstre de deu tentacles, però ara no pot sortir! Resol les proves per retirar-los i obrir-li un camí.',action:'tentacles retirats',goal:'Amb 8 tentacles retirats, l’Ona pot escapar.',win:'L’Ona és lliure! El monstre t’acomiada amb un somriure.',symbol:'✦',color:'#e76f9b'},
{id:'tresor',name:'El tresor del vaixell enfonsat',topic:'Multiplica potències',detail:'Productes de potències de la mateixa base.',story:'Un mapa antic assenyala un cofre entre les restes d’un vaixell. Deu obstacles bloquegen el pas. Les potències t’ajudaran a avançar!',action:'obstacles retirats',goal:'Amb 8 obstacles retirats, arribaràs al cofre.',win:'El cofre s’obre! Has descobert el tresor de les potències.',symbol:'◆',color:'#f8bf49'},
{id:'atlantida',name:'Les portes d’Atlàntida',topic:'Divideix i descobreix el zero',detail:'Quocients de la mateixa base i exponent zero.',story:'Les portes d’Atlàntida fa segles que són tancades. Activa els engranatges del portal per entrar a la ciutat submergida.',action:'engranatges activats',goal:'Amb 8 engranatges actius, les portes s’obriran.',win:'Atlàntida t’obre les portes. Benvingut a la ciutat perduda!',symbol:'⚙',color:'#76dbca'},
{id:'submari',name:'El submarí avariat',topic:'Potències de potències',detail:'Dos i tres nivells de potències.',story:'El submarí Bombolla necessita reparacions. Ajuda la mecànica Bruna a posar en marxa els deu sistemes de bord.',action:'sistemes reparats',goal:'Amb 8 sistemes reparats, el Bombolla podrà navegar.',win:'Motors en marxa! El Bombolla torna a navegar gràcies a tu.',symbol:'⊕',color:'#ffa36d'},
{id:'far',name:'El far de les profunditats',topic:'La gran missió final',detail:'Combina tot el que has après sobre potències.',story:'Un banc de peixos ha perdut el camí de casa. Carrega els cristalls del far i il·lumina una ruta segura pel fons marí.',action:'cristalls carregats',goal:'Amb 8 cristalls carregats, el far guiarà els peixos.',win:'El far brilla! Els peixos retroben la seva llar.',symbol:'✧',color:'#b6a4ee'}];
const integer=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const power=(a,b)=>`${a}<sup>${b}</sup>`;
function question(room,i){
 let a=integer(2,9),m=integer(2,5),n=integer(2,5),p=integer(2,4),prompt,expression,answer,h1,h2,explanation,kind='number',options;
 const result=(pr,ex,an,one,two,why)=>({prompt:pr,expression:ex,answer:String(an),hints:[one,two],explanation:why,kind,options});
 if(room===0){
  switch(i){
  case 0:if(a===2&&n===2)n=3;kind='choice';options=[`Multiplicar ${n} factors iguals a ${a}.`,`Multiplicar ${a} per ${n}.`,`Sumar ${n} vegades el nombre ${a}.`];for(let j=options.length-1;j>0;j--){let k=integer(0,j);[options[j],options[k]]=[options[k],options[j]];}return result('Què representa aquesta potència?',power(a,n),options.findIndex(t=>t===`Multiplicar ${n} factors iguals a ${a}.`)+1,'Una potència representa una multiplicació de factors iguals.','La base és el factor repetit i l’exponent indica quants factors hi ha.',`${a}^${n} = ${Array(n).fill(a).join(' · ')}. No és ${a} · ${n}.`);
  case 1:return result('Quin és l’exponent?',power(a,n),n,'L’exponent indica quants factors iguals multipliquem.','Mira el nombre petit de dalt.',`L’exponent és ${n}: multipliquem ${n} factors iguals a ${a}.`);
  case 2:return result('Quin exponent representa aquest producte?',Array(n).fill(a).join(' · '),n,'Compta quants factors hi ha.','Cada factor compta una vegada.',`Hi ha ${n} factors: ${Array(n).fill(a).join(' · ')} = ${a}^${n}.`);
  case 3:case 4: a=integer(2,6);n=i===3?2:3;return result(i===3?'Calcula el quadrat.':'Calcula el cub.',power(a,n),a**n,'La potència és un producte de factors iguals, no base per exponent.',Array(n).fill(a).join(' · '),`${a}^${n} = ${Array(n).fill(a).join(' · ')} = ${a**n}.`);
  case 5:return result('Quina és la base d’aquesta potència?',power(a,n),a,'La base és el factor que es repeteix.','Mira el nombre gran, a baix.',`La base és ${a}; l’exponent és ${n}.`);
  case 6:n=integer(2,20);return result('Quant val una potència de base 1?',power(1,n),1,'Multiplica uns: 1 · 1 · 1…','Multiplicar per 1 no canvia el resultat.',`1^${n} = 1.`);
  case 7:return result('Quant val una potència de base 0?',power(0,n),0,'Tots els factors són zero.','Qualsevol producte que té un factor zero val zero.',`0^${n} = 0, perquè l’exponent és positiu.`);
  case 8:n=integer(2,5);return result('Calcula aquesta potència de 10.',power(10,n),10**n,'És un 1 seguit de zeros.',`Escriu un 1 seguit de ${n} zeros.`,`10^${n} = ${10**n}.`);
  default:a=integer(2,6);return result(`Un escull té ${a} files amb ${a} coralls a cada fila. Quants coralls hi ha?`,power(a,2),a*a,'És una disposició quadrada.','Multiplica files per coralls de cada fila.',`${a} · ${a} = ${a*a} coralls.`);
  }
 }
 if(room===1){
  if(i===8){a=integer(2,5);m=integer(2,3);n=integer(2,3);return result('Calcula el resultat numèric del producte.',`${power(a,m)} · ${power(a,n)}`,a**(m+n),'Si les bases són iguals, suma els exponents.',`Primer obtens ${a}^${m+n}.`,`${a}^${m} · ${a}^${n} = ${a}^${m+n} = ${a**(m+n)}.`);}
  if(i===9){a=integer(2,5);return result(`Cada caixa té ${a**m} perles. Hi ha ${a**n} caixes. Completa l’exponent del total.`,`${power(a,m)} · ${power(a,n)} = ${a}<sup>?</sup>`,m+n,'El total és un producte de potències de la mateixa base.',`Suma ${m} + ${n}.`,`El total és ${a}^${m+n} perles.`);}
  if(i===5)n=0;if(i===6)m=1;
  let total=m+n,ex=`${power(a,m)} · ${power(a,n)}`,sum=`${m} + ${n}`;
  if(i===3||i===7){ex+=` · ${power(a,p)}`;total+=p;sum+=` + ${p}`;}
  return result('Escriu l’exponent de la potència resultant.',`${ex} = ${a}<sup>?</sup>`,total,'Conserva la base i suma els exponents.',`Calcula ${sum}.`,`${ex.replace(/<sup>/g,'^').replace(/<\/sup>/g,'')} té exponent ${sum} = ${total}. La base continua sent ${a}.`);
 }
 if(room===2){
  if(i===0||i===5){return result('Calcula la potència d’exponent zero.',power(a,0),1,'Qualsevol base diferent de zero elevada a zero val 1.','Pensa en dividir un nombre no nul per ell mateix.',`${a}^0 = 1. No és ${a} · 0.`);}
  if(i===1)m=n;
  else m=n+integer(1,5);
  if(i===6)n=0;
  if(i===8){a=integer(2,5);m=n+2;return result('Calcula el resultat numèric del quocient.',`${power(a,m)} : ${power(a,n)}`,a**(m-n),'La base és igual: resta els exponents.',`Primer obtens ${a}^${m-n}.`,`${a}^${m} : ${a}^${n} = ${a}^${m-n} = ${a**(m-n)}.`);}
  if(i===9){return result('Completa l’exponent que falta.',`${power(a,m)} : ${a}<sup>?</sup> = ${power(a,m-n)}`,n,'L’exponent final és el del dividend menys el del divisor.',`Resol ${m} − ? = ${m-n}.`,`${m} − ${n} = ${m-n}; falta l’exponent ${n}.`);}
  return result('Escriu l’exponent de la potència resultant.',`${power(a,m)} : ${power(a,n)} = ${a}<sup>?</sup>`,m-n,'En dividir potències de la mateixa base, resta els exponents.',`Calcula ${m} − ${n}.`,`${a}^${m} : ${a}^${n} = ${a}^${m-n}. La base és no nul·la.`);
 }
 if(room===3){
  if(i===4)p=1;if(i===5)p=0;
  if(i<4||i===8){if(i===8){a=integer(2,4);m=2;n=2;return result('Calcula el resultat numèric.',`(${power(a,m)})<sup>${n}</sup>`,a**(m*n),'Multiplica els exponents abans de calcular.',`Primer obtens ${a}^${m*n}.`,`(${a}^${m})^${n} = ${a}^${m*n} = ${a**(m*n)}.`);}
   return result('Escriu l’exponent de la potència resultant.',`(${power(a,m)})<sup>${n}</sup> = ${a}<sup>?</sup>`,m*n,'Una potència d’una potència conserva la base i multiplica els exponents.',`Calcula ${m} · ${n}.`,`(${a}^${m})^${n} = ${a}^${m*n}.`);
  }
  if(i===9){return result('Troba l’exponent exterior que falta.',`(${power(a,m)})<sup>?</sup> = ${power(a,m*n)}`,n,'Els exponents es multipliquen.',`Resol ${m} · ? = ${m*n}.`,`Falta ${n}, perquè ${m} · ${n} = ${m*n}.`);}
  return result('Tres nivells: quin és l’exponent final?',`((${power(a,m)})<sup>${n}</sup>)<sup>${p}</sup> = ${a}<sup>?</sup>`,m*n*p,'En una cadena de potències, multiplica tots els exponents.',`Calcula ${m} · ${n} · ${p}.`,`((${a}^${m})^${n})^${p} = ${a}^${m*n*p}.`);
 }
 if(i===0)return question(0,integer(0,2));if(i===1)return question(0,integer(3,4));if(i===2)return question(1,3);if(i===3)return question(2,2);if(i===4)return question(3,6);if(i===5)return question(2,0);if(i===6)return question(0,8);
 if(i===7){a=integer(2,6);m=integer(2,3);return result('Calcula la suma. Atenció: aquí no multipliquem!',`${power(a,m)} + ${power(a,m)}`,2*a**m,'En una suma no podem aplicar la regla del producte de potències.','Calcula cada potència i després suma els dos resultats.',`${a**m} + ${a**m} = ${2*a**m}.`);}
 if(i===8)return result('Combina les propietats i escriu l’exponent final.',`(${power(a,m)} · ${power(a,n)})<sup>${p}</sup> = ${a}<sup>?</sup>`,(m+n)*p,'Primer suma els exponents del producte; després aplica la potència exterior.',`Calcula (${m} + ${n}) · ${p}.`,`L’exponent final és (${m} + ${n}) · ${p} = ${(m+n)*p}.`);
 m=n+p;return result('L’últim cristall: escriu l’exponent final.',`(${power(a,m)} : ${power(a,n)})<sup>${p}</sup> = ${a}<sup>?</sup>`,(m-n)*p,'Primer resta els exponents del quocient; després multiplica.',`Calcula (${m} − ${n}) · ${p}.`,`L’exponent final és (${m} − ${n}) · ${p} = ${(m-n)*p}.`);
}
function generate(room,previous=[]){let qs;for(let j=0;j<50;j++){qs=Array.from({length:10},(_,i)=>({...question(room,i),errors:0,hintsUsed:0,done:false,correct:false,points:0,draft:'',responses:[]}));if(!previous.some(at=>at.questions.every((q,i)=>q.expression===qs[i].expression&&q.answer===qs[i].answer)))break;}return qs;}
function check(q,value){const s=String(value).trim();if(!/^\d+$/.test(s))return {invalid:true};const ok=Number(s)===Number(q.answer);q.responses.push(s);if(ok){q.done=true;q.correct=true;q.points=[10,7,4][q.hintsUsed];}else{q.errors++;if(q.errors>=3){q.done=true;q.correct=false;q.points=0;}else q.hintsUsed=Math.max(q.hintsUsed,q.errors);}q.draft='';return {correct:ok,done:q.done};}
const stats=a=>({correct:a.questions.filter(q=>q.done&&q.correct).length,failed:a.questions.filter(q=>q.done&&!q.correct).length,done:a.questions.filter(q=>q.done).length,points:a.questions.reduce((s,q)=>s+q.points,0),hints:a.questions.reduce((s,q)=>s+q.hintsUsed,0)});
// Reconstrueix la notació de les explicacions antigues a partir de la fórmula original.
function explanation(q){const marker=' té exponent ',at=q.explanation.indexOf(marker);if(at<0)return q.explanation;const original=q.expression.split('=')[0].trim().replace(/<sup>/g,'^').replace(/<\/sup>/g,'');return original+q.explanation.slice(at);}
const api={rooms,question,generate,check,stats,explanation};root.Ocean=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
