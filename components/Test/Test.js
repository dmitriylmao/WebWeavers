import logo from '@/public/images/Products/telejka.svg';
import CustomButton from '../UI/CustomButton/CustomButton';

export default function Test() {
  return (
    <section>
      <CustomButton label="В КАТАЛОГ" size="lg" href="/catalog" />
      <CustomButton
        label="ПРИНЯТЬ УЧАСТИЕ"
        size="lg"
        href="/catalog"
        icon={logo}
      />

      <CustomButton
        label="Каталог"
        size="md"
        download="/path/to/pricelist.pdf"
        icon={logo}
      />

      <CustomButton
        label="В КОРЗИНУ"
        size="sm"
        action="add-to-cart"
        icon={logo}
      />
    </section>
  );
}
