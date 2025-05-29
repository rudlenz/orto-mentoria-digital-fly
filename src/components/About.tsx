
import { BookOpen, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Sobre a <span className="text-penseorto-yellow">Pense Orto</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uma mentoria especializada em ortodontia, criada por três professores com mais de duas décadas de experiência no mercado educacional de pós-graduação.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-black mb-6">Nossa Missão</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Transformar profissionais da odontologia em especialistas de excelência em ortodontia, 
                através de uma mentoria personalizada que combina conhecimento teórico sólido com 
                experiência prática comprovada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa abordagem vai além do ensino tradicional, oferecendo acompanhamento individual 
                e estratégias personalizadas para o desenvolvimento profissional de cada aluno.
              </p>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-penseorto-yellow to-yellow-400 rounded-2xl p-8 text-black">
                <h4 className="text-2xl font-bold mb-4">Por que escolher a Pense Orto?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-medium">20 anos de experiência comprovada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-medium">Três professores especialistas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-medium">Mentoria personalizada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-medium">Acompanhamento individual</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-scale-in bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <BookOpen className="text-penseorto-yellow mb-6" size={48} />
              <h4 className="text-xl font-bold text-black mb-4">Ensino Especializado</h4>
              <p className="text-gray-600">
                Metodologia exclusiva desenvolvida ao longo de 20 anos de experiência no mercado educacional.
              </p>
            </div>
            
            <div className="animate-scale-in bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Target className="text-penseorto-yellow mb-6" size={48} />
              <h4 className="text-xl font-bold text-black mb-4">Foco no Resultado</h4>
              <p className="text-gray-600">
                Acompanhamento direcionado para garantir o sucesso profissional e acadêmico de cada aluno.
              </p>
            </div>
            
            <div className="animate-scale-in bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <TrendingUp className="text-penseorto-yellow mb-6" size={48} />
              <h4 className="text-xl font-bold text-black mb-4">Crescimento Contínuo</h4>
              <p className="text-gray-600">
                Estratégias de desenvolvimento profissional para impulsionar sua carreira na ortodontia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
