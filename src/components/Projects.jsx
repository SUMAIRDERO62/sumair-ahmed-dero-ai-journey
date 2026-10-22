import React, { useMemo, useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Reveal, SectionHeading, LiveDot } from './ui';
import { categories, profile } from '../data';
import { timeAgo, LANG_COLORS } from '../lib/projects';

const PAGE = 9;

function Card({ p }) {
  return (
    <div className="group h-full bg-card border border-line hover:border-accent/40 rounded-2xl p-5 flex flex-col transition-all hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug">{p.name}</h3>
        {p.stars > 0 && (
          <span className="flex items-center gap-1 text-[11px] text-mute shrink-0">
            <Star className="w-3.5 h-3.5" /> {p.stars}
          </span>
        )}
      </div>
      <p className="text-[10px] uppercase tracking-wider text-accent2 font-medium mt-1">{p.category}</p>
      <p className="text-xs text-soft font-light leading-relaxed mt-2 flex-1">{p.desc}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.slice(0, 4).map((t) => (
          <span key={t} className="text-[10px] bg-panel border border-line text-mute px-2 py-1 rounded-md">{t}</span>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-line flex items-center justify-between gap-2">
        <div className="text-[11px] text-mute flex items-center gap-2 min-w-0">
          {p.language && (
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: LANG_COLORS[p.language] || '#8b92a5' }} />
              {p.language}
            </span>
          )}
          {p.updated && <span className="truncate">· updated {timeAgo(p.updated)}</span>}
        </div>
        <div className="flex gap-2 shrink-0">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] font-semibold bg-gradient-to-r from-accent to-accent2 text-bg px-3 py-1.5 rounded-lg hover:opacity-90">
              Live <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[11px] font-semibold border border-line text-accent hover:border-accent/50 px-3 py-1.5 rounded-lg">
            <GithubIcon className="w-3 h-3" /> Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects, gh }) {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const [showAll, setShowAll] = useState(false);

  const present = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return categories.filter((c) => c === 'All' || set.has(c));
  }, [projects]);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = projects.filter(
      (p) =>
        (filter === 'All' || p.category === filter) &&
        (!q || `${p.name} ${p.desc} ${p.tags.join(' ')} ${p.repo}`.toLowerCase().includes(q))
    );
    const t = (p) => (p.updated ? new Date(p.updated).getTime() : 0);
    out.sort((a, b) => {
      if (sort === 'stars') return b.stars - a.stars || t(b) - t(a);
      if (sort === 'recent') return t(b) - t(a);
      return Number(b.featured) - Number(a.featured) || t(b) - t(a);
    });
    return out;
  }, [projects, filter, query, sort]);

  const visible = showAll ? list : list.slice(0, PAGE);
  const ready = gh.status === 'ready';

  return (
    <section id="projects" className="px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="Everything I have built — straight from GitHub"
          sub="This list syncs with my GitHub profile every time the page loads, so new repositories appear here automatically."
        />

        <Reveal className="flex flex-wrap items-center gap-3 mb-6 text-xs text-mute">
          <span className="inline-flex items-center gap-2 bg-card border border-line rounded-full px-3 py-1.5">
            <LiveDot ok={ready} />
            {ready ? `Synced live · ${projects.filter((p) => p.live).length} repositories` : gh.status === 'loading' ? 'Syncing with GitHub…' : 'Showing curated projects (GitHub API unreachable)'}
          </span>
          <a href={`${profile.githubUrl}?tab=repositories`} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            Open on GitHub ↗
          </a>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between mb-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Project categories">
            {present.map((c) => (
              <button
                key={c}
                onClick={() => { setFilter(c); setShowAll(false); }}
                aria-pressed={filter === c}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-colors ${
                  filter === c ? 'bg-accent text-bg border-accent' : 'bg-card text-soft border-line hover:border-accent/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShowAll(false); }}
              placeholder="Search projects…"
              aria-label="Search projects"
              className="bg-card border border-line rounded-lg px-3.5 py-2 text-xs text-ink placeholder:text-mute focus:outline-none focus:border-accent/60 w-full lg:w-52"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort projects"
              className="bg-card border border-line rounded-lg px-3 py-2 text-xs text-soft focus:outline-none focus:border-accent/60"
            >
              <option value="featured">Featured</option>
              <option value="recent">Recently updated</option>
              <option value="stars">Most starred</option>
            </select>
          </div>
        </div>

        {list.length === 0 ? (
          <p className="text-soft text-sm font-light">No projects match your search.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((p) => (
              <Card key={p.repo || p.name} p={p} />
            ))}
          </div>
        )}

        {list.length > PAGE && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-card text-accent border border-line hover:border-accent/50 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              {showAll ? 'Show fewer' : `Show all ${list.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
