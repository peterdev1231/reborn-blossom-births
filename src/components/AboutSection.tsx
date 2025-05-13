
import React from 'react';
import { Heart, Shield, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="section bg-babyblue-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Sobre Nós</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Somos especialistas em criar certidões de nascimento autênticas e personalizadas para bebês reborn, 
            trazendo um novo nível de realismo e emoção para sua coleção. Cada certidão é cuidadosamente elaborada 
            com qualidade artesanal, garantindo um toque oficial e exclusivo para sua experiência maternal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card hover:bg-gradient-to-br hover:from-white hover:to-babypink-50 group">
            <div className="w-16 h-16 rounded-full bg-babypink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart size={28} className="text-babypink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Feito com Amor</h3>
            <p className="text-gray-600">
              Cada certificado é criado com dedicação e amor, refletindo o carinho que você tem pelo seu bebê reborn.
            </p>
          </div>
          
          <div className="card hover:bg-gradient-to-br hover:from-white hover:to-babyblue-50 group">
            <div className="w-16 h-16 rounded-full bg-babyblue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield size={28} className="text-babyblue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Qualidade Premium</h3>
            <p className="text-gray-600">
              Utilizamos apenas materiais de alta qualidade e técnicas refinadas para criar certificados duráveis e elegantes.
            </p>
          </div>
          
          <div className="card hover:bg-gradient-to-br hover:from-white hover:to-cream-100 group">
            <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award size={28} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Experiência Exclusiva</h3>
            <p className="text-gray-600">
              Nossa equipe possui anos de experiência, criando documentos que proporcionam uma conexão especial com seu bebê reborn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
