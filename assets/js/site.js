const COURSE_NAV = [
  { n: 1, title: "Connect to the Virtual Lab Environment", href: "lab-01.html", sdc: false, tasks: [
      ["1.1", "Verify Lab Access", "lab-01.html#task-1-1"],
      ["1.2", "Use the Lab Clipboard", "lab-01.html#task-1-2"],
      ["1.3", "Sign In to the Zscaler Admin Console", "lab-01.html#task-1-3"]
  ]},
  { n: 2, title: "Configure User and Administrator Access Entitlements", href: "lab-02.html", sdc: false, tasks: [
      ["2.1", "Create Departments and User Groups", "lab-02.html#task-2-1"],
      ["2.2", "Create Users", "lab-02.html#task-2-2"],
      ["2.3", "Add Administrative and Service Entitlements", "lab-02.html#task-2-3"],
      ["2.4", "Validate Entitlement Access for Users", "lab-02.html#task-2-4"]
  ]},
  { n: 3, title: "Forward Traffic with Zscaler Client Connector", href: "lab-03.html", sdc: false, tasks: [
      ["3.1", "Configure Traffic Forwarding Options", "lab-03.html#task-3-1"],
      ["3.2", "Sign In to Zscaler Client Connector and Verify Protection", "lab-03.html#task-3-2"]
  ]},
  { n: 4, title: "Configure Firewall Filtering Policy", href: "lab-04.html", sdc: false, tasks: [
      ["4.1", "Test Non-Web Traffic with the Default Firewall Block", "lab-04.html#task-4-1"],
      ["4.2", "Allow Outbound SSH and ICMP Traffic", "lab-04.html#task-4-2"],
      ["4.3", "Restrict Applications with Firewall Filtering", "lab-04.html#task-4-3"]
  ]},
  { n: 5, title: "Configure SSL/TLS Inspection Policies", href: "lab-05.html", sdc: false, tasks: [
      ["5.1", "Enable SSL/TLS Inspection for All Destinations", "lab-05.html#task-5-1"],
      ["5.2", "Verify Zscaler CA Installation [Optional]", "lab-05.html#task-5-2"],
      ["5.3", "Review Certificate Pinning Errors", "lab-05.html#task-5-3"]
  ]},
  { n: 6, title: "Configure Content Filtering & Access Control", href: "lab-06.html", sdc: false, tasks: [
      ["6.1", "View Threat Protection Settings", "lab-06.html#task-6-1"],
      ["6.2", "Configure Content Filtering Controls", "lab-06.html#task-6-2"],
      ["6.3", "Test End-User Experience with URL Filtering", "lab-06.html#task-6-3"],
      ["6.4", "Configure Cloud App Control", "lab-06.html#task-6-4"]
  ]},
  { n: 7, title: "Configure DNS Security", href: "lab-07.html", sdc: false, tasks: [
      ["7.1", "Configure the Windows App Profile for DNS", "lab-07.html#task-7-1"],
      ["7.2", "Configure a DNS Control Policy", "lab-07.html#task-7-2"],
      ["7.3", "View DNS Insight Logs", "lab-07.html#task-7-3"]
  ]},
  { n: 8, title: "Enforce Policy with Unified DLP across Multi-Channel", href: "lab-08.html", sdc: false, tasks: [
      ["8.1", "Protect PII Information for Data in Motion", "lab-08.html#task-8-1"]
  ]},
  { n: 9, title: "Provision ZPA Infrastructure", href: "lab-09.html", sdc: false, tasks: [
      ["9.1", "Provision an App Connector", "lab-09.html#task-9-1"],
      ["9.2", "Activate the App Connector", "lab-09.html#task-9-2"]
  ]},
  { n: 10, title: "Add a Corporate Application", href: "lab-10.html", sdc: false, tasks: [
      ["10.1", "Configure a Wildcard Application Segment", "lab-10.html#task-10-1"],
      ["10.2", "Configure User-Specific Access to the Intranet", "lab-10.html#task-10-2"],
      ["10.3", "Enable ICMP Access", "lab-10.html#task-10-3"]
  ]},
  { n: 11, title: "Troubleshoot Access to an Internal Application for a Specific User", href: "lab-11.html", sdc: false, tasks: [
      ["11.1", "Identify the Root Cause", "lab-11.html#task-11-1"],
      ["11.2", "Resolve the Access Issue", "lab-11.html#task-11-2"]
  ]},
  { n: 12, title: "Traffic Forwarding through SIPA", href: "lab-12.html", sdc: false, tasks: [
      ["12.1", "Configure Source IP Anchoring in ZPA", "lab-12.html#task-12-1"],
      ["12.2", "Configure ZIA Forwarding for SIPA", "lab-12.html#task-12-2"],
      ["12.3", "Verify SIPA Functionality", "lab-12.html#task-12-3"]
  ]},
  { n: 13, title: "Access an Internal Application using RDP [Optional]", href: "lab-13.html", sdc: false, tasks: [
      ["13.1", "Verify Access to the Internal Application Using RDP", "lab-13.html#task-13-1"]
  ]},
  { n: 14, title: "Navigate ZDX Dashboards", href: "lab-14.html", sdc: true, tasks: [
      ["14.1", "View the ZDX Performance Dashboard", "lab-14.html#task-14-1"],
      ["14.2", "View Incidents and Self-Service Dashboards", "lab-14.html#task-14-2"],
      ["14.3", "View the Application Overview Dashboard", "lab-14.html#task-14-3"],
      ["14.4", "View the User Overview Dashboard", "lab-14.html#task-14-4"]
  ]},
  { n: 15, title: "Troubleshoot Poor Wi-Fi", href: "lab-15.html", sdc: true, tasks: [
      ["15.1", "View User ZDX Score for an Application", "lab-15.html#task-15-1"],
      ["15.2", "Analyze a Poor ZDX Score Interval", "lab-15.html#task-15-2"],
      ["15.3", "Compare to the Last Known Good Score", "lab-15.html#task-15-3"],
      ["15.4", "Isolate the High-Latency Hop", "lab-15.html#task-15-4"],
      ["15.5", "Correlate Device Events with ZDX Score Changes", "lab-15.html#task-15-5"]
  ]},
  { n: 16, title: "Troubleshoot Slow DNS Response", href: "lab-16.html", sdc: true, tasks: [
      ["16.1", "Use ZDX Copilot for Root Cause Analysis", "lab-16.html#task-16-1"],
      ["16.2", "View the User ZDX Score Over Time", "lab-16.html#task-16-2"],
      ["16.3", "Analyze High Page Fetch Time", "lab-16.html#task-16-3"],
      ["16.4", "Confirm the Root Cause with ZDX Analysis", "lab-16.html#task-16-4"]
  ]}
];
const TOTAL_TASKS = COURSE_NAV.reduce((sum, lab) => sum + (lab.tasks?.length || 0), 0);
function currentPage() { return document.body.dataset.page || "home"; }
function renderNav() {
  const holder=document.getElementById("course-nav"); if(!holder) return; const page=currentPage();
  const labs=COURSE_NAV.map(lab=>{
    const active=page===`lab-${String(lab.n).padStart(2,"0")}`;
    const explainers={
      2:["lab-02.html#entitlements-explainer","Entitlements explained"],
      3:["lab-03.html#profiles-explainer","App + Forwarding Profiles"],
      5:["lab-05.html#tls-explainer","TLS inspection explained"],
      8:["lab-08.html#dlp-explainer","DLP concepts"]
    };
    const concept=active && explainers[lab.n] ? `<a class="nav-link" href="${explainers[lab.n][0]}"><span class="num">i</span><span>${explainers[lab.n][1]}</span></a>`:"";
    const sub=active && lab.tasks ? `<div class="nav-sub">${concept}${lab.tasks.map(t=>`<a class="nav-link" href="${t[2]}"><span class="num">${t[0]}</span><span>${t[1]}</span></a>`).join("")}</div>`:"";
    const zpaCheckpoint=lab.n===9 ? `<div class="nav-label nav-label-concept">ZPA foundation</div><a class="nav-link ${page==="zpa-explainer"?"active":""}" href="zpa-explainer.html"><span class="num">ZPA</span><span>Private Access concepts</span></a>`:"";
    const checkpoint=lab.n===14 ? `<div class="nav-label nav-label-sdc">Solutions Demo Center</div><a class="nav-link ${page==="sdc-access"?"active":""}" href="sdc-access.html"><span class="num">SDC</span><span>Access checkpoint</span></a>`:"";
    const badge=lab.sdc?'<span class="nav-badge">SDC</span>':'';
    return `${zpaCheckpoint}${checkpoint}<a class="nav-link ${active?"active":""}" href="${lab.href}"><span class="num">${String(lab.n).padStart(2,"0")}</span><span>${lab.title}</span>${badge}</a>${sub}`;
  }).join("");
  holder.innerHTML=`<aside class="sidebar" aria-label="Course navigation"><div class="brand"><img class="brand-mark" src="assets/images/zscaler-logo.svg" alt="Zscaler logo"><div class="brand-copy"><strong>EDU-200</strong><span>Administrator Lab Guide</span></div></div><div class="sidebar-scroll"><div class="nav-label">Start here</div><a class="nav-link ${page==="home"?"active":""}" href="index.html#overview"><span class="num">⌂</span><span>Introduction</span></a><a class="nav-link" href="index.html#navigation-guide"><span class="num">↗</span><span>Navigation guide</span></a><a class="nav-link" href="index.html#contents"><span class="num">≡</span><span>Course contents</span></a><div class="nav-label">Hands-on labs</div>${labs}</div><div class="sidebar-footer"><div class="progress-card"><div class="progress-row"><span>Course progress</span><span id="progress-label">0/${TOTAL_TASKS} tasks</span></div><div class="progress-track"><div class="progress-bar" id="progress-bar"></div></div></div></div></aside>`;
}
function applyTheme(theme){const root=document.documentElement;root.dataset.theme=theme;localStorage.setItem("edu200-theme",theme);document.querySelectorAll("[data-theme-icon]").forEach(el=>el.textContent=theme==="dark"?"☀":"☾");}
function initTheme(){const stored=localStorage.getItem("edu200-theme");const preferred=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";applyTheme(stored||preferred);document.querySelectorAll("[data-theme-toggle]").forEach(btn=>btn.addEventListener("click",()=>applyTheme(document.documentElement.dataset.theme==="dark"?"light":"dark")));}
function initCopy(){document.querySelectorAll("[data-copy]").forEach(btn=>btn.addEventListener("click",async()=>{const value=btn.dataset.copy;try{await navigator.clipboard.writeText(value);const old=btn.textContent;btn.textContent="Copied";setTimeout(()=>btn.textContent=old,1200);}catch{btn.textContent=value;}}));}
function progress(){const ids=COURSE_NAV.flatMap(l=>l.tasks.map(t=>t[0]));const done=ids.filter(id=>localStorage.getItem(`edu200-task-${id}`)==="1").length;const label=document.getElementById("progress-label");const bar=document.getElementById("progress-bar");if(label)label.textContent=`${done}/${TOTAL_TASKS} tasks`;if(bar)bar.style.width=`${Math.round(done/TOTAL_TASKS*100)}%`;}
function initTasks(){document.querySelectorAll("[data-task-check]").forEach(input=>{const id=input.dataset.taskCheck;input.checked=localStorage.getItem(`edu200-task-${id}`)==="1";input.addEventListener("change",()=>{localStorage.setItem(`edu200-task-${id}`,input.checked?"1":"0");progress();});});progress();}
function initLightbox(){const dlg=document.getElementById("image-modal");if(!dlg)return;const image=dlg.querySelector("img");const cap=dlg.querySelector("[data-modal-caption]");document.querySelectorAll("[data-lightbox]").forEach(btn=>btn.addEventListener("click",()=>{image.src=btn.querySelector("img").src;image.alt=btn.querySelector("img").alt;cap.textContent=btn.dataset.caption||image.alt;dlg.showModal();}));dlg.querySelector("[data-modal-close]").addEventListener("click",()=>dlg.close());dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close();});}
function initMobileNav(){document.querySelectorAll("[data-menu-toggle]").forEach(btn=>btn.addEventListener("click",()=>document.body.classList.toggle("nav-open")));document.addEventListener("click",e=>{if(window.innerWidth<=980&&document.body.classList.contains("nav-open")&&!e.target.closest(".sidebar")&&!e.target.closest("[data-menu-toggle]"))document.body.classList.remove("nav-open");});}
function initLabFilter(){const input=document.getElementById("lab-filter");if(!input)return;input.addEventListener("input",()=>{const q=input.value.trim().toLowerCase();document.querySelectorAll(".lab-card").forEach(card=>{const match=card.textContent.toLowerCase().includes(q);card.style.display=match?"block":"none";if(q&&match)card.open=true;});});}
function initGlobalSearch(){const input=document.getElementById("global-search-input");const box=document.getElementById("global-search-results");if(!input||!box)return;const items=[
  {label:"Lab 2 concept — Administrative and Service Entitlements",href:"lab-02.html#entitlements-explainer"},
  {label:"Lab 3 concept — App Profile + Forwarding Profile",href:"lab-03.html#profiles-explainer"},
  {label:"Lab 5 concept — SSL/TLS inspection, certificates and certificate pinning",href:"lab-05.html#tls-explainer"},
  {label:"Lab 8 concept — DLP dictionaries, engines and policies",href:"lab-08.html#dlp-explainer"},
  {label:"ZPA concepts — private application access, App Connectors and application segments",href:"zpa-explainer.html"}
];COURSE_NAV.forEach(l=>{items.push({label:`Lab ${l.n} — ${l.title}`,href:l.href});l.tasks.forEach(t=>items.push({label:`${t[0]} ${t[1]}`,href:t[2]}));});function render(){const q=input.value.trim().toLowerCase();if(!q){box.hidden=true;box.innerHTML="";return;}const hits=items.filter(x=>x.label.toLowerCase().includes(q)).slice(0,12);box.innerHTML=hits.length?hits.map(x=>`<a href="${x.href}">${x.label}</a>`).join(""):'<div class="search-empty">No matching lab/task</div>';box.hidden=false;}input.addEventListener("input",render);input.addEventListener("focus",render);document.addEventListener("click",e=>{if(!e.target.closest(".global-search"))box.hidden=true;});}
renderNav();document.addEventListener("DOMContentLoaded",()=>{initTheme();initCopy();initTasks();initLightbox();initMobileNav();initLabFilter();initGlobalSearch();});
