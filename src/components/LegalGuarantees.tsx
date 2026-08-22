import React from 'react';
import { ShieldCheck, FileCheck2, CheckCircle2, FileSignature } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface LegalGuaranteesProps {
  t: TranslationsType;
  onOpenContract: () => void;
}

export const LegalGuarantees: React.FC<LegalGuaranteesProps> = ({ t, onOpenContract }) => {
  return (
    <section id="guarantees" className="py-20 md:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.guarantees.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.guarantees.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300">
            {t.guarantees.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {t.guarantees.points.map((point, idx) => (
            <div
              key={idx}
              className="luxury-card-emerald p-6 sm:p-8 rounded-3xl flex items-start gap-5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contract Preview Callout */}
        <div className="w-full luxury-card-gold p-6 sm:p-10 rounded-3xl text-center space-y-4 relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center mx-auto mb-2 shadow-lg shadow-amber-500/20">
            <FileSignature className="w-7 h-7" />
          </div>
          <h3 className="text-xl sm:text-3xl font-black text-white">
            Rasmiy Ikki Tomonlama Shartnoma Namunasi
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            "ZALATIYE LASTOCHKA" MCHJ bilan tuziladigan to'liq yuridik shartnoma bandlari, huquq va majburiyatlar bilan tanishing.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContract}
              className="gold-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-xs sm:text-sm cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>{t.guarantees.previewBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

