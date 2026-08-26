import React, { useEffect } from 'react';
import { X, ShieldCheck, Printer, FileSignature, ArrowRight } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationsType;
  onApply: () => void;
}

export const ContractModal: React.FC<ContractModalProps> = ({ isOpen, onClose, t, onApply }) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      // Prevent scrollbar layout jump
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-slate-900 border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white">
        {/* Modal Topbar */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">{t.modal.title}</h3>
              <p className="text-xs text-blue-300 font-semibold">{t.modal.badge}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white hover:text-blue-300 hover:border-blue-400 transition-colors cursor-pointer hidden sm:flex items-center gap-1.5 text-xs font-semibold shadow-sm"
              title="Chop etish"
            >
              <Printer className="w-4 h-4 text-blue-400" />
              <span>Chop etish</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-slate-200 text-xs sm:text-sm leading-relaxed font-sans bg-slate-900">
          <div className="text-center pb-4 border-b border-white/10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold font-mono mb-2 border border-blue-400/40">
              <FileSignature className="w-3.5 h-3.5 text-blue-400" />
              <span>№ ZL-2026/Q-SHARTNOMA</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wide">
              SARMOYAVIY HAMKORLIK SHARTNOMASI
            </h4>
            <p className="text-xs text-slate-400 mt-1">{t.modal.parties}</p>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
              <span className="block font-bold text-blue-400 text-xs mb-1">1-Modda:</span>
              <p>{t.modal.clause1}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
              <span className="block font-bold text-blue-400 text-xs mb-1">2-Modda:</span>
              <p>{t.modal.clause2}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
              <span className="block font-bold text-blue-400 text-xs mb-1">3-Modda:</span>
              <p>{t.modal.clause3}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
              <span className="block font-bold text-blue-400 text-xs mb-1">4-Modda:</span>
              <p>{t.modal.clause4}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
              <span className="block font-bold text-blue-400 text-xs mb-1">5-Modda:</span>
              <p>{t.modal.clause5}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-blue-950/50 border border-blue-400/30">
              <span className="font-bold text-blue-300 block mb-1">KOMPANIYA:</span>
              <p className="text-white font-bold">"ZALATIYE LASTOCHKA" MCHJ</p>
              <p className="text-slate-300 mt-1">Qashqadaryo viloyati, Qarshi sh.</p>
              <p className="text-slate-300 font-mono">Tel: +998 (90) 871-40-10</p>
              <div className="mt-3 p-2 rounded-xl bg-blue-500/20 border border-blue-400/40 text-[11px] text-blue-200 font-mono text-center font-bold">
                [ RASMIY MUHR VA IMZO ]
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
              <span className="font-bold text-blue-300 block mb-1">SARMOYADOR (HAMKOR):</span>
              <p className="text-white font-bold">Jismoniy shaxs (Investor)</p>
              <p className="text-slate-300 mt-1">Pasport / ID karta ma'lumotlari asosida</p>
              <p className="text-slate-300">Ulush miqdori: Tasdiqlangan hisobda</p>
              <div className="mt-3 p-2 rounded-xl bg-white/10 border border-white/15 text-[11px] text-slate-300 font-mono text-center font-bold">
                [ HAMKOR SHAXSIY IMZOSI ]
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-semibold hover:bg-white/20 cursor-pointer shadow-sm"
          >
            {t.modal.close}
          </button>

          <button
            onClick={() => {
              onClose();
              onApply();
            }}
            className="blue-btn px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg text-white"
          >
            <span>{t.modal.download}</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

