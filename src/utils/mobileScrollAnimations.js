// Enhanced mobile scroll animations
export const initMobileScrollAnimations = () => {
  // Check if it's a mobile device
  const isMobile = window.innerWidth <= 768;
  
  const observerOptions = {
    threshold: isMobile ? 0.1 : 0.15, // Better threshold for mobile
    rootMargin: isMobile ? '0px 0px -10% 0px' : '0px 0px -20% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Enhanced card animations with bouncy effects
        setTimeout(() => {
          // Remove initial transform classes
          element.classList.remove('opacity-0', 'translate-y-8', 'card-enter');
          
          // Add appropriate animation based on element type
          if (element.classList.contains('card')) {
            element.classList.add('card-bounce-enter-active');
            element.classList.remove('card-bounce-enter');
            
            // Apply stagger-specific bouncy animations
            if (element.classList.contains('mobile-stagger-1')) {
              element.classList.add('mobile-bounce-up');
            } else if (element.classList.contains('mobile-stagger-2')) {
              element.classList.add('mobile-card-bounce');
            } else if (element.classList.contains('mobile-stagger-3')) {
              element.classList.add('mobile-spring-bounce');
            } else {
              element.classList.add('mobile-bounce-up');
            }
          } else if (element.classList.contains('project-card')) {
            element.classList.add('mobile-card-bounce', 'card-bounce-enter-active');
            element.classList.remove('card-bounce-enter');
          } else {
            // Default animations for other elements
            element.classList.add('animate', 'card-enter-active');
            element.classList.remove('card-enter');
          }
          
          // Handle nested elements for staggered animation
          const children = element.querySelectorAll('.stagger-child');
          children.forEach((child, childIndex) => {
            setTimeout(() => {
              child.classList.add('animate');
              child.style.transform = 'translateY(0)';
              child.style.opacity = '1';
            }, childIndex * (isMobile ? 200 : 150));
          });
          
        }, isMobile ? 50 : 0); // Reduced delay for better mobile experience
        
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Target all animated elements with enhanced selectors
  const animatedElements = document.querySelectorAll(`
    .animate-fade-in-up,
    .card,
    .project-card,
    .scroll-animate,
    .scroll-animate-left,
    .scroll-animate-right,
    .scroll-animate-scale,
    .mobile-stagger-1,
    .mobile-stagger-2,
    .mobile-stagger-3,
    [data-aos],
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