import { useCategories } from "@/features/products";
import { ProductsList } from "./products-list";

export function CategoriesList() {
  const { data: categories } = useCategories()

  return (
    <main className="container flex flex-col gap-16 py-8">
      {categories?.map(({ id, name }) => (
        <section key={id}>
          <h2 className="mb-8 text-4xl font-medium">{name}</h2>
          <ProductsList key={id} categoryId={id} />
        </section>
      ))}
    </main>
  );
}
