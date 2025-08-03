"use client";

import Link from "next/link";

import VantaBackground from "@/components/VantaBackground";
import LoadingScreen from "@/components/LoadingScreen";
import { useEffect, useState } from "react";

// Ikona globu jako SVG komponent
const GlobeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
  </svg>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  // Funkcja do śledzenia kursora myszki
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Funkcja do zamykania menu po kliknięciu poza nim
  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest('.services-menu')) {
      setIsServicesMenuOpen(false);
    }
    if (!target.closest('nav')) {
      setIsMobileMenuOpen(false);
    }
  };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Funkcja do obsługi hover na partnerach
  const handleMouseLeave = () => {
    setHoveredPartner(null);
  };

  // Funkcja do obsługi zakończenia loadera
  const handleLoadingComplete = () => {
    setShowLoader(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {showLoader && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark">
        <VantaBackground effect="topology" />
      
      {/* Navigation */}
      <nav className={`bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50 sticky top-0 z-50 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
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
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
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
                      <Link 
                        href="/services/consulting" 
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Consulting
                      </Link>
                      <Link 
                        href="/services/system-implementation" 
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Wdrożenia Systemów IT
                      </Link>
                      <Link 
                        href="/services/automation" 
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Automatyzacja
                      </Link>
                      <Link 
                        href="/services/iot" 
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        IoT
                      </Link>
                      <Link 
                        href="/services/ai" 
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        AI
                      </Link>
                      <Link 
                        href="/services/precision-agriculture" 
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Rolnictwo precyzyjne
                      </Link>
                    </div>
                  </div>
                </div>
                
                <Link href="/team" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                  Zespół
                </Link>
                <Link href="/contact" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                  Kontakt
                </Link>
                
                {/* Global Display */}
                <div className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                  <GlobeIcon />
                  <span className="hidden sm:inline ml-2">Global</span>
                </div>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-blue-400 p-2 rounded-md transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2 border border-slate-700/50">
              <Link 
                href="/team" 
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Zespół
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              
              <div className="relative">
                <button 
                  onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                  className="w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 rounded-md transition-colors inline-flex items-center justify-between"
                >
                  Usługi
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`pl-4 space-y-1 ${isServicesMenuOpen ? 'block' : 'hidden'}`}>
                  <Link 
                    href="/services/consulting" 
                    className="block px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Consulting
                  </Link>
                  <Link 
                    href="/services/system-implementation" 
                    className="block px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wdrożenia Systemów IT
                  </Link>
                  <Link 
                    href="/services/automation" 
                    className="block px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Automatyzacja
                  </Link>
                  <Link 
                    href="/services/iot" 
                    className="block px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    IoT
                  </Link>
                  <Link 
                    href="/services/ai" 
                    className="block px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI
                  </Link>
                  <Link 
                    href="/services/precision-agriculture" 
                    className="block px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Rolnictwo precyzyjne
                  </Link>
                </div>
              </div>
              
              {/* Global Display */}
              <div className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                <GlobeIcon />
                <span className="ml-2">Global</span>
              </div>
            </div>
          </div>
        </div>
      </nav>



      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className={`text-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className={isLoaded ? 'fade-in-slide' : ''} style={{ animationDelay: '0s' }}>Smart IT.</span>
              <span className={`text-blue-400 ${isLoaded ? 'fade-in-slide' : ''}`} style={{ animationDelay: '0.5s' }}> Trusted Locally</span>
            </h1>
            <p className={`text-xl text-slate-300 mb-8 max-w-3xl mx-auto ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1s' }}>
              Profesjonalne rozwiązania IT, które przekształcają Twoje pomysły w rzeczywistość. 
              Od aplikacji webowych po zaawansowane systemy - jesteśmy tutaj, aby Ci pomóc.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isLoaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1.5s' }}>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Rozpocznij projekt
              </a>
              <a
                href="#about" 
                className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 hover:bg-slate-800/50 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Dowiedz się więcej
              </a>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-0 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Nasze usługi
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Oferujemy kompleksowe rozwiązania IT dostosowane do Twoich potrzeb
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* Consulting */}
            <Link href="/services/consulting" className="service-card bg-slate-800/10 backdrop-blur-md p-8 rounded-xl min-w-[300px] max-w-[350px] hover:bg-slate-800/20 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:border-2 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Consulting
              </h3>
              <p className="text-slate-300 text-center">
                Profesjonalne doradztwo IT w zakresie architektury, technologii i strategii rozwoju.
              </p>
            </Link>

            {/* System Implementation */}
            <Link href="/services/system-implementation" className="service-card bg-slate-800/10 backdrop-blur-md p-8 rounded-xl min-w-[300px] max-w-[350px] hover:bg-slate-800/20 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:border-2 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Wdrożenia Systemów IT
              </h3>
              <p className="text-slate-300 text-center">
                Kompleksowe wdrażanie i integracja systemów informatycznych dla przedsiębiorstw.
              </p>
            </Link>

            {/* Automation */}
            <Link href="/services/automation" className="service-card bg-slate-800/10 backdrop-blur-md p-8 rounded-xl min-w-[300px] max-w-[350px] hover:bg-slate-800/20 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:border-2 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Automatyzacja
              </h3>
              <p className="text-slate-300 text-center">
                Automatyzacja procesów biznesowych i wdrażanie rozwiązań DevOps dla zwiększenia efektywności.
              </p>
            </Link>




          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-800/90 backdrop-blur-sm mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">O nas</h2>
              <div className="space-y-4">
                <p className="text-lg text-slate-300">
                  Jesteśmy zespołem ekspertów IT specjalizującym się w <span className="text-blue-400 font-semibold">systemach IT, automatyzacji, IoT i sztucznej inteligencji</span>.
                </p>
                <p className="text-lg text-slate-300">
                  Pracujemy według międzynarodowych standardów zarządzania projektami, zapewniając <span className="text-blue-400 font-semibold">najwyższą jakość</span> i <span className="text-blue-400 font-semibold">terminowość realizacji</span>.
                </p>
                <p className="text-lg text-slate-300">
                  Dostarczamy rozwiązania <span className="text-blue-400 font-semibold">bez uzależnienia od konkretnych dostawców</span>, dając Ci pełną kontrolę nad technologią.
                </p>
                <p className="text-lg text-slate-300">
                  Nasz zespół łączy <span className="text-blue-400 font-semibold">20+ lat doświadczenia</span> z najnowszymi trendami technologicznymi, tworząc innowacyjne rozwiązania dla firm każdej wielkości.
                </p>
                <p className="text-lg text-slate-300">
                  Specjalizujemy się w <span className="text-blue-400 font-semibold">DevOps, Infrastructure as Code</span> i <span className="text-blue-400 font-semibold">automatyzacji procesów</span>, pomagając firmom zwiększyć efektywność i zmniejszyć koszty operacyjne.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-4 lg:p-8 rounded-2xl text-white shadow-lg self-center">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Dlaczego my?</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start text-sm lg:text-base">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold">Przejrzysta współpraca</div>
                    <div className="text-blue-100 text-xs lg:text-sm opacity-90">Pełna transparentność procesów</div>
                  </div>
                </li>
                <li className="flex items-start text-sm lg:text-base">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold">Rozwiązania szyte na miarę</div>
                    <div className="text-blue-100 text-xs lg:text-sm opacity-90">Dopasowane do Twoich potrzeb</div>
                  </div>
                </li>
                <li className="flex items-start text-sm lg:text-base">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold">Długoterminowe partnerstwo</div>
                    <div className="text-blue-100 text-xs lg:text-sm opacity-90">Budujemy zaufanie i relacje</div>
                  </div>
                </li>
                <li className="flex items-start text-sm lg:text-base">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold">Dedykowane wsparcie</div>
                    <div className="text-blue-100 text-xs lg:text-sm opacity-90">Jesteśmy tu, gdy nas potrzebujesz</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Kompetencje - pod ramką "Dlaczego my?" */}
          <div className="mt-12">
            <div className="flex flex-nowrap gap-4 lg:gap-6 justify-center overflow-x-auto">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-200 min-w-[140px]">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
                <div className="text-sm lg:text-base text-slate-600 dark:text-slate-300">Lat doświadczenia zespołu</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-200 min-w-[140px]">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                <div className="text-sm lg:text-base text-slate-600 dark:text-slate-300">Certyfikacji branżowych</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-200 min-w-[140px]">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
                <div className="text-sm lg:text-base text-slate-600 dark:text-slate-300">Bez vendor lock-in</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-slate-900/90 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologie
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Wykorzystujemy najnowsze technologie i narzędzia, aby tworzyć innowacyjne rozwiązania dla naszych klientów.
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient overlay na lewej stronie */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900/90 to-transparent z-10 pointer-events-none"></div>
            
            {/* Gradient overlay na prawej stronie */}
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900/90 to-transparent z-10 pointer-events-none"></div>
            
            {/* Animowany kontener technologii */}
            <div className="flex animate-scroll-technologies">
              {/* Pierwszy zestaw technologii */}
              <div className="flex gap-8 items-center flex-shrink-0">
                {/* Ansible */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/ansible_icon.png" 
                        alt="Ansible Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Ansible</p>
                  </div>
                </div>

                {/* Jinja2 */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/Jinja_software_logo.svg.png" 
                        alt="Jinja2 Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Jinja2</p>
                  </div>
                </div>

                {/* n8n */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/N8n-logo-new.svg" 
                        alt="n8n Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">n8n</p>
                  </div>
                </div>

                {/* Podman */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/Podman-logo-orig.png" 
                        alt="Podman Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Podman</p>
                  </div>
                </div>

                {/* AAP2 */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/ansible_icon.png" 
                        alt="AAP2 Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">AAP2</p>
                  </div>
                </div>

                {/* Terraform */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/Terraform_Logo.svg.png" 
                        alt="Terraform Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Terraform</p>
                  </div>
                </div>

                {/* Git */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/git.jpg" 
                        alt="Git Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Git</p>
                  </div>
                </div>

                {/* NetBox */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/netbox.jpg" 
                        alt="NetBox Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">NetBox</p>
                  </div>
                </div>

                {/* FRR */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/FRR.svg" 
                        alt="FRR Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">FRR</p>
                  </div>
                </div>
              </div>

              {/* Duplikat zestawu dla płynnej animacji */}
              <div className="flex gap-8 items-center flex-shrink-0">
                {/* Ansible */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/ansible_icon.png" 
                        alt="Ansible Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Ansible</p>
                  </div>
                </div>

                {/* Jinja2 */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/Jinja_software_logo.svg.png" 
                        alt="Jinja2 Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Jinja2</p>
                  </div>
                </div>

                {/* n8n */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/N8n-logo-new.svg" 
                        alt="n8n Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">n8n</p>
                  </div>
                </div>

                {/* Podman */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/Podman-logo-orig.png" 
                        alt="Podman Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Podman</p>
                  </div>
                </div>

                {/* AAP2 */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/ansible_icon.png" 
                        alt="AAP2 Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">AAP2</p>
                  </div>
                </div>

                {/* Terraform */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/Terraform_Logo.svg.png" 
                        alt="Terraform Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Terraform</p>
                  </div>
                </div>

                {/* Git */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/git.jpg" 
                        alt="Git Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Git</p>
                  </div>
                </div>

                {/* NetBox */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/netbox.jpg" 
                        alt="NetBox Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">NetBox</p>
                  </div>
                </div>

                {/* FRR */}
                <div className="flex items-center justify-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300 group min-w-[160px] h-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/FRR.svg" 
                        alt="FRR Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">FRR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-slate-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nasi Partnerzy
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Współpracujemy z wiodącymi firmami technologicznymi, aby dostarczać najlepsze rozwiązania.
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient overlay na lewej stronie */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-800/90 to-transparent z-10 pointer-events-none"></div>
            
            {/* Gradient overlay na prawej stronie */}
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-800/90 to-transparent z-10 pointer-events-none"></div>
            
            {/* Animowany kontener partnerów */}
            <div className="flex animate-scroll-partners">
              {/* Pierwszy zestaw partnerów */}
              <div className="flex gap-8 items-center flex-shrink-0">
                {/* Edgecore */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('edgecore')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/partners/edgecore.png" 
                        alt="Edgecore Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Edgecore</p>
                  </div>
                </div>

                {/* Advantech */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('advantech')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/partners/advantech-logo.webp" 
                        alt="Advantech Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Advantech</p>
                  </div>
                </div>

                {/* Red Hat */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('redhat')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/red-hat-ansible-automation-platform-monochrome-hd-png.png" 
                        alt="Red Hat Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Red Hat</p>
                  </div>
                </div>

                {/* Podman */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('podman')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/Podman-logo-orig.png" 
                        alt="Podman Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Podman</p>
                  </div>
                </div>

                {/* n8n */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('n8n')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/N8n-logo-new.svg" 
                        alt="n8n Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">n8n</p>
                  </div>
                </div>

                {/* Jinja */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('jinja')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/Jinja_software_logo.svg.png" 
                        alt="Jinja Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Jinja</p>
                  </div>
                </div>

                {/* NVIDIA */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('nvidia')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/partners/nvidia_logo.png" 
                        alt="NVIDIA Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">NVIDIA</p>
                  </div>
                </div>

                {/* Microsoft Azure */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('azure')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/partners/Microsoft_Azure.svg.png" 
                        alt="Microsoft Azure Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Azure</p>
                  </div>
                </div>

                {/* GitLab */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('gitlab')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/partners/gitlab_icon.png" 
                        alt="GitLab Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">GitLab</p>
                  </div>
                </div>
              </div>

              {/* Duplikat zestawu dla płynnej animacji */}
              <div className="flex gap-8 items-center flex-shrink-0">
                {/* Edgecore */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('edgecore')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/partners/edgecore.png" 
                        alt="Edgecore Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Edgecore</p>
                  </div>
                </div>

                {/* Advantech */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('advantech')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/partners/advantech-logo.webp" 
                        alt="Advantech Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Advantech</p>
                  </div>
                </div>

                {/* Red Hat */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('redhat')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/red-hat-ansible-automation-platform-monochrome-hd-png.png" 
                        alt="Red Hat Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Red Hat</p>
                  </div>
                </div>

                {/* Podman */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('podman')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/Podman-logo-orig.png" 
                        alt="Podman Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Podman</p>
                  </div>
                </div>

                {/* n8n */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('n8n')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/N8n-logo-new.svg" 
                        alt="n8n Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">n8n</p>
                  </div>
                </div>

                {/* Jinja */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('jinja')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/Technology/Jinja_software_logo.svg.png" 
                        alt="Jinja Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Jinja</p>
                  </div>
                </div>

                {/* NVIDIA */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('nvidia')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/partners/nvidia_logo.png" 
                        alt="NVIDIA Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">NVIDIA</p>
                  </div>
                </div>

                {/* Microsoft Azure */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('azure')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/partners/Microsoft_Azure.svg.png" 
                        alt="Microsoft Azure Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">Azure</p>
                  </div>
                </div>

                {/* GitLab */}
                <div 
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group min-w-[160px] h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredPartner('gitlab')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 mx-auto hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/images/partners/gitlab_icon.png" 
                        alt="GitLab Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">GitLab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="relative overflow-hidden bg-transparent py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gotowy na współpracę?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Skontaktuj się z nami i rozpocznij realizację swojego projektu IT
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Skontaktuj się z nami
            </a>
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

      {/* Partner Hover Tooltips */}
      {isClient && hoveredPartner === 'edgecore' && (
        <div 
          className="fixed pointer-events-none z-[9999] transition-all duration-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-200 dark:border-blue-700 rounded-lg shadow-xl p-4 max-w-xs"
          style={{
            left: mousePosition.x + 32,
            top: mousePosition.y + 16,
          }}
        >
          <div className="text-center">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Współpraca z Edgecore</h4>
            <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              Rozwijamy rozwiązania sieciowe i systemy telekomunikacyjne. 
              Integrujemy zaawansowane technologie networking.
            </p>
            <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-600">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                ✓ Wireless Solutions
              </span>
            </div>
          </div>
        </div>
      )}
      
      {isClient && hoveredPartner === 'advantech' && (
        <div 
          className="fixed pointer-events-none z-[9999] transition-all duration-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-200 dark:border-blue-700 rounded-lg shadow-xl p-4 max-w-xs"
          style={{
            left: mousePosition.x + 32,
            top: mousePosition.y + 16,
          }}
        >
          <div className="text-center">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Współpraca z Advantech</h4>
            <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              Rozwijamy systemy embedded i rozwiązania IoT. 
              Integrujemy inteligentne urządzenia i czujniki.
            </p>
            <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-600">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                ✓ IoT & Embedded
              </span>
            </div>
          </div>
        </div>
      )}
      
      {isClient && hoveredPartner === 'redhat' && (
        <div 
          className="fixed pointer-events-none z-[9999] transition-all duration-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-200 dark:border-blue-700 rounded-lg shadow-xl p-4 max-w-xs"
          style={{
            left: mousePosition.x + 32,
            top: mousePosition.y + 16,
          }}
        >
          <div className="text-center">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Współpraca z Red Hat</h4>
            <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              Implementujemy rozwiązania automatyzacji z Ansible. 
              Budujemy skalowalne infrastruktury IT.
            </p>
            <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-600">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                ✓ Ansible Automation
              </span>
            </div>
          </div>
        </div>
      )}
      
      {isClient && hoveredPartner === 'podman' && (
        <div 
          className="fixed pointer-events-none z-[9999] transition-all duration-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-200 dark:border-blue-700 rounded-lg shadow-xl p-4 max-w-xs"
          style={{
            left: mousePosition.x + 32,
            top: mousePosition.y + 16,
          }}
        >
          <div className="text-center">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Współpraca z Podman</h4>
            <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              Implementujemy konteneryzację bez daemon. 
              Budujemy bezpieczne środowiska kontenerowe.
            </p>
            <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-600">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                ✓ Daemonless Containers
              </span>
            </div>
          </div>
        </div>
      )}
      
      {isClient && hoveredPartner === 'n8n' && (
        <div 
          className="fixed pointer-events-none z-[9999] transition-all duration-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-200 dark:border-blue-700 rounded-lg shadow-xl p-4 max-w-xs"
          style={{
            left: mousePosition.x + 32,
            top: mousePosition.y + 16,
          }}
        >
          <div className="text-center">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Współpraca z n8n</h4>
            <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              Automatyzujemy przepływy pracy i integracje. 
              Tworzymy zaawansowane workflow automatyzacji.
            </p>
            <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-600">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                ✓ Workflow Automation
              </span>
            </div>
          </div>
        </div>
      )}
      
      {isClient && hoveredPartner === 'jinja' && (
        <div 
          className="fixed pointer-events-none z-[9999] transition-all duration-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-200 dark:border-blue-700 rounded-lg shadow-xl p-4 max-w-xs"
          style={{
            left: mousePosition.x + 32,
            top: mousePosition.y + 16,
          }}
        >
          <div className="text-center">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Współpraca z Jinja</h4>
            <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              Tworzymy dynamiczne szablony i automatyzację. 
              Implementujemy zaawansowane systemy templating.
            </p>
            <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-600">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                ✓ Template Engine
              </span>
            </div>
          </div>
        </div>
      )}
      
      {isClient && hoveredPartner === 'nvidia' && (
        <div 
          className="fixed pointer-events-none z-[9999] transition-all duration-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-200 dark:border-blue-700 rounded-lg shadow-xl p-4 max-w-xs"
          style={{
            left: mousePosition.x + 32,
            top: mousePosition.y + 16,
          }}
        >
          <div className="text-center">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Współpraca z NVIDIA</h4>
            <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              Implementujemy rozwiązania AI i uczenia maszynowego. 
              Wykorzystujemy zaawansowane technologie GPU.
            </p>
            <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-600">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                ✓ AI & Machine Learning
              </span>
            </div>
          </div>
        </div>
      )}
      
      {isClient && hoveredPartner === 'azure' && (
        <div 
          className="fixed pointer-events-none z-[9999] transition-all duration-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-200 dark:border-blue-700 rounded-lg shadow-xl p-4 max-w-xs"
          style={{
            left: mousePosition.x + 32,
            top: mousePosition.y + 16,
          }}
        >
          <div className="text-center">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Współpraca z Microsoft Azure</h4>
            <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              Implementujemy rozwiązania chmurowe i AI. 
              Budujemy skalowalne aplikacje w chmurze.
            </p>
            <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-600">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                ✓ Cloud & AI Solutions
              </span>
            </div>
          </div>
        </div>
      )}
      
      {isClient && hoveredPartner === 'gitlab' && (
        <div 
          className="fixed pointer-events-none z-[9999] transition-all duration-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-200 dark:border-blue-700 rounded-lg shadow-xl p-4 max-w-xs"
          style={{
            left: mousePosition.x + 32,
            top: mousePosition.y + 16,
          }}
        >
          <div className="text-center">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Współpraca z GitLab</h4>
            <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              Implementujemy DevOps i CI/CD pipelines. 
              Automatyzujemy procesy rozwoju oprogramowania.
            </p>
            <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-600">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                ✓ DevOps & CI/CD
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}