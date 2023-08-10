import { ComponentProps, forwardRef } from "react";
import { useMergedClassName } from "@/hooks";

type ButtonProps = ComponentProps<"button"> & {
  colorScheme?: keyof typeof colorSchemeVariants;
};

export const colorSchemeVariants = {
  white: "btn-white",
  primary: "btn-primary",
  primaryLight: "btn-primary-light",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, colorScheme = "primary", ...rest }, ref) => {
    const classNameMerged = useMergedClassName(
      "btn",
      colorSchemeVariants[colorScheme],
      className,
    );

    return (
      <button ref={ref} className={classNameMerged} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
