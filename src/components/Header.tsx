
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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black">
            Pense<span className="text-penseorto-yellow">Orto</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('professores')}
              className="text-gray-700 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Professores
            </button>
            <button 
              onClick={() => scrollToSection('experiencia')}
              className="text-gray-700 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-penseorto-yellow transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-penseorto-yellow transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-penseorto-yellow transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-penseorto-yellow transition-colors text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('professores')}
                className="text-gray-700 hover:text-penseorto-yellow transition-colors text-left"
              >
                Professores
              </button>
              <button 
                onClick={() => scrollToSection('experiencia')}
                className="text-gray-700 hover:text-penseorto-yellow transition-colors text-left"
              >
                Experiência
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-penseorto-yellow transition-colors text-left"
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
