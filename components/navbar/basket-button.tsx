import { useMemo } from "react";
import { BasketIcon, Button } from "@/components";
import { useBasketDrawer, useBasketState } from "@/features/basket";
import { NavButton } from "./nav-button";

export function BasketButton() {
  const basketState = useBasketState();
  const basketDrawer = useBasketDrawer();

  const anyItems = useMemo(
    () => Boolean(basketState?.totalItems),
    [basketState],
  );

  return (
    <NavButton onClick={basketDrawer.open}>
      {anyItems && <Button.Badge>{basketState!.totalItems}</Button.Badge>}
      <BasketIcon />
    </NavButton>
  );
}
