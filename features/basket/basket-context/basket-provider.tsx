import { ReactNode, useCallback, useEffect, useState } from "react";
import {
  addBasketItem,
  AddBasketItemCommand,
  Basket,
  getBasket,
  removeBasketItem,
  updateBasketItem,
  UpdateBasketItemCommand,
} from "@/features/basket";
import { BasketContext } from "./basket-context";

export function BasketProvider({ children }: { children: ReactNode }) {
  const [basket, setBasket] = useState<Basket>();

  const addItem = useCallback(
    (command: AddBasketItemCommand) => {
      addBasketItem(command).then((res) => setBasket(res.data));
    },
    [setBasket],
  );

  const updateItem = useCallback(
    (command: UpdateBasketItemCommand) => {
      updateBasketItem(command).then((res) => setBasket(res.data));
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
    getBasket().then((res) => setBasket(res.data));
  }, [setBasket]);

  return (
    <BasketContext.Provider
      value={{
        value: basket,
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
