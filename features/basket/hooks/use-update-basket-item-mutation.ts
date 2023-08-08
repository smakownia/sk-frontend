import { Key } from "swr";
import useSWRMutation from "swr/mutation";
import { ApiErrorResponse } from "@/lib/types";
import {
  Basket,
  updateBasketItem,
  UpdateBasketItemCommand,
} from "@/features/basket";

export function useUpdateBasketItemMutation() {
  return useSWRMutation<Basket, ApiErrorResponse, Key, UpdateBasketItemCommand>(
    "/api/v1/basket",
    (_: string, { arg }: { arg: UpdateBasketItemCommand }) =>
      updateBasketItem(arg),
    { revalidate: false, populateCache: true },
  );
}
