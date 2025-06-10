import Photo from '../../public/pictures-uploads/EquipPhoto.jpg';

const TextWithImage = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Transformando <span className="text-penseorto-green">Carreiras</span> na Ortodontia
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Nossa abordagem única combina teoria avançada com prática clínica intensiva, 
                  preparando você para os desafios reais do mercado ortodôntico atual.
                </p>
                
                <p>
                  Com mais de duas décadas de experiência no ensino de ortodontia, nossos 
                  mentores desenvolveram uma metodologia que já formou milhares de 
                  especialistas de sucesso em todo o país.
                </p>
                
                <p>
                  Acreditamos que cada aluno tem potencial único, e nosso papel é fornecer 
                  as ferramentas, conhecimento e suporte necessários para que você alcance 
                  a excelência profissional que sempre sonhou.
                </p>
                
                <div className="pt-4">
                  <div className="flex items-center space-x-4 text-penseorto-green font-semibold">
                    <div className="w-12 h-1 bg-penseorto-green"></div>
                    <span>Excelência em cada detalhe</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={Photo}
                    alt="Profissional da ortodontia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-penseorto-green rounded-full opacity-20"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-penseorto-green rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage;
