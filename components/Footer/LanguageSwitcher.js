import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ru' ? 'en' : 'ru';
    
    router.push(router.pathname, router.asPath, { locale: newLanguage });
  };

  return (
    <button className={styles.languageButton} onClick={toggleLanguage}>
      <Image
        src="/images/Footer/change_language.svg"
        alt="Change language"
        width={60}
        height={40}
      />
      <span className={styles.languageText}>
        {i18n.language === 'ru' ? 'Русский' : 'English'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
