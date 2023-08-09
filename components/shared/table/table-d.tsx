import { ReactNode } from "react";

export function TableD({ children }: { children?: ReactNode }) {
  return <td className="px-6 py-3">{children}</td>;
}
