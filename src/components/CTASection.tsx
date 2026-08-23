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
        <div className="relative rounded-3xl overflow-hidden border border-blue-400/40 shadow-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
          {/* Background Realistic Image with Subtle Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay filter brightness-110 scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          {/* Glowing Ambient Mesh */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none -z-0" />

          {/* Inner Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <Rocket className="w-3.5 h-3.5 text-white" />
              <span>{t.ctaSection.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {t.ctaSection.title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              {t.ctaSection.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleApplyClick}
                className="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-800 font-black px-8 py-4 rounded-2xl text-sm sm:text-base flex items-center justify-center gap-3 cursor-pointer shadow-2xl transition-all transform hover:scale-[1.02]"
              >
                <span>{t.ctaSection.submitBtn}</span>
                <ArrowRight className="w-5 h-5 text-blue-800" />
              </button>

              <a
                href="https://t.me/afrod991"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg backdrop-blur-md"
              >
                <Send className="w-5 h-5 text-white" />
                <span>{t.ctaSection.telegramBtn}</span>
              </a>

              <a
                href="tel:+998908714010"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer backdrop-blur-md"
              >
                <PhoneCall className="w-5 h-5 text-white" />
                <span>+998 (90) 871-40-10</span>
              </a>
            </div>

            {/* Bottom trust notes */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Rasmiy ikki tomonlama shartnoma</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-300" />
                <span>17-oyda 100% sarmoyani qaytarish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
