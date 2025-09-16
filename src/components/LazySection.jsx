import React from 'react';
import { useIntersectionObserver } from '../hooks/usePerformance';

const LazySection = ({ 
  children, 
  className = '', 
  threshold = 0.1, 
  rootMargin = '50px',
  fallback = null,
  ...props 
}) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <div 
      ref={ref} 
      className={`animate-on-scroll ${hasIntersected ? 'visible' : ''} ${className}`}
      {...props}
    >
      {hasIntersected ? children : (fallback || (
        <div className="lazy-placeholder">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default LazySection;