import React from 'react';
import { Phone, Send } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://t.me/afrod991"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-sky-500/50 hover:scale-110 active:scale-95 transition-all"
        title="Telegram: @afrod991"
      >
        <Send className="w-5 h-5" />
      </a>

      <a
        href="tel:+998908714010"
        className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 hover:scale-110 active:scale-95 transition-all"
        title="Qo'ng'iroq: +998 (90) 871-40-10"
      >
        <Phone className="w-5 h-5 fill-slate-950" />
      </a>
    </div>
  );
};
