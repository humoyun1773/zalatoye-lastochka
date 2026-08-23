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
    <footer className="border-t border-white/10 bg-[#070A0F] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FFD21F] flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
                🕸
              </div>
              <span className="text-lg font-black text-white">O‘RGIMCHAK TAKSI</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FFD21F]/15 border border-[#FFD21F]/30 text-[#FFD21F] text-[10px] font-bold">
                ZALATIYE LASTOCHKA MCHJ
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-xs">
              {t.footer.description}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Aloqa Markazi</span>
            <a href="tel:+998908714010" className="text-slate-300 font-mono hover:text-[#FFD21F] block transition-colors font-bold">
              +998 (90) 871-40-10
            </a>
            <a href="https://t.me/afrod991" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 block transition-colors font-bold">
              Telegram: @afrod991
            </a>
            <p className="text-slate-500">Qashqadaryo viloyati, Qarshi sh.</p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Yuridik Kafolat</span>
            <div className="flex items-center gap-2 text-[#22C55E] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
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
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#111820] border border-white/10 hover:border-[#FFD21F]/50 text-slate-300 hover:text-[#FFD21F] transition-colors cursor-pointer"
          >
            <span>Yuqoriga qaytish</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FFD21F]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

