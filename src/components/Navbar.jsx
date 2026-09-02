import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/portfolioData'
import { useActiveSection } from '../hooks/useReveal'
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = (id) =>
    `group relative text-[1rem] font-semibold tracking-wide transition-colors duration-300 ${
      active === id
        ? 'text-ink dark:text-ink-dark'
        : 'text-ink-2 hover:text-ink dark:text-ink-2-dark dark:hover:text-ink-dark'
    }`

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/60 bg-white/60 shadow-[0_6px_24px_rgba(31,38,135,0.1)] backdrop-blur-2xl dark:border-border-dark dark:bg-bg-dark/80'
          : 'border-b border-transparent bg-white/40 backdrop-blur-xl dark:bg-bg-dark/40'
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-heading text-[2rem] font-extrabold tracking-tight text-ink transition-transform duration-300 hover:scale-[1.03] dark:text-ink-dark">
          Pr<span className="text-accent dark:text-accent-dark">.</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass(link.href.slice(1))}>
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded-full bg-accent transition-transform duration-300 dark:bg-accent-dark ${
                    active === link.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/50 text-ink backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md dark:border-border-dark dark:bg-card-dark dark:text-ink-dark dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            {theme === 'dark' ? (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.95rem] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_10px_28px_rgba(255,107,26,0.4)] lg:inline-flex dark:bg-white dark:text-ink dark:hover:bg-accent-dark dark:hover:text-white"
          >
            Let's Talk <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>

          <button
            className={`flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden ${open ? 'relative' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className={`block h-[2.5px] w-6 rounded bg-ink transition-transform duration-300 dark:bg-ink-dark ${open ? 'translate-y-[7.5px] rotate-45' : ''}`} />
            <span className={`block h-[2.5px] w-6 rounded bg-ink transition-opacity duration-300 dark:bg-ink-dark ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[2.5px] w-6 rounded bg-ink transition-transform duration-300 dark:bg-ink-dark ${open ? '-translate-y-[7.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`flex flex-col gap-1.5 border-b border-white/60 bg-white/70 px-6 pb-6 pt-4 shadow-[0_30px_40px_rgba(31,38,135,0.12)] backdrop-blur-2xl lg:hidden dark:border-border-dark dark:bg-card-dark dark:shadow-[0_30px_40px_rgba(0,0,0,0.4)] ${open ? '' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-xl px-4 py-3 font-semibold transition-colors ${
              active === link.href.slice(1)
                ? 'bg-accent-soft text-accent dark:bg-accent-soft-dark dark:text-accent-dark'
                : 'text-ink-2 hover:bg-accent-soft hover:text-accent dark:text-ink-2-dark dark:hover:bg-accent-soft-dark dark:hover:text-accent-dark'
            }`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
