import { useEffect, useState } from 'react';
import type { Language } from './types';
import { translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProjectOverview } from './components/ProjectOverview';
import { FinancialTerms } from './components/FinancialTerms';
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
import { PaymentCardsModal } from './components/PaymentCardsModal';
import { PageLoader } from './components/PageLoader';

// Cartoon Wealth Rotating Background Images (Scrooge McDuck & Tom & Jerry)
import scroogeMoney from './assets/scrooge-money.png';
import tomJerryCash from './assets/tom-jerry-cash.png';
import scroogeSwim from './assets/scrooge-swim.png';
import tomStack from './assets/tom-stack.png';
import scroogeCash from './assets/scrooge-cash.png';
import tomMoneyEyes from './assets/tom-money-eyes.png';
import tomGraffiti from './assets/tom-graffiti.png';
import scroogeVault from './assets/scrooge-vault.png';
import tomBossCash from './assets/tom-boss-cash.png';

const bgImages = [
  { src: scroogeMoney, name: 'Scrooge Money' },
  { src: tomJerryCash, name: 'Tom & Jerry Cash Gun' },
  { src: scroogeSwim, name: 'Scrooge Swimming Gold' },
  { src: tomStack, name: 'Tom Calling Cash Stack' },
  { src: scroogeCash, name: 'Scrooge Cash Diamond' },
  { src: tomMoneyEyes, name: 'Tom Money Bag Eyes' },
  { src: tomGraffiti, name: 'Tom Graffiti Dollar Rain' },
  { src: scroogeVault, name: 'Scrooge Vault Wealth' },
  { src: tomBossCash, name: 'Tom Mafia Boss 100 Dollars' },
];

export function App() {
  const [lang, setLang] = useState<Language>('uz');
  const [selectedShares] = useState<number>(1);
  const [contractModalOpen, setContractModalOpen] = useState<boolean>(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<{ name?: string; amount?: string }>({});
  const [bgIndex, setBgIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const t = translations[lang] || translations.uz;

  const scrollToForm = () => {
    const el = document.getElementById('application');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPayment = (name?: string, amount?: string) => {
    setSelectedPackage({ name, amount });
    setPaymentModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-blue-600 selection:text-white flex flex-col justify-between overflow-x-hidden font-sans">
      {/* Initial Luxury Page Loader Screen */}
      <PageLoader lang={lang} />

      {/* 0. Full-Screen Rotating Smooth Background Slideshow - 100% Crystal Clear */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {bgImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.name}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              bgIndex === idx
                ? 'opacity-95 filter contrast-105 brightness-95'
                : 'opacity-0 pointer-events-none'
            }`}
          />
        ))}
        {/* Soft Clear Tint for White Text Legibility without Blurring the Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950/60 pointer-events-none" />
      </div>

      {/* 1. Top Fixed Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenContract={() => setContractModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        {/* 2. Hero Section */}
        <Hero
          t={t}
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
          onOpenPayment={handleOpenPayment}
        />

        {/* 6. Qanday ishlaydi (4 bosqichli jarayon) */}
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

      {/* 19. Rasmiy To'lov Kartalari Modali */}
      <PaymentCardsModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        packageName={selectedPackage.name}
        packageAmount={selectedPackage.amount}
      />
    </div>
  );
}

export default App;

