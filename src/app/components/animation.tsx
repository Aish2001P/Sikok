"use client"
import React, { useState, useRef, useEffect } from 'react';
 
interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'zoomOut' | 'float' | 'fadeOnly';
  delay?: number;
  duration?: number;
  distance?: string;
  easing?: string;
}
 
const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  distance = '30px',
  easing = 'cubic-bezier(0.5, 0, 0, 1)'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
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
  }, []);
 
  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}s ${easing} ${delay}s`,
      opacity: isVisible ? 1 : 0,
    };
 
    switch (animation) {
      case 'fadeUp':
        return {
          ...baseStyles,
          transform: isVisible ? 'translateY(0)' : `translateY(${distance})`,
        };
      case 'zoomOut':
        return {
          ...baseStyles,
          transform: isVisible ? 'scale(1)' : 'scale(1.1)',
        };
      case 'float':
        return {
          ...baseStyles,
          transform: isVisible ? 'translateY(0)' : `translateY(${distance})`,
          filter: isVisible ? 'none' : 'blur(2px)',
        };
      case 'fadeOnly':
        return baseStyles;
      default:
        return {
          ...baseStyles,
          transform: isVisible ? 'translateY(0)' : `translateY(${distance})`,
        };
    }
  };
 
  return (
<div ref={ref} style={getAnimationStyles()}>
      {children}
</div>
  );
};
 
export default ScrollReveal;