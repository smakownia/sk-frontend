import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { SidebarProps } from "./types";
import { Background } from "./background";
import { Content } from "./content";

export function Sidebar(props: SidebarProps) {
  return (
    <Transition.Root as={Fragment}>
      <Disclosure.Panel className="z-10 fixed inset-0 w-full h-full">
        <Background />
        <Content {...props} />
      </Disclosure.Panel>
    </Transition.Root>
  );
}
