import { ComponentProps, ReactNode } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { Input } from "@/components";
import { useFormField } from "./form-field";

type FormInputProps =
  | ComponentProps<typeof Input>
  | {
      children: (
        props: {
          id: string;
          isInvalid: boolean;
        } & ControllerRenderProps,
      ) => ReactNode;
    };

export function FormInput({ children, ...rest }: FormInputProps) {
  const { field, fieldState } = useFormField();

  if (typeof children === "function") {
    return children({
      id: field.name,
      isInvalid: fieldState.invalid,
      ...field,
    });
  }

  return (
    <Input
      id={field.name}
      className="w-full"
      isInvalid={fieldState.invalid}
      {...field}
      {...rest}
    />
  );
}
