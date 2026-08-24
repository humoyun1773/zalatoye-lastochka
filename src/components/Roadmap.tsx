import React from 'react';
import { Compass, FileSignature, Cpu, TrendingUp, ShieldCheck } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface RoadmapProps {
  t: TranslationsType;
}

export const Roadmap: React.FC<RoadmapProps> = ({ t }) => {
  const stepIcons = [FileSignature, Cpu, TrendingUp, ShieldCheck];

  const stepsData = t.roadmap.steps || [];

  return (
    <section className="py-20 md:py-28 relative bg-transparent border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
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
          {stepsData.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={idx}
                className="luxury-card bg-white p-6 sm:p-7 rounded-3xl relative group flex flex-col justify-between border border-slate-200 hover:border-blue-500 shadow-md transition-all duration-300 overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
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

