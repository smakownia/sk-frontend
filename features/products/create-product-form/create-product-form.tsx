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
  const { mutateAsync: createProduct } = useCreateProductMutation();

  const submitHandler = useCallback(
    async (values: CreateProductFormValues) => {
      await createProduct({ ...values, price: Math.ceil(values.price * 100) });

      router.push("/admin/produkty");
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

      <Form.Fields>
        <Form.Field name="categoryId" isRequired>
          <Form.Label>Kategoria</Form.Label>
          <Form.Input>
            {(props) => (
              <Select {...props}>
                <option value="" disabled>
                  Wybierz Kategorie
                </option>
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

        <Form.Field name="name" isRequired>
          <Form.Label>Nazwa</Form.Label>
          <Form.Input placeholder="Nazwa produktu" />
          <Form.ErrorMessage />
        </Form.Field>

        <Form.Field name="description">
          <Form.Label>Opis</Form.Label>
          <Form.Input placeholder="Opis produktu" />
          <Form.ErrorMessage />
        </Form.Field>

        <Form.Field name="price" isRequired>
          <Form.Label>Cena</Form.Label>
          <Form.Input type="number" step="0.01" placeholder="Cena produktu" />
          <Form.ErrorMessage />
        </Form.Field>
      </Form.Fields>

      <Form.Submit>Stwórz Produkt</Form.Submit>
    </Form>
  );
}
