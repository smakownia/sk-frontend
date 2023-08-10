import { apiClient } from "@/lib/clients";
import { Category, CreateProductCommand, Product } from "@/features/products";

export async function getCategories() {
  const { data } = await apiClient<Category[]>("api/v1/categories");

  return data;
}

export async function getProducts() {
  const { data } = await apiClient<Product[]>("api/v1/products");

  return data;
}

export async function createProduct(command: CreateProductCommand) {
  const { data } = await apiClient.post<Product>("api/v1/products", command);

  return data;
}

export async function deleteProduct(id: string) {
  const { data } = await apiClient.delete<void>(`api/v1/products/${id}`);

  return data;
}

export async function deleteCategory(id: string) {
  const { data } = await apiClient.delete<void>(`api/v1/categories/${id}`);

  return data;
}
