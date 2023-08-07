import { Drawer } from "@/components";
import { useBasketDrawer } from "@/features/basket";
import { Header } from "./header";
import { ItemsList } from "./items-list";
import { Summary } from "./summary";

export function BasketDrawer() {
  const drawer = useBasketDrawer();

  return (
    <Drawer
      isOpen={drawer.isOpen}
      onClose={drawer.close}
      className={`grid grid-rows-[auto_auto_1fr] w-full sm:w-[360px] h-full 
                  bg-white`}
    >
      <Header />
      <ItemsList />
      <Summary />
    </Drawer>
  );
}
