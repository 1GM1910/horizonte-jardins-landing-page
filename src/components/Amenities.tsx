import React from 'react';
import { ArrowUpRight, Waves, Dumbbell, Coffee, Flame, HeartHandshake, Sparkles } from 'lucide-react';
import rooftopImage from '../assets/images/rooftop_pool_amenity_1790202509258.jpg';
import { AMENITIES, INTEREST_FORM_URL } from '../data/apartments';

export const Amenities: React.FC = () => {
  return (
    <section id="lazer" className="py-24 bg-neutral-900 border-t border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Rooftop Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src={rooftopImage}
                alt="Piscina de borda infinita no rooftop com deck de madeira e vista panorâmica para o horizonte urbano"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Rooftop a 110 metros de altura
                </span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  Piscina com borda infinita e solarium aquecido
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Desfrute do pôr do sol inesquecível todos os dias com privacidade total e serviço de apoio.
                </p>
              </div>
            </div>

            {/* Quick floating stat box */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-neutral-950 border border-neutral-800 p-5 rounded-xl shadow-xl max-w-xs">
              <div className="text-2xl font-bold font-display text-white tabular-nums">+1.200 m²</div>
              <div className="text-xs text-neutral-400">De áreas comuns totalmente equipadas e decoradas</div>
            </div>
          </div>

          {/* Right Column: Editorial Amenity Roster */}
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
              Resort Urbano Privativo
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight [text-wrap:balance] mb-6">
              Momentos de lazer sem precisar sair de casa.
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              Áreas de convívio planejadas para todas as fases da vida, com curadoria de mobiliário assinado e isolamento sonoro das unidades residenciais.
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {AMENITIES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-neutral-950/60 border border-neutral-800/80 rounded-lg hover:border-neutral-700 transition-colors"
                >
                  <div className="text-[11px] font-medium text-amber-400 mb-1">
                    {item.category}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md shadow-amber-400/20"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-neutral-400 text-center sm:text-left">
                Áreas comuns entregues 100% climatizadas e decoradas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
