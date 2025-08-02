'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  delay?: number;
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  index = 0,
  delay = 0
}: AnimatedCardProps) {
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
          }, delay + (index * 200)); // Staggered animation
        }
      },
      {
        threshold: 0.1,
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
  }, [delay, index, hasAnimated]);

  return (
    <div 
      ref={ref} 
      className={`
        transition-all duration-700 ease-out transform
        ${isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
        }
        hover:scale-105 hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
} 