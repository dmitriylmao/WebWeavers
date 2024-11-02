import Image from 'next/image';
import Link from 'next/link';
import telejka from '@/public/images/Products/telejka.svg';
import styles from '@/components/ProductCard/ProductCard.module.css';

const ProductCard = ({
  id,
  title,
  price,
  imgSrc,
  volume,
  volumeType,
  brand,
  producer,
}) => {
  return (
    <Link href={`Products/${id}`} style={{ textDecoration: 'none' }}>
      <div className={styles.productCard}>
        <span className={styles.popularLabel}>Популярное</span>
        <Image src={imgSrc} alt={title} className={styles.productImage} />
        <p className={styles.volume}>
          {' '}
          <span>
            {' '}
            <Image
              src={volumeType}
              alt={'type'}
              className={styles.volumeType}
              width={16}
              height={16}
            />{' '}
          </span>
          {volume}
        </p>
        <h2 className={styles.productTitle}>
          <span className={styles.productBrand}>{brand}</span> {title}
        </h2>
        <p className={styles.details}>
          Штрихкод: <span className={styles.bold}>{id}</span>
        </p>
        <p className={styles.details}>
          Производитель: <span className={styles.bold}>{producer}</span>
        </p>
        <p className={styles.details}>
          Бренд: <span className={styles.bold}>{brand}</span>
        </p>
        <div className={styles.priceAndButton}>
          <p className={styles.productPrice}>{price} ₸</p>
          <button className={styles.addToCartButton}>
            В корзину{' '}
            <span>
              {' '}
              <Image src={telejka} alt={'type'} width={27} height={27} />{' '}
            </span>{' '}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
