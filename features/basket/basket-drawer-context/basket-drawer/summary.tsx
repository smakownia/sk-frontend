import { Button } from "@/components";
import { useBasket } from "@/features/basket";

export function Summary() {
  const { data: basket } = useBasket();

  return (
    <footer className="self-end py-4 px-8 border-t border-neutral-50">
      <div className="flex mb-4 text-lg">
        <h3>Wartość</h3>
        <span className="ml-auto font-medium">
          {basket?.totalPrice.formatted}
        </span>
      </div>
      <Button className="w-full">Dostawa i Płatność</Button>
    </footer>
  );
}
