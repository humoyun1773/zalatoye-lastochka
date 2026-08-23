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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Car className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.overview.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            🚗 {t.overview.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
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
                    className="p-5 rounded-2xl luxury-card bg-white border border-slate-200 hover:border-blue-500 shadow-sm transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3.5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
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
            <div className="relative rounded-3xl overflow-hidden border border-blue-200 shadow-xl bg-white p-2">
              {/* Main Realistic Image */}
              <div className="relative h-80 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
                  alt="O'rgimchak Taksi Floti"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
              </div>

              {/* 4 Floating Glassmorphic Cards */}
              {/* Floating Card 1: Taxi Park */}
              <div className="absolute top-6 left-6 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-200 text-slate-900 shadow-xl flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black block text-slate-900">🚕 Taxi Park</span>
                  <span className="text-[10px] text-blue-600 font-semibold">Zamonaviy Avtopark</span>
                </div>
              </div>

              {/* Floating Card 2: Qashqadaryo */}
              <div className="absolute top-6 right-6 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200 text-slate-900 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black block text-slate-900">📍 Qashqadaryo</span>
                  <span className="text-[10px] text-slate-500">15 ta tuman qamrovi</span>
                </div>
              </div>

              {/* Floating Card 3: Haydovchilar */}
              <div className="absolute bottom-6 left-6 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-sky-200 text-slate-900 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black block text-slate-900">👥 Haydovchilar</span>
                  <span className="text-[10px] text-sky-600 font-semibold">3,500+ Faol haydovchi</span>
                </div>
              </div>

              {/* Floating Card 4: Buyurtmalar */}
              <div className="absolute bottom-6 right-6 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-200 text-slate-900 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black block text-slate-900">📊 Buyurtmalar</span>
                  <span className="text-[10px] text-blue-600 font-semibold">Kunlik oqim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


