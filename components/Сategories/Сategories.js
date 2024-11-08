import Category from '@/components/Сategories/Category';
import { categories } from '@/components/Сategories/Constants';
import styles from '@/components/Сategories/Categories.module.css';

export default function Categories() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>КАТЕГОРИИ</span> ТОВАРОВ
      </h2>
      <p className={styles.subtitle}>
        10 000+ ходовых позиций по специальным ценам
      </p>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <Category key={category.id} category={category} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}
