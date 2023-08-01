"use client";

import { Button, CloseIcon } from "@/app/components";
import { useBasket } from "@/app/features/basket";
import { BasketSidebarItem } from "./basket-sidebar-item";

export function BasketSidebar() {
  const basket = useBasket();

  return (
    <div className="z-10 absolute inset-0 w-full h-full">
      <Button className="absolute top-0 left-0 w-full h-full bg-[#0000004D]" />

      <aside className="z-10 absolute top-0 right-0 grid grid-rows-[auto_auto_1fr] w-[360px] h-full bg-white">
        <header className="flex justify-between items-center py-4 px-8 border-b border-neutral-50">
          <h2 className="text-2xl font-medium">Koszyk</h2>
          <CloseIcon className="w-4 h-4 cursor-pointer" />
        </header>

        <main className="overflow-y-auto thin-scrollbar py-4 px-8">
          <ul className="divide-y divide-neutral-50">
            {basket.value?.items.map((item) => (
              <BasketSidebarItem key={item.id} {...item} />
            ))}
          </ul>
        </main>

        <footer className="flex">
          <div className="self-end w-full py-4 px-8 border-t border-neutral-50">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg">Wartosć</h3>
              <span className="text-lg font-medium">153,95zł</span>
            </div>
            <Button className="w-full">Dostawa i Płatność</Button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
