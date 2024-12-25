import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import rusFlag from '@/public/images/LanguageSwitcher/rus.svg';
import ukFlag from '@/public/images/LanguageSwitcher/uk.svg';
import { LANGUAGE_EN, LANGUAGE_RU } from '@/core/constants';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [language, setLanguage] = useState(i18n.language);
  const { t } = useTranslation('common');

  const toggleLanguage = () => {
    const scrollPosition = window.scrollY;

    const newLanguage = language === LANGUAGE_RU ? LANGUAGE_EN : LANGUAGE_RU;
    setLanguage(newLanguage);

    i18n.changeLanguage(newLanguage).then(() => {
      router
        .push(router.pathname, router.asPath, { locale: newLanguage })
        .then(() => {
          window.scrollTo(0, scrollPosition);
        });
    });
  };

  const isRussian = language === LANGUAGE_RU;
  const currentFlag = isRussian ? rusFlag : ukFlag;

  const gradients = {
    russian:
      'linear-gradient(15deg, rgba(255, 0, 0, 0.3) , rgba(38, 128, 212, 0.3),rgba(255, 255, 255, 0.3))',
    english:
      'linear-gradient(-15deg, rgba(38, 128, 212, 0.3), rgba(255, 255, 255, 0.3), rgba(255, 0, 0, 0.3))',
  };

  return (
    <motion.button
      className={styles.languageButton}
      onClick={toggleLanguage}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className={styles.gradientContainer}
        style={{
          background: isRussian ? gradients.russian : gradients.english,
        }}
        initial={{ background: gradients.russian }}
        animate={{
          background: isRussian ? gradients.russian : gradients.english,
        }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className={styles.circle}
        animate={{ x: isRussian ? 5 : 50 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <img src={currentFlag.src} alt={t('AltFlag')} />
      </motion.div>
    </motion.button>
  );
};

export default LanguageSwitcher;
