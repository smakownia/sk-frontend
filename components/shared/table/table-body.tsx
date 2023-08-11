import { ComponentProps, forwardRef } from "react";

type TableBodyProps = ComponentProps<"tbody">;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    return (
      <tbody ref={ref} className="divide-y divide-neutral-50" {...props} />
    );
  },
);

TableBody.displayName = "Table.Body";
