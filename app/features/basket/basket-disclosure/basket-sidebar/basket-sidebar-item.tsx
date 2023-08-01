"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Product, productsService } from "@/app/features/products";
import { BasketItem, useBasket } from "@/app/features/basket";
import { CloseIcon } from "@/app/components";

export function BasketSidebarItem(item: BasketItem) {
  const basket = useBasket();
  const [product, setProduct] = useState<Product>();

  const removeItem = useCallback(() => {
    basket.removeItem(item.id);
  }, [basket, item.id]);

  useEffect(() => {
    productsService.getById(item.id).then(setProduct);
  }, [setProduct, item.id]);

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
        <div className="flex justify-between">
          <h2 className="text-lg font-medium">{product.name}</h2>
          <CloseIcon
            className="w-[10px] h-[10px] cursor-pointer"
            onClick={removeItem}
          />
        </div>
        <p className="text-sm text-neutral-600">{product.description}</p>
        <span className="font-medium">{product.price / 100}zł</span>
      </div>
    </li>
  );
}
