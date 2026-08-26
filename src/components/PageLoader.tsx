import React, { useEffect, useState } from 'react';
import type { Language } from '../types';

interface PageLoaderProps {
  lang: Language;
  onFinish?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ lang, onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const texts = {
    uz: {
      title: "O'RGIMCHAK TAKSI",
      company: "ZALATIYE LASTOCHKA MCHJ",
      status: "Tizim ma'lumotlari yuklanmoqda...",
      ready: "Tayyor!",
    },
    ru: {
      title: "O'RGIMCHAK TAKSI",
      company: "??? ZALATIYE LASTOCHKA",
      status: "???????? ?????? ???????...",
      ready: "??????!",
    },
    en: {
      title: "O'RGIMCHAK TAKSI",
      company: "LLC ZALATIYE LASTOCHKA",
      status: "Loading system data...",
      ready: "Ready!",
    },
  };

  const t = texts[lang] || texts.uz;

  useEffect(() => {
    // Smooth progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              setIsHidden(true);
              if (onFinish) onFinish();
            }, 600); // Wait for fade-out transition
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 12;
        return Math.min(prev + increment, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white transition-all duration-700 ease-in-out ${
        isDone ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
        {/* Animated Brand Logo Icon */}
        <div className="relative mb-6">
          {/* Pulsing Ripple Rings */}
          <div className="absolute -inset-3 rounded-3xl bg-blue-500/20 animate-ping duration-1000" />
          <div className="absolute -inset-1.5 rounded-3xl bg-blue-500/40 blur-sm" />
          
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 flex items-center justify-center text-3xl sm:text-4xl shadow-2xl border border-blue-400/40">
            <span className="animate-bounce">??</span>
          </div>
        </div>

        {/* Brand Names */}
        <h1 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white mb-1">
          {t.title}
        </h1>
        <span className="text-xs font-bold font-mono tracking-widest text-blue-400 uppercase mb-8">
          {t.company}
        </span>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900/80 border border-slate-800 rounded-full p-1 shadow-inner relative overflow-hidden mb-4">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 transition-all duration-200 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer light sweep on progress bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* Status Text & Percentage */}
        <div className="flex items-center justify-between w-full text-xs font-mono px-1">
          <span className="text-slate-400 font-sans flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            {progress < 100 ? t.status : t.ready}
          </span>
          <span className="text-blue-400 font-bold font-mono">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};
