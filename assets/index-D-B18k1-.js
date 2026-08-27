(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{p(),u(),g(),f(),h(),v(),y(),L()});function p(){const t=document.getElementById("typewriter");if(!t)return;const e=["Event-Driven Microservices.","Agentic AI & AI-Native Applications.","High-Throughput Kafka & Redis Architecture.","Scalable Cloud Systems on Azure & Kubernetes."];let o=0,i=0,n=!1,s=70;function a(){const r=e[o];n?(t.textContent=r.substring(0,i-1),i--,s=35):(t.textContent=r.substring(0,i+1),i++,s=70),!n&&i===r.length?(n=!0,s=2e3):n&&i===0&&(n=!1,o=(o+1)%e.length,s=500),setTimeout(a,s)}a()}function u(){const t=document.getElementById("terminal-input"),e=document.getElementById("terminal-screen"),o=document.getElementById("cli-clear-btn"),i=document.querySelectorAll(".cmd-chip"),n=document.getElementById("terminal-trigger");if(!t||!e)return;n&&n.addEventListener("click",()=>{const a=document.getElementById("terminal-section");a&&(a.scrollIntoView({behavior:"smooth"}),setTimeout(()=>t.focus(),500))}),t.addEventListener("keydown",a=>{if(a.key==="Enter"){const r=t.value.trim().toLowerCase();r&&(s(r),t.value="")}}),i.forEach(a=>{a.addEventListener("click",()=>{const r=a.getAttribute("data-cmd");s(r)})}),o&&o.addEventListener("click",()=>{e.innerHTML=`
        <div class="terminal-output-line">
          <span class="prompt-user">guest@pankaj.dev:~$</span> <span class="cmd-text">clear</span>
        </div>
        <div class="terminal-response"><p>Terminal cleared. Type <span class="highlight-cmd">'help'</span> for commands.</p></div>
      `});function s(a){const r=document.createElement("div");r.className="terminal-output-line",r.innerHTML=`<span class="prompt-user">guest@pankaj.dev:~$</span> <span class="cmd-text">${d(a)}</span>`,e.appendChild(r);const l=document.createElement("div");l.className="terminal-response";let c="";switch(a){case"help":c=`
          <p>📌 <strong>Available CLI Commands:</strong></p>
          <p>  • <span class="highlight-cmd">skills</span>       : View core backend, cloud & AI tech stack</p>
          <p>  • <span class="highlight-cmd">experience</span>   : Summary of SDE II & Senior Dev roles</p>
          <p>  • <span class="highlight-cmd">projects</span>     : Key architecture & research accomplishments</p>
          <p>  • <span class="highlight-cmd">certs</span>        : List verified professional credentials</p>
          <p>  • <span class="highlight-cmd">contact</span>      : Phone, email, location & social handles</p>
          <p>  • <span class="highlight-cmd">github</span>       : Open GitHub profile (github.com/tacquire)</p>
          <p>  • <span class="highlight-cmd">clear</span>        : Clear terminal output</p>
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
          <p>  • LinkedIn : https://linkedin.com/in/PankaJ942</p>
          <p>  • Location : Mumbai / Pune / Bangalore, India</p>
        `;break;case"github":window.open("https://github.com/tacquire/","_blank"),c='<p>🔗 Opening <a href="https://github.com/tacquire/" target="_blank" style="color:var(--primary)">https://github.com/tacquire/</a> in a new tab...</p>';break;default:c=`<p>❌ Command not recognized: <span style="color:#ff5f56">'${d(a)}'</span>. Type <span class="highlight-cmd">'help'</span> for list of commands.</p>`;break}l.innerHTML=c,e.appendChild(l),e.scrollTop=e.scrollHeight}}function d(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function g(){const t=document.querySelectorAll(".filter-btn"),e=document.querySelectorAll(".skill-card");t.length&&t.forEach(o=>{o.addEventListener("click",()=>{t.forEach(n=>n.classList.remove("active")),o.classList.add("active");const i=o.getAttribute("data-filter");e.forEach(n=>{const s=n.getAttribute("data-category");i==="all"||s&&s.includes(i)?n.classList.remove("hidden"):n.classList.add("hidden")})})})}function f(){document.querySelectorAll(".copy-btn").forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("data-copy");o&&navigator.clipboard.writeText(o).then(()=>{m(`Copied to clipboard: ${o}`)}).catch(i=>{m("Failed to copy",!0)})})})}function m(t,e=!1){const o=document.getElementById("toast-container");if(!o)return;const i=document.createElement("div");i.className="toast",e&&(i.style.borderColor="#ff5f56"),i.innerHTML=`<i class="${e?"fa-solid fa-circle-exclamation":"fa-solid fa-circle-check"}" style="color:${e?"#ff5f56":"var(--accent)"}"></i> ${d(t)}`,o.appendChild(i),setTimeout(()=>{i.remove()},3e3)}window.handleContactSubmit=function(){const t=document.getElementById("contact-name").value.trim(),e=document.getElementById("contact-email").value.trim(),o=document.getElementById("contact-subject").value.trim(),n=`Hi Pankaj,

${document.getElementById("contact-message").value.trim()}

---
Sender Name: ${t}
Sender Email: ${e}`,s=`mailto:mishra.pankaj942@gmail.com?subject=${encodeURIComponent(o)}&body=${encodeURIComponent(n)}`;m("Opening your email client to send message to mishra.pankaj942@gmail.com..."),window.location.href=s,document.getElementById("contact-form").reset()};function h(){const t=document.getElementById("theme-toggle");if(!t)return;localStorage.getItem("theme")==="light"&&(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),t.innerHTML='<i class="fa-solid fa-sun"></i>'),t.addEventListener("click",()=>{document.documentElement.classList.contains("light")?(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),t.innerHTML='<i class="fa-solid fa-moon"></i>',localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),t.innerHTML='<i class="fa-solid fa-sun"></i>',localStorage.setItem("theme","light"))})}function v(){const t=document.getElementById("mobile-toggle"),e=document.getElementById("nav-links");!t||!e||(t.addEventListener("click",()=>{e.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",()=>{e.classList.remove("active")})}))}function y(){const t=document.getElementById("resume-btn"),e=document.getElementById("resume-modal"),o=document.getElementById("close-modal-btn");!t||!e||(t.addEventListener("click",()=>{e.classList.add("active")}),o&&o.addEventListener("click",()=>{e.classList.remove("active")}),e.addEventListener("click",i=>{i.target===e&&e.classList.remove("active")}))}function L(){const t=document.querySelectorAll("section"),e=document.querySelectorAll(".nav-link");window.addEventListener("scroll",()=>{let o="";t.forEach(i=>{const n=i.offsetTop-100,s=i.clientHeight;window.scrollY>=n&&window.scrollY<n+s&&(o=i.getAttribute("id"))}),e.forEach(i=>{i.classList.remove("active"),i.getAttribute("href")===`#${o}`&&i.classList.add("active")})})}
