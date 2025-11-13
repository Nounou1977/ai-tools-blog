export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  date: string;
  author: string;
  readTime: number;
  image?: string;
  tags?: string[];
}

export type Category = 'ia-business' | 'prompts-chatgpt' | 'freelance-ia' | 'outils-ia';

export interface CategoryInfo {
  id: Category;
  title: string;
  description: string;
  slug: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'checklist' | 'template' | 'guide' | 'link';
  url?: string;
  downloadUrl?: string;
}
