import { useParams, Link } from 'react-router-dom';
import { articles, categories } from '../data/content';
import { ChevronRight, Clock, Calendar, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import FAQAccordion from '../components/FAQAccordion';
import { useSEO } from '../lib/seo';

export default function ArticlePage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [tocOpen, setTocOpen] = useState(true);
  
  const article = articles.find((a) => a.slug === slug && a.category === category);
  const categoryInfo = categories.find((cat) => cat.id === category);
  const relatedArticles = articles.filter((a) => a.category === category && a.slug !== slug).slice(0, 3);

  // SEO dynamique
  useSEO({
    title: article?.title || 'Article',
    description: article?.excerpt || '',
    keywords: article?.tags?.join(', '),
    article: article ? {
      publishedTime: article.date,
      author: article.author,
      section: categoryInfo?.title || '',
      tags: article.tags
    } : undefined,
    ogType: 'article'
  });

  if (!article || !categoryInfo) {
    return (
      <div className="container-custom py-16">
        <h1 className="text-h1 font-bold text-neutral-900 mb-4">Article non trouvé</h1>
        <Link to="/" className="text-primary-500 hover:text-primary-600">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  // Article-specific FAQ
  const articleFAQs = [
    {
      id: '1',
      question: 'Combien de temps faut-il pour implémenter ces recommandations ?',
      answer: 'La plupart des tactiques présentées peuvent être mises en place en 1-2 semaines. Pour une transformation complète, comptez 3-6 mois selon la taille de votre organisation.'
    },
    {
      id: '2',
      question: 'Quel budget prévoir pour démarrer ?',
      answer: 'Vous pouvez démarrer avec un budget minimal de 500-1000€/mois pour les outils essentiels. Les projets d\'envergure nécessitent 5000-20000€ d\'investissement initial.'
    },
    {
      id: '3',
      question: 'Faut-il des compétences techniques avancées ?',
      answer: 'Non. Les solutions no-code et low-code permettent de démarrer sans compétences techniques. Pour des projets avancés, l\'accompagnement d\'un expert IA est recommandé.'
    }
  ];

  return (
    <div className="page-fade-in">
      {/* Breadcrumb */}
      <nav className="bg-neutral-50 py-4">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-caption text-neutral-500">
            <Link to="/" className="hover:text-primary-500 transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link to={categoryInfo.slug} className="hover:text-primary-500 transition-colors">
              {categoryInfo.title}
            </Link>
            <ChevronRight size={14} />
            <span className="text-neutral-900 line-clamp-1">{article.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Layout */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid desktop:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="desktop:col-span-8">
              <div className="max-w-[650px]">
                {/* Article Header */}
                <header className="mb-12">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 
                                   text-label font-medium rounded-md">
                      {categoryInfo.title}
                    </span>
                  </div>
                  
                  <h1 className="text-h1 font-bold text-neutral-900 leading-tight mb-6">
                    {article.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-caption text-neutral-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(article.date).toLocaleDateString('fr-FR', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{article.readTime} min de lecture</span>
                    </div>
                    <div>Par {article.author}</div>
                  </div>

                  <div className="flex items-center space-x-4 pt-4 border-t border-neutral-200">
                    <button className="flex items-center space-x-2 text-body-small text-neutral-700 
                                     hover:text-primary-500 transition-colors">
                      <Share2 size={16} />
                      <span>Partager</span>
                    </button>
                  </div>
                </header>

                {/* Table of Contents */}
                <div className="bg-neutral-50 rounded-lg p-6 mb-12">
                  <button 
                    onClick={() => setTocOpen(!tocOpen)}
                    className="flex items-center justify-between w-full text-body font-semibold 
                             text-neutral-900 mb-4"
                  >
                    <span>Table des matières</span>
                    <ChevronRight 
                      size={20} 
                      className={`transform transition-transform ${tocOpen ? 'rotate-90' : ''}`} 
                    />
                  </button>
                  {tocOpen && (
                    <nav className="space-y-2">
                      <a href="#introduction" className="block text-body-small text-neutral-700 
                                                        hover:text-primary-500 transition-colors">
                        1. Introduction
                      </a>
                      <a href="#contexte" className="block text-body-small text-neutral-700 
                                                     hover:text-primary-500 transition-colors">
                        2. Contexte et enjeux
                      </a>
                      <a href="#strategies" className="block text-body-small text-neutral-700 
                                                       hover:text-primary-500 transition-colors">
                        3. Stratégies concrètes
                      </a>
                      <a href="#implementation" className="block text-body-small text-neutral-700 
                                                          hover:text-primary-500 transition-colors">
                        4. Guide d'implémentation
                      </a>
                      <a href="#outils" className="block text-body-small text-neutral-700 
                                                   hover:text-primary-500 transition-colors">
                        5. Outils recommandés
                      </a>
                      <a href="#conclusion" className="block text-body-small text-neutral-700 
                                                       hover:text-primary-500 transition-colors">
                        6. Conclusion
                      </a>
                    </nav>
                  )}
                </div>

                {/* Intro */}
                <div className="mb-12">
                  <p className="text-body-large text-neutral-900 leading-body font-medium">
                    {article.excerpt}
                  </p>
                </div>

                {/* Main Content */}
                <div className="prose-custom space-y-8">
                  <section id="introduction">
                    <h2 className="text-h2 font-semibold text-neutral-900 mb-6 mt-12">
                      Introduction
                    </h2>
                    <p className="text-body text-neutral-900 leading-body mb-6">
                      L'intelligence artificielle révolutionne le paysage professionnel à une vitesse sans précédent. 
                      En 2025, les entreprises qui intègrent l'IA dans leurs processus métier voient leur productivité 
                      augmenter de 40% en moyenne, selon les dernières études de McKinsey. Cette transformation ne 
                      concerne plus seulement les grandes corporations tech - les PME et les freelances sont désormais 
                      en première ligne de cette révolution.
                    </p>
                    <p className="text-body text-neutral-900 leading-body mb-6">
                      Dans cet article, nous explorons les applications concrètes de l'IA dans votre domaine, avec 
                      des cas d'usage éprouvés, des métriques de ROI réelles et un guide pratique d'implémentation 
                      pas-à-pas. Que vous soyez entrepreneur, freelance ou professionnel en entreprise, vous trouverez 
                      des stratégies actionnables adaptées à votre contexte.
                    </p>
                  </section>

                  <section id="contexte">
                    <h2 className="text-h2 font-semibold text-neutral-900 mb-6 mt-12">
                      Contexte et enjeux
                    </h2>
                    <h3 className="text-h3 font-semibold text-neutral-900 mb-4 mt-8">
                      Le marché de l'IA en 2025
                    </h3>
                    <p className="text-body text-neutral-900 leading-body mb-6">
                      Le marché mondial de l'IA atteint 150 milliards de dollars en 2025, avec une croissance annuelle 
                      de 38%. Cette explosion s'explique par trois facteurs clés :
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-body text-neutral-900 leading-body mb-6">
                      <li>
                        <strong>Démocratisation des outils</strong> : Les solutions no-code permettent à tout 
                        professionnel d'intégrer l'IA sans compétences techniques avancées
                      </li>
                      <li>
                        <strong>ROI prouvé</strong> : Les études montrent un retour sur investissement moyen de 
                        300% sur 12 mois pour les projets IA bien menés
                      </li>
                      <li>
                        <strong>Pression concurrentielle</strong> : Les entreprises qui n'adoptent pas l'IA perdent 
                        en moyenne 15% de parts de marché face à leurs concurrents digitalisés
                      </li>
                    </ul>

                    <h3 className="text-h3 font-semibold text-neutral-900 mb-4 mt-8">
                      Opportunités par secteur
                    </h3>
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border border-neutral-200 rounded-lg">
                        <thead className="bg-neutral-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-body-small font-semibold text-neutral-900">
                              Secteur
                            </th>
                            <th className="px-4 py-3 text-left text-body-small font-semibold text-neutral-900">
                              Cas d'usage principal
                            </th>
                            <th className="px-4 py-3 text-left text-body-small font-semibold text-neutral-900">
                              Gain productivité
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-neutral-200">
                            <td className="px-4 py-3 text-body-small text-neutral-900">Marketing</td>
                            <td className="px-4 py-3 text-body-small text-neutral-700">
                              Création de contenu, segmentation audience
                            </td>
                            <td className="px-4 py-3 text-body-small text-success-500 font-semibold">+45%</td>
                          </tr>
                          <tr className="border-t border-neutral-200">
                            <td className="px-4 py-3 text-body-small text-neutral-900">Finance</td>
                            <td className="px-4 py-3 text-body-small text-neutral-700">
                              Analyse prédictive, reporting automatisé
                            </td>
                            <td className="px-4 py-3 text-body-small text-success-500 font-semibold">+35%</td>
                          </tr>
                          <tr className="border-t border-neutral-200">
                            <td className="px-4 py-3 text-body-small text-neutral-900">RH</td>
                            <td className="px-4 py-3 text-body-small text-neutral-700">
                              Recrutement, onboarding, évaluation
                            </td>
                            <td className="px-4 py-3 text-body-small text-success-500 font-semibold">+40%</td>
                          </tr>
                          <tr className="border-t border-neutral-200">
                            <td className="px-4 py-3 text-body-small text-neutral-900">Support</td>
                            <td className="px-4 py-3 text-body-small text-neutral-700">
                              Chatbots, knowledge base, ticketing
                            </td>
                            <td className="px-4 py-3 text-body-small text-success-500 font-semibold">+50%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section id="strategies">
                    <h2 className="text-h2 font-semibold text-neutral-900 mb-6 mt-12">
                      Stratégies concrètes
                    </h2>
                    <p className="text-body text-neutral-900 leading-body mb-6">
                      Passons maintenant aux stratégies actionnables que vous pouvez implémenter dès aujourd'hui. 
                      Chaque approche est accompagnée d'exemples concrets et de métriques de performance.
                    </p>

                    <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-lg p-6 mb-8">
                      <h4 className="text-body font-semibold text-primary-900 mb-2">
                        Point clé à retenir
                      </h4>
                      <p className="text-body-small text-primary-700 leading-body">
                        Commencez petit avec un projet pilote (1-2 mois) avant de déployer à grande échelle. 
                        Cette approche réduit les risques et permet d'ajuster votre stratégie en fonction 
                        des premiers résultats.
                      </p>
                    </div>

                    <h3 className="text-h3 font-semibold text-neutral-900 mb-4 mt-8">
                      Stratégie 1 : Automatisation intelligente
                    </h3>
                    <p className="text-body text-neutral-900 leading-body mb-6">
                      L'automatisation intelligente combine RPA (Robotic Process Automation) et IA pour traiter 
                      des tâches répétitives avec une intelligence contextuelle. Exemples d'applications :
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-body text-neutral-900 leading-body mb-6">
                      <li>
                        <strong>Traitement des emails</strong> : Classification automatique, extraction d'informations 
                        clés, rédaction de réponses contextuelles (gain de temps : 60%)
                      </li>
                      <li>
                        <strong>Gestion documentaire</strong> : OCR intelligent, extraction de données, indexation 
                        automatique (gain de temps : 70%)
                      </li>
                      <li>
                        <strong>Reporting</strong> : Génération automatique de rapports avec insights IA 
                        (gain de temps : 80%)
                      </li>
                    </ol>

                    <h3 className="text-h3 font-semibold text-neutral-900 mb-4 mt-8">
                      Stratégie 2 : Augmentation des compétences
                    </h3>
                    <p className="text-body text-neutral-900 leading-body mb-6">
                      Plutôt que de remplacer vos équipes, l'IA peut augmenter leurs capacités. Cette approche 
                      "human-in-the-loop" combine le meilleur de l'intelligence humaine et artificielle :
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-body text-neutral-900 leading-body mb-6">
                      <li>
                        Assistants IA personnalisés par métier (marketing, finance, legal)
                      </li>
                      <li>
                        Outils de recherche et synthèse documentaire avancés
                      </li>
                      <li>
                        Génération de premières versions de contenus (briefs, rapports, présentations)
                      </li>
                    </ul>
                  </section>

                  {/* Ad Zone In-Content (BTF) */}
                  <div className="my-16">
                    <p className="text-label text-neutral-500 text-center mb-2">Publicité</p>
                    <div className="bg-neutral-50 rounded-lg p-4 flex items-center justify-center h-[200px]">
                      <span className="text-neutral-500">AdSense 728×90 Leaderboard</span>
                    </div>
                  </div>

                  <section id="implementation">
                    <h2 className="text-h2 font-semibold text-neutral-900 mb-6 mt-12">
                      Guide d'implémentation
                    </h2>
                    <p className="text-body text-neutral-900 leading-body mb-6">
                      Voici un plan d'action structuré en 6 étapes pour réussir votre transformation IA :
                    </p>

                    <div className="space-y-6 mb-8">
                      {[
                        {
                          step: 1,
                          title: 'Audit et identification des opportunités',
                          duration: '1-2 semaines',
                          description: 'Cartographiez vos processus métier et identifiez les tâches répétitives, chronophages ou à forte valeur ajoutée candidates à l\'automatisation.'
                        },
                        {
                          step: 2,
                          title: 'Priorisation et sélection du projet pilote',
                          duration: '1 semaine',
                          description: 'Choisissez un cas d\'usage à fort impact mais faible complexité pour démarrer. Définissez des KPIs mesurables (temps gagné, coûts réduits, revenus générés).'
                        },
                        {
                          step: 3,
                          title: 'Choix des outils et solutions',
                          duration: '1-2 semaines',
                          description: 'Évaluez les plateformes disponibles selon vos critères (budget, compétences, intégrations). Privilégiez les solutions no-code pour démarrer rapidement.'
                        },
                        {
                          step: 4,
                          title: 'Déploiement du pilote',
                          duration: '2-4 semaines',
                          description: 'Implémentez votre premier cas d\'usage avec un périmètre limité. Formez une équipe restreinte et testez en conditions réelles.'
                        },
                        {
                          step: 5,
                          title: 'Mesure et optimisation',
                          duration: '2-4 semaines',
                          description: 'Collectez les données de performance, identifiez les points de friction et optimisez votre solution. Validez l\'atteinte de vos KPIs.'
                        },
                        {
                          step: 6,
                          title: 'Scale-up et déploiement étendu',
                          duration: 'Ongoing',
                          description: 'Une fois le pilote validé, déployez progressivement sur d\'autres processus et équipes. Documentez les best practices et créez une roadmap d\'adoption.'
                        }
                      ].map((item) => (
                        <div key={item.step} className="bg-white border border-neutral-200 rounded-lg p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full 
                                          flex items-center justify-center font-bold">
                              {item.step}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-body font-semibold text-neutral-900">
                                  {item.title}
                                </h4>
                                <span className="text-caption text-neutral-500">{item.duration}</span>
                              </div>
                              <p className="text-body-small text-neutral-700 leading-body">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="outils">
                    <h2 className="text-h2 font-semibold text-neutral-900 mb-6 mt-12">
                      Outils recommandés
                    </h2>
                    <p className="text-body text-neutral-900 leading-body mb-6">
                      Voici une sélection d'outils testés et approuvés pour chaque cas d'usage, avec leurs 
                      points forts et tarifs indicatifs :
                    </p>

                    <div className="grid gap-6 mb-8">
                      {[
                        {
                          name: 'ChatGPT Pro',
                          category: 'Assistant IA généraliste',
                          price: '20€/mois',
                          useCases: ['Rédaction', 'Recherche', 'Analyse'],
                          pros: 'Interface intuitive, très polyvalent'
                        },
                        {
                          name: 'Zapier + ChatGPT',
                          category: 'Automatisation workflows',
                          price: '20-50€/mois',
                          useCases: ['Email automation', 'Data sync', 'Notifications'],
                          pros: 'Intégrations nombreuses, no-code'
                        },
                        {
                          name: 'Notion AI',
                          category: 'Gestion documentaire',
                          price: '10€/mois',
                          useCases: ['Knowledge base', 'Documentation', 'Brainstorming'],
                          pros: 'Intégré à Notion, collaboration facile'
                        }
                      ].map((tool, index) => (
                        <div key={index} className="bg-neutral-50 rounded-lg p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-body font-semibold text-neutral-900">{tool.name}</h4>
                            <span className="text-body-small font-medium text-primary-600">{tool.price}</span>
                          </div>
                          <p className="text-body-small text-neutral-600 mb-3">{tool.category}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {tool.useCases.map((useCase, i) => (
                              <span key={i} className="px-2 py-1 bg-white text-caption text-neutral-700 
                                                       rounded border border-neutral-200">
                                {useCase}
                              </span>
                            ))}
                          </div>
                          <p className="text-body-small text-neutral-700">
                            <strong>Avantage :</strong> {tool.pros}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="conclusion">
                    <h2 className="text-h2 font-semibold text-neutral-900 mb-6 mt-12">
                      Conclusion
                    </h2>
                    <p className="text-body text-neutral-900 leading-body mb-6">
                      L'intégration de l'IA dans votre activité n'est plus une option mais une nécessité 
                      compétitive. Les entreprises qui adoptent ces technologies dès 2025 bénéficieront d'un 
                      avantage considérable sur leur marché.
                    </p>
                    <p className="text-body text-neutral-900 leading-body mb-6">
                      Commencez petit, mesurez vos résultats et itérez rapidement. Avec une approche structurée 
                      et les bons outils, vous pouvez transformer votre productivité et libérer du temps pour 
                      vous concentrer sur les activités à forte valeur ajoutée.
                    </p>
                    
                    <div className="bg-success-500/10 border border-success-500/30 rounded-lg p-6 mt-8">
                      <h4 className="text-body font-semibold text-neutral-900 mb-3">
                        Points clés à retenir
                      </h4>
                      <ul className="space-y-2 text-body-small text-neutral-700">
                        <li>• Démarrez avec un projet pilote de 1-2 mois</li>
                        <li>• Priorisez les cas d'usage à fort ROI et faible complexité</li>
                        <li>• Privilégiez les solutions no-code pour une adoption rapide</li>
                        <li>• Mesurez vos KPIs dès le départ</li>
                        <li>• Documentez vos apprentissages pour faciliter le scale-up</li>
                      </ul>
                    </div>
                  </section>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                  <h2 className="text-h2 font-semibold text-neutral-900 mb-6">
                    Questions fréquentes
                  </h2>
                  <FAQAccordion items={articleFAQs} />
                </div>

                {/* CTA Conversion */}
                <div className="bg-primary-50 rounded-lg p-8 mt-16">
                  <h3 className="text-h3 font-semibold text-primary-900 mb-3">
                    Besoin de prompts professionnels pour démarrer ?
                  </h3>
                  <p className="text-body text-primary-700 mb-6">
                    Accédez à notre Collection Ultimate avec 100+ prompts optimisés pour tous vos cas d'usage 
                    (marketing, finance, RH, ops, direction)
                  </p>
                  <a
                    href="https://xuvwh2v32mp8.space.minimax.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 h-14 bg-primary-500 text-white font-semibold 
                             text-body rounded-md hover:bg-primary-600 hover:transform hover:-translate-y-0.5 
                             hover:shadow-md transition-all duration-base"
                  >
                    Découvrir la Collection
                  </a>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="mt-16">
                    <h2 className="text-h2 font-semibold text-neutral-900 mb-8">
                      Articles reliés
                    </h2>
                    <div className="grid tablet:grid-cols-3 gap-6">
                      {relatedArticles.map((relatedArticle) => (
                        <Link
                          key={relatedArticle.id}
                          to={`/${relatedArticle.category}/${relatedArticle.slug}`}
                          className="group bg-white border border-neutral-200 rounded-lg p-4 
                                   hover:border-primary-500 hover:shadow-md transition-all"
                        >
                          <h4 className="text-body-small font-semibold text-neutral-900 mb-2 
                                       group-hover:text-primary-500 transition-colors line-clamp-2">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-caption text-neutral-500">
                            {relatedArticle.readTime} min
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="desktop:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Ad Zone ATF */}
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-label text-neutral-500 mb-2">Publicité</p>
                  <div className="bg-neutral-100 rounded-md flex items-center justify-center h-[600px] 
                                text-neutral-500">
                    AdSense 300×600
                  </div>
                </div>

                {/* Navigation Catégories */}
                <div className="bg-neutral-50 rounded-lg p-6">
                  <h3 className="text-body font-semibold text-neutral-900 mb-4">
                    Catégories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          to={cat.slug}
                          className={`text-body-small transition-colors ${
                            cat.id === category
                              ? 'text-primary-500 font-medium'
                              : 'text-neutral-700 hover:text-primary-500'
                          }`}
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Box */}
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-body font-semibold text-primary-900 mb-3">
                    Newsletter
                  </h3>
                  <p className="text-body-small text-primary-700 mb-4">
                    Recevez nos meilleurs articles chaque semaine
                  </p>
                  <form className="space-y-3"
                        onSubmit={(e) => {
                          e.preventDefault();
                          alert('Merci pour votre inscription !');
                        }}>
                    <input
                      type="email"
                      placeholder="Votre email"
                      required
                      className="w-full px-4 h-12 border border-neutral-200 rounded-md text-body-small 
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button
                      type="submit"
                      className="w-full h-12 bg-primary-500 text-white font-semibold text-body-small 
                               rounded-md hover:bg-primary-600 transition-colors"
                    >
                      S'inscrire
                    </button>
                  </form>
                </div>

                {/* Ad Zone BTF */}
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-label text-neutral-500 mb-2">Publicité</p>
                  <div className="bg-neutral-100 rounded-md flex items-center justify-center h-[250px] 
                                text-neutral-500">
                    AdSense 300×250
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
