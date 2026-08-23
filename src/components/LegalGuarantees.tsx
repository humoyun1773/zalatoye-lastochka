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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.guarantees.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t.guarantees.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            {t.guarantees.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {legalCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="luxury-card bg-white p-6 sm:p-8 rounded-3xl flex items-start gap-5 group border border-slate-200 hover:border-emerald-500 transition-all duration-300 relative overflow-hidden shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                      {card.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contract Preview Callout */}
        <div className="w-full luxury-card-blue p-6 sm:p-10 rounded-3xl text-center space-y-4 relative overflow-hidden border border-blue-200 shadow-xl bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/50">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 text-blue-700 flex items-center justify-center mx-auto mb-2 shadow-sm">
            <FileSignature className="w-7 h-7" />
          </div>
          <h3 className="text-xl sm:text-3xl font-black text-slate-900">
            Rasmiy Ikki Tomonlama Shartnoma Namunasi
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            "ZALATIYE LASTOCHKA" MCHJ bilan tuziladigan to'liq yuridik shartnoma bandlari, huquq va majburiyatlar bilan tanishing.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContract}
              className="blue-btn inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold shadow-xl cursor-pointer text-white"
            >
              <FileCheck2 className="w-4 h-4 text-white" />
              <span>SHARTNOMA NAMUNASINI KO‘RISH</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

