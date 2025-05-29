
import { CheckCircle, Users, Award, Target } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver({ threshold: 0.2 });

  const features = [
    {
      icon: Users,
      title: "Metodologia Comprovada",
      description: "20 anos de experiência no desenvolvimento de metodologias inovadoras para o ensino de ortodontia."
    },
    {
      icon: Award,
      title: "Professores Especialistas",
      description: "Time de professores com vasta experiência prática e acadêmica, reconhecidos no mercado brasileiro."
    },
    {
      icon: Target,
      title: "Foco no Resultado",
      description: "Mentoria personalizada que visa formar profissionais de excelência com capacidade técnica diferenciada."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-1000 ${
                titleVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Sobre a <span className="text-penseorto-yellow">Pense Orto</span>
            </h2>
            
            <div 
              ref={contentRef}
              className={`transition-all duration-1000 delay-300 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                A Pense Orto nasceu da paixão pelo ensino e da vontade de transformar a ortodontia brasileira. 
                Com 20 anos de experiência no mercado educacional de pós-graduação, desenvolvemos uma metodologia 
                única que combina teoria sólida com prática intensiva.
              </p>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Nossa missão é formar ortodontistas de excelência, capazes de transformar sorrisos e vidas 
                através de técnicas modernas e tratamentos eficazes.
              </p>
            </div>
          </div>

          <div 
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform transition-all duration-700 ${
                  cardsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <feature.icon className="text-penseorto-yellow mb-6" size={48} />
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 delay-1000 ${
            cardsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que escolher a <span className="text-penseorto-yellow">Pense Orto?</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Metodologia testada e aprovada por centenas de alunos",
                "Professores com experiência real de clínica e mercado",
                "Material didático atualizado com as últimas tendências",
                "Suporte contínuo durante e após a formação",
                "Rede de networking com outros profissionais",
                "Certificação reconhecida no mercado"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="text-penseorto-yellow flex-shrink-0" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
