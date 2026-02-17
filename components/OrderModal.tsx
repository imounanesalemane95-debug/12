import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { ServiceItem, OrderFormData } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: ServiceItem | null;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    businessType: '',
    serviceId: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, serviceId: selectedService.title }));
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // In a real app, you would send this data to a backend or Google Sheet
      console.log('Order Submitted:', formData);
    }, 1500);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ name: '', businessType: '', serviceId: '', whatsapp: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎉</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Order Received!</h3>
            <p className="text-slate-400 mb-6">
              Thank you {formData.name}. Our team will contact you on WhatsApp shortly to confirm the details.
            </p>
            <button 
              onClick={handleClose}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-1">Start Your Project</h2>
            <p className="text-slate-400 mb-6 text-sm">Fill in the details below and we'll get to work.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-600"
                  placeholder="Youssef Benali"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Business Type</label>
                <input 
                  type="text" 
                  required
                  value={formData.businessType}
                  onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-600"
                  placeholder="e.g. Restaurant, E-commerce, Real Estate"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">WhatsApp Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-600"
                  placeholder="+212 6..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Selected Service</label>
                <input 
                  type="text" 
                  readOnly
                  value={formData.serviceId}
                  className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 cursor-not-allowed"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Confirm Order'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderModal;