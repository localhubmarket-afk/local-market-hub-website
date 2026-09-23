import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StartSeasonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StartSeasonModal: React.FC<StartSeasonModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    marketName: '',
    contactName: '',
    contactEmail: '',
    phone: '',
    province: 'Ontario',
    vendorCount: '35-50 vendors',
    seasonStart: '2026-05-01',
    seasonEnd: '2026-10-31',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h2 id="modal-title" className="text-base font-bold text-white">
              {step === 'form' ? t.modal.titleForm : t.modal.titleSuccess}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label={language === 'fr' ? 'Fermer la boîte de dialogue' : 'Close dialog'}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                {t.modal.kicker}
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {t.modal.heading}
              </h3>
              <p className="text-xs text-slate-600">
                {t.modal.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.modal.marketNameLabel} *
                </label>
                <input
                  required
                  type="text"
                  placeholder={t.modal.marketNamePlaceholder}
                  value={formData.marketName}
                  onChange={(e) => setFormData({ ...formData, marketName: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.modal.provinceLabel} *
                </label>
                <select
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="Ontario">{t.modal.provinces.ontario}</option>
                  <option value="British Columbia">{t.modal.provinces.bc}</option>
                  <option value="Alberta">{t.modal.provinces.alberta}</option>
                  <option value="Quebec">{t.modal.provinces.quebec}</option>
                  <option value="Nova Scotia">{t.modal.provinces.novaScotia}</option>
                  <option value="Manitoba">{t.modal.provinces.manitoba}</option>
                  <option value="Saskatchewan">{t.modal.provinces.saskatchewan}</option>
                  <option value="New Brunswick">{t.modal.provinces.newBrunswick}</option>
                  <option value="Newfoundland">{t.modal.provinces.newfoundland}</option>
                  <option value="PEI">{t.modal.provinces.pei}</option>
                  <option value="Territories">{t.modal.provinces.territories}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.modal.directorLabel} *
                </label>
                <input
                  required
                  type="text"
                  placeholder={t.modal.directorPlaceholder}
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.modal.emailLabel} *
                </label>
                <input
                  required
                  type="email"
                  placeholder={t.modal.emailPlaceholder}
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.modal.vendorsLabel}
                </label>
                <select
                  value={formData.vendorCount}
                  onChange={(e) => setFormData({ ...formData, vendorCount: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="10-25 vendors">{t.modal.vendorOptions.opt1}</option>
                  <option value="25-50 vendors">{t.modal.vendorOptions.opt2}</option>
                  <option value="50-100 vendors">{t.modal.vendorOptions.opt3}</option>
                  <option value="100+ vendors">{t.modal.vendorOptions.opt4}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.modal.launchLabel}
                </label>
                <input
                  type="date"
                  value={formData.seasonStart}
                  onChange={(e) => setFormData({ ...formData, seasonStart: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            {/* Price & terms confirmation */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">{t.modal.totalLabel}</span>
              <span className="font-mono font-bold text-slate-900 text-sm">{t.modal.flatTotal}</span>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <Lock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{t.modal.securityNote}</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2.5 px-5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>{isSubmitting ? t.modal.submittingBtn : t.modal.submitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">
                {t.modal.successWelcome}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {language === 'fr'
                  ? `L'espace de gestion de saison pour "${formData.marketName || 'votre marché'}" a été initialisé sous juridiction canadienne.`
                  : `Your season workspace for "${formData.marketName || 'your market'}" has been initialized under Canadian jurisdiction.`}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-left space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">{t.modal.invoiceRefLabel}</span>
                <span className="font-mono font-bold text-slate-800">LMH-2026-CA-7492</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t.modal.jurisdictionLabel}</span>
                <span className="font-semibold text-emerald-700">WCAG 2.2 AA & {formData.province}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t.modal.supportLeadLabel}</span>
                <span className="text-slate-700">{t.modal.supportTeamName}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="py-2.5 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
            >
              {t.modal.doneBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
