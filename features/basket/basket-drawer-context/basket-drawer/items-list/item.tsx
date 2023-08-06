import { useCallback } from "react";
import Image from "next/image";
import { CloseIcon, NumberInput } from "@/components";
import { BasketItem, useBasketUpdater } from "@/features/basket";

export function Item(props: BasketItem) {
  const { id, name, description, quantity, totalPrice } = props;
  const basketUpdater = useBasketUpdater();

  const updateInBasket = useCallback(
    (quantity: number) => {
      basketUpdater.updateItem({ id, quantity });
    },
    [basketUpdater.updateItem, props],
  );

  const removeFromBasket = useCallback(() => {
    basketUpdater.removeItem(id);
  }, [basketUpdater.removeItem, id]);

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
            className="shrink-0 w-[10px] h-[10px] cursor-pointer"
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
