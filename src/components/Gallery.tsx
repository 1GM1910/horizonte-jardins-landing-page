import React, { useState } from 'react';
import { ArrowUpRight, Compass, Shield, Sparkles, VolumeX } from 'lucide-react';
import livingRoomImage from '../assets/images/apartment_living_room_1790202498143.jpg';
import bedroomSuiteImage from '../assets/images/master_bedroom_suite_1790202517658.jpg';
import { INTEREST_FORM_URL } from '../data/apartments';

export const Gallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryItems = [
    {
      title: 'Living Integrado & Cozinha Gourmet',
      subtitle: 'Amplitude visual, iluminação natural e vãos envidraçados do piso ao teto.',
      image: livingRoomImage,
      alt: 'Living integrado contemporâneo com vista panorâmica para a cidade e acabamento em madeira',
      tag: 'Área Social'
    },
    {
      title: 'Suíte Master com Terraço Privativo',
      subtitle: 'Refúgio de tranquilidade com circulação íntima protegida e closet generoso.',
      image: bedroomSuiteImage,
      alt: 'Suíte master de alto padrão com cama king, janelas panorâmicas e iluminação aconchegante',
      tag: 'Área Íntima'
    }
  ];

  const current = galleryItems[activeImageIndex];

  return (
    <section id="galeria" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
              Arquitetura de Interiores
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
              O equilíbrio impecável entre luz, textura e privacidade.
            </h2>
          </div>
          <div className="shrink-0">
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-colors"
            >
              <span>Agendar Visita ao Decorado</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

        {/* Gallery Image Display */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
          <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden">
            <img
              src={current.image}
              alt={current.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

            {/* Caption on media */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <span className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-2 block">
                  {current.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300">
                  {current.subtitle}
                </p>
              </div>

              {/* Segmented Image Switcher */}
              <div className="flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md p-1.5 rounded-lg border border-neutral-700/60 shrink-0">
                {galleryItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                      activeImageIndex === idx
                        ? 'bg-amber-400 text-neutral-950 font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Ambiente 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Finishing Features (Asymmetric Bento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl">
            <VolumeX className="w-5 h-5 text-amber-400 mb-3" />
            <h4 className="text-base font-semibold text-white mb-1.5">Conforto Acústico Superior</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Manta acústica sob o contrapiso e caixilhos com vidros laminados de controle de ruído certificado.
            </p>
          </div>

          <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl">
            <Sparkles className="w-5 h-5 text-amber-400 mb-3" />
            <h4 className="text-base font-semibold text-white mb-1.5">Materiais Nobres</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Bancadas em granito escovado e porcelanatos de grandes formatos nas áreas sociais e banheiros.
            </p>
          </div>

          <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl">
            <Compass className="w-5 h-5 text-amber-400 mb-3" />
            <h4 className="text-base font-semibold text-white mb-1.5">Automação Residencial</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Pontos para persianas automatizadas, controle central de iluminação e fechadura biométrica no acesso principal.
            </p>
          </div>

          <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl">
            <Shield className="w-5 h-5 text-amber-400 mb-3" />
            <h4 className="text-base font-semibold text-white mb-1.5">Sustentabilidade & Eficiência</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Aquecimento solar central para água quente, reaproveitamento de águas pluviais e painéis solares para o condomínio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
