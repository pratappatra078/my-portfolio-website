import Reveal from './Reveal'

export default function SectionHeader({ tag, eyebrow, title, sub, subtitle }) {
  const tagText = tag || eyebrow
  const subText = sub || subtitle

  return (
    <div className="max-w-2xl">
      <Reveal className="inline-flex items-center gap-2.5 font-heading text-sm font-bold uppercase tracking-[0.14em] text-accent dark:text-accent-dark">
        <span className="h-[2px] w-6 rounded-full bg-accent dark:bg-accent-dark" />
        {tagText}
      </Reveal>
      <Reveal className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl dark:text-ink-dark">
        {title}
      </Reveal>
      {subText && (
        <Reveal className="mt-3 text-base text-ink-2 dark:text-ink-2-dark">
          {subText}
        </Reveal>
      )}
    </div>
  )
}
