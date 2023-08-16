import { ComponentProps, forwardRef } from "react";

export const ArrowRightIcon = forwardRef<SVGSVGElement, ComponentProps<"svg">>(
  (props, ref) => {
    return (
      <svg ref={ref} viewBox="0 0 20 9" className="w-5 h-5" {...props}>
        <path
          d="M15.25 0.75L19 4.5M19 4.5L15.25 8.25M19 4.5H1"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ArrowRightIcon.displayName = "ArrowRightIcon";
