"use client";

import Link from 'next/link';

export default function SystemImplementationPage() {
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
              Wdrożenia Systemów IT
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                Sieci Enterprise & Data Center
              </span>
              <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                White-Box
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
                Hybrid/Multicloud
              </span>
              <span className="bg-red-600/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium border border-red-500/30">
                Air-Gapped
              </span>
            </div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Projektujemy i wdrażamy nowoczesne sieci szkieletowe i brzegowe oparte o standardy i automatyzację — od warstwy fizycznej po integrację z chmurami.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Wyzwanie
            </h2>
            <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto">
              Rosnące wymagania wydajnościowe i bezpieczeństwa, presja kosztowa oraz złożoność środowisk hybrydowych powodują, że tradycyjne, monolityczne rozwiązania sieciowe przestają nadążać. Firmy potrzebują elastycznych, skalowalnych i automatyzowalnych architektur bez uzależnienia od jednego dostawcy.
            </p>
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
            <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto">
              Projektujemy i wdrażamy nowoczesne sieci szkieletowe i brzegowe oparte o standardy i automatyzację — od warstwy fizycznej, przez underlay (IP/BGP) i overlay (EVPN/VXLAN), po polityki bezpieczeństwa, obserwowalność i integrację z chmurami publicznymi i prywatnymi. Tam, gdzie ma to sens, wykorzystujemy white-box switche z niezależnym systemem sieciowym, co istotnie obniża TCO i eliminuje vendor lock-in.
            </p>
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
                <h3 className="text-xl font-semibold text-white mb-3">Architektura i projekt</h3>
                <p className="text-slate-300">Spine-Leaf DC, L3 Core, EVPN/VXLAN, segmentacja L2/L3, QoS, multicast. Kampusy i oddziały: NAC/802.1X, segmentacja (VRF/SGT), SD-WAN/edge.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">White-Box Networking</h3>
                <p className="text-slate-300">Dobór sprzętu i NOS, standaryzacja profili portów, pipeline'y konfiguracji. Ujednolicone API i modele danych – łatwa wymiana/rozszerzanie platformy.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Automatyzacja i IaC</h3>
                <p className="text-slate-300">Ansible/Terraform, deklaratywne szablony, GitOps i CI/CD dla sieci. Idempotentne wdrożenia, walidacje „pre-flight", dry-run, rollback.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Integracja chmurowa</h3>
                <p className="text-slate-300">Hybrid/Multicloud: projekt hub-and-spoke, cloud on-ramps, IPSec/DTLS, Private/Direct Connect-like. Standaryzacja VPC/VNet, Transit i segmentacja, polityki między-chmurowe.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Air-Gapped / High-Security</h3>
                <p className="text-slate-300">Repozytoria offline, kontrola łańcucha dostaw, bastiony i OOB, transfer „sneakernet". Aktualizacje w trybie „sealed", skanowanie i zatwierdzanie artefaktów.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Security by Design</h3>
                <p className="text-slate-300">Mikrosegmentacja, ACL/SG, IDS/IPS integracje, IPSec/MACsec, PKI i rotacja kluczy. Zgodność: polityki i ślad audytowy (np. ISO 27001/NIS2 wymogi).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Obserwowalność</h3>
              <p className="text-slate-300">Streaming telemetry, NetFlow/sFlow, logi, alerting SLO, dashboardy (latencja, strata, jitter).</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Dokumentacja i operacje</h3>
              <p className="text-slate-300">HLD/LLD, „as-built", runbooki, DR playbook, szkolenia zespołu, wsparcie SLA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why White-Box Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Dlaczego white-box?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Niższy koszt</h3>
                <p className="text-slate-300 text-sm">Sprzętu i utrzymania (hardware ≠ software)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Brak lock-in</h3>
                <p className="text-slate-300 text-sm">Swobodny dobór NOS i narzędzi automatyzacji</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Szybsze innowacje</h3>
                <p className="text-slate-300 text-sm">Cykle wydawnicze oprogramowania niezależne od sprzętu</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Standaryzacja</h3>
                <p className="text-slate-300 text-sm">Otwarte protokoły, spójne modele danych i API</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Korzyści dla Twojej organizacji
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">TCO ↓</h3>
              <p className="text-slate-300">Dzięki white-box i automatyzacji (IaC, GitOps)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Skalowalność ↑</h3>
              <p className="text-slate-300">Spójna architektura DC i kampusu, gotowa na wzrost</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Bezpieczeństwo ↑</h3>
              <p className="text-slate-300">Segmentacja, szyfrowanie, kontrola dostępu i pełny audyt</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Elastyczność ↑</h3>
              <p className="text-slate-300">Łatwa integracja z chmurami publicznymi/prywatnymi lub praca w trybie air-gapped</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Czas wdrożenia ↓</h3>
              <p className="text-slate-300">Powtarzalne pipeline'y i testy przedprodukcyjne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Jak pracujemy (6–8 tygodni)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Assessment & HLD</h3>
              <p className="text-slate-300">Inwentaryzacja, wymagania, wzorzec architektury</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">LLD & IaC</h3>
              <p className="text-slate-300">Szablony, repozytoria, walidacje i testy w labie</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Pilotaż</h3>
              <p className="text-slate-300">Wycinek produkcji, pomiary SLO, hardening</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rollout</h3>
              <p className="text-slate-300">Automatyzowane wdrożenie, migracje ruchu, dokumentacja „as-built"</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-400">5</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Operacje</h3>
              <p className="text-slate-300">Monitoring, runbooki, przekazanie i szkolenia</p>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            KPI, które ustawiamy wspólnie
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Wydajność</h3>
              <p className="text-slate-300">Dostępność (SLO), MTTR, opóźnienia/jitter, przepustowość per segment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Automatyzacja</h3>
              <p className="text-slate-300">Czas od commitu do wdrożenia, pokrycie automatyzacją (% urządzeń/konfigów)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Efektywność</h3>
              <p className="text-slate-300">TCO per port/rack, wskaźnik wykorzystania łącza i CPU/TCAM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Zgodność</h3>
              <p className="text-slate-300">Zgodność polityk (policy compliance score)</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Co otrzymujesz na koniec
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Działająca sieć</h3>
                <p className="text-slate-300">Skalowalna sieć (enterprise/DC) z automatyzacją i obserwowalnością</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Dokumentacja</h3>
                <p className="text-slate-300">Pełna dokumentacja i repozytoria IaC</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Zespół i plan</h3>
                <p className="text-slate-300">Przeszkolony zespół oraz plan rozwoju (roadmapa na 12–24 miesiące)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Sprawdź, jak obniżyć koszty i zyskać elastyczność bez lock-in
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Umów 30-min konsultację — przygotujemy wstępny projekt (HLD) pod Twoją infrastrukturę: on-prem, chmury publiczne/prywatne lub środowisko air-gapped.
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