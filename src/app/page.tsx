"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import VantaBackground from "@/components/VantaBackground";
import LoadingScreen from "@/components/LoadingScreen";
import { useEffect, useState } from "react";

// Flaga jako SVG komponent
const PolishFlag = () => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="7.5" fill="#FFFFFF"/>
    <rect y="7.5" width="20" height="7.5" fill="#DC143C"/>
  </svg>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#contact" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                  Kontakt
                </Link>
                
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
                      <Link 
                        href="/services/magic" 
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-purple-400 transition-colors"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Magic
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Language Display */}
                <div className="flex items-center space-x-2 text-slate-300 px-3 py-2 rounded-md text-sm font-medium">
                  <PolishFlag />
                  <span className="hidden sm:inline">PL</span>
                </div>
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
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Rozpocznij projekt
          </a>
          <a
                href="#about" 
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
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
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Nasze usługi
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Oferujemy kompleksowe rozwiązania IT dostosowane do Twoich potrzeb
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* Consulting */}
            <Link href="/services/consulting" className="service-card bg-white/10 dark:bg-slate-800/10 backdrop-blur-md p-8 rounded-xl min-w-[300px] max-w-[350px] hover:bg-white/20 dark:hover:bg-slate-800/20 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:border-2 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">
                Consulting
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">
                Profesjonalne doradztwo IT w zakresie architektury, technologii i strategii rozwoju.
              </p>
            </Link>

            {/* System Implementation */}
            <Link href="/services/system-implementation" className="service-card bg-white/10 dark:bg-slate-800/10 backdrop-blur-md p-8 rounded-xl min-w-[300px] max-w-[350px] hover:bg-white/20 dark:hover:bg-slate-800/20 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:border-2 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">
                Wdrożenia Systemów IT
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">
                Kompleksowe wdrażanie i integracja systemów informatycznych dla przedsiębiorstw.
              </p>
            </Link>

            {/* Automation */}
            <Link href="/services/automation" className="service-card bg-white/10 dark:bg-slate-800/10 backdrop-blur-md p-8 rounded-xl min-w-[300px] max-w-[350px] hover:bg-white/20 dark:hover:bg-slate-800/20 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:border-2 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">
                Automatyzacja
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">
                Automatyzacja procesów biznesowych i wdrażanie rozwiązań DevOps dla zwiększenia efektywności.
              </p>
            </Link>

            {/* IoT */}
            <Link href="/services/iot" className="service-card bg-white/10 dark:bg-slate-800/10 backdrop-blur-md p-8 rounded-xl flex flex-col justify-center items-center text-center min-w-[300px] max-w-[350px] hover:bg-white/20 dark:hover:bg-slate-800/20 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:border-2 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                IoT
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Rozwiązania Internet of Things dla inteligentnych systemów, czujników i automatyzacji.
              </p>
            </Link>

            {/* AI */}
            <Link href="/services/ai" className="service-card bg-white/10 dark:bg-slate-800/10 backdrop-blur-md p-8 rounded-xl flex flex-col justify-center items-center text-center min-w-[300px] max-w-[350px] hover:bg-white/20 dark:hover:bg-slate-800/20 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:border-2 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                AI
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Rozwiązania sztucznej inteligencji i uczenia maszynowego dla zaawansowanej automatyzacji.
              </p>
            </Link>

            {/* Precision Agriculture */}
            <Link href="/services/precision-agriculture" className="service-card bg-white/10 dark:bg-slate-800/10 backdrop-blur-md p-8 rounded-xl flex flex-col justify-center items-center text-center min-w-[300px] max-w-[350px] hover:bg-white/20 dark:hover:bg-slate-800/20 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:border-2 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Rolnictwo precyzyjne
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Zaawansowane technologie dla rolnictwa precyzyjnego, monitorowania upraw i optymalizacji produkcji.
              </p>
            </Link>

            {/* Magic */}
            <Link href="/services/magic" className="service-card bg-white/10 dark:bg-slate-800/10 backdrop-blur-md p-8 rounded-xl flex flex-col justify-center items-center text-center min-w-[300px] max-w-[350px] hover:bg-white/20 dark:hover:bg-slate-800/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 hover:border-2 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Magic
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Udział wysokiej klasy specjalisty Kombi Bombi w projektach IT - magia technologii w praktyce.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">O nas</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Jesteśmy szwajcarskim partnerem doradczym IT dostarczającym szyte na miarę architekturę, technologię i strategie rozwoju — od systemów IT, przez automatyzację/DevOps i IoT, po AI. Pracujemy wg PMP i SAFe, z naciskiem na value-driven decyzje, mierzalne ROI/TCO i transparentną współpracę. Stawiamy na win-win, długoterminowe relacje i rozwiązania bez lock-in, dopasowane do realiów rynku szwajcarskiego.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-4 lg:p-8 rounded-2xl text-white shadow-lg self-start">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Dlaczego my?</h3>
              <ul className="space-y-2 lg:space-y-3">
                <li className="flex items-center text-sm lg:text-base">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mierzalne ROI/TCO
                </li>
                <li className="flex items-center text-sm lg:text-base">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Szyte na miarę
                </li>
                <li className="flex items-center text-sm lg:text-base">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Długoterminowe relacje
                </li>
                <li className="flex items-center text-sm lg:text-base">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lokalne wsparcie
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
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-200 min-w-[140px]">
                <div className="text-lg lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">PMP</div>
                <div className="text-sm lg:text-base text-slate-600 dark:text-slate-300">Certyfikacja</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-200 min-w-[140px]">
                <div className="text-lg lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">SAFe</div>
                <div className="text-sm lg:text-base text-slate-600 dark:text-slate-300">Certyfikacja</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-200 min-w-[140px]">
                <div className="text-lg lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">DevOps</div>
                <div className="text-sm lg:text-base text-slate-600 dark:text-slate-300">Praktyki</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-200 min-w-[140px]">
                <div className="text-lg lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">IaC</div>
                <div className="text-sm lg:text-base text-slate-600 dark:text-slate-300">Infrastructure as Code</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technologie
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Wykorzystujemy najnowsze technologie i narzędzia, aby tworzyć innowacyjne rozwiązania dla naszych klientów.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-reverse gap-8 items-center">
                {/* Partnerzy technologiczni */}
                <div className="flex gap-8 items-center">
                  {/* Ansible */}
                  <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300 group min-w-[200px]">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3 mx-auto hover:scale-110 transition-transform duration-300">
                        <img 
                          src="/images/Technology/ansible_icon.png" 
                          alt="Ansible Logo" 
                          className="h-12 w-auto"
                        />
                      </div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Ansible</p>
                    </div>
                  </div>

                  {/* Jinja2 */}
                  <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300 group min-w-[200px]">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3 mx-auto hover:scale-110 transition-transform duration-300">
                        <img 
                          src="/images/Technology/Jinja_software_logo.svg.png" 
                          alt="Jinja2 Logo" 
                          className="h-12 w-auto"
                        />
                      </div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Jinja2</p>
                    </div>
                  </div>

                  {/* n8n */}
                  <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300 group min-w-[200px]">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3 mx-auto hover:scale-110 transition-transform duration-300">
                        <img 
                          src="/images/Technology/N8n-logo-new.svg" 
                          alt="n8n Logo" 
                          className="h-12 w-auto"
                        />
                      </div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">n8n</p>
                    </div>
                  </div>

                  {/* Podman */}
                  <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300 group min-w-[200px]">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3 mx-auto hover:scale-110 transition-transform duration-300">
                        <img 
                          src="/images/Technology/Podman-logo-orig.png" 
                          alt="Podman Logo" 
                          className="h-12 w-auto"
                        />
                      </div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Podman</p>
                    </div>
                  </div>

                  {/* AAP2 */}
                  <div className="flex items-center justify-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300 group min-w-[200px]">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3 mx-auto hover:scale-110 transition-transform duration-300">
                        <img 
                          src="/images/Technology/ansible_icon.png" 
                          alt="AAP2 Logo" 
                          className="h-12 w-auto"
                        />
                      </div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">AAP2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Nasi Partnerzy
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Współpracujemy z wiodącymi firmami technologicznymi, aby dostarczać najlepsze rozwiązania.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Edgecore */}
            <div 
              className="partner-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl hover:bg-white/90 dark:hover:bg-slate-800/90 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredPartner('edgecore')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/images/partners/edgecore.png" 
                  alt="Edgecore Logo" 
                  className="h-16 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center">Edgecore</h3>
            </div>

            {/* Advantech */}
            <div 
              className="partner-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl hover:bg-white/90 dark:hover:bg-slate-800/90 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredPartner('advantech')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/images/partners/advantech-logo.webp" 
                  alt="Advantech Logo" 
                  className="h-16 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center">Advantech</h3>
            </div>

            {/* Red Hat */}
            <div 
              className="partner-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl hover:bg-white/90 dark:hover:bg-slate-800/90 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredPartner('redhat')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/images/Technology/red-hat-ansible-automation-platform-monochrome-hd-png.png" 
                  alt="Red Hat Logo" 
                  className="h-16 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center">Red Hat</h3>
            </div>

            {/* Podman */}
            <div 
              className="partner-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl hover:bg-white/90 dark:hover:bg-slate-800/90 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredPartner('podman')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/images/Technology/Podman-logo-orig.png" 
                  alt="Podman Logo" 
                  className="h-16 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center">Podman</h3>
            </div>

            {/* n8n */}
            <div 
              className="partner-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl hover:bg-white/90 dark:hover:bg-slate-800/90 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredPartner('n8n')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/images/Technology/N8n-logo-new.svg" 
                  alt="n8n Logo" 
                  className="h-16 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center">n8n</h3>
            </div>

            {/* Jinja */}
            <div 
              className="partner-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl hover:bg-white/90 dark:hover:bg-slate-800/90 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredPartner('jinja')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/images/Technology/Jinja_software_logo.svg.png" 
                  alt="Jinja Logo" 
                  className="h-16 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center">Jinja</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 bg-white/20 dark:bg-slate-800/20 backdrop-blur-md rounded-xl p-8 hover:bg-white/30 dark:hover:bg-slate-800/30 hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Skontaktuj się z nami
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Jesteśmy tutaj, aby pomóc Ci w realizacji Twoich projektów IT
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/20 dark:bg-slate-800/20 backdrop-blur-md rounded-xl p-6 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Informacje kontaktowe
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center group hover:bg-blue-50 dark:hover:bg-slate-700/50 p-3 rounded-lg transition-all duration-200">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">kontakt@talko-it.pl</span>
                  </div>
                  <div className="flex items-center group hover:bg-blue-50 dark:hover:bg-slate-700/50 p-3 rounded-lg transition-all duration-200">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">+48 123 456 789</span>
                  </div>
                  <div className="flex items-center group hover:bg-blue-50 dark:hover:bg-slate-700/50 p-3 rounded-lg transition-all duration-200">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Warszawa, Polska</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/20 dark:bg-slate-800/20 backdrop-blur-md rounded-xl p-6 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Godziny pracy
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between group hover:bg-blue-50 dark:hover:bg-slate-700/50 p-3 rounded-lg transition-all duration-200">
                    <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Poniedziałek - Piątek</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:scale-110 transition-transform duration-200">9:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between group hover:bg-blue-50 dark:hover:bg-slate-700/50 p-3 rounded-lg transition-all duration-200">
                    <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Sobota</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:scale-110 transition-transform duration-200">10:00 - 14:00</span>
                  </div>
                  <div className="flex items-center justify-between group hover:bg-blue-50 dark:hover:bg-slate-700/50 p-3 rounded-lg transition-all duration-200">
                    <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Niedziela</span>
                    <span className="text-red-500 dark:text-red-400 font-semibold group-hover:scale-110 transition-transform duration-200">Zamknięte</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 dark:bg-slate-800/20 backdrop-blur-md rounded-xl p-6 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </div>
    </>
  );
}