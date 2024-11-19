import searchIconSrc from '@/public/images/Header/search_Icon.svg';
import Image from 'next/image';
import styles from '@/components/Header/SearchInput.module.css';
import { useTranslation } from 'next-i18next';

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
        <span>
          <Image
            src={searchIconSrc}
            alt="Location Icon"
            width={20}
            height={20}
            className={styles.icon}
          />
        </span>
      </button>
    </div>
  );
}
