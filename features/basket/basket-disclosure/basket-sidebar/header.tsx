import { Disclosure } from "@headlessui/react";
import { CloseIcon } from "@/components";

export function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 border-b border-neutral-50">
      <h2 className="text-2xl font-medium">Koszyk</h2>

      <Disclosure.Button as={CloseIcon} className="w-4 h-4 cursor-pointer" />
    </header>
  );
}
