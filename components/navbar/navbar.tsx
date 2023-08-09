import Link from "next/link";
import { Menu } from "@headlessui/react";
import { Logo } from "@/components";
import { BasketButton } from "./basket-button";
import { NavMenuDesktop, NavMenuMobile, NavMenuMobileButton } from "./nav-menu";

const menu = [
  { name: "Strona Główna", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  return (
    <nav className="z-10 fixed top-0 left-0 flex items-center h-16 w-full border-b border-neutral-50 bg-white">
      <div className="container flex items-center h-full">
        <Link href="/">
          <Logo />
        </Link>

        <NavMenuDesktop menu={menu} />

        <Menu>
          <ul className="flex gap-4 ml-auto">
            <li>
              <NavMenuMobileButton />
            </li>
            <li>
              <BasketButton />
            </li>
          </ul>

          <NavMenuMobile menu={menu} />
        </Menu>
      </div>
    </nav>
  );
}
