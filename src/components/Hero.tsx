import React from 'react';
import { TrendingUp, ShieldCheck, Zap, ArrowRight, Calculator, Send, CheckCircle2, Award, Sparkles } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface HeroProps {
  t: TranslationsType;
  onScrollToCalculator: () => void;
  onScrollToForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onScrollToCalculator, onScrollToForm }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background Ambient Radiant Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[750px] h-[350px] sm:h-[600px] bg-amber-500/15 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-4 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-4 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle Geometric Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Official Verification Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-lg shadow-amber-500/10 backdrop-blur-md">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate">{t.hero.badge}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          </div>

          {/* Main Title & Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
            <span className="block text-slate-200 font-normal text-xl sm:text-3xl lg:text-4xl mb-2">
              "{t.hero.companyName}" <span className="text-amber-400 font-extrabold">{t.hero.companyType}</span>
            </span>
            <span className="gold-gradient-text">
              {t.hero.title}
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 font-normal px-2">
            {t.hero.subtitle}
          </p>

          {/* Responsive Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-20">
            <button
              onClick={onScrollToCalculator}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Calculator className="w-5 h-5 fill-slate-950 shrink-0" />
              <span>{t.hero.buttons.calculate}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <a
              href="https://t.me/afrod991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#0d1322] hover:bg-slate-800 border border-sky-500/40 hover:border-sky-400 text-sky-400 font-bold text-sm sm:text-base shadow-lg transition-all duration-200"
            >
              <Send className="w-5 h-5 text-sky-400 shrink-0" />
              <span>{t.hero.buttons.telegram}</span>
            </a>

            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#0d1322] hover:bg-slate-800 border border-amber-500/30 text-amber-300 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{t.nav.cta}</span>
            </button>
          </div>
        </div>

        {/* 4 Main Stat Cards (Responsive 1-col on mobile, 2-col on tablet, 4-col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Card 1: Boshlang'ich sarmoya */}
          <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-colors" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.hero.stats.minInvestLabel}
                </span>
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Zap className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-amber-300 transition-colors">
                {t.hero.stats.minInvest}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold font-mono">0.1%</span>
              <span>1 ta ulush qiymati</span>
            </div>
          </div>

          {/* Card 2: Muddati */}
          <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-colors" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.hero.stats.termLabel}
                </span>
                <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-sky-300 transition-colors">
                {t.hero.stats.term}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
              Muntazam oylik daromad to'lovi
            </div>
          </div>

          {/* Card 3: Sof foyda (Gold Highlighted) */}
          <div className="glass-panel-gold p-6 rounded-3xl relative overflow-hidden group hover:border-amber-400/80 transition-all duration-300 gold-glow flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-400/15 rounded-full blur-xl" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {t.hero.stats.profitLabel}
                </span>
                <div className="w-9 h-9 rounded-xl bg-amber-400/25 border border-amber-400/40 flex items-center justify-center text-amber-300">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono tracking-tight">
                +2,640,000 so'm
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-500/30 text-xs text-amber-200/90 font-semibold">
              100% kafolatlangan sof foyda
            </div>
          </div>

          {/* Card 4: Sarmoya qaytishi (Emerald Highlighted) */}
          <div className="glass-panel-emerald p-6 rounded-3xl relative overflow-hidden group hover:border-emerald-400/80 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-colors" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  {t.hero.stats.refundLabel}
                </span>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tracking-tight">
                {t.hero.stats.refund}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-500/30 text-xs text-emerald-300/80">
              Boshlang'ich sarmoya 100% qaytadi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

