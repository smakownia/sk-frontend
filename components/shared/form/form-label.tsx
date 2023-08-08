import { ComponentProps } from "react";
import { useFormFieldName } from "./form-field";
import { Label } from "@/components";

type FormLabelProps = ComponentProps<typeof Label>;

export function FormLabel({ children, ...rest }: FormLabelProps) {
  const fieldName = useFormFieldName();

  return (
    <Label htmlFor={fieldName} {...rest}>
      {children ? children : fieldName}
    </Label>
  );
}
