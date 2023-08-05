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

export async function getProductById(id: string) {
  return apiClient<Product>(`api/v1/products/${id}`);
}
