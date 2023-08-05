import { ComponentProps, forwardRef } from "react";
import { useMergedClassName } from "@/hooks";
import { Button } from "@/components";

type NavButtonProps = ComponentProps<typeof Button>;

export const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ children, className, ...rest }, ref) => {
    const classNameMerged = useMergedClassName("px-2", className);

    return (
      <Button
        ref={ref}
        className={classNameMerged}
        colorScheme="primaryLight"
        {...rest}
      >
        {children}
      </Button>
    );
  },
);
