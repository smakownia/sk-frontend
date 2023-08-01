import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Header } from "./header";
import { ItemsList } from "./items-list";
import { Summary } from "./summary";

export function BasketSidebar() {
  return (
    <Transition.Root as={Fragment}>
      <Disclosure.Panel className="z-10 absolute inset-0 w-full h-full">
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

        <Transition.Child
          as={Fragment}
          enter="transition-transform duration-300 ease-in-out"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-300 ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <aside className="z-10 absolute top-0 right-0 grid grid-rows-[auto_auto_1fr] w-[360px] h-full bg-white">
            <Header />
            <ItemsList />
            <Summary />
          </aside>
        </Transition.Child>
      </Disclosure.Panel>
    </Transition.Root>
  );
}
