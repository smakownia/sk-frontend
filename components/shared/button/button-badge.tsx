import { ComponentProps, forwardRef } from "react";

export const ButtonBadge = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute -top-1 -right-1 p-1 rounded-full bg-primary-500"
        {...rest}
      >
        <span className="flex justify-center items-center min-w-[8px] h-[8px] text-xs text-white">
          {children}
        </span>
      </div>
    );
  },
);

ButtonBadge.displayName = "ButtonBadge";
