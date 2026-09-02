import { EXPERIENCE } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <section className="py-28" id="experience">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          tag="Experience"
          title="My journey so far."
          sub="A timeline of my education and the projects that shaped my development journey."
        />

        <div className="mt-16">
          <div className="relative mx-auto max-w-[720px] before:absolute before:left-2.5 before:top-2.5 before:bottom-2.5 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-accent before:to-accent/20 before:content-['']">
            {EXPERIENCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="group relative pb-12 pl-14 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-[3px] border-accent bg-white shadow-[0_0_0_4px_rgba(255,107,26,0.15)] transition-transform duration-300 group-hover:scale-110 dark:border-accent-dark dark:bg-card-dark"
                >
                  <span className="h-2 w-2 rounded-full bg-accent dark:bg-accent-dark" />
                </span>
                <span className="mb-3 inline-block rounded-full bg-accent-soft px-4 py-1.5 text-[0.8rem] font-bold tracking-wide text-accent dark:bg-accent-soft-dark dark:text-accent-dark">
                  {item.period}
                </span>
                <div className="font-heading text-xl font-extrabold text-ink dark:text-ink-dark">
                  {item.title}
                </div>
                <div className="mb-2.5 text-[0.92rem] font-semibold text-ink-3 dark:text-ink-3-dark">
                  {item.org}
                </div>
                <p className="max-w-[600px] text-[0.97rem] leading-relaxed text-ink-2 dark:text-ink-2-dark">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
