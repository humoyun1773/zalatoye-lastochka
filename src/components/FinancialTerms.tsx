import React from 'react';
import { DollarSign, Clock, TrendingUp, RefreshCw, FileText, CheckCircle } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface FinancialTermsProps {
  t: TranslationsType;
  onOpenContract: () => void;
}

export const FinancialTerms: React.FC<FinancialTermsProps> = ({ t, onOpenContract }) => {
  const icons = [DollarSign, Clock, TrendingUp, RefreshCw];

  return (
    <section id="terms" className="py-20 md:py-28 relative bg-[#090d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            <span>{t.terms.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.terms.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {t.terms.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.terms.cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  card.highlight
                    ? 'glass-panel-gold border-amber-400/50 shadow-lg shadow-amber-500/10'
                    : 'glass-panel border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {card.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight mb-3">
                    {card.value}
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                  {card.sub}
                </p>
              </div>
            );
          })}
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-amber-500/40 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-amber-400 text-sm font-bold">
                <CheckCircle className="w-4 h-4" />
                <span>{t.terms.summaryTotal}</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono gold-gradient-text">
                {t.terms.summaryTotalVal}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                {t.terms.summaryDesc}
              </p>
            </div>

            <button
              onClick={onOpenContract}
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 hover:border-amber-400 text-amber-300 text-sm font-bold flex items-center gap-2.5 transition-all shadow-lg cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>{t.guarantees.previewBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
