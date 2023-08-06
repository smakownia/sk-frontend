import { Product } from "@/features/products";
import { ProductItem } from "./product-item";

type ProductsCategoryListProps = { products: Product[] };

export function ProductsList(props: ProductsCategoryListProps) {
  const { products } = props;

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
}
