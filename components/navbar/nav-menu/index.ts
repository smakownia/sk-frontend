import { Menu } from "@headlessui/react";
import {
  NavMenuMobile as NavMenuMobileComponent,
  NavMenuMobileButton,
} from "./nav-menu-mobile";

export const NavMenuMobile = Object.assign(Menu, {
  Panel: NavMenuMobileComponent,
  Button: NavMenuMobileButton,
});

export * from "./nav-menu-desktop";
