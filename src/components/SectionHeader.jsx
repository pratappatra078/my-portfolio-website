import Reveal from './Reveal'

export default function SectionHeader({ tag, eyebrow, title, sub, subtitle }) {
  const tagText = tag || eyebrow
  const subText = sub || subtitle

  return (
    <div>
      <Reveal className="inline-flex items-center gap-2.5 text-[0.85rem] font-bold uppercase tracking-[0.14em] text-accent before:h-[2px] before:w-6 before:bg-accent before:content-[''] dark:text-accent-dark dark:before:bg-accent-dark">
        {tagText}
      </Reveal>
      <Reveal className="mt-3.5 font-heading text-[1.9rem] font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] dark:text-ink-dark">
        {title}
      </Reveal>
      {subText && (
        <Reveal className="mt-4 max-w-[520px] text-base text-ink-2 dark:text-ink-2-dark">
          {subText}
        </Reveal>
      )}
    </div>
  )
}
