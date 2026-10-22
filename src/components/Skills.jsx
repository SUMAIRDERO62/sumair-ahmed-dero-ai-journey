import React from 'react';
import { Reveal, SectionHeading } from './ui';
import { skills } from '../data';

function Row({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden mask-edges">
      <div className={`flex gap-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((s, i) => (
          <span key={`${s}-${i}`} className="shrink-0 bg-card border border-line text-soft text-sm px-5 py-2.5 rounded-xl">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const all = skills.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);

  return (
    <section id="skills" className="px-5 py-20 md:py-28 bg-panel/40 border-y border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Skills" title="The toolkit behind the projects" />
        <div className="space-y-3 mb-14">
          <Row items={all.slice(0, half)} />
          <Row items={all.slice(half)} reverse />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 60}>
              <div className="h-full bg-card border border-line rounded-2xl p-5">
                <h3 className="text-xs uppercase tracking-wider text-accent font-semibold">{g.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="text-[11px] bg-panel border border-line text-soft px-2.5 py-1 rounded-md">{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
