import React from 'react';
import { MapPin, Calendar, DollarSign, TrendingUp } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface TrustBarProps {
  t: TranslationsType;
}

export const TrustBar: React.FC<TrustBarProps> = ({ t }) => {
  const icons = [MapPin, Calendar, DollarSign, TrendingUp];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {t.trustBar.items.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl luxury-card border border-white/15 hover:border-white/30 shadow-xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="flex items-center justify-end mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-white tracking-tight group-hover:text-blue-300 transition-colors mb-1.5">
                  {item.val}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300">
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
