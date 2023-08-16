import { ComponentProps, forwardRef } from "react";

type FormFieldsProps = ComponentProps<"div">;

export const FormFields = forwardRef<HTMLDivElement, FormFieldsProps>(
  (props, ref) => {
    return <div ref={ref} className="flex flex-col gap-4" {...props} />;
  },
);

FormFields.displayName = "Form.Fields";
