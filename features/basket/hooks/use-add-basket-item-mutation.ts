import { Key } from "swr";
import useSWRMutation from "swr/mutation";
import { ApiErrorResponse } from "@/lib/types";
import { addBasketItem, AddBasketItemCommand, Basket } from "@/features/basket";

export function useAddBasketItemMutation() {
  return useSWRMutation<Basket, ApiErrorResponse, Key, AddBasketItemCommand>(
    "/api/v1/basket",
    (_: string, { arg }: { arg: AddBasketItemCommand }) => addBasketItem(arg),
    { revalidate: false, populateCache: true },
  );
}
