
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <div className="text-2xl font-bold mb-4">
                Pense<span className="text-penseorto-yellow">Orto</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Mentoria especializada em ortodontia com 20 anos de experiência no mercado educacional de pós-graduação.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-penseorto-yellow">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-gray-400 hover:text-penseorto-yellow transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-penseorto-yellow transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#professores" className="text-gray-400 hover:text-penseorto-yellow transition-colors">
                    Professores
                  </a>
                </li>
                <li>
                  <a href="#experiencia" className="text-gray-400 hover:text-penseorto-yellow transition-colors">
                    Experiência
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-penseorto-yellow transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-penseorto-yellow">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>contato@penseorto.com.br</p>
                <p>(11) 91234-5678</p>
                <p>WhatsApp: (11) 98765-4321</p>
                <p>Instagram: @penseorto</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Pense Orto. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                Mentoria especializada em ortodontia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
