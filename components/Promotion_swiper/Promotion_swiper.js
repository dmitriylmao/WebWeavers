import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import styles from './Promotion_swiper.module.css';
import Button from '../Button/Button';

const promotionSlide = {
  imageSrc: '/images/Promotion_swiper/slide1.png',
  duration: '*АКЦИЯ ДЕЙСТВУЕТ ДО 04/09/22',
  title: 'Название Акции',
  description:
    'Условия: поставить лайк , подписаться на канал , репост на стену ВК',
  buttonText: 'ПРИНЯТЬ УЧАСТИЕ',
  link: '/promotion',
};

const partnerSlide = {
  imageSrc: '/images/Promotion_swiper/slide2.png',
  duration: '*АКЦИЯ ДЕЙСТВУЕТ ДО 02/03/24',
  title: 'Наш партнер',
  description:
    'Леруа мерлен Леруа мерлен Леруа Леруа Леруа мерлен Леруа Леруа Леруа',
  buttonText: 'ПЕРЕЙТИ К БРЕНДУ',
  link: '/Lerua',
};

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
