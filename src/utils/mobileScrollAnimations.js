// Enhanced mobile scroll animations
export const initMobileScrollAnimations = () => {
  // Check if it's a mobile device
  const isMobile = window.innerWidth <= 768;
  
  const observerOptions = {
    threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
    rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add animation class with mobile-specific delay
        setTimeout(() => {
          entry.target.classList.add('animate');
          
          // Special handling for cards and project items
          if (entry.target.classList.contains('card') || 
              entry.target.classList.contains('project-card')) {
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.style.opacity = '1';
          }
          
          // Handle nested elements for staggered animation
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, childIndex) => {
            setTimeout(() => {
              child.classList.add('animate');
              child.style.transform = 'translateY(0)';
              child.style.opacity = '1';
            }, childIndex * (isMobile ? 150 : 100));
          });
          
        }, isMobile ? 100 : 0);
      }
    });
  }, observerOptions);

  // Target all animated elements
  const animatedElements = document.querySelectorAll(`
    .animate-fade-in-up,
    .card,
    .project-card,
    .scroll-animate,
    .scroll-animate-left,
    .scroll-animate-right,
    .scroll-animate-scale,
    [class*="animate-"]
  `);

  animatedElements.forEach((element, index) => {
    // Set initial state for better mobile visibility
    if (isMobile) {
      element.style.transform = element.classList.contains('project-card') 
        ? 'translateY(50px) scale(0.95)' 
        : 'translateY(40px)';
      element.style.opacity = '0';
      element.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    }
    
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