import 'swiper/css';
import 'swiper/css/pagination';
import { appWithTranslation } from 'next-i18next';
import Layout from '@/layouts/Layout';
import { Inter } from 'next/font/google';
import '@/styles/global.css';
import ContextTheme from '@/core/hooks/ContextTheme';
import useTheme from '@/core/hooks/SetTheme';

const inter = Inter({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const MyApp = ({ Component, pageProps }) => {
  const [isDark, handleThemeToggle] = useTheme();
  const value = {
    isDark,
    handleThemeToggle
  }
  return (
    <ContextTheme.Provider value={value}> 

      <div className={inter.className} id={value.isDark ? "dark" : "light"}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </div>
    </ContextTheme.Provider>

  );
};

export default appWithTranslation(MyApp);
