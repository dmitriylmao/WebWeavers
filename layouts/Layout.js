import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
{
  /*тут не делал еще импорт через index, после переделки добавлю */
}

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
