import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { deleteProduct } from "@/features/products";
import { useIdentity } from "@/features/identity";

export function useDeleteProductMutation() {
  const queryClient = useQueryClient();
  const identity = useIdentity();

  return useMutation(deleteProduct, {
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
