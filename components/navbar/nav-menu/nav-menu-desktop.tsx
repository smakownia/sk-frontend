import { Menu } from "../types";
import { NavLinkDesktop } from "./nav-link";

type NavMenuDesktopProps = { menu: Menu };

export function NavMenuDesktop({ menu }: NavMenuDesktopProps) {
  return (
    <ul className="hidden md:flex h-full gap-8 ml-16">
      {menu.map(({ name, href }) => (
        <li>
          <NavLinkDesktop href={href}>{name}</NavLinkDesktop>
        </li>
      ))}
    </ul>
  );
}
