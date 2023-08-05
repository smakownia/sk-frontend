import { apiClient } from "@/lib/clients";
import {
  AddBasketItemCommand,
  Basket,
  UpdateBasketItemCommand,
} from "@/features/basket/types";

export async function getBasket() {
  return apiClient.get<Basket>("api/v1/basket", {
    withCredentials: true,
  });
}

export async function addBasketItem(item: AddBasketItemCommand) {
  return apiClient.post<Basket>("api/v1/basket/items", item, {
    withCredentials: true,
  });
}

export async function updateBasketItem(item: UpdateBasketItemCommand) {
  return apiClient.put<Basket>(`api/v1/basket/items/${item.id}`, item, {
    withCredentials: true,
  });
}

export async function removeBasketItem(id: string) {
  return apiClient.delete<Basket>(`api/v1/basket/items/${id}`, {
    withCredentials: true,
  });
}
