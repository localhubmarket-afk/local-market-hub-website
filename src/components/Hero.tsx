import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Users, Calendar, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenStartSeason: () => void;
  intellectualMode: boolean;
  onNavigateToStandards?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStartSeason }) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white border-b border-slate-200">
      {/* Subtle geometric grid background */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Friendly Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase mb-4 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>
              {isFr ? 'Gestion simple de marché · Économisez 10h par semaine' : 'Simple Market Management · Save 10+ Hours Every Week'}
            </span>
          </div>

          {/* Short, Direct Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
            {isFr
              ? 'Gérez votre marché en deux fois moins de temps.'
              : 'Run your market in half the time.'}
          </h1>

          {/* Simple, Clear Sub-headline */}
          <p className="mt-5 text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto font-normal text-balance leading-relaxed">
            {isFr
              ? 'Oubliez les feuilles de calcul éparpillées et les courriels perdus. Rassemblez les inscriptions de marchands, le plan de table et les rappels dans un seul tableau de bord simple.'
              : 'Stop juggling spreadsheets, endless emails, and paper forms. Local Market Hub brings all your vendor applications, stall assignments, and reminders into one simple dashboard.'}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenStartSeason}
              type="button"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 group active:scale-98"
            >
              <span>{isFr ? 'Lancer votre saison (500 $)' : 'Start Your Season ($500 Flat)'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#vendor-management"
              className="w-full sm:w-auto px-6 py-4 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center"
            >
              {isFr ? 'Voir comment ça marche' : 'See How It Works'}
            </a>
          </div>

          {/* Simplicity Highlights */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>{isFr ? 'Configuration en 5 minutes' : 'Setup in 5 minutes'}</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>{isFr ? 'Finies les feuilles de calcul' : 'No messy spreadsheets'}</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>{isFr ? 'Fonctionne sur téléphone et tablette' : 'Works on phones and tablets'}</span>
            </div>
          </div>
        </div>

        {/* Visual Preview: Clean 3-Step Vendor Management Dashboard */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-slate-900 shadow-2xl overflow-hidden">
          {/* Header Bar */}
          <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-300">
                app.localmarkethub.ca / {isFr ? 'tableau-de-bord' : 'dashboard'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isFr ? 'Saison 2026 prête' : 'Season 2026 Ready'}</span>
            </div>
          </div>

          {/* 3 Step Interactive Card Preview */}
          <div className="p-6 sm:p-8 bg-slate-900 text-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1: Applications */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-emerald-400 font-bold uppercase">
                  {isFr ? '01. Inscriptions' : '01. Applications'}
                </span>
                <span>{isFr ? 'En ligne' : 'Self-Serve'}</span>
              </div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>{isFr ? 'Formulaire en un clic' : 'One Simple Form'}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isFr
                  ? 'Vos marchands s’inscrivent en quelques minutes. Photos de kiosque, besoins en électricité et permis inclus.'
                  : 'Vendors apply online in minutes. Collect booth photos, power needs, and food permits all in one place.'}
              </p>
              <div className="pt-2 text-xs bg-slate-950/60 p-2.5 rounded border border-slate-700/60 text-slate-300">
                <div className="flex justify-between items-center text-[11px]">
                  <span>{isFr ? 'Boulangerie Le Rustique' : 'Heritage Bakery'}</span>
                  <span className="text-emerald-400 font-semibold">{isFr ? 'Approuvé ✓' : 'Approved ✓'}</span>
                </div>
              </div>
            </div>

            {/* Step 2: Stall Layout */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-emerald-400 font-bold uppercase">
                  {isFr ? '02. Plan de table' : '02. Stall Map'}
                </span>
                <span>{isFr ? 'Visuel' : 'Drag & Drop'}</span>
              </div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-emerald-400" />
                <span>{isFr ? 'Attribution facile' : 'Instant Assignments'}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isFr
                  ? 'Glissez et déposez vos marchands sur le plan. Voyez d’un coup d’œil les espaces libres pour chaque fin de semaine.'
                  : 'Drag and drop vendors into stalls. See confirmed spots, empty spaces, and power requirements at a glance.'}
              </p>
              <div className="pt-2 text-xs bg-slate-950/60 p-2.5 rounded border border-slate-700/60 text-slate-300">
                <div className="flex justify-between items-center text-[11px]">
                  <span>{isFr ? 'Kiosque #14 (Électricité)' : 'Stall #14 (Power)'}</span>
                  <span className="text-emerald-400 font-semibold">{isFr ? 'Attribué ✓' : 'Assigned ✓'}</span>
                </div>
              </div>
            </div>

            {/* Step 3: Reminders & Market Day */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-emerald-400 font-bold uppercase">
                  {isFr ? '03. Jour de marché' : '03. Market Day'}
                </span>
                <span>{isFr ? 'Automatique' : 'Mobile-Ready'}</span>
              </div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>{isFr ? 'Rappels & Arrivée' : 'Auto Reminders & Check-in'}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isFr
                  ? 'Envoyez les heures d’arrivée en un clic. Le samedi matin, cochez les présences directement depuis votre téléphone.'
                  : 'Send arrival times automatically. On market morning, check in vendors from your phone with a single tap.'}
              </p>
              <div className="pt-2 text-xs bg-slate-950/60 p-2.5 rounded border border-slate-700/60 text-slate-300">
                <div className="flex justify-between items-center text-[11px]">
                  <span>{isFr ? 'Rappels du samedi' : 'Saturday Reminders'}</span>
                  <span className="text-emerald-400 font-semibold">{isFr ? 'Envoyés à 34 marchands' : 'Sent to 34 vendors'}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
