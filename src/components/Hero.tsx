import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Calculator, 
  Send, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Car, 
  Activity, 
  Layers
} from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface HeroProps {
  t: TranslationsType;
  onScrollToCalculator: () => void;
  onScrollToForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onScrollToCalculator, onScrollToForm }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Dynamic Animated Ambient Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] lg:w-[950px] h-[350px] sm:h-[600px] bg-amber-500/12 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-0 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-24 right-0 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          {/* Official Shimmer Verification Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full shimmer-badge border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-xl shadow-amber-500/10 backdrop-blur-xl">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="tracking-wide">{t.hero.badge}</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-display tracking-tight leading-[1.08] mb-6">
            <span className="block text-slate-200 font-light text-xl sm:text-3xl lg:text-4xl mb-3 tracking-normal">
              "{t.hero.companyName}" <span className="text-amber-400 font-extrabold">{t.hero.companyType}</span>
            </span>
            <span className="gold-gradient-text">
              {t.hero.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-xl text-slate-300/95 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 font-normal px-2">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12 sm:mb-16">
            <button
              onClick={onScrollToCalculator}
              className="w-full sm:w-auto gold-btn px-8 py-4 rounded-2xl flex items-center justify-center gap-3 text-sm sm:text-base cursor-pointer"
            >
              <Calculator className="w-5 h-5 fill-slate-950 shrink-0" />
              <span>{t.hero.buttons.calculate}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <a
              href="https://t.me/afrod991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto dark-glass-btn px-7 py-4 rounded-2xl flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-sky-400 hover:border-sky-400 cursor-pointer"
            >
              <Send className="w-5 h-5 text-sky-400 shrink-0" />
              <span>{t.hero.buttons.telegram}</span>
            </a>

            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto dark-glass-btn px-7 py-4 rounded-2xl flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-amber-300 hover:border-amber-400 cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{t.nav.cta}</span>
            </button>
          </div>
        </div>

        {/* Hero Interactive Visual Showcase & 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          {/* Left Hero Feature Showcase Card (Lg: Col 7) */}
          <div className="lg:col-span-7 luxury-card-gold p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>AVTOMATLASHTIRILGAN TAKSI PARKI</span>
                </div>
                <span className="text-xs font-mono text-slate-400">Qashqadaryo 15/15</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                "O'rgimchak Taksi" Dispecherlik & Flot Tizimi
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Qashqadaryoning barcha 15 ta tumanlari o'rtasida taksi qatnovlarini boshqaruvchi markazlashgan tizim. Har bir qatnovdan komissiya olinib, sarmoyadorlarga oylik kafolatlangan sof foyda sifatida to'lab beriladi.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-amber-500/30">
              <div className="p-3 rounded-2xl bg-[#090e1c]/80 border border-slate-800">
                <span className="block text-[10px] uppercase font-bold text-slate-400">1 Ulush Narxi</span>
                <span className="text-sm sm:text-base font-black text-amber-400 font-mono">2.64 mln</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#090e1c]/80 border border-slate-800">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Sof Foyda</span>
                <span className="text-sm sm:text-base font-black text-emerald-400 font-mono">+100%</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#090e1c]/80 border border-slate-800">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Sarmoya Qaytishi</span>
                <span className="text-sm sm:text-base font-black text-sky-400 font-mono">17-oy (100%)</span>
              </div>
            </div>
          </div>

          {/* Right 2 Stacked Metrics (Lg: Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1: 100% Kafolat */}
            <div className="luxury-card-emerald p-6 rounded-3xl flex-1 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase">
                  Yuridik Kafolat
                </span>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Rasmiy 2 Tomonlama Shartnoma
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Har oy beriladigan mablag'lar bo'yicha Faktura-Vedomost imzolanadi va boshlang'ich sarmoyangiz 17-oyda 100% to'liq qaytariladi.
                </p>
              </div>
            </div>

            {/* Card 2: 15 Tuman Qamrovi */}
            <div className="luxury-card p-6 rounded-3xl flex-1 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 text-[10px] font-black uppercase">
                  15/15 Qamrov
                </span>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Viloyat Bo'ylab Kengaytirilgan Flot
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Qarshi, Shahrisabz, Kitob, Koson, G'uzor va barcha tumanlarda yuzlab haydovchilar bilan real qatnovlar oqimi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="luxury-card p-5 rounded-2xl flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Minimal Sarmoya</span>
              <span className="text-lg font-black text-white font-mono">2,640,000 so'm</span>
            </div>
          </div>

          <div className="luxury-card p-5 rounded-2xl flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Shartnoma Muddati</span>
              <span className="text-lg font-black text-white font-mono">16 Oylik Reja</span>
            </div>
          </div>

          <div className="luxury-card-gold p-5 rounded-2xl flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-400/25 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">Kafolatlangan Sof Foyda</span>
              <span className="text-lg font-black text-amber-300 font-mono">+2,640,000 so'm</span>
            </div>
          </div>

          <div className="luxury-card-emerald p-5 rounded-2xl flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">17-Oyda Sarmoya Qaytishi</span>
              <span className="text-lg font-black text-emerald-400 font-mono">100% To'liq Qaytariladi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


