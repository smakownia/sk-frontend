import { createContext } from "react";

type BasketDrawerContextType = null | {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const BasketDrawerContext = createContext<BasketDrawerContextType>(null);

BasketDrawerContext.displayName = "BasketDrawerContext";
