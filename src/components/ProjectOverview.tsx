import React from 'react';
import { 
  Users, 
  Cpu, 
  MapPin, 
  Car, 
  TrendingUp, 
  Smartphone 
} from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface ProjectOverviewProps {
  t: TranslationsType;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ t }) => {
  const icons = [MapPin, Users, Cpu, TrendingUp, Car, Smartphone];

  const cards = t.overview.cards || [];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Car className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.overview.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            🚗 {t.overview.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
            {t.overview.description}
          </p>
        </div>

        {/* 6 Key Project Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((pt, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl luxury-card border border-white/15 hover:border-blue-400 shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors leading-snug">
                    {pt.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span className="text-blue-300 font-mono font-bold bg-blue-500/20 px-2.5 py-1 rounded-lg border border-blue-400/30">
                    {pt.metric}
                  </span>
                  <span className="text-slate-300 font-medium">
                    {pt.metricLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


