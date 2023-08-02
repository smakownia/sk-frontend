import { Fragment, useMemo } from "react";
import { Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { SidebarProps } from "./types";

export function Content({ children, className, ...rest }: SidebarProps) {
  const classNameMerged = useMemo(
    () => twMerge("z-10 absolute top-0 right-0", className),
    [className],
  );

  return (
    <Transition.Child
      as={Fragment}
      enter="transition-transform duration-300 ease-in-out"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform duration-300 ease-in-out"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <aside className={classNameMerged} {...rest}>
        {children}
      </aside>
    </Transition.Child>
  );
}
