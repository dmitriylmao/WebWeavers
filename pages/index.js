import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Translate from '../components/Translate';
import Promotion_swiper from '../components/Promotion_swiper/Promotion_swiper';
import Logo_swiper from '../components/Logo_swiper/Logo_swiper';
import Categories from '../components/Сategories/Сategories';
import Map from '../components/Map/Map';

const HomePage = () => {
  return (
    <>
      <Categories />
      <Promotion_swiper />
      <Logo_swiper />
      <Map />
      {/* Сюда лепите ваши компоненты , формата <Component/> ,а лучше ничего не лепите , потом на ветке dev вставим , но для проверки вам в любом кайфе придется лепить , так что лепите*/}
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default HomePage;
