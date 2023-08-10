import { useMutation, useQueryClient } from "react-query";
import { createProduct } from "@/features/products";

export function useCreateProductMutation() {
  const queryClient = useQueryClient();

  return useMutation(createProduct, {
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: "products" });
    },
  });
}
