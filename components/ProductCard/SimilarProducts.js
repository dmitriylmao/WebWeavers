import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductCard from '@/components/ProductCard/ProductCard';
import useWindowSize from '@/core/hooks/useWindowSize';
import Link from 'next/link';
import styles from '@/components/ProductCard/ProductsList.module.css';
import { saleProducts } from '@/components/ProductCard/Constants';

const SimilarProducts = ({ selectedProduct }) => {
  const { isMobile, isTablet } = useWindowSize();

  const relatedProducts = saleProducts
    .filter(
      (product) =>
        product.id !== selectedProduct.id &&
        product.category.some((category) =>
          selectedProduct.category.includes(category),
        ),
    )
    .slice(0, 4);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>ПОХОЖИЕ</span> ТОВАРЫ
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
          {relatedProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                href={`${product.id}`}
                style={{ textDecoration: 'none' }}
                passHref
              >
                <ProductCard
                  id={product.id}
                  volume={product.volume}
                  volumeType={product.volumeType}
                  title={product.title}
                  producer={product.producer}
                  brand={product.brand}
                  price={product.price}
                  imgSrc={product.imgSrc}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.productsList}>
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              href={`${product.id}`}
              style={{ textDecoration: 'none' }}
              passHref
            >
              <ProductCard
                id={product.id}
                volume={product.volume}
                volumeType={product.volumeType}
                title={product.title}
                producer={product.producer}
                brand={product.brand}
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

export default SimilarProducts;
