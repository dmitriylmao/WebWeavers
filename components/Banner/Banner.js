// components/banner.js
import React from 'react';
import styles from './Banner.module.css';

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
          <button className={styles.catalogButton}>В КАТАЛОГ</button>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>+</span>
              <p className={styles.featureText}>
                Только самые выгодные предложения
              </p>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>+</span>
              <p className={styles.featureText}>
                Бесплатная доставка по{' '}
                <span className={styles.highlights}>Кокчетаву от 10 тыс ₸</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
