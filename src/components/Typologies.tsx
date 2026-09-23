import React, { useState } from 'react';
import { ArrowUpRight, Check, Maximize2, BedDouble, Car, Layers } from 'lucide-react';
import { TYPOLOGIES, INTEREST_FORM_URL } from '../data/apartments';

export const Typologies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = TYPOLOGIES[activeTab];

  return (
    <section id="tipologias" className="py-24 bg-neutral-900 border-t border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Tipologias & Plantas Flexíveis
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
            Projetadas para a sua forma de viver e conviver.
          </h2>
          <p className="mt-4 text-neutral-400 text-base leading-relaxed">
            Plantas inteligentes com integração total entre living e área gourmet, ventilação cruzada e vãos livres sem pilares centrais.
          </p>
        </div>

        {/* Interactive Segmented Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-950/80 border border-neutral-800 rounded-lg max-w-xl mb-12">
          {TYPOLOGIES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 min-w-[130px] py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer text-center ${
                activeTab === idx
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/10'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              {item.name.split(' ')[0]} ({item.area})
            </button>
          ))}
        </div>

        {/* Selected Typology Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Floor Plan Architectural Schematic Visualization */}
          <div className="lg:col-span-6 bg-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 relative overflow-hidden group">
            {/* Top specs badge */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs text-neutral-400">
              <span className="font-semibold text-neutral-300">Esquema Arquitetônico Demonstrativo</span>
              <span>{current.floor}</span>
            </div>

            {/* Custom Architectural Blueprint SVG Vector representation */}
            <div className="py-8 flex flex-col items-center justify-center">
              <div className="w-full max-w-md aspect-[4/3] bg-neutral-900/60 border border-dashed border-neutral-700 rounded-lg p-5 flex flex-col justify-between relative shadow-inner">
                {/* SVG Blueprint Wireframe */}
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full text-neutral-500 stroke-current fill-none stroke-[1.5]"
                >
                  {/* Outer boundaries */}
                  <rect x="20" y="20" width="360" height="260" rx="4" className="stroke-neutral-400 stroke-2" />
                  
                  {/* Living room & Varanda */}
                  <rect x="20" y="20" width="220" height="150" className="stroke-neutral-600 fill-neutral-900/40" />
                  <line x1="20" y1="90" x2="160" y2="90" strokeDasharray="4 4" />
                  <text x="35" y="55" className="fill-amber-400/90 text-[10px] font-sans font-medium stroke-none">
                    Living Integrado ({activeTab === 2 ? '54m²' : activeTab === 1 ? '38m²' : '26m²'})
                  </text>
                  <text x="35" y="125" className="fill-neutral-400 text-[9px] font-sans stroke-none">
                    Varanda Gourmet c/ Churrasqueira
                  </text>

                  {/* Kitchen & Service */}
                  <rect x="240" y="20" width="140" height="110" className="stroke-neutral-700" />
                  <text x="255" y="65" className="fill-neutral-400 text-[9px] font-sans stroke-none">
                    Cozinha & Ilha
                  </text>
                  <text x="255" y="105" className="fill-neutral-500 text-[8px] font-sans stroke-none">
                    Área Técnica
                  </text>

                  {/* Suite Master */}
                  <rect x="20" y="170" width="180" height="110" className="stroke-neutral-600 fill-neutral-900/30" />
                  <text x="35" y="210" className="fill-white text-[10px] font-sans font-medium stroke-none">
                    Suíte Master
                  </text>
                  <text x="35" y="235" className="fill-neutral-400 text-[8px] font-sans stroke-none">
                    Closet Walk-In + Banho Privativo
                  </text>

                  {/* Secondary Suites */}
                  <rect x="200" y="130" width="180" height="150" className="stroke-neutral-700" />
                  <line x1="200" y1="210" x2="380" y2="210" strokeDasharray="3 3" />
                  <text x="220" y="170" className="fill-neutral-300 text-[9px] font-sans stroke-none">
                    {activeTab === 0 ? 'Suíte 2 / Home Office' : 'Suíte Júnior 01'}
                  </text>
                  <text x="220" y="250" className="fill-neutral-300 text-[9px] font-sans stroke-none">
                    {activeTab === 2 ? 'Suíte 03 & Terraço Privativo' : activeTab === 1 ? 'Suíte Júnior 02' : 'Lavabo & Circulação'}
                  </text>
                </svg>

                <div className="absolute bottom-3 right-3 text-[10px] text-amber-400 font-mono">
                  Escala 1:50 · Planta Ilustrativa
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-neutral-400">
              Consulte opções de personalização de layout e kits de acabamento premium na fase de obras.
            </p>
          </div>

          {/* Right Column: Detailed specs & action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-block text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              {current.subtitle}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              {current.name}
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              {current.description}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-neutral-950/60 border border-neutral-800 rounded-lg mb-6 text-neutral-300">
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-neutral-400">Área Privativa</div>
                  <div className="text-sm font-bold text-white tabular-nums">{current.area}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-neutral-400">Acomodação</div>
                  <div className="text-sm font-bold text-white">{current.suites}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-neutral-400">Garagem</div>
                  <div className="text-sm font-bold text-white">{current.parking}</div>
                </div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="space-y-2.5 mb-8">
              {current.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <div className="p-0.5 rounded bg-amber-400/10 text-amber-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Price reference and Primary CTA */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-neutral-400">Condição especial de pré-lançamento</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-white tabular-nums">
                  {current.startingPrice}
                </div>
                <div className="text-[11px] text-neutral-400">Condomínio estimado: {current.estimatedCondo}</div>
              </div>

              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-md transition-all duration-150 shadow-lg shadow-amber-400/20 whitespace-nowrap cursor-pointer"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
