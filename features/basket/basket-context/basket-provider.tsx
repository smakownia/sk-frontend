import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import {
  addBasketItem,
  AddBasketItemCommand,
  Basket,
  getBasket,
  removeBasketItem,
  updateBasketItem,
  UpdateBasketItemCommand,
} from "@/features/basket";
import { BasketStateContext, BasketUpdaterContext } from "./basket-context";

export function BasketProvider({ children }: { children: ReactNode }) {
  const [basket, setBasket] = useState<Basket>();

  const addItem = useCallback(
    async (command: AddBasketItemCommand) => {
      const { data } = await addBasketItem(command);
      setBasket(data);
    },
    [setBasket],
  );

  const updateItem = useCallback(
    async (command: UpdateBasketItemCommand) => {
      const { data } = await updateBasketItem(command);
      setBasket(data);
    },
    [setBasket],
  );

  const removeItem = useCallback(
    async (id: string) => {
      const { data } = await removeBasketItem(id);
      setBasket(data);
    },
    [setBasket],
  );

  useEffect(() => {
    async function getAndSetBasket() {
      const { data } = await getBasket();
      setBasket(data);
    }

    void getAndSetBasket();
  }, [setBasket]);

  const updaterValue = useMemo(() => {
    return { addItem, updateItem, removeItem };
  }, [addItem, updateItem, removeItem]);

  return (
    <BasketStateContext.Provider value={basket}>
      <BasketUpdaterContext.Provider value={updaterValue}>
        {children}
      </BasketUpdaterContext.Provider>
    </BasketStateContext.Provider>
  );
}
