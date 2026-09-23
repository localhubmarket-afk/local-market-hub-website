export type Language = 'en' | 'fr';

export interface TranslationSchema {
  common: {
    brandName: string;
    brandDomain: string;
    currency: string;
    startSeasonCta: string;
    startSeasonShort: string;
    flatSeasonFee: string;
    accessibilityCta: string;
    accessibilitySettings: string;
    canadianCloudBadge: string;
  };
  nav: {
    comparison: string;
    dataSovereignty: string;
    accessibility: string;
    mission: string;
    customerSuccess: string;
    automation: string;
    pricing: string;
  };
  topBanner: {
    intellectualActive: string;
    switchBack: string;
  };
  hero: {
    kicker: {
      domain: string;
      infrastructure: string;
      certification: string;
    };
    headline: string;
    subheadlineStandard: string;
    subheadlinePlain: string;
    ctaPrimary: string;
    ctaSecondary: string;
    anchorSovereignty: string;
    anchorFines: string;
    anchorFinesSubtext: string;
    anchorFee: string;
    preview: {
      route: string;
      cloudLocation: string;
      marketTitle: string;
      approvedVendors: string;
      stallsAllocated: string;
      complianceScore: string;
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      liveSync: string;
      fullSeasonPaid: string;
    };
  };
  comparison: {
    title: string;
    subtitleStandard: string;
    subtitlePlain: string;
    thFeature: string;
    thOther: string;
    thLmh: string;
    expandDetails: string;
    hideDetails: string;
    features: Array<{
      feature: string;
      other: string;
      localMarketHub: string;
      explanation: string;
      plainLanguage: string;
    }>;
  };
  sovereignty: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    plainIntro: string;
    plainBody: string;
    tabExplore: string;
    tabs: {
      sovereignty: {
        label: string;
        desc: string;
        badge: string;
        heading: string;
        body1: string;
        body2: string;
        points: string[];
      };
      cloudact: {
        label: string;
        desc: string;
        badge: string;
        heading: string;
        body1: string;
        body2: string;
        points: string[];
      };
      laws: {
        label: string;
        desc: string;
        badge: string;
        heading: string;
        body1: string;
        body2: string;
        points: string[];
      };
    };
    comparisonBox: {
      title: string;
      colOther: string;
      colLmh: string;
      row1Title: string;
      row1Other: string;
      row1Lmh: string;
      row2Title: string;
      row2Other: string;
      row2Lmh: string;
      row3Title: string;
      row3Other: string;
      row3Lmh: string;
    };
  };
  accessibility: {
    title: string;
    calloutTitle: string;
    calloutDesc: string;
    ontarioTitle: string;
    ontarioFine: string;
    ontarioDesc: string;
    bcTitle: string;
    bcFine: string;
    bcDesc: string;
    legislationLabel: string;
    upcomingDeadlineLabel: string;
    humanRightsLabel: string;
    corporateLiabilityLabel: string;
    provincesList: Array<{
      id: string;
      name: string;
      legislation: string;
      upcomingDeadline?: string;
      humanRightsProtection?: string;
      corporateLiability: string;
    }>;
    standardTarget: string;
    simulatorTitle: string;
    simulatorDesc: string;
    sliderLabel: string;
    estimatedLiability: string;
    lmhRiskLabel: string;
    lmhRiskValue: string;
    configureBtn: string;
    demoTitle: string;
    demoDesc: string;
    activeModeLabel: string;
    standardModeLabel: string;
    standardLegalSampleTitle: string;
    standardLegalSampleText: string;
    plainEnglishSampleTitle: string;
    plainEnglishSampleText: string;
    toggleIntellectualBtn: string;
  };
  mission: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    plainSummaryTitle: string;
    plainSummary: string;
    badges: {
      neurodiversity: string;
      supplyChain: string;
      sovereignty: string;
    };
  };
  customerSuccess: {
    title: string;
    narrative: string;
    narrativePlain: string;
    pillars: Array<{
      title: string;
      desc: string;
    }>;
    interactiveTitle: string;
    interactiveSubtitle: string;
    tabChaos: string;
    tabStreamlined: string;
    chaosTitle: string;
    chaosItems: string[];
    streamlinedTitle: string;
    streamlinedItems: string[];
    glossaryTitle: string;
    glossaryItems: Array<{
      term: string;
      definition: string;
    }>;
  };
  automation: {
    title: string;
    subtitleStandard: string;
    subtitlePlain: string;
    economicAdvantage: {
      heading: string;
      paragraph: string;
      bullets: string[];
    };
    points: Array<{
      title: string;
      desc: string;
    }>;
    generatorKicker: string;
    generatorTitle: string;
    marketTypes: {
      farmers: string;
      artisan: string;
      holiday: string;
    };
    caseStudyFarmers: {
      title: string;
      executiveSummary: string;
      reclaimedHours: string;
      regulatoryFines: string;
      vendorRetention: string;
      annualSavings: string;
    };
    caseStudyArtisan: {
      title: string;
      executiveSummary: string;
      reclaimedHours: string;
      regulatoryFines: string;
      vendorRetention: string;
      annualSavings: string;
    };
    caseStudyHoliday: {
      title: string;
      executiveSummary: string;
      reclaimedHours: string;
      regulatoryFines: string;
      vendorRetention: string;
      annualSavings: string;
    };
    recalculateBtn: string;
    recalculating: string;
  };
  pricing: {
    title: string;
    bannerTitle: string;
    bannerDesc: string;
    whyMattersTitle: string;
    whyMattersDesc: string;
    packageBadge: string;
    packageDuration: string;
    priceAmount: string;
    priceCad: string;
    packageIncludesTitle: string;
    features: string[];
    calcTitle: string;
    calcSubtitle: string;
    vendorSlider: string;
    weeksSlider: string;
    feeSlider: string;
    stallVolumeLabel: string;
    competitorCutLabel: string;
    lmhFlatLabel: string;
    savingsNetLabel: string;
    savingsRetainedDesc: string;
    ctaCard: string;
    partnershipsTitle: string;
    partnershipsDesc: string;
    partnershipsCta: string;
  };
  modal: {
    titleForm: string;
    titleSuccess: string;
    kicker: string;
    heading: string;
    subtitle: string;
    marketNameLabel: string;
    marketNamePlaceholder: string;
    provinceLabel: string;
    directorLabel: string;
    directorPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    vendorsLabel: string;
    launchLabel: string;
    totalLabel: string;
    flatTotal: string;
    securityNote: string;
    submitBtn: string;
    submittingBtn: string;
    successWelcome: string;
    successMessage: string;
    invoiceRefLabel: string;
    jurisdictionLabel: string;
    supportLeadLabel: string;
    supportTeamName: string;
    doneBtn: string;
    provinces: {
      ontario: string;
      bc: string;
      alberta: string;
      quebec: string;
      novaScotia: string;
      manitoba: string;
      saskatchewan: string;
      newBrunswick: string;
      newfoundland: string;
      pei: string;
      territories: string;
    };
    vendorOptions: {
      opt1: string;
      opt2: string;
      opt3: string;
      opt4: string;
    };
  };
  drawer: {
    title: string;
    desc: string;
    intellectualTitle: string;
    intellectualDesc: string;
    highContrastTitle: string;
    highContrastDesc: string;
    largeTextTitle: string;
    largeTextDesc: string;
    openDyslexicTitle: string;
    openDyslexicDesc: string;
    protectionsActiveTitle: string;
    checkItems: string[];
    applyBtn: string;
  };
  footer: {
    mission: string;
    hostingNote: string;
    privacyNote: string;
    architectureTitle: string;
    legalSupportTitle: string;
    contactUs: string;
    wcagLink: string;
    startSeasonLink: string;
    officialDomain: string;
    rightsReserved: string;
    badgePipeda: string;
    badgeAoda: string;
    badgeMadeInCanada: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    common: {
      brandName: 'Local Market Hub',
      brandDomain: 'localmarkethub.ca',
      currency: 'CAD',
      startSeasonCta: 'Start Your Full Season ($500)',
      startSeasonShort: 'Start Season ($500)',
      flatSeasonFee: '$500 CAD',
      accessibilityCta: 'Accessibility',
      accessibilitySettings: 'Accessibility Settings (WCAG 2.2)',
      canadianCloudBadge: 'Canadian Cloud Node (Toronto / Montreal)',
    },
    nav: {
      comparison: 'Comparison',
      dataSovereignty: 'Data Sovereignty',
      accessibility: 'Accessibility',
      mission: 'Our Mission',
      customerSuccess: 'Customer Success',
      automation: 'Automation',
      pricing: 'Pricing',
    },
    topBanner: {
      intellectualActive: 'Intellectual Accessibility Active · Complex concepts translated into plain language',
      switchBack: 'Switch back to standard',
    },
    hero: {
      kicker: {
        domain: 'localmarkethub.ca',
        infrastructure: 'Canadian Market Infrastructure',
        certification: 'WCAG 2.2 AA Certified',
      },
      headline: 'Local Market Hub: Software for Market Operations',
      subheadlineStandard: 'Automate administration and improve vendor onboarding.',
      subheadlinePlain:
        'We handle your market paperwork, vendor registrations, and booth schedules in one simple Canadian tool so you run smoother markets with zero legal headaches.',
      ctaPrimary: 'Start Your Full Season ($500)',
      ctaSecondary: 'Review Value Comparison',
      anchorSovereignty: 'Strict Canadian Data Sovereignty (No US CLOUD Act)',
      anchorFines: 'Protection Against Maximum $250,000 Accessibility Fines',
      anchorFinesSubtext:
        'Ontario fines compound at up to $100,000 per day rather than stopping at a flat $250,000. See your province’s specific liability in our interactive tabs.',
      anchorFee: '$500 Flat Fee · No Percentage Cut',
      preview: {
        route: 'app.localmarkethub.ca / operations-dashboard',
        cloudLocation: 'Canadian Cloud Node (Toronto / Montreal)',
        marketTitle: 'Stratford Farmers Market · Saturday Operations',
        approvedVendors: 'Approved Vendors',
        stallsAllocated: 'Stalls Allocated',
        complianceScore: 'WCAG Compliance',
        step1Title: '1. Digital Intake',
        step1Desc:
          'Replaces messy PDF email chains and 12-page forms. Direct 4-step digital onboarding tailored to Canadian artisan & farm standards.',
        step2Title: '2. Electrical Allocation',
        step2Desc: 'Prevents blown breakers with automated hydro load management (15A/30A per booth).',
        step3Title: '3. Sovereign Storage',
        step3Desc: 'Encrypted under PIPEDA & Quebec Law 25. Never accessible under foreign warrants.',
        liveSync: 'Live sync active',
        fullSeasonPaid: 'Full Season Paid ✓',
      },
    },
    comparison: {
      title: 'Price and Value Comparison',
      subtitleStandard:
        'A transparent review of operational models, legal liabilities, data sovereignty, and seasonal investment.',
      subtitlePlain:
        'See side-by-side why Canadian market managers choose Local Market Hub over fragmented US platforms.',
      thFeature: 'Feature',
      thOther: 'Other Market Platforms (Canada and US)',
      thLmh: 'Local Market Hub',
      expandDetails: 'View detailed analysis & legal review',
      hideDetails: 'Hide detailed analysis',
      features: [
        {
          feature: 'Pricing Model',
          other: 'Hidden fees or transaction cuts',
          localMarketHub: '$500 flat fee per full season',
          explanation:
            'Competitor platforms shave 2.5% to 5% off every stall registration or token sale, forcing market directors to absorb hundreds or thousands in variable overhead. Local Market Hub charges an unvarying $500 per full season with zero transaction cuts or surprise gate fees.',
          plainLanguage:
            'Other apps take a percentage of every vendor payment you collect. We charge one clear price of $500 for the whole season. No surprise bills ever.',
        },
        {
          feature: 'Onboarding',
          other: 'Fragmented setups',
          localMarketHub: 'Comprehensive Customer Success Roadmap',
          explanation:
            'Conventional systems leave organizers stranded with disconnected Google Forms, spreadsheet paste-ups, and unguided vendor self-service. We provide a structured roadmap mirroring the vendor journey from first awareness to season wrap-up.',
          plainLanguage:
            'Other apps leave you to stitch together spreadsheets and forms alone. We walk with you and your vendors step-by-step so no one gets lost.',
        },
        {
          feature: 'Data Location',
          other: 'United States (Subject to US CLOUD Act)',
          localMarketHub: 'Canada (Strict Canadian Data Sovereignty)',
          explanation:
            'US-headquartered platforms store vendor tax IDs, financial records, and personal customer data on US soil, granting foreign authorities warrantless access under the Clarifying Lawful Overseas Use of Data (CLOUD) Act. Local Market Hub stores all data within Canada under PIPEDA jurisdiction.',
          plainLanguage:
            'US software allows American agencies to inspect your data under US laws. We keep all your data on servers located right here in Canada under Canadian privacy laws.',
        },
        {
          feature: 'Accessibility',
          other: 'Basic or non-compliant',
          localMarketHub: 'WCAG 2.2 Level AA / 20++ standards',
          explanation:
            'Legacy market software leaves organizers exposed to statutory fines under the Accessibility for Ontarians with Disabilities Act (AODA up to $100k/day) and the Accessible British Columbia Act (up to $250k). Local Market Hub provides certified WCAG 2.2 Level AA compliance and 20++ standards.',
          plainLanguage:
            'Ontario and BC penalize non-accessible websites with heavy fines. Our software is engineered so everyone can use it easily, keeping you fully compliant with provincial law.',
        },
      ],
    },
    sovereignty: {
      title: 'Data Sovereignty and Canadian Protection',
      p1: 'Your market data remains in Canada. Many software platforms use United States parent companies.',
      p2: 'Those platforms operate under the United States CLOUD Act. This act permits foreign government access to your data.',
      p3: 'Local Market Hub operates under Canadian jurisdiction. Canadian privacy laws govern your information strictly.',
      plainIntro: 'Plain language translation:',
      plainBody:
        'When you use American apps, the US government has the legal power to review your records without a Canadian warrant. With Local Market Hub, everything stays locked inside Canada under Canadian privacy laws.',
      tabExplore: 'Explore Sovereignty Dimensions',
      tabs: {
        sovereignty: {
          label: 'Data Sovereignty Guarantee',
          desc: '100% Canadian data residency in Toronto and Montreal facilities.',
          badge: 'Domestic Jurisdiction',
          heading: 'Canadian Data Residency & Complete Sovereignty',
          body1:
            'All database clusters, file storage vaults, and backup snapshots reside physically within Canadian borders. Your financial ledgers and vendor files never transit through foreign routing nodes.',
          body2:
            'By storing exclusively in Canada, your market avoids the jurisdictional cross-border transfer requirements and stays fully compliant with local municipal records management guidelines.',
          points: [
            'Zero data transiting foreign fiber routes',
            'Compliant with municipal open-record bylaws',
            'Encrypted at rest with Canadian-managed keys (AES-256)',
          ],
        },
        cloudact: {
          label: 'The US CLOUD Act Threat',
          desc: 'How foreign warrants expose your farmers and vendors to surveillance.',
          badge: 'Foreign Jurisdiction Risk',
          heading: 'Why US-Owned Platforms Put Canadian Markets at Risk',
          body1:
            'Passed in 2018, the US CLOUD Act (18 U.S.C. § 2713) compels any company subject to US jurisdiction to provide data stored anywhere in the world upon receipt of an American warrant or subpoena.',
          body2:
            'Even if a US SaaS platform claims to have a "Canadian server", their US parent entity can be forced under federal court order to hand over your vendor tax records, financial statements, and personal identity credentials without notifying you.',
          points: [
            'No Canadian judge or MLAT procedure needed by US agencies',
            'Applies to American parent companies and subsidiaries',
            'Subpoenas often carry strict gag orders prohibiting disclosure',
          ],
        },
        laws: {
          label: 'Canadian & Provincial Law Shield',
          desc: 'Governed strictly by PIPEDA, Quebec Law 25, and FOIPPA.',
          badge: 'Legal Protection Shield',
          heading: 'Strict Alignment with Canadian Privacy Statutes',
          body1:
            'Local Market Hub operates under federal PIPEDA standards and complies with modern provincial privacy architectures, including Quebec’s Law 25 and British Columbia’s Freedom of Information and Protection of Privacy Act (FOIPPA).',
          body2:
            'We enforce explicit vendor consent, localized cryptographic key generation, strict role-based access controls, and transparent retention lifecycles required by Canadian administrative law.',
          points: [
            'Federal PIPEDA and provincial private sector privacy alignment',
            'Quebec Law 25 privacy governance compliance built-in',
            'Right to erasure and structured data portability',
          ],
        },
      },
      comparisonBox: {
        title: 'Jurisdiction & Cross-Border Comparison Matrix',
        colOther: 'US Software / Foreign Platforms',
        colLmh: 'Local Market Hub (Canadian)',
        row1Title: 'Primary Server Location',
        row1Other: 'US East / West (or US routed multi-region)',
        row1Lmh: 'Toronto & Montreal, Canada Only',
        row2Title: 'Foreign Subpoena Protection',
        row2Other: 'Vulnerable to US CLOUD Act warrantless access',
        row2Lmh: 'Protected by Canadian Court Warrants Only',
        row3Title: 'Vendor Data Resale & Profiling',
        row3Other: 'Commercial monetization of vendor lists',
        row3Lmh: 'Zero data sales or commercial monetization',
      },
    },
    accessibility: {
      title: 'Protection Against Government Accessibility Fines',
      calloutTitle: 'Digital accessibility is a legal requirement.',
      calloutDesc: 'Government regulations penalize non-compliance with severe financial fines.',
      ontarioTitle: 'Ontario (AODA)',
      ontarioFine: 'Up to $100,000 / day',
      ontarioDesc:
        'Under Regulation 191/11, organizations face daily statutory penalties for failure to conform with WCAG 2.0/2.2 AA accessibility requirements.',
      bcTitle: 'British Columbia (Accessible BC Act)',
      bcFine: 'Up to $250,000 CAD',
      bcDesc:
        'Organizations face maximum fines of up to $250,000 CAD for failing to meet accessibility requirements under the Accessible BC Act.',
      legislationLabel: 'Legislation:',
      upcomingDeadlineLabel: 'Upcoming Deadline:',
      humanRightsLabel: 'Human Rights Protection:',
      corporateLiabilityLabel: 'Corporate Liability:',
      provincesList: [
        {
          id: 'ontario',
          name: 'Ontario',
          legislation: 'Accessibility for Ontarians with Disabilities Act (AODA).',
          upcomingDeadline:
            'Private businesses and non-profit organizations with 20 or more employees must submit a compliance report by December 31, 2026.',
          corporateLiability:
            'Corporations face maximum fines of up to $100,000 CAD per day for major offenses. Missing the December 2026 deadline triggers immediate compliance audits. It exposes the organization directly to administrative monetary penalties.',
        },
        {
          id: 'manitoba',
          name: 'Manitoba',
          legislation: 'The Accessibility for Manitobans Act (AMA).',
          corporateLiability: 'Corporations face maximum fines of up to $250,000 for highly serious non-compliance.',
        },
        {
          id: 'nova_scotia',
          name: 'Nova Scotia',
          legislation: 'Accessibility Act.',
          corporateLiability: 'Organizations can face maximum fines reaching $250,000 for severe contraventions.',
        },
        {
          id: 'bc',
          name: 'British Columbia',
          legislation: 'Accessible British Columbia Act (ABCA).',
          corporateLiability: 'Fines can reach up to $250,000 for failing to meet statutory requirements.',
        },
        {
          id: 'saskatchewan',
          name: 'Saskatchewan',
          legislation: 'The Accessible Saskatchewan Act.',
          corporateLiability: 'The act establishes a maximum penalty of $250,000 for corporate non-compliance.',
        },
        {
          id: 'newfoundland',
          name: 'Newfoundland and Labrador',
          legislation: 'Accessibility Act.',
          corporateLiability: 'The act provides for maximum fines of up to $250,000 for severe statutory violations.',
        },
        {
          id: 'alberta',
          name: 'Alberta',
          legislation: 'No formal comprehensive accessibility legislation.',
          humanRightsProtection: 'Disability rights are protected under provincial human rights codes.',
          corporateLiability:
            'Businesses possess a strict duty to accommodate. Failure to provide accessible digital services can result in human rights complaints, public hearings, and compensatory damages.',
        },
        {
          id: 'quebec',
          name: 'Quebec',
          legislation: 'No formal comprehensive accessibility legislation.',
          humanRightsProtection: 'Disability rights are protected under provincial human rights codes.',
          corporateLiability:
            'Businesses possess a strict duty to accommodate. Failure to provide accessible digital services can result in human rights complaints, public hearings, and compensatory damages.',
        },
        {
          id: 'new_brunswick',
          name: 'New Brunswick',
          legislation: 'No formal comprehensive accessibility legislation.',
          humanRightsProtection: 'Disability rights are protected under provincial human rights codes.',
          corporateLiability:
            'Businesses possess a strict duty to accommodate. Failure to provide accessible digital services can result in human rights complaints, public hearings, and compensatory damages.',
        },
        {
          id: 'pei',
          name: 'Prince Edward Island',
          legislation: 'No formal comprehensive accessibility legislation.',
          humanRightsProtection: 'Disability rights are protected under provincial human rights codes.',
          corporateLiability:
            'Businesses possess a strict duty to accommodate. Failure to provide accessible digital services can result in human rights complaints, public hearings, and compensatory damages.',
        },
      ],
      standardTarget: 'We aim for 20++ accessibility standards to ensure universal access to digital assets.',
      simulatorTitle: 'Statutory Liability Simulator',
      simulatorDesc: 'Calculate potential regulatory exposure for non-compliant public market software.',
      sliderLabel: 'Days of Non-Compliance:',
      estimatedLiability: 'Potential Maximum Liability Exposure:',
      lmhRiskLabel: 'Local Market Hub Risk:',
      lmhRiskValue: '$0 CAD (WCAG 2.2 AA Certified)',
      configureBtn: 'Configure WCAG 2.2 Preferences',
      demoTitle: 'Intellectual Accessibility Translation Demo',
      demoDesc:
        'Toggle to experience how our interface translates dense legal and municipal market guidelines into straightforward action steps for all cognitive styles.',
      activeModeLabel: 'Active (Clear & Plain)',
      standardModeLabel: 'Standard Legal Text',
      standardLegalSampleTitle: 'Standard Municipal Clause (Dense & Bureaucratic):',
      standardLegalSampleText:
        '"All participating commercial concessionaires must submit indemnification schedules 14 days prior to seasonal occupancy pursuant to municipal public safety ordinance 42-B."',
      plainEnglishSampleTitle: 'Plain English Translation (Intellectual Accessibility Mode):',
      plainEnglishSampleText:
        '"Send us your insurance paper at least 2 weeks before opening day so you can set up your stall safely."',
      toggleIntellectualBtn: 'Toggle Intellectual Accessibility',
    },
    mission: {
      kicker: 'Our Founding Conviction',
      title: 'Our Mission: Building a Neuro-Inclusive Supply Chain',
      p1: 'My grandfather was a farmer. He struggled with reading and writing because of dyslexia. This neurological trait was passed down to my father and me. I have experienced systemic discrimination directly. This discrimination impacts the majority of the neurodivergent workforce.',
      p2: 'Complex municipal permitting forms cause administrative delays. These text-heavy forms act as a structural barrier. They actively exclude non-traditional producers from the local economy.',
      p3: 'Local Market Hub dismantles this barrier. We automate compliance with artificial intelligence. We enforce strict digital accessibility standards. This eliminates the friction of legacy paperwork. We ensure every farmer, artisan, and creator has equal access to commercial opportunities. This strengthens food independence in Canada. It builds a sustainable and inclusive supply chain.',
      plainSummaryTitle: 'Plain Language Summary',
      plainSummary:
        'Reading challenges like dyslexia shouldn’t prevent hardworking farmers and artisans from selling their goods. We use automated tools to replace dense paper permits with clear, accessible steps so anyone can participate.',
      badges: {
        neurodiversity: 'Neurodiversity & Accessibility First',
        supplyChain: 'Inclusive Local Supply Chain',
        sovereignty: 'Canadian Food Independence',
      },
    },
    customerSuccess: {
      title: 'Customer Success and Education',
      narrative:
        'We maintain a dynamic digital presence to build authority and trust. We filter all strategic decisions through the lens of the customer experience. Our process mirrors the consumer path from initial awareness to long-term success.',
      narrativePlain:
        "In plain words: We don't just hand you software and disappear. We study where vendors get stuck, fix the roadblocks, and provide clear guides so your market runs smoothly all year.",
      pillars: [
        {
          title: 'We address known vendor frustrations.',
          desc: 'Eliminating lost paper applications, unclear electricity rules, forgotten insurance renewals, and unpredictable payment schedules.',
        },
        {
          title: 'We conduct regular usability audits.',
          desc: 'Our design researchers frequently sit with first-time market farmers and senior craft artisans to make sure every button is obvious.',
        },
        {
          title: 'We streamline communications.',
          desc: 'Automated SMS weather advisories, clear booth assignment maps, and plain-language reminders so market mornings stay peaceful.',
        },
        {
          title: 'We improve vendor onboarding.',
          desc: 'A gentle 4-step onboarding journey that vendors complete in under 5 minutes from their smartphone in the field.',
        },
        {
          title: 'We create video tutorials.',
          desc: 'Short, caption-enabled 60-second video walkthroughs answering common organizer and vendor technical questions.',
        },
      ],
      interactiveTitle: 'Before & After Onboarding Experience Comparison',
      interactiveSubtitle:
        'Visual proof contrasting chaotic manual spreadsheets against one-click automated market management.',
      tabChaos: 'Fragmented Manual Setup (Chaos)',
      tabStreamlined: 'Local Market Hub (Streamlined)',
      chaosTitle: 'The Fragmented Status Quo (Spreadsheets & PDFs)',
      chaosItems: [
        'Confusing legal disclaimers, unformatted booth questions, and awkward PDF uploads that cause busy farmers to abandon registration.',
        'Organizers spend 15+ hours each week sorting checks, verifying expired insurance certificates, and answering repetitive email questions.',
        'High vendor dropout rate during pre-season registration due to inaccessible interfaces and technical confusion.',
      ],
      streamlinedTitle: 'Local Market Hub Guided Success Workflow',
      streamlinedItems: [
        'We observe where vendors hesitate, evaluate field clarity, and refine instructions into clear, plain language.',
        'Immediate instant check on certificates of insurance with automatic expiry alerts directly to the vendor.',
        'Over 98% first-time completion rate with zero software installation required on iOS, Android, or desktop.',
      ],
      glossaryTitle: 'Market Operations Standardization Glossary',
      glossaryItems: [
        {
          term: 'Primary Intake',
          definition: 'The initial 2-minute digital registration where vendor legal qualifications are verified.',
        },
        {
          term: 'Hydro Allocation',
          definition: 'Standardized electrical rating allocation (15A/30A) to prevent breaker trips.',
        },
        {
          term: 'Pathway Clearance',
          definition: 'AODA/WCAG physical pathway compliance ensuring 36-inch continuous access.',
        },
        {
          term: 'Roster Finalization',
          definition: 'The automated lock of Saturday stall assignments and map generation.',
        },
      ],
    },
    automation: {
      title: 'The Economic Advantage of Accessibility',
      subtitleStandard: 'We integrate smart automated workflows to optimize your operations.',
      subtitlePlain:
        'We use smart automated tools to handle repetitive market tasks and optimize your operations.',
      economicAdvantage: {
        heading: 'The Economic Advantage of Accessibility',
        paragraph:
          'Digital barriers exclude talented vendors. Approximately 27% of Canadians aged 15 and older live with a disability. This represents roughly 8 million individuals. Businesses lose approximately $16.8 billion annually because of inaccessible web interfaces. Many neurodivergent individuals pursue entrepreneurship. Complex application forms create structural barriers for these business owners. Local Market Hub removes these barriers. Our accessible software provides a direct economic advantage.',
        bullets: [
          'You recruit from a massive, untapped vendor pool.',
          'You increase your total number of market applicants.',
          'You capture revenue lost to administrative friction.',
          'You attract private sponsorships by providing measurable proof of digital inclusion.',
        ],
      },
      points: [
        {
          title: 'We enhance user experience through intelligent automation.',
          desc: 'Automated document validation, instantaneous permit verification, and smart booth matching eliminate repetitive manual data entry for organizers and vendors.',
        },
        {
          title: 'We use smart communication tools to refine brand messaging and narrative flow.',
          desc: 'Assisting market teams in communicating rules, seasonal schedule shifts, and vendor profiles with warmth, accessibility, and narrative coherence.',
        },
        {
          title: 'We use data to generate compelling case studies.',
          desc: 'Synthesizing seasonal vendor turnover, local economic velocity, and customer footfall into professional municipal presentations and annual community reports.',
        },
      ],
      generatorKicker: 'Operational Intelligence · Live Data Synthesis',
      generatorTitle: 'Automated Operational Case Study Generator',
      marketTypes: {
        farmers: 'Agricultural Farmers Market',
        artisan: 'Artisan & Craft Market',
        holiday: 'Winter & Holiday Market',
      },
      caseStudyFarmers: {
        title: 'Case Study: Eliminating 18 Weekly Admin Hours While Maintaining Zero Regulatory Fines',
        executiveSummary:
          'Stratford District Farmers Market transformed a manual paper application workflow involving 48 vendors into an automated digital system. By adopting Local Market Hub, the market eliminated check reconciliations, maintained strict compliance with the Ontario AODA standard, and protected vendor records within Canada.',
        reclaimedHours: '18.4 hrs/week',
        regulatoryFines: '$0 CAD',
        vendorRetention: '96.2%',
        annualSavings: '$6,850 CAD',
      },
      caseStudyArtisan: {
        title: 'Case Study: Automating 65 Artisan Approvals & Eliminating Municipal Parking Friction',
        executiveSummary:
          'Vancouver Island Artisans Guild scaled from 40 to 65 seasonal makers without adding administrative overhead. Automated hydro requests and jury scoring reduced director burnout, while compliant plain-language guides boosted senior artisan onboarding to 100%.',
        reclaimedHours: '14.2 hrs/week',
        regulatoryFines: '$0 CAD',
        vendorRetention: '98.5%',
        annualSavings: '$5,240 CAD',
      },
      caseStudyHoliday: {
        title: 'Case Study: Rapid Winter Pop-Up Setup With Zero Power Trips & Instant Map Generation',
        executiveSummary:
          'Calgary Holiday Collective launched a 3-week pop-up market with 90 high-turnover rotating stalls. The platform automatically matched electric food heaters to breaker capacities, avoiding power failures and saving organizers 24 hours of emergency coordination.',
        reclaimedHours: '22.0 hrs/week',
        regulatoryFines: '$0 CAD',
        vendorRetention: '94.0%',
        annualSavings: '$8,120 CAD',
      },
      recalculateBtn: 'Regenerate Case Study',
      recalculating: 'Synthesizing Operations Data...',
    },
    pricing: {
      title: 'Value-Based Pricing',
      bannerTitle: 'We provide a clear pricing structure. The cost is $500 for a full season.',
      bannerDesc:
        'We do not offer confusing tiers or hidden take-rates. We provide a predictable, dedicated software operations suite for your entire season.',
      whyMattersTitle: 'Why this matters to your market:',
      whyMattersDesc:
        '"Free" software usually sells your vendor lists or skims 4% to 8% off your stall payments. By charging one fair $500 seasonal price, we provide continuous platform stability and stay 100% focused on keeping your market running smoothly.',
      packageBadge: 'Full Season Access',
      packageDuration: 'Up to 12 Consecutive Months',
      priceAmount: '$500',
      priceCad: 'CAD / Full Season',
      packageIncludesTitle: 'Everything Included with Season License:',
      features: [
        'Unlimited seasonal and casual vendor registrations',
        'Certified WCAG 2.2 Level AA & 20++ accessible interface',
        'Strict Canadian Data Sovereignty (Toronto & Montreal nodes)',
        'Full Customer Success Roadmap & onboarding video guides',
        'Automated hydro/electrical & booth space allocation',
        'Direct municipal presentation & annual impact reports',
        'Zero percentage fees, transaction cuts, or gate skimming',
      ],
      calcTitle: 'Interactive Fee Loss Calculator',
      calcSubtitle:
        'Platforms charging 3%–5% transaction or ticket fees siphon capital away from your local vendors and farmers. See what you retain with Local Market Hub:',
      vendorSlider: 'Active Vendors Per Market Day:',
      weeksSlider: 'Market Season Weeks:',
      feeSlider: 'Average Stall Fee Per Week ($ CAD):',
      stallVolumeLabel: 'Total Season Stall Volume:',
      competitorCutLabel: 'Competitor Platform Siphon (4% Avg Cut):',
      lmhFlatLabel: 'Local Market Hub Flat Season Fee:',
      savingsNetLabel: 'Net Capital Kept by Your Market:',
      savingsRetainedDesc:
        'Money that stays in your local agricultural community instead of flowing to US payment processors.',
      ctaCard: 'Start Your Full Season ($500)',
      partnershipsTitle: 'Community Accessibility Partnerships',
      partnershipsDesc:
        'We recognize the strict financial constraints of community organizations. Contact us to discuss strategic partnerships. We offer limited operational subsidies for qualifying non-profit markets experiencing funding deficits.',
      partnershipsCta: 'Contact us to discuss strategic partnerships',
    },
    modal: {
      titleForm: 'Start Your Full Season · $500 Flat',
      titleSuccess: 'Season Provisioning Confirmed',
      kicker: 'Canadian Sovereign Infrastructure',
      heading: 'Register Your Market for the Upcoming Season',
      subtitle:
        'One-time flat fee of $500 CAD. Includes full WCAG 2.2 AA certification, customer success roadmap, and zero transaction cuts.',
      marketNameLabel: 'Market / Organization Name *',
      marketNamePlaceholder: 'e.g. Stratford Farmers Market',
      provinceLabel: 'Province / Territory *',
      directorLabel: 'Director / Coordinator Name *',
      directorPlaceholder: 'e.g. Sarah Jenkins',
      emailLabel: 'Official Email Address *',
      emailPlaceholder: 'manager@localmarkethub.ca',
      vendorsLabel: 'Approx. Seasonal Vendors',
      launchLabel: 'Target Season Launch Date',
      totalLabel: 'Seasonal License Total:',
      flatTotal: '$500.00 CAD (Flat)',
      securityNote: 'Encrypted on Canadian Servers · PIPEDA Compliant',
      submitBtn: 'Confirm Season ($500)',
      submittingBtn: 'Provisioning...',
      successWelcome: 'Welcome to Local Market Hub!',
      successMessage: 'Your season workspace for {name} has been initialized under Canadian jurisdiction.',
      invoiceRefLabel: 'Invoice Reference:',
      jurisdictionLabel: 'Jurisdiction Compliance:',
      supportLeadLabel: 'Customer Success Lead:',
      supportTeamName: 'Canadian Market Support Team',
      doneBtn: 'Done & Return to Overview',
      provinces: {
        ontario: 'Ontario (AODA Safeguard)',
        bc: 'British Columbia (Accessible BC Act)',
        alberta: 'Alberta',
        quebec: 'Quebec (Law 25 Compliant)',
        novaScotia: 'Nova Scotia',
        manitoba: 'Manitoba',
        saskatchewan: 'Saskatchewan',
        newBrunswick: 'New Brunswick',
        newfoundland: 'Newfoundland & Labrador',
        pei: 'Prince Edward Island',
        territories: 'Yukon / NWT / Nunavut',
      },
      vendorOptions: {
        opt1: '10 - 25 vendors',
        opt2: '25 - 50 vendors',
        opt3: '50 - 100 vendors',
        opt4: '100+ vendors',
      },
    },
    drawer: {
      title: 'Accessibility & WCAG 2.2 Controls',
      desc: 'Local Market Hub targets WCAG 2.2 Level AA and 20++ universal accessibility standards. Test how our platform adapts in real-time.',
      intellectualTitle: 'Intellectual Accessibility',
      intellectualDesc:
        'Communicates complex administrative ideas in plain, crystal-clear operational terms without losing core value.',
      highContrastTitle: 'High Contrast Boost',
      highContrastDesc:
        'Increases contrast ratios to exceed the 4.5:1 / 7:1 WCAG 2.2 AA benchmarks for low-vision users.',
      largeTextTitle: 'Enlarged Typography (+12%)',
      largeTextDesc: 'Increases base font size while preserving strict layout boundaries and vertical rhythm.',
      openDyslexicTitle: 'OpenDyslexic Font',
      openDyslexicDesc:
        'Applies the OpenDyslexic typeface across the interface. The weighted letter design prevents character inversion.',
      protectionsActiveTitle: 'Compliance Protections Active',
      checkItems: [
        'Ontario AODA (Regulation 191/11 compliant)',
        'British Columbia Accessible BC Act certified',
        'WCAG 2.2 AA target with 20++ standards',
        'Screen-reader semantics & full keyboard navigation',
      ],
      applyBtn: 'Apply & Return to Page',
    },
    footer: {
      mission:
        'Software for Market Operations. Automate administration and improve vendor onboarding for Canadian farmers and artisan markets.',
      hostingNote: 'Hosted exclusively in Canadian data centers (Toronto & Montreal)',
      privacyNote: 'Strict Canadian Data Sovereignty · PIPEDA · WCAG 2.2 AA Certified',
      architectureTitle: 'Platform Architecture',
      legalSupportTitle: 'Legal & Support',
      contactUs: 'Contact Us',
      wcagLink: 'WCAG 2.2 AA Settings & Modes',
      startSeasonLink: 'Start Your Full Season ($500) →',
      officialDomain: 'Official domain:',
      rightsReserved: 'All rights reserved.',
      badgePipeda: 'PIPEDA Compliant',
      badgeAoda: 'AODA & BC Act Safeguarded',
      badgeMadeInCanada: 'Made in Canada',
    },
  },
  fr: {
    common: {
      brandName: 'Local Market Hub',
      brandDomain: 'localmarkethub.ca',
      currency: 'CAD',
      startSeasonCta: 'Démarrer votre saison (500 $)',
      startSeasonShort: 'Démarrer (500 $)',
      flatSeasonFee: '500 $ CAD',
      accessibilityCta: 'Accessibilité',
      accessibilitySettings: 'Paramètres d’accessibilité (WCAG 2.2)',
      canadianCloudBadge: 'Nœud infonuagique canadien (Toronto / Montréal)',
    },
    nav: {
      comparison: 'Comparatif',
      dataSovereignty: 'Souveraineté des données',
      accessibility: 'Accessibilité',
      mission: 'Notre mission',
      customerSuccess: 'Réussite client',
      automation: 'Automatisation',
      pricing: 'Tarification',
    },
    topBanner: {
      intellectualActive: 'Accessibilité intellectuelle active · Concepts complexes traduits en langage clair',
      switchBack: 'Revenir au mode standard',
    },
    hero: {
      kicker: {
        domain: 'localmarkethub.ca',
        infrastructure: 'Infrastructure de marché canadienne',
        certification: 'Certifié WCAG 2.2 AA',
      },
      headline: 'Local Market Hub : Logiciel pour la gestion des marchés',
      subheadlineStandard: 'Automatisez l’administration et facilitez l’accueil de vos exposants.',
      subheadlinePlain:
        'Nous prenons en charge vos formalités administratives, inscriptions d’exposants et attributions d’emplacements dans un outil canadien simple pour des marchés fluides et sans tracas juridiques.',
      ctaPrimary: 'Démarrer votre saison (500 $)',
      ctaSecondary: 'Consulter le comparatif',
      anchorSovereignty: 'Souveraineté stricte des données canadiennes (hors CLOUD Act américain)',
      anchorFines: 'Protection contre les amendes d’accessibilité maximales de 250 000 $',
      anchorFinesSubtext:
        'En Ontario, les amendes se cumulent jusqu’à 100 000 $ par jour au lieu d’un plafond fixe de 250 000 $. Consultez les règles de votre province dans notre tableau interactif.',
      anchorFee: 'Tarif fixe de 500 $ · Aucune commission sur vos ventes',
      preview: {
        route: 'app.localmarkethub.ca / tableau-de-bord',
        cloudLocation: 'Nœud infonuagique canadien (Toronto / Montréal)',
        marketTitle: 'Marché Fermier de Stratford · Opérations du samedi',
        approvedVendors: 'Exposants approuvés',
        stallsAllocated: 'Stands attribués',
        complianceScore: 'Conformité WCAG',
        step1Title: '1. Inscription numérique',
        step1Desc:
          'Remplace les chaînes de courriels PDF et les formulaires de 12 pages. Accueil numérique direct en 4 étapes adapté aux normes agricoles et artisanales canadiennes.',
        step2Title: '2. Attribution électrique',
        step2Desc: 'Prévient les disjonctions grâce à la gestion automatisée des charges (15 A / 30 A par emplacement).',
        step3Title: '3. Hébergement souverain',
        step3Desc: 'Chiffré selon la LPRPDE et la Loi 25 du Québec. Jamais soumis aux mandats étrangers.',
        liveSync: 'Synchronisation active',
        fullSeasonPaid: 'Saison complète payée ✓',
      },
    },
    comparison: {
      title: 'Comparaison des prix et de la valeur',
      subtitleStandard:
        'Un examen transparent des modèles d’exploitation, des responsabilités juridiques, de la souveraineté des données et de l’investissement saisonnier.',
      subtitlePlain:
        'Découvrez pourquoi les gestionnaires de marchés canadiens choisissent Local Market Hub plutôt que des plateformes américaines fragmentées.',
      thFeature: 'Caractéristique',
      thOther: 'Autres plateformes de marché (Canada et États-Unis)',
      thLmh: 'Local Market Hub',
      expandDetails: 'Voir l’analyse détaillée et juridique',
      hideDetails: 'Masquer l’analyse détaillée',
      features: [
        {
          feature: 'Modèle de tarification',
          other: 'Frais cachés ou prélèvements sur les transactions',
          localMarketHub: 'Tarif fixe de 500 $ par saison complète',
          explanation:
            'Les plateformes concurrentes prélèvent de 2,5 % à 5 % sur chaque inscription d’emplacement ou paiement, obligeant les gestionnaires à assumer des centaines ou milliers de dollars de coûts variables. Local Market Hub facture un montant invariable de 500 $ pour toute la saison, sans aucune commission ni frais imprévus.',
          plainLanguage:
            'Les autres applications prennent un pourcentage sur chaque paiement de vos exposants. Nous proposons un tarif unique de 500 $ pour l’ensemble de la saison. Aucune mauvaise surprise.',
        },
        {
          feature: 'Accueil des exposants (Onboarding)',
          other: 'Configurations fragmentées',
          localMarketHub: 'Plan complet de réussite client',
          explanation:
            'Les outils traditionnels laissent les organisateurs isolés avec des formulaires Google éparpillés et des copier-coller de tableurs. Nous fournissons une feuille de route guidée qui accompagne l’exposant de sa première candidature jusqu’au bilan de fin de saison.',
          plainLanguage:
            'Les autres outils vous laissent bricoler des tableurs et formulaires compliqués. Nous accompagnons vos équipes et vos exposants étape par étape pour que personne ne se perde.',
        },
        {
          feature: 'Localisation des données',
          other: 'États-Unis (Assujetti au CLOUD Act américain)',
          localMarketHub: 'Canada (Souveraineté stricte des données)',
          explanation:
            'Les plateformes basées aux États-Unis hébergent les numéros fiscaux, registres financiers et identifiants personnels de vos exposants sur le sol américain, permettant aux autorités étrangères d’y accéder sans mandat canadien en vertu du CLOUD Act. Local Market Hub héberge l’ensemble des données au Canada sous l’empire de la LPRPDE et des lois provinciales.',
          plainLanguage:
            'Les logiciels américains permettent aux agences des États-Unis de consulter vos données selon leurs lois. Nous conservons toutes vos données sur des serveurs situés ici même au Canada, sous le couvert de nos lois sur la vie privée.',
        },
        {
          feature: 'Accessibilité numérique',
          other: 'Basique ou non conforme',
          localMarketHub: 'Normes WCAG 2.2 Niveau AA et 20++ critères',
          explanation:
            'Les anciens logiciels exposent les organisateurs à des amendes légales sévères en vertu de la Loi sur l’accessibilité pour les personnes handicapées de l’Ontario (LAPHO, jusqu’à 100 000 $/jour) et de la Loi sur l’accessibilité de la Colombie-Britannique (jusqu’à 250 000 $). Local Market Hub garantit une conformité certifiée WCAG 2.2 AA.',
          plainLanguage:
            'L’Ontario et la C.-B. sanctionnent les sites web non accessibles par de lourdes amendes. Notre logiciel est conçu pour que tout le monde puisse s’en servir facilement, vous protégeant ainsi contre toute sanction.',
        },
      ],
    },
    sovereignty: {
      title: 'Souveraineté des données et protection canadienne',
      p1: 'Vos données de marché restent au Canada. Plusieurs logiciels appartiennent à des sociétés mères américaines.',
      p2: 'Ces plateformes sont assujetties au CLOUD Act américain. Cette loi autorise un gouvernement étranger à accéder à vos données.',
      p3: 'Local Market Hub opère sous juridiction canadienne. Les lois canadiennes sur la protection des renseignements personnels encadrent rigoureusement vos données.',
      plainIntro: 'Traduction en langage clair :',
      plainBody:
        'Quand vous utilisez des applications américaines, le gouvernement des États-Unis a le pouvoir légal de consulter vos dossiers sans mandat canadien. Avec Local Market Hub, tout reste protégé au Canada en vertu des lois canadiennes.',
      tabExplore: 'Explorer les dimensions de souveraineté',
      tabs: {
        sovereignty: {
          label: 'Garantie de souveraineté des données',
          desc: 'Résidence 100 % canadienne dans des installations à Toronto et Montréal.',
          badge: 'Juridiction nationale',
          heading: 'Résidence des données au Canada et souveraineté absolue',
          body1:
            'Tous les serveurs de base de données, coffres de fichiers et instantanés de sauvegarde résident physiquement à l’intérieur des frontières canadiennes. Vos registres financiers et dossiers d’exposants ne transitent jamais par des réseaux étrangers.',
          body2:
            'En conservant vos données exclusivement au Canada, votre marché respecte les règlements municipaux de gestion documentaire et évite les transferts transfrontaliers à risque.',
          points: [
            'Zéro transfert de données par des liaisons physiques étrangères',
            'Conforme aux règlements municipaux sur les registres publics',
            'Chiffrement au repos avec clés canadiennes dédiées (AES-256)',
          ],
        },
        cloudact: {
          label: 'Le risque lié au CLOUD Act américain',
          desc: 'Comment les mandats étrangers exposent vos producteurs locaux à la surveillance.',
          badge: 'Risque de juridiction étrangère',
          heading: 'Pourquoi les plateformes américaines mettent en danger les marchés canadiens',
          body1:
            'Adopté en 2018, le CLOUD Act américain (18 U.S.C. § 2713) contraint toute entreprise sous juridiction américaine à fournir les données qu’elle détient n’importe où dans le monde sur simple ordonnance américaine.',
          body2:
            'Même si une plateforme SaaS américaine prétend disposer d’un « serveur canadien », sa maison mère américaine peut être sommée par un tribunal fédéral de transmettre les dossiers fiscaux, pièces d’identité et coordonnées bancaires de vos producteurs sans votre consentement.',
          points: [
            'Aucun juge canadien ni procédure d’entraide juridique mutuelle requis',
            'S’applique aux sociétés mères américaines et à leurs filiales',
            'Ordonnances souvent assorties de clauses de confidentialité strictes',
          ],
        },
        laws: {
          label: 'Bouclier des lois canadiennes et provinciales',
          desc: 'Encadré strictement par la LPRPDE, la Loi 25 du Québec et la LAIPVP.',
          badge: 'Bouclier juridique',
          heading: 'Alignement rigoureux avec la législation canadienne',
          body1:
            'Local Market Hub respecte les normes de la LPRPDE (PIPEDA) fédérale et s’aligne sur les législations provinciales modernisées, notamment la Loi 25 du Québec et les lois sur l’accès à l’information et la protection de la vie privée (LAIPVP).',
          body2:
            'Nous appliquons le consentement explicite des exposants, la gestion sécurisée des clés de chiffrement et des cycles de conservation conformes au droit administratif canadien.',
          points: [
            'Conformité avec la LPRPDE fédérale et les lois provinciales du secteur privé',
            'Gouvernance conforme aux exigences strictes de la Loi 25 du Québec',
            'Droit à l’effacement et portabilité structurée des données',
          ],
        },
      },
      comparisonBox: {
        title: 'Matrice comparative des juridictions et de la souveraineté',
        colOther: 'Logiciels américains / Plateformes étrangères',
        colLmh: 'Local Market Hub (Canadien)',
        row1Title: 'Emplacement principal des serveurs',
        row1Other: 'Est / Ouest des États-Unis (ou routage multi-régions)',
        row1Lmh: 'Toronto et Montréal, Canada exclusivement',
        row2Title: 'Protection contre les assignations étrangères',
        row2Other: 'Vulnérable aux requêtes sans mandat du CLOUD Act',
        row2Lmh: 'Protégé exclusivement par mandat d’un tribunal canadien',
        row3Title: 'Revente ou profilage des données d’exposants',
        row3Other: 'Monétisation commerciale des listes d’exposants',
        row3Lmh: 'Aucune revente ni exploitation commerciale des données',
      },
    },
    accessibility: {
      title: 'Protection contre les amendes gouvernementales d’accessibilité',
      calloutTitle: 'L’accessibilité numérique est une obligation légale.',
      calloutDesc: 'La réglementation sanctionne les sites non conformes par de lourdes amendes financières.',
      ontarioTitle: 'Ontario (LAPHO / AODA)',
      ontarioFine: 'Jusqu’à 100 000 $ / jour',
      ontarioDesc:
        'En vertu du Règlement 191/11, les organisations s’exposent à des sanctions quotidiennes en cas de non-conformité aux exigences WCAG 2.0/2.2 AA.',
      bcTitle: 'Colombie-Britannique (Loi sur l’accessibilité de la C.-B.)',
      bcFine: 'Jusqu’à 250 000 $ CAD',
      bcDesc:
        'Les organisations s’exposent à des amendes maximales pouvant atteindre 250 000 $ CAD pour non-respect des exigences d’accessibilité.',
      legislationLabel: 'Législation :',
      upcomingDeadlineLabel: 'Échéance à venir :',
      humanRightsLabel: 'Protection des droits de la personne :',
      corporateLiabilityLabel: 'Responsabilité des entreprises :',
      provincesList: [
        {
          id: 'ontario',
          name: 'Ontario',
          legislation: 'Loi sur l’accessibilité pour les personnes handicapées de l’Ontario (LAPHO / AODA).',
          upcomingDeadline:
            'Les entreprises privées et organismes à but non lucratif de 20 employés ou plus doivent soumettre un rapport de conformité d’ici le 31 décembre 2026.',
          corporateLiability:
            'Les entreprises s’exposent à des amendes maximales pouvant atteindre 100 000 $ CAD par jour pour les infractions majeures. Le non-respect de l’échéance de décembre 2026 déclenche des vérifications immédiates de conformité et expose directement l’organisation à des sanctions administratives pécuniaires.',
        },
        {
          id: 'manitoba',
          name: 'Manitoba',
          legislation: 'Loi sur l’accessibilité pour les Manitobains (LAM / AMA).',
          corporateLiability: 'Les entreprises s’exposent à des amendes maximales pouvant atteindre 250 000 $ pour les cas très graves de non-conformité.',
        },
        {
          id: 'nova_scotia',
          name: 'Nouvelle-Écosse',
          legislation: 'Loi sur l’accessibilité (Accessibility Act).',
          corporateLiability: 'Les organisations s’exposent à des amendes maximales pouvant atteindre 250 000 $ pour les infractions graves.',
        },
        {
          id: 'bc',
          name: 'Colombie-Britannique',
          legislation: 'Loi sur l’accessibilité de la Colombie-Britannique (ABCA).',
          corporateLiability: 'Les amendes peuvent atteindre jusqu’à 250 000 $ en cas de non-respect des exigences légales.',
        },
        {
          id: 'saskatchewan',
          name: 'Saskatchewan',
          legislation: 'Loi sur l’accessibilité de la Saskatchewan (The Accessible Saskatchewan Act).',
          corporateLiability: 'La loi établit une sanction maximale de 250 000 $ en cas de non-conformité des entreprises.',
        },
        {
          id: 'newfoundland',
          name: 'Terre-Neuve-et-Labrador',
          legislation: 'Loi sur l’accessibilité (Accessibility Act).',
          corporateLiability: 'La loi prévoit des amendes maximales pouvant atteindre 250 000 $ pour les infractions graves aux exigences statutaires.',
        },
        {
          id: 'alberta',
          name: 'Alberta',
          legislation: 'Aucune législation formelle et exhaustive sur l’accessibilité numérique.',
          humanRightsProtection: 'Les droits des personnes handicapées sont protégés par les codes provinciaux des droits de la personne.',
          corporateLiability:
            'Les entreprises ont une stricte obligation d’accommodement. Le défaut de fournir des services numériques accessibles peut donner lieu à des plaintes en matière de droits de la personne, des audiences publiques et des dommages-intérêts compensatoires.',
        },
        {
          id: 'quebec',
          name: 'Québec',
          legislation: 'Aucune législation formelle et exhaustive sur l’accessibilité numérique.',
          humanRightsProtection: 'Les droits des personnes handicapées sont protégés par les codes provinciaux des droits de la personne.',
          corporateLiability:
            'Les entreprises ont une stricte obligation d’accommodement. Le défaut de fournir des services numériques accessibles peut donner lieu à des plaintes en matière de droits de la personne, des audiences publiques et des dommages-intérêts compensatoires.',
        },
        {
          id: 'new_brunswick',
          name: 'Nouveau-Brunswick',
          legislation: 'Aucune législation formelle et exhaustive sur l’accessibilité numérique.',
          humanRightsProtection: 'Les droits des personnes handicapées sont protégés par les codes provinciaux des droits de la personne.',
          corporateLiability:
            'Les entreprises ont une stricte obligation d’accommodement. Le défaut de fournir des services numériques accessibles peut donner lieu à des plaintes en matière de droits de la personne, des audiences publiques et des dommages-intérêts compensatoires.',
        },
        {
          id: 'pei',
          name: 'Île-du-Prince-Édouard',
          legislation: 'Aucune législation formelle et exhaustive sur l’accessibilité numérique.',
          humanRightsProtection: 'Les droits des personnes handicapées sont protégés par les codes provinciaux des droits de la personne.',
          corporateLiability:
            'Les entreprises ont une stricte obligation d’accommodement. Le défaut de fournir des services numériques accessibles peut donner lieu à des plaintes en matière de droits de la personne, des audiences publiques et des dommages-intérêts compensatoires.',
        },
      ],
      standardTarget: 'Nous visons plus de 20 normes d’accessibilité pour garantir un accès universel aux outils numériques.',
      simulatorTitle: 'Simulateur d’exposition aux pénalités légales',
      simulatorDesc: 'Évaluez le risque financier potentiel lié à des logiciels de marché non conformes.',
      sliderLabel: 'Jours de non-conformité constatée :',
      estimatedLiability: 'Exposition financière maximale estimée :',
      lmhRiskLabel: 'Risque avec Local Market Hub :',
      lmhRiskValue: '0 $ CAD (Certifié conforme WCAG 2.2 AA)',
      configureBtn: 'Configurer les préférences WCAG 2.2',
      demoTitle: 'Démonstration d’accessibilité intellectuelle',
      demoDesc:
        'Activez le mode pour voir comment notre interface transforme les règlements municipaux complexes en actions simples pour tous les styles cognitifs.',
      activeModeLabel: 'Actif (Clair et direct)',
      standardModeLabel: 'Texte juridique standard',
      standardLegalSampleTitle: 'Clause municipale standard (dense et administrative) :',
      standardLegalSampleText:
        '« Tous les concessionnaires commerciaux participants doivent soumettre leurs attestations d’indemnisation 14 jours avant l’occupation saisonnière, en vertu du règlement municipal de sécurité publique 42-B. »',
      plainEnglishSampleTitle: 'Traduction en langage clair (Mode d’accessibilité intellectuelle) :',
      plainEnglishSampleText:
        '« Envoyez-nous votre preuve d’assurance au moins 2 semaines avant l’ouverture afin d’installer votre stand en toute sécurité. »',
      toggleIntellectualBtn: 'Basculer l’accessibilité intellectuelle',
    },
    mission: {
      kicker: 'Notre conviction fondatrice',
      title: 'Notre mission : Bâtir une chaîne d’approvisionnement neuro-inclusive',
      p1: 'Mon grand-père était agriculteur. Il avait du mal à lire et à écrire en raison de sa dyslexie. Ce trait neurologique a été transmis à mon père et à moi-même. J’ai vécu directement la discrimination systémique. Cette discrimination touche la majorité de la main-d’œuvre neurodivergente.',
      p2: 'Les formulaires complexes de permis municipaux entraînent des retards administratifs. Ces documents lourds en texte constituent une barrière structurelle. Ils excluent activement les producteurs non traditionnels de l’économie locale.',
      p3: 'Local Market Hub élimine cet obstacle. Nous automatisons la conformité grâce à l’intelligence artificielle. Nous appliquons des normes strictes d’accessibilité numérique. Cela fait disparaître les frictions des formalités administratives traditionnelles. Nous veillons à ce que chaque agriculteur, artisan et créateur bénéficie d’un accès équitable aux débouchés commerciaux. Cela renforce l’indépendance alimentaire au Canada. Cela bâtit une chaîne d’approvisionnement durable et inclusive.',
      plainSummaryTitle: 'En langage clair',
      plainSummary:
        'Les difficultés de lecture comme la dyslexie ne devraient jamais empêcher des agriculteurs et artisans passionnés de vendre leurs produits. Nous automatisons les démarches administratives pour supprimer les formulaires compliqués et permettre à chacun de participer équitablement.',
      badges: {
        neurodiversity: 'Priorité à la neurodiversité et à l’accessibilité',
        supplyChain: 'Chaîne d’approvisionnement locale inclusive',
        sovereignty: 'Indépendance alimentaire canadienne',
      },
    },
    customerSuccess: {
      title: 'Réussite client et formation',
      narrative:
        'Nous maintenons une présence numérique dynamique pour bâtir l’autorité et la confiance. Nous filtrons toutes les décisions stratégiques à travers l’expérience client. Notre démarche suit fidèlement le parcours de l’utilisateur, de la découverte jusqu’au succès durable.',
      narrativePlain:
        'En termes simples : nous ne nous contentons pas de vous livrer un logiciel puis de disparaître. Nous étudions les blocages des exposants, simplifions chaque étape et fournissons des guides clairs pour que votre marché fonctionne à merveille toute l’année.',
      pillars: [
        {
          title: 'Nous éliminons les frustrations courantes des exposants.',
          desc: 'Disparition des formulaires papier égarés, des règles électriques floues, des polices d’assurance oubliées et des paiements imprévisibles.',
        },
        {
          title: 'Nous réalisons des audits d’utilisabilité réguliers.',
          desc: 'Nos spécialistes observent régulièrement des agriculteurs et des artisans aînés pour s’assurer que chaque bouton et étape est immédiatement compréhensible.',
        },
        {
          title: 'Nous simplifions les communications.',
          desc: 'Alertes météo par message texte, plans de stands clairs et rappels sans jargon pour que les matins de marché se déroulent sereinement.',
        },
        {
          title: 'Nous facilitons l’accueil des exposants.',
          desc: 'Un parcours d’inscription intuitif en 4 étapes que les exposants remplissent en moins de 5 minutes depuis leur téléphone sur le terrain.',
        },
        {
          title: 'Nous créons des tutoriels vidéo pas-à-pas.',
          desc: 'De courtes capsules vidéo sous-titrées de 60 secondes répondant aux questions pratiques des organisateurs et des producteurs.',
        },
      ],
      interactiveTitle: 'Comparatif de l’expérience d’intégration avant / après',
      interactiveSubtitle:
        'Démonstration concrète opposant le chaos des tableurs manuels à la gestion de marché automatisée en un clic.',
      tabChaos: 'Gestion manuelle fragmentée (Chaos)',
      tabStreamlined: 'Local Market Hub (Fluide et guidé)',
      chaosTitle: 'Le statu quo fragmenté (Tableurs et fichiers PDF)',
      chaosItems: [
        'Avis juridiques indigestes, questions d’attribution mal posées et téléversements de PDF qui découragent les agriculteurs occupés.',
        'Les organisateurs passent plus de 15 heures par semaine à relancer les chèques, vérifier les assurances expirées et répondre aux courriels.',
        'Taux d’abandon élevé lors des inscriptions de début de saison à cause d’interfaces inaccessibles et d’embarras techniques.',
      ],
      streamlinedTitle: 'Parcours d’accueil guidé Local Market Hub',
      streamlinedItems: [
        'Nous observons les hésitations des exposants, testons la clarté sur le terrain et traduisons les instructions en langage limpide.',
        'Vérification immédiate des attestations d’assurance avec alertes de renouvellement automatiques transmises directement à l’exposant.',
        'Taux de complétion dès le premier essai supérieur à 98 %, sans aucune installation logicielle sur iOS, Android ou ordinateur.',
      ],
      glossaryTitle: 'Lexique de standardisation des opérations de marché',
      glossaryItems: [
        {
          term: 'Inscription principale',
          definition: 'Enregistrement numérique initial de 2 minutes vérifiant les qualifications légales de l’exposant.',
        },
        {
          term: 'Attribution électrique',
          definition: 'Répartition standardisée des charges électriques (15 A / 30 A) pour prévenir les pannes de disjoncteurs.',
        },
        {
          term: 'Dégagement des voies',
          definition: 'Conformité aux normes LAPHO/WCAG garantissant un passage continu de 36 pouces accessible à tous.',
        },
        {
          term: 'Finalisation du plan',
          definition: 'Verrouillage automatique des attributions de stands du samedi et génération instantanée du plan du marché.',
        },
      ],
    },
    automation: {
      title: 'L’avantage économique de l’accessibilité',
      subtitleStandard: 'Nous intégrons des flux automatisés intelligents pour optimiser vos opérations.',
      subtitlePlain:
        'Nous utilisons des outils automatisés intelligents pour prendre en charge les tâches répétitives et optimiser vos opérations.',
      economicAdvantage: {
        heading: 'L’avantage économique de l’accessibilité',
        paragraph:
          'Les barrières numériques excluent des exposants talentueux. Environ 27 % des Canadiens âgés de 15 ans et plus vivent avec un handicap, ce qui représente environ 8 millions de personnes. Les entreprises perdent environ 16,8 milliards de dollars par an en raison d’interfaces Web inaccessibles. De nombreuses personnes neurodivergentes se lancent dans l’entrepreneuriat. Les formulaires de candidature complexes créent des obstacles structurels pour ces propriétaires d’entreprise. Local Market Hub élimine ces barrières. Notre logiciel accessible offre un avantage économique direct.',
        bullets: [
          'Vous recrutez au sein d’un bassin d’exposants massif et inexploité.',
          'Vous augmentez votre nombre total de candidatures de marché.',
          'Vous récupérez des revenus perdus à cause des frictions administratives.',
          'Vous attirez des commandites privées en fournissant une preuve mesurable d’inclusion numérique.',
        ],
      },
      points: [
        {
          title: 'Nous enrichissons l’expérience utilisateur grâce à l’automatisation intelligente.',
          desc: 'Validation automatique des documents, vérification instantanée des permis et jumelage intelligent des stands éliminent les saisies manuelles fastidieuses.',
        },
        {
          title: 'Nous utilisons des outils de communication intelligents pour perfectionner les messages.',
          desc: 'Aide les équipes de marché à communiquer les règlements, changements d’horaires et profils d’artisans avec chaleur, clarté et cohérence.',
        },
        {
          title: 'Nous exploitons les données pour produire des études de cas probantes.',
          desc: 'Synthétise la fidélité des exposants, la vélocité économique locale et l’achalandage sous forme de présentations municipales et de bilans annuels.',
        },
      ],
      generatorKicker: 'Renseignements opérationnels · Synthèse en direct',
      generatorTitle: 'Générateur automatisé d’études de cas opérationnelles',
      marketTypes: {
        farmers: 'Marché fermier et agricole',
        artisan: 'Marché d’artisans et métiers d’art',
        holiday: 'Marché des Fêtes et d’hiver',
      },
      caseStudyFarmers: {
        title: 'Étude de cas : Élimination de 18 heures d’administration hebdomadaires avec zéro amende',
        executiveSummary:
          'Le marché des fermiers de Stratford a remplacé un processus papier complexe regroupant 48 producteurs par un flux numérique fluide. L’adoption de Local Market Hub a éliminé la réconciliation manuelle des chèques, assuré une conformité totale à la LAPHO et conservé l’ensemble des données au Canada.',
        reclaimedHours: '18,4 h / sem.',
        regulatoryFines: '0 $ CAD',
        vendorRetention: '96,2 %',
        annualSavings: '6 850 $ CAD',
      },
      caseStudyArtisan: {
        title: 'Étude de cas : Automatisation de 65 candidatures d’artisans et suppression des frictions',
        executiveSummary:
          'La Guilde des artisans de l’île de Vancouver est passée de 40 à 65 créateurs sans embaucher de personnel administratif supplémentaire. L’évaluation automatisée des besoins électriques a réduit la charge de travail des bénévoles et augmenté la satisfaction.',
        reclaimedHours: '14,2 h / sem.',
        regulatoryFines: '0 $ CAD',
        vendorRetention: '98,5 %',
        annualSavings: '5 240 $ CAD',
      },
      caseStudyHoliday: {
        title: 'Étude de cas : Déploiement éclair d’un marché d’hiver sans aucune panne électrique',
        executiveSummary:
          'Le collectif d’hiver de Calgary a mis en place un marché éphémère de 3 semaines avec 90 stands en rotation rapide. La plateforme a géré automatiquement la puissance électrique des réchauds alimentaires, évitant les coupures de courant et épargnant 24 heures de gestion de crise.',
        reclaimedHours: '22,0 h / sem.',
        regulatoryFines: '0 $ CAD',
        vendorRetention: '94,0 %',
        annualSavings: '8 120 $ CAD',
      },
      recalculateBtn: 'Régénérer l’étude de cas',
      recalculating: 'Synthèse des données en cours...',
    },
    pricing: {
      title: 'Tarification basée sur la valeur',
      bannerTitle: 'Nous offrons une structure tarifaire claire. Le coût est de 500 $ pour une saison complète.',
      bannerDesc:
        'Nous ne proposons pas de formules complexes ni de commissions cachées. Nous offrons une suite logicielle d’exploitation prévisible et complète pour toute votre saison.',
      whyMattersTitle: 'Pourquoi cela compte pour votre marché :',
      whyMattersDesc:
        'Les logiciels « gratuits » revendent souvent vos listes d’exposants ou prélèvent 4 % à 8 % sur vos encaissements. En fixant un prix juste de 500 $ par saison, nous garantissons la stabilité de la plateforme et restons dédiés à 100 % au bon fonctionnement de votre marché.',
      packageBadge: 'Accès saison complète',
      packageDuration: 'Jusqu’à 12 mois consécutifs',
      priceAmount: '500 $',
      priceCad: 'CAD / Saison complète',
      packageIncludesTitle: 'Tout ce qui est inclus dans votre licence :',
      features: [
        'Inscriptions illimitées d’exposants saisonniers et occasionnels',
        'Interface accessible certifiée WCAG 2.2 Niveau AA et 20++ critères',
        'Souveraineté stricte des données au Canada (serveurs Toronto et Montréal)',
        'Plan complet de réussite client et tutoriels vidéo d’accueil',
        'Attribution automatisée des besoins électriques et des emplacements',
        'Rapports d’impact annuels prêts pour vos présentations municipales',
        'Zéro pourcentage, zéro commission et zéro frais cachés sur les ventes',
      ],
      calcTitle: 'Simulateur d’économies sur les commissions de 4 %',
      calcSubtitle:
        'Les plateformes prélevant de 3 % à 5 % sur chaque stand ou billet retirent des fonds précieux à vos producteurs locaux. Voyez ce que vous conservez avec Local Market Hub :',
      vendorSlider: 'Exposants actifs par jour de marché :',
      weeksSlider: 'Nombre de semaines dans la saison :',
      feeSlider: 'Frais moyens d’emplacement par semaine ($ CAD) :',
      stallVolumeLabel: 'Volume total des emplacements de la saison :',
      competitorCutLabel: 'Prélèvement des plateformes concurrentes (moy. 4 %) :',
      lmhFlatLabel: 'Tarif fixe Local Market Hub pour la saison :',
      savingsNetLabel: 'Fonds nets conservés par votre marché :',
      savingsRetainedDesc:
        'Des capitaux qui restent au sein de votre communauté agricole locale plutôt que d’être siphonnés par des processeurs de paiement étrangers.',
      ctaCard: 'Démarrer votre saison (500 $)',
      partnershipsTitle: 'Partenariats d’accessibilité communautaire',
      partnershipsDesc:
        'Nous reconnaissons les contraintes financières strictes des organismes communautaires. Contactez-nous pour discuter de partenariats stratégiques. Nous offrons des subventions opérationnelles limitées pour les marchés à but non lucratif admissibles éprouvant des déficits de financement.',
      partnershipsCta: 'Contactez-nous pour discuter de partenariats stratégiques',
    },
    modal: {
      titleForm: 'Démarrer votre saison complète · 500 $ forfaitaire',
      titleSuccess: 'Mise en service de la saison confirmée',
      kicker: 'Infrastructure souveraine canadienne',
      heading: 'Inscrivez votre marché pour la saison à venir',
      subtitle:
        'Frais uniques de 500 $ CAD. Comprend la certification WCAG 2.2 AA, le plan de réussite client et zéro prélèvement sur vos transactions.',
      marketNameLabel: 'Nom du marché ou de l’organisme *',
      marketNamePlaceholder: 'ex. Marché Fermier de Stratford',
      provinceLabel: 'Province ou territoire *',
      directorLabel: 'Nom du directeur ou de la directrice *',
      directorPlaceholder: 'ex. Sarah Jenkins',
      emailLabel: 'Adresse courriel officielle *',
      emailPlaceholder: 'direction@localmarkethub.ca',
      vendorsLabel: 'Nombre approximatif d’exposants',
      launchLabel: 'Date prévue d’ouverture du marché',
      totalLabel: 'Total de la licence saisonnière :',
      flatTotal: '500,00 $ CAD (Fixe)',
      securityNote: 'Chiffré sur des serveurs canadiens · Conforme à la LPRPDE',
      submitBtn: 'Confirmer la saison (500 $)',
      submittingBtn: 'Mise en service...',
      successWelcome: 'Bienvenue sur Local Market Hub !',
      successMessage: 'L’espace de travail de votre saison pour {name} a été initialisé sous juridiction canadienne.',
      invoiceRefLabel: 'Référence de facture :',
      jurisdictionLabel: 'Conformité légale :',
      supportLeadLabel: 'Responsable réussite client :',
      supportTeamName: 'Équipe canadienne d’assistance aux marchés',
      doneBtn: 'Terminé, retourner à la présentation',
      provinces: {
        ontario: 'Ontario (Conformité LAPHO)',
        bc: 'Colombie-Britannique (Loi sur l’accessibilité de la C.-B.)',
        alberta: 'Alberta',
        quebec: 'Québec (Conforme à la Loi 25)',
        novaScotia: 'Nouvelle-Écosse',
        manitoba: 'Manitoba',
        saskatchewan: 'Saskatchewan',
        newBrunswick: 'Nouveau-Brunswick',
        newfoundland: 'Terre-Neuve-et-Labrador',
        pei: 'Île-du-Prince-Édouard',
        territories: 'Yukon / TNO / Nunavut',
      },
      vendorOptions: {
        opt1: '10 à 25 exposants',
        opt2: '25 à 50 exposants',
        opt3: '50 à 100 exposants',
        opt4: '100+ exposants',
      },
    },
    drawer: {
      title: 'Contrôles d’accessibilité et WCAG 2.2',
      desc: 'Local Market Hub vise le niveau AA de WCAG 2.2 et plus de 20 normes universelles d’accessibilité. Testez l’adaptation de notre plateforme en temps réel.',
      intellectualTitle: 'Accessibilité intellectuelle',
      intellectualDesc:
        'Communique les concepts administratifs complexes en termes simples et directs sans perdre leur valeur opérationnelle.',
      highContrastTitle: 'Rehaussement de contraste élevé',
      highContrastDesc:
        'Augmente les ratios de contraste pour dépasser les seuils 4.5:1 / 7:1 de WCAG 2.2 AA pour les personnes malvoyantes.',
      largeTextTitle: 'Typographie agrandie (+12 %)',
      largeTextDesc:
        'Augmente la taille de police de base tout en préservant l’équilibre visuel et la structure de mise en page.',
      openDyslexicTitle: 'Police OpenDyslexic',
      openDyslexicDesc:
        'Applique la police de caractères OpenDyslexic sur toute l’interface. Le design lesté des lettres prévient l’inversion des caractères.',
      protectionsActiveTitle: 'Protections de conformité actives',
      checkItems: [
        'Conformité LAPHO en Ontario (Règlement 191/11)',
        'Certifié selon la Loi sur l’accessibilité de la Colombie-Britannique',
        'Cible WCAG 2.2 AA avec plus de 20 normes avancées',
        'Sémantique pour lecteurs d’écran et navigation clavier intégrale',
      ],
      applyBtn: 'Appliquer et revenir à la page',
    },
    footer: {
      mission:
        'Logiciel pour la gestion des marchés. Automatisez l’administration et facilitez l’accueil des exposants des marchés fermiers et artisanaux canadiens.',
      hostingNote: 'Hébergé exclusivement dans des centres de données canadiens (Toronto et Montréal)',
      privacyNote: 'Souveraineté stricte des données canadiennes · LPRPDE · Certifié WCAG 2.2 AA',
      architectureTitle: 'Architecture de la plateforme',
      legalSupportTitle: 'Aspects légaux et soutien',
      contactUs: 'Contactez-nous',
      wcagLink: 'Paramètres et modes WCAG 2.2 AA',
      startSeasonLink: 'Démarrer votre saison (500 $) →',
      officialDomain: 'Domaine officiel :',
      rightsReserved: 'Tous droits réservés.',
      badgePipeda: 'Conforme à la LPRPDE',
      badgeAoda: 'Protégé LAPHO et Loi de la C.-B.',
      badgeMadeInCanada: 'Fait au Canada',
    },
  },
};
