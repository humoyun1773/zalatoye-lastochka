import React from 'react';
import { Phone, Send, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface ContactSectionProps {
  t: TranslationsType;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t }) => {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Phone Card */}
          <a
            href="tel:+998908714010"
            className="luxury-card bg-white p-7 sm:p-8 rounded-3xl group flex flex-col justify-between cursor-pointer border border-slate-200 hover:border-blue-500 shadow-sm transition-all"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                {t.contact.phoneLabel}
              </span>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono group-hover:text-blue-600 transition-colors">
                {t.contact.phone}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-bold">
              <span>To'g'ridan-to'g'ri qo'ng'iroq</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Telegram Card */}
          <a
            href="https://t.me/afrod991"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-card bg-white p-7 sm:p-8 rounded-3xl group flex flex-col justify-between cursor-pointer border border-slate-200 hover:border-sky-500 shadow-sm transition-all"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm">
                <Send className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                {t.contact.telegramLabel}
              </span>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono group-hover:text-sky-600 transition-colors">
                {t.contact.telegram}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-sky-600 font-bold">
              <span>Telegramda bog'lanish</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Location & Hours Card */}
          <div className="luxury-card bg-white p-7 sm:p-8 rounded-3xl flex flex-col justify-between shadow-sm border border-slate-200">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                {t.contact.addressLabel}
              </span>
              <div className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {t.contact.address}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-600 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.contact.workHours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

