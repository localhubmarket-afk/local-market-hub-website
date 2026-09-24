import React, { useState } from 'react';
import { 
  Users, 
  LayoutGrid, 
  Mail, 
  Smartphone, 
  Store, 
  Check, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface VendorManagementSectionProps {
  onOpenStartSeason: () => void;
  intellectualMode: boolean;
}

export const VendorManagementSection: React.FC<VendorManagementSectionProps> = ({
  onOpenStartSeason,
}) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const [activeTab, setActiveTab] = useState<'applications' | 'mapping' | 'communication' | 'marketday' | 'directory'>('applications');

  const tools = [
    {
      id: 'applications' as const,
      icon: Users,
      name: isFr ? 'Inscriptions simples' : 'Vendor Applications',
      short: isFr ? 'Formulaires sans tracas' : 'Easy online intake',
      headline: isFr ? 'Recevez toutes les demandes au même endroit.' : 'Collect all applications in one clean place.',
      points: isFr
        ? [
            'Un formulaire clair que vos marchands remplissent en 3 minutes.',
            'Recevez les photos de produits, permis et besoins électriques sans courriels perdus.',
            'Approuvez ou refusez les demandes en un seul clic.',
            'Vos listes d’attente s’organisent toutes seules.',
          ]
        : [
            'A clear online form that vendors complete in under 3 minutes.',
            'Collect booth photos, food permits, and power needs without missing attachments.',
            'Approve or decline applications with a single click.',
            'Automatic waitlists keep backup vendors ready when someone cancels.',
          ],
      previewBadge: isFr ? 'Gain de temps : 4 heures / semaine' : 'Time Saved: 4 hrs / week',
    },
    {
      id: 'mapping' as const,
      icon: LayoutGrid,
      name: isFr ? 'Plan de table' : 'Stall & Map Builder',
      short: isFr ? 'Glisser-déposer visuel' : 'Visual drag & drop',
      headline: isFr ? 'Attribuez les kiosques en quelques clics.' : 'Assign booths with simple clicks.',
      points: isFr
        ? [
            'Visualisez l’ensemble de votre marché sur un écran clair.',
            'Glissez vos marchands dans leurs espaces réservés.',
            'Repérez immédiatement les prises de courant et les allées.',
            'Évitez de placer deux kiosques similaires côte à côte sans effort.',
          ]
        : [
            'See your entire market grounds on one simple visual screen.',
            'Drag and drop vendors into their assigned booths in seconds.',
            'Identify power hookups, corner stalls, and open spaces instantly.',
            'Easily prevent placing two competing bakeries right next to each other.',
          ],
      previewBadge: isFr ? 'Gain de temps : 3 heures / semaine' : 'Time Saved: 3 hrs / week',
    },
    {
      id: 'communication' as const,
      icon: Mail,
      name: isFr ? 'Messages groupés' : 'One-Click Updates',
      short: isFr ? 'Rappels automatiques' : 'Instant reminders',
      headline: isFr ? 'Transmettez vos consignes en 10 secondes.' : 'Send announcements in 10 seconds.',
      points: isFr
        ? [
            'Envoyez les heures d’arrivée et les numéros de kiosque à tous vos marchands.',
            'Avertissez tout le monde instantanément en cas de pluie ou de changement.',
            'Finies les réponses individuelles à 40 courriels identiques.',
            'Les marchands reçoivent un message clair directement sur leur téléphone.',
          ]
        : [
            'Send arrival times and stall assignments to all vendors with one tap.',
            'Send quick weather alerts or parking updates instantly.',
            'Stop answering the same questions 40 times every Friday.',
            'Vendors receive clean instructions directly on their phones.',
          ],
      previewBadge: isFr ? 'Gain de temps : 2 heures / semaine' : 'Time Saved: 2 hrs / week',
    },
    {
      id: 'marketday' as const,
      icon: Smartphone,
      name: isFr ? 'Jour de marché' : 'Market Morning App',
      short: isFr ? 'Pointage sur mobile' : 'Fast phone check-in',
      headline: isFr ? 'Gérez l’ouverture depuis votre téléphone.' : 'Manage arrival right from your phone.',
      points: isFr
        ? [
            'Faites votre tournée du matin avec votre téléphone.',
            'Touchez l’écran pour marquer un marchand présent.',
            'Réattribuez un espace vide en quelques secondes si quelqu’un a un empêchement.',
            'Oubliez les papiers trempés et les stylos qui gèlent.',
          ]
        : [
            'Walk the market aisles with your phone at 7:00 AM.',
            'Tap once to mark each vendor present as they set up.',
            'Reassign empty stalls in seconds if a vendor cancels at the last minute.',
            'No soggy clipboards, lost sheets, or frozen pens.',
          ],
      previewBadge: isFr ? 'Gain de temps : 2 heures le samedi' : 'Time Saved: 2 hrs on market day',
    },
    {
      id: 'directory' as const,
      icon: Store,
      name: isFr ? 'Répertoire public' : 'Shopper Directory',
      short: isFr ? 'Visibilité pour vos marchands' : 'Live vendor showcase',
      headline: isFr ? 'Montrez aux visiteurs qui sera présent.' : 'Show shoppers who is at the market this week.',
      points: isFr
        ? [
            'Une belle page web générée automatiquement pour votre marché.',
            'Les clients voient exactement quels fermiers et artisans seront là.',
            'Aidez vos marchands à vendre davantage de produits frais.',
            'Partagez facilement le lien sur vos réseaux sociaux.',
          ]
        : [
            'An attractive, clean web page created automatically for your market.',
            'Shoppers see exactly which farmers and artisans are attending this weekend.',
            'Help your local vendors make more sales every market day.',
            'Share one simple link on Facebook and Instagram each week.',
          ],
      previewBadge: isFr ? 'Plus de clients au marché' : 'Attracts more visitors',
    },
  ];

  const currentTool = tools.find((t) => t.id === activeTab) || tools[0];

  return (
    <section id="vendor-management" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isFr ? 'Gestion des marchands sans effort' : 'Effortless Vendor Management'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isFr ? 'Tout pour organiser vos marchands en toute simplicité' : 'Everything you need to manage your vendors smoothly'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {isFr
              ? 'Conçu spécifiquement pour les marchés fermiers, les foires artisanales et les rassemblements locaux. Zéro complication.'
              : 'Built specifically for farmers markets, artisan fairs, and community events. No technical hurdles.'}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3 border-b border-slate-200 pb-4">
          {tools.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tool Showcase */}
        <div className="mt-8 bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Direct explanations */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentTool.previewBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {currentTool.headline}
              </h3>

              <div className="space-y-3 pt-2">
                {currentTool.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenStartSeason}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-sm"
                >
                  <span>{isFr ? 'Lancer votre saison (500 $)' : 'Start Your Season ($500 Flat)'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Feature Box */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {currentTool.name}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {isFr ? 'Prêt à l’emploi' : 'Instant Setup'}
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <p className="font-medium text-slate-800">
                  {isFr ? 'Ce que disent les organisateurs :' : 'Why market managers love this:'}
                </p>
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100 italic text-slate-700 text-xs leading-relaxed">
                  {activeTab === 'applications' && (isFr 
                    ? '« Nous avons reçu 42 inscriptions en trois jours sans un seul courriel de suivi. Tout était complet du premier coup. »'
                    : '"We collected 42 vendor applications in 3 days without chasing a single person. All photos and food permits were attached."')}
                  {activeTab === 'mapping' && (isFr
                    ? '« Je passais mes vendredis soirs à dessiner sur du papier. Maintenant, j’attribue tous les kiosques en 10 minutes chrono. »'
                    : '"I used to spend every Friday evening erasing paper maps. Now I assign all 35 booths in 10 minutes on my tablet."')}
                  {activeTab === 'communication' && (isFr
                    ? '« Un clic le vendredi matin et tous mes marchands savent à quelle porte arriver. Zéro confusion le samedi à 6h. »'
                    : '"One click on Friday morning and every vendor knows their gate and arrival time. Zero confusion at 6:00 AM."')}
                  {activeTab === 'marketday' && (isFr
                    ? '« Je marche dans les allées avec mon téléphone. En 5 minutes, je sais qui est arrivé et tout le monde a son kiosque. »'
                    : '"I walk down the aisles with my phone. In 5 minutes, everyone is checked in and ready for the first customer."')}
                  {activeTab === 'directory' && (isFr
                    ? '« Nos visiteurs adorent voir qui sera présent avant de venir. Les marchands ont vu leurs ventes augmenter dès le premier mois. »'
                    : '"Our shoppers love checking who is at the market before leaving home. Our vendors noticed higher sales immediately."')}
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between">
                <span>{isFr ? 'Inclus dans le forfait 500 $' : 'Included in $500 flat season'}</span>
                <span className="text-emerald-700 font-bold">✓ 100% {isFr ? 'Illimité' : 'Unlimited'}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
