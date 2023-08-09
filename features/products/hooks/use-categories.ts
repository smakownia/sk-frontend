import { useQuery } from "react-query";
import { getCategories } from "@/features/products";

export function useCategories() {
  return useQuery("categories", getCategories, {
    refetchOnMount: (categories) => !Boolean(categories),
    refetchOnWindowFocus: false,
  });
}
