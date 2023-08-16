import { ComponentProps, forwardRef } from "react";
import { useMergedClassName } from "@/hooks";

type ButtonProps = ComponentProps<"button"> & {
  colorScheme?: keyof typeof colorSchemeVariants;
  size?: keyof typeof sizeVariants;
  isLoading?: boolean;
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

function ButtonSpiner() {
  return (
    <div
      className={`w-4 h-4 rounded-full border-2 border-current
                  border-b-transparent animate-spin`}
    />
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, colorScheme, size, isLoading, ...rest }, ref) => {
    const classNameMerged = useMergedClassName(
      "btn",
      colorScheme && colorSchemeVariants[colorScheme],
      size && sizeVariants[size],
      className,
    );

    return (
      <button
        ref={ref}
        className={classNameMerged}
        disabled={isLoading}
        {...rest}
      >
        {isLoading && <ButtonSpiner />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
