import { Link, useParams } from 'react-router-dom'
import { BLOG_POSTS } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import { useEffect } from 'react'

function Inline({ text }) {
  const parts = text.split('`')
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <code
        key={i}
        className="mx-0.5 rounded-md bg-ink/5 px-1.5 py-0.5 font-mono text-[0.9em] text-accent dark:bg-ink-dark/10 dark:text-accent-dark"
      >
        {part}
      </code>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-10 font-heading text-xl font-bold leading-tight text-ink sm:text-2xl dark:text-ink-dark">
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p className="mt-5 text-base leading-relaxed text-ink-2 dark:text-ink-2-dark">
          <Inline text={block.text} />
        </p>
      )
    case 'ul':
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-base leading-relaxed text-ink-2 dark:text-ink-2-dark">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
              <span><Inline text={item} /></span>
            </li>
          ))}
        </ul>
      )
    case 'code':
      return (
        <pre className="mt-5 overflow-x-auto rounded-xl border border-ink/8 bg-[#12121a] p-5 text-[0.85rem] leading-relaxed text-[#e8e8f0] shadow-inner dark:border-border-dark">
          <code className={`font-mono ${block.lang ? `language-${block.lang}` : ''}`}>{block.code}</code>
        </pre>
      )
    case 'tip':
      return (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent/20 bg-accent-soft p-4 dark:border-accent/25 dark:bg-accent-soft-dark">
          <span className="mt-0.5 shrink-0 text-accent dark:text-accent-dark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg>
          </span>
          <p className="text-sm leading-relaxed text-ink-2 dark:text-ink-2-dark">
            <span className="font-semibold text-accent dark:text-accent-dark">Tip: </span>
            <Inline text={block.text} />
          </p>
        </div>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  if (!post) {
    return (
      <section className="flex min-h-[70vh] items-center pt-[84px]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-accent dark:text-accent-dark">
              404
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl dark:text-ink-dark">
              Post not found
            </h1>
            <Link
              to="/blog"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(249,95,15,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Back to all posts
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </Link>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="pb-24 pt-[84px]">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-ink dark:text-accent-dark dark:hover:text-ink-dark"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            All posts
          </Link>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent dark:bg-accent-soft-dark dark:text-accent-dark">
              {post.category}
            </span>
            <span className="text-xs text-ink-3 dark:text-ink-3-dark">
              {post.date} · {post.readTime}
            </span>
          </div>
          <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl dark:text-ink-dark">
            {post.title}
          </h1>
          <p className="mt-4 border-l-2 border-accent/40 pl-4 text-lg italic leading-relaxed text-ink-2 dark:border-accent-dark/40 dark:text-ink-2-dark">
            {post.excerpt}
          </p>
        </Reveal>

        <Reveal className="mt-10 border-t border-ink/8 pt-2 dark:border-border-dark">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </Reveal>

        <Reveal className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-ink/8 bg-white/55 p-8 text-center backdrop-blur-md dark:border-border-dark dark:bg-card-dark">
          <p className="text-base font-semibold text-ink dark:text-ink-dark">
            Liked this post?
          </p>
          <p className="max-w-sm text-sm text-ink-2 dark:text-ink-2-dark">
            More write-ups on web development are on the way — check the rest of the blog.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(249,95,15,0.3)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore the blog
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}