import React, { useState } from 'react';
import { MapPin, Navigation, Car, CheckCircle2 } from 'lucide-react';
import { QASHQADARYO_DISTRICTS } from '../data/districts';
import type { Language } from '../types';
import type { TranslationsType } from '../data/translations';

interface DistrictsMapProps {
  lang: Language;
  t: TranslationsType;
}

export const DistrictsMap: React.FC<DistrictsMapProps> = ({ lang, t }) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'expanding'>('all');

  const filteredDistricts = QASHQADARYO_DISTRICTS.filter((d) => {
    if (filter === 'all') return true;
    return d.coverageStatus === filter;
  });

  const getDistrictName = (d: typeof QASHQADARYO_DISTRICTS[0]) => {
    if (lang === 'ru') return d.nameRu;
    if (lang === 'en') return d.nameEn;
    return d.nameUz;
  };

  return (
    <section id="districts" className="py-20 md:py-28 relative bg-[#090d18]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.districts.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.districts.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300">
            {t.districts.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/25'
                : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            Barchasi (15 ta tuman)
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              filter === 'active'
                ? 'bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/25'
                : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            {t.districts.legend.active}
          </button>
          <button
            onClick={() => setFilter('expanding')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              filter === 'expanding'
                ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/25'
                : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            {t.districts.legend.expanding}
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
          {filteredDistricts.map((d) => (
            <div
              key={d.id}
              className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800/90 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-mono text-slate-500">#{d.id.slice(0, 4)}</span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        d.coverageStatus === 'active'
                          ? 'bg-emerald-400 shadow-sm shadow-emerald-400'
                          : 'bg-amber-400'
                      }`}
                    />
                    <span className="text-[10px] font-semibold text-slate-400 uppercase">
                      {d.coverageStatus === 'active' ? 'Faol' : 'Kengaymoqda'}
                    </span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {getDistrictName(d)}
                </h4>
              </div>

              <div className="space-y-1.5 text-xs border-t border-slate-800/80 pt-3 mt-1">
                <div className="flex justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-amber-400" />
                    <span>Haydovchilar:</span>
                  </span>
                  <span className="font-bold text-slate-200 font-mono">{d.targetDrivers}+</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-sky-400" />
                    <span>Yo'nalishlar:</span>
                  </span>
                  <span className="font-bold text-slate-200 font-mono">{d.activeRoutes} ta</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Qashqadaryo viloyatining barcha tumanlarida haydovchilar bazasi kengaytirilib borilmoqda.</span>
        </div>
      </div>
    </section>
  );
};

