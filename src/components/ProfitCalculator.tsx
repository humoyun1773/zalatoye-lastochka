import React from 'react';
import { Calculator, Sparkles, ArrowRight, DollarSign, Calendar, Shield, Percent, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { TranslationsType } from '../data/translations';

interface ProfitCalculatorProps {
  t: TranslationsType;
  selectedShares: number;
  setSelectedShares: (n: number) => void;
  onApplyWithShares: (shares: number) => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({
  t,
  selectedShares,
  setSelectedShares,
  onApplyWithShares,
}) => {
  const BASE_PRICE = 2640000;
  const TOTAL_INVESTMENT = selectedShares * BASE_PRICE;
  const MONTHLY_PROFIT = TOTAL_INVESTMENT / 16;
  const TOTAL_16_PROFIT = TOTAL_INVESTMENT;
  const REFUND_17 = TOTAL_INVESTMENT;
  const GRAND_TOTAL = TOTAL_16_PROFIT + REFUND_17;
  const SHARE_PERCENTAGE = (selectedShares * 0.1).toFixed(2);

  const formatUZS = (val: number) => {
    return new Intl.NumberFormat('uz-UZ').format(Math.round(val)) + " so‘m";
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FFD21F', '#22C55E', '#38BDF8', '#FFFFFF'],
      });
    } catch {}
  };

  const presetShares = [1, 2, 5, 10, 20, 50];

  return (
    <section id="calculator" className="py-20 md:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.calculator.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            📊 Sarmoyangizni hisoblang
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="w-full">
          <div className="luxury-card bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-xl">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-7">
              {/* Shares Slider */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">
                    {t.calculator.sharesLabel}
                  </label>
                  <span className="text-2xl sm:text-3xl font-black text-blue-700 font-mono">
                    {selectedShares} <span className="text-sm font-sans font-bold text-slate-800">{t.calculator.shareUnit}</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={selectedShares}
                  onChange={(e) => setSelectedShares(parseInt(e.target.value, 10))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 transition-all focus:outline-none"
                />

                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                  <span>1 ulush (0.1%)</span>
                  <span>25 ulush (2.5%)</span>
                  <span>50 ulush (5.0%)</span>
                </div>
              </div>

              {/* Preset Quick Selectors */}
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Tezkor tanlov:
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {presetShares.map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setSelectedShares(num);
                        triggerConfetti();
                      }}
                      className={`py-2.5 px-1 text-center rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        selectedShares === num
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md font-black scale-105'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50'
                      }`}
                    >
                      {num} {t.calculator.shareUnit}
                    </button>
                  ))}
                </div>
              </div>

              {/* Percentage Badge */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold shrink-0">
                    <Percent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-slate-900 font-bold block">
                      {t.calculator.percentageLabel}
                    </span>
                    <span className="text-[11px] text-slate-600">Loyiha umumiy fondidagi ulushingiz</span>
                  </div>
                </div>
                <span className="text-xl sm:text-2xl font-black text-blue-700 font-mono shrink-0">
                  {SHARE_PERCENTAGE}%
                </span>
              </div>

              {/* Monthly schedule note */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-[10px] sm:text-[11px] text-slate-500 uppercase font-bold">1 - 16 oy</span>
                  <span className="text-xs sm:text-sm font-black text-blue-700">Har oy sof daromad</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-[10px] sm:text-[11px] text-slate-500 uppercase font-bold">17 - oy</span>
                  <span className="text-xs sm:text-sm font-black text-emerald-600">100% Sarmoya qaytadi</span>
                </div>
              </div>
            </div>

            {/* Right Financial Breakdown Box */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-7 space-y-4 shadow-sm">
              <div className="flex justify-between items-center pb-3.5 border-b border-slate-200">
                <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-medium">
                  <DollarSign className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{t.calculator.initialInvest}</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-900 font-mono">
                  {formatUZS(TOTAL_INVESTMENT)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3.5 border-b border-slate-200">
                <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-medium">
                  <Calendar className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{t.calculator.monthlyIncome}</span>
                </div>
                <span className="text-sm sm:text-base font-black text-sky-600 font-mono">
                  ~{formatUZS(MONTHLY_PROFIT)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3.5 border-b border-slate-200">
                <div className="flex items-center gap-2 text-blue-700 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t.calculator.totalProfit}</span>
                </div>
                <span className="text-sm sm:text-base font-black text-blue-700 font-mono">
                  +{formatUZS(TOTAL_16_PROFIT)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3.5 border-b border-slate-200">
                <div className="flex items-center gap-2 text-emerald-700 text-xs sm:text-sm font-medium">
                  <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.calculator.refundMonth}</span>
                </div>
                <span className="text-sm sm:text-base font-black text-emerald-600 font-mono">
                  +{formatUZS(REFUND_17)}
                </span>
              </div>

              {/* Grand Total Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 mt-4 shadow-sm">
                <span className="block text-[10px] sm:text-xs font-bold text-blue-700 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  {t.calculator.grandTotal}
                </span>
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <span className="text-xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
                    {formatUZS(GRAND_TOTAL)}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] sm:text-xs font-black shadow-sm">
                    200% Jami Tushum
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  triggerConfetti();
                  onApplyWithShares(selectedShares);
                }}
                className="w-full blue-btn py-4 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-xl text-white"
              >
                <span>{t.calculator.ctaCalculate}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

