import { useEffect, useState } from 'react';

// Hook for managing focus and keyboard navigation
export const useFocusManagement = () => {
  const [focusedElement, setFocusedElement] = useState(null);

  const trapFocus = (containerElement) => {
    const focusableElements = containerElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    containerElement.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      containerElement.removeEventListener('keydown', handleTabKey);
    };
  };

  const manageFocus = (element) => {
    setFocusedElement(element);
    element?.focus();
  };

  return { trapFocus, manageFocus, focusedElement };
};

// Hook for screen reader announcements
export const useScreenReader = () => {
  const [announcement, setAnnouncement] = useState('');

  const announce = (message, priority = 'polite') => {
    setAnnouncement(''); // Clear first to ensure it's announced
    setTimeout(() => {
      setAnnouncement(message);
    }, 100);
  };

  const clearAnnouncement = () => {
    setAnnouncement('');
  };

  return { announcement, announce, clearAnnouncement };
};

// Hook for keyboard navigation
export const useKeyboardNavigation = (onEnter, onEscape, onArrowKeys) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Enter':
          onEnter?.(e);
          break;
        case 'Escape':
          onEscape?.(e);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          onArrowKeys?.(e);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEnter, onEscape, onArrowKeys]);
};

// Hook for reduced motion preferences
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Hook for high contrast preferences
export const useHighContrast = () => {
  const [prefersHighContrast, setPrefersHighContrast] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setPrefersHighContrast(mediaQuery.matches);

    const handleChange = (e) => setPrefersHighContrast(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersHighContrast;
};