import { createContext } from "react";
import {
  AddBasketItemCommand,
  Basket,
  UpdateBasketItemCommand,
} from "@/features/basket";

type BasketContextType = null | {
  value?: Basket;
  addItem: (item: AddBasketItemCommand) => void;
  updateItem: (item: UpdateBasketItemCommand) => void;
  removeItem: (id: string) => void;
};

export const BasketContext = createContext<BasketContextType>(null);

BasketContext.displayName = "BasketContext";
