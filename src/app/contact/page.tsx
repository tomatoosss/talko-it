'use client';

import { useState, useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import VantaBackground from '@/components/VantaBackground';
import LoadingScreen from '@/components/LoadingScreen';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
              <img 
                src="/images/logo/grafika_przezroczyste_tlo.png" 
                alt="TALKO IT Solutions Logo" 
                className="w-12 h-12 mr-4 logo-video"
              />
              <h1 className="text-2xl font-bold text-white font-sans tracking-wider">
                <span className="text-white">TALKO</span>
                <span className="company-name"> IT Solutions</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Strona główna
              </a>
              <a href="/#services" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Usługi
              </a>
              <a href="/#about" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                O nas
              </a>
              <a href="/#technologies" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Technologie
              </a>
              <a href="/#partners" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Partnerzy
              </a>
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
                <li>Consulting</li>
                <li>Wdrożenia Systemów IT</li>
                <li>Automatyzacja</li>
                <li>Konsultacje IT</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Firma</h4>
              <ul className="space-y-2 text-slate-400">
                <li>O nas</li>
                <li>Zespół</li>
                <li>Kariera</li>
                <li>Blog</li>
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