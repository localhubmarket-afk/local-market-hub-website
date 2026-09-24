import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PricingSectionProps {
  onOpenStartSeason: () => void;
  intellectualMode: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenStartSeason,
}) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const benefits = isFr
    ? [
        'Nombre illimité de marchands et d’inscriptions',
        'Plan de table interactif avec glisser-déposer',
        'Rappels et consignes d’arrivée automatiques',
        'Pointage rapide sur téléphone le matin du marché',
        'Répertoire public pour attirer les clients locaux',
        'Assistance humaine par téléphone et courriel',
        'Aucun pourcentage prélevé sur vos marchands',
      ]
    : [
        'Unlimited vendor applications and waitlists',
        'Visual drag-and-drop stall map builder',
        'Automated vendor reminders and arrival instructions',
        'Quick morning check-in on any phone or tablet',
        'Live public directory to showcase vendors to shoppers',
        'Friendly support whenever you have a question',
        'Zero commission or per-vendor percentage cuts',
      ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full">
            {isFr ? 'Tarif Simple & Transparent' : 'Simple & Transparent Pricing'}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isFr ? 'Un prix fixe pour toute votre saison' : 'One flat price for your entire season'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {isFr
              ? 'Pas de frais cachés. Pas de pourcentage sur vos ventes. Juste 500 $ pour toute l’année.'
              : 'No hidden fees. No percentage cuts from your vendors. Just $500 for the whole season.'}
          </p>
        </div>

        {/* The Single Transparent Card */}
        <div className="mt-12 max-w-xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-lg p-8 sm:p-10">
          <div className="text-center pb-6 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
              {isFr ? 'Forfait Saison Complète' : 'Full Season Package'}
            </span>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-5xl sm:text-6xl font-extrabold text-slate-900">500 $</span>
              <span className="text-sm font-semibold text-slate-500">
                {isFr ? '/ saison complète' : 'CAD / full season'}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              {isFr ? 'Tout inclus · Sans frais mensuels' : 'Everything included · No monthly surprise charges'}
            </p>
          </div>

          {/* Benefit Checkmarks */}
          <div className="py-8 space-y-3.5">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={onOpenStartSeason}
            type="button"
            className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group active:scale-98"
          >
            <span>{isFr ? 'Lancer votre saison maintenant' : 'Start Your Season Today'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-4 text-center text-xs text-slate-400">
            {isFr 
              ? 'Configuration rapide en 5 minutes. Vos marchands peuvent postuler dès aujourd’hui.' 
              : 'Quick 5-minute setup. Your vendors can start applying today.'}
          </p>
        </div>

      </div>
    </section>
  );
};
