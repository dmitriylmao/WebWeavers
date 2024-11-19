import { useTranslation } from 'next-i18next';
import Category from '@/components/Сategories/Category';
import { categories } from '@/components/Сategories/Constants';
import styles from '@/components/Сategories/Categories.module.css';

export default function Categories() {
  const { t } = useTranslation('common');

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>{t('CATEGORIES')}</span>{' '}
        {t('PRODUCTS')}
      </h2>
      <p className={styles.subtitle}>{t('SpecialPrices')}</p>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <Category key={category.id} category={category} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}
