/* ============================================================
   PROJECTS JS — projects.js
   Portfolio: Pratap Patra | 2026
   Handles: Project data, rendering, filtering, search
   ============================================================ */

'use strict';

/* ============================================================
   PROJECT DATA
   Replace github/demo URLs with your actual links.
   ============================================================ */
const PROJECTS = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    category: 'Web Dev',
    description: 'A modern, responsive portfolio website built with HTML5, CSS3, and Vanilla JavaScript. Features dark/light mode, custom cursor, scroll animations, and optimized performance.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/pratappatra078/my-portfolio-website',
    demo: 'https://pratappatra.me/',
    status: 'Live',
    featured: true,
    emoji: '🌐',
    tags: ['portfolio', 'frontend', 'responsive', 'animations'],
  },
  {
    id: 2,
    title: 'AI Resume Builder',
    category: 'AI/ML',
    description: 'An intelligent resume builder that uses AI to suggest content improvements, format resumes, and generate tailored CVs based on job descriptions.',
    tech: ['Python', 'JavaScript', 'HTML', 'CSS'],
    github: '#',
    demo: '#',
    status: 'In Progress',
    featured: false,
    emoji: '🤖',
    tags: ['ai', 'resume', 'python', 'tool'],
  },
  {
    id: 3,
    title: 'Student Management System',
    category: 'Full Stack',
    description: 'A comprehensive system with CRUD operations for student records, grade tracking, attendance management, and automated report generation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '🎓',
    tags: ['HTML', 'CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    category: 'Web Dev',
    description: 'Real-time weather dashboard with 5-day forecasts, city search, interactive charts, and weather maps powered by the OpenWeatherMap API.',
    tech: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '🌤️',
    tags: ['api', 'weather', 'dashboard', 'charts'],
  },
  {
    id: 5,
    title: 'Task Manager App',
    category: 'Web Dev',
    description: 'A productivity-focused task manager with drag-and-drop, priority levels, due dates, categories, and localStorage persistence for offline use.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '✅',
    tags: ['productivity', 'drag-drop', 'javascript'],
  },
  {
    id: 6,
    title: 'Notes Application',
    category: 'Web Dev',
    description: 'A clean, elegant notes app with Markdown support, instant search, color-coded notebooks, and auto-save to localStorage.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '📝',
    tags: ['notes', 'markdown', 'productivity'],
  },
  {
    id: 7,
    title: 'Expense Tracker',
    category: 'Web Dev',
    description: 'A personal finance tracker with income/expense categorization, budget alerts, Chart.js visualizations, and monthly summary reports.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Chart.js'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '💰',
    tags: ['finance', 'charts', 'tracker'],
  },
  {
    id: 8,
    title: 'Quiz Application',
    category: 'Web Dev',
    description: 'An interactive quiz platform with multiple categories, countdown timer, score tracking, high-score leaderboard, and smooth UX animations.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '🧠',
    tags: ['quiz', 'game', 'javascript'],
  },
  {
    id: 9,
    title: 'Scientific Calculator',
    category: 'Tool',
    description: 'A feature-rich calculator with standard and scientific operations, calculation history log, keyboard support, and dark/light themes.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '🧮',
    tags: ['calculator', 'tool', 'keyboard'],
  },
  {
    id: 10,
    title: 'E-Commerce Landing Page',
    category: 'Web Dev',
    description: 'A stunning e-commerce landing page with product showcases, parallax scrolling, animated sections, cart UI, and mobile-first responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '🛒',
    tags: ['ecommerce', 'ui', 'landing-page'],
  },
  {
    id: 11,
    title: 'Password Generator',
    category: 'Tool',
    description: 'A secure password generator with customizable length, character type selection, password strength indicator, and one-click clipboard copy.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '🔐',
    tags: ['security', 'tool', 'password'],
  },
  {
    id: 12,
    title: 'URL Shortener',
    category: 'Full Stack',
    description: 'A URL shortening service with custom aliases, click-count analytics, QR code generation, and link expiry management.',
    tech: ['Python', 'Flask', 'HTML', 'CSS'],
    github: '#',
    demo: '#',
    status: 'In Progress',
    featured: false,
    emoji: '🔗',
    tags: ['python', 'backend', 'url'],
  },
  {
    id: 13,
    title: 'Markdown Editor',
    category: 'Tool',
    description: 'A live Markdown editor with side-by-side real-time preview, syntax highlighting, export to HTML/PDF, and customizable themes.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '📄',
    tags: ['editor', 'markdown', 'tool'],
  },
  {
    id: 14,
    title: 'Chat Application UI',
    category: 'Web Dev',
    description: 'A beautiful chat application UI with animated message bubbles, emoji support, typing indicators, user avatars, and fully responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: false,
    emoji: '💬',
    tags: ['chat', 'ui', 'realtime'],
  },
  {
    id: 15,
    title: 'Blogging Platform',
    category: 'Full Stack',
    description: 'A complete blogging CMS with user authentication, WYSIWYG editor, category management, comments system, and SEO-friendly URLs.',
    tech: ['Python', 'Flask', 'JavaScript', 'CSS'],
    github: '#',
    demo: '#',
    status: 'In Progress',
    featured: false,
    emoji: '✍️',
    tags: ['blog', 'fullstack', 'cms'],
  },
];

/* ── Filter Categories ── */
const FILTER_CATEGORIES = ['All', 'Web Dev', 'Full Stack', 'AI/ML', 'Tool'];

/* ── State ── */
let activeFilter = 'All';
let searchQuery  = '';

/* ============================================================
   BADGE HELPERS
   ============================================================ */
function getStatusBadge(status) {
  const map = {
    'Live':        { cls: 'badge--success', icon: '🟢' },
    'Completed':   { cls: 'badge--success', icon: '✅' },
    'In Progress': { cls: 'badge--warning', icon: '🔄' },
    'Planned':     { cls: '',               icon: '📋' },
  };
  const s = map[status] || { cls: '', icon: '•' };
  return `<span class="badge ${s.cls}" aria-label="Status: ${status}">${s.icon} ${status}</span>`;
}

/* ============================================================
   RENDER A SINGLE PROJECT CARD
   ============================================================ */
function createProjectCard(project) {
  const techTags  = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
  const featured  = project.featured ? 'project-card--featured' : '';
  const ghDisabled = project.github === '#' ? 'style="pointer-events:none;opacity:0.4;"' : '';
  const demoDisabled = project.demo === '#' ? 'style="pointer-events:none;opacity:0.4;"' : '';

  return `
    <article class="project-card ${featured} reveal" data-id="${project.id}" tabindex="0" aria-label="Project: ${project.title}">

      <!-- Image / Placeholder -->
      <div class="project-card__image">
        <div class="project-card__image-placeholder" aria-hidden="true">${project.emoji}</div>
        <div class="project-card__image-overlay" aria-hidden="true">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer"
             class="btn btn--outline btn--sm" ${ghDisabled} aria-label="View ${project.title} on GitHub">
            GitHub ↗
          </a>
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer"
             class="btn btn--primary btn--sm" ${demoDisabled} aria-label="View ${project.title} live demo">
            Live Demo ↗
          </a>
        </div>
        <div class="project-card__status">${getStatusBadge(project.status)}</div>
      </div>

      <!-- Body -->
      <div class="project-card__body">
        <div class="project-card__category">${project.category}</div>
        <h2 class="project-card__title">${project.title}</h2>
        <p class="project-card__desc">${project.description}</p>
        <div class="project-card__tech" aria-label="Tech stack">${techTags}</div>

        <div class="project-card__links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer"
             class="btn btn--outline btn--sm" ${ghDisabled} aria-label="GitHub repository for ${project.title}">
            <!-- GitHub icon -->
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Code
          </a>
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer"
             class="btn btn--primary btn--sm" ${demoDisabled} aria-label="Live demo for ${project.title}">
            <!-- External link icon -->
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </article>
  `.trim();
}

/* ============================================================
   RENDER ALL MATCHING PROJECTS
   ============================================================ */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const q = searchQuery.toLowerCase();

  const filtered = PROJECTS.filter(p => {
    const matchCat    = activeFilter === 'All' || p.category === activeFilter;
    const matchSearch = !q ||
      p.title.toLowerCase().includes(q)        ||
      p.description.toLowerCase().includes(q)  ||
      p.category.toLowerCase().includes(q)     ||
      p.tech.some(t => t.toLowerCase().includes(q)) ||
      p.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="projects-empty">
        <h3>No projects found</h3>
        <p>Try adjusting your filter or search term.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(createProjectCard).join('');

  // Re-initialise reveal for newly rendered cards
  if (typeof initScrollReveal === 'function') initScrollReveal();

  // Re-attach ripple to new buttons
  grid.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const old = btn.querySelector('.ripple');
      if (old) old.remove();
      const circle = document.createElement('span');
      const d = Math.max(btn.clientWidth, btn.clientHeight);
      const r = d / 2;
      const rect = btn.getBoundingClientRect();
      circle.className   = 'ripple';
      circle.style.width = circle.style.height = d + 'px';
      circle.style.left  = (e.clientX - rect.left  - r) + 'px';
      circle.style.top   = (e.clientY - rect.top   - r) + 'px';
      btn.appendChild(circle);
      circle.addEventListener('animationend', () => circle.remove(), { once: true });
    });
  });
}

/* ============================================================
   BUILD FILTER BUTTONS DYNAMICALLY
   ============================================================ */
function buildFilters() {
  const container = document.getElementById('filter-bar');
  if (!container) return;

  container.innerHTML = FILTER_CATEGORIES.map(cat => `
    <button class="filter-btn${cat === 'All' ? ' active' : ''}"
            data-filter="${cat}"
            aria-pressed="${cat === 'All'}"
            type="button">
      ${cat}
    </button>
  `).join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      activeFilter = btn.getAttribute('data-filter');
      renderProjects();
    });
  });
}

/* ============================================================
   SEARCH
   ============================================================ */
function initProjectSearch() {
  const input = document.getElementById('project-search');
  if (!input) return;

  let debounceTimer;
  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = e.target.value.trim();
      renderProjects();
    }, 250);
  });

  // Clear search on Escape
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      searchQuery = '';
      renderProjects();
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildFilters();
  renderProjects();
  initProjectSearch();
});
