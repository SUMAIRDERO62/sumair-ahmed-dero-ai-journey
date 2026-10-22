import { projects as curated } from '../data';

const key = (s) => String(s).toLowerCase();

export function titleize(name) {
  return name
    .replace(/^[-_]+/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function timeAgo(iso) {
  if (!iso) return '';
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} mo ago`;
  return `${Math.floor(months / 12)} yr ago`;
}

export function demoUrl(home) {
  if (!home) return null;
  return /^https?:\/\//i.test(home) ? home : `https://${home}`;
}

/**
 * Merge live GitHub repos with the curated descriptions in data.js.
 * - Every live (non-fork) repo is shown.
 * - Curated entries enrich a repo (nicer title / description / category / tags).
 * - Curated entries whose repo isn't found live are kept (they point to his GitHub profile).
 */
export function buildProjects(repos = []) {
  const byRepo = new Map(curated.filter((p) => p.repo).map((p) => [key(p.repo), p]));
  const seen = new Set();

  const out = repos.map((r) => {
    const c = byRepo.get(key(r.name));
    if (c) seen.add(key(r.name));
    return {
      name: c?.name || titleize(r.name),
      repo: r.name,
      category: c?.category || 'More Work',
      featured: Boolean(c?.featured),
      desc: c?.desc || r.description || 'Open-source project on GitHub.',
      tags: c?.tags || (r.topics?.length ? r.topics.slice(0, 4) : r.language ? [r.language] : []),
      url: r.html_url,
      demo: demoUrl(r.homepage),
      stars: r.stargazers_count || 0,
      language: r.language || null,
      updated: r.pushed_at || r.updated_at || null,
      created: r.created_at || null,
      live: true,
    };
  });

  curated.forEach((c) => {
    if (c.repo && !seen.has(key(c.repo))) {
      out.push({ ...c, demo: null, stars: 0, language: null, updated: null, created: null, live: false });
    }
  });

  return out;
}

export const LANG_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
  Shell: '#89e051',
  Java: '#b07219',
  'C++': '#f34b7d',
};
