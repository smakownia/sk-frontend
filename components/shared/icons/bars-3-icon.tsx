import { ComponentProps, forwardRef } from "react";

export const Bars3Icon = forwardRef<SVGSVGElement, ComponentProps<"svg">>(
  (props, ref) => {
    return (
      <svg
        fill="none"
        viewBox="3.25 6.25 17.5 11.5"
        strokeWidth="1.5"
        stroke="currentColor"
        ref={ref}
        className="w-5 h-5"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        ></path>
      </svg>
    );
  },
);

Bars3Icon.displayName = "Bars3Icon";
