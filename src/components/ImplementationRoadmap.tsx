import React from 'react';
import { PhoneCall, Settings, Presentation, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ImplementationRoadmap: React.FC = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const steps = [
    {
      number: '01',
      title: isFr ? 'Appel d’introduction' : 'Introduction Call',
      icon: PhoneCall,
      sentences: isFr
        ? [
            'Planifiez une courte rencontre avec notre équipe.',
            'Nous examinons votre méthode administrative actuelle et votre calendrier de marché.',
            'Nous vérifions que Local Market Hub répond à vos exigences opérationnelles.',
          ]
        : [
            'Schedule a brief meeting with our team.',
            'We review your current administrative process and market schedule.',
            'We verify that Local Market Hub fits your operational requirements.',
          ],
    },
    {
      number: '02',
      title: isFr ? 'Configuration de la plateforme' : 'Platform Setup',
      icon: Settings,
      sentences: isFr
        ? [
            'Notre équipe configure votre environnement numérique.',
            'Nous définissons vos dates de marché et établissons vos critères de candidature dans le logiciel.',
            'Cela limite le travail technique initial requis de votre organisation.',
          ]
        : [
            'Our team configures your digital environment.',
            'We define your market dates and establish your vendor application criteria within the software.',
            'This limits the initial technical work required from your organization.',
          ],
    },
    {
      number: '03',
      title: isFr ? 'Présentation au conseil' : 'Board Walkthrough',
      icon: Presentation,
      sentences: isFr
        ? [
            'Nous présentons une démonstration directe de la plateforme configurée.',
            'Les membres de votre conseil d’administration examinent l’interface du système.',
            'Nous répondons à leurs questions concernant la sécurité des données et l’accessibilité.',
          ]
        : [
            'We provide a direct demonstration of the configured platform.',
            'Your board members review the system interface.',
            'We answer their questions regarding data security and usability.',
          ],
    },
    {
      number: '04',
      title: isFr ? 'Lancement auprès des marchands' : 'Vendor Launch',
      icon: Send,
      sentences: isFr
        ? [
            'Vous transmettez un lien numérique unique à votre réseau de marchands.',
            'Les marchands créent leur profil d’entreprise et sélectionnent les dates souhaitées.',
            'Le logiciel regroupe leurs candidatures pour votre approbation.',
          ]
        : [
            'You distribute a single digital link to your vendor network.',
            'Vendors register their business profiles and select requested dates.',
            'The software centralizes their applications for your approval.',
          ],
    },
  ];

  return (
    <section id="implementation-roadmap" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            {isFr ? 'Processus d’intégration' : 'Customer Onboarding'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isFr ? 'Feuille de route de mise en œuvre' : 'Implementation Roadmap'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {isFr
              ? 'Nous accompagnons les organisateurs de marchés publics à travers quatre étapes structurées pour préparer votre saison.'
              : 'We support market organizers through four structured steps to prepare your season.'}
          </p>
        </div>

        {/* Four-Step Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Step {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-xs">
                      <Icon className="w-4 h-4 text-emerald-800" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Body Text: Short declarative sentences */}
                  <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.sentences.map((sentence, sIdx) => (
                      <p key={sIdx}>
                        {sentence}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Bottom Step Indicator Line */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center text-[11px] text-slate-400 font-mono">
                  <span>Phase {index + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
