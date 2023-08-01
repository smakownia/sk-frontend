import { Logo } from "@/components";
import { BasketDisclosure } from "@/features/basket";

export function Navbar() {
  return (
    <nav className="container flex justify-between items-center py-8">
      <Logo />
      <ul>
        <li>
          <BasketDisclosure />
        </li>
      </ul>
    </nav>
  );
}
