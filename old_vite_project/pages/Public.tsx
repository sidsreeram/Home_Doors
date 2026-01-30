import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Reveal, SectionHeading, Button } from '../components/Shared';
import { HERO_IMAGE } from '../constants';
import { ChevronRight, CheckCircle, ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom'; // Actually using HashRouter but simpler to just use anchor tags for scrolling sections in SPA

export const PublicHome = () => {
  const { projects, products, solutions, customers, team, jobs } = useContext(AppContext);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGE} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-white">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
              Premium Aluminium <br /> For Modern Spaces
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto">
              Precision engineering meets architectural elegance. We craft bespoke windows, doors, and facades that define your space.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white border-none">View Our Works</Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">Get a Quote</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro / Stats Strip */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="container mx-auto px-4 flex flex-wrap justify-around text-center gap-8">
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-amber-500">25+</span>
            <span className="text-sm text-slate-400 uppercase tracking-widest mt-2">Years Experience</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-amber-500">500+</span>
            <span className="text-sm text-slate-400 uppercase tracking-widest mt-2">Projects Completed</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-amber-500">100%</span>
            <span className="text-sm text-slate-400 uppercase tracking-widest mt-2">Quality Guarantee</span>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal>
            <SectionHeading title="Tailored Solutions" subtitle="From residential sanctuaries to towering commercial facades, we provide specialized aluminium systems." centered />
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {solutions.map((sol, idx) => (
              <Reveal key={sol.id} delay={idx * 200} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[16/9]">
                  <img src={sol.imageUrl} alt={sol.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{sol.title}</h3>
                    <p className="text-stone-300 mb-4">{sol.description}</p>
                    <ul className="space-y-1">
                      {sol.points.map((p, i) => (
                        <li key={i} className="flex items-center text-amber-400 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading title="Our Products" subtitle="Engineered for performance and aesthetics." />
            <a href="#" className="hidden md:flex items-center text-amber-600 font-medium hover:underline">View All Products <ArrowRight className="w-4 h-4 ml-2"/></a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.published).slice(0, 3).map((product, idx) => ( // Show only first 3
              <Reveal key={product.id} delay={idx * 150}>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-stone-100 h-full flex flex-col">
                  <div className="h-64 bg-stone-200 overflow-hidden">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">{product.category}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-slate-600 text-sm mb-4 flex-grow">{product.description}</p>
                    <div className="mt-auto pt-4 border-t border-stone-100 flex justify-between items-center">
                      <span className="text-slate-400 text-sm">High Spec</span>
                      <button className="text-slate-900 font-medium hover:text-amber-600 transition-colors">Details</button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Works */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Selected Works" subtitle="A showcase of our finest architectural fabrications." centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {projects.slice(0, 6).map((project, idx) => (
               <Reveal key={project.id} delay={idx * 100}>
                 <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                   <img src={project.imageUrl} alt={project.title} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/70 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-white text-xl font-bold">{project.title}</h4>
                        <p className="text-stone-300 text-sm mt-1">{project.location}</p>
                      </div>
                   </div>
                 </div>
               </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline">View Full Portfolio</Button>
          </div>
        </div>
      </section>

      {/* AI Promo Banner */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/10 transform skew-x-12"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
             <div className="inline-block px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded mb-4">NEW FEATURE</div>
             <h2 className="text-4xl font-serif font-bold mb-4">Visualize Your Home with AI</h2>
             <p className="text-slate-300 text-lg mb-8">
               Not sure what fits? Use our Gemini-powered Design Studio to upload a photo of your home and ask to see it with modern sliding doors or a new facade.
             </p>
             <Link to="/design-studio">
                <Button className="bg-white text-slate-900 hover:bg-stone-200">Try Design Studio</Button>
             </Link>
          </div>
          <div className="md:w-5/12">
            {/* Visual placeholder for AI tool */}
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="flex gap-2 mb-4">
                 <div className="w-full h-32 bg-slate-700 rounded animate-pulse"></div>
                 <div className="w-full h-32 bg-slate-600 rounded"></div>
               </div>
               <div className="h-8 w-3/4 bg-slate-700 rounded mb-2"></div>
               <div className="h-8 w-1/2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Customers */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
               <SectionHeading title="Why Home Doors?" />
               <div className="space-y-8">
                 <div className="flex">
                   <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold">1</div>
                   <div className="ml-6">
                     <h4 className="text-xl font-bold mb-2">Precision Fabrication</h4>
                     <p className="text-slate-600">We use state-of-the-art CNC machinery to ensure every cut and joint is perfect.</p>
                   </div>
                 </div>
                 <div className="flex">
                   <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold">2</div>
                   <div className="ml-6">
                     <h4 className="text-xl font-bold mb-2">Timely Delivery</h4>
                     <p className="text-slate-600">We respect your timeline. Our optimized workflow ensures on-time installation.</p>
                   </div>
                 </div>
                 <div className="flex">
                   <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold">3</div>
                   <div className="ml-6">
                     <h4 className="text-xl font-bold mb-2">After-Sales Support</h4>
                     <p className="text-slate-600">Our relationship doesn't end at installation. We offer comprehensive maintenance.</p>
                   </div>
                 </div>
               </div>
            </div>
            <div>
               <SectionHeading title="Trusted By" />
               <p className="text-slate-600 mb-8">We work with the region's top architects and developers.</p>
               <div className="grid grid-cols-2 gap-4">
                  {customers.map(c => (
                    <div key={c.id} className="bg-white p-6 rounded shadow-sm border border-stone-100 flex items-center justify-center">
                      <div className="text-center">
                         <div className="w-12 h-12 bg-stone-200 rounded-full mx-auto mb-2 overflow-hidden">
                           <img src={c.logoUrl} alt={c.name} className="w-full h-full object-cover"/>
                         </div>
                         <h5 className="font-bold text-slate-800">{c.name}</h5>
                         <span className="text-xs text-slate-500">{c.type}</span>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Team */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
           <SectionHeading title="About Us & Team" centered />
           <div className="max-w-3xl mx-auto text-center mb-16 text-lg text-slate-600">
             Founded in 1998, Home Doors has evolved from a small workshop to a leading fabrication facility. Our mission is to bridge the gap between architectural vision and structural reality.
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <Reveal key={member.id} delay={i * 100}>
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-stone-100">
                      <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                    <p className="text-amber-600 font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-slate-500 text-sm">{member.bio}</p>
                  </div>
                </Reveal>
              ))}
           </div>
        </div>
      </section>
      
      {/* Contact & Careers */}
      <section id="contact" className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Let's Build Something Great</h2>
              <p className="text-slate-400 mb-8">Ready to start your project? Get in touch for a consultation or quote.</p>
              
              <form className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="Name" className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-500" />
                   <input type="text" placeholder="Phone" className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-500" />
                 </div>
                 <input type="email" placeholder="Email" className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-500" />
                 <textarea rows={4} placeholder="Project Details" className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-500"></textarea>
                 <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white border-none">Send Message</Button>
              </form>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
              <p className="text-slate-400 mb-6">We are always looking for skilled talent.</p>
              <div className="space-y-4">
                {jobs.filter(j => j.isOpen).map(job => (
                   <div key={job.id} className="border-b border-slate-700 pb-4 last:border-0">
                      <div className="flex justify-between items-start">
                         <div>
                           <h4 className="font-bold text-lg">{job.title}</h4>
                           <span className="text-xs text-amber-500 uppercase">{job.type} &bull; {job.location}</span>
                         </div>
                         <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:text-white">Apply</Button>
                      </div>
                   </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                 <div className="flex items-center text-slate-300 mb-2"><MapPin className="w-5 h-5 mr-3 text-amber-500"/> 123 Aluminium Blvd, Metal City</div>
                 <div className="flex items-center text-slate-300"><Briefcase className="w-5 h-5 mr-3 text-amber-500"/> careers@homedoors.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
