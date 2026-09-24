import React from 'react';
import { ShieldCheck, MapPin, HeartHandshake, Sliders, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (page: 'home' | 'standards') => void;
  onOpenStartSeason: () => void;
  onOpenAccessibility: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenStartSeason,
  onOpenAccessibility,
}) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Purpose */}
          <div className="space-y-3">
            <span className="text-base font-bold text-white tracking-tight">
              Local Market Hub
            </span>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {isFr
                ? 'Logiciel simple de gestion pour marchés publics, marchés fermiers et foires artisanales à travers le Canada.'
                : 'Simple vendor management software for farmers markets, artisan fairs, and community events across Canada.'}
            </p>
            <div className="pt-2 text-[11px] text-slate-400 space-y-1.5">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{isFr ? 'Données hébergées à Montréal et Toronto' : 'Data hosted securely in Montreal & Toronto'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{isFr ? 'Accessible à tous · Conforme WCAG 2.2 AA' : 'Accessible for all · WCAG 2.2 AA in plain words'}</span>
              </div>
            </div>
          </div>

          {/* Page 1: Homepage / Features */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              {isFr ? 'Fonctionnalités & Outils' : 'Time-Saving Tools'}
            </span>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  {isFr ? 'Accueil' : 'Homepage Overview'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('vendor-management')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  {isFr ? 'Inscriptions & Plan de table' : 'Vendor Management'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  {isFr ? 'Feuilles de calcul vs Logiciel' : 'Spreadsheets vs. Simple Hub'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  {isFr ? 'Tarif forfaitaire (500 $)' : 'Flat Pricing ($500 / Season)'}
                </button>
              </li>
            </ul>
          </div>

          {/* Page 2: Our Standards */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              {isFr ? 'Nos Standards' : 'Our Standards'}
            </span>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('standards');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left font-medium text-emerald-300"
                >
                  {isFr ? 'Page complète : Nos Standards' : 'Full Page: Our Standards'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('standards');
                    window.scrollTo({ top: 200, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  {isFr ? 'Hébergement canadien des données' : 'Canadian Data Storage'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('standards');
                    window.scrollTo({ top: 600, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  {isFr ? 'Accessibilité numérique inclusive' : 'Digital Accessibility for All'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('standards');
                    window.scrollTo({ top: 1000, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  {isFr ? 'Design adapté à la neurodiversité' : 'Neuro-Inclusive Design'}
                </button>
              </li>
            </ul>
          </div>

          {/* Get In Touch & Action */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              {isFr ? 'Prêt pour votre saison ?' : 'Ready for Your Season?'}
            </span>
            <p className="text-xs text-slate-400">
              {isFr
                ? 'Une question ou besoin d’aide pour configurer votre marché ? Nous sommes là pour vous aider.'
                : 'Questions or need a quick hand getting your market ready? We are here to help.'}
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenStartSeason}
                className="w-full py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{isFr ? 'Lancer votre saison (500 $)' : 'Start Your Season ($500)'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="pt-1">
              <button
                onClick={onOpenAccessibility}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isFr ? 'Ouvrir les outils d’accessibilité' : 'Accessibility Preferences'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            <span>© {new Date().getFullYear()} Local Market Hub. </span>
            <span>{isFr ? 'Tous droits réservés.' : 'All rights reserved.'}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:francois@localmarkethub.ca" className="hover:text-slate-300">
              francois@localmarkethub.ca
            </a>
            <span>·</span>
            <span>Local Market Hub · Canada</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
