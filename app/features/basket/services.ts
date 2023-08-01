import { Basket, BasketItem } from "@/app/features/basket";
import { fetchClient } from "@/app/lib/fetch-client";

export const basketService = {
  async get(): Promise<Basket> {
    const res = await fetchClient("api/v1/basket", { credentials: "include" });
    return await res.json();
  },

  async addItem(item: BasketItem): Promise<Basket> {
    const res = await fetchClient("api/v1/basket/items", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    return await res.json();
  },

  async updateItem(item: BasketItem): Promise<Basket> {
    const res = await fetchClient(`api/v1/basket/items/${item.id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    return await res.json();
  },

  async removeItem(id: string): Promise<Basket> {
    const res = await fetchClient(`api/v1/basket/items/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    return await res.json();
  },
};
