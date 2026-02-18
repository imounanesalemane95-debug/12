import React from 'react';
import { CreditCard, Landmark, Wallet, Globe, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img 
                src="logo.png" 
                alt="Nexus Media" 
                className="h-10 w-auto object-contain opacity-90"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('h4');
                  fallback.className = 'text-white font-bold text-lg';
                  fallback.innerText = 'Nexus Media';
                  e.currentTarget.parentElement?.appendChild(fallback);
                }}
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              <span className="block text-slate-300 font-serif italic text-lg mb-2">Prêts pour la croissance.</span>
              Empowering Moroccan businesses with cutting-edge digital solutions. Connecting vision to reality.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-500" />
                contact@nexusmedia.ma
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-500" />
                0779688469
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-500" />
                <a href="https://nexusmedia-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors break-all">
                  nexusmedia-rho.vercel.app
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
             <h4 className="text-white font-bold mb-4">Secure Payment Options</h4>
             <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-3 rounded-lg hover:border-slate-700 transition-colors">
                  <Landmark className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-white text-sm font-semibold">Bank Transfer</p>
                    <p className="text-xs text-slate-500">CIH / Attijari</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-3 rounded-lg hover:border-slate-700 transition-colors">
                  <Wallet className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-white text-sm font-semibold">Cash</p>
                    <p className="text-xs text-slate-500">Wafacash / CashPlus</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-3 rounded-lg hover:border-slate-700 transition-colors">
                  <CreditCard className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-white text-sm font-semibold">Card</p>
                    <p className="text-xs text-slate-500">CMI / Visa / MC</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Nexus Media SARL. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;