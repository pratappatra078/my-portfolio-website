import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal'
import { BLOG_POSTS, ALL_CATEGORIES } from '../data/blog'

function FeaturedPost({ post }) {
  return (
    <Reveal>
      <a href="blog-post.html" className="featured-post" aria-label={`Read featured post: ${post.title}`}>
        <div className="featured-post__image" aria-hidden="true" role="img" aria-label={`${post.title} illustration`}>
          {post.emoji}
        </div>
        <div className="featured-post__body">
          <div className="featured-post__tag">⭐ Featured · {post.category}</div>
          <h2 className="featured-post__title">{post.title}</h2>
          <p className="featured-post__excerpt">{post.excerpt}</p>
          <div className="featured-post__meta">
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime} read</span>
            <span style={{ marginTop: 6, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {post.tags.map((t) => (
                <span className="badge" key={t}>{t}</span>
              ))}
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  )
}

function BlogCard({ post, index }) {
  return (
    <Reveal delay={(index % 2) * 90}>
      <a href="blog-post.html" className="blog-card" aria-label={`Read article: ${post.title}`}>
        <div className="blog-card__image" aria-hidden="true">{post.emoji}</div>
        <div className="blog-card__body">
          <div className="blog-card__cat">{post.category}</div>
          <h3 className="blog-card__title">{post.title}</h3>
          <p className="blog-card__excerpt">{post.excerpt}</p>
          <div className="blog-card__meta">
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime} read</span>
          </div>
        </div>
      </a>
    </Reveal>
  )
}

function NewsletterCard() {
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const input = e.currentTarget.querySelector('.newsletter-input')
    if (!input?.value.trim()) return
    input.value = ''
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3500)
  }

  return (
    <div className="newsletter-card">
      <div className="newsletter-card__title">📬 Newsletter</div>
      <p className="newsletter-card__desc">Get new articles delivered to your inbox. No spam — ever.</p>
      <form className="newsletter-form" onSubmit={onSubmit} noValidate aria-label="Newsletter subscription">
        <input
          type="email"
          className="newsletter-input"
          placeholder="your@email.com"
          aria-label="Email address for newsletter"
          required
        />
        <button type="submit" className="btn btn--primary" style={{ width: '100%' }} disabled={subscribed}>
          {subscribed ? '✅ Subscribed!' : 'Subscribe →'}
        </button>
      </form>
    </div>
  )
}

export default function Blog() {
  const featured = useMemo(() => BLOG_POSTS.find((p) => p.featured), [])
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return BLOG_POSTS.filter((p) => {
      const matchCat = category === 'All' || p.category === category
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [category, query])

  const allTags = useMemo(() => [...new Set(BLOG_POSTS.flatMap((p) => p.tags))], [])
  const categoryCounts = useMemo(() => {
    const counts = {}
    BLOG_POSTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1
    })
    return counts
  }, [])

  const selectCategory = (cat) => {
    setCategory(cat)
    document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const onTagClick = (tag) => {
    setQuery(tag)
    setCategory('All')
  }

  return (
    <>
      <header className="blog-hero" aria-label="Blog page header">
        <div className="container">
          <Reveal>
            <div className="section-eyebrow">✍️ My Writing</div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="blog-hero__title">
              The <span className="gradient-text">Blog</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="blog-hero__desc">
              Thoughts, tutorials, and learnings from my journey as a CSE student — covering DSA,
              web dev, OS, DBMS, networking, and everything in between.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="blog-search-wrap">
              <span className="blog-search__icon" aria-hidden="true">🔍</span>
              <input
                type="search"
                className="blog-search__input"
                placeholder="Search articles by title, topic, or tag..."
                aria-label="Search blog articles"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setQuery('')
                }}
                autoComplete="off"
              />
            </div>
          </Reveal>

          <div className="blog-categories" role="group" aria-label="Article category filters">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`cat-pill${category === cat ? ' active' : ''}`}
                aria-pressed={category === cat}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="container" style={{ paddingBottom: 'var(--sp-16)' }}>
        <div className="blog-layout">
          <div className="blog-main">
            <div className="blog-featured" aria-label="Featured article">
              <div className="blog-section-title">⭐ Featured Article</div>
              {featured && <FeaturedPost post={featured} />}
            </div>

            <div aria-label="Latest articles">
              <div className="blog-section-title">🕒 Latest Articles</div>
              <div className="blog-grid" id="blog-grid" aria-live="polite" aria-label="Blog articles">
                {filtered.length === 0 ? (
                  <div className="blog-empty">
                    <h3>No articles found</h3>
                    <p>Try a different category or search term.</p>
                  </div>
                ) : (
                  filtered.map((p, i) => <BlogCard key={p.id} post={p} index={i} />)
                )}
              </div>
            </div>
          </div>

          <aside className="blog-sidebar" aria-label="Blog sidebar">
            <NewsletterCard />

            <div className="sidebar-card">
              <div className="sidebar-card__title">📂 Categories</div>
              <div className="sidebar-categories" role="list" aria-label="Article categories">
                {ALL_CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                  <button
                    key={cat}
                    className="sidebar-cat"
                    type="button"
                    onClick={() => selectCategory(cat)}
                    aria-label={`Filter: ${cat} (${categoryCounts[cat]} articles)`}
                  >
                    <span>{cat}</span>
                    <span className="sidebar-cat__count">{categoryCounts[cat]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card__title">🔥 Popular Posts</div>
              <div className="popular-posts">
                {BLOG_POSTS.slice(0, 5).map((p, i) => (
                  <a href="blog-post.html" className="popular-post" key={p.id} aria-label={`Read: ${p.title}`}>
                    <span className="popular-post__num">0{i + 1}</span>
                    <div>
                      <div className="popular-post__title">{p.title}</div>
                      <div className="popular-post__meta">⏱ {p.readTime} read</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card__title">🏷️ Tags</div>
              <div className="tags-cloud" role="list" aria-label="Article tags">
                {allTags.map((t) => (
                  <span
                    className="badge"
                    role="button"
                    tabIndex="0"
                    key={t}
                    onClick={() => onTagClick(t)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') onTagClick(t)
                    }}
                    aria-label={`Filter by tag: ${t}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}