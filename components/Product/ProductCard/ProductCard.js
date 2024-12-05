import Image from 'next/image';
import telejka from '@/public/images/Products/telejka.svg';
import CustomButton from '@/components/UI/CustomButton/CustomButton';
import { useTranslation } from 'next-i18next';
import styles from '@/components/Product/ProductCard/ProductCard.module.css';

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
  const { t } = useTranslation('common');

  return (
    <article className={styles.productCard}>
      <span className={styles.popularLabel}>{t('Popular')}</span>
      <Image src={imgSrc} alt={title} className={styles.productImage} />
      <p className={styles.volume}>
        <span>
          <Image
            src={volumeType}
            alt={t('Type')}
            className={styles.volumeType}
            width={16}
            height={16}
          />
        </span>
        {volume}
      </p>
      <h2 className={styles.productTitle}>
        <span className={styles.productBrand}>{brand}</span> {title}
      </h2>
      <p className={styles.details}>
        {t('Barcode')}: <span className={styles.bold}>{id}</span>
      </p>
      <p className={styles.details}>
        {t('Producer')}: <span className={styles.bold}>{producer}</span>
      </p>
      <p className={styles.details}>
        {t('Brand')}: <span className={styles.bold}>{brand}</span>
      </p>
      <div className={styles.priceAndButton}>
        <p className={styles.productPrice}>{price} ₸</p>
        <div className={styles.addToCartButton}>
          <CustomButton
            label={t('AddToCart')}
            size="sm"
            action="add-to-cart"
            icon={telejka}
          />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
