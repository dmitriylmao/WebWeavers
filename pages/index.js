import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Banner from '../components/Banner/Banner';
import ProductsList from '../components/ProductCard/ProductsList';
import Promotion_swiper from '../components/Promotion_swiper/Promotion_swiper';
import Logo_swiper from '../components/Logo_swiper/Logo_swiper';
import Categories from '../components/Сategories/Сategories';
import Map from '../components/Map/Map';

const HomePage = () => {
  return (
    <>
      <Banner />
      <ProductsList />
      <Categories />
      <Promotion_swiper />
      <Logo_swiper />
      <Map />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default HomePage;
