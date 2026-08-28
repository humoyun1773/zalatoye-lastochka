import { FileText, ArrowUpRight, AlertTriangle, Phone, Send, MapPin, CreditCard } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface FinancialTermsProps {
  t?: TranslationsType;
  onOpenContract: () => void;
  onOpenPayment?: (packageName?: string, packageAmount?: string) => void;
}

export const FinancialTerms: React.FC<FinancialTermsProps> = ({ t, onOpenContract, onOpenPayment }) => {
  return (
    <section id="terms" className="py-20 md:py-28 relative bg-transparent border-y border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2 uppercase">
            INVESTITSIYALASH PAKETLARI
          </h2>
          <div className="text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-amber-400">
            ZALATIYE LASTOCHKA MCHJ
          </div>
        </div>

        {/* ─── 3 OFFICIAL PACKAGES (EXACT MATCH TO DESIGN) ─── */}
        <div className="space-y-6 sm:space-y-8 mb-12 max-w-5xl mx-auto">
          {/* ══════════ 1-PAKET: KICHIK SARMOYA (207% SOF FOYDA) ══════════ */}
          <div className="rounded-3xl p-6 sm:p-8 border-2 border-pink-500 bg-slate-950/90 backdrop-blur-xl shadow-[0_0_25px_rgba(236,72,153,0.25)] relative overflow-hidden">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight uppercase">
                1-PAKET: KICHIK SARMOYA
              </h3>
              <span className="self-start sm:self-auto px-4 py-1 rounded-full bg-pink-500 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-md">
                207% SOF FOYDA
              </span>
            </div>

            {/* Financial summaries */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base font-bold mb-5">
              <span className="text-white">
                Sarmoya: <span className="text-slate-100 font-extrabold font-mono">560,000 so'm</span>
              </span>
              <span className="text-amber-400 font-extrabold font-mono">
                Jami qaytim: 1,720,000 so'm
              </span>
            </div>

            {/* Separator line */}
            <div className="w-full h-px bg-slate-800/80 mb-5" />

            {/* Bullet points */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium mb-6">
              <li className="flex items-start gap-2.5">
                <span className="text-pink-400 font-black mt-0.5">•</span>
                <span>1-oy: <strong className="text-white font-mono">168,000 so'm</strong> (Sarmoyaning 30%)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-pink-400 font-black mt-0.5">•</span>
                <span>2-oy: <strong className="text-white font-mono">112,000 so'm</strong> (Sarmoyaning 20%)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-pink-400 font-black mt-0.5">•</span>
                <span>3–17 oylar: <strong className="text-emerald-400 font-mono">96,000 so'mdan</strong> (15 oy davomida)</span>
              </li>
            </ul>

            {/* Payment Button */}
            {onOpenPayment && (
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => onOpenPayment('1-PAKET: KICHIK SARMOYA (207% SOF FOYDA)', '560,000 so‘m')}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <CreditCard className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>To‘lov qilish / Karta raqamlari</span>
                </button>
              </div>
            )}
          </div>

          {/* ══════════ 2-PAKET: OPTIMAL DAROMAD (146% SOF FOYDA) ══════════ */}
          <div className="rounded-3xl p-6 sm:p-8 border-2 border-emerald-500 bg-slate-950/90 backdrop-blur-xl shadow-[0_0_25px_rgba(16,185,129,0.25)] relative overflow-hidden">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight uppercase">
                2-PAKET: OPTIMAL DAROMAD
              </h3>
              <span className="self-start sm:self-auto px-4 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-md">
                146% SOF FOYDA
              </span>
            </div>

            {/* Financial summaries */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base font-bold mb-5">
              <span className="text-white">
                Sarmoya: <span className="text-slate-100 font-extrabold font-mono">940,000 so'm</span>
              </span>
              <span className="text-amber-400 font-extrabold font-mono">
                Jami qaytim: 2,320,000 so'm
              </span>
            </div>

            {/* Separator line */}
            <div className="w-full h-px bg-slate-800/80 mb-5" />

            {/* Bullet points */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium mb-6">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-black mt-0.5">•</span>
                <span>1-oy: <strong className="text-white font-mono">282,000 so'm</strong> (Sarmoyaning 30%)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-black mt-0.5">•</span>
                <span>2-oy: <strong className="text-white font-mono">188,000 so'm</strong> (Sarmoyaning 20%)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-black mt-0.5">•</span>
                <span>3–14 oylar: <strong className="text-emerald-400 font-mono">154,200 so'mdan</strong> (12 oy davomida)</span>
              </li>
            </ul>

            {/* Payment Button */}
            {onOpenPayment && (
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => onOpenPayment('2-PAKET: OPTIMAL DAROMAD (146% SOF FOYDA)', '940,000 so‘m')}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <CreditCard className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>To‘lov qilish / Karta raqamlari</span>
                </button>
              </div>
            )}
          </div>

          {/* ══════════ 3-PAKET: BARQAROR SARMOYA (100% SOF FOYDA) ══════════ */}
          <div className="rounded-3xl p-6 sm:p-8 border-2 border-blue-500 bg-slate-950/90 backdrop-blur-xl shadow-[0_0_25px_rgba(59,130,246,0.25)] relative overflow-hidden">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight uppercase">
                3-PAKET: BARQAROR SARMOYA
              </h3>
              <span className="self-start sm:self-auto px-4 py-1 rounded-full bg-blue-500 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-md">
                100% SOF FOYDA
              </span>
            </div>

            {/* Financial summaries */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base font-bold mb-5">
              <span className="text-white">
                Sarmoya: <span className="text-slate-100 font-extrabold font-mono">2,640,000 so'm</span>
              </span>
              <span className="text-amber-400 font-extrabold font-mono">
                Jami qaytim: 5,280,000 so'm
              </span>
            </div>

            {/* Separator line */}
            <div className="w-full h-px bg-slate-800/80 mb-5" />

            {/* Bullet points */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium mb-6">
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 font-black mt-0.5">•</span>
                <span>1-3 oy: <strong className="text-white font-mono">50,000 so'mdan</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 font-black mt-0.5">•</span>
                <span>4-6 oy: <strong className="text-white font-mono">70,000 so'mdan</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 font-black mt-0.5">•</span>
                <span>7-16 oy: <strong className="text-emerald-400 font-mono">228,000 so'mdan</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-black mt-0.5">•</span>
                <span>17-oy: <strong className="text-emerald-400 font-mono">2,640,000 so'm</strong> (Asosiy sarmoya)</span>
              </li>
            </ul>

            {/* Payment Button */}
            {onOpenPayment && (
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => onOpenPayment('3-PAKET: BARQAROR SARMOYA (100% SOF FOYDA)', '2,640,000 so‘m')}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <CreditCard className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>To‘lov qilish / Karta raqamlari</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ─── OFFICIAL GUARANTEE NOTICE & CONTACT DETAILS ─── */}
        <div className="space-y-4">
          {/* Warning Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-start gap-3.5 text-slate-200">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm font-bold text-amber-200 leading-relaxed">
              ⚠️ DIQQAT: Barcha investitsiyalar "ZALATIYE LASTOCHKA" MCHJ bilan tuziladigan rasmiy shartnoma asosida kafolatlanadi.
            </div>
          </div>

          {/* Contact Bar & Action */}
          <div className="luxury-card p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              <a
                href="tel:+998908714010"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Tel:</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">+998 (90) 871-40-10</span>
                </div>
              </a>

              <a
                href="https://t.me/afrod991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Telegram:</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">@afrod991</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Manzil:</span>
                  <span className="text-xs font-bold text-white">Qarshi sh., Eshon Shahid MFY, NUR o‘quv markazi</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenContract}
              className="w-full lg:w-auto blue-btn px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 shadow-xl cursor-pointer shrink-0 text-white"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>{t?.guarantees?.previewBtn || 'Rasmiy shartnoma namunasi'}</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

