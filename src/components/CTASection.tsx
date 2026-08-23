import React from 'react';
import { Rocket, Send, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface CTASectionProps {
  t: TranslationsType;
  onOpenContract?: () => void;
  onApply?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ t, onApply }) => {
  const handleApplyClick = () => {
    if (onApply) {
      onApply();
    } else {
      const el = document.getElementById('application');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#FFD21F]/30 shadow-2xl bg-gradient-to-b from-[#111820] to-[#070A0F]">
          {/* Background Realistic Image with Dark Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity filter brightness-75 scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          {/* Glowing Ambient Mesh */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD21F]/15 rounded-full blur-[120px] pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-[120px] pointer-events-none -z-0" />

          {/* Inner Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/30 text-[#FFD21F] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <Rocket className="w-3.5 h-3.5" />
              <span>{t.ctaSection.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {t.ctaSection.title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t.ctaSection.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleApplyClick}
                className="w-full sm:w-auto gold-btn px-8 py-4 rounded-2xl text-sm sm:text-base flex items-center justify-center gap-3 cursor-pointer shadow-xl"
              >
                <span>{t.ctaSection.submitBtn}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://t.me/afrod991"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/40 text-sky-300 hover:text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg"
              >
                <Send className="w-5 h-5 text-sky-400" />
                <span>{t.ctaSection.telegramBtn}</span>
              </a>

              <a
                href="tel:+998908714010"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl dark-glass-btn text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 text-[#FFD21F]" />
                <span>+998 (90) 871-40-10</span>
              </a>
            </div>

            {/* Bottom trust notes */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span>Rasmiy ikki tomonlama shartnoma</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD21F]" />
                <span>17-oyda 100% sarmoyani qaytarish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
