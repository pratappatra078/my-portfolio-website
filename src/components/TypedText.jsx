import { useEffect, useRef, useState } from 'react'

const DEFAULT_WORDS = [
  'CSE Student',
  'Problem Solver',
  'Full Stack Dev',
  'DSA Enthusiast',
  'Open Source Fan',
  'Tech Explorer',
  'Java Developer',
  'Python Coder',
]

/**
 * Live type/delete cycling text for the hero.
 */
export default function TypedText({ words = DEFAULT_WORDS, className = 'hero__typed' }) {
  const [text, setText] = useState(words[0])
  const timerRef = useRef(null)

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false

    const TYPE = 92
    const DELETE = 55
    const PAUSE_TYPED = 1800
    const PAUSE_EMPTY = 380

    const tick = () => {
      const word = words[wordIndex]
      if (isDeleting) {
        charIndex -= 1
        setText(word.substring(0, charIndex))
        if (charIndex === 0) {
          isDeleting = false
          wordIndex = (wordIndex + 1) % words.length
          timerRef.current = setTimeout(tick, PAUSE_EMPTY)
        } else {
          timerRef.current = setTimeout(tick, DELETE)
        }
      } else {
        charIndex += 1
        setText(word.substring(0, charIndex))
        if (charIndex === word.length) {
          isDeleting = true
          timerRef.current = setTimeout(tick, PAUSE_TYPED)
        } else {
          timerRef.current = setTimeout(tick, TYPE)
        }
      }
    }

    timerRef.current = setTimeout(tick, 300)
    return () => clearTimeout(timerRef.current)
  }, [words])

  return (
    <span className={className} aria-live="polite">
      {text}
    </span>
  )
}