import React, { useEffect, useState } from 'react';
import FooterDesktop from './desktop/FooterDesktop';
import FooterMobile from './mobile/FooterMobile';
import FooterTablet from './tablet/FooterTablet';
import FooterLaptop from './laptop/FooterLaptop';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 480);
      setIsTablet(width >= 480 && width < 768);
      setIsLaptop(width >= 768 && width < 1280);
      setIsDesktop(width >= 1280);
    };

    // Устанавливаем начальное значение
    handleResize();

    // Добавляем слушатель изменения размера экрана
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && <FooterMobile />}
      {isTablet && <FooterTablet />}
      {isLaptop && <FooterLaptop />}
      {isDesktop && <FooterDesktop />}
    </>
  );
};

export default Footer;
