import { apiClient } from "@/lib/clients";
import {
  AddBasketItemCommand,
  Basket,
  UpdateBasketItemCommand,
} from "@/features/basket/types";

export async function getBasket() {
  const { data } = await apiClient.get<Basket>("api/v1/basket", {
    withCredentials: true,
  });

  return data;
}

export async function addBasketItem(item: AddBasketItemCommand) {
  const { data } = await apiClient.post<Basket>("api/v1/basket/items", item, {
    withCredentials: true,
  });

  return data;
}

export async function updateBasketItem(item: UpdateBasketItemCommand) {
  const { data } = await apiClient.put<Basket>(
    `api/v1/basket/items/${item.id}`,
    item,
    {
      withCredentials: true,
    },
  );

  return data;
}

export async function removeBasketItem(id: string) {
  const { data } = await apiClient.delete<Basket>(`api/v1/basket/items/${id}`, {
    withCredentials: true,
  });

  return data;
}
