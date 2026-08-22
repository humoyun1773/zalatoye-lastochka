import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Phone, Send, FileText } from 'lucide-react';
import type { Language } from '../types';
import type { TranslationsType } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationsType;
  onOpenContract?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, onOpenContract }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#terms', label: t.nav.terms },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#districts', label: t.nav.districts },
    { href: '#guarantees', label: t.nav.guarantees },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-300 p-[2px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0b0f19] rounded-[14px] flex items-center justify-center">
                <span className="text-xl font-black text-amber-400 font-mono tracking-tighter">ZL</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  ZALATIYE LASTOCHKA
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  MCHJ
                </span>
              </div>
              <p className="text-xs text-slate-400 tracking-wide font-medium flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                O'rgimchak Taksi Park
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Language Switcher & Quick Contacts */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-1 shadow-inner">
              <Globe className="w-3.5 h-3.5 text-amber-400 ml-2 mr-1" />
              {(['uz', 'ru', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg uppercase transition-all duration-200 ${
                    lang === l
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md font-extrabold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Contract Preview Button */}
            {onOpenContract && (
              <button
                onClick={onOpenContract}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:border-amber-400 transition-all duration-200 cursor-pointer"
                title="Shartnoma namunasi"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Shartnoma</span>
              </button>
            )}

            {/* Direct Telegram Button */}
            <a
              href="https://t.me/afrod991"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold hover:border-sky-400 transition-all duration-200"
              title="Telegram: @afrod991"
            >
              <Send className="w-3.5 h-3.5" />
              <span>@afrod991</span>
            </a>

            {/* Call Button */}
            <a
              href="tel:+998908714010"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5 fill-slate-950" />
              <span>+998 (90) 871-40-10</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Lang Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
              {(['uz', 'ru', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-[11px] font-bold rounded uppercase ${
                    lang === l ? 'bg-amber-500 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1c]/98 border-b border-amber-500/20 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-amber-500/10 hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href="tel:+998908714010"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30"
            >
              <Phone className="w-4 h-4" />
              <span>+998 (90) 871-40-10</span>
            </a>
            <a
              href="https://t.me/afrod991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-semibold text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: @afrod991</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

