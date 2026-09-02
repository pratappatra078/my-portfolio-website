import { TRAITS } from '../data/portfolioData'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="relative glass-section py-28 dark:bg-bg-soft-dark" id="about">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal type="reveal-l" className="hidden justify-center lg:flex">
            <div className="relative flex aspect-square w-full max-w-[400px] items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 -rotate-6 rounded-[2rem] bg-gradient-to-tr from-accent/20 to-orange-400/10 dark:from-accent/10"
              />
              <span
                aria-hidden="true"
                className="absolute inset-3 rotate-3 rounded-[2rem] border-2 border-accent/30 dark:border-accent/40"
              />
              <span className="relative font-heading text-[9rem] font-extrabold text-accent opacity-90 dark:text-accent-dark">
                P.
              </span>
              <span className="absolute bottom-8 left-8 rounded-2xl bg-white/70 px-5 py-3 shadow-lg backdrop-blur-xl dark:bg-card-dark">
                <span className="block font-heading text-2xl font-extrabold text-ink dark:text-ink-dark">15+</span>
                <span className="text-xs font-semibold text-ink-3 dark:text-ink-3-dark">Projects Built</span>
              </span>
            </div>
          </Reveal>

          <Reveal type="reveal-r" delay={100} className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2.5 text-[0.85rem] font-bold uppercase tracking-[0.16em] text-accent before:h-[2px] before:w-8 before:rounded-full before:bg-accent before:content-[''] dark:text-accent-dark dark:before:bg-accent-dark">
              About Me
            </span>
            <h2 className="mt-4 font-heading text-[2.1rem] font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] dark:text-ink-dark">
              Turning ideas into elegant, functional software.
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-lg leading-relaxed text-ink-2 lg:mx-0 dark:text-ink-2-dark">
              I'm Pratap, a passionate <strong className="font-semibold text-accent dark:text-accent-dark">Computer Science student</strong> and aspiring
              full-stack developer. I love solving problems with code and building fast, clean,
              and user-friendly web applications that feel great to use.
            </p>
            <p className="mx-auto mt-4 max-w-[520px] text-lg leading-relaxed text-ink-2 lg:mx-0 dark:text-ink-2-dark">
              My focus is on <strong className="font-semibold text-accent dark:text-accent-dark">clean architecture</strong>,{" "}
              <strong className="font-semibold text-accent dark:text-accent-dark">modern JavaScript</strong>, and{" "}
              <strong className="font-semibold text-accent dark:text-accent-dark">delightful user experiences</strong> — always learning, always building.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 text-left sm:grid-cols-3">
              {TRAITS.map((trait) => (
                <div
                  key={trait.label}
                  className="group flex items-center gap-3 rounded-2xl border border-white/60 bg-white/50 px-5 py-4 text-sm font-semibold text-ink shadow-[0_8px_30px_rgba(31,38,135,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_12px_28px_rgba(255,107,26,0.12)] dark:border-border-dark dark:bg-card-dark dark:text-ink-dark dark:shadow-none dark:hover:border-accent-dark/40"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition-all duration-300 group-hover:scale-110 dark:bg-accent-soft-dark dark:text-accent-dark ${trait.icon === '</>' ? 'font-heading text-sm' : 'text-[1.1rem]'}`}
                  >
                    {trait.icon}
                  </span>
                  {trait.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
