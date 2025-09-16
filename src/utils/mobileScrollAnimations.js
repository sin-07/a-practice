// Simplified scroll animations for all devices
export const initMobileScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Simple, professional animations
        element.classList.remove('card-animate', 'project-card-animate');
        element.classList.add('visible');
        
        // Handle nested elements
        const children = element.querySelectorAll('.stagger-child');
        children.forEach((child, childIndex) => {
          setTimeout(() => {
            child.style.transform = 'translateY(0)';
            child.style.opacity = '1';
          }, childIndex * 100);
        });
        
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Target elements with simplified selectors
  const animatedElements = document.querySelectorAll(`
    .card-animate,
    .project-card-animate,
    [data-aos]
  `);

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
};

// Touch-friendly scroll detection
export const initTouchScrollAnimations = () => {
  let isScrolling = false;
  
  const handleScroll = () => {
    if (!isScrolling) {
      isScrolling = true;
      
      // Trigger animation check on scroll
      requestAnimationFrame(() => {
        const elements = document.querySelectorAll('.card:not(.animate), .project-card:not(.animate)');
        elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // More generous trigger area for mobile
          if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
            element.classList.add('animate');
          }
        });
        
        isScrolling = false;
      });
    }
  };

  // Use passive listeners for better mobile performance
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('touchmove', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('touchmove', handleScroll);
  };
};

// Initialize all mobile scroll animations
export const initAllMobileAnimations = () => {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    const mobileObserver = initMobileScrollAnimations();
    const touchCleanup = initTouchScrollAnimations();
    
    return () => {
      mobileObserver.disconnect();
      touchCleanup();
    };
  } else {
    // Use regular animations for desktop
    return initMobileScrollAnimations();
  }
};