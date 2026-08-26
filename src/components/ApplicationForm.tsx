import React, { useState, useEffect } from 'react';
import { Send, Phone, CheckCircle2, User, MapPin, Sparkles, Plus, Minus, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QASHQADARYO_DISTRICTS } from '../data/districts';
import type { Language } from '../types';
import type { TranslationsType } from '../data/translations';

interface ApplicationFormProps {
  lang: Language;
  t: TranslationsType;
  initialShares: number;
}

const PRESET_SHARES = [1, 2, 5, 10, 20, 50, 100];

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ lang, t, initialShares }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [shares, setShares] = useState(initialShares || 1);
  const [district, setDistrict] = useState('Qarshi shahri');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialShares) {
      setShares(initialShares);
    }
  }, [initialShares]);

  const currencyUnit = lang === 'ru' ? 'сум' : lang === 'en' ? 'UZS' : "so‘m";

  // Financial calculations based on shares
  const singleSharePrice = 2640000;
  const totalInvestment = shares * singleSharePrice;
  const sharePercentage = (shares * 0.1).toFixed(shares >= 10 && (shares * 0.1) % 1 === 0 ? 0 : 1);
  const monthlyIncome = Math.round(totalInvestment / 16);
  const totalProfit = totalInvestment;
  const grandTotal = totalInvestment * 2;

  const handleShareChange = (newVal: number) => {
    const valid = Math.max(1, Math.min(1000, newVal || 1));
    setShares(valid);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch {}

    setSubmitted(true);

    const formattedInvest = totalInvestment.toLocaleString('uz-UZ');
    const formattedGrandTotal = grandTotal.toLocaleString('uz-UZ');

    const textMsg = encodeURIComponent(
      `🏢 "ZALATIYE LASTOCHKA" MCHJ sarmoyaviy hamkorlik arizasi:\n👤 Ism: ${name}\n📞 Tel: ${phone}\n📊 Ulush: ${shares} ta (${sharePercentage}% = ${formattedInvest} ${currencyUnit})\n💰 Jami kutilayotgan tushum: ${formattedGrandTotal} ${currencyUnit} (200%)\n📍 Tuman: ${district}\n💬 Xabar: ${message || "Loyiha bo‘yicha shartnoma rasmiylashtirmoqchiman."}`
    );
    window.open(`https://t.me/afrod991?text=${textMsg}`, '_blank');
  };

  return (
    <section id="application" className="py-20 md:py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto luxury-card p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/20 shadow-2xl relative">
          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.form.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
              {t.form.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-200">
              {t.form.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="text-center p-8 sm:p-10 rounded-2xl bg-emerald-950/80 border border-emerald-400/40 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{t.form.successTitle}</h3>
              <p className="text-sm text-slate-200 max-w-md mx-auto">{t.form.successDesc}</p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://t.me/afrod991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram @afrod991</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 cursor-pointer"
                >
                  Yana ariza yuborish
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    {t.form.nameLabel} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.form.namePlaceholder}
                      className="w-full bg-slate-900/90 border border-white/20 hover:border-white/40 focus:border-blue-400 focus:bg-slate-900 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-400 focus:outline-none transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    {t.form.phoneLabel} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.form.phonePlaceholder}
                      className="w-full bg-slate-900/90 border border-white/20 hover:border-white/40 focus:border-blue-400 focus:bg-slate-900 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-400 focus:outline-none transition-colors font-mono shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Interactive Share Selector & Calculation Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-white/15 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">
                      {t.form.sharesLabel}
                    </label>
                    <span className="text-[11px] text-slate-400">
                      1 ulush = 2,640,000 {currencyUnit} (0.1%)
                    </span>
                  </div>

                  {/* Number Stepper */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => handleShareChange(shares - 1)}
                      disabled={shares <= 1}
                      className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <div className="px-4 py-2 rounded-xl bg-slate-900 border border-white/25 text-center min-w-[90px]">
                      <span className="text-base sm:text-lg font-black font-mono text-white">
                        {shares}
                      </span>
                      <span className="text-xs text-slate-300 ml-1 font-bold">
                        {t.calculator.shareUnit}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleShareChange(shares + 1)}
                      className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Preset Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] font-semibold text-slate-400 mr-1">Tezkor tanlash:</span>
                  {PRESET_SHARES.map((n) => {
                    const isSelected = shares === n;
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setShares(n)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-md border border-blue-400'
                            : 'bg-white/5 hover:bg-white/15 text-slate-300 border border-white/10'
                        }`}
                      >
                        {n} {t.calculator.shareUnit}
                      </button>
                    );
                  })}
                </div>

                {/* Live Calculation Mini Card */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">
                      Kiritiladigan sarmoya:
                    </span>
                    <div className="text-xs sm:text-sm font-black text-white font-mono">
                      {totalInvestment.toLocaleString('uz-UZ')} {currencyUnit}
                    </div>
                    <span className="text-[10px] text-blue-300 font-bold">
                      {sharePercentage}% ulush
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">
                      Oylik sof daromad:
                    </span>
                    <div className="text-xs sm:text-sm font-black text-emerald-400 font-mono">
                      ~{monthlyIncome.toLocaleString('uz-UZ')} {currencyUnit}
                    </div>
                    <span className="text-[10px] text-slate-400 font-semibold">
                      1-16 oylar
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">
                      16 oylik sof foyda:
                    </span>
                    <div className="text-xs sm:text-sm font-black text-emerald-400 font-mono">
                      +{totalProfit.toLocaleString('uz-UZ')} {currencyUnit}
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">
                      +100% foyda
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">
                      17-oyda sarmoya:
                    </span>
                    <div className="text-xs sm:text-sm font-black text-white font-mono">
                      {totalInvestment.toLocaleString('uz-UZ')} {currencyUnit}
                    </div>
                    <span className="text-[10px] text-slate-300 font-semibold">
                      To'liq qaytadi
                    </span>
                  </div>
                </div>

                {/* Grand Total Bar */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-400/30 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-bold text-slate-200">
                      Jami tushum (16 oy daromad + sarmoya):
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-black text-white font-mono">
                    {grandTotal.toLocaleString('uz-UZ')} {currencyUnit} <span className="text-emerald-400 text-xs font-bold">(200%)</span>
                  </div>
                </div>
              </div>

              {/* Step 3: District and Message Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    {t.form.districtLabel}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full bg-slate-900/90 border border-white/20 hover:border-white/40 focus:border-blue-400 focus:bg-slate-900 rounded-xl pl-11 pr-8 py-3.5 text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer shadow-sm"
                    >
                      {QASHQADARYO_DISTRICTS.map((d) => {
                        const localized = lang === 'ru' ? d.nameRu : lang === 'en' ? d.nameEn : d.nameUz;
                        return (
                          <option key={d.id} value={localized} className="bg-slate-900 text-white py-1">
                            {localized}
                          </option>
                        );
                      })}
                      <option value="Boshqa hudud" className="bg-slate-900 text-white py-1">
                        Boshqa viloyat / hudud
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    {t.form.messageLabel}
                  </label>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.form.messagePlaceholder}
                    className="w-full bg-slate-900/90 border border-white/20 hover:border-white/40 focus:border-blue-400 focus:bg-slate-900 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-400 focus:outline-none transition-colors shadow-sm"
                  />
                </div>
              </div>

              {/* Step 4: Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 blue-btn py-4 rounded-xl text-sm sm:text-base cursor-pointer shadow-xl text-white font-black flex items-center justify-center gap-2"
                >
                  <span>{t.form.submitBtn}</span>
                  <Send className="w-4 h-4" />
                </button>

                <a
                  href="https://t.me/afrod991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md backdrop-blur-md"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Telegram @afrod991</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
