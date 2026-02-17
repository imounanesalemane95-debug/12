import React from 'react';
import { ExternalLink, Instagram } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "Vestido BL",
    category: "Branding & Social Commerce",
    // Replaced grid images with a single screenshot image placeholder. 
    // You should replace this URL with the actual screenshot of the Instagram profile.
    image: "https://image2url.com/r2/default/images/1771370947366-c10dfa52-51ed-4037-a478-548062c2a1df.jpg",
    description: "Full Instagram shop setup for 'Vestido BL'. We curated a vintage aesthetic for second-hand products, managed the 6-post grid layout, and optimized the bio to drive sales across Morocco."
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-950 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-cyan-400 bg-cyan-950/30 rounded-full border border-cyan-900">
            OUR WORK
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects where we helped Moroccan businesses scale and redefine their digital presence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-900/10 hover:border-cyan-500/30 transition-all duration-300 w-full md:w-[26rem]">
              
              {/* Simulated Instagram Header */}
              <div className="bg-slate-950 p-4 flex items-center gap-3 border-b border-slate-800">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                   <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                     <span className="font-bold text-xs text-white">VB</span>
                   </div>
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-white leading-none mb-1">{project.title}</h4>
                   <p className="text-xs text-slate-500">Casablanca, Morocco</p>
                 </div>
                 <Instagram className="w-5 h-5 text-slate-400 ml-auto" />
              </div>

              {/* Project Screenshot Container */}
              <div className="relative bg-slate-950 border-b border-slate-800 group/image">
                <div className="relative w-full overflow-hidden">
                   <img 
                      src={project.image} 
                      alt={`Screenshot of ${project.title}`} 
                      className="w-full h-auto object-cover opacity-90 group-hover/image:opacity-100 transition-opacity duration-300"
                    />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider bg-cyan-950/30 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-slate-800 mt-auto">
                  <button className="text-sm font-medium text-slate-300 group-hover:text-white flex items-center gap-2 transition-colors">
                    View Case Study <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;