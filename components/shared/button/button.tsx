import { ComponentProps, forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
  colorScheme?: keyof typeof colorSchemeVariants;
};

const colorSchemeVariants = {
  white: "text-black bg-white hover:bg-neutral-50",
  primary: "text-white bg-primary-500 hover:bg-primary-600",
  primaryLight: "text-primary-500 bg-primary-100 hover:bg-primary-200",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, colorScheme = "primary", ...rest }, ref) => {
    const classNameMerged = useMemo(
      () =>
        twMerge(
          `relative flex justify-center items-center py-2 px-4 rounded font-medium
           transition-colors disabled:pointer-events-none`,
          colorSchemeVariants[colorScheme],
          className,
        ),
      [className],
    );

    return (
      <button ref={ref} className={classNameMerged} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
