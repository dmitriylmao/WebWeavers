import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import useWindowSize from '@/core/hooks/useWindowSize';
import ProductCard from '@/components/ProductList/ProductCard/ProductCard';
import { saleProducts } from '@/components/ProductList/ProductCard/Constants';
import styles from '@/components/ProductList/ProductCardDetails/ProductsList.module.css';

const ProductsList = () => {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>АКЦИОННЫЕ</span> ТОВАРЫ
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
          {saleProducts.map((product) => (
            <Link
              key={product.id}
              href={`Products/${product.id}`}
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

export default ProductsList;
