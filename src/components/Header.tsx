
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/9a7d0eb1-954b-45bc-83de-bce92dbcaf75.png" 
              alt="Pense Orto Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-300 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('professores')}
              className="text-gray-300 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Professores
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('experiencia')}
              className="text-gray-300 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-300 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-penseorto-yellow transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-penseorto-yellow transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-300 hover:text-penseorto-yellow transition-colors text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('professores')}
                className="text-gray-300 hover:text-penseorto-yellow transition-colors text-left"
              >
                Professores
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-penseorto-yellow transition-colors text-left"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('experiencia')}
                className="text-gray-300 hover:text-penseorto-yellow transition-colors text-left"
              >
                Experiência
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-300 hover:text-penseorto-yellow transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
