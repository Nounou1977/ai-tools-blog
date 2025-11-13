import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
    tags?: string[];
  };
  ogType?: 'website' | 'article';
}

export function useSEO(props: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = `${props.title} | Blog AI Pro`;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta
    updateMeta('description', props.description);
    if (props.keywords) {
      updateMeta('keywords', props.keywords);
    }

    // Open Graph
    updateMeta('og:title', props.title, true);
    updateMeta('og:description', props.description, true);
    updateMeta('og:type', props.ogType || 'website', true);
    updateMeta('og:url', `https://qg8ujhoq49tk.space.minimax.io${location.pathname}`, true);
    updateMeta('og:site_name', 'Blog AI Pro', true);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', props.title);
    updateMeta('twitter:description', props.description);

    // Article specific
    if (props.article) {
      updateMeta('article:published_time', props.article.publishedTime, true);
      if (props.article.modifiedTime) {
        updateMeta('article:modified_time', props.article.modifiedTime, true);
      }
      updateMeta('article:author', props.article.author, true);
      updateMeta('article:section', props.article.section, true);
      if (props.article.tags) {
        props.article.tags.forEach((tag, index) => {
          updateMeta(`article:tag`, tag, true);
        });
      }
    }

    // Schema.org JSON-LD
    const updateSchema = () => {
      let script = document.querySelector('script[type="application/ld+json"]#schema-data');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', 'schema-data');
        document.head.appendChild(script);
      }

      const baseSchema = {
        '@context': 'https://schema.org',
        '@type': props.article ? 'Article' : 'WebSite',
        name: props.title,
        description: props.description,
        url: `https://qg8ujhoq49tk.space.minimax.io${location.pathname}`,
        publisher: {
          '@type': 'Organization',
          name: 'Blog AI Pro',
          url: 'https://qg8ujhoq49tk.space.minimax.io'
        }
      };

      if (props.article) {
        Object.assign(baseSchema, {
          headline: props.title,
          datePublished: props.article.publishedTime,
          dateModified: props.article.modifiedTime || props.article.publishedTime,
          author: {
            '@type': 'Person',
            name: props.article.author
          },
          articleSection: props.article.section,
          keywords: props.article.tags?.join(', ')
        });
      }

      script.textContent = JSON.stringify(baseSchema);
    };

    updateSchema();

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://qg8ujhoq49tk.space.minimax.io${location.pathname}`);

  }, [props, location]);
}
