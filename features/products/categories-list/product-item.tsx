import Image from "next/image";
import { Button } from "@/components";
import { useAddBasketItemMutation } from "@/features/basket";
import { Product } from "@/features/products";

export function ProductItem({ id, name, description, price }: Product) {
  const { mutate: addToBasket } = useAddBasketItemMutation();

  return (
    <li className="flex flex-col">
      <div className="relative aspect-square mb-4">
        <Image alt={name} src={`/${name}.png`} fill priority />
      </div>

      <h2 className="mb-2 text-2xl font-medium">{name}</h2>

      {description && <p className="mb-2 text-neutral-600">{description}</p>}

      <div className="flex justify-between items-center mt-auto">
        <span className="text-xl font-medium">{price.formatted}</span>
        <Button onClick={() => addToBasket({ id, quantity: 1 })}>
          Do koszyka
        </Button>
      </div>
    </li>
  );
}
