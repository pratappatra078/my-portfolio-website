/* ============================================================
   MAIN JS — main.js
   Portfolio: Pratap Patra | 2026
   Handles: Loading, Custom Cursor, Navigation, Theme Toggle,
            Scroll Progress, Scroll-to-Top, Ripple, Smooth Scroll
   ============================================================ */

'use strict';

/* ============================================================
   LOADING SCREEN
   ============================================================ */
const loader = document.querySelector('.loader');

function hideLoader() {
  if (!loader) return;
  loader.classList.add('loader--hidden');
  // Remove from DOM after transition
  loader.addEventListener('transitionend', () => loader.remove(), { once: true });
}

if (document.readyState === 'complete') {
  setTimeout(hideLoader, 900);
} else {
  window.addEventListener('load', () => setTimeout(hideLoader, 900));
}

/* ============================================================
   PAGE FADE-IN
   ============================================================ */
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.45s ease';
window.addEventListener('load', () => {
  requestAnimationFrame(() => { document.body.style.opacity = '1'; });
});

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
const cursor         = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower && window.matchMedia('(hover: hover)').matches) {
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  // Move dot cursor immediately
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth-follow the ring cursor
  (function animateFollower() {
    followerX += (mouseX - followerX) * 0.11;
    followerY += (mouseY - followerY) * 0.11;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  })();

  // Hover state on interactive elements
  function updateCursorHover() {
    const interactives = document.querySelectorAll(
      'a, button, [role="button"], .project-card, .skill-tag, .filter-btn, .cat-pill, .badge, input, textarea'
    );
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--hover');
        cursorFollower.classList.add('cursor-follower--hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover');
        cursorFollower.classList.remove('cursor-follower--hover');
      });
    });
  }
  updateCursorHover();

  // Re-apply after dynamic renders (projects/blog JS)
  window.updateCursorHover = updateCursorHover;

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
  });
} else {
  // Touch or no-hover device — remove cursor elements
  cursor?.remove();
  cursorFollower?.remove();
  document.body.style.cursor = 'auto';
}

/* ============================================================
   NAVIGATION
   ============================================================ */
const navbar     = document.querySelector('.navbar');
const hamburger  = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.navbar__mobile');

// ── Glassmorphism on scroll ──
function handleNavScroll() {
  if (!navbar) return;
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

// ── Active page link detection ──
function setActiveNavLink() {
  const pathname = window.location.pathname;
  const page     = pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach(link => {
    const href     = link.getAttribute('href') || '';
    const hrefPage = href.split('/').pop() || 'index.html';

    const isActive =
      hrefPage === page ||
      (page === '' && hrefPage === 'index.html') ||
      (page === 'index.html' && hrefPage === 'index.html');

    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else          link.removeAttribute('aria-current');
  });
}
setActiveNavLink();

// ── Hamburger menu toggle ──
function openMobileMenu() {
  hamburger?.classList.add('open');
  mobileMenu?.classList.add('open');
  hamburger?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  hamburger?.classList.remove('open');
  mobileMenu?.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  const isOpen = hamburger.classList.contains('open');
  isOpen ? closeMobileMenu() : openMobileMenu();
});

// Close menu when a mobile link is clicked
document.querySelectorAll('.navbar__mobile-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (
    mobileMenu?.classList.contains('open') &&
    !navbar?.contains(e.target) &&
    !mobileMenu?.contains(e.target)
  ) {
    closeMobileMenu();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) {
    closeMobileMenu();
    hamburger?.focus();
  }
});

/* ============================================================
   THEME TOGGLE (Dark / Light)
   ============================================================ */
const themeToggle = document.querySelector('.navbar__theme');
const THEME_KEY   = 'pp-portfolio-theme';

function applyTheme(theme) {
  document.body.classList.toggle('light-mode', theme === 'light');

  if (themeToggle) {
    themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
    themeToggle.setAttribute(
      'aria-label',
      theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
    );
  }
}

// Apply saved theme on load
const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
applyTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
  const current  = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
});

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
const progressBar = document.querySelector('.scroll-progress');

function updateScrollProgress() {
  if (!progressBar) return;
  const scrollTop  = window.scrollY;
  const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = Math.min(progress, 100) + '%';
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });

/* ============================================================
   SCROLL TO TOP BUTTON
   ============================================================ */
const scrollTopBtn = document.querySelector('.scroll-top');

function handleScrollTopVisibility() {
  if (!scrollTopBtn) return;
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}
window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Footer back-to-top
document.querySelector('.footer__back-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   RIPPLE EFFECT ON BUTTONS
   ============================================================ */
function createRipple(e) {
  const btn  = e.currentTarget;
  const old  = btn.querySelector('.ripple');
  if (old) old.remove();

  const circle   = document.createElement('span');
  const diameter = Math.max(btn.clientWidth, btn.clientHeight);
  const radius   = diameter / 2;
  const rect     = btn.getBoundingClientRect();

  circle.className   = 'ripple';
  circle.style.width = circle.style.height = diameter + 'px';
  circle.style.left  = (e.clientX - rect.left  - radius) + 'px';
  circle.style.top   = (e.clientY - rect.top   - radius) + 'px';

  btn.appendChild(circle);
  circle.addEventListener('animationend', () => circle.remove(), { once: true });
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', createRipple);
});

/* ============================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const id     = anchor.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 85;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  });
});

/* ============================================================
   PAGE LINK TRANSITIONS (fade out before navigating)
   ============================================================ */
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  // Only internal HTML page links (not anchors, not external)
  if (
    href &&
    !href.startsWith('#') &&
    !href.startsWith('http') &&
    !href.startsWith('mailto') &&
    !href.startsWith('tel') &&
    href.endsWith('.html')
  ) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = href; }, 350);
    });
  }
});
