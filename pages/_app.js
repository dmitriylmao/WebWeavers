import { Inter } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/pagination';
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import '@/styles/global.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const MyApp = ({ Component, pageProps }) => {
  const { i18n } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (i18n && i18n.changeLanguage && i18n.language !== router.locale) {
      i18n.changeLanguage(router.locale);
    }
  }, [i18n, router.locale]);
  

  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default appWithTranslation(MyApp);
