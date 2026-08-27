(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{m(),u(),g(),f(),h(),v(),y(),L()});function m(){const t=document.getElementById("typewriter");if(!t)return;const e=["Event-Driven Microservices.","Agentic AI & AI-Native Applications.","High-Throughput Kafka & Redis Architecture.","Scalable Cloud Systems on Azure & Kubernetes."];let i=0,s=0,n=!1,o=70;function r(){const a=e[i];n?(t.textContent=a.substring(0,s-1),s--,o=35):(t.textContent=a.substring(0,s+1),s++,o=70),!n&&s===a.length?(n=!0,o=2e3):n&&s===0&&(n=!1,i=(i+1)%e.length,o=500),setTimeout(r,o)}r()}function u(){const t=document.getElementById("terminal-input"),e=document.getElementById("terminal-screen"),i=document.getElementById("cli-clear-btn"),s=document.querySelectorAll(".cmd-chip"),n=document.getElementById("terminal-trigger");if(!t||!e)return;n&&n.addEventListener("click",()=>{const r=document.getElementById("terminal-section");r&&(r.scrollIntoView({behavior:"smooth"}),setTimeout(()=>t.focus(),500))}),t.addEventListener("keydown",r=>{if(r.key==="Enter"){const a=t.value.trim().toLowerCase();a&&(o(a),t.value="")}}),s.forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-cmd");o(a)})}),i&&i.addEventListener("click",()=>{e.innerHTML=`
        <div class="terminal-output-line">
          <span class="prompt-user">guest@pankaj.dev:~$</span> <span class="cmd-text">clear</span>
        </div>
        <div class="terminal-response"><p>Terminal cleared. Type <span class="highlight-cmd">'help'</span> for commands.</p></div>
      `});function o(r){const a=document.createElement("div");a.className="terminal-output-line",a.innerHTML=`<span class="prompt-user">guest@pankaj.dev:~$</span> <span class="cmd-text">${d(r)}</span>`,e.appendChild(a);const l=document.createElement("div");l.className="terminal-response";let c="";switch(r){case"help":c=`
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
          <p>  • <strong>Security:</strong> RBAC, ABAC, Infosec Compliance, API Rate Limiting</p>
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
          <p>  • LinkedIn : https://linkedin.com/in/PankaJ</p>
          <p>  • Location : Mumbai / Pune / Bangalore, India</p>
        `;break;case"github":window.open("https://github.com/tacquire/","_blank"),c='<p>🔗 Opening <a href="https://github.com/tacquire/" target="_blank" style="color:var(--primary)">https://github.com/tacquire/</a> in a new tab...</p>';break;default:c=`<p>❌ Command not recognized: <span style="color:#ff5f56">'${d(r)}'</span>. Type <span class="highlight-cmd">'help'</span> for list of commands.</p>`;break}l.innerHTML=c,e.appendChild(l),e.scrollTop=e.scrollHeight}}function d(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function g(){const t=document.querySelectorAll(".filter-btn"),e=document.querySelectorAll(".skill-card");t.length&&t.forEach(i=>{i.addEventListener("click",()=>{t.forEach(n=>n.classList.remove("active")),i.classList.add("active");const s=i.getAttribute("data-filter");e.forEach(n=>{const o=n.getAttribute("data-category");s==="all"||o===s?n.classList.remove("hidden"):n.classList.add("hidden")})})})}function f(){document.querySelectorAll(".copy-btn").forEach(e=>{e.addEventListener("click",()=>{const i=e.getAttribute("data-copy");i&&navigator.clipboard.writeText(i).then(()=>{p(`Copied to clipboard: ${i}`)}).catch(s=>{p("Failed to copy",!0)})})})}function p(t,e=!1){const i=document.getElementById("toast-container");if(!i)return;const s=document.createElement("div");s.className="toast",e&&(s.style.borderColor="#ff5f56"),s.innerHTML=`<i class="${e?"fa-solid fa-circle-exclamation":"fa-solid fa-circle-check"}" style="color:${e?"#ff5f56":"var(--accent)"}"></i> ${d(t)}`,i.appendChild(s),setTimeout(()=>{s.remove()},3e3)}window.handleContactSubmit=function(){const t=document.getElementById("contact-name").value;p(`Thank you, ${t}! Message sent successfully.`),document.getElementById("contact-form").reset()};function h(){const t=document.getElementById("theme-toggle");if(!t)return;localStorage.getItem("theme")==="light"&&(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),t.innerHTML='<i class="fa-solid fa-sun"></i>'),t.addEventListener("click",()=>{document.documentElement.classList.contains("light")?(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),t.innerHTML='<i class="fa-solid fa-moon"></i>',localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),t.innerHTML='<i class="fa-solid fa-sun"></i>',localStorage.setItem("theme","light"))})}function v(){const t=document.getElementById("mobile-toggle"),e=document.getElementById("nav-links");!t||!e||(t.addEventListener("click",()=>{e.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",()=>{e.classList.remove("active")})}))}function y(){const t=document.getElementById("resume-btn"),e=document.getElementById("resume-modal"),i=document.getElementById("close-modal-btn");!t||!e||(t.addEventListener("click",()=>{e.classList.add("active")}),i&&i.addEventListener("click",()=>{e.classList.remove("active")}),e.addEventListener("click",s=>{s.target===e&&e.classList.remove("active")}))}function L(){const t=document.querySelectorAll("section"),e=document.querySelectorAll(".nav-link");window.addEventListener("scroll",()=>{let i="";t.forEach(s=>{const n=s.offsetTop-100,o=s.clientHeight;window.scrollY>=n&&window.scrollY<n+o&&(i=s.getAttribute("id"))}),e.forEach(s=>{s.classList.remove("active"),s.getAttribute("href")===`#${i}`&&s.classList.add("active")})})}
