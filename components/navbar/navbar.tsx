import { BasketIcon, Button, Logo } from "@/components";
import { NavLink } from "./nav-link";
import { BasketButton } from "./basket-button";

export function Navbar() {
  return (
    <nav className="z-10 fixed top-0 left-0 flex items-center h-16 w-full border-b border-neutral-50 bg-white">
      <div className="container flex items-center h-full">
        <Button className="md:hidden">x</Button>

        <Logo className="ml-4 md:m-0" />

        <ul className="hidden md:flex h-full gap-8 ml-16">
          <li>
            <NavLink href="/">Strona Główna</NavLink>
          </li>
          <li>
            <NavLink href="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink href="/kontakt">Kontakt</NavLink>
          </li>
        </ul>

        <ul className="md:block ml-auto">
          <li>
            <BasketButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
