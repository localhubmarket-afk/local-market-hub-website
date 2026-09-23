import React from 'react';
import { 
  MessageSquare, 
  Users, 
  FileCheck2, 
  Sliders, 
  Rocket, 
  Cpu, 
  BarChart3, 
  Award,
  ChevronRight,
  ChevronLeft,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CustomerSuccessRoadmap: React.FC = () => {
  const { language } = useLanguage();

  const stepsEn = [
    {
      number: 'Step 1',
      title: 'Initial Contact',
      icon: MessageSquare,
      color: 'emerald',
      bullets: [
        'Contact Local Market Hub.',
        'Review pricing structure.',
      ],
    },
    {
      number: 'Step 2',
      title: 'Board Approval',
      icon: Users,
      color: 'teal',
      bullets: [
        'Demonstrate capabilities.',
        'Secure budget approval.',
      ],
    },
    {
      number: 'Step 3',
      title: 'Season Agreement',
      icon: FileCheck2,
      color: 'sky',
      bullets: [
        'Confirm community objectives.',
        'Process the $500 fee.',
      ],
    },
    {
      number: 'Step 4',
      title: 'Platform Setup',
      icon: Sliders,
      color: 'indigo',
      bullets: [
        'Validate accessibility.',
        'Configure dashboards.',
      ],
    },
    {
      number: 'Step 5',
      title: 'Go Live & Onboarding',
      icon: Rocket,
      color: 'violet',
      bullets: [
        'Launch vendor portal.',
        'Simplify municipal forms.',
      ],
    },
    {
      number: 'Step 6',
      title: 'Active Operations',
      icon: Cpu,
      color: 'emerald',
      bullets: [
        'Automate administration.',
        'Address vendor frustrations.',
      ],
    },
    {
      number: 'Step 7',
      title: 'Value Assessment',
      icon: BarChart3,
      color: 'teal',
      bullets: [
        'Analyze hours saved.',
        'Measure community inclusion.',
      ],
    },
    {
      number: 'Step 8',
      title: 'Long-Term Success',
      icon: Award,
      color: 'amber',
      bullets: [
        'Review performance.',
        'Plan next season.',
      ],
    },
  ];

  const stepsFr = [
    {
      number: 'Étape 1',
      title: 'Contact initial',
      icon: MessageSquare,
      color: 'emerald',
      bullets: [
        'Contacter Local Market Hub.',
        'Examiner la structure tarifaire.',
      ],
    },
    {
      number: 'Étape 2',
      title: 'Approbation du conseil',
      icon: Users,
      color: 'teal',
      bullets: [
        'Démontrer les capacités.',
        'Obtenir l’approbation budgétaire.',
      ],
    },
    {
      number: 'Étape 3',
      title: 'Entente saisonnière',
      icon: FileCheck2,
      color: 'sky',
      bullets: [
        'Confirmer les objectifs communautaires.',
        'Traiter les frais de 500 $.',
      ],
    },
    {
      number: 'Étape 4',
      title: 'Configuration de la plateforme',
      icon: Sliders,
      color: 'indigo',
      bullets: [
        'Valider l’accessibilité.',
        'Configurer les tableaux de bord.',
      ],
    },
    {
      number: 'Étape 5',
      title: 'Lancement et intégration',
      icon: Rocket,
      color: 'violet',
      bullets: [
        'Lancer le portail des exposants.',
        'Simplifier les formulaires municipaux.',
      ],
    },
    {
      number: 'Étape 6',
      title: 'Opérations actives',
      icon: Cpu,
      color: 'emerald',
      bullets: [
        'Automatiser l’administration.',
        'Répondre aux frustrations des exposants.',
      ],
    },
    {
      number: 'Étape 7',
      title: 'Évaluation de la valeur',
      icon: BarChart3,
      color: 'teal',
      bullets: [
        'Analyser les heures économisées.',
        'Mesurer l’inclusion communautaire.',
      ],
    },
    {
      number: 'Étape 8',
      title: 'Succès à long terme',
      icon: Award,
      color: 'amber',
      bullets: [
        'Examiner le rendement.',
        'Planifier la prochaine saison.',
      ],
    },
  ];

  const steps = language === 'fr' ? stepsFr : stepsEn;

  // Split into row 1 (steps 1-4) and row 2 (steps 5-8)
  const row1 = steps.slice(0, 4);
  const row2 = steps.slice(4, 8); // Displayed right-to-left on S-curve

  return (
    <div className="w-full my-12">
      {/* Dynamic Infographic Container on Desktop (Height Auto) */}
      <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 lg:p-10 relative h-auto flex flex-col justify-between">
        {/* Subtle decorative grid background for infographic styling */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-[radial-gradient(#059669_0.6px,transparent_0.6px)] [background-size:20px_20px] opacity-[0.07] pointer-events-none" 
        />

        {/* Header Block of Infographic */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Local Market Hub
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {language === 'fr' ? 'Feuille de route de la réussite communautaire' : 'Community Success Roadmap'}
            </h3>
          </div>

          <div className="text-xs font-medium text-slate-500 shrink-0">
            <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {language === 'fr' ? 'Processus en 8 étapes · Parcours continu' : '8-Step Continuous Process'}
            </span>
          </div>
        </div>

        {/* DESKTOP S-CURVE TIMELINE LAYOUT (lg and up) */}
        <div className="hidden lg:flex flex-col justify-around relative my-auto py-4 z-10 flex-1">
          {/* SVG Dotted S-Curve Connecting Line */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            aria-hidden="true"
          >
            {/* Top row horizontal dotted line: left center to right center */}
            <line 
              x1="12%" 
              y1="25%" 
              x2="88%" 
              y2="25%" 
              stroke="#059669" 
              strokeWidth="2.5" 
              strokeDasharray="6 6" 
              strokeOpacity="0.5"
            />
            {/* S-curve downward connector turn on the right side */}
            <path 
              d="M 88% 25% C 97% 25%, 97% 75%, 88% 75%" 
              fill="none" 
              stroke="#059669" 
              strokeWidth="2.5" 
              strokeDasharray="6 6" 
              strokeOpacity="0.5"
            />
            {/* Bottom row horizontal dotted line: right center back to left center */}
            <line 
              x1="88%" 
              y1="75%" 
              x2="12%" 
              y2="75%" 
              stroke="#059669" 
              strokeWidth="2.5" 
              strokeDasharray="6 6" 
              strokeOpacity="0.5"
            />
          </svg>

          {/* Row 1: Steps 1 -> 2 -> 3 -> 4 (Flowing Left to Right) */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {row1.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/95 backdrop-blur-xs p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between relative group"
                >
                  {/* Step Badge & Vector Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {step.number}
                      </span>
                      <div className="p-2 rounded-xl bg-slate-50 text-emerald-700 border border-slate-200 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2.5">
                      {step.title}
                    </h4>

                    {/* Exact bullet points */}
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold leading-none mt-1">•</span>
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Direction indicator arrow */}
                  {idx < 3 && (
                    <div className="hidden xl:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center text-emerald-600 shadow-xs z-20">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                  {idx === 3 && (
                    <div className="hidden xl:flex absolute -right-3 -bottom-5 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center text-emerald-600 shadow-xs z-20">
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Row 2: Steps 8 <- 7 <- 6 <- 5 (Flowing Right to Left in S-Curve) */}
          <div className="grid grid-cols-4 gap-6 relative z-10 pt-6">
            {/* Reverse order so Step 5 is on the right, connecting seamlessly with Step 4 above */}
            {[row2[3], row2[2], row2[1], row2[0]].map((step, revIdx) => {
              // Real index relative to row2:
              // revIdx = 0 is Step 8
              // revIdx = 1 is Step 7
              // revIdx = 2 is Step 6
              // revIdx = 3 is Step 5
              const Icon = step.icon;
              return (
                <div 
                  key={revIdx}
                  className="bg-white/95 backdrop-blur-xs p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between relative group"
                >
                  {/* Step Badge & Vector Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {step.number}
                      </span>
                      <div className="p-2 rounded-xl bg-slate-50 text-emerald-700 border border-slate-200 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2.5">
                      {step.title}
                    </h4>

                    {/* Exact bullet points */}
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold leading-none mt-1">•</span>
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Flow direction indicator towards the left */}
                  {revIdx > 0 && (
                    <div className="hidden xl:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center text-emerald-600 shadow-xs z-20">
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET RESPONSIVE S-CURVE VERTICAL FLOW (<lg) */}
        <div className="lg:hidden relative py-6">
          {/* Vertical dotted connector line running down the left */}
          <div 
            aria-hidden="true"
            className="absolute left-6 top-8 bottom-8 w-0.5 border-l-2 border-dashed border-emerald-500/60 pointer-events-none"
          />

          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative pl-14">
                  {/* Step Node Marker */}
                  <div className="absolute left-2.5 top-3 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center text-emerald-700 font-bold text-xs shadow-xs z-10">
                    {idx + 1}
                  </div>

                  {/* Step Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                        {step.number}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {step.title}
                    </h4>

                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold leading-none mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infographic Footer Note */}
        <div className="relative z-10 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>
            {language === 'fr' 
              ? 'Local Market Hub · Logiciel de gestion de marchés publics · Conçu pour les coopératives et OBNL'
              : 'Local Market Hub · Public Market Management · Purpose-built for non-profits & community cooperatives'}
          </span>
          <span className="font-semibold text-emerald-800">
            {language === 'fr' ? 'Garantie tarif fixe : 500 $ CAD / saison' : 'Guaranteed Flat Fee: $500 CAD / season'}
          </span>
        </div>
      </div>
    </div>
  );
};
