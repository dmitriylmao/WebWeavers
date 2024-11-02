import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { logoData } from '@/components/Logo_swiper/Constants';
import styles from '@/components/Logo_swiper/Logo_swiper.module.css';

export default function Logo_swiper() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>ЛУЧШИЕ</span> ТОВАРЫ
      </h2>
      <p className={styles.subtitle}>От ведущих мировых брендов</p>

      <Swiper
        spaceBetween={10}
        slidesPerView={10}
        slidesPerGroup={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 10,
            spaceBetween: 20,
          },
        }}
      >
        {logoData.map((logo, index) => (
          <SwiperSlide key={index}>
            <Link href={logo.number} passHref>
              <div className={styles.card}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={styles.logoImage}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
