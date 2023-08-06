import { useContext } from "react";
import { ContextNullError } from "@/lib/errors";
import { BasketStateContext, BasketUpdaterContext } from "./basket-context";

export function useBasketState() {
  const basketStateContext = useContext(BasketStateContext);

  if (basketStateContext === null) {
    throw new ContextNullError(BasketStateContext.displayName);
  }

  return basketStateContext;
}

export function useBasketUpdater() {
  const basketUpdaterContext = useContext(BasketUpdaterContext);

  if (basketUpdaterContext === null) {
    throw new ContextNullError(BasketUpdaterContext.displayName);
  }

  return basketUpdaterContext;
}
