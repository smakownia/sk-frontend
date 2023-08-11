import { ComponentProps, forwardRef } from "react";
import { useFormField } from "./form-field";
import { Label } from "@/components";

type FormLabelProps = ComponentProps<typeof Label>;

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ children, ...rest }, ref) => {
    const { field, isRequired } = useFormField();

    return (
      <Label ref={ref} htmlFor={field.name} {...rest} isRequired={isRequired}>
        {children ? children : field.name}
      </Label>
    );
  },
);

FormLabel.displayName = "Form.Label";
