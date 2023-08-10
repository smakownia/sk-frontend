export type CreateProductFormValues = {
  categoryId: string;
  image?: File,
  name: string;
  description?: null | string;
  price: number;
};
