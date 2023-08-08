import { ComponentProps, forwardRef } from "react";
import { useMergedClassName } from "@/hooks";

type InputProps = { isInvalid?: boolean } & ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, isInvalid, ...rest }, ref) => {
    const classNameMarged = useMergedClassName(
      `h-10 px-4 rounded border border-neutral-100 transition-colors
       focus:outline-none focus:border-primary-500`,
      isInvalid && "border-red-500",
      className,
    );

    return <input ref={ref} className={classNameMarged} {...rest} />;
  },
);

Input.displayName = "Input";
