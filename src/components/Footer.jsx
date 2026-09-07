import { Link } from 'react-router-dom'
import { SITE, SOCIALS } from '../data/portfolioData'
import Reveal from './Reveal'

function getInitial(label) {
  return label === 'Twitter' ? 'X' : label.charAt(0)
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-20 pb-8" id="contact">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal type="reveal-l">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-accent dark:text-accent-dark">
            Get in touch
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl dark:text-ink-dark">
            Let's build something great together.
          </h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 font-heading text-xl font-bold text-accent underline decoration-accent/30 decoration-2 underline-offset-8 transition-colors hover:text-ink dark:text-accent-dark dark:hover:text-ink-dark"
          >
            Start a conversation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-8 dark:border-ink-dark/10">
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 bg-white/50 text-sm font-bold text-ink-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent hover:text-white dark:border-border-dark dark:bg-card-dark dark:text-ink-2-dark dark:hover:bg-accent-dark"
              >
                {getInitial(s.label)}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-1 text-sm text-ink-2 sm:items-end dark:text-ink-2-dark">
            <span>{SITE.phone}</span>
            <span>{SITE.location}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-3 dark:text-ink-3-dark">
          <span>© 2026 {SITE.name}. All rights reserved.</span>
          <span>Designed & built with care by Pratap</span>
        </div>
      </div>
    </footer>
  )
}