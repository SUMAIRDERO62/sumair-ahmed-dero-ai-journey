import React from 'react';
import { GraduationCap, Award, Download } from 'lucide-react';
import { Reveal, SectionHeading } from './ui';
import { education, certifications, training, profile } from '../data';

export default function Credentials() {
  return (
    <section id="credentials" className="px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Credentials" title="Education, certificates & training" />

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-card w-9 h-9 rounded-xl border border-line grid place-items-center text-accent"><GraduationCap className="w-4 h-4" /></div>
              <h3 className="font-semibold">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((e) => (
                <div key={e.title} className="bg-card border border-line rounded-2xl p-5">
                  <h4 className="font-semibold">{e.title}</h4>
                  <p className="text-xs text-accent font-medium mt-0.5">{e.place}</p>
                  <p className="text-[11px] text-mute mt-1">{e.date}</p>
                  {e.desc && <p className="text-xs text-soft font-light mt-2">{e.desc}</p>}
                </div>
              ))}
            </div>

            <h3 className="font-semibold mt-8 mb-4">Internships &amp; training</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {training.map((t) => (
                <div key={t.title + t.place + t.date} className="bg-card border border-line rounded-2xl p-4">
                  <h4 className="text-sm font-semibold leading-snug">{t.title}</h4>
                  <p className="text-[11px] text-accent font-medium mt-0.5">{t.place}</p>
                  <p className="text-[11px] text-mute">{t.date}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-card w-9 h-9 rounded-xl border border-line grid place-items-center text-accent"><Award className="w-4 h-4" /></div>
              <h3 className="font-semibold">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div key={c.title} className="bg-card border border-line rounded-2xl p-4">
                  <h4 className="text-sm font-semibold leading-snug">{c.title}</h4>
                  <p className="text-[11px] text-accent font-medium mt-0.5">{c.issuer}</p>
                  <p className="text-[11px] text-mute mt-1">
                    {[c.date, c.code && `ID: ${c.code}`].filter(Boolean).join(' · ') || 'Completed'}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-card to-panel border border-line rounded-2xl p-6">
              <h4 className="font-semibold">Want it all on one page?</h4>
              <p className="text-xs text-soft font-light mt-1">Download my CV as a PDF — education, experience, skills and projects.</p>
              <a
                href={profile.cv}
                download="Sumair_Ahmed_Dero_CV.pdf"
                className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent2 text-bg text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
