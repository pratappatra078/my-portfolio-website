/* ── THEME TOGGLE with localStorage ── */
const toggle = document.getElementById('theme-toggle');
const html   = document.documentElement;

const ICONS = { dark: '🌙', light: '☀️' };

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'dark' ? ICONS.dark : ICONS.light;
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

// Load saved preference, default to dark
const saved = localStorage.getItem('theme') || 'dark';
applyTheme(saved);

toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
});

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            e.target.style.transitionDelay = `${i * 0.07}s`;
            e.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));