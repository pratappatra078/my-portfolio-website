import { useState } from 'react'
import BrandIcon from './BrandIcon'
import Reveal from './Reveal'

const SOURCE = {
  github: {
    label: 'GitHub',
    icon: 'GitHub',
    heatmap: (user) => `https://ghchart.rshah.org/${user}`,
    profile: (user) => `https://github.com/${user}`,
  },
  leetcode: {
    label: 'LeetCode',
    icon: 'LeetCode',
    heatmap: (user) => `https://leetcard.jacoblin.cool/${user}?ext=heatmap&animation=false`,
    profile: (user) => `https://leetcode.com/u/${user}/`,
  },
}

export default function ContributionGraph({ platform, username, note }) {
  const [failed, setFailed] = useState(false)
  const src = SOURCE[platform]

  return (
    <Reveal>
      <div className="rounded-2xl border border-ink/10 bg-white/55 p-6 backdrop-blur-md dark:border-border-dark dark:bg-card-dark sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-ink/5 dark:bg-white/95">
              <BrandIcon label={src.icon} size={22} />
            </span>
            <div>
              <h3 className="font-heading text-lg font-bold text-ink dark:text-ink-dark">
                {src.label} contributions
              </h3>
              <p className="text-sm text-ink-3 dark:text-ink-3-dark">@{username}</p>
            </div>
          </div>
          <a
            href={src.profile(username)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-ink dark:text-accent-dark dark:hover:text-ink-dark"
          >
            Profile
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>
          </a>
        </div>

        {failed ? (
          <div className="rounded-xl border border-dashed border-ink/15 p-6 text-center">
            <p className="text-sm text-ink-2 dark:text-ink-2-dark">
              Couldn't load the live {src.label} graph right now.
            </p>
            <a
              href={src.profile(username)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent dark:text-accent-dark"
            >
              Open my {src.label} profile
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-ink/8 bg-white/70 p-2 dark:border-border-dark">
            <img
              src={src.heatmap(username)}
              alt={`${src.label} contribution graph for ${username}`}
              loading="lazy"
              onError={() => setFailed(true)}
              className="mx-auto w-full max-w-md"
            />
          </div>
        )}

        {note && (
          <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink-3 dark:text-ink-3-dark">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            {note}
          </p>
        )}
      </div>
    </Reveal>
  )
}