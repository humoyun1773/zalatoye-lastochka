import React from 'react';
import { MapPin, Users, Cpu, Coins } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface ProjectOverviewProps {
  t: TranslationsType;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ t }) => {
  const icons = [MapPin, Users, Cpu, Coins];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.overview.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.overview.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.overview.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.overview.cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/5 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono block">
                      {card.metric}
                    </span>
                    <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                      {card.metricLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
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
