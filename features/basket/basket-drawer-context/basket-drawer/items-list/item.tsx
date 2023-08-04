import { useCallback } from "react";
import Image from "next/image";
import { CloseIcon, NumberInput } from "@/components";
import { BasketItem, useBasket } from "@/features/basket";

export function Item(props: BasketItem) {
  const { id, name, description, quantity, totalPrice } = props;
  const basket = useBasket();

  const updateInBasket = useCallback(
    (quantity: number) => {
      basket.updateItem({ id, quantity });
    },
    [basket, props],
  );

  const removeFromBasket = useCallback(() => {
    basket.removeItem(id);
  }, [basket, id]);

  return (
    <li className="flex gap-4 py-4">
      <Image
        alt={name}
        src={`/${name}.png`}
        width="64"
        height="64"
        className="self-start"
      />
      <div className="w-full">
        <header className="flex justify-between gap-2 mb-1">
          <h2 className="text-lg font-medium">{name}</h2>
          <CloseIcon
            className="min-w-[10px] w-[10px] min-h-[10px] h-[10px] cursor-pointer"
            onClick={removeFromBasket}
          />
        </header>
        {description && (
          <p className="text-sm text-neutral-600 mb-2">{description}</p>
        )}
        <div className="flex justify-between items-center">
          <NumberInput
            value={quantity}
            onChange={updateInBasket}
            min={1}
            max={999}
          />
          <span className="font-medium">{totalPrice.formatted}</span>
        </div>
      </div>
    </li>
  );
}
