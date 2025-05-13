
import React, { useRef } from 'react';
import { Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefitItems = [
    {
      title: "Personalize cada detalhe",
      description: "Nome, data e características únicas do seu bebê reborn, criando uma peça verdadeiramente exclusiva."
    },
    {
      title: "Design sofisticado",
      description: "Acabamento impecável e materiais premium, dignos de uma coleção especial e de alto padrão."
    },
    {
      title: "Emoção genuína",
      description: "Sinta a alegria de tornar seu bebê reborn oficialmente parte da família com um documento especial."
    },
    {
      title: "Entrega rápida e segura",
      description: "Receba sua certidão em poucos dias, com total segurança e discrição garantidas."
    }
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-babypink-50 rounded-full opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-babyblue-50 rounded-full opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Benefícios Exclusivos</h2>
          <p className="text-lg text-gray-700">
            Descubra por que nosso certificado premium é essencial para completar a experiência com seu bebê reborn.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {benefitItems.map((item, index) => (
            <div 
              key={index} 
              className="flex gap-4 items-start group animate-slide-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-babypink-500 to-babyblue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a href="#formulário" className="btn-primary text-center">
            Quero estes benefícios!
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
