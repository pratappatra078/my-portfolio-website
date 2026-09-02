import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const [seconds, setSeconds] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => (s <= 1 ? 0 : s - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (seconds <= 0) window.location.replace('#/')
  }, [seconds])

  return (
    <main className="page-404" id="main-content">
      <div className="page-404__blobs" aria-hidden="true">
        <div className="page-404__blob page-404__blob--1" />
        <div className="page-404__blob page-404__blob--2" />
      </div>

      <div className="page-404__content">
        <div className="page-404__code" aria-label="404 error">404</div>
        <span className="page-404__emoji" aria-hidden="true">🌌</span>
        <h1 className="page-404__title">Oops! Page Not Found</h1>
        <p className="page-404__desc">
          The page you're looking for seems to have wandered off into the void. It might have been
          moved, deleted, or never existed in the first place.
        </p>

        <div className="page-404__actions">
          <Link to="/" className="btn btn--primary btn--lg" aria-label="Go back home">
            🏠 Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn--outline btn--lg" aria-label="Go back to previous page">
            ← Go Back
          </button>
        </div>

        <p style={{ fontSize: '0.82rem', color: 'var(--color-text-3)', marginBottom: 'var(--sp-4)' }}>
          Or try one of these pages:
        </p>
        <div className="page-404__suggestions">
          <Link to="/projects" className="suggestion-link" aria-label="View projects">💻 Projects</Link>
          <Link to="/blog" className="suggestion-link" aria-label="Read blog">📝 Blog</Link>
          <Link to="/about" className="suggestion-link" aria-label="About me">👤 About Me</Link>
        </div>

        <p className="page-404__countdown">
          Redirecting to home in <span id="countdown-num">{seconds}</span> seconds...
        </p>
      </div>
    </main>
  )
}