export type CreateProductCommand = {
  categoryId: string;
  name: string;
  description?: string | null;
  price: number;
};

export type CreateCategoryCommand = {
  name: string;
};
