import typeA from '@/public/images/Products/box.svg';
import typeB from '@/public/images/Products/bottle.svg';
import product1Img from '@/public/images/Products/1.png';
import product2Img from '@/public/images/Products/2.png';
import product3Img from '@/public/images/Products/3.png';
import product4Img from '@/public/images/Products/4.png';

export const productCategories = {
  DISHWASHING: 'DISHWASHING',
  LAUNDRY: 'LAUNDRY',
  CLEANING: 'CLEANING',
  TEST: 'TEST',
};

export const saleProducts = [
  {
    id: 101,
    title: 'title',
    producer: '101',
    brand: '101',
    price: '48,76',
    imgSrc: product1Img,
    volume: '101',
    volumeType: typeB,
    category: [productCategories.TEST],
    article: 1001001,
    description:
      '101',
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
    category: [
      productCategories.DISHWASHING,
      productCategories.CLEANING,
      productCategories.TEST,
    ],
    article: 1001002,
    description:
      'Моющее средство для посуды с формулой глубокого очищения. Обеспечивает идеальную чистоту и блеск, не повреждая кожу рук.',
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
    description:
      'Жидкие капсулы для стирки с ароматом горного родника. Эффективно удаляют пятна, сохраняют яркость цвета и свежесть белья.',
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
    description:
      'Стиральный порошок для автоматической стирки, эффективно удаляющий до 100 видов пятен. Подходит для цветных и белых тканей.',
  },
  {
    id: 105,
    title: 'ср-во для мытья посуды Апельсин+мята',
    producer: 'Нэфис',
    brand: 'AOSSSS',
    price: '48,76',
    imgSrc: product1Img,
    volume: '450 мл',
    volumeType: typeB,
    category: [productCategories.DISHWASHING, productCategories.CLEANING],
    article: 1001005,
    description:
      'Эффективное средство для мытья посуды с ароматом апельсина и мяты. Легко справляется с жиром, оставляя приятный цитрусовый аромат и не оставляя следов.',
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
    description:
      'Моющее средство для посуды с формулой глубокого очищения. Обеспечивает идеальную чистоту и блеск, не повреждая кожу рук.',
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
    description:
      'Жидкие капсулы для стирки с ароматом горного родника. Эффективно удаляют пятна, сохраняют яркость цвета и свежесть белья.',
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
    description:
      'Стиральный порошок для автоматической стирки, эффективно удаляющий до 100 видов пятен. Подходит для цветных и белых тканей.',
  },
];
