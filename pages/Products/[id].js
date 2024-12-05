import { useRouter } from 'next/router';
import { saleProducts } from '@/components/Product/ProductCard/Constants';
import ProductDetails from '@/components/Product/ProductCardDetails/ProductDetails';
import SimilarProducts from '@/components/Product/ProductList/SimilarProducts';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

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

  const breadcrumbItems = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    {
      name: `${selectedProduct.brand} ${selectedProduct.title}`,
      path: `/product/${selectedProduct.id}`,
    },
  ];

  return (
    <div>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <ProductDetails product={selectedProduct} />
      <SimilarProducts selectedProduct={selectedProduct} />
    </div>
  );
};

export default ProductPage;
