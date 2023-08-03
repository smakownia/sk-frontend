import { Logo } from "@/components";
import { BasketDisclosure } from "@/features/basket";
import { NavLink } from "./nav-link";

export function Navbar() {
  return (
    <nav className="z-10 fixed top-0 left-0 flex items-center h-16 w-full border-b border-neutral-50 bg-white">
      <div className="container flex items-center h-full">
        <Logo />

        <ul className="flex h-full gap-8 ml-16">
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

        <ul className="ml-auto">
          <li>
            <BasketDisclosure />
          </li>
        </ul>
      </div>
    </nav>
  );
}
