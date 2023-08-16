import { ComponentProps, Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import {
  IdentityRole,
  useIdentity,
  useLoginFormModal,
  useLogoutMutation,
  useRegisterFormModal,
} from "@/features/identity";

type UserMenuItemProps = ComponentProps<typeof Menu.Item>;

export function UserMenuItem(props: UserMenuItemProps) {
  return (
    <Menu.Item
      as="button"
      className="px-4 py-2 text-left transition-colors hover:bg-neutral-50"
      {...props}
    />
  );
}

export function UserMenuItems() {
  const identity = useIdentity();
  const registerFormModal = useRegisterFormModal();
  const loginFormModal = useLoginFormModal();
  const { mutate: logout } = useLogoutMutation();

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
        {identity.role === IdentityRole.Admin && (
          <Menu.Item
            as={Link}
            href="/admin"
            className="px-4 py-2 text-left transition-colors hover:bg-neutral-50"
          >
            Panel Admina
          </Menu.Item>
        )}

        {!identity.isAuthenticated && (
          <>
            <UserMenuItem onClick={loginFormModal.open}>
              Zaloguj się
            </UserMenuItem>
            <UserMenuItem onClick={registerFormModal.open}>
              Zarejestruj się
            </UserMenuItem>
          </>
        )}

        {identity.isAuthenticated && (
          <UserMenuItem onClick={logout}>Wyloguj się</UserMenuItem>
        )}
      </Menu.Items>
    </Transition>
  );
}
