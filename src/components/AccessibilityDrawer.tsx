import React from 'react';
import { Sliders, Type, Contrast, BookOpen, Check, X, Globe, SpellCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AccessibilityDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  largeText: boolean;
  setLargeText: (val: boolean) => void;
  intellectualMode: boolean;
  setIntellectualMode: (val: boolean) => void;
  openDyslexic: boolean;
  setOpenDyslexic: (val: boolean) => void;
}

export const AccessibilityDrawer: React.FC<AccessibilityDrawerProps> = ({
  isOpen,
  onClose,
  highContrast,
  setHighContrast,
  largeText,
  setLargeText,
  intellectualMode,
  setIntellectualMode,
  openDyslexic,
  setOpenDyslexic,
}) => {
  const { language, setLanguage, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div 
      role="dialog" 
      aria-labelledby="a11y-panel-title"
      aria-modal="true"
      className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col justify-between overflow-y-auto"
    >
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-emerald-700" aria-hidden="true" />
            <h2 id="a11y-panel-title" className="text-base font-bold text-slate-900">
              {t.drawer.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label={language === 'fr' ? 'Fermer les paramètres d’accessibilité' : 'Close accessibility controls'}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 mt-3 leading-relaxed">
          {t.drawer.desc}
        </p>

        <div className="mt-5 space-y-3.5">
          {/* Language Selection within Accessibility Controls */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-900">
                  {language === 'fr' ? 'Langue / Language' : 'Interface Language'}
                </span>
              </div>
              <div className="flex items-center bg-slate-200/80 p-0.5 rounded-lg border border-slate-300">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                    language === 'en'
                      ? 'bg-white text-emerald-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-pressed={language === 'en'}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('fr')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                    language === 'fr'
                      ? 'bg-white text-emerald-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-pressed={language === 'fr'}
                >
                  FR
                </button>
              </div>
            </div>
          </div>

          {/* Intellectual Accessibility Toggle */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/80 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  <span className="text-sm font-semibold text-slate-900">{t.drawer.intellectualTitle}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {t.drawer.intellectualDesc}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={intellectualMode}
                onClick={() => setIntellectualMode(!intellectualMode)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 ${
                  intellectualMode ? 'bg-emerald-600' : 'bg-slate-300'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    intellectualMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* OpenDyslexic Font Mode */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/80 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <SpellCheck className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  <span className="text-sm font-semibold text-slate-900">{t.drawer.openDyslexicTitle}</span>
                  {openDyslexic && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">
                      {language === 'fr' ? 'Actif' : 'Active'}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.drawer.openDyslexicDesc}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={openDyslexic}
                aria-label={t.drawer.openDyslexicTitle}
                onClick={() => setOpenDyslexic(!openDyslexic)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 ${
                  openDyslexic ? 'bg-emerald-600' : 'bg-slate-300'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    openDyslexic ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* High Contrast Mode */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/80 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Contrast className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  <span className="text-sm font-semibold text-slate-900">{t.drawer.highContrastTitle}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {t.drawer.highContrastDesc}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={highContrast}
                onClick={() => setHighContrast(!highContrast)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 ${
                  highContrast ? 'bg-emerald-600' : 'bg-slate-300'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    highContrast ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Large Text Size */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/80 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  <span className="text-sm font-semibold text-slate-900">{t.drawer.largeTextTitle}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {t.drawer.largeTextDesc}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={largeText}
                onClick={() => setLargeText(!largeText)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 ${
                  largeText ? 'bg-emerald-600' : 'bg-slate-300'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    largeText ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Compliance Checklist Summary */}
        <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-2">
          <div className="font-semibold flex items-center gap-1.5 text-emerald-900">
            <Check className="w-4 h-4 text-emerald-700" />
            {t.drawer.protectionsActiveTitle}
          </div>
          <ul className="space-y-1 text-slate-700">
            {t.drawer.checkItems.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-200 text-center">
        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-colors"
        >
          {t.drawer.applyBtn}
        </button>
      </div>
    </div>
  );
};
