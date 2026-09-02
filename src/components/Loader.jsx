import { useEffect, useState } from 'react'

export default function Loader({ text = 'PP' }) {
  const [hidden, setHidden] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const finish = () => setHidden(true)
    let loadFn = finish
    let fallbackTimer

    if (document.readyState === 'complete') {
      // Wait a little so the bar animation is visible
      fallbackTimer = setTimeout(finish, 1100)
    } else {
      loadFn = () => {
        // Keep the loader long enough to feel smooth, then fade
        setTimeout(finish, 700)
      }
      window.addEventListener('load', loadFn, { once: true })
      fallbackTimer = setTimeout(finish, 2200)
    }

    const goneTimer = setTimeout(() => setGone(true), 2000)

    return () => {
      window.removeEventListener('load', loadFn)
      clearTimeout(fallbackTimer)
      clearTimeout(goneTimer)
    }
  }, [])

  if (gone) return null

  return (
    <div className={`loader${hidden ? ' loader--hidden' : ''}`} role="status" aria-live="polite" aria-label="Loading page">
      <div className="loader__inner">
        <div className="loader__logo">{text}</div>
        <div className="loader__bar">
          <div className="loader__bar-fill" />
        </div>
      </div>
    </div>
  )
}