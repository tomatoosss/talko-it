'use client';

import { useState, useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import VantaBackground from '@/components/VantaBackground';
import LoadingScreen from '@/components/LoadingScreen';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.services-menu')) {
        setIsServicesMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-slate-900">

      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img 
                  src="/images/logo/grafika_przezroczyste_tlo.png" 
                  alt="TALKO IT Solutions Logo" 
                  className="w-12 h-12 mr-4 logo-video"
                />
                <h1 className="text-2xl font-bold text-white font-sans tracking-wider">
                  <span className="text-white">TALKO</span>
                  <span className="company-name"> IT Solutions</span>
                </h1>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Strona główna
              </a>
              
              <div className="relative services-menu">
                <button 
                  onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                  onMouseEnter={() => setIsServicesMenuOpen(true)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      if (!document.querySelector('.services-menu:hover')) {
                        setIsServicesMenuOpen(false);
                      }
                    }, 100);
                  }}
                  className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
                >
                  Usługi
                  <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Services Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-lg border border-slate-700/50 transition-all duration-200 ${isServicesMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  onMouseEnter={() => setIsServicesMenuOpen(true)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      if (!document.querySelector('.services-menu:hover')) {
                        setIsServicesMenuOpen(false);
                      }
                    }, 100);
                  }}
                >
                  <div className="py-2">
                    <a 
                      href="/services/consulting" 
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                      onClick={() => setIsServicesMenuOpen(false)}
                    >
                      Consulting
                    </a>
                    <a 
                      href="/services/system-implementation" 
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                      onClick={() => setIsServicesMenuOpen(false)}
                    >
                      Wdrożenia Systemów IT
                    </a>
                    <a 
                      href="/services/automation" 
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                      onClick={() => setIsServicesMenuOpen(false)}
                    >
                      Automatyzacja
                    </a>
                    <a 
                      href="/services/iot" 
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                      onClick={() => setIsServicesMenuOpen(false)}
                    >
                      IoT
                    </a>
                    <a 
                      href="/services/ai" 
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                      onClick={() => setIsServicesMenuOpen(false)}
                    >
                      AI
                    </a>
                    <a 
                      href="/services/precision-agriculture" 
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                      onClick={() => setIsServicesMenuOpen(false)}
                    >
                      Rolnictwo precyzyjne
                    </a>
                  </div>
                </div>
              </div>
              
              <a href="/team" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Zespół
              </a>
              <a href="/contact" className="text-blue-400 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="pt-32 pb-24 bg-slate-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skontaktuj się z nami
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Jesteśmy tutaj, aby pomóc Ci w realizacji Twoich projektów IT
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-slate-800/30 backdrop-blur-md rounded-xl p-8 hover:bg-slate-800/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 max-w-2xl w-full border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Wyślij wiadomość
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-sm text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TALKO IT Solutions</h3>
              <p className="text-slate-400">
                Tworzymy przyszłość technologii poprzez innowacyjne rozwiązania IT.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Usługi</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/services/consulting" className="hover:text-blue-400 transition-colors">Consulting</a></li>
                <li><a href="/services/system-implementation" className="hover:text-blue-400 transition-colors">Wdrożenia Systemów IT</a></li>
                <li><a href="/services/automation" className="hover:text-blue-400 transition-colors">Automatyzacja</a></li>
                <li><a href="/services/iot" className="hover:text-blue-400 transition-colors">IoT</a></li>
                <li><a href="/services/ai" className="hover:text-blue-400 transition-colors">AI</a></li>
                <li><a href="/services/precision-agriculture" className="hover:text-blue-400 transition-colors">Rolnictwo precyzyjne</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Firma</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/#about" className="hover:text-blue-400 transition-colors">O nas</a></li>
                <li><a href="/team" className="hover:text-blue-400 transition-colors">Zespół</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-slate-400">
                <li>kontakt@talko-it.pl</li>
                <li>+48 123 456 789</li>
                <li>Warszawa, Polska</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 TALKO IT Solutions. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 