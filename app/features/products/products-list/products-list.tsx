
import { productsService } from "@/app/features/products";
import { Item } from "./item";

export async function ProductsList() {
  const products = await productsService.get();

  return (
    <ul className="container py-16 grid grid-cols-4 gap-16">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </ul>
  );
}
