import { useContext } from "react";
import { ContextNullError } from "@/lib/errors";
import { BasketDrawerContext } from "./basket-drawer-context";

export function useBasketDrawer() {
  const basketDrawerContext = useContext(BasketDrawerContext);

  if (basketDrawerContext === null) {
    throw new ContextNullError(BasketDrawerContext.displayName);
  }

  return basketDrawerContext;
}
