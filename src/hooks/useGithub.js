import { useEffect, useState } from 'react';
import { profile } from '../data';

// Module-level cache so the profile + repos are fetched once per visit.
let cache = null;

const json = (r) => (r.ok ? r.json() : Promise.reject(new Error(`GitHub API ${r.status}`)));

export function useGithub() {
  const [state, setState] = useState(cache || { status: 'loading', user: null, repos: [] });

  useEffect(() => {
    if (cache) return undefined;
    const controller = new AbortController();
    const opts = { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } };

    Promise.all([
      fetch(`https://api.github.com/users/${profile.github}`, opts).then(json),
      fetch(`https://api.github.com/users/${profile.github}/repos?per_page=100&sort=updated`, opts).then(json),
    ])
      .then(([user, repos]) => {
        cache = { status: 'ready', user, repos: repos.filter((r) => !r.fork) };
        setState(cache);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setState({ status: 'error', user: null, repos: [] });
      });

    return () => controller.abort();
  }, []);

  return state;
}
