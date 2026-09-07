# Pratap Patra Portfolio

A clean, minimal, deploy-ready portfolio website for Pratap Patra — a Computer Science student
and software developer. Built as a multi-page React application with client-side routing.

## Tech Stack

- **React 18**
- **Vite 5** (build tooling)
- **react-router-dom 6** (HashRouter)
- **Tailwind CSS 4** (styling via `@tailwindcss/vite`)
- **simple-icons** (official tech logos for the skills section)
- Google Fonts (Manrope + Inter)

## Pages

Separate routed pages, each with its own URL:

| Route | Page |
| --- | --- |
| `#/` | Home — hero, skills, featured projects, CTA |
| `#/about` | About — bio, skills, experience timeline, process |
| `#/work` | Work — full projects list + complete skill set |
| `#/blog` | Blog — posts on code, DSA, and engineering habits |
| `#/contact` | Contact — info cards + message form (mailto) |
| `*` | 404 fallback |

Routes use a **HashRouter** (`/#/about` style) so deep links work on any static host —
including GitHub Pages — without server-side URL rewrites.

## Features

- Minimal glassmorphism aesthetic with dark / light theme (persisted in `localStorage`)
- Correct brand logos for C, C++, Java, Python, JavaScript, React, Node.js, MongoDB, MySQL, Git, GitHub
- Scroll-reveal animations, loading screen, reading progress bar, back-to-top button
- Fully responsive
- Accessibility: semantic markup, ARIA labels, reduced-motion support
- Deploy-ready: relative asset paths, security headers, static-host config

## Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project Structure

```
public/                 Static assets (images, resume PDF, favicon, redirects)
src/
  main.jsx             React entry — HashRouter + <App/>
  App.jsx              Route definitions wrapped in Layout
  style.css            Tailwind import + theme + custom component CSS
  components/          Layout, Navbar, Hero, sections, global chrome
  pages/               Home, About, Work, Blog, Contact, NotFound
  hooks/               useTheme, useReveal
  data/                portfolioData.js — all site content
```

## Content

All site content (name, role, projects, skills, blog posts, social links) lives in
`src/data/portfolioData.js`. Edit that file to update the portfolio without touching components.

## Deployment

- **Build:** `npm run build` produces a static site in `dist/`.
- **Base path:** `base: './'` in `vite.config.js` makes asset paths relative, so the build works
  at any subpath (e.g. GitHub Pages `user.github.io/repo/`).
- **Any static host:** copy the `dist/` folder to Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.
- **Netlify:** a `netlify.toml` is included with the build command, publish directory, and security headers.
- **HashRouter** means no rewrite rules or custom 404 handling are required on the server.

## License

© 2026 Pratap Patra.