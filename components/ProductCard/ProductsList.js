import ProductCard from './ProductCard';

import typeA from '../../public/images/Products/box.svg';
import typeB from '@/public/images/Products/bottle.svg';

import product1Img from '@/public/images/Products/1.png';
import product2Img from '@/public/images/Products/2.png';
import product3Img from '@/public/images/Products/3.png';
import product4Img from '@/public/images/Products/4.png';
import styles from './ProductsList.module.css';

const ProductsList = () => {
  const saleProducts = [
    {
      id: 101,
      title: 'ср-во для мытья посуды Апельсин+мята',
      producer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product1Img,
      volume: '450 мл',
      volumeType: typeB,
    },
    {
      id: 102,
      volume: '450 мл',
      title: 'средство для мытья посуды Srystal',
      producer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product2Img,
      volumeType: typeB,
    },
    {
      id: 103,
      volume: '15X28.8 г',
      title:
        'Автмат Гель СМС жидкое в растворимых капсулах Liauid Capsules Горный родник',
      producer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product3Img,
      volumeType: typeA,
    },
    {
      id: 104,
      volume: '450 мл',
      title: 'Порошок стиральный Автомат 100 пятен COMPACT',
      producer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product4Img,
      volumeType: typeA,
    },
    {
      id: 101,

      title: 'ср-во для мытья посуды Апельсин+мята',
      producer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product1Img,
      volume: '450 мл',
      volumeType: typeB,
    },
    {
      id: 102,
      volume: '450 мл',
      title: 'средство для мытья посуды Srystal',
      producer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product2Img,
      volumeType: typeB,
    },
    {
      id: 103,
      volume: '15X28.8 г',
      title:
        'Автмат Гель СМС жидкое в растворимых капсулах Liauid Capsules Горный родник',
      producer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product3Img,
      volumeType: typeA,
    },
    {
      id: 104,
      volume: '450 мл',
      title: 'Порошок стиральный Автомат 100 пятен COMPACT',
      producer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product4Img,
      volumeType: typeA,
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>АКЦИОННЫЕ</span> ТОВАРЫ
      </h2>
      <div className={styles.productsList}>
        {saleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            volume={product.volume}
            volumeType={product.volumeType}
            title={product.title}
            producer={product.producer}
            brand={product.brand}
            price={product.price}
            imgSrc={product.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
