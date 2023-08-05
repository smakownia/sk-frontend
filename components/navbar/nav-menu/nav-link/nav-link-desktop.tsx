import { ComponentProps, forwardRef } from "react";
import { NavLink } from "./nav-link";

type NavLinkDesktopProps = ComponentProps<typeof NavLink>;

export const NavLinkDesktop = forwardRef<
  HTMLAnchorElement,
  NavLinkDesktopProps
>(({ children, ...rest }, ref) => {
  return (
    <NavLink
      ref={ref}
      className="translate-y-px flex items-center h-full border-b-[2px]"
      {...rest}
    >
      {children}
    </NavLink>
  );
});
