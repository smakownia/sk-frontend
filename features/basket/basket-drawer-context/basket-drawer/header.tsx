import { CloseIcon } from "@/components";
import { useBasketDrawer } from "@/features/basket";

export function Header() {
  const drawer = useBasketDrawer();

  return (
    <header className="flex justify-between items-center h-16 px-8 border-b border-neutral-50">
      <h2 className="text-2xl font-medium">Koszyk</h2>

      <button className="w-4 h-4 cursor-pointer" onClick={drawer.close}>
        <CloseIcon />
      </button>
    </header>
  );
}
