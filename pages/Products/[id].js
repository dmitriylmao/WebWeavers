import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Страница товара с ID: {id}</h1>
    </div>
  );
};

export default ProductPage;
