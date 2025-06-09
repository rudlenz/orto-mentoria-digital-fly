
import { Calendar, BookOpen, Users, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Reduced threshold for better mobile support
    );

    const section = document.getElementById('experiencia');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Staggered animation for milestones with longer delays for mobile
      const timeouts = [0, 300, 600, 900].map((delay, index) =>
        setTimeout(() => {
          setVisibleMilestones(prev => [...prev, index]);
        }, delay)
      );

      return () => timeouts.forEach(clearTimeout);
    }
  }, [isVisible]);

  const professionalsCount = useCountUp({ end: 5000, duration: 2500, trigger: isVisible });
  const coursesCount = useCountUp({ end: 50, duration: 2000, trigger: isVisible });
  const awardsCount = useCountUp({ end: 15, duration: 1500, trigger: isVisible });
  const yearsCount = useCountUp({ end: 20, duration: 2000, trigger: isVisible });

  const milestones = [
    {
      year: "2004",
      title: "Início da Jornada",
      description: "Primeiros passos no ensino de ortodontia com foco em excelência acadêmica iniciados pelo Dr. Giovani Mello."
    },
    {
      year: "2010", 
      title: "Expansão do Ensino",
      description: "Desenvolvimento de metodologias inovadoras para pós-graduação em ortodontia."
    },
    {
      year: "2018",
      title: "Reconhecimento Nacional",
      description: "Consolidação como referência no mercado educacional de ortodontia."
    },
    {
      year: "2024",
      title: "Pense Orto",
      description: "Criação da mentoria especializada para formar os melhores ortodontistas."
    }
  ];

  const achievements = [
    {
      icon: Users,
      count: professionalsCount,
      suffix: "+",
      label: "Profissionais Formados",
      description: "Ortodontistas formados ao longo de duas décadas"
    },
    {
      icon: BookOpen,
      count: coursesCount,
      suffix: "+",
      label: "Cursos Ministrados", 
      description: "Cursos de pós-graduação e especialização"
    },
    {
      icon: Trophy,
      count: awardsCount,
      suffix: "+",
      label: "Prêmios e Reconhecimentos",
      description: "Reconhecimentos na área educacional"
    },
    {
      icon: Calendar,
      count: yearsCount,
      suffix: "+",
      label: "Anos de Dedicação",
      description: "Décadas dedicadas ao ensino de qualidade"
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Nossa <span className="text-penseorto-green">Experiência</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Duas décadas de dedicação ao ensino de ortodontia, formando profissionais de excelência e transformando carreiras.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-black text-center mb-12">Trajetória de Sucesso</h3>
            <div className="relative">
              {/* Timeline line - responsive */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-penseorto-green to-gray-300"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start md:items-center mb-12 transition-all duration-700 ${
                    visibleMilestones.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  } ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {/* Mobile layout */}
                  <div className="md:hidden ml-12 w-full">
                    <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-penseorto-green mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-black mb-3">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className={`hidden md:block w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-penseorto-green mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-black mb-3">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 md:w-4 md:h-4 bg-penseorto-green rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                    visibleMilestones.includes(index) ? 'scale-100' : 'scale-0'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="bg-gradient-to-br from-penseorto-green to-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
              Números que <span className="text-penseorto-gray">Impressionam</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="animate-scale-in text-center">
                  <achievement.icon className="text-penseorto-gray mx-auto mb-4" size={48} />
                  <div className="text-4xl font-bold text-black mb-2">
                    {achievement.count}{achievement.suffix}
                  </div>
                  <div className="text-lg font-semibold text-penseorto-gray mb-2">{achievement.label}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-penseorto-green to-white rounded-2xl p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl font-bold text-black mb-6 italic">
                "Nossa missão é transformar conhecimento em excelência, e excelência em sucesso profissional."
              </blockquote>
              <p className="text-lg text-gray-800 font-semibold">
                - Equipe Pense Orto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
