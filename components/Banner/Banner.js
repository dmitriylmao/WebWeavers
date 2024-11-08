import { bannerAdvantages } from '@/components/Banner/constants.js';
import styles from '@/components/Banner/Banner.module.css';
import YellowButton from '../UI/YellowButton/YellowButton';

export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.mainTitle}>
            Бытовая химия, косметика и хозтовары
          </h2>
          <h3 className={styles.subTitle}>
            ОПТОМ <span>ПО КОКЧЕТАВУ И ОБЛАСТИ</span>
          </h3>
          <div className={styles.catalogButton}>
            <YellowButton label="В КАТАЛОГ" size="lg" href="/catalog" />
          </div>
          <div className={styles.features}>
            {bannerAdvantages.map((advantage) => (
              <p key={advantage} className={styles.feature}>
                <span className={styles.icon}>+</span>
                {advantage}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
