import React from 'react';
import { ShieldAlert } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface DisclaimerProps {
  t: TranslationsType;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ t }) => {
  return (
    <section className="py-8 bg-[#070A0F] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1117]/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-slate-400 leading-relaxed shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-[#FFD21F]/10 border border-[#FFD21F]/20 flex items-center justify-center text-[#FFD21F] shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-slate-200 block mb-0.5">
              {t.legalDisclaimer?.title || "Muhim Huquqiy Ogohlantirish"}
            </span>
            <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed">
              {t.legalDisclaimer?.text || "Ushbu sahifadagi moliyaviy ma'lumotlar taqdim etilgan hamkorlik shartlariga asoslangan. Investitsiya kiritishdan oldin shartnoma, kompaniya hujjatlari, daromad modeli, xavflar va boshqa huquqiy shartlarni mustaqil ravishda o‘rganish tavsiya etiladi."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
