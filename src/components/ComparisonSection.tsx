import React from 'react';
import { Check, X, Clock, FileSpreadsheet, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ComparisonSectionProps {
  onOpenStartSeason: () => void;
  intellectualMode: boolean;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  onOpenStartSeason,
}) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const rows = [
    {
      task: isFr ? 'Inscriptions des marchands' : 'Vendor Applications',
      oldWay: isFr
        ? 'Courriels éparpillés, pièces jointes manquantes et relances manuelles.'
        : 'Lost PDF attachments, buried emails, and missing vendor info.',
      newWay: isFr
        ? 'Un seul lien en ligne. Les marchands envoient photos et permis en 3 minutes.'
        : 'One simple link. Vendors submit photos, permits, and power needs all at once.',
    },
    {
      task: isFr ? 'Plan de table et kiosques' : 'Stall & Map Planning',
      oldWay: isFr
        ? 'Dessiner le plan à la main chaque vendredi soir sur du papier.'
        : 'Re-drawing paper maps and editing spreadsheets every Friday night.',
      newWay: isFr
        ? 'Plan visuel glisser-déposer. Attribution des places en quelques clics.'
        : 'Visual drag-and-drop map. Assign booths and view openings in seconds.',
    },
    {
      task: isFr ? 'Rappels et consignes' : 'Vendor Communication',
      oldWay: isFr
        ? 'Copier-coller 40 adresses courriel une par une en espérant ne rien oublier.'
        : 'Copying 40 emails into a message and answering the same questions repeatedly.',
      newWay: isFr
        ? 'Envoi groupé en un clic. Heures d’arrivée et numéros de kiosque transmis instantanément.'
        : 'One-click group updates. Arrival times and stall numbers sent instantly.',
    },
    {
      task: isFr ? 'Arrivée le jour du marché' : 'Market Morning Check-in',
      oldWay: isFr
        ? 'Chercher sur une planchette à pince sous la pluie pendant que les camions attendent.'
        : 'Flipping through paper clipboards at the gate while trucks line up.',
      newWay: isFr
        ? 'Cocher les présences sur votre téléphone en 5 secondes.'
        : 'Tap once on your phone to check vendors in as they pull up.',
    },
    {
      task: isFr ? 'Répertoire pour le public' : 'Shopper Directory',
      oldWay: isFr
        ? 'Recopier la liste sur les réseaux sociaux ou imprimer des feuilles.'
        : 'Manually typing vendor lists into Facebook posts or paper flyers.',
      newWay: isFr
        ? 'Page web automatique montrant aux visiteurs qui est présent cette fin de semaine.'
        : 'Live public page showing visitors exactly which vendors are attending this week.',
    },
    {
      task: isFr ? 'Temps passé par semaine' : 'Weekly Time Spent',
      oldWay: isFr
        ? '10 à 15 heures de travail administratif répétitif.'
        : '10 to 15 hours of stressful paperwork and administrative chasing.',
      newWay: isFr
        ? 'Moins de 2 heures par semaine. Tout reste ordonné tout seul.'
        : 'Under 2 hours a week. Everything stays organized automatically.',
    },
  ];

  return (
    <section id="comparison" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{isFr ? 'Gagnez du temps chaque semaine' : 'Save Real Time Every Week'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isFr ? 'Dites adieu au casse-tête des feuilles de calcul' : 'Say goodbye to spreadsheet chaos'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {isFr
              ? 'Voyez la différence concrète entre la gestion manuelle et notre logiciel pensé pour les organisateurs.'
              : 'See the difference between manual spreadsheet scrambling and a simple, organized market season.'}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/80">
                  <th scope="col" className="py-4 px-6 text-xs sm:text-sm font-bold text-slate-900 w-1/4">
                    {isFr ? 'Tâche' : 'Market Task'}
                  </th>
                  <th scope="col" className="py-4 px-6 text-xs sm:text-sm font-bold text-rose-950 bg-rose-50/70 w-3/8">
                    <div className="flex items-center gap-1.5">
                      <FileSpreadsheet className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{isFr ? 'Feuilles Excel & Courriels' : 'Spreadsheets & Manual Emails'}</span>
                    </div>
                  </th>
                  <th scope="col" className="py-4 px-6 text-xs sm:text-sm font-bold text-emerald-950 bg-emerald-50/80 w-3/8">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{isFr ? 'Local Market Hub' : 'Local Market Hub'}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">
                      {row.task}
                    </td>
                    <td className="py-4 px-6 text-slate-600 bg-rose-50/20">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.oldWay}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-900 font-medium bg-emerald-50/30">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.newWay}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Callout box */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-emerald-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              {isFr ? 'Prêt à récupérer vos soirées de semaine ?' : 'Ready to reclaim your weekday evenings?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {isFr
                ? 'Créez votre marché dès aujourd’hui pour seulement 500 $ pour toute la saison.'
                : 'Set up your market today for just $500 for your entire season. No monthly surprises.'}
            </p>
          </div>
          <button
            onClick={onOpenStartSeason}
            type="button"
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 shrink-0"
          >
            <span>{isFr ? 'Commencer maintenant' : 'Get Started Now'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
