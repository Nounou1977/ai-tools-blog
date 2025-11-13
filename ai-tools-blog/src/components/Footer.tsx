import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { categories } from '../data/content';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre inscription ! Fonctionnalité en cours d\'intégration.');
  };

  return (
    <footer className="bg-white border-t border-neutral-200 mt-24">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-12">
          {/* À Propos */}
          <div>
            <h3 className="text-body font-semibold text-neutral-900 mb-4">
              À Propos
            </h3>
            <p className="text-body-small text-neutral-700 leading-base mb-4">
              Blog AI Pro accompagne les entrepreneurs et freelances dans leur transformation digitale avec l'IA.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-body font-semibold text-neutral-900 mb-4">
              Catégories
            </h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={cat.slug}
                    className="text-body-small text-neutral-700 hover:text-primary-500 transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/faq"
                  className="text-body-small text-neutral-700 hover:text-primary-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/ressources"
                  className="text-body-small text-neutral-700 hover:text-primary-500 transition-colors"
                >
                  Ressources
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-body font-semibold text-neutral-900 mb-4">
              Ressources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/ressources"
                  className="text-body-small text-neutral-700 hover:text-primary-500 transition-colors"
                >
                  Checklists
                </Link>
              </li>
              <li>
                <Link
                  to="/ressources"
                  className="text-body-small text-neutral-700 hover:text-primary-500 transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li>
                <a
                  href="https://xuvwh2v32mp8.space.minimax.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-small text-neutral-700 hover:text-primary-500 transition-colors"
                >
                  Collection Prompts
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-body font-semibold text-neutral-900 mb-4">
              Newsletter
            </h3>
            <p className="text-body-small text-neutral-700 mb-4">
              Recevez nos meilleurs articles IA chaque semaine
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                required
                className="w-full px-4 h-12 border border-neutral-200 rounded-md text-body-small 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                         transition-all duration-fast"
              />
              <button
                type="submit"
                className="w-full h-12 bg-primary-500 text-white font-semibold text-body-small 
                         rounded-md hover:bg-primary-600 transition-colors duration-base"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col tablet:flex-row justify-between items-center space-y-4 tablet:space-y-0">
            <p className="text-caption text-neutral-500">
              © 2025 Blog AI Pro. Tous droits réservés.{' '}
              <a
                href="https://xuvwh2v32mp8.space.minimax.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                Collection Prompts IA
              </a>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-caption text-neutral-500 hover:text-primary-500 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-caption text-neutral-500 hover:text-primary-500 transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-caption text-neutral-500 hover:text-primary-500 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
