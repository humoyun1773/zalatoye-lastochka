import React from 'react';
import { TrendingUp, ShieldCheck, Zap, ArrowRight, Calculator, Send, CheckCircle2, Award } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface HeroProps {
  t: TranslationsType;
  onScrollToCalculator: () => void;
  onScrollToForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onScrollToCalculator, onScrollToForm }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-8 shadow-lg shadow-amber-500/10 backdrop-blur-md">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.hero.badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            <span className="block text-slate-100 font-light text-2xl sm:text-3xl lg:text-4xl mb-2">
              "{t.hero.companyName}" {t.hero.companyType}
            </span>
            <span className="gold-gradient-text">
              {t.hero.title}
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={onScrollToCalculator}
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Calculator className="w-5 h-5 fill-slate-950" />
              <span>{t.hero.buttons.calculate}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://t.me/afrod991"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 text-sky-400 font-bold text-sm sm:text-base shadow-lg transition-all duration-200"
            >
              <Send className="w-5 h-5 text-sky-400" />
              <span>{t.hero.buttons.telegram}</span>
            </a>

            <button
              onClick={onScrollToForm}
              className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-amber-500/30 text-amber-300 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>{t.nav.cta}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/10 transition-colors" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t.hero.stats.minInvestLabel}
              </span>
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-amber-400 transition-colors">
              {t.hero.stats.minInvest}
            </div>
            <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
              <span className="text-amber-400 font-semibold">0.1%</span> ulush qiymati
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl group-hover:bg-sky-500/10 transition-colors" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t.hero.stats.termLabel}
              </span>
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-sky-400 transition-colors">
              {t.hero.stats.term}
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Muntazam oylik daromad oqimi
            </div>
          </div>

          <div className="glass-panel-gold p-6 rounded-3xl relative overflow-hidden group hover:border-amber-400/60 transition-all duration-300 gold-glow">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-xl" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                {t.hero.stats.profitLabel}
              </span>
              <div className="w-8 h-8 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-300">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono tracking-tight">
              +2,640,000 so'm
            </div>
            <div className="mt-2 text-xs text-amber-200/90 font-medium">
              100% kafolatlangan sof foyda
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-colors" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t.hero.stats.refundLabel}
              </span>
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tracking-tight">
              {t.hero.stats.refund}
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Boshlang'ich sarmoya to'liq qaytadi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
