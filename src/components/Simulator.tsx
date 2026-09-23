import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Calculator, CheckCircle2, Info } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/apartments';

interface UnitPlan {
  name: string;
  size: string;
  totalValue: number;
}

const UNIT_OPTIONS: UnitPlan[] = [
  { name: 'Essence (84m² - 2 Suítes)', size: '84m²', totalValue: 890000 },
  { name: 'Elegance (132m² - 3 Suítes)', size: '132m²', totalValue: 1480000 },
  { name: 'Penthouse (210m² - 4 Suítes)', size: '210m²', totalValue: 2650000 },
];

export const Simulator: React.FC = () => {
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(15);
  const [constructionMonths, setConstructionMonths] = useState(36);

  const unit = UNIT_OPTIONS[selectedUnitIdx];

  const calculations = useMemo(() => {
    const total = unit.totalValue;
    const downPayment = total * (downPaymentPercent / 100);
    // 25% of total distributed during construction months
    const duringConstructionTotal = total * 0.25;
    const monthlyInstallment = duringConstructionTotal / constructionMonths;
    // Remainder to finance on delivery
    const balanceToFinance = total - downPayment - duringConstructionTotal;

    const formatBRL = (val: number) =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0,
      }).format(val);

    return {
      totalFormatted: formatBRL(total),
      downPaymentFormatted: formatBRL(downPayment),
      monthlyInstallmentFormatted: formatBRL(monthlyInstallment),
      balanceToFinanceFormatted: formatBRL(balanceToFinance),
    };
  }, [unit, downPaymentPercent, constructionMonths]);

  return (
    <section id="simulador" className="py-24 bg-neutral-900 border-t border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Condições Comerciais Flexíveis
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
            Simule seu fluxo durante o período de obras.
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Planejamento financeiro sem surpresas. Personalize a entrada e descubra parcelas que cabem no seu orçamento até a entrega das chaves.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-8">
              {/* Unit Selection */}
              <div>
                <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3">
                  1. Selecione a Unidade Desejada
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {UNIT_OPTIONS.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedUnitIdx(i)}
                      className={`p-3 text-left rounded-lg border text-xs transition-all cursor-pointer ${
                        selectedUnitIdx === i
                          ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <div className="font-semibold">{opt.name.split(' ')[0]}</div>
                      <div className="text-[11px] text-neutral-400">{opt.size}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Down Payment Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider">
                    2. Entrada Inicial ({downPaymentPercent}%)
                  </label>
                  <span className="text-sm font-bold text-amber-400 font-mono tabular-nums">
                    {calculations.downPaymentFormatted}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="35"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-neutral-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                  <span>10% (Mínimo)</span>
                  <span>20%</span>
                  <span>35% (Mais folgado)</span>
                </div>
              </div>

              {/* Installment Duration */}
              <div>
                <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                  3. Prazo de Obras (Mensais)
                </label>
                <div className="flex gap-3">
                  {[24, 30, 36].map((months) => (
                    <button
                      key={months}
                      onClick={() => setConstructionMonths(months)}
                      className={`flex-1 py-2 text-xs font-medium rounded-md border cursor-pointer transition-colors ${
                        constructionMonths === months
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                      }`}
                    >
                      {months} meses
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Aceitamos seu imóvel usado ou veículo como parte do pagamento na negociação direta.
                </span>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <span className="text-xs font-mono uppercase text-amber-400">Resumo da Simulação</span>
                  <span className="text-xs text-neutral-400">{unit.name.split(' ')[0]}</span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="text-xs sm:text-sm">Valor total do imóvel:</span>
                    <span className="text-base sm:text-lg font-bold text-white tabular-nums">
                      {calculations.totalFormatted}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="text-xs sm:text-sm">Entrada inicial ({downPaymentPercent}%):</span>
                    <span className="text-base sm:text-lg font-bold text-amber-400 tabular-nums">
                      {calculations.downPaymentFormatted}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="text-xs sm:text-sm">{constructionMonths}x Mensais durante obras:</span>
                    <span className="text-base sm:text-lg font-bold text-white tabular-nums">
                      {calculations.monthlyInstallmentFormatted} <span className="text-xs font-normal text-neutral-400">/mês</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-300 pt-3 border-t border-neutral-800/80">
                    <div>
                      <span className="text-xs sm:text-sm block">Saldo na entrega das chaves:</span>
                      <span className="text-[11px] text-neutral-400">Financiável pelo banco de sua preferência</span>
                    </div>
                    <span className="text-base sm:text-lg font-bold text-white tabular-nums">
                      {calculations.balanceToFinanceFormatted}
                    </span>
                  </div>
                </div>
              </div>

              {/* Simulator CTA Button with exact link */}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href={INTEREST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-sm sm:text-base font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-md transition-all shadow-lg shadow-amber-400/20 cursor-pointer"
                >
                  <span>Tenho Interesse</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <p className="text-center text-[11px] text-neutral-400 mt-2">
                  Receba a proposta formalizada por e-mail e WhatsApp sem compromisso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
