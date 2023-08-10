import { ReactNode, useCallback, useState } from "react";
import { BasketDrawerContext } from "./basket-drawer-context";
import { BasketDrawer } from "./basket-drawer";

export function BasketDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <BasketDrawerContext.Provider value={{ isOpen, open, close }}>
      <BasketDrawer /> {children}
    </BasketDrawerContext.Provider>
  );
}
