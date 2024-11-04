import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import styles from '@/components/Сategories/Categories.module.css';

const Category = ({ category, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.2,
  });

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
    <motion.div
      ref={ref}
      initial={getAnimationDirection(category.direction)}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.4, delay: isInView ? delay : 0 }}
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
};

export default Category;
