import useSWR from "swr";
import { ApiErrorResponse } from "@/lib/types";
import { getProducts, Product } from "@/features/products";

export function useProducts(categoryId?: string) {
  return useSWR<Product[], ApiErrorResponse>(
    ["/api/v1/products", categoryId],
    ([_, categoryId]: [string, string]) => getProducts(categoryId),
  );
}
