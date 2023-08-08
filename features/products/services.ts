import { unstable_serialize } from "swr";
import { apiClient } from "@/lib/clients";
import { Category, CreateProductCommand, Product } from "@/features/products";

export async function getCategories() {
  const { data } = await apiClient<Category[]>("api/v1/categories");

  return data;
}

export async function getProducts(categoryId?: string) {
  const { data } = await apiClient<Product[]>("api/v1/products", {
    params: { categoryId },
  });

  return data;
}

export async function createProduct(command: CreateProductCommand) {
  const { data } = await apiClient.post<Product>("api/v1/products", command);

  return data;
}

export async function getCategoriesWithProductsFallback() {
  const categories = await getCategories();

  const productsFallback = await Promise.all(
    categories.map(async (category) => ({
      [unstable_serialize(["/api/v1/products", category.id])]:
        await getProducts(category.id),
    })),
  );

  const mergedProductsFallback = productsFallback.reduce((total, curr) => {
    return { ...total, ...curr };
  }, {});

  return { "/api/v1/categories": categories, ...mergedProductsFallback };
}
