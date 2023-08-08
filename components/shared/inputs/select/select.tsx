import { ComponentProps, forwardRef } from "react";
import { useMergedClassName } from "@/hooks";

type SelectProps = ComponentProps<"select">;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className, ...rest }, ref) => {
    const classNameMarged = useMergedClassName(
      `h-10 px-4 rounded border border-neutral-100 transition-colors
       focus:outline-none focus:border-primary-500`,
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
