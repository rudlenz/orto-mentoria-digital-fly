
import { GraduationCap, Award, Users } from 'lucide-react';

const Mentors = () => {
  const mentors = [
    {
      name: "Dr. Giovani Mello", 
      title: "Ortodontista desde 1996",
      experience: "Mentor e Coordenador de cursos desde 1999",
      specialties: ["Aparelhos Autoligados", "Harmonização Orofacial", "Planejamento Digital"],
      description: "Mestre e doutorando em Ortodontia, Especialista em HOF e Anatomia humana. Pós graduação em Sistemas de Braquetes autoligados em Toronto- Canadá, Dubai- Emirados Árabes, San City- África do Sul, Miami- Estados Unidos. Mentor e Coordenador de Odontologia- 1999-2013- Uniplac- Lages- SC. Mentor de Odontologia- 2000-2002- Unoesc- Joaçaba-SC. Mentor e Coordenador de Odontologia- 2013-2020- Uniavan- Balneário Camboriú-SC. Mentor e Coordenador em Ortodontia desde 2004.",
      image: "/pictures-uploads/2e6f8ddb-4217-4ccb-ab0a-e432d99acdbc.png"
    },
    {
      name: "Dra. Helena Bussolo",
      title: "Especialista e Mestre em Ortodontia",
      experience: "Especialista em Odontopediatria e Saúde da Família", 
      specialties: ["Ortodontia", "Odontopediatria", "Invisalign Doctor"],
      description: "Especialista e Mestre em Ortodontia, Especialista em Odontopediatria e Saúde da família. Pós-Graduação em ortodontia no exterior (Toronto, Canadá; Miami, EUA; Dubai, Emirados Árabes; San City, África do Sul). Mentora de Graduação do Curso de Odontologia da UNIAVAN nas disciplinas de Odontopediatria, Clínica Integrada Infantil e Ortodontia (2014- 2019). Mentora e coordenadora da Pós graduação em Ortodontia Ortointelligence, atuante em 8 institutos em SC e PR. Invisalign Doctor. Sócia da Clínica Maison Oral Esthetic, em Balneário Camboriú - SC, onde atua exclusivamente com Ortodontia. Sócia fundadora da OrtoIntelligence, maior grupo de mentores de cursos de Especialização em Ortodontia do sul do Brasil. Sócia do AOC 2019 (Aligners OrtoIntelligence Congress), Primeiro Congresso Exclusivo de Alinhadores ortodônticos do Brasil.",
      image: "/pictures-uploads/8785b606-8bdf-4a9e-991f-a8b5890171b8.png"
    },
    {
      name: "Dr. Rômulo Pedrini",
      title: "Especialista, Mestre e Doutorando em Ortodontia",
      experience: "Especialista em Harmonização Orofacial",
      specialties: ["Ortodontia", "Harmonização Orofacial", "Invisalign Doctor"],
      description: "Especialista, Mestre e Doutorando em Ortodontia, Especialista em Harmonização Orofacial. Pós-Graduação em ortodontia no exterior (Toronto / Canadá e Miami / EUA ). Mentor Graduação Odontologia coordenando as disciplinas de Oclusão e Ortodontia(2014- 2022). Mentor e coordenador da Pós graduação em Ortodontia Ortointelligence. Invisalign doctor. Trabalha exclusivamente com Ortodontia e HOF na clínica Lamon. Sócio da OrtoIntelligence, maior grupo de mentores de Ortodontia do Brasil, que atua em 8 escolas no Sul do país. Sócio e Presidente do AOC 2019(Aligners Ortointelligence Congress), Primeiro congresso Exclusivo de Alinhadores ortodônticos do Brasil.",
      image: "/pictures-uploads/f6961ed0-41af-4e07-a819-aca1bfd3f535.png"
    }
  ];

  return (
    <section id="mentores" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Nossos <span className="text-penseorto-green">Mentores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça os três especialistas que lideram nossa mentoria, cada um com mais de 20 anos de experiência no mercado educacional de ortodontia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {mentors.map((mentor, index) => (
              <div 
                key={index}
                className="animate-scale-in bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-penseorto-green">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{mentor.name}</h3>
                  <p className="text-penseorto-green font-semibold mb-1">{mentor.title}</p>
                  <p className="text-gray-600">{mentor.experience}</p>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm">{mentor.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">Especialidades:</h4>
                  <div className="space-y-2">
                    {mentor.specialties.map((specialty, specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-penseorto-green rounded-full"></div>
                        <span className="text-gray-600">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-penseorto-green rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experiência <span className="text-black">Comprovada</span>
            </h3>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Juntos, nossos mentores acumulam mais de 20 anos de experiência no mercado educacional de pós-graduação em ortodontia, formando milhares de especialistas de sucesso.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Award className="text-white mb-4" size={48} />
                <h4 className="text-2xl font-bold text-white mb-2">5000+</h4>
                <p className="text-gray-100">Alunos Formados</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Users className="text-white mb-4" size={48} />
                <h4 className="text-2xl font-bold text-white mb-2">20+</h4>
                <p className="text-gray-100">Anos de Ensino</p>
              </div>
              
              <div className="flex flex-col items-center">
                <GraduationCap className="text-white mb-4" size={48} />
                <h4 className="text-2xl font-bold text-white mb-2">100%</h4>
                <p className="text-gray-100">Taxa de Sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
