import { useMemo } from "react";
import { BasketIcon, Button } from "@/components";
import { useBasket, useBasketDrawer } from "@/features/basket";
import { NavButton } from "./nav-button";

export function BasketButton() {
  const { data: basket } = useBasket();
  const basketDrawer = useBasketDrawer();

  const anyItems = useMemo(() => Boolean(basket?.totalItems), [basket]);

  return (
    <NavButton onClick={basketDrawer.open}>
      {anyItems && <Button.Badge>{basket!.totalItems}</Button.Badge>}
      <BasketIcon />
    </NavButton>
  );
}
