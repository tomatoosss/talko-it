'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-[9999]">
      {/* Large Modern Spinner Background */}
      

      <div className="w-full max-w-md px-8 relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
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
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="loading-progress-container bg-slate-700 h-2 rounded-full">
            <div 
              className="loading-progress h-full rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress Text */}
        <div className="text-center">
          <p className="text-sm text-slate-400">
            Ładowanie... {progress}%
          </p>
        </div>
      </div>
    </div>
  );
} 