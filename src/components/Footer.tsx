
const Footer = () => {
  return (
    <footer className="bg-penseorto-green text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <div className="text-2xl font-bold mb-4">
                Pense<span className="text-black">Orto</span>
              </div>
              <p className="text-gray-100 leading-relaxed">
                Mentoria especializada em ortodontia com 20 anos de experiência no mercado educacional de pós-graduação.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-gray-100 hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-gray-100 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#mentores" className="text-gray-100 hover:text-white transition-colors">
                    Mentores
                  </a>
                </li>
                <li>
                  <a href="#experiencia" className="text-gray-100 hover:text-white transition-colors">
                    Experiência
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-100 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
              <div className="space-y-2 text-gray-100">
                <p>contato@penseorto.com.br</p>
                <p>(47) 99273-1096</p>
                <p>WhatsApp: (47) 99273-1096</p>
                <p>Instagram: @penseorto</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-100 text-sm">
                © 2024 Pense Orto. Todos os direitos reservados.
              </p>
              <p className="text-gray-100 text-sm mt-4 md:mt-0">
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
