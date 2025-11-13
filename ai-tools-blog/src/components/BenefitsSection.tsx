import React from 'react';

interface BenefitsSectionProps {
  benefits: any[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi ces prompts transforment votre business ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment la science des prompts efficaces peut révolutionner votre productivité 
            et multiplier vos résultats en quelques minutes seulement.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-3xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            La Différence Entre Amateur et Professionnel
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Before */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">❌</span>
                </div>
                <h4 className="text-2xl font-bold text-red-600">AMATEUR</h4>
              </div>
              
              <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                <div className="text-sm font-medium text-red-600 mb-2">Prompt amateur :</div>
                <div className="text-gray-700 italic mb-4">"Crée-moi un slogan"</div>
                <div className="text-sm font-medium text-red-600 mb-2">Résultat :</div>
                <div className="text-gray-600">"Votre slogan - Le meilleur du marché"</div>
                <div className="mt-4 text-sm text-gray-500">Générique, oublié en 2 secondes</div>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  <span>2h de galère pour du contenu moyen</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  <span>Résultats imprévisibles</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  <span>Perte de temps et d'énergie</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center">
              <div className="text-6xl text-blue-500">
                →
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">✅</span>
                </div>
                <h4 className="text-2xl font-bold text-green-600">PROFESSIONNEL</h4>
              </div>
              
              <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <div className="text-sm font-medium text-green-600 mb-2">Prompt professionnel :</div>
                <div className="text-gray-700 text-sm leading-relaxed mb-4">
                  "Expert marketing, crée 10 slogans émotionnels pour [votre business]. 
                  Chaque slogan doit évoquer [bénéfice principal] et inciter à [action]. 
                  Style : [ambiance recherchée]."
                </div>
                <div className="text-sm font-medium text-green-600 mb-2">Résultat :</div>
                <div className="text-gray-600">Slogans qui donnent envie d'agir immédiatement !</div>
                <div className="mt-4 text-sm text-green-600 font-medium">Conversion x10 garantie</div>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span>30 secondes pour du contenu exceptionnel</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span>Résultats reproductibles</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span>Automation complète de votre workflow</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">
              Résultats Réels de Nos Utilisateurs
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">1,247+</div>
                <div className="text-blue-100">Entrepreneurs actifs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Taux de satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">85%</div>
                <div className="text-blue-100">Temps économisé</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">91%</div>
                <div className="text-blue-100">Taux de réussite</div>
              </div>
            </div>
          </div>
        </div>

        {/* Framework Preview */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Framework R.O.L.E.S. : La Science des Prompts Parfaits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { letter: 'R', title: 'Rôle', desc: 'Définir l\'expertise' },
              { letter: 'O', title: 'Objectif', desc: 'Clarifier la mission' },
              { letter: 'L', title: 'Limites', desc: 'Fixer les contraintes' },
              { letter: 'E', title: 'Exemple', desc: 'Guider par l\'exemple' },
              { letter: 'S', title: 'Style', desc: 'Personnaliser le ton' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{item.letter}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">
              Framework testé et utilisé par plus de 1000 entrepreneurs pour créer des prompts qui convertissent.
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Inclus gratuitement dans votre achat
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
