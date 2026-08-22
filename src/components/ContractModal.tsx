import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import type { TranslationsType } from '../data/translations';

interface ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationsType;
  onApply: () => void;
}

export const ContractModal: React.FC<ContractModalProps> = ({ isOpen, onClose, t, onApply }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c121e] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{t.modal.title}</h3>
              <p className="text-xs text-amber-400 font-medium">{t.modal.badge}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed font-sans bg-[#080d17]/50">
          <div className="text-center pb-4 border-b border-slate-800">
            <h4 className="text-base sm:text-lg font-black text-amber-400 uppercase tracking-wide">
              SARMOYAVIY HAMKORLIK SHARTNOMASI № ZL-2026/Q
            </h4>
            <p className="text-xs text-slate-400 mt-1">{t.modal.parties}</p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <p className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              {t.modal.clause1}
            </p>
            <p className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              {t.modal.clause2}
            </p>
            <p className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              {t.modal.clause3}
            </p>
            <p className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              {t.modal.clause4}
            </p>
            <p className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              {t.modal.clause5}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-bold text-amber-400 block mb-1">KOMPANIYA:</span>
              <p className="text-slate-300 font-semibold">"ZALATIYE LASTOCHKA" MCHJ</p>
              <p className="text-slate-400 mt-1">Qashqadaryo viloyati</p>
              <p className="text-slate-400">Tel: +998 (90) 871-40-10</p>
              <div className="mt-3 inline-block px-3 py-1 rounded border border-amber-500/40 text-[10px] text-amber-300 font-mono">
                [ MUHR VA IMZO O'RNI ]
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-bold text-amber-400 block mb-1">SARMOYADOR:</span>
              <p className="text-slate-300 font-semibold">Jismoniy shaxs (Hamkor)</p>
              <p className="text-slate-400 mt-1">Pasport / ID ma'lumotlari asosida</p>
              <p className="text-slate-400">Ulush miqdori: Tasdiqlangan</p>
              <div className="mt-3 inline-block px-3 py-1 rounded border border-slate-700 text-[10px] text-slate-400 font-mono">
                [ HAMKOR IMZOSI ]
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          >
            {t.modal.close}
          </button>

          <button
            onClick={() => {
              onClose();
              onApply();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-extrabold shadow-lg shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
          >
            {t.modal.download}
          </button>
        </div>
      </div>
    </div>
  );
};
