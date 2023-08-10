import { useMutation, useQueryClient } from "react-query";
import { deleteProduct } from "@/features/products";

export function useDeleteProductMutation() {
  const queryClient = useQueryClient();

  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: "products" });
    },
  });
}
