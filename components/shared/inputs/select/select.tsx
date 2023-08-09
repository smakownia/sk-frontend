import { ComponentProps, forwardRef } from "react";
import { useMergedClassName } from "@/hooks";

type SelectProps = { isInvalid?: boolean } & ComponentProps<"select">;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, isInvalid, className, ...rest }, ref) => {
    const classNameMarged = useMergedClassName(
      "input",
      isInvalid && "input-invalid",
      className,
    );

    return (
      <select ref={ref} className={classNameMarged} {...rest}>
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";
