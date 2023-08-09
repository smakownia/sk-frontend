import { useMutation, useQueryClient } from "react-query";
import { Product, createProduct } from "@/features/products";

export function useCreateProductMutation() {
  const queryClient = useQueryClient();

  return useMutation(createProduct, {
    onSuccess: (product) => {
      queryClient.setQueryData<Product[]>("products", (products) => {
        if (!products) {
          return [product];
        }

        return [...products, product];
      });
    },
  });
}
