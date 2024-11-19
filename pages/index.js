import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Banner from '@/components/Banner';
import Categories from '@/components/Сategories';
import PromotionSwiper from '@/components/PromotionSwiper';
import LogoSwiper from '@/components/LogoSwiper';
import Map from '@/components/Map';
import { LANGUAGE_EN } from '@/core/constants';
import ContextTheme from '@/core/hooks/ContextTheme';
import useTheme from '@/core/hooks/SetTheme';

const HomePage = () => {
  return ( 
    <>
      <Banner />
        <Categories />
        <PromotionSwiper />
        <LogoSwiper />
        <Map />
    </>  
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || LANGUAGE_EN, ['common'])),
  },
});

export default HomePage;
