import { useQuery } from "react-query";
import { getProducts } from "@/features/products";

export function useProducts() {
  return useQuery("products", getProducts, {
    refetchOnMount: (products) => !Boolean(products),
    refetchOnWindowFocus: false,
  });
}
