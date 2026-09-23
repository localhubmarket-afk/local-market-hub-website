import React, { useState } from 'react';
import { Play, Pause, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CustomerSuccessRoadmap } from './CustomerSuccessRoadmap';

interface CustomerSuccessSectionProps {
  intellectualMode: boolean;
}

export const CustomerSuccessSection: React.FC<CustomerSuccessSectionProps> = ({
  intellectualMode,
}) => {
  const [activeClip, setActiveClip] = useState<'before' | 'after'>('after');
  const [isPlaying, setIsPlaying] = useState(true);
  const { language, t } = useLanguage();

  const videoGlossary = t.customerSuccess.glossaryItems;

  return (
    <section id="customer-success" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {t.customerSuccess.title}
          </h2>
        </div>

        {/* Narrative Statement */}
        <div className="mt-6 max-w-4xl text-base sm:text-lg text-slate-700 space-y-3 leading-relaxed">
          <p>
            {t.customerSuccess.narrative}
          </p>
          {intellectualMode && (
            <p className="text-emerald-900 font-medium bg-emerald-50 p-3 rounded-lg border border-emerald-200 text-sm">
              {t.customerSuccess.narrativePlain}
            </p>
          )}
        </div>

        {/* 16:9 Aspect Ratio Infographic: Community Success Roadmap */}
        <CustomerSuccessRoadmap />

        {/* 5 Core Pillars as specified in copy */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.customerSuccess.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3 ${
                idx === 4 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-slate-900">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Feature: Before and After Video Clip Showcase */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-slate-100 shadow-xl border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                {language === 'fr' ? 'Démonstration interactive' : 'Interactive Walkthrough'}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                {t.customerSuccess.interactiveTitle}
              </h4>
            </div>

            {/* Segmented control button tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg shrink-0">
              <button
                type="button"
                onClick={() => setActiveClip('before')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeClip === 'before'
                    ? 'bg-rose-900/60 text-rose-200 border border-rose-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.customerSuccess.tabChaos}
              </button>
              <button
                type="button"
                onClick={() => setActiveClip('after')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeClip === 'after'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.customerSuccess.tabStreamlined}
              </button>
            </div>
          </div>

          {/* Video Simulation Canvas */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative h-auto rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between p-4 sm:p-7">
              <div className="flex items-center justify-between pb-3">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${activeClip === 'after' ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                  {activeClip === 'after' ? 'LMH_OPERATIONS_SUITE_DEMO.MP4' : 'CHAOTIC_MANUAL_SPREADSHEET.MP4'}
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-slate-500">1080p · 60fps</span>
              </div>

              {/* Dynamic visual simulation graphic */}
              <div className="my-auto py-3 text-center space-y-3">
                {activeClip === 'after' ? (
                  <div className="w-full text-left space-y-2 p-3.5 sm:p-5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                    <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-1 text-[10px] sm:text-xs">
                      <span className="font-bold text-white break-words">
                        {language === 'fr' ? 'Tableau des inscriptions exposants' : 'Vendor Intake Dashboard'}
                      </span>
                      <span className="text-emerald-400 font-mono whitespace-normal break-words">
                        {language === 'fr' ? 'Approbation en 14 s' : '14s Avg Approval'}
                      </span>
                    </div>
                    <div className="space-y-1.5 text-[9px] sm:text-[11px] text-slate-300">
                      <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5">
                        <span className="whitespace-normal break-words">Ferme Bio Vallée :</span>
                        <span className="text-emerald-300 font-mono whitespace-normal break-words">{language === 'fr' ? 'Permis vérifié ✓' : 'Permits Verified ✓'}</span>
                      </div>
                      <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5">
                        <span className="whitespace-normal break-words">Miel des Laurentides :</span>
                        <span className="text-emerald-300 font-mono whitespace-normal break-words">{language === 'fr' ? 'Stand #14 attribué ✓' : 'Booth #14 Allocated ✓'}</span>
                      </div>
                      <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5">
                        <span className="whitespace-normal break-words">Poterie Artisanale :</span>
                        <span className="text-emerald-300 font-mono whitespace-normal break-words">{language === 'fr' ? 'Saison réglée ✓' : 'Full Season Paid ✓'}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full text-left space-y-2 p-3.5 sm:p-5 rounded-xl bg-slate-900/90 border border-rose-500/40">
                    <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-1 text-[10px] sm:text-xs">
                      <span className="font-bold text-white break-words">Tableur_Inscriptions_Final_v3.xlsx</span>
                      <span className="text-rose-400 font-mono font-semibold whitespace-normal break-words">Erreur #REF!</span>
                    </div>
                    <div className="space-y-1.5 text-[9px] sm:text-[11px] text-slate-400">
                      <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5">
                        <span className="text-slate-300 whitespace-normal break-words">{language === 'fr' ? 'Ligne 84 : Assurance PDF manquante' : 'Row 84: Missing Insurance PDF'}</span>
                        <span className="text-rose-400 font-medium whitespace-normal break-words">{language === 'fr' ? 'Bloqué' : 'Unresolved'}</span>
                      </div>
                      <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5">
                        <span className="text-slate-300 font-medium whitespace-normal break-words">{language === 'fr' ? 'Ligne 92 : Stand 12 attribué 2 fois' : 'Row 92: Double-booked Stall 12'}</span>
                        <span className="text-rose-400 font-medium whitespace-normal break-words">{language === 'fr' ? 'Conflit' : 'Conflict'}</span>
                      </div>
                      <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5">
                        <span className="text-slate-300 whitespace-normal break-words">{language === 'fr' ? 'Ligne 104 : Frais processeur américain' : 'Row 104: US Payment Processor Fee'}</span>
                        <span className="text-rose-400 font-medium whitespace-normal break-words">{language === 'fr' ? '4,5 % prélevés' : '4.5% deducted'}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Video control bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-slate-800 text-[11px] sm:text-xs">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>
                    {isPlaying
                      ? (language === 'fr' ? 'Mettre en pause' : 'Pause Simulation')
                      : (language === 'fr' ? 'Lancer la simulation' : 'Play Simulation')}
                  </span>
                </button>
                <span className="text-slate-500 font-mono">
                  {language === 'fr' ? 'Lexique standardisé' : 'Standardized Video Terminology'}
                </span>
              </div>
            </div>

            {/* Explanatory Context */}
            <div className="lg:col-span-5 space-y-4">
              <h5 className="font-bold text-base text-white">
                {activeClip === 'after'
                  ? (language === 'fr'
                      ? 'Après : Gestion de saison automatisée en 3 clics'
                      : 'After: Automated Season Flow in 3 Clicks')
                  : (language === 'fr'
                      ? 'Avant : Le gouffre temporel de la gestion manuelle'
                      : 'Before: The Hidden Time-Sink of Manual Coordination')}
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeClip === 'after'
                  ? (language === 'fr'
                      ? 'Les organisateurs économisent plus de 18 heures d’administration chaque semaine. Les exposants s’inscrivent en quelques clics sans rien imprimer ni installer.'
                      : 'Organizers save over 18 administrative hours each week. Vendors register directly without downloading proprietary software or printing paperwork.')
                  : (language === 'fr'
                      ? 'Les gestionnaires passent des jeudis entiers à relancer les assurances expirées, résoudre les réservations en doublon et calmer les producteurs frustrés.'
                      : 'Market managers report spending entire Thursdays chasing missing insurance renewals, fixing duplicated stall bookings, and soothing frustrated vendors.')}
              </p>

              {/* Standardized terminology reference */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                  {language === 'fr' ? 'Terminologie standardisée appliquée :' : 'Standardized Terminology Applied:'}
                </span>
                <div className="space-y-1.5">
                  {videoGlossary.slice(0, 2).map((item) => (
                    <div key={item.term} className="text-xs">
                      <span className="font-bold text-slate-200">{item.term} : </span>
                      <span className="text-slate-400">{item.definition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Drop Ratio Funnel Analysis Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {language === 'fr' ? 'Optimisation de l’accueil' : 'Onboarding Optimization'}
                </span>
              </div>
              <h4 className="font-bold text-base sm:text-lg text-slate-900">
                {language === 'fr'
                  ? 'Analyse des taux d’abandon à la première impression'
                  : 'First-Impression Vendor Drop Ratio Analysis'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                {language === 'fr'
                  ? 'Lorsque des agriculteurs et des artisans talentueux abandonnent des formulaires fastidieux, les marchés perdent en diversité et en revenus. Nous analysons chaque point d’hésitation pour remplacer les formalités rébarbatives par un guidage clair et fluide.'
                  : 'When talented farmers and artisans abandon complex application forms, markets lose community variety and stall revenue. We analyze where prospective vendors pause or drop off during their first interaction, replacing complicated paperwork with clear, guided steps.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-slate-900 block">
                  {language === 'fr' ? 'Points de friction habituels' : 'Common Friction Points'}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t.customerSuccess.chaosItems[0]}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-slate-900 block">
                  {language === 'fr' ? 'Notre audit ergonomique' : 'Our Qualitative Review'}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t.customerSuccess.streamlinedItems[0]}
                </p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1.5">
                <span className="text-xs font-bold text-emerald-900 block">
                  {language === 'fr' ? 'Accueil sans tracas' : 'Friction-Free Onboarding'}
                </span>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  {t.customerSuccess.streamlinedItems[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
