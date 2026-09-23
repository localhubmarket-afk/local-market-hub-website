import React from 'react';
import { Sprout, ShieldCheck, HeartHandshake, CheckCircle2, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NeuroInclusiveSectionProps {
  intellectualMode: boolean;
}

export const NeuroInclusiveSection: React.FC<NeuroInclusiveSectionProps> = ({
  intellectualMode,
}) => {
  const { language, t } = useLanguage();

  return (
    <section 
      id="mission" 
      className="py-16 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden"
      aria-labelledby="mission-heading"
    >
      {/* Subtle ambient warm grid background */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(#059669_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Sprout className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>{t.mission.kicker}</span>
          </div>
          <h2 
            id="mission-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance"
          >
            {t.mission.title}
          </h2>
        </div>

        {/* Narrative Feature Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story & Conviction Canvas */}
          <div className="lg:col-span-8 p-6 sm:p-10 rounded-2xl bg-slate-900 text-slate-100 shadow-xl border border-slate-800 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Quote mark indicator */}
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                <Quote className="w-5 h-5" aria-hidden="true" />
              </div>

              {/* Exact Paragraph 1 */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {t.mission.p1}
              </p>

              {/* Exact Paragraph 2 */}
              <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{t.mission.p2}</p>
              </div>

              {/* Exact Paragraph 3 */}
              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
                {t.mission.p3}
              </p>
            </div>

            {/* Plain-Language / Intellectual Accessibility Annotation */}
            {intellectualMode && (
              <div className="mt-8 pt-5 border-t border-slate-800 bg-emerald-950/60 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:p-8 rounded-b-2xl border-t border-emerald-800/40">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                      {t.mission.plainSummaryTitle}
                    </span>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {t.mission.plainSummary}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Side Context & Impact Anchors */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-slate-900 space-y-4">
              <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-base text-emerald-950">
                {language === 'fr' 
                  ? 'Égalité d’accès pour les producteurs locaux' 
                  : 'Equal Access for Local Producers'}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                {language === 'fr'
                  ? 'En supprimant la bureaucratie papier et en automatisant les contrôles réglementaires, nous veillons à ce qu’aucun producteur talentueux ne soit écarté en raison de barrières textuelles ou cognitives.'
                  : 'By removing legacy paperwork and automating regulatory validation, we make sure no hardworking producer is excluded due to text-heavy cognitive barriers.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                {language === 'fr' ? 'Piliers de notre engagement' : 'Foundational Commitments'}
              </span>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-medium text-slate-900">{t.mission.badges.neurodiversity}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-medium text-slate-900">{t.mission.badges.supplyChain}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-medium text-slate-900">{t.mission.badges.sovereignty}</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
              <span>
                {language === 'fr'
                  ? 'Conforme aux exigences d’inclusion et d’accessibilité pour le Canada'
                  : 'Engineered for Canadian accessibility and supplier inclusion standards'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
