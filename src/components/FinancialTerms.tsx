import React from 'react';
import { DollarSign, Clock, TrendingUp, RefreshCw, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface FinancialTermsProps {
  t: TranslationsType;
  onOpenContract: () => void;
}

export const FinancialTerms: React.FC<FinancialTermsProps> = ({ t, onOpenContract }) => {
  const icons = [DollarSign, Clock, TrendingUp, RefreshCw];

  return (
    <section id="terms" className="py-20 md:py-28 relative bg-slate-50/70 border-y border-slate-200/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <DollarSign className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.terms.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t.terms.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            {t.terms.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {t.terms.cards.map((card, idx) => {
            const Icon = icons[idx];
            const isGold = card.highlight;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                  isGold
                    ? 'luxury-card-gold gold-glow'
                    : idx === 3
                    ? 'luxury-card-emerald'
                    : 'luxury-card'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isGold
                          ? 'bg-amber-100 border border-amber-300 text-amber-700'
                          : idx === 3
                          ? 'bg-emerald-100 border border-emerald-300 text-emerald-700'
                          : 'bg-amber-50 border border-amber-200 text-amber-600'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">0{idx + 1}</span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    {card.label}
                  </span>
                  <div
                    className={`text-2xl sm:text-3xl font-black font-mono tracking-tight mb-3 ${
                      isGold
                        ? 'text-amber-700'
                        : idx === 3
                        ? 'text-emerald-700'
                        : 'text-slate-900'
                    }`}
                  >
                    {card.value}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 mt-2">
                  {card.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Summary Banner */}
        <div className="luxury-card-gold p-6 sm:p-8 rounded-3xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-amber-700 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.terms.summaryTotal}</span>
              </div>
              <div className="text-2xl sm:text-4xl font-black font-mono gold-gradient-text">
                {t.terms.summaryTotalVal}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                {t.terms.summaryDesc}
              </p>
            </div>

            <button
              onClick={onOpenContract}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer shrink-0"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>{t.guarantees.previewBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

