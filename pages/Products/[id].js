import { useRouter } from 'next/router';
import { saleProducts } from '@/components/ProductCard/Constants';
import ProductDetails from '@/components/ProductCard/ProductDetails';
import SimilarProducts from '@/components/ProductCard/SimilarProducts';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const selectedProduct = saleProducts.find(
    (product) => product.id === parseInt(id),
  );

  if (!selectedProduct) return <p>Товар не найден</p>;

  return (
    <div>
      <ProductDetails product={selectedProduct} />
      <SimilarProducts selectedProduct={selectedProduct} />
    </div>
  );
};

export default ProductPage;
