import { CreditCard } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface FinancialTermsProps {
  t?: TranslationsType;
  onOpenContract?: () => void;
  onOpenPayment?: (packageName?: string, packageAmount?: string) => void;
}

export const FinancialTerms: React.FC<FinancialTermsProps> = ({ onOpenPayment }) => {
  return (
    <section id="terms" className="py-20 md:py-28 relative bg-transparent border-y border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-slate-300 mb-2">
            "ZALATIYE LASTOCHKA" MCHJ & LOTOSFIELD.UZ
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>📈 RASMIY BIZNES-INVESTITSIYA PAKETLARI VA TO‘LOV GRAFIGI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Investitsiyalash Shartlari va Kafolatlangan Daromad
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200">
            Shaffof shartlar. Har bir to‘lov rasmiy shartnoma va oylik faktura-vedomost bilan himoyalangan.
          </p>
        </div>

        {/* ─── 3 OFFICIAL PACKAGES (ORIGINAL LUXURY DESIGN WITH UPDATED DATA) ─── */}
        <div className="space-y-10 mb-12">
          {/* ══════════ 1-PAKET: KICHIK SARMOYA (207% SOF FOYDA) ══════════ */}
          <div className="luxury-card rounded-3xl p-6 sm:p-8 border border-pink-500/40 shadow-2xl overflow-hidden relative">
            {/* Header info */}
            <div className="border-b border-white/15 pb-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-lg bg-pink-600/30 border border-pink-400/50 text-pink-300 text-xs font-black uppercase tracking-wider inline-block">
                      1-Paket
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-pink-500 text-white text-xs font-black uppercase tracking-wider inline-block shadow-md">
                      207% SOF FOYDA
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                    1-PAKET: KICHIK SARMOYA <span className="text-pink-400">(207% SOF FOYDA)</span>
                  </h3>
                </div>

                {onOpenPayment && (
                  <button
                    type="button"
                    onClick={() => onOpenPayment('1-PAKET: KICHIK SARMOYA (207% SOF FOYDA)', '560,000 so‘m')}
                    className="self-start md:self-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>To‘lov qilish / Karta raqamlari</span>
                  </button>
                )}
              </div>

              {/* Meta metrics grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/15">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Kiritiladigan investitsiya:
                  </span>
                  <div className="text-lg sm:text-xl font-black text-white font-mono">
                    560,000 so‘m
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/15">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Jami qaytariladigan pul:
                  </span>
                  <div className="text-lg sm:text-xl font-black text-amber-400 font-mono">
                    1,720,000 so‘m
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/15">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Muddat:
                  </span>
                  <div className="text-lg sm:text-xl font-black text-white font-mono">
                    17 oy
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white uppercase text-[11px] font-black tracking-wider border-b border-white/20">
                    <th className="py-3.5 px-4 rounded-tl-xl">Davr</th>
                    <th className="py-3.5 px-4">Qaytariladigan ulush</th>
                    <th className="py-3.5 px-4">Oylik to‘lov</th>
                    <th className="py-3.5 px-4 rounded-tr-xl">Izoh</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-200 font-medium">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">1-oy</td>
                    <td className="py-3.5 px-4 font-bold text-pink-300 whitespace-nowrap">30%</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">168,000 so‘m</td>
                    <td className="py-3.5 px-4 text-slate-300">Sarmoyaning 30% qismi qaytadi</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">2-oy</td>
                    <td className="py-3.5 px-4 font-bold text-pink-300 whitespace-nowrap">20%</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">112,000 so‘m</td>
                    <td className="py-3.5 px-4 text-slate-300">Sarmoyaning 20% qismi qaytadi</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">3–17 oylar (15 oy)</td>
                    <td className="py-3.5 px-4 font-bold text-pink-300 whitespace-nowrap">Har oy ~5.58%</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-400 whitespace-nowrap">96,000 so‘mdan</td>
                    <td className="py-3.5 px-4 text-slate-300">15 oy davomida har oy (jami 1,440,000 so‘m)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ══════════ 2-PAKET: OPTIMAL DAROMAD (146% SOF FOYDA) ══════════ */}
          <div className="luxury-card rounded-3xl p-6 sm:p-8 border border-emerald-500/40 shadow-2xl overflow-hidden relative">
            {/* Header info */}
            <div className="border-b border-white/15 pb-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-lg bg-emerald-600/30 border border-emerald-400/50 text-emerald-300 text-xs font-black uppercase tracking-wider inline-block">
                      2-Paket
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider inline-block shadow-md">
                      146% SOF FOYDA
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                    2-PAKET: OPTIMAL DAROMAD <span className="text-emerald-400">(146% SOF FOYDA)</span>
                  </h3>
                </div>

                {onOpenPayment && (
                  <button
                    type="button"
                    onClick={() => onOpenPayment('2-PAKET: OPTIMAL DAROMAD (146% SOF FOYDA)', '940,000 so‘m')}
                    className="self-start md:self-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>To‘lov qilish / Karta raqamlari</span>
                  </button>
                )}
              </div>

              {/* Meta metrics grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/15">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Kiritiladigan investitsiya:
                  </span>
                  <div className="text-lg sm:text-xl font-black text-white font-mono">
                    940,000 so‘m
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/15">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Jami qaytariladigan pul:
                  </span>
                  <div className="text-lg sm:text-xl font-black text-amber-400 font-mono">
                    2,320,000 so‘m
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/15">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Muddat:
                  </span>
                  <div className="text-lg sm:text-xl font-black text-white font-mono">
                    14 oy
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white uppercase text-[11px] font-black tracking-wider border-b border-white/20">
                    <th className="py-3.5 px-4 rounded-tl-xl">Davr</th>
                    <th className="py-3.5 px-4">Qaytariladigan ulush</th>
                    <th className="py-3.5 px-4">Oylik to‘lov</th>
                    <th className="py-3.5 px-4 rounded-tr-xl">Izoh</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-200 font-medium">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">1-oy</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-300 whitespace-nowrap">30%</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">282,000 so‘m</td>
                    <td className="py-3.5 px-4 text-slate-300">Sarmoyaning 30% qismi qaytadi</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">2-oy</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-300 whitespace-nowrap">20%</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">188,000 so‘m</td>
                    <td className="py-3.5 px-4 text-slate-300">Sarmoyaning 20% qismi qaytadi</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">3–14 oylar (12 oy)</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-300 whitespace-nowrap">Har oy ~6.65%</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-400 whitespace-nowrap">154,200 so‘mdan</td>
                    <td className="py-3.5 px-4 text-slate-300">12 oy davomida har oy (jami ~1,850,400 so‘m)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ══════════ 3-PAKET: BARQAROR SARMOYA (100% SOF FOYDA) ══════════ */}
          <div className="luxury-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl overflow-hidden relative">
            {/* Header info */}
            <div className="border-b border-white/15 pb-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-lg bg-amber-600/30 border border-amber-400/50 text-amber-300 text-xs font-black uppercase tracking-wider inline-block">
                      3-Paket
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider inline-block shadow-md">
                      100% SOF FOYDA
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                    3-PAKET: BARQAROR SARMOYA <span className="text-emerald-400">(100% SOF FOYDA)</span>
                  </h3>
                </div>

                {onOpenPayment && (
                  <button
                    type="button"
                    onClick={() => onOpenPayment('3-PAKET: BARQAROR SARMOYA (100% SOF FOYDA)', '2,640,000 so‘m')}
                    className="self-start md:self-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>To‘lov qilish / Karta raqamlari</span>
                  </button>
                )}
              </div>

              {/* Meta metrics grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/15">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Kiritiladigan investitsiya:
                  </span>
                  <div className="text-lg sm:text-xl font-black text-white font-mono">
                    2,640,000 so‘m
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/15">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Jami qaytariladigan pul:
                  </span>
                  <div className="text-lg sm:text-xl font-black text-emerald-400 font-mono">
                    5,280,000 so‘m
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/15">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Muddat:
                  </span>
                  <div className="text-lg sm:text-xl font-black text-white font-mono">
                    16 oy + 17-oy <span className="text-xs text-slate-300 font-normal">(Asosiy summa)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white uppercase text-[11px] font-black tracking-wider border-b border-white/20">
                    <th className="py-3.5 px-4 rounded-tl-xl">Davr</th>
                    <th className="py-3.5 px-4">Oylik to‘lov</th>
                    <th className="py-3.5 px-4">Jami davr to‘lovi</th>
                    <th className="py-3.5 px-4 rounded-tr-xl">Izoh</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-200 font-medium">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">1–3 oylar (3 oy)</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">50,000 so‘mdan</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">150,000 so‘m</td>
                    <td className="py-3.5 px-4 text-slate-300">Dastlabki yengil to‘lovlar</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">4–6 oylar (3 oy)</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">70,000 so‘mdan</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">210,000 so‘m</td>
                    <td className="py-3.5 px-4 text-slate-300">Oylik to‘lov oshishi</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">7–16 oylar (10 oy)</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-400 whitespace-nowrap">228,000 so‘mdan</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-400 whitespace-nowrap">2,280,000 so‘m</td>
                    <td className="py-3.5 px-4 text-slate-300">Foydaning qolgan qismi teng bo‘linadi</td>
                  </tr>
                  <tr className="bg-emerald-950/30 hover:bg-emerald-950/50 transition-colors">
                    <td className="py-4 px-4 font-black text-emerald-300 whitespace-nowrap">17-oy</td>
                    <td className="py-4 px-4 font-mono font-black text-emerald-300 whitespace-nowrap">2,640,000 so‘m</td>
                    <td className="py-4 px-4 font-mono font-black text-emerald-300 whitespace-nowrap">2,640,000 so‘m</td>
                    <td className="py-4 px-4 font-bold text-emerald-300">Boshlang‘ich sarmoya to‘liq qaytariladi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

