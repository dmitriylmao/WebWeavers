import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Banner from '@/components/Banner';
import ProductsList from '@/components/ProductCard/ProductsList';
import Categories from '@/components/Сategories';
import PromotionSwiper from '@/components/PromotionSwiper';
import LogoSwiper from '@/components/LogoSwiper';
import Map from '@/components/Map';
import FooterDesktop from '@/components/Footer/desktop/FooterDesktop';
import { LANGUAGE_EN } from '@/core/constants';
import ContextTheme from '@/core/hooks/ContextTheme';
import useTheme from '@/core/hooks/SetTheme';

const HomePage = () => {
  const [isDark, handleThemeToggle] = useTheme();
  const value = {
    isDark,
    handleThemeToggle
  }
  return (
    <ContextTheme.Provider value={value}> 
      <Banner />
      <ProductsList />
      <Categories />
      <PromotionSwiper />
      <LogoSwiper />
      <Map />
    </ContextTheme.Provider>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || LANGUAGE_EN, ['common'])),
  },
});

export default HomePage;
