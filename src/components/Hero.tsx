
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const yearsCount = useCountUp({ end: 20, duration: 2000, trigger: isVisible });
  const professorsCount = useCountUp({ end: 3, duration: 1500, trigger: isVisible });
  const dedicationCount = useCountUp({ end: 100, duration: 2500, trigger: isVisible });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-penseorto-yellow rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-penseorto-yellow rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-penseorto-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Mentoria em 
              <span className="text-penseorto-yellow block mt-2">Ortodontia</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              20 anos de experiência no mercado educacional de pós-graduação em ortodontia. 
              <span className="text-penseorto-yellow font-semibold"> Três professores especialistas</span> prontos para transformar sua carreira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="bg-penseorto-yellow text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Conhecer a Mentoria
                <ArrowRight size={20} />
              </button>
              
              <button 
                onClick={() => scrollToSection('professores')}
                className="border-2 border-penseorto-yellow text-penseorto-yellow px-8 py-4 rounded-lg font-semibold text-lg hover:bg-penseorto-yellow hover:text-black transition-all duration-300"
              >
                Ver Professores
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="animate-slide-in-left bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Award className="text-penseorto-yellow mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-2">{yearsCount}+</h3>
              <p className="text-gray-300">Anos de Experiência</p>
            </div>
            
            <div className="animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="text-penseorto-yellow mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-2">{professorsCount < 10 ? `0${professorsCount}` : professorsCount}</h3>
              <p className="text-gray-300">Professores Especialistas</p>
            </div>
            
            <div className="animate-slide-in-right bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Star className="text-penseorto-yellow mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-2">{dedicationCount}%</h3>
              <p className="text-gray-300">Dedicação ao Ensino</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
