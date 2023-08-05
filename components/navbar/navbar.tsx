import { Logo } from "@/components";
import { Menu } from "./types";
import { BasketButton } from "./basket-button";
import { NavMenuDesktop, NavMenuMobile } from "./nav-menu";

const menu: Menu = [
  { name: "Strona Główna", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  return (
    <nav className="z-10 fixed top-0 left-0 flex items-center h-16 w-full border-b border-neutral-50 bg-white">
      <div className="container flex items-center h-full">
        <Logo />

        <NavMenuDesktop menu={menu} />

        <NavMenuMobile>
          <ul className="flex gap-4 ml-auto">
            <li>
              <BasketButton />
            </li>
            <li>
              <NavMenuMobile.Button />
            </li>
          </ul>

          <NavMenuMobile.Panel menu={menu} />
        </NavMenuMobile>
      </div>
    </nav>
  );
}
