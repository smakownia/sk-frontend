import { ComponentProps, forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    const classNameMerged = useMemo(
      () =>
        twMerge(
          `relative flex justify-center items-center py-2 px-4 rounded font-medium
           text-white bg-primary-500 transition-colors hover:bg-primary-600 
           disabled:pointer-events-none`,
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
