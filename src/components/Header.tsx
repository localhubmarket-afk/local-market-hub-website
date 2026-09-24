import React, { useState } from 'react';
import { Sliders, Menu, X, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  currentPage: 'home' | 'standards';
  onNavigate: (page: 'home' | 'standards') => void;
  onOpenAccessibility: () => void;
  onOpenStartSeason: () => void;
  openDyslexic?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenAccessibility,
  onOpenStartSeason,
  openDyslexic = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isFr = language === 'fr';

  const handleNavClick = (page: 'home' | 'standards', anchor?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="w-full h-16 flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Logo & Brand */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 shrink-0 hover:text-emerald-700 transition-colors text-left"
        >
          <span>Local Market Hub</span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors whitespace-nowrap ${
              currentPage === 'home'
                ? 'text-emerald-800 font-bold'
                : 'hover:text-slate-900 text-slate-600'
            }`}
          >
            {isFr ? 'Accueil & Outils' : 'Home & Time-Saving'}
          </button>

          <button
            onClick={() => handleNavClick('home', '#vendor-management')}
            className="hover:text-slate-900 text-slate-600 transition-colors whitespace-nowrap"
          >
            {isFr ? 'Gestion des Marchands' : 'Vendor Management'}
          </button>

          <button
            onClick={() => handleNavClick('home', '#pricing')}
            className="hover:text-slate-900 text-slate-600 transition-colors whitespace-nowrap"
          >
            {isFr ? 'Tarif (500 $)' : 'Pricing ($500)'}
          </button>

          <button
            onClick={() => handleNavClick('standards')}
            className={`inline-flex items-center gap-1.5 transition-colors whitespace-nowrap px-2.5 py-1 rounded-md ${
              currentPage === 'standards'
                ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                : 'hover:text-slate-900 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>{isFr ? 'Nos Standards (Sécurité & Accessibilité)' : 'Our Standards (Security & Accessibility)'}</span>
          </button>
        </nav>

        {/* Zone 3: Actions & Settings */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Language Switcher */}
          <div 
            className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200"
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
            >
              FR
            </button>
          </div>

          {/* Accessibility Drawer Toggle */}
          <button
            onClick={onOpenAccessibility}
            type="button"
            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              openDyslexic
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
            }`}
            title="Accessibility settings"
          >
            <Sliders className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden sm:inline">{isFr ? 'Accessibilité' : 'Accessibility'}</span>
          </button>

          {/* Start Season Button */}
          <button
            onClick={onOpenStartSeason}
            type="button"
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shadow-xs active:scale-98"
          >
            {isFr ? 'Lancer votre saison (500 $)' : 'Start Season ($500)'}
          </button>

          {/* Hamburger Menu Toggle (Mobile & Tablet) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <button 
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 px-3 rounded-lg ${currentPage === 'home' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-slate-50'}`}
            >
              {isFr ? 'Accueil & Outils' : 'Home & Time-Saving'}
            </button>

            <button 
              onClick={() => handleNavClick('home', '#vendor-management')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              {isFr ? 'Gestion des Marchands' : 'Vendor Management'}
            </button>

            <button 
              onClick={() => handleNavClick('home', '#pricing')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              {isFr ? 'Tarif (500 $)' : 'Pricing ($500)'}
            </button>

            <button 
              onClick={() => handleNavClick('standards')}
              className={`text-left py-2 px-3 rounded-lg flex items-center gap-2 ${currentPage === 'standards' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-slate-50'}`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{isFr ? 'Nos Standards (Sécurité & Accessibilité)' : 'Our Standards (Security & Accessibility)'}</span>
            </button>
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStartSeason();
              }}
              type="button"
              className="w-full py-3 px-4 text-center font-bold text-sm text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-sm"
            >
              {isFr ? 'Lancer votre saison (500 $)' : 'Start Season ($500)'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
