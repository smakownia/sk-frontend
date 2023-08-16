import { useMemo } from "react";
import { BasketIcon } from "@/components";
import { useBasket, useBasketDrawer } from "@/features/basket";
import { NavButton } from "./nav-button";

export function ButtonBadge({ children, ...rest }) {
  return (
    <div
      className="absolute -top-1 -right-1 p-1 rounded-full bg-primary-500"
      {...rest}
    >
      <span
        className={`flex justify-center items-center min-w-[8px] h-[8px] 
                    text-xs text-white`}
      >
        {children}
      </span>
    </div>
  );
}

export function BasketButton() {
  const { data: basket } = useBasket();
  const basketDrawer = useBasketDrawer();

  const anyItems = useMemo(() => Boolean(basket?.totalItems), [basket]);

  return (
    <NavButton aria-label="Otwórz basket" onClick={basketDrawer.open}>
      {anyItems && <ButtonBadge>{basket!.totalItems}</ButtonBadge>}
      <BasketIcon />
    </NavButton>
  );
}
