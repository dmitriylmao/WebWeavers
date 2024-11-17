import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductCard from '@/components/ProductCard/ProductCard';
import { saleProducts } from '@/components/ProductCard/Constants';
import useWindowSize from '@/core/hooks/useWindowSize';
import Link from 'next/link';
import styles from '@/components/ProductCard/ProductsList.module.css';
import ContextTheme from '@/core/hooks/ContextTheme';
import useTheme from '@/core/hooks/SetTheme';
import { useContext } from 'react';

const ProductsList = () => {
  const { isMobile, isTablet } = useWindowSize();
  const value = useContext(ContextTheme);
  return (
    <section className={styles.container} id={value.isDark ? "dark" : "light"}>
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
