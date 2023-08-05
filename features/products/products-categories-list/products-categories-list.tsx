import { Category, Product } from "@/features/products";
import { ProductsCategoryList } from "./products-category-list";

type ProductsCategoriesListProps = {
  categories: Category[];
  products: Product[][];
};

export function ProductsCategoriesList(props: ProductsCategoriesListProps) {
  const { categories, products } = props;

  return (
    <main className="container flex flex-col gap-16 py-12">
      {categories.map((c, i) => (
        <ProductsCategoryList key={c.id} category={c} products={products[i]} />
      ))}
    </main>
  );
}
