import React, { useState, useEffect } from 'react';
import { Send, Phone, CheckCircle2, User, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QASHQADARYO_DISTRICTS } from '../data/districts';
import type { Language } from '../types';
import type { TranslationsType } from '../data/translations';

interface ApplicationFormProps {
  lang: Language;
  t: TranslationsType;
  initialShares: number;
}

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
      `🏢 "ZALATIYE LASTOCHKA" MCHJ sarmoyaviy hamkorlik arizasi:\n👤 Ism: ${name}\n📞 Tel: ${phone}\n📊 Ulush: ${shares} ta (${sharePercentage}% ulush = ${totalAmount} so'm)\n📍 Tuman: ${district}\n💬 Xabar: ${message || "Loyiha haqida batafsil ma'lumot olmoqchiman."}`
    );
    window.open(`https://t.me/afrod991?text=${textMsg}`, '_blank');
  };

  return (
    <section id="application" className="py-20 md:py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto luxury-card p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
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

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    {t.form.sharesLabel}
                  </label>
                  <select
                    value={shares}
                    onChange={(e) => setShares(parseInt(e.target.value, 10))}
                    className="w-full bg-slate-900/90 border border-white/15 hover:border-blue-400/50 focus:border-blue-400 focus:bg-slate-900 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors cursor-pointer shadow-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 50].map((n) => (
                      <option key={n} value={n} className="bg-slate-900 text-white">
                        {n} {t.calculator.shareUnit} ({(n * 0.1).toFixed(1)}% = {(n * 2640000).toLocaleString('uz-UZ')} {lang === 'ru' ? 'сум' : lang === 'en' ? 'UZS' : "so‘m"})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    {t.form.districtLabel}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full bg-slate-900/90 border border-white/15 hover:border-blue-400/50 focus:border-blue-400 focus:bg-slate-900 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white focus:outline-none transition-colors cursor-pointer shadow-sm"
                    >
                      {QASHQADARYO_DISTRICTS.map((d) => (
                        <option key={d.id} value={d.nameUz} className="bg-slate-900 text-white">
                          {lang === 'ru' ? d.nameRu : lang === 'en' ? d.nameEn : d.nameUz}
                        </option>
                      ))}
                    </select>
                  </div>
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

