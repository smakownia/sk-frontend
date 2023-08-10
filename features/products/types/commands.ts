export type CreateProductCommand = {
  categoryId: string;
  image: File;
  name: string;
  description?: string | null;
  price: number;
};

export type CreateCategoryCommand = {
  name: string;
};
