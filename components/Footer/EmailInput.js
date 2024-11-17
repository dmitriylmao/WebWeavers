import { useTranslation } from 'next-i18next';
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
        <span>&#9654;</span>
      </button>
    </div>
  );
}
