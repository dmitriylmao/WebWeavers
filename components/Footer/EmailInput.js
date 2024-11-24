import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import icon from '@/public/images/EmailInput/arrow.svg';
import styles from './EmailInput.module.css';

export default function EmailInput() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <input
        type="email"
        placeholder={t('EnterYourEmail')}
        className={styles.input}
      />
      <button className={styles.button}>
        <Image src={icon} alt="arrow icon" width={16} height={16} />
      </button>
    </div>
  );
}
