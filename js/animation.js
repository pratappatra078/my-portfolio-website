/* ============================================================
   ANIMATION JS — animation.js
   Portfolio: Pratap Patra | 2026
   Handles: Scroll Reveal, Typing Effect, Counter Animation, Stagger Groups
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
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
}

/* ============================================================
   STAGGER GROUP ANIMATION
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
          setTimeout(() => child.classList.add('revealed'), i * 50);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

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

  setTimeout(type, 300);
}

/* Tilt cards compatibility dummy for dynamic re-renders */
window.initTiltCards = function() {};

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
      const total  = 40;
      const step   = Math.ceil(target / total);

      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 25);

      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

/* ============================================================
   INITIALISE ON DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initStaggerAnimations();
  initTypingEffect();
  initCounters();
});

