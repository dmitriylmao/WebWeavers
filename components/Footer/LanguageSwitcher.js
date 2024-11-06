import React, { useState } from 'react';
import Image from 'next/image';
import { LANGUAGE_EN, LANGUAGE_RU } from '@/core/constants';
import styles from './Footer.module.css';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(LANGUAGE_RU);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === LANGUAGE_RU ? LANGUAGE_EN : LANGUAGE_RU,
    );
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
