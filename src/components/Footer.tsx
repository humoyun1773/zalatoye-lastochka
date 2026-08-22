import React from 'react';
import { ShieldCheck } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface FooterProps {
  t: TranslationsType;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#060911] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-white">{t.footer.companyName}</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold">
                {t.footer.project}
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-xs">
              {t.footer.description}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Aloqa</span>
            <p className="text-slate-300 font-mono">+998 (90) 871-40-10</p>
            <p className="text-slate-300">Telegram: @afrod991</p>
            <p className="text-slate-400">Qashqadaryo viloyati, Qarshi sh.</p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Kafolat</span>
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Yuridik Shartnoma</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-normal">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>{t.footer.copyright}</p>
          <p className="flex items-center gap-1">
            "ZALATIYE LASTOCHKA" MCHJ & O'rgimchak Taksi Park
          </p>
        </div>
      </div>
    </footer>
  );
};
