import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenStartSeason: () => void;
  intellectualMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStartSeason, intellectualMode }) => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white border-b border-slate-200">
      {/* Subtle geometric grid background */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Metadata line without pills */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-4">
            <span>{t.hero.kicker.domain}</span>
            <span aria-hidden="true">·</span>
            <span>{t.hero.kicker.infrastructure}</span>
            <span aria-hidden="true">·</span>
            <span>{t.hero.kicker.certification}</span>
          </div>

          {/* Exact Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
            {t.hero.headline}
          </h1>

          {/* Sub-headline with intellectual accessibility support */}
          <p className="mt-5 text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto font-normal text-balance leading-relaxed">
            {intellectualMode ? (
              <span className="text-slate-800 font-medium">
                {t.hero.subheadlinePlain}
              </span>
            ) : (
              <span>{t.hero.subheadlineStandard}</span>
            )}
          </p>

          {/* Primary CTA button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenStartSeason}
              type="button"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 group active:scale-98"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#comparison"
              className="w-full sm:w-auto px-6 py-4 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Value Anchors (Clean text & typographic separators) */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500">
            <div className="flex items-center gap-1.5 font-medium text-slate-700">
              <Lock className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>{t.hero.anchorSovereignty}</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <a
              href="#accessibility-legal-callout"
              className="flex items-center gap-1.5 font-medium text-slate-800 hover:text-emerald-700 underline decoration-slate-300 hover:decoration-emerald-600 underline-offset-4 transition-colors group cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-semibold text-slate-900 group-hover:text-emerald-800">{t.hero.anchorFines}</span>
            </a>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 font-medium text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>{t.hero.anchorFee}</span>
            </div>
          </div>

          {/* Direct Sub-text Link Clarifying Compounding Ontario Fines vs Flat Cap */}
          <div className="mt-3 text-center">
            <a
              href="#accessibility-legal-callout"
              className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-emerald-800 bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/80 hover:border-emerald-300 px-3.5 py-1.5 rounded-full transition-all group"
            >
              <span className="text-emerald-700 font-bold group-hover:translate-x-0.5 transition-transform">➔</span>
              <span>{t.hero.anchorFinesSubtext}</span>
            </a>
          </div>
        </div>

        {/* High-Fidelity Domain Interface Visual Showcase */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-slate-900 shadow-2xl overflow-hidden">
          {/* Mockup browser/app chrome */}
          <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">{t.hero.preview.route}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300">{t.hero.preview.cloudLocation}</span>
            </div>
          </div>

          {/* Interactive Interface Simulation Preview */}
          <div className="p-6 sm:p-8 bg-slate-900 text-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Automated Onboarding Pipeline */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  {language === 'fr' ? '01. Inscription' : '01. Vendor Intake'}
                </span>
                <span className="text-xs text-slate-400">
                  {language === 'fr' ? 'Saison 2026' : 'Season 2026'}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white">{t.hero.preview.step1Title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.hero.preview.step1Desc}
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs p-2 rounded bg-slate-900/60 border border-slate-700">
                  <span className="text-slate-300">
                    {language === 'fr' ? 'Certification bio / fermière' : 'Organic Farm Certificate'}
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px]">
                    {language === 'fr' ? 'Vérifié ✓' : 'Verified ✓'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded bg-slate-900/60 border border-slate-700">
                  <span className="text-slate-300">
                    {language === 'fr' ? 'Salubrité alimentaire' : 'Food Safety / Public Health'}
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px]">
                    {language === 'fr' ? 'Approuvé ✓' : 'Approved ✓'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded bg-slate-900/60 border border-slate-700">
                  <span className="text-slate-300">
                    {language === 'fr' ? 'Assurance responsabilité (2 M$)' : 'Liability Insurance ($2M)'}
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px]">
                    {language === 'fr' ? 'À jour ✓' : 'Current ✓'}
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Booth Allocation & Scheduling */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
                  {language === 'fr' ? '02. Logistique' : '02. Booth Logistics'}
                </span>
                <span className="text-xs text-slate-400">
                  {language === 'fr' ? '38 stands attribués' : '38 Stalls Mapped'}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white">{t.hero.preview.step2Title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.hero.preview.step2Desc}
              </p>
              <div className="p-3 rounded bg-slate-900/60 border border-slate-700 text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span>{language === 'fr' ? 'Marché du samedi' : 'Saturday Market Roster'}</span>
                  <span className="text-sky-300 font-mono">
                    {language === 'fr' ? '100 % complet' : '100% Filled'}
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-sky-500 h-2 rounded-full w-full" />
                </div>
                <div className="text-[11px] text-slate-400 pt-1">
                  {language === 'fr'
                    ? 'Voies accessibles : 36 po de dégagement continu conformes LAPHO & WCAG.'
                    : 'Accessible pathways: Verified 36" clearance compliant with WCAG & AODA.'}
                </div>
              </div>
            </div>

            {/* Column 3: Sovereign Finance & Flat Pricing */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  {language === 'fr' ? '03. Intégrité financière' : '03. Financial Integrity'}
                </span>
                <span className="text-xs text-slate-400">{t.common.flatSeasonFee}</span>
              </div>
              <h3 className="text-base font-semibold text-white">{t.hero.preview.step3Title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.hero.preview.step3Desc}
              </p>
              <div className="p-3 rounded bg-slate-900/60 border border-slate-700 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">
                    {language === 'fr' ? 'Revenus du marché :' : 'Market Revenue:'}
                  </span>
                  <span className="font-mono text-white">64 000 $</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">
                    {language === 'fr' ? 'Prélèvement concurrent (4 %) :' : 'US Platform Take (4%):'}
                  </span>
                  <span className="font-mono text-rose-400">-2 560 $</span>
                </div>
                <div className="flex justify-between text-xs pt-1 border-t border-slate-700">
                  <span className="text-emerald-300 font-medium">Local Market Hub :</span>
                  <span className="font-mono text-emerald-400 font-semibold">{language === 'fr' ? '500 $ fixe' : '$500 flat'}</span>
                </div>
                <p className="text-[11px] text-emerald-300 pt-1">
                  {language === 'fr' ? 'Vous économisez 2 060 $ cette saison' : 'You save $2,060 this season'}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {language === 'fr'
                  ? 'Données résidentes dans des centres de données canadiens · Protégées par la LPRPDE'
                  : 'Data resident in Canadian data centers · Protected under PIPEDA'}
              </span>
            </span>
            <span className="font-mono text-slate-400">
              {language === 'fr'
                ? 'Conformité WCAG 2.2 AA vérifiée · Bouclier LAPHO & Loi de la C.-B.'
                : 'WCAG 2.2 AA Verified · Ontario AODA & BC Act Safeguards'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
