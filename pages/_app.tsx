import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import '../styles/index.css'; 

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(MyApp);
