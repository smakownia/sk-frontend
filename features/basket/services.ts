import { apiPublicClient } from "@/lib/clients";
import {
  AddBasketItemCommand,
  Basket,
  UpdateBasketItemCommand,
} from "@/features/basket/types";

export async function getBasket() {
  const { data } = await apiPublicClient.get<Basket>("api/v1/basket", {
    withCredentials: true,
  });

  return data;
}

export async function addBasketItem(item: AddBasketItemCommand) {
  const { data } = await apiPublicClient.post<Basket>("api/v1/basket/items", item, {
    withCredentials: true,
  });

  return data;
}

export async function updateBasketItem(item: UpdateBasketItemCommand) {
  const { data } = await apiPublicClient.put<Basket>(
    `api/v1/basket/items/${item.id}`,
    item,
    {
      withCredentials: true,
    },
  );

  return data;
}

export async function removeBasketItem(id: string) {
  const { data } = await apiPublicClient.delete<Basket>(`api/v1/basket/items/${id}`, {
    withCredentials: true,
  });

  return data;
}
