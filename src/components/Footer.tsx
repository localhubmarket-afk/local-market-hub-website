import React from 'react';
import { ShieldCheck, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenStartSeason: () => void;
  onOpenAccessibility: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenStartSeason,
  onOpenAccessibility,
}) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Mission Summary */}
          <div className="space-y-3">
            <span className="text-base font-bold text-white tracking-tight">
              {t.common.brandName}
            </span>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {t.footer.mission}
            </p>
            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.footer.hostingNote}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.footer.privacyNote}</span>
              </div>
            </div>
          </div>

          {/* Platform & Mission Links (Moved from Top Nav) */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              {language === 'fr' ? 'Plateforme & Vision' : 'Platform & Operations'}
            </span>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#automation" className="hover:text-white transition-colors">
                  {t.nav.automation}
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-white transition-colors">
                  {t.nav.mission}
                </a>
              </li>
              <li>
                <a href="#customer-success" className="hover:text-white transition-colors">
                  {t.nav.customerSuccess}
                </a>
              </li>
            </ul>
          </div>

          {/* Architecture & Navigation */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              {t.footer.architectureTitle}
            </span>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  {t.nav.comparison}
                </a>
              </li>
              <li>
                <a href="#data-sovereignty" className="hover:text-white transition-colors">
                  {t.nav.dataSovereignty}
                </a>
              </li>
              <li>
                <a href="#accessibility" className="hover:text-white transition-colors">
                  {t.nav.accessibility}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
            </ul>
          </div>

          {/* Canadian Compliance, Language & Actions */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              {t.footer.legalSupportTitle}
            </span>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:francois@localmarkethub.ca"
                className="text-left text-slate-200 hover:text-emerald-300 font-semibold block transition-colors"
              >
                {t.footer.contactUs}
              </a>
              <button
                type="button"
                onClick={onOpenAccessibility}
                className="text-left text-emerald-400 hover:text-emerald-300 block"
              >
                {t.footer.wcagLink}
              </button>
              <button
                type="button"
                onClick={onOpenStartSeason}
                className="text-left text-white font-bold hover:text-emerald-300 block"
              >
                {t.footer.startSeasonLink}
              </button>

              <div className="pt-2 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <div className="flex items-center bg-slate-800 p-0.5 rounded border border-slate-700 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-0.5 rounded ${language === 'en' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('fr')}
                    className={`px-2 py-0.5 rounded ${language === 'fr' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Français
                  </button>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500">
                {t.footer.officialDomain}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              © {new Date().getFullYear()} Local Market Hub (localmarkethub.ca). {t.footer.rightsReserved}
            </span>
            <span aria-hidden="true">·</span>
            <a
              href="mailto:francois@localmarkethub.ca"
              className="text-slate-400 hover:text-white underline underline-offset-2 transition-colors"
            >
              {t.footer.contactUs}
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>{t.footer.badgePipeda}</span>
            <span aria-hidden="true">·</span>
            <span>{t.footer.badgeAoda}</span>
            <span aria-hidden="true">·</span>
            <span>{t.footer.badgeMadeInCanada}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
