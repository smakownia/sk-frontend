import { useBasket } from "@/features/basket";
import { Item } from "./item";

export function ItemsList() {
  const { data: basket } = useBasket();

  return (
    <main className="overflow-y-auto thin-scrollbar">
      <ul className="py-4 px-8 divide-y divide-neutral-50">
        {basket?.items.map((item) => <Item key={item.id} {...item} />)}
      </ul>
    </main>
  );
}
