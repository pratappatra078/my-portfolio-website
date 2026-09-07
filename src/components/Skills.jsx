import { SKILLS } from '../data/portfolioData'
import TechLogo from './TechLogo'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Skills({ limit }) {
  const skills = limit ? SKILLS.slice(0, limit) : SKILLS

  return (
    <section className="py-24" id="skills">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          tag="Skills & Technologies"
          title="Tools I work with."
          sub="A focused set of languages and technologies I use to build robust products."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <Reveal
              key={skill.name}
              delay={(i % 4) * 60}
              className="group flex items-center gap-3.5 rounded-xl border border-ink/8 bg-white/55 px-4 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent-soft dark:border-border-dark dark:bg-card-dark dark:hover:border-accent-dark"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-ink/5 dark:bg-white/95">
                <TechLogo name={skill.name} size={22} />
              </span>
              <span className="font-heading text-[0.98rem] font-bold text-ink dark:text-ink-dark">
                {skill.name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}