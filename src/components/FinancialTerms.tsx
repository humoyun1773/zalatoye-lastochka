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
    <section id="terms" className="py-20 md:py-28 relative bg-transparent border-y border-slate-200/80 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <DollarSign className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.terms.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            💰 {t.terms.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200">
            {t.terms.subtitle}
          </p>
        </div>

        {/* Big Premium Breakdown Master Card */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {t.terms.cards.map((card, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div key={idx} className="flex flex-col justify-between p-2 lg:px-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        card.highlight ? 'bg-blue-500/30 border border-blue-400/50 text-blue-300' : 'bg-blue-500/20 border border-blue-400/30 text-blue-400'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1">
                      {card.label}
                    </span>
                    <div className={`text-2xl sm:text-3xl font-black font-mono mb-2 ${
                      card.highlight ? 'text-blue-300' : 'text-white'
                    }`}>
                      {card.value}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                    {card.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlight Summary Banner */}
        <div className="luxury-card-blue p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-blue-400/40 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.terms.summaryTotal}</span>
              </div>
              <div className="text-2xl sm:text-4xl font-black font-mono text-white">
                {t.terms.summaryTotalVal}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl">
                {t.terms.summaryDesc}
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

