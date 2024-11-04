import logo from '@/public/images/Products/telejka.svg';
import YellowButton from '../UI/YellowButton/YellowButton';

export default function Test() {
  return (
    <section>
      <YellowButton label="В КАТАЛОГ" size="lg" href="/catalog" />
      <YellowButton
        label="ПРИНЯТЬ УЧАСТИЕ"
        size="lg"
        href="/catalog"
        icon={logo}
      />

      <YellowButton
        label="Каталог"
        size="md"
        download="/path/to/pricelist.pdf"
        icon={logo}
      />

      <YellowButton
        label="В КОРЗИНУ"
        size="sm"
        action="add-to-cart"
        icon={logo}
      />
    </section>
  );
}
