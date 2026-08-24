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
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full shimmer-badge border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-sm backdrop-blur-xl bg-blue-50/80">
            <Award className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="tracking-wide">{t.hero.badge}</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-display tracking-tight leading-[1.08] mb-6 text-slate-900">
            <span className="block text-slate-600 font-light text-lg sm:text-2xl lg:text-3xl mb-3 tracking-normal">
              "{t.hero.companyName}" <span className="text-blue-600 font-extrabold">{t.hero.companyType}</span>
            </span>
            <span className="blue-gradient-text">
              Qashqadaryoda zamonaviy taksi tizimining bir qismiga aylaning
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 font-normal px-2">
            “O‘rgimchak Taksi” — viloyat tumanlari o‘rtasida taksi xizmatlarini avtomatlashtirish va rivojlantirishga qaratilgan zamonaviy Taxi Park loyihasi.
          </p>

          {/* Highlight Badge Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-4 rounded-3xl bg-white border border-blue-200 shadow-xl mb-8 sm:mb-10">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Boshlang‘ich sarmoya</span>
                <span className="text-xl sm:text-2xl font-black text-blue-700 font-mono">2 640 000 so‘m</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-slate-200" />

            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Loyiha ulushi</span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">0.1% ulush</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onScrollToCalculator}
              className="w-full sm:w-auto blue-btn px-8 py-4 rounded-2xl flex items-center justify-center gap-3 text-sm sm:text-base cursor-pointer shadow-xl text-white"
            >
              <Calculator className="w-5 h-5 text-white shrink-0" />
              <span>Sarmoya imkoniyatini ko‘rish</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto white-btn px-7 py-4 rounded-2xl flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold cursor-pointer shadow-md"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Bog‘lanish →</span>
            </button>

            <a
              href="https://t.me/afrod991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Telegram @afrod991</span>
            </a>
          </div>
        </div>

        {/* Large Crystal-Clear Taxi Park Visual Showcase */}
        <div className="relative max-w-5xl mx-auto mt-6 rounded-3xl overflow-hidden border border-blue-200 shadow-2xl bg-white p-2 sm:p-3 group">
          <div className="relative h-64 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=2000&q=95"
              alt="O'rgimchak Taksi Floti"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105 brightness-100"
            />
            {/* Subtle Gradient for Overlaid Stats */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            {/* Top Left Floating Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-200 shadow-xl flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                🚕
              </div>
              <div>
                <span className="text-xs font-black text-slate-900 block">O‘RGIMCHAK TAKSI PARK</span>
                <span className="text-[10px] text-blue-600 font-semibold">Qashqadaryo viloyati bo'yicha</span>
              </div>
            </div>

            {/* Top Right Live Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>15 Ta Tuman Faol</span>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-4 text-white">
              <div>
                <span className="text-[11px] uppercase font-bold text-blue-300 block">Flot va dispecherlik</span>
                <h3 className="text-lg sm:text-2xl font-black text-white">Zamonaviy Avtopark & Mobil Tizim</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-center">
                  <span className="text-[10px] text-slate-300 block font-medium">Boshlang'ich</span>
                  <span className="text-sm sm:text-base font-black text-white font-mono">2,640,000 so'm</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-blue-600/90 backdrop-blur-md text-center">
                  <span className="text-[10px] text-blue-200 block font-medium">Kafolatlangan</span>
                  <span className="text-sm sm:text-base font-black text-white font-mono">+100% Daromad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


