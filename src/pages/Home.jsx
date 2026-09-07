import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import { SITE, SKILLS } from '../data/portfolioData'
import TechLogo from '../components/TechLogo'

const OVERVIEW = [
  {
    to: '/about',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
    title: 'About me',
    text: 'My journey from first lines of code to building full-stack applications.',
  },
  {
    to: '/work',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
    ),
    title: 'My work',
    text: 'Projects I have built, plus my coding activity across platforms.',
  },
  {
    to: '/blog',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
    ),
    title: 'Blog',
    text: 'Notes from learning HTML, CSS, JavaScript, Tailwind, and React.',
  },
  {
    to: '/contact',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    ),
    title: 'Contact',
    text: 'Reach me on LinkedIn, GitHub, Instagram, WhatsApp, and more.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-24" id="overview">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center">
            <span className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-accent dark:text-accent-dark">
              Overview
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl dark:text-ink-dark">
              Everything about me, in one place.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-ink-2 dark:text-ink-2-dark">
              Jump into any section to explore the details.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OVERVIEW.map((card, i) => (
              <Reveal key={card.to} delay={i * 80}>
                <Link
                  to={card.to}
                  className="group flex h-full flex-col rounded-2xl border border-ink/8 bg-white/55 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-accent-soft dark:border-border-dark dark:bg-card-dark dark:hover:border-accent-dark"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-accent shadow-sm ring-1 ring-ink/5 transition-transform duration-300 group-hover:scale-110 dark:bg-white/95 dark:text-accent-dark">
                    {card.icon}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-ink dark:text-ink-dark">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2 dark:text-ink-2-dark">
                    {card.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-3 dark:text-accent-dark">
                    Explore
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24" id="tech">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="rounded-2xl border border-ink/8 bg-white/55 p-8 backdrop-blur-md sm:p-10 dark:border-border-dark dark:bg-card-dark">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-ink dark:text-ink-dark">
                  Tech I work with
                </h3>
                <p className="mt-1 text-sm text-ink-2 dark:text-ink-2-dark">
                  The languages and tools behind my projects.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {SKILLS.slice(0, 8).map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 py-1.5 pl-2 pr-4 text-sm font-semibold text-ink dark:border-border-dark dark:bg-white/95 dark:text-ink-dark dark:border-ink-dark/10"
                  >
                    <TechLogo name={skill.name} size={16} />
                    {skill.name}
                  </span>
                ))}
                <Link
                  to="/work"
                  className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(249,95,15,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  View everything
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl dark:text-ink-dark">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-base text-ink-2 dark:text-ink-2-dark">
              I'm open to internships, freelance work, and collaborations.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_6px_18px_rgba(249,95,15,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(249,95,15,0.4)]"
              >
                Get in touch
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-3.5 text-[0.95rem] font-semibold text-ink backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-border-dark dark:bg-card-dark dark:text-ink-dark"
              >
                {SITE.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}