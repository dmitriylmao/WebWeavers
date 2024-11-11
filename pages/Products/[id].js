import { useRouter } from 'next/router';
import { saleProducts } from '@/components/ProductCard/Constants';
import ProductDetails from '@/components/ProductCard/ProductDetails';
import SimilarProducts from '@/components/ProductCard/SimilarProducts';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Загрузка...</p>;
  }

  const selectedProduct = saleProducts.find(
    (product) => product.id === parseInt(id),
  );

  if (!selectedProduct) {
    return <p>Товар не найден</p>;
  }

  return (
    <div>
      <Breadcrumb product={selectedProduct} />
      <ProductDetails product={selectedProduct} />
      <SimilarProducts selectedProduct={selectedProduct} />
    </div>
  );
};

export default ProductPage;
