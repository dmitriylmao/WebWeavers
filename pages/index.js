import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header1 } from '@/components/Header1/Header1';
import Banner from '@/components/Banner';
import ProductsList from '@/components/ProductList/ProductCardDetails/ProductsList';
import Categories from '@/components/Сategories';
import PromotionSwiper from '@/components/PromotionSwiper';
import LogoSwiper from '@/components/LogoSwiper';
import Map from '@/components/Map';
import Footer from '@/components/Footer/Footer';
import { LANGUAGE_EN } from '@/core/constants';

const HomePage = () => {
  return (
    <>
    <Header1 />
      <Banner />
      <ProductsList />
      <Categories />
      <PromotionSwiper />
      <LogoSwiper />
      <Map />
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || LANGUAGE_EN, ['common'])),
  },
});

export default HomePage;
