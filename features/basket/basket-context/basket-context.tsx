import { createContext } from "react";
import { Basket, BasketItem } from "@/features/basket";

type BasketContextType = null | {
  value?: Basket;
  itemsCount: number;
  addItem: (item: BasketItem) => void;
  updateItem: (item: BasketItem) => void;
  removeItem: (id: string) => void;
};

export const BasketContext = createContext<BasketContextType>(null);

BasketContext.displayName = "BasketContext";
