import { Link } from 'react-router-dom'
import Counter from '../components/Counter'
import TypedText from '../components/TypedText'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { SITE, SOCIALS } from '../data/site.jsx'

const SKILLS = [
  {
    icon: '💻',
    title: 'Languages',
    tags: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    icon: '🎨',
    title: 'Frontend',
    tags: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    icon: '🛠️',
    title: 'Tools',
    tags: ['Git', 'GitHub', 'VS Code', 'Linux', 'Vite'],
  },
  {
    icon: '🧠',
    title: 'Soft Skills',
    tags: ['Problem Solving', 'Team Work', 'Communication', 'Fast Learner', 'Adaptability'],
  },
]

const INFO_CARDS = [
  {
    icon: '🎯',
    title: 'Problem Solver',
    desc: 'Love cracking algorithmic challenges and building efficient, optimized solutions.',
  },
  {
    icon: '📚',
    title: 'Lifelong Learner',
    desc: 'Continuously expanding my knowledge across CS fundamentals and new technologies.',
  },
  {
    icon: '🚀',
    title: 'Builder',
    desc: 'Turning ideas into real, functional, and user-friendly digital applications.',
  },
  {
    icon: '🤝',
    title: 'Team Player',
    desc: 'Thrive in collaborative environments and open source development communities.',
  },
]

const TIMELINE = [
  {
    date: '2024 — Present',
    title: 'B.Tech in Computer Science Engineering',
    sub: 'Brainware University [Barasat, North 24 Parganas]',
    current: true,
    desc: 'Currently in 3rd year studying Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Programming. Focused on software development and competitive programming.',
  },
  {
    date: '2022 — 2024',
    title: 'Higher Secondary (12th) — Science Stream',
    sub: 'Ramjibanpur Babulal Institution [Ramjibanpur, Paschim Medinipur]',
    desc: 'Completed 12th grade with Physics, Chemistry, Mathematics & Computer Applications. Scored [77.8]% marks. Developed a deep interest in computer science during this period.',
  },
  {
    date: '2020 — 2022',
    title: 'Secondary Education (10th)',
    sub: 'Srinagar High School [Srinagar, Paschim Medinipur]',
    desc: 'Completed 10th grade securing [72.2]% marks. Built a strong foundation in mathematics and sciences.',
  },
]

const ACHIEVEMENTS = [
  {
    icon: '⚔️',
    title: 'DSA Journey',
    desc: 'Actively solving Data Structures & Algorithms problems daily on LeetCode and GeeksforGeeks, building strong problem-solving fundamentals.',
    link: { label: 'View LeetCode Profile →', href: 'https://leetcode.com/u/pratappatra078/', external: true },
  },
  {
    icon: '🐙',
    title: 'GitHub Activity',
    desc: 'Maintaining an active GitHub profile with 15+ repositories, consistent commits, and contributions to open source projects.',
    link: { label: 'View GitHub Profile →', href: 'https://github.com/pratappatra078', external: true },
  },
  {
    icon: '💡',
    title: '15+ Projects Built',
    desc: 'Built 15+ projects spanning web development, command-line tools, and full-stack applications using multiple languages and frameworks.',
    link: { label: 'See All Projects →', href: '/projects', external: false },
  },
]

const BLOG_PREVIEWS = [
  {
    cat: 'DSA',
    title: 'Getting Started with Data Structures: Arrays & Linked Lists',
    date: '📅 July 10, 2026',
    time: '⏱ 8 min read',
  },
  {
    cat: 'CSS Tricks',
    title: 'CSS Flexbox vs Grid: When to Use Which',
    date: '📅 July 5, 2026',
    time: '⏱ 6 min read',
  },
  {
    cat: 'JavaScript Tips',
    title: 'JavaScript Promises & Async/Await Explained',
    date: '📅 July 1, 2026',
    time: '⏱ 10 min read',
  },
]

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="m8 21 4-4 4 4" />
      <path d="M12 17v4" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero — Introduction">
      <div className="hero__blobs" aria-hidden="true">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
      </div>

      <div className="container">
        <div className="hero__grid">
          <Reveal className="hero__content" delay={80}>
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-dot" aria-hidden="true" />
              Open to Internships &amp; Opportunities · 2026
            </div>

            <h1 className="hero__headline">
              Hi, I'm <br />
              <span className="name">{SITE.name}</span>
            </h1>

            <div className="hero__typed-wrap" aria-live="polite" aria-atomic="true">
              <span style={{ color: 'var(--color-text-2)' }}>I'm a</span>
              <TypedText />
              <span className="typed-cursor" aria-hidden="true" />
            </div>

            <p className="hero__desc">
              A 3rd-year <strong>B.Tech Computer Science Engineering</strong> student passionate
              about <strong>software development</strong>, <strong>data structures &amp;
              algorithms</strong>, and building full-stack solutions that create real-world impact.
            </p>

            <div className="hero__cta">
              <a href={SITE.resume} download className="btn btn--primary btn--lg" aria-label="Download Pratap Patra's resume PDF">
                <DownloadIcon />
                Download Resume
              </a>
              <Link to="/projects" className="btn btn--outline btn--lg" aria-label="View my projects">
                <CodeIcon />
                View Projects
              </Link>
              <Link to="/about" className="btn btn--ghost btn--lg" aria-label="About me">
                <MailIcon />
                About Me
              </Link>
            </div>

            <div className="hero__stats" aria-label="Key statistics">
              <div>
                <Counter target={15} suffix="+" className="hero__stat-value" />
                <div className="hero__stat-label">Projects Built</div>
              </div>
              <div>
                <Counter target={6} suffix="+" className="hero__stat-value" />
                <div className="hero__stat-label">Languages</div>
              </div>
              <div>
                <div className="hero__stat-value">3rd</div>
                <div className="hero__stat-label">Year CSE</div>
              </div>
            </div>
          </Reveal>

          <Reveal className="hero__image-wrap" direction="reveal-right" delay={160} aria-hidden="true">
            <div className="hero__image-ring">
              <div className="hero__image-ring-dot" />
            </div>
            <div className="hero__image-frame">
              <img
                src={SITE.profileImage}
                alt="Pratap Patra — Computer Science Student"
                width="320"
                height="400"
                loading="eager"
                fetchPriority="high"
              />
              <div className="hero__image-tag">
                <span className="dot" />
                <span>Available for Internships</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills section" id="skills" aria-label="Skills and Technologies">
      <div className="container">
        <SectionHeader
          eyebrow="⚡ Technical Expertise"
          title={<>Skills &amp; <span>Technologies</span></>}
          subtitle="A curated stack of languages, tools, and technologies I use to build things that matter."
        />

        <div className="skills__grid">
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.title} className="skill-category" delay={i * 90}>
              <span className="skill-category__icon" aria-hidden="true">{cat.icon}</span>
              <h3 className="skill-category__title">{cat.title}</h3>
              <div className="skill-tags" role="list" aria-label={`${cat.title} technologies`}>
                {cat.tags.map((t) => (
                  <span className="skill-tag" role="listitem" key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomeAbout() {
  return (
    <section className="home-about section" id="about" aria-label="About Me — Overview">
      <div className="container">
        <div className="home-about__grid">
          <Reveal direction="reveal-left">
            <div className="section-eyebrow">🙋 About Me</div>
            <h2 className="home-about__title">
              Passionate about building things that <span className="gradient-text">matter</span>
            </h2>
            <p className="home-about__desc">
              I'm Pratap Patra, a 3rd-year Computer Science Engineering student with a strong
              passion for software engineering, problem-solving, and creating meaningful digital
              experiences.
            </p>
            <p className="home-about__desc">
              I believe in learning by doing — every project I build teaches me something new,
              whether it's a design pattern, a system concept, or a smarter way to write code.
            </p>

            <div className="home-about__passions" aria-label="Areas of passion">
              {['🔥 DSA', '🌐 Full Stack', '🤖 AI/ML', '🗄️ DBMS', '🖥️ OS', '📡 Networks', '☕ Java OOP', '🐍 Python'].map((p) => (
                <span className="passion-tag" key={p}>{p}</span>
              ))}
            </div>

            <Link to="/about" className="btn btn--primary" style={{ marginTop: '1.5rem' }} aria-label="Read my full story on About page">
              Read My Full Story →
            </Link>
          </Reveal>

          <Reveal direction="reveal-right" delay={100} className="home-about__visual">
            <div className="home-about__card-grid">
              {INFO_CARDS.map((card) => (
                <div className="info-card" key={card.title}>
                  <span className="info-card__icon" aria-hidden="true">{card.icon}</span>
                  <div className="info-card__title">{card.title}</div>
                  <div className="info-card__desc">{card.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="education section" id="education" aria-label="Education Timeline">
      <div className="container">
        <SectionHeader
          eyebrow="🎓 Academic Background"
          title={<>My <span>Education</span></>}
          subtitle="The academic journey that built my technical foundation."
        />

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <Reveal as="article" key={item.title} className="timeline__item" delay={i * 90}>
              <div className={`timeline__dot${item.current ? ' current' : ''}`} aria-label={item.current ? 'Current education' : undefined} />
              <div className="timeline__date">{item.date}</div>
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__sub">{item.sub}</p>
              <p className="timeline__desc">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section className="achievements section" id="achievements" aria-label="Achievements and Milestones">
      <div className="container">
        <SectionHeader
          eyebrow="🏆 Milestones"
          title={<>Achievements &amp; <span>Progress</span></>}
          subtitle="Coding milestones, competitive programming, and certifications I'm proud of."
        />

        <div className="achievements__grid">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal as="article" key={a.title} className="achievement-card" delay={i * 100}>
              <span className="achievement-card__icon" aria-hidden="true">{a.icon}</span>
              <h3 className="achievement-card__title">{a.title}</h3>
              <p className="achievement-card__desc">{a.desc}</p>
              {a.link.external ? (
                <a href={a.link.href} target="_blank" rel="noopener noreferrer" className="platform-link">
                  {a.link.label}
                </a>
              ) : (
                <Link to={a.link.href} className="platform-link">
                  {a.link.label}
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomeBlog() {
  return (
    <section className="home-blog section" id="blog-preview" aria-label="Recent Blog Posts">
      <div className="container">
        <SectionHeader
          eyebrow="✍️ From My Blog"
          title={<>Recent <span>Articles</span></>}
          subtitle="Thoughts, tutorials, and learnings from my coding journey."
        />

        <div className="home-blog__grid">
          {BLOG_PREVIEWS.map((post, i) => (
            <Reveal key={post.title} delay={i * 100}>
              <Link
                to="/blog"
                className="home-blog-card"
                style={{ height: '100%' }}
                aria-label={`Read: ${post.title}`}
              >
                <div className="home-blog-card__cat">{post.cat}</div>
                <h3 className="home-blog-card__title">{post.title}</h3>
                <div className="home-blog-card__meta">
                  <span>{post.date}</span>
                  <span>{post.time}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Reveal>
            <Link to="/blog" className="btn btn--outline btn--lg" aria-label="View all blog posts">
              View All Posts →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section className="home-cta section" id="contact" aria-label="Contact Call to Action">
      <div className="container">
        <Reveal className="home-cta__card">
          <h2 className="home-cta__title">
            Let's Build Something <span className="gradient-text">Amazing</span> Together
          </h2>
          <p className="home-cta__desc">
            I'm actively looking for internship opportunities and exciting projects. Whether you
            have an opportunity or just want to connect — let's talk!
          </p>
          <div className="home-cta__buttons">
            <a href={`mailto:${SITE.email}`} className="btn btn--primary btn--lg" aria-label="Send me an email">
              <MailIcon />
              Send Me an Email
            </a>
            <a
              href={SOCIALS.find((s) => s.label === 'LinkedIn').href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--lg"
              aria-label="Connect on LinkedIn"
            >
              <LinkedinIcon />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <HomeAbout />
      <Education />
      <Achievements />
      <HomeBlog />
      <ContactCTA />
    </>
  )
}