import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { ABOUT_STORY, EDUCATION, TRAITS } from '../data/portfolioData'

export default function AboutPage() {
  return (
    <>
      <section className="pt-[84px]">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            tag="About me"
            title="My journey, in my own words."
            sub="Who I am, where I come from, and how I got here."
          />

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5">
              {ABOUT_STORY.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="text-base leading-relaxed text-ink-2 dark:text-ink-2-dark">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal type="reveal-r" delay={120}>
              <div className="rounded-2xl border border-ink/8 bg-white/55 p-7 backdrop-blur-md dark:border-border-dark dark:bg-card-dark">
                <h3 className="mb-5 font-heading text-lg font-bold text-ink dark:text-ink-dark">
                  Quick facts
                </h3>
                <ul className="space-y-3.5">
                  {TRAITS.map((trait) => (
                    <li
                      key={trait.label}
                      className="flex items-center gap-3 text-[0.95rem] font-semibold text-ink dark:text-ink-dark"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent dark:bg-accent-soft-dark dark:text-accent-dark">
                        {trait.icon}
                      </span>
                      {trait.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24" id="education">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            tag="Education"
            title="From school to college."
            sub="Every step that shaped who I am as a developer."
          />

          <div className="relative mt-14">
            <span
              aria-hidden="true"
              className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-ink/10 to-transparent dark:from-accent-dark/40 dark:via-ink-dark/10"
            />
            <div className="space-y-10">
              {EDUCATION.map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="relative pl-12">
                  <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-white text-xs font-bold text-accent shadow-sm ring-4 ring-accent/8 dark:bg-card-dark dark:text-accent-dark">
                    {String(EDUCATION.length - i).padStart(2, '0')}
                  </span>
                  <div className="rounded-2xl border border-ink/8 bg-white/55 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 dark:border-border-dark dark:bg-card-dark">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent dark:text-accent-dark">
                      {item.period}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-bold text-ink dark:text-ink-dark">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-ink-3 dark:text-ink-3-dark">
                      {item.org}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-2 dark:text-ink-2-dark">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}