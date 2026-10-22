import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { profile } from '../data';

const links = [
  ['About', 'about'],
  ['Journey', 'journey'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Credentials', 'credentials'],
  ['Contact', 'contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      let current = '';
      for (const [, id] of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent2 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="bg-bg/80 backdrop-blur-md border-b border-line">
        <nav aria-label="Main" className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 font-bold tracking-wide">
            <span className="w-9 h-9 rounded-xl bg-card border border-line grid place-items-center text-sm text-gradient">
              {profile.initials}
            </span>
            <span className="hidden sm:block text-sm">{profile.shortName}</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`px-3.5 py-2 rounded-lg text-sm transition-colors ${
                    active === id ? 'text-accent bg-card' : 'text-soft hover:text-ink'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.cv}
              download="Sumair_Ahmed_Dero_CV.pdf"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent2 text-bg text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden w-10 h-10 rounded-xl bg-card border border-line grid place-items-center text-ink"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden border-t border-line bg-panel px-5 py-3 space-y-1">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm text-soft hover:text-accent hover:bg-card"
              >
                {label}
              </a>
            ))}
            <a
              href={profile.cv}
              download="Sumair_Ahmed_Dero_CV.pdf"
              className="flex items-center justify-center gap-2 mt-2 bg-gradient-to-r from-accent to-accent2 text-bg text-sm font-semibold px-4 py-2.5 rounded-xl"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
