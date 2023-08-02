import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";

export function Background() {
  return (
    <Transition.Child
      as={Fragment}
      enter="transition-opacity duration-300 ease-in-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300 ease-in-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Disclosure.Button className="absolute inset-0 w-full h-full bg-[#0000004D]" />
    </Transition.Child>
  );
}
