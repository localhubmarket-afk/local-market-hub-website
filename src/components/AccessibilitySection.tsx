import React, { useState } from 'react';
import { ShieldCheck, AlertOctagon, CheckCircle2, Sliders, Scale, Calendar, FileText, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AccessibilitySectionProps {
  onOpenAccessibilityDrawer: () => void;
  intellectualMode: boolean;
  setIntellectualMode: (val: boolean) => void;
}

export const AccessibilitySection: React.FC<AccessibilitySectionProps> = ({
  onOpenAccessibilityDrawer,
  intellectualMode,
  setIntellectualMode,
}) => {
  const [selectedProvinceId, setSelectedProvinceId] = useState<string>('ontario');
  const [simulatorProvince, setSimulatorProvince] = useState<string>('ontario');
  const [daysNonCompliant, setDaysNonCompliant] = useState<number>(14);
  const { language, t } = useLanguage();

  const activeProvince =
    t.accessibility.provincesList.find((p) => p.id === selectedProvinceId) ||
    t.accessibility.provincesList[0];

  const activeSimProvince =
    t.accessibility.provincesList.find((p) => p.id === simulatorProvince);

  // Maximum statutory exposure calculations based on official provincial penalty schedules
  const calculateFine = () => {
    if (simulatorProvince === 'ontario') {
      return daysNonCompliant * 100000;
    } else if (simulatorProvince === 'national') {
      return daysNonCompliant * 100000 + 250000;
    } else if (
      simulatorProvince === 'bc' ||
      simulatorProvince === 'manitoba' ||
      simulatorProvince === 'saskatchewan' ||
      simulatorProvince === 'nova_scotia' ||
      simulatorProvince === 'newfoundland'
    ) {
      return 250000;
    } else {
      // Alberta, Quebec, New Brunswick, PEI: Human Rights Code complaints & damages
      return 150000;
    }
  };

  return (
    <section id="accessibility" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {t.accessibility.title}
          </h2>
        </div>

        {/* Legal Requirement Callout Card */}
        <div 
          id="accessibility-legal-callout" 
          className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-rose-200 shadow-sm scroll-mt-24 transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-rose-50 text-rose-700 rounded-xl shrink-0 mt-1">
              <AlertOctagon className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="space-y-5 w-full">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {t.accessibility.calloutTitle}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed mt-1">
                  {t.accessibility.calloutDesc}
                </p>
                <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-100/70 border border-rose-200/80 text-xs text-rose-950">
                  <span className="font-bold">⚠️ {language === 'fr' ? 'Précision sur les risques :' : 'Jurisdictional Risk Clarification:'}</span>
                  <span>
                    {language === 'fr'
                      ? 'Les amendes en Ontario s’accumulent à hauteur de 100 000 $ CAD par jour d’infraction, tandis que d’autres provinces (C.-B., SK, MB) imposent des plafonds statutaires pouvant atteindre 250 000 $.'
                      : 'Ontario fines compound at up to $100,000 CAD per day rather than stopping at a flat $250,000 maximum penalty.'}
                  </span>
                </div>
              </div>

              {/* Horizontal row of ten clickable buttons labeled with Canadian province names */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold text-slate-600 block">
                  {language === 'fr' 
                    ? 'Sélectionnez une province canadienne pour consulter la législation :' 
                    : 'Select a Canadian province to view legislation & corporate liability:'}
                </span>
                <div 
                  role="tablist"
                  aria-label="Canadian Provinces Accessibility Legislation"
                  className="flex flex-wrap gap-2"
                >
                  {t.accessibility.provincesList.map((province) => {
                    const isSelected = selectedProvinceId === province.id;
                    return (
                      <button
                        key={province.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedProvinceId(province.id)}
                        className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-rose-700 text-white border-rose-700 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-900'
                        }`}
                      >
                        {province.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Single, dynamic display box below the buttons using the pink background style */}
              {activeProvince && (
                <div 
                  role="tabpanel"
                  className="p-5 sm:p-6 rounded-xl bg-rose-50/70 border border-rose-200/80 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-rose-200/70">
                    <h4 className="text-base sm:text-lg font-bold text-rose-950">
                      {activeProvince.name}
                    </h4>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-rose-100 text-rose-900 border border-rose-200">
                      {activeProvince.humanRightsProtection 
                        ? (language === 'fr' ? 'Code des droits de la personne' : 'Human Rights Code')
                        : (language === 'fr' ? 'Loi sur l’accessibilité' : 'Accessibility Act')}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-800">
                    <div className="leading-relaxed">
                      <strong className="font-semibold text-rose-950">{t.accessibility.legislationLabel}</strong>{' '}
                      <span className="text-slate-700">{activeProvince.legislation}</span>
                    </div>

                    {activeProvince.upcomingDeadline && (
                      <div className="leading-relaxed">
                        <strong className="font-semibold text-rose-950">{t.accessibility.upcomingDeadlineLabel}</strong>{' '}
                        <span className="text-slate-700">{activeProvince.upcomingDeadline}</span>
                      </div>
                    )}

                    {activeProvince.humanRightsProtection && (
                      <div className="leading-relaxed">
                        <strong className="font-semibold text-rose-950">{t.accessibility.humanRightsLabel}</strong>{' '}
                        <span className="text-slate-700">{activeProvince.humanRightsProtection}</span>
                      </div>
                    )}

                    <div className="leading-relaxed">
                      <strong className="font-semibold text-rose-950">{t.accessibility.corporateLiabilityLabel}</strong>{' '}
                      <span className="text-slate-700">{activeProvince.corporateLiability}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* How Local Market Hub Protects Your Business */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-emerald-900 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-emerald-300 shrink-0" />
            <h3 className="text-xl sm:text-2xl font-bold">
              {language === 'fr'
                ? 'Local Market Hub protège votre entreprise contre ces futures amendes gouvernementales.'
                : 'Local Market Hub protects your business from these future government fines.'}
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-emerald-800/80 border border-emerald-700/80 space-y-2">
              <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider">
                {language === 'fr' ? 'Norme 01' : 'Standard 01'}
              </span>
              <h4 className="font-bold text-sm text-white">WCAG 2.2 Niveau AA</h4>
              <p className="text-xs text-emerald-100 leading-relaxed">
                {language === 'fr'
                  ? 'Nous garantissons la conformité technique rigoureuse à WCAG 2.2 Niveau AA.'
                  : 'We provide technical compliance for WCAG 2.2 Level AA.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-800/80 border border-emerald-700/80 space-y-2">
              <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider">
                {language === 'fr' ? 'Norme 02' : 'Standard 02'}
              </span>
              <h4 className="font-bold text-sm text-white">
                {language === 'fr' ? '20++ Normes d’accessibilité' : '20++ Accessibility Standards'}
              </h4>
              <p className="text-xs text-emerald-100 leading-relaxed">
                {t.accessibility.standardTarget}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-800/80 border border-emerald-700/80 space-y-2">
              <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider">
                {language === 'fr' ? 'Norme 03' : 'Standard 03'}
              </span>
              <h4 className="font-bold text-sm text-white">
                {language === 'fr' ? 'Accessibilité intellectuelle' : 'Intellectual Accessibility'}
              </h4>
              <p className="text-xs text-emerald-100 leading-relaxed">
                {language === 'fr'
                  ? 'Nous accordons la priorité absolue à l’accessibilité intellectuelle.'
                  : 'We prioritize intellectual accessibility.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-800/80 border border-emerald-700/80 space-y-2">
              <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider">
                {language === 'fr' ? 'Norme 04' : 'Standard 04'}
              </span>
              <h4 className="font-bold text-sm text-white">
                {language === 'fr' ? 'Communication limpide' : 'Clear Communication'}
              </h4>
              <p className="text-xs text-emerald-100 leading-relaxed">
                {language === 'fr'
                  ? 'Nous communiquons les concepts complexes de manière limpide sans perdre leur valeur fondamentale.'
                  : 'We communicate complex ideas clearly without losing their core value.'}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Liability Risk Simulator & Intellectual Accessibility Playground */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Fine Risk Exposure Simulator */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-slate-700" />
                  <span>{t.accessibility.simulatorTitle}</span>
                </h4>
                <p className="text-xs text-rose-700 font-semibold mt-1 flex items-center gap-1.5">
                  <AlertOctagon className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.accessibility.calloutTitle}</span>
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 shrink-0">
                {language === 'fr' ? 'Grille des sanctions officielles' : 'Official Statutory Penalties'}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {language === 'fr' 
                    ? 'Sélectionnez une province canadienne :' 
                    : 'Select Canadian Jurisdiction (from statutory requirements):'}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {t.accessibility.provincesList.map((p) => {
                    const isSelected = simulatorProvince === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          setSimulatorProvince(p.id);
                          setSelectedProvinceId(p.id);
                        }}
                        className={`py-1.5 px-2.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-rose-700 text-white border-rose-700 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-rose-50 hover:border-rose-300'
                        }`}
                      >
                        {p.name}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setSimulatorProvince('national')}
                    className={`py-1.5 px-2.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      simulatorProvince === 'national'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {language === 'fr' ? 'Interprovincial (National)' : 'Cross-Provincial (National)'}
                  </button>
                </div>
              </div>

              {/* Dynamic Legal & Liability Details from "Digital accessibility is a legal requirement." subsection */}
              {activeSimProvince && (
                <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 text-xs space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-1 font-bold text-rose-950 pb-2 border-b border-rose-200/60">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                      {activeSimProvince.name} — {activeSimProvince.legislation}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-mono">
                      {simulatorProvince === 'ontario'
                        ? (language === 'fr' ? '100 000 $ / jour cumulatif' : '$100k / Day Compounding')
                        : activeSimProvince.humanRightsProtection
                        ? (language === 'fr' ? 'Dommages code des droits' : 'Human Rights Liability')
                        : (language === 'fr' ? 'Plafond légal 250 000 $' : 'Up to $250,000 Cap')}
                    </span>
                  </div>

                  {activeSimProvince.upcomingDeadline && (
                    <div className="flex items-start gap-2 text-rose-950 bg-rose-100/90 p-2.5 rounded-lg border border-rose-200 font-medium">
                      <Calendar className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <div>
                        <strong>{t.accessibility.upcomingDeadlineLabel}</strong> {activeSimProvince.upcomingDeadline}
                      </div>
                    </div>
                  )}

                  {activeSimProvince.humanRightsProtection && (
                    <div className="text-slate-700 leading-relaxed">
                      <strong className="text-rose-950">{t.accessibility.humanRightsLabel}</strong> {activeSimProvince.humanRightsProtection}
                    </div>
                  )}

                  <div className="text-slate-700 leading-relaxed">
                    <strong className="text-rose-950">{t.accessibility.corporateLiabilityLabel}</strong> {activeSimProvince.corporateLiability}
                  </div>
                </div>
              )}

              {simulatorProvince === 'national' && (
                <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 text-xs space-y-2">
                  <div className="font-bold text-rose-950 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-700" />
                    <span>{language === 'fr' ? 'Exposition multi-juridictionnelle' : 'Multi-Jurisdictional Exposure'}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {language === 'fr'
                      ? 'Les marchés opérant à travers plusieurs provinces combinent les amendes quotidiennes cumulatives de l’Ontario (100 000 $ CAD / jour) et les pénalités statutaires provinciales (jusqu’à 250 000 $ CAD).'
                      : 'Markets operating across multiple provinces or hosting out-of-province vendors face compounding Ontario daily fines ($100,000 CAD / day) combined with statutory provincial maximum penalties ($250,000 CAD).'}
                  </p>
                </div>
              )}

              {(simulatorProvince === 'ontario' || simulatorProvince === 'national') && (
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>
                      {language === 'fr'
                        ? 'Jours d’infraction sans logiciel conforme WCAG 2.2 AA :'
                        : 'Days in violation without certified WCAG 2.2 AA software:'}
                    </span>
                    <span className="font-mono text-rose-700 font-bold">
                      {daysNonCompliant} {language === 'fr' ? 'jours' : 'days'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    value={daysNonCompliant}
                    onChange={(e) => setDaysNonCompliant(Number(e.target.value))}
                    className="w-full accent-rose-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                    <span>1 {language === 'fr' ? 'jour' : 'day'}</span>
                    <span>30 {language === 'fr' ? 'jours' : 'days'}</span>
                    <span>60 {language === 'fr' ? 'jours' : 'days'}</span>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-500 block">
                    {t.accessibility.estimatedLiability}
                  </span>
                  <span className="text-2xl font-mono font-extrabold text-rose-700">
                    ${calculateFine().toLocaleString()} CAD
                  </span>
                  <span className="block text-[11px] text-slate-600 mt-1 max-w-sm">
                    {simulatorProvince === 'ontario'
                      ? (language === 'fr' 
                          ? 'Cumulé à 100 000 $ CAD / jour (LAPHO Règl. 191/11). Audits immédiats après le 31 déc. 2026.' 
                          : 'Compounded at $100,000 CAD / day (AODA Reg 191/11). Audits triggered post Dec 31, 2026.')
                      : simulatorProvince === 'national'
                      ? (language === 'fr'
                          ? 'Amendes cumulatives de l’Ontario (100k $/jour) + pénalités provinciales maximales.'
                          : 'AODA daily compounding fines + provincial statutory maximum penalties.')
                      : activeSimProvince?.humanRightsProtection
                      ? (language === 'fr'
                          ? 'Dommages-intérêts compensatoires stricts du tribunal des droits de la personne.'
                          : 'Strict duty to accommodate: Human rights damages and tribunal defense exposure.')
                      : (language === 'fr'
                          ? `Sanction statutaire maximale prévue par la loi provinciale (${activeSimProvince?.legislation}).`
                          : `Statutory maximum corporate liability under ${activeSimProvince?.legislation}.`)}
                  </span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-right">
                  <span className="text-[11px] font-semibold text-emerald-800 block">
                    {t.accessibility.lmhRiskLabel}
                  </span>
                  <span className="text-base font-mono font-extrabold text-emerald-900">
                    {t.accessibility.lmhRiskValue}
                  </span>
                  <span className="block text-[10px] text-emerald-700 font-medium mt-0.5">
                    {language === 'fr' ? 'Conforme WCAG 2.2 AA & 20++' : 'WCAG 2.2 AA & 20++ Certified'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Intellectual Accessibility Translation Mode Demo */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-700" />
                <span>{t.accessibility.demoTitle}</span>
              </h4>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                  intellectualMode
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {intellectualMode ? t.accessibility.activeModeLabel : t.accessibility.standardModeLabel}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {t.accessibility.demoDesc}
            </p>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 block">
                {intellectualMode ? t.accessibility.plainEnglishSampleTitle : t.accessibility.standardLegalSampleTitle}
              </span>
              <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                {intellectualMode
                  ? t.accessibility.plainEnglishSampleText
                  : t.accessibility.standardLegalSampleText}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIntellectualMode(!intellectualMode)}
                className="flex-1 py-2 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>{t.accessibility.toggleIntellectualBtn}</span>
              </button>
              <button
                type="button"
                onClick={onOpenAccessibilityDrawer}
                className="py-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                {t.accessibility.configureBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
