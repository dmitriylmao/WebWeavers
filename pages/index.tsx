import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Translate from '../components/Translate';



const HomePage = () => {
  return <Translate />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default HomePage;
