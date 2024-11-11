import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductCard from '@/components/ProductCard/ProductCard';
import Link from 'next/link';
import styles from '@/components/ProductCard/ProductsList.module.css';
import { saleProducts } from '@/components/ProductCard/Constants';

const SimilarProducts = ({ selectedProduct }) => {
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
        <span className={styles.highlight}>ПОХОЖИЕ</span> ТОВАРЫ
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
    </section>
  );
};

export default SimilarProducts;
