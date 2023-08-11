import { ComponentProps, forwardRef } from "react";

type LabelProps = ComponentProps<"label"> & { isRequired?: boolean };

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, isRequired, ...rest }, ref) => {
    return (
      <label ref={ref} className="font-medium" {...rest}>
        {children}
        {isRequired && <span className="text-red-500"> *</span>}
      </label>
    );
  },
);

Label.displayName = "Label";
