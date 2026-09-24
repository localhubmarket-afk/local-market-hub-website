import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ComparisonSection } from './components/ComparisonSection';
import { VendorManagementSection } from './components/VendorManagementSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ImplementationRoadmap } from './components/ImplementationRoadmap';
import { PricingSection } from './components/PricingSection';
import { StandardsPage } from './components/StandardsPage';
import { StartSeasonModal } from './components/StartSeasonModal';
import { AccessibilityDrawer } from './components/AccessibilityDrawer';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainAppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'standards'>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#standards') {
        return 'standards';
      }
    }
    return 'home';
  });

  const [isStartSeasonOpen, setIsStartSeasonOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [intellectualMode, setIntellectualMode] = useState(false);
  const [openDyslexic, setOpenDyslexic] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem('wcag-open-dyslexic') === 'true';
      } catch {
        return false;
      }
    }
    return false;
  });

  const { t, language } = useLanguage();
  const isFr = language === 'fr';

  // Listen to hash changes for direct linking
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#standards') {
        setCurrentPage('standards');
      } else if (window.location.hash === '#home' || window.location.hash === '') {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'standards') => {
    setCurrentPage(page);
    if (page === 'standards') {
      window.location.hash = 'standards';
    } else {
      if (window.location.hash === '#standards') {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };

  // Sync accessibility classes with document root for full WCAG support
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('wcag-high-contrast');
    } else {
      document.documentElement.classList.remove('wcag-high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (largeText) {
      document.documentElement.classList.add('wcag-large-text');
    } else {
      document.documentElement.classList.remove('wcag-large-text');
    }
  }, [largeText]);

  useEffect(() => {
    if (openDyslexic) {
      document.documentElement.classList.add('wcag-open-dyslexic', 'wcag-opendyslexic');
      if (document.body) {
        document.body.classList.add('wcag-open-dyslexic', 'wcag-opendyslexic');
      }
      try {
        localStorage.setItem('wcag-open-dyslexic', 'true');
      } catch {}
    } else {
      document.documentElement.classList.remove('wcag-open-dyslexic', 'wcag-opendyslexic');
      if (document.body) {
        document.body.classList.remove('wcag-open-dyslexic', 'wcag-opendyslexic');
      }
      try {
        localStorage.setItem('wcag-open-dyslexic', 'false');
      } catch {}
    }
  }, [openDyslexic]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 overflow-x-hidden">
      {/* Top Banner indicating Intellectual Accessibility status when enabled */}
      {intellectualMode && (
        <aside 
          aria-label="Accessibility Mode Status"
          className="bg-emerald-800 text-white py-2 px-4 text-xs font-semibold text-center flex items-center justify-center gap-2"
        >
          <span>{isFr ? 'Mode langage simple activé' : 'Plain language reading mode active'}</span>
          <button
            onClick={() => setIntellectualMode(false)}
            className="underline text-emerald-200 hover:text-white ml-2 text-[11px]"
          >
            {isFr ? 'Revenir au mode standard' : 'Switch back to standard'}
          </button>
        </aside>
      )}

      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
        onOpenStartSeason={() => setIsStartSeasonOpen(true)}
        openDyslexic={openDyslexic}
      />

      {/* Main View Router: Page 1 (Home) or Page 2 (Standards) */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            {/* Page 1: Homepage - Time-Saving & Vendor Management */}
            <Hero
              onOpenStartSeason={() => setIsStartSeasonOpen(true)}
              intellectualMode={intellectualMode}
              onNavigateToStandards={() => handleNavigate('standards')}
            />

            {/* Section 1: Spreadsheets vs Simple Hub */}
            <ComparisonSection
              onOpenStartSeason={() => setIsStartSeasonOpen(true)}
              intellectualMode={intellectualMode}
            />

            {/* Section 2: Core Vendor Management Tools */}
            <VendorManagementSection
              onOpenStartSeason={() => setIsStartSeasonOpen(true)}
              intellectualMode={intellectualMode}
            />

            {/* Section 3: Interactive Savings Calculator */}
            <SavingsCalculator
              onOpenStartSeason={() => setIsStartSeasonOpen(true)}
            />

            {/* Customer Onboarding Roadmap */}
            <ImplementationRoadmap />

            {/* Section 4: Simple $500 Flat Season Pricing */}
            <PricingSection
              onOpenStartSeason={() => setIsStartSeasonOpen(true)}
              intellectualMode={intellectualMode}
            />
          </>
        ) : (
          /* Page 2: Our Standards - Platform Security & Accessibility */
          <StandardsPage
            onBackToHome={() => handleNavigate('home')}
            onOpenAccessibilityDrawer={() => setIsAccessibilityOpen(true)}
            onOpenStartSeason={() => setIsStartSeasonOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenStartSeason={() => setIsStartSeasonOpen(true)}
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
      />

      {/* Interactive Modals & Drawers */}
      <StartSeasonModal
        isOpen={isStartSeasonOpen}
        onClose={() => setIsStartSeasonOpen(false)}
      />

      <AccessibilityDrawer
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        largeText={largeText}
        setLargeText={setLargeText}
        intellectualMode={intellectualMode}
        setIntellectualMode={setIntellectualMode}
        openDyslexic={openDyslexic}
        setOpenDyslexic={setOpenDyslexic}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}

export default App;
