import { useQuery } from "react-query";
import { getBasket } from "@/features/basket";

export function useBasket() {
  return useQuery("basket", getBasket, {
    refetchOnMount: (basket) => !Boolean(basket),
  });
}
