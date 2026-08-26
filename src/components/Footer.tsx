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
    <footer className="border-t border-white/10 bg-slate-950/90 backdrop-blur-xl pt-16 pb-12 text-slate-300 text-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                🕸
              </div>
              <span className="text-lg font-black text-white">O‘RGIMCHAK TAKSI</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[10px] font-bold">
                ZALATIYE LASTOCHKA MCHJ
              </span>
            </div>
            <p className="text-slate-300 max-w-md leading-relaxed text-xs">
              {t.footer.description}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">{t.contact.title}</span>
            <a href="tel:+998908714010" className="text-slate-200 font-mono hover:text-blue-400 block transition-colors font-bold">
              +998 (90) 871-40-10
            </a>
            <a href="https://t.me/afrod991" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-sky-400 block transition-colors font-bold">
              Telegram: @afrod991
            </a>
            <p className="text-slate-400">{t.contact.address}</p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">{t.guarantees.tag}</span>
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.guarantees.previewBtn}</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>{t.footer.copyright}</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 hover:border-blue-400 hover:bg-white/20 text-white hover:text-blue-300 transition-colors cursor-pointer"
          >
            <span>Top ↑</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

