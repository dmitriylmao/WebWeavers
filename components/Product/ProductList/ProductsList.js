import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import useWindowSize from '@/core/hooks/useWindowSize';
import ProductCard from '@/components/Product/ProductCard/ProductCard';
import { saleProducts } from '@/components/Product/ProductCard/Constants';
import { useTranslation } from 'next-i18next';
import styles from '@/components/Product/ProductList/ProductsList.module.css';

const ProductsList = () => {
  const { isMobile, isTablet } = useWindowSize();
  const { t } = useTranslation('common');

  return (
    
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>{t('saleHighlight')}</span>{' '}
        {t('saleProducts')}
      </h2>

      {isMobile || isTablet ? (
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          className={styles.swiper}
        >
          {saleProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                href={`Products/${product.id}`}
                style={{ textDecoration: 'none' }}
                passHref
              >
                <ProductCard
                  id={product.id}
                  volume={t(`Product.${product.id}.volume`)}
                  volumeType={product.volumeType}
                  title={t(`Product.${product.id}.title`)}
                  producer={t(`Product.${product.id}.producer`)}
                  brand={t(`Product.${product.id}.brand`)}
                  price={product.price}
                  imgSrc={product.imgSrc}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.productsList}>
          {saleProducts.map((product) => (
            <Link
              key={product.id}
              href={`Products/${product.id}`}
              style={{ textDecoration: 'none' }}
              passHref
            >
              <ProductCard
                id={product.id}
                volume={t(`Product.${product.id}.volume`)}
                volumeType={product.volumeType}
                title={t(`Product.${product.id}.title`)}
                producer={t(`Product.${product.id}.producer`)}
                brand={t(`Product.${product.id}.brand`)}
                price={product.price}
                imgSrc={product.imgSrc}
              />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
 
};

export default ProductsList;
