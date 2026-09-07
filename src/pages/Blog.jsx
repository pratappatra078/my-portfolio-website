import { Link } from 'react-router-dom'
import { BLOG_POSTS, SITE } from '../data/portfolioData'
import Reveal from '../components/Reveal'

const CATEGORIES = ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React']

export default function Blog() {
  return (
    <>
      <section className="flex min-h-[38vh] items-end pb-8 pt-[84px]">
        <div className="mx-auto w-full max-w-5xl px-6">
          <Reveal>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-accent dark:text-accent-dark">
              Blog
            </p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl dark:text-ink-dark">
              What I'm learning.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink-2 dark:text-ink-2-dark">
              My personal notes on web development — HTML, CSS, JavaScript, Tailwind CSS, and React.
              Every post is a lesson I'm learning along the way.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-6 flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-ink/10 bg-white/60 px-3.5 py-1 text-xs font-semibold text-ink-2 backdrop-blur-md dark:border-border-dark dark:bg-card-dark dark:text-ink-2-dark"
              >
                {cat}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 2) * 80}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-ink/10 bg-white/55 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_12px_30px_rgba(16,16,24,0.06)] dark:border-border-dark dark:bg-card-dark"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent dark:bg-accent-soft-dark dark:text-accent-dark">
                      {post.category}
                    </span>
                    <span className="text-xs text-ink-3 dark:text-ink-3-dark">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent dark:text-ink-dark dark:group-hover:text-accent-dark">
                    {post.title}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-2 dark:text-ink-2-dark">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-3 dark:text-accent-dark">
                    Read post
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <p className="text-center text-sm text-ink-3 dark:text-ink-3-dark">
              Ideas or feedback? <a href={`mailto:${SITE.email}`} className="font-semibold text-accent decoration-accent/30 underline underline-offset-4 dark:text-accent-dark">Let's discuss.</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}