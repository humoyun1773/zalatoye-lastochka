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
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-white border border-amber-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Topbar */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">{t.modal.title}</h3>
              <p className="text-xs text-amber-700 font-semibold">{t.modal.badge}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors cursor-pointer hidden sm:flex items-center gap-1.5 text-xs font-semibold shadow-sm"
              title="Chop etish"
            >
              <Printer className="w-4 h-4 text-amber-600" />
              <span>Chop etish</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors cursor-pointer shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-slate-600 text-xs sm:text-sm leading-relaxed font-sans bg-white">
          <div className="text-center pb-4 border-b border-slate-200">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold font-mono mb-2 border border-amber-300">
              <FileSignature className="w-3.5 h-3.5 text-amber-600" />
              <span>№ ZL-2026/Q-SHARTNOMA</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide">
              SARMOYAVIY HAMKORLIK SHARTNOMASI
            </h4>
            <p className="text-xs text-slate-500 mt-1">{t.modal.parties}</p>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="block font-bold text-amber-800 text-xs mb-1">1-Modda:</span>
              <p>{t.modal.clause1}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="block font-bold text-amber-800 text-xs mb-1">2-Modda:</span>
              <p>{t.modal.clause2}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="block font-bold text-amber-800 text-xs mb-1">3-Modda:</span>
              <p>{t.modal.clause3}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="block font-bold text-amber-800 text-xs mb-1">4-Modda:</span>
              <p>{t.modal.clause4}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="block font-bold text-amber-800 text-xs mb-1">5-Modda:</span>
              <p>{t.modal.clause5}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="font-bold text-amber-800 block mb-1">KOMPANIYA:</span>
              <p className="text-slate-900 font-bold">"ZALATIYE LASTOCHKA" MCHJ</p>
              <p className="text-slate-600 mt-1">Qashqadaryo viloyati, Qarshi sh.</p>
              <p className="text-slate-600 font-mono">Tel: +998 (90) 871-40-10</p>
              <div className="mt-3 p-2 rounded-xl bg-amber-100 border border-amber-300 text-[11px] text-amber-900 font-mono text-center font-bold">
                [ RASMIY MUHR VA IMZO ]
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-amber-800 block mb-1">SARMOYADOR (HAMKOR):</span>
              <p className="text-slate-900 font-bold">Jismoniy shaxs (Investor)</p>
              <p className="text-slate-600 mt-1">Pasport / ID karta ma'lumotlari asosida</p>
              <p className="text-slate-600">Ulush miqdori: Tasdiqlangan hisobda</p>
              <div className="mt-3 p-2 rounded-xl bg-slate-200/80 border border-slate-300 text-[11px] text-slate-700 font-mono text-center font-bold">
                [ HAMKOR SHAXSIY IMZOSI ]
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 cursor-pointer shadow-sm"
          >
            {t.modal.close}
          </button>

          <button
            onClick={() => {
              onClose();
              onApply();
            }}
            className="gold-btn px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 cursor-pointer"
          >
            <span>{t.modal.download}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

