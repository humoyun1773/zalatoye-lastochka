import React from 'react';
import { Compass } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface RoadmapProps {
  t: TranslationsType;
}

export const Roadmap: React.FC<RoadmapProps> = ({ t }) => {
  return (
    <section className="py-20 md:py-28 relative bg-[#090d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.roadmap.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.roadmap.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {t.roadmap.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.roadmap.steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-black text-lg mb-6 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/80 pt-4 mt-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
