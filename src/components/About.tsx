
import { useState, useEffect } from 'react';
import { CheckCircle, Target, Users, Trophy } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('sobre');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const titleText = useTypewriter({
    text: "Sobre a Pense Orto",
    speed: 100,
    trigger: isVisible
  });

  const subtitleText = useTypewriter({
    text: "Transformando carreiras em ortodontia há mais de 20 anos",
    speed: 50,
    trigger: isVisible && titleText.length >= 18
  });

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Formar ortodontistas de excelência através de uma mentoria personalizada e baseada na experiência prática de 20 anos no mercado educacional."
    },
    {
      icon: Trophy,
      title: "Visão",
      description: "Ser a principal referência em mentoria ortodôntica no Brasil, reconhecida pela qualidade do ensino e pelo sucesso dos profissionais formados."
    },
    {
      icon: Users,
      title: "Valores",
      description: "Excelência acadêmica, dedicação ao ensino, inovação em metodologias educacionais e compromisso com o sucesso profissional dos nossos alunos."
    }
  ];

  const differentials = [
    "Metodologia exclusiva desenvolvida em 20 anos de experiência",
    "Acompanhamento personalizado durante todo o processo",
    "Professores especialistas com reconhecimento nacional",
    "Conteúdo atualizado com as mais recentes técnicas ortodônticas",
    "Suporte contínuo mesmo após o término da mentoria",
    "Networking com profissionais de sucesso da área"
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 min-h-[3.5rem]">
              {titleText}
              <span className="text-penseorto-yellow">
                {titleText.length > 18 ? titleText.slice(18) : ''}
              </span>
              {isVisible && titleText.length < 18 && (
                <span className="animate-pulse">|</span>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed min-h-[2rem]">
              {subtitleText}
              {isVisible && titleText.length >= 18 && subtitleText.length < 49 && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-black mb-8">Nossa História</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A Pense Orto nasceu da paixão pelo ensino e da vasta experiência de nossos três fundadores no mercado educacional de ortodontia. Com mais de duas décadas dedicadas à formação de especialistas, desenvolvemos uma metodologia única que combina teoria sólida com prática clínica intensiva.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nossa equipe já formou centenas de ortodontistas que hoje são referência em suas regiões, aplicando as técnicas mais modernas e eficazes da ortodontia contemporânea.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Acreditamos que cada profissional tem um potencial único, e nossa missão é ajudar cada aluno a descobrir e desenvolver esse potencial ao máximo.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-bold text-black mb-8">Nossos Diferenciais</h3>
              <div className="space-y-4">
                {differentials.map((differential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-penseorto-yellow mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{differential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="animate-scale-in bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-penseorto-yellow to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <value.icon size={28} className="text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-black">{value.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
