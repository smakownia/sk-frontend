import { Button } from "@/components";
import { useBasket } from "@/features/basket";

export function Summary() {
  const basket = useBasket();

  return (
    <footer className="flex">
      <div className="self-end w-full py-4 px-8 border-t border-neutral-50">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg">Wartość</h3>
          <span className="text-lg font-medium">
            {basket.value?.totalPrice.formatted}
          </span>
        </div>
        <Button className="w-full">Dostawa i Płatność</Button>
      </div>
    </footer>
  );
}
