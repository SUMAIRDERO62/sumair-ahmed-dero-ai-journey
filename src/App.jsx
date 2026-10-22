import React, { useMemo } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Contact, { Footer } from './components/Contact';
import FloatingActions from './components/FloatingActions';
import { useGithub } from './hooks/useGithub';
import { buildProjects } from './lib/projects';

export default function App() {
  const gh = useGithub();
  const projects = useMemo(
    () => buildProjects(gh.status === 'ready' ? gh.repos : []),
    [gh]
  );

  return (
    <div className="min-h-screen text-ink">
      <Nav />
      <main>
        <Hero gh={gh} />
        <About />
        <Journey projects={projects} gh={gh} />
        <Projects projects={projects} gh={gh} />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
