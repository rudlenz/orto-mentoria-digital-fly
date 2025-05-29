
import { GraduationCap, Award, Users } from 'lucide-react';

const Professors = () => {
  const professors = [
    {
      name: "Dr. Professor 1",
      title: "Especialista em Ortodontia",
      experience: "7+ anos de experiência",
      specialties: ["Ortodontia Corretiva", "Aparelhos Fixos", "Tratamentos Complexos"],
      description: "Pioneiro em técnicas inovadoras de ortodontia, com vasta experiência em casos complexos e formação de novos especialistas."
    },
    {
      name: "Dr. Professor 2", 
      title: "Mestre em Ortodontia",
      experience: "8+ anos de experiência",
      specialties: ["Ortodontia Preventiva", "Aparelhos Móveis", "Ortodontia Interceptiva"],
      description: "Especialista reconhecido em ortodontia preventiva e interceptiva, com dedicação especial ao ensino e formação acadêmica."
    },
    {
      name: "Dr. Professor 3",
      title: "Doutor em Ortodontia",
      experience: "5+ anos de experiência", 
      specialties: ["Ortodontia Estética", "Alinhadores", "Biomecânica Ortodôntica"],
      description: "Referência em ortodontia estética moderna, sempre atualizado com as mais recentes tecnologias e técnicas do mercado."
    }
  ];

  return (
    <section id="professores" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Nossos <span className="text-penseorto-yellow">Professores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça os três especialistas que lideram nossa mentoria, cada um com mais de 20 anos de experiência no mercado educacional de ortodontia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {professors.map((professor, index) => (
              <div 
                key={index}
                className="animate-scale-in bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-penseorto-yellow to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap size={36} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{professor.name}</h3>
                  <p className="text-penseorto-yellow font-semibold mb-1">{professor.title}</p>
                  <p className="text-gray-600">{professor.experience}</p>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{professor.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">Especialidades:</h4>
                  <div className="space-y-2">
                    {professor.specialties.map((specialty, specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-penseorto-yellow rounded-full"></div>
                        <span className="text-gray-600">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experiência <span className="text-penseorto-yellow">Comprovada</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Juntos, nossos professores acumulam mais de 20 anos de experiência no mercado educacional de pós-graduação em ortodontia, formando centenas de especialistas de sucesso.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Award className="text-penseorto-yellow mb-4" size={48} />
                <h4 className="text-2xl font-bold text-white mb-2">500+</h4>
                <p className="text-gray-300">Alunos Formados</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Users className="text-penseorto-yellow mb-4" size={48} />
                <h4 className="text-2xl font-bold text-white mb-2">20+</h4>
                <p className="text-gray-300">Anos de Ensino</p>
              </div>
              
              <div className="flex flex-col items-center">
                <GraduationCap className="text-penseorto-yellow mb-4" size={48} />
                <h4 className="text-2xl font-bold text-white mb-2">100%</h4>
                <p className="text-gray-300">Taxa de Sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professors;
