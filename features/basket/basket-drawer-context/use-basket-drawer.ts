import { BasketDrawerContext } from "./basket-drawer-context";
import { useContextOrThrow } from "@/hooks";

export function useBasketDrawer() {
  return useContextOrThrow(BasketDrawerContext);
}
