import { useCallback } from "react";
import { useRouter } from "next/router";
import * as yup from "yup";
import { Form } from "@/components";
import { useCreateCategoryMutation } from "@/features/products";

type CreateCategoryFormValues = {
  name: string;
};

const defaultValues: CreateCategoryFormValues = {
  name: "",
};

const validationSchema = yup
  .object({
    name: yup.string().required("Nazwa jest wymagana"),
  })
  .required();

export function CreateCategoryForm() {
  const router = useRouter();
  const { mutateAsync: createCategory } = useCreateCategoryMutation();

  const submitHandler = useCallback(
    async (values: CreateCategoryFormValues) => {
      await createCategory(values);

      router.push("/admin/kategorie");
    },
    [createCategory, router],
  );

  return (
    <Form
      defaultValues={defaultValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      <h1 className="text-4xl font-medium">Stwórz Kategorie</h1>

      <Form.Fields>
        <Form.Field name="name" isRequired>
          <Form.Label>Nazwa</Form.Label>
          <Form.Input placeholder="Nazwa kategorii" />
          <Form.ErrorMessage />
        </Form.Field>
      </Form.Fields>

      <Form.Submit>Stwórz Kategorie</Form.Submit>
    </Form>
  );
}
