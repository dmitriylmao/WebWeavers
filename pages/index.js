import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Promotion_swiper from '../components/Promotion_swiper/Promotion_swiper';
import Categories from '../components/Сategories/Сategories';
import { Header } from '@/components/Header/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <Categories />
      <Promotion_swiper />

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
