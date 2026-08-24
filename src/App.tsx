import { useState, useEffect } from 'react';
import type { Language } from './types';
import { translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProjectOverview } from './components/ProjectOverview';
import { FinancialTerms } from './components/FinancialTerms';
import { ProfitCalculator } from './components/ProfitCalculator';
import { Roadmap } from './components/Roadmap';
import { LegalGuarantees } from './components/LegalGuarantees';
import { WhySpiderTaxi } from './components/WhySpiderTaxi';
import { DistrictsMap } from './components/DistrictsMap';
import { CTASection } from './components/CTASection';
import { ApplicationForm } from './components/ApplicationForm';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Disclaimer } from './components/Disclaimer';
import { Footer } from './components/Footer';
import { ContractModal } from './components/ContractModal';

// Cartoon Wealth & Gold Background Images for dynamic rotation
import scroogeMoney from './assets/scrooge-money.png';
import scroogeSwim from './assets/scrooge-swim.png';
import scroogeCash from './assets/scrooge-cash.png';
import scroogeVault from './assets/scrooge-vault.png';

const backgroundSlides = [scroogeMoney, scroogeSwim, scroogeCash, scroogeVault];

export function App() {
  const [lang, setLang] = useState<Language>('uz');
  const [selectedShares, setSelectedShares] = useState<number>(1);
  const [contractModalOpen, setContractModalOpen] = useState<boolean>(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Auto-rotate background image every 4 seconds smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % backgroundSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const t = translations[lang] || translations.uz;

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('application');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyWithShares = (shares: number) => {
    setSelectedShares(shares);
    scrollToForm();
  };

  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col justify-between overflow-x-hidden font-sans">
      {/* 0. Full-Screen Fixed Smooth Rotating Background Images */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-slate-950">
        {backgroundSlides.map((slideSrc, idx) => (
          <img
            key={idx}
            src={slideSrc}
            alt={`Scrooge Cartoon Background ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center filter contrast-105 brightness-100 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* 1. Top Fixed Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenContract={() => setContractModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          t={t}
          onScrollToCalculator={scrollToCalculator}
          onScrollToForm={scrollToForm}
        />

        {/* 3. Trust Stats Bar (01: 15 ta tuman, 02: 16 oy, 03: 2.64 mln, 04: 100%) */}
        <TrustBar t={t} />

        {/* 4. Loyiha haqida (6 ta ustun va 4 ta floating cards taxi visual) */}
        <ProjectOverview t={t} />

        {/* 5. Investitsiya shartlari (Katta premium card) */}
        <FinancialTerms
          t={t}
          onOpenContract={() => setContractModalOpen(true)}
        />

        {/* 6. Interaktiv Kalkulyator (Real-time hisob-kitob) */}
        <ProfitCalculator
          t={t}
          selectedShares={selectedShares}
          setSelectedShares={setSelectedShares}
          onApplyWithShares={handleApplyWithShares}
        />

        {/* 7. Qanday ishlaydi (4 bosqichli jarayon) */}
        <Roadmap t={t} />

        {/* 8. Huquqiy kafolatlar va shaffoflik */}
        <LegalGuarantees
          t={t}
          onOpenContract={() => setContractModalOpen(true)}
        />

        {/* 9. Nega aynan O‘rgimchak Taksi? (6 ta ustunlik) */}
        <WhySpiderTaxi t={t} />

        {/* 10. Qashqadaryo 15 ta tumani xaritasi/kartalari */}
        <DistrictsMap lang={lang} t={t} />

        {/* 11. Katta CTA Section */}
        <CTASection
          t={t}
          onOpenContract={() => setContractModalOpen(true)}
          onApply={scrollToForm}
        />

        {/* 13. Hamkorlikka ariza qoldirish shakli */}
        <ApplicationForm
          lang={lang}
          t={t}
          initialShares={selectedShares}
        />

        {/* 14. Aloqa ma'lumotlari */}
        <ContactSection t={t} />

        {/* 15. FAQ (Ko'p so'raladigan savollar) */}
        <FaqSection t={t} />

        {/* 16. Huquqiy Disclaimer */}
        <Disclaimer t={t} />
      </main>

      {/* 17. Footer */}
      <Footer t={t} />

      {/* 18. Rasmiy Shartnoma Modali */}
      <ContractModal
        isOpen={contractModalOpen}
        onClose={() => setContractModalOpen(false)}
        t={t}
        onApply={scrollToForm}
      />
    </div>
  );
}

export default App;

