import React from 'react';
import { Compass, FileSignature, Cpu, TrendingUp, ShieldCheck } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface RoadmapProps {
  t: TranslationsType;
}

export const Roadmap: React.FC<RoadmapProps> = ({ t }) => {
  const stepIcons = [FileSignature, Cpu, TrendingUp, ShieldCheck];

  const stepsData = [
    {
      step: "01",
      title: "Ariza qoldiring",
      desc: "Sayt orqali shaklni to'ldiring yoki to'g'ridan-to'g'ri Telegram (@afrod991) va telefon orqali murojaat qiling.",
    },
    {
      step: "02",
      title: "Shartlar bilan tanishing",
      desc: "Kompaniya hujjatlari, ulushlar hisob-kitobi va loyiha rivojlanish rejasi bilan to'liq tanishib chiqing.",
    },
    {
      step: "03",
      title: "Rasmiy Shartnoma",
      desc: "'ZALATIYE LASTOCHKA' MCHJ bilan yuridik kuchga ega ikki tomonlama hamkorlik shartnomasini imzolang.",
    },
    {
      step: "04",
      title: "Daromad va Qaytarish",
      desc: "16 oy davomida har oy sof foyda oling va 17-oyda kiritilgan boshlang'ich sarmoyangizni 100% qaytarib oling.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#0D1117]/60 border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/30 text-[#FFD21F] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.roadmap.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.roadmap.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400">
            {t.roadmap.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stepsData.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={idx}
                className="luxury-card p-6 sm:p-7 rounded-3xl relative group flex flex-col justify-between border border-white/10 hover:border-[#FFD21F]/50 transition-all duration-300 overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/15 border border-[#FFD21F]/30 flex items-center justify-center text-[#FFD21F] group-hover:scale-110 group-hover:bg-[#FFD21F] group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#FFD21F] px-2.5 py-1 rounded-lg bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#FFD21F] transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-4 mt-4">
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

