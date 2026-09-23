import React from 'react';
import { ArrowUpRight, MapPin, Navigation, Trees, Utensils, GraduationCap, Hospital, ShoppingBag } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartments';

export const Location: React.FC = () => {
  const pointsOfInterest = [
    {
      icon: Trees,
      title: 'Parque das Águas & Bosque',
      time: '2 min a pé',
      description: 'Pistas de corrida, ciclovias e ampla área verde preservada'
    },
    {
      icon: Utensils,
      title: 'Polo Gastronômico Jardins',
      time: '4 min a pé',
      description: 'Restaurantes premiados, bistrôs franceses e empórios gourmet'
    },
    {
      icon: GraduationCap,
      title: 'Colégio Internacional & Bilíngue',
      time: '6 min de carro',
      description: 'Educação de excelência desde a infância até o ensino médio'
    },
    {
      icon: Hospital,
      title: 'Hospital & Centro Médico Einstein',
      time: '8 min de carro',
      description: 'Referência nacional em atendimento e pronto-socorro 24h'
    },
    {
      icon: ShoppingBag,
      title: 'Shopping Iguatemi & Boutiques',
      time: '7 min de carro',
      description: 'Marcas de luxo internacionais, cinemas VIP e conveniência'
    },
    {
      icon: Navigation,
      title: 'Eixo Viário & Ciclovias Expressas',
      time: '3 min de carro',
      description: 'Acesso rápido às principais avenidas sem gargalos de trânsito'
    }
  ];

  return (
    <section id="localizacao" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Localização Estratégica
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
            O privilégio de fazer tudo a pé no melhor endereço da cidade.
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Rua arborizada e tranquila no coração do bairro Jardins, com segurança monitorada 24 horas e mobilidade total.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Points list */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pointsOfInterest.map((poi, idx) => {
              const Icon = poi.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-neutral-900/60 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-neutral-800 text-amber-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        {poi.time}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">
                      {poi.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {poi.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Location Card / Map Mockup */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                <MapPin className="w-4 h-4" />
                <span>ENDEREÇO DO PLANTÃO & DECORADO</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Alameda dos Jacarandás, 1420
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Bairro Jardins · São Paulo - SP (Estacionamento com manobrista cortesia no plantão)
              </p>

              {/* Graphic Map Stylized Widget */}
              <div className="aspect-[16/9] w-full rounded-xl bg-neutral-950 border border-neutral-800 p-4 relative flex items-center justify-center overflow-hidden mb-6">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#amber-400_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Simulated Street Grid */}
                <svg className="w-full h-full text-neutral-800 stroke-current stroke-2" viewBox="0 0 300 150">
                  <line x1="0" y1="50" x2="300" y2="50" />
                  <line x1="0" y1="100" x2="300" y2="100" />
                  <line x1="80" y1="0" x2="80" y2="150" />
                  <line x1="200" y1="0" x2="200" y2="150" strokeDasharray="4 4" />
                  
                  {/* Green park area */}
                  <rect x="10" y="60" width="60" height="30" rx="3" className="fill-emerald-950/60 stroke-emerald-800" />
                  <text x="18" y="78" className="fill-emerald-400 text-[8px] font-sans stroke-none">Parque</text>

                  {/* Pulsing Pin */}
                  <circle cx="140" cy="50" r="10" className="fill-amber-400/20 stroke-amber-400" />
                  <circle cx="140" cy="50" r="4" className="fill-amber-400 stroke-none" />
                </svg>

                <div className="absolute top-2 right-2 bg-neutral-900/90 border border-neutral-700 px-2 py-1 rounded text-[10px] text-neutral-300">
                  📍 Stand Horizonte Jardins
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <span className="text-xs text-neutral-400 text-center sm:text-left">
                Visitas diárias das 09h às 19h com agendamento prévio.
              </span>
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md shadow-amber-400/20 whitespace-nowrap"
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
