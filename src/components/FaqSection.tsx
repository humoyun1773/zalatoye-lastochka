import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface FaqSectionProps {
  t: TranslationsType;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#060a14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'luxury-card-gold border-amber-400/60 shadow-xl shadow-amber-500/10'
                    : 'luxury-card hover:border-amber-500/40'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-amber-300' : 'text-white'}`}>
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-900 text-amber-400 border border-slate-800'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-amber-500/20">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

