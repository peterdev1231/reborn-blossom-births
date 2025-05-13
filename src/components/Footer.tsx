
import React from 'react';
import { Heart, Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cream-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="text-babypink-500 mr-2" size={24} />
              <span className="font-script text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-babypink-500 to-babyblue-500">
                Bebê Reborn
              </span>
            </div>
            <p className="text-gray-600 mb-6 pr-8">
              Tornamos especial a conexão entre você e seu bebê reborn com certidões de nascimento exclusivas e personalizadas, criadas com amor e cuidado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-babypink-500 transition-colors shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-babyblue-500 transition-colors shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="mailto:contato@bebereborn.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-babyblue-500 transition-colors shadow-sm">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Contato', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-babypink-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-babypink-500 mr-2 flex-shrink-0" size={18} />
                <a href="mailto:contato@bebereborn.com" className="text-gray-600 hover:text-babypink-500 transition-colors">
                  contato@bebereborn.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="text-babypink-500 mr-2 flex-shrink-0" size={18} />
                <a href="tel:+5511999999999" className="text-gray-600 hover:text-babypink-500 transition-colors">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">Receba novidades:</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="py-2 px-4 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-babypink-300 flex-grow"
                />
                <button className="bg-gradient-to-r from-babypink-500 to-babypink-600 text-white py-2 px-4 rounded-r-lg hover:from-babypink-600 hover:to-babypink-700 transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p className="mb-4">
            Não perca a chance de dar vida à sua coleção. Solicite sua certidão hoje e sinta a diferença!
          </p>
          <p>© {new Date().getFullYear()} Bebê Reborn. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
