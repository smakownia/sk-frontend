import { useCategories, useProducts } from "@/features/products";
import { ProductsList } from "./products-list";

export function CategoriesList() {
  const { data: categories } = useCategories();
  const { data: products } = useProducts();

  if (!categories || !products) {
    return null;
  }

  return (
    <main className="flex flex-col gap-16 py-8">
      {categories.map(({ id, name }) => (
        <section key={id}>
          <h2 className="mb-8 text-4xl font-medium">{name}</h2>
          <ProductsList
            key={id}
            products={products.filter((product) => product.categoryId === id)}
          />
        </section>
      ))}
    </main>
  );
}
