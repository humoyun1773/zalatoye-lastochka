import React from 'react';
import { DollarSign, Clock, TrendingUp, RefreshCw, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface FinancialTermsProps {
  t: TranslationsType;
  onOpenContract: () => void;
}

export const FinancialTerms: React.FC<FinancialTermsProps> = ({ t, onOpenContract }) => {
  return (
    <section id="terms" className="py-20 md:py-28 relative bg-[#0D1117]/60 border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FFD21F]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/30 text-[#FFD21F] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <DollarSign className="w-3.5 h-3.5" />
            <span>{t.terms.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            💰 Sizning sarmoyangiz qanday ishlaydi?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400">
            {t.terms.subtitle}
          </p>
        </div>

        {/* Big Premium Breakdown Master Card */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD21F]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {/* Step 1: Sarmoya */}
            <div className="flex flex-col justify-between p-2 lg:px-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/15 border border-[#FFD21F]/30 flex items-center justify-center text-[#FFD21F]">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">01 / QADAM</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Boshlang‘ich Sarmoya
                </span>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white mb-2">
                  2 640 000 so‘m
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                1 ta ulush qiymati (loyiha umumiy fondining 0.1% ulushiga tenglashtiriladi).
              </p>
            </div>

            {/* Step 2: Shartnoma muddati */}
            <div className="flex flex-col justify-between p-2 lg:px-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">02 / MUDDAT</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Shartnoma Davomiyligi
                </span>
                <div className="text-2xl sm:text-3xl font-black font-mono text-sky-400 mb-2">
                  16 oy
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                Har oy muntazam sof foyda taqsimoti va ikki tomonlama vedomost imzolash davri.
              </p>
            </div>

            {/* Step 3: Sof Daromad */}
            <div className="flex flex-col justify-between p-2 lg:px-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/20 border border-[#FFD21F]/40 flex items-center justify-center text-[#FFD21F]">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#FFD21F]">03 / FOYDA</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFD21F] block mb-1">
                  Ko‘rsatilgan Sof Daromad
                </span>
                <div className="text-2xl sm:text-3xl font-black font-mono text-[#FFD21F] mb-2">
                  2 640 000 so‘m
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                16 oy davomida to‘liq hajmda kiritilgan sarmoyaga teng (+100%) sof daromad to‘lanadi.
              </p>
            </div>

            {/* Step 4: Sarmoyani Qaytarish */}
            <div className="flex flex-col justify-between p-2 lg:px-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E]">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#22C55E]">04 / QAYTARISH</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#22C55E] block mb-1">
                  Sarmoyani Qaytarish
                </span>
                <div className="text-2xl sm:text-3xl font-black font-mono text-[#22C55E] mb-2">
                  17-oy (100%)
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                17-oyda 2 640 000 so‘m boshlang‘ich sarmoya to‘liq hajmda qaytarilishi ko‘zda tutilgan.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Summary Banner */}
        <div className="luxury-card-gold p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-[#FFD21F]/40 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#FFD21F] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>{t.terms.summaryTotal}</span>
              </div>
              <div className="text-2xl sm:text-4xl font-black font-mono text-white">
                5 280 000 so‘m <span className="text-[#FFD21F] text-xl sm:text-2xl">(200% umumiy tushum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                1 ta ulush (2 640 000 so‘m) kiritilganda: 16 oy ichida 2 640 000 so‘m sof foyda + 17-oyda 2 640 000 so‘m boshlang‘ich sarmoya qaytariladi.
              </p>
            </div>

            <button
              onClick={onOpenContract}
              className="w-full sm:w-auto gold-btn px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 shadow-xl cursor-pointer shrink-0"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>{t.guarantees.previewBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

