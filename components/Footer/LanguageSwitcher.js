import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('RU');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'RU' ? 'EN' : 'RU'));
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
