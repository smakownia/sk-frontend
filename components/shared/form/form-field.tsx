import { ComponentProps, ReactNode, createContext } from "react";
import { useContextOrThrow, useMergedClassName } from "@/hooks";

const FormFieldNameContext = createContext<null | string>(null);

export function useFormFieldName() {
  return useContextOrThrow(FormFieldNameContext);
}

type FormFieldProps = {
  name: string;
} & ComponentProps<"fieldset">;

export function FormField(props: FormFieldProps) {
  const { children, name, className, ...rest } = props;

  const classNameMarged = useMergedClassName("flex flex-col gap-2", className);

  return (
    <FormFieldNameContext.Provider value={name}>
      <fieldset className={classNameMarged} {...rest}>
        {children}
      </fieldset>
    </FormFieldNameContext.Provider>
  );
}
