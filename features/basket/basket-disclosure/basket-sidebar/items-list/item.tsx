import Image from "next/image";
import { CloseIcon } from "@/components";
import { BasketItem } from "@/features/basket";
import { useItem } from "./use-item";

export function Item(item: BasketItem) {
  const { product, removeFromBasket } = useItem(item);

  if (!product) {
    return null;
  }

  return (
    <li className="flex gap-4 py-4">
      <Image
        alt={product.name}
        src={`/${product.name}.png`}
        width="64"
        height="64"
        className="self-start"
      />
      <div>
        <header className="flex justify-between">
          <h2 className="text-lg font-medium">{product.name}</h2>
          <CloseIcon
            className="w-[10px] h-[10px] cursor-pointer"
            onClick={removeFromBasket}
          />
        </header>
        <p className="text-sm text-neutral-600">{product.description}</p>
        <span className="font-medium">{product.price / 100}zł</span>
      </div>
    </li>
  );
}
