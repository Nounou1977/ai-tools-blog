import { resources } from '../data/content';
import { ChevronRight, Download, ExternalLink, FileText, CheckSquare, BookOpen } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'checklist': <CheckSquare className="w-8 h-8 text-primary-500" />,
  'template': <FileText className="w-8 h-8 text-primary-500" />,
  'guide': <BookOpen className="w-8 h-8 text-primary-500" />,
  'link': <ExternalLink className="w-8 h-8 text-primary-500" />,
};

export default function ResourcesPage() {
  const handleDownload = (resource: typeof resources[0]) => {
    if (resource.downloadUrl) {
      alert(`Téléchargement de ${resource.title}. Fonctionnalité en cours d'intégration.`);
    } else if (resource.url) {
      window.open(resource.url, '_blank');
    }
  };

  const checklists = resources.filter((r) => r.type === 'checklist');
  const templates = resources.filter((r) => r.type === 'template');
  const guides = resources.filter((r) => r.type === 'guide');
  const links = resources.filter((r) => r.type === 'link');

  return (
    <div className="page-fade-in">
      {/* Page Header */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-caption text-neutral-500 mb-4">
            <a href="/" className="hover:text-primary-500 transition-colors">Accueil</a>
            <ChevronRight size={14} />
            <span className="text-neutral-900">Ressources</span>
          </nav>

          <h1 className="text-h1 font-bold text-neutral-900 mb-4">
            Ressources gratuites
          </h1>
          <p className="text-body-large text-neutral-700 leading-body">
            Téléchargez nos checklists, templates et guides pour accélérer votre transformation IA
          </p>
        </div>
      </section>

      {/* Checklists */}
      {checklists.length > 0 && (
        <section className="py-16">
          <div className="container-custom max-w-4xl">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-8">
              Checklists
            </h2>
            <div className="grid tablet:grid-cols-2 gap-6">
              {checklists.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {iconMap[resource.type]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-body font-semibold text-neutral-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-body-small text-neutral-700 mb-4">
                        {resource.description}
                      </p>
                      <button
                        onClick={() => handleDownload(resource)}
                        className="inline-flex items-center text-body-small font-medium text-primary-500 
                                 hover:text-primary-600 transition-colors"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Templates */}
      {templates.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-8">
              Templates
            </h2>
            <div className="grid tablet:grid-cols-2 gap-6">
              {templates.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {iconMap[resource.type]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-body font-semibold text-neutral-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-body-small text-neutral-700 mb-4">
                        {resource.description}
                      </p>
                      <button
                        onClick={() => handleDownload(resource)}
                        className="inline-flex items-center text-body-small font-medium text-primary-500 
                                 hover:text-primary-600 transition-colors"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Guides */}
      {guides.length > 0 && (
        <section className="py-16">
          <div className="container-custom max-w-4xl">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-8">
              Guides
            </h2>
            <div className="grid tablet:grid-cols-2 gap-6">
              {guides.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {iconMap[resource.type]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-body font-semibold text-neutral-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-body-small text-neutral-700 mb-4">
                        {resource.description}
                      </p>
                      <button
                        onClick={() => handleDownload(resource)}
                        className="inline-flex items-center text-body-small font-medium text-primary-500 
                                 hover:text-primary-600 transition-colors"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Liens Utiles */}
      {links.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-h2 font-semibold text-neutral-900 mb-8">
              Liens utiles
            </h2>
            <div className="grid tablet:grid-cols-2 gap-6">
              {links.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {iconMap[resource.type]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-body font-semibold text-neutral-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-body-small text-neutral-700 mb-4">
                        {resource.description}
                      </p>
                      <button
                        onClick={() => handleDownload(resource)}
                        className="inline-flex items-center text-body-small font-medium text-primary-500 
                                 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visiter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Collection */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-primary-50 rounded-lg p-12 text-center">
            <h2 className="text-h2 font-semibold text-primary-900 mb-4">
              Besoin de plus de ressources ?
            </h2>
            <p className="text-body text-primary-700 mb-8 max-w-2xl mx-auto">
              Découvrez notre Collection Ultimate avec 100+ prompts professionnels, templates et guides avancés
            </p>
            <a
              href="https://xuvwh2v32mp8.space.minimax.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 h-14 bg-primary-500 text-white font-semibold 
                       text-body rounded-md hover:bg-primary-600 hover:transform hover:-translate-y-0.5 
                       hover:shadow-md transition-all duration-base"
            >
              Voir la Collection Ultimate
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
