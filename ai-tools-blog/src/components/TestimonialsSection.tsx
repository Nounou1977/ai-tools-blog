import React from 'react';

interface TestimonialsSectionProps {
  testimonials: any[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 1,247 entrepreneurs ont transformé leur business avec nos prompts. 
            Découvrez leurs résultats concrets.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Rating Stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Histoires de Succès Réelles
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Success Story 1 */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="text-xl font-bold text-gray-900">Sarah M. - E-commerçant</h4>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="text-sm font-medium text-green-800 mb-2">AVANT :</div>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• 3h par jour pour rédiger du contenu</li>
                  <li>• Descriptions produit génériques</li>
                  <li>• Taux de conversion: 1.2%</li>
                </ul>
                
                <div className="text-sm font-medium text-green-800 mb-2">APRÈS (avec nos prompts) :</div>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• 15 minutes par jour pour du contenu premium</li>
                  <li>• Descriptions qui convertissent 3x plus</li>
                  <li>• Taux de conversion: 3.8% (+217%)</li>
                </ul>
                
                <div className="bg-green-100 rounded-lg p-3">
                  <div className="text-green-800 font-bold text-lg">+217% de conversions en 1 mois</div>
                </div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h4 className="text-xl font-bold text-gray-900">Marc D. - Consultant Marketing</h4>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="text-sm font-medium text-blue-800 mb-2">AVANT :</div>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Créer une stratégie en 2-3 jours</li>
                  <li>• Nombreux consultants coûteux</li>
                  <li>• Clients paient 5-10k€ pour la stratégie</li>
                </ul>
                
                <div className="text-sm font-medium text-blue-800 mb-2">APRÈS (avec nos prompts) :</div>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Stratégie complète en 15 minutes</li>
                  <li>• Plus besoin de sous-traitance</li>
                  <li>• Marge explose (500% d'augmentation)</li>
                </ul>
                
                <div className="bg-blue-100 rounded-lg p-3">
                  <div className="text-blue-800 font-bold text-lg">+500% de marge en 2 mois</div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center space-x-8 space-y-4">
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Sécurisé SSL</span>
          </div>
          
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Garantie 30 jours</span>
          </div>
          
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
            <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Support client 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
