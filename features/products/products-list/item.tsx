import { useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components";
import { useBasket } from "@/features/basket";
import { Product } from "@/features/products";

export function Item({ id, name, description, price }: Product) {
  const basket = useBasket();

  const addToBasket = useCallback(() => {
    basket.addItem({ id, quantity: 1 });
  }, [basket.addItem, id]);

  return (
    <li className="flex flex-col">
      <div className="relative aspect-square mb-4">
        <Image alt={name} src={`/${name}.png`} fill />
      </div>

      <h2 className="mb-2 text-2xl font-medium">{name}</h2>

      {description && <p className="mb-2 text-neutral-600">{description}</p>}

      <div className="flex justify-between items-center mt-auto">
        <span className="text-xl font-medium">{price / 100}zł</span>
        <Button onClick={addToBasket}>Do koszyka</Button>
      </div>
    </li>
  );
}
