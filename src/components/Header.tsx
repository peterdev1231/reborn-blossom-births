
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-elegant py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center group">
          <div className="relative">
            <Heart className="text-babypink-500 mr-2 transition-all duration-300 group-hover:text-babypink-600" size={28} />
            <div className="absolute -inset-1 bg-babypink-100 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <span className="font-script text-2xl font-bold text-gradient-elegant transition-all duration-300">
            Bebê Reborn
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="link-underline font-medium text-gray-700 hover:text-babypink-500 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <button className="elegant-button">
            Garanta a Sua
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none relative z-10" 
          onClick={toggleMobileMenu}
        >
          <div className="relative w-6 h-6">
            <span 
              className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              } top-3`}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'
              }`}
            />
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/90 backdrop-blur-md z-40 transform transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="container px-4 py-16 h-full flex flex-col items-center justify-center space-y-8">
          {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl font-display text-gray-700 hover:text-babypink-500 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            className="elegant-button mt-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Garanta a Sua
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
