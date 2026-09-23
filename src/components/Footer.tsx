import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartments';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a href="#" className="text-xl font-bold font-display text-white tracking-tight hover:text-amber-400 transition-colors">
              Horizonte Jardins
            </a>
            <p className="mt-3 text-neutral-400 text-xs leading-relaxed max-w-sm">
              Apartamentos de alto padrão concebidos para quem valoriza a estética atemporal, o conforto acústico e o privilégio da exclusividade.
            </p>
            <div className="mt-4 text-neutral-400">
              Alameda dos Jacarandás, 1420 · Bairro Jardins · São Paulo - SP
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Navegação
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#tipologias" className="hover:text-white transition-colors">Tipologias & Plantas</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Interiores & Acabamentos</a>
              </li>
              <li>
                <a href="#lazer" className="hover:text-white transition-colors">Lazer & Rooftop</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">Simulador de Pagamento</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
                Atendimento Exclusivo
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Deseja falar diretamente com um consultor especializado e receber a tabela em PDF?
              </p>
            </div>
            <div>
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-neutral-400 leading-relaxed">
            *Memorial de Incorporação registrado sob R.I. nº 184.920 no 4º Oficial de Registro de Imóveis de São Paulo - SP. Todas as imagens, perspectivas artísticas, móveis e decorações presentes neste material são de caráter puramente ilustrativo, prevalecendo as especificações do Memorial Descritivo oficial anexo ao contrato de compra e venda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
            <div>
              © 2026 Horizonte Jardins Incorporações & Empreendimentos Imobiliários. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4">
              <span>Política de Privacidade</span>
              <span>·</span>
              <span>Termos de Uso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
