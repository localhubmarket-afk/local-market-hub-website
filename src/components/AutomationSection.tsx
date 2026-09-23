import React, { useState } from 'react';
import { Cpu, Sparkles, FileText, CheckCircle2, Users, DollarSign, Award, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AutomationSectionProps {
  intellectualMode: boolean;
}

export const AutomationSection: React.FC<AutomationSectionProps> = ({
  intellectualMode,
}) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<'farmers' | 'artisan' | 'holiday'>('farmers');
  const [isGenerating, setIsGenerating] = useState(false);
  const { language, t } = useLanguage();

  const handleSimulateGeneration = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 600);
  };

  const pointIcons = [Cpu, Sparkles, FileText];

  return (
    <section id="automation" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 5 Primary Designated Blocks: Heading, Paragraph, and Bullet List */}
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            {t.automation.economicAdvantage.heading}
          </h2>

          {/* Section 5 Paragraph Block */}
          <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {t.automation.economicAdvantage.paragraph}
          </p>

          {/* Stat highlights reflecting data in Paragraph Block */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>{language === 'fr' ? 'Population concernée' : 'Talented Vendor Pool'}</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">27%</span>
                <span className="text-xs text-slate-600 font-medium">~8M {language === 'fr' ? 'Canadiens' : 'Canadians'}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <DollarSign className="w-4 h-4 text-rose-600" />
                <span>{language === 'fr' ? 'Pertes dues aux barrières' : 'Friction Revenue Lost'}</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-rose-700">$16.8B</span>
                <span className="text-xs text-slate-600 font-medium">{language === 'fr' ? 'par an au Canada' : 'annually to friction'}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>{language === 'fr' ? 'Impact Local Market Hub' : 'Local Market Hub Advantage'}</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-800">100%</span>
                <span className="text-xs text-slate-600 font-medium">{language === 'fr' ? 'Barrières éliminées' : 'Barriers Dismantled'}</span>
              </div>
            </div>
          </div>

          {/* Section 5 Bullet List Block */}
          <div className="mt-8 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
              {language === 'fr' ? 'Avantages économiques directs :' : 'Direct Economic Advantages:'}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {t.automation.economicAdvantage.bullets.map((bullet, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-emerald-200/90 shadow-xs hover:border-emerald-300 transition-colors"
                >
                  <div className="p-1 bg-emerald-100 text-emerald-800 rounded-md shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900 leading-snug">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Supporting Automation & Technology Pillars */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800">
              {language === 'fr' ? 'Infrastructure logicielle' : 'Operational Intelligence'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              {language === 'fr' 
                ? 'L’automatisation au service de l’avantage économique' 
                : 'Intelligent Automation Delivering the Economic Advantage'}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {intellectualMode ? t.automation.subtitlePlain : t.automation.subtitleStandard}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.automation.points.map((pt, idx) => {
              const Icon = pointIcons[idx % pointIcons.length];
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Case Study & Narrative Engine Sandbox */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="w-full lg:w-auto">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 block">
                {t.automation.generatorKicker}
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-1">
                {t.automation.generatorTitle}
              </h4>
            </div>

            {/* Segmented control for market type */}
            <div className="w-full lg:w-auto flex flex-wrap sm:flex-nowrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-full overflow-x-auto">
              <button
                type="button"
                onClick={() => setSelectedCaseStudy('farmers')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap text-center ${
                  selectedCaseStudy === 'farmers'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.automation.marketTypes.farmers}
              </button>
              <button
                type="button"
                onClick={() => setSelectedCaseStudy('artisan')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap text-center ${
                  selectedCaseStudy === 'artisan'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.automation.marketTypes.artisan}
              </button>
              <button
                type="button"
                onClick={() => setSelectedCaseStudy('holiday')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap text-center ${
                  selectedCaseStudy === 'holiday'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.automation.marketTypes.holiday}
              </button>
            </div>
          </div>

          {/* Generated Result Container */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-slate-700 block">
                  {language === 'fr' ? 'Données opérationnelles de la saison' : 'Season Operational Inputs'}
                </span>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>{language === 'fr' ? 'Exposants actifs :' : 'Active Vendors:'}</span>
                    <span className="font-mono font-semibold text-slate-900">
                      {selectedCaseStudy === 'farmers'
                        ? (language === 'fr' ? '46 producteurs' : '46 Growers')
                        : selectedCaseStudy === 'artisan'
                        ? (language === 'fr' ? '72 créateurs' : '72 Makers')
                        : (language === 'fr' ? '34 exposants' : '34 Vendors')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === 'fr' ? 'Heures d’admin économisées :' : 'Admin Hours Reclaimed:'}</span>
                    <span className="font-mono font-semibold text-emerald-700">340+ h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === 'fr' ? 'Audits de conformité réussis :' : 'Compliance Audits Passed:'}</span>
                    <span className="font-mono font-semibold text-slate-900">100% (LAPHO & Santé)</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSimulateGeneration}
                  className="w-full mt-2 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
                  <span>{isGenerating ? t.automation.recalculating : t.automation.recalculateBtn}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
                <span className="font-mono">
                  {language === 'fr'
                    ? 'Local Market Hub · Rapport d’impact automatisé'
                    : 'Local Market Hub · Automated Impact Report'}
                </span>
                <span className="text-emerald-700 font-semibold">
                  {language === 'fr'
                    ? 'Prêt pour le conseil municipal / conseil d’administration'
                    : 'Ready for City Council / Board of Directors'}
                </span>
              </div>

              {selectedCaseStudy === 'farmers' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <h5 className="font-bold text-base text-slate-900">
                    {t.automation.caseStudyFarmers.title}
                  </h5>
                  <p>
                    {t.automation.caseStudyFarmers.executiveSummary}
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="block text-xs text-slate-400">
                        {language === 'fr' ? 'Coût fixe' : 'Fixed Cost'}
                      </span>
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {language === 'fr' ? '500 $ fixe' : '$500 flat'}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400">
                        {language === 'fr' ? 'Économies annuelles' : 'Third-Party Skim Saved'}
                      </span>
                      <span className="font-mono font-bold text-emerald-700 text-sm">
                        {t.automation.caseStudyFarmers.annualSavings}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400">
                        {language === 'fr' ? 'Fidélisation' : 'Vendor Retention'}
                      </span>
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {t.automation.caseStudyFarmers.vendorRetention}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {selectedCaseStudy === 'artisan' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <h5 className="font-bold text-base text-slate-900">
                    {t.automation.caseStudyArtisan.title}
                  </h5>
                  <p>
                    {t.automation.caseStudyArtisan.executiveSummary}
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="block text-xs text-slate-400">
                        {language === 'fr' ? 'Coût fixe' : 'Fixed Cost'}
                      </span>
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {language === 'fr' ? '500 $ fixe' : '$500 flat'}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400">
                        {language === 'fr' ? 'Économies annuelles' : 'Onboarding Flow'}
                      </span>
                      <span className="font-mono font-bold text-emerald-700 text-sm">
                        {t.automation.caseStudyArtisan.annualSavings}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400">
                        {language === 'fr' ? 'Risque d’amende' : 'BC Act Risk'}
                      </span>
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {t.automation.caseStudyArtisan.regulatoryFines}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {selectedCaseStudy === 'holiday' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <h5 className="font-bold text-base text-slate-900">
                    {t.automation.caseStudyHoliday.title}
                  </h5>
                  <p>
                    {t.automation.caseStudyHoliday.executiveSummary}
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="block text-xs text-slate-400">
                        {language === 'fr' ? 'Coût fixe' : 'Fixed Cost'}
                      </span>
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {language === 'fr' ? '500 $ fixe' : '$500 flat'}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400">
                        {language === 'fr' ? 'Résidence des données' : 'Data Residence'}
                      </span>
                      <span className="font-mono font-bold text-emerald-700 text-sm">
                        100 % Canada
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400">
                        {language === 'fr' ? 'Fidélisation' : 'Stall Utilization'}
                      </span>
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {t.automation.caseStudyHoliday.vendorRetention}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
