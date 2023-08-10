import { Price } from "@/lib/types";

export type Product = {
  id: string;
  categoryId: string;
  imageUrl: string;
  name: string;
  description?: string | null;
  price: Price;
};

export type Category = {
  id: string;
  name: string;
};
