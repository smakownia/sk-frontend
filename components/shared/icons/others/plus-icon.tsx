import { ComponentProps, forwardRef } from "react";

export const PlusIcon = forwardRef<SVGSVGElement, ComponentProps<"svg">>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        aria-hidden="true"
        viewBox="0 0 12 13"
        fill="none"
        className="w-5 h-5"
        {...props}
      >
        <path
          d="M1.12373 6.59518L11.0488 6.59518M6.08628 1.59518L6.08628 11.5952"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

PlusIcon.displayName = "PlusIcon";
