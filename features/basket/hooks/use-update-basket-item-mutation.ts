import { useMutation, useQueryClient } from "react-query";
import { updateBasketItem } from "@/features/basket";

export function useUpdateBasketItemMutation() {
  const queryClient = useQueryClient();

  return useMutation(updateBasketItem, {
    onSuccess: (basket) => {
      queryClient.setQueryData("basket", basket);
    },
  });
}
