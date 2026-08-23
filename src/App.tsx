import { useState } from 'react';
import type { Language } from './types';
import { translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfitCalculator } from './components/ProfitCalculator';
import { FinancialTerms } from './components/FinancialTerms';
import { ProjectOverview } from './components/ProjectOverview';
import { DistrictsMap } from './components/DistrictsMap';
import { LegalGuarantees } from './components/LegalGuarantees';
import { ContractModal } from './components/ContractModal';
import { Roadmap } from './components/Roadmap';
import { ApplicationForm } from './components/ApplicationForm';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [lang, setLang] = useState<Language>('uz');
  const [selectedShares, setSelectedShares] = useState<number>(1);
  const [contractModalOpen, setContractModalOpen] = useState<boolean>(false);

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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      {/* Top Fixed Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenContract={() => setContractModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          t={t}
          onScrollToCalculator={scrollToCalculator}
          onScrollToForm={scrollToForm}
        />

        <ProjectOverview t={t} />

        <FinancialTerms
          t={t}
          onOpenContract={() => setContractModalOpen(true)}
        />

        <ProfitCalculator
          t={t}
          selectedShares={selectedShares}
          setSelectedShares={setSelectedShares}
          onApplyWithShares={handleApplyWithShares}
        />

        <DistrictsMap lang={lang} t={t} />

        <LegalGuarantees
          t={t}
          onOpenContract={() => setContractModalOpen(true)}
        />

        <Roadmap t={t} />

        <ApplicationForm
          lang={lang}
          t={t}
          initialShares={selectedShares}
        />

        <FaqSection t={t} />

        <ContactSection t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} />

      {/* Contract Modal */}
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

