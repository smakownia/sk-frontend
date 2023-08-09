import { useMutation, useQueryClient } from "react-query";
import { Product, deleteProduct } from "@/features/products";

export function useDeleteProductMutation() {
  const queryClient = useQueryClient();

  return useMutation(deleteProduct, {
    onSuccess: (_, id) => {
      queryClient.setQueryData<Product[]>("products", (products) => {
        if (!products) {
          return [];
        }

        return products?.filter((product) => product.id !== id);
      });
    },
  });
}
