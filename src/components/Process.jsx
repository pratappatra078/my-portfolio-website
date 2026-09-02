import { PROCESS } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Process() {
  return (
    <section className="relative glass-section py-28 dark:bg-bg-soft-dark" id="process">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-3xl rounded-b-[50%] bg-accent/5 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          tag="My Process"
          title="How I work."
          sub="A structured approach to every project, from the first idea to a reliable product."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {PROCESS.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 70}
              className="group relative rounded-2xl border border-white/60 bg-white/50 p-7 text-center shadow-[0_8px_30px_rgba(31,38,135,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_16px_40px_rgba(255,107,26,0.2)] dark:border-border-dark dark:bg-card-dark dark:shadow-none dark:hover:border-accent-dark"
            >
              <span className="absolute right-4 top-3 font-heading text-4xl font-extrabold text-accent/10 transition-colors duration-300 group-hover:text-accent/20">
                {step.num}
              </span>
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft font-heading text-lg font-extrabold text-accent transition-all duration-300 group-hover:rotate-6 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg dark:bg-accent-soft-dark dark:text-accent-dark">
                {step.num}
              </div>
              <div className="font-heading text-[1.08rem] font-extrabold text-ink dark:text-ink-dark">
                {step.title}
              </div>
              <p className="mt-2.5 text-[0.87rem] leading-relaxed text-ink-2 dark:text-ink-2-dark">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
