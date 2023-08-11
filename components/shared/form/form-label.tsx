import { ComponentProps, forwardRef } from "react";
import { useFormField } from "./form-field";
import { Label } from "@/components";

type FormLabelProps = ComponentProps<typeof Label>;

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ children, ...rest }, ref) => {
    const { fieldName, isRequired } = useFormField();

    return (
      <Label ref={ref} htmlFor={fieldName} {...rest} isRequired={isRequired}>
        {children ? children : fieldName}
      </Label>
    );
  },
);

FormLabel.displayName = "Form.Label";
