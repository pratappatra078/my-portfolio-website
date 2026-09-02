import { SITE, SOCIALS } from '../data/portfolioData'
import Reveal from './Reveal'

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function getInitial(label) {
  return label === 'Twitter' ? 'X' : label.charAt(0)
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden glass-section border-t border-white/40 bg-white/40 py-28 pb-10 dark:border-border-dark dark:bg-card-dark" id="contact">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent/5 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <Reveal type="reveal-l">
            <h2 className="font-heading text-[2.2rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.2rem] dark:text-ink-dark">
              Let's build something <em className="not-italic text-accent dark:text-accent-dark">amazing</em> together.
            </h2>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-heading text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_12px_30px_rgba(255,107,26,0.4)] dark:bg-white dark:text-ink dark:hover:bg-accent-dark dark:hover:text-white"
            >
              {SITE.email} <span>→</span>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <h4 className="mb-6 font-heading text-[0.85rem] font-extrabold uppercase tracking-[0.12em] text-ink dark:text-ink-dark">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${SITE.email}`} className="group flex items-center gap-3.5 text-[0.95rem] text-ink-2 transition-colors hover:text-accent dark:text-ink-2-dark dark:hover:text-accent-dark">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft transition-colors group-hover:bg-accent group-hover:text-white dark:bg-accent-soft-dark"><MailIcon /></span>
                {SITE.email}
              </a>
              <span className="flex items-center gap-3.5 text-[0.95rem] text-ink-2 dark:text-ink-2-dark">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft dark:bg-accent-soft-dark"><PhoneIcon /></span>
                {SITE.phone}
              </span>
              <span className="flex items-center gap-3.5 text-[0.95rem] text-ink-2 dark:text-ink-2-dark">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft dark:bg-accent-soft-dark"><PinIcon /></span>
                {SITE.location}
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h4 className="mb-6 font-heading text-[0.85rem] font-extrabold uppercase tracking-[0.12em] text-ink dark:text-ink-dark">
              Social
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-soft text-base font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_10px_24px_rgba(255,107,26,0.3)] dark:border-border-dark dark:bg-bg-soft-dark dark:text-ink-dark dark:hover:border-accent-dark dark:hover:bg-accent-dark"
                >
                  {getInitial(s.label)}
                </a>
              ))}
            </div>
            <p className="mt-8 max-w-[220px] text-sm leading-relaxed text-ink-3 dark:text-ink-3-dark">
              Let's connect — I'm always open to discussing new projects and opportunities.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-7 text-[0.85rem] text-ink-3 dark:border-border-dark dark:text-ink-3-dark">
          <span>© 2026 {SITE.name}. All rights reserved.</span>
          <span>
            Designed &amp; built with <span className="text-accent dark:text-accent-dark">♥</span> by Pratap
          </span>
        </div>
      </div>
    </footer>
  )
}
