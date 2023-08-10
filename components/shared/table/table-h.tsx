import { ReactNode } from "react";

export function TableH({ children }: { children?: ReactNode }) {
  return <th className="px-6 py-3 font-medium">{children}</th>;
}
