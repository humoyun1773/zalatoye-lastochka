import React from 'react';
import { 
  Car, 
  MapPin, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  Cpu, 
  TrendingUp, 
  Smartphone 
} from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface ProjectOverviewProps {
  t: TranslationsType;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ t }) => {
  const points = [
    {
      title: "Haydovchilarni yagona platformaga jalb qilish",
      desc: "Minglab haydovchilarni qulay shartlar, doimiy buyurtma oqimi va bonus tizimi bilan ta'minlash.",
      icon: Users,
    },
    {
      title: "Buyurtmalarni avtomatlashtirish",
      desc: "Aqlli algoritmlar orqali yo'lovchi va haydovchini soniyalar ichida bog'lash hamda narxni shaffof hisoblash.",
      icon: Cpu,
    },
    {
      title: "Tumanlar o‘rtasida xizmatlarni rivojlantirish",
      desc: "Viloyat markazi va 15 ta tumanlararo yo'nalishlarda muntazam va xavfsiz qatnovlarni yo'lga qo'yish.",
      icon: MapPin,
    },
    {
      title: "Taxi Park tizimini kengaytirish",
      desc: "Yagona brend ostida zamonaviy avtopark infratuzilmasini va xizmat standartlarini shakllantirish.",
      icon: Car,
    },
    {
      title: "Kunlik buyurtmalar oqimini shakllantirish",
      desc: "Muntazam yo'lovchi oqimi hisobidan barqaror kunlik komissiya tushumini kafolatlash.",
      icon: TrendingUp,
    },
    {
      title: "Zamonaviy boshqaruv tizimini joriy qilish",
      desc: "24/7 monitoring, sun'iy intellekt asosidagi dispetcherlik va to'liq raqamlashtirilgan nazorat.",
      icon: Smartphone,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/30 text-[#FFD21F] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Car className="w-3.5 h-3.5" />
            <span>{t.overview.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            🚗 {t.overview.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            {t.overview.description}
          </p>
        </div>

        {/* 2-Column Content Grid: Left 6 Pillars, Right Visual with 4 Floating Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 6 Key Project Focus Areas */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl luxury-card border border-white/10 hover:border-[#FFD21F]/50 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#FFD21F]/10 border border-[#FFD21F]/20 flex items-center justify-center text-[#FFD21F] mb-3.5 group-hover:scale-110 group-hover:bg-[#FFD21F] group-hover:text-slate-950 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-[#FFD21F] transition-colors leading-snug">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#22C55E] font-medium">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      <span>Rejali amalga oshirish</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Hero Container with 4 Floating Interactive Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#FFD21F]/30 shadow-2xl bg-gradient-to-b from-[#111820] to-[#070A0F] p-2">
              {/* Main Realistic Image */}
              <div className="relative h-80 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
                  alt="O'rgimchak Taksi Floti"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-transparent opacity-80" />
              </div>

              {/* 4 Floating Glassmorphic Cards as per TZ */}
              {/* Floating Card 1: Taxi Park */}
              <div className="absolute top-6 left-6 p-3 sm:p-3.5 rounded-2xl bg-[#070A0F]/85 backdrop-blur-xl border border-[#FFD21F]/40 text-white shadow-xl flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-[#FFD21F] text-slate-950 flex items-center justify-center font-bold">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black block text-white">🚕 Taxi Park</span>
                  <span className="text-[10px] text-[#FFD21F] font-semibold">Zamonaviy Avtopark</span>
                </div>
              </div>

              {/* Floating Card 2: Qashqadaryo */}
              <div className="absolute top-6 right-6 p-3 sm:p-3.5 rounded-2xl bg-[#070A0F]/85 backdrop-blur-xl border border-white/20 text-white shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black block text-white">📍 Qashqadaryo</span>
                  <span className="text-[10px] text-slate-400">15 ta tuman qamrovi</span>
                </div>
              </div>

              {/* Floating Card 3: Haydovchilar */}
              <div className="absolute bottom-6 left-6 p-3 sm:p-3.5 rounded-2xl bg-[#070A0F]/85 backdrop-blur-xl border border-white/20 text-white shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black block text-white">👥 Haydovchilar</span>
                  <span className="text-[10px] text-sky-400 font-semibold">3,500+ Faol haydovchi</span>
                </div>
              </div>

              {/* Floating Card 4: Buyurtmalar */}
              <div className="absolute bottom-6 right-6 p-3 sm:p-3.5 rounded-2xl bg-[#070A0F]/85 backdrop-blur-xl border border-[#FFD21F]/40 text-white shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FFD21F]/20 text-[#FFD21F] flex items-center justify-center font-bold">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black block text-white">📊 Buyurtmalar</span>
                  <span className="text-[10px] text-[#FFD21F] font-semibold">Kunlik oqim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


