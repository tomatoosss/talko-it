'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    switch (animation) {
      case 'fade-in':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      
      case 'slide-up':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;
      
      case 'slide-left':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`;
      
      case 'slide-right':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`;
      
      case 'scale-in':
        return `${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
      
      default:
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
} 