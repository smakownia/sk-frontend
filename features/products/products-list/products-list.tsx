import { Product } from "@/features/products";
import { Item } from "./item";

export function ProductsList({ products }: { products: Product[] }) {
  return (
    <ul className="container py-16 grid grid-cols-4 gap-16">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </ul>
  );
}
