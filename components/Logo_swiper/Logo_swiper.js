import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import styles from './Logo_swiper.module.css';
import Image from 'next/image';

// Add your image imports
import logo1 from '../../public/images/Logo_swiper/logo1.png';
import logo2 from '../../public/images/Logo_swiper/logo2.png';
import logo3 from '../../public/images/Logo_swiper/logo3.png';
import logo4 from '../../public/images/Logo_swiper/logo4.png';
import logo5 from '../../public/images/Logo_swiper/logo5.png';
import logo6 from '../../public/images/Logo_swiper/logo6.png';
import logo7 from '../../public/images/Logo_swiper/logo7.png';
import logo8 from '../../public/images/Logo_swiper/logo8.png';
import logo9 from '../../public/images/Logo_swiper/logo9.png';
import logo10 from '../../public/images/Logo_swiper/logo10.png';
import logo11 from '../../public/images/Logo_swiper/logo11.png';
import logo12 from '../../public/images/Logo_swiper/logo12.png';
import logo13 from '../../public/images/Logo_swiper/logo13.png';

// Import more logos as needed

export default function Logo_swiper() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>ЛУЧШИЕ</span> ТОВАРЫ
      </h2>
      <p className={styles.subtitle}>От ведущих мировых брендов</p>

      <Swiper
      
        spaceBetween={30}
        slidesPerView={10} 
        slidesPerGroup={4}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <Image src={logo1} alt="Logo 1" width={77} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo2} alt="Logo 2" width={110} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo3} alt="Logo 3" width={120} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo4} alt="Logo 4" width={130} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo5} alt="Logo 5" width={100} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo6} alt="Logo 6" width={100} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo7} alt="Logo 7" width={100} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo8} alt="Logo 8" width={100} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo9} alt="Logo 9" width={100} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo10} alt="Logo 10" width={100} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo11} alt="Logo 11" width={100} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo12} alt="Logo 12" width={100} height={77} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={logo13} alt="Logo 13" width={77} height={77} />
        </SwiperSlide>
        
        {/* Add more slides as needed */}
      </Swiper>
    </section>
  );
}
