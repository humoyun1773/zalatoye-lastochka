import React from 'react';
import { MapPin, Car, Smartphone, TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface WhySpiderTaxiProps {
  t: TranslationsType;
}

export const WhySpiderTaxi: React.FC<WhySpiderTaxiProps> = ({ t }) => {
  const iconMap: Record<string, React.ElementType> = {
    MapPin,
    Car,
    Smartphone,
    TrendingUp,
    Users,
    Zap,
  };

  return (
    <section id="why" className="py-20 md:py-28 relative bg-[#0D1117]/60 border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFD21F]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/30 text-[#FFD21F] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span>{t.why.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.why.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400">
            {t.why.subtitle}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {t.why.cards.map((card, idx) => {
            const Icon = iconMap[card.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="luxury-card p-6 sm:p-8 rounded-3xl relative group flex flex-col justify-between overflow-hidden border border-white/10 hover:border-[#FFD21F]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/10 border border-[#FFD21F]/25 flex items-center justify-center text-[#FFD21F] group-hover:scale-110 group-hover:bg-[#FFD21F] group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white mb-2.5 group-hover:text-[#FFD21F] transition-colors">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
