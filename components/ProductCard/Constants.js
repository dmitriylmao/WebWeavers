import typeA from '@/public/images/Products/box.svg';
import typeB from '@/public/images/Products/bottle.svg';
import product1Img from '@/public/images/Products/1.png';
import product2Img from '@/public/images/Products/2.png';
import product3Img from '@/public/images/Products/3.png';
import product4Img from '@/public/images/Products/4.png';

export const productCategories = {
  DISHWASHING: 'Для мытья посуды',
  LAUNDRY: 'Стиральные средства',
  CLEANING: 'Уборка',
};

export const saleProducts = [
  {
    id: 101,
    title: 'ср-во для мытья посуды Апельсин+мята',
    producer: 'Нэфис',
    brand: 'AOS',
    price: '48,76',
    imgSrc: product1Img,
    volume: '450 мл',
    volumeType: typeB,
    category: [productCategories.DISHWASHING, productCategories.CLEANING],
    article: 1001001,
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
    category: [productCategories.DISHWASHING, productCategories.CLEANING],
    article: 1001002,
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
    category: [productCategories.LAUNDRY, productCategories.CLEANING],
    article: 1001003,
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
    category: [productCategories.LAUNDRY, productCategories.CLEANING],
    article: 1001004,
  },
  {
    id: 105,
    title: 'ср-во для мытья посуды Апельсин+мята',
    producer: 'Нэфис',
    brand: 'AOS',
    price: '48,76',
    imgSrc: product1Img,
    volume: '450 мл',
    volumeType: typeB,
    category: [productCategories.DISHWASHING, productCategories.CLEANING],
    article: 1001005,
  },
  {
    id: 106,
    volume: '450 мл',
    title: 'средство для мытья посуды Srystal',
    producer: 'Нэфис',
    brand: 'AOS',
    price: '48,76',
    imgSrc: product2Img,
    volumeType: typeB,
    category: [productCategories.DISHWASHING, productCategories.CLEANING],
    article: 1001006,
  },
  {
    id: 107,
    volume: '15X28.8 г',
    title:
      'Автмат Гель СМС жидкое в растворимых капсулах Liauid Capsules Горный родник',
    producer: 'Нэфис',
    brand: 'AOS',
    price: '48,76',
    imgSrc: product3Img,
    volumeType: typeA,
    category: [productCategories.LAUNDRY, productCategories.CLEANING],
    article: 1001007,
  },
  {
    id: 108,
    volume: '450 мл',
    title: 'Порошок стиральный Автомат 100 пятен COMPACT',
    producer: 'Нэфис',
    brand: 'AOS',
    price: '48,76',
    imgSrc: product4Img,
    volumeType: typeA,
    category: [productCategories.LAUNDRY, productCategories.CLEANING],
    article: 1001008,
  },
];
