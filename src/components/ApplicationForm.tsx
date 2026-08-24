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
    <section id="application" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Vivid Crystal-Clear Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-multiply filter contrast-105 pointer-events-none -z-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2400&q=90')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/95 via-white/85 to-[#F8FAFC]/95 pointer-events-none -z-15" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto luxury-card bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.form.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              {t.form.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {t.form.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="text-center p-8 sm:p-10 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{t.form.successTitle}</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">{t.form.successDesc}</p>
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
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-200 cursor-pointer"
                >
                  Yana ariza yuborish
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
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
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl pl-11 pr-4 py-3.5 text-sm text-slate-900 focus:outline-none transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
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
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl pl-11 pr-4 py-3.5 text-sm text-slate-900 focus:outline-none transition-colors font-mono shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.form.sharesLabel}
                  </label>
                  <select
                    value={shares}
                    onChange={(e) => setShares(parseInt(e.target.value, 10))}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none transition-colors cursor-pointer shadow-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 50].map((n) => (
                      <option key={n} value={n} className="bg-white text-slate-900">
                        {n} ulush ({(n * 0.1).toFixed(1)}% = {(n * 2640000).toLocaleString('uz-UZ')} so‘m)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.form.districtLabel}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl pl-11 pr-4 py-3.5 text-sm text-slate-900 focus:outline-none transition-colors cursor-pointer shadow-sm"
                    >
                      {QASHQADARYO_DISTRICTS.map((d) => (
                        <option key={d.id} value={d.nameUz} className="bg-white text-slate-900">
                          {lang === 'ru' ? d.nameRu : lang === 'en' ? d.nameEn : d.nameUz}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {t.form.messageLabel}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.form.messagePlaceholder}
                  className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors resize-none shadow-sm"
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
                  className="px-6 py-4 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4 text-sky-600" />
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

