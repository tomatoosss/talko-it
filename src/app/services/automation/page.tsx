"use client";

import Link from 'next/link';

export default function AutomationPage() {
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
              Automatyzacja
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                DevOps
              </span>
              <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                IaC
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
                Orkiestracja procesów
              </span>
              <span className="bg-yellow-600/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium border border-yellow-500/30">
                No-code
              </span>
              <span className="bg-red-600/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium border border-red-500/30">
                GitOps
              </span>
            </div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              To nasza pasja: dostarczać skalowalne i przejrzyste systemy, które automatyzują heterogeniczne środowiska IT — od hardware, przez middleware, po aplikacje. Budujemy je na sprawdzonych platformach (Ansible, Terraform) oraz nowoczesnych narzędziach no-code (n8n). Wszystko działa w pipeline'ach i żyje w Git.
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Ręczne operacje</h3>
              <p className="text-slate-300">
                Podatne na błędy operacje i „wiedzę plemienną" w zespołach.
              </p>
            </div>
            <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Brak spójności</h3>
              <p className="text-slate-300">
                Brak spójnego sposobu zarządzania sprzętem, siecią, systemami, middleware i aplikacjami.
              </p>
            </div>
            <div className="bg-yellow-900/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Długie procesy</h3>
              <p className="text-slate-300">
                Długie „time-to-change", incydenty po wdrożeniach, brak audytowalności.
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
              Nasze podejście
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Infrastructure as Code (IaC)</h3>
                <p className="text-slate-300 text-sm">Deklaratywne definicje zasobów (DC/Cloud/Edge) w Terraform; konfiguracja i procedury operacyjne w Ansible.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Orkiestracja procesów</h3>
                <p className="text-slate-300 text-sm">Integracje i automatyzacja przepływów biznesowych (aprobaty, zgłoszenia, synchronizacje) w n8n (no-code) lub w pipeline'ach CI/CD.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">GitOps</h3>
                <p className="text-slate-300 text-sm">Repozytoria jako źródło prawdy, PR-y, code review, audyt zmian, łatwy rollback.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Pipelines</h3>
                <p className="text-slate-300 text-sm">GitHub Actions / GitLab CI / Jenkins / Argo CD — testy, walidacje, canary/blue-green, promocje między środowiskami.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Security by design</h3>
                <p className="text-slate-300 text-sm">Zarządzanie tajemnicami (Vault/SOPS), polityki jako kod (OPA/Conftest), skanowanie IaC i artefaktów.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Observability</h3>
                <p className="text-slate-300 text-sm">Metryki, logi, trasy zdarzeń; SLO/alerting (Prometheus/Grafana/ELK).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Scope Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Zakres automatyzacji (od spodu po wierzch)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Hardware / sieć</h3>
              <p className="text-slate-300 text-sm">PXE/Redfish/iLO, konfiguracje switchy i firewalli (Ansible), NAC, segmentacja</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Systemy</h3>
              <p className="text-slate-300 text-sm">Obrazy OS, hardening, aktualizacje, patch management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Middleware / dane</h3>
              <p className="text-slate-300 text-sm">Bazy (PostgreSQL/MySQL), kolejki (Kafka/RabbitMQ), cache (Redis), ETL/airflow-like</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Aplikacje</h3>
              <p className="text-slate-300 text-sm">Kontenery/Kubernetes/Nomad, rollouty (canary/blue-green), feature flags</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Procesy biznesowe</h3>
              <p className="text-slate-300 text-sm">Zgłoszenia, akceptacje, provisioning kont/zasobów, synchronizacje z ERP/ITSM (n8n)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SSOT vs MVoT Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              SSOT vs MVoT — jak dobieramy model danych
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">SSOT (Single Source of Truth)</h3>
                <p className="text-slate-300 mb-4">Jeden repozytorium/CMDB definiuje stan całego środowiska.</p>
                <h4 className="text-lg font-semibold text-white mb-2">Kiedy?</h4>
                <p className="text-slate-300">Jednolita organizacja, wysoka standaryzacja, silne compliance.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">MVoT (Multiple Versions of the Truth)</h3>
                <p className="text-slate-300 mb-4">Rozdzielone źródła (np. per domena: sieć, chmura, aplikacje) zsynchronizowane politykami.</p>
                <h4 className="text-lg font-semibold text-white mb-2">Kiedy?</h4>
                <p className="text-slate-300">Złożone organizacje, różne cykle zmian, wiele domen właścicielskich.</p>
              </div>
            </div>
            <p className="text-slate-300 text-center mt-6">
              Zawsze zapewniamy spójność przez walidacje, kontrakty API i pipeline'y synchronizacji.
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
                <h3 className="text-xl font-semibold text-white mb-3">Architekturę automatyzacji (HLD/LLD) i repozytoria Git (Terraform, Ansible, n8n flows)</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Pipelines CI/CD/GitOps z testami i kontrolą jakości (lint/plan/apply, dry-run, policy-check)</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Bibliotekę ról/modułów wielokrotnego użytku i katalog usług (self-service)</h3>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Runbooki i szkolenia dla zespołów Dev/Ops/Sec</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">SLA/Support na czas operacyjny</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Korzyści biznesowe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Szybsze wdrożenia</h3>
              <p className="text-slate-300">Lead time ↓, częstotliwość wdrożeń ↑</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mniej błędów</h3>
              <p className="text-slate-300">Zmiany powtarzalne, testowane, audytowalne</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Niższe koszty</h3>
              <p className="text-slate-300">Standaryzacja i automatyzacja „end-to-end"</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Przejrzystość</h3>
              <p className="text-slate-300">Pełna historia zmian, stan środowisk widoczny w Git i dashboardach</p>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            KPI, które ustawiamy i mierzymy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Lead time for change</h3>
              <p className="text-slate-300">Czas od pomysłu do wdrożenia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Change failure rate</h3>
              <p className="text-slate-300">Procent nieudanych zmian</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">MTTR</h3>
              <p className="text-slate-300">Mean Time To Recovery</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Pokrycie IaC/Ansible</h3>
              <p className="text-slate-300">% zasobów zarządzanych jako kod</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Automatyzacja procesów</h3>
              <p className="text-slate-300">Czas obsługi, liczba ręcznych kroków</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Zgodność polityk</h3>
              <p className="text-slate-300">Policy compliance score</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Pokrycie testami</h3>
              <p className="text-slate-300">Procent zautomatyzowanych testów</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Schedule Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Przykładowy harmonogram (4–8 tyg.)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Assessment & Design</h3>
              <p className="text-slate-300">Cele, wybór SSOT/MVoT, architektura</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Repozytoria & IaC</h3>
              <p className="text-slate-300">Terraform/Ansible, moduły, standardy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Pipelines & Orkiestracja</h3>
              <p className="text-slate-300">CI/CD, GitOps, przepływy n8n</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Pilotaż & Rollout</h3>
              <p className="text-slate-300">Wdrożenie wycinka, pomiary KPI, skalowanie</p>
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
              <p className="text-slate-300">Automatyzujemy całą ścieżkę — od sprzętu, przez middleware, po aplikacje i procesy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Neutralność narzędziowa</h3>
              <p className="text-slate-300">Ansible/Terraform/n8n + integracje z Twoim ekosystemem</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Transparentność</h3>
              <p className="text-slate-300">Wszystko jako kod, w Git, z jasnym procesem i metrykami</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Chcesz przejść z „ręcznej magii" na przewidywalne pipeline'y?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Umów 30-min konsultację — pokażemy plan automatyzacji pod Twoje środowisko (SSOT lub MVoT) i przygotujemy szybki pilotaż.
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