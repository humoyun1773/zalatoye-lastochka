import React from 'react';
import { ShieldCheck, FileCheck2, FileText, Receipt, Lock, Building2, FileSignature } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface LegalGuaranteesProps {
  t: TranslationsType;
  onOpenContract: () => void;
}

export const LegalGuarantees: React.FC<LegalGuaranteesProps> = ({ t, onOpenContract }) => {
  const icons = [FileText, Receipt, Lock, Building2];
  const points = t.guarantees.points || [];

  return (
    <section id="guarantees" className="py-20 md:py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.guarantees.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.guarantees.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200">
            {t.guarantees.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {points.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="luxury-card p-6 sm:p-8 rounded-3xl flex items-start gap-5 group border border-white/15 hover:border-emerald-400 transition-all duration-300 relative overflow-hidden shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contract Preview Callout */}
        <div className="w-full luxury-card-blue p-6 sm:p-10 rounded-3xl text-center space-y-4 relative overflow-hidden border border-blue-400/40 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center mx-auto mb-2 shadow-sm">
            <FileSignature className="w-7 h-7" />
          </div>
          <h3 className="text-xl sm:text-3xl font-black text-white">
            {t.guarantees.previewBtn}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
            {t.guarantees.subtitle}
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContract}
              className="blue-btn inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold shadow-xl cursor-pointer text-white"
            >
              <FileCheck2 className="w-4 h-4 text-white" />
              <span>{t.guarantees.previewBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

