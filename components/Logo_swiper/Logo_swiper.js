import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import styles from './Logo_swiper.module.css';

const logoData = [
  {
    src: '/images/Logo_swiper/logo1.png',
    alt: 'Logo 1',
    name: 'Brand 1',
    number: '001',
  },
  {
    src: '/images/Logo_swiper/logo2.png',
    alt: 'Logo 2',
    name: 'Brand 2',
    number: '002',
  },
  {
    src: '/images/Logo_swiper/logo3.png',
    alt: 'Logo 3',
    name: 'Brand 3',
    number: '003',
  },
  {
    src: '/images/Logo_swiper/logo4.png',
    alt: 'Logo 4',
    name: 'Brand 4',
    number: '004',
  },
  {
    src: '/images/Logo_swiper/logo5.png',
    alt: 'Logo 5',
    name: 'Brand 5',
    number: '005',
  },
  {
    src: '/images/Logo_swiper/logo6.png',
    alt: 'Logo 6',
    name: 'Brand 6',
    number: '006',
  },
  //{ src: '/images/Logo_swiper/logo7.png', alt: 'Logo 7', name: 'Brand 7', number: '007' }//
  {
    src: '/images/Logo_swiper/logo8.png',
    alt: 'Logo 8',
    name: 'Brand 8',
    number: '008',
  },
  {
    src: '/images/Logo_swiper/logo9.png',
    alt: 'Logo 9',
    name: 'Brand 9',
    number: '009',
  },
  {
    src: '/images/Logo_swiper/logo10.png',
    alt: 'Logo 10',
    name: 'Brand 10',
    number: '010',
  },
  {
    src: '/images/Logo_swiper/logo11.png',
    alt: 'Logo 11',
    name: 'Brand 11',
    number: '011',
  },
  {
    src: '/images/Logo_swiper/logo12.png',
    alt: 'Logo 12',
    name: 'Brand 12',
    number: '012',
  },
  {
    src: '/images/Logo_swiper/logo13.png',
    alt: 'Logo 13',
    name: 'Brand 13',
    number: '013',
  },
];

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
