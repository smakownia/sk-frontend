import { ComponentProps, forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    const classNameMerged = useMemo(
      () =>
        twMerge(
          "relative py-2 px-4 rounded font-medium text-white bg-primary-500 hover:bg-primary-600 transition-colors",
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
