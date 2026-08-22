import React from 'react';
import { Phone, Send, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface ContactSectionProps {
  t: TranslationsType;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t }) => {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <a
            href="tel:+998908714010"
            className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {t.contact.phoneLabel}
              </span>
              <div className="text-xl sm:text-2xl font-black text-white font-mono group-hover:text-amber-400 transition-colors">
                {t.contact.phone}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs text-amber-400 font-bold">
              <span>Qo'ng'iroq qilish</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          <a
            href="https://t.me/afrod991"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-sky-500/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                <Send className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {t.contact.telegramLabel}
              </span>
              <div className="text-xl sm:text-2xl font-black text-white font-mono group-hover:text-sky-400 transition-colors">
                {t.contact.telegram}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs text-sky-400 font-bold">
              <span>Telegramda yozish</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {t.contact.addressLabel}
              </span>
              <div className="text-base font-bold text-white">
                {t.contact.address}
              </div>
            </div>
            <div className="mt-6 text-xs text-slate-400 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>{t.contact.workHours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
