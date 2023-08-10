import { ComponentProps, ReactNode } from "react";
import { ControllerRenderProps, useController } from "react-hook-form";
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
  const { fieldName } = useFormField();
  const { field, fieldState } = useController({ name: fieldName });

  if (typeof children === "function") {
    return children({
      id: fieldName,
      isInvalid: fieldState.invalid,
      ...field,
    });
  }

  return (
    <Input
      id={fieldName}
      className="w-full"
      isInvalid={fieldState.invalid}
      {...field}
      {...rest}
    />
  );
}
