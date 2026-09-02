import { useEffect, useRef, useState } from 'react'

/**
 * Adds the `revealed` class to an element when it scrolls into view.
 * Respects `prefers-reduced-motion` by revealing immediately.
 */
export function useRevealObserver(ref, { threshold = 0.08, rootMargin = '0px 0px -25px 0px' } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [ref, threshold, rootMargin])
}

/**
 * Observes every `.reveal`, `.reveal-left`, `.reveal-right` element within
 * the given container (defaults to document). Useful for re-running reveal
 * on dynamically rendered content.
 */
export function useRevealAll(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -25px 0px' },
    )

    els.forEach((el) => {
      // Skip elements that were already revealed (e.g. after a filter re-render)
      if (!el.classList.contains('revealed')) io.observe(el)
    })

    return () => io.disconnect()
  }, [dep])
}

export function useReveal(defaultDirection = 'reveal') {
  const ref = useRef(null)
  useRevealObserver(ref)
  return ref
}

export function useActiveSection() {
  const [active, setActive] = useState('home')
  const ids = ['home', 'about', 'skills', 'work', 'experience', 'contact']

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return active
}