import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Portfolio from './components/Portfolio';
import ChatWidget from './components/ChatWidget';
import OrderModal from './components/OrderModal';
import Footer from './components/Footer';
import { SERVICES } from './constants';
import { ServiceItem } from './types';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOrder = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        
        <section id="services" className="py-20 container mx-auto px-4 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Service Poles</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choose the package that fits your current growth stage. Transparent pricing, no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onOrder={handleOrder} 
              />
            ))}
          </div>
        </section>

        <Portfolio />
      </main>

      <Footer />
      
      <ChatWidget />
      
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedService={selectedService} 
      />
    </div>
  );
}

export default App;