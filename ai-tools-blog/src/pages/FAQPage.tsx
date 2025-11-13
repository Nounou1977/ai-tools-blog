import FAQAccordion from '../components/FAQAccordion';
import { faqs } from '../data/content';
import { ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const faqsByCategory = filteredFAQs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof faqs>);

  return (
    <div className="page-fade-in">
      {/* Page Header */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-caption text-neutral-500 mb-4">
            <a href="/" className="hover:text-primary-500 transition-colors">Accueil</a>
            <ChevronRight size={14} />
            <span className="text-neutral-900">FAQ</span>
          </nav>

          <h1 className="text-h1 font-bold text-neutral-900 mb-4">
            Questions fréquentes
          </h1>
          <p className="text-body-large text-neutral-700 leading-body mb-8">
            Trouvez rapidement des réponses à vos questions sur l'IA, les prompts, le freelancing et les outils
          </p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500" size={20} />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 h-14 border border-neutral-200 rounded-md text-body-small 
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          {Object.keys(faqsByCategory).length === 0 ? (
            <p className="text-center text-body text-neutral-500">
              Aucune question trouvée pour votre recherche
            </p>
          ) : (
            <div className="space-y-12">
              {Object.entries(faqsByCategory).map(([category, categoryFAQs]) => (
                <div key={category}>
                  <h2 className="text-h2 font-semibold text-neutral-900 mb-6">
                    {category}
                  </h2>
                  <FAQAccordion items={categoryFAQs} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-body text-neutral-700 mb-8">
            Explorez nos ressources complètes ou découvrez notre collection de prompts professionnels
          </p>
          <div className="flex flex-col tablet:flex-row gap-4 justify-center">
            <a
              href="/ressources"
              className="inline-flex items-center justify-center px-8 h-14 bg-white border-2 
                       border-neutral-200 text-neutral-700 font-semibold text-body rounded-md 
                       hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-base"
            >
              Voir les ressources
            </a>
            <a
              href="https://xuvwh2v32mp8.space.minimax.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 h-14 bg-primary-500 
                       text-white font-semibold text-body rounded-md hover:bg-primary-600 
                       hover:transform hover:-translate-y-0.5 hover:shadow-md 
                       transition-all duration-base"
            >
              Collection Prompts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
