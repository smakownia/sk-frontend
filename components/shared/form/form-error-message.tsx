import { ComponentProps, forwardRef } from "react";
import { useFormField } from "./form-field";

type FormErrorMessageProps = ComponentProps<"span">;

export const FormErrorMessage = forwardRef<
  HTMLSpanElement,
  FormErrorMessageProps
>(({ children, ...rest }, ref) => {
  const { fieldState } = useFormField();

  if (!fieldState.error) return null;

  return (
    <span ref={ref} className="text-sm text-red-500" {...rest}>
      {fieldState.error.message?.toString()}
    </span>
  );
});

FormErrorMessage.displayName = "Form.ErrorMessage";
