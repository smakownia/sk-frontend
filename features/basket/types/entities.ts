import { Price } from "@/lib/types";

export type Basket = {
  id: string;
  items: BasketItem[];
  totalItems: number;
  totalPrice: Price;
};

export type BasketItem = {
  id: string;
  imageUrl: string;
  name: string;
  description?: string;
  price: Price;
  quantity: number;
  totalPrice: Price;
};
