import { ReactNode, useCallback, useEffect, useState } from "react";
import { BasketContext } from "./basket-context";
import {
  addBasketItem,
  Basket,
  BasketItem,
  getBasket,
  removeBasketItem,
  updateBasketItem,
} from "@/features/basket";

export function BasketProvider({ children }: { children: ReactNode }) {
  const [basket, setBasket] = useState<Basket>();
  const [itemsCount, setItemsCount] = useState(0);

  const addItem = useCallback(
    (item: BasketItem) => {
      addBasketItem(item).then((res) => setBasket(res.data));
    },
    [setBasket],
  );

  const updateItem = useCallback(
    (item: BasketItem) => {
      updateBasketItem(item).then((res) => setBasket(res.data));
    },
    [setBasket],
  );

  const removeItem = useCallback(
    (id: string) => {
      removeBasketItem(id).then((res) => setBasket(res.data));
    },
    [setBasket],
  );

  useEffect(() => {
    if (!basket) return setItemsCount(0);

    setItemsCount(
      basket.items.reduce((total, item) => total + item.quantity, 0),
    );
  }, [basket?.items, setItemsCount]);

  useEffect(() => {
    getBasket().then((res) => setBasket(res.data));
  }, [setBasket]);

  return (
    <BasketContext.Provider
      value={{ value: basket, itemsCount, addItem, updateItem, removeItem }}
    >
      {children}
    </BasketContext.Provider>
  );
}
