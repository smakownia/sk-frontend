import { Sidebar } from "@/components";
import { Header } from "./header";
import { ItemsList } from "./items-list";
import { Summary } from "./summary";

export function BasketSidebar() {
  return (
    <Sidebar.Content className="grid grid-rows-[auto_auto_1fr] w-[360px] h-full bg-white">
      <Header />
      <ItemsList />
      <Summary />
    </Sidebar.Content>
  );
}
