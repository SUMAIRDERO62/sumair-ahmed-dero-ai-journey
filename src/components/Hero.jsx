import React, { useState } from 'react';
import { Download, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './BrandIcons';
import { Typewriter, useClock, LiveDot } from './ui';
import { profile, journey } from '../data';

const roles = ['AI Engineer', 'ML Engineer', 'AI Researcher', 'NLP & Computer Vision Builder'];

function Stat({ value, label }) {
  return (
    <div className="bg-card border border-line rounded-2xl p-4 text-center">
      <p className="text-2xl font-bold text-gradient">{value}</p>
      <p className="text-[11px] text-mute mt-1 leading-tight">{label}</p>
    </div>
  );
}

export default function Hero({ gh }) {
  const time = useClock();
  const [imgFailed, setImgFailed] = useState(false);
  const ready = gh.status === 'ready';
  const totalStars = ready ? gh.repos.reduce((n, r) => n + (r.stargazers_count || 0), 0) : null;
  const roleCount = journey.reduce((n, c) => n + c.items.filter((i) => i.type === 'Internship' || i.type === 'Research').length, 0);

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.25fr_1fr] gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2.5 bg-card border border-line rounded-full pl-3 pr-4 py-1.5 text-xs text-soft">
            <LiveDot />
            Open to internships &amp; collaboration · <span className="tabular-nums text-ink">{time}</span> PKT
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-ink h-9">
            <Typewriter words={roles} className="text-accent" />
          </p>
          <p className="mt-5 text-soft font-light leading-relaxed max-w-xl">
            A BS Artificial Intelligence student whose journey started at the University of Sindh and is now
            running across research, internships and open-source work. {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.cv}
              download="Sumair_Ahmed_Dero_CV.pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent2 text-bg text-sm font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
            <a href="#journey" className="inline-flex items-center gap-2 bg-card border border-line hover:border-accent/50 text-accent text-sm font-semibold px-5 py-3 rounded-xl transition-colors">
              See my journey
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-accent">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 bg-card border border-line rounded-xl hover:border-accent/50 transition-colors"><GithubIcon /></a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 bg-card border border-line rounded-xl hover:border-accent/50 transition-colors"><LinkedinIcon /></a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2.5 bg-card border border-line rounded-xl hover:border-accent/50 transition-colors"><WhatsappIcon /></a>
          </div>
        </div>

        <aside className="bg-panel border border-line rounded-3xl p-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-accent to-accent2 shrink-0">
              <div className="w-20 h-20 rounded-[14px] bg-card grid place-items-center overflow-hidden">
                {imgFailed ? (
                  <span className="text-2xl font-bold text-gradient">{profile.initials}</span>
                ) : (
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" onError={() => setImgFailed(true)} />
                )}
              </div>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-lg leading-tight">{profile.name}</h2>
              <p className="text-xs text-accent font-medium tracking-wide uppercase mt-1">{profile.role}</p>
              <p className="text-xs text-mute mt-1.5 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {profile.location}</p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 text-[11px] text-mute">
            <LiveDot ok={ready} />
            {ready ? 'Live from GitHub' : gh.status === 'loading' ? 'Syncing with GitHub…' : 'Offline snapshot'}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <Stat value={ready ? gh.user.public_repos : '75+'} label="Public repositories" />
            <Stat value={ready ? totalStars : '—'} label="Stars earned" />
            <Stat value={ready ? gh.user.followers : '—'} label="GitHub followers" />
            <Stat value={`${roleCount}+`} label="Internships & roles" />
          </div>
        </aside>
      </div>
    </section>
  );
}
