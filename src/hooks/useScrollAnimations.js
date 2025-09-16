import { useEffect, useRef, useState } from 'react';

// Hook for scroll-triggered animations
export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px 0px -50px 0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold,
        rootMargin,
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
  }, [threshold, rootMargin, hasAnimated]);

  return [elementRef, isVisible, hasAnimated];
};

// Hook for staggered animations
export const useStaggeredAnimation = (items = [], delay = 200) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]));
            }, index * delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const container = containerRef.current;
    if (container) {
      const children = container.querySelectorAll('[data-index]');
      children.forEach(child => observer.observe(child));
    }

    return () => {
      if (container) {
        const children = container.querySelectorAll('[data-index]');
        children.forEach(child => observer.unobserve(child));
      }
    };
  }, [delay, items.length]);

  return [containerRef, visibleItems];
};

// Hook for scroll progress
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
};

// Hook for parallax effect
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const parallax = scrolled * speed;
        setOffset(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [elementRef, offset];
};