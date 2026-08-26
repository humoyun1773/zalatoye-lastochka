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
    <section id="calculator" className="py-20 md:py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.calculator.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            📊 {t.calculator.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="w-full">
          <div className="luxury-card p-6 sm:p-10 rounded-3xl border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-2xl">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-7">
              {/* Shares Slider */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wide">
                    {t.calculator.sharesLabel}
                  </label>
                  <span className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">
                    {selectedShares} <span className="text-sm font-sans font-bold text-slate-300">{t.calculator.shareUnit}</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={selectedShares}
                  onChange={(e) => setSelectedShares(parseInt(e.target.value, 10))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all focus:outline-none"
                />

                <div className="flex justify-between text-[11px] text-slate-300 mt-2 font-mono">
                  <span>1 {t.calculator.shareUnit} (0.1%)</span>
                  <span>25 {t.calculator.shareUnit} (2.5%)</span>
                  <span>50 {t.calculator.shareUnit} (5.0%)</span>
                </div>
              </div>

              {/* Preset Quick Selectors */}
              <div>
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
                          ? 'bg-blue-600 text-white border-blue-500 shadow-lg font-black scale-105'
                          : 'bg-white/10 text-white border-white/15 hover:border-blue-400 hover:bg-white/20'
                      }`}
                    >
                      {num} {t.calculator.shareUnit}
                    </button>
                  ))}
                </div>
              </div>

              {/* Percentage Badge */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 font-bold shrink-0">
                    <Percent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-white font-bold block">
                      {t.calculator.percentageLabel}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">
                      0.1% × {selectedShares} = {SHARE_PERCENTAGE}%
                    </span>
                  </div>
                </div>
                <span className="text-xl sm:text-2xl font-black text-blue-400 font-mono shrink-0">
                  {SHARE_PERCENTAGE}%
                </span>
              </div>

              {/* Monthly schedule note */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/15">
                  <span className="block text-[10px] sm:text-[11px] text-slate-300 uppercase font-bold">1 - 16</span>
                  <span className="text-xs sm:text-sm font-black text-blue-400">{t.calculator.monthlyIncome}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/15">
                  <span className="block text-[10px] sm:text-[11px] text-slate-300 uppercase font-bold">17</span>
                  <span className="text-xs sm:text-sm font-black text-emerald-400">{t.calculator.refundMonth}</span>
                </div>
              </div>
            </div>

            {/* Right Financial Breakdown Box */}
            <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl border border-white/15 p-5 sm:p-7 space-y-4 shadow-xl">
              <div className="flex justify-between items-center pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-medium">
                  <DollarSign className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{t.calculator.initialInvest}</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-white font-mono">
                  {formatUZS(TOTAL_INVESTMENT)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-medium">
                  <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{t.calculator.monthlyIncome}</span>
                </div>
                <span className="text-sm sm:text-base font-black text-sky-400 font-mono">
                  ~{formatUZS(MONTHLY_PROFIT)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2 text-blue-300 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{t.calculator.totalProfit}</span>
                </div>
                <span className="text-sm sm:text-base font-black text-blue-400 font-mono">
                  +{formatUZS(TOTAL_16_PROFIT)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-medium">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.calculator.refundMonth}</span>
                </div>
                <span className="text-sm sm:text-base font-black text-emerald-400 font-mono">
                  +{formatUZS(REFUND_17)}
                </span>
              </div>

              {/* Grand Total Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/80 to-indigo-950/80 border border-blue-400/40 mt-4 shadow-xl">
                <span className="block text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  {t.calculator.grandTotal}
                </span>
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <span className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight">
                    {formatUZS(GRAND_TOTAL)}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] sm:text-xs font-black shadow-sm">
                    200% (Total)
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  triggerConfetti();
                  onApplyWithShares(selectedShares);
                }}
                className="w-full blue-btn py-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl text-white"
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

