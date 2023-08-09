export type Product = {
  id: string;
  categoryId: string;
  name: string;
  description?: string | null;
  price: number;
};

export type Category = {
  id: string;
  name: string;
};
