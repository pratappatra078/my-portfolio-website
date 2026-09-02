import { useMemo, useState } from 'react'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import { PROJECTS, FILTER_CATEGORIES } from '../data/projects'

const STATUS_STYLES = {
  Live: { cls: 'badge--success', icon: '🟢' },
  Completed: { cls: 'badge--success', icon: '✅' },
  'In Progress': { cls: 'badge--warning', icon: '🔄' },
  Planned: { cls: '', icon: '📋' },
}

function StatusBadge({ status }) {
  const s = STATUS_STYLES[status] || { cls: '', icon: '•' }
  return (
    <span className={`badge ${s.cls}`.trim()} aria-label={`Status: ${status}`}>
      {s.icon} {status}
    </span>
  )
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const featured = project.featured ? 'project-card--featured' : ''
  const ghDisabled = project.github === '#'
  const demoDisabled = project.demo === '#'

  return (
    <Reveal as="article" className={`project-card ${featured}`.trim()} delay={(index % 3) * 90}>
      <div className="project-card__image">
        <div className="project-card__image-placeholder" aria-hidden="true">
          {project.emoji}
        </div>
        <div className="project-card__image-overlay" aria-hidden="true">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--sm"
            style={ghDisabled ? { pointerEvents: 'none', opacity: 0.4 } : undefined}
            aria-label={`View ${project.title} on GitHub`}
          >
            GitHub ↗
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
            style={demoDisabled ? { pointerEvents: 'none', opacity: 0.4 } : undefined}
            aria-label={`View ${project.title} live demo`}
          >
            Live Demo ↗
          </a>
        </div>
        <div className="project-card__status">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__category">{project.category}</div>
        <h2 className="project-card__title">{project.title}</h2>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tech" aria-label="Tech stack">
          {project.tech.map((t) => (
            <span className="tech-tag" key={t}>{t}</span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--sm"
            style={ghDisabled ? { pointerEvents: 'none', opacity: 0.4 } : undefined}
            aria-label={`GitHub repository for ${project.title}`}
          >
            <GitHubIcon />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
            style={demoDisabled ? { pointerEvents: 'none', opacity: 0.4 } : undefined}
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalIcon />
            Live Demo
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return PROJECTS.filter((p) => {
      const matchCat = filter === 'All' || p.category === filter
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [filter, query])

  return (
    <>
      <header className="projects-hero" aria-label="Projects page header">
        <div className="container">
          <Reveal>
            <div className="section-eyebrow">💻 My Work</div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="projects-hero__title">
              Things I've <span className="gradient-text">Built</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="projects-hero__desc">
              A collection of 15+ projects ranging from web apps and tools to full-stack
              applications — each one a learning journey in itself.
            </p>
          </Reveal>

          <Reveal className="projects-stats" delay={160}>
            <div className="projects-stat">
              <Counter target={15} suffix="+" className="projects-stat__value" />
              <div className="projects-stat__label">Projects Built</div>
            </div>
            <div className="projects-stat">
              <Counter target={6} suffix="+" className="projects-stat__value" />
              <div className="projects-stat__label">Languages Used</div>
            </div>
            <div className="projects-stat">
              <Counter target={3} suffix="+" className="projects-stat__value" />
              <div className="projects-stat__label">Live Projects</div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="projects-search">
              <span className="projects-search__icon" aria-hidden="true">🔍</span>
              <input
                type="search"
                className="projects-search__input"
                placeholder="Search projects by name, tech, or category..."
                aria-label="Search projects"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setQuery('')
                }}
                autoComplete="off"
              />
            </div>
          </Reveal>

          <div className="projects-filter" role="group" aria-label="Project category filters">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn${filter === cat ? ' active' : ''}`}
                aria-pressed={filter === cat}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Project cards grid">
        <div className="container">
          <div className="projects-grid" aria-live="polite" aria-label="Projects list">
            {filtered.length === 0 ? (
              <div className="projects-empty">
                <h3>No projects found</h3>
                <p>Try adjusting your filter or search term.</p>
              </div>
            ) : (
              filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)
            )}
          </div>
        </div>
      </section>

      <section className="home-cta section" aria-label="Open to opportunities">
        <div className="container">
          <Reveal className="home-cta__card">
            <h2 className="home-cta__title">
              Want to <span className="gradient-text">Collaborate?</span>
            </h2>
            <p className="home-cta__desc">
              I'm always looking for exciting projects to work on and people to collaborate with.
              Let's build something great together!
            </p>
            <div className="home-cta__buttons">
              <a
                href="https://github.com/pratappatra078"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg"
                aria-label="View my GitHub"
              >
                <GitHubIcon />
                View All on GitHub
              </a>
              <a href="mailto:pratappatra078@gmail.com" className="btn btn--outline btn--lg" aria-label="Send email">
                Get In Touch →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}