"use client";

import Link from 'next/link';

export default function PrecisionAgriculturePage() {
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
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Powrót do strony głównej
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rolnictwo precyzyjne
            </h1>
            <p className="text-2xl text-blue-400 mb-4 font-semibold">
              Dane, które zwiększają plon i obniżają koszty
            </p>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Dla gospodarstw i grup producentów chcących podejmować decyzje agrotechniczne na podstawie danych, a nie uśrednień.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Problem
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Nadmierne nawożenie</h3>
                <p className="text-slate-300">
                  Zmienność gleb i wilgotności w obrębie pól powoduje nieefektywne nawożenie i nawadnianie.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Opóźnione decyzje</h3>
                <p className="text-slate-300">
                  Decyzje o zabiegach są podejmowane z opóźnieniem, bez bieżącego obrazu kondycji łanu.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Rozproszone dane</h3>
                <p className="text-slate-300">
                  Dane z czujników, satelitów i maszyn są rozproszone i trudne do wykorzystania operacyjnie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Nasze podejście
            </h2>
            <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto mb-8">
              Łączymy pozyskiwanie danych (satelity, czujniki glebowe/meteo, RTK, telemetria), analitykę (mapy stref, rekomendacje VRA/VRI, wykrywanie anomalii) oraz automatyzację (eksport do maszyn, alerty mobilne) w jednym, prostym panelu.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Co zyskasz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mniejsze nakłady</h3>
              <p className="text-slate-300">
                Precyzyjne dawki nawozów i wody tam, gdzie są potrzebne.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Stabilniejsze plony</h3>
              <p className="text-slate-300">
                Wyrównanie łanu i lepsze decyzje w strefach słabszych.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mniej ryzyka</h3>
              <p className="text-slate-300">
                Szybkie wykrywanie stresu wodnego, chorób i wylegania.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Pełna dokumentacja</h3>
              <p className="text-slate-300">
                Ślad decyzji i zabiegów, łatwiejsze raportowanie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Co dostarczamy
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Panel www + aplikacja mobilna</h3>
                <p className="text-slate-300">Mapy stref, kondycja upraw, alerty.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Mapy aplikacyjne (VRA/VRI)</h3>
                <p className="text-slate-300">Nawożenie, nawadnianie, opcjonalnie siew/ochrona.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Integracje z maszynami</h3>
                <p className="text-slate-300">Eksport ISO-XML/Shape, telemetria, rejestr zabiegów.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">IoT i łączność</h3>
                <p className="text-slate-300">Sondy glebowe, stacje meteo, LoRaWAN/LTE, RTK.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Szkolenia i wsparcie sezonowe</h3>
                <p className="text-slate-300">Wdrożenie operatorów, SLA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Jak wdrażamy (4 kroki, ~6–8 tygodni)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Audyt i plan</h3>
              <p className="text-slate-300">
                Analiza pól, dostępnych danych i „szybkich wygranych".
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instalacja i integracje</h3>
              <p className="text-slate-300">
                Czujniki, łączność, zasilenie platformy danymi.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Modele i mapy</h3>
              <p className="text-slate-300">
                Strefy produktywności, pierwsze mapy aplikacyjne.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Operacja i optymalizacja</h3>
              <p className="text-slate-300">
                Eksport do maszyn, alerty, korekty progów.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            KPI, które monitorujemy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Zużycie zasobów</h3>
              <p className="text-slate-300">Nawozów/ha i wody/ha, koszt zabiegów/ha.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Plon</h3>
              <p className="text-slate-300">Plon/ha i jego zmienność między strefami.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Czas reakcji</h3>
              <p className="text-slate-300">Czas reakcji na alerty, odsetek zabiegów realizowanych wg VRA/VRI.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Pokrycie danych</h3>
              <p className="text-slate-300">Ile % areału jest monitorowane w czasie sezonu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Technologia
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Satelity</h3>
                <p className="text-slate-300 text-sm">NDVI/NDRE</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">UAV</h3>
                <p className="text-slate-300 text-sm">Opcjonalnie</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Sondy</h3>
                <p className="text-slate-300 text-sm">Glebowe/meteo</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">RTK</h3>
                <p className="text-slate-300 text-sm">Precyzyjne pozycjonowanie</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Data Lake + ETL</h3>
                <p className="text-slate-300 text-sm">Przetwarzanie danych</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Algorytmy</h3>
                <p className="text-slate-300 text-sm">Segmentacja stref i wykrywanie anomalii</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Eksport</h3>
                <p className="text-slate-300 text-sm">ISO-XML/Shape</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Integracja</h3>
                <p className="text-slate-300 text-sm">FMIS/BI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Dlaczego my
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">End-to-end</h3>
              <p className="text-slate-300">
                Od czujników po mapy dla maszyn i szkolenia.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Modułowo i bez lock-in</h3>
              <p className="text-slate-300">
                Integrujemy się z Twoim parkiem maszynowym.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Skupienie na operacyjności</h3>
              <p className="text-slate-300">
                Proste narzędzia, realne decyzje „na polu".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Chcesz sprawdzić potencjał na Twoich polach?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Umów 30-min konsultację — przygotujemy przykładową mapę stref i plan wdrożenia na kolejny sezon.
            </p>
            <Link 
              href="/#contact" 
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center hover:bg-blue-50"
            >
              Umów konsultację
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 