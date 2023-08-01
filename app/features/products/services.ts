import { fetchClient } from "@/app/lib/fetch-client";
import { Product } from ".";

export const productsService = {
  async get(): Promise<Product[]> {
    const res = await fetchClient("api/v1/products", { cache: "no-store" });
    return await res.json();
  },
  async getById(id: string): Promise<Product> {
    const res = await fetchClient(`api/v1/products/${id}`);
    return await res.json();
  },
};
