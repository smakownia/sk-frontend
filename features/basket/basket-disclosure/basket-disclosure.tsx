import { useMemo } from "react";
import { BasketIcon, Button, Sidebar } from "@/components";
import { useBasket } from "@/features/basket";
import { BasketSidebar } from "./basket-sidebar";

export function BasketDisclosure() {
  const basket = useBasket();

  const anyItems = useMemo(
    () => Boolean(basket.value?.totalItems),
    [basket],
  );

  return (
    <Sidebar>
      <Sidebar.Button
        as={Button}
        className="px-2 text-primary-500 bg-primary-100 hover:bg-primary-200"
      >
        {anyItems && <Button.Badge>{basket.value?.totalItems}</Button.Badge>}
        <BasketIcon className="w-5 h-5 text-primary-500" />
      </Sidebar.Button>

      <BasketSidebar />
    </Sidebar>
  );
}
