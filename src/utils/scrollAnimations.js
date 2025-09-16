// Global scroll animations initializer
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Add staggered animation for child elements
        const children = entry.target.querySelectorAll('.stagger-child');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('animate');
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe elements with scroll animation classes
  const elementsToObserve = document.querySelectorAll(`
    .scroll-animate,
    .scroll-animate-left,
    .scroll-animate-right,
    .scroll-animate-scale,
    .animate-fade-in-up,
    .animate-slide-in-left,
    .animate-slide-in-right,
    .animate-bounce-in,
    .animate-rotate-in
  `);

  elementsToObserve.forEach(element => {
    observer.observe(element);
  });

  return observer;
};

// Initialize animations on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
  
  // Re-initialize when new content is loaded
  window.addEventListener('load', initScrollAnimations);
}