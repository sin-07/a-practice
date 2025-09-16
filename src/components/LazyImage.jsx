import React from 'react';
import { useLazyLoad } from '../hooks/usePerformance';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null, 
  onLoad = () => {},
  ...props 
}) => {
  const { ref, isInView, isLoaded, handleLoad } = useLazyLoad();

  const handleImageLoad = () => {
    handleLoad();
    onLoad();
  };

  return (
    <div ref={ref} className={`relative ${className}`} {...props}>
      {!isLoaded && (
        <div className="lazy-placeholder absolute inset-0">
          {placeholder || (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;