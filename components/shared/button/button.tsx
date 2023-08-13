import { ComponentProps, forwardRef } from "react";
import { useMergedClassName } from "@/hooks";

type ButtonProps = ComponentProps<"button"> & {
  colorScheme?: keyof typeof colorSchemeVariants;
  size?: keyof typeof sizeVariants;
};

export const sizeVariants = {
  md: "btn-md",
  lg: "btn-lg",
};

export const colorSchemeVariants = {
  white: "btn-white",
  primary: "btn-primary",
  primaryLight: "btn-primary-light",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, colorScheme, size, ...rest }, ref) => {
    const classNameMerged = useMergedClassName(
      "btn",
      colorScheme && colorSchemeVariants[colorScheme],
      size && sizeVariants[size],
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
