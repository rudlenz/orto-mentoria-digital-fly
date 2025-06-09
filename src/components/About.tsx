
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
      title: "Mentores Especialistas",
      description: "Time de mentores com vasta experiência prática e acadêmica, reconhecidos no mercado brasileiro."
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
              ref={titleRef as any}
              className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-1000 ${
                titleVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Sobre a <span className="text-penseorto-green">Pense Orto</span>
            </h2>
            
            <div 
              ref={contentRef as any}
              className={`transition-all duration-1000 delay-300 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Nossa missão é transformar, auxiliar e facilitar o dia a dia de clínica dos ortodontistas e pós graduandos em Ortodontia através de técnicas modernas e tratamentos eficazes!
              </p>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Com 20 anos de experiência no mercado educacional de pós-graduação, desenvolvemos uma metodologia 
                única que combina teoria sólida com prática intensiva.
              </p>
            </div>
          </div>

          <div 
            ref={cardsRef as any}
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
                <feature.icon className="text-penseorto-green mb-6" size={48} />
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className={`bg-penseorto-green rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 delay-1000 ${
            cardsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que escolher a <span className="text-white">Pense Orto?</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Metodologia testada e aprovada por centenas de alunos",
                "Mentores com experiência real de clínica e mercado",
                "Material didático atualizado com as últimas tendências",
                "Suporte contínuo durante e após a formação",
                "Rede de networking com outros profissionais",
                "Certificação reconhecida no mercado"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="text-white flex-shrink-0" size={20} />
                  <span className="text-white">{item}</span>
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
