import React, { useState } from 'react';
import { Check, X, DollarSign, Database, ShieldCheck, Compass, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ComparisonSectionProps {
  onOpenStartSeason: () => void;
  intellectualMode: boolean;
}

const FEATURE_ICONS = [DollarSign, Compass, Database, ShieldCheck, Award];

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  onOpenStartSeason,
  intellectualMode,
}) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const { language, t } = useLanguage();

  return (
    <section id="comparison" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.comparison.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {intellectualMode ? t.comparison.subtitlePlain : t.comparison.subtitleStandard}
          </p>
        </div>

        {/* The Exact Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/75">
                  <th scope="col" className="py-4 px-6 text-sm font-bold text-slate-900 w-1/3">
                    {t.comparison.thFeature}
                  </th>
                  <th scope="col" className="py-4 px-6 text-sm font-semibold text-rose-950/80 bg-rose-50/50 w-1/3">
                    {t.comparison.thOther}
                  </th>
                  <th scope="col" className="py-4 px-6 text-sm font-bold text-emerald-950 bg-emerald-50/70 w-1/3">
                    {t.comparison.thLmh}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {t.comparison.features.map((item, idx) => {
                  const Icon = FEATURE_ICONS[idx % FEATURE_ICONS.length];
                  const isExpanded = expandedRow === idx;

                  return (
                    <React.Fragment key={item.feature}>
                      <tr
                        onClick={() => setExpandedRow(isExpanded ? null : idx)}
                        className="cursor-pointer hover:bg-slate-50/80 transition-colors group"
                      >
                        {/* Feature column */}
                        <td className="py-4 px-6 font-semibold text-slate-900">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <Icon className="w-4 h-4 text-slate-500 group-hover:text-emerald-700 transition-colors" />
                              <span>{item.feature}</span>
                            </div>
                            <span className="text-xs text-slate-400 group-hover:text-slate-600 hidden sm:inline">
                              {isExpanded ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </span>
                          </div>
                        </td>

                        {/* Other Platforms column */}
                        <td className="py-4 px-6 text-slate-600 bg-rose-50/25">
                          <div className="flex items-center gap-2">
                            <X className="w-4 h-4 text-rose-500 shrink-0" aria-hidden="true" />
                            <span className="font-normal text-slate-700">{item.other}</span>
                          </div>
                        </td>

                        {/* Local Market Hub column */}
                        <td className="py-4 px-6 text-slate-900 bg-emerald-50/40 font-semibold">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                            <span className="text-emerald-950 font-bold">{item.localMarketHub}</span>
                          </div>
                        </td>
                      </tr>

                      {/* Expandable detail row */}
                      {isExpanded && (
                        <tr className="bg-slate-50/90 border-t border-slate-100">
                          <td colSpan={3} className="px-6 py-4">
                            <div className="text-xs sm:text-sm text-slate-700 space-y-2">
                              <div className="font-semibold text-slate-900 flex items-center gap-2">
                                <span>
                                  {language === 'fr'
                                    ? `Analyse opérationnelle · ${item.feature}`
                                    : `Operational Breakdown · ${item.feature}`}
                                </span>
                              </div>
                              <p className="leading-relaxed">
                                {intellectualMode ? item.plainLanguage : item.explanation}
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <span>
              {language === 'fr'
                ? 'Cliquez sur une ligne pour voir le détail. Conçu pour les directeurs de marchés, OBNL et coordonnateurs de SDC canadiens.'
                : 'Click any row for operational breakdown. Built for Canadian market directors, non-profits, and BIA coordinators.'}
            </span>
            <button
              onClick={onOpenStartSeason}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-900 underline underline-offset-2 shrink-0"
            >
              {language === 'fr'
                ? 'Réserver votre saison complète à 500 $ →'
                : 'Lock in $500 full season rate →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
