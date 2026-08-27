/* ==========================================================================
   PANKAJKUMAR MISHRA PORTFOLIO INTERACTIVE APPLICATION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initTerminalCLI();
  initSkillsFilter();
  initCopyButtons();
  initThemeToggle();
  initMobileMenu();
  initResumeModal();
  initScrollObserver();
});

/* ==========================================================================
   1. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  if (!typewriterElement) return;

  const phrases = [
    'Event-Driven Microservices.',
    'Agentic AI & AI-Native Applications.',
    'High-Throughput Kafka & Redis Architecture.',
    'Scalable Cloud Systems on Azure & Kubernetes.'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   2. INTERACTIVE DEVELOPER TERMINAL CLI
   ========================================================================== */
function initTerminalCLI() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalScreen = document.getElementById('terminal-screen');
  const clearBtn = document.getElementById('cli-clear-btn');
  const cmdChips = document.querySelectorAll('.cmd-chip');
  const terminalLink = document.getElementById('terminal-trigger');

  if (!terminalInput || !terminalScreen) return;

  // Click on terminal link scrolls to terminal and focuses input
  if (terminalLink) {
    terminalLink.addEventListener('click', () => {
      const section = document.getElementById('terminal-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => terminalInput.focus(), 500);
      }
    });
  }

  // Handle command submission
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.value.trim().toLowerCase();
      if (command) {
        executeCommand(command);
        terminalInput.value = '';
      }
    }
  });

  // Handle quick command chips
  cmdChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const command = chip.getAttribute('data-cmd');
      executeCommand(command);
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      terminalScreen.innerHTML = `
        <div class="terminal-output-line">
          <span class="prompt-user">guest@pankaj.dev:~$</span> <span class="cmd-text">clear</span>
        </div>
        <div class="terminal-response"><p>Terminal cleared. Type <span class="highlight-cmd">'help'</span> for commands.</p></div>
      `;
    });
  }

  function executeCommand(cmd) {
    // Print input line
    const inputLine = document.createElement('div');
    inputLine.className = 'terminal-output-line';
    inputLine.innerHTML = `<span class="prompt-user">guest@pankaj.dev:~$</span> <span class="cmd-text">${escapeHtml(cmd)}</span>`;
    terminalScreen.appendChild(inputLine);

    // Generate output
    const responseDiv = document.createElement('div');
    responseDiv.className = 'terminal-response';

    let responseHTML = '';

    switch (cmd) {
      case 'help':
        responseHTML = `
          <p>📌 <strong>Available CLI Commands:</strong></p>
          <p>  • <span class="highlight-cmd">skills</span>       : View core backend, cloud & AI tech stack</p>
          <p>  • <span class="highlight-cmd">experience</span>   : Summary of SDE II & Senior Dev roles</p>
          <p>  • <span class="highlight-cmd">projects</span>     : Key architecture & research accomplishments</p>
          <p>  • <span class="highlight-cmd">certs</span>        : List verified professional credentials</p>
          <p>  • <span class="highlight-cmd">contact</span>      : Phone, email, location & social handles</p>
          <p>  • <span class="highlight-cmd">github</span>       : Open GitHub profile (github.com/tacquire)</p>
          <p>  • <span class="highlight-cmd">clear</span>        : Clear terminal output</p>
        `;
        break;

      case 'skills':
        responseHTML = `
          <p>🚀 <strong>Pankaj's Technical Stack:</strong></p>
          <p>  • <strong>Backend:</strong> Java 8, Spring Boot, Spring Framework, Hibernate, Microservices, REST APIs, GraphQL</p>
          <p>  • <strong>Cloud & DevOps:</strong> Azure, AWS, Kubernetes (K8s), Docker, CI/CD, Maven, Git</p>
          <p>  • <strong>AI / ML:</strong> Agentic AI, AI-native Applications, Claude Code, Cursor, Ollama, MCP</p>
          <p>  • <strong>Databases & Caching:</strong> PostgreSQL, MongoDB, Redis Caching, Kafka, Neo4j Graph DB</p>
          <p>  • <strong>Security:</strong> Spring Security, JWT, RBAC, ABAC, Infosec Compliance, API Rate Limiting</p>
        `;
        break;

      case 'exp':
      case 'experience':
        responseHTML = `
          <p>💼 <strong>Career Timeline (6.6+ Years Total Experience):</strong></p>
          <p>  1. <strong>SDE II @ Jio Platform Limited (Reliance)</strong> [Mar 2023 - Jun 2026 | Mumbai]</p>
          <p>     └ Built Agentic AI onboarding & CX Omnichannel SaaS microservices. FreeSWITCH & WebRTC R&D.</p>
          <p>  2. <strong>Senior Software Developer @ Coforge</strong> [Apr 2022 - Mar 2023 | Bangalore]</p>
          <p>     └ Java 8/Spring microservices, e-commerce backend, Hibernate caching & Prometheus/Grafana.</p>
          <p>  3. <strong>Senior Software Engineer @ Infosys Limited</strong> [Dec 2019 - Apr 2022 | Bangalore]</p>
          <p>     └ Foreign banking modules, automated 113 mainframe tasks, optimized complex SQL queries.</p>
        `;
        break;

      case 'projects':
        responseHTML = `
          <p>🛠️ <strong>Featured Projects:</strong></p>
          <p>  1. <strong>Agentic AI Customer Onboarding Platform (JioAssist / JioTara 2.0)</strong> — Event-driven microservices, WebRTC video call POCs, Redis rate limiting.</p>
          <p>  2. <strong>E-Commerce High-Throughput Engine</strong> — Cart/Payment microservices, Hibernate caching, low-latency API optimization.</p>
          <p>  3. <strong>Portable PCB Solar Charger (1V–12V)</strong> — Hardware solar energy regulator with custom PCB layout.</p>
          <p>  4. <strong>1D/2D Signal Analysis via FDTD Method</strong> — Computational wave simulation using Yee algorithm.</p>
        `;
        break;

      case 'certs':
      case 'certifications':
        responseHTML = `
          <p>🏆 <strong>Verified Credentials & Certifications:</strong></p>
          <p>  • <strong>Neo4j:</strong> Graph Data Science Certified & Certified Professional</p>
          <p>  • <strong>TestDome:</strong> Java-Hibernate Credential</p>
          <p>  • <strong>Jio:</strong> Certified Cursor Developer (ID: 50485222)</p>
          <p>  • <strong>Microsoft:</strong> Security, Compliance & Identity Fundamentals (ID: 1094-2259)</p>
          <p>  • <strong>HackerRank:</strong> Python, SQL & Problem Solving (Basic)</p>
          <p>  • <strong>DevOps Institute:</strong> DevOps Foundation (ID: 44944413)</p>
          <p>  • <strong>Tricentis:</strong> Certified Test Design Specialist L1 & L2</p>
        `;
        break;

      case 'contact':
        responseHTML = `
          <p>📬 <strong>Contact Details:</strong></p>
          <p>  • Email    : mishra.pankaj942@gmail.com</p>
          <p>  • Phone    : +91 8669531868</p>
          <p>  • GitHub   : https://github.com/tacquire/</p>
          <p>  • LinkedIn : https://linkedin.com/in/PankaJ942</p>
          <p>  • Location : Mumbai / Pune / Bangalore, India</p>
        `;
        break;

      case 'github':
        window.open('https://github.com/tacquire/', '_blank');
        responseHTML = `<p>🔗 Opening <a href="https://github.com/tacquire/" target="_blank" style="color:var(--primary)">https://github.com/tacquire/</a> in a new tab...</p>`;
        break;

      default:
        responseHTML = `<p>❌ Command not recognized: <span style="color:#ff5f56">'${escapeHtml(cmd)}'</span>. Type <span class="highlight-cmd">'help'</span> for list of commands.</p>`;
        break;
    }

    responseDiv.innerHTML = responseHTML;
    terminalScreen.appendChild(responseDiv);

    // Scroll to bottom
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
  }
}

/* Helper to prevent XSS in terminal output */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* ==========================================================================
   3. SKILLS CATEGORY FILTERING
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || (category && category.includes(filterValue))) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   4. COPY TO CLIPBOARD & TOAST NOTIFICATIONS
   ========================================================================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(err => {
          showToast('Failed to copy', true);
        });
      }
    });
  });
}

function showToast(message, isError = false) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (isError) toast.style.borderColor = '#ff5f56';

  toast.innerHTML = `<i class="${isError ? 'fa-solid fa-circle-exclamation' : 'fa-solid fa-circle-check'}" style="color:${isError ? '#ff5f56' : 'var(--accent)'}"></i> ${escapeHtml(message)}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/* Global contact form submit helper — Direct Mailto Pre-fill */
window.handleContactSubmit = function () {
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  const formattedBody = `Hi Pankaj,\n\n${message}\n\n---\nSender Name: ${name}\nSender Email: ${email}`;
  const mailtoUrl = `mailto:mishra.pankaj942@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;

  showToast(`Opening your email client to send message to mishra.pankaj942@gmail.com...`);

  setTimeout(() => {
    window.location.href = mailtoUrl;
    document.getElementById('contact-form').reset();
  }, 500);
};

/* ==========================================================================
   5. THEME TOGGLE (DARK / LIGHT OBSIDIAN)
   ========================================================================== */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  if (!themeBtn) return;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  themeBtn.addEventListener('click', () => {
    if (document.documentElement.classList.contains('light')) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      localStorage.setItem('theme', 'light');
    }
  });
}

/* ==========================================================================
   6. MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!mobileToggle || !navLinks) return;

  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close nav on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

/* ==========================================================================
   7. RESUME MODAL DRAWER
   ========================================================================== */
function initResumeModal() {
  const resumeBtn = document.getElementById('resume-btn');
  const modal = document.getElementById('resume-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (!resumeBtn || !modal) return;

  resumeBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

/* ==========================================================================
   8. ACTIVE NAVBAR SCROLL OBSERVER
   ========================================================================== */
function initScrollObserver() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
