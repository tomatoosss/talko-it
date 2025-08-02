"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import VantaBackground from "@/components/VantaBackground";
import MFAGuard from "@/components/MFAGuard";

export default function MagicService() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <MFAGuard>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <VantaBackground effect="fog" magicMode={true} />
      
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/images/logo/grafika_przezroczyste_tlo.png" 
                alt="TALKO IT Solutions" 
                className="h-8 w-auto"
              />
              <span className="text-white font-semibold text-lg">TALKO IT Solutions</span>
            </Link>
            <Link 
              href="/" 
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              ← Powrót do strony głównej
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Magic
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Udział wysokiej klasy specjalisty Kombi Bombi w projektach IT
            </p>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">✨ Magia technologii w praktyce</h2>
              <p className="text-slate-300 text-lg">
                Kombi Bombi to ekspert najwyższej klasy, który wnosi do projektów IT niepowtarzalną wartość, 
                kreatywność i głęboką wiedzę techniczną.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column - Services */}
            <div className="space-y-8">
              <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔮</span>
                  Usługi Magic
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Konsultacje strategiczne</h4>
                      <p className="text-slate-300">Głęboka analiza potrzeb biznesowych i opracowanie strategii technologicznej z udziałem eksperta.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Architektura systemów</h4>
                      <p className="text-slate-300">Projektowanie zaawansowanych architektur IT z wykorzystaniem najnowszych technologii i best practices.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Optymalizacja procesów</h4>
                      <p className="text-slate-300">Identyfikacja i eliminacja wąskich gardeł w procesach IT oraz wdrażanie rozwiązań zwiększających efektywność.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Mentoring zespołów</h4>
                      <p className="text-slate-300">Transfer wiedzy i umiejętności do zespołów deweloperskich oraz wsparcie w rozwoju kompetencji.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Expert Profile */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">👨‍💻</span>
                  Kombi Bombi - Ekspert
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Specjalizacje</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-600/50 text-white px-3 py-1 rounded-full text-sm">Architektura IT</span>
                      <span className="bg-purple-600/50 text-white px-3 py-1 rounded-full text-sm">DevOps</span>
                      <span className="bg-purple-600/50 text-white px-3 py-1 rounded-full text-sm">Cloud Computing</span>
                      <span className="bg-purple-600/50 text-white px-3 py-1 rounded-full text-sm">AI/ML</span>
                      <span className="bg-purple-600/50 text-white px-3 py-1 rounded-full text-sm">IoT</span>
                      <span className="bg-purple-600/50 text-white px-3 py-1 rounded-full text-sm">Cybersecurity</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Doświadczenie</h4>
                    <ul className="text-slate-300 space-y-2">
                      <li>• 15+ lat w branży IT</li>
                      <li>• 50+ zrealizowanych projektów</li>
                      <li>• Certyfikacje AWS, Azure, Google Cloud</li>
                      <li>• Ekspertyza w metodologiach Agile/SAFe</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Podejście</h4>
                    <p className="text-slate-300">
                      Kombi Bombi łączy głęboką wiedzę techniczną z kreatywnym podejściem do rozwiązywania problemów. 
                      Każdy projekt traktuje jako unikalną okazję do stworzenia czegoś wyjątkowego.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Dlaczego Magic?</h2>
            <p className="text-xl text-slate-300">Unikalne korzyści z udziału eksperta Kombi Bombi</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-purple-500/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Przyspieszenie rozwoju</h3>
              <p className="text-slate-300">Szybsze wdrażanie rozwiązań dzięki doświadczeniu i know-how eksperta.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-purple-500/20">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innowacyjne rozwiązania</h3>
              <p className="text-slate-300">Kreatywne podejście do problemów technicznych i biznesowych.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-purple-500/20">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Jakość i bezpieczeństwo</h3>
              <p className="text-slate-300">Najwyższe standardy jakości i bezpieczeństwa w każdym projekcie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Gotowy na magię technologii?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Skontaktuj się z nami, aby omówić możliwości współpracy z ekspertem Kombi Bombi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Skontaktuj się
              </Link>
              <Link 
                href="/" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 border border-white/20"
              >
                Powrót do strony głównej
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/90 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              © 2024 TALKO IT Solutions. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </MFAGuard>
  );
} 