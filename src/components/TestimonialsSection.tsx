
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Silva",
    role: "Colecionadora apaixonada",
    content: "Quando recebi a certidão, chorei de emoção. Agora, meu bebê reborn tem um nome oficial e uma história. É como se ele fosse real! O design é lindo e a qualidade do papel é incrível.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Beatriz Oliveira",
    role: "Mãe de primeira viagem",
    content: "A certidão de nascimento transformou completamente a experiência com minha bebê reborn. Todos os detalhes foram cuidadosamente personalizados e agora posso compartilhar este momento especial com amigos e família.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Carolina Mendes",
    role: "Artesã de bebês reborn",
    content: "Como artesã, sempre busco oferecer uma experiência completa às minhas clientes. Esta certidão de nascimento é o complemento perfeito para minhas criações. O serviço é rápido e o resultado final é impecável!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Débora Santos",
    role: "Colecionadora há 5 anos",
    content: "Já adquiri certidões de outros lugares, mas nenhuma se compara à qualidade e ao cuidado nos detalhes que encontrei aqui. Recomendo a todas as mães de bebês reborn que querem algo realmente especial.",
    rating: 5,
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">O Que Dizem Nossas Clientes</h2>
          <p className="text-lg text-gray-700">
            Descubra o impacto emocional que nossas certidões têm causado na vida das colecionadoras.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={index}
                className="card p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-babypink-100 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 flex-grow">{testimonial.content}</p>
              </div>
            ))}
          </div>
          
          {/* Mobile */}
          <div className="md:hidden">
            <div className="card p-8 flex flex-col animate-fade-in">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-babypink-100 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{testimonials[activeIndex].content}</p>
            </div>
            
            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-babypink-100 text-babypink-600 hover:bg-babypink-200 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === activeIndex ? 'bg-babypink-500' : 'bg-gray-300'
                    }`}
                  ></button>
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-babyblue-100 text-babyblue-600 hover:bg-babyblue-200 transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
