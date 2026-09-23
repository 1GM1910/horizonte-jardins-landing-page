import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartments';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling 400px down
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 animate-fade-in">
      <a
        href={INTEREST_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-5 py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-full shadow-2xl shadow-black/80 border border-amber-300/40 transition-all duration-200 cursor-pointer"
        aria-label="Abrir formulário Tenho Interesse"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-900 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-950"></span>
        </span>
        <span>Tenho Interesse</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
};
