import { Roboto } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import '../styles/global.css';

const roboto = Roboto({
    weight: ['100','300','400','500','700','900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
  });

  
const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default appWithTranslation(MyApp);
