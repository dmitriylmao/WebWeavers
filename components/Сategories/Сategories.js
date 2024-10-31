import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Categories.module.css';
import Link from 'next/link';

export default function Categories() {
  const categories = [
    {
      title: 'Бытовая химия',
      imgSrc: '/images/categories/cat1.png',
      link: '/himiya',
      direction: 'top',
    },
    {
      title: 'Косметика и гигиена',
      imgSrc: '/images/categories/cat2.png',
      link: '/kosmetika',
      direction: 'left',
    },
    {
      title: 'Товары для дома',
      imgSrc: '/images/categories/cat3.png',
      link: '/tovary_dlya_doma',
      direction: 'bottom',
    },
    {
      title: 'Товары для детей и мам',
      imgSrc: '/images/categories/cat4.png',
      link: '/tovary_dlya_detey',
      direction: 'right',
    },
    {
      title: 'Посуда',
      imgSrc: '/images/categories/cat5.png',
      link: '/posuda',
      direction: 'top',
    },
  ];

  const getAnimationDirection = (direction) => {
    switch (direction) {
      case 'top':
        return { y: -30, opacity: 0 };
      case 'bottom':
        return { y: 30, opacity: 0 };
      case 'left':
        return { x: -30, opacity: 0 };
      case 'right':
        return { x: 30, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>КАТЕГОРИИ</span> ТОВАРОВ
      </h2>
      <p className={styles.subtitle}>
        10 000+ ходовых позиций по специальным ценам
      </p>
      <div className={styles.grid}>
        {categories.map((category, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={getAnimationDirection(category.direction)}
              animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={styles.card}
            >
              <Link
                href={category.link}
                className={styles.link}
                style={{ textDecoration: 'none' }}
              >
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
