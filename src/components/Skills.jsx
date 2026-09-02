import { SKILLS } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section className="py-28" id="skills">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          tag="Skills & Technologies"
          title="Tools I work with daily."
          sub="A curated set of languages and technologies I use to build robust, scalable products."
        />

        <div className="mt-16 grid grid-cols-3 gap-5 sm:grid-cols-5">
          {SKILLS.map((skill, i) => (
            <Reveal
              key={skill.name}
              delay={i * 60}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/60 bg-white/50 p-7 text-center shadow-[0_8px_30px_rgba(31,38,135,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_16px_40px_rgba(255,107,26,0.2)] dark:border-border-dark dark:bg-card-dark dark:shadow-none dark:hover:border-accent-dark"
            >
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft text-[2.6rem] leading-none transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 dark:bg-accent-soft-dark">
                {skill.icon}
              </span>
              <div className="font-heading text-[0.98rem] font-bold text-ink dark:text-ink-dark">
                {skill.name}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
