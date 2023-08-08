import useSWR from "swr";
import { ApiErrorResponse } from "@/lib/types";
import { Basket, getBasket } from "@/features/basket";

export function useBasket() {
  return useSWR<Basket, ApiErrorResponse>("/api/v1/basket", getBasket, {
    revalidateOnFocus: true,
  });
}
