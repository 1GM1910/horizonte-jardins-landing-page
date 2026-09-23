import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartments';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-neutral-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold tracking-tight text-white font-display hover:text-amber-400 transition-colors"
          >
            Horizonte Jardins
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a href="#tipologias" className="hover:text-white transition-colors">
              Tipologias
            </a>
            <a href="#galeria" className="hover:text-white transition-colors">
              Interiores
            </a>
            <a href="#lazer" className="hover:text-white transition-colors">
              Lazer & SPA
            </a>
            <a href="#localizacao" className="hover:text-white transition-colors">
              Localização
            </a>
            <a href="#simulador" className="hover:text-white transition-colors">
              Simulador
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-md transition-all duration-150 shadow-md shadow-amber-400/20 whitespace-nowrap"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white lg:hidden focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-6 shadow-2xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-200">
            <a
              href="#tipologias"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Tipologias de Apartamentos
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Galeria de Interiores
            </a>
            <a
              href="#lazer"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Áreas de Lazer & Resort
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Localização Privilegiada
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Simulador de Condições
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors py-1"
            >
              Perguntas Frequentes
            </a>
            <div className="pt-2">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 rounded-md"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
