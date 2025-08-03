'use client';

import { useState, useEffect } from 'react';
import VantaBackground from '@/components/VantaBackground';
import LoadingScreen from '@/components/LoadingScreen';

export default function TeamPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

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

  const teamMembers = [
    {
      name: "Tomasz",
      position: "CTO & Lead Architect",
      description: "Ekspert z 15+ latami doświadczenia w architekturze systemów IT i strategii technologicznej. Kieruje rozwojem technologicznym firmy i architekturą rozwiązań.",
      expertise: ["Technology Strategy", "System Architecture", "Cloud Computing", "Team Leadership"],
      image: "/images/team/skipper.jpg"
    },
    {
      name: "Kasia",
      position: "CFO & Data Strategy Lead",
      description: "Ekspertka finansowa z pasją do strategii danych. Łączy analizę finansową z zaawansowanymi technologiami przetwarzania danych dla optymalizacji biznesowej.",
      expertise: ["Financial Planning", "Data Strategy", "Business Intelligence", "Risk Management"],
      image: "/images/team/private.jpg"
    },
    {
      name: "Konrad",
      position: "COO & Solutions Architect",
      description: "Kierownik operacyjny z doświadczeniem w projektowaniu i wdrażaniu rozwiązań biznesowych. Optymalizuje procesy operacyjne i architekturę systemów.",
      expertise: ["Operations Management", "Solutions Architecture", "Process Optimization", "Business Strategy"],
      image: "/images/team/rico.jpg"
    },
    {
      name: "Marcin",
      position: "Chief Scientist & Industry 4.0 Specialist",
      description: "Naukowiec i innowator specjalizujący się w technologiach Przemysłu 4.0. Prowadzi badania nad automatyzacją, IoT i zaawansowanymi systemami produkcyjnymi.",
      expertise: ["Industry 4.0", "Research & Development", "IoT & Automation", "Manufacturing Systems"],
      image: "/images/team/kowalski.jpg"
    }
  ];

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
              
              <a href="/team" className="text-blue-400 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Zespół
              </a>
              <a href="/contact" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nasz Zespół
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Poznaj ekspertów z naszej firmy rodzinnej, którzy tworzą innowacyjne rozwiązania IT dla Twojej firmy
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-md rounded-xl p-6 transition-all duration-300 border relative ${
                  hoveredMember === index 
                    ? 'bg-slate-700/70 shadow-lg shadow-blue-500/20' 
                    : hoveredMember !== null 
                      ? 'bg-slate-700/5 border-slate-600/10 opacity-50' 
                      : 'bg-slate-700/30 border-slate-600/30'
                }`}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Animated border effect - only outside */}
                {hoveredMember === index && (
                  <div className="absolute -inset-2 rounded-xl z-[-1] team-card-border">
                    <div className="absolute inset-2 bg-slate-900 rounded-xl"></div>
                  </div>
                )}
                                 <div className="text-center mb-6">
                   <div className="w-48 h-80 rounded-lg mx-auto mb-4 overflow-hidden border-4 border-blue-500/30">
                     <img 
                       src={member.image} 
                       alt={member.name}
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.nextElementSibling.style.display = 'flex';
                       }}
                     />
                     <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>
                       {member.name.split(' ').map(n => n[0]).join('')}
                     </div>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                   <p className="text-blue-400 font-semibold text-sm mb-3">{member.position}</p>
                   <p className="text-slate-300 text-sm leading-relaxed">{member.description}</p>
                 </div>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm mb-3">Specjalizacje:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nasze Wartości
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Współpraca, innowacja i jakość to fundamenty naszego zespołu
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/30">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Współpraca</h3>
              <p className="text-slate-300">Budujemy silne relacje z klientami i partnerami, oparte na wzajemnym zaufaniu i transparentności.</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/30">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innowacja</h3>
              <p className="text-slate-300">Nieustannie eksplorujemy nowe technologie i metody, aby dostarczać najlepsze rozwiązania.</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/30">
              <div className="w-16 h-16 bg-green-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Jakość</h3>
              <p className="text-slate-300">Każdy projekt realizujemy z najwyższą starannością, dbając o każdy szczegół i terminowość.</p>
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