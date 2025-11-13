import React from 'react';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              50 Prompts IA
            </div>
            <div className="ml-2 text-sm text-gray-500 hidden sm:block">
              Expert en Intelligence Artificielle
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Fonctionnalités
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              Témoignages
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Tarifs
            </a>
            <button
              onClick={onCTAClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Acheter Maintenant
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onCTAClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Acheter
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
