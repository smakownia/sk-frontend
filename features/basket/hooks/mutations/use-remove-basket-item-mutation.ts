import { useMutation, useQueryClient } from "react-query";
import { removeBasketItem } from "@/features/basket";

export function useRemoveBasketItemMutation() {
  const queryClient = useQueryClient();

  return useMutation(removeBasketItem, {
    onSuccess: (basket) => {
      queryClient.setQueryData("basket", basket);
    },
  });
}
