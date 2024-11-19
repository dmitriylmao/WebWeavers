import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import YellowButton from '../UI/YellowButton/YellowButton';
import {
  promotionSlide,
  partnerSlide,
} from '@/components/PromotionSwiper/Constants';
import styles from '@/components/PromotionSwiper/PromotionSwiper.module.css';
import { useTranslation } from 'next-i18next';

const sliderData = [promotionSlide, partnerSlide];

export default function PromotionSwiper() {
  const { t } = useTranslation('common');
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
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slideContent}>
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className={styles.slideImage}
              />
              <div>
                <p className={styles.slideDuration}>{t(slide.duration)}</p>
                <h2 className={styles.slideTitle}>{t(slide.title)}</h2>
                <p className={styles.slideDescription}>
                  {t(slide.description)}
                </p>
                <YellowButton
                  label={t(slide.buttonText)}
                  size="lg"
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
