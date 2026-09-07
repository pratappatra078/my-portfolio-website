import { Link } from 'react-router-dom'
import { SITE } from '../data/portfolioData'
import TechLogo from './TechLogo'
import Reveal from './Reveal'

const STACK = ['C', 'C++', 'Java', 'Python', 'JavaScript', 'React', 'Node.js']

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[84px]" id="home">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
      />

      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent-soft px-4 py-1.5 text-[0.82rem] font-semibold text-accent dark:border-accent/30 dark:bg-accent-soft-dark dark:text-accent-dark">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent dark:bg-accent-dark" />
              </span>
              Open to internships & opportunities
            </div>

            <h1 className="font-heading text-[2.9rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.4rem] dark:text-ink-dark">
              {SITE.firstName}{' '}
              <span className="text-accent dark:text-accent-dark">{SITE.lastName}</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2 dark:text-ink-2-dark">
              {SITE.role}. I build {SITE.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[0.92rem] font-semibold text-white shadow-[0_6px_18px_rgba(249,95,15,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(249,95,15,0.4)]"
              >
                View my work
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a
                href={SITE.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-3 text-[0.92rem] font-semibold text-ink backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-border-dark dark:bg-card-dark dark:text-ink-dark dark:hover:border-accent-dark dark:hover:text-accent-dark"
              >
                Download CV
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </a>
            </div>
          </Reveal>

          <Reveal type="reveal-r" delay={120} className="hidden justify-center lg:flex">
            <div className="relative flex aspect-square w-full max-w-sm items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-accent/15 to-transparent"
              />
              <span
                aria-hidden="true"
                className="absolute inset-6 rounded-[2rem] border border-ink/10 dark:border-ink-dark/10"
              />
              <span className="relative font-heading text-[7rem] font-extrabold leading-none text-accent opacity-95 dark:text-accent-dark">
                {SITE.firstName.charAt(0)}.
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 flex items-center gap-6 text-[0.82rem] font-medium text-ink-3 dark:text-ink-3-dark">
          <span className="hidden sm:block">Technology stack</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {STACK.map((s) => (
              <span key={s} className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-ink/5 dark:bg-white/95">
                <TechLogo name={s} size={18} />
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}