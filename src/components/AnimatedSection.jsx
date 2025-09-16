import React from 'react';
import { useScrollAnimation } from '../hooks/usePerformance';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'on-scroll',
  delay = 0,
  ...props 
}) => {
  const [ref, isVisible, animationClass] = useScrollAnimation(animationType, delay);

  return (
    <div 
      ref={ref} 
      className={`${animationClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;