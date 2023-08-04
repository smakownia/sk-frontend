import { ComponentProps, forwardRef } from "react";

export const MinusIcon = forwardRef<SVGSVGElement, ComponentProps<"svg">>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 13 3" fill="none" ref={ref} {...props}>
        <path
          d="M1.46797 1.59518L11.3931 1.59518"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

MinusIcon.displayName = "MinusIcon";
