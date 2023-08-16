import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { createProduct } from "@/features/products";
import { useIdentity } from "@/features/identity";

export function useCreateProductMutation() {
  const queryClient = useQueryClient();
  const identity = useIdentity();

  return useMutation(createProduct, {
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: "products" });
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        identity.logout();
      }
    },
  });
}
