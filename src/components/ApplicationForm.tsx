import React, { useState, useEffect, useRef } from 'react';
import { Send, Phone, CheckCircle2, User, MapPin, Sparkles, ChevronDown, Check, Percent, Search } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QASHQADARYO_DISTRICTS } from '../data/districts';
import type { Language } from '../types';
import type { TranslationsType } from '../data/translations';

interface ApplicationFormProps {
  lang: Language;
  t: TranslationsType;
  initialShares: number;
}

const SHARES_OPTIONS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100,
  150, 200, 250, 300, 400, 500, 750, 1000,
];

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ lang, t, initialShares }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [shares, setShares] = useState(initialShares || 1);
  const [district, setDistrict] = useState('Qarshi shahri');
  const [districtSearch, setDistrictSearch] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Custom Dropdown Open States
  const [isSharesOpen, setIsSharesOpen] = useState(false);
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);

  const sharesRef = useRef<HTMLDivElement>(null);
  const districtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialShares) {
      setShares(initialShares);
    }
  }, [initialShares]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sharesRef.current && !sharesRef.current.contains(e.target as Node)) {
        setIsSharesOpen(false);
      }
      if (districtRef.current && !districtRef.current.contains(e.target as Node)) {
        setIsDistrictOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currencyUnit = lang === 'ru' ? 'сум' : lang === 'en' ? 'UZS' : "so‘m";

  const formatShareItem = (n: number) => {
    const percent = (n * 0.1).toFixed(n >= 10 && (n * 0.1) % 1 === 0 ? 0 : 1);
    const amount = (n * 2640000).toLocaleString('uz-UZ');
    return {
      n,
      percent: `${percent}%`,
      amount: `${amount} ${currencyUnit}`,
      label: `${n} ${t.calculator.shareUnit} (${percent}% = ${amount} ${currencyUnit})`,
    };
  };

  const selectedShareData = formatShareItem(shares);

  const filteredDistricts = QASHQADARYO_DISTRICTS.filter((d) => {
    const localized = lang === 'ru' ? d.nameRu : lang === 'en' ? d.nameEn : d.nameUz;
    return localized.toLowerCase().includes(districtSearch.toLowerCase().trim());
  });

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

    const sharePercentage = (shares * 0.1).toFixed(1);
    const totalAmount = (shares * 2640000).toLocaleString('uz-UZ');

    const textMsg = encodeURIComponent(
      `🏢 "ZALATIYE LASTOCHKA" MCHJ sarmoyaviy hamkorlik arizasi:\n👤 Ism: ${name}\n📞 Tel: ${phone}\n📊 Ulush: ${shares} ta (${sharePercentage}% ulush = ${totalAmount} ${currencyUnit})\n📍 Tuman: ${district}\n💬 Xabar: ${message || "Loyiha haqida batafsil ma'lumot olmoqchiman."}`
    );
    window.open(`https://t.me/afrod991?text=${textMsg}`, '_blank');
  };

  return (
    <section id="application" className="py-20 md:py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto luxury-card p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/15 shadow-2xl relative overflow-visible">
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
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
                      className="w-full bg-slate-900/90 border border-white/15 hover:border-blue-400/50 focus:border-blue-400 focus:bg-slate-900 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-400 focus:outline-none transition-colors shadow-sm"
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
                      className="w-full bg-slate-900/90 border border-white/15 hover:border-blue-400/50 focus:border-blue-400 focus:bg-slate-900 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-400 focus:outline-none transition-colors font-mono shadow-sm"
                    />
                  </div>
                </div>

                {/* ── Custom Luxury Shares Dropdown ── */}
                <div ref={sharesRef} className="relative">
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    {t.form.sharesLabel}
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSharesOpen(!isSharesOpen);
                      setIsDistrictOpen(false);
                    }}
                    className={`w-full bg-slate-900/95 border ${
                      isSharesOpen ? 'border-blue-400 ring-2 ring-blue-500/30' : 'border-white/20 hover:border-blue-400/60'
                    } rounded-xl px-4 py-3 text-sm text-white flex items-center justify-between transition-all duration-200 cursor-pointer shadow-lg`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                        <Percent className="w-4 h-4" />
                      </div>
                      <div className="text-left truncate">
                        <div className="font-bold text-white text-sm flex items-center gap-2">
                          <span>{selectedShareData.n} {t.calculator.shareUnit}</span>
                          <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-xs font-black border border-blue-400/40">
                            {selectedShareData.percent}
                          </span>
                        </div>
                        <div className="text-xs text-slate-300 font-mono font-medium">
                          {selectedShareData.amount}
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                        isSharesOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isSharesOpen && (
                    <div className="absolute left-0 right-0 top-full mt-2 bg-slate-900/98 border border-white/20 rounded-2xl shadow-2xl backdrop-blur-2xl z-50 p-2 max-h-72 overflow-y-auto space-y-1 animate-in fade-in zoom-in-95 duration-150 custom-scrollbar">
                      {SHARES_OPTIONS.map((n) => {
                        const item = formatShareItem(n);
                        const isSelected = shares === n;
                        return (
                          <div
                            key={n}
                            onClick={() => {
                              setShares(n);
                              setIsSharesOpen(false);
                            }}
                            className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-150 ${
                              isSelected
                                ? 'bg-blue-600/30 border border-blue-400/60 text-white font-bold shadow-md'
                                : 'hover:bg-white/10 text-slate-200 hover:text-white border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="font-extrabold text-sm text-white">
                                {n} {t.calculator.shareUnit}
                              </span>
                              <span className="px-2 py-0.5 rounded-md bg-white/10 text-blue-300 text-xs font-black border border-white/15">
                                {item.percent}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-slate-300 font-mono font-semibold">
                                {item.amount}
                              </span>
                              {isSelected && <Check className="w-4 h-4 text-blue-400 stroke-[2.5]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* ── Custom Luxury District Dropdown ── */}
                <div ref={districtRef} className="relative">
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    {t.form.districtLabel}
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsDistrictOpen(!isDistrictOpen);
                      setIsSharesOpen(false);
                    }}
                    className={`w-full bg-slate-900/95 border ${
                      isDistrictOpen ? 'border-blue-400 ring-2 ring-blue-500/30' : 'border-white/20 hover:border-blue-400/60'
                    } rounded-xl px-4 py-3 text-sm text-white flex items-center justify-between transition-all duration-200 cursor-pointer shadow-lg`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-white text-sm truncate">
                        {district}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                        isDistrictOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isDistrictOpen && (
                    <div className="absolute left-0 right-0 top-full mt-2 bg-slate-900/98 border border-white/20 rounded-2xl shadow-2xl backdrop-blur-2xl z-50 p-2 max-h-72 overflow-y-auto space-y-1 animate-in fade-in zoom-in-95 duration-150 custom-scrollbar">
                      {/* Search input inside district dropdown */}
                      <div className="p-2 pb-2">
                        <div className="relative">
                          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Tuman qidirish..."
                            value={districtSearch}
                            onChange={(e) => setDistrictSearch(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full bg-slate-800/90 border border-white/15 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                          />
                        </div>
                      </div>

                      {filteredDistricts.map((d) => {
                        const localized = lang === 'ru' ? d.nameRu : lang === 'en' ? d.nameEn : d.nameUz;
                        const isSelected = district === localized;
                        return (
                          <div
                            key={d.id}
                            onClick={() => {
                              setDistrict(localized);
                              setIsDistrictOpen(false);
                              setDistrictSearch('');
                            }}
                            className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-150 ${
                              isSelected
                                ? 'bg-blue-600/30 border border-blue-400/60 text-white font-bold shadow-md'
                                : 'hover:bg-white/10 text-slate-200 hover:text-white border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              <span className="font-semibold text-sm text-white">
                                {localized}
                              </span>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-blue-400 stroke-[2.5]" />}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  {t.form.messageLabel}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.form.messagePlaceholder}
                  className="w-full bg-slate-900/90 border border-white/15 hover:border-blue-400/50 focus:border-blue-400 focus:bg-slate-900 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none transition-colors resize-none shadow-sm"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 blue-btn py-4 rounded-xl text-sm sm:text-base cursor-pointer shadow-xl text-white font-black"
                >
                  {t.form.submitBtn}
                </button>

                <a
                  href="https://t.me/afrod991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-200 text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md backdrop-blur-md"
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
