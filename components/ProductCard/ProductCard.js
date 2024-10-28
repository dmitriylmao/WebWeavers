import Image from 'next/image';
import styles from './ProductCard.module.css';

const ProductCard = ({ id, title, price, imgSrc, volume, brand, producer }) => {
  return (
    <div className={styles.productCard}>
      <span className={styles.popularLabel}>Популярное</span>
      <Image src={imgSrc} alt={title} className={styles.productImage} width={200} height={200} />
      <p className={styles.volume}>{volume}</p>
      <h2 className={styles.productTitle}>{title}</h2>  
      <p className={styles.details}>Штрихкод: <span className={styles.bold}>{id}</span></p>
      <p className={styles.details}>Производитель: <span className={styles.bold}>{producer}</span></p>
      <p className={styles.details}>Бренд: <span className={styles.bold}>{brand}</span></p>
      <div className={styles.priceAndButton}>
        <p className={styles.productPrice}>{price} ₸</p>
        <button className={styles.addToCartButton}>В корзину 🛒</button>
      </div>
    </div>
  );
};

export default ProductCard;
