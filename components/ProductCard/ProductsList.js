import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductCard from '@/components/ProductCard/ProductCard';
import { saleProducts } from '@/components/ProductCard/Constants';
import useWindowSize from '@/core/hooks/useWindowSize';
import styles from '@/components/ProductCard/ProductsList.module.css';

const ProductsList = () => {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>АКЦИОННЫЕ</span> ТОВАРЫ
      </h2>

      {isMobile | isTablet ? (
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
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.productsList}>
          {saleProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              volume={product.volume}
              volumeType={product.volumeType}
              title={product.title}
              producer={product.producer}
              brand={product.brand}
              price={product.price}
              imgSrc={product.imgSrc}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsList;
