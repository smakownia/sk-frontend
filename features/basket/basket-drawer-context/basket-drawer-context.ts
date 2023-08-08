import { createContext } from "react";
import { useContextOrThrow } from "@/hooks";

type BasketDrawerContextType = null | {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const BasketDrawerContext = createContext<BasketDrawerContextType>(null);

BasketDrawerContext.displayName = "BasketDrawerContext";

export function useBasketDrawer() {
  return useContextOrThrow(BasketDrawerContext);
}
