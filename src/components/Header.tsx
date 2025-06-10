
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

  const headerOptions = [
    {label: 'Início', scrollTo: 'inicio'},
    {label: 'Sobre', scrollTo: 'sobre'},
    {label: 'Mentores', scrollTo: 'mentores'},
    {label: 'Portfólio', scrollTo: 'portfolio'},
    {label: 'Experiência', scrollTo: 'experiencia'},
    {label: 'Contato', scrollTo: 'contato'}
  ]

  return (
    <header className="fixed top-0 w-full bg-[#9acacc99] backdrop-blur-sm z-50 border-b border-gray-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div 
              className="w-[280px] h-[70px] bg-[url('/lovable-uploads/d939a6ff-347e-4876-86ec-9a1479243217.png')] bg-contain bg-no-repeat bg-center">
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {headerOptions.map((headerOption, index) => {
              return(
              <button 
                key={index}
                onClick={() => scrollToSection(headerOption.scrollTo)}
                style={{textTransform: 'uppercase', letterSpacing: '0.8px'}}
                className="text-black hover:text-gray-700 transition-colors duration-300 font-semibold"
              >
                {headerOption.label}
              </button>
              )
            })}
          </nav>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-black hover:text-gray-700 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-300">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-black hover:text-gray-700 transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-black hover:text-gray-700 transition-colors text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('mentores')}
                className="text-black hover:text-gray-700 transition-colors text-left"
              >
                Mentores
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-black hover:text-gray-700 transition-colors text-left"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('experiencia')}
                className="text-black hover:text-gray-700 transition-colors text-left"
              >
                Experiência
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-black hover:text-gray-700 transition-colors text-left"
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
