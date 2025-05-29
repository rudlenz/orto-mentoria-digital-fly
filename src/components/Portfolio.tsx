
import { Monitor, Users, FileText, Clock, Calendar, User } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Portfolio = () => {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useIntersectionObserver({ threshold: 0.3 });

  const services = [
    {
      icon: Monitor,
      title: "Mentoria Completa Online",
      duration: "12 semanas",
      format: "2 módulos semanais de 1 hora cada",
      description: "Divide em 24 módulos os mais importantes temas que abordam a ortodontia desde ortopedia, aparelhos fixos autoligados e convencionais, até alinhadores, além de planejamento de casos.",
      features: [
        "24 módulos completos",
        "Ortopedia funcional",
        "Aparelhos fixos autoligados",
        "Aparelhos convencionais",
        "Alinhadores ortodônticos",
        "Planejamento de casos"
      ]
    },
    {
      icon: Users,
      title: "Mentoria Presencial",
      duration: "2 dias intensivos",
      format: "8 horas de aula por dia",
      description: "Imersão de 2 dias para abordar os mais importantes temas da ortodontia atual, passando por aparelhos fixos autoligados e convencionais, alinhadores e planejamento de casos clínicos.",
      features: [
        "Imersão completa",
        "Aparelhos autoligados",
        "Aparelhos convencionais",
        "Alinhadores ortodônticos",
        "Casos clínicos práticos",
        "Networking profissional"
      ]
    },
    {
      icon: FileText,
      title: "Planejamentos Online",
      duration: "1 hora",
      format: "Sessão individualizada",
      description: "Planejamentos individualizados com montagem de diagnósticos e detalhamento do plano de tratamento.",
      features: [
        "Análise individualizada",
        "Montagem de diagnósticos",
        "Plano de tratamento detalhado",
        "Orientações específicas",
        "Suporte personalizado",
        "Revisão de casos"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-1000 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Nosso <span className="text-penseorto-yellow">Portfólio</span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Oferecemos três modalidades de mentoria em ortodontia, cada uma adaptada às suas necessidades e disponibilidade.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 flex flex-col transition-all duration-700 ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-penseorto-yellow to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <service.icon size={32} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
                  
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-penseorto-yellow" />
                      <span className="text-gray-600 text-sm">{service.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">{service.format}</p>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{service.description}</p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-black">Inclui:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-penseorto-yellow rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div 
            ref={ctaRef}
            className={`mt-16 bg-gradient-to-r from-penseorto-yellow to-yellow-400 rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Pronto para Transformar sua Carreira?
            </h3>
            <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
              Escolha a modalidade que melhor se adapta ao seu perfil e comece sua jornada de especialização em ortodontia com os melhores professores do Brasil.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300">
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
