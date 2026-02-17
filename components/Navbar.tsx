import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
           {/* 
             NOTE: Please ensure you have a 'logo.png' file in your public folder.
             The onError handler provides a text fallback if the image is missing.
           */}
           <img 
             src="logo.png" 
             alt="Nexus Media" 
             className="h-10 sm:h-12 w-auto object-contain" 
             onError={(e) => {
               e.currentTarget.style.display = 'none';
               const fallback = document.createElement('span');
               fallback.className = 'text-2xl font-bold text-white tracking-tighter cursor-pointer';
               fallback.innerHTML = 'NEXUS<span class="text-cyan-400">MEDIA</span>';
               e.currentTarget.parentElement?.appendChild(fallback);
             }}
           />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('root')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Home</button>
          <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Portfolio</button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20 hover:scale-105"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Nav */}
      {isMobileMenuOpen && (
         <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5 duration-200">
            <button onClick={() => scrollToSection('root')} className="text-left text-slate-300 hover:text-white py-2">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-left text-slate-300 hover:text-white py-2">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left text-slate-300 hover:text-white py-2">Portfolio</button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold"
            >
              Start Project
            </button>
         </div>
      )}
    </nav>
  );
};

export default Navbar;