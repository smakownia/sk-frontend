import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { useFormFieldName } from "./form-field";
import { useMergedClassName } from "@/hooks";

type FormErrorMessageProps = ComponentProps<"span">;

export function FormErrorMessage(props: FormErrorMessageProps) {
  const { children, className, ...rest } = props;

  const form = useFormContext();
  const fieldName = useFormFieldName();
  const classNameMarged = useMergedClassName("text-sm text-red-500", className);

  const error = form.formState.errors[fieldName];

  if (!error) {
    return null;
  }

  return (
    <span className={classNameMarged} {...rest}>
      {error.message ? error.message?.toString() : "Error"}
    </span>
  );
}
