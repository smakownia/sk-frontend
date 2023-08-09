import { ReactNode } from "react";

export function TableRoot({ children }: { children?: ReactNode }) {
  return (
    <div className="block overflow-x-auto rounded border border-neutral-50">
      <table className="w-full">{children}</table>
    </div>
  );
}
