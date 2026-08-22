import React from 'react';
import { MapPin, Users, Cpu, Coins, CheckCircle2 } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface ProjectOverviewProps {
  t: TranslationsType;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ t }) => {
  const icons = [MapPin, Users, Cpu, Coins];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.overview.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.overview.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            {t.overview.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.overview.cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="luxury-card p-6 sm:p-8 rounded-3xl relative group overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/5 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/10">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono block tracking-tight">
                        {card.metric}
                      </span>
                      <span className="text-[10px] sm:text-[11px] uppercase font-extrabold text-slate-400 tracking-wider">
                        {card.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-400/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Avtomatlashtirilgan jarayon</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

