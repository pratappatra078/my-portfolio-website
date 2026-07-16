/* ============================================================
   BLOG JS — blog.js
   Portfolio: Pratap Patra | 2026
   Handles: Blog data, featured post, grid, sidebar,
            category filter, search, newsletter
   ============================================================ */

'use strict';

/* ============================================================
   BLOG POST DATA
   ============================================================ */
const BLOG_POSTS = [
  {
    id: 1,
    title: 'Getting Started with Data Structures: Arrays & Linked Lists',
    category: 'DSA',
    excerpt: 'A beginner-friendly guide to understanding arrays and linked lists in C++, with time complexity analysis and practical real-world examples.',
    date: 'July 10, 2026',
    readTime: '8 min',
    emoji: '🧮',
    featured: true,
    tags: ['C++', 'DSA', 'Arrays', 'Linked Lists'],
  },
  {
    id: 2,
    title: 'CSS Flexbox vs Grid: When to Use Which',
    category: 'CSS Tricks',
    excerpt: 'A practical comparison of CSS Flexbox and Grid layout systems, with real-world code examples and decision-making tips for modern layouts.',
    date: 'July 5, 2026',
    readTime: '6 min',
    emoji: '🎨',
    featured: false,
    tags: ['CSS', 'Flexbox', 'Grid', 'Layout'],
  },
  {
    id: 3,
    title: 'JavaScript Promises & Async/Await Explained',
    category: 'JavaScript Tips',
    excerpt: 'Demystifying asynchronous JavaScript with clear explanations, practical patterns, and common pitfalls when handling async operations.',
    date: 'July 1, 2026',
    readTime: '10 min',
    emoji: '⚡',
    featured: false,
    tags: ['JavaScript', 'Async', 'Promises', 'ES6'],
  },
  {
    id: 4,
    title: 'Git & GitHub: Essential Commands Every Dev Should Know',
    category: 'Git & GitHub',
    excerpt: 'Master the most important Git commands, branching strategies, and GitHub workflow for clean, professional software development.',
    date: 'June 25, 2026',
    readTime: '7 min',
    emoji: '🔧',
    featured: false,
    tags: ['Git', 'GitHub', 'Version Control', 'CLI'],
  },
  {
    id: 5,
    title: 'My Coding Journey: From Zero to CSE Student',
    category: 'Coding Journey',
    excerpt: 'A personal story about how I discovered programming, the challenges I faced, the lessons I learned, and what drives me every day.',
    date: 'June 20, 2026',
    readTime: '5 min',
    emoji: '🚀',
    featured: false,
    tags: ['Personal', 'Journey', 'Motivation', 'Story'],
  },
  {
    id: 6,
    title: 'Operating System Concepts: Processes & Threads',
    category: 'Operating Systems',
    excerpt: 'Deep dive into OS fundamentals — processes, threads, scheduling algorithms, and inter-process communication with illustrated examples.',
    date: 'June 15, 2026',
    readTime: '12 min',
    emoji: '💻',
    featured: false,
    tags: ['OS', 'Processes', 'Threads', 'Scheduling'],
  },
  {
    id: 7,
    title: 'Database Design: Normalization & SQL Best Practices',
    category: 'DBMS',
    excerpt: 'Learn the art of database normalization from 1NF to BCNF, with practical schema examples and SQL query optimization techniques.',
    date: 'June 10, 2026',
    readTime: '9 min',
    emoji: '🗄️',
    featured: false,
    tags: ['SQL', 'Database', 'Normalization', 'DBMS'],
  },
  {
    id: 8,
    title: 'HTML Semantic Elements: Why They Matter for SEO & A11y',
    category: 'HTML Best Practices',
    excerpt: 'Why semantic HTML is crucial for search engine optimization, screen readers, and maintaining clean, maintainable codebases.',
    date: 'June 5, 2026',
    readTime: '5 min',
    emoji: '📋',
    featured: false,
    tags: ['HTML', 'SEO', 'Accessibility', 'Semantic'],
  },
  {
    id: 9,
    title: 'Cracking Coding Interviews: My LeetCode Strategy',
    category: 'Interview Preparation',
    excerpt: 'My personal strategy for coding interview prep — which topics to prioritize, how to practice on LeetCode, and the right mindset.',
    date: 'May 30, 2026',
    readTime: '8 min',
    emoji: '💡',
    featured: false,
    tags: ['LeetCode', 'Interview', 'DSA', 'Career'],
  },
  {
    id: 10,
    title: 'Computer Networks: TCP/IP Protocol Suite Explained',
    category: 'Computer Networks',
    excerpt: 'Breaking down the TCP/IP model, how data travels across networks, and key protocols every Computer Science student must understand.',
    date: 'May 25, 2026',
    readTime: '11 min',
    emoji: '🌐',
    featured: false,
    tags: ['Networking', 'TCP/IP', 'Protocols', 'CN'],
  },
  {
    id: 11,
    title: 'Introduction to Machine Learning: Core Concepts',
    category: 'AI & Machine Learning',
    excerpt: 'A beginner-friendly introduction to ML — supervised vs. unsupervised learning, common algorithms, and where to start your AI journey.',
    date: 'May 20, 2026',
    readTime: '9 min',
    emoji: '🤖',
    featured: false,
    tags: ['ML', 'AI', 'Python', 'Algorithms'],
  },
  {
    id: 12,
    title: 'Open Source Contribution: A Beginner\'s Complete Guide',
    category: 'Open Source',
    excerpt: 'How to make your first open source contribution — finding projects, reading codebases, submitting pull requests, and building your profile.',
    date: 'May 15, 2026',
    readTime: '7 min',
    emoji: '🌱',
    featured: false,
    tags: ['Open Source', 'GitHub', 'Contributing', 'Community'],
  },
];

/* ── All unique categories ── */
const ALL_CATEGORIES = ['All', ...new Set(BLOG_POSTS.map(p => p.category))];

/* ── State ── */
let activeCategory = 'All';
let searchQuery    = '';

/* ============================================================
   RENDER FEATURED POST
   ============================================================ */
function renderFeaturedPost() {
  const el   = document.getElementById('featured-post');
  if (!el) return;

  const post = BLOG_POSTS.find(p => p.featured);
  if (!post) { el.innerHTML = ''; return; }

  el.innerHTML = `
    <a href="blog-post.html" class="featured-post reveal" aria-label="Read featured post: ${post.title}">
      <div class="featured-post__image" aria-hidden="true" role="img" aria-label="${post.title} illustration">
        ${post.emoji}
      </div>
      <div class="featured-post__body">
        <div class="featured-post__tag">⭐ Featured · ${post.category}</div>
        <h2 class="featured-post__title">${post.title}</h2>
        <p class="featured-post__excerpt">${post.excerpt}</p>
        <div class="featured-post__meta">
          <span>📅 ${post.date}</span>
          <span>⏱ ${post.readTime} read</span>
          <span style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap;">
            ${post.tags.map(t => `<span class="badge">${t}</span>`).join('')}
          </span>
        </div>
      </div>
    </a>
  `;
}

/* ============================================================
   CREATE A SINGLE BLOG CARD
   ============================================================ */
function createBlogCard(post) {
  return `
    <a href="blog-post.html" class="blog-card reveal" aria-label="Read article: ${post.title}">
      <div class="blog-card__image" aria-hidden="true">${post.emoji}</div>
      <div class="blog-card__body">
        <div class="blog-card__cat">${post.category}</div>
        <h3 class="blog-card__title">${post.title}</h3>
        <p class="blog-card__excerpt">${post.excerpt}</p>
        <div class="blog-card__meta">
          <span>📅 ${post.date}</span>
          <span>⏱ ${post.readTime} read</span>
        </div>
      </div>
    </a>
  `.trim();
}

/* ============================================================
   RENDER BLOG GRID
   ============================================================ */
function renderBlogGrid() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  const q = searchQuery.toLowerCase();

  const filtered = BLOG_POSTS.filter(p => {
    const matchCat    = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = !q ||
      p.title.toLowerCase().includes(q)          ||
      p.excerpt.toLowerCase().includes(q)        ||
      p.category.toLowerCase().includes(q)       ||
      p.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="blog-empty">
        <h3>No articles found</h3>
        <p>Try a different category or search term.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(createBlogCard).join('');

  // Re-trigger reveal for newly injected cards
  if (typeof initScrollReveal === 'function') initScrollReveal();
  if (window.updateCursorHover)               window.updateCursorHover();
}

/* ============================================================
   BUILD CATEGORY PILLS DYNAMICALLY
   ============================================================ */
function buildCategoryPills() {
  const pillContainer = document.getElementById('cat-pills');
  if (!pillContainer) return;

  pillContainer.innerHTML = ALL_CATEGORIES.map(cat => `
    <button class="cat-pill${cat === 'All' ? ' active' : ''}"
            data-cat="${cat}"
            aria-pressed="${cat === 'All'}"
            type="button">
      ${cat}
    </button>
  `).join('');

  pillContainer.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      pillContainer.querySelectorAll('.cat-pill').forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-pressed', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-pressed', 'true');
      activeCategory = pill.getAttribute('data-cat');
      renderBlogGrid();
    });
  });
}

/* ============================================================
   RENDER SIDEBAR
   ============================================================ */
function renderSidebar() {
  // ── Popular posts (top 5) ──
  const popularEl = document.getElementById('popular-posts');
  if (popularEl) {
    popularEl.innerHTML = BLOG_POSTS.slice(0, 5).map((p, i) => `
      <a href="blog-post.html" class="popular-post" aria-label="Read: ${p.title}">
        <span class="popular-post__num">0${i + 1}</span>
        <div>
          <div class="popular-post__title">${p.title}</div>
          <div class="popular-post__meta">⏱ ${p.readTime} read</div>
        </div>
      </a>
    `).join('');
  }

  // ── Tags cloud (all unique tags) ──
  const tagsEl = document.getElementById('tags-cloud');
  if (tagsEl) {
    const allTags = [...new Set(BLOG_POSTS.flatMap(p => p.tags))];
    tagsEl.innerHTML = allTags.map(t => `
      <span class="badge" role="button" tabindex="0" aria-label="Filter by tag: ${t}">${t}</span>
    `).join('');

    // Click tag → filter articles
    tagsEl.querySelectorAll('.badge').forEach(tagEl => {
      tagEl.addEventListener('click', () => {
        searchQuery = tagEl.textContent.trim();
        const searchInput = document.getElementById('blog-search');
        if (searchInput) searchInput.value = searchQuery;
        renderBlogGrid();
      });
    });
  }

  // ── Sidebar categories ──
  const sideCatsEl = document.getElementById('sidebar-categories');
  if (sideCatsEl) {
    const cats = ALL_CATEGORIES.filter(c => c !== 'All');
    sideCatsEl.innerHTML = cats.map(cat => {
      const count = BLOG_POSTS.filter(p => p.category === cat).length;
      return `
        <button class="sidebar-cat" data-cat="${cat}" type="button" aria-label="Filter: ${cat} (${count} articles)">
          <span>${cat}</span>
          <span class="sidebar-cat__count">${count}</span>
        </button>
      `;
    }).join('');

    sideCatsEl.querySelectorAll('.sidebar-cat').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-cat');
        // Sync pills
        document.querySelectorAll('.cat-pill').forEach(p => {
          const isActive = p.getAttribute('data-cat') === activeCategory;
          p.classList.toggle('active', isActive);
          p.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        renderBlogGrid();
        // Scroll to grid
        document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
}

/* ============================================================
   SEARCH
   ============================================================ */
function initBlogSearch() {
  const input = document.getElementById('blog-search');
  if (!input) return;

  let debounceTimer;
  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = e.target.value.trim();
      renderBlogGrid();
    }, 250);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value  = '';
      searchQuery  = '';
      renderBlogGrid();
    }
  });
}

/* ============================================================
   NEWSLETTER FORM
   ============================================================ */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    const btn   = form.querySelector('.btn');

    if (!input?.value.trim()) return;

    // Simulate success
    input.value    = '';
    if (btn) {
      const original    = btn.textContent;
      btn.textContent   = '✅ Subscribed!';
      btn.disabled      = true;
      btn.style.opacity = '0.7';
      setTimeout(() => {
        btn.textContent   = original;
        btn.disabled      = false;
        btn.style.opacity = '';
      }, 3500);
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedPost();
  buildCategoryPills();
  renderBlogGrid();
  renderSidebar();
  initBlogSearch();
  initNewsletter();
});
