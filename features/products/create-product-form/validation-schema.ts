import * as yup from "yup";

export const validationSchema = yup
  .object({
    categoryId: yup
      .string()
      .required("Kategoria jest wymagana")
      .uuid("Niepoprawny format kategori"),
    name: yup
      .string()
      .required("Nazwa jest wymagana")
      .min(1, "Nazwa musi zawierać co najmniej 1 znak"),
    description: yup.string(),
    price: yup
      .number()
      .typeError("Cena musi być numerem")
      .required("Cena jest wymagana")
      .min(0.01, "Cena musi być większa lub równa 0.01"),
  })
  .required();
