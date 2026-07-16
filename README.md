# 🚀 Pratap Patra — Portfolio Website

A modern, fast, and fully responsive personal portfolio website built from scratch with **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks, no dependencies.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-6366f1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://pratappatra078.github.io/my-portfolio-website/)
[![GitHub Stars](https://img.shields.io/github/stars/pratappatra078/my-portfolio-website?style=for-the-badge&color=6366f1)](https://github.com/pratappatra078/my-portfolio-website)
[![License](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)](LICENSE)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌙 **Dark / Light Mode** | Persisted in `localStorage` — no flash on reload |
| 🖱️ **Custom Cursor** | Dual-cursor with smooth RAF follower + hover states |
| ⚡ **Loading Screen** | Animated progress bar, fades out on page ready |
| 🎞️ **Page Transitions** | Smooth opacity fade between pages |
| 📜 **Scroll Animations** | `IntersectionObserver`-based reveal with stagger |
| ✍️ **Typing Effect** | Multi-word cycling with delete/retype logic |
| 🎨 **Blob Parallax** | Scroll + mouse-move depth parallax on hero blobs |
| 🃏 **3D Card Tilt** | Perspective-based mouse-move tilt on project cards |
| 🔍 **Search + Filter** | Debounced live search & category filters for Projects/Blog |
| 📊 **Counter Animation** | Animated number counters triggered by scroll |
| 📱 **Fully Responsive** | 7 breakpoints (1440px → 375px), mobile-first |
| ♿ **Accessible** | ARIA labels, skip link, `prefers-reduced-motion`, focus-visible |
| 🔎 **SEO Optimized** | Meta tags, Open Graph, Twitter Card, canonical URLs |

---

## 📂 Project Structure

```
my-portfolio-website/
│
├── index.html          ← Home page
├── projects.html       ← Projects page
├── blog.html           ← Blog page
├── about.html          ← About Me page
├── 404.html            ← Custom error page
│
├── css/
│   ├── style.css       ← Design tokens, global styles, nav, footer
│   ├── animations.css  ← All @keyframes
│   ├── home.css        ← Home page component styles
│   ├── projects.css    ← Projects page component styles
│   ├── blog.css        ← Blog page component styles
│   ├── about.css       ← About page component styles
│   └── responsive.css  ← All media queries (1440 → 375px)
│
├── js/
│   ├── main.js         ← Nav, theme, cursor, scroll, loader, transitions
│   ├── animation.js    ← Scroll reveal, typing, parallax, tilt, counters
│   ├── projects.js     ← Project data & dynamic render/filter/search
│   └── blog.js         ← Blog data & dynamic render/filter/search
│
├── Pratap.png           ← Profile photo
├── Pratap Patra Resume.pdf ← Resume download
├── favicon.svg          ← SVG favicon (optimized, < 1KB vs 1.25MB old .ico)
└── README.md
```

---

## 🎨 Design System

All visual tokens are defined as CSS custom properties in `css/style.css`:

```css
/* Colors */
--color-bg:       #0d0d14   /* Dark background */
--color-accent:   #6366f1   /* Indigo accent */
--color-accent-2: #8b5cf6   /* Violet accent */
--color-accent-3: #06b6d4   /* Cyan accent */

/* Gradients */
--gradient-accent: linear-gradient(135deg, #6366f1, #8b5cf6)
--gradient-hero:   linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)

/* Typography */
--font-heading: 'Space Grotesk'
--font-body:    'Inter'
--font-mono:    'Fira Code'
```

---

## 🚀 Quick Start

1. **Clone the repo:**
   ```bash
   git clone https://github.com/pratappatra078/my-portfolio-website.git
   cd my-portfolio-website
   ```

2. **Open locally:**
   - Double-click `index.html`, **OR**
   - Use VS Code + [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for hot-reload

3. **That's it!** — No build step, no npm, no dependencies needed.

---

## ✏️ Customization Guide

### 1. Personal Info (index.html)

Update these in `index.html`:
```html
<!-- Name in hero -->
<span class="name">Pratap Patra</span>

<!-- Description -->
<p class="hero__desc">A 3rd-year B.Tech Computer Science Engineering student...</p>

<!-- Contact links -->
<a href="mailto:YOUR@EMAIL.com">Send Me an Email</a>
<a href="https://linkedin.com/in/YOUR-PROFILE">Connect on LinkedIn</a>
```

### 2. Projects (js/projects.js)

Add your projects to the `PROJECTS` array:
```javascript
{
  id: 1,
  title: 'Your Project Name',
  category: 'Web Dev',          // Web Dev | Full Stack | AI/ML | Tool
  description: 'Short description...',
  tech: ['HTML', 'CSS', 'JS'],
  github: 'https://github.com/you/project',
  demo: 'https://your-demo-url.com',
  status: 'Completed',          // Live | Completed | In Progress | Planned
  featured: false,               // true = takes 2 columns
  emoji: '🚀',
  tags: ['web', 'javascript'],
}
```

### 3. Blog Posts (js/blog.js)

Add your articles to the `BLOG_POSTS` array:
```javascript
{
  id: 1,
  title: 'Your Article Title',
  category: 'JavaScript Tips',
  excerpt: 'Short description...',
  date: 'July 2026',
  readTime: '5 min',
  emoji: '⚡',
  featured: false,              // true = appears as featured post
  tags: ['JavaScript', 'ES6'],
}
```

### 4. Education (index.html)

Find the `#education` section and update the `.timeline__item` entries:
```html
<div class="timeline__date">2023 — Present</div>
<h3 class="timeline__title">Your Degree Name</h3>
<p class="timeline__sub">Your University · Your City</p>
```

### 5. Social Links

Search for `pratap@example.com`, `pratappatra078`, and `pratap-patra` across all files and replace with your actual links.

### 6. Color Theme

To change the accent color, update in `css/style.css`:
```css
:root {
  --color-accent:   #YOUR_COLOR;
  --color-accent-2: #YOUR_SECONDARY;
}
```

---

## 🌐 Deployment

### GitHub Pages (Free — Recommended)

1. Push code to a repo named `username.github.io` or any repo
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → `main` → `/ (root)`
4. Your site will be live at `https://username.github.io/repo-name/`

### Netlify (Free — Drag & Drop)

1. Go to [netlify.com](https://netlify.com) → **Add new site → Deploy manually**
2. Drag your project folder onto the upload area
3. Done! You'll get a `*.netlify.app` URL instantly

### Vercel (Free)

```bash
npm i -g vercel
vercel --prod
```

---

## 📊 Performance

| Metric | Before | After |
|--------|--------|-------|
| favicon.ico | 1.25 MB ❌ | SVG < 1 KB ✅ |
| Profile image | 2.6 MB PNG ❌ | Lazy loaded, object-fit ✅ |
| CSS | Monolithic + !important ❌ | Modular, token-based ✅ |
| JS | Blocking in `<head>` ❌ | `defer` attribute ✅ |
| Animations | JS-only, janky ❌ | CSS + rAF, GPU-accelerated ✅ |
| Accessibility | No ARIA, no skip link ❌ | Full ARIA, skip link ✅ |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox, animations, `@keyframes`
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts** — Inter + Space Grotesk
- **IntersectionObserver API** — Scroll-triggered animations
- **requestAnimationFrame** — Smooth cursor and parallax

---

## 📄 License

MIT License — feel free to use and adapt for your own portfolio.

---

## 👤 Author

**Pratap Patra**  
3rd-year B.Tech CSE Student | Software Developer

- 🌐 [Portfolio](https://pratappatra078.github.io/my-portfolio-website/)
- 💼 [LinkedIn](https://linkedin.com/in/pratap-patra)
- 🐙 [GitHub](https://github.com/pratappatra078)
- ✉️ pratap@example.com

---

<p align="center">Built with ❤️ using HTML, CSS &amp; Vanilla JavaScript</p>
