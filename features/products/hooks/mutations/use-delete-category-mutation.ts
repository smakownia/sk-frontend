import { useMutation, useQueryClient } from "react-query";
import { deleteCategory } from "@/features/products";

export function useDeleteCategoryMutation() {
  const queryClient = useQueryClient();

  return useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: "categories" });
      queryClient.refetchQueries({ queryKey: "products" });
      queryClient.refetchQueries({ queryKey: "basket" });
    },
  });
}
