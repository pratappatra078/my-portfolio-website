import { PROJECTS } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Projects() {
  return (
    <section className="relative glass-section py-28 dark:bg-bg-soft-dark" id="work">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          tag="Selected Work"
          title="Projects I've built."
          sub="A selection of projects that showcase my skills in full-stack development and problem-solving."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 80}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/50 shadow-[0_8px_30px_rgba(31,38,135,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_18px_44px_rgba(255,107,26,0.15)] dark:border-border-dark dark:bg-card-dark dark:shadow-none dark:hover:border-accent-dark/40"
              >
                <div
                  aria-hidden="true"
                  className="relative flex h-[180px] items-center justify-center overflow-hidden font-heading text-6xl font-extrabold text-white"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-accent), #FF9A3C)',
                  }}
                >
                  <span className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,#fff,transparent_50%)]" />
                  <span className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_80%_80%,#fff,transparent_50%)]" />
                  <span className="relative drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {project.name.charAt(0)}
                  </span>
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2.5 font-heading text-xl font-extrabold text-ink dark:text-ink-dark">
                    {project.name}
                  </div>
                  <p className="flex-1 text-[0.93rem] leading-relaxed text-ink-2 dark:text-ink-2-dark">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.split('•').map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-accent-soft px-3 py-1 text-[0.75rem] font-semibold text-accent dark:bg-accent-soft-dark dark:text-accent-dark"
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
