import React from 'react';
import { 
  ArrowLeft,
  User,
  Wheat,
  Sliders
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StandardsPageProps {
  onBackToHome: () => void;
  onOpenAccessibilityDrawer: () => void;
  onOpenStartSeason: () => void;
}

export const StandardsPage: React.FC<StandardsPageProps> = ({
  onBackToHome,
  onOpenAccessibilityDrawer,
  onOpenStartSeason,
}) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-20">
      {/* Top Return Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-xs group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{isFr ? '← Retour à l’accueil' : '← Back to Home'}</span>
        </button>
      </div>

      {/* Main Page Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {isFr ? 'Nos Standards' : 'Our Standards'}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          {isFr
            ? 'Les principes fondamentaux qui orientent la conception et l’accessibilité de Local Market Hub.'
            : 'The operational principles that guide accessibility and system design at Local Market Hub.'}
        </p>
      </header>

      {/* Two Distinct Content Sections */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section 1: Founder Statement */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
              <User className="w-5 h-5 text-emerald-800" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {isFr ? 'Déclaration du fondateur' : 'Founder Statement'}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {isFr ? (
              <>
                <p>
                  Les normes d’accessibilité de Local Market Hub proviennent d’une expérience familiale directe.
                </p>
                <p>
                  Le grand-père de notre fondateur travaillait comme agriculteur. Il rencontrait des obstacles constants avec la lecture et l’écriture en raison de la dyslexie.
                </p>
                <p>
                  Ce trait neurologique façonne également la façon dont notre fondateur traite l’information écrite.
                </p>
                <p>
                  Tous deux ont vécu la lourdeur causée par la paperasse complexe et les systèmes administratifs rigides.
                </p>
                <p>
                  Ces défis réels ont inspiré le développement de Local Market Hub. Notre fondateur a conçu la plateforme pour éliminer les obstacles administratifs pour les producteurs.
                </p>
                <p>
                  Ce parcours personnel guide notre engagement envers une chaîne d’approvisionnement neuro-inclusive.
                </p>
              </>
            ) : (
              <>
                <p>
                  The accessibility standards of Local Market Hub originate from direct family experience.
                </p>
                <p>
                  The grandfather of our founder worked as a farmer. He faced continuous barriers with reading and writing due to dyslexia.
                </p>
                <p>
                  This neurological trait also shapes how our founder processes written information.
                </p>
                <p>
                  Both experienced the friction caused by complex paperwork and rigid administrative systems.
                </p>
                <p>
                  These real-world challenges inspired the development of Local Market Hub. Our founder designed the platform to remove bureaucratic obstacles for producers.
                </p>
                <p>
                  This personal background guides our commitment to a neuro-inclusive supply chain.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Section 2: Our Mission: Building a Neuro-Inclusive Supply Chain */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
              <Wheat className="w-5 h-5 text-emerald-800" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {isFr
                  ? 'Notre mission : Bâtir une chaîne d’approvisionnement neuro-inclusive'
                  : 'Our Mission: Building a Neuro-Inclusive Supply Chain'}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {isFr ? (
              <>
                <p>
                  Les processus de permis municipaux et les demandes d’inscription reposent sur des formulaires denses.
                </p>
                <p>
                  Ces documents complexes créent des barrières administratives inutiles pour de nombreux petits producteurs.
                </p>
                <p>
                  Ils excluent activement les producteurs non traditionnels de l’économie locale.
                </p>
                <p>
                  Local Market Hub élimine cet obstacle grâce à la technologie.
                </p>
                <p>
                  Le logiciel automatise les processus de conformité administrative. L’interface applique des normes d’accessibilité numérique, comprenant des mises en page claires, une navigation structurée et des formats de texte lisibles.
                </p>
                <p>
                  Ces ajustements garantissent que chaque agriculteur, artisan et créateur bénéficie d’un accès égal aux occasions commerciales.
                </p>
                <p>
                  Une participation élargie renforce les réseaux d’approvisionnement locaux. Cette inclusion économique soutient directement l’indépendance alimentaire canadienne.
                </p>
              </>
            ) : (
              <>
                <p>
                  Municipal permitting processes and vendor applications rely on text-heavy forms.
                </p>
                <p>
                  These complex documents create unnecessary administrative barriers for many small producers.
                </p>
                <p>
                  They actively exclude non-traditional growers, makers, and tradespeople from the local economy.
                </p>
                <p>
                  Local Market Hub dismantles this barrier through technology.
                </p>
                <p>
                  The software automates standard compliance workflows. The interface follows digital accessibility standards, including clear layouts, structured navigation, and readable text formats.
                </p>
                <p>
                  These adjustments ensure that every farmer, artisan, and creator has equal access to commercial opportunities.
                </p>
                <p>
                  Wider participation strengthens local supply networks. This broad economic inclusion directly supports Canadian food independence.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Footer Actions / Interactive Accessibility Controls */}
        <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-200">
          <div>
            <span className="text-sm font-bold text-slate-900 block">
              {isFr ? 'Préférences d’accessibilité du site' : 'Platform Accessibility Tools'}
            </span>
            <p className="text-xs text-slate-600 mt-1">
              {isFr
                ? 'Activez la police pour dyslexie, le contraste élevé ou le texte agrandi.'
                : 'Enable dyslexia-friendly font, high contrast, or enlarged text.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAccessibilityDrawer}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              <Sliders className="w-3.5 h-3.5 text-emerald-800" />
              <span>{isFr ? 'Ouvrir les outils' : 'Open Tools'}</span>
            </button>
            <button
              onClick={onOpenStartSeason}
              type="button"
              className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg shadow-xs transition-colors"
            >
              {isFr ? 'Lancer votre saison (500 $)' : 'Start Season ($500)'}
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};
