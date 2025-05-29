
import { GraduationCap, Award, Users } from 'lucide-react';

const Professors = () => {
  const professors = [
    {
      name: "Dr. Giovani Mello", 
      title: "Professor desde 1999",
      experience: "Mestre e Doutorando em Ortodontia",
      specialties: ["Aparelhos Autoligados", "Harmonização Orofacial", "Planejamento Digital"],
      description: "Professor desde 1999, Mestre e Doutorando em Ortodontia, Especialista em Harmonização Orofacial e Anatomia, com Pós-Graduação em vários países na área de aparelhos autoligados. Sócio da empresa Smyo Alinhadores Ortodônticos, atua também como planejador de casos digitais. Na prática clínica diária, trabalha exclusivamente com Ortodontia e HOF. Sócio fundador e professor da OrtoIntelligence, atua ativamente nos cursos de Pós-Graduação nos 8 institutos que a equipe se faz presente.",
      image: "/pictures-uploads/2e6f8ddb-4217-4ccb-ab0a-e432d99acdbc.png"
    },
    {
      name: "Dra. Helena Bussolo",
      title: "Especialista e Mestre em Ortodontia",
      experience: "Especialista em Odontopediatria e Saúde da Família", 
      specialties: ["Ortodontia", "Odontopediatria", "Invisalign Doctor"],
      description: "Especialista e Mestre em Ortodontia, Especialista em Odontopediatria e Saúde da Família. Já fez cursos internacionais em Toronto, Miami, San City e Dubai. Invisalign doctor, atua em Balneário Camboriú exclusivamente com Ortodontia e Odontopediatria na sua clínica. Uma das fundadoras da Equipe OrtoIntelligence, leciona como Professora nos cursos de Pós-Graduação em Ortodontia e HOF, em Santa Catarina e Paraná.",
      image: "/pictures-uploads/8785b606-8bdf-4a9e-991f-a8b5890171b8.png"
    },
    {
      name: "Dr. Rômulo Pedrini",
      title: "Especialista, Mestre e Doutorando em Ortodontia",
      experience: "Especialista em Harmonização Orofacial",
      specialties: ["Ortodontia", "Harmonização Orofacial", "Invisalign Doctor"],
      description: "Especialista, Mestre e Doutorando em Ortodontia, Especialista em Harmonização Orofacial, com Pós-Graduação no exterior. Invisalign doctor, trabalha exclusivamente com Ortodontia e HOF no seu consultório, além de ser um renomado Professor atuando nos cursos de Pós-Graduação em Ortodontia e HOF. Sócio da OrtoIntelligence, maior grupo de professores de Ortodontia do Brasil, que atua em 8 escolas no Sul do país.",
      image: "/pictures-uploads/f6961ed0-41af-4e07-a819-aca1bfd3f535.png"
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
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-penseorto-yellow">
                    <img 
                      src={professor.image} 
                      alt={professor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{professor.name}</h3>
                  <p className="text-penseorto-yellow font-semibold mb-1">{professor.title}</p>
                  <p className="text-gray-600">{professor.experience}</p>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm">{professor.description}</p>

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
