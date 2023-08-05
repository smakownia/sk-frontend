import { ComponentProps, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useMergedClassName } from "@/hooks";

type PanelProps = ComponentProps<"aside">;

export function Panel({ children, className, ref, ...rest }: PanelProps) {
  const classNameMerged = useMergedClassName(
    "z-10 absolute top-0 right-0",
    className,
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
