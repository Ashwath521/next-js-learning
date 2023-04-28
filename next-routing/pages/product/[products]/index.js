import { useRouter } from "next/router";

function Products() {
  const router = useRouter();
  const productId = router.query.products;
  return <h1>Product details of : {productId}</h1>;
}

export default Products;
