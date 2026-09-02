import { SITE } from '../data/portfolioData'
import Reveal from './Reveal'

function DeveloperIllustration() {
  return (
    <svg
      className="relative w-full max-w-420px"
      viewBox="0 0 460 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a developer working on a laptop"
    >
      <g style={{ color: 'var(--color-ink)' }}>
        <rect x="30" y="320" width="400" height="14" rx="7" fill="currentColor" />
        <rect x="60" y="334" width="12" height="46" rx="6" fill="currentColor" />
        <rect x="388" y="334" width="12" height="46" rx="6" fill="currentColor" />

        <rect x="120" y="220" width="220" height="132" rx="12" fill="currentColor" />
        <rect x="128" y="228" width="204" height="116" rx="8" fill="var(--color-card)" />
        <rect x="122" y="352" width="216" height="10" rx="5" fill="currentColor" />

        <circle cx="330" cy="90" r="42" fill="currentColor" />
        <path d="M288 82c0-26 20-46 42-46s42 20 42 46" fill="currentColor" />
        <circle cx="330" cy="112" r="30" fill="currentColor" />
        <circle cx="330" cy="112" r="26" fill="var(--color-card)" stroke="currentColor" strokeWidth="3" />
        <circle cx="321" cy="106" r="3" fill="currentColor" />
        <circle cx="339" cy="106" r="3" fill="currentColor" />
        <path d="M320 122q10 8 20 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />

        <path d="M288 168c-40 8-46 48-26 66" stroke="currentColor" strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M395 168c26 12 32 52 14 70" stroke="currentColor" strokeWidth="22" strokeLinecap="round" fill="none" />
        <circle cx="236" cy="238" r="11" fill="var(--color-card)" stroke="currentColor" strokeWidth="3" />
        <circle cx="418" cy="242" r="11" fill="var(--color-card)" stroke="currentColor" strokeWidth="3" />

        <rect x="70" y="272" width="36" height="40" rx="6" fill="currentColor" />
        <path d="M106 282h8a10 10 0 0 1 0 20h-8" stroke="currentColor" strokeWidth="6" fill="none" />
      </g>

      <rect x="150" y="252" width="90" height="12" rx="6" fill="var(--color-accent)" />
      <rect x="150" y="278" width="120" height="10" rx="5" fill="var(--color-border)" />
      <rect x="150" y="296" width="100" height="10" rx="5" fill="var(--color-border)" />
      <rect x="150" y="314" width="110" height="10" rx="5" fill="var(--color-border)" />
      <rect x="270" y="252" width="50" height="12" rx="6" fill="var(--color-bg-soft)" />
      <rect x="185" y="236" width="24" height="8" rx="4" fill="var(--color-accent)" />
      <path d="M288 150c6 26 20 40 42 40s36-14 42-40l12 56c0 30-54 40-54 40s-54-10-54-40z" fill="var(--color-accent)" />
      <rect x="78" y="288" width="20" height="8" rx="4" fill="var(--color-accent)" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[88px]" id="home">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl dark:bg-accent/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl dark:bg-accent/5"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent-soft px-4 py-2 text-[0.85rem] font-semibold text-accent dark:border-accent/30 dark:bg-accent-soft-dark dark:text-accent-dark">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent dark:bg-accent-dark" />
              </span>
              Open to Internships & Opportunities
            </div>
            <div className="font-heading text-2xl font-medium text-ink-2 dark:text-ink-2-dark">
              Hi, I'm
            </div>
            <h1 className="mt-1 font-heading text-[3.2rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-ink sm:text-7xl lg:text-[5.2rem] dark:text-ink-dark">
              {SITE.firstName} <span className="text-accent dark:text-accent-dark">{SITE.lastName}</span>
            </h1>
            <div className="mb-5 mt-1 font-heading text-2xl font-bold text-ink sm:text-3xl dark:text-ink-dark">
              {SITE.role}
            </div>
            <p className="mb-10 max-w-[500px] text-lg leading-relaxed text-ink-2 dark:text-ink-2-dark">
              {SITE.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_rgba(255,107,26,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,107,26,0.5)]"
              >
                View My Work →
              </a>
              <a
                href={SITE.resume}
                download
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/70 bg-white/50 px-8 py-4 text-[0.95rem] font-semibold text-ink backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md dark:border-border-dark dark:bg-card-dark dark:text-ink-dark dark:hover:border-accent-dark dark:hover:text-accent-dark"
              >
                Download CV ↓
              </a>
            </div>
          </Reveal>

          <Reveal type="reveal-r" delay={120} className="flex justify-center">
            <div className="relative flex justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-2.5 bottom-0 scale-[0.94] rounded-[60%_40%_55%_45%/55%_45%_60%_40%] bg-gradient-to-tr from-accent to-orange-400 opacity-15 dark:opacity-20"
              />
              <span
                aria-hidden="true"
                className="absolute -right-6 top-6 h-24 w-24 rounded-3xl border-2 border-accent/30 dark:border-accent/40"
              />
              <DeveloperIllustration />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
