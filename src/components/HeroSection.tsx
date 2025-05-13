
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!certificateRef.current) return;
      const scrollY = window.scrollY;
      const element = certificateRef.current;
      // Parallax effect
      element.style.transform = `translateY(${scrollY * 0.05}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="início" className="min-h-screen pt-24 flex items-center bg-gradient-to-b from-cream-50 to-white">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:space-y-8 max-w-lg animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            <span className="gradient-text">Certidão de Nascimento Premium</span> para Seu Bebê Reborn
          </h1>
          <p className="text-lg text-gray-700 font-light">
            Adicione um toque de realismo e emoção à sua coleção com uma certidão personalizada e exclusiva, tornando seu bebê reborn oficialmente parte da família.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a href="#formulário" className="btn-primary flex items-center justify-center gap-2">
              Garanta a Sua Agora <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#como-funciona" className="btn-secondary flex items-center justify-center gap-2">
              Como Funciona <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-babypink-100" />
              ))}
            </div>
            <p className="text-gray-600">+500 mães satisfeitas este mês</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-babyblue-100 rounded-full animate-pulse-soft"></div>
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-babypink-100 rounded-full animate-pulse-soft delay-300"></div>
          
          <div 
            ref={certificateRef}
            className="certificate-mockup relative z-10 rotate-3 transform transition-all duration-500 hover:rotate-0 animate-float"
          >
            <div className="text-center">
              <h2 className="font-script text-2xl md:text-3xl text-gray-800 mb-6">Certificado de Nascimento</h2>
              <div className="mx-auto w-24 h-24 rounded-full bg-babypink-100 mb-4"></div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Nome</p>
                    <p className="font-medium">Sofia Oliveira</p>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Data de Nascimento</p>
                    <p className="font-medium">12 de Maio de 2025</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Peso</p>
                    <p className="font-medium">3.2 kg</p>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Altura</p>
                    <p className="font-medium">49 cm</p>
                  </div>
                </div>
                
                <div className="text-left">
                  <p className="text-xs text-gray-500">Mãe</p>
                  <p className="font-medium">Maria Oliveira</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between">
                <div className="text-babypink-600 font-script text-xl">Certificado</div>
                <div className="text-babyblue-600 font-script text-xl">Premium</div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6 bg-white rounded-full shadow-lg py-2 px-4 text-sm font-medium text-babypink-600 rotate-12">
            Edição Limitada!
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
