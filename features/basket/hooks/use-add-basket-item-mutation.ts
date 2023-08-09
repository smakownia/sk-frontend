import { useMutation, useQueryClient } from "react-query";
import { addBasketItem } from "@/features/basket";

export function useAddBasketItemMutation() {
  const queryClient = useQueryClient();

  return useMutation(addBasketItem, {
    onSuccess: (basket) => {
      queryClient.setQueryData("basket", basket);
    },
  });
}
