import ProductCard from './ProductCard';

import product1Img from '@/public/images/444.jpg';
import product2Img from '@/public/images/444.jpg';
import styles from './ProductsList.module.css'; 

const ProductsList = () => {
  const saleProducts = [
    {
      id: 1,
      title: 'AOS средство для мытья посуды Crystal',
      manufacturer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product1Img,
    },
    {
      id: 2,
      title: 'ARIEL капсулы для стирки',
      manufacturer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product2Img,
    },
    {
      id: 1,
      title: 'AOS средство для мытья посуды Crystal',
      manufacturer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product1Img,
    },
    {
      id: 2,
      title: 'ARIEL капсулы для стирки',
      manufacturer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product2Img,
    },
    {
      id: 1,
      title: 'AOS средство для мытья посуды Crystal',
      manufacturer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product1Img,
    },
    {
      id: 2,
      title: 'ARIEL капсулы для стирки',
      manufacturer: 'Нэфис',
      brand: 'AOS',
      price: '48,76',
      imgSrc: product2Img,
    },
  ];

  return (
    <div className={styles.productsList}>
      {saleProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          manufacturer={product.manufacturer}
          brand={product.brand}
          price={product.price}
          imgSrc={product.imgSrc}
        />
      ))}
    </div>
  );
};

export default ProductsList;
