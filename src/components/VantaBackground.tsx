'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface VantaBackgroundProps {
  className?: string;
  effect?: 'net' | 'waves' | 'fog' | 'clouds' | 'birds' | 'globe' | 'cells' | 'topology';
  magicMode?: boolean;
}

interface VantaEffect {
  destroy: () => void;
}

export default function VantaBackground({ 
  className = '', 
  effect = 'net',
  magicMode = false
}: VantaBackgroundProps) {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!vantaEffect && isMounted && vantaRef.current) {
      // Dynamic import based on effect
      const loadVantaEffect = async () => {
        let VANTA: (config: Record<string, unknown>) => VantaEffect;
        
        switch (effect) {
          case 'net':
            VANTA = (await import('vanta/dist/vanta.net.min')).default;
            break;
          case 'waves':
            VANTA = (await import('vanta/dist/vanta.waves.min')).default;
            break;
          case 'fog':
            VANTA = (await import('vanta/dist/vanta.fog.min')).default;
            break;
          case 'clouds':
            VANTA = (await import('vanta/dist/vanta.clouds.min')).default;
            break;
          case 'birds':
            VANTA = (await import('vanta/dist/vanta.birds.min')).default;
            break;
          case 'globe':
            VANTA = (await import('vanta/dist/vanta.globe.min')).default;
            break;
          case 'cells':
            VANTA = (await import('vanta/dist/vanta.cells.min')).default;
            break;
          case 'topology':
            VANTA = (await import('vanta/dist/vanta.topology.min')).default;
            break;
          default:
            VANTA = (await import('vanta/dist/vanta.net.min')).default;
        }

        // Check if dark mode is enabled
        const isDarkMode = document.documentElement.classList.contains('dark');

        let effectInstance: VantaEffect;
        if (effect === 'topology') {
          const p5 = (await import('p5')).default;
          effectInstance = VANTA({
            el: vantaRef.current,
            p5: p5,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: isDarkMode ? 0x60a5fa : 0x3b82f6,
            backgroundColor: isDarkMode ? 0x0a0a0a : 0xf8fafc,
          });
        } else {
          effectInstance = VANTA({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: isDarkMode ? 0x60a5fa : 0x3b82f6,
            backgroundColor: isDarkMode ? 0x0a0a0a : 0xf8fafc, // Widoczne tło
            // Net specific settings
            ...(effect === 'net' && {
              points: 20.00,
              maxDistance: 30.00,
              spacing: 20.00,
              showLines: true,
            }),
            // Waves specific settings
            ...(effect === 'waves' && {
              color: isDarkMode ? 0x60a5fa : 0x3b82f6,
              shininess: 51.00,
              waveHeight: 1.50,
              waveSpeed: 2.00,
              zoom: 0.65,
              backgroundColor: isDarkMode ? 0x0a0a0a : 0xf8fafc,
            }),
            // Fog specific settings
            ...(effect === 'fog' && {
              highlightColor: magicMode ? 0x8b5cf6 : (isDarkMode ? 0x1e293b : 0xf1f5f9), // Magiczny fiolet dla Magic
              midtoneColor: magicMode ? 0xa855f7 : (isDarkMode ? 0x334155 : 0xe2e8f0), // Magiczny liliowy
              lowlightColor: magicMode ? 0xc084fc : (isDarkMode ? 0x475569 : 0xcbd5e1), // Magiczny różowy
              baseColor: isDarkMode ? 0x0a0a0a : 0xf8fafc, // Widoczne tło
              blurFactor: magicMode ? 0.80 : 0.60, // Większy blur dla magicznego efektu
              speed: magicMode ? 0.20 : 0.30, // Wolniejsza animacja dla Magic
              zoom: magicMode ? 1.20 : 1.00, // Większy zoom dla Magic
            }),
            // Clouds specific settings
            ...(effect === 'clouds' && {
              skyColor: isDarkMode ? 0x0a0a0a : 0xf8fafc, // Widoczne tło
              cloudColor: isDarkMode ? 0x8b5cf6 : 0x8b5cf6,
              cloudShadowColor: isDarkMode ? 0x06b6d4 : 0x06b6d4,
              sunColor: isDarkMode ? 0x60a5fa : 0xffffff,
              sunGlareColor: isDarkMode ? 0x60a5fa : 0x3b82f6,
              sunlightColor: isDarkMode ? 0x8b5cf6 : 0x8b5cf6,
              speed: 1.00,
            }),
            // Birds specific settings
            ...(effect === 'birds' && {
              birdSize: 1.50,
              wingSpan: 20.00,
              speedLimit: 4.00,
              separation: 50.00,
              alignment: 1.00,
              cohesion: 1.00,
              quantity: 3.00,
            }),
            // Globe specific settings
            ...(effect === 'globe' && {
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              size: 1.00,
              showLines: true,
              showPoints: true,
              maxDistance: 25.00,
              spacing: 17.00,
            }),
            // Cells specific settings
            ...(effect === 'cells' && {
              size: 1.00,
              speed: 1.20,
              color: isDarkMode ? 0x60a5fa : 0x3b82f6,
              backgroundColor: isDarkMode ? 0x0a0a0a : 0xf8fafc, // Widoczne tło
            }),
          });
        }

        setVantaEffect(effectInstance);
        setIsLoading(false);
      };

      loadVantaEffect();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, effect, isMounted, magicMode]);

  return (
    <>
      {/* Loading background */}
      {isLoading && (
        <div 
          className={`fixed inset-0 pointer-events-none z-0 ${className}`}
          style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            opacity: 0.1,
          }}
        />
      )}
      
      {/* Vanta effect */}
      <div 
        ref={vantaRef} 
        className={`fixed inset-0 pointer-events-none z-0 ${className} transition-opacity duration-1000`}
        style={{ 
          background: 'transparent',
          opacity: isLoading ? 0 : 1,
        }}
        suppressHydrationWarning
      />
    </>
  );
} 