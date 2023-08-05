import { useContext } from "react";
import { ContextNullError } from "@/lib/errors";
import { BasketContext } from "./basket-context";

export function useBasket() {
  const basketContext = useContext(BasketContext);

  if (!basketContext) {
    throw new ContextNullError(BasketContext.displayName);
  }

  return basketContext;
}
