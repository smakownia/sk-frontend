import { useQuery } from "react-query";
import { getProducts } from "@/features/products";

export function useProducts() {
  return useQuery("products", getProducts, {
    refetchOnWindowFocus: false,
  });
}
