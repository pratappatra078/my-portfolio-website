import { useEffect, useRef, useState } from 'react'

/**
 * Animated counter that counts up to `target` when scrolled into view.
 * Supply outer styles via `className` (e.g. hero__stat-value).
 */
export default function Counter({ target, suffix = '', className = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }

    let timer
    const animate = () => {
      const steps = 42
      const step = Math.ceil(target / steps)
      let current = 0
      timer = setInterval(() => {
        current = Math.min(current + step, target)
        setValue(current)
        if (current >= target) clearInterval(timer)
      }, 24)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate()
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.3 },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      clearInterval(timer)
    }
  }, [target])

  return (
    <div ref={ref} className={className}>
      {value}
      {suffix}
    </div>
  )
}