import React from 'react';
import { ShieldCheck, FileCheck2, FileText, Receipt, Lock, Building2, FileSignature } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface LegalGuaranteesProps {
  t: TranslationsType;
  onOpenContract: () => void;
}

export const LegalGuarantees: React.FC<LegalGuaranteesProps> = ({ t, onOpenContract }) => {
  const legalCards = [
    {
      title: "Rasmiy Shartnoma",
      desc: "Har bir sarmoyador bilan 'ZALATIYE LASTOCHKA' MCHJ o'rtasida muhrlangan, yuridik kuchga ega rasmiy ikki tomonlama shartnoma tuziladi.",
      icon: FileText,
      tag: "Yuridik kuch",
    },
    {
      title: "Faktura-Vedomost",
      desc: "Har oy pul topshirish va qabul qilish vaqtida ikki tomonlama Faktura-Vedomost imzolanadi va barcha to'lovlar hujjatlashtiriladi.",
      icon: Receipt,
      tag: "Oylik hisobot",
    },
    {
      title: "Shaffof Jarayon",
      desc: "Daromad shakllanishi, buyurtmalar komissiyasi va mablag'lar harakati real iqtisodiy faoliyatga asoslangan bo'lib, to'liq shaffofdir.",
      icon: Lock,
      tag: "Shaffoflik",
    },
    {
      title: "ZALATIYE LASTOCHKA MCHJ",
      desc: "O'zbekiston Respublikasi qonunchiligiga muvofiq ro'yxatdan o'tgan rasmiy Mas'uliyati Cheklangan Jamiyat kafolati.",
      icon: Building2,
      tag: "Rasmiy MCHJ",
    },
  ];

  return (
    <section id="guarantees" className="py-20 md:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>{t.guarantees.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.guarantees.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400">
            {t.guarantees.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {legalCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="luxury-card p-6 sm:p-8 rounded-3xl flex items-start gap-5 group border border-white/10 hover:border-[#22C55E]/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0 group-hover:scale-110 group-hover:bg-[#22C55E] group-hover:text-slate-950 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFD21F] transition-colors">
                      {card.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                      {card.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contract Preview Callout */}
        <div className="w-full luxury-card-gold p-6 sm:p-10 rounded-3xl text-center space-y-4 relative overflow-hidden border border-[#FFD21F]/40 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-[#FFD21F]/20 border border-[#FFD21F]/40 text-[#FFD21F] flex items-center justify-center mx-auto mb-2 shadow-lg">
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
              className="gold-btn inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold shadow-xl cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>SHARTNOMA NAMUNASINI KO‘RISH</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

