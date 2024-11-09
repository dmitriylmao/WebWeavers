import React, { useState } from 'react';
import Image from 'next/image';
import { LANGUAGE_EN, LANGUAGE_RU } from '@/core/constants';
import { useTranslation } from 'next-i18next';
import styles from './Footer.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(LANGUAGE_RU);

  const toggleLanguage = () => {
    const newLanguage = language === LANGUAGE_RU ? LANGUAGE_EN : LANGUAGE_RU;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button className={styles.languageButton} onClick={toggleLanguage}>
      <Image
        src="/images/Footer/change_language.svg"
        alt="Change language"
        width={60}
        height={40}
      />
      <span className={styles.languageText}>{language}</span>
    </button>
  );
};

export default LanguageSwitcher;
