import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Button from '@/components/Button/Button';
import {
  promotionSlide,
  partnerSlide,
} from '@/components/Promotion_swiper/Constants';
import styles from '@/components/Promotion_swiper/Promotion_swiper.module.css';

const sliderData = [promotionSlide, partnerSlide];

export default function Promotion_swiper() {
  return (
    <section className={styles.container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideContent}>
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className={styles.slideImage}
              />
              <div>
                <p className={styles.slideDuration}>{slide.duration}</p>
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <p className={styles.slideDescription}>{slide.description}</p>
                <Button
                  customClass={styles.slideButton}
                  text={slide.buttonText}
                  href={slide.link}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
