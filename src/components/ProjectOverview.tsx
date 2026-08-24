import React from 'react';
import { 
  Car, 
  MapPin, 
  Users, 
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
    <section id="about" className="py-20 md:py-28 relative bg-transparent overflow-hidden">
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

        {/* 6 Key Project Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl luxury-card bg-white border border-slate-200 hover:border-blue-500 shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors leading-snug">
                    {pt.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Rejali amalga oshirish</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


