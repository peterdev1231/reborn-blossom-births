
import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Clock } from 'lucide-react';

const FormSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    babyName: '',
    birthDate: '',
    weight: '',
    height: '',
    motherName: '',
    email: '',
    address: '',
    phone: '',
  });
  const [availableCertificates, setAvailableCertificates] = useState(50);
  const [timeRemaining, setTimeRemaining] = useState({ minutes: 30, seconds: 0 });
  
  // Update form data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Move to next step
  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here we would typically send the data to a server
    alert('Formulário enviado com sucesso! Em breve você receberá sua certidão.');
  };
  
  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="formulário" className="section bg-gradient-to-b from-cream-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-elegant-fade-in">
          <div className="inline-block mb-4">
            <div className="px-4 py-1 bg-gradient-to-r from-babypink-100 to-babyblue-100 rounded-full text-babypink-600 text-sm font-medium">
              Processo Simples
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-elegant mb-6">Solicite Sua Certidão Exclusiva</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Preencha o formulário abaixo para personalizar e receber sua certidão premium.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="elegant-border p-1">
            <div className="card border-0 bg-white/80 backdrop-blur-md shadow-none">
              {/* Progress Steps */}
              <div className="flex mb-12">
                <div className="flex-1 relative">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                    step >= 1 
                      ? 'bg-gradient-to-r from-babypink-500 to-babypink-600 text-white shadow-lg shadow-babypink-500/20' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step > 1 ? <Check className="w-6 h-6" /> : 1}
                  </div>
                  <p className="text-center text-sm mt-3 font-medium">Dados do Bebê</p>
                </div>
                
                <div className="flex-1 relative">
                  <div className={`absolute top-6 w-full h-0.5 -left-1/2 right-1/2 ${
                    step >= 2 ? 'bg-gradient-to-r from-babypink-400 to-babypink-600' : 'bg-gray-200'
                  }`}></div>
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${
                    step >= 2 
                      ? 'bg-gradient-to-r from-babypink-500 to-babypink-600 text-white scale-100 shadow-lg shadow-babypink-500/20' 
                      : 'bg-gray-200 text-gray-500 scale-90'
                  }`}>
                    2
                  </div>
                  <p className="text-center text-sm mt-3 font-medium">Dados da Mãe</p>
                </div>
              </div>
              
              {/* Urgency indicators */}
              <div className="bg-gradient-to-r from-babypink-50 to-cream-50 rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 justify-between shadow-inner-elegant">
                <div className="flex items-center text-sm">
                  <span className="inline-block w-3 h-3 bg-babypink-500 rounded-full animate-pulse mr-3"></span>
                  <span className="font-medium">Apenas <span className="text-babypink-600 font-semibold">{availableCertificates}</span> certidões disponíveis este mês</span>
                </div>
                <div className="text-sm flex items-center">
                  <Clock className="text-babyblue-500 mr-2 w-4 h-4" />
                  <span className="font-medium mr-2">Oferta expira em: </span>
                  <span className="font-mono bg-white text-babypink-800 px-3 py-1.5 rounded-md shadow-sm border border-babypink-100">
                    {String(timeRemaining.minutes).padStart(2, '0')}:{String(timeRemaining.seconds).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              {/* Form Steps */}
              {step === 1 ? (
                <form onSubmit={nextStep} className="animate-elegant-fade-in">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="babyName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome do Bebê<span className="text-babypink-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="babyName"
                        name="babyName"
                        required
                        value={formData.babyName}
                        onChange={handleInputChange}
                        className="elegant-input"
                        placeholder="Nome completo do bebê reborn"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Data de Nascimento<span className="text-babypink-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        required
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className="elegant-input"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                          Peso (kg)<span className="text-babypink-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="weight"
                          name="weight"
                          required
                          value={formData.weight}
                          onChange={handleInputChange}
                          className="elegant-input"
                          placeholder="Ex: 3.2"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                          Altura (cm)<span className="text-babypink-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="height"
                          name="height"
                          required
                          value={formData.height}
                          onChange={handleInputChange}
                          className="elegant-input"
                          placeholder="Ex: 49"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-8">
                      <button
                        type="submit"
                        className="elegant-button w-full flex items-center justify-center gap-2 group"
                      >
                        Próximo Passo 
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="animate-elegant-fade-in">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="motherName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome da Mãe<span className="text-babypink-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="motherName"
                        name="motherName"
                        required
                        value={formData.motherName}
                        onChange={handleInputChange}
                        className="elegant-input"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail<span className="text-babypink-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="elegant-input"
                        placeholder="Seu e-mail para envio da certidão"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone<span className="text-babypink-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="elegant-input"
                        placeholder="Seu telefone com DDD"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Endereço
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="elegant-input"
                        placeholder="Endereço completo (opcional)"
                      />
                    </div>
                    
                    <div className="pt-8 space-y-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-full py-3 px-4 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300 font-medium"
                      >
                        Voltar
                      </button>
                      
                      <button
                        type="submit"
                        className="elegant-button w-full"
                      >
                        Solicitar Minha Certidão Agora
                      </button>
                    </div>
                  </div>
                </form>
              )}
              
              <div className="mt-8 text-center text-sm text-gray-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-babypink-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Suas informações estão seguras e não serão compartilhadas com terceiros.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
