
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Solicite Sua Certidão Exclusiva</h2>
          <p className="text-lg text-gray-700">
            Preencha o formulário abaixo para personalizar e receber sua certidão premium.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="card border-2 border-cream-100">
            {/* Progress Steps */}
            <div className="flex mb-8">
              <div className="flex-1">
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-babypink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <p className="text-center text-sm mt-2">Dados do Bebê</p>
              </div>
              
              <div className="flex-1 relative">
                <div className={`absolute top-5 w-full h-0.5 -left-1/2 right-1/2 ${
                  step >= 2 ? 'bg-babypink-500' : 'bg-gray-200'
                }`}></div>
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-babypink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <p className="text-center text-sm mt-2">Dados da Mãe</p>
              </div>
            </div>
            
            {/* Urgency indicators */}
            <div className="bg-babypink-50 rounded-lg p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex items-center text-sm">
                <span className="inline-block w-3 h-3 bg-babypink-500 rounded-full animate-pulse mr-2"></span>
                <span><strong>Apenas {availableCertificates}</strong> certidões disponíveis este mês</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold">Oferta expira em: </span>
                <span className="font-mono bg-babypink-100 text-babypink-800 px-2 py-1 rounded">
                  {String(timeRemaining.minutes).padStart(2, '0')}:{String(timeRemaining.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
            
            {/* Form Steps */}
            {step === 1 ? (
              <form onSubmit={nextStep}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="babyName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome do Bebê*
                    </label>
                    <input
                      type="text"
                      id="babyName"
                      name="babyName"
                      required
                      value={formData.babyName}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Nome completo do bebê reborn"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Data de Nascimento*
                    </label>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      required
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                        Peso (kg)*
                      </label>
                      <input
                        type="text"
                        id="weight"
                        name="weight"
                        required
                        value={formData.weight}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Ex: 3.2"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                        Altura (cm)*
                      </label>
                      <input
                        type="text"
                        id="height"
                        name="height"
                        required
                        value={formData.height}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Ex: 49"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      Próximo Passo <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="motherName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome da Mãe*
                    </label>
                    <input
                      type="text"
                      id="motherName"
                      name="motherName"
                      required
                      value={formData.motherName}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Seu e-mail para envio da certidão"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Seu telefone com DDD"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Endereço
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Endereço completo (opcional)"
                    />
                  </div>
                  
                  <div className="pt-6 space-y-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Voltar
                    </button>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Solicitar Minha Certidão Agora
                    </button>
                  </div>
                </div>
              </form>
            )}
            
            <div className="mt-6 text-center text-sm text-gray-500">
              Suas informações estão seguras e não serão compartilhadas com terceiros.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
