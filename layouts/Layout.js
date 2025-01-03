import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
