import { useCallback } from "react";
import Image from "next/image";
import { XIcon, NumberInput } from "@/components";
import { BasketItem, useBasketUpdater } from "@/features/basket";

export function Item(props: BasketItem) {
  const { id, name, description, quantity, totalPrice } = props;
  const basketUpdater = useBasketUpdater();

  const updateInBasket = useCallback(
    (quantity: number) => {
      basketUpdater.updateItem({ id, quantity });
    },
    [basketUpdater, props],
  );

  const removeFromBasket = useCallback(() => {
    basketUpdater.removeItem(id);
  }, [basketUpdater, props]);

  return (
    <li className="flex py-4">
      <Image
        alt={name}
        src={`/${name}.png`}
        width="64"
        height="64"
        className="self-start"
      />
      <div className="w-full ml-4">
        <header className="flex mb-2">
          <h2 className="w-full leading-none text-lg font-medium">{name}</h2>
          <button className="h-fit pl-2" onClick={removeFromBasket}>
            <XIcon className="w-[10px] h-[10px]" />
          </button>
        </header>

        {description && (
          <p className="mb-2 text-sm text-neutral-600">{description}</p>
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
