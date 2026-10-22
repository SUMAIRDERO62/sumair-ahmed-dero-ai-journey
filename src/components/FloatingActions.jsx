import React, { useEffect, useState } from 'react';
import { WhatsappIcon } from './BrandIcons';
import { profile } from '../data';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col items-center gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="w-11 h-11 rounded-full bg-card border border-line text-accent grid place-items-center shadow-xl hover:border-accent/50 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
      <a
        href={profile.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-[#25D366] text-white p-3.5 rounded-full shadow-xl hover:scale-110 transition-transform"
      >
        <WhatsappIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
