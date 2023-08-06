import { createContext } from "react";
import {
  AddBasketItemCommand,
  Basket,
  UpdateBasketItemCommand,
} from "@/features/basket";

type BasketStateContextType = null | undefined | Basket;

type BasketUpdaterContextType = null | {
  addItem: (item: AddBasketItemCommand) => void;
  updateItem: (item: UpdateBasketItemCommand) => void;
  removeItem: (id: string) => void;
};

export const BasketStateContext = createContext<BasketStateContextType>(null);

export const BasketUpdaterContext =
  createContext<BasketUpdaterContextType>(null);

BasketStateContext.displayName = "BasketStateContext";

BasketUpdaterContext.displayName = "BasketUpdaterContext";
