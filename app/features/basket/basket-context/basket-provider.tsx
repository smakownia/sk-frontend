"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import { Basket, BasketItem, basketService } from "@/app/features/basket";
import { BasketContext } from "./basket-context";

export function BasketProvider({ children }: { children?: ReactNode }) {
  const [basket, setBasket] = useState<Basket>();
  const [itemsCount, setItemsCount] = useState(0);

  const addItem = useCallback(
    (item: BasketItem) => basketService.addItem(item).then(setBasket),
    [setBasket],
  );

  const updateItem = useCallback(
    (item: BasketItem) => basketService.updateItem(item).then(setBasket),
    [setBasket],
  );

  const removeItem = useCallback(
    (id: string) => basketService.removeItem(id).then(setBasket),
    [setBasket],
  );

  useEffect(() => {
    basketService.get().then(setBasket);
  }, [setBasket]);

  useEffect(() => {
    let count = 0;

    if (!basket) {
      return setItemsCount(count);
    }

    basket.items.forEach(({ quantity }) => (count += quantity));

    setItemsCount(count);
  }, [basket, setItemsCount]);

  return (
    <BasketContext.Provider
      value={{
        value: basket,
        itemsCount,
        totalPrice: 0,
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
