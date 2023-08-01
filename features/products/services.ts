import { axiosClient } from "@/lib/axios";
import { Product } from ".";

export async function getAllProducts() {
  return await axiosClient<Product[]>("api/v1/products");
}

export async function getProductById(id: string) {
  return await axiosClient<Product>(`api/v1/products/${id}`);
}
