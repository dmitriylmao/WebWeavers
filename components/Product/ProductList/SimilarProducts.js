import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import ProductCard from '@/components/Product/ProductCard/ProductCard';
import { saleProducts } from '@/components/Product/ProductCard/Constants';
import { useTranslation } from 'next-i18next';
import styles from '@/components/Product/ProductList/ProductsList.module.css';

const SimilarProducts = ({ selectedProduct }) => {
  const { t } = useTranslation('common');
  const relatedProducts = saleProducts
    .filter(
      (product) =>
        product.id !== selectedProduct.id &&
        product.category.some((category) =>
          selectedProduct.category.includes(category),
        ),
    )
    .slice(0, 8);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>{t('Similar')}</span>{' '}
        {t('saleProducts')}
      </h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={4}
        loop={true}
        className={styles.swiper}
        breakpoints={{
          60: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Link
              href={`${product.id}`}
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
    </section>
  );
};

export default SimilarProducts;
