
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import BackgroundImageToHero from '../../public/pictures-uploads/heroBackground.jpg';
import BackgroundImageToHeroMobile from '../../public/pictures-uploads/backgroundHeroToMobile.jpg';

const Hero = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  const yearsCount = useCountUp({ end: 20, duration: 2000, trigger: isVisible });
  const mentorsCount = useCountUp({ end: 3, duration: 1500, trigger: isVisible });
  const dedicationCount = useCountUp({ end: 100, duration: 2500, trigger: isVisible });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden" ref={ref}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${window.innerWidth <= 768 ? BackgroundImageToHeroMobile : BackgroundImageToHero})`,
          backgroundPosition: 'inherit'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gray-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mt-32`}>
            <h1 className="text-5xl md:text-7xl font-bold text-penseorto-green mb-6 leading-tight">
              Mentoria em 
              <span className="text-white block mt-2">Ortodontia</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              20 anos de experiência no mercado educacional de pós-graduação em ortodontia. 
              <span className="text-white font-semibold"> Três mentores especialistas</span> prontos para transformar sua carreira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-penseorto-green transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Conhecer a Mentoria
                <ArrowRight size={20} />
              </button>
              
              <button 
                onClick={() => scrollToSection('mentores')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:text-penseorto-green hover:border-penseorto-green transition-all duration-300"
              >
                Ver Mentores
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className={`bg-penseorto-green/40 backdrop-blur-sm rounded-xl p-6 border border-gray-300 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Award className="text-white mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-2">{yearsCount}+</h3>
              <p className="text-white">Anos de Experiência</p>
            </div>
            
            <div className={`bg-penseorto-green/40 backdrop-blur-sm rounded-xl p-6 border border-gray-300 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Users className="text-white mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-2">{mentorsCount < 10 ? `0${mentorsCount}` : mentorsCount}</h3>
              <p className="text-white">Mentores Especialistas</p>
            </div>
            
            <div className={`bg-penseorto-green/40 backdrop-blur-sm rounded-xl p-6 border border-gray-300 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Star className="text-white mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-2">{dedicationCount}%</h3>
              <p className="text-white">Dedicação ao Ensino</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
