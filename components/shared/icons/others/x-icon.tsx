import { ComponentProps, forwardRef } from "react";

export const XIcon = forwardRef<SVGSVGElement, ComponentProps<"svg">>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        aria-hidden="true"
        viewBox="0 0 14 14"
        fill="none"
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

XIcon.displayName = "CloseIcon";
