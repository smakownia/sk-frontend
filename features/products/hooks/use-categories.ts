import { useQuery } from "react-query";
import { getCategories } from "@/features/products";

export function useCategories() {
  return useQuery("categories", getCategories, {
    refetchOnWindowFocus: false,
  });
}
