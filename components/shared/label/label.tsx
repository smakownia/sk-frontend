import { useMergedClassName } from "@/hooks";
import { ComponentProps, forwardRef } from "react";

type LabelProps = ComponentProps<"label">;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...rest }, ref) => {
    const classNameMarged = useMergedClassName(
      "font-medium",
      className,
    );

    return (
      <label ref={ref} className={classNameMarged} {...rest}>
        {children}
      </label>
    );
  },
);

Label.displayName = "Label";
