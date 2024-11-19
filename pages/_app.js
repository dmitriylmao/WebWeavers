import 'swiper/css';
import 'swiper/css/pagination';
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import Layout from '@/layouts/Layout';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ContextTheme from '@/core/hooks/ContextTheme';
import useTheme from '@/core/hooks/SetTheme';
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
  const { i18n } = useTranslation();
  const router = useRouter();
  const [isDark, handleThemeToggle] = useTheme();
  const value = {
    isDark,
    handleThemeToggle
  }

  useEffect(() => {
    if (i18n && i18n.changeLanguage && i18n.language !== router.locale) {
      i18n.changeLanguage(router.locale);
    }
  }, [i18n, router.locale]);

  return (
    <ContextTheme.Provider value={value}>
      <div className={inter.className} id={value.isDark ? "dark" : "light"}>
        {useLayout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </ContextTheme.Provider>
  );
};

export default appWithTranslation(MyApp);
