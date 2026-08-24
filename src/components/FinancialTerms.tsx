import React from 'react';
import { DollarSign, Clock, TrendingUp, RefreshCw, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface FinancialTermsProps {
  t: TranslationsType;
  onOpenContract: () => void;
}

export const FinancialTerms: React.FC<FinancialTermsProps> = ({ t, onOpenContract }) => {
  return (
    <section id="terms" className="py-20 md:py-28 relative bg-transparent border-y border-slate-200/80 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <DollarSign className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.terms.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            💰 Sizning sarmoyangiz qanday ishlaydi?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            {t.terms.subtitle}
          </p>
        </div>

        {/* Big Premium Breakdown Master Card */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl mb-10 overflow-hidden relative bg-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
            {/* Step 1: Sarmoya */}
            <div className="flex flex-col justify-between p-2 lg:px-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">01 / QADAM</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Boshlang‘ich Sarmoya
                </span>
                <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 mb-2">
                  2 640 000 so‘m
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                1 ta ulush qiymati (loyiha umumiy fondining 0.1% ulushiga tenglashtiriladi).
              </p>
            </div>

            {/* Step 2: Shartnoma muddati */}
            <div className="flex flex-col justify-between p-2 lg:px-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">02 / MUDDAT</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Shartnoma Davomiyligi
                </span>
                <div className="text-2xl sm:text-3xl font-black font-mono text-sky-600 mb-2">
                  16 oy
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Har oy muntazam sof foyda taqsimoti va ikki tomonlama vedomost imzolash davri.
              </p>
            </div>

            {/* Step 3: Sof Daromad */}
            <div className="flex flex-col justify-between p-2 lg:px-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-700">03 / FOYDA</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                  Ko‘rsatilgan Sof Daromad
                </span>
                <div className="text-2xl sm:text-3xl font-black font-mono text-blue-700 mb-2">
                  2 640 000 so‘m
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                16 oy davomida to‘liq hajmda kiritilgan sarmoyaga teng (+100%) sof daromad to‘lanadi.
              </p>
            </div>

            {/* Step 4: Sarmoyani Qaytarish */}
            <div className="flex flex-col justify-between p-2 lg:px-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700">04 / QAYTARISH</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Sarmoyani Qaytarish
                </span>
                <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600 mb-2">
                  17-oy (100%)
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                17-oyda 2 640 000 so‘m boshlang‘ich sarmoya to‘liq hajmda qaytarilishi ko‘zda tutilgan.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Summary Banner */}
        <div className="luxury-card-blue p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-blue-200 shadow-xl bg-gradient-to-r from-blue-50/80 via-white to-blue-50/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-700 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.terms.summaryTotal}</span>
              </div>
              <div className="text-2xl sm:text-4xl font-black font-mono text-slate-900">
                5 280 000 so‘m <span className="text-blue-600 text-xl sm:text-2xl">(200% umumiy tushum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                1 ta ulush (2 640 000 so‘m) kiritilganda: 16 oy ichida 2 640 000 so‘m sof foyda + 17-oyda 2 640 000 so‘m boshlang‘ich sarmoya qaytariladi.
              </p>
            </div>

            <button
              onClick={onOpenContract}
              className="w-full sm:w-auto blue-btn px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 shadow-xl cursor-pointer shrink-0 text-white"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>{t.guarantees.previewBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

