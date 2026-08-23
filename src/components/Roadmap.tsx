import React from 'react';
import { Compass, FileSignature, Cpu, TrendingUp, ShieldCheck } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface RoadmapProps {
  t: TranslationsType;
}

export const Roadmap: React.FC<RoadmapProps> = ({ t }) => {
  const stepIcons = [FileSignature, Cpu, TrendingUp, ShieldCheck];

  return (
    <section className="py-20 md:py-28 relative bg-slate-50/70 border-y border-slate-200/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.roadmap.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t.roadmap.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            {t.roadmap.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {t.roadmap.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={idx}
                className="luxury-card p-6 sm:p-7 rounded-3xl relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {idx === 3 ? 'Yakuniy Qadam' : `${idx + 1}-Bosqich`}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-4">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

