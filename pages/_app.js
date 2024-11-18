import 'swiper/css';
import 'swiper/css/pagination';
import { appWithTranslation } from 'next-i18next';
import Layout from '@/layouts/Layout';
import { Inter } from 'next/font/google';
import '@/styles/global.css';

const inter = Inter({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const MyApp = ({ Component, pageProps }) => {
  const useLayout = Component.useLayout ?? true;

  return (
    <div className={inter.className}>
      {useLayout ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
};

export default appWithTranslation(MyApp);
