import Image from 'next/image';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>Производитель: {product.producer}</p>
      <p>Бренд: {product.brand}</p>
      <p>Цена: {product.price}</p>
      <p>Категории: {product.category.join(', ')}</p>
      <Image
        src={product.imgSrc}
        alt={product.title}
        width={200}
        height={200}
      />
    </div>
  );
};

export default ProductDetails;
