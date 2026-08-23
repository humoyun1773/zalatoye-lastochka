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
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
      {/* Background Cinematic Realistic Image with Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity filter brightness-75 scale-105 pointer-events-none -z-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=2000&q=85')"
        }}
      />

      {/* Dark Multi-layer Gradient Overlays for High Contrast Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A0F]/90 via-[#070A0F]/80 to-[#070A0F] pointer-events-none -z-15" />
      <div className="absolute inset-0 bg-radial at-center from-transparent via-[#070A0F]/70 to-[#070A0F] pointer-events-none -z-15" />

      {/* Dynamic Animated Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] lg:w-[1000px] h-[350px] sm:h-[600px] bg-[#FFD21F]/10 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-0 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Official Shimmer Verification Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full shimmer-badge border border-[#FFD21F]/40 text-[#FFD21F] text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-lg backdrop-blur-xl">
            <Award className="w-4 h-4 text-[#FFD21F] shrink-0" />
            <span className="tracking-wide">{t.hero.badge}</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-display tracking-tight leading-[1.08] mb-6">
            <span className="block text-slate-300 font-light text-lg sm:text-2xl lg:text-3xl mb-3 tracking-normal">
              "{t.hero.companyName}" <span className="text-[#FFD21F] font-extrabold">{t.hero.companyType}</span>
            </span>
            <span className="gold-gradient-text">
              Qashqadaryoda zamonaviy taksi tizimining bir qismiga aylaning
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 font-normal px-2">
            “O‘rgimchak Taksi” — viloyat tumanlari o‘rtasida taksi xizmatlarini avtomatlashtirish va rivojlantirishga qaratilgan zamonaviy Taxi Park loyihasi.
          </p>

          {/* Highlight Badge Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-4 rounded-3xl bg-[#111820]/90 border border-[#FFD21F]/40 shadow-2xl backdrop-blur-2xl mb-8 sm:mb-10">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/15 border border-[#FFD21F]/30 flex items-center justify-center text-[#FFD21F]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Boshlang‘ich sarmoya</span>
                <span className="text-xl sm:text-2xl font-black text-[#FFD21F] font-mono">2 640 000 so‘m</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/10" />

            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Loyiha ulushi</span>
                <span className="text-xl sm:text-2xl font-black text-white font-mono">0.1% ulush</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onScrollToCalculator}
              className="w-full sm:w-auto gold-btn px-8 py-4 rounded-2xl flex items-center justify-center gap-3 text-sm sm:text-base cursor-pointer shadow-xl"
            >
              <Calculator className="w-5 h-5 fill-slate-950 shrink-0" />
              <span>Sarmoya imkoniyatini ko‘rish</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto dark-glass-btn px-7 py-4 rounded-2xl flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-white hover:text-[#FFD21F] hover:border-[#FFD21F]/50 cursor-pointer shadow-lg"
            >
              <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0" />
              <span>Bog‘lanish →</span>
            </button>

            <a
              href="https://t.me/afrod991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-400 hover:text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <Send className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Telegram @afrod991</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


