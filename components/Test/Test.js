import logo from '@/public/images/Products/telejka.svg'
import YellowButton from '../UI/YellowButton/YellowButton';

export default function Test() {
  return (
    <section >
      <YellowButton
        label="В каталог"
        size="lg"
        href="/catalog"
      />
      <YellowButton
        label="Принять участие"
        size="lg"
        href="/catalog"
      />

      <YellowButton
        label="Каталог"
        size="md"
        download="/path/to/pricelist.pdf"
      />

      <YellowButton
        label="Добавить в корзину"
        size="sm"
        action="add-to-cart"
        icon = {logo}
      />
    </section>
  );
}
