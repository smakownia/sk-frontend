import { ReactNode } from "react";

export function TableBody({ children }: { children?: ReactNode }) {
  return <tbody className="divide-y divide-neutral-50">{children}</tbody>;
}
