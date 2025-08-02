'use client';

import { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Funkcja do płynnego scrollowania
    const smoothScrollTo = (targetId: string) => {
      const target = document.getElementById(targetId);
      if (target) {
        const headerOffset = 80; // Wysokość sticky navbar
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Obsługa kliknięć na linki z hash
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          smoothScrollTo(targetId);
        }
      }
    };

    // Dodaj event listener
    document.addEventListener('click', handleLinkClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return <>{children}</>;
} 