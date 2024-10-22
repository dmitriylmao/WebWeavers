import Image from 'next/image';
import styles from './Categories.module.css';
import Link from 'next/link';

export default function Categories() {
  const categories = [
    {
      title: 'Бытовая химия',
      imgSrc: '/images/categories/cat1.png',
      link: '/himiya',
    },
    {
      title: 'Косметика и гигиена',
      imgSrc: '/images/categories/cat2.png',
      link: '/kosmetika',
    },
    {
      title: 'Товары для дома',
      imgSrc: '/images/categories/cat3.png',
      link: '/tovary_dlya_doma',
    },
    {
      title: 'Товары для детей и мам',
      imgSrc: '/images/categories/cat4.png',
      link: '/tovary_dlya_detey',
    },
    {
      title: 'Посуда',
      imgSrc: '/images/categories/cat5.png',
      link: '/posuda',
    },
  ];

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
          <Link href={category.link} className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <Image
                src={category.imgSrc}
                alt={category.title}
                width={250}
                height={250}
              />
            </div>
            <p className={styles.cardTitle}>{category.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
