import { ComponentProps, ReactNode } from "react";
import { UseFormRegisterReturn, useFormContext } from "react-hook-form";
import { Input } from "@/components";
import { useFormFieldName } from "./form-field";

type FormInputProps =
  | ComponentProps<typeof Input>
  | {
      children: (
        register: { id: string } & UseFormRegisterReturn<any>,
      ) => ReactNode;
    };

export function FormInput({ children, ...rest }: FormInputProps) {
  const fieldName = useFormFieldName();
  const { register, formState } = useFormContext();

  if (typeof children === "function") {
    return children({ id: fieldName, ...register(fieldName) });
  }

  return (
    <Input
      id={fieldName}
      {...register(fieldName)}
      isInvalid={Boolean(formState.errors[fieldName])}
      {...rest}
    />
  );
}
