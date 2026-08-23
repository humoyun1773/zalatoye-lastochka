import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface FooterProps {
  t: TranslationsType;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-12 text-slate-600 text-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 font-black text-xs shadow-sm">
                ZL
              </div>
              <span className="text-lg font-black text-slate-900">{t.footer.companyName}</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-bold">
                {t.footer.project}
              </span>
            </div>
            <p className="text-slate-600 max-w-md leading-relaxed text-xs">
              {t.footer.description}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Aloqa Markazi</span>
            <a href="tel:+998908714010" className="text-slate-700 font-mono hover:text-amber-600 block transition-colors font-bold">
              +998 (90) 871-40-10
            </a>
            <a href="https://t.me/afrod991" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-sky-600 block transition-colors font-bold">
              Telegram: @afrod991
            </a>
            <p className="text-slate-500">Qashqadaryo viloyati, Qarshi sh.</p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Yuridik Kafolat</span>
            <div className="flex items-center gap-2 text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Rasmiy Shartnoma</span>
            </div>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>{t.footer.copyright}</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:border-amber-400 text-slate-700 hover:text-amber-700 transition-colors cursor-pointer"
          >
            <span>Yuqoriga qaytish</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-600" />
          </button>
        </div>
      </div>
    </footer>
  );
};

