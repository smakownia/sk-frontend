import { useBasket } from "@/features/basket";
import { Item } from "./item";

export function ItemsList() {
  const basket = useBasket();

  return (
    <main>
      <ul className="overflow-y-auto thin-scrollbar py-4 px-8 divide-y divide-neutral-50">
        {basket.value?.items.map((item) => <Item key={item.id} {...item} />)}
      </ul>
    </main>
  );
}
