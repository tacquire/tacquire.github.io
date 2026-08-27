(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{m(),g(),u(),h(),f(),v(),b(),y()});function m(){const t=document.getElementById("typewriter");if(!t)return;const e=["Event-Driven Microservices.","Agentic AI & AI-Native Applications.","High-Throughput Kafka & Redis Architecture.","Scalable Cloud Systems on Azure & Kubernetes."];let o=0,s=0,n=!1,i=70;function a(){const r=e[o];n?(t.textContent=r.substring(0,s-1),s--,i=35):(t.textContent=r.substring(0,s+1),s++,i=70),!n&&s===r.length?(n=!0,i=2e3):n&&s===0&&(n=!1,o=(o+1)%e.length,i=500),setTimeout(a,i)}a()}function g(){const t=document.getElementById("terminal-input"),e=document.getElementById("terminal-screen"),o=document.getElementById("cli-clear-btn"),s=document.querySelectorAll(".cmd-chip"),n=document.getElementById("terminal-trigger");if(!t||!e)return;n&&n.addEventListener("click",()=>{const a=document.getElementById("terminal-section");a&&(a.scrollIntoView({behavior:"smooth"}),setTimeout(()=>t.focus(),500))}),t.addEventListener("keydown",a=>{if(a.key==="Enter"){const r=t.value.trim().toLowerCase();r&&(i(r),t.value="")}}),s.forEach(a=>{a.addEventListener("click",()=>{const r=a.getAttribute("data-cmd");i(r)})}),o&&o.addEventListener("click",()=>{e.innerHTML=`
        <div class="terminal-output-line">
          <span class="prompt-user">guest@pankaj.dev:~$</span> <span class="cmd-text">clear</span>
        </div>
        <div class="terminal-response"><p>Terminal cleared. Type <span class="highlight-cmd">'help'</span> for commands.</p></div>
      `});function i(a){const r=document.createElement("div");r.className="terminal-output-line",r.innerHTML=`<span class="prompt-user">guest@pankaj.dev:~$</span> <span class="cmd-text">${d(a)}</span>`,e.appendChild(r);const l=document.createElement("div");l.className="terminal-response";let c="";switch(a){case"help":c=`
          <p>📌 <strong>Available CLI Commands:</strong></p>
          <p>  • <span class="highlight-cmd">skills</span>       : View core backend, cloud & AI tech stack</p>
          <p>  • <span class="highlight-cmd">experience</span>   : Summary of SDE II & Senior Dev roles</p>
          <p>  • <span class="highlight-cmd">projects</span>     : Key architecture & research accomplishments</p>
          <p>  • <span class="highlight-cmd">utils</span>        : Developer tools & self-hosted workbench</p>
          <p>  • <span class="highlight-cmd">blog</span>         : Technical articles & architecture deep dives</p>
          <p>  • <span class="highlight-cmd">certs</span>        : List verified professional credentials</p>
          <p>  • <span class="highlight-cmd">contact</span>      : Phone, email, location & social handles</p>
          <p>  • <span class="highlight-cmd">github</span>       : Open GitHub profile (github.com/tacquire)</p>
          <p>  • <span class="highlight-cmd">clear</span>        : Clear terminal output</p>
        `;break;case"utils":case"workbench":case"tool":case"tools":c=`
          <p>🧰 <strong>Developer Workbench & Self-Hosted Utilities:</strong></p>
          <p>  • <strong>FreshRSS:</strong> Self-hosted RSS news aggregator & feed reader dashboard</p>
          <p>  • <strong>IT Tools:</strong> Data encoding, JWT inspector, JSON & SQL formatters</p>
          <p>  • <strong>Agentic AI Workbench:</strong> MCP tools, local Ollama models & prompt playground</p>
        `;break;case"blog":case"blogs":case"article":case"articles":c=`
          <p>📝 <strong>Featured Technical Articles & Blog:</strong></p>
          <p>  1. <strong>Building Scalable Event-Driven Microservices with Spring Boot & Kafka</strong> [6 min read]</p>
          <p>  2. <strong>Designing Agentic AI Applications with Model Context Protocol (MCP)</strong> [8 min read]</p>
          <p>  3. <strong>Optimizing Backend Latency: Redis Caching & Hibernate Query Tuning</strong> [5 min read]</p>
        `;break;case"skills":c=`
          <p>🚀 <strong>Pankaj's Technical Stack:</strong></p>
          <p>  • <strong>Backend:</strong> Java 8, Spring Boot, Spring Framework, Hibernate, Microservices, REST APIs, GraphQL</p>
          <p>  • <strong>Cloud & DevOps:</strong> Azure, AWS, Kubernetes (K8s), Docker, CI/CD, Maven, Git</p>
          <p>  • <strong>AI / ML:</strong> Agentic AI, AI-native Applications, Claude Code, Cursor, Ollama, MCP</p>
          <p>  • <strong>Databases & Caching:</strong> PostgreSQL, MongoDB, Redis Caching, Kafka, Neo4j Graph DB</p>
          <p>  • <strong>Security:</strong> Spring Security, JWT, RBAC, ABAC, Infosec Compliance, API Rate Limiting</p>
        `;break;case"exp":case"experience":c=`
          <p>💼 <strong>Career Timeline (6.6+ Years Total Experience):</strong></p>
          <p>  1. <strong>SDE II @ Jio Platform Limited (Reliance)</strong> [Mar 2023 - Jun 2026 | Mumbai]</p>
          <p>     └ Built Agentic AI onboarding & CX Omnichannel SaaS microservices. FreeSWITCH & WebRTC R&D.</p>
          <p>  2. <strong>Senior Software Developer @ Coforge</strong> [Apr 2022 - Mar 2023 | Bangalore]</p>
          <p>     └ Java 8/Spring microservices, e-commerce backend, Hibernate caching & Prometheus/Grafana.</p>
          <p>  3. <strong>Senior Software Engineer @ Infosys Limited</strong> [Dec 2019 - Apr 2022 | Bangalore]</p>
          <p>     └ Foreign banking modules, automated 113 mainframe tasks, optimized complex SQL queries.</p>
        `;break;case"projects":c=`
          <p>🛠️ <strong>Featured Projects:</strong></p>
          <p>  1. <strong>Agentic AI Customer Onboarding Platform (JioAssist / JioTara 2.0)</strong> — Event-driven microservices, WebRTC video call POCs, Redis rate limiting.</p>
          <p>  2. <strong>E-Commerce High-Throughput Engine</strong> — Cart/Payment microservices, Hibernate caching, low-latency API optimization.</p>
          <p>  3. <strong>Portable PCB Solar Charger (1V–12V)</strong> — Hardware solar energy regulator with custom PCB layout.</p>
          <p>  4. <strong>1D/2D Signal Analysis via FDTD Method</strong> — Computational wave simulation using Yee algorithm.</p>
        `;break;case"certs":case"certifications":c=`
          <p>🏆 <strong>Verified Credentials & Certifications:</strong></p>
          <p>  • <strong>Neo4j:</strong> Graph Data Science Certified & Certified Professional</p>
          <p>  • <strong>TestDome:</strong> Java-Hibernate Credential</p>
          <p>  • <strong>Jio:</strong> Certified Cursor Developer (ID: 50485222)</p>
          <p>  • <strong>Microsoft:</strong> Security, Compliance & Identity Fundamentals (ID: 1094-2259)</p>
          <p>  • <strong>HackerRank:</strong> Python, SQL & Problem Solving (Basic)</p>
          <p>  • <strong>DevOps Institute:</strong> DevOps Foundation (ID: 44944413)</p>
          <p>  • <strong>Tricentis:</strong> Certified Test Design Specialist L1 & L2</p>
        `;break;case"contact":c=`
          <p>📬 <strong>Contact Details:</strong></p>
          <p>  • Email    : mishra.pankaj942@gmail.com</p>
          <p>  • Phone    : +91 8669531868</p>
          <p>  • GitHub   : https://github.com/tacquire/</p>
          <p>  • LinkedIn : https://www.linkedin.com/in/pankaj942</p>
          <p>  • Location : Mumbai / Pune / Bangalore, India</p>
        `;break;case"github":window.open("https://github.com/tacquire/","_blank"),c='<p>🔗 Opening <a href="https://github.com/tacquire/" target="_blank" style="color:var(--primary)">https://github.com/tacquire/</a> in a new tab...</p>';break;default:c=`<p>❌ Command not recognized: <span style="color:#ff5f56">'${d(a)}'</span>. Type <span class="highlight-cmd">'help'</span> for list of commands.</p>`;break}l.innerHTML=c,e.appendChild(l),e.scrollTop=e.scrollHeight}}function d(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function u(){const t=document.querySelectorAll(".filter-btn"),e=document.querySelectorAll(".skill-card");t.length&&t.forEach(o=>{o.addEventListener("click",()=>{t.forEach(n=>n.classList.remove("active")),o.classList.add("active");const s=o.getAttribute("data-filter");e.forEach(n=>{const i=n.getAttribute("data-category");s==="all"||i&&i.includes(s)?n.classList.remove("hidden"):n.classList.add("hidden")})})})}function h(){document.querySelectorAll(".copy-btn").forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("data-copy");o&&navigator.clipboard.writeText(o).then(()=>{p(`Copied to clipboard: ${o}`)}).catch(s=>{p("Failed to copy",!0)})})})}function p(t,e=!1){const o=document.getElementById("toast-container");if(!o)return;const s=document.createElement("div");s.className="toast",e&&(s.style.borderColor="#ff5f56"),s.innerHTML=`<i class="${e?"fa-solid fa-circle-exclamation":"fa-solid fa-circle-check"}" style="color:${e?"#ff5f56":"var(--accent)"}"></i> ${d(t)}`,o.appendChild(s),setTimeout(()=>{s.remove()},3e3)}window.handleContactSubmit=function(){const t=document.getElementById("contact-name").value.trim(),e=document.getElementById("contact-email").value.trim(),o=document.getElementById("contact-subject").value.trim(),n=`Hi Pankaj,

${document.getElementById("contact-message").value.trim()}

---
Sender Name: ${t}
Sender Email: ${e}`,i=`mailto:mishra.pankaj942@gmail.com?subject=${encodeURIComponent(o)}&body=${encodeURIComponent(n)}`;p("Opening your email client to send message to mishra.pankaj942@gmail.com..."),window.location.href=i,document.getElementById("contact-form").reset()};function f(){const t=document.getElementById("theme-toggle");if(!t)return;localStorage.getItem("theme")==="light"&&(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),t.innerHTML='<i class="fa-solid fa-sun"></i>'),t.addEventListener("click",()=>{document.documentElement.classList.contains("light")?(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),t.innerHTML='<i class="fa-solid fa-moon"></i>',localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),t.innerHTML='<i class="fa-solid fa-sun"></i>',localStorage.setItem("theme","light"))})}function v(){const t=document.getElementById("mobile-toggle"),e=document.getElementById("nav-links");!t||!e||(t.addEventListener("click",()=>{e.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",()=>{e.classList.remove("active")})}))}function b(){const t=document.getElementById("resume-btn"),e=document.getElementById("resume-modal"),o=document.getElementById("close-modal-btn");!t||!e||(t.addEventListener("click",()=>{e.classList.add("active")}),o&&o.addEventListener("click",()=>{e.classList.remove("active")}),e.addEventListener("click",s=>{s.target===e&&e.classList.remove("active")}))}function y(){const t=document.querySelectorAll("section"),e=document.querySelectorAll(".nav-link");window.addEventListener("scroll",()=>{let o="";t.forEach(s=>{const n=s.offsetTop-100,i=s.clientHeight;window.scrollY>=n&&window.scrollY<n+i&&(o=s.getAttribute("id"))}),e.forEach(s=>{s.classList.remove("active"),s.getAttribute("href")===`#${o}`&&s.classList.add("active")})})}
