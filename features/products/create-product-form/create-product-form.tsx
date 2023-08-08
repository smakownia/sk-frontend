import { useCallback } from "react";
import { useRouter } from "next/router";
import { Form, Select } from "@/components";
import { useCategories, useCreateProductMutation } from "@/features/products";
import { defaultValues } from "./default-values";
import { validationSchema } from "./validation-schema";
import { CreateProductFormValues } from "./types";

export function CreateProductForm() {
  const router = useRouter();
  const { data: categories } = useCategories();
  const { trigger: createProduct } = useCreateProductMutation();

  const submitHandler = useCallback(
    (values: CreateProductFormValues) => {
      createProduct(values).then(() => router.push("/admin/produkty"));
    },
    [createProduct, router],
  );

  return (
    <Form
      defaultValues={defaultValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      <h1 className="text-4xl font-medium">Stwórz Produkt</h1>

      <Form.Field name="categoryId">
        <Form.Label>Kategoria</Form.Label>
        <Form.Input>
          {(register) => (
            <Select {...register}>
              {categories?.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
          )}
        </Form.Input>
        <Form.ErrorMessage />
      </Form.Field>

      <Form.Field name="name">
        <Form.Label>Nazwa</Form.Label>
        <Form.Input />
        <Form.ErrorMessage />
      </Form.Field>

      <Form.Field name="description">
        <Form.Label>Opis</Form.Label>
        <Form.Input />
        <Form.ErrorMessage />
      </Form.Field>

      <Form.Field name="price">
        <Form.Label>Cena</Form.Label>
        <Form.Input type="number" step="0.01" />
        <Form.ErrorMessage />
      </Form.Field>

      <Form.Submit>Stwórz Produkt</Form.Submit>
    </Form>
  );
}
