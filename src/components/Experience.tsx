
import { Calendar, BookOpen, Users, Trophy } from 'lucide-react';

const Experience = () => {
  const milestones = [
    {
      year: "2004",
      title: "Início da Jornada",
      description: "Primeiros passos no ensino de ortodontia com foco em excelência acadêmica."
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
      number: "500+",
      label: "Profissionais Formados",
      description: "Ortodontistas formados ao longo de duas décadas"
    },
    {
      icon: BookOpen,
      number: "50+",
      label: "Cursos Ministrados", 
      description: "Cursos de pós-graduação e especialização"
    },
    {
      icon: Trophy,
      number: "15+",
      label: "Prêmios e Reconhecimentos",
      description: "Reconhecimentos na área educacional"
    },
    {
      icon: Calendar,
      number: "20+",
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
              Nossa <span className="text-penseorto-yellow">Experiência</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Duas décadas de dedicação ao ensino de ortodontia, formando profissionais de excelência e transformando carreiras.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-black text-center mb-12">Trajetória de Sucesso</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-penseorto-yellow to-yellow-400"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-penseorto-yellow mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-black mb-3">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-penseorto-yellow rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Números que <span className="text-penseorto-yellow">Impressionam</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="animate-scale-in text-center">
                  <achievement.icon className="text-penseorto-yellow mx-auto mb-4" size={48} />
                  <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold text-penseorto-yellow mb-2">{achievement.label}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-penseorto-yellow to-yellow-400 rounded-2xl p-8 md:p-12">
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
