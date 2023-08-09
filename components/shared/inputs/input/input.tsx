import { ComponentProps, forwardRef } from "react";
import { useMergedClassName } from "@/hooks";

type InputProps = { isInvalid?: boolean } & ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, isInvalid, ...rest }, ref) => {
    const classNameMarged = useMergedClassName(
      "input",
      isInvalid && "input-invalid",
      className,
    );

    return <input ref={ref} className={classNameMarged} {...rest} />;
  },
);

Input.displayName = "Input";
