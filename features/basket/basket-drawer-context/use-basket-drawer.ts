import { useContext } from "react";
import { ContextNullError } from "@/lib/errors";
import { BasketDrawerContext } from "./basket-drawer-context";

export function useBasketDrawer() {
  const context = useContext(BasketDrawerContext);

  if (context === null) {
    throw new ContextNullError(BasketDrawerContext.displayName);
  }

  return context;
}
