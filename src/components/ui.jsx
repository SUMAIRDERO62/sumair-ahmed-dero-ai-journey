import React, { useEffect, useRef, useState } from 'react';

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, sub }) {
  return (
    <Reveal className="mb-10 md:mb-14 max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
      {sub && <p className="mt-3 text-soft font-light leading-relaxed">{sub}</p>}
    </Reveal>
  );
}

export function Typewriter({ words, className = '' }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text === '') {
      setDeleting(false);
      setI((x) => x + 1);
    } else {
      t = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? 35 : 70
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className={className}>
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}

export function useClock(timeZone = 'Asia/Karachi') {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(new Date());
  const [now, setNow] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setNow(fmt()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return now;
}

export function LiveDot({ ok = true }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      {ok && <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />}
      <span className={`relative inline-flex h-2 w-2 rounded-full ${ok ? 'bg-accent' : 'bg-mute'}`} />
    </span>
  );
}
