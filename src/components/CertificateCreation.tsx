
import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Clock, Shield, FileText, Paintbrush } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CertificateCreationProps {
  formData: {
    babyName: string;
    birthDate: string;
    weight: string;
    height: string;
    motherName: string;
    email: string;
    address: string;
    phone: string;
  };
  onComplete: () => void;
}

const CertificateCreation = ({ formData, onComplete }: CertificateCreationProps) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const animationDuration = 15; // seconds
  const totalSteps = 5;
  const stepDuration = animationDuration / totalSteps;
  
  // Format date to display nicely
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  // Steps in the animation process with corresponding icons
  const steps = [
    { text: 'Verificando dados informados...', icon: <Check className="w-5 h-5" /> },
    { text: 'Gerando design personalizado...', icon: <Paintbrush className="w-5 h-5" /> },
    { text: 'Aplicando registros oficiais...', icon: <FileText className="w-5 h-5" /> },
    { text: 'Adicionando elementos de segurança...', icon: <Shield className="w-5 h-5" /> },
    { text: 'Finalizando sua certidão premium...', icon: <ArrowRight className="w-5 h-5" /> },
  ];

  // Animation to advance through steps and increase progress
  useEffect(() => {
    // Overall progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (animationDuration * 10));
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    // Step transition animation
    const stepInterval = setInterval(() => {
      setStep(prev => {
        const newStep = prev + 1;
        return newStep >= totalSteps ? totalSteps - 1 : newStep;
      });
    }, stepDuration * 1000);

    // Complete animation and close modal
    const completionTimeout = setTimeout(() => {
      onComplete();
    }, animationDuration * 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(completionTimeout);
    };
  }, [onComplete, animationDuration, stepDuration]);

  return (
    <div className="relative animate-scale-in overflow-hidden rounded-3xl">
      {/* Background with enhanced gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-babyblue-100 via-white to-babypink-100 animate-elegant-pulse"></div>
      
      {/* Animated particles with improved visibility */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/50 backdrop-blur-sm animate-elegant-float shadow-md"
            style={{
              width: `${Math.random() * 40 + 15}px`,
              height: `${Math.random() * 40 + 15}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              border: '1px solid rgba(255,255,255,0.8)'
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 p-8 md:p-12 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-gradient-elegant animate-pulse">
            Criando Sua Certidão Premium
          </h2>
          
          <div className="flex justify-center mb-12">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Certificate mockup with enhanced animation */}
              <div className="absolute inset-0 p-3 animate-elegant-float" style={{ animationDuration: '10s' }}>
                <AspectRatio ratio={1/1.4} className="rounded-lg border-8 border-cream-200 bg-white shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 p-4 flex flex-col">
                    <div className="border-b-2 border-babypink-200 pb-2 mb-2">
                      <h3 className="font-display text-lg text-center text-babypink-700">Certidão de Nascimento</h3>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center text-center space-y-2">
                      <p className="font-display text-xl text-babyblue-700">{formData.babyName || "Nome do Bebê"}</p>
                      <p className="text-sm text-gray-600">
                        {formatDate(formData.birthDate) || "Data de Nascimento"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {formData.weight ? `${formData.weight}kg` : "Peso"} • {formData.height ? `${formData.height}cm` : "Altura"}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Mamãe: {formData.motherName || "Nome da Mãe"}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-2 border-t-2 border-babypink-200">
                      <div className="w-20 h-20 mx-auto opacity-20 rounded-full border-2 border-babypink-300"></div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>
          
          {/* Steps progress with improved visibility */}
          <div className="max-w-md mx-auto mb-8">
            {steps.map((stepItem, index) => (
              <div key={index} className="mb-6 relative">
                <div className={`flex items-center transition-all duration-500 ${
                  step >= index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    step > index 
                      ? 'bg-gradient-to-r from-babypink-500 to-babypink-600 text-white shadow-lg shadow-babypink-500/30'
                      : step === index 
                        ? 'bg-gradient-to-r from-babyblue-400 to-babyblue-600 text-white animate-pulse shadow-lg shadow-babyblue-500/30'
                        : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step > index ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <div className="w-6 h-6 flex items-center justify-center">
                        {step === index ? steps[index].icon : index + 1}
                      </div>
                    )}
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <p className={`text-sm md:text-base font-medium ${step >= index ? 'text-gray-800' : 'text-gray-400'}`}>
                      {stepItem.text}
                    </p>
                    {step === index && (
                      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-babyblue-400 to-babypink-400"
                          style={{
                            width: `${Math.min(100, (progress % (100 / totalSteps)) * totalSteps)}%`,
                            transition: 'width 0.3s ease-in-out',
                            boxShadow: '0 0 10px rgba(255, 182, 193, 0.5)'
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Connect lines between steps */}
                {index < steps.length - 1 && (
                  <div className={`absolute left-6 top-12 w-0.5 h-8 transition-all duration-700 ${
                    step > index ? 'bg-gradient-to-b from-babypink-500 to-babypink-300 opacity-100' : 'bg-gray-200 opacity-50'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Overall progress bar with improved visibility */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 font-medium">Progresso</span>
              <span className="font-medium bg-gradient-to-r from-babypink-600 to-babyblue-600 bg-clip-text text-transparent">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-babypink-500 to-babyblue-500 opacity-20 animate-pulse"></div>
            </Progress>
          </div>
          
          <p className="text-gray-600 text-sm italic animate-pulse">
            Por favor, aguarde enquanto preparamos sua certidão premium com carinho e atenção aos detalhes...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCreation;
