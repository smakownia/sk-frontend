import { useMemo } from "react";
import { Disclosure } from "@headlessui/react";
import { BasketIcon, Button } from "@/components";
import { useBasket } from "@/features/basket";
import { BasketSidebar } from "./basket-sidebar";

export function BasketDisclosure() {
  const basket = useBasket();

  const anyItems = useMemo(
    () => Boolean(basket.itemsCount),
    [basket.itemsCount],
  );

  return (
    <Disclosure>
      <Disclosure.Button
        as={Button}
        className="px-2 text-primary-500 bg-primary-100 hover:bg-primary-200"
      >
        {anyItems && <Button.Badge>{basket.itemsCount}</Button.Badge>}
        <BasketIcon className="w-5 h-5 text-primary-500" />
      </Disclosure.Button>

      <BasketSidebar />
    </Disclosure>
  );
}
