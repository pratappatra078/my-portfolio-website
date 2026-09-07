import { useState } from 'react'
import { SITE, SOCIALS } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import BrandIcon from '../components/BrandIcon'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full rounded-lg border border-ink/10 bg-white/60 px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-3 outline-none backdrop-blur-md transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-border-dark dark:bg-card-dark dark:text-ink-dark'

  return (
    <>
      <section className="flex min-h-[38vh] items-end pb-8 pt-[84px]">
        <div className="mx-auto w-full max-w-5xl px-6">
          <Reveal>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-accent dark:text-accent-dark">
              Contact
            </p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl dark:text-ink-dark">
              Let's connect.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink-2 dark:text-ink-2-dark">
              Find me on just about any platform — or send me an email directly. I usually reply fast.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24" id="socials">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-8 flex max-w-2xl flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-heading text-2xl font-bold text-ink dark:text-ink-dark">
              All my social profiles
            </h2>
            <span className="text-sm text-ink-3 dark:text-ink-3-dark">
              {SOCIALS.length} ways to reach me
            </span>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOCIALS.map((social, i) => (
              <Reveal key={social.label} delay={(i % 3) * 60}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center gap-4 rounded-2xl border border-ink/8 bg-white/55 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft dark:border-border-dark dark:bg-card-dark dark:hover:border-accent-dark"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-ink/5 transition-transform duration-300 group-hover:scale-110 dark:bg-white/95">
                    <BrandIcon label={social.label} size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-heading text-[0.98rem] font-bold text-ink dark:text-ink-dark">
                      {social.label}
                    </span>
                    <span className="block truncate text-sm text-ink-3 dark:text-ink-3-dark">
                      {social.handle}
                    </span>
                  </span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-auto shrink-0 text-ink-3 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 dark:text-ink-3-dark dark:group-hover:text-accent-dark"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24" id="email">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="rounded-2xl border border-ink/8 bg-white/55 p-8 backdrop-blur-md sm:p-10 dark:border-border-dark dark:bg-card-dark">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="font-heading text-2xl font-bold text-ink dark:text-ink-dark">
                  Or send a message
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-2 dark:text-ink-2-dark">
                  Have a role, a project, or an idea in mind? Tell me about it and I'll get back to
                  you at{' '}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-accent dark:text-accent-dark"
                  >
                    {SITE.email}
                  </a>
                  .
                </p>
                <div className="mt-6 space-y-3 text-sm text-ink-2 dark:text-ink-2-dark">
                  <p className="flex items-center gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {SITE.location}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    {SITE.phone}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-2 dark:text-ink-2-dark">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-2 dark:text-ink-2-dark">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-2 dark:text-ink-2-dark">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project or opportunity…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_6px_18px_rgba(249,95,15,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(249,95,15,0.4)]"
                >
                  Send message
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                </button>
                <p className="text-center text-xs text-ink-3 dark:text-ink-3-dark">
                  This opens your email app with the message pre-filled.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}