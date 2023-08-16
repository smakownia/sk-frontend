import { useMergedClassName } from "@/hooks";
import { ComponentProps, forwardRef } from "react";

export const Badge = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
  ({ children, className, ...rest }, ref) => {
    const classNameMerged = useMergedClassName(
      `flex items-center gap-4 w-fit px-4 py-2 rounded-full border border-neutral-100 bg-white`,
      className,
    );

    return (
      <span ref={ref} className={classNameMerged} {...rest}>
        <div className="w-2 h-2 rounded-full bg-primary-500" />
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";
