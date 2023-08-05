import { ComponentProps, forwardRef } from "react";
import { useMergedClassName } from "@/hooks";
import { colorSchemeVariants } from "./variants";

type ButtonProps = ComponentProps<"button"> & {
  colorScheme?: keyof typeof colorSchemeVariants;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, colorScheme = "primary", ...rest }, ref) => {
    const classNameMerged = useMergedClassName(
      `relative flex justify-center items-center py-2 px-4 rounded font-medium
      transition-colors disabled:pointer-events-none`,
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
