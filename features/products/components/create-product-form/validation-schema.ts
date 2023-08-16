import { isValidFileType } from "@/lib/utils";
import * as yup from "yup";

export const validationSchema = yup
  .object({
    categoryId: yup
      .string()
      .required("Kategoria jest wymagana")
      .uuid("Niepoprawny format kategori"),
    image: yup
      .mixed()
      .required("Zdjęcie jest wymagane")
      .test("is-valid-type", "Zdjęcie musi być typu jpg lub png", (value) => {
        const file = value as File;

        return isValidFileType(file.name, "jpg", "png");
      }),
    name: yup.string().required("Nazwa jest wymagana"),
    description: yup.string(),
    price: yup
      .number()
      .typeError("Cena musi być numerem")
      .required("Cena jest wymagana")
      .min(0.01, "Cena musi być większa lub równa 0.01"),
  })
  .required();
