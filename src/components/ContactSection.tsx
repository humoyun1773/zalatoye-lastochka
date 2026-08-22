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
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Phone Card */}
          <a
            href="tel:+998908714010"
            className="luxury-card-gold p-7 sm:p-8 rounded-3xl group flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                {t.contact.phoneLabel}
              </span>
              <div className="text-xl sm:text-2xl font-black text-white font-mono group-hover:text-amber-300 transition-colors">
                {t.contact.phone}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-500/30 flex items-center justify-between text-xs text-amber-300 font-bold">
              <span>To'g'ridan-to'g'ri qo'ng'iroq</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Telegram Card */}
          <a
            href="https://t.me/afrod991"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-card p-7 sm:p-8 rounded-3xl group flex flex-col justify-between cursor-pointer border-sky-500/30 hover:border-sky-400"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-sky-500/20">
                <Send className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {t.contact.telegramLabel}
              </span>
              <div className="text-xl sm:text-2xl font-black text-white font-mono group-hover:text-sky-300 transition-colors">
                {t.contact.telegram}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-sky-400 font-bold">
              <span>Telegramda bog'lanish</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Location & Hours Card */}
          <div className="luxury-card p-7 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-500/20">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {t.contact.addressLabel}
              </span>
              <div className="text-base sm:text-lg font-bold text-white mb-2">
                {t.contact.address}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.contact.workHours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

