import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isSmallDesktop: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        isMobile: window.innerWidth <= 480,
        isTablet: window.innerWidth > 480 && window.innerWidth <= 768,
        isLaptop: window.innerWidth > 768 && window.innerWidth <= 1024,
        isSmallDesktop: window.innerWidth > 1024 && window.innerWidth <= 1280,
        isDesktop: window.innerWidth > 1280,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
