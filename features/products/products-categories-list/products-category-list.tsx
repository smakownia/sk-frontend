import { Category, Product } from "@/features/products";
import { Item } from "./item";

type ProductsCategoryListProps = { category: Category; products: Product[] };

export function ProductsCategoryList(props: ProductsCategoryListProps) {
  const { category, products } = props;

  return (
    <section>
      <h2 className="mb-8 text-4xl font-medium">{category.name}</h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
}
