import { useMemo } from "react";
import { BasketIcon, Button } from "@/components";
import { useBasket, useBasketDrawer } from "@/features/basket";

export function BasketButton() {
  const basket = useBasket();
  const basketDrawer = useBasketDrawer();

  const anyItems = useMemo(
    () => Boolean(basket.value?.totalItems),
    [basket.value],
  );

  return (
    <Button
      className="px-2"
      colorScheme="primaryLight"
      onClick={basketDrawer.open}
    >
      {anyItems && <Button.Badge>{basket.value?.totalItems}</Button.Badge>}
      <BasketIcon className="w-5 h-5" />
    </Button>
  );
}
