import React, { useState } from 'react';
import { Reveal, SectionHeading, LiveDot } from './ui';
import { journey, profile } from '../data';

const typeStyle = {
  Education: 'text-sky-300 border-sky-300/30',
  Milestone: 'text-accent border-accent/40',
  Internship: 'text-accent2 border-accent2/40',
  Research: 'text-amber-300 border-amber-300/30',
  Certification: 'text-emerald-300 border-emerald-300/30',
};

const inRange = (iso, [from, to]) => {
  if (!iso) return false;
  const d = iso.slice(0, 10);
  return (!from || d >= from) && (!to || d <= to);
};

function Chapter({ chapter, repos, status, index }) {
  const [all, setAll] = useState(false);
  const shipped = repos
    .filter((p) => p.live && inRange(p.created, chapter.range))
    .sort((a, b) => new Date(a.created) - new Date(b.created));
  const shown = all ? shipped : shipped.slice(0, 8);

  return (
    <Reveal className="relative pl-8 md:pl-12 pb-14 last:pb-0">
      <span className="absolute left-0 top-0 bottom-0 w-px bg-line" aria-hidden="true" />
      <span className="absolute -left-[7px] top-1.5" aria-hidden="true">
        <LiveDot ok={Boolean(chapter.current)} />
      </span>
      {!chapter.current && <span className="absolute -left-[7px] top-1.5 w-[15px] h-[15px] rounded-full bg-accent2/80 border-2 border-bg" aria-hidden="true" />}

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[11px] font-semibold tracking-wider uppercase bg-card border border-line text-accent px-3 py-1 rounded-full">
          Chapter {index + 1} · {chapter.period}
        </span>
        {chapter.current && (
          <span className="text-[11px] font-semibold uppercase tracking-wider text-bg bg-accent px-2.5 py-1 rounded-full">Now</span>
        )}
      </div>
      <h3 className="mt-3 text-2xl font-bold">{chapter.title}</h3>
      <p className="mt-1 text-soft font-light text-sm max-w-2xl">{chapter.blurb}</p>

      <div className="mt-5 grid md:grid-cols-2 gap-4">
        {chapter.items.map((it) => (
          <div key={it.title + it.place} className="bg-card border border-line rounded-2xl p-5 hover:border-accent/30 transition-colors">
            <div className="flex items-center justify-between gap-3">
              <span className={`text-[10px] font-semibold uppercase tracking-wider border px-2 py-0.5 rounded-md ${typeStyle[it.type] || 'text-soft border-line'}`}>
                {it.type}
              </span>
              <span className="text-[11px] text-mute">{it.date}</span>
            </div>
            <h4 className="mt-3 font-semibold text-ink leading-snug">{it.title}</h4>
            <p className="text-xs text-accent font-medium mt-0.5">{it.place}</p>
            {it.desc && <p className="text-xs text-soft font-light leading-relaxed mt-2">{it.desc}</p>}
          </div>
        ))}
      </div>

      {shipped.length > 0 && (
        <div className="mt-5 bg-panel border border-line rounded-2xl p-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-ink">
            <LiveDot />
            Shipped on GitHub in this chapter · {shipped.length}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {shown.map((p) => (
              <a
                key={p.repo}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] bg-card border border-line hover:border-accent/50 hover:text-accent text-soft px-3 py-1.5 rounded-lg transition-colors"
              >
                {p.name}
              </a>
            ))}
            {shipped.length > 8 && (
              <button
                onClick={() => setAll(!all)}
                className="text-[11px] text-accent border border-accent/40 px-3 py-1.5 rounded-lg hover:bg-card"
              >
                {all ? 'Show less' : `+${shipped.length - 8} more`}
              </button>
            )}
          </div>
        </div>
      )}
      {shipped.length === 0 && status === 'loading' && (
        <div className="mt-5 h-16 rounded-2xl skeleton" aria-hidden="true" />
      )}
    </Reveal>
  );
}

export default function Journey({ projects, gh }) {
  return (
    <section id="journey" className="px-5 py-20 md:py-28 bg-panel/40 border-y border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Professional journey"
          title="From the first line of Python to working across five teams"
          sub="Every chapter below is real — and the GitHub repositories are pulled live from my profile and placed by the date I created them."
        />

        <Reveal className="mb-12 bg-card border border-line rounded-2xl p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <p className="text-xs font-semibold flex items-center gap-2">
              <LiveDot ok={gh.status === 'ready'} /> Live GitHub activity
            </p>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-xs text-accent hover:underline">@{profile.github} ↗</a>
          </div>
          <div className="overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/5eead4/${profile.github}`}
              alt={`GitHub contribution chart for ${profile.github}`}
              className="min-w-[640px] w-full opacity-90"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </Reveal>

        <div className="ml-2">
          {journey.map((ch, i) => (
            <Chapter key={ch.id} chapter={ch} repos={projects} status={gh.status} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
