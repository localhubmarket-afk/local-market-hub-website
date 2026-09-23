import React, { useState } from 'react';
import { ArrowRight, Check, Calculator, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PricingSectionProps {
  onOpenStartSeason: () => void;
  intellectualMode: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenStartSeason,
  intellectualMode,
}) => {
  const [vendorCount, setVendorCount] = useState<number>(45);
  const [weeksCount, setWeeksCount] = useState<number>(20);
  const [avgBoothFee, setAvgBoothFee] = useState<number>(40);
  const { language, t } = useLanguage();

  // Competitor take calculation (typically 3.5% + payment fees or 5% cut)
  const totalSeasonStallVolume = vendorCount * weeksCount * avgBoothFee;
  const competitorTakeRate = 0.04; // 4% average platform cut
  const competitorFee = totalSeasonStallVolume * competitorTakeRate;
  const localMarketHubFee = 500;
  const savings = Math.max(0, competitorFee - localMarketHubFee);

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {t.pricing.title}
          </h2>
        </div>

        {/* Narrative Copy Box */}
        <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 max-w-4xl space-y-4">
          <p className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {t.pricing.bannerTitle}
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {t.pricing.bannerDesc}
          </p>

          {intellectualMode && (
            <div className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-800 space-y-2">
              <span className="font-bold text-emerald-800 block">{t.pricing.whyMattersTitle}</span>
              <p className="leading-relaxed">
                {t.pricing.whyMattersDesc}
              </p>
            </div>
          )}
        </div>

        {/* Pricing Card & Interactive Seasonal Savings Calculator */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* The $500 Full Season Package Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-900 text-slate-100 flex flex-col justify-between shadow-xl border border-slate-800">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  {t.pricing.packageBadge}
                </span>
                <span className="text-xs text-slate-400">{t.pricing.packageDuration}</span>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-white font-mono tabular-nums">
                  {t.pricing.priceAmount}
                </span>
                <span className="text-slate-400 text-sm">{t.pricing.priceCad}</span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300">
                {language === 'fr'
                  ? 'Zéro frais en pourcentage. Zéro commission par exposant. Suite logicielle complète pour l’ensemble de votre saison.'
                  : 'Zero percentage fees. Zero per-vendor surcharges. Complete software operations suite for your entire season.'}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-800 space-y-3 text-xs sm:text-sm text-slate-200">
                {t.pricing.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                type="button"
                onClick={onOpenStartSeason}
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 group active:scale-98"
              >
                <span>{t.pricing.ctaCard}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="block text-center text-[11px] text-slate-400 mt-2">
                {language === 'fr'
                  ? 'Factures payables par TEF, virement Interac ou carte de crédit canadienne'
                  : 'Invoices payable via EFT, Interac e-Transfer, or Canadian Credit Card'}
              </span>
            </div>
          </div>

          {/* Interactive Savings Calculator */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-700" />
                  <h3 className="font-bold text-base text-slate-900">
                    {t.pricing.calcTitle}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {language === 'fr' ? 'Fixe vs % de prélèvement' : 'Compare Flat vs % Cuts'}
                </span>
              </div>

              <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                {t.pricing.calcSubtitle}
              </p>

              <div className="mt-6 space-y-5">
                {/* Sliders */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1.5">
                    <span>{t.pricing.vendorSlider}</span>
                    <span className="font-mono text-emerald-800 font-bold">
                      {vendorCount} {language === 'fr' ? 'exposants' : 'vendors'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={vendorCount}
                    onChange={(e) => setVendorCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1.5">
                    <span>{t.pricing.weeksSlider}</span>
                    <span className="font-mono text-emerald-800 font-bold">
                      {weeksCount} {language === 'fr' ? 'semaines' : 'weeks'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="52"
                    value={weeksCount}
                    onChange={(e) => setWeeksCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1.5">
                    <span>{t.pricing.feeSlider}</span>
                    <span className="font-mono text-emerald-800 font-bold">
                      {avgBoothFee} $ / {language === 'fr' ? 'sem.' : 'week'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="120"
                    step="5"
                    value={avgBoothFee}
                    onChange={(e) => setAvgBoothFee(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                  />
                </div>
              </div>
            </div>

            {/* Total Comparison Output */}
            <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">{t.pricing.stallVolumeLabel}</span>
                <span className="font-mono font-bold text-slate-900">
                  {totalSeasonStallVolume.toLocaleString(language === 'fr' ? 'fr-CA' : 'en-CA')} $ CAD
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">{t.pricing.competitorCutLabel}</span>
                <span className="font-mono font-bold text-rose-600">
                  -{competitorFee.toLocaleString(language === 'fr' ? 'fr-CA' : 'en-CA', { maximumFractionDigits: 0 })} $ CAD
                </span>
              </div>
              <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-900">{t.pricing.lmhFlatLabel}</span>
                <span className="font-mono font-bold text-emerald-700">500 $ CAD</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-950">{t.pricing.savingsNetLabel}</span>
                <span className="text-lg font-black font-mono text-emerald-800 tabular-nums">
                  +{savings.toLocaleString(language === 'fr' ? 'fr-CA' : 'en-CA', { maximumFractionDigits: 0 })} $ CAD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Community Accessibility Partnerships Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-xs flex flex-col items-start gap-5 sm:gap-6">
          <div className="flex items-start gap-4 w-full">
            <div className="p-3 rounded-xl bg-white text-emerald-700 border border-emerald-200 shrink-0 shadow-xs">
              <HeartHandshake className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="w-full">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {t.pricing.partnershipsTitle}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed font-normal w-full">
                {t.pricing.partnershipsDesc}
              </p>

              <div className="mt-4 sm:mt-5 flex justify-start">
                <a
                  href="mailto:francois@localmarkethub.ca"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm tracking-wide transition-colors shadow-xs"
                >
                  <span>{t.pricing.partnershipsCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
