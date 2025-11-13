import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';

interface ProductData {
  main_product: any;
  upsell_products: any[];
  benefits: any[];
  testimonials: any[];
  stats: any;
}

function App() {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);

  // Données de fallback en cas d'erreur
  const fallbackData: ProductData = {
    main_product: {
      id: "50-prompts-ia",
      name: "50 Prompts IA Professionnels",
      subtitle: "Collection complète pour entrepreneurs, marketeurs et créateurs de contenu",
      price: 29.0,
      currency: "EUR",
      original_price: null,
      description: "Guide complet de 50 pages avec 50 prompts ChatGPT + 25 prompts Midjourney testés pendant 6 mois",
      features: {
        pages: 50,
        chatgpt_prompts: 50,
        midjourney_prompts: 25,
        business_prompts: 10,
        marketing_prompts: 10,
        content_creation_prompts: 10,
        seo_prompts: 10,
        strategy_prompts: 10,
        instant_delivery: true,
        bonus_content: "Framework R.O.L.E.S. + Cas d'études concrets"
      },
      cta_text: "Accéder aux Prompts Maintenant",
      gumroad_url: "https://aiexperthub.gumroad.com/l/tnpyxi"
    },
    upsell_products: [
      {
        id: "prompts-marketing",
        name: "50 Prompts Marketing IA",
        subtitle: "Collection spécialisée pour l'automatisation des campagnes",
        price: 19.0,
        currency: "EUR",
        original_price: 39.0,
        description: "50 prompts marketing optimisés pour funnels, campagnes et conversion",
        features: {
          prompts_count: 50,
          focus: "Marketing & Vente",
          advanced_techniques: true,
          automation_ready: true
        },
        cta_text: "Obtenir les Prompts Marketing",
        gumroad_url: "https://gumroad.com/l/50-prompts-marketing-automation"
      },
      {
        id: "bundle-complete",
        name: "Pack Complet 100 Prompts",
        subtitle: "Bundle ultime pour automatiser votre business",
        price: 39.0,
        currency: "EUR",
        original_price: 48.0,
        description: "50 Prompts IA + 50 Prompts Marketing = Solution complète",
        features: {
          total_prompts: 100,
          savings: "19€",
          complete_system: true,
          exclusive_bonuses: true
        },
        cta_text: "Profiter du Bundle Complet",
        gumroad_url: "https://gumroad.com/l/complete-100-prompts-automation-system"
      },
      {
        id: "formation-mastery",
        name: "Formation ChatGPT Mastery",
        subtitle: "Formation complète de 4h pour maîtriser ChatGPT",
        price: 99.0,
        currency: "EUR",
        description: "Formation avancée + techniques d'automatisation business",
        features: {
          duration: "4h",
          level: "Expert",
          includes: "Advanced techniques, business automation, expert support",
          guarantee: "30 jours satisfait ou remboursé"
        },
        cta_text: "Découvrir la Formation",
        gumroad_url: "https://gumroad.com/l/chatgpt-mastery-formation-complete"
      }
    ],
    benefits: [
      {
        icon: "⚡",
        title: "Résultat Immédiat",
        description: "Utilisez vos premiers prompts dès aujourd'hui et voyez les résultats en quelques minutes"
      },
      {
        icon: "🎯",
        title: "Testé & Optimisé",
        description: "Chaque prompt a été testé pendant 6 mois avec de vrais entrepreneurs"
      },
      {
        icon: "📊",
        title: "Système Complet",
        description: "Framework R.O.L.E.S. + 75 prompts = Solution complète pour votre business"
      },
      {
        icon: "🚀",
        title: "Automatisation",
        description: "Transformez ChatGPT en assistant expert pour automatiser vos tâches"
      }
    ],
    testimonials: [
      {
        name: "Sarah M.",
        role: "E-commerçant",
        text: "Ces prompts ont révolutionné ma création de contenu. Je génère maintenant des descriptions produit qui convertissent 3x plus en 30 secondes.",
        rating: 5
      },
      {
        name: "Marc D.",
        role: "Consultant Marketing",
        text: "Le framework R.O.L.E.S. alone vaut le prix d'achat. J'ai économisé plus de 20h de travail par semaine.",
        rating: 5
      },
      {
        name: "Julie L.",
        role: "Coach Business",
        text: "Mes clients utilisent maintenant ces prompts pour leurs stratégies. Les résultats sont spectaculaires !",
        rating: 5
      }
    ],
    stats: {
      users: "1,247+",
      satisfaction: "98%",
      time_saved: "85%",
      success_rate: "91%"
    }
  };

  useEffect(() => {
    // Charger les données des produits
    fetch('/data/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Impossible de charger les données');
        }
        return response.json();
      })
      .then(data => {
        setProductData(data);
        setLoading(false);
      })
      .catch(error => {
        console.warn('Erreur chargement données, utilisation des données de fallback:', error);
        setProductData(fallbackData);
        setLoading(false);
      });
  }, []);

  const handleCTAClick = (productId: string) => {
    // Track analytics event
    fetch('/functions/v1/analytics-tracker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'track_event',
        eventType: 'cta_click',
        eventData: { product_id: productId }
      })
    }).catch(() => {}); // Ignore errors in analytics tracking

    // Rediriger vers Gumroad ou page de paiement
    const product = productData?.main_product || productData?.upsell_products?.find(p => p.id === productId);
    if (product && product.gumroad_url) {
      window.open(product.gumroad_url, '_blank');
    } else {
      // Fallback: rediriger vers une page de contact ou Gumroad général
      alert('Merci pour votre intérêt ! La page de paiement sera bientôt disponible. Contactez-nous pour être notifié.');
      // window.open('https://gumroad.com/l/50-prompts-ia-professional-collection', '_blank');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-gray-600">Chargement...</div>
        </div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-red-500 mb-4">Erreur de chargement</div>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onCTAClick={() => handleCTAClick(productData.main_product.id)} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection 
          product={productData.main_product}
          onCTAClick={() => handleCTAClick(productData.main_product.id)}
        />

        {/* Benefits Section */}
        <BenefitsSection benefits={productData.benefits} />

        {/* Testimonials Section */}
        <TestimonialsSection testimonials={productData.testimonials} />

        {/* Pricing Section */}
        <PricingSection 
          mainProduct={productData.main_product}
          onCTAClick={handleCTAClick}
        />

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Transformer Votre Business ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez les 1,247+ entrepreneurs qui ont déjà automatisé leur succès avec nos prompts IA.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">{productData.stats.users}</div>
                  <div className="text-sm opacity-90">Utilisateurs actifs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">{productData.stats.satisfaction}</div>
                  <div className="text-sm opacity-90">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">{productData.stats.time_saved}</div>
                  <div className="text-sm opacity-90">Temps économisé</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">{productData.stats.success_rate}</div>
                  <div className="text-sm opacity-90">Taux de réussite</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCTAClick(productData.main_product.id)}
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg mb-6"
            >
              🚀 Je veux mes 50 prompts IA maintenant !
            </button>

            <div className="text-sm opacity-75">
              ⚡ Livraison instantanée • 🛡️ Garantie 30 jours • 🔒 Paiement sécurisé
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-blue-400 mb-4">50 Prompts IA</div>
              <p className="text-gray-400 mb-6 max-w-md">
                La collection la plus complète de prompts IA professionnels pour transformer 
                votre business et automatiser votre succès.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Témoignages</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="/guide" className="text-gray-400 hover:text-white transition-colors">Guide gratuit</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/refund" className="text-gray-400 hover:text-white transition-colors">Remboursement</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 50 Prompts IA. Tous droits réservés. 
              <span className="ml-4">Propulsé par MiniMax Agent</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
