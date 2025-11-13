import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Clock, Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/${article.category}/${article.slug}`}
      className="group block bg-white rounded-lg p-8 shadow-sm hover:shadow-md 
               hover:transform hover:-translate-y-1 hover:scale-105 
               transition-all duration-base"
    >
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 
                       text-label font-medium rounded-md">
          {article.category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-h3 font-semibold text-neutral-900 leading-heading mb-4 
                   group-hover:text-primary-500 transition-colors duration-fast">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-body-small text-neutral-700 leading-base mb-4 line-clamp-3">
        {article.excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center space-x-4 text-caption text-neutral-500">
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
          <span>{article.readTime} min</span>
        </div>
      </div>
    </Link>
  );
}
