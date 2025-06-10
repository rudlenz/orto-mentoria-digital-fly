
import { Mail, Phone, MessageCircle, ArrowRight, Instagram } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você implementaria o envio do formulário
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Entre em <span className="text-penseorto-green">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar sua carreira em ortodontia? Entre em contato conosco e descubra como nossa mentoria pode acelerar seu sucesso profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-black mb-8">Fale Conosco</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-penseorto-green rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Email</h4>
                    <p className="text-gray-600">contato@penseorto.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-penseorto-green rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Telefone</h4>
                    <p className="text-gray-600">(47) 99273-1096</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-penseorto-green rounded-lg flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">WhatsApp</h4>
                    <p className="text-gray-600">(47) 99273-1096</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-penseorto-green rounded-lg flex items-center justify-center">
                    <Instagram className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Instagram</h4>
                    <p className="text-gray-600">@penseorto</p>
                  </div>
                </div>
              </div>

              <div className="bg-penseorto-green rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-black mb-4">Por que escolher nossa mentoria?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-black">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Acompanhamento personalizado</span>
                  </li>
                  <li className="flex items-center gap-3 text-black">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>20 anos de experiência comprovada</span>
                  </li>
                  <li className="flex items-center gap-3 text-black">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Metodologia exclusiva</span>
                  </li>
                  <li className="flex items-center gap-3 text-black">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Suporte durante toda a jornada</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-black mb-6">Solicite Informações</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-penseorto-green focus:border-penseorto-green transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-penseorto-green focus:border-penseorto-green transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-penseorto-green focus:border-penseorto-green transition-colors"
                      placeholder="(47) 99273-1096"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-penseorto-green focus:border-penseorto-green transition-colors resize-vertical"
                      placeholder="Conte-nos sobre seu interesse na mentoria..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-penseorto-gray transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Enviar Mensagem
                    <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
