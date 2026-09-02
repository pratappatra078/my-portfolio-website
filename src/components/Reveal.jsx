import { useRef } from 'react'
import { useRevealObserver } from '../hooks/useReveal'

export default function Reveal({
  as: Tag = 'div',
  type = 'reveal',
  direction,
  delay = 0,
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null)
  useRevealObserver(ref)

  const revealClass = direction || type

  return (
    <Tag
      ref={ref}
      className={`${revealClass} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}
