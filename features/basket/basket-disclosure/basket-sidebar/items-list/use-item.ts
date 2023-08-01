import { useCallback, useEffect, useState } from "react";
import { BasketItem, useBasket } from "@/features/basket";
import { getProductById, Product } from "@/features/products";

export function useItem(item: BasketItem) {
  const basket = useBasket();
  const [product, setProduct] = useState<Product>();

  const removeFromBasket = useCallback(() => {
    basket.removeItem(item.id);
  }, [basket, item.id]);

  useEffect(() => {
    getProductById(item.id).then((res) => setProduct(res.data));
  }, [setProduct, item.id]);

  return { product, removeFromBasket };
}
