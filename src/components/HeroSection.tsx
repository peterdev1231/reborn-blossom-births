
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
      element.style.transform = `translateY(${scrollY * 0.05}px) rotate(${3 - scrollY * 0.01}deg)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="início" className="min-h-screen pt-32 flex items-center bg-gradient-to-b from-cream-50 to-white">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-lg animate-elegant-fade-in">
          <div className="inline-block px-4 py-1 bg-babypink-50 text-babypink-600 rounded-full text-sm font-medium mb-2">
            Edição Limitada
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-elegant !leading-tight">
            <span className="text-gradient-elegant">Certidão de Nascimento</span> Premium para Seu Bebê Reborn
          </h1>
          
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            Adicione um toque de realismo e emoção à sua coleção com uma certidão personalizada e exclusiva, tornando seu bebê reborn oficialmente parte da família.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <a href="#formulário" className="elegant-button flex items-center justify-center gap-2 group">
              Garanta a Sua Agora 
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#como-funciona" className="btn-secondary flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(51,130,244,0.2)] group">
              Como Funciona 
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="flex items-center gap-4 pt-8 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden animate-pulse-soft" style={{animationDelay: `${i * 0.2}s`}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-babypink-200 to-babypink-100"></div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-gray-600 font-medium">+500 mães satisfeitas</p>
              <p className="text-xs text-gray-400">este mês</p>
            </div>
          </div>
        </div>
        
        <div className="relative select-none">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-babyblue-100/80 rounded-full filter blur-xl animate-pulse-soft opacity-70"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-babypink-100/80 rounded-full filter blur-xl animate-pulse-soft delay-300 opacity-70"></div>
          
          <div 
            ref={certificateRef}
            className="certificate-mockup relative z-10 rotate-3 transform transition-all duration-500 hover:rotate-0 animate-elegant-float elegant-border"
          >
            <div className="text-center relative">
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-300 to-gold-100 opacity-70 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                  <div className="text-gold-600 font-script text-xs rotate-12">Premium</div>
                </div>
              </div>
              
              <h2 className="font-script text-2xl md:text-3xl text-gray-800 mb-8">Certificado de Nascimento</h2>
              
              <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-babypink-100 to-babypink-50 mb-6 overflow-hidden relative">
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center opacity-60">
                  <div className="animate-pulse-soft">👶</div>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-medium">Nome</p>
                    <p className="font-elegant font-medium text-lg">Sofia Oliveira</p>
                    <div className="h-0.5 w-full bg-gradient-to-r from-babypink-100 to-transparent mt-1"></div>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-medium">Data de Nascimento</p>
                    <p className="font-elegant font-medium text-lg">12 de Maio de 2025</p>
                    <div className="h-0.5 w-full bg-gradient-to-r from-babypink-100 to-transparent mt-1"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-medium">Peso</p>
                    <p className="font-elegant font-medium text-lg">3.2 kg</p>
                    <div className="h-0.5 w-full bg-gradient-to-r from-babypink-100 to-transparent mt-1"></div>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-medium">Altura</p>
                    <p className="font-elegant font-medium text-lg">49 cm</p>
                    <div className="h-0.5 w-full bg-gradient-to-r from-babypink-100 to-transparent mt-1"></div>
                  </div>
                </div>
                
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-medium">Mãe</p>
                  <p className="font-elegant font-medium text-lg">Maria Oliveira</p>
                  <div className="h-0.5 w-full bg-gradient-to-r from-babypink-100 to-transparent mt-1"></div>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between">
                <div className="text-babypink-600 font-script text-xl">Certificado</div>
                <div className="text-babyblue-600 font-script text-xl">Premium</div>
              </div>
              
              <div className="absolute bottom-2 right-2 opacity-50">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#E74162" strokeWidth="2" opacity="0.3" />
                  <path d="M50 10 A40 40 0 0 1 90 50" stroke="#E74162" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 right-8 bg-white shadow-elegant rounded-full py-2 px-4 text-sm font-medium text-babypink-600 rotate-12 border border-babypink-100 animate-pulse-soft z-20">
            Edição Limitada!
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
