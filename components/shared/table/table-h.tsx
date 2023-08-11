import { ComponentProps, forwardRef } from "react";

type TableHProps = ComponentProps<"th">;

export const TableH = forwardRef<HTMLTableCellElement, TableHProps>(
  (props, ref) => {
    return <th ref={ref} className="px-6 py-3 font-medium" {...props} />;
  },
);

TableH.displayName = "Table.H";
