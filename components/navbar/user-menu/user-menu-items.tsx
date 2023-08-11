import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

export function UserMenuItems() {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        className={`absolute right-0 origin-top-right flex flex-col w-44 mt-2
                    rounded text-sm shadow-sm border border-neutral-50 
                    bg-white`}
      >
        <Menu.Item
          as={Link}
          href="/admin"
          className="px-4 py-2 text-left transition-colors hover:bg-neutral-50"
        >
          Strona Admina
        </Menu.Item>
        <Menu.Item
          as="button"
          className="px-4 py-2 text-left transition-colors hover:bg-neutral-50"
        >
          Wyloguj się
        </Menu.Item>
      </Menu.Items>
    </Transition>
  );
}
