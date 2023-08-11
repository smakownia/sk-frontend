import { ComponentProps, createContext, forwardRef } from "react";
import { UseControllerReturn, useController } from "react-hook-form";
import { useContextOrThrow } from "@/hooks";

type FormFieldContextType =
  | null
  | (UseControllerReturn & { isRequired: boolean });

const FormFieldContext = createContext<FormFieldContextType>(null);

FormFieldContext.displayName = "FormFieldContext";

export function useFormField() {
  return useContextOrThrow(FormFieldContext);
}

type FormFieldProps = {
  name: string;
  isRequired?: boolean;
} & ComponentProps<"fieldset">;

export const FormField = forwardRef<HTMLFieldSetElement, FormFieldProps>(
  ({ children, name, isRequired, ...rest }, ref) => {
    const controller = useController({ name });

    return (
      <fieldset ref={ref} className="flex flex-col gap-2" {...rest}>
        <FormFieldContext.Provider
          value={{ ...controller, isRequired: Boolean(isRequired) }}
        >
          {children}
        </FormFieldContext.Provider>
      </fieldset>
    );
  },
);

FormField.displayName = "Form.Field";
