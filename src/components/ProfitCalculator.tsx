import React, { useState } from 'react';
import { Calculator, Sparkles, DollarSign, Calendar, Shield, CheckCircle, CreditCard, TrendingUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { TranslationsType } from '../data/translations';

interface ProfitCalculatorProps {
  t?: TranslationsType;
  onOpenPayment?: (packageName?: string, packageAmount?: string) => void;
}

interface PackageConfig {
  id: number;
  name: string;
  badge: string;
  badgeColor: string;
  pricePerUnit: number;
  profitPercent: number;
  durationMonths: number;
  durationLabel: string;
  monthlyDesc: string;
}

const PACKAGES_CONFIG: PackageConfig[] = [
  {
    id: 1,
    name: '1-Paket: Kichik Sarmoya',
    badge: '1-Paket',
    badgeColor: 'bg-blue-600/30 text-blue-300 border-blue-400/50',
    pricePerUnit: 560000,
    profitPercent: 140,
    durationMonths: 17,
    durationLabel: '17 oy',
    monthlyDesc: '1-oy 30%, 2-oy 20%, 3–17 oylar ~5.5%/oy',
  },
  {
    id: 2,
    name: '2-Paket: Optimal Daromad',
    badge: '2-Paket',
    badgeColor: 'bg-sky-600/30 text-sky-300 border-sky-400/50',
    pricePerUnit: 940000,
    profitPercent: 100,
    durationMonths: 14,
    durationLabel: '14 oy',
    monthlyDesc: '1-oy 25%, 2-oy 15%, 3–14 oylar ~10.6%/oy',
  },
  {
    id: 3,
    name: '3-Paket: Barqaror Sarmoya',
    badge: '3-Paket',
    badgeColor: 'bg-amber-600/30 text-amber-300 border-amber-400/50',
    pricePerUnit: 2640000,
    profitPercent: 100,
    durationMonths: 17,
    durationLabel: '16 oy + 17-oy (Sarmoya)',
    monthlyDesc: '1–3 oylar 50k, 4–6 oylar 70k, 7–16 oylar 228k, 17-oy sarmoya',
  },
];

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({
  onOpenPayment,
}) => {
  const [selectedPkgId, setSelectedPkgId] = useState<number>(1);
  const [units, setUnits] = useState<number>(1);

  const currentPkg = PACKAGES_CONFIG.find((p) => p.id === selectedPkgId) || PACKAGES_CONFIG[0];

  const totalInvestment = units * currentPkg.pricePerUnit;
  const netProfit = (totalInvestment * currentPkg.profitPercent) / 100;
  const grandTotal = totalInvestment + netProfit;
  const avgMonthlyReturn = grandTotal / currentPkg.durationMonths;

  const formatUZS = (val: number) => {
    return new Intl.NumberFormat('uz-UZ').format(Math.round(val)) + " so‘m";
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FFD21F', '#22C55E', '#38BDF8', '#FFFFFF'],
      });
    } catch {}
  };

  const presetUnits = [1, 2, 3, 5, 10, 20];

  return (
    <section id="calculator" className="py-16 md:py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>DAROMAD VA FOIZ KALKULYATORI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            📊 Sarmoyangiz va Daromadingizni Hisoblang
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200">
            Paketni va miqdorni tanlang, oylik to‘lov va jami sof foydangizni bir zumda ko‘ring.
          </p>
        </div>

        <div className="w-full">
          <div className="luxury-card p-6 sm:p-10 rounded-3xl border border-white/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-2xl">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Package selector tabs */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                  1. Sarmoya Paketini Tanlang:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PACKAGES_CONFIG.map((pkg) => {
                    const isSelected = selectedPkgId === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => {
                          setSelectedPkgId(pkg.id);
                          triggerConfetti();
                        }}
                        className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative ${
                          isSelected
                            ? 'bg-blue-600/90 border-blue-400 text-white shadow-xl scale-[1.02] ring-2 ring-blue-400/40'
                            : 'bg-slate-900/90 border-white/15 text-slate-200 hover:border-white/30 hover:bg-slate-800'
                        }`}
                      >
                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider inline-block mb-1.5 border ${pkg.badgeColor}`}>
                          {pkg.badge}
                        </span>
                        <div className="text-xs sm:text-sm font-black text-white block">
                          {formatUZS(pkg.pricePerUnit)}
                        </div>
                        <div className="text-[11px] font-bold text-emerald-300 mt-0.5 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>+{pkg.profitPercent}% Foyda</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Units Slider */}
              <div className="pt-2">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wide">
                    2. Paketlar soni (Ulush):
                  </label>
                  <span className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">
                    {units} <span className="text-sm font-sans font-bold text-slate-300">paket</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={units}
                  onChange={(e) => setUnits(parseInt(e.target.value, 10))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all focus:outline-none"
                />

                <div className="flex justify-between text-[11px] text-slate-300 mt-2 font-mono">
                  <span>1 paket</span>
                  <span>15 paket</span>
                  <span>30 paket</span>
                </div>
              </div>

              {/* Preset Quick Selectors */}
              <div>
                <div className="grid grid-cols-6 gap-2">
                  {presetUnits.map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => {
                        setUnits(num);
                        triggerConfetti();
                      }}
                      className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        units === num
                          ? 'bg-blue-600 text-white border-blue-500 shadow-lg font-black scale-105'
                          : 'bg-white/10 text-white border-white/15 hover:border-blue-400 hover:bg-white/20'
                      }`}
                    >
                      {num}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Package conditions summary note */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/15 space-y-1 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Tanlangan shart:</span>
                  <span className="font-bold text-white">{currentPkg.name}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>To‘lov jadvali:</span>
                  <span className="font-bold text-blue-300">{currentPkg.monthlyDesc}</span>
                </div>
              </div>
            </div>

            {/* Right Financial Breakdown Box */}
            <div className="lg:col-span-6 bg-slate-900/95 rounded-2xl border border-white/20 p-5 sm:p-7 space-y-4 shadow-2xl">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-medium">
                  <DollarSign className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Kiritiladigan investitsiya:</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-white font-mono">
                  {formatUZS(totalInvestment)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kafolatlangan sof foyda:</span>
                </div>
                <span className="text-sm sm:text-base font-black text-emerald-400 font-mono">
                  +{formatUZS(netProfit)} <span className="text-xs">({currentPkg.profitPercent}%)</span>
                </span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-medium">
                  <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>O‘rtacha oylik qaytim:</span>
                </div>
                <span className="text-sm sm:text-base font-black text-sky-400 font-mono">
                  ~{formatUZS(avgMonthlyReturn)} / oy
                </span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-medium">
                  <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>To‘lov muddati:</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-white font-mono">
                  {currentPkg.durationLabel}
                </span>
              </div>

              {/* Grand Total Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/90 to-indigo-950/90 border border-blue-400/50 mt-4 shadow-xl">
                <span className="block text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  JAMI QAYTARILADIGAN MABLAG‘ (Sarmoya + Foyda):
                </span>
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <span className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight">
                    {formatUZS(grandTotal)}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] sm:text-xs font-black shadow-sm">
                    +{currentPkg.profitPercent}% SOF FOYDA
                  </span>
                </div>
              </div>

              {onOpenPayment && (
                <button
                  type="button"
                  onClick={() => {
                    triggerConfetti();
                    onOpenPayment(
                      `${currentPkg.name} (${units} ta paket)`,
                      formatUZS(totalInvestment)
                    );
                  }}
                  className="w-full blue-btn py-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 cursor-pointer shadow-xl text-white hover:scale-[1.01] transition-all"
                >
                  <CreditCard className="w-5 h-5 text-white" />
                  <span>Ushbu hisob bo‘yicha to‘lov qilish / Rekvizitlar</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


