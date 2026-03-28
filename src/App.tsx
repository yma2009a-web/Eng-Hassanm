import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ArrowRight, CheckCircle2, BarChart3, Layers, Terminal, Mail, Phone, MapPin, Building2, Cpu, Users } from 'lucide-react';

const navLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#case-studies' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter text-slate-900 flex items-center gap-2">
          <Building2 className="w-7 h-7 text-blue-600" />
          Hassan<span className="text-blue-600">Engineering</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
          >
            Contact Our Team
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg md:hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-600 hover:text-slate-900"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors mt-4"
              >
                Contact Our Team
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Accepting new enterprise clients
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Structural & Civil <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Engineering Solutions.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
              We design and build scalable physical infrastructure and manage complex structural projects for industry leaders worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Request a Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
              >
                View Our Work
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                15+ Years Combined Experience
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                100+ Enterprise Projects
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden bg-slate-100 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/modern-bridge-structure/1200/1200" 
                alt="Modern Bridge Structure" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                  99%
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Project Success Rate</p>
                  <p className="text-xs text-slate-500">Delivered on-time & under budget</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              A decade of excellence in <span className="text-blue-600">structural engineering</span>.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Hassan Engineering Group is a premier technology consulting firm. We specialize in taking complex, ambiguous requirements and turning them into scalable, robust physical structures and infrastructure.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With a multidisciplinary team of senior architects and engineers, we don't just manage timelines—we ensure architectural integrity, code quality, and alignment with your strategic vision.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Engineers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$100M+</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Project Value Managed</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Dedicated Teams</h4>
                <p className="text-sm text-slate-600">We embed directly into your organization to accelerate delivery.</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/seed/structural-blueprint/800/1000" 
              alt="Structural Engineering Blueprint" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            
            {/* Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-2">
                <Terminal className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-lg">Technical Leadership</h3>
              </div>
              <p className="text-sm text-slate-600">Mentoring internal teams and establishing enterprise-grade best practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: 'Structural Engineering',
    description: 'Designing resilient, safe, and sustainable structural frameworks tailored to your enterprise needs.',
    icon: Layers,
    image: 'https://picsum.photos/seed/structural-steel/600/400'
  },
  {
    title: 'Civil Infrastructure',
    description: 'Full-cycle development of robust public and private infrastructure, from design to maintenance.',
    icon: Building2,
    image: 'https://picsum.photos/seed/civil-infrastructure/600/400'
  },
  {
    title: 'Construction Management',
    description: 'End-to-end management of complex building projects, ensuring on-time and under-budget delivery.',
    icon: BarChart3,
    image: 'https://picsum.photos/seed/construction-crane/600/400'
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
          <p className="text-lg text-slate-600">
            Specialized services designed to help technical teams execute flawlessly and businesses achieve their digital objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="h-48 w-full relative">
                <img src={service.image} alt={service.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-auto">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  {
    client: 'Metropolitan Transit',
    title: 'Designing the new suspension bridge',
    metrics: [
      { label: 'Load Capacity', value: '50,000T' },
      { label: 'Lifespan', value: '100+ Yrs' },
    ],
    description: 'Engineered a state-of-the-art suspension bridge that increased daily traffic flow by 40% while maintaining the highest safety and environmental standards.',
    image: 'https://picsum.photos/seed/suspension-bridge/800/600'
  },
  {
    client: 'Commercial Real Estate',
    title: 'Accelerating delivery of a 50-story skyscraper',
    metrics: [
      { label: 'Time Saved', value: '4 Months' },
      { label: 'Safety Record', value: '100%' },
    ],
    description: 'Implemented advanced construction methodologies and structural modeling that streamlined the building process, delivering the skyscraper ahead of schedule.',
    image: 'https://picsum.photos/seed/modern-skyscraper/800/600'
  },
];

function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proven Results</h2>
            <p className="text-lg text-slate-600">
              Data-driven case studies highlighting the impact of our strategic engineering management.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center text-slate-900 font-bold hover:text-blue-600 transition-colors">
            Discuss your project <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-slate-900 rounded-3xl overflow-hidden min-h-[500px] flex flex-col justify-end"
            >
              {/* Background Image */}
              <img 
                src={study.image} 
                alt={study.title} 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-0"></div>

              <div className="relative z-10 p-8 md:p-12">
                <div className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-4">
                  {study.client}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {study.title}
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed max-w-lg">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-700/50">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-sm text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-slate-900 p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Abstract background for contact side */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Let's build something great.</h2>
                <p className="text-slate-400 mb-12 leading-relaxed">
                  Whether you need a technical audit, project rescue, or a dedicated engineering team, we're here to help. Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="font-medium">partnerships@hassanengineering.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Headquarters</p>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-10 md:p-12">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-8 max-w-sm">
                    Thank you for reaching out. Our team has received your message and will be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-900">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-900">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-slate-900">Service Needed</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="structural">Structural Engineering</option>
                      <option value="civil">Civil Infrastructure</option>
                      <option value="management">Construction Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-900">Project Details</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project goals, timeline, and budget..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full py-4 px-6 text-white font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
          <Building2 className="w-6 h-6 text-blue-500" />
          Hassan<span className="text-blue-500">Engineering</span>
        </div>
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Hassan Engineering Group. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating CTA for mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a 
          href="#contact"
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
