import Projects from '../components/Projects'
import ContributionGraph from '../components/ContributionGraph'
import Reveal from '../components/Reveal'
import { SITE } from '../data/portfolioData'

export default function Work() {
  return (
    <>
      <section className="pt-[84px]">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="inline-flex items-center gap-2.5 font-heading text-sm font-bold uppercase tracking-[0.14em] text-accent dark:text-accent-dark">
            <span className="h-[2px] w-6 rounded-full bg-accent dark:bg-accent-dark" />
            My work
          </Reveal>
          <Reveal className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl dark:text-ink-dark">
            Projects, activity & everything I build.
          </Reveal>
          <Reveal className="mt-3 max-w-2xl text-base text-ink-2 dark:text-ink-2-dark">
            A collection of projects I've built while learning full-stack development, plus a live
            look at where I spend my coding time.
          </Reveal>
        </div>
      </section>

      <section className="py-24" id="graphs">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-8 max-w-2xl">
            <h2 className="font-heading text-2xl font-bold text-ink dark:text-ink-dark">
              Coding consistency
            </h2>
            <p className="mt-2 text-sm text-ink-2 dark:text-ink-2-dark">
              My contribution activity on GitHub and LeetCode — the green boxes I'm proud of.
            </p>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <ContributionGraph
              platform="github"
              username={SITE.github}
              note="Every green box is a day I committed code to a repository."
            />
            <ContributionGraph
              platform="leetcode"
              username={SITE.leetcode}
              note="Solving data structures & algorithms problems keeps me sharp."
            />
          </div>
        </div>
      </section>

      <Projects />

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="rounded-2xl border border-ink/8 bg-white/55 p-8 text-center backdrop-blur-md sm:p-10 dark:border-border-dark dark:bg-card-dark">
            <h2 className="font-heading text-2xl font-bold text-ink dark:text-ink-dark">
              See more of what I build
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-2 dark:text-ink-2-dark">
              The rest of my code lives on GitHub — contributions, experiments, and side projects.
            </p>
            <a
              href={`https://github.com/${SITE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-[0.92rem] font-semibold text-white shadow-[0_6px_18px_rgba(249,95,15,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Visit my GitHub
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}