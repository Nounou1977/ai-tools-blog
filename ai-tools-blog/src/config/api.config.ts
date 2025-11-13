// Configuration API modulaire pour Supabase et Stripe
// Ce fichier permet de basculer facilement entre test et production

export const API_CONFIG = {
  // Configuration Supabase
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || '',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  },

  // Configuration Stripe
  stripe: {
    // Cle publique Stripe (peut etre test ou production)
    publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
    
    // Mode de fonctionnement
    mode: import.meta.env.VITE_STRIPE_MODE || 'test', // 'test' ou 'live'
  },

  // Configuration produit
  product: {
    id: '50-prompts-ia-professionnels',
    nom: '50 Prompts IA Professionnels',
    prix: 29.00,
    devise: 'EUR',
    description: 'Guide complet de 50 pages + 50 prompts ChatGPT + 25 prompts Midjourney',
  },

  // Configuration emails automatiques
  emails: {
    from: 'noreply@votredomaine.com',
    support: 'support@votredomaine.com',
  },

  // URLs
  urls: {
    base: import.meta.env.VITE_BASE_URL || 'http://localhost:5173',
    success: '/confirmation',
    cancel: '/checkout?cancelled=true',
  },
};

// Validation de la configuration
export const validateConfig = () => {
  const errors: string[] = [];

  if (!API_CONFIG.supabase.url) {
    errors.push('VITE_SUPABASE_URL manquante');
  }

  if (!API_CONFIG.supabase.anonKey) {
    errors.push('VITE_SUPABASE_ANON_KEY manquante');
  }

  if (!API_CONFIG.stripe.publishableKey) {
    errors.push('VITE_STRIPE_PUBLISHABLE_KEY manquante (optionnel en developpement)');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
