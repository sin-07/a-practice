import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimatedSection = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  threshold = 0.1,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    const baseClass = 'scroll-animate';
    const animatedClass = isVisible ? 'animate' : '';
    
    switch (animation) {
      case 'fade-left':
        return `scroll-animate-left ${animatedClass}`;
      case 'fade-right':
        return `scroll-animate-right ${animatedClass}`;
      case 'scale':
        return `scroll-animate-scale ${animatedClass}`;
      case 'fade-up':
      default:
        return `${baseClass} ${animatedClass}`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;