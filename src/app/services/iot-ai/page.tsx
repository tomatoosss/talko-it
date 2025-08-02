"use client";

import Link from 'next/link';

export default function IoTAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/images/logo/grafika_przezroczyste_tlo.png" 
                alt="TALKO IT Solutions Logo" 
                className="w-12 h-12 mr-4 logo-video"
              />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-wider">
                <span className="text-white">TALKO</span>
                <span className="company-name"> IT Solutions</span>
              </h1>
            </div>
            <Link href="/" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Powrót do strony głównej
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              IoT/AI
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Rozwiązania Internet of Things i sztucznej inteligencji dla inteligentnych systemów i automatyzacji.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Przyszłość technologii
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Inteligentne urządzenia</h3>
                    <p className="text-slate-600 dark:text-slate-300">Połączenie IoT z AI</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Analiza danych</h3>
                    <p className="text-slate-600 dark:text-slate-300">Przetwarzanie i analiza big data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Automatyzacja</h3>
                    <p className="text-slate-600 dark:text-slate-300">Inteligentne systemy decyzyjne</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Nasze rozwiązania
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>• Platformy IoT</li>
                <li>• Machine Learning</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
                <li>• Smart Cities</li>
                <li>• Industrial IoT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 