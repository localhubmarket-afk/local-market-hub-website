import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ComparisonSection } from './components/ComparisonSection';
import { DataSovereigntySection } from './components/DataSovereigntySection';
import { AccessibilitySection } from './components/AccessibilitySection';
import { NeuroInclusiveSection } from './components/NeuroInclusiveSection';
import { CustomerSuccessSection } from './components/CustomerSuccessSection';
import { AutomationSection } from './components/AutomationSection';
import { PricingSection } from './components/PricingSection';
import { StartSeasonModal } from './components/StartSeasonModal';
import { AccessibilityDrawer } from './components/AccessibilityDrawer';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainAppContent() {
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

  const { t } = useLanguage();

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
          <span>{t.topBanner.intellectualActive}</span>
          <button
            onClick={() => setIntellectualMode(false)}
            className="underline text-emerald-200 hover:text-white ml-2 text-[11px]"
          >
            {t.topBanner.switchBack}
          </button>
        </aside>
      )}

      {/* Strict 3-zone Header */}
      <Header
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
        onOpenStartSeason={() => setIsStartSeasonOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Header / Hero Section */}
        <Hero
          onOpenStartSeason={() => setIsStartSeasonOpen(true)}
          intellectualMode={intellectualMode}
        />

        {/* Section 1: Price and Value Comparison */}
        <ComparisonSection
          onOpenStartSeason={() => setIsStartSeasonOpen(true)}
          intellectualMode={intellectualMode}
        />

        {/* Section 2: Data Sovereignty and Canadian Protection */}
        <DataSovereigntySection
          intellectualMode={intellectualMode}
        />

        {/* Section 3: Protection Against Government Accessibility Fines */}
        <AccessibilitySection
          onOpenAccessibilityDrawer={() => setIsAccessibilityOpen(true)}
          intellectualMode={intellectualMode}
          setIntellectualMode={setIntellectualMode}
        />

        {/* Section: Our Mission: Building a Neuro-Inclusive Supply Chain */}
        <NeuroInclusiveSection
          intellectualMode={intellectualMode}
        />

        {/* Section 4: Customer Success and Education */}
        <CustomerSuccessSection
          intellectualMode={intellectualMode}
        />

        {/* Section 5: Technology and Automation */}
        <AutomationSection
          intellectualMode={intellectualMode}
        />

        {/* Section 6: Value-Based Pricing */}
        <PricingSection
          onOpenStartSeason={() => setIsStartSeasonOpen(true)}
          intellectualMode={intellectualMode}
        />
      </main>

      {/* Quiet Footer */}
      <Footer
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

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
