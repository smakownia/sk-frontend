import { axiosClient } from "@/lib/axios";
import { Basket, BasketItem } from "@/features/basket/types";

export async function getBasket() {
  return await axiosClient.get<Basket>("api/v1/basket");
}

export async function addBasketItem(item: BasketItem) {
  return await axiosClient.post<Basket>("api/v1/basket/items", item);
}

export async function updateBasketItem(item: BasketItem) {
  return await axiosClient.put<Basket>(`api/v1/basket/items/${item.id}`, item);
}

export async function removeBasketItem(id: string) {
  return await axiosClient.delete<Basket>(`api/v1/basket/items/${id}`);
}
