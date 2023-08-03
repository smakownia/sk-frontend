import { Product } from "@/features/products";
import { Item } from "./item";

export function ProductsList({ products }: { products: Product[] }) {
  return (
    <ul className="container py-16 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </ul>
  );
}
