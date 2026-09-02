import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { SITE } from '../data/site.jsx'

const BADGES = ['🎓 CSE Student', '💻 Software Developer', '🔥 DSA Enthusiast', '🌐 Web Developer', '📖 Tech Blogger']

const GOALS = [
  {
    num: '01',
    title: '🎯 Software Engineering',
    desc: 'Building clean, efficient, and maintainable software solutions that solve real problems.',
  },
  {
    num: '02',
    title: '📐 Problem Solving',
    desc: 'Approaching complex challenges with structured thinking, algorithms, and data structures.',
  },
  {
    num: '03',
    title: '🌐 Full Stack Development',
    desc: 'Developing end-to-end applications from intuitive UIs to robust backend architectures.',
  },
  {
    num: '04',
    title: '🧠 Continuous Learning',
    desc: 'Staying updated with industry trends, new technologies, and best practices.',
  },
]

const INTERESTS = [
  {
    icon: '⚔️',
    title: 'Data Structures & Algorithms',
    desc: 'Daily practice on LeetCode and GFG; love for recursion, graphs, and dynamic programming.',
  },
  {
    icon: '🖥️',
    title: 'Operating Systems',
    desc: 'Processes, threads, memory management, scheduling algorithms, and concurrency control.',
  },
  {
    icon: '🗄️',
    title: 'Database Management Systems',
    desc: 'SQL, normalization, transactions, indexing, and query optimization techniques.',
  },
  {
    icon: '📡',
    title: 'Computer Networks',
    desc: 'TCP/IP model, HTTP, DNS, routing protocols, and network security fundamentals.',
  },
  {
    icon: '🎯',
    title: 'Object-Oriented Programming',
    desc: 'SOLID principles, design patterns, inheritance, polymorphism, and abstraction.',
  },
]

const JOURNEY = [
  {
    num: '01',
    title: '🌱 The Beginning',
    desc: 'Started with C during my first semester. The first time a program I wrote actually ran correctly, I was hooked. That feeling of creating something from nothing set everything in motion.',
  },
  {
    num: '02',
    title: '📚 Foundation Building',
    desc: 'Dove deep into DSA, OOP with Java, Python for scripting, and web fundamentals. Built small projects — calculators, to-do apps, basic websites — to reinforce learning.',
  },
  {
    num: '03',
    title: '🔨 Building Real Projects',
    desc: 'Started building progressively complex projects — student management systems, weather dashboards, task managers — applying classroom knowledge to practical problems.',
  },
  {
    num: '04',
    title: '📖 Sharing Knowledge',
    desc: 'Started writing technical blog posts to solidify my own understanding and help others. Teaching is the best way to learn — I firmly believe that.',
  },
  {
    num: '05',
    title: '🎯 Where I Am Now',
    desc: '3rd year CSE student with 15+ projects, an active GitHub profile, consistent DSA practice, and a clear vision for my software engineering career. The journey continues!',
  },
]

const LEARNING = [
  { icon: '⚛️', name: 'React.js', desc: 'Building component-based UIs and exploring the React ecosystem for modern web apps.' },
  { icon: '🐍', name: 'Advanced Python', desc: 'Flask for web APIs, data processing with Pandas, and automation scripting.' },
  { icon: '☁️', name: 'Cloud Computing', desc: 'Exploring AWS fundamentals — EC2, S3, Lambda — for scalable cloud deployments.' },
  { icon: '🤖', name: 'Machine Learning', desc: 'Scikit-learn, regression, classification algorithms, and model evaluation techniques.' },
  { icon: '🗄️', name: 'System Design', desc: 'Scalable architecture patterns, load balancing, caching, and distributed systems concepts.' },
  { icon: '🧮', name: 'Advanced DSA', desc: 'Graph algorithms, dynamic programming patterns, and competitive programming on LeetCode.' },
]

const VALUES = [
  { icon: '🎯', title: 'Quality Over Quantity', desc: "I'd rather write ten lines of clean, documented, efficient code than a hundred lines of spaghetti. Quality always comes first." },
  { icon: '📖', title: 'Never Stop Learning', desc: 'Technology evolves rapidly. I\'m committed to continuous learning, staying curious, and adapting to new tools and paradigms.' },
  { icon: '🤝', title: 'Collaboration', desc: 'The best software is built by teams. I value open communication, respectful feedback, and the collective intelligence of a good team.' },
  { icon: '💪', title: 'Ownership', desc: "I take full ownership of my work. If something breaks, I fix it. If I don't know something, I learn it. No blame-shifting." },
  { icon: '👁️', title: 'User Empathy', desc: 'I build for people, not machines. Understanding user needs and building accessible, intuitive experiences is central to my approach.' },
  { icon: '🌱', title: 'Give Back', desc: 'I share what I learn through blog posts and open source contributions. The developer community gave me so much; I aim to give back.' },
]

const HOBBIES = [
  '📚 Reading Tech Books',
  '🎯 Competitive Programming',
  '🏏 Cricket',
  '🎵 Music',
  '🌿 Nature Walks',
  '🎬 Tech Documentaries',
  '♟️ Chess',
  '🌐 Open Source',
  '✍️ Technical Writing',
  '🎮 Problem Sets',
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

function AboutHero() {
  return (
    <header className="about-hero" aria-label="About page hero">
      <div className="container">
        <Reveal className="about-hero__avatar" aria-label="Profile photo of Pratap Patra">
          <img src={SITE.profileImage} alt="Pratap Patra — Computer Science Student" width="130" height="130" loading="eager" />
        </Reveal>

        <Reveal>
          <div className="section-eyebrow">👤 About Me</div>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="about-hero__title">
            I'm <span className="gradient-text">Pratap Patra</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="about-hero__desc">
            A passionate 3rd-year B.Tech CSE student who loves building software, solving hard
            problems, and continuously growing as a developer and person.
          </p>
        </Reveal>

        <Reveal className="about-hero__badges" delay={160} aria-label="Key roles">
          {BADGES.map((b) => (
            <span className="badge" key={b}>{b}</span>
          ))}
        </Reveal>

        <Reveal delay={200}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <a href={SITE.resume} download className="btn btn--primary btn--lg" aria-label="Download resume">
              <DownloadIcon />
              Download Resume
            </a>
            <a href={`mailto:${SITE.email}`} className="btn btn--outline btn--lg" aria-label="Send email">
              Say Hello 👋
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  )
}

function WhoIAm() {
  return (
    <section className="about-section" aria-label="Who I am">
      <div className="container">
        <div className="about-section__grid">
          <Reveal direction="reveal-left" className="about-section__content">
            <div className="about-section__label">🙋 Who I Am</div>
            <h2 className="about-section__title">
              A builder at heart, a learner by <span className="gradient-text">nature</span>
            </h2>
            <p className="about-section__text">
              Hi! I'm Pratap Patra, a 3rd-year Computer Science Engineering student with a deep
              passion for software engineering, problem-solving, and creating meaningful digital
              experiences.
            </p>
            <p className="about-section__text">
              My journey in computer science began when I realized that code is one of the most
              powerful tools in the world — it can automate, create, and solve problems at scale.
              That realization set me on an exciting path of continuous learning and building.
            </p>
            <p className="about-section__text">
              I believe in <strong>learning by doing</strong>. Every project I build, every problem
              I solve, and every article I write deepens my understanding and makes me a better
              developer. I'm driven by curiosity, passion, and a genuine love for the craft.
            </p>
          </Reveal>

          <Reveal direction="reveal-right" delay={100} className="about-section__visual">
            <div className="goals-list">
              {GOALS.map((g, i) => (
                <div className="goal-item" key={g.num}>
                  <div className="goal-item__num">{g.num}</div>
                  <div>
                    <div className="goal-item__title">{g.title}</div>
                    <div className="goal-item__desc">{g.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function TechnicalInterests() {
  return (
    <section className="about-section" aria-label="Technical interests">
      <div className="container">
        <div className="about-section__grid about-section__grid--reverse">
          <Reveal direction="reveal-left" className="about-section__visual">
            <div className="interest-list">
              {INTERESTS.map((item) => (
                <div className="interest-item" key={item.title}>
                  <div className="interest-item__icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="interest-item__title">{item.title}</div>
                    <div className="interest-item__desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="reveal-right" delay={100} className="about-section__content">
            <div className="about-section__label">💡 Technical Interests</div>
            <h2 className="about-section__title">
              The subjects that <span className="gradient-text">fascinate</span> me most
            </h2>
            <p className="about-section__text">
              As a Computer Science student, I'm fascinated by the core fundamentals that power
              modern software systems. These aren't just academic subjects to me — they're the
              building blocks of everything I want to build professionally.
            </p>
            <p className="about-section__text">
              I strongly believe that a deep understanding of CS fundamentals separates great
              engineers from average ones. That's why I invest time mastering these concepts beyond
              what's taught in the classroom.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section className="about-section" aria-label="My learning journey">
      <div className="container">
        <Reveal>
          <div className="about-section__label" style={{ textAlign: 'center' }}>🚀 My Journey</div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="about-section__title" style={{ textAlign: 'center', marginBottom: 'var(--sp-4)' }}>
            How I got <span className="gradient-text">here</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="about-section__text" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto var(--sp-12)' }}>
            My coding story didn't start with a class or a course — it started with curiosity.
          </p>
        </Reveal>

        <div className="goals-list" style={{ maxWidth: 700, margin: '0 auto' }}>
          {JOURNEY.map((step, i) => (
            <Reveal className="goal-item" key={step.num} delay={i * 80}>
              <div className="goal-item__num">{step.num}</div>
              <div>
                <div className="goal-item__title">{step.title}</div>
                <div className="goal-item__desc">{step.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CurrentlyLearning() {
  return (
    <section className="about-section" aria-label="Currently learning">
      <div className="container">
        <Reveal>
          <div className="about-section__label" style={{ textAlign: 'center' }}>📖 Growth</div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="about-section__title" style={{ textAlign: 'center', marginBottom: 'var(--sp-4)' }}>
            What I'm <span className="gradient-text">Currently Learning</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="about-section__text" style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto var(--sp-10)' }}>
            I'm always expanding my skill set. Here's what's on my learning plate right now.
          </p>
        </Reveal>

        <div className="learning-grid" style={{ maxWidth: 840, margin: '0 auto' }}>
          {LEARNING.map((l, i) => (
            <Reveal className="learning-card" key={l.name} delay={i * 70}>
              <span className="learning-card__icon" aria-hidden="true">{l.icon}</span>
              <div className="learning-card__name">{l.name}</div>
              <div className="learning-card__desc">{l.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="about-section" aria-label="Values and work ethic">
      <div className="container">
        <SectionHeader
          eyebrow="⚖️ Work Ethic"
          title={<>My <span>Values</span></>}
          subtitle="The principles I bring to every project, collaboration, and line of code."
        />

        <div className="values-grid">
          {VALUES.map((v, i) => (
            <Reveal className="value-card" key={v.title} delay={i * 80}>
              <span className="value-card__icon" aria-hidden="true">{v.icon}</span>
              <div className="value-card__title">{v.title}</div>
              <div className="value-card__desc">{v.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Hobbies() {
  return (
    <section className="about-section" aria-label="Hobbies and interests outside coding">
      <div className="container">
        <Reveal>
          <div className="about-section__label" style={{ textAlign: 'center' }}>🎮 Beyond Code</div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="about-section__title" style={{ textAlign: 'center', marginBottom: 'var(--sp-4)' }}>
            Life <span className="gradient-text">Outside the Terminal</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="about-section__text" style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto var(--sp-6)' }}>
            I'm not just a coder — here are some things I enjoy when I'm not at my keyboard.
          </p>
        </Reveal>

        <Reveal className="hobbies-wrap" delay={160} style={{ justifyContent: 'center' }}>
          {HOBBIES.map((h) => (
            <div className="hobby-item" key={h}>{h}</div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function AboutCTA() {
  return (
    <section className="about-cta" id="contact" aria-label="Contact call to action">
      <div className="container">
        <Reveal className="about-cta__card">
          <h2 className="about-cta__title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="about-cta__desc">
            I'm actively looking for internship opportunities, open source collaborations, and
            interesting projects. If you'd like to work together or just have a chat — I'd love to
            hear from you!
          </p>
          <div className="about-cta__buttons">
            <a href={`mailto:${SITE.email}`} className="btn btn--primary btn--lg" aria-label="Send an email">
              <MailIcon />
              Send Me an Email
            </a>
            <a
              href="https://linkedin.com/in/pratap-patra-b413b9301/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--lg"
              aria-label="Connect on LinkedIn"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <a href={SITE.resume} download className="btn btn--ghost btn--lg" aria-label="Download resume">
              <DownloadIcon />
              Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <AboutHero />
      <WhoIAm />
      <TechnicalInterests />
      <Journey />
      <CurrentlyLearning />
      <Values />
      <Hobbies />
      <AboutCTA />
    </>
  )
}