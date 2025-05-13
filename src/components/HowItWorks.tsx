
import React, { useRef, useEffect } from 'react';

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const steps = stepsRef.current?.querySelectorAll('.step');
    steps?.forEach((step) => {
      observer.observe(step);
    });

    return () => {
      steps?.forEach((step) => {
        observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      title: "Preencha o formulário",
      description: "Em apenas alguns minutos, personalize a certidão com os dados do seu bebê reborn e seus.",
      image: "/placeholder.svg"
    },
    {
      title: "Personalização exclusiva",
      description: "Nossa equipe de design cuidadosamente elabora cada detalhe da sua certidão personalizada.",
      image: "/placeholder.svg"
    },
    {
      title: "Entrega digital",
      description: "Receba sua certidão exclusiva via e-mail, pronta para impressão em alta qualidade.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="como-funciona" className="section bg-gradient-to-b from-white to-cream-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Como Funciona</h2>
          <p className="text-lg text-gray-700">
            Um processo simples e rápido para você ter em mãos a certidão perfeita para seu bebê reborn.
          </p>
        </div>
        
        <div ref={stepsRef} className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-babypink-300 to-babyblue-300 transform -translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`step relative opacity-0 translate-y-10 transition-all duration-700 delay-${index * 200} mb-20 md:mb-32`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Step content */}
                <div className={`md:text-${index % 2 === 0 ? 'right' : 'left'} md:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <div className="mb-4 inline-flex">
                    <span className="w-12 h-12 rounded-full bg-gradient-to-r from-babypink-500 to-babyblue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 max-w-md mx-auto md:mx-0">{step.description}</p>
                </div>
                
                {/* Step image */}
                <div className={`md:order-${index % 2 === 0 ? '2' : '1'}`}>
                  <div className="certificate-mockup transform transition-all duration-500 hover:scale-105 hover:rotate-1 mx-auto max-w-sm">
                    {index === 0 ? (
                      <div className="flex flex-col space-y-4">
                        <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
                        <div className="flex space-x-2">
                          <div className="w-1/2 h-10 bg-gray-200 rounded animate-pulse"></div>
                          <div className="w-1/2 h-10 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-1/2 h-10 bg-gray-200 rounded animate-pulse"></div>
                          <div className="w-1/2 h-10 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                        <div className="w-full h-10 bg-babypink-100 rounded flex items-center justify-center">
                          <span className="text-babypink-600 font-medium">Preencha seus dados</span>
                        </div>
                      </div>
                    ) : index === 1 ? (
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-32 h-32 rounded-full bg-babypink-100 flex items-center justify-center overflow-hidden">
                          <svg className="w-20 h-20 text-babypink-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="w-full h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ) : (
                      <div className="p-4">
                        <div className="font-script text-2xl text-center text-gray-800 mb-4">Certificado de Nascimento</div>
                        <div className="flex justify-center mb-4">
                          <div className="w-20 h-20 rounded-full bg-babyblue-100"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                        </div>
                        <div className="mt-6 flex justify-center">
                          <div className="bg-babyblue-100 text-babyblue-600 px-4 py-2 rounded-full text-sm font-medium">
                            Pronto para impressão
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
