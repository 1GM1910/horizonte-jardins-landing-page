import React from 'react';
import { ArrowUpRight, ChevronDown, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { INTEREST_FORM_URL, trackInterestClick } from '../data/apartments';
import heroImage from '../assets/images/hero_luxury_apartment_1790202483859.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Layered Architectural Dark Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fachada do edifício residencial de luxo Horizonte Jardins ao entardecer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in filter brightness-[0.82] contrast-[1.08]"
          onError={(e) => {
            // Graceful fallback container if image fails to render
            const target = e.target as HTMLElement;
            target.style.display = 'none';
          }}
        />
        {/* Measured scrim to guarantee 4.5:1 contrast across all media luminance */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/50 to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 md:pt-16">
        <div className="max-w-3xl">
          {/* Quiet unboxed kicker */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-4">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>Lançamento Residencial Exclusivo</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-neutral-300">Bairro Jardins</span>
          </div>

          {/* Primary Balanced Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
            Viva onde a arquitetura autoral encontra o seu novo horizonte.
          </h1>

          {/* Descriptive Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-8 max-w-2xl">
            Apartamentos de <strong className="text-white font-medium">84m² a 210m²</strong> com 2 a 4 suítes, varanda gourmet integrada, acabamentos de padrão internacional e lazer estilo resort em localização nobre.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInterestClick('hero_section')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-md transition-all duration-200 shadow-xl shadow-amber-400/25 group cursor-pointer"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#tipologias"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-all duration-200 backdrop-blur-sm"
            >
              <span>Ver Plantas e Valores</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          {/* Unboxed Metadata Metrics with Typographic Separators */}
          <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-neutral-300">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">84 a 210</div>
              <div className="text-xs text-neutral-400 font-medium">Metros quadrados</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">2 a 4</div>
              <div className="text-xs text-neutral-400 font-medium">Suítes privativas</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">2 a 3</div>
              <div className="text-xs text-neutral-400 font-medium">Vagas demarcadas</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">2027</div>
              <div className="text-xs text-neutral-400 font-medium">Previsão de entrega</div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Memorial de Incorporação Registrado · Financiamento garantido na planta</span>
          </div>
        </div>
      </div>
    </section>
  );
};
