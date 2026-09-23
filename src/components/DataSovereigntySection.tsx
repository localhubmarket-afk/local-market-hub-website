import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle2, Server, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DataSovereigntySectionProps {
  intellectualMode: boolean;
}

export const DataSovereigntySection: React.FC<DataSovereigntySectionProps> = ({
  intellectualMode,
}) => {
  const [activeTab, setActiveTab] = useState<'sovereignty' | 'cloudact' | 'laws'>('sovereignty');
  const { language, t } = useLanguage();

  const tabData = t.sovereignty.tabs[activeTab];

  return (
    <section id="data-sovereignty" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {t.sovereignty.title}
          </h2>
        </div>

        {/* Primary Prompt Text Box */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-900 text-slate-100 shadow-xl border border-slate-800">
          <div className="max-w-4xl space-y-4 text-base sm:text-lg leading-relaxed text-slate-200">
            <p className="font-medium text-white text-xl">
              {t.sovereignty.p1}
            </p>
            <p>
              {t.sovereignty.p2}
            </p>
            <p>
              {t.sovereignty.p3}
            </p>
          </div>

          {intellectualMode && (
            <div className="mt-6 pt-4 border-t border-slate-800 text-sm text-emerald-300 flex items-start gap-2">
              <span className="font-bold shrink-0">{t.sovereignty.plainIntro}</span>
              <span>{t.sovereignty.plainBody}</span>
            </div>
          )}
        </div>

        {/* Interactive Deep-Dive Explorer */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Selector Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              {t.sovereignty.tabExplore}
            </h3>

            <button
              type="button"
              onClick={() => setActiveTab('sovereignty')}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                activeTab === 'sovereignty'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Server className={`w-5 h-5 ${activeTab === 'sovereignty' ? 'text-emerald-700' : 'text-slate-400'}`} />
                <div>
                  <div className="font-bold text-sm">{t.sovereignty.tabs.sovereignty.label}</div>
                  <div className="text-xs text-slate-500">{t.sovereignty.tabs.sovereignty.desc}</div>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('cloudact')}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                activeTab === 'cloudact'
                  ? 'bg-rose-50 border-rose-300 text-rose-950 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className={`w-5 h-5 ${activeTab === 'cloudact' ? 'text-rose-600' : 'text-slate-400'}`} />
                <div>
                  <div className="font-bold text-sm">{t.sovereignty.tabs.cloudact.label}</div>
                  <div className="text-xs text-slate-500">{t.sovereignty.tabs.cloudact.desc}</div>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('laws')}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                activeTab === 'laws'
                  ? 'bg-sky-50 border-sky-300 text-sky-950 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Scale className={`w-5 h-5 ${activeTab === 'laws' ? 'text-sky-700' : 'text-slate-400'}`} />
                <div>
                  <div className="font-bold text-sm">{t.sovereignty.tabs.laws.label}</div>
                  <div className="text-xs text-slate-500">{t.sovereignty.tabs.laws.desc}</div>
                </div>
              </div>
            </button>
          </div>

          {/* Right Column: Tab Content Canvas */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 min-h-[380px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                {activeTab === 'sovereignty' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                {activeTab === 'cloudact' && <AlertTriangle className="w-4 h-4 text-rose-600" />}
                {activeTab === 'laws' && <Shield className="w-4 h-4 text-sky-600" />}
                <span className={activeTab === 'sovereignty' ? 'text-emerald-800' : activeTab === 'cloudact' ? 'text-rose-800' : 'text-sky-800'}>
                  {tabData.badge}
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {tabData.heading}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {tabData.body1}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {tabData.body2}
              </p>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-2 pt-3">
                <div className="font-bold text-slate-800">
                  {language === 'fr' ? 'Points clés de conformité :' : 'Key Compliance Elements:'}
                </div>
                <ul className="space-y-1.5 text-slate-700">
                  {tabData.points.map((pt, i) => (
                    <li key={i}>• {pt}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>
                {language === 'fr'
                  ? 'Compétence juridique : Tribunaux provinciaux et fédéraux du Canada'
                  : 'Jurisdiction: Provincial and Federal Courts of Canada'}
              </span>
              <span className="font-semibold text-emerald-800">localmarkethub.ca</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
