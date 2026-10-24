/* ===== EDIT YOUR CONTENT HERE ===== */
const DATA=[
 {id:"education",label:"Education",ic:"🎓",title:"My academic journey.",sub:"From science at school to English Language Teaching at master’s level.",tl:true,items:[
  {t:"MA in English Language Teaching (ELT)",d:"Currently pursuing my master’s degree, focused on teaching methodology, language learning and educational technology.",g:"Current",y:"2025 – Present"},
  {t:"HSC Part I & II, Pre-Medical",d:"Government Boys Degree College, Bhan Saeedabad, Jamshoro (BISE Hyderabad). Scored 711 out of 1100 marks, 64.63%, Grade B.",g:"Completed",y:"2020",img:"img03.jpg",cap:"HSC Marks Certificate, 2020",extra:[["img02.jpg","HSC Provisional Certificate"]]},
  {t:"SSC Part I & II, Science",d:"Shaheed Molvi Muhammad Suleman Sehto Govt. High School, Talti, Jamshoro (BISE Hyderabad). Scored 633 out of 850 marks, 74.47%, Grade A.",g:"Completed",y:"2018",img:"img05.jpg",cap:"SSC Marks Certificate, 2018",extra:[["img04.jpg","SSC Certificate"]]}]},
 {id:"courses",label:"English Courses",ic:"📚",title:"English courses.",sub:"Building fluency, confidence and strong communication skills.",items:[
  {t:"Functional English & Spoken Communication Skills",d:"Training course completed with distinction at the Department of English & Humanities, Bahria University, Karachi Campus.",g:"With Distinction",y:"15 Dec 2025",img:"img06.jpg",cap:"Bahria University, Certificate of Appreciation"},
  {t:"Advanced English & Communication Skills",d:"Intensive online course covering advanced grammar, vocabulary, reading comprehension and professional spoken and written communication.",g:"Certificate of Completion",y:"15 Sep 2025",img:"img07.jpg",cap:"Global English Academy"}]},
 {id:"extra",label:"Extracurricular",ic:"🏆",title:"Extracurricular activities.",sub:"Skills, sports and recognition beyond the classroom.",items:[
  {t:"Haemodialysis Technician Certificate",d:"One-year practical and theoretical training, Sindh Medical Faculty, Karachi. Passed the technician’s examination (128/200).",g:"Professional Certificate",y:"2023 – 2024",img:"img10.jpg",cap:"Sindh Medical Faculty, Haemodialysis Technician"},
  {t:"CIT Short Course (Grade A)",d:"Six-month training in Introduction to Computer, MS-Office, Graphics, Typing and Internet at Al-Arif Academy of Computer Science, Bhan Saeedabad.",g:"Grade A",y:"2022 – 2023",img:"img11.jpg",cap:"Al-Arif Academy of Computer Science"},
  {t:"Cricket Tournament Winner",d:"Part of the winning team, receiving trophies and medals in a local cricket tournament. Teamwork and sportsmanship on the field.",g:"Winner",y:"Sports",img:"img09.jpg",cap:"Cricket tournament trophies"},
  {t:"Certificate Recognition",d:"Receiving a certificate of recognition in a classroom ceremony for active participation.",g:"Recognition",y:"Event",img:"img08.jpg",cap:"Certificate presentation"}]},
 {id:"online",label:"Online Courses",ic:"💻",title:"Online courses.",sub:"Continuous learning through trusted digital platforms.",items:[
  {t:"Effective Business & Academic Communication",d:"Professional correspondence, collaborative tools, presentation skills and academic writing.",g:"Great Learning Academy",y:"14 Aug 2025",img:"img12.jpg",cap:"Great Learning Academy"},
  {t:"IT & Computer Fundamentals",d:"Essential computer operations, operating systems, Microsoft Office Suite, digital communication and basic troubleshooting.",g:"Microsoft Learn",y:"14 Nov 2025",img:"img13.jpg",cap:"Microsoft Learn"},
  {t:"English Language & Critical Writing Skills",d:"Sentence structure, advanced grammar, argumentative analysis and academic writing conventions.",g:"Alison",y:"22 Nov 2025",img:"img14.jpg",cap:"Alison"}]},
 {id:"class",label:"Class Activities",ic:"🎙️",title:"Class activities.",sub:"Panel discussion activity: sharing ideas and exchanging perspectives on syllabus design in my ELT class.",items:[
  {t:"Panel on Syllabus Design & Material Development",d:"Took part as a panelist in the ELT Part III panel discussion, held under the guidance of Prof. Dr. Ghulam Ali Burrio.",g:"Panelist",y:"ELT Part III",img:"img15.jpg",cap:"Panel Discussion on Syllabus Design and Material Development"},
  {t:"Certificate of Merit",d:"Received a certificate in the Department of English, Institute of English Language & Literature.",g:"Award",y:"Department of English",img:"img16.jpg",cap:"Certificate presentation, Department of English"}]}
];
/* ================================== */
const $=s=>document.querySelector(s),dyn=$("#dyn"),links=$("#links");
const nav=[["home","Home"],["about","About"],...DATA.map(s=>[s.id,s.label]),["contact","Contact"]];
links.innerHTML=nav.map(n=>`<a href="#${n[0]}">${n[1]}</a>`).join("");
const card=(s,i)=>`<div class="card rv">${i.img?`<div class="imw"><img class="im" loading="lazy" src="images/${i.img}" alt="${i.t}" data-cap="${i.cap||i.t}" data-src="images/${i.img}"></div>`:`<div class="ic">${s.ic}</div>`}<div><h3>${i.t}</h3><p>${i.d}</p><div class="meta"><span class="tag g">${i.g}</span><span class="tag">${i.y}</span>${(i.extra||[]).map(e=>`<span class="tag g" style="cursor:pointer" data-src="images/${e[0]}" data-cap="${e[1]}">View ${e[1]}</span>`).join("")}</div></div></div>`;
dyn.innerHTML=DATA.map(s=>`<section id="${s.id}"><div class="rv"><p class="eyebrow">${s.ic} ${s.label}</p><h2>${s.title}</h2><p class="lead">${s.sub}</p></div><div class="${s.tl?"tl":"grid"}">${s.items.map(i=>card(s,i)).join("")}</div></section>`).join("");
$("#yr").textContent=new Date().getFullYear();
/* typing */
const R=["MA Scholar in English Language Teaching","Aspiring English Language Educator","Lifelong Learner"];let ri=0,ci=0,del=false;
(function tp(){const w=R[ri];ci+=del?-1:1;$("#ty").textContent=w.slice(0,ci);let t=del?35:70;
if(!del&&ci===w.length){del=true;t=1500}else if(del&&ci===0){del=false;ri=(ri+1)%R.length;t=350}setTimeout(tp,t)})();
/* reveal + counters */
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");x.target.querySelectorAll("[data-n]").forEach(c=>{const n=+c.dataset.n,s=c.dataset.s||"";let v=0;const st=Math.max(1,n/40);const iv=setInterval(()=>{v=Math.min(n,v+st);c.textContent=Math.round(v)+s;if(v>=n)clearInterval(iv)},30)});io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
/* tilt */
if(matchMedia("(hover:hover) and (pointer:fine)").matches)document.querySelectorAll(".card").forEach(c=>{c.addEventListener("mousemove",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*9}deg) rotateX(${-y*9}deg) translateY(-4px)`});c.addEventListener("mouseleave",()=>c.style.transform="")});
/* progress + active link */
const secs=[...document.querySelectorAll("section")],al=[...links.children];
addEventListener("scroll",()=>{const h=document.documentElement;$("#bar").style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%";let cur=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=i});al.forEach((a,i)=>a.classList.toggle("on",i===cur))},{passive:true});
/* theme */
$("#th").onclick=()=>{const r=document.documentElement,d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark"};

/* lightbox */
const lb=$("#lb");document.addEventListener("click",e=>{const t=e.target.closest("[data-src]");if(t){lb.querySelector("img").src=t.dataset.src;lb.querySelector("p").textContent=t.dataset.cap||"";lb.classList.add("on");lb.setAttribute("aria-hidden","false")}else if(lb.classList.contains("on")&&e.target!==lb.querySelector("img")){lb.classList.remove("on");lb.setAttribute("aria-hidden","true")}});
addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("on")});

/* mobile menu */
const mb=$("#mb");mb.onclick=()=>{const o=links.classList.toggle("open");mb.setAttribute("aria-expanded",o);mb.textContent=o?"✕":"☰"};
links.addEventListener("click",e=>{if(e.target.tagName==="A"){links.classList.remove("open");mb.textContent="☰"}});
