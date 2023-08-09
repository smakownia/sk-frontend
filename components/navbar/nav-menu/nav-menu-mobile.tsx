import { Menu } from "@headlessui/react";
import { Bars3Icon } from "@/components";
import { Menu as NavMenu } from "../types";
import { NavButton } from "../nav-button";
import { NavLinkMobile } from "./nav-link";

export function NavMenuMobileButton() {
  return (
    <Menu.Button as={NavButton}>
      <Bars3Icon className="w-5 h-5" />
    </Menu.Button>
  );
}

type NavMenuMobileProps = {
  menu: NavMenu;
};

export function NavMenuMobile({ menu }: NavMenuMobileProps) {
  return (
    <Menu.Items
      as="ul"
      className="md:hidden absolute top-full left-0 flex flex-col w-full border-b border-neutral-50 bg-white"
    >
      {menu.map(({ name, href }) => (
        <li key={name}>
          <Menu.Item as={NavLinkMobile} href={href}>
            {name}
          </Menu.Item>
        </li>
      ))}
    </Menu.Items>
  );
}
