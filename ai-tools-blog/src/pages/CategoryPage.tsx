import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { articles, categories } from '../data/content';
import { ChevronRight } from 'lucide-react';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  
  const categoryInfo = categories.find((cat) => cat.id === category);
  const categoryArticles = articles.filter((article) => article.category === category);

  if (!categoryInfo) {
    return <div className="container-custom py-16">Catégorie non trouvée</div>;
  }

  return (
    <div className="page-fade-in">
      {/* Page Header */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-caption text-neutral-500 mb-4">
            <a href="/" className="hover:text-primary-500 transition-colors">Accueil</a>
            <ChevronRight size={14} />
            <span className="text-neutral-900">{categoryInfo.title}</span>
          </nav>

          <h1 className="text-h1 font-bold text-neutral-900 mb-4">
            {categoryInfo.title}
          </h1>
          <p className="text-body-large text-neutral-700 leading-body">
            {categoryInfo.description}
          </p>
        </div>
      </section>

      {/* Articles Grid + Sidebar */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid desktop:grid-cols-12 gap-12">
            {/* Main Content - Articles Grid */}
            <div className="desktop:col-span-8">
              <div className="grid tablet:grid-cols-2 gap-8">
                {categoryArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="desktop:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Ad Zone */}
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-label text-neutral-500 mb-2">Publicité</p>
                  <div className="bg-neutral-100 rounded-md flex items-center justify-center h-[600px] text-neutral-500">
                    AdSense 300x600
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
                        <a
                          href={cat.slug}
                          className={`text-body-small transition-colors ${
                            cat.id === category
                              ? 'text-primary-500 font-medium'
                              : 'text-neutral-700 hover:text-primary-500'
                          }`}
                        >
                          {cat.title}
                        </a>
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
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
