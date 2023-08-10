import { ComponentProps, forwardRef } from "react";
import { NavLink } from "./nav-link";

type NavLinkMobileProps = ComponentProps<typeof NavLink>;

export const NavLinkMobile = forwardRef<HTMLAnchorElement, NavLinkMobileProps>(
  ({ children, ...rest }, ref) => {
    return (
      <NavLink
        ref={ref}
        className="py-2 pl-2 border-l-4"
        classNameActive="bg-primary-100"
        classNameNotActive="hover:bg-neutral-10"
        {...rest}
      >
        {children}
      </NavLink>
    );
  },
);

NavLinkMobile.displayName = "NavLinkMobile";
