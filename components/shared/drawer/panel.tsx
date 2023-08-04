import { ComponentProps, Fragment, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

type PanelProps = ComponentProps<"aside">;

export function Panel({ children, className, ...rest }: PanelProps) {
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
      <Dialog.Panel className={classNameMerged} {...rest}>
        {children}
      </Dialog.Panel>
    </Transition.Child>
  );
}
