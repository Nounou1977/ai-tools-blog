import React from 'react';

interface HeroSectionProps {
  product: any;
  onCTAClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ product, onCTAClick }) => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="mb-12 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Plus de 1,247 entrepreneurs utilisent ces prompts
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformez ChatGPT en{' '}
              <span className="text-blue-600">Assistant Expert</span>{' '}
              avec 50 Prompts IA
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Collection complète de prompts testés et optimisés pendant 6 mois. 
              Passez de l'amateur au professionnel en 30 secondes avec les bons prompts.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Guide complet 50 pages</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">50 prompts ChatGPT + 25 Midjourney</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Framework R.O.L.E.S. inclus</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Livraison immédiate</span>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-500 line-through">Valeur réelle: 147€</div>
                  <div className="text-3xl font-bold text-gray-900">{product.price}€</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">-80%</div>
                  <div className="text-sm text-gray-500">Économie</div>
                </div>
              </div>
              
              <button
                onClick={onCTAClick}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                🚀 {product.cta_text}
              </button>
              
              <div className="flex items-center justify-center mt-3 text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Paiement sécurisé • Garantie 30 jours
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center md:justify-start space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>4.9/5 (312 avis)</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Garantie satisfait ou remboursé</span>
              </div>
            </div>
          </div>

          {/* Right Column - Video/Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl h-64 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-2xl font-bold">50 Prompts IA</div>
                  <div className="text-lg">Professionnels</div>
                  <div className="text-sm mt-2">Collection Ultime</div>
                </div>
              </div>
              <div className="hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl h-64 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-2xl font-bold">50 Prompts IA</div>
                  <div className="text-lg">Professionnels</div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-sm text-gray-600">Temps économisé</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
