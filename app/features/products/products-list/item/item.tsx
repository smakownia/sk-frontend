"use client";

import Image from "next/image";
import { Product } from "@/app/features/products";
import { Button } from "@/app/components";
import { useBasket } from "@/app/features/basket";
import { useCallback } from "react";

export function Item(product: Product) {
  const basket = useBasket();

  const addToBasket = useCallback(() => {
    basket.addItem({ id: product.id, quantity: 1 });
  }, [basket, product.id]);

  return (
    <li>
      <div className="relative aspect-square mb-4">
        <Image alt={product.name} src={`/${product.name}.png`} fill />
      </div>
      <h2 className="mb-2 text-2xl font-medium">{product.name}</h2>
      <p className="mb-2 text-neutral-600">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-medium">{product.price / 100}zł</span>
        <Button onClick={addToBasket}>Do koszyka</Button>
      </div>
    </li>
  );
}
