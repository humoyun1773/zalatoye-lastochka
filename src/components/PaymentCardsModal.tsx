import React, { useState, useEffect } from 'react';
import { X, CreditCard, Copy, Check, Send, AlertCircle, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PaymentCardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
  packageAmount?: string;
}

interface CardItem {
  id: string;
  number: string;
  formatted: string;
  holder: string;
  bankType: string;
  gradient: string;
  badgeColor: string;
}

const CARDS_DATA: CardItem[] = [
  {
    id: 'card-1',
    number: '9860100126100203',
    formatted: '9860 1001 2610 0203',
    holder: 'Himoyidinov Muhammadsodiq',
    bankType: 'HUMO',
    gradient: 'from-amber-600/30 via-orange-950/40 to-slate-900',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  },
  {
    id: 'card-2',
    number: '5440810317970795',
    formatted: '5440 8103 1797 0795',
    holder: 'Himoyidinov Muhammadsodiq',
    bankType: 'UZCARD / MASTERCARD',
    gradient: 'from-blue-600/30 via-indigo-950/40 to-slate-900',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  },
  {
    id: 'card-3',
    number: '5440810376554753',
    formatted: '5440 8103 7655 4753',
    holder: 'Himoyidinov Muhammadsodiq',
    bankType: 'UZCARD / MASTERCARD',
    gradient: 'from-sky-600/30 via-cyan-950/40 to-slate-900',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
  },
  {
    id: 'card-4',
    number: '4463090000291438',
    formatted: '4463 0900 0029 1438',
    holder: 'Himoyidinov Muhammadsodiq',
    bankType: 'VISA',
    gradient: 'from-emerald-600/30 via-teal-950/40 to-slate-900',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  },
];

export const PaymentCardsModal: React.FC<PaymentCardsModalProps> = ({
  isOpen,
  onClose,
  packageName,
  packageAmount,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (card: CardItem) => {
    navigator.clipboard.writeText(card.number);
    setCopiedId(card.id);
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 },
      });
    } catch {}
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] bg-slate-900 border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white">
        {/* Top bar */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-slate-950/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>To‘lov va Sarmoya Rekvizitlari</span>
              </h3>
              <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Rasmiy tasdiqlangan bank kartalari</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5 bg-slate-900">
          {packageName && packageAmount && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-400/30 flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block">
                  Tanlangan paket:
                </span>
                <span className="text-sm sm:text-base font-black text-white">
                  {packageName}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block">
                  Investitsiya summasi:
                </span>
                <span className="text-sm sm:text-base font-black text-emerald-400 font-mono">
                  {packageAmount}
                </span>
              </div>
            </div>
          )}

          {/* Warning banner */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-start gap-3 text-slate-200">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs font-semibold text-amber-200 leading-relaxed">
              To‘lovni amalga oshirgach, to‘lov chekini (skrinshotini) rasmiy Telegram orqali yuboring. To‘lov darhol tasdiqlanib, shartnoma rasmiylashtiriladi.
            </div>
          </div>

          {/* Cards List */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300 px-1 uppercase tracking-wider">
              <span>Mavjud Bank Kartalari:</span>
              <span className="text-[11px] text-slate-400">Nusxa olish uchun bosing</span>
            </div>

            {CARDS_DATA.map((card) => {
              const isCopied = copiedId === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => handleCopy(card)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer bg-gradient-to-br ${card.gradient} relative overflow-hidden group shadow-lg ${
                    isCopied
                      ? 'border-emerald-400 ring-2 ring-emerald-500/40 scale-[1.01]'
                      : 'border-white/15 hover:border-white/40 hover:scale-[1.01]'
                  }`}
                >
                  {/* Background decoration */}
                  <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-white/5 rounded-full blur-xl pointer-events-none" />

                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider border ${card.badgeColor}`}>
                      {card.bankType}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(card);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isCopied
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                          <span>Nusxalandi!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-300" />
                          <span>Nusxa olish</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Card Number */}
                  <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-wider sm:tracking-widest my-2 select-all">
                    {card.formatted}
                  </div>

                  {/* Cardholder Name */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Karta egasi:
                      </span>
                      <span className="text-xs sm:text-sm font-black text-white tracking-wide">
                        {card.holder}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Bosib nusxa oling</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-slate-950/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="https://t.me/afrod991"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto blue-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg text-white"
          >
            <Send className="w-4 h-4 text-white" />
            <span>To‘lov chekini yuborish (@afrod991)</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-semibold hover:bg-white/20 cursor-pointer shadow-sm text-center"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};
