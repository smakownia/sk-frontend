import * as yup from "yup";

export const validationSchema = yup
  .object({
    categoryId: yup.string().required(),
    name: yup.string().required().min(1),
    description: yup.string().nullable(),
    price: yup.number().required().min(0.01),
  })
  .required();
