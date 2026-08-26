import React from 'react';
import { 
  ArrowRight, 
  Calculator, 
  Send, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Activity 
} from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface HeroProps {
  t: TranslationsType;
  onScrollToCalculator: () => void;
  onScrollToForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onScrollToCalculator, onScrollToForm }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-transparent">
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] lg:w-[1000px] h-[350px] sm:h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-0 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Official Shimmer Verification Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full shimmer-badge border border-blue-400/40 text-blue-200 text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-lg backdrop-blur-xl bg-blue-950/70">
            <Award className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="tracking-wide text-white">{t.hero.badge}</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-display tracking-tight leading-[1.08] mb-6 text-white">
            <span className="block text-slate-300 font-light text-lg sm:text-2xl lg:text-3xl mb-3 tracking-normal">
              "{t.hero.companyName}" <span className="text-blue-400 font-extrabold">{t.hero.companyType}</span>
            </span>
            <span className="blue-gradient-text">
              {t.hero.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 font-normal px-2">
            {t.hero.subtitle}
          </p>

          {/* Highlight Badge Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-4 rounded-3xl bg-slate-900/85 backdrop-blur-xl border border-white/20 shadow-2xl mb-8 sm:mb-10 text-white">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  {t.hero.stats.minInvestLabel}
                </span>
                <span className="text-xl sm:text-2xl font-black text-blue-400 font-mono">
                  {t.hero.stats.minInvest}
                </span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/20" />

            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  {t.hero.stats.profitLabel}
                </span>
                <span className="text-xl sm:text-2xl font-black text-white font-mono">
                  {t.hero.stats.profit} <span className="text-emerald-400">(+100%)</span>
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onScrollToCalculator}
              className="w-full sm:w-auto blue-btn px-8 py-4 rounded-2xl flex items-center justify-center gap-3 text-sm sm:text-base cursor-pointer shadow-xl text-white font-bold"
            >
              <Calculator className="w-5 h-5 text-white shrink-0" />
              <span>{t.hero.buttons.calculate}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto white-btn px-7 py-4 rounded-2xl flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold cursor-pointer shadow-md text-white"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-white">{t.nav.cta} →</span>
            </button>

            <a
              href="https://t.me/afrod991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-200 hover:text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md backdrop-blur-md"
            >
              <Send className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{t.hero.buttons.telegram}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


