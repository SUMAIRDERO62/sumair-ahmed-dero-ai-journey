import React from 'react';
import { Globe, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './BrandIcons';
import { Reveal, SectionHeading } from './ui';
import { profile } from '../data';

function Card({ href, icon, title, sub, external = true }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="bg-card border border-line hover:border-accent/40 p-5 rounded-2xl flex items-center gap-4 transition-all hover:-translate-y-0.5"
    >
      <div className="text-accent bg-panel w-11 h-11 rounded-xl border border-line grid place-items-center shrink-0">{icon}</div>
      <div className="min-w-0">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-mute mt-0.5 font-light truncate">{sub}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-20 md:py-28 bg-panel/40 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something useful together"
          sub="Open to internships, research collaboration, freelance work and meaningful technical projects in machine learning, computer vision and NLP."
        />
        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card href={profile.whatsapp} icon={<WhatsappIcon />} title="WhatsApp" sub={`${profile.phone} · chat directly`} />
          <Card href={`mailto:${profile.email}`} external={false} icon={<Mail className="w-5 h-5" />} title="Email" sub={profile.email} />
          <Card href={profile.linkedinUrl} icon={<LinkedinIcon />} title="LinkedIn" sub="www.linkedin.com/in/sumair-ahmed-dero-70ba852a0" />
          <Card href={profile.portfolioUrl} icon={<Globe className="w-5 h-5" />} title="Portfolio" sub={profile.portfolioUrl} />
          <Card href={profile.githubUrl} icon={<GithubIcon />} title="GitHub" sub={`@${profile.github}`} />
          <Card href={profile.phoneHref} external={false} icon={<Phone className="w-5 h-5" />} title="Call" sub={profile.phone} />
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-5 py-8 border-t border-line text-center text-xs text-mute">
      <p>
        © {new Date().getFullYear()} {profile.name} · Built with React, Vite &amp; Tailwind · Projects synced live from{' '}
        <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">GitHub</a>
      </p>
      <p className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1">
        <a href={profile.phoneHref} className="text-accent hover:underline">Phone: {profile.phone}</a>
        <span aria-hidden="true">·</span>
        <a href={`mailto:${profile.email}`} className="text-accent hover:underline">Email: {profile.email}</a>
        <span aria-hidden="true">·</span>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">LinkedIn</a>
      </p>
    </footer>
  );
}
