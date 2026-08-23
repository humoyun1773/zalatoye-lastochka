import React, { useState, useEffect, useRef } from 'react';
import { Globe, Menu, X, FileText, ChevronRight, ChevronDown, Check, Phone, Send } from 'lucide-react';
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
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#terms', label: t.nav.terms },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#why', label: t.why?.tag || 'Afzalliklar' },
    { href: '#districts', label: t.nav.districts },
    { href: '#gallery', label: t.gallery?.tag || 'Galereya' },
    { href: '#guarantees', label: t.nav.guarantees },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  const languages: { code: Language; label: string; name: string }[] = [
    { code: 'uz', label: 'UZ', name: "O'zbekcha" },
    { code: 'ru', label: 'RU', name: 'Русский' },
    { code: 'en', label: 'EN', name: 'English' },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070A0F]/95 backdrop-blur-2xl border-b border-white/10 py-2.5 shadow-xl shadow-black/50'
            : 'bg-gradient-to-b from-[#070A0F]/95 to-[#070A0F]/60 backdrop-blur-md border-b border-white/5 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand & Logo */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#FFD21F] via-yellow-400 to-[#F59E0B] p-[2px] shadow-lg shadow-[#FFD21F]/20 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-[#070A0F] rounded-[14px] flex items-center justify-center">
                    <span className="text-sm sm:text-base font-black text-[#FFD21F] font-mono tracking-tighter">🕸</span>
                  </div>
                </div>
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-[#22C55E]"></span>
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="font-black text-xs sm:text-base lg:text-lg tracking-tight text-white group-hover:text-[#FFD21F] transition-colors truncate max-w-[150px] xs:max-w-none">
                    O‘RGIMCHAK TAKSI
                  </span>
                  <span className="hidden xs:inline-block text-[9px] uppercase font-extrabold tracking-wider px-1.5 py-0.5 rounded bg-[#FFD21F]/15 text-[#FFD21F] border border-[#FFD21F]/30">
                    MCHJ
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-slate-400 tracking-wide font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]"></span>
                  ZALATIYE LASTOCHKA
                </span>
              </div>
            </a>

            {/* Desktop Nav Links (xl screens) */}
            <nav className="hidden xl:flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold text-slate-300 hover:text-[#FFD21F] transition-colors tracking-wide relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD21F] transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Right Action: Custom Language Dropdown & Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Custom Luxury Language Dropdown (Desktop & Tablet) */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 sm:gap-2 bg-[#111820] hover:bg-[#17212c] border border-white/10 hover:border-[#FFD21F]/50 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs font-bold text-slate-200 transition-all duration-200 shadow-sm cursor-pointer group"
                  aria-haspopup="true"
                  aria-expanded={langDropdownOpen}
                >
                  <Globe className="w-3.5 h-3.5 text-[#FFD21F] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-extrabold uppercase font-mono text-white">{currentLang.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 group-hover:text-[#FFD21F] transition-transform duration-200 ${
                      langDropdownOpen ? 'rotate-180 text-[#FFD21F]' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu Popup */}
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-[#111820] border border-[#FFD21F]/30 rounded-2xl shadow-2xl backdrop-blur-2xl p-1.5 z-50 animate-fadeIn">
                    {languages.map((l) => {
                      const isSelected = lang === l.code;
                      return (
                        <button
                          key={l.code}
                          type="button"
                          onClick={() => {
                            setLang(l.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? 'bg-[#FFD21F] text-slate-950 shadow-md font-black'
                              : 'text-slate-300 hover:bg-white/5 hover:text-[#FFD21F]'
                          }`}
                        >
                          <span className="font-mono">{l.label}</span>
                          <span className="text-[11px] font-normal opacity-90">{l.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Desktop Contract Modal Button */}
              {onOpenContract && (
                <button
                  onClick={onOpenContract}
                  className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFD21F]/10 hover:bg-[#FFD21F]/20 border border-[#FFD21F]/30 text-[#FFD21F] text-xs font-bold hover:border-[#FFD21F] transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FFD21F]" />
                  <span>{t.guarantees.previewBtn}</span>
                </button>
              )}

              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl bg-[#111820] border border-white/10 text-slate-300 hover:text-[#FFD21F] hover:border-[#FFD21F]/50 focus:outline-none transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#FFD21F]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Responsive Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-[#070A0F]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto animate-fadeIn p-4 sm:p-6 text-white">
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FFD21F] flex items-center justify-center text-slate-950 font-black text-sm">
                🕸
              </div>
              <div>
                <span className="font-black text-white text-sm block">O‘RGIMCHAK TAKSI</span>
                <span className="text-[10px] text-[#FFD21F] font-semibold">ZALATIYE LASTOCHKA MCHJ</span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-[#111820] border border-white/10 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-bold text-slate-200 hover:text-[#FFD21F] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#FFD21F]" />
              </a>
            ))}
          </div>

          {/* Language Selector Chips & Action CTA */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            {/* Language Selection Chips */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Tilni tanlang:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                    }}
                    className={`py-2.5 px-2 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      lang === l.code
                        ? 'bg-[#FFD21F] text-slate-950 border-[#FFD21F] font-black shadow-md'
                        : 'bg-[#111820] text-slate-300 border-white/10 hover:bg-white/5'
                    }`}
                  >
                    {l.label} ({l.name})
                  </button>
                ))}
              </div>
            </div>

            {/* Contract Modal Trigger */}
            {onOpenContract && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContract();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#FFD21F]/10 border border-[#FFD21F]/30 text-[#FFD21F] font-bold text-xs hover:bg-[#FFD21F]/20 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#FFD21F]" />
                <span>{t.guarantees.previewBtn}</span>
              </button>
            )}

            {/* Quick Contact Line */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:+998908714010"
                className="py-3 px-2 rounded-xl bg-[#FFD21F]/10 border border-[#FFD21F]/25 text-[#FFD21F] text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#FFD21F]/20 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
                <span>Qo'ng'iroq</span>
              </a>

              <a
                href="https://t.me/afrod991"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-sky-500/25 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



