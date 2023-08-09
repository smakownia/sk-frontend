import { ComponentProps } from "react";
import { useFormField } from "./form-field";
import { Label } from "@/components";

type FormLabelProps = ComponentProps<typeof Label>;

export function FormLabel({ children, ...rest }: FormLabelProps) {
  const { fieldName, isRequired } = useFormField();

  return (
    <Label htmlFor={fieldName} {...rest}>
      {children ? children : fieldName}
      {isRequired && <span className="text-red-500"> *</span>}
    </Label>
  );
}
