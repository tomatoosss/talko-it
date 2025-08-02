"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface MFAGuardProps {
  children: React.ReactNode;
}

export default function MFAGuard({ children }: MFAGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMFAModal, setShowMFAModal] = useState(true);
  const [mfaCode, setMfaCode] = useState('');
  const [step, setStep] = useState<'email' | 'mfa'>('email');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Sprawdź czy użytkownik jest już uwierzytelniony
  useEffect(() => {
    const authStatus = sessionStorage.getItem('magic-auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
      setShowMFAModal(false);
    }
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/mfa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          action: 'send-code'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStep('mfa');
        console.log('Debug: Kod MFA to:', data.debugCode); // Tylko do testów
      } else {
        setError(data.error || 'Wystąpił błąd');
      }
    } catch (error) {
      setError('Błąd połączenia z serwerem');
    } finally {
      setIsLoading(false);
    }
  };

  const handleMFASubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/mfa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          code: mfaCode,
          action: 'verify-code'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setShowMFAModal(false);
        sessionStorage.setItem('magic-auth', 'authenticated');
        sessionStorage.setItem('magic-email', email);
      } else {
        setError(data.error || 'Nieprawidłowy kod MFA');
      }
    } catch (error) {
      setError('Błąd połączenia z serwerem');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowMFAModal(true);
    setStep('email');
    setEmail('');
    setMfaCode('');
    sessionStorage.removeItem('magic-auth');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full mx-4 border border-purple-500/30">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🔮</div>
            <h1 className="text-2xl font-bold text-white mb-2">Magic Access</h1>
            <p className="text-slate-300">Dostęp do ekskluzywnej usługi Magic wymaga uwierzytelnienia</p>
          </div>

          {step === 'email' && (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="twoj@email.com"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
              >
                {isLoading ? 'Wysyłanie...' : 'Wyślij kod MFA'}
              </button>
            </form>
          )}

          {step === 'mfa' && (
            <form onSubmit={handleMFASubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Kod MFA
                </label>
                <input
                  type="text"
                  value={mfaCode}
                  onChange={(e) => setMfaCode(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-center text-2xl tracking-widest"
                  placeholder="000000"
                  maxLength={6}
                  required
                />
                <p className="text-sm text-slate-400 mt-2">
                  Kod został wysłany na: {email}
                </p>
              </div>
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
              >
                {isLoading ? 'Weryfikacja...' : 'Zweryfikuj kod'}
              </button>
              <button
                type="button"
                onClick={() => setStep('email')}
                className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Powrót
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ← Powrót do strony głównej
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header z przyciskiem logout */}
      <div className="bg-purple-900/20 backdrop-blur-md border-b border-purple-500/30 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔮</span>
            <span className="text-white font-semibold">Magic - Uwierzytelniony dostęp</span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Wyloguj
          </button>
        </div>
      </div>
      
      {children}
    </div>
  );
} 