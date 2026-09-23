import React, { useState } from 'react';
import { Sliders, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenAccessibility: () => void;
  onOpenStartSeason: () => void;
  openDyslexic?: boolean;
  onToggleAccessibility?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAccessibility,
  onOpenStartSeason,
  openDyslexic = false,
  onToggleAccessibility,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleAccessibilityClick = () => {
    if (onToggleAccessibility) {
      onToggleAccessibility();
    } else {
      onOpenAccessibility();
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="w-full h-16 flex items-center justify-between gap-4 pl-4 sm:pl-6 lg:pl-8 pr-6 sm:pr-10 lg:pr-14">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 shrink-0 hover:text-emerald-700 transition-colors"
        >
          {t.common.brandName}
        </a>

        {/* Zone 2: Clean text navigation links with decreased horizontal gap (desktop only, hidden on tablet landscape) */}
        <nav className="hidden xl:flex items-center gap-4 xl:gap-5 text-sm font-medium text-slate-600">
          <a href="#comparison" className="hover:text-slate-900 transition-colors whitespace-nowrap">
            {t.nav.comparison}
          </a>
          <a href="#data-sovereignty" className="hover:text-slate-900 transition-colors whitespace-nowrap">
            {t.nav.dataSovereignty}
          </a>
          <a href="#accessibility" className="hover:text-slate-900 transition-colors whitespace-nowrap">
            {t.nav.accessibility}
          </a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors whitespace-nowrap">
            {t.nav.pricing}
          </a>
        </nav>

        {/* Zone 3: Primary actions & Language Selector */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Bilingual Language Switcher - hidden on mobile, visible on tablet (md: & lg:) and desktop (xl:) */}
          <div 
            className="hidden md:flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200"
            role="group"
            aria-label="Language selector"
          >
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                language === 'en'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="English"
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                language === 'fr'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Français"
              aria-pressed={language === 'fr'}
            >
              FR
            </button>
          </div>

          {/* Accessibility Button - permanently placed on the main header, next to hamburger on mobile and tablet */}
          <div className="flex items-center gap-1">
            <button
              onClick={onOpenAccessibility}
              type="button"
              aria-pressed={openDyslexic}
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                openDyslexic
                  ? 'bg-emerald-800 text-white shadow-xs hover:bg-emerald-900'
                  : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
              }`}
              title={t.common.accessibilitySettings}
            >
              <Sliders className={`w-3.5 h-3.5 ${openDyslexic ? 'text-white' : 'text-emerald-700'}`} aria-hidden="true" />
              <span>{t.common.accessibilityCta}</span>
              {openDyslexic && (
                <span className="text-[10px] font-bold bg-emerald-600 text-white px-1 py-0.5 rounded leading-none">
                  ON
                </span>
              )}
            </button>
          </div>

          {/* Start Your Full Season ($500) Button - hidden on mobile and tablet, available on desktop (xl:) and in hamburger menu */}
          <button
            onClick={onOpenStartSeason}
            type="button"
            className="hidden xl:inline-flex items-center px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shadow-sm active:scale-98"
          >
            {t.common.startSeasonCta}
          </button>

          {/* Hamburger menu toggle (mobile, tablet portrait, and tablet landscape) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="xl:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet nav dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-200 bg-white px-4 sm:px-6 pt-2 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>{language === 'fr' ? 'Langue / Language' : 'Language / Langue'}</span>
            </span>
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  language === 'fr'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Français
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a 
              href="#comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-700"
            >
              {t.nav.comparison}
            </a>
            <a 
              href="#data-sovereignty" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-700"
            >
              {t.nav.dataSovereignty}
            </a>
            <a 
              href="#accessibility" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-700"
            >
              {t.nav.accessibility}
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-700"
            >
              {t.nav.pricing}
            </a>
          </nav>
          {/* Primary Action Button in Mobile Dropdown */}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStartSeason();
              }}
              type="button"
              className="w-full py-3 px-4 text-center font-bold text-sm text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-sm active:scale-98"
            >
              {t.common.startSeasonCta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
