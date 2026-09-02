import { useEffect } from 'react'

/**
 * Custom dual-cursor (dot + follower) with a smooth rAF follower.
 * Only activates on devices with a fine pointer.
 */
export default function Cursor() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer) return

    let cursor = document.querySelector('.cursor')
    let follower = document.querySelector('.cursor-follower')
    if (!cursor) {
      cursor = document.createElement('div')
      cursor.className = 'cursor'
      cursor.setAttribute('aria-hidden', 'true')
      document.body.appendChild(cursor)
    }
    if (!follower) {
      follower = document.createElement('div')
      follower.className = 'cursor-follower'
      follower.setAttribute('aria-hidden', 'true')
      document.body.appendChild(follower)
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let folX = mouseX
    let folY = mouseY
    let visible = false
    let raf = null

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!visible) {
        visible = true
        document.body.classList.remove('cursor--hidden')
        folX = mouseX
        folY = mouseY
      }
      if (cursor) cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, .skill-tag, input, [role="button"], .project-card, .blog-card, .cat-pill, .filter-btn, .badge')
      document.body.classList.toggle('cursor--active', Boolean(interactive))
    }

    const onDown = () => document.body.classList.add('cursor--down')
    const onUp = () => document.body.classList.remove('cursor--down')
    const onLeave = () => {
      visible = false
      document.body.classList.add('cursor--hidden')
    }

    const loop = () => {
      folX += (mouseX - folX) * 0.16
      folY += (mouseY - folY) * 0.16
      if (follower) follower.style.transform = `translate(${folX}px, ${folY}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)

    if (!reducedMotion) raf = requestAnimationFrame(loop)
    else follower.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`

    document.body.classList.add('cursor-enabled')

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
      cursor?.remove()
      follower?.remove()
      document.body.classList.remove('cursor-enabled')
    }
  }, [])

  return null
}