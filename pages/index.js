import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Banner from '@/components/Banner';
import ProductsList from '@/components/ProductList/ProductCardDetails/ProductsList';
import Categories from '@/components/Сategories';
import PromotionSwiper from '@/components/PromotionSwiper';
import LogoSwiper from '@/components/LogoSwiper';
import Map from '@/components/Map';

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const HomePage = () => {
  return (
    <>
      <Banner />
      <ProductsList />
      <Categories />
      <PromotionSwiper />
      <LogoSwiper />
      <Map />
    </>
  );
};

export default HomePage;
