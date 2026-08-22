import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, FileText, ChevronRight } from 'lucide-react';
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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
          ? 'bg-[#080c14]/95 backdrop-blur-xl border-b border-amber-500/20 py-2.5 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#080c14]/90 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand & Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 p-[2px] shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0a0f1c] rounded-[14px] flex items-center justify-center">
                  <span className="text-base sm:text-lg font-black text-amber-400 font-mono tracking-tighter">ZL</span>
                </div>
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm sm:text-base lg:text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  ZALATIYE LASTOCHKA
                </span>
                <span className="hidden xs:inline-block text-[9px] uppercase font-extrabold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  MCHJ
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 tracking-wide font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                O'rgimchak Taksi Park
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors tracking-wide relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action: Language Switcher & Contract Modal Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#0d1322] border border-slate-800/90 rounded-xl p-1 shadow-inner">
              <Globe className="w-3.5 h-3.5 text-amber-400 ml-1.5 mr-1 hidden sm:inline-block" />
              {(['uz', 'ru', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-lg uppercase transition-all duration-200 cursor-pointer ${
                    lang === l
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Desktop Contract Modal Button */}
            {onOpenContract && (
              <button
                onClick={onOpenContract}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold hover:border-amber-400 transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.guarantees.previewBtn}</span>
              </button>
            )}

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-[#080c14]/98 border-b border-amber-500/25 backdrop-blur-2xl px-5 pt-4 pb-8 space-y-4 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-amber-500/10 hover:text-amber-400 border border-transparent hover:border-amber-500/20 transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          {onOpenContract && (
            <div className="pt-3 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContract();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 font-bold text-xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>{t.guarantees.previewBtn}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};


