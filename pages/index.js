import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Translate from '../components/Translate';
import ProductsList from '../components/ProductCard/ProductsList';

const HomePage = () => {
  return (
    <>
      {/*<Translate /> */}
      <ProductsList/>
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
