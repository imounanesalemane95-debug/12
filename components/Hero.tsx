import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 pt-32 pb-20 sm:pt-40 sm:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 z-0 pointer-events-none"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Helping Moroccan SMEs Grow Since 2020
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Your Digital Growth, <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Simplified.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nexus Media transforms ambitious Moroccan businesses into dominant market leaders through strategic branding, high-end production, and data-driven marketing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToServices}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-cyan-900/20 flex items-center gap-2"
          >
            Browse Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={scrollToPortfolio}
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 border border-slate-700 hover:border-slate-600 rounded-xl font-medium transition-all backdrop-blur-sm"
          >
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;