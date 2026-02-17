import React from 'react';
import { ServiceItem } from '../types';
import { ICON_MAP } from '../constants';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onOrder: (service: ServiceItem) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOrder }) => {
  const Icon = ICON_MAP[service.iconName];

  return (
    <div className="flex flex-col h-full bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
          <Icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
      </div>

      <div className="mt-auto pt-6 border-t border-slate-700/50">
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-2xl font-bold text-white">{service.price}</span>
        </div>
        
        <button 
          onClick={() => onOrder(service)}
          className="w-full py-3 bg-slate-700 hover:bg-white hover:text-slate-900 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2"
        >
          Order Now
          <Check className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;