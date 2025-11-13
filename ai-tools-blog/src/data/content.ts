import { CategoryInfo, Article, FAQ, Resource } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'ia-business',
    title: 'IA Business',
    description: 'Cas d\'usage, ROI et stratégies d\'intégration de l\'IA en entreprise',
    slug: '/ia-business',
    icon: 'Briefcase'
  },
  {
    id: 'prompts-chatgpt',
    title: 'Prompts ChatGPT',
    description: 'Bibliothèque de prompts professionnels et guides pratiques',
    slug: '/prompts-chatgpt',
    icon: 'MessageSquare'
  },
  {
    id: 'freelance-ia',
    title: 'Freelance IA',
    description: 'Services, tarifs et opportunités pour freelances spécialisés IA',
    slug: '/freelance-ia',
    icon: 'Users'
  },
  {
    id: 'outils-ia',
    title: 'Outils IA',
    description: 'Comparatifs et guides des meilleurs outils IA pour professionnels',
    slug: '/outils-ia',
    icon: 'Wrench'
  }
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'cas-usage-ia-marketing-b2b-guide-2025',
    title: 'Cas d\'usage IA en marketing B2B : Guide complet 2025',
    excerpt: 'Découvrez les applications concrètes de l\'IA dans le marketing B2B avec des exemples pratiques et des métriques de ROI.',
    content: '',
    category: 'ia-business',
    date: '2025-11-01',
    author: 'Blog AI Pro',
    readTime: 12,
    tags: ['Marketing', 'B2B', 'ROI']
  },
  {
    id: '2',
    slug: 'ia-finance-entreprise-cas-pratiques',
    title: 'IA pour la finance d\'entreprise : Cas pratiques et ROI',
    excerpt: 'Comment l\'IA transforme la fonction finance avec des cas d\'usage concrets et des benchmarks de performance.',
    content: '',
    category: 'ia-business',
    date: '2025-10-28',
    author: 'Blog AI Pro',
    readTime: 10,
    tags: ['Finance', 'ROI', 'Automatisation']
  },
  {
    id: '3',
    slug: '36-prompts-chatgpt-seo-recherche-mots-cles',
    title: '36 Prompts ChatGPT pour SEO : Recherche mots-clés et briefs',
    excerpt: 'Collection complète de prompts optimisés pour la recherche de mots-clés, la création de briefs et l\'optimisation SEO.',
    content: '',
    category: 'prompts-chatgpt',
    date: '2025-10-25',
    author: 'Blog AI Pro',
    readTime: 15,
    tags: ['SEO', 'Prompts', 'Content Marketing']
  },
  {
    id: '4',
    slug: 'prompts-chatgpt-emailing-sequences',
    title: 'Prompts ChatGPT pour e-mailing : Séquences personnalisées',
    excerpt: 'Créez des séquences d\'e-mails performantes avec ces prompts spécialisés pour l\'automatisation marketing.',
    content: '',
    category: 'prompts-chatgpt',
    date: '2025-10-22',
    author: 'Blog AI Pro',
    readTime: 8,
    tags: ['Email Marketing', 'Automatisation']
  },
  {
    id: '5',
    slug: 'devenir-freelance-ia-guide-complet-2025',
    title: 'Devenir freelance IA en 2025 : Guide complet',
    excerpt: 'Tout ce qu\'il faut savoir pour lancer votre activité de freelance spécialisé en IA : compétences, tarifs, prospection.',
    content: '',
    category: 'freelance-ia',
    date: '2025-10-20',
    author: 'Blog AI Pro',
    readTime: 18,
    tags: ['Freelance', 'Carrière', 'Guide']
  },
  {
    id: '6',
    slug: 'tarifs-freelance-ia-tjm-specialite',
    title: 'Tarifs freelance IA : TJM par spécialité',
    excerpt: 'Benchmark des tarifs journaliers moyens (TJM) pour les différents profils de freelances IA en 2025.',
    content: '',
    category: 'freelance-ia',
    date: '2025-10-18',
    author: 'Blog AI Pro',
    readTime: 9,
    tags: ['Tarifs', 'TJM', 'Freelance']
  },
  {
    id: '7',
    slug: 'top-outils-ia-entrepreneurs-2025-comparatif',
    title: 'Top outils IA pour entrepreneurs 2025 : Comparatif complet',
    excerpt: 'Analyse détaillée des meilleurs outils IA pour entrepreneurs avec comparatifs de fonctionnalités, prix et cas d\'usage.',
    content: '',
    category: 'outils-ia',
    date: '2025-10-15',
    author: 'Blog AI Pro',
    readTime: 14,
    tags: ['Outils', 'Comparatif', 'Productivité']
  },
  {
    id: '8',
    slug: 'stack-ia-pme-marketing-ops-support',
    title: 'Stack IA pour PME : Marketing, Ops, Support',
    excerpt: 'Recommandations de stack technologique IA pour PME incluant marketing, opérations et support client.',
    content: '',
    category: 'outils-ia',
    date: '2025-10-12',
    author: 'Blog AI Pro',
    readTime: 11,
    tags: ['Stack Tech', 'PME', 'Intégration']
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Comment calculer le ROI d\'un projet IA en entreprise ?',
    answer: 'Le calcul du ROI IA prend en compte plusieurs facteurs : coûts d\'implémentation (licences, formation, infrastructure), gains de productivité mesurables, réduction des erreurs, et nouveaux revenus générés. Une formule simple : ROI = (Gains - Coûts) / Coûts × 100. Pour un projet IA marketing, comptez 6-12 mois pour atteindre le break-even.',
    category: 'IA Business'
  },
  {
    id: '2',
    question: 'Quels sont les prompts ChatGPT les plus efficaces pour le SEO ?',
    answer: 'Les prompts SEO les plus performants incluent : la recherche de mots-clés longue traîne avec contexte d\'intention, la création de briefs optimisés avec structure H1-H6, l\'analyse de SERP avec extraction des topics principaux, et la génération de meta descriptions engageantes. L\'efficacité dépend de la précision du contexte fourni.',
    category: 'Prompts ChatGPT'
  },
  {
    id: '3',
    question: 'Quel TJM pour un freelance IA débutant ?',
    answer: 'Un freelance IA débutant (0-2 ans) peut facturer entre 400€ et 600€/jour selon sa spécialité. Les profils spécialisés (RAG, fine-tuning) démarrent plus haut (500-700€). Avec 2-5 ans d\'expérience, les TJM montent à 600-900€. Les experts (5+ ans) facturent 800-1200€/jour ou plus pour des missions complexes.',
    category: 'Freelance IA'
  },
  {
    id: '4',
    question: 'Quels outils IA gratuits recommandez-vous pour débuter ?',
    answer: 'Pour débuter sans budget : ChatGPT (plan gratuit), Claude (Anthropic), Google Gemini pour les assistants IA ; Canva (version gratuite) pour le design IA ; Grammarly (gratuit) pour la rédaction ; et Zapier (plan gratuit limité) pour les automatisations simples. Ces outils couvrent 80% des besoins de base.',
    category: 'Outils IA'
  },
  {
    id: '5',
    question: 'Comment optimiser son contenu pour les recherches IA (AIO) ?',
    answer: 'L\'AIO (AI Optimization) nécessite : des réponses directes et structurées aux questions fréquentes, l\'utilisation de données et statistiques citées, un contenu exhaustif (2000+ mots), des tableaux HTML extractibles, un balisage schema markup (Article, FAQ), et des citations de sources réputées pour l\'E-E-A-T.',
    category: 'SEO/AI'
  },
  {
    id: '6',
    question: 'Combien peut rapporter un blog IA avec AdSense ?',
    answer: 'Un blog IA avec 10 000 visiteurs mensuels peut générer 300-600€/mois avec AdSense (RPM 30-60€ selon géographie). À 50 000 visites/mois : 1500-3000€. Les revenus dépendent du trafic, de la localisation des visiteurs (US/UK payent mieux), et du placement des annonces. Complétez avec affiliation et contenu sponsorisé.',
    category: 'Monétisation'
  }
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Checklist audit IA entreprise',
    description: 'Guide complet pour auditer la maturité IA de votre entreprise avec 50+ points de contrôle.',
    type: 'checklist',
    downloadUrl: '/resources/checklist-audit-ia-entreprise.pdf'
  },
  {
    id: '2',
    title: 'Checklist optimisation AI search (SEO/GEO)',
    description: 'Liste de vérification pour optimiser votre contenu pour les recherches IA et les moteurs génératifs.',
    type: 'checklist',
    downloadUrl: '/resources/checklist-ai-search-optimization.pdf'
  },
  {
    id: '3',
    title: 'Template briefs SEO avec prompts',
    description: 'Modèle de brief SEO enrichi avec prompts ChatGPT pour la recherche et la création de contenu.',
    type: 'template',
    downloadUrl: '/resources/template-brief-seo-prompts.txt'
  },
  {
    id: '4',
    title: 'Template prompts par cas d\'usage',
    description: 'Collection de 50+ prompts organisés par cas d\'usage métier (marketing, finance, RH, ops).',
    type: 'template',
    downloadUrl: '/resources/template-prompts-cas-usage.txt'
  },
  {
    id: '5',
    title: 'Guide conformité AdSense 2025',
    description: 'Résumé des règles de conformité AdSense avec recommandations de placement et bonnes pratiques.',
    type: 'guide',
    downloadUrl: '/resources/guide-conformite-adsense-2025.pdf'
  },
  {
    id: '6',
    title: 'Liste outils gratuits IA',
    description: 'Répertoire annoté de 30+ outils IA gratuits pour entrepreneurs et freelances.',
    type: 'link',
    url: 'https://github.com'
  }
];
