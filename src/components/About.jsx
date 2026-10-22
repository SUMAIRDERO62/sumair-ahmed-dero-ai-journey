import React from 'react';
import { Brain, Cpu, Sparkles, Server } from 'lucide-react';
import { Reveal, SectionHeading } from './ui';
import { about, research } from '../data';

const icons = { brain: Brain, cpu: Cpu, sparkles: Sparkles, server: Server };

export default function About() {
  return (
    <section id="about" className="px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="About" title="Research mindset, engineering habits" />

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal className="space-y-4">
            {about.summary.map((p, i) => (
              <p key={i} className="text-soft leading-relaxed font-light">{p}</p>
            ))}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-mute font-medium mb-2">Research interests</p>
              <p className="text-sm text-soft font-light leading-relaxed mb-3">{research.intro}</p>
              <div className="flex flex-wrap gap-2">
                {research.interests.map((r) => (
                  <span key={r} className="text-xs bg-card border border-accent2/40 text-accent2 px-3 py-1.5 rounded-lg">{r}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {about.focus.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="h-full bg-card border border-line hover:border-accent/30 transition-colors rounded-2xl p-5">
                    <div className="bg-panel w-10 h-10 rounded-xl border border-line grid place-items-center">
                      <Icon className="text-accent w-5 h-5" />
                    </div>
                    <h3 className="font-semibold mt-4">{item.title}</h3>
                    <p className="text-xs text-mute mt-1.5 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
