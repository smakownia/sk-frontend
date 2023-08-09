import { ReactNode } from "react";

export function TableHead({ children }: { children?: ReactNode }) {
  return (
    <thead className="text-left border-b border-neutral-50 bg-neutral-10">
      {children}
    </thead>
  );
}
