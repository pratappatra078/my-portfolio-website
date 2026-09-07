import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/portfolioData'
import TechLogo from './TechLogo'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Projects({ limit }) {
  const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS

  return (
    <section className="glass-section py-24 dark:bg-bg-soft-dark" id="work">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          tag="Selected work"
          title="Projects I've built."
          sub="A selection of projects showcasing full-stack development and problem-solving."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 80}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-ink/10 bg-white/55 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_12px_30px_rgba(16,16,24,0.06)] dark:border-border-dark dark:bg-card-dark"
              >
                <div className="mb-3 flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft font-heading text-xl font-bold text-accent dark:bg-accent-soft-dark dark:text-accent-dark">
                    {project.name.charAt(0)}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent dark:border-border-dark">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-ink dark:text-ink-dark">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2 dark:text-ink-2-dark">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-md bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink-2 dark:bg-ink-dark/5 dark:text-ink-2-dark"
                    >
                      <TechLogo name={t} size={13} />
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-3 text-[0.92rem] font-semibold text-ink backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-border-dark dark:bg-card-dark dark:text-ink-dark dark:hover:border-accent-dark dark:hover:text-accent-dark"
            >
              View all projects
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}