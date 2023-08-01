export type Basket = {
  id: string;
  items: BasketItem[]
};

export type BasketItem = {
  id: string;
  quantity: number;
};
