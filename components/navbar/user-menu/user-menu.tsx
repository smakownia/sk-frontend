import { Menu } from "@headlessui/react";
import { Button, UserIcon } from "@/components";
import { UserMenuItems } from "./user-menu-items";

export function UserMenu() {
  return (
    <Menu as="div" className="relative">
      <UserMenuButton />
      <UserMenuItems />
    </Menu>
  );
}

function UserMenuButton() {
  return (
    <Menu.Button
      as={Button}
      className="px-2"
      colorScheme="primaryLight"
      aria-label="Menu użytkownika"
    >
      <UserIcon />
    </Menu.Button>
  );
}
