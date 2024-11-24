import { useTranslation } from 'next-i18next';
import { bannerAdvantages } from '@/components/Banner/constants.js';
import YellowButton from '../UI/YellowButton/YellowButton';
import styles from '@/components/Banner/Banner.module.css';

export default function Banner() {
  const { t } = useTranslation('common');

  return (
    <section className={styles.bannerContainer}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.mainTitle}>{t('MainTitle')}</h1>
          <h2 className={styles.subTitle}>
            {t('Wholesale')}
            <span>{t('Kokchetav')}</span>
          </h2>
          <div className={styles.catalogButton}>
            <YellowButton label={t('ToKatalog')} size="lg" href="/catalog" />
          </div>
          <div className={styles.features}>
            {bannerAdvantages.map((advantage) => (
              <p key={advantage} className={styles.feature}>
                <span className={styles.icon} />
                {t(advantage)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
