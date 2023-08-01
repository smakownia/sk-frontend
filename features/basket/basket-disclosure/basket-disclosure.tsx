"use client";

import { Disclosure } from "@headlessui/react";
import { BasketIcon, Button, ButtonBadge } from "@/components";
import { useBasket } from "@/features/basket";
import { BasketSidebar } from "./basket-sidebar";
import { useMemo } from "react";

export function BasketDisclosure() {
  const basket = useBasket();

  const anyItems = useMemo(
    () => Boolean(basket.itemsCount),
    [basket.itemsCount],
  );

  return (
    <Disclosure>
      <Disclosure.Button as={Button}>
        {anyItems && <ButtonBadge>{basket.itemsCount}</ButtonBadge>}
        <BasketIcon className="w-5 h-5 text-primary-500" />
      </Disclosure.Button>
      <BasketSidebar />
    </Disclosure>
  );
}
