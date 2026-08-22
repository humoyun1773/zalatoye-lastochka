import React from 'react';
import { Phone, Send } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {/* Telegram Floating Button */}
      <a
        href="https://t.me/afrod991"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-2xl bg-[#0088cc] hover:bg-sky-400 text-white hover:text-slate-950 flex items-center justify-center shadow-2xl shadow-sky-500/40 hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        title="Telegram: @afrod991"
      >
        <span className="absolute right-14 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-bold text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Telegram @afrod991
        </span>
        <Send className="w-5 h-5" />
      </a>

      {/* Phone Call Floating Button */}
      <a
        href="tel:+998908714010"
        className="w-12 h-12 rounded-2xl gold-btn text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/40 hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        title="Qo'ng'iroq: +998 (90) 871-40-10"
      >
        <span className="absolute right-14 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-bold text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          +998 (90) 871-40-10
        </span>
        <span className="relative flex h-3 w-3 absolute -top-1 -right-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <Phone className="w-5 h-5 fill-slate-950" />
      </a>
    </div>
  );
};

