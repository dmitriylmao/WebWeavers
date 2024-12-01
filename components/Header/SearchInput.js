import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import searchIconSrc from '@/public/images/Header/search_Icon.svg';
import styles from '@/components/Header/SearchInput.module.css';

export default function SearchInput() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <input
        type="email"
        placeholder={t('SearchPlaceholder')}
        className={styles.input}
      />
      <button className={styles.button}>
        <Image
          src={searchIconSrc}
          alt={t('AltLocationIcon')}
          width={20}
          height={20}
          className={styles.icon}
        />
      </button>
    </div>
  );
}
