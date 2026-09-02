# Pratap Patra Portfolio

My personal portfolio website, rebuilt as a React single-page application (SPA) with Vite. Includes a canvas grass animation on every page and buttery-smooth transitions throughout.

## Tech Stack

- **React 18** + **react-router-dom 6** (HashRouter)
- **Vite 5** for build tooling
- Pure **CSS** with custom properties (dark/light themes)
- Canvas-based effects (grass field, custom cursor ring)

## Features

- Animated canvas **grass field** rendered at the bottom of every viewport
- SPA routing: Home, Projects, Blog, About, 404 (custom Not Found)
- Smooth page transitions, staggered scroll-reveal animations, loader, scroll progress bar, back-to-top button, custom cursor, button ripple
- Projects page with **live category filter + search**
- Blog page with featured post, categories, tag cloud, newsletter mock, search
- Dark / light theme persisted in `localStorage`
- Accessible: skip link, ARIA labels, reduced-motion support, focus-visible styles

## Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project Structure

```
public/                Static assets (images, resume PDF, favicons)
  Pratap.png
  Pratap Patra Resume.pdf
src/
  main.jsx             Entry — imports all CSS + renders <App/>
  App.jsx              Router setup (HashRouter + routes)
  components/
    Layout.jsx         Global shell: loader, progress, cursor, grass, navbar, footer
    Navbar.jsx, Footer.jsx, Grass.jsx, Cursor.jsx, Reveal.jsx, Counter.jsx,
    TypedText.jsx, Loader.jsx, ScrollProgress.jsx, ScrollTop.jsx, Ripple.jsx,
    SectionHeader.jsx
  pages/               Home, Projects, Blog, About, NotFound
  data/                site.jsx (SITE/SOCIALS/NAV_LINKS), projects.js, blog.js
  hooks/               useTheme, useReveal
  styles/              style.css + animations/home/projects/blog/about/responsive.css
legacy/                Original static HTML/CSS/JS site (archived for reference)
```

## Content

All site content (profile, projects, blog posts, social links) lives in `src/data/`. Edit those files to update the portfolio without touching page components.

## Deployment

- **Vite:** `npm run build`, deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages).
- `base: './'` in `vite.config.js` makes asset paths relative, so the build works on GitHub Pages at `<user>.github.io/<repo>/`.
- **HashRouter** is used deliberately (URLs like `/#/projects`) so deep links work on static hosts without server-side rewrites; GitHub Pages custom 404s are unnecessary.
- Live: [pratappatra.netlify.app](https://pratappatra.netlify.app) · [pratappatra078.github.io/my-portfolio-website](https://pratappatra078.github.io/my-portfolio-website)

## License

© 2026 Pratap Patra.