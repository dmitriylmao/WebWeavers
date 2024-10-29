import React, { useEffect, useState } from 'react';
import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 480px)');

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </>
  );
};

export default Footer;
