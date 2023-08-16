import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { createCategory } from "@/features/products";
import { useIdentity } from "@/features/identity";

export function useCreateCategoryMutation() {
  const queryClient = useQueryClient();
  const identity = useIdentity();

  return useMutation(createCategory, {
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: "categories" });
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        identity.logout();
      }
    },
  });
}
