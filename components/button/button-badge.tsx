import { forwardRef, ReactNode } from "react";

export const ButtonBadge = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute -top-1 -right-1 p-1 rounded-full bg-primary-500"
      >
        <span className="flex justify-center items-center min-w-[8px] h-[8px] text-xs">
          {children}
        </span>
      </div>
    );
  },
);

ButtonBadge.displayName = "ButtonBadge";
