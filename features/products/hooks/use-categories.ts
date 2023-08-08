import useSWR from "swr";
import { ApiErrorResponse } from "@/lib/types";
import { Category, getCategories } from "@/features/products";

export function useCategories() {
  return useSWR<Category[], ApiErrorResponse>(
    "/api/v1/categories",
    getCategories,
  );
}
