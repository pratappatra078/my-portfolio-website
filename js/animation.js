/* ============================================================
   ANIMATION JS — animation.js
   Portfolio: Pratap Patra | 2026
   Handles: Scroll Reveal, Typing Effect, Parallax Blobs,
            Mouse Parallax, Tilt Cards, Magnetic Buttons,
            Counter Animation, Stagger Groups
   ============================================================ */

'use strict';

/* ============================================================
   SCROLL REVEAL — IntersectionObserver
   ============================================================ */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
}

/* ============================================================
   STAGGER GROUP ANIMATION
   Children of [data-stagger] elements animate in sequence.
   ============================================================ */
function initStaggerAnimations() {
  const staggerGroups = document.querySelectorAll('[data-stagger]');
  if (!staggerGroups.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = Array.from(entry.target.children);
        children.forEach((child, i) => {
          child.classList.add('reveal');
          // Use setTimeout to ensure class is added before delay
          setTimeout(() => child.classList.add('revealed'), i * 90);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  staggerGroups.forEach(group => observer.observe(group));
}

/* ============================================================
   TYPING EFFECT — Hero typed text
   ============================================================ */
function initTypingEffect() {
  const typedEl = document.getElementById('typed-text');
  if (!typedEl) return;

  const words = [
    'CSE Student',
    'Problem Solver',
    'Full Stack Dev',
    'DSA Enthusiast',
    'Open Source Fan',
    'Tech Explorer',
    'Java Developer',
    'Python Coder',
  ];

  let wordIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;

  const TYPE_SPEED   = 95;
  const DELETE_SPEED = 60;
  const PAUSE_TYPED  = 1800;
  const PAUSE_EMPTY  = 400;

  function type() {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      charIndex--;
      typedEl.textContent = currentWord.substring(0, charIndex);
      timeout = DELETE_SPEED;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex  = (wordIndex + 1) % words.length;
        timeout    = PAUSE_EMPTY;
      }
    } else {
      charIndex++;
      typedEl.textContent = currentWord.substring(0, charIndex);
      timeout = TYPE_SPEED;
      if (charIndex === currentWord.length) {
        isDeleting = true;
        timeout    = PAUSE_TYPED;
      }
    }

    setTimeout(type, timeout);
  }

  // Start after a short delay for dramatic effect
  setTimeout(type, 1000);
}

/* ============================================================
   SCROLL PARALLAX — Hero background blobs
   ============================================================ */
function initScrollParallax() {
  const blobs = document.querySelectorAll('.hero__blob');
  if (!blobs.length) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      blobs.forEach((blob, i) => {
        const speed = (i + 1) * 0.07;
        blob.style.transform = `translateY(${scrollY * speed}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}

/* ============================================================
   MOUSE PARALLAX — Subtle depth on hero section
   ============================================================ */
function initMouseParallax() {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  let lastX = 0, lastY = 0;
  let ticking = false;

  document.addEventListener('mousemove', (e) => {
    lastX = e.clientX;
    lastY = e.clientY;
    if (ticking) return;

    requestAnimationFrame(() => {
      const x = (lastX / window.innerWidth  - 0.5) * 20;
      const y = (lastY / window.innerHeight - 0.5) * 12;

      document.querySelectorAll('.hero__blob').forEach((blob, i) => {
        const factor = (i + 1) * 0.35;
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
      ticking = false;
    });
    ticking = true;
  });
}

/* ============================================================
   TILT EFFECT — Cards get a 3D tilt on mouse move
   ============================================================ */
function initTiltCards() {
  const tiltSelectors = [
    '.project-card',
    '.skill-category',
    '.achievement-card',
    '.info-card',
    '.value-card',
    '.home-blog-card',
  ].join(', ');

  const cards = document.querySelectorAll(tiltSelectors);
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.width  / 2;
      const cy   = rect.height / 2;
      const x    = e.clientX - rect.left;
      const y    = e.clientY - rect.top;

      const rotX = ((y - cy) / cy) * -5;
      const rotY = ((x - cx) / cx) *  5;

      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-5px)`;
      card.style.transition = 'transform 0.05s linear';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });
}

/* Make it globally accessible so project/blog renderers can re-call it */
window.initTiltCards = initTiltCards;

/* ============================================================
   MAGNETIC BUTTON — Buttons follow cursor slightly
   ============================================================ */
function initMagneticButtons() {
  const magnetics = document.querySelectorAll('.btn--primary, .btn--outline');

  magnetics.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x    = (e.clientX - rect.left - rect.width  / 2) * 0.18;
      const y    = (e.clientY - rect.top  - rect.height / 2) * 0.22;
      btn.style.transform  = `translate(${x}px, ${y}px)`;
      btn.style.transition = 'transform 0.12s ease';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform  = '';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), all 0.25s ease';
    });
  });
}

/* ============================================================
   COUNTER ANIMATION — Animated number counters
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      let current  = 0;
      const total  = 60; // animation steps
      const step   = Math.ceil(target / total);

      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 28);

      observer.unobserve(el);
    });
  }, { threshold: 0.6 });

  counters.forEach(c => observer.observe(c));
}

/* ============================================================
   ACTIVE NAV ON SCROLL (highlight section in viewport)
   ============================================================ */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id    = entry.target.getAttribute('id');
        const links = document.querySelectorAll(`.navbar__link[href="#${id}"]`);
        links.forEach(l => l.classList.add('active'));
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   INITIALISE ALL ON DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initScrollReveal();
  initStaggerAnimations();
  initTypingEffect();
  initCounters();

  if (!prefersReducedMotion) {
    initScrollParallax();
    initMouseParallax();
    initTiltCards();
    initMagneticButtons();
  }
});
