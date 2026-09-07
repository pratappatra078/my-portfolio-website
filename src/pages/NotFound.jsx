import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 pb-20 pt-[84px]">
      <div className="text-center">
        <p className="font-heading text-8xl font-extrabold tracking-tight text-accent dark:text-accent-dark">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-ink dark:text-ink-dark">
          This page doesn't exist.
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-base text-ink-2 dark:text-ink-2-dark">
          The link may be broken, or the page may have moved. Let's get you back home.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_6px_18px_rgba(249,95,15,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(249,95,15,0.4)]"
        >
          Back to home
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}