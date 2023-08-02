import { Sidebar as SidebarComponent } from "./sidebar";
import { Disclosure } from "@headlessui/react";

export const Sidebar = Object.assign(Disclosure, {
  Content: SidebarComponent,
  Button: Disclosure.Button,
});
