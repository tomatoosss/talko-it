"use client";

import Link from 'next/link';

export default function IoTPage() {
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
              Internet of Things (IoT)
            </h1>
            <p className="text-2xl text-blue-400 mb-4 font-semibold">
              Od urządzenia po biznesowy efekt
            </p>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Dostarczamy całościowe rozwiązania IoT: od doboru czujników i łączności, przez edge i chmurę, po analitykę oraz integracje z systemami miejskimi i przemysłowymi — wszystko w modelu IaC (Terraform/Ansible/GitOps), który zapewnia powtarzalność i skalowanie.
            </p>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Co rozwiązujemy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Smart City</h3>
              <p className="text-slate-300 text-center">
                Potrzeba danych w czasie rzeczywistym i koordynacji systemów (oświetlenie, parkowanie, środowisko) przy ograniczonym budżecie i heterogenicznej infrastrukturze.
              </p>
            </div>
            <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Przemysł / linie produkcyjne</h3>
              <p className="text-slate-300 text-center">
                Brak spójności M2M, silosy danych, trudności z monitoringiem OEE i predykcją awarii, bezpieczeństwo OT/IT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Nasze podejście (end-to-end)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Urządzenia i łączność</h3>
                <p className="text-slate-300 text-sm">Doboru czujników/aktuatorów, bramek edge i technologii: LoRaWAN, NB-IoT/LTE-M, 5G, Wi-Fi, Ethernet, BLE, Modbus, CAN, OPC UA, MQTT.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Edge & bezpieczeństwo</h3>
                <p className="text-slate-300 text-sm">Kontenery na bramkach, lokalny buffering, filtry jakości danych, PKI, secure boot, podpisane OTA.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Platforma danych</h3>
                <p className="text-slate-300 text-sm">Strumienie (MQTT/Kafka), normalizacja, Data Lake/Warehouse, API (REST/GraphQL), digital twin.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Analityka i automatyzacja</h3>
                <p className="text-slate-300 text-sm">Alerty, predykcja, reguły sterowania; dashboardy, raporty KPI.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">IaC & GitOps</h3>
                <p className="text-slate-300 text-sm">Cała infrastruktura i konfiguracje jako kod: szybkie rollouty multi-site, wersjonowanie, testy, roll-back.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart City Modules Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Smart City — przykładowe moduły
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Inteligentne oświetlenie</h3>
              <p className="text-slate-300">Ściemnianie wg ruchu/zmierzchu, oszczędności energii</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Parking</h3>
              <p className="text-slate-300">Czujniki zajętości, nawigacja do wolnych miejsc</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zarządzanie odpadami</h3>
              <p className="text-slate-300">Poziom napełnienia, optymalizacja tras</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Środowisko i klimat</h3>
              <p className="text-slate-300">PM2.5/PM10, NO₂, hałas, wyspy ciepła</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Wodociągi</h3>
              <p className="text-slate-300">Zdalny odczyt, wycieki, nieszczelności</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Modules Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Przemysł & M2M — przykładowe moduły
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Monitoring maszyn / OEE</h3>
              <p className="text-slate-300">Czas cyklu, przestoje, scrap</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Utrzymanie predykcyjne</h3>
              <p className="text-slate-300">Wibracje, temperatura, prądy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Traceability</h3>
              <p className="text-slate-300">Identyfikacja partii, rejestr parametrów procesu</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Integracje SCADA/MES/ERP</h3>
              <p className="text-slate-300">OPC UA, Modbus, MQTT bridge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why IaC Matters Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Dlaczego IaC ma znaczenie
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Skalowanie w godzinach</h3>
                <p className="text-slate-300">Jeden wzorzec wdrożony na dziesiątki lokalizacji</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Powtarzalność i audytowalność</h3>
                <p className="text-slate-300">Środowiska dev/test/prod jako kod</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Brak „ręcznej magii"</h3>
                <p className="text-slate-300">Szybkie DR/odtworzenie, spójne polityki bezpieczeństwa</p>
              </div>
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
                <h3 className="text-xl font-semibold text-white mb-3">Architekturę i projekt (HLD/LLD) + repozytoria IaC (Terraform/Ansible)</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Bramki edge z kontenerami i politykami bezpieczeństwa</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Platformę danych (ingest, przetwarzanie, przechowywanie, API) on-prem / prywatna / publiczna chmura</h3>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Dashboardy i alerty (SLA/SLO, bilans zużycia, KPI operacyjne)</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Integracje (SCADA/MES/ERP/Billing/City platforms)</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Runbooki, szkolenia i SLA</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Bezpieczeństwo by design
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Identyfikacja urządzeń</h3>
                <p className="text-slate-300 text-sm">mTLS/PKI, segmentacja sieci, polityki Zero Trust</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Signed firmware & OTA</h3>
                <p className="text-slate-300 text-sm">Kontrola wersji, SBOM, skan obrazów</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Logowanie i audyt</h3>
                <p className="text-slate-300 text-sm">End-to-end (SIEM integ.)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            KPI, które mierzymy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Wydajność</h3>
              <p className="text-slate-300">Uptime urządzeń, wskaźnik dostarczenia pakietów, latencja</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Efektywność</h3>
              <p className="text-slate-300">Żywotność baterii/energochłonność, koszty łączności</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Operacyjność</h3>
              <p className="text-slate-300">OEE / MTBF / MTTR (przemysł), czas reakcji na alerty</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Oszczędności</h3>
              <p className="text-slate-300">Energii/tras/serwisu (Smart City)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Schedule Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Przykładowy harmonogram (6–10 tyg.)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Assessment & PoC</h3>
              <p className="text-slate-300">Cele, dobór sensorów/łączności, wstępna architektura</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">IaC & Edge</h3>
              <p className="text-slate-300">Repozytoria, bramki, bezpieczeństwo, testy E2E</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Platforma & integracje</h3>
              <p className="text-slate-300">Pipeline danych, API, dashboardy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rollout & Operacje</h3>
              <p className="text-slate-300">Wdrożenie wielomiejscowe, monitoring, optymalizacja</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">End-to-end</h3>
              <p className="text-slate-300">Od urządzeń po integracje biznesowe</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">IaC/GitOps</h3>
              <p className="text-slate-300">Szybkie, powtarzalne wdrożenia multi-site</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Neutralność technologiczna</h3>
              <p className="text-slate-300">Dobieramy sprzęt i chmurę pod wymagania (bez lock-in)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Doświadczenie</h3>
              <p className="text-slate-300">Smart City i przemyśle: bezpieczeństwo OT/IT i realne KPI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Chcesz zbudować skalowalny IoT bez niespodzianek?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Umów 30-min konsultację — przygotujemy PoC i plan wdrożenia z pełnym IaC.
            </p>
            <Link 
                              href="/contact" 
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