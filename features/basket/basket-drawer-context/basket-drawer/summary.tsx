import { Button } from "@/components";
import { useBasketState } from "@/features/basket";

export function Summary() {
  const basketState = useBasketState();

  return (
    <footer className="self-end py-4 px-8 border-t border-neutral-50">
      <div className="flex mb-4 text-lg">
        <h3>Wartość</h3>
        <span className="ml-auto font-medium">
          {basketState?.totalPrice.formatted}
        </span>
      </div>
      <Button className="w-full">Dostawa i Płatność</Button>
    </footer>
  );
}
