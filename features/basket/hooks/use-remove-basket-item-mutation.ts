import { Key } from "swr";
import useSWRMutation from "swr/mutation";
import { ApiErrorResponse } from "@/lib/types";
import { Basket, removeBasketItem } from "@/features/basket";

export function useRemoveBasketItemMutation() {
  return useSWRMutation<Basket, ApiErrorResponse, Key, string>(
    "/api/v1/basket",
    (_: string, { arg }: { arg: string }) => removeBasketItem(arg),
    { revalidate: false, populateCache: true },
  );
}
