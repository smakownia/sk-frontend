import { XIcon } from "@/components";
import { useBasketDrawer } from "@/features/basket";

export function Header() {
  const drawer = useBasketDrawer();

  return (
    <header
      className={`flex justify-between items-center h-16 px-8 border-b 
                  border-neutral-50`}
    >
      <h2 className="text-2xl font-medium">Koszyk</h2>
      <button onClick={drawer.close}>
        <XIcon />
      </button>
    </header>
  );
}
