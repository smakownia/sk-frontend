import { ComponentProps, forwardRef } from "react";

export const CloseIcon = forwardRef<SVGSVGElement, ComponentProps<"svg">>(
  (props, ref) => {
    return (
      <svg
        viewBox="0 0 14 14"
        fill="none"
        ref={ref}
        className="w-5 h-5"
        {...props}
      >
        <path d="M1 13L13 1ZM1 1L13 13Z" fill="currentColor" />
        <path
          d="M1 13L13 1M1 1L13 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CloseIcon.displayName = "CloseIcon";
