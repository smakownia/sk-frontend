import { apiClient } from "@/lib/clients";
import { Category, Product } from ".";

export async function getAllCategories() {
  return apiClient<Category[]>("api/v1/categories");
}

export async function getAllProducts(categoryId?: string) {
  return apiClient<Product[]>("api/v1/products", {
    params: { categoryId },
  });
}

export async function getAllCategoriesWithProducts() {
  const { data: categories } = await getAllCategories();

  const products = await Promise.all<Product[]>(
    categories.map(async ({ id }) => (await getAllProducts(id)).data),
  );

  return { categories, products };
}
