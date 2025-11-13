import { Link } from 'react-router-dom';
import { Briefcase, MessageSquare, Users, Wrench, ArrowRight, ExternalLink } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { articles, categories } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  'Briefcase': <Briefcase className="w-12 h-12 text-primary-500" />,
  'MessageSquare': <MessageSquare className="w-12 h-12 text-primary-500" />,
  'Users': <Users className="w-12 h-12 text-primary-500" />,
  'Wrench': <Wrench className="w-12 h-12 text-primary-500" />,
};

export default function HomePage() {
  const recentArticles = articles.slice(0, 6);

  return (
    <div className="page-fade-in">
      {/* Hero Section */}
      <section className="bg-neutral-50 py-24">
        <div className="container-custom text-center">
          <h1 className="text-hero font-bold text-neutral-900 leading-tight mb-6 
                       tablet:text-[56px] mobile:text-[40px]">
            Maîtrisez l'IA pour transformer votre business
          </h1>
          <p className="text-body-large text-neutral-700 leading-body max-w-3xl mx-auto mb-8">
            Guides pratiques, prompts professionnels et stratégies concrètes pour entrepreneurs et freelances
          </p>
          <Link
            to="/ia-business"
            className="inline-flex items-center px-8 h-14 bg-primary-500 text-white font-semibold 
                     text-body rounded-md hover:bg-primary-600 hover:transform hover:-translate-y-0.5 
                     hover:scale-105 hover:shadow-md transition-all duration-base"
          >
            Découvrir les articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Intro Blog */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="grid tablet:grid-cols-2 gap-8">
            <div>
              <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
                L'IA en 2025 : Opportunités business
              </h2>
              <p className="text-body text-neutral-700 leading-body">
                L'intelligence artificielle transforme radicalement le paysage professionnel. Avec une croissance de 44% des tarifs freelance IA et une adoption massive dans les PME, c'est le moment d'intégrer ces technologies dans votre activité.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold text-neutral-900 mb-4">
                Nos thématiques
              </h3>
              <p className="text-body text-neutral-700 leading-body">
                Nous couvrons tous les aspects de l'IA professionnelle : stratégies business, prompts optimisés, opportunités freelance et comparatifs d'outils pour vous accompagner dans votre transformation digitale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-h2 font-semibold text-neutral-900 text-center mb-12">
            Explorez nos catégories
          </h2>
          <div className="grid tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.slug}
                className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-md 
                         hover:transform hover:-translate-y-1 hover:scale-105 
                         transition-all duration-base"
              >
                <div className="mb-4">
                  {iconMap[category.icon]}
                </div>
                <h3 className="text-h3 font-semibold text-neutral-900 mb-3 
                             group-hover:text-primary-500 transition-colors">
                  {category.title}
                </h3>
                <p className="text-body-small text-neutral-700 leading-base">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Récents */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-h2 font-semibold text-neutral-900">
              Articles récents
            </h2>
            <Link
              to="/ia-business"
              className="text-body-small font-medium text-primary-500 hover:text-primary-600 
                       flex items-center transition-colors"
            >
              Voir tous les articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid tablet:grid-cols-2 desktop:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Site Vente */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-lg p-12 flex flex-col desktop:flex-row 
                        items-center justify-between">
            <div className="mb-6 desktop:mb-0 desktop:mr-8">
              <h2 className="text-h2 font-semibold text-primary-900 mb-3">
                Collection Ultimate : 100+ Prompts IA
              </h2>
              <p className="text-body text-primary-700">
                Accédez à notre collection complète de prompts professionnels pour booster votre productivité
              </p>
            </div>
            <a
              href="https://xuvwh2v32mp8.space.minimax.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center px-8 h-14 bg-primary-500 
                       text-white font-semibold text-body rounded-md hover:bg-primary-600 
                       hover:transform hover:-translate-y-0.5 hover:shadow-md 
                       transition-all duration-base"
            >
              Découvrir la collection
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-h2 font-semibold text-neutral-900 mb-4">
            Restez informé des dernières tendances IA
          </h2>
          <p className="text-body text-neutral-700 mb-8">
            Recevez chaque semaine nos meilleurs articles, guides et ressources directement dans votre boîte mail
          </p>
          <form className="flex flex-col tablet:flex-row gap-4 max-w-xl mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Merci pour votre inscription !');
                }}>
            <input
              type="email"
              placeholder="Votre adresse email"
              required
              className="flex-1 px-4 h-14 border border-neutral-200 rounded-md text-body-small 
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 h-14 bg-primary-500 text-white font-semibold text-body rounded-md 
                       hover:bg-primary-600 transition-colors duration-base"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
