import React, { useState } from 'react';
import { Clock, DollarSign, ArrowRight, Sparkles, TrendingUp, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SavingsCalculatorProps {
  onOpenStartSeason: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenStartSeason }) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  // Input states
  const [vendors, setVendors] = useState<number>(35);
  const [eventsPerMonth, setEventsPerMonth] = useState<number>(4);

  // Administrative calculations:
  // Without software: An organizer spends ~20 minutes (0.33 hrs) per vendor per event on emails, booth mapping, reminders, and manual check-ins.
  // With Local Market Hub: Reduced to ~5 minutes.
  // Net hours saved per vendor per event = 0.25 hours (15 minutes).
  const hoursSavedPerMonth = Math.round(vendors * eventsPerMonth * 0.25);
  const hourlyRate = 30; // $30/hr standard organizer admin value
  const monthlyValue = hoursSavedPerMonth * hourlyRate;
  const seasonMonths = 5; // standard Canadian market season (May - Oct)
  const seasonHours = hoursSavedPerMonth * seasonMonths;
  const seasonValue = monthlyValue * seasonMonths;

  return (
    <section id="savings-calculator" className="py-16 lg:py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-800/80 px-3.5 py-1.5 rounded-full border border-emerald-700/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>{isFr ? 'Calculateur d’Économies' : 'Time & Cost Calculator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {isFr
              ? 'Calculez les heures que vous allez économiser.'
              : 'Calculate the hours you will save every month.'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto">
            {isFr
              ? 'Voyez en direct combien d’heures de paperasse et de budget vous pouvez réinvestir dans votre marché.'
              : 'See how many hours of paperwork and administrative costs you can reinvest into your market.'}
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-emerald-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: 2 Simple Input Fields */}
            <div className="lg:col-span-6 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {isFr ? 'Votre marché en 2 chiffres' : 'Your Market in 2 Numbers'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isFr
                    ? 'Ajustez les curseurs pour refléter la taille de votre marché.'
                    : 'Adjust the sliders to match your market size.'}
                </p>
              </div>

              {/* Input Field 1: Active Vendors */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="vendor-slider" className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-700" />
                    <span>{isFr ? 'Nombre de marchands actifs :' : 'Number of active vendors:'}</span>
                  </label>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 font-extrabold text-base rounded-lg border border-emerald-200">
                    {vendors} {isFr ? 'marchands' : 'vendors'}
                  </span>
                </div>
                <input
                  id="vendor-slider"
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={vendors}
                  onChange={(e) => setVendors(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>10 {isFr ? 'marchands' : 'vendors'}</span>
                  <span>60</span>
                  <span>120+ {isFr ? 'marchands' : 'vendors'}</span>
                </div>
              </div>

              {/* Input Field 2: Events Per Month */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="event-slider" className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-700" />
                    <span>{isFr ? 'Événements de marché par mois :' : 'Market events per month:'}</span>
                  </label>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 font-extrabold text-base rounded-lg border border-emerald-200">
                    {eventsPerMonth} {isFr ? (eventsPerMonth > 1 ? 'journées' : 'journée') : (eventsPerMonth > 1 ? 'days' : 'day')}
                  </span>
                </div>
                <input
                  id="event-slider"
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={eventsPerMonth}
                  onChange={(e) => setEventsPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>1 {isFr ? 'par mois' : '/ month'}</span>
                  <span>4 {isFr ? '(chaque semaine)' : '(weekly)'}</span>
                  <span>8-10 {isFr ? '(bi-hebdo)' : '(bi-weekly)'}</span>
                </div>
              </div>

              {/* Benefit Note */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>{isFr ? 'Ce que vous évitez chaque mois :' : 'What you replace every month:'}</span>
                </div>
                <p>
                  {isFr
                    ? 'Plus besoin de copier les adresses, de redessiner le plan de table ou de répondre aux mêmes messages.'
                    : 'No more copying contact emails, manually redrawing booth maps, or answering repeat messages.'}
                </p>
              </div>
            </div>

            {/* Right Column: Output Results */}
            <div className="lg:col-span-6 p-6 sm:p-10 bg-slate-50 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-3">
                  {isFr ? 'Vos Économies Estimées' : 'Your Estimated Monthly Savings'}
                </span>

                {/* Primary Metric 1: Hours Saved */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                    <Clock className="w-4 h-4 text-emerald-700" />
                    <span>{isFr ? 'Temps administratif gagné' : 'Administrative Time Saved'}</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900">{hoursSavedPerMonth}</span>
                    <span className="text-base sm:text-lg font-bold text-emerald-800">
                      {isFr ? 'heures / mois' : 'hours every month'}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    {isFr 
                      ? `Soit environ ${seasonHours} heures gagnées sur votre saison de 5 mois.`
                      : `That is ~${seasonHours} total hours saved across a 5-month season.`}
                  </p>
                </div>

                {/* Primary Metric 2: Financial Value */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                    <DollarSign className="w-4 h-4 text-emerald-700" />
                    <span>{isFr ? 'Valeur financière de ce temps' : 'Financial Value of Those Hours'}</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-700">
                      {monthlyValue.toLocaleString('en-CA')} $
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-600">
                      {isFr ? '/ mois en travail évité' : '/ month in saved labor'}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    {isFr
                      ? `Représente ${seasonValue.toLocaleString('en-CA')} $ de valeur pour un investissement unique de 500 $.`
                      : `Equals ${seasonValue.toLocaleString('en-CA')} $ in labor value for a one-time $500 software fee.`}
                  </p>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenStartSeason}
                  type="button"
                  className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>{isFr ? 'Récupérer ces heures dès maintenant' : 'Claim These Saved Hours Today'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-2 text-center text-[11px] text-slate-400">
                  {isFr
                    ? 'Tarif forfaitaire de 500 $ pour toute la saison. Rentabilisé dès le premier mois.'
                    : '$500 flat season rate. Pays for itself within your first month.'}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
