
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.2 });

  const benefits = [
    "Acompanhamento personalizado",
    "20 anos de experiência comprovada", 
    "Metodologia exclusiva",
    "Suporte durante toda a jornada"
  ];

  return (
    <section id="experiencia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              ref={titleRef as any}
              className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-1000 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Por que escolher nossa <span className="text-penseorto-green">mentoria?</span>
            </h2>
          </div>

          <div 
            ref={contentRef as any}
            className={`bg-penseorto-green rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="text-white flex-shrink-0" size={20} />
                  <span className="text-black">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
