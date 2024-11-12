import { Inter } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/pagination';
import { appWithTranslation } from 'next-i18next';
import '@/styles/global.css';

const inter = Inter({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={inter.className}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/*</Layout> */}
    </div>
  );
};

export default appWithTranslation(MyApp);
