import { Button } from "@/components";

export function Summary() {
  return (
    <footer className="flex">
      <div className="self-end w-full py-4 px-8 border-t border-neutral-50">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg">Wartosć</h3>
          <span className="text-lg font-medium">153,95zł</span>
        </div>
        <Button className="w-full">Dostawa i Płatność</Button>
      </div>
    </footer>
  );
}
