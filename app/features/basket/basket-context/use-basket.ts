"use client";

import { useContext } from "react";
import { BasketContext } from "./basket-context";
import { ContextNullError } from "@/app/lib/errors";

export function useBasket() {
  const basketContext = useContext(BasketContext);

  if (!basketContext) {
    throw new ContextNullError(BasketContext.displayName);
  }

  return basketContext;
}
