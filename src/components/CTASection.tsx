import React from 'react';
import { ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartments';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden border-t border-neutral-800">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Unboxed Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>Fase Exclusiva de Pré-Lançamento</span>
        </div>

        {/* Big Impact Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
          O próximo grande capítulo da sua vida começa aqui.
        </h2>

        {/* Narrative */}
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Unidades com condições especiais de primeiro lote e prioridade na escolha de andar e posição solar. Preencha o formulário e receba o book digital completo.
        </p>

        {/* Hero-sized CTA Button with exact user link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-md transition-all duration-200 shadow-2xl shadow-amber-400/30 group cursor-pointer"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-neutral-400 pt-6 border-t border-neutral-800/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Tabela Direta da Construtora</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Dados 100% Protegidos</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Atendimento Personalizado</span>
          </div>
        </div>
      </div>
    </section>
  );
};
