import { useMutation, useQueryClient } from "react-query";
import { createCategory } from "@/features/products";

export function useCreateCategoryMutation() {
  const queryClient = useQueryClient();

  return useMutation(createCategory, {
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: "categories" });
    },
  });
}
