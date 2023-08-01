"use client";

import { BasketIcon, Button, ButtonBadge } from "@/app/components";
import { useBasket } from "@/app/features/basket";
import { BasketSidebar } from "./basket-sidebar";

export function BasketDisclosure() {
  const basket = useBasket();

  return (
    <>
      <Button>
        {basket.itemsCount > 0 && (
          <ButtonBadge>{basket.itemsCount}</ButtonBadge>
        )}
        <BasketIcon className="w-5 h-5 text-primary-500" />
      </Button>
      <BasketSidebar />
    </>
  );
}
