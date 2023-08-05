import { useMemo } from "react";
import { BasketIcon, Button } from "@/components";
import { useBasket, useBasketDrawer } from "@/features/basket";
import { NavButton } from "./nav-button";

export function BasketButton() {
  const basket = useBasket();
  const basketDrawer = useBasketDrawer();

  const anyItems = useMemo(
    () => Boolean(basket.value?.totalItems),
    [basket.value],
  );

  return (
    <NavButton onClick={basketDrawer.open}>
      {anyItems && <Button.Badge>{basket.value!.totalItems}</Button.Badge>}
      <BasketIcon />
    </NavButton>
  );
}
