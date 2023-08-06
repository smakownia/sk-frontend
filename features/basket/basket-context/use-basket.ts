import { useContextOrThrow } from "@/hooks";
import { BasketStateContext, BasketUpdaterContext } from "./basket-context";

export function useBasketState() {
  return useContextOrThrow(BasketStateContext);
}

export function useBasketUpdater() {
  return useContextOrThrow(BasketUpdaterContext);
}
