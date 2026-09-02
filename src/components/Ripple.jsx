import { useEffect } from 'react'

/**
 * Global click-to-ripple for any element with the `.btn` class.
 */
export default function Ripple() {
  useEffect(() => {
    const createRipple = (e) => {
      const btn = e.target.closest('.btn')
      if (!btn) return

      const existing = btn.querySelector('.ripple')
      if (existing) existing.remove()

      const circle = document.createElement('span')
      const d = Math.max(btn.clientWidth, btn.clientHeight)
      const rect = btn.getBoundingClientRect()
      circle.className = 'ripple'
      circle.style.width = circle.style.height = `${d}px`
      circle.style.left = `${e.clientX - rect.left - d / 2}px`
      circle.style.top = `${e.clientY - rect.top - d / 2}px`
      btn.appendChild(circle)
      circle.addEventListener('animationend', () => circle.remove(), { once: true })
    }

    document.addEventListener('click', createRipple)
    return () => document.removeEventListener('click', createRipple)
  }, [])

  return null
}