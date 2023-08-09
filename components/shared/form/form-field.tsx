import { ComponentProps, createContext } from "react";
import { useContextOrThrow, useMergedClassName } from "@/hooks";

type FormFieldContextType = null | {
  fieldName: string;
  isRequired: boolean;
};

const FormFieldContext = createContext<FormFieldContextType>(null);

FormFieldContext.displayName = "FormFieldContext";

export function useFormField() {
  return useContextOrThrow(FormFieldContext);
}

type FormFieldProps = {
  name: string;
  isRequired?: boolean;
} & ComponentProps<"fieldset">;

export function FormField(props: FormFieldProps) {
  const { children, name, isRequired, className, ...rest } = props;

  const classNameMarged = useMergedClassName("flex flex-col gap-2", className);

  return (
    <FormFieldContext.Provider
      value={{ fieldName: name, isRequired: Boolean(isRequired) }}
    >
      <fieldset className={classNameMarged} {...rest}>
        {children}
      </fieldset>
    </FormFieldContext.Provider>
  );
}
