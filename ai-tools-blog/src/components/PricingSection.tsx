import React from 'react';

interface PricingSectionProps {
  mainProduct: any;
  onCTAClick: (productId: string) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ mainProduct, onCTAClick }) => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transformez Votre Business avec l'IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obtenez immédiatement 50 prompts professionnels pour révolutionner votre productivité et vos résultats.
          </p>
        </div>

        {/* Single Product Card - Centered */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl p-8 border-2 border-gradient-to-r from-blue-200 to-purple-200 shadow-2xl relative max-w-lg w-full transform hover:scale-105 transition-all duration-300">
            {/* Floating Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-2xl animate-pulse">
                🔥 CHOIX #1 DES ENTREPRENEURS
              </div>
            </div>

            <div className="text-center mb-8 relative z-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                🎯 Collection Ultime
              </h3>
              <p className="text-lg text-gray-700 font-semibold mb-6">
                Le Kit Complet pour Dominer l'IA
              </p>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-blue-100 mb-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {mainProduct.price}€
                </div>
                <div className="text-lg text-gray-600 font-semibold">
                  💎 Paiement unique - Accès à vie
                </div>
                <div className="mt-3 inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  ⚡ Offre limitée - Livraison instantanée
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-blue-100">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-semibold">🚀 50 prompts ChatGPT ultra-performants</span>
              </li>
              <li className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-blue-100">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-semibold">📖 Guide complet format PDF (50+ pages)</span>
              </li>
              <li className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-blue-100">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-semibold">⚡ Framework R.O.L.E.S. exclusif</span>
              </li>
              <li className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-blue-100">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-semibold">🎯 Exemples concrets d'utilisation</span>
              </li>
              <li className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-blue-100">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-semibold">⚡ Livraison instantanée après paiement</span>
              </li>
              <li className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-blue-100">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-semibold">🔄 Mises à jour gratuites à vie</span>
              </li>
            </ul>

            <button
              onClick={() => onCTAClick(mainProduct.id)}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-2xl relative z-10 group overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-center justify-center space-x-3">
                <span className="text-xl">🚀</span>
                <span className="text-lg">Je veux cette Collection Maintenant !</span>
                <span className="text-xl">✨</span>
              </div>
              
              <div className="relative text-sm mt-1 opacity-90">
                {mainProduct.price}€ - Accès instantané garanti
              </div>
            </button>

            <div className="mt-6 text-center text-sm text-gray-600 relative z-10">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Paiement sécurisé
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Téléchargement instantané
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Garantie 30 jours
                </span>
              </div>
              <div className="font-semibold text-green-600">
                🎁 Bonus : +25 prompts Midjourney offerts !
              </div>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-xl px-8 py-4 max-w-md">
            <svg className="w-10 h-10 text-green-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg">Garantie 30 jours</div>
              <div className="text-gray-600 text-sm">Remboursement intégral si non satisfait</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;