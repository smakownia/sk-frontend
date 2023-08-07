import { Category, Product } from "@/features/products";
import { ProductsList } from "./products-list";

type ProductsCategoriesListProps = {
  categories: Category[];
  products: Product[][];
};

export function CategoriesList(props: ProductsCategoriesListProps) {
  const { categories, products } = props;

  return (
    <main className="container flex flex-col gap-16 py-8">
      {categories.map((category, i) => (
        <section key={category.id}>
          <h2 className="mb-8 text-4xl font-medium">{category.name}</h2>
          <ProductsList key={category.id} products={products[i]} />
        </section>
      ))}
    </main>
  );
}
